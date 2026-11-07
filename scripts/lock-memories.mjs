// Encrypts the private memories bundle (photos + captions) into memories.enc for the public site.
// Only the encrypted file is ever committed; the JSON and the password stay private.
//
// Usage: MEMORIES_PASSWORD='…' node scripts/lock-memories.mjs /path/to/memories.json
// The JSON looks like: { v: 1, items: [{ id, title, caption, mime, w, h, data: <base64> }] }
//
// File format (memories.enc): "ECLM" | version (1 byte) | PBKDF2 iterations (uint32 BE) | salt (16) | iv (12) | AES-256-GCM ciphertext
import { webcrypto as wc } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';

const ITERATIONS = 600000;
export const normalizePassword = (p) => p.normalize('NFKC').trim().toLowerCase().replace(/\s+/g, '');

const [, , input] = process.argv;
const password = process.env.MEMORIES_PASSWORD;
if (!input || !password) {
  console.error("Usage: MEMORIES_PASSWORD='…' node scripts/lock-memories.mjs memories.json");
  process.exit(1);
}

const plain = readFileSync(input);
JSON.parse(plain.toString('utf8')); // sanity check
const salt = wc.getRandomValues(new Uint8Array(16));
const iv = wc.getRandomValues(new Uint8Array(12));
const km = await wc.subtle.importKey('raw', new TextEncoder().encode(normalizePassword(password)), 'PBKDF2', false, ['deriveKey']);
const key = await wc.subtle.deriveKey({ name: 'PBKDF2', salt, iterations: ITERATIONS, hash: 'SHA-256' }, km, { name: 'AES-GCM', length: 256 }, false, ['encrypt']);
const ct = new Uint8Array(await wc.subtle.encrypt({ name: 'AES-GCM', iv }, key, plain));

const head = new Uint8Array(4 + 1 + 4 + 16 + 12);
head.set(new TextEncoder().encode('ECLM'), 0);
head[4] = 1;
new DataView(head.buffer).setUint32(5, ITERATIONS);
head.set(salt, 9);
head.set(iv, 25);
const out = new Uint8Array(head.length + ct.length);
out.set(head, 0);
out.set(ct, head.length);
writeFileSync('memories.enc', out);
console.log(`memories.enc written (${(out.length / 1024).toFixed(0)} KB)`);
