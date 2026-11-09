// Chapter 2 · 12 October · Part 3 "Kann ich mit dir flirten?" (v2: the long version, to the playtest-2 rules).
// After the call, one thing was still unsaid. Three sections:
//  1. The garden of unsaid words (y −24.5): six little shy words ("shylings") run away from your light.
//     They only go into the lantern while they're inside BOTH glows, so you corner them together.
//     When all six are in, they turn into a cloud stair across the 23 m gap to the tower.
//  2. The stairs of courage (side view along +x at z = 24, three 7 m floors, zig-zag): each climb has three
//     steps in the other one's colour. A step only holds while its owner's light is on it AND its owner keeps
//     some distance (3.5 m, 4.5 m on the last flight): too close and it gets shy and puffs away. So one stands
//     back and flares while the other climbs, then the other way round. Floor 2's steps sway, floor 3's bob.
//     The back wall spells "kann ich · mit dir · flirten?" as you climb.
//  3. On the roof, a bridge to the arena of SHYNESS, the boss:
//     Phase 1: it sends out "awkward silence" shockwaves (jump over them). Flare together near it → it blushes. 3 hits.
//     Phase 2: it hides its face. Stand on the ☀ and ☾ courage pads at the same time → it peeks out for a few
//              seconds → flare together. 2 hits.
//     Phase 3: it sinks down, almost gone. Walk up to it holding hands → the confession, then "Babeee".
// Sun's phone (or practice) runs the shylings and the boss and shares them through the save / events.
import * as THREE from 'three';
import { mat, add, rbox, islandMeshes, sign, hangSign, cloud, sky, makeStar, spinStars, lights, meadow, tree } from './common.js';
import { lane, checkpoint, approach } from './play.js';
import { memoryMist } from '../memory.js';
import { createLights, FLARE_R } from './light.js';

const AR = 13;                                  // the boss arena (origin, y 0)
const PADS = { sun: new THREE.Vector3(-7, 0, -1), moon: new THREE.Vector3(7, 0, -1) };
const GG = -24.5;                               // the garden's floor
const GC = { x: 0, z: 62 }, GR = 14.4;          // garden centre, hedge ring radius
const SHR = 13.2;                               // how far from the centre the shylings may go
const LANT = { x: 0, z: GC.z - 13.5 };          // the lantern, set into the hedge at the north
const GATE_A = Math.atan2(50.76 - GC.z, 9 - GC.x); // the gate in the hedge (north-east, at x = 9)
const GY = -21;                                 // the tower's ground floor (3 × 7 m up to the roof at y 0)
const TZ = 24;                                  // the stairs' side-view plane
const TX = 12.5;                                // tower inside: x −12.5 … 12.5
const Z0 = TZ - 3.4, Z1 = TZ + 3.4;             // tower floors: z 20.6 … 27.4
const WORDS = ['"kann…"', '"…ich…"', '"…mit…"', '"…dir…"', '"…flirten…"', '"…?" 💜'];
const ALL = 63;                                 // all six words caught
const LINES = ['Eek!', 'D-don\'t look at me like that…', 'What if she says no?!', 'S-stop being so sweet…', 'Okay… okay! Just say it…'];

function makeShyness() {
  const g = new THREE.Group();
  const puff = mat(0xd8d0ee, { roughness: 0.9 });
  const body = new THREE.Group();
  g.add(body);
  for (const [x, y, z, r] of [[0, 0, 0, 1.6], [1.2, 0.3, -0.2, 1.1], [-1.2, 0.3, -0.2, 1.1], [0.7, 1.0, -0.3, 1.0], [-0.7, 1.0, -0.3, 1.0], [0, 1.3, -0.6, 1.0], [1.6, -0.4, 0, 0.8], [-1.6, -0.4, 0, 0.8]]) {
    add(body, new THREE.SphereGeometry(r, 24, 16), puff, x, y, z);
  }
  const eyeM = mat(0x2b2440, { roughness: 0.3 });
  const eyes = [];
  for (const s of [-1, 1]) {
    const e = add(body, new THREE.SphereGeometry(0.2, 16, 12), eyeM, s * 0.55, 0.25, 1.45);
    e.scale.set(1, 1.3, 0.6);
    add(e, new THREE.SphereGeometry(0.07, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }), 0.06, 0.08, 0.15, { cast: false });
    eyes.push(e);
  }
  const blushM = new THREE.MeshBasicMaterial({ color: 0xff7aa8, transparent: true, opacity: 0.25 });
  const cheeks = [-1, 1].map((s) => { const c = add(body, new THREE.SphereGeometry(0.28, 14, 10), blushM, s * 0.95, -0.12, 1.3, { cast: false }); c.scale.set(1, 0.55, 0.3); return c; });
  const mouth = add(body, new THREE.TorusGeometry(0.14, 0.035, 8, 20, Math.PI), eyeM, 0, -0.25, 1.52, { cast: false });
  mouth.rotation.z = Math.PI;
  // its "hands": two puffs that cover the face in phase 2
  const hands = [-1, 1].map((s) => add(body, new THREE.SphereGeometry(0.6, 18, 12), puff, s * 1.9, -0.5, 0.9));
  return { g, body, eyes, cheeks, blushM, mouth, hands };
}

// a little shy word: a puff of cloud with big eyes and pink cheeks
const SPH = new THREE.SphereGeometry(1, 18, 12);
function makeShyling() {
  const g = new THREE.Group();
  const body = new THREE.Group();
  g.add(body);
  const puff = mat(0xf1eaff, { roughness: 0.85, emissive: 0xb89cff, emissiveIntensity: 0.3 });
  for (const [x, y, z, r] of [[0, 0, 0, 0.42], [0.33, 0.04, -0.05, 0.3], [-0.33, 0.04, -0.05, 0.3], [0, 0.26, -0.1, 0.3], [0.15, -0.2, 0.05, 0.24], [-0.15, -0.2, 0.05, 0.24]]) add(body, SPH, puff, x, y, z).scale.setScalar(r);
  const eyeM = mat(0x2b2440, { roughness: 0.3 });
  const eyes = [-1, 1].map((s) => { const e = add(body, SPH, eyeM, s * 0.13, 0.06, 0.38, { cast: false }); e.scale.set(0.055, 0.08, 0.04); return e; });
  const blush = new THREE.MeshBasicMaterial({ color: 0xff86b4, transparent: true, opacity: 0.55 });
  for (const s of [-1, 1]) { const c = add(body, SPH, blush, s * 0.25, -0.06, 0.34, { cast: false }); c.scale.set(0.08, 0.045, 0.03); }
  g.traverse((o) => { o.userData.noHide = true; });
  return { g, body, eyes };
}

function canvasTex(w, h, draw) {
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h;
  draw(cv.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

export function buildCh2Shy(root, scene) {
  const colliders = [];
  const stars = [];
  const anims = [];
  const world = new THREE.Group();
  root.add(world);

  scene.fog = new THREE.Fog(new THREE.Color('#5a4890'), 60, 240);
  sky(root, {
    top: '#120f3a', mid: '#5a3f8f', low: '#e58fb4', neb1: '#ff8fc8', neb2: '#9a7bff', stars: 1, nebula: 1, cloud: 0xc8a6e0, far: false, cx: 0, cz: 30, seaY: -38, seaZ: 30,
    lightDir: [0.2, 0.5, 1],
    planets: [['lilac', 0.0, 0.2, 240, 0.2, 2.0], ['ember', 0.9, 0.12, 230, 0.1, 1.6], ['rose', -0.9, 0.18, 250, -0.5, 1.4], ['giant', 2.6, 0.24, 300, 0.42], ['mint', -2.5, 0.3, 220, 0.3]],
  });
  lights(root, { sunColor: 0xe8d8ff, sunI: 1.9, hemiSky: 0xb0a4ff, hemiGround: 0xffb0c8, hemiI: 1.55, pos: [14, 40, 52], target: [0, -12, 34], extent: 50 });

  const box = (x0, x1, z0, z1, top, bottom, m, o = {}) => {
    const mesh = add(world, rbox(x1 - x0, top - bottom, z1 - z0, Math.min(0.12, (top - bottom) / 3)), m, (x0 + x1) / 2, (top + bottom) / 2, (z0 + z1) / 2, o.cast === false ? { cast: false } : {});
    if (o.noHide) mesh.userData.noHide = true;
    const c = { type: 'box', x0, x1, z0, z1, top, bottom, ...o.col };
    colliders.push(c);
    return c;
  };

  // ================================================================ 1. THE GARDEN OF UNSAID WORDS
  islandMeshes(world, GC.x, GC.z, GR + 0.8, GG, 10, 0xa9d39a, 0xd9a8c0, 0x6e5a9a);
  colliders.push({ type: 'cyl', x: GC.x, z: GC.z, r: GR + 0.75, top: GG, bottom: GG - 1.2, safe: true, surface: 'grass' });
  // the hedge ring: 32 rounded hedge blocks, a 5.6 m gap for the gate (north-east)
  const hedgeM = mat(0x4f8f5c, { roughness: 0.95 });
  const hedgeTop = mat(0x6fb46a, { roughness: 0.95 });
  const STEP_A = (Math.PI * 2) / 32;
  for (let k = 0; k < 32; k++) {
    if (k === 0 || k === 31) continue;                       // the gate
    const a = GATE_A + (k + 0.5) * STEP_A, x = GC.x + Math.cos(a) * GR, z = GC.z + Math.sin(a) * GR;
    if (Math.hypot(x - LANT.x, z - LANT.z) < 1.5) continue;  // the lantern stands in the hedge here
    const m = add(world, rbox(2.75, 2.2, 1.0, 0.35), hedgeM, x, GG + 1.1, z);
    m.rotation.y = -a - Math.PI / 2;
    const t = add(m, rbox(2.6, 0.3, 0.9, 0.14), hedgeTop, 0, 1.1, 0, { cast: false });
    t.scale.y = 1;
  }
  for (let a = 0; a < Math.PI * 2; a += 1.0 / GR) {
    const da = Math.atan2(Math.sin(a - GATE_A), Math.cos(a - GATE_A));
    if (Math.abs(da) < STEP_A || Math.hypot(GC.x + Math.cos(a) * GR - LANT.x, GC.z + Math.sin(a) * GR - LANT.z) < 1.0) continue;
    colliders.push({ type: 'cyl', x: GC.x + Math.cos(a) * GR, z: GC.z + Math.sin(a) * GR, r: 0.55, top: GG + 2.2, bottom: GG, noGrab: true, noStep: true });
  }
  // the gate: two pillars and an arch; a pink "shy curtain" until all six words are in the lantern
  const gx = GC.x + Math.cos(GATE_A) * GR, gz = GC.z + Math.sin(GATE_A) * GR;
  const tang = [-Math.sin(GATE_A), Math.cos(GATE_A)];
  const stoneM = mat(0xe9dcf2, { roughness: 0.7 });
  for (const s of [-1, 1]) {
    const px = gx + tang[0] * s * 2.95, pz = gz + tang[1] * s * 2.95;
    add(world, new THREE.CylinderGeometry(0.42, 0.5, 3.6, 12), stoneM, px, GG + 1.8, pz);
    add(world, new THREE.SphereGeometry(0.5, 16, 10), mat(0xffc6e0, { emissive: 0xff8fbf, emissiveIntensity: 0.6 }), px, GG + 3.85, pz, { cast: false });
    colliders.push({ type: 'cyl', x: px, z: pz, r: 0.5, top: GG + 3.6, bottom: GG, noGrab: true });
  }
  const arch = add(world, new THREE.TorusGeometry(2.95, 0.22, 10, 40, Math.PI), stoneM, gx, GG + 3.4, gz);
  arch.rotation.y = -GATE_A - Math.PI / 2;
  arch.scale.y = 0.45;
  const curtainM = new THREE.MeshStandardMaterial({ color: 0xffc8e2, emissive: 0xff7fb8, emissiveIntensity: 0.5, roughness: 0.9, transparent: true, opacity: 0.85 });
  const curtain = new THREE.Group();
  curtain.userData.noHide = true;
  world.add(curtain);
  for (let i = 0; i < 9; i++) {
    const u = (i / 8 - 0.5) * 4.9, m = add(curtain, SPH, curtainM, gx + tang[0] * u, GG + 0.7 + (i % 3) * 0.55, gz + tang[1] * u, { cast: false });
    m.scale.setScalar(0.75 + (i % 2) * 0.2);
  }
  const curtainCols = [-1.6, 0, 1.6].map((u) => { const c = { type: 'cyl', x: gx + tang[0] * u, z: gz + tang[1] * u, r: 1.0, top: GG + 2.2, bottom: GG, noGrab: true }; colliders.push(c); return c; });
  // the cloud stair to the tower: 12 steps up 3.5 m over 23 m, appears when the words are free
  const stairM = new THREE.MeshStandardMaterial({ color: 0xfff0f8, emissive: 0xffb8dc, emissiveIntensity: 0.35, roughness: 0.95, transparent: true, opacity: 0 });
  const stair = [];
  for (let i = 0; i < 12; i++) {
    const za = 51.4 - i * 2.0, zb = za - 2.05, top = GG + (i + 1) * ((GY - GG) / 12);
    const m = add(world, rbox(5, 0.55, 2.05, 0.25), stairM, 9, top - 0.275, (za + zb) / 2, { cast: false });
    m.userData.noHide = true;
    const c = { type: 'box', x0: 6.5, x1: 11.5, z0: zb, z1: za, top, bottom: top - 0.55, disabled: true, safe: true, surface: 'grass' };
    colliders.push(c);
    stair.push({ m, c });
  }
  // the lantern: shy words only go in while they're inside both glows
  const lantG = new THREE.Group();
  lantG.position.set(LANT.x, GG, LANT.z);
  world.add(lantG);
  lantG.userData.noHide = true;
  const goldM = mat(0xe7b45a, { roughness: 0.35, metalness: 0.6 });
  add(lantG, new THREE.CylinderGeometry(1.05, 1.2, 0.5, 24), stoneM, 0, 0.25, 0);
  const glassM = new THREE.MeshStandardMaterial({ color: 0xfff4e0, emissive: 0xffb860, emissiveIntensity: 0.15, roughness: 0.15, transparent: true, opacity: 0.32, depthWrite: false });
  add(lantG, new THREE.CylinderGeometry(0.85, 0.85, 1.8, 24, 1, true), glassM, 0, 1.4, 0, { cast: false });
  for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2; add(lantG, new THREE.CylinderGeometry(0.05, 0.05, 1.8, 6), goldM, Math.cos(a) * 0.86, 1.4, Math.sin(a) * 0.86); }
  add(lantG, new THREE.CylinderGeometry(0.95, 0.95, 0.12, 24), goldM, 0, 2.35, 0);
  add(lantG, new THREE.ConeGeometry(1.0, 0.8, 24), goldM, 0, 2.8, 0);
  const lantLight = new THREE.PointLight(0xffc070, 0, 10, 1.6);
  lantLight.position.y = 1.4;
  lantG.add(lantLight);
  colliders.push({ type: 'cyl', x: LANT.x, z: LANT.z, r: 1.15, top: GG + 3.2, bottom: GG, noGrab: true });
  for (const s of [-1, 1]) for (const [dx, dy, r] of [[1.45, 0.75, 0.8], [1.9, 1.4, 0.6]]) add(world, SPH, hedgeM, LANT.x + s * dx, GG + dy, LANT.z - 0.35, { cast: false }).scale.setScalar(r);
  // a fountain in the middle, four flower beds and two little trees (the shylings run round them)
  const OBST = [[GC.x, GC.z, 2.1], [-7, 58, 1.4], [7.5, 60, 1.4], [-5, 69, 1.3], [6, 68.5, 1.3], [-10.2, 53.5, 0.6], [10.5, 66, 0.6]];
  add(world, new THREE.CylinderGeometry(2.1, 2.3, 0.7, 32), stoneM, GC.x, GG + 0.35, GC.z);
  const water = add(world, new THREE.CircleGeometry(1.85, 32).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x9ad8ff, emissive: 0x4a9ad8, emissiveIntensity: 0.6, roughness: 0.1 }), GC.x, GG + 0.62, GC.z, { cast: false });
  water.userData.noHide = true;
  add(world, new THREE.CylinderGeometry(0.2, 0.3, 1.4, 12), stoneM, GC.x, GG + 1.3, GC.z);
  add(world, SPH, new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 1.0, 1.4) }), GC.x, GG + 2.15, GC.z, { cast: false }).scale.setScalar(0.32);
  colliders.push({ type: 'cyl', x: GC.x, z: GC.z, r: 2.1, top: GG + 0.7, bottom: GG, surface: 'stone' });
  for (const [x, z, r] of OBST.slice(1, 5)) {
    add(world, new THREE.CylinderGeometry(r, r + 0.1, 0.4, 28), mat(0x8a6a8a), x, GG + 0.2, z);
    colliders.push({ type: 'cyl', x, z, r, top: GG + 0.4, bottom: GG });
  }
  for (const [x, z] of OBST.slice(5)) { tree(world, x, GG, z, 1.1, Math.abs(x | 0)); colliders.push({ type: 'cyl', x, z, r: 0.45, top: GG + 3, bottom: GG, noStep: true }); }
  meadow(world, [{ x: GC.x, z: GC.z, r: GR - 0.6, y: GG, flowers: 110, tint: 0xa9d39a }, ...OBST.slice(1, 5).map(([x, z, r]) => ({ x, z, r: r - 0.1, y: GG + 0.4, flowers: 40, grass: 0 }))],
    [[GC.x, GC.z, 2.4], [LANT.x, LANT.z, 1.5], [0, 72, 2.5]], { flowerCols: [0xffffff, 0xff8fbf, 0xc6b3ff, 0xffd27a] });
  sign(world, -3.4, 70.5, 0.25, ['Shy words! 🙈', 'They run from your light']).position.y = GG;
  sign(world, 3.4, 70.5, -0.25, ['Into the lantern only', 'inside BOTH glows ✨']).position.y = GG;
  // the shylings
  const SH = [[-6, 64], [6, 63], [-4, 54.5], [4.5, 55], [-9.5, 66], [9.8, 57]].map(([x, z], i) => {
    const v = makeShyling();
    v.g.position.set(x, GG + 0.9, z);
    world.add(v.g);
    return { ...v, x, z, vx: 0, vz: 0, tx: x, tz: z, fear: 0, i };
  });

  // ================================================================ 2. THE STAIRS OF COURAGE (side view)
  const wallM = mat(0xc7b3e6, { roughness: 0.85 });
  const floorM = mat(0xe8d8f4, { roughness: 0.7 });
  const trimM = mat(0x8a6ab8, { roughness: 0.6 });
  // the rock the tower stands on
  box(-TX - 0.7, TX + 0.7, Z0 - 0.6, Z1, GY, GY - 1.4, floorM, { col: { safe: true, surface: 'stone' } });
  for (const [w, d, y] of [[25, 7.5, GY - 3], [20, 6, GY - 5.5], [13, 4.5, GY - 8], [6, 3, GY - 10]]) add(world, rbox(w, 3, d, 0.6), mat(0x7a62a6, { roughness: 1, flatShading: true }), 0, y, TZ - 0.3);
  // back wall (with the camera never pushed into it) and the side walls
  box(-TX - 0.7, TX + 0.7, Z0 - 0.7, Z0, 0, GY - 1.4, wallM, { col: { noGrab: true, noCam: true } });
  for (const s of [-1, 1]) box(s > 0 ? TX : -TX - 0.7, s > 0 ? TX + 0.7 : -TX, Z0 - 0.7, TZ + 2, 1.1, GY - 1.4, wallM, { col: { noGrab: true } });   // (short, so the side camera sees the holes)
  // the floors: 1 and 3 (the roof) have their hole on the left, 2 on the right; a low flower-box rail at each hole
  const FLOOR_Y = [GY, GY + 7, GY + 14, 0];
  const holeSide = (k) => (k % 2 ? -1 : 1);       // floor k's hole: −1 left, +1 right
  for (let k = 1; k <= 3; k++) {
    const y = FLOOR_Y[k], s = holeSide(k);
    const xa = s < 0 ? -5.5 : -TX, xb = s < 0 ? TX : 5.5;
    box(xa, xb, Z0, Z1, y, y - 0.8, k === 3 ? mat(0xd9c6ef, { roughness: 0.75 }) : floorM, { col: { safe: true, noGrab: true, surface: 'wood' } });
    add(world, new THREE.BoxGeometry(xb - xa, 0.18, 0.12), trimM, (xa + xb) / 2, y - 0.4, Z1 + 0.02, { cast: false });
    // a row of little flowers along the hole's edge
    for (let z = Z0 + 0.5; z < Z1; z += 0.9) add(world, SPH, mat([0xff8fbf, 0xffffff, 0xffd27a][Math.round(z * 3) % 3]), s * 5.75, y + 0.1, z, { cast: false }).scale.setScalar(0.13);
  }
  // the roof's parapet: front and back (the bridge to the arena leaves through the back), and the bridge
  box(-5.5, TX, Z1 - 0.4, Z1, 1.0, 0, wallM, { col: { noGrab: true } });
  for (const [xa, xb] of [[-5.5, -2.2], [2.2, TX]]) box(xa, xb, Z0 - 0.7, Z0, 1.0, 0, wallM, { col: { noGrab: true } });
  box(-2.2, 2.2, AR - 0.9, Z0 - 0.7, 0, -0.9, stoneM, { col: { safe: true, surface: 'stone' } });
  for (const s of [-1, 1]) for (let z = AR; z < Z0 - 0.8; z += 1.4) add(world, new THREE.CylinderGeometry(0.06, 0.06, 0.9, 6), goldM, s * 2.05, 0.45, z);
  // "kann ich · mit dir · flirten?" on the back wall, one floor at a time
  const wordMats = [];
  ['kann ich', 'mit dir', 'flirten?'].forEach((w, k) => {
    const tex = canvasTex(1024, 256, (g, W, H) => {
      g.clearRect(0, 0, W, H);
      g.fillStyle = '#ffffff'; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.font = 'italic 600 150px Fredoka, ui-rounded, system-ui, sans-serif';
      g.shadowColor = '#ff8fc8'; g.shadowBlur = 24;
      g.fillText(w, W / 2, H / 2 + 6);
    });
    const m = new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.12, depthWrite: false, color: new THREE.Color(1.5, 1.1, 1.4) });
    const pl = add(world, new THREE.PlaneGeometry(13, 3.25), m, (k % 2 ? 2 : -2), FLOOR_Y[k] + 4.2, Z0 + 0.03, { cast: false, receive: false });
    pl.userData.noHide = true;
    wordMats.push(m);
  });
  // round windows, paper hearts on strings, small letters on the floors
  const winM = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.9, 0.7, 1.4) });
  const heartS = new THREE.Shape();
  heartS.moveTo(0, -0.35); heartS.bezierCurveTo(0.5, 0, 0.45, 0.45, 0, 0.25); heartS.bezierCurveTo(-0.45, 0.45, -0.5, 0, 0, -0.35);
  const heartGeo = new THREE.ExtrudeGeometry(heartS, { depth: 0.12, bevelEnabled: true, bevelSize: 0.04, bevelThickness: 0.04, bevelSegments: 3 });
  const paperHearts = [];
  for (let k = 0; k < 3; k++) {
    const y = FLOOR_Y[k];
    for (const x of [-9, 9]) {
      const w = add(world, new THREE.CircleGeometry(0.9, 28), winM, x, y + 3.6, Z0 + 0.02, { cast: false, receive: false });
      w.userData.noHide = true;
      add(world, new THREE.TorusGeometry(0.95, 0.09, 8, 28), trimM, x, y + 3.6, Z0 + 0.05, { cast: false });
    }
    for (let i = 0; i < 7; i++) {
      const x = -10.5 + i * 3.5;
      if (Math.abs(x - holeSide(k + 1) * 9) < 4.5) continue;   // keep the climbing holes clear
      const h = add(world, heartGeo, new THREE.MeshStandardMaterial({ color: [0xff8fbf, 0xffc6e0, 0xc6b3ff][i % 3], emissive: 0xff6fa8, emissiveIntensity: 0.3, roughness: 0.6 }), x, y + 5.6, Z0 + 0.8, { cast: false });
      h.scale.setScalar(0.8);
      h.userData.noHide = true;
      paperHearts.push({ h, y: y + 5.6, ph: i + k * 2 });
    }
    for (let i = 0; i < 4; i++) {
      const env = add(world, new THREE.BoxGeometry(0.6, 0.03, 0.4), mat(0xfff4e6), -7 + i * 4.3 + k, y + 0.02, Z0 + 0.9 + (i % 2) * 1.1, { cast: false });
      env.rotation.y = i * 0.7;
    }
  }
  hangSign(world, 4.5, GY + 4.4, TZ - 1.4, ['Lilac steps: Moon\'s light. Golden: Sun\'s.', 'But not too close, they\'re shy 🙈'], { w: 3.8 });
  hangSign(world, -3.5, GY + 2.7, TZ - 1.6, ['Stand back and FLARE ✨', 'while the other one climbs'], { w: 3.0 });
  hangSign(world, 3.5, GY + 7 + 4.4, TZ - 1.4, ['These steps sway:', 'follow them, at a distance'], { w: 3.2 });
  hangSign(world, -4, GY + 14 + 4.4, TZ - 1.4, ['The last flight is the shyest:', 'give each other 4.5 m ✨'], { w: 3.6 });

  // the courage steps: { owner (whose light holds it), climb, i, x, y, shy (min distance) }
  // four per climb, alternating colours 1.4 m apart: each of you hops on every other one (2.8 m), the other
  // colour is your own, and your own steps are always too shy to hold you.
  const STEPS = [];
  const STEP_W = 1.3, STEP_D = 3.0, STEP_H = 0.35;
  for (let c = 1; c <= 3; c++) {
    const y0 = FLOOR_Y[c - 1], sx = holeSide(c);
    const [o1, o2] = c === 2 ? ['sun', 'moon'] : ['moon', 'sun'];
    [[o1, 11.5, 1.4], [o2, 10.0, 2.8], [o1, 8.5, 4.2], [o2, 7.0, 5.6]].forEach(([owner, x, dy], i) => {
      const col = owner === 'sun' ? 0xffc94d : 0xa98bff, glow = owner === 'sun' ? 0xffa21f : 0x7a4dff;
      const m = new THREE.MeshStandardMaterial({ color: col, emissive: glow, emissiveIntensity: 0.15, roughness: 0.45, transparent: true, opacity: 0.25 });
      const mesh = add(world, rbox(STEP_W, STEP_H, STEP_D, 0.14), m, sx * x, y0 + dy - STEP_H / 2, TZ);
      mesh.userData.noHide = true;
      const em = add(mesh, new THREE.CircleGeometry(0.3, 24).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: glow, transparent: true, opacity: 0.6 }), 0, STEP_H / 2 + 0.01, 0, { cast: false, receive: false });
      const bx = sx * x, by = y0 + dy;
      const cl = { type: 'box', x0: bx - STEP_W / 2, x1: bx + STEP_W / 2, z0: TZ - STEP_D / 2, z1: TZ + STEP_D / 2, top: by, bottom: by - STEP_H, disabled: true, dx: 0, dy: 0, dz: 0, surface: 'wood' };
      colliders.push(cl);
      STEPS.push({ owner, c, i, bx, by, x: bx, y: by, shy: c === 3 ? 4.5 : 3.5, m, mesh, em, col: cl, hold: 0, lit: 0, shyK: 0 });
    });
  }
  const SHY_PAD = 0.5, GRACE = 0.4;

  // ================================================================ 3. THE ARENA OF SHYNESS (y 0)
  islandMeshes(world, 0, 0, AR, 0, 7, 0xb8a6e8, 0xd9a8c0, 0x6e5a9a);
  colliders.push({ type: 'cyl', x: 0, z: 0, r: AR - 0.05, top: 0, bottom: -1.2, safe: true, surface: 'grass' });
  meadow(world, [{ x: 0, z: 0, r: AR, flowers: 90, tint: 0xb9e6a0 }], [[PADS.sun.x, PADS.sun.z, 1.8], [PADS.moon.x, PADS.moon.z, 1.8], [0, 12, 2.4]], { flowerCols: [0xffffff, 0xff8fbf, 0xc6b3ff, 0xffd27a] });
  // heart lanterns around the edge
  const heartMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(2.0, 0.9, 1.4) });
  const hearts = [];
  for (let i = 0; i < 10; i++) {
    const a = ((i + 0.5) / 10) * Math.PI * 2, x = Math.sin(a) * (AR - 1), z = Math.cos(a) * (AR - 1);
    add(world, new THREE.CylinderGeometry(0.05, 0.06, 2.2, 6), mat(0x3a2a60), x, 1.1, z);
    colliders.push({ type: 'cyl', x, z, r: 0.1, top: 2.2, bottom: 0, noStep: true, noGrab: true });
    const h = add(world, heartGeo, heartMat, x, 2.5, z, { cast: false, receive: false });
    hearts.push(h);
  }
  // the courage pads
  const pads = {};
  for (const [r, c] of [['sun', 0xffc94d], ['moon', 0xa98bff]]) {
    const p = PADS[r];
    add(world, new THREE.CylinderGeometry(1.4, 1.5, 0.16, 40), mat(c, { emissive: c, emissiveIntensity: 0.25 }), p.x, 0.08, p.z);
    const sym = add(world, new THREE.CircleGeometry(0.6, 32).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.85 }), p.x, 0.17, p.z, { cast: false });
    colliders.push({ type: 'cyl', x: p.x, z: p.z, r: 1.45, top: 0.16, bottom: 0 });
    pads[r] = sym;
  }
  sign(world, -3.2, 9.8, 0.3, ['Flare together near it', 'to give it courage ✨']);

  const shy = makeShyness();
  shy.g.userData.noHide = true;
  world.add(shy.g);
  // the awkward-silence shockwave ring
  const wave = add(world, new THREE.TorusGeometry(1, 0.12, 8, 64).rotateX(Math.PI / 2), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 0.8, 1.4), transparent: true, opacity: 0.9 }), 0, 0.3, 0, { cast: false, receive: false });
  wave.visible = false;
  wave.userData.noHide = true;

  // clouds and the memory's soft edges
  for (const [x, y, z, w] of [[-22, -3, 8, 5], [21, -4, -8, 6], [-8, -3, -22, 5], [-26, GG - 3, 40, 6], [26, GG - 4, 58, 7], [-24, GG - 4, 80, 6], [22, -18, 16, 5]]) cloud(world, x, y, z, w, w * 0.8, x * z + 3);
  {
    const P = [], R = ((sd) => () => ((sd = (sd * 16807) % 2147483647) / 2147483647))(11);
    for (let a = 0; a < Math.PI * 2; a += 0.3) P.push([GC.x + Math.cos(a) * (GR + 5), GG - 3.5 + R() * 2, GC.z + Math.sin(a) * (GR + 5)]);
    for (let x = -14; x <= 14; x += 2.8) P.push([x, GY - 4 + R() * 2, Z1 + 3 + R() * 2]);
    for (let a = 0; a < Math.PI * 2; a += 0.25) P.push([Math.cos(a) * (AR + 1.5), -1.5 + R() * 2, Math.sin(a) * (AR + 1.5)]);
    memoryMist(world, P, { size: 8, color: 0xffc8e6, opacity: 0.32 });
  }

  const lit = createLights(world, colliders, []);

  // ---------------------------------------------------------------- checkpoints, stars
  const cps = [
    checkpoint(world, { x: 3.2, y: GG, z: 73.5, sun: [-1.5, GG, 72], moon: [1.5, GG, 72], yaw: 0 }),
    checkpoint(world, { x: 10.8, y: GY, z: TZ + 1.6, r: 3, sun: [8.6, GY, TZ], moon: [10.2, GY, TZ], label: 'The stairs of courage' }),
    checkpoint(world, { x: -4.5, y: GY + 7, z: TZ + 1.6, r: 3, sun: [-4.5, GY + 7, TZ], moon: [-3, GY + 7, TZ], label: '"kann ich…"' }),
    checkpoint(world, { x: 4.5, y: GY + 14, z: TZ + 1.6, r: 3, sun: [4.5, GY + 14, TZ], moon: [3, GY + 14, TZ], label: '"…mit dir…"' }),
    checkpoint(world, { x: 2.6, y: 0, z: 10.5, r: 3.4, sun: [-1.2, 0, 10.5], moon: [1.2, 0, 10.5], yaw: 0, label: '"…flirten?" There it is: SHYNESS' }),
  ];
  stars.push(makeStar(world, 'c2-garden', LANT.x, GG + 4.4, LANT.z, 0));          // on top of the lantern
  stars.push(makeStar(world, 'c2-kann', -11.8, GY + 6.4, TZ, 1));                   // high in the first hole
  stars.push(makeStar(world, 'c2-mit', 11.8, GY + 7 + 6.3, TZ, 2));                 // high in the second
  stars.push(makeStar(world, 'c2-flirten', -11.8, GY + 14 + 6.3, TZ, 3));          // high in the third
  stars.push(makeStar(world, 'c2-brave', PADS.moon.x, 2.7, PADS.moon.z, 4));        // over Moon's courage pad

  // ---------------------------------------------------------------- state
  let api = null, invulnUntil = 0, lastHits = -1, hitAnimT = 0, doneT = -1, knockT = 0, phase3Shown = false, doneTime = null;
  let sendT = 0, eekShown = false, lastMask = -1, openK = 0, openShown = false;
  const bossPos = new THREE.Vector3();
  const hitsOf = () => api?.save?.ch2?.shy2 || 0;
  const openUntil = () => api?.save?.ch2?.shyOpen2 || 0;
  const maskOf = () => api?.save?.ch2?.s3?.caught || 0;
  const authority = () => api && (api.kind === 'solo' || api.role === 'sun');
  const WAVE_P = 4200;
  const flat = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
  const bitCount = (m) => { let n = 0; for (; m; m >>= 1) n += m & 1; return n; };

  function bossAt(sNow, hits, out) {
    const s = sNow / 1000;
    if (hits >= 5) return out.set(0, 1.5 + Math.sin(s * 1.2) * 0.15, -1);            // phase 3: low and still
    if (hits >= 3) return out.set(Math.sin(s * 0.4) * 1.2, 3.8 + Math.sin(s) * 0.3, -1); // phase 2: hiding over the centre
    return out.set(Math.sin(s * 0.35) * 6, 2.8 + Math.sin(s * 1.1) * 0.5, -1 + Math.sin(s * 0.23 + 1) * 5);
  }
  const inGarden = (p) => p && p.z > 44 && p.y > GG - 2 && p.y < GG + 6;
  const inTower = (p) => p && Math.abs(p.z - TZ) < 4.2 && Math.abs(p.x) < TX + 1 && p.y < -0.4 && p.y > GY - 2;

  // ---- the shylings (simulated on Sun's phone / in practice; Moon's phone follows the events)
  const VMAX = 5.4;
  function simShylings(dt, sNow, t) {
    const P = lit.state.P, mask = maskOf();
    let newMask = mask;
    for (const s of SH) {
      if (mask & (1 << s.i)) continue;
      let fx = 0, fz = 0, fear = 0;
      for (const r of ['sun', 'moon']) {
        const p = P[r];
        if (!inGarden(p)) continue;
        const F = sNow < lit.flareUntil[r] ? FLARE_R + 1 : 6.5;
        const dx = s.x - p.x, dz = s.z - p.z, d = Math.hypot(dx, dz) || 0.01;
        if (d < F) { const k = (F - d) / F; fx += (dx / d) * k; fz += (dz / d) * k; fear = Math.max(fear, k); }
      }
      let tx, tz;
      const rx = s.x - GC.x, rz = s.z - GC.z, rr = Math.hypot(rx, rz) || 0.01, nx = rx / rr, nz = rz / rr;
      if (fear > 0) {
        const m = Math.hypot(fx, fz) || 1, sp = VMAX * Math.min(1, 0.35 + fear * 1.4) * (fear > 0.62 ? 1.35 : 1);   // a little dart when you get close
        tx = (fx / m) * sp; tz = (fz / m) * sp;
        // pressed against the hedge: slide along it, away from whoever is chasing (stays put if pinned from both sides)
        const vr = tx * nx + tz * nz;
        if (vr > 0 && rr > SHR - 1.2) {
          const tgx = -nz, tgz = nx, vt = tx * tgx + tz * tgz;
          const slide = Math.abs(vt) > 0.25 ? Math.sign(vt) * vr * 0.9 : 0;
          tx += tgx * slide - nx * vr; tz += tgz * slide - nz * vr;
        }
      } else {
        const h = Math.sin(t * 0.37 + s.i * 1.7) * 2.2 + s.i * 1.6;
        tx = Math.cos(h) * 0.8; tz = Math.sin(h) * 0.8;
        if (rr > 9) { tx -= nx * 0.7; tz -= nz * 0.7; }
      }
      s.fear = fear;
      const k = Math.min(1, dt * 5);
      s.vx += (tx - s.vx) * k; s.vz += (tz - s.vz) * k;
      s.x += s.vx * dt; s.z += s.vz * dt;
      // stay in the garden and out of the fountain, beds, trees and the lantern's foot
      const r2x = s.x - GC.x, r2z = s.z - GC.z, r2 = Math.hypot(r2x, r2z);
      if (r2 > SHR) { s.x = GC.x + (r2x / r2) * SHR; s.z = GC.z + (r2z / r2) * SHR; }
      for (const [ox, oz, or] of [...OBST, [LANT.x, LANT.z, 1.2]]) {
        const dx = s.x - ox, dz = s.z - oz, d = Math.hypot(dx, dz), min = or + 0.45;
        if (d < min) { s.x = ox + (dx / (d || 1)) * min; s.z = oz + (dz / (d || 1)) * min; }
      }
      const r3x = s.x - GC.x, r3z = s.z - GC.z, r3 = Math.hypot(r3x, r3z);
      if (r3 > SHR) { s.x = GC.x + (r3x / r3) * SHR; s.z = GC.z + (r3z / r3) * SHR; }
      // in the lantern's light with both glows on it: it goes in
      if (Math.hypot(s.x - LANT.x, s.z - LANT.z) < 2.7 && lit.isLit('twilight', s.x, s.z, 0.3)) newMask |= 1 << s.i;
      s.tx = s.x; s.tz = s.z;
    }
    if (newMask !== mask) api.setSave('ch2/s3/caught', newMask);
    sendT -= dt;
    if (sendT <= 0 && api.kind !== 'solo') { sendT = 0.2; api.send('shy', { p: SH.map((s) => [Math.round(s.x * 100) / 100, Math.round(s.z * 100) / 100]) }); }
  }

  // ---- the courage steps (computed on each phone from both players' positions, like the light toys)
  function updateSteps(dt, sNow, t) {
    const P = lit.state.P, rad = lit.state.rad, s = sNow / 1000;
    for (const st of STEPS) {
      // where it is now: floor 2's steps sway, floor 3's bob (all together, so the hops stay the same)
      const nx = st.bx + (st.c === 2 ? Math.sin(s * 1.2) * 0.4 : 0);
      const ny = st.by + (st.c === 3 ? Math.sin(s * 1.1) * 0.35 : 0);
      st.col.dx = nx - st.x; st.col.dy = ny - st.y; st.col.dz = 0;
      st.x = nx; st.y = ny;
      Object.assign(st.col, { x0: nx - STEP_W / 2, x1: nx + STEP_W / 2, top: ny, bottom: ny - STEP_H });
      st.mesh.position.set(nx, ny - STEP_H / 2, TZ);
      const o = P[st.owner];
      const d = o ? Math.hypot(o.x - nx, o.z - TZ) : 1e9;
      const inLight = d < rad[st.owner] + SHY_PAD;
      const tooClose = d < st.shy;
      const on = inLight && !tooClose;
      st.hold = on ? GRACE : st.hold - dt;
      const solid = st.hold > 0;
      st.col.disabled = !solid;
      st.lit += ((solid ? 1 : 0) - st.lit) * Math.min(1, dt * 10);
      st.shyK += ((tooClose && o && Math.abs(o.y - ny) < 9 ? 1 : 0) - st.shyK) * Math.min(1, dt * 6);
      st.m.opacity = 0.22 + st.lit * 0.78 - st.shyK * 0.12;
      st.m.emissiveIntensity = 0.12 + st.lit * 0.55 + (solid && st.hold < GRACE ? Math.sin(t * 30) * 0.2 : 0);
      st.m.transparent = st.lit < 0.98;
      st.m.depthWrite = st.lit > 0.5;
      st.em.material.opacity = 0.35 + st.lit * 0.6;
      // shy: it shrinks and shivers when its owner comes too close
      const sc = 1 - st.shyK * 0.35;
      st.mesh.scale.set(sc, 1 - st.shyK * 0.4, sc);
      st.mesh.position.x += st.shyK * Math.sin(t * 40 + st.i) * 0.05;
    }
  }

  const abilities = {
    label: lit.abilities.label,
    use: lit.abilities.use,
    onEvent(e) {
      if (e.type === 'shy') {
        if (!authority() && Array.isArray(e.p)) e.p.forEach(([x, z], i) => { if (SH[i]) { SH[i].tx = x; SH[i].tz = z; } });
        return true;
      }
      return lit.abilities.onEvent(e);
    },
    update(dt, sNow, t) {
      lit.abilities.update(dt, sNow, t);
      updateSteps(dt, sNow, t);
      if (authority() && maskOf() !== ALL) simShylings(dt, sNow, t);
      const hits = hitsOf();
      bossAt(sNow, hits, bossPos);
      if (!authority() || hits >= 6) return;
      const S = lit.state.P.sun, M = lit.state.P.moon;
      if (!S || !M) return;
      const onArena = (p) => p.y > -1.5 && Math.hypot(p.x, p.z) < AR + 1;
      if (!onArena(S) || !onArena(M)) return;
      const fl = lit.flareUntil;
      const open = hits < 3 || sNow < openUntil();
      // flare together near it
      if (hits < 5 && open && sNow > invulnUntil && fl.sun > sNow && fl.moon > sNow && flat(S, bossPos) < FLARE_R && flat(M, bossPos) < FLARE_R) {
        invulnUntil = Math.max(fl.sun, fl.moon) + 300;   // one hit per pair of flares
        api.setSave('ch2/shy2', hits + 1);
        if (hits + 1 === 3 || hits + 1 === 5) api.setSave('ch2/shyOpen2', 0);
      }
      // phase 2: both on their pads → it peeks out
      if (hits >= 3 && hits < 5 && sNow > openUntil() && flat(S, PADS.sun) < 1.5 && flat(M, PADS.moon) < 1.5) api.setSave('ch2/shyOpen2', Math.round(sNow + 5500));
      // phase 3: hand in hand, right next to it
      if (hits === 5 && api.holding && flat(S, bossPos) < 3.6 && flat(M, bossPos) < 3.6) api.setSave('ch2/shy2', 6);
    },
  };

  return {
    id: 'ch2-shy',
    title: 'Chapter 2 · 12 October — "Kann ich mit dir flirten?"',
    colliders,
    stars,
    movers: {},
    spawn: { sun: new THREE.Vector3(-1.5, GG, 72), moon: new THREE.Vector3(1.5, GG, 72) },
    camYaw: { sun: 0, moon: 0 },
    lobbyCam: { cx: 0, cz: 36, r: 62, h: 22 },
    killY: -48,
    lanes: [lane([-TX, TZ], [TX, TZ], { half: 3.6, y0: GY - 2, y1: -0.7, dist: 14, pitch: 0.18 })],
    checkpoints: cps,
    portal: new THREE.Vector3(0, 0, -1),   // where the end-of-part portal opens
    // you come back next to your partner, except into the tower (each floor has to be climbed together)
    respawnNearPartner: (pp) => !!pp && !inTower(pp),
    killAt: (p) => (p.y < -5 && p.z < Z0 - 0.8) || (p.y < GG - 6) || (p.y < GG - 2.5 && p.z > Z1 + 1 && p.z < 50),
    intro: { all: ['Part 3 · "Kann ich mit dir flirten?"', 'After the call, one thing was still unsaid…', 'The words are hiding in the garden. They\'re shy.'] },
    abilities,
    lights: lit,
    attach(a) { api = a; lit.attach(a); },
    onCheckpoint() {},
    _sh: SH, _steps: STEPS,
    debug: () => ({ SH: SH.map((s) => [s.x, s.z, s.fear]), mask: maskOf(), steps: STEPS.map((s) => [s.owner, s.c, s.i, +s.x.toFixed(2), +s.y.toFixed(2), !s.col.disabled]) }),
    story(ctx, t) {
      // ---- the garden
      const mask = (ctx.save.ch2 || {}).s3?.caught || 0, n = bitCount(mask);
      if (lastMask >= 0 && mask !== lastMask && n > bitCount(lastMask)) {
        ctx.caption(`${WORDS[Math.min(n, 6) - 1]} 💬 (${n}/6)`, 2400);
        api.sound.play('star', { vol: 0.6 });
        api.fx.sparks(new THREE.Vector3(LANT.x, GG + 1.6, LANT.z), 0xffc870, 30, 4);
      }
      if (n === 6 && !openShown) {
        openShown = true;
        if (lastMask >= 0 && lastMask !== ALL) setTimeout(() => ctx.caption('All six words, together. They make a way for you… ✨', 3800), 2500);
      }
      lastMask = mask;
      const P = lit.state.P;
      if (!eekShown && n === 0 && SH.some((s) => s.fear > 0.45)) { eekShown = true; ctx.caption('Eek! 🙈 The shy words run from your light. Corner them together!', 3600); }
      // ---- the boss
      const hits = (ctx.save.ch2 || {}).shy2 || 0;
      if (lastHits >= 0 && hits > lastHits && hits <= 5) {
        hitAnimT = 1.2;
        ctx.caption(`Shyness: "${LINES[Math.min(hits - 1, LINES.length - 1)]}"`, 2600);
        api.sound.play('pop');
        api.fx.sparks(bossPos.clone(), 0xff8fbf, 30, 4);
        if (hits === 3) setTimeout(() => ctx.caption('It hides its face! Stand on the ☀ and ☾ pads together', 4200), 2700);
      }
      if (hits === 5 && !phase3Shown) { phase3Shown = true; setTimeout(() => ctx.caption('It\'s almost gone… walk up to it hand in hand ♥', 4500), lastHits >= 0 && lastHits < 5 ? 2700 : 0); }
      lastHits = hits;
      if (hits >= 6 && doneT < 0) {
        doneT = t;
        const lines = [
          ['Shyness melts into a shower of stars… ✨', 3000],
          ['And then, in German, she typed:', 2800],
          ['"kann ich mit dir flirten?" 💬', 3200],
          ['"Ausschließlich auf kokette Art und Weise." 😌', 3600],
          ['…and then: "Babeee" 💜', 3400],
          ['12 October 2025. The night it became official.', 3800],
          ['Chapter 2 complete ✨', 2800],
        ];
        let at = 0;
        for (const [l, ms] of lines) { setTimeout(() => ctx.caption(l, ms), at); at += ms + 150; }
        api.fx.hearts?.(bossPos.clone());
        setTimeout(() => ctx.finish(), at + 300);
      }
    },
    update(serverMs, t, dt) {
      spinStars(stars, t);
      for (const a of anims) a(t, dt);
      hearts.forEach((h, i) => { h.rotation.y = t * 0.8 + i; h.position.y = 2.5 + Math.sin(t * 1.5 + i) * 0.12; });
      paperHearts.forEach((p) => { p.h.rotation.y = Math.sin(t * 0.8 + p.ph) * 0.5; p.h.position.y = p.y + Math.sin(t * 1.3 + p.ph) * 0.1; });
      if (!api) return;
      const P = lit.state.P;
      // ---- the shylings and the lantern
      const mask = maskOf(), n = bitCount(mask);
      SH.forEach((s, i) => {
        const caught = mask & (1 << i);
        if (caught) {
          const a = i * (Math.PI / 3) + t * 0.6, k = Math.min(1, dt * 3);
          s.x += (LANT.x + Math.cos(a) * 0.35 - s.x) * k; s.z += (LANT.z + Math.sin(a) * 0.35 - s.z) * k;
        } else if (!authority()) {
          const k = Math.min(1, dt * 8);
          s.x += (s.tx - s.x) * k; s.z += (s.tz - s.z) * k;
        }
        if (!authority() && !caught) {   // fear for the faces, from the positions here
          let f = 0;
          for (const r of ['sun', 'moon']) if (inGarden(P[r])) f = Math.max(f, 1 - Math.hypot(P[r].x - s.x, P[r].z - s.z) / 6);
          s.fear = f;
        }
        const yIn = caught ? GG + 0.95 + (i % 3) * 0.45 : GG + 0.9;
        s.g.position.set(s.x, s.g.position.y + (yIn + Math.sin(t * 2.4 + i * 1.3) * 0.12 - s.g.position.y) * Math.min(1, dt * 4), s.z);
        s.g.scale.setScalar(caught ? 0.55 : 1);
        const look = P.sun && P.moon ? (P.sun.x - s.x) ** 2 + (P.sun.z - s.z) ** 2 < (P.moon.x - s.x) ** 2 + (P.moon.z - s.z) ** 2 ? P.sun : P.moon : P.sun || P.moon;
        const yaw = look ? Math.atan2(look.x - s.x, look.z - s.z) : 0;
        s.g.rotation.y = caught ? t * 0.6 + i : yaw + (s.fear > 0.3 ? Math.PI * 0.85 : 0);   // scared ones turn away
        const shiver = !caught && s.fear > 0.3 ? Math.sin(t * 45 + i) * 0.04 : 0;
        s.body.position.x = shiver;
        s.body.scale.set(1 + (s.fear > 0.5 ? 0.1 : 0), 1 - (s.fear > 0.5 ? 0.12 : 0), 1);
        s.eyes.forEach((e) => { e.scale.y = Math.sin(t * 2.3 + i * 2) > 0.97 ? 0.01 : 0.08; });
      });
      glassM.emissiveIntensity = 0.15 + n * 0.45 + Math.sin(t * 2) * 0.05;
      lantLight.intensity = n * 4;
      // the gate and the cloud stair
      openK = approach(openK, mask === ALL ? 1 : 0, 0.5, dt);
      curtain.visible = openK < 0.99;
      curtainM.opacity = 0.85 * (1 - openK);
      curtain.scale.setScalar(1 + openK * 0.6);
      curtainCols.forEach((c) => { c.disabled = openK > 0.3; });
      stair.forEach((s, i) => { const k = Math.min(1, Math.max(0, openK * 1.6 - i * 0.05)); s.m.visible = k > 0.01; s.c.disabled = k < 0.6; s.m.scale.set(1, k, 1); });
      stairM.opacity = Math.min(1, openK * 1.3) * 0.92;
      // the words on the tower's back wall light up as you reach each floor
      const top = Math.max(P.sun?.y ?? -99, P.moon?.y ?? -99);
      wordMats.forEach((m, k) => { const on = top > FLOOR_Y[k] - 0.6 && (inTower(P.sun) || inTower(P.moon) || top > -0.6); m.opacity += ((on ? 1 : 0.12) - m.opacity) * Math.min(1, dt * 2); });
      // checkpoints glow
      const cpi = api?.save?.cp?.l === 'ch2-shy' ? api.save.cp.i : 0;
      cps.forEach((c, i) => c.setOn(i <= cpi, t));
      // ---- the boss: drift, bob, blush more with every hit, hide its face in phase 2
      const hits = hitsOf(), open = hits < 3 || serverMs < openUntil();
      bossAt(serverMs, hits, bossPos);
      hitAnimT = Math.max(0, hitAnimT - dt);
      const shrink = hits >= 6 ? Math.max(0.001, 1 - (t - (doneTime ??= t)) * 0.8) : 1 - hits * 0.08;
      shy.g.visible = shrink > 0.01;
      shy.g.position.copy(bossPos);
      shy.g.position.x += hitAnimT > 0 ? Math.sin(t * 60) * 0.15 * hitAnimT : 0;
      shy.g.scale.setScalar(shrink * (1 + Math.sin(t * 2) * 0.03));
      const toCam = api.bodies[api.mine()[0]].pos;
      shy.g.rotation.y = Math.atan2(toCam.x - bossPos.x, toCam.z - bossPos.z) * 0.6;
      shy.blushM.opacity = Math.min(1, 0.2 + hits * 0.16 + (hitAnimT > 0 ? 0.3 : 0));
      const cover = hits >= 3 && hits < 5 && !open ? 1 : 0;
      shy.hands.forEach((h, i) => {
        const s = i ? 1 : -1;
        h.position.x += ((cover ? s * 0.45 : s * 1.9) - h.position.x) * Math.min(1, dt * 6);
        h.position.y += ((cover ? 0.2 : -0.5) - h.position.y) * Math.min(1, dt * 6);
        h.position.z += ((cover ? 1.6 : 0.9) - h.position.z) * Math.min(1, dt * 6);
      });
      shy.eyes.forEach((e) => { e.scale.y = 1.3 * (Math.sin(t * 2.7) > 0.96 ? 0.15 : 1); });
      for (const r of ['sun', 'moon']) pads[r].material.opacity = hits >= 3 && hits < 5 ? 0.6 + Math.sin(t * 4) * 0.3 : 0.25;
      // awkward-silence shockwaves in phase 1
      if (hits < 3) {
        const u = serverMs % WAVE_P, R = (u / 1000) * 6.5;
        wave.visible = u < 2200;
        wave.position.set(bossPos.x, 0.3, bossPos.z);
        wave.scale.set(R, 1, R);
        wave.material.opacity = 0.9 * (1 - u / 2200);
        knockT -= dt;
        if (wave.visible && knockT <= 0) {
          for (const r of api.mine()) {
            const b = api.bodies[r], d = flat(b.pos, bossPos);
            if (b.pos.y > -0.5 && b.pos.y < 0.7 && Math.hypot(b.pos.x, b.pos.z) < AR + 0.5 && Math.abs(d - R) < 0.55) {
              const nx = (b.pos.x - bossPos.x) / (d || 1), nz = (b.pos.z - bossPos.z) / (d || 1);
              api.launch(r, 7, nx * 6, nz * 6);
              api.sound.play('bounce');
              knockT = 0.6;
            }
          }
        }
      } else wave.visible = false;
    },
  };
}
