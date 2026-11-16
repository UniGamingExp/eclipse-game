// Chapter 4 · Halle · Part 3 "Leipziger Straße" — the döner run. He is hungry; the Quiet is in the way.
//  1. The street (ground map): of course there is a building site. Over the fence by the scaffold (a launch).
//  2. The arcade (side view, two storeys): one of them goes up to the gallery, one stays below. Brass horns carry
//     Moon's song down to the salt walls; a plate on the gallery holds the shutter open; a plate below opens the
//     gallery's grate.
//  3. The pit (it's Halle: another building site): a tilted spring throws both of them 28 m across.
//  4. The döner plaza: the Quiet itself, a big grey bubble, drifts round the square. Every bell that rings
//     shrinks it. Three bells: pop. The shutter goes up.
//  📷 Three photo spots (Sun's camera: nature only, nobody in the picture).
//  🎮 Hidden minigame "Döner Dash": the back alley east of the first street.
import * as THREE from 'three';
import { mat, add, rbox, sign, hangSign, sky, makeStar, spinStars, lights } from './common.js';
import { house } from './medieval.js';
import { backdropHouses } from './backdrop.js';
import { checkpoint, lane, plate } from './play.js';
import { memoryMist } from '../memory.js';
import { createSalt } from './salt.js';
import { createMinigame, raceGame, withMinigames } from './minigame.js';

const AZ = -16, A0 = AZ - 2.2, A1 = AZ + 2.2;    // the arcade's side-view line
const GY = 9;                                     // gallery / scaffold height
const PIT0 = -40, PIT1 = -64;                     // the pit across the north street
const SX = -35;                                   // the north street's middle
const PC = { x: -35, z: -86 };                    // the plaza's middle

function canvasTex(w, h, draw) {
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h;
  draw(cv.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

export function buildCh4Leipziger(root, scene) {
  const colliders = [], stars = [];
  const world = new THREE.Group();
  root.add(world);
  let seed = 23;
  const R = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);

  scene.fog = new THREE.Fog(new THREE.Color('#d8c0d8'), 80, 260);
  sky(root, {
    top: '#3a4a90', mid: '#b898d0', low: '#ffb8a0', neb1: '#c8a8ff', neb2: '#ffb0c8', stars: 0.5, nebula: 0.55, cloud: 0xf0dcea, far: false, cx: -15, cz: -30, seaY: -18,
    lightDir: [0.5, 0.45, 0.6],
    planets: [['lilac', 0.4, 0.3, 270, 0.3, 1.5], ['ember', 2.4, 0.28, 280, 0.2, 1.4]],
  });
  lights(root, { sunColor: 0xffe6c8, sunI: 2.2, hemiSky: 0xdcdcff, hemiGround: 0xffd4c0, hemiI: 1.5, pos: [30, 60, 30], target: [-15, 5, -30], extent: 95 });

  const stoneM = mat(0xb8b0aa, { roughness: 0.95 }), paveM = mat(0xa9a2a0, { roughness: 0.95 }), darkM = mat(0x4a4650, { roughness: 0.7 });
  const woodM = mat(0x9a6a4a, { roughness: 0.8 }), ironM = mat(0x5a6078, { roughness: 0.5, metalness: 0.5 }), plankM = mat(0xd9b07a, { roughness: 0.9 });
  const redM = mat(0xd8323a, { roughness: 0.6 }), whiteM = mat(0xf4efe6, { roughness: 0.6 }), dirtM = mat(0x7a5a44, { roughness: 1 });
  const glassM = new THREE.MeshStandardMaterial({ color: 0xcfe6ff, roughness: 0.1, transparent: true, opacity: 0.1, depthWrite: false });
  const brickM = mat(0xa85a48, { roughness: 0.9 }), creamM = mat(0xe8dcc8, { roughness: 0.9 });

  const solid = (x0, x1, z0, z1, top, bottom, m, col = {}) => {
    const mesh = m ? add(world, new THREE.BoxGeometry(x1 - x0, top - bottom, z1 - z0), m, (x0 + x1) / 2, (top + bottom) / 2, (z0 + z1) / 2) : null;
    if (mesh) mesh.userData.noHide = true;
    const c = { type: 'box', x0, x1, z0, z1, top, bottom, noGrab: true, ...col };
    colliders.push(c);
    return Object.assign(c, { mesh });
  };
  // hatches of salt glass (see part 1)
  const hatches = [];
  const hatchM = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffd9ec, emissiveIntensity: 0.4, roughness: 0.15, transparent: true, opacity: 0.55, depthWrite: false });
  const hatch = (x, y, z, d = 2.5) => {
    const mesh = add(world, rbox(2.5, 0.3, d, 0.06), hatchM.clone(), x, y - 0.15, z, { cast: false });
    mesh.userData.noHide = true;
    const col = { type: 'box', x0: x - 1.25, x1: x + 1.25, z0: z - d / 2, z1: z + d / 2, top: y, bottom: y - 0.3, noGrab: true };
    colliders.push(col);
    hatches.push({ x, y, z, d, col, mesh, open: 0 });
  };
  /** a building-site fence: planks with red-and-white stripes */
  const fence = (x0, x1, z, h = 7.5) => {
    solid(x0, x1, z - 0.2, z + 0.2, h, 0, plankM);
    for (let x = x0 + 0.5; x < x1; x += 1) add(world, new THREE.BoxGeometry(0.5, 0.5, 0.44), Math.round(x - x0) % 2 ? redM : whiteM, x, 1.4, z, { cast: false });
  };

  // ================================================================ ground (with the pit across the north street)
  for (const [x0, x1, z0, z1] of [[-75, 50, PIT0, 56], [-75, 50, -118, PIT1], [-75, -40, PIT1, PIT0], [-30, 50, PIT1, PIT0]]) {
    add(world, new THREE.BoxGeometry(x1 - x0, 2, z1 - z0), paveM, (x0 + x1) / 2, -1, (z0 + z1) / 2, { cast: false }).userData.noHide = true;
    colliders.push({ type: 'box', x0, x1, z0, z1, top: 0, bottom: -2, safe: true, surface: 'concrete' });
  }
  add(world, new THREE.BoxGeometry(10, 0.2, PIT0 - PIT1), dirtM, SX, -7, (PIT0 + PIT1) / 2, { cast: false });
  for (const z of [PIT0, PIT1]) add(world, new THREE.BoxGeometry(10, 7, 0.3), dirtM, SX, -3.5, z + (z === PIT0 ? -0.15 : 0.15), { cast: false });
  for (let i = 0; i < 5; i++) add(world, new THREE.ConeGeometry(1.2 + R(), 1.6 + R(), 6), dirtM, SX - 3.5 + R() * 7, -6.2, PIT1 + 3 + i * 4.4, { cast: false });
  add(world, rbox(1.6, 1.3, 2.6, 0.2), mat(0xe2b03a), SX + 2, -6.2, -52).rotation.y = 0.5;   // a little digger, asleep

  // houses
  const far = [];
  let cheap = false;
  const H = (x, z, floors, rotY, sd, style, w = 6) => {
    if (!cheap) house(world, x, 0, z, { w, d: 6, floors, rotY, seed: sd, style });
    else far.push({ x, z, w: w + 1.6, d: 7.6, h: floors * 3.12, rotY });
    const sw = Math.abs(Math.sin(rotY)) > 0.5, hw = (sw ? 6 : w) / 2 + 0.9, hd = (sw ? w : 6) / 2 + 0.9;
    colliders.push({ type: 'box', x0: x - hw, x1: x + hw, z0: z - hd, z1: z + hd, top: floors * 3.12 + 3.5, bottom: 0, noGrab: true });
  };
  const STY = ['plaster', 'mixed', 'brick'];
  let hs = 300;
  const row = (x0, x1, z0, z1, rotY) => {
    if (x0 === x1) for (let z = z0; z <= z1 + 0.01; z += 6) H(x0, z, 2 + (hs % 3 === 0), rotY, hs++, STY[hs % 3]);
    else for (let x = x0; x <= x1 + 0.01; x += 6) H(x, z0, 2 + (hs % 3 === 0), rotY, hs++, STY[hs % 3]);
  };
  row(-9, -9, 15, 45, Math.PI / 2); row(9, 9, 15, 45, -Math.PI / 2);        // the first street (x −5…5)
  row(-44, -44, -64, -16, Math.PI / 2);                                      // west side of the north street
  row(-26, -26, -60, -30, -Math.PI / 2);                                     // east side of the north street
  cheap = true;                                                              // …painted boxes for everything further off
  row(-9, 9, 51, 51, Math.PI);                                               // closed behind the start
  row(21, 39, 15, 15, 0); row(-39, -15, 15, 15, 0);                          // the square's south side
  row(23, 23, 21, 45, -Math.PI / 2);                                         // the far side of the back alley
  row(39, 39, -27, 9, -Math.PI / 2);                                         // the square's east side
  row(-44, -44, -10, 9, Math.PI / 2);                                        // its west side
  row(-54, -54, -106, -70, Math.PI / 2);                                     // west side of the plaza
  row(-15, -15, -100, -70, -Math.PI / 2);                                    // east side of the plaza
  row(-20, 32, -30, -30, 0);                                                 // behind the arcade
  backdropHouses(world, far);
  // (the first street is 10 m wide, the north street 10 m: x −40…−30)

  // street furniture
  for (const [x, z] of [[-4, 40], [4, 30], [-4, 20], [-22, 4], [20, 4], [-38, -30], [-31, -68], [-49, -72], [-21, -92]]) {
    add(world, new THREE.CylinderGeometry(0.07, 0.1, 4.2, 8), ironM, x, 2.1, z);
    add(world, new THREE.SphereGeometry(0.24, 10, 8), new THREE.MeshStandardMaterial({ color: 0xfff4d8, emissive: 0xffd9a0, emissiveIntensity: 0.9 }), x, 4.3, z, { cast: false });
    colliders.push({ type: 'cyl', x, z, r: 0.14, top: 4.2, bottom: 0, noGrab: true, noStep: true });
  }
  const planter = (x, z, tree = true) => {
    add(world, new THREE.CylinderGeometry(1.1, 0.9, 0.8, 10), stoneM, x, 0.4, z);
    if (tree) { add(world, new THREE.CylinderGeometry(0.16, 0.22, 2.6, 7), mat(0x7a5a44), x, 2.0, z); add(world, new THREE.IcosahedronGeometry(1.7, 1), mat(0xf2a8c8, { roughness: 1, flatShading: true }), x, 4.1, z); }
    else for (let k = 0; k < 9; k++) add(world, new THREE.SphereGeometry(0.24, 7, 6), mat([0xff8fb8, 0xffe27a, 0xc6b3ff, 0xffffff][k % 4]), x + Math.cos(k) * 0.6, 0.95 + (k % 2) * 0.12, z + Math.sin(k) * 0.6, { cast: false });
    colliders.push({ type: 'cyl', x, z, r: 1.15, top: 0.8, bottom: 0 });
  };
  planter(3.4, 34); planter(-14, -2, false); planter(-48, -91);

  // ================================================================ 1. THE BUILDING SITE in the first street
  fence(-5, 5, 10);
  // the scaffold on the left: a deck at 9 m that crosses the fence line
  {
    const X0 = -5, X1 = -1, deck = (z0, z1, x0 = X0, x1 = X1) => { add(world, rbox(x1 - x0, 0.3, z1 - z0, 0.05), plankM, (x0 + x1) / 2, GY - 0.15, (z0 + z1) / 2).userData.noHide = true; colliders.push({ type: 'box', x0, x1, z0, z1, top: GY, bottom: GY - 0.3, noGrab: true, surface: 'wood' }); };
    deck(3, 12.75); deck(15.25, 16.2); deck(12.75, 15.25, X0, -4.25); deck(12.75, 15.25, -1.75, X1);
    hatch(-3, GY, 14);
    for (const z of [3.2, 9.6, 16]) for (const x of [X0 + 0.15, X1 - 0.15]) add(world, new THREE.CylinderGeometry(0.06, 0.06, GY + 2, 6), ironM, x, (GY + 2) / 2, z).userData.noHide = true;
    for (const z of [3.2, 9.6, 16]) add(world, new THREE.CylinderGeometry(0.05, 0.05, 4, 6).rotateZ(Math.PI / 2), ironM, -3, GY + 1.1, z).userData.noHide = true;
    colliders.push({ type: 'box', x0: X0 - 0.2, x1: X0, z0: 3, z1: 16.2, top: GY + 1.1, bottom: GY, noGrab: true });
    colliders.push({ type: 'box', x0: X1, x1: X1 + 0.2, z0: 9.2, z1: 16.2, top: GY + 1.1, bottom: GY, noGrab: true });
    colliders.push({ type: 'box', x0: X0, x1: X1, z0: 16.2, z1: 16.4, top: GY + 1.1, bottom: GY, noGrab: true });
    stars.push(makeStar(world, 'c4l-scaffold', -3, GY + 1.5, 4.2, 0));
  }
  // cones, a barrier, a sign, a heap of sand
  for (const [x, z] of [[1, 12.5], [3, 13], [4.2, 11.6], [-0.4, 11.4]]) add(world, new THREE.ConeGeometry(0.22, 0.6, 8), mat(0xff7a2a), x, 0.3, z);
  add(world, new THREE.ConeGeometry(1.6, 1.3, 9), mat(0xe8d09a, { roughness: 1 }), 3, 0.65, 15.6);
  colliders.push({ type: 'cyl', x: 3, z: 15.6, r: 1.2, top: 0.9, bottom: 0 });

  // ================================================================ 2. THE ARCADE (side view, x 28 → −30)
  fence(-40.2, -30, -12);                                               // no way round: "Umleitung"
  solid(-30, 28, -24, A0, 17, 0, creamM);                             // back wall / the rest of the building
  solid(-30, 28.4, A0, A1 + 0.1, 17, 16, brickM);                     // roof
  solid(28, 28.4, A0, A1 + 0.1, 16, 0, brickM);                       // east end wall
  solid(-30.2, -30, A0, A1 + 0.1, 16, GY, brickM);                    // west end, gallery level
  // the glazed front: closed except for the way in at the east end
  { const g = add(world, new THREE.BoxGeometry(52, 16, 0.08), glassM, -4, 8, A1 + 0.05, { cast: false, receive: false }); g.userData.noHide = true; }
  colliders.push({ type: 'box', x0: -30, x1: 22, z0: A1, z1: A1 + 0.2, top: 16, bottom: 0, noGrab: true, noCam: true });
  colliders.push({ type: 'box', x0: 22, x1: 28, z0: A1, z1: A1 + 0.2, top: 16, bottom: 4.2, noGrab: true, noCam: true });
  for (let x = -30; x <= 28; x += 5.8) add(world, rbox(0.35, 16, 0.35, 0.05), brickM, x, 8, A1 + 0.1).userData.noHide = true;
  add(world, rbox(6.4, 0.5, 0.5, 0.05), mat(0xe2b03a), 25, 4.4, A1 + 0.2).userData.noHide = true;      // the entrance beam
  // shop windows along the back wall, lamps
  for (let x = -27; x <= 25; x += 6.5) {
    add(world, rbox(3.6, 3, 0.1, 0.05), new THREE.MeshStandardMaterial({ color: 0x2a2f4a, emissive: [0xffc878, 0xff9ec4, 0x8fd8ff][Math.abs(Math.round(x)) % 3], emissiveIntensity: 0.3 }), x, 2.2, A0 + 0.06, { cast: false });
    add(world, rbox(3.6, 3, 0.1, 0.05), new THREE.MeshStandardMaterial({ color: 0x2a2f4a, emissive: 0xffc878, emissiveIntensity: 0.2 }), x, GY + 2.4, A0 + 0.06, { cast: false });
  }
  // the gallery (9 m): a hatch over the spring, a hole at the east end to drop back down, a grate near the west end
  const gdeck = (x0, x1) => { add(world, rbox(x1 - x0, 0.5, A1 - A0, 0.06), woodM, (x0 + x1) / 2, GY - 0.25, AZ).userData.noHide = true; colliders.push({ type: 'box', x0, x1, z0: A0, z1: A1, top: GY, bottom: GY - 0.5, noGrab: true, surface: 'wood' }); };
  gdeck(-28.4, 18.75); hatch(20, GY, AZ, A1 - A0 - 0.3); gdeck(21.25, 25.6);
  const grate = solid(-25.2, -25, A0, A1, 16, GY, null);
  const grateG = new THREE.Group(); grateG.userData.noHide = true; world.add(grateG);
  for (let k = 0; k < 9; k++) add(grateG, new THREE.CylinderGeometry(0.05, 0.05, 7, 6), ironM, -25.1, GY + 3.5, A0 + 0.3 + k * 0.48);
  // below: the shutter that the gallery plate holds open
  const door = solid(-22.2, -21.8, A0, A1, GY - 0.5, 0, null);
  const doorM = add(world, rbox(0.3, GY - 0.5, A1 - A0, 0.04), mat(0x8a909c, { roughness: 0.4, metalness: 0.6 }), -22, (GY - 0.5) / 2, AZ);
  doorM.userData.noHide = true;
  const plateA = plate(world, { x: -23.4, y: GY, z: AZ, r: 0.9, who: 'any' });       // on the gallery: holds the shutter
  const plateB = plate(world, { x: -26.4, y: 0, z: AZ, r: 0.9, who: 'any' });        // below, past the shutter: opens the grate

  // ================================================================ 4. THE DÖNER PLAZA
  // the shop
  solid(-45, -25, -110, -103, 9, 0, creamM);
  const signT = canvasTex(512, 64, (g) => { g.fillStyle = '#d8323a'; g.fillRect(0, 0, 512, 64); g.fillStyle = '#fff4d8'; g.font = 'bold 42px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('DÖNER  ·  24 h  ·  DÜRÜM', 256, 34); });
  add(world, new THREE.BoxGeometry(21, 2.4, 1.6), new THREE.MeshStandardMaterial({ map: signT, roughness: 0.6, emissive: 0xffffff, emissiveMap: signT, emissiveIntensity: 0.25 }), -35, 5.8, -102.4).userData.noHide = true;
  add(world, rbox(8, 4, 0.2, 0.05), new THREE.MeshStandardMaterial({ color: 0x3a2a22, emissive: 0xffb060, emissiveIntensity: 0.6 }), -35, 2.2, -102.95, { cast: false });   // the warm inside
  const spit = add(world, new THREE.CylinderGeometry(0.5, 0.32, 1.6, 12), mat(0x9a5a34, { roughness: 0.8 }), -33, 2.2, -102.75);
  add(world, new THREE.CylinderGeometry(0.04, 0.04, 2.4, 6), ironM, -33, 2.2, -102.75);
  const shutter = add(world, rbox(8.2, 4.2, 0.12, 0.04), mat(0x5a6480, { roughness: 0.5, metalness: 0.3 }), -35, 2.2, -102.1);
  shutter.userData.noHide = true;
  for (let k = 0; k < 9; k++) add(shutter, new THREE.BoxGeometry(8.2, 0.06, 0.04), darkM, 0, -1.9 + k * 0.47, 0.07, { cast: false });
  for (const [x, z] of [[-41, -99], [-29, -99]]) { add(world, new THREE.CylinderGeometry(0.5, 0.5, 0.06, 14), whiteM, x, 0.78, z); add(world, new THREE.CylinderGeometry(0.05, 0.05, 0.75, 6), ironM, x, 0.38, z); colliders.push({ type: 'cyl', x, z, r: 0.5, top: 0.8, bottom: 0 }); }
  // three bells on wooden frames round the plaza
  const BELLS = [['p1', -44.5, -78], ['p2', -25.5, -78], ['p3', -35, -96]];
  for (const [, x, z] of BELLS) {
    for (const dx of [-1.9, 1.9]) { add(world, rbox(0.3, 6, 0.3, 0.05), woodM, x + dx, 3, z); colliders.push({ type: 'cyl', x: x + dx, z, r: 0.22, top: 6, bottom: 0, noGrab: true, noStep: true }); }
    add(world, rbox(4.4, 0.3, 0.3, 0.05), woodM, x, 6.0, z);
  }

  // ================================================================ salt and song
  let api = null;
  const seen = {};
  const once = (k, ctx, text, ms = 4200) => { if (seen[k]) return; seen[k] = true; (ctx || api)?.caption(text, ms); };
  let bossR = 5;
  const bossPos = (ms) => { const a = (ms / 1000) * (2 * Math.PI / 26); return [PC.x + Math.sin(a) * 9.5, PC.z + Math.sin(a * 2 + 0.6) * 7]; };
  const salt = createSalt(world, colliders, {
    key: 'ch4l',
    springs: [
      { id: 'f1', x: -3, y: 0, z: 14 },                                             // up the scaffold
      { id: 'a1', x: 20, y: 0, z: AZ },                                             // up to the gallery
      { id: 'pt', x: SX, y: 0, z: PIT0 + 2.2, v: [0, 18, -24.8], lock: 1.45 },      // over the pit
      { id: 'k1', x: BELLS[0][1], y: 0, z: BELLS[0][2] },
      { id: 'k2', x: BELLS[1][1], y: 0, z: BELLS[1][2] },
      { id: 'k3', x: BELLS[2][1], y: 0, z: BELLS[2][2] },
    ],
    walls: [
      { id: 'w1', x0: 7.6, x1: 8.4, z0: A0, z1: A1, y: 0, h: GY - 0.5 },
      { id: 'w2', x0: -8.4, x1: -7.6, z0: A0, z1: A1, y: 0, h: GY - 0.5 },
    ],
    bells: BELLS.map(([id, x, z], i) => ({ id, x, y: 4.55, z, spring: 'k' + (i + 1) })),
    quiet: [
      { x0: 6, x1: 15, y: GY, z: AZ, r: 2.3, period: 7 },
      { x0: -10.5, x1: -1.5, y: GY, z: AZ, r: 2.3, period: 5.2, off: 2 },
      { pos: bossPos, y: 0, z: PC.z, r: 5, period: 1 },                             // the Quiet itself
    ],
    pipes: [
      { x: 11.2, y: GY, z: A0 + 0.5, to: [11.2, 0, A0 + 0.5] },
      { x: -4.8, y: GY, z: A0 + 0.5, to: [-4.8, 0, A0 + 0.5] },
    ],
    onRing(id) {
      const n = [0, 1, 2].filter((i) => salt.bellMask() & (1 << i)).length;
      if (n === 1) api?.caption('DONG! 🔔 The Quiet flinches… and shrinks.', 3600);
      else if (n === 2) api?.caption('Two bells! 🔔🔔 It\'s getting small. One more!', 3600);
    },
  });
  const boss = salt.quiet[2];
  // sleepy eyes for the big one
  for (const dx of [-1.3, 1.3]) add(boss.m, new THREE.SphereGeometry(0.42, 10, 8), mat(0x4a4a56), dx, 0.6, 4.2, { cast: false }).scale.set(1, 0.35, 0.4);

  stars.push(makeStar(world, 'c4l-pipe', 2, GY + 1.4, AZ, 1));          // on the gallery between the horns
  stars.push(makeStar(world, 'c4l-pit', SX, 8.6, (PIT0 + PIT1) / 2, 2)); // at the top of the throw over the pit
  stars.push(makeStar(world, 'c4l-doner', -41, 2.2, -99, 3));           // over the shop's table (hop onto it)

  sign(world, 3.6, 18.5, -0.4, ['Building site. Again.', 'White ring by the', 'scaffold ⬅ : up and over']);
  sign(world, 17, -6.5, 0.6, ['ARCADE: one of you up,', 'one below. Brass horns', 'carry her song down']);
  hangSign(world, -18, GY + 3.6, A0 + 0.5, ['Plate = shutter open', '(only while you stand)']);
  sign(world, SX + 3.6, PIT0 + 5, -0.5, ['…and another one.', 'The ring throws you', 'over. Together!']);

  // ================================================================ 📷 photo spots
  const SPOTS = [[3.4, 31.2, 'a cherry tree in a planter'], [-14, 0.6, 'flowers in front of the arcade'], [-48, -88.2, 'the tree by the döner shop']];
  const spotM = SPOTS.map(([x, z]) => {
    const m = add(world, new THREE.RingGeometry(0.8, 1.0, 28).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xffe27a, transparent: true, opacity: 0.8, depthWrite: false }), x, 0.05, z, { cast: false, receive: false });
    const t = canvasTex(128, 128, (g) => { g.font = '96px sans-serif'; g.textAlign = 'center'; g.fillText('📷', 64, 98); });
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, depthWrite: false })); sp.position.set(x, 1.6, z); sp.scale.setScalar(0.9); world.add(sp);
    return { m, sp };
  });

  // ================================================================ 🎮 hidden minigame: the back alley east of the first street
  // (through the gap between the houses at z 12: an alley along x 14…18 from z 20 to z 46)
  for (const [x, z, h] of [[15, 30, 0.9], [17, 36, 0.9], [15.4, 41, 1.5], [16.8, 25, 0.6]]) { add(world, rbox(1.4, h, 1.4, 0.06), woodM, x, h / 2, z); colliders.push({ type: 'box', x0: x - 0.7, x1: x + 0.7, z0: z - 0.7, z1: z + 0.7, top: h, bottom: 0 }); }
  for (const x of [15, 17]) { add(world, new THREE.CylinderGeometry(0.04, 0.04, 2.2, 6), ironM, x, 1.1, 47); add(world, new THREE.PlaneGeometry(0.7, 0.45), new THREE.MeshBasicMaterial({ color: x < 16 ? 0xffb347 : 0xa98bff, side: THREE.DoubleSide }), x + 0.36, 1.95, 47, { cast: false }); }
  const mgDash = createMinigame(world, colliders, {
    id: 'c4dash', title: 'Döner Dash', rules: ['Last one to the flags pays!', 'Over the crates. First there wins.'],
    at: { x: 16, y: 0, z: 19.4 }, face: 0, pads: { sun: [15, 21.2], moon: [17, 21.2] }, dur: 45000,
    game: raceGame({ finish: { sun: [15, 47], moon: [17, 47] }, y: 0, fallY: -3 }),
  });

  // ================================================================ checkpoints, mist
  const cps = [
    checkpoint(world, { x: 0, y: 0, z: 44, r: 2.4, sun: [-1, 0, 42], moon: [1, 0, 42] }),
    checkpoint(world, { x: 2, y: 0, z: 2, r: 2.6, sun: [1, 0, 3], moon: [3, 0, 3], label: 'Past the fence' }),
    checkpoint(world, { x: -34, y: 0, z: -19.5, r: 2.6, sun: [-34, 0, -17], moon: [-36, 0, -17], label: 'Through the arcade' }),
    checkpoint(world, { x: -38.6, y: 0, z: PIT1 - 3, r: 2.6, sun: [-36, 0, PIT1 - 3], moon: [-34, 0, PIT1 - 3], label: 'The döner plaza 🥙' }),
  ];
  {
    const P = [];
    for (let x = -72; x <= 48; x += 8) { P.push([x, 2 + R() * 3, 56 + R() * 3]); P.push([x, 2 + R() * 4, -118 - R() * 3]); }
    for (let z = -110; z <= 50; z += 8) { P.push([50 + R() * 2, 2 + R() * 3, z]); P.push([-75 - R() * 2, 2 + R() * 3, z]); }
    memoryMist(world, P, { size: 11, color: 0xe0d0e8, opacity: 0.4 });
  }

  // ================================================================ state
  const prevY = { sun: 0, moon: 0 }, vyEst = { sun: 0, moon: 0 };
  let doneT = -1, popT = -1;
  const line = lane([28, AZ], [-30, AZ], { half: 2.3, y0: -1, y1: 17, dist: 15, pitch: 0.08 });

  return {
    id: 'ch4-leipziger',
    title: 'Chapter 4 · Halle — Leipziger Straße',
    colliders,
    stars,
    movers: {},
    spawn: { sun: new THREE.Vector3(-1, 0, 42), moon: new THREE.Vector3(1, 0, 42) },
    camYaw: { sun: 0, moon: 0 },
    lobbyCam: { cx: -10, cz: -20, r: 80, h: 40 },
    killY: -12,
    killAt: (p) => p.y < -2.6,
    lanes: [line],
    checkpoints: cps,
    hints: [
      'The fence is too high. On the left, under the scaffold, is a white ring: Sun grows the crystal, both stand on it, Moon sings. Walk over the scaffold and drop down behind the fence.',
      'Go in at the right-hand end of the arcade. One of you flies up to the gallery (Moon can do it alone: stand on the crystal and sing). Up there, sing next to a brass horn to break the salt wall below. The plate on the gallery holds the shutter open; the plate behind the shutter opens the grate upstairs.',
      'Stand on the crystal at the edge of the pit together and sing: it throws you both across.',
      'Sun grows a crystal under a bell; Moon sings near it while the big grey bubble is somewhere else. Each bell makes the bubble smaller. Three bells and it pops.',
    ],
    respawnNearPartner: (pp) => !!pp,
    portal: new THREE.Vector3(-35, 0, -97.5),
    intro: {
      all: ['Chapter 4 · Halle', 'Part 3 · Leipziger Straße', '"I\'m starving." "You\'re always starving." There\'s a döner place at the end of this street. The Quiet is sitting right in front of it.'],
      sun: 'Salt ✦ and a camera: step on the 📷 rings together',
      moon: 'Sing ✦ next to a brass horn: the song comes out at its other end',
    },
    abilities: withMinigames(salt.abilities, [mgDash]),
    salt,
    attach(a) { api = a; salt.attach(a); mgDash.attach(a); },
    onCheckpoint() {},
    debug: () => ({ bells: salt.bellMask(), walls: api?.save?.ch4l?.w || 0, door: door.disabled, grate: grate.disabled, bossR, photos: api?.save?.ch4l?.ph || 0 }),
    story(ctx, t) {
      const P = [ctx.pos.sun, ctx.pos.moon].filter(Boolean);
      const m = salt.bellMask();
      if (P.some((p) => p.z < 22 && p.z > 10)) once('site', ctx, 'A building site. In Halle. What a surprise. 🚧', 3600);
      if (P.some((p) => p.z < -13.6 && p.x > 20 && p.y < 2)) once('arc', ctx, 'The arcade. Shops below, a gallery above. Someone has to go up.', 4200);
      if (P.some((p) => p.y > GY - 0.5 && p.z < -13 && p.x < 16 && p.x > -30)) once('horn', ctx, 'Brass horns! Sing into one and the song comes out downstairs. (Not while the Quiet is listening.)', 5200);
      if (P.some((p) => p.z < -30 && p.z > PIT0 && p.x < -29)) once('pit', ctx, '…another building site. "They\'ve been digging here since before I moved in."', 4600);
      if (P.some((p) => p.z < PIT1 - 4)) once('plaza', ctx, 'There it is: the Quiet itself. Big, grey, and parked in front of the döner. 🌫️ Three bells stand round the square.', 5600);
      if (m === 7 && doneT < 0) {
        doneT = t;
        const lines = [
          ['POP! 💥 The Quiet bursts into a thousand little notes.', 3800],
          ['The shutter rattles up. It smells AMAZING.', 3600],
          ['"One döner with everything. And for the lady…?" "The same. Extra cumin." 🥙🥙', 5000],
          ['Behind them, all five bells of Halle ring at once. His city has its sound back.', 4800],
          ['Chapter 4 complete ✨ Next: her city.', 3600],
        ];
        let at = 2200;
        for (const [l, ms] of lines) { setTimeout(() => ctx.caption(l, ms), at); at += ms + 150; }
        setTimeout(() => { for (let k = 0; k < 3; k++) setTimeout(() => api?.sound.play('bell'), k * 700); }, 13000);
        setTimeout(() => ctx.finish(), at + 200);
      }
    },
    update(serverMs, t, dt) {
      spinStars(stars, t);
      mgDash.update(dt, serverMs, t);
      spit.rotation.y = t * 1.2;
      if (!api) return;
      const P = { sun: api.bodies.sun.pos, moon: api.bodies.moon.pos };
      // arcade: plates, shutter, grate
      const a = plateA.update(P), b = plateB.update(P);
      door.disabled = a; doorM.position.y += (((a ? GY + 3.6 : (GY - 0.5) / 2)) - doorM.position.y) * Math.min(1, dt * 6);
      grate.disabled = b; grateG.position.y += ((b ? 6.6 : 0) - grateG.position.y) * Math.min(1, dt * 6);
      // hatches
      for (const r of ['sun', 'moon']) { const p = P[r]; vyEst[r] = dt > 0 ? (p.y - prevY[r]) / dt : 0; prevY[r] = p.y; }
      for (const h of hatches) {
        const open = ['sun', 'moon'].some((r) => { const p = P[r]; return Math.abs(p.x - h.x) < 1.45 && Math.abs(p.z - h.z) < h.d / 2 + 0.3 && p.y < h.y - 0.02 && p.y > h.y - 8.5 && vyEst[r] > 7; });
        h.col.disabled = open;
        h.open += ((open ? 1 : 0) - h.open) * Math.min(1, dt * 14);
        h.mesh.material.opacity = 0.55 * (1 - h.open);
      }
      // the Quiet itself shrinks with every bell
      const n = [0, 1, 2].filter((i) => salt.bellMask() & (1 << i)).length;
      const want = [5, 3.9, 2.8, 0][n];
      if (n === 3 && popT < 0 && bossR > 0.1) { popT = t; const [bx, bz] = bossPos(serverMs); for (let k = 0; k < 4; k++) api.fx.sparks(new THREE.Vector3(bx, 1.5 + k, bz), [0xffffff, 0xffe27a, 0xc6b3ff, 0xff9ec4][k], 40, 7); api.sound.play('shatter'); api.shake?.(0.8); }
      bossR += (want - bossR) * Math.min(1, dt * (n === 3 ? 9 : 2));
      boss.r = bossR < 0.1 ? 0 : bossR;
      shutter.position.y += ((n === 3 ? 6.6 : 2.2) - shutter.position.y) * Math.min(1, dt * 1.5);
      // photo spots: both on the ring
      const ph = api.save?.ch4l?.ph || 0;
      SPOTS.forEach(([x, z, label], i) => {
        const got = !!(ph & (1 << i));
        spotM[i].m.visible = spotM[i].sp.visible = !got;
        spotM[i].sp.position.y = 1.6 + Math.sin(t * 2 + i) * 0.12;
        if (got || !['sun', 'moon'].every((r) => Math.hypot(P[r].x - x, P[r].z - z) < 2.4 && Math.abs(P[r].y) < 1.5)) return;
        if (api.kind !== 'solo' && api.role !== 'sun') return;       // Sun's phone takes the picture
        api.setSave('ch4l/ph', ph | (1 << i));
        api.sound.play('pin'); api.fx.sparks(new THREE.Vector3(x, 1.6, z), 0xffffff, 30, 5);
        const k = [0, 1, 2].filter((j) => (ph | (1 << i)) & (1 << j)).length;
        api.caption(`📸 Click! "${label}". Nobody in the picture, as always. (${k}/3)`, 4200);
      });
      const cpi = api.save?.cp?.l === 'ch4-leipziger' ? api.save.cp.i : 0;
      cps.forEach((c, i) => c.setOn(i <= cpi, t));
    },
  };
}
