// Chapter 5 building kit: Damascene houses (stone, ablaq stripes, wooden bay windows, flat roofs).
import * as THREE from 'three';
import { mat, add } from './common.js';

export function damascusKit(world) {
  const M = {
    stone: mat(0xe8b47a, { roughness: 0.95 }), stone2: mat(0xd89466, { roughness: 0.95 }), dark: mat(0x3a3050, { roughness: 0.9 }),
    pave: mat(0xdcb48c, { roughness: 0.95 }), wood: mat(0x8a5a3a, { roughness: 0.8 }), latt: mat(0x6a3e2a, { roughness: 0.8 }),
    blue: mat(0x3a7ab8, { roughness: 0.6 }), tile: mat(0x2f8a8a, { roughness: 0.6 }), cream: mat(0xfff0d8, { roughness: 0.9 }),
    glow: new THREE.MeshStandardMaterial({ color: 0x2a2030, emissive: 0xffc070, emissiveIntensity: 0.35, roughness: 0.6 }),
    water: new THREE.MeshStandardMaterial({ color: 0x5aaed8, roughness: 0.1, metalness: 0.1, transparent: true, opacity: 0.85 }),
    green: mat(0x6ab86a), green2: mat(0x8fc878),
  };
  const inks = [];
  const statics = new THREE.Group(); statics.userData.static = true; world.add(statics);
  /** a solid box with a collider (noGrab unless told otherwise) */
  const solid = (colliders, x0, x1, z0, z1, top, bottom, m, col = {}, ink = true) => {
    const mesh = m ? add(col.dynamic ? world : statics, new THREE.BoxGeometry(x1 - x0, top - bottom, z1 - z0), m, (x0 + x1) / 2, (top + bottom) / 2, (z0 + z1) / 2) : null;
    if (mesh) { mesh.userData.noHide = true; if (ink) inks.push(mesh); }
    const c = { type: 'box', x0, x1, z0, z1, top, bottom, noGrab: true, ...col };
    colliders.push(c);
    return Object.assign(c, { mesh });
  };
  const ground = (colliders, x0, x1, z0, z1, extra = {}) => {
    add(statics, new THREE.BoxGeometry(x1 - x0, 2, z1 - z0), M.pave, (x0 + x1) / 2, -1, (z0 + z1) / 2, { cast: false }).userData.noHide = true;
    colliders.push({ type: 'box', x0, x1, z0, z1, top: 0, bottom: -2, safe: true, surface: 'concrete', ...extra });
  };
  /** a house: front faces +z when rotY = 0 */
  const house = (x, z, w, d, h, rotY, sd, y = 0) => {
    const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = rotY; world.add(g); g.userData.noHide = true; g.userData.static = true;
    const body = add(g, new THREE.BoxGeometry(w, h, d), sd % 3 ? M.stone : M.stone2, 0, h / 2, 0); inks.push(body);
    add(g, new THREE.BoxGeometry(w + 0.2, 0.5, d + 0.2), M.cream, 0, h + 0.25, 0);
    for (let k = 0; k < 4; k++) add(g, new THREE.BoxGeometry(w + 0.06, 0.22, d + 0.06), k % 2 ? M.cream : M.dark, 0, 2.4 + k * 0.22, 0, { cast: false });
    const dx = (sd % 2 ? -1 : 1) * w * 0.22;
    add(g, new THREE.BoxGeometry(1.2, 2.0, 0.1), M.wood, dx, 1.0, d / 2 + 0.05, { cast: false });
    add(g, new THREE.CylinderGeometry(0.6, 0.6, 0.1, 14, 1, false, 0, Math.PI).rotateX(Math.PI / 2).rotateZ(Math.PI / 2), M.wood, dx, 2.0, d / 2 + 0.05, { cast: false });
    if (h > 5.5) {
      const bx = (sd % 2 ? 1 : -1) * w * 0.18, bw = Math.min(3, w * 0.5);
      const bay = add(g, new THREE.BoxGeometry(bw, 1.7, 0.8), M.latt, bx, h - 1.9, d / 2 + 0.4); inks.push(bay);
      add(g, new THREE.BoxGeometry(bw - 0.3, 1.2, 0.05), M.glow, bx, h - 1.9, d / 2 + 0.82, { cast: false });
    }
    if (sd % 4 === 0) for (let k = 0; k < 5; k++) add(g, new THREE.SphereGeometry(0.28, 6, 5), k % 2 ? M.green2 : M.green, -w / 2 + 0.4 + k * (w - 0.8) / 4, h + 0.7, d / 2 - 0.2, { cast: false });
    if (sd % 5 === 2) for (let k = 0; k < 7; k++) add(g, new THREE.SphereGeometry(0.1, 5, 4), mat(0xffffff), -w / 2 + 0.5 + k * (w - 1) / 6, h - 0.3 - Math.sin((k / 6) * Math.PI) * 0.5, d / 2 + 0.12, { cast: false });   // jasmine over the door
    return g;
  };
  /** a lantern hanging from a wall bracket */
  const lantern = (x, y, z) => {
    add(statics, new THREE.BoxGeometry(0.08, 0.08, 0.7), M.dark, x, y + 0.5, z);
    add(statics, new THREE.OctahedronGeometry(0.22, 0), new THREE.MeshStandardMaterial({ color: 0xffe0a0, emissive: 0xffb050, emissiveIntensity: 1.0 }), x, y, z, { cast: false });
  };
  return { M, inks, solid, ground, house, lantern, statics };
}
