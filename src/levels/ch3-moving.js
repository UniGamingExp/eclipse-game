// Chapter 3 · Regensburg · Part 2 "Moving Day" (Arnulfsplatz). Built to the playtest-2 rules.
// Goodbye (the chapter's helper, a grey sigh of a cloud) has made the boxes pop open and eaten the stairs.
//  1. The square: load the van. Six boxes, three of them won't close: Moon tapes them shut ("Tape shut"),
//     Sun carries them into the van. All six in → the front door opens.
//  2. The stairwell (side view along −x at z = −21.5, open back, floors at 6.8 and 13.6, no grabbing):
//     climb 1 needs a taped stack of three (the neighbours' boxes, one won't close); on the first floor the
//     floor is gone over the light well (14 m): Moon tapes it across, the two boxes on the far side won't close
//     either; climb 2 needs a taped stack again.
//  3. His flat (top floor, empty for the first time): Goodbye sits in the balcony door. Walk up to it hand in hand
//     → "It's not goodbye. It's 'see you in Halle'." → it floats away.
//  4. Moon tapes a zipline from the balcony down to the van's roof; both ride it; at the van → the end.
//  🎮 Hidden minigame "Bubble Wrap": through a gap in the hedge east of the square, pop the most bubbles in 30 s.
import * as THREE from 'three';
import { mat, add, rbox, sign, sky, makeStar, spinStars, lights, cloud } from './common.js';
import { kit, nature } from '../nature.js';
import { house } from './medieval.js';
import { createMoving, BOX } from './moving.js';
import { townspeople } from '../npc.js';
import { checkpoint, lane } from './play.js';
import { memoryMist } from '../memory.js';
import { createMinigame, tilesGame, withMinigames } from './minigame.js';

const F1 = 6.8, F2 = 13.6;          // the stairwell's floors
const LZ = -21.5;                    // the stairwell's side-view line
const VAN = { x0: 6.5, x1: 9.5, z0: 0, z1: 9 };

function makeGoodbye() {
  const g = new THREE.Group();
  const puffM = new THREE.MeshStandardMaterial({ color: 0x9a9aa8, roughness: 0.95, transparent: true, opacity: 1 });
  const body = new THREE.Group();
  g.add(body);
  const S = new THREE.SphereGeometry(1, 20, 14);
  for (const [x, y, z, r] of [[0, 0, 0, 0.9], [0.7, 0.15, -0.1, 0.62], [-0.7, 0.15, -0.1, 0.62], [0.35, 0.6, -0.2, 0.55], [-0.35, 0.6, -0.2, 0.55], [0, -0.35, 0.1, 0.6]]) add(body, S, puffM, x, y, z).scale.setScalar(r);
  const eyeM = mat(0x2b2440, { roughness: 0.3 });
  const eyes = [-1, 1].map((s) => { const e = add(body, S, eyeM, s * 0.3, 0.12, 0.82, { cast: false }); e.scale.set(0.09, 0.05, 0.04); e.rotation.z = s * 0.35; return e; });   // droopy
  const mouth = add(body, new THREE.TorusGeometry(0.12, 0.03, 8, 20, Math.PI), eyeM, 0, -0.18, 0.86, { cast: false });
  g.traverse((o) => { o.userData.noHide = true; });
  return { g, body, eyes, mouth, puffM };
}

export function buildCh3Moving(root, scene) {
  const colliders = [], stars = [], anims = [];
  const world = new THREE.Group();
  root.add(world);
  const K = kit('medieval');

  scene.fog = new THREE.Fog(new THREE.Color('#e3c0b8'), 80, 260);
  sky(root, {
    top: '#4a5aa0', mid: '#f6b8a6', low: '#ffe2b8', neb1: '#8a7bff', neb2: '#ff9a7a', stars: 0.3, nebula: 0.35, cloud: 0xf6d6d2, far: false, cx: 0, cz: 0,
    lightDir: [0.5, 0.4, 0.7], seaY: -14,
    planets: [['ember', -1.0, 0.22, 260, 0.1, 1.8], ['lilac', 1.3, 0.18, 250, 0.2, 1.5], ['giant', 0.3, 0.34, 320, 0.42], ['mint', -2.5, 0.3, 240, 0.3]],
  });
  lights(root, { sunColor: 0xffdcb0, sunI: 2.2, hemiSky: 0xc8c0ff, hemiGround: 0xffc8a8, hemiI: 1.45, pos: [20, 34, 24], target: [0, 4, -4], extent: 40 });

  const plaster = mat(0xf1dcc6, { roughness: 0.9 }), plaster2 = mat(0xe9c9b2, { roughness: 0.9 }), trim = mat(0x8a6a5a, { roughness: 0.7 });
  const stoneM = mat(0xcdbfc8, { roughness: 0.92 }), woodM = mat(0x9a6a4a, { roughness: 0.8 }), stairWall = mat(0xf4e6d0, { roughness: 0.9 });
  const box = (x0, x1, z0, z1, top, bottom, m, col = {}, vis = true) => {
    if (vis && m) add(world, rbox(x1 - x0, top - bottom, z1 - z0, Math.min(0.08, (top - bottom) / 4, (x1 - x0) / 4, (z1 - z0) / 4)), m, (x0 + x1) / 2, (top + bottom) / 2, (z0 + z1) / 2);
    const c = { type: 'box', x0, x1, z0, z1, top, bottom, ...col };
    colliders.push(c);
    return c;
  };

  // ================================================================ the island and the square
  add(world, new THREE.BoxGeometry(56, 3, 56), stoneM, 2, -1.5, 2, { cast: false });
  for (const [w, d, y] of [[48, 48, -4.5], [36, 36, -7], [20, 20, -9.5]]) add(world, rbox(w, 3, d, 0.8), mat(0x9a8aa8, { roughness: 1, flatShading: true }), 2, y, 2, { cast: false });
  colliders.push({ type: 'box', x0: -26, x1: 30, z0: -26, z1: 30, top: 0, bottom: -3, safe: true, surface: 'concrete' });
  if (K.has('Floor_UnevenBrick')) {
    const items = [];
    for (let x = -19; x <= 17; x += 2) for (let z = -8; z <= 23; z += 2) items.push({ x, y: 0.005, z });
    K.scatter(world, 'Floor_UnevenBrick', items, { receive: true });
  }
  // houses round the square (west row, south row, east corner)
  const H = [
    [-23, -14, 6, 6, 3, Math.PI / 2], [-23, -6, 6, 4, 2, Math.PI / 2], [-23, 2, 8, 6, 3, Math.PI / 2], [-23, 10, 6, 6, 2, Math.PI / 2], [-23, 18, 8, 6, 3, Math.PI / 2],
    [-14, 27, 6, 6, 2, Math.PI], [-6, 27, 6, 6, 3, Math.PI], [2, 27, 6, 6, 2, Math.PI], [10, 27, 6, 6, 3, Math.PI], [18, 27, 6, 6, 2, Math.PI], [26, 27, 6, 6, 3, Math.PI],
    [22, -20, 6, 6, 3, -Math.PI / 2], [22, -12, 6, 6, 2, -Math.PI / 2], [22, -4, 6, 6, 3, -Math.PI / 2],
  ];
  H.forEach(([x, z, w, d, f, r], i) => {
    house(world, x, 0, z, { w: Math.min(6, w), d: Math.min(8, d), floors: f, rotY: r, seed: 90 + i, style: ['plaster', 'mixed', 'brick'][i % 3] });
    const side = Math.abs(Math.sin(r)) > 0.5;
    const hw = (side ? d : Math.min(6, w)) / 2, hd = (side ? Math.min(6, w) : d) / 2;
    colliders.push({ type: 'box', x0: x - hw, x1: x + hw, z0: z - hd, z1: z + hd, top: f * 3.12 + 4, bottom: 0, noGrab: true });
  });
  // low walls at the open edges of the island
  for (const [x0, x1, z0, z1] of [[-26, -25.5, -26, 30], [29.5, 30, -26, 30], [-26, 30, 29.5, 30], [-26, 30, -26, -25.5]]) box(x0, x1, z0, z1, 0.9, 0, stoneM, { noGrab: true });
  // a linden tree with a star in its crown, benches, lanterns
  if (nature.has('CommonTree_2')) nature.place(world, 'CommonTree_2', -14, 0, 14, { s: 1.4 });
  colliders.push({ type: 'cyl', x: -14, z: 14, r: 0.45, top: 4, bottom: 0, noGrab: true });
  for (const [x, z] of [[-10, 8], [-10, 20], [4, 12], [16, 22]]) {
    add(world, new THREE.CylinderGeometry(0.07, 0.09, 3.2, 8), mat(0x3a3150), x, 1.6, z);
    add(world, new THREE.SphereGeometry(0.22, 12, 8), new THREE.MeshBasicMaterial({ color: new THREE.Color(2.2, 1.7, 1.1) }), x, 3.3, z, { cast: false });
    colliders.push({ type: 'cyl', x, z, r: 0.12, top: 3.3, bottom: 0, noGrab: true });
  }
  for (const [x, z, r] of [[-17, 14, Math.PI / 2], [-6, 23.5, 0]]) {
    const b = add(world, rbox(2.2, 0.12, 0.6, 0.04), woodM, x, 0.5, z);
    b.rotation.y = r;
    colliders.push({ type: 'box', x0: x - (r ? 0.3 : 1.1), x1: x + (r ? 0.3 : 1.1), z0: z - (r ? 1.1 : 0.3), z1: z + (r ? 1.1 : 0.3), top: 0.56, bottom: 0 });
  }
  sign(world, -5.4, 16.6, 0.3, ['Moving day! 📦 Load the van:', 'Sun ✦ carries, Moon ✦ tapes shut']);

  // ---- the van (open at the back, z = 9)
  const vanM = mat(0xf4efe6, { roughness: 0.6 }), vanStripe = mat(0x6a8fd8, { roughness: 0.5 });
  add(world, rbox(3.0, 0.3, 9, 0.05), vanM, 8, 0.85, 4.5);
  for (const [x0, x1] of [[6.5, 6.7], [9.3, 9.5]]) { add(world, new THREE.BoxGeometry(x1 - x0, 2.0, 9), vanM, (x0 + x1) / 2, 2.0, 4.5); colliders.push({ type: 'box', x0, x1, z0: 0, z1: 9, top: 3.0, bottom: 1.0, noGrab: true }); }
  add(world, new THREE.BoxGeometry(3.02, 0.4, 9.02), vanStripe, 8, 1.6, 4.5, { cast: false });
  add(world, new THREE.BoxGeometry(3.0, 2.0, 0.2), vanM, 8, 2.0, 0.1);
  add(world, rbox(3.0, 0.2, 9, 0.05), vanM, 8, 2.9, 4.5);
  add(world, rbox(2.8, 1.6, 2.0, 0.3), vanStripe, 8, 1.4, -1.0);
  colliders.push({ type: 'box', x0: 6.5, x1: 9.5, z0: 0, z1: 9, top: 1.0, bottom: 0, surface: 'wood' });
  colliders.push({ type: 'box', x0: 6.5, x1: 9.5, z0: 0, z1: 0.2, top: 3.0, bottom: 1.0, noGrab: true });
  colliders.push({ type: 'box', x0: 6.5, x1: 9.5, z0: 0, z1: 9, top: 3.0, bottom: 2.8, surface: 'wood' });
  colliders.push({ type: 'box', x0: 6.6, x1: 9.4, z0: -2, z1: 0, top: 2.2, bottom: 0, noGrab: true });
  for (const [x, z] of [[6.5, 1.5], [9.5, 1.5], [6.5, 7.6], [9.5, 7.6], [6.6, -1.2], [9.4, -1.2]]) add(world, new THREE.CylinderGeometry(0.45, 0.45, 0.32, 16).rotateZ(Math.PI / 2), mat(0x2b2b33), x, 0.45, z);
  for (let i = 0; i < 2; i++) { add(world, rbox(3.0, 0.5, 0.75, 0.05), woodM, 8, 0.25 + i * 0.25, 9.4 + (1 - i) * 0.75 - 0.375); colliders.push({ type: 'box', x0: 6.5, x1: 9.5, z0: 9 + (1 - i) * 0.75, z1: 9.75 + (1 - i) * 0.75, top: 0.5 * (i + 1), bottom: 0, surface: 'wood' }); }
  const inVan = (o) => o.rest.x > VAN.x0 + 0.2 && o.rest.x < VAN.x1 - 0.2 && o.rest.z > VAN.z0 + 0.2 && o.rest.z < VAN.z1 && o.rest.y > 0.9;

  // ================================================================ the house at Arnulfsplatz
  // the front part is solid apart from the hallway; the stairwell behind it is open at the back (side view)
  box(-16, 9.6, -19, -10, F2, 0, plaster);
  box(14.4, 16, -19, -10, F2, 0, plaster);
  box(9.6, 14.4, -19, -10, F2, 3.4, plaster);
  for (const [x0, x1] of [[9.6, 9.8], [14.2, 14.4]]) add(world, new THREE.BoxGeometry(0.2, 3.4, 9), stairWall, (x0 + x1) / 2, 1.7, -14.5, { cast: false });
  // windows on the facade (and the stairwell side), the door frame
  const winM = new THREE.MeshStandardMaterial({ color: 0x5a6a9a, roughness: 0.15, metalness: 0.2, emissive: 0x2a2050, emissiveIntensity: 0.3 });
  for (const y of [1.8, 5.2, 8.6, 12.0]) for (let x = -13; x <= 13; x += 3.25) {
    if (y < 3 && x > 8 && x < 15) continue;
    add(world, new THREE.PlaneGeometry(1.2, 1.7), winM, x, y, -9.96, { cast: false, receive: false });
    add(world, rbox(1.5, 0.14, 0.25, 0.03), trim, x, y - 0.95, -9.88, { cast: false });
    add(world, rbox(1.5, 0.1, 0.12, 0.02), trim, x, y + 0.92, -9.93, { cast: false });
    if ((x * 7 + y) % 3 < 1.2) for (let k = 0; k < 3; k++) add(world, new THREE.SphereGeometry(0.16, 8, 6), mat([0xff7a8a, 0xffd27a, 0xffffff][k]), x - 0.45 + k * 0.45, y - 0.75, -9.82, { cast: false });
  }
  for (const y of [3.4, 6.8, 10.2]) add(world, rbox(32.4, 0.22, 0.3, 0.04), trim, 0, y, -9.9, { cast: false });
  add(world, rbox(4.6, 0.3, 0.3, 0.05), trim, 12, 3.55, -9.9);
  const door = box(10, 14, -10.4, -9.8, 3.4, 0, null, { noGrab: true }, false);
  const doorM = add(world, rbox(3.9, 3.3, 0.2, 0.05), mat(0x7a4a2a, { roughness: 0.7 }), 12, 1.65, -10.1);
  doorM.userData.noHide = true;
  sign(world, 15.4, -8.6, Math.PI * 0.05, ['Arnulfsplatz 5', 'Sun · 2nd floor ☀']);
  // the roof above the flat
  const roofM = mat(0xa8584a, { roughness: 0.6 });
  for (const sd of [-1, 1]) { const r = add(world, rbox(33.4, 0.35, 6.4, 0.05), roofM, 0, F2 + 5.4 + 1.75, -14.5 + sd * 2.55, { cast: false }); r.rotation.x = sd * 0.62; }
  // ---- the stairwell
  for (const s of [-1, 1]) box(s < 0 ? -16.6 : 16, s < 0 ? -16 : 16.6, -24.5, -10, 21, 0, plaster2, { noGrab: true });
  add(world, new THREE.PlaneGeometry(32, F2), stairWall, 0, F2 / 2, -19.02, { cast: false }).rotation.y = Math.PI;
  // floor 1: part A (x −9…−2), the light well (14 m, gone), part B (x 12…16); floor 2: everything but x −9…−2
  for (const [x0, x1, y] of [[-9, -2, F1], [12, 16, F1], [-16, -9, F2], [-2, 16, F2]]) {
    box(x0, x1, -24, -19, y, y - 0.8, mat(0xd9c3a8, { roughness: 0.8 }), { safe: true, noGrab: true, surface: 'wood' });
    add(world, new THREE.BoxGeometry(x1 - x0, 0.14, 0.1), trim, (x0 + x1) / 2, y - 0.4, -24.02, { cast: false });
  }
  // broken stairs (just pieces), mailboxes, a bike, a plant, a rubber plant on floor 1
  for (const [x, y, r] of [[-12, 2.4, 0.5], [-13.5, 4.6, 0.5], [4, 9.4, -0.5], [-6, 10.8, 0.5]]) { const p = add(world, rbox(2.2, 0.3, 2.6, 0.05), mat(0xb89a7a), x, y, -23.2, { cast: false }); p.rotation.z = r; }
  for (let i = 0; i < 6; i++) add(world, rbox(0.5, 0.35, 0.12, 0.03), mat([0x7a8fb0, 0xd08a5a, 0x7ab08a][i % 3]), 1 + (i % 3) * 0.55, 1.3 + Math.floor(i / 3) * 0.4, -19.1, { cast: false });
  add(world, new THREE.TorusGeometry(0.35, 0.05, 6, 20), mat(0x2b2b33), -4, 0.4, -23.4, { cast: false }).rotation.y = 0;
  add(world, new THREE.TorusGeometry(0.35, 0.05, 6, 20), mat(0x2b2b33), -2.9, 0.4, -23.4, { cast: false });
  add(world, new THREE.CylinderGeometry(0.3, 0.25, 0.5, 10), mat(0xc87a5a), -7, F1 + 0.25, -23.4);
  add(world, new THREE.SphereGeometry(0.55, 10, 8), mat(0x5a9a5a), -7, F1 + 0.95, -23.4);
  // neighbours' doors, name plates, a window on each half-floor and a striped dado on the stairwell's wall
  const doorM2 = mat(0x8a5a3a, { roughness: 0.7 }), plateM = mat(0xe8c983, { roughness: 0.4, metalness: 0.4 });
  for (const [x, y] of [[-4, 0], [4.5, 0], [-6, F1], [14, F1], [9.5, F2], [-12.5, F2]]) {
    add(world, rbox(1.6, 2.6, 0.12, 0.04), doorM2, x, y + 1.3, -19.08, { cast: false });
    add(world, rbox(0.5, 0.18, 0.05, 0.02), plateM, x, y + 2.0, -19.16, { cast: false });
    add(world, new THREE.SphereGeometry(0.06, 8, 6), plateM, x + 0.55, y + 1.2, -19.16, { cast: false });
  }
  for (const [x, y] of [[-12.5, 3.6], [3, 3.6], [-6, 10.4], [7, 10.4]]) add(world, new THREE.PlaneGeometry(1.4, 1.6), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.3, 1.1, 1.3) }), x, y, -19.06, { cast: false, receive: false }).rotation.y = Math.PI;
  for (const y of [1.1, F1 + 1.1, F2 + 1.1]) add(world, new THREE.PlaneGeometry(32, 0.12), trim, 0, y, -19.05, { cast: false, receive: false }).rotation.y = Math.PI;
  const stairs = lane([16, LZ], [-16, LZ], { half: 2.5, y0: -1, y1: 13.0, dist: 14, pitch: 0.2 });

  // ================================================================ his flat (top floor)
  box(-16, -15.6, -19.4, -9.6, F2 + 5.4, F2, plaster2, { noGrab: true });
  box(15.6, 16, -19.4, -9.6, F2 + 5.4, F2, plaster2, { noGrab: true });
  for (const [x0, x1] of [[-16, 4], [8, 16]]) box(x0, x1, -19.4, -19, F2 + 5.4, F2, plaster2, { noGrab: true, noCam: true });
  box(4, 8, -19.4, -19, F2 + 5.4, F2 + 3, plaster2, { noGrab: true });
  for (const [x0, x1] of [[-16, -2], [2, 16]]) box(x0, x1, -10, -9.6, F2 + 5.4, F2, plaster2, { noGrab: true, noCam: true });
  box(-2, 2, -10, -9.6, F2 + 5.4, F2 + 3, plaster2, { noGrab: true });
  add(world, new THREE.PlaneGeometry(31.2, 9), mat(0xcfa98a, { roughness: 0.6 }), 0, F2 + 0.02, -14.5, { cast: false }).rotation.x = -Math.PI / 2;
  // what's still there: the bed frame, his desk and chair, the wardrobe, a rug, a lamp, a pale square where a poster hung
  box(-14, -10, -18.6, -15.6, F2 + 0.5, F2, woodM);
  box(-6.5, -3.5, -18.8, -17.6, F2 + 0.9, F2, woodM);
  box(-5.4, -4.6, -16.9, -16.1, F2 + 0.55, F2, mat(0x5a4a6a));
  box(11.6, 14.4, -18.8, -17.4, F2 + 2.7, F2, mat(0x7a5236, { roughness: 0.7 }), { noGrab: false });
  add(world, new THREE.CylinderGeometry(2.2, 2.2, 0.03, 36), mat(0xc97a8a, { roughness: 0.95 }), 0, F2 + 0.03, -14.6, { cast: false });
  add(world, new THREE.PlaneGeometry(1.6, 2.2), mat(0xfff4e6), -8, F2 + 2.6, -19.37, { cast: false });
  add(world, new THREE.CylinderGeometry(0.05, 0.05, 1.6, 6), mat(0x3a3150), -3.8, F2 + 1.7, -18.2);
  add(world, new THREE.SphereGeometry(0.25, 12, 8), new THREE.MeshBasicMaterial({ color: new THREE.Color(2.0, 1.6, 1.0) }), -3.8, F2 + 2.5, -18.2, { cast: false });
  // the balcony and Goodbye in its door
  box(-3, 3, -9.6, -7.4, F2, F2 - 0.4, woodM, { surface: 'wood' });
  for (const [x0, x1, z0, z1] of [[-3, 3, -7.6, -7.4], [-3, -2.8, -9.6, -7.4], [2.8, 3, -9.6, -7.4]]) box(x0, x1, z0, z1, F2 + 1.0, F2, trim, { noGrab: true });
  const bye = makeGoodbye();
  bye.g.position.set(0, F2 + 1.5, -10.2);
  world.add(bye.g);
  const byeWall = box(-2, 2, -10.6, -9.4, F2 + 3, F2, null, { noGrab: true }, false);

  // ================================================================ boxes and tapes
  const moving = createMoving(world, colliders, {
    key: 'ch3m',
    killY: -1,
    wobble: true,
    boxes: [
      // the square (three won't close)
      { id: 'q1', x: -6, y: 0, z: 14 }, { id: 'q2', x: -2, y: 0, z: 17.5, open: true }, { id: 'q3', x: 3, y: 0, z: 19 },
      { id: 'q4', x: -11, y: 0, z: 5, open: true }, { id: 'q5', x: 14, y: 0, z: 15 }, { id: 'q6', x: 1.5, y: 0, z: 4.5, open: true },
      // the stairwell: the neighbours' boxes
      { id: 's1', x: 4, y: 0, z: LZ }, { id: 's2', x: 7, y: 0, z: LZ, open: true }, { id: 's3', x: 0, y: 0, z: LZ },
      { id: 's4', x: -7.4, y: F1, z: LZ }, { id: 's5', x: 13.2, y: F1, z: LZ, open: true }, { id: 's6', x: 14.7, y: F1, z: LZ, open: true },
    ],
    tapes: [
      { id: 'w1', kind: 'walk', a: [-2, F1, LZ], b: [12, F1, LZ], pa: [-2.6, F1, -23.3], pb: [12.6, F1, -23.3] },
      { id: 'z1', kind: 'zip', a: [1.8, F2 + 2, -8.0], b: [8, 5.0, 4.4], pa: [1.8, F2, -8.0], pb: [8, 3.0, 4.4] },
    ],
  });

  // ================================================================ 🎮 hidden minigame: Bubble Wrap (side yard east of the square)
  const hedgeM = mat(0x4f8f5c, { roughness: 0.95 });
  for (const [x0, x1, z0, z1] of [[17.6, 18.4, 3, 10.4], [17.6, 18.4, 13.6, 21], [18, 29.5, 3, 3.8], [18, 29.5, 20.2, 21]]) box(x0, x1, z0, z1, 1.7, 0, hedgeM, { noGrab: true });
  add(world, new THREE.PlaneGeometry(10.4, 10.4), new THREE.MeshStandardMaterial({ color: 0xdff0ff, transparent: true, opacity: 0.35, roughness: 0.1 }), 24.2, 0.015, 11.6, { cast: false }).rotation.x = -Math.PI / 2;
  const mgBubble = createMinigame(world, colliders, {
    id: 'c3bub', title: 'Bubble Wrap', rules: ['Pop the most bubbles!', 'Each one pops only once 💥'],
    at: { x: 28.4, y: 0, z: 18.6 }, face: -Math.PI * 0.75, pads: { sun: [21.4, 18.2], moon: [26, 18.2] }, dur: 30000,
    game: tilesGame({ cx: 24.2, cz: 11.6, y: 0, n: 6, size: 1.6, bubbles: true }),
  });

  // ================================================================ checkpoints, stars, people
  const cps = [
    checkpoint(world, { x: 3.4, y: 0, z: 17, r: 2.6, sun: [-2, 0, 16], moon: [1, 0, 16], yaw: 0 }),
    checkpoint(world, { x: 12, y: 0, z: LZ, r: 2.4, sun: [11, 0, LZ], moon: [13, 0, LZ], label: 'The stairwell (where are the stairs?!)' }),
    checkpoint(world, { x: -5.4, y: F1, z: LZ, r: 2.4, sun: [-6.5, F1, LZ], moon: [-4.8, F1, LZ], label: 'First floor' }),
    checkpoint(world, { x: 9, y: F2, z: LZ, r: 2.6, sun: [8, F2, LZ], moon: [10, F2, LZ], label: 'Second floor' }),
    checkpoint(world, { x: 6, y: F2, z: -13.5, r: 3, sun: [5, F2, -15], moon: [7, F2, -15], yaw: 0, label: 'His flat' }),
  ];
  stars.push(makeStar(world, 'c3m-tree', -12.8, 5.1, 14, 0));      // in the linden (two boxes and a jump)
  stars.push(makeStar(world, 'c3m-van', 8, 4.3, -0.6, 1));          // over the van's cab
  stars.push(makeStar(world, 'c3m-well', 5, F1 + 1.2, LZ, 2));      // over the light well, on the tape
  stars.push(makeStar(world, 'c3m-wardrobe', 13, F2 + 3.6, -18.1, 3)); // on his wardrobe
  stars.push(makeStar(world, 'c3m-yard', 29, 2.3, 4.6, 4));         // on the hedge corner of the side yard
  colliders.push({ type: 'box', x0: 28.4, x1: 29.5, z0: 3, z1: 5.2, top: 1.7, bottom: 0, noGrab: true });
  for (const [x, y, z, w] of [[-34, 8, -30, 7], [36, 10, -10, 8], [-30, 9, 34, 6], [34, 7, 36, 6]]) cloud(world, x, y, z, w, w * 0.7, x * z);
  {
    const P = [], R = ((sd) => () => ((sd = (sd * 16807) % 2147483647) / 2147483647))(9);
    for (let a = -26; a <= 30; a += 4) { P.push([a, -1 + R() * 2, 32 + R() * 2]); P.push([a, -1 + R() * 2, -28 - R() * 2]); P.push([-28 - R() * 2, -1 + R() * 2, a]); P.push([32 + R() * 2, -1 + R() * 2, a]); }
    memoryMist(world, P, { size: 9, color: 0xffe0d0, opacity: 0.32 });
  }
  const PEOPLE = [
    { who: 'PeasantF2', x: -16.5, y: 0, z: 9, rotY: 1.2, clip: 'Idle_TalkingPhone_Loop' },
    { who: 'RangerM', x: 11.6, y: 0, z: -2.4, rotY: -0.6, clip: 'Idle_FoldArms_Loop' },
    { who: 'PeasantM2', x: -18, y: 0, z: 24, path: [[-18, 24], [-18, -2]], carry: true },
    { who: 'PeasantF', x: 18, y: 0, z: 24.2, rotY: Math.PI, clip: 'Yes' },
  ];
  const crowd = townspeople(world, PEOPLE);
  if (crowd) for (const q of PEOPLE) if (!q.path) colliders.push({ type: 'cyl', x: q.x, z: q.z, r: 0.35, top: 1.6, bottom: 0, noGrab: true, noStep: true });

  // ================================================================ story
  let api = null, doneT = -1, lastVan = -1, byeT = -1;
  const seen = {};
  const once = (k, ctx, text, ms = 4200) => { if (seen[k]) return; seen[k] = true; ctx.caption(text, ms); };
  const authority = () => api && (api.kind === 'solo' || api.role === 'sun');
  const vanCount = () => moving.boxes.filter((o) => !o.by && inVan(o)).length;
  const inWell = (p) => p && Math.abs(p.z - LZ) < 3.2 && Math.abs(p.x) < 16.2 && p.y < 13.2;

  return {
    id: 'ch3-moving',
    title: 'Chapter 3 · Regensburg — Moving Day',
    colliders,
    stars,
    movers: {},
    spawn: { sun: new THREE.Vector3(-2, 0, 16), moon: new THREE.Vector3(1, 0, 16) },
    camYaw: { sun: 0, moon: 0 },
    lobbyCam: { cx: 2, cz: 0, r: 52, h: 30 },
    killY: -6,
    lanes: [stairs],
    checkpoints: cps,
    respawnNearPartner: (pp) => !!pp && !inWell(pp),
    portal: new THREE.Vector3(12, 0, 12),
    intro: {
      all: ['Part 2 · Moving Day', 'Arnulfsplatz, Regensburg. The flat is nearly empty… and Goodbye is already sitting in it.', 'Goodbye made the boxes pop open, and it ate the stairs. 😶‍🌫️'],
      sun: 'Strongman ✦ carry the boxes into the van',
      moon: 'Tape gun ✦ tape shut the boxes that won\'t close',
    },
    abilities: withMinigames(moving.abilities, [mgBubble]),
    moving,
    attach(a) { api = a; moving.attach(a); mgBubble.attach(a); },
    onCheckpoint() {},
    debug: () => ({ van: vanCount(), door: !door.disabled, bye: api?.save?.ch3m?.bye }),
    story(ctx, t) {
      const st = ctx.save.ch3m || {};
      const P = [ctx.pos.sun, ctx.pos.moon].filter(Boolean);
      // ---- the van
      const n = vanCount();
      if (lastVan >= 0 && n > lastVan && !st.door) { ctx.caption(`📦 ${Math.min(n, 6)} / 6 in the van`, 1800); api.sound.play('land'); }
      lastVan = n;
      if (n >= 6 && !st.door && authority()) ctx.setSave('ch3m/door', 1);
      if (st.door) once('door', ctx, 'The van is full! 🚚 Now the rest, from upstairs. (The front door is open.)', 4200);
      // ---- the stairwell
      if (P.some((p) => inWell(p) && p.y < 2)) once('well', ctx, 'The stairs are gone?! Goodbye ate them. Stack the neighbours\' boxes, and tape the stack ✦', 5200);
      if (P.some((p) => inWell(p) && p.y > F1 - 0.5 && p.x < 0)) once('gap', ctx, 'The floor over the light well is gone too. Moon: tape it across ✦', 4200);
      if (st.t?.w1) once('w1', ctx, 'Across! The boxes over there won\'t close either… 📦', 3400);
      // ---- the flat and Goodbye
      if (P.some((p) => p.y > F2 - 0.5 && p.z > -19 && p.z < -10)) {
        once('flat', ctx, 'His flat. Empty for the first time.', 3600);
        if (!st.bye) setTimeout(() => once('byehint', ctx, 'Goodbye sits in the balcony door. It doesn\'t want you to leave… Go up to it together, hand in hand ♥', 5600), 3800);
      }
      const bp = bye.g.position;
      if (!st.bye && authority() && api.holding && ctx.pos.sun && ctx.pos.moon && [ctx.pos.sun, ctx.pos.moon].every((p) => p.y > F2 - 0.5 && Math.hypot(p.x - bp.x, p.z - bp.z) < 3.6)) ctx.setSave('ch3m/bye', 1);
      if (st.bye && byeT < 0) {
        byeT = t;
        const lines = [['Goodbye: "…it\'s not really goodbye, is it?"', 3200], ['"It\'s \'see you in Halle\'." 🥲', 3200], ['Moon: tape a zipline from the balcony down to the van ✦', 4200]];
        let at = 0;
        for (const [l, ms] of lines) { setTimeout(() => ctx.caption(l, ms), at); at += ms + 150; }
      }
      // ---- the end: both back at the van after Goodbye has gone
      const atVan = (p) => p && Math.hypot(p.x - 8, p.z - 4.5) < 7 && p.y < 4;
      if (st.bye && doneT < 0 && atVan(ctx.pos.sun) && atVan(ctx.pos.moon)) {
        doneT = t;
        const lines = [['The last box is in. The van leaves for Halle. 📦➜🏙️', 3600], ['A few weeks later: New Year\'s Eve… and one last train.', 3800]];
        let at = 0;
        for (const [l, ms] of lines) { setTimeout(() => ctx.caption(l, ms), at); at += ms + 150; }
        setTimeout(() => ctx.finish(), at + 200);
      }
    },
    update(serverMs, t, dt) {
      spinStars(stars, t);
      for (const a of anims) a(t, dt);
      crowd?.update(dt);
      mgBubble.update(dt, serverMs, t);
      if (!api) return;
      const st = api.save?.ch3m || {};
      // the front door slides up when the van is full
      door.disabled = !!st.door;
      doorM.position.y += ((st.door ? 4.9 : 1.65) - doorM.position.y) * Math.min(1, dt * 2);
      // Goodbye: sighs and droops; when you come hand in hand it smiles, warms up and floats away
      const gone = byeT >= 0 ? Math.min(1, (t - byeT) / 6) : st.bye ? 1 : 0;
      byeWall.disabled = !!st.bye;
      bye.g.visible = gone < 1;
      bye.g.position.set(Math.sin(t * 0.4) * 0.3 * (1 - gone), F2 + 1.5 + Math.sin(t * 1.2) * 0.1 + gone * gone * 8, -10.2 + gone * 6);
      bye.body.scale.set(1 + Math.sin(t * 0.8) * 0.04, 1 - Math.sin(t * 0.8) * 0.05, 1);
      bye.puffM.color.setRGB(0.6 + gone * 0.4, 0.6 + gone * 0.3, 0.66 + gone * 0.1);
      bye.puffM.opacity = 1 - Math.max(0, gone - 0.6) * 2.5;
      bye.mouth.rotation.z = gone > 0.05 ? 0 : Math.PI;
      bye.eyes.forEach((e, i) => { e.rotation.z = (i ? 1 : -1) * 0.35 * (1 - Math.min(1, gone * 3)); });
      const cpi = api.save?.cp?.l === 'ch3-moving' ? api.save.cp.i : 0;
      cps.forEach((c, i) => c.setOn(i <= cpi, t));
    },
  };
}
