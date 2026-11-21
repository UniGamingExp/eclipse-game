// Chapter 5 powers: Moon's JASMINE SEEDS and Sun's WATERING CAN.
//  - Moon taps ✦ (Seeds) next to a patch of soil: a seed goes in (a little sprout).
//  - Sun taps ✦ (Water) next to a sprout: it grows. Kinds of plant:
//      vine  — leafy steps up a wall
//      lily  — a chain of lily pads across water
//      rose  — a bouncy rose bush: land on it and it throws you up
//    Water also cools hot roof tiles for a while and puts out fires.
// Seeds and grown plants are kept in the save (`<key>/s`, `<key>/g` bitmasks), fires in `<key>/f`.
// Moon's phone sends 'seed', Sun's phone 'water'; Sun's phone (or practice) writes the save.
import * as THREE from 'three';
import { add, mat } from './common.js';

export const SEED_R = 3.2, WATER_R = 4.6, COOL = 13000;

/**
 * patches: [{ id, kind: 'vine'|'lily'|'rose', x, y, z,
 *             vine: h (height), n: [nx, nz] (the wall's outward normal)
 *             lily: to: [dx, dz] (direction), count, gap
 *             rose: v (launch speed, default 21), aim: [vx, vz]
 *             need?: () => bool }]
 * hot:   [{ id, x0, x1, z0, z1, y }]
 * fires: [{ id, x, y, z, w, d, h }]       (a wall of fire: a collider until it's put out)
 */
export function createGarden(world, colliders, { key, patches = [], hot = [], fires = [], onGrow = null }) {
  let api = null;
  const cd = { sun: 0, moon: 0 };
  const soilM = mat(0x7a5236, { roughness: 1 }), leafM = mat(0x5fae5a, { roughness: 0.8 }), leaf2M = mat(0x7cc46a, { roughness: 0.8 });
  const stemM = mat(0x4a7a3a, { roughness: 0.9 }), jasM = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff4e0, emissiveIntensity: 0.35, roughness: 0.6 });
  const roseM = mat(0xe8436a, { roughness: 0.6 }), lilyPadM = mat(0x4f9a58, { roughness: 0.7 }), lilyM = mat(0xffd6ec, { roughness: 0.6 });
  const ringM = new THREE.MeshBasicMaterial({ color: 0xc6a8ff, transparent: true, opacity: 0.7, depthWrite: false });

  const P = patches.map((q, i) => {
    const g = new THREE.Group(); g.position.set(q.x, q.y, q.z); g.userData.noHide = true; g.userData.noSketch = true; world.add(g);
    // the patch: a ring of soil with a lilac sparkle ring
    add(g, new THREE.CylinderGeometry(0.75, 0.85, 0.12, 12), soilM, 0, 0.06, 0, { cast: false });
    const ring = add(g, new THREE.RingGeometry(0.95, 1.1, 24).rotateX(-Math.PI / 2), ringM.clone(), 0, 0.14, 0, { cast: false, receive: false });
    const sprout = new THREE.Group(); g.add(sprout); sprout.visible = false;
    add(sprout, new THREE.CylinderGeometry(0.03, 0.04, 0.4, 5), stemM, 0, 0.3, 0, { cast: false });
    for (const s of [-1, 1]) add(sprout, new THREE.SphereGeometry(0.12, 6, 4).scale(1.6, 0.4, 0.8), leaf2M, s * 0.12, 0.48, 0, { cast: false });
    const plant = new THREE.Group(); world.add(plant); plant.visible = false; plant.userData.noHide = true; plant.userData.noSketch = true;
    const cols = [];
    if (q.kind === 'vine') {
      // a staircase of leafy ledges against the wall: 'side' climbs sideways along the wall, 'out' starts away
      // from the wall and climbs towards it (for side views, where you can't move along the wall)
      const [nx, nz] = q.n, tx = -nz, tz = nx, sgn = q.flip ? -1 : 1;
      const steps = Math.ceil((q.h - 0.4) / 1.45), out = q.stair === 'out';
      const at = (k) => {
        const o = (k - 1) * 1.1;
        return out ? [q.x + nx * (steps - k) * 1.1, q.z + nz * (steps - k) * 1.1] : [q.x + tx * o * sgn, q.z + tz * o * sgn];
      };
      const pts = [];
      for (let k = 0; k <= steps; k++) { const [cx, cz] = at(Math.max(1, k)); pts.push(new THREE.Vector3(cx - nx * 0.4, q.y + (k === 0 ? 0 : (k / steps) * q.h) - 0.3, cz - nz * 0.4)); }
      add(plant, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), steps * 8, 0.1, 5), stemM, 0, 0, 0);
      const ax = out ? Math.abs(nx) : Math.abs(tx);   // the stair runs along x?
      for (let k = 1; k <= steps; k++) {
        const y = q.y + (k / steps) * q.h, [cx, cz] = at(k);
        const hx = ax > 0.5 ? 0.55 : 0.72, hz = ax > 0.5 ? 0.72 : 0.55;
        const pad = add(plant, new THREE.CylinderGeometry(1, 0.85, 0.2, 9), k % 3 ? leafM : leaf2M, cx, y - 0.1, cz);
        pad.scale.set(hx * 1.05, 1, hz * 1.05);
        for (let f = 0; f < 3; f++) add(plant, new THREE.SphereGeometry(0.09, 6, 4), jasM, cx + Math.cos(f * 2.1 + k) * hx * 0.7, y + 0.04, cz + Math.sin(f * 2.1 + k) * hz * 0.7, { cast: false });
        cols.push({ type: 'box', x0: cx - hx, x1: cx + hx, z0: cz - hz, z1: cz + hz, top: y, bottom: y - 0.2, disabled: true, surface: 'grass', ky: y - q.y });
      }
    } else if (q.kind === 'lily') {
      const [dx, dz] = q.to, L = Math.hypot(dx, dz) || 1, gap = q.gap ?? 3.1;
      for (let k = 1; k <= q.count; k++) {
        const cx = q.x + (dx / L) * gap * k, cz = q.z + (dz / L) * gap * k;
        const py = q.py ?? q.y;
        const pad = add(plant, new THREE.CylinderGeometry(1.25, 1.25, 0.12, 16, 1, false, 0.4, Math.PI * 2 - 0.5), lilyPadM, cx, py + 0.06, cz);
        pad.rotation.y = k * 1.7;
        if (k % 2) add(plant, new THREE.ConeGeometry(0.28, 0.4, 7), lilyM, cx + 0.4, py + 0.3, cz - 0.3, { cast: false });
        cols.push({ type: 'cyl', x: cx, z: cz, r: 1.2, top: py + 0.12, bottom: py - 0.4, disabled: true, surface: 'grass', ky: k * 0.12 });
      }
    } else if (q.kind === 'rose') {
      add(plant, new THREE.IcosahedronGeometry(1.05, 1).scale(1, 0.75, 1), leafM, q.x, q.y + 0.75, q.z);
      for (let f = 0; f < 9; f++) {
        const a = f * 0.7, r = f % 3 === 0 ? 0.3 : 0.75;
        add(plant, new THREE.IcosahedronGeometry(0.2, 0), roseM, q.x + Math.cos(a) * r, q.y + 1.15 + (f % 2) * 0.15, q.z + Math.sin(a) * r, { cast: false });
      }
      cols.push({ type: 'cyl', x: q.x, z: q.z, r: 1.0, top: q.y + 1.3, bottom: q.y, disabled: true, surface: 'grass', ky: 0 });
    }
    for (const c of cols) colliders.push(c);
    return { ...q, i, g, ring, sprout, plant, cols, k: 0, seeded: false, grown: false, bounceCd: { sun: 0, moon: 0 } };
  });
  const byId = Object.fromEntries(P.map((p) => [p.id, p]));

  // ---------------------------------------------------------------- hot tiles
  const H = hot.map((h, i) => {
    const m = new THREE.MeshStandardMaterial({ color: 0xd8703a, emissive: 0xff5a20, emissiveIntensity: 0.6, roughness: 0.8 });
    const mesh = add(world, new THREE.BoxGeometry(h.x1 - h.x0, 0.08, h.z1 - h.z0), m, (h.x0 + h.x1) / 2, h.y + 0.04, (h.z0 + h.z1) / 2, { cast: false });
    mesh.userData.noHide = true; mesh.userData.noSketch = true;
    return { ...h, i, m, until: 0, last: { sun: -1e9, moon: -1e9 } };
  });
  // ---------------------------------------------------------------- fires
  const flameM = new THREE.MeshBasicMaterial({ color: new THREE.Color(2.2, 1.0, 0.3), transparent: true, opacity: 0.85, depthWrite: false, blending: THREE.AdditiveBlending });
  const F = fires.map((f, i) => {
    const g = new THREE.Group(); g.position.set(f.x, f.y, f.z); g.userData.noHide = true; g.userData.noSketch = true; world.add(g);
    const flames = [];
    const n = Math.max(3, Math.round(Math.max(f.w, f.d) * 1.3));
    for (let k = 0; k < n; k++) {
      const u = k / (n - 1) - 0.5;
      const m = add(g, new THREE.ConeGeometry(0.5, f.h * 0.75, 7).translate(0, f.h * 0.375, 0), flameM, u * f.w, 0, u * f.d, { cast: false, receive: false });
      m.userData.noSketch = true; flames.push(m);
    }
    const light = new THREE.PointLight(0xff8a3a, 6, 9, 1.6); light.position.y = 1.2; g.add(light);
    const col = { type: 'box', x0: f.x - f.w / 2 - 0.3, x1: f.x + f.w / 2 + 0.3, z0: f.z - f.d / 2 - 0.3, z1: f.z + f.d / 2 + 0.3, top: f.y + f.h, bottom: f.y, noGrab: true };
    colliders.push(col);
    return { ...f, i, g, flames, light, col, out: false };
  });

  const authority = () => api && (api.kind === 'solo' || api.role === 'sun');
  const mask = (k) => api?.save?.[key]?.[k] || 0;
  const active = (p) => !p.need || p.need();
  const isSeeded = (p) => p.seeded || !!(mask('s') & (1 << p.i));
  const isGrown = (p) => p.grown || !!(mask('g') & (1 << p.i));

  function seed(p, quiet) {
    if (p.seeded) return;
    p.seeded = true; p.seedT = api.serverNow();
    if (!quiet) { api.sound.play('pin'); api.fx.sparks(new THREE.Vector3(p.x, p.y + 0.5, p.z), 0xc6a8ff, 18, 2.5); }
    if (authority() && !(mask('s') & (1 << p.i))) api.setSave(`${key}/s`, mask('s') | (1 << p.i));
  }
  function grow(p, quiet) {
    if (p.grown) return;
    p.grown = true; p.seeded = true;
    if (!quiet) { api.sound.play('bloom'); api.fx.sparks(new THREE.Vector3(p.x, p.y + 1, p.z), 0x9ae07a, 30, 4); onGrow?.(p.id); }
    if (authority() && !(mask('g') & (1 << p.i))) api.setSave(`${key}/g`, mask('g') | (1 << p.i));
  }
  function douse(f, quiet) {
    if (f.out) return;
    f.out = true; f.col.disabled = true; f.g.visible = false;
    if (!quiet) { api.sound.play('splash'); for (let k = 0; k < 3; k++) api.fx.sparks(new THREE.Vector3(f.x, f.y + 0.6 + k * 0.5, f.z), 0xdfe8f0, 24, 4); }
    if (authority() && !(mask('f') & (1 << f.i))) api.setSave(`${key}/f`, mask('f') | (1 << f.i));
  }
  /** Sun's watering can, used at p */
  function water(p, sNow, quiet = false) {
    let did = false;
    let best = null, bd = WATER_R;
    for (const q of P) {
      if (!isSeeded(q) || isGrown(q) || !active(q)) continue;
      const d = Math.hypot(q.x - p.x, q.z - p.z);
      if (d < bd && Math.abs(q.y - p.y) < 3) { bd = d; best = q; }
    }
    if (best) { grow(best, quiet); did = true; }
    for (const h of H) {
      const nx = Math.max(h.x0, Math.min(h.x1, p.x)), nz = Math.max(h.z0, Math.min(h.z1, p.z));
      if (Math.hypot(nx - p.x, nz - p.z) < WATER_R + 0.5 && p.y < h.y + 2 && p.y > h.y - 10) {
        h.until = sNow + (h.cool || COOL); did = true;
        if (!quiet) api.fx.sparks(new THREE.Vector3(nx, h.y + 0.3, nz), 0xffffff, 20, 3);
      }
    }
    for (const f of F) if (!f.out && Math.hypot(f.x - p.x, f.z - p.z) < WATER_R + Math.max(f.w, f.d) / 2 && Math.abs(f.y - p.y) < 3) { douse(f, quiet); did = true; }
    return did;
  }
  // a little arc of water drops from the can
  const dropM = new THREE.MeshBasicMaterial({ color: 0xbfe6ff, transparent: true, opacity: 0.85, depthWrite: false });
  const drops = [];
  for (let i = 0; i < 14; i++) { const m = add(world, new THREE.SphereGeometry(0.07, 5, 4), dropM, 0, -50, 0, { cast: false, receive: false }); m.visible = false; m.userData.noSketch = true; drops.push({ m, t: 9, v: new THREE.Vector3() }); }
  function splashFrom(p, yaw) {
    drops.forEach((d, k) => {
      d.t = -k * 0.025; d.m.visible = false;
      d.p0 = p.clone().add(new THREE.Vector3(Math.sin(yaw) * 0.5, 1.2, Math.cos(yaw) * 0.5));
      d.v.set(Math.sin(yaw) * (3 + Math.random()), 2 + Math.random() * 1.5, Math.cos(yaw) * (3 + Math.random()));
    });
  }

  const abilities = {
    label: (who) => (who === 'sun' ? 'Water' : 'Seeds'),
    use(who) {
      const sNow = api.serverNow(), p = api.bodies[who].pos;
      if (sNow < cd[who]) { api.sound.play('no'); return true; }
      if (who === 'moon') {
        let best = null, bd = SEED_R;
        for (const q of P) {
          if (isSeeded(q)) continue;
          const d = Math.hypot(q.x - p.x, q.z - p.z);
          if (d < bd && Math.abs(q.y - p.y) < 2.5) { bd = d; best = q; }
        }
        cd.moon = sNow + 500;
        if (!best) {
          api.sound.play('no');
          const near = P.find((q) => Math.hypot(q.x - p.x, q.z - p.z) < SEED_R + 1 && Math.abs(q.y - p.y) < 2.5);
          api.caption?.(near && !isGrown(near) ? 'Planted already. Now he waters it 💧' : 'Seeds go into the soil patches (the lilac rings) 🌱', 2600);
          return true;
        }
        if (!active(best)) { api.sound.play('no'); api.caption?.(best.dry || 'The soil here is still too dry for seeds.', 2800); return true; }
        seed(best);
        api.send('seed', { i: best.i });
        return true;
      }
      cd.sun = sNow + 700;
      const yaw = api.chars?.sun?.yaw ?? 0;
      splashFrom(p.clone(), yaw);
      api.sound.play('water');
      const did = water(p, sNow);
      api.send('water', { x: +p.x.toFixed(2), y: +p.y.toFixed(2), z: +p.z.toFixed(2), t: Math.round(sNow), yaw: +yaw.toFixed(2) });
      if (!did) {
        const near = P.find((q) => !isSeeded(q) && Math.hypot(q.x - p.x, q.z - p.z) < WATER_R + 1);
        if (near) api.caption?.('Nothing to water yet. She has to plant a seed first 🌱', 2600);
      }
      return true;
    },
    onEvent(e) {
      if (e.type === 'seed') { const p = P[e.i]; if (p) seed(p); return true; }
      if (e.type === 'water') {
        const p = new THREE.Vector3(e.x, e.y, e.z);
        splashFrom(p, e.yaw || 0); api.sound.play('water');
        water(p, e.t || api.serverNow());
        return true;
      }
      return false;
    },
    update(dt, sNow, t) {
      const sm = mask('s'), gm = mask('g'), fm = mask('f');
      for (const p of P) {
        if (!p.seeded && sm & (1 << p.i)) seed(p, true);
        if (p.seeded && !p.grown && p.wiltable && !(sm & (1 << p.i)) && p.seedT && api.serverNow() - p.seedT > 2500) p.seeded = false;
        if (!p.grown && gm & (1 << p.i)) grow(p, true);
        const on = active(p);
        p.ring.visible = !p.seeded && on;
        if (p.ring.visible) p.ring.material.opacity = 0.45 + Math.sin(t * 3 + p.i) * 0.25;
        p.sprout.visible = p.seeded && !p.grown;
        if (p.sprout.visible) p.sprout.rotation.z = Math.sin(t * 3 + p.i) * 0.15;
        p.k = Math.min(1, p.k + (p.grown ? dt / 0.9 : -1));
        if (p.k < 0) p.k = 0;
        p.plant.visible = p.k > 0;
        const e = 1 - (1 - p.k) ** 3;
        if (p.kind === 'vine') {
          p.plant.scale.set(1, Math.max(0.01, e), 1);
          p.plant.position.y = p.y * (1 - e);
          for (const c of p.cols) c.disabled = !(p.grown && p.k * p.h + 0.5 >= c.ky);
        } else {
          p.plant.scale.setScalar(Math.max(0.01, e));
          p.plant.position.set(p.x * (1 - e), p.y * (1 - e), p.z * (1 - e));
          for (const c of p.cols) c.disabled = !(p.grown && p.k > 0.6);
        }
        // roses throw whoever lands on them
        if (p.kind === 'rose' && p.grown && p.k >= 1) {
          for (const r of api.mine()) {
            p.bounceCd[r] -= dt;
            const b = api.bodies[r], q = b.pos;
            if (p.bounceCd[r] > 0 || Math.hypot(q.x - p.x, q.z - p.z) > 1.15 || q.y < p.y + 1.1 || q.y > p.y + 1.7 || b.vel.y > 0.5) continue;
            p.bounceCd[r] = 0.6;
            const [ax, az] = p.aim || [0, 0];
            api.launch(r, p.v ?? 21, ax, az, p.aim ? p.lock ?? 1.2 : 0);
            api.sound.play('bounce');
            api.fx.sparks(new THREE.Vector3(p.x, p.y + 1.3, p.z), 0xff7aa0, 14, 3);
          }
        }
      }
      for (const h of H) {
        const cool = sNow < h.until;
        const left = (h.until - sNow) / COOL;
        h.m.emissiveIntensity += ((cool ? (left < 0.25 ? 0.3 : 0) : 0.6 + Math.sin(t * 5 + h.i) * 0.15) - h.m.emissiveIntensity) * Math.min(1, dt * 5);
        h.m.color.setHex(cool ? 0x8a9aa8 : 0xd8703a);
        if (cool) continue;
        for (const r of api.mine()) {
          const b = api.bodies[r], q = b.pos;
          if (q.x < h.x0 || q.x > h.x1 || q.z < h.z0 || q.z > h.z1 || q.y < h.y - 0.05 || q.y > h.y + 0.25) continue;
          if (sNow - h.last[r] < 500) continue;
          h.last[r] = sNow;
          const vx = b.vel.x, vz = b.vel.z, L = Math.hypot(vx, vz) || 1;
          api.launch(r, 11, (-vx / L) * 6, (-vz / L) * 6, 0.5);
          api.sound.play('no');
          if (r === api.active) api.caption?.('🔥 Ouch! The tiles are burning hot. Water them first 💧', 2600);
        }
      }
      for (const f of F) {
        if (!f.out && fm & (1 << f.i)) douse(f, true);
        if (f.out) continue;
        f.flames.forEach((m, k) => { m.scale.set(1, 0.8 + Math.sin(t * 9 + k * 1.7) * 0.25 + Math.sin(t * 13 + k) * 0.1, 1); });
        f.light.intensity = 5 + Math.sin(t * 11) * 1.5;
      }
      for (const d of drops) {
        if (d.t > 1.2 || !d.p0) { d.m.visible = false; continue; }
        d.t += dt;
        if (d.t < 0) continue;
        d.m.visible = true;
        d.m.position.set(d.p0.x + d.v.x * d.t, d.p0.y + d.v.y * d.t - 7 * d.t * d.t, d.p0.z + d.v.z * d.t);
      }
    },
  };
  return {
    abilities, attach(a) { api = a; }, patches: P, byId, hot: H, fires: F,
    grown: (id) => isGrown(byId[id]), seeded: (id) => isSeeded(byId[id]),
    /** a seed that wilts (Sun's phone writes it) */
    unseed(id) {
      const p = byId[id];
      if (!p || isGrown(p)) return;
      p.seeded = false;
      api.fx.sparks(new THREE.Vector3(p.x, p.y + 0.4, p.z), 0x8a8a98, 14, 2);
      if (authority()) api.setSave(`${key}/s`, mask('s') & ~(1 << p.i));
    },
    grownMask: () => P.reduce((m, p) => (isGrown(p) ? m | (1 << p.i) : m), 0),
  };
}
