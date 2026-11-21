// Asset URLs with a per-file content hash (filled in by scripts/build.mjs), so a new build of the game doesn't
// make anyone download the models, music and videos again unless that file really changed.
/* global __ASSETS__ */
const MAP = typeof __ASSETS__ !== 'undefined' ? __ASSETS__ : {};
const seen = new Map();   // path → [loaded, total]

/** the URL to fetch `path` (relative to the site root, e.g. 'assets/nature.glb') */
export const av = (path) => `${path}?v=${MAP[path]?.[0] || (typeof __BUILD__ !== 'undefined' ? __BUILD__ : '1')}`;
/** the file's size in bytes, if known */
export const asize = (path) => MAP[path]?.[1] || 0;
/** an onProgress callback for a loader that records how much of `path` has arrived */
export const track = (path, extra) => (e) => {
  if (e && e.loaded != null) seen.set(path, [e.loaded, e.total || asize(path)]);
  extra?.(e);
};
/** bytes [loaded, total] over the given paths */
export function bytes(paths) {
  let a = 0, b = 0;
  for (const p of paths) { const s = seen.get(p); const t = asize(p) || s?.[1] || 0; b += t; a += Math.min(t || Infinity, s?.[0] || 0); }
  return [a, b];
}
export const done = (path) => seen.set(path, [asize(path), asize(path)]);
