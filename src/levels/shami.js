// Chapter 5 · "Say it like a Shami": in Damascus the ق is swallowed (قلبي → ألبي).
// Word pieces (bubbles, stepping stones, lilies) come in threes: the Damascene word, the textbook word and the
// village word with a hard g (گ). Only the Shami one holds you. Only Moon's screen shows the words; Sun sees
// question marks, so she has to tell him. A wrong step reshuffles that set.
import * as THREE from 'three';
import { add, mat } from './common.js';

export const WORDS = [
  { mean: 'my heart', f: 'قلبي', s: 'ألبي', r: 'گلبي', tr: 'albi' },
  { mean: 'moon', f: 'قمر', s: 'أمر', r: 'گمر', tr: 'amar' },
  { mean: 'coffee', f: 'قهوة', s: 'أهوة', r: 'گهوة', tr: 'ahwe' },
  { mean: 'a minute', f: 'دقيقة', s: 'دئيئة', r: 'دگيگة', tr: "d'i'a" },
  { mean: 'road', f: 'طريق', s: 'طريء', r: 'طريگ', tr: "tari'" },
  { mean: 'really', f: 'حقيقي', s: 'حئيئي', r: 'حگيگي', tr: "ha'i'i" },
  { mean: 'I said', f: 'قلت', s: 'ألت', r: 'گلت', tr: 'elt' },
  { mean: 'old', f: 'قديم', s: 'أديم', r: 'گديم', tr: 'adim' },
];
export const hash = (...a) => {
  let h = 2166136261;
  for (const v of a) { const s = String(v); for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } }
  return h >>> 0;
};
/** the question for (set, round, attempt): which word and which slot holds the Shami one */
export function question(id, n, attempt, count = 3) {
  const h = hash(id, n, attempt);
  const w = WORDS[h % WORDS.length], right = (h >>> 5) % count, swap = (h >>> 9) % 2;
  const others = swap ? ['f', 'r'] : ['r', 'f'];
  let o = 0;
  const opts = Array.from({ length: count }, (_, k) => (k === right ? 's' : others[o++]));
  return { w, opts, right };
}

const texCache = new Map();
function wordTex(text, sub, color) {
  const key = text + '|' + sub + '|' + color;
  if (texCache.has(key)) return texCache.get(key);
  const cv = document.createElement('canvas');
  cv.width = cv.height = 256;
  const g = cv.getContext('2d');
  g.fillStyle = '#fffaf2'; g.beginPath(); g.arc(128, 128, 126, 0, Math.PI * 2); g.fill();
  g.fillStyle = color; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.direction = 'rtl';
  g.font = `700 ${text.length > 4 ? 74 : 92}px "Noto Naskh Arabic", "Geeza Pro", "Damascus", "Arial", sans-serif`;
  g.fillText(text, 128, sub ? 112 : 132, 224);
  if (sub) { g.direction = 'ltr'; g.font = '600 30px ui-rounded, system-ui, sans-serif'; g.fillStyle = '#8a7aa8'; g.fillText(sub, 128, 196, 200); }
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  texCache.set(key, t);
  return t;
}

/**
 * sets: [{ id, slots: [[x, y, z] ×3], rounds (Infinity = never done), who: 'any'|'sun', exists: () => bool,
 *          style: 'bubble'|'stone'|'lily', back?: [x, y, z] (where a wrong step puts you), onRight(round), onWrong(role) }]
 */
export function createShami(world, colliders, { key, sets }) {
  let api = null;
  const bodyM = { bubble: new THREE.MeshStandardMaterial({ color: 0xfff6ec, roughness: 0.4, emissive: 0xffd0e8, emissiveIntensity: 0.4 }), stone: mat(0xd8c4a8, { roughness: 0.9 }), lily: mat(0x4f9a58, { roughness: 0.7 }) };
  const S = sets.map((q) => {
    const slots = q.slots.map(([x, y, z], k) => {
      const g = new THREE.Group(); g.position.set(x, y, z); g.userData.noHide = true; g.userData.noSketch = true; world.add(g);
      if (q.style === 'bubble') { add(g, new THREE.SphereGeometry(0.92, 28, 14).scale(1, 0.4, 1).translate(0, -0.4, 0), bodyM.bubble, 0, 0, 0); add(g, new THREE.ConeGeometry(0.2, 0.45, 8).rotateZ(Math.PI), bodyM.bubble, 0.5, -0.75, 0.3); }
      else if (q.style === 'lily') { add(g, new THREE.CylinderGeometry(1.1, 1.1, 0.12, 20, 1, false, 0.3, Math.PI * 2 - 0.4), bodyM.lily, 0, -0.06, 0); add(g, new THREE.ConeGeometry(0.22, 0.35, 7), mat(0xffd6ec), 0.75, 0.15, -0.5, { cast: false }); }
      else add(g, new THREE.CylinderGeometry(1.0, 1.1, 0.5, 14), bodyM.stone, 0, -0.25, 0);
      const face = add(g, new THREE.CircleGeometry(0.8, 28).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: wordTex('؟', '', '#c4452d'), transparent: true }), 0, 0.02, 0, { cast: false });
      face.userData.noSketch = true;
      const col = { type: 'cyl', x, z, r: q.style === 'bubble' ? 0.9 : 1.0, top: y, bottom: y - 0.4, disabled: true, noGrab: true };
      colliders.push(col);
      return { k, x, y, z, g, face, col, shown: '' };
    });
    return { ...q, slots, pend: -1, armed: { sun: true, moon: true }, prevY: { sun: 0, moon: 0 }, fx: 0 };
  });
  const byId = Object.fromEntries(S.map((s) => [s.id, s]));
  const sv = () => api?.save?.[key] || {};
  const round = (q) => Math.max(sv().q?.[q.id] || 0, q.pend);
  const attempt = (q, n) => sv().qa?.[q.id]?.[n] || 0;
  const done = (q) => round(q) >= q.rounds;
  const reader = () => api && (api.kind === 'solo' || api.role === 'moon');

  return {
    sets: S, byId, done: (id) => done(byId[id]), round: (id) => round(byId[id]),
    attach(a) { api = a; },
    update(dt, sNow, t) {
      if (!api) return;
      for (const q of S) {
        const n = round(q), fin = done(q), on = q.exists();
        const Q = question(q.id, Math.min(n, q.rounds === Infinity ? 0 : q.rounds - 1), attempt(q, n), q.slots.length);
        q.fx = Math.max(0, q.fx - dt);
        for (const s of q.slots) {
          const right = s.k === Q.right;
          // once a set is done only the right one stays (and everyone may read it)
          const vis = on && (!fin || right);
          s.g.visible = vis;
          s.col.disabled = !vis || !right;
          const opt = Q.opts[s.k];
          const word = opt === 's' ? Q.w.s : opt === 'f' ? Q.w.f : Q.w.r;
          const want = reader() || fin ? word + '|' + (opt === 's' ? Q.w.tr : '') : '?';
          if (vis && s.shown !== want) {
            s.shown = want;
            s.face.material.map = want === '?' ? wordTex('؟', '', '#c4452d') : wordTex(word, opt === 's' && reader() ? Q.w.tr : '', '#5a3a8a');
            s.face.material.needsUpdate = true;
          }
          if (q.style === 'bubble' && vis) s.g.position.y = s.y + Math.sin(t * 2 + s.k + s.x) * 0.04;
        }
        if (!on) continue;
        for (const r of api.mine()) {
          const b = api.bodies[r], p = b.pos, py = q.prevY[r];
          q.prevY[r] = p.y;
          let onAny = false;
          for (const s of q.slots) {
            const inR = Math.hypot(p.x - s.x, p.z - s.z) < 1.05;
            if (!inR) continue;
            const right = s.k === Q.right;
            if (right && Math.abs(p.y - s.y) < 0.12) {
              onAny = true;
              if (!fin && q.armed[r] && (q.who !== 'sun' || r === 'sun') && q.rounds !== Infinity && q.pend <= n) {
                q.armed[r] = false; q.pend = n + 1;
                api.setSave(`${key}/q/${q.id}`, n + 1);
                api.sound.play('bloom'); api.fx.sparks(new THREE.Vector3(s.x, s.y + 0.5, s.z), 0xc6a8ff, 26, 4);
                q.onRight?.(n, Q.w);
              }
            } else if (!right && s.g.visible && py < s.y - 0.02 && p.y >= s.y - 0.02) {
              s.up = s.up || {}; s.up[r] = sNow;   // (jumping up through it from below doesn't count)
            } else if (!right && s.g.visible && py > s.y - 0.02 && p.y <= s.y - 0.02 && b.vel.y < 0) {
              // stepped onto a wrong one: it isn't there, and the set is reshuffled
              if (q.fx > 0 || sNow - (s.up?.[r] ?? -1e9) < 1500) continue;
              q.fx = 1;
              api.setSave(`${key}/qa/${q.id}/${n}`, attempt(q, n) + 1);
              api.sound.play('no'); api.fx.sparks(new THREE.Vector3(s.x, s.y + 0.3, s.z), 0xffffff, 18, 3);
              if (q.back) { b.pos.set(...q.back); b.vel.set(0, 0, 0); api.ctls[r].safe?.set(...q.back); }
              q.onWrong?.(r, opt2(Q, s.k));
            }
          }
          if (!onAny) q.armed[r] = true;
        }
      }
    },
  };
}
const opt2 = (Q, k) => (Q.opts[k] === 'f' ? Q.w.f : Q.opts[k] === 'r' ? Q.w.r : Q.w.s);
