export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
/** Frame-rate independent smoothing: approach target with the given rate (1/s). */
export const damp = (a, b, rate, dt) => lerp(a, b, 1 - Math.exp(-rate * dt));
export const smoother = (t) => t * t * t * (t * (t * 6 - 15) + 10);

export function angleDiff(a, b) {
  let d = (b - a) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return d;
}
export const dampAngle = (a, b, rate, dt) => a + angleDiff(a, b) * (1 - Math.exp(-rate * dt));

export const round3 = (v) => Math.round(v * 1000) / 1000;

/** Turn the secret word (any language) into a room id like "r1k3x9…". */
export function roomIdFromWord(word) {
  const s = (word || '').normalize('NFKC').trim().toLowerCase().replace(/\s+/g, ' ');
  const bytes = new TextEncoder().encode('eclipse:' + s);
  let h1 = 0x811c9dc5, h2 = 0x9e3779b9;
  for (const b of bytes) {
    h1 = Math.imul(h1 ^ b, 16777619) >>> 0;
    h2 = Math.imul(h2 ^ b, 2246822519) >>> 0;
    h2 = ((h2 << 13) | (h2 >>> 19)) >>> 0;
  }
  return 'r' + h1.toString(36) + h2.toString(36);
}

export const store = {
  get(k, d = null) { try { const v = localStorage.getItem('eclipse.' + k); return v === null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem('eclipse.' + k, JSON.stringify(v)); } catch { /* private mode */ } },
};

export const params = new URLSearchParams(location.search);
export const isTouch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
export const isIOS = /iP(hone|ad|od)/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

export const ROLE_EMOJI = { sun: '☀️', moon: '🌙' };
export const ROLE_NAME = { sun: 'Sun', moon: 'Moon' };
export const otherRole = (r) => (r === 'sun' ? 'moon' : 'sun');
