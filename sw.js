// Eclipse service worker: keeps the game's files on the device.
//  - files with a content hash in the URL (?v=…): cache first (they never change under the same URL);
//    older copies of the same file are dropped
//  - the page itself: network first (with a short timeout), the cached copy if the network is slow or down
//  - videos (range requests) and anything from other sites: not touched
const CACHE = 'eclipse-1';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const u = new URL(req.url);
  if (u.origin !== location.origin || req.headers.has('range') || u.pathname.endsWith('.mp4')) return;
  const versioned = u.searchParams.has('v');
  if (versioned) e.respondWith(cacheFirst(req, u));
  else if (req.mode === 'navigate' || u.pathname.endsWith('/') || u.pathname.endsWith('.html')) e.respondWith(networkFirst(req));
});

async function cacheFirst(req, u) {
  const c = await caches.open(CACHE);
  const hit = await c.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok && res.status === 200) {
    c.put(req, res.clone());
    // drop older versions of the same file
    for (const k of await c.keys()) { const ku = new URL(k.url); if (ku.pathname === u.pathname && ku.search !== u.search) c.delete(k); }
  }
  return res;
}

async function networkFirst(req) {
  const c = await caches.open(CACHE);
  try {
    const res = await Promise.race([fetch(req), new Promise((_, rej) => setTimeout(() => rej(new Error('slow')), 6000))]);
    if (res.ok) c.put(req, res.clone());
    return res;
  } catch (err) {
    const hit = await c.match(req, { ignoreSearch: true });
    if (hit) return hit;
    return fetch(req);
  }
}
