// Dr. Bata: the story's narrator. A glossy rubber duck (from their nickname بطة) with round glasses,
// a red bow tie and a little professor's cap. "Professor of Love & Long-Distance Relationships."
import * as THREE from 'three';

const M = (color, o = {}) => new THREE.MeshPhysicalMaterial({ color, roughness: 0.32, clearcoat: 0.8, clearcoatRoughness: 0.25, ...o });

export function makeBata() {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const yellow = M(0xffd23f), orange = M(0xff8a1f, { roughness: 0.4 }), black = M(0x1b1b24, { roughness: 0.3 });
  const add = (geo, mat, x, y, z, sx = 1, sy = 1, sz = 1, parent = body) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z); m.scale.set(sx, sy, sz);
    m.castShadow = true; m.receiveShadow = true;
    parent.add(m);
    return m;
  };
  const sph = (r, w = 28, h = 20) => new THREE.SphereGeometry(r, w, h);
  // body + tail
  add(sph(0.42), yellow, 0, 0.36, 0, 1.12, 0.82, 1.28);
  const tail = add(new THREE.ConeGeometry(0.16, 0.34, 18), yellow, 0, 0.55, -0.5);
  tail.rotation.x = -0.9;
  // wings (the right one is raised: he's always explaining something)
  const wingL = add(sph(0.2), yellow, -0.43, 0.42, -0.02, 0.32, 0.7, 1.15);
  wingL.rotation.z = 0.25;
  const wingR = new THREE.Group();
  wingR.position.set(0.42, 0.5, 0.02);
  body.add(wingR);
  add(sph(0.2), yellow, 0.06, 0.12, 0, 0.32, 0.75, 1.1, wingR);
  wingR.rotation.z = -1.0;
  // head
  const head = new THREE.Group();
  head.position.set(0, 0.86, 0.18);
  body.add(head);
  add(sph(0.29), yellow, 0, 0, 0, 1, 0.97, 1, head);
  // beak (upper + lower, slightly open: he's talking)
  const beakU = add(sph(0.13), orange, 0, -0.03, 0.27, 1.25, 0.42, 1.35, head);
  const beakL = add(sph(0.11), orange, 0, -0.09, 0.24, 1.05, 0.3, 1.15, head);
  // eyes with highlights
  for (const s of [-1, 1]) {
    add(sph(0.05, 16, 12), black, s * 0.12, 0.07, 0.24, 1, 1.15, 0.7, head);
    add(sph(0.016, 10, 8), M(0xffffff, { emissive: 0xffffff, emissiveIntensity: 0.6 }), s * 0.12 + 0.015, 0.095, 0.275, 1, 1, 1, head);
    // round glasses
    const ring = add(new THREE.TorusGeometry(0.085, 0.013, 10, 30), M(0x3a2a1a, { metalness: 0.3, roughness: 0.35 }), s * 0.12, 0.07, 0.27, 1, 1, 1, head);
    ring.rotation.y = s * 0.18;
    const lens = add(new THREE.CircleGeometry(0.08, 24), new THREE.MeshPhysicalMaterial({ color: 0xffffff, transparent: true, opacity: 0.12, roughness: 0.05, clearcoat: 1 }), s * 0.12, 0.07, 0.272, 1, 1, 1, head);
    lens.rotation.y = s * 0.18;
    lens.castShadow = false;
  }
  add(new THREE.CylinderGeometry(0.01, 0.01, 0.07, 8).rotateZ(Math.PI / 2), M(0x3a2a1a), 0, 0.075, 0.285, 1, 1, 1, head);
  // cheeks
  for (const s of [-1, 1]) add(sph(0.045, 12, 10), M(0xff9a9a, { roughness: 0.6, clearcoat: 0 }), s * 0.2, -0.02, 0.2, 1, 0.6, 0.4, head);
  // professor's cap (mortarboard) with a purple tassel
  const cap = new THREE.Group();
  cap.position.set(0, 0.25, -0.02);
  cap.rotation.set(-0.12, 0.6, 0.08);
  head.add(cap);
  add(new THREE.CylinderGeometry(0.15, 0.17, 0.09, 24), black, 0, 0, 0, 1, 1, 1, cap);
  add(new THREE.BoxGeometry(0.42, 0.025, 0.42), black, 0, 0.055, 0, 1, 1, 1, cap);
  add(sph(0.022, 10, 8), M(0xa25cff), 0, 0.075, 0, 1, 1, 1, cap);
  const tassel = add(new THREE.CylinderGeometry(0.008, 0.008, 0.2, 6), M(0xa25cff), 0.18, -0.03, 0.12, 1, 1, 1, cap);
  tassel.rotation.z = 0.2;
  add(new THREE.ConeGeometry(0.03, 0.08, 10), M(0xa25cff), 0.2, -0.15, 0.12, 1, 1, 1, cap);
  // red bow tie
  const bow = new THREE.Group();
  bow.position.set(0, 0.64, 0.4);
  bow.rotation.x = -0.25;
  body.add(bow);
  const red = M(0xe0263f, { roughness: 0.45 });
  for (const s of [-1, 1]) { const c = add(new THREE.ConeGeometry(0.075, 0.13, 4), red, s * 0.07, 0, 0, 1, 1, 0.45, bow); c.rotation.z = s * Math.PI / 2; }
  add(sph(0.035, 12, 10), red, 0, 0, 0.01, 1, 1, 1, bow);

  root.userData.parts = { head, wingR, beakL, body };
  return {
    root,
    /** gentle idle: bob, head tilt, waving wing, beak chatter when talking */
    animate(t, talking = false) {
      body.position.y = Math.abs(Math.sin(t * 2.2)) * 0.04;
      head.rotation.z = Math.sin(t * 1.3) * 0.08;
      head.rotation.x = Math.sin(t * 0.9) * 0.05;
      wingR.rotation.z = -1.0 + Math.sin(t * 3.1) * 0.25;
      beakL.position.y = talking ? -0.09 - Math.abs(Math.sin(t * 14)) * 0.035 : -0.09;
    },
  };
}
