// Chapter 4 powers: Sun's SALT CRYSTALS and Moon's SONG (Handel's notes).
//  - Sun taps ✦ next to a brine spring: a salt crystal grows there (a pillar that lifts whoever stands on it) and
//    stands for a while.
//  - Moon taps ✦: her song rings out. Crystals in reach shatter and LAUNCH whoever stands on them (straight up, or
//    along a tilted spring's aim); salt-crust walls in reach break for good; a crystal that shatters under a bell
//    rings it.
//  - The Quiet: drifting grey bubbles of silence. Inside one, her song makes no sound.
// Each phone works out launches for its own players; Sun's phone (or practice) writes walls and bells to the save.
import * as THREE from 'three';
import { add, mat } from './common.js';

export const SONG_R = 7, WALL_R = 5, GROW_R = 4.5, LIFE = 14000, CRYSTAL_H = 2.4, LAUNCH = 24;

/**
 * springs: [{ id, x, y, z, v?: [vx, vy, vz], need?: bellId }]     (need: dry until that bell has rung)
 * walls:   [{ id, x0, x1, z0, z1, y, h }]
 * bells:   [{ id, x, y, z, spring, pair?: bellId, s?: size }]      (y = where it hangs from; pair: both within 8 s)
 * quiet:   [{ x0, x1, y, z, r, period, off? }]      (or pos: (sNow) => [x, z]; r may be changed by the level)
 * pipes:   [{ x, y, z, to: [x, y, z] }]            (a brass horn: a song sung next to it also sounds at `to`)
 */
export function createSalt(world, colliders, { key, springs = [], walls = [], bells = [], quiet = [], pipes = [], onRing = null }) {
  let api = null;
  const cd = { sun: 0, moon: 0 };
  const saltM = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffd9ec, emissiveIntensity: 0.35, roughness: 0.18, metalness: 0.05, flatShading: true, transparent: true, opacity: 0.93 });
  const crustM = new THREE.MeshStandardMaterial({ color: 0xf2eef5, emissive: 0xc8c0e0, emissiveIntensity: 0.2, roughness: 0.6, flatShading: true });
  const ringM = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8, depthWrite: false });
  const dryM = new THREE.MeshBasicMaterial({ color: 0x8a8a96, transparent: true, opacity: 0.5, depthWrite: false });
  const brineM = new THREE.MeshStandardMaterial({ color: 0xbfe6ff, emissive: 0x7ac8ff, emissiveIntensity: 0.5, roughness: 0.1, transparent: true, opacity: 0.8 });

  // ---------------------------------------------------------------- springs and their crystals
  const S = springs.map((sp, i) => {
    const g = new THREE.Group();
    g.position.set(sp.x, sp.y, sp.z);
    g.userData.noHide = true;
    world.add(g);
    const ring = add(g, new THREE.RingGeometry(1.0, 1.18, 6).rotateX(-Math.PI / 2), ringM.clone(), 0, 0.04, 0, { cast: false, receive: false });
    const pool = add(g, new THREE.CircleGeometry(0.95, 6).rotateX(-Math.PI / 2), brineM.clone(), 0, 0.03, 0, { cast: false });
    const v = sp.v || [0, LAUNCH, 0];
    const tilt = Math.abs(v[0]) > 6 ? Math.atan2(-v[0], v[1]) * 0.55 : 0;
    const cg = new THREE.Group();
    cg.rotation.z = tilt;
    g.add(cg);
    const main = add(cg, new THREE.CylinderGeometry(0.78, 1.0, CRYSTAL_H, 6).translate(0, CRYSTAL_H / 2, 0), saltM);
    for (let k = 0; k < 5; k++) {
      const a = k * 1.3 + i, h = 0.7 + ((k * 37 + i * 11) % 10) / 10;
      const m = add(cg, new THREE.ConeGeometry(0.22 + (k % 3) * 0.06, h, 5).translate(0, h / 2, 0), saltM, Math.cos(a) * 0.95, 0, Math.sin(a) * 0.95);
      m.rotation.set(Math.sin(a) * 0.4, 0, -Math.cos(a) * 0.4);
    }
    if (sp.v && Math.abs(v[0]) + Math.abs(v[2]) > 6) {   // an arrow of salt grains shows where a tilted spring throws
      const L = Math.hypot(v[0], v[2]) || 1;
      for (let k = 1; k <= 3; k++) add(g, new THREE.ConeGeometry(0.16, 0.34, 4).rotateZ(v[0] < 0 ? Math.PI / 2 : -Math.PI / 2), ringM, (v[0] / L) * (1.3 + k * 0.45), 0.2, (v[2] / L) * (1.3 + k * 0.45), { cast: false });
    }
    cg.visible = false;
    const col = { type: 'box', x0: sp.x - 0.9, x1: sp.x + 0.9, z0: sp.z - 0.9, z1: sp.z + 0.9, top: sp.y + 0.05, bottom: sp.y - 0.2, disabled: true, dx: 0, dy: 0, dz: 0, noGrab: true, surface: 'concrete' };
    colliders.push(col);
    return { ...sp, i, v, g, cg, ring, pool, col, until: 0, k: 0 };
  });
  const byId = Object.fromEntries(S.map((s) => [s.id, s]));

  // ---------------------------------------------------------------- salt-crust walls
  const W = walls.map((w, i) => {
    const g = new THREE.Group();
    g.userData.noHide = true;
    world.add(g);
    const cx = (w.x0 + w.x1) / 2, cz = (w.z0 + w.z1) / 2, dx = w.x1 - w.x0, dz = w.z1 - w.z0;
    add(g, new THREE.BoxGeometry(dx, w.h, dz), crustM, cx, w.y + w.h / 2, cz);
    for (let k = 0; k < 14; k++) {
      const r = 0.3 + ((k * 53) % 10) / 22, u = ((k * 29) % 17) / 17, q = ((k * 41) % 13) / 13;
      const m = add(g, new THREE.IcosahedronGeometry(r, 0), k % 3 ? crustM : saltM, w.x0 + (k % 2 ? dx + 0.05 : -0.05), w.y + 0.3 + u * (w.h - 0.6), w.z0 + q * dz);
      m.rotation.set(k, k * 2, k * 3);
    }
    const col = { type: 'box', x0: w.x0, x1: w.x1, z0: w.z0, z1: w.z1, top: w.y + w.h, bottom: w.y, noGrab: true };
    colliders.push(col);
    return { ...w, i, g, col, cx, cz, gone: false };
  });

  // ---------------------------------------------------------------- bells
  const bronze = new THREE.MeshStandardMaterial({ color: 0x8a8a92, emissive: 0xffb84a, emissiveIntensity: 0, roughness: 0.35, metalness: 0.75 });
  const profile = [[0.0, 0], [0.28, 0], [0.36, -0.12], [0.42, -0.5], [0.5, -0.86], [0.66, -1.08], [0.7, -1.16]].map(([r, y]) => new THREE.Vector2(r, y));
  const B = bells.map((b, i) => {
    const g = new THREE.Group();
    g.position.set(b.x, b.y, b.z);
    g.userData.noHide = true;
    world.add(g);
    const m = bronze.clone(), sc = b.s ?? 1;
    const body = add(g, new THREE.LatheGeometry(profile, 20), m, 0, 0, 0);
    m.side = THREE.DoubleSide;
    add(g, new THREE.SphereGeometry(0.14, 10, 8), m, 0, -1.1, 0);
    add(g, new THREE.CylinderGeometry(0.05, 0.05, 0.5, 6), mat(0x4a3b32), 0, 0.2, 0);
    g.scale.setScalar(sc);
    return { ...b, i, g, m, body, swing: 0, last: -1e9, rung: false };
  });
  const bellById = Object.fromEntries(B.map((b) => [b.id, b]));

  // ---------------------------------------------------------------- the Quiet
  const quietM = new THREE.MeshStandardMaterial({ color: 0x9a9aa6, roughness: 1, transparent: true, opacity: 0.42, depthWrite: false });
  const Q = quiet.map((q) => {
    const m = add(world, new THREE.SphereGeometry(q.r, 20, 14), quietM, q.x0 ?? 0, q.y + q.r * 0.6, q.z, { cast: false, receive: false });
    const dots = add(m, new THREE.SphereGeometry(0.12, 6, 5), mat(0x5a5a66), 0, 0, 0, { cast: false });
    for (const dx of [-0.4, 0.4]) add(m, new THREE.SphereGeometry(0.12, 6, 5), mat(0x5a5a66), dx, 0, 0, { cast: false });
    m.userData.noHide = true;
    const o = { ...q, m, dots, x: q.x0, r0: q.r };
    return o;
  });
  const quietAt = (q, sNow) => (q.pos ? q.pos(sNow) : [(q.x0 + q.x1) / 2 + Math.sin((sNow / 1000) * (2 * Math.PI / q.period) + (q.off || 0)) * (q.x1 - q.x0) / 2, q.z]);
  const inQuiet = (p, sNow) => Q.some((q) => { const [x, z] = quietAt(q, sNow); return q.r > 0.05 && Math.hypot(p.x - x, p.z - z) < q.r && Math.abs(p.y - q.y) < q.r + 1; });

  // ---------------------------------------------------------------- brass horns that carry a song somewhere else
  const brassM = new THREE.MeshStandardMaterial({ color: 0xe2b04a, emissive: 0xffb84a, emissiveIntensity: 0.15, roughness: 0.3, metalness: 0.8, side: THREE.DoubleSide });
  const horn = (x, y, z, up) => {
    const g = new THREE.Group(); g.position.set(x, y, z); g.userData.noHide = true; world.add(g);
    add(g, new THREE.CylinderGeometry(0.07, 0.07, 1.1, 8), brassM, 0, up ? 0.55 : 2.4, 0);
    const bell = add(g, new THREE.CylinderGeometry(0.42, 0.08, 0.6, 14, 1, true), brassM, 0, up ? 1.35 : 1.75, 0.2);
    bell.rotation.x = up ? 0.9 : Math.PI - 0.9;
    return g;
  };
  const PP = pipes.map((q) => {
    horn(q.x, q.y, q.z, true); horn(q.to[0], q.to[1], q.to[2], false);
    const dy = q.y - q.to[1] - 2.9;
    if (dy > 0.2 && Math.hypot(q.x - q.to[0], q.z - q.to[2]) < 0.5) add(world, new THREE.CylinderGeometry(0.07, 0.07, dy, 8), brassM, q.x, q.to[1] + 2.9 + dy / 2, q.z).userData.noHide = true;
    return { ...q, toV: new THREE.Vector3(q.to[0], q.to[1], q.to[2]) };
  });

  // ---------------------------------------------------------------- song rings (a small pool)
  const rings = [];
  for (let i = 0; i < 5; i++) {
    const m = add(world, new THREE.RingGeometry(0.93, 1, 48).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xd9b8ff, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide }), 0, 0, 0, { cast: false, receive: false });
    m.visible = false; m.userData.noHide = true;
    rings.push({ m, t: 9 });
  }

  const authority = () => api && (api.kind === 'solo' || api.role === 'sun');
  const mask = (k) => api?.save?.[key]?.[k] || 0;
  const bellRung = (id) => !!(mask('b') & (1 << bellById[id].i));
  const active = (s) => !s.need || (typeof s.need === 'function' ? s.need() : bellRung(s.need));
  const grown = (s, sNow) => s.until > sNow;

  function grow(s, t) {
    s.until = t + LIFE;
    api.sound.play('crystal');
    api.fx.sparks(new THREE.Vector3(s.x, s.y + 0.4, s.z), 0xffffff, 16, 2.5);
  }
  function shatter(s, launch) {
    s.until = 0;
    const top = s.col.top;
    s.col.disabled = true; s.col.dy = 0;
    s.cg.visible = false; s.k = 0;
    api.fx.sparks(new THREE.Vector3(s.x, s.y + 1.4, s.z), 0xffffff, 34, 5);
    api.sound.play('shatter');
    if (!launch) return;
    for (const r of api.mine()) {
      const p = api.bodies[r].pos;
      if (Math.abs(p.x - s.x) < 1.25 && Math.abs(p.z - s.z) < 1.25 && Math.abs(p.y - top) < 0.7) {
        api.launch(r, s.v[1], s.v[0], s.v[2], s.lock || 0);
        api.sound.play('bounce');
        if (r === api.active) api.shake?.(0.7);
      }
    }
  }
  function ringBell(b, sNow) {
    b.swing = 1; b.last = sNow;
    api.sound.play('bell');
    api.fx.sparks(new THREE.Vector3(b.x, b.y - 1, b.z), 0xffd76a, 30, 4);
    if (!authority() || bellRung(b.id)) return;
    if (b.pair) {
      const o = bellById[b.pair];
      if (sNow - o.last < 8000) api.setSave(`${key}/b`, mask('b') | (1 << b.i) | (1 << o.i));
      else b.fadeAt = sNow + 900;   // (say so only if the other one doesn't ring in the same breath)
    } else api.setSave(`${key}/b`, mask('b') | (1 << b.i));
  }
  /** her song rings out from p */
  function song(p, sNow, relayed = false) {
    const rg = rings.reduce((a, q) => (q.t > a.t ? q : a));
    rg.t = 0; rg.m.visible = true; rg.m.position.set(p.x, p.y + 0.9, p.z);
    api.sound.play('sing');
    for (const s of S) {
      if (!grown(s, sNow) || Math.hypot(s.x - p.x, s.z - p.z) > SONG_R || Math.abs(s.y - p.y) > 6) continue;
      shatter(s, true);
      for (const b of B) if (b.spring === s.id) ringBell(b, sNow);
    }
    for (const w of W) {
      if (w.gone || Math.hypot(w.cx - p.x, w.cz - p.z) > WALL_R || p.y < w.y - 3 || p.y > w.y + w.h + 2) continue;
      breakWall(w);
      if (authority()) api.setSave(`${key}/w`, mask('w') | (1 << w.i));
    }
    if (!relayed) for (const q of PP) if (Math.hypot(q.x - p.x, q.z - p.z) < 3 && Math.abs(q.y - p.y) < 3) song(q.toV, sNow, true);
  }
  function breakWall(w, quiet_ = false) {
    w.gone = true; w.g.visible = false; w.col.disabled = true; w.t = performance.now();
    if (quiet_) return;
    for (let k = 0; k < 3; k++) api.fx.sparks(new THREE.Vector3(w.cx, w.y + 0.6 + k * (w.h / 3), w.cz), 0xffffff, 22, 5);
    api.sound.play('shatter');
  }

  const abilities = {
    label: (who) => (who === 'sun' ? 'Salt' : 'Sing'),
    use(who) {
      const sNow = api.serverNow(), p = api.bodies[who].pos;
      if (sNow < cd[who]) { api.sound.play('no'); return true; }
      if (who === 'sun') {
        let best = null, bd = GROW_R;
        for (const s of S) {
          const d = Math.hypot(s.x - p.x, s.z - p.z);
          if (d < bd && Math.abs(s.y - p.y) < 3.2 && !grown(s, sNow)) { bd = d; best = s; }
        }
        if (!best) { api.sound.play('no'); api.caption?.('Salt only grows at a brine spring (the white rings) 🧂', 2600); cd.sun = sNow + 500; return true; }
        if (!active(best)) { api.sound.play('no'); api.caption?.(best.dry || 'This spring is dry. A bell has to wake it first 🔔', 2800); cd.sun = sNow + 500; return true; }
        cd.sun = sNow + 700;
        grow(best, sNow);
        api.send('grow', { i: best.i, t: Math.round(sNow) });
        return true;
      }
      cd.moon = sNow + 2200;
      if (inQuiet(p, sNow)) {
        api.sound.play('no');
        api.caption?.('…   The Quiet swallows her song. Wait for it to drift away.', 2800);
        return true;
      }
      song(p, sNow);
      api.send('sing', { x: +p.x.toFixed(2), y: +p.y.toFixed(2), z: +p.z.toFixed(2), t: Math.round(sNow) });
      return true;
    },
    onEvent(e) {
      if (e.type === 'grow') { const s = S[e.i]; if (s) grow(s, e.t || api.serverNow()); return true; }
      if (e.type === 'sing') { song(new THREE.Vector3(e.x, e.y, e.z), api.serverNow()); return true; }
      return false;
    },
    update(dt, sNow, t) {
      const wm = mask('w');
      for (const w of W) {
        const gone = !!(wm & (1 << w.i));
        if (gone && !w.gone) breakWall(w, true);
        if (!gone && w.gone && !wm && performance.now() - w.t > 4000) { w.gone = false; w.g.visible = true; w.col.disabled = false; }   // (the level was restarted)
      }
      for (const s of S) {
        const on = active(s), up = grown(s, sNow);
        s.ringOn ??= s.ring.material;
        s.ring.material = on ? s.ringOn : dryM;
        s.pool.visible = on;
        if (on) s.ring.material.opacity = 0.55 + Math.sin(t * 3 + s.i) * 0.25;
        if (!up && s.k > 0 && s.until !== 0) { s.until = 0; shatter(s, false); }   // it crumbles by itself after a while
        if (!up) { s.col.dy = 0; continue; }
        const left = s.until - sNow;
        s.k = Math.min(1, Math.max(0.02, (sNow - (s.until - LIFE)) / 450));   // (by the shared clock, so both phones agree)
        const e = 1 - (1 - s.k) ** 2, top = s.y + 0.05 + (CRYSTAL_H - 0.05) * e;
        s.col.disabled = false;
        s.col.dy = top - s.col.top; s.col.top = top; s.col.bottom = s.y - 0.2;
        // whoever stands on the spring rides up with the crystal (explicitly, so a slow frame can't push them aside)
        if (s.k < 1 || s.col.dy > 0) for (const r of api.mine()) {
          const bd = api.bodies[r], p = bd.pos;
          if (Math.abs(p.x - s.x) < 1.0 && Math.abs(p.z - s.z) < 1.0 && p.y < top && p.y > s.y - 0.4) { p.y = top + 0.01; if (bd.vel.y < 0) bd.vel.y = 0; }
        }
        s.cg.visible = true;
        s.cg.scale.set(0.6 + 0.4 * e, Math.max(0.02, e), 0.6 + 0.4 * e);
        s.cg.position.x = left < 3000 ? Math.sin(t * 40) * 0.03 : 0;   // it trembles before it crumbles
      }
      const bm = mask('b');
      for (const b of B) {
        const rung = !!(bm & (1 << b.i));
        if (rung && !b.rung) { b.rung = true; onRing?.(b.id); }
        if (!rung) b.rung = false;
        if (b.fadeAt && sNow > b.fadeAt) { b.fadeAt = 0; if (!rung && authority()) api.caption?.('One bell… it fades. Ring BOTH within 8 seconds 🔔🔔', 3600); }
        b.swing = Math.max(0, b.swing - dt * 0.35);
        if (rung) b.swing = Math.max(b.swing, 0.25);
        b.g.rotation.z = Math.sin(t * 5.5 + b.i) * 0.5 * b.swing;
        b.m.emissiveIntensity += ((rung ? 0.55 : sNow - b.last < 8000 ? 0.3 : 0) - b.m.emissiveIntensity) * Math.min(1, dt * 4);
        b.m.color.setHex(rung ? 0xe2b04a : 0x8a8a92);
      }
      for (const q of Q) {
        const [qx, qz] = quietAt(q, sNow);
        q.x = qx;
        q.m.visible = q.r > 0.05;
        q.m.position.set(qx, q.y + q.r * 0.6 + Math.sin(t * 1.3 + (q.x0 || 0)) * 0.15, qz);
        q.m.scale.setScalar((q.r / q.r0) * (1 + Math.sin(t * 2.1 + (q.x0 || 0)) * 0.04));
      }
      for (const r of rings) {
        if (!r.m.visible) continue;
        r.t += dt;
        const u = r.t / 0.7;
        r.m.scale.setScalar(0.5 + u * SONG_R);
        r.m.material.opacity = Math.max(0, 0.9 * (1 - u));
        if (u >= 1) r.m.visible = false;
      }
    },
  };
  return {
    abilities, attach(a) { api = a; }, springs: S, walls: W, bells: B, quiet: Q, byId,
    bellRung, bellMask: () => mask('b'), grown: (id) => grown(byId[id], api.serverNow()), inQuiet,
  };
}
