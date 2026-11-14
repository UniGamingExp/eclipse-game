// Locked memories: photos and captions stored encrypted in memories.enc (AES-256-GCM, key from the
// shared password via PBKDF2). Nothing personal is readable on the public site without the password.
import { store } from './util.js';

const normalize = (p) => p.normalize('NFKC').trim().toLowerCase().replace(/\s+/g, '');
let cache = null;

async function fetchBundle() {
  const res = await fetch(`memories.enc?v=${__BUILD__}`);
  if (!res.ok) throw new Error('missing');
  return new Uint8Array(await res.arrayBuffer());
}

/** Returns the list of memories, or throws 'wrong-password' / 'unsupported' / 'missing'. */
export async function unlockMemories(password, remember = false) {
  if (cache) return cache;
  if (!crypto?.subtle) throw new Error('unsupported');
  const buf = await fetchBundle();
  if (new TextDecoder().decode(buf.slice(0, 4)) !== 'ECLM') throw new Error('missing');
  const iterations = new DataView(buf.buffer, buf.byteOffset).getUint32(5);
  const salt = buf.slice(9, 25), iv = buf.slice(25, 37), ct = buf.slice(37);
  const km = await crypto.subtle.importKey('raw', new TextEncoder().encode(normalize(password)), 'PBKDF2', false, ['deriveKey']);
  const key = await crypto.subtle.deriveKey({ name: 'PBKDF2', salt, iterations, hash: 'SHA-256' }, km, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
  let plain;
  try { plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ct); } catch { throw new Error('wrong-password'); }
  const data = JSON.parse(new TextDecoder().decode(plain));
  cache = data.items.map((it) => {
    const bin = atob(it.data), bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return { ...it, data: undefined, url: URL.createObjectURL(new Blob([bytes], { type: it.mime })) };
  });
  if (remember) store.set('memPw', password);   // only if asked: the password then stays in this browser
  return cache;
}

export const savedPassword = () => store.get('memPw', '');
export const forgetPassword = () => store.set('memPw', '');
/** Lock again: throw away the opened photos and the remembered password on this device. */
export function lockMemories() {
  for (const m of cache || []) URL.revokeObjectURL(m.url);
  cache = null;
  forgetPassword();
}
