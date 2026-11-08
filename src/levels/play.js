// Gameplay building blocks for the long levels (Chapter 2 on): side-view lanes, checkpoints,
// pressure plates and moving platforms. Everything is computed on each phone from both players'
// positions and the shared server clock, so nothing needs extra network messages.
import * as THREE from 'three';
import { add, rbox, mat } from './common.js';

/**
 * A side-view section: inside it you can only walk left/right along the line from → to, and the
 * camera swings round to look at it from the side (the camera sits on the left of from → to).
 * from/to: [x, z]; half = how far either side of the line the zone reaches; y0/y1 = height range.
 */
export function lane(from, to, { half = 4, y0 = -50, y1 = 200, dist = 12, pitch = 0.12, off = 0 } = {}) {
  const dx = to[0] - from[0], dz = to[1] - from[1], len = Math.hypot(dx, dz);
  return { px: from[0], pz: from[1], ax: dx / len, az: dz / len, len, half, y0, y1, dist, pitch, off };
}

/** a checkpoint lantern; returns the checkpoint record for world.checkpoints */
export function checkpoint(parent, { x, y, z, r = 2.6, sun, moon, yaw = null, label = '' }) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  parent.add(g);
  add(g, new THREE.CylinderGeometry(0.06, 0.08, 1.8, 8), mat(0x3b2f55, { roughness: 0.5 }), 0, 0.9, 0);
  const glass = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x8a7ab8, emissiveIntensity: 0.4, roughness: 0.3 });
  const lamp = add(g, new THREE.OctahedronGeometry(0.22, 0), glass, 0, 2.0, 0, { cast: false });
  g.userData.noHide = true;
  return {
    x, y, z, r, yaw, label,
    spawn: { sun: new THREE.Vector3(...sun), moon: new THREE.Vector3(...moon) },
    g, lamp,
    setOn(on, t = 0) {
      glass.emissive.setHex(on ? 0xffc96b : 0x8a7ab8);
      glass.emissiveIntensity = on ? 2.2 + Math.sin(t * 3) * 0.3 : 0.4;
      lamp.rotation.y = t * (on ? 1.2 : 0.3);
    },
  };
}

/**
 * A moving platform with a collider that carries whoever stands on it.
 * pos(sNow) → [x, y, z] (driven by the shared clock) or use set(x, y, z) each frame yourself.
 */
export function platform(parent, colliders, { w = 2, h = 0.4, d = 2, material, x = 0, y = 0, z = 0, safe = false, surface = 'wood', radius = 0.12, mesh = null }) {
  const m = mesh || add(parent, rbox(w, h, d, radius), material || mat(0xd9b38c), x, y - h / 2, z);
  if (mesh) { m.position.set(x, y - h / 2, z); parent.add(m); }
  const col = { type: 'box', x0: x - w / 2, x1: x + w / 2, z0: z - d / 2, z1: z + d / 2, top: y, bottom: y - h, dx: 0, dy: 0, dz: 0, safe, surface };
  colliders.push(col);
  let px = x, py = y, pz = z;
  return {
    m, col, w, h, d,
    get x() { return px; }, get y() { return py; }, get z() { return pz; },
    set(nx, ny, nz) {
      col.dx = nx - px; col.dy = ny - py; col.dz = nz - pz;
      px = nx; py = ny; pz = nz;
      m.position.set(nx, ny - h / 2, nz);
      col.x0 = nx - w / 2; col.x1 = nx + w / 2; col.z0 = nz - d / 2; col.z1 = nz + d / 2; col.top = ny; col.bottom = ny - h;
    },
  };
}

/** a round pressure plate; who = 'any' | 'sun' | 'moon'. update(P) with P = { sun: pos|null, moon: pos|null } */
export function plate(parent, { x, y, z, r = 0.9, who = 'any', color }) {
  const col = color ?? (who === 'sun' ? 0xffb347 : who === 'moon' ? 0xa98bff : 0xff8fb8);
  const base = add(parent, new THREE.CylinderGeometry(r + 0.12, r + 0.2, 0.14, 32), mat(0x7a6a8c, { roughness: 0.6 }), x, y + 0.07, z, { cast: false });
  const tm = new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: 0.25, roughness: 0.4 });
  const top = add(parent, new THREE.CylinderGeometry(r, r, 0.1, 32), tm, x, y + 0.16, z, { cast: false });
  base.userData.noHide = top.userData.noHide = true;
  let on = false;
  return {
    get on() { return on; },
    update(P) {
      const hit = (p) => p && Math.hypot(p.x - x, p.z - z) < r + 0.25 && p.y > y - 0.3 && p.y < y + 1.2;
      on = (who !== 'moon' && hit(P.sun)) || (who !== 'sun' && hit(P.moon));
      top.position.y = y + (on ? 0.1 : 0.16);
      tm.emissiveIntensity = on ? 1.6 : 0.25;
      return on;
    },
  };
}

/** eases a value toward a target at a fixed speed (units per second) */
export function approach(v, target, speed, dt) {
  return v < target ? Math.min(target, v + speed * dt) : Math.max(target, v - speed * dt);
}
