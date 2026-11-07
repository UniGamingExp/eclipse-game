// Chapter 1 abilities: speech bubbles.
//  · Sun's MEGAPHONE: shouting makes a solid speech bubble in front of him. It pops after a few seconds…
//  · …unless Moon PINS it (Reply pin): pinned bubbles stay (max 3; pinning a 4th frees the oldest).
//  · Moon can POP a pinned bubble: whoever stands on it is launched high into the air.
//  · The crowd's chatter bubbles float up and pop; Moon can pin those too.
// Everything is driven by the shared server clock + three events (bub / pin / pop), so both phones agree.
import * as THREE from 'three';
import { add } from './common.js';

const LIFE = 3.6;          // seconds an unpinned bubble lasts
const MAX_PINS = 3;
const R = 0.95, H = 0.46;  // bubble radius / thickness (collider)
export const POP_LAUNCH = 21;
export const PIN_RANGE = 10;

const WORDS = {
  sun: ['HEY!', 'LISTEN!', 'yalla!', 'OK OK', 'trust me', 'hmm?', 'WAIT', 'habibti'],
  npc: ['...', '!!', '??', 'lol', '+1', 'no way', 'agreed', 'wrong!', 'source?', 'gg', '😂', 'brb'],
};

function wordTexture(text, kind) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = 256;
  const g = cv.getContext('2d');
  g.fillStyle = kind === 'sun' ? '#fff4e6' : '#ffffff';
  g.beginPath(); g.arc(128, 128, 126, 0, Math.PI * 2); g.fill();
  g.fillStyle = kind === 'sun' ? '#c4452d' : '#5a4e70';
  g.textAlign = 'center'; g.textBaseline = 'middle';
  const size = text.length > 6 ? 46 : 64;
  g.font = `900 ${size}px ui-rounded, "SF Pro Rounded", system-ui, sans-serif`;
  g.fillText(text, 128, 132, 220);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

// a puffy squashed sphere whose top sits exactly at the collider top
const geoBody = new THREE.SphereGeometry(R * 1.04, 36, 18).scale(1, 0.4, 1).translate(0, -R * 0.4, 0);
const geoTop = new THREE.CircleGeometry(R * 0.62, 32).rotateX(-Math.PI / 2);
const geoRim = new THREE.TorusGeometry(R * 1.02, 0.07, 8, 40).rotateX(Math.PI / 2);
const geoTail = new THREE.ConeGeometry(0.22, 0.5, 10).rotateZ(Math.PI);
const geoPin = new THREE.SphereGeometry(0.17, 14, 10);
const geoNeedle = new THREE.CylinderGeometry(0.025, 0.025, 0.3, 6);
const geoRing = new THREE.TorusGeometry(R + 0.12, 0.05, 8, 40).rotateX(Math.PI / 2);
const matSun = new THREE.MeshStandardMaterial({ color: 0xfff6ec, roughness: 0.4, emissive: 0xffc08a, emissiveIntensity: 0.55 });
const matNpc = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.45, emissive: 0xe8e4ff, emissiveIntensity: 0.5, transparent: true, opacity: 0.94 });
const matPinned = new THREE.MeshStandardMaterial({ color: 0xf1e8ff, roughness: 0.35, emissive: 0xb48cff, emissiveIntensity: 0.7 });
const rimMats = { sun: new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 0.75, 0.35) }), npc: new THREE.MeshBasicMaterial({ color: 0xc9c3e0 }), pinned: new THREE.MeshBasicMaterial({ color: new THREE.Color(1.1, 0.6, 1.8) }) };
const matPin = new THREE.MeshStandardMaterial({ color: 0xa25cff, roughness: 0.3, emissive: 0x7a3cff, emissiveIntensity: 0.6 });
const matRing = new THREE.MeshBasicMaterial({ color: 0xc9a6ff, transparent: true, opacity: 0.85 });
const texCache = new Map();
const tex = (w, kind) => { const k = kind + w; if (!texCache.has(k)) texCache.set(k, wordTexture(w, kind)); return texCache.get(k); };

export function createBubbles(parent, colliders, { pool = 14 } = {}) {
  const slots = [];
  for (let i = 0; i < pool; i++) {
    const g = new THREE.Group();
    g.visible = false;
    parent.add(g);
    const body = add(g, geoBody, matSun, 0, 0, 0);
    const rim = add(g, geoRim, rimMats.sun, 0, -R * 0.4, 0, { cast: false, receive: false });
    const top = add(g, geoTop, new THREE.MeshBasicMaterial({ transparent: true }), 0, 0.01, 0, { cast: false, receive: false });
    const tail = add(g, geoTail, matSun, 0.5, -R * 0.75, 0.3, { receive: false });
    const pin = new THREE.Group();
    pin.position.set(0.5, 0.18, -0.3);
    g.add(pin);
    add(pin, geoPin, matPin, 0, 0.12, 0, { receive: false });
    add(pin, geoNeedle, matPin, 0, -0.06, 0, { receive: false });
    const ring = add(g, geoRing, matRing, 0, -H / 2, 0, { cast: false, receive: false });
    ring.visible = false;
    g.userData.noHide = true;
    const col = { type: 'cyl', x: 0, z: 0, r: R, top: 0, bottom: -H, disabled: true, dx: 0, dy: 0, dz: 0, noGrab: false, bubble: true, surface: 'carpet' };
    colliders.push(col);
    slots.push({ i, g, body, rim, top, tail, pin, ring, col, active: false, id: null, kind: 'sun', born: 0, pinned: false, pinSeq: 0, path: null, pos: new THREE.Vector3(), scale: 0, popT: 0 });
  }
  let pinSeq = 0;
  const gone = new Set();     // ids that were popped / expired (never respawn them)

  function free(s) { s.active = false; s.g.visible = false; s.col.disabled = true; s.ring.visible = false; }
  function look(s) {
    const pinned = s.pinned;
    const m = pinned ? matPinned : s.kind === 'sun' ? matSun : matNpc;
    s.body.material = m; s.tail.material = m;
    s.rim.material = pinned ? rimMats.pinned : rimMats[s.kind];
    s.pin.visible = pinned;
  }

  const api = {
    slots,
    LIFE,
    get(id) { return slots.find((s) => s.active && s.id === id) || null; },
    /** kind 'sun' (shouted) or 'npc' (crowd chatter); path(sNow) → position for floating npc bubbles */
    spawn({ id, kind = 'sun', p, born, path = null, word, maxY = 30 }) {
      if (gone.has(id) || api.get(id)) return api.get(id);
      if (kind === 'sun') { // Sun keeps at most 3 loose bubbles: the oldest one pops
        const loose = slots.filter((x) => x.active && x.kind === 'sun' && !x.pinned).sort((a, b) => a.born - b.born);
        while (loose.length >= 3) { const o = loose.shift(); gone.add(o.id); free(o); }
      }
      let s = slots.find((x) => !x.active);
      if (!s) { // recycle the oldest unpinned bubble
        s = slots.filter((x) => !x.pinned).sort((a, b) => a.born - b.born)[0];
        if (!s) return null;
        gone.add(s.id);
      }
      Object.assign(s, { active: true, id, kind, born, path, maxY, pinned: false, fixed: false, scale: 0.01, popT: 0 });
      s.pos.copy(p);
      const words = WORDS[kind];
      let h = 0; for (const ch of id) h = (h * 31 + ch.charCodeAt(0)) | 0;
      s.top.material.map = tex(word || words[Math.abs(h) % words.length], kind);
      s.top.material.needsUpdate = true;
      s.g.rotation.y = (Math.abs(h) % 628) / 100;
      look(s);
      s.g.visible = true;
      s.col.disabled = false;
      return s;
    },
    /** Pin a bubble where it is now (p from the pinning phone, so both agree). Creates it if it's unknown here. */
    pin(id, p, sNow, kind = 'npc', fixed = false) {
      let s = api.get(id);
      if (!s) { gone.delete(id); s = api.spawn({ id, kind, p, born: sNow }); if (!s) return null; }
      if (p) s.pos.set(p[0] ?? p.x, p[1] ?? p.y, p[2] ?? p.z);
      s.pinned = true; s.pinSeq = ++pinSeq; s.path = null; s.fixed = fixed;
      look(s);
      const pinned = slots.filter((x) => x.active && x.pinned && !x.fixed).sort((a, b) => a.pinSeq - b.pinSeq);
      while (pinned.length > MAX_PINS) { const o = pinned.shift(); o.pinned = false; o.born = sNow; look(o); }
      return s;
    },
    pop(id) {
      const s = api.get(id);
      gone.add(id);
      if (!s) return null;
      const p = s.pos.clone();
      free(s);
      return p;
    },
    /** nearest active bubble to a point (within range) */
    nearest(p, range = PIN_RANGE) {
      let best = null, bd = range * range;
      for (const s of slots) {
        if (!s.active) continue;
        const d = s.pos.distanceToSquared(p);
        if (d < bd) { bd = d; best = s; }
      }
      return best;
    },
    /** the bubble a body is standing on (or right on top of), if any */
    under(body) {
      for (const s of slots) {
        if (!s.active) continue;
        if (body.ground === s.col) return s;
        const dx = body.pos.x - s.pos.x, dz = body.pos.z - s.pos.z;
        if (dx * dx + dz * dz < (R + 0.15) ** 2 && Math.abs(body.pos.y - s.pos.y) < 0.35) return s;
      }
      return null;
    },
    target(s) { for (const x of slots) x.ring.visible = x === s && !!s; },
    update(sNow, dt, t) {
      for (const s of slots) {
        if (!s.active) continue;
        const ox = s.pos.x, oy = s.pos.y, oz = s.pos.z;
        if (s.path && !s.pinned) s.path(sNow, s.pos);
        const age = (sNow - s.born) / 1000;
        if (!s.pinned && (age > LIFE * (s.kind === 'npc' ? 1.7 : 1) || (s.path && s.pos.y > s.maxY))) { gone.add(s.id); free(s); continue; }
        // pop-in, a gentle bob, and a nervous wobble just before an unpinned bubble pops
        s.scale = Math.min(1, s.scale + dt * 6);
        const left = LIFE * (s.kind === 'npc' ? 1.7 : 1) - age;
        const wob = !s.pinned && left < 0.9 ? Math.sin(t * 40) * 0.06 : 0;
        s.g.scale.set(s.scale * (1 + wob), s.scale * (1 - wob), s.scale * (1 + wob));
        s.g.position.copy(s.pos);
        s.ring.rotation.y = t * 1.5;
        const c = s.col;
        c.x = s.pos.x; c.z = s.pos.z; c.top = s.pos.y; c.bottom = s.pos.y - H;
        c.dx = s.pos.x - ox; c.dy = s.pos.y - oy; c.dz = s.pos.z - oz;
      }
    },
  };
  return api;
}

/**
 * Chapter 1's two powers on top of a bubble set: Sun shouts, Moon pins / pops.
 * hooks: update(sNow, dt, t) runs before the bubbles move (spawn crowd chatter there), onPop(id, sNow).
 */
export function bubbleAbilities(bub, hooks = {}) {
  let api = null, shoutCd = 0, warnT = 0;
  const _t = new THREE.Vector3();
  const yawOf = (r) => api.chars[r].yaw;
  const localMoon = () => api && (api.kind === 'solo' ? api.active === 'moon' : api.role === 'moon');
  // what Moon's Pin/Pop aims at: Sun's bubbles beat the crowd's, a bubble someone stands on beats
  // everything, and bubbles in front of her beat the ones behind
  function moonTarget() {
    const b = api.bodies.moon, y = yawOf('moon'), fx = Math.sin(y), fz = Math.cos(y);
    const people = [b.pos];
    const pp = api.partnerPos('moon');
    if (pp) people.push(pp);
    let best = null, bs = Infinity;
    for (const s of bub.slots) {
      if (!s.active) continue;
      const dx = s.pos.x - b.pos.x, dy = s.pos.y - (b.pos.y + 0.6), dz = s.pos.z - b.pos.z;
      const d = Math.hypot(dx, dy, dz);
      if (d > PIN_RANGE) continue;
      let score = d;
      if (s.kind === 'sun') score -= 2.5;
      if (people.some((p) => Math.hypot(p.x - s.pos.x, p.z - s.pos.z) < 1.1 && Math.abs(p.y - s.pos.y) < 0.4)) score -= 5;
      const h = Math.hypot(dx, dz);
      if (h > 0.8 && (dx * fx + dz * fz) / h < -0.2) score += 3;
      if (score < bs) { bs = score; best = s; }
    }
    return best;
  }
  function solidUnder(body) {
    if (!body.grounded || !body.ground) return false;
    const s = bub.slots.find((x) => x.active && x.col === body.ground);
    return !s || s.pinned;   // pinned bubbles count as solid ground
  }
  function launchRiders(s) {
    for (const r of api.mine()) {
      const b = api.bodies[r];
      if (bub.under(b) === s) { api.launch(r, POP_LAUNCH); api.sound.play('bounce'); }
    }
  }
  const abilities = {
    label(who) {
      if (who === 'sun') return 'Shout';
      const s = moonTarget();
      return s ? (s.pinned ? 'Pop' : 'Pin') : null;
    },
    use(who) {
      const sNow = api.serverNow();
      if (who === 'sun') {
        const b = api.bodies.sun;
        if (!solidUnder(b) || shoutCd > 0) {
          api.sound.play('no');
          if (!solidUnder(b) && performance.now() > warnT) { warnT = performance.now() + 4000; api.toast('Shout from solid ground (or a pinned bubble)'); }
          return true;
        }
        shoutCd = 0.6;
        const y = yawOf('sun');
        const p = new THREE.Vector3(b.pos.x + Math.sin(y) * 2.3, b.pos.y + 1.25, b.pos.z + Math.cos(y) * 2.3);
        const id = 's' + Math.floor(sNow).toString(36) + Math.floor(Math.random() * 1296).toString(36);
        bub.spawn({ id, kind: 'sun', p, born: sNow });
        api.chars.sun.throwAnim();
        api.sound.play('shout');
        api.fx.sparks(p.clone(), 0xffb36b, 10, 1.5);
        api.send('bub', { id, p: [+p.x.toFixed(2), +p.y.toFixed(2), +p.z.toFixed(2)], b: Math.round(sNow) });
        return true;
      }
      const s = moonTarget();
      if (!s) return false;   // nothing nearby: the normal Tide sparkle
      if (s.pinned) {
        const id = s.id;
        launchRiders(s);
        const p = bub.pop(id);
        hooks.onPop?.(id, sNow);
        api.fx.sparks(p, 0xc9a6ff, 26, 3.5);
        api.sound.play('pop');
        api.send('pop', { id });
      } else {
        const p = [+s.pos.x.toFixed(2), +s.pos.y.toFixed(2), +s.pos.z.toFixed(2)];
        bub.pin(s.id, p, sNow, s.kind);
        api.fx.sparks(s.pos.clone(), 0xb48cff, 12, 1.5);
        api.sound.play('pin');
        api.send('pin', { id: s.id, p, k: s.kind });
      }
      return true;
    },
    onEvent(e) {
      const sNow = api.serverNow();
      if (e.type === 'bub') {
        const p = new THREE.Vector3(...e.p);
        bub.spawn({ id: e.id, kind: 'sun', p, born: e.b || sNow });
        api.fx.sparks(p.clone(), 0xffb36b, 10, 1.5);
        api.sound.play('shout');
        return true;
      }
      if (e.type === 'pin') { bub.pin(e.id, e.p, sNow, e.k || 'npc'); api.sound.play('pin'); return true; }
      if (e.type === 'pop') {
        const s = bub.get(e.id);
        if (s) { launchRiders(s); api.fx.sparks(s.pos.clone(), 0xc9a6ff, 26, 3.5); }
        bub.pop(e.id);
        hooks.onPop?.(e.id, sNow);
        api.sound.play('pop');
        return true;
      }
      return false;
    },
    update(dt, sNow, t) {
      shoutCd -= dt;
      hooks.update?.(sNow, dt, t);
      bub.update(sNow, dt, t);
      bub.target(localMoon() ? moonTarget() : null);
    },
  };
  return { abilities, attach(a) { api = a; } };
}
