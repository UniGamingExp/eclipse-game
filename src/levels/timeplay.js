// Chapter 6 powers: Sun's PAUSE (the TV remote) and Moon's REWIND.
// Every "time object" has its own clock τ. Normally τ runs with the shared clock. Sun ✦ freezes the nearest
// object for 6 s; Moon ✦ runs it backwards (×2) for 2 s. Things that already happened (a fallen bridge, a
// collapsed staircase) can be rewound into one piece again, but they fall again a moment later: unless Sun pauses
// them while they're whole. Both phones apply the same events at the same shared times, so they agree.
import * as THREE from 'three';
import { add, mat, rbox } from './common.js';

export const PAUSE_S = 6, REWIND_S = 2, REWIND_RATE = -2, RANGE = 15;

function iconTex(txt, bg) {
  const cv = document.createElement('canvas'); cv.width = cv.height = 128;
  const g = cv.getContext('2d');
  g.fillStyle = bg; g.beginPath(); g.arc(64, 64, 60, 0, Math.PI * 2); g.fill();
  g.fillStyle = '#fff'; g.font = '700 70px ui-rounded, system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(txt, 64, 70);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; return t;
}

/**
 * objects: [{ id, kind: 'loop'|'once', period | dur, offset?, pieces: [piece], place(u, pieces, τ), aim: () => Vector3 }]
 *   piece = { w, h, d, m (material), x, y, z }   → becomes a moving platform (piece.set(x, y, z), piece.mesh)
 *   loop: u = (τ mod period) / period;  once: u = τ / dur, 0 = whole, 1 = fallen (they start fallen)
 */
export function createTime(world, colliders, { objects, onUse = null }) {
  let api = null;
  const cd = { sun: 0, moon: 0 };
  const pauseI = iconTex('⏸', '#3a7ad8'), rewI = iconTex('⏪', '#d84a9a');
  const O = objects.map((o, i) => {
    const pieces = o.pieces.map((p) => {
      const mm = (p.m || mat(0xffd6e8)).clone();
      mm.emissive = mm.emissive || new THREE.Color(0);
      const mesh = p.mesh || add(world, p.round ? new THREE.CylinderGeometry(p.w / 2, p.w / 2, p.h, 20) : rbox(p.w, p.h, p.d, Math.min(0.1, p.h / 3)), mm, p.x, p.y - p.h / 2, p.z);
      mesh.userData.noHide = true;
      const col = p.noCol ? null : p.round
        ? { type: 'cyl', x: p.x, z: p.z, r: p.w / 2, top: p.y, bottom: p.y - p.h, dx: 0, dy: 0, dz: 0, noGrab: !!p.noGrab, surface: p.surface || 'wood' }
        : { type: 'box', x0: p.x - p.w / 2, x1: p.x + p.w / 2, z0: p.z - p.d / 2, z1: p.z + p.d / 2, top: p.y, bottom: p.y - p.h, dx: 0, dy: 0, dz: 0, noGrab: !!p.noGrab, surface: p.surface || 'wood' };
      if (col) colliders.push(col);
      let px = p.x, py = p.y, pz = p.z;
      return {
        ...p, mesh, mm, col, base: mm.emissive.clone(), baseI: mm.emissiveIntensity ?? 1,
        set(x, y, z, solid = true) {
          if (col) {
            col.dx = x - px; col.dy = y - py; col.dz = z - pz;
            if (col.type === 'cyl') { col.x = x; col.z = z; } else { col.x0 = x - p.w / 2; col.x1 = x + p.w / 2; col.z0 = z - p.d / 2; col.z1 = z + p.d / 2; }
            col.top = y; col.bottom = y - p.h; col.disabled = !solid;
          }
          px = x; py = y; pz = z;
          mesh.position.set(x, y - p.h / 2, z);
        },
      };
    });
    const icon = new THREE.Sprite(new THREE.SpriteMaterial({ map: pauseI, depthTest: false, transparent: true }));
    icon.scale.setScalar(1.1); icon.visible = false; icon.renderOrder = 5; world.add(icon);
    const st = { t0: 0, tau0: o.kind === 'once' ? 1e7 : o.offset || 0, rate: 1, until: 0, kind: '' };
    return { ...o, i, pieces, icon, st };
  });

  /** this object's own clock at shared time s (seconds) */
  function tau(o, s) {
    const S = o.st;
    let v = s < S.until ? S.tau0 + S.rate * (s - S.t0) : Math.max(o.kind === 'once' ? 0 : -1e9, S.tau0 + S.rate * (S.until - S.t0)) + (s - S.until);
    if (o.kind === 'once') v = Math.max(0, Math.min(o.dur, v));
    return v;
  }
  function apply(o, k, s) {
    const v = tau(o, s);
    o.st = { t0: s, tau0: v, rate: k === 'p' ? 0 : REWIND_RATE, until: s + (k === 'p' ? PAUSE_S : REWIND_S), kind: k };
  }
  /** what the remote points at: the closest piece wins, but a broken thing comes first for Rewind, and a thing
   *  that is being rewound (or is whole again) comes first for Pause */
  const nearest = (p, who, s) => {
    let best = null, bd = 1e9;
    for (const o of O) {
      if (o.only && !o.only()) continue;
      let d = o.aim().distanceTo(p);
      for (const pc of o.pieces) d = Math.min(d, pc.mesh.position.distanceTo(p));
      if (d > RANGE) continue;
      if (o.kind === 'once') {
        const v = tau(o, s);
        if (who === 'moon' && v > 0.05) d -= 100;
        if (who === 'sun' && v < o.dur - 0.05) d -= 100;
      }
      if (d < bd) { bd = d; best = o; }
    }
    return best;
  };

  const abilities = {
    label: (who) => (who === 'sun' ? 'Pause' : 'Rewind'),
    use(who) {
      const s = api.serverNow() / 1000, p = api.bodies[who].pos;
      if (s < cd[who]) { api.sound.play('no'); return true; }
      const o = nearest(p, who, s);
      if (!o) { api.sound.play('no'); api.caption?.(who === 'sun' ? '⏸ Nothing moving close enough to pause.' : '⏪ Nothing close enough to rewind.', 2200); cd[who] = s + 0.4; return true; }
      const k = who === 'sun' ? 'p' : 'r';
      cd[who] = s + (k === 'p' ? 1.0 : 4.0);
      apply(o, k, s);
      api.sound.play(k === 'p' ? 'pin' : 'shine');
      api.send('tm', { i: o.i, k, t: +s.toFixed(3) });
      onUse?.(o, k, who);
      return true;
    },
    onEvent(e) {
      if (e.type !== 'tm') return false;
      const o = O[e.i];
      if (o) apply(o, e.k, e.t);
      return true;
    },
    update(dt, sNow, t) {
      const s = sNow / 1000;
      for (const o of O) {
        const v = tau(o, s);
        const u = o.kind === 'once' ? v / o.dur : (((v % o.period) + o.period) % o.period) / o.period;
        o.place(u, o.pieces, v, s);
        const S = o.st, on = s < S.until;
        o.icon.visible = on;
        if (on) {
          o.icon.material.map = S.kind === 'p' ? pauseI : rewI;
          o.icon.position.copy(o.aim()).add(new THREE.Vector3(0, 1.8 + Math.sin(t * 3) * 0.1, 0));
        }
        for (const pc of o.pieces) {
          if (on) { pc.mm.emissive.setHex(S.kind === 'p' ? 0x4a8aff : 0xff5ab0); pc.mm.emissiveIntensity = 0.45 + Math.sin(t * 6) * 0.1; }
          else { pc.mm.emissive.copy(pc.base); pc.mm.emissiveIntensity = pc.baseI; }
        }
      }
    },
  };
  return { abilities, attach(a) { api = a; }, objects: O, byId: Object.fromEntries(O.map((o) => [o.id, o])), tau: (o, s) => tau(o, s) };
}

// ---------------------------------------------------------------- object factories

/** something that fell down: each piece has a whole pose and falls by `fall` (staggered), spinning a little */
export function collapse(id, pieces, { dur = 2, fall = [0, -9, 0], stagger = 0.08, aim }) {
  const P = pieces.map((p) => ({ ...p }));
  return {
    id, kind: 'once', dur, pieces: P,
    aim: () => new THREE.Vector3(...aim),
    place(u, pcs) {
      pcs.forEach((pc, k) => {
        const a = Math.max(0, Math.min(1, (u - 0.12 - k * stagger) / 0.45));
        const e = a * a;
        pc.set(pc.x + fall[0] * e, pc.y + fall[1] * e, pc.z + fall[2] * e, a < 0.15);
        pc.mesh.rotation.set(e * (k % 2 ? 0.9 : -0.7), 0, e * (k % 3 ? 0.6 : -0.8));
      });
    },
  };
}

/** one platform shuttling along a path of points (ping-pong) */
export function shuttle(id, piece, points, { period, offset = 0, pause = 0.12 }) {
  const P = points.map((p) => new THREE.Vector3(...p));
  const L = []; let tot = 0;
  for (let i = 1; i < P.length; i++) { const d = P[i].distanceTo(P[i - 1]); L.push(d); tot += d; }
  const cur = new THREE.Vector3();
  const at = (f) => {
    let d = f * tot;
    for (let i = 1; i < P.length; i++) { if (d <= L[i - 1] || i === P.length - 1) return cur.lerpVectors(P[i - 1], P[i], Math.min(1, d / L[i - 1])); d -= L[i - 1]; }
    return cur.copy(P[P.length - 1]);
  };
  return {
    id, kind: 'loop', period, offset, pieces: [piece],
    aim: () => cur.clone(),
    place(u, pcs) {
      // out and back, with a short stop at each end
      let f = u < 0.5 ? u * 2 : (1 - u) * 2;
      f = Math.max(0, Math.min(1, (f - pause) / (1 - 2 * pause)));
      f = f * f * (3 - 2 * f);
      const p = at(f);
      pcs[0].set(p.x, p.y, p.z);
    },
  };
}

/** n pads going round a centre (a spinning ring) */
export function ring(id, { cx, cy, cz, r, n, period, dir = 1, offset = 0, pad }) {
  const pieces = [];
  for (let k = 0; k < n; k++) pieces.push({ ...pad, x: cx + r, y: cy, z: cz });
  const aimV = new THREE.Vector3(cx, cy, cz);
  return {
    id, kind: 'loop', period, offset, pieces,
    aim: () => aimV,
    place(u, pcs) {
      pcs.forEach((pc, k) => {
        const a = dir * u * Math.PI * 2 + (k / n) * Math.PI * 2;
        pc.set(cx + Math.cos(a) * r, cy, cz + Math.sin(a) * r);
        pc.mesh.rotation.y = -a;
      });
    },
  };
}

/** something going up and down (a lift, a fountain jet) */
export function bob(id, piece, { y0, y1, period, offset = 0, aimY = null }) {
  const cur = new THREE.Vector3(piece.x, y0, piece.z);
  return {
    id, kind: 'loop', period, offset, pieces: [piece],
    aim: () => cur,
    place(u, pcs) {
      const f = 0.5 - 0.5 * Math.cos(u * Math.PI * 2);
      const y = y0 + (y1 - y0) * f;
      cur.y = aimY ?? y;
      pcs[0].set(pcs[0].x, y, pcs[0].z);
    },
  };
}
