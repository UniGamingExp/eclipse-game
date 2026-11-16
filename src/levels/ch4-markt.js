// Chapter 4 · Halle · Part 1 "Marktplatz" — the city of five towers has lost its five bells to the Quiet.
// Built to the playtest-2 rules (see the level-design notes).
//  1. The market square (ground map): the tram stop, the stalls, the composer's statue. The market bell teaches
//     the pair: Sun grows a salt crystal under it, Moon's song shatters the crystal and the shards ring the bell.
//     That wakes the brine spring at the foot of the Red Tower.
//  2. The Red Tower (side view, galleries on its south face, 9 m apart, no grabbing): stand on the crystal
//     together, she sings, both fly up. Salt-crust walls only break for her song; the Quiet (grey bubbles of
//     silence) drifts over the springs. The big bell at the top wakes the tilted spring…
//  3. …that throws both of them 30 m across to the bridge between the church's east towers. Bell three.
//  4. The church roof: a wall, the Quiet, a 9 m step, then the two bells of the blue towers, which must ring
//     within 8 s of each other. Five bells: the city wakes up.
//  🎮 Hidden minigame "Salt & Song": a courtyard behind the stalls, through the archway in the south-west.
import * as THREE from 'three';
import { mat, add, rbox, sign, hangSign, sky, makeStar, spinStars, lights } from './common.js';
import { house } from './medieval.js';
import { checkpoint, lane } from './play.js';
import { memoryMist } from '../memory.js';
import { createSalt, CRYSTAL_H } from './salt.js';
import { createMinigame, tilesGame, withMinigames } from './minigame.js';

const LZ = -6;                 // the side-view line
const G1 = 9, G2 = 18, G3 = 27, BF = 36;   // the Red Tower's galleries and belfry
const CH = 33, UP = 42;        // the church: bridge + nave roof, and the roof between the blue towers
const Z0 = LZ - 2.2, Z1 = LZ + 2.2;

function canvasTex(w, h, draw, rep = null) {
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h;
  draw(cv.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  if (rep) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep[0], rep[1]); }
  return t;
}
function worldUV(geo, s = 2) {
  geo.computeBoundingBox();
  const pos = geo.attributes.position, nor = geo.attributes.normal, uv = geo.attributes.uv;
  for (let i = 0; i < pos.count; i++) {
    const nx = Math.abs(nor.getX(i)), ny = Math.abs(nor.getY(i));
    if (ny > 0.5) uv.setXY(i, pos.getX(i) / s, pos.getZ(i) / s);
    else if (nx > 0.5) uv.setXY(i, pos.getZ(i) / s, pos.getY(i) / s);
    else uv.setXY(i, pos.getX(i) / s, pos.getY(i) / s);
  }
  return geo;
}

export function buildCh4Markt(root, scene) {
  const colliders = [], stars = [], anims = [];
  const world = new THREE.Group();
  root.add(world);
  let seed = 7;
  const R = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);

  scene.fog = new THREE.Fog(new THREE.Color('#cfc6dc'), 80, 260);
  sky(root, {
    top: '#5a6aa8', mid: '#c9b8dc', low: '#ffd9c8', neb1: '#b8a8ff', neb2: '#ffb8d8', stars: 0.35, nebula: 0.5, cloud: 0xf0e6f2, far: false, cx: -15, cz: 0, seaY: -16,
    lightDir: [0.35, 0.5, 0.8],
    planets: [['ember', -0.6, 0.32, 280, 0.2, 1.6], ['lilac', 1.9, 0.26, 260, 0.3, 1.4], ['giant', 3.3, 0.3, 320, 0.42]],
  });
  lights(root, { sunColor: 0xfff0dc, sunI: 2.3, hemiSky: 0xdfe4ff, hemiGround: 0xffd8c0, hemiI: 1.5, pos: [20, 60, 40], target: [-15, 15, -4], extent: 70 });

  // ================================================================ materials
  const cobT = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#a79f9c'; g.fillRect(0, 0, w, h);
    for (let j = 0; j < 8; j++) for (let i = 0; i < 8; i++) {
      const o = (j % 2) * 16, v = 150 + ((i * 7 + j * 13) % 5) * 9;
      g.fillStyle = `rgb(${v + 8},${v + 2},${v})`;
      g.beginPath(); g.roundRect(i * 32 + o - 14, j * 32 + 2, 28, 28, 6); g.fill();
      if (i === 0) { g.beginPath(); g.roundRect(8 * 32 + o - 14, j * 32 + 2, 28, 28, 6); g.fill(); }
    }
  }, [1, 1]);
  const cobM = new THREE.MeshStandardMaterial({ map: cobT, roughness: 0.95 });
  const brickT = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#6a4038'; g.fillRect(0, 0, w, h);
    for (let j = 0; j < 16; j++) for (let i = 0; i < 5; i++) {
      const o = (j % 2) * 26, v = ((i * 5 + j * 3) % 4) * 8;
      g.fillStyle = `rgb(${150 + v},${78 + v / 2},${62 + v / 2})`;
      g.fillRect(i * 52 + o - 26 + 2, j * 16 + 2, 48, 12);
      if (i === 0) g.fillRect(5 * 52 + o - 26 + 2, j * 16 + 2, 48, 12);
    }
  }, [1, 1]);
  const brickM = new THREE.MeshStandardMaterial({ map: brickT, roughness: 0.9 });
  const stoneT = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#8f8a86'; g.fillRect(0, 0, w, h);
    for (let j = 0; j < 8; j++) for (let i = 0; i < 4; i++) {
      const o = (j % 2) * 32, v = ((i * 3 + j * 5) % 5) * 6;
      g.fillStyle = `rgb(${196 + v},${188 + v},${172 + v})`;
      g.fillRect(i * 64 + o - 32 + 2, j * 32 + 2, 60, 28);
      if (i === 0) g.fillRect(4 * 64 + o - 32 + 2, j * 32 + 2, 60, 28);
    }
  }, [1, 1]);
  const stoneM = new THREE.MeshStandardMaterial({ map: stoneT, roughness: 0.9 });
  const woodM = mat(0x9a6a4a, { roughness: 0.8 }), darkM = mat(0x4a3b42, { roughness: 0.7 }), ironM = mat(0x3a3f5a, { roughness: 0.5, metalness: 0.5 });
  const copperM = mat(0x5aa893, { roughness: 0.6, metalness: 0.2 }), slateM = mat(0x55607e, { roughness: 0.7 });
  const glassM = new THREE.MeshStandardMaterial({ color: 0x2a2f4a, emissive: 0xffc878, emissiveIntensity: 0.25, roughness: 0.3 });

  /** a solid block with a collider (uv scaled to the world so the brick / stone pattern keeps its size) */
  const block = (x0, x1, z0, z1, top, bottom, m, col = {}, uv = 3) => {
    const mesh = m ? add(world, worldUV(new THREE.BoxGeometry(x1 - x0, top - bottom, z1 - z0), uv), m, (x0 + x1) / 2, (top + bottom) / 2, (z0 + z1) / 2) : null;
    if (mesh) mesh.userData.noHide = true;
    const c = { type: 'box', x0, x1, z0, z1, top, bottom, ...col };
    colliders.push(c);
    return Object.assign(c, { mesh });
  };
  /** a wooden gallery / stone deck piece on the side-view line */
  const deck = (x0, x1, y, m = woodM, th = 0.5) => {
    const mesh = add(world, rbox(x1 - x0, th, Z1 - Z0, 0.08), m, (x0 + x1) / 2, y - th / 2, LZ);
    mesh.userData.noHide = true;
    colliders.push({ type: 'box', x0, x1, z0: Z0, z1: Z1, top: y, bottom: y - th, noGrab: true, surface: m === woodM ? 'wood' : 'concrete' });
  };
  /** a low end rail so nobody strolls off a gallery */
  const rail = (x, y) => {
    add(world, rbox(0.16, 1.1, Z1 - Z0, 0.05), darkM, x, y + 0.55, LZ).userData.noHide = true;
    colliders.push({ type: 'box', x0: x - 0.12, x1: x + 0.12, z0: Z0, z1: Z1, top: y + 1.1, bottom: y, noGrab: true });
  };

  // ================================================================ 1. THE MARKET SQUARE
  {
    const g = worldUV(new THREE.BoxGeometry(124, 2, 92), 4);
    add(world, g, cobM, -15, -1, 4, { cast: false }).userData.noHide = true;
    colliders.push({ type: 'box', x0: -77, x1: 47, z0: -42, z1: 50, top: 0, bottom: -2, safe: true, surface: 'concrete' });
  }
  // houses all round (closed on every side)
  const H = (x, z, w, d, floors, rotY, sd, style) => {
    house(world, x, 0, z, { w, d, floors, rotY, seed: sd, style });
    const sw = Math.abs(Math.sin(rotY)) > 0.5, hw = (sw ? d : w) / 2 + 1, hd = (sw ? w : d) / 2 + 1;
    colliders.push({ type: 'box', x0: x - hw, x1: x + hw, z0: z - hd, z1: z + hd, top: floors * 3.12 + 3.5, bottom: 0, noGrab: true });
  };
  const STY = ['plaster', 'mixed', 'brick'];
  let hs = 100;
  for (let x = -70; x <= 38; x += 6) H(x, 46, 6, 6, 2 + (hs % 3 === 0), Math.PI, hs++, STY[hs % 3]);        // south row
  for (let z = -34; z <= 40; z += 6) H(42, z, 6, 6, 2 + (hs % 2), -Math.PI / 2, hs++, STY[hs % 3]);          // east row
  for (let z = -34; z <= 40; z += 6) H(-72, z, 6, 6, 2 + (hs % 2), Math.PI / 2, hs++, STY[hs % 3]);          // west row
  for (let x = -66; x <= 36; x += 6) H(x, -38, 6, 6, 3, 0, hs++, STY[hs % 3]);                                // north row

  // the tram (stopped where the Quiet caught it) and its tracks
  for (const z of [35.3, 36.7]) add(world, new THREE.BoxGeometry(110, 0.06, 0.12), ironM, -15, 0.04, z, { cast: false });
  {
    const tg = new THREE.Group(); tg.position.set(9, 0, 36); world.add(tg); tg.userData.noHide = true;
    add(tg, rbox(11, 2.5, 2.3, 0.35), mat(0xf2ead8, { roughness: 0.5 }), 0, 1.75, 0);
    add(tg, rbox(11.04, 0.7, 2.34, 0.2), mat(0xc8323a, { roughness: 0.5 }), 0, 1.0, 0);
    add(tg, rbox(10.4, 0.9, 2.36, 0.1), glassM, 0, 2.2, 0, { cast: false });
    add(tg, rbox(10.6, 0.25, 2.0, 0.1), mat(0xd8d0c0), 0, 3.1, 0);
    add(tg, new THREE.CylinderGeometry(0.03, 0.03, 1.6, 5), ironM, 1, 3.9, 0).rotation.z = 0.5;
    colliders.push({ type: 'box', x0: 3.5, x1: 14.5, z0: 34.85, z1: 37.15, top: 3.2, bottom: 0 });
  }
  add(world, new THREE.BoxGeometry(110, 0.04, 0.04), ironM, -15, 4.7, 36, { cast: false });
  stars.push(makeStar(world, 'c4-tram', 9, 4.6, 36, 0));

  // market stalls (grey canopies: the colour comes back with the bells)
  const STALLS = [[-6, 24, 0xc8323a], [-12, 22, 0x3a8a5a], [-18, 25, 0xe2a53a], [-10, 29, 0x3a6ac8], [-20, 19, 0xc85a9a], [-25, 24, 0xe2733a]];
  for (const [x, z, c] of STALLS) {
    const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = (R() - 0.5) * 0.5; world.add(g);
    add(g, rbox(2.6, 0.9, 1.4, 0.06), woodM, 0, 0.45, 0);
    for (const [px, pz] of [[-1.2, -0.6], [1.2, -0.6], [-1.2, 0.6], [1.2, 0.6]]) add(g, new THREE.CylinderGeometry(0.05, 0.05, 2.5, 6), darkM, px, 1.25, pz);
    for (let k = 0; k < 6; k++) add(g, new THREE.BoxGeometry(0.5, 0.08, 2.0), mat(k % 2 ? c : 0xf4efe6, { roughness: 0.8 }), -1.25 + k * 0.5, 2.55 - Math.abs(k - 2.5) * 0.06, 0).rotation.x = 0.12;
    for (let k = 0; k < 5; k++) add(g, new THREE.SphereGeometry(0.13, 8, 6), mat([0xe2533a, 0xe2a53a, 0x7ab84a][k % 3]), -0.9 + k * 0.45, 0.98, (R() - 0.5) * 0.7);
    colliders.push({ type: 'box', x0: x - 1.4, x1: x + 1.4, z0: z - 0.9, z1: z + 0.9, top: 0.9, bottom: 0 });
  }
  // the composer's statue (bronze, on a tall plinth)
  {
    const g = new THREE.Group(); g.position.set(-9, 0, 12); world.add(g); g.userData.noHide = true;
    const bz = mat(0x5a8a78, { roughness: 0.5, metalness: 0.5 });
    add(g, rbox(3.4, 0.5, 3.4, 0.08), stoneM, 0, 0.25, 0);
    add(g, rbox(2.2, 2.6, 2.2, 0.1), stoneM, 0, 1.8, 0);
    add(g, new THREE.CylinderGeometry(0.42, 0.62, 2.0, 10), bz, 0, 4.1, 0);
    add(g, new THREE.SphereGeometry(0.36, 12, 10), bz, 0, 5.4, 0);
    add(g, new THREE.SphereGeometry(0.44, 10, 8), bz, 0, 5.5, -0.08).scale.set(1, 0.9, 1);   // the wig
    add(g, rbox(0.9, 0.08, 0.7, 0.03), bz, 0.55, 4.4, 0.4).rotation.z = -0.3;                 // his music stand
    colliders.push({ type: 'box', x0: -10.7, x1: -7.3, z0: 10.3, z1: 13.7, top: 0.5, bottom: 0 });
    colliders.push({ type: 'box', x0: -10.1, x1: -7.9, z0: 10.9, z1: 13.1, top: 3.1, bottom: 0 });
    colliders.push({ type: 'cyl', x: -9, z: 12, r: 0.6, top: 5.9, bottom: 3.1, noGrab: true });
    stars.push(makeStar(world, 'c4-statue', -7.9, 4.6, 13.1, 1));   // on the plinth, by the music stand
  }
  // the market bell on its wooden frame
  for (const dx of [-1.9, 1.9]) { add(world, rbox(0.3, 6, 0.3, 0.05), woodM, 2 + dx, 3, 16); colliders.push({ type: 'cyl', x: 2 + dx, z: 16, r: 0.22, top: 6, bottom: 0, noGrab: true, noStep: true }); }
  add(world, rbox(4.4, 0.3, 0.3, 0.05), woodM, 2, 6.0, 16);
  // lamp posts, benches, flower tubs
  for (const [x, z] of [[-3, 6], [8, 24], [-16, 32], [-30, 10], [24, 12], [-44, 20], [26, 30], [-52, 34], [-40, 2]]) {
    add(world, new THREE.CylinderGeometry(0.07, 0.1, 4.2, 8), ironM, x, 2.1, z);
    add(world, new THREE.SphereGeometry(0.24, 10, 8), new THREE.MeshStandardMaterial({ color: 0xfff4d8, emissive: 0xffd9a0, emissiveIntensity: 0.9 }), x, 4.3, z, { cast: false });
    colliders.push({ type: 'cyl', x, z, r: 0.14, top: 4.2, bottom: 0, noGrab: true, noStep: true });
  }
  for (const [x, z, r] of [[14, 20, 0.3], [-2, 30, -0.2], [-34, 14, 1.2], [20, 4, 0.8]]) {
    const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = r; world.add(g);
    add(g, rbox(2.0, 0.12, 0.6, 0.04), woodM, 0, 0.5, 0); add(g, rbox(2.0, 0.5, 0.1, 0.04), woodM, 0, 0.85, -0.28);
    for (const dx of [-0.8, 0.8]) add(g, rbox(0.1, 0.5, 0.5, 0.03), ironM, dx, 0.25, 0);
    colliders.push({ type: 'cyl', x, z, r: 0.7, top: 0.56, bottom: 0 });
  }
  for (const [x, z] of [[6, 8], [-22, 8], [28, 20], [-46, 30], [-58, 12], [30, -2]]) {
    add(world, new THREE.CylinderGeometry(0.7, 0.55, 0.7, 10), stoneM, x, 0.35, z);
    for (let k = 0; k < 7; k++) add(world, new THREE.SphereGeometry(0.2, 7, 6), mat([0xff8fb8, 0xffe27a, 0xc6b3ff, 0xffffff][k % 4]), x + Math.cos(k) * 0.4, 0.8 + (k % 2) * 0.1, z + Math.sin(k) * 0.4, { cast: false });
    colliders.push({ type: 'cyl', x, z, r: 0.75, top: 0.7, bottom: 0 });
  }

  // ================================================================ 2. THE RED TOWER
  block(10, 22, -15, Z0, 46, 0, brickM, { noGrab: true }, 4);
  {
    const tg = new THREE.Group(); tg.position.set(16, 46, -11.6); world.add(tg); tg.userData.noHide = true;
    add(tg, new THREE.ConeGeometry(4.6, 20, 8), copperM, 0, 11, 0);
    add(tg, new THREE.CylinderGeometry(5.6, 5.9, 1.2, 8), stoneM, 0, 0.6, 0);
    for (const [dx, dz] of [[-5, -2.6], [5, -2.6], [-5, 2.6], [5, 2.6]]) { add(tg, new THREE.CylinderGeometry(0.9, 0.9, 4, 8), brickM, dx, 1, dz); add(tg, new THREE.ConeGeometry(1.1, 5, 8), copperM, dx, 5.5, dz); }
    add(tg, new THREE.SphereGeometry(0.5, 10, 8), mat(0xe2b04a, { metalness: 0.7, roughness: 0.3 }), 0, 21.4, 0);
    // clock faces and dark window slits on the south face
    const face = new THREE.MeshBasicMaterial({ map: canvasTex(256, 256, (g) => { g.fillStyle = '#f4ecd8'; g.beginPath(); g.arc(128, 128, 120, 0, 7); g.fill(); g.strokeStyle = '#3a2f2a'; g.lineWidth = 8; g.stroke(); g.fillStyle = '#3a2f2a'; for (let k = 0; k < 12; k++) { const a = k * Math.PI / 6; g.fillRect(128 + Math.sin(a) * 100 - 4, 128 - Math.cos(a) * 100 - 4, 8, 8); } g.lineWidth = 9; g.beginPath(); g.moveTo(128, 128); g.lineTo(128, 50); g.moveTo(128, 128); g.lineTo(178, 150); g.stroke(); }) , transparent: true });
    add(world, new THREE.PlaneGeometry(3.4, 3.4), face, 16, 42.2, Z0 + 0.04, { cast: false });
  }
  for (const [x, y] of [[12.2, 4], [19.8, 4], [12.2, 14], [19.8, 23], [12, 32]]) add(world, rbox(0.9, 2.2, 0.1, 0.04), glassM, x, y, Z0 + 0.05, { cast: false });
  // galleries on the south face (side view)
  // (every gallery spans the tower; over each spring below there is a hatch of salt glass: whoever is shot up
  //  from underneath flies through it, and it is solid again the moment they are above it)
  const hatches = [];
  const hatchM = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffd9ec, emissiveIntensity: 0.4, roughness: 0.15, transparent: true, opacity: 0.55, depthWrite: false });
  const hatch = (x, y) => {
    const mesh = add(world, rbox(2.5, 0.3, Z1 - Z0 - 0.3, 0.06), hatchM.clone(), x, y - 0.15, LZ, { cast: false });
    mesh.userData.noHide = true;
    for (const dx of [-1.3, 1.3]) add(world, rbox(0.12, 0.5, Z1 - Z0, 0.03), darkM, x + dx, y - 0.25, LZ).userData.noHide = true;
    const col = { type: 'box', x0: x - 1.25, x1: x + 1.25, z0: Z0, z1: Z1, top: y, bottom: y - 0.3, noGrab: true };
    colliders.push(col);
    hatches.push({ x, y, col, mesh, open: 0 });
  };
  /** a gallery from x0 to x1 with a hatch over the spring at hx */
  const gallery = (x0, x1, y, hx, m = woodM) => {
    deck(x0, hx - 1.25, y, m); deck(hx + 1.25, x1, y, m); hatch(hx, y);
    rail(x0 - 0.1, y); rail(x1 + 0.1, y);
  };
  gallery(10, 22, G1, 11.6);
  gallery(10, 22, G2, 20.5);
  gallery(10, 22, G3, 11.5);
  gallery(10, 22, BF, 20.5, stoneM);
  for (const [x, y0, y1] of [[10.2, 0, BF], [21.8, 0, BF], [16, 0, G1]]) add(world, rbox(0.22, y1 - y0 - 0.5, 0.22, 0.04), darkM, x, (y0 + y1 - 0.5) / 2, Z1 - 0.15).userData.noHide = true;
  // the belfry roof (open to the west, where the tilted spring throws)
  add(world, rbox(7.4, 0.5, 4.6, 0.1), copperM, 16.4, BF + 7.2, LZ).userData.noHide = true;
  for (const x of [12.9, 19.9]) add(world, rbox(0.3, 7, 0.3, 0.05), stoneM, x, BF + 3.5, Z1 - 0.2).userData.noHide = true;
  add(world, rbox(1.2, 0.3, 0.3, 0.05), darkM, 15.5, BF + 5.6, LZ);   // the beam the big bell hangs from

  // ================================================================ 3. + 4. THE MARKET CHURCH
  const CZ0 = -14;
  block(-22.5, -17.5, CZ0, Z1, CH, 0, stoneM, { noGrab: true }, 4);          // east tower A
  block(-30.5, -25.5, CZ0, Z1, CH, 0, stoneM, { noGrab: true }, 4);          // east tower B
  deck(-25.5, -22.5, CH, stoneM, 0.7);                                       // the bridge between them
  block(-42, -30.5, CZ0, Z1, CH, 0, stoneM, { noGrab: true }, 4);            // the nave
  block(-61, -42, CZ0, Z1, UP, 0, stoneM, { noGrab: true }, 4);              // the west front between the blue towers
  rail(-60.9, UP);
  deck(-42, -41.65, UP, stoneM); hatch(-40.4, UP); deck(-39.15, -38.6, UP, stoneM);   // the balcony over the spring of the tall step
  for (const x of [-38.8, -41.9]) add(world, rbox(0.2, UP - CH, 0.2, 0.04), darkM, x, (UP + CH) / 2 - 0.3, Z0 + 0.2).userData.noHide = true;
  // spires (behind the side-view line)
  const spire = (x, y, h, m, r = 2.6) => {
    const g = new THREE.Group(); g.position.set(x, y, -11); world.add(g); g.userData.noHide = true;
    add(g, new THREE.CylinderGeometry(r, r, 5, 8), stoneM, 0, 2.5, 0);
    add(g, new THREE.ConeGeometry(r + 0.3, h, 8), m, 0, 5 + h / 2, 0);
    add(g, new THREE.SphereGeometry(0.35, 8, 6), mat(0xe2b04a, { metalness: 0.7, roughness: 0.3 }), 0, 5 + h + 0.3, 0);
  };
  spire(-20, CH, 15, copperM, 2.4); spire(-28, CH, 15, copperM, 2.4);
  spire(-45.5, UP, 26, slateM, 3.1); spire(-56.5, UP, 26, slateM, 3.1);
  // the nave's steep roof behind the walkway, buttresses and a rose window on the south wall
  {
    const roof = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 3.6, 9, 4, 1).rotateY(Math.PI / 4), slateM);
    roof.scale.set(1, 1, 1.9); roof.rotation.y = Math.PI / 2; roof.position.set(-36.3, CH + 4.5, -11.2); roof.castShadow = true; roof.userData.noHide = true; world.add(roof);
    for (let x = -58; x <= -19; x += 6.5) {
      if (Math.abs(x + 51) < 2.5) continue;
      const top = x < -42 ? UP : CH;
      add(world, rbox(1.0, top - 3, 0.9, 0.08), stoneM, x, (top - 3) / 2, Z1 + 0.45).userData.noHide = true;
      add(world, new THREE.ConeGeometry(0.6, 2.2, 4).rotateY(Math.PI / 4), stoneM, x, top - 3 + 1.1, Z1 + 0.45).userData.noHide = true;
    }
    const rose = canvasTex(256, 256, (g) => {
      g.fillStyle = '#2a2f4a'; g.beginPath(); g.arc(128, 128, 124, 0, 7); g.fill();
      for (let k = 0; k < 12; k++) { g.fillStyle = ['#ffc878', '#c6b3ff', '#ff9ec4', '#8fd8ff'][k % 4]; g.beginPath(); g.ellipse(128 + Math.cos(k * Math.PI / 6) * 70, 128 + Math.sin(k * Math.PI / 6) * 70, 30, 16, k * Math.PI / 6, 0, 7); g.fill(); }
      g.fillStyle = '#ffe9b8'; g.beginPath(); g.arc(128, 128, 30, 0, 7); g.fill();
    });
    add(world, new THREE.CircleGeometry(3.2, 32), new THREE.MeshBasicMaterial({ map: rose }), -51, 30, Z1 + 0.06, { cast: false });
  }
  // gothic windows on the south wall
  for (const x of [-39.7, -36.3, -32.8]) for (const y of [8, 20]) add(world, rbox(1.3, 6.5, 0.1, 0.6), glassM, x, y, Z1 + 0.05, { cast: false });
  for (const x of [-47.6, -54.4]) add(world, rbox(1.6, 9, 0.1, 0.7), glassM, x, 13, Z1 + 0.05, { cast: false });
  for (const x of [-20, -28]) for (const y of [10, 22]) add(world, rbox(0.9, 3, 0.1, 0.4), glassM, x, y, Z1 + 0.05, { cast: false });
  add(world, rbox(3, 5, 0.2, 1.2), darkM, -51, 2.5, Z1 + 0.08, { cast: false });   // the west door
  // the arch the third bell hangs from, and the frames of bells four and five
  const frame = (x, y, w = 3.2, h = 4.6) => {
    for (const dx of [-w / 2, w / 2]) add(world, rbox(0.26, h, 0.26, 0.05), darkM, x + dx, y + h / 2, Z0 + 0.3).userData.noHide = true;
    add(world, rbox(w + 0.4, 0.28, 0.28, 0.05), darkM, x, y + h, Z0 + 0.3).userData.noHide = true;
    add(world, rbox(0.2, 0.2, 2.0, 0.04), darkM, x, y + h, Z0 + 1.2).userData.noHide = true;
  };
  frame(-24, CH); frame(-44.5, UP); frame(-57, UP);

  // ================================================================ salt and song
  const BELL_Y = (y) => y + 4.55;   // a bell's lip hangs just above the tip of a grown crystal
  let api = null;
  const seen = {};
  const once = (k, ctx, text, ms = 4200) => { if (seen[k]) return; seen[k] = true; (ctx || api)?.caption(text, ms); };
  const salt = createSalt(world, colliders, {
    key: 'ch4m',
    springs: [
      { id: 's0', x: 2, y: 0, z: 16 },                                   // under the market bell
      { id: 's1', x: 11.6, y: 0, z: LZ, need: 'b1' },                    // at the foot of the tower
      { id: 's2', x: 20.5, y: G1, z: LZ },
      { id: 's3', x: 11.5, y: G2, z: LZ },
      { id: 's4', x: 20.5, y: G3, z: LZ },
      { id: 's5', x: 15.5, y: BF, z: LZ },                               // under the big bell
      { id: 'c1', x: 11.1, y: BF, z: LZ, v: [-24.5, 18, 0], lock: 1.5, need: 'b2' },// the throw to the church
      { id: 's6', x: -24, y: CH, z: LZ },                                // under bell three
      { id: 's7', x: -40.4, y: CH, z: LZ },                              // the step up
      { id: 's8', x: -44.5, y: UP, z: LZ },
      { id: 's9', x: -57, y: UP, z: LZ },
    ],
    walls: [
      { id: 'w0', x0: 16.6, x1: 17.4, z0: Z0, z1: Z1, y: G1, h: 8.4 },
      { id: 'w1', x0: 17, x1: 17.8, z0: Z0, z1: Z1, y: G3, h: 8.4 },
      { id: 'w2', x0: -34.2, x1: -33.4, z0: Z0, z1: Z1, y: CH, h: 7 },
    ],
    bells: [
      { id: 'b1', x: 2, y: BELL_Y(0), z: 16, spring: 's0' },
      { id: 'b2', x: 15.5, y: BELL_Y(BF), z: LZ, spring: 's5', s: 1.25 },
      { id: 'b3', x: -24, y: BELL_Y(CH), z: LZ, spring: 's6' },
      { id: 'b4', x: -44.5, y: BELL_Y(UP), z: LZ, spring: 's8', pair: 'b5' },
      { id: 'b5', x: -57, y: BELL_Y(UP), z: LZ, spring: 's9', pair: 'b4' },
    ],
    quiet: [
      { x0: 11, x1: 17, y: G2, z: LZ, r: 2.3, period: 7 },
      { x0: 18.6, x1: 21.6, y: G3, z: LZ, r: 2.2, period: 5, off: 1 },
      { x0: -37, x1: -29.5, y: CH, z: LZ, r: 2.5, period: 8, off: 2 },
      { x0: -41.2, x1: -36, y: CH, z: LZ, r: 2.2, period: 5.5, off: 4 },
      { x0: -55, x1: -46.5, y: UP, z: LZ, r: 2.6, period: 6.5, off: 0.5 },
    ],
    onRing(id) {
      const n = [0, 1, 2, 3, 4].filter((i) => salt.bellMask() & (1 << i)).length;
      const text = {
        b1: 'DONG! 🔔 The market bell! And listen… a spring is bubbling at the foot of the Red Tower.',
        b2: 'The Red Tower rings over the rooftops! 🔔 A tilted spring wakes at the west edge: it throws… far.',
        b3: 'Three bells! 🔔 The church is waking up. On, over the roof.',
      }[id];
      if (text) api?.caption(text, 4600);
      else if (n === 5 && id === 'b5') api?.caption('Four… FIVE! 🔔🔔 All five towers are ringing!', 4200);
    },
  });
  stars.push(makeStar(world, 'c4-wall', 21.4, G1 + 1.4, LZ, 2));        // past the first salt wall, behind the spring
  stars.push(makeStar(world, 'c4-fly', -3, BF + 9.2, LZ, 3));           // at the top of the big throw
  stars.push(makeStar(world, 'c4-ridge', -59.6, UP + 3.2, LZ, 4));      // at the far end of the roof (double jump)

  // signs
  sign(world, 4.6, 19.4, -0.5, ['☀ SALT ✦ at a white ring:', 'a crystal grows.', '☾ SING ✦: it shatters…', 'and rings what is above']);
  sign(world, 8.4, -1.6, 0.5, ['Stand on the crystal', 'TOGETHER. She sings,', 'you both fly ⬆']);
  hangSign(world, 15.2, G1 + 3.4, Z0 + 0.5, ['Salt crust: only', 'her song breaks it']);
  hangSign(world, 14.6, G2 + 3.4, Z0 + 0.5, ['The Quiet swallows', 'songs. Wait it out']);

  // ================================================================ hidden minigame: the courtyard behind the archway
  for (const [x0, x1, z0, z1] of [[-42, -41, 24, 42], [-25, -24, 24, 42], [-41, -35.6, 24, 25], [-30.4, -25, 24, 25]]) block(x0, x1, z0, z1, 4.2, 0, stoneM, { noGrab: true }, 3);
  add(world, rbox(5.6, 1.0, 1.0, 0.1), stoneM, -33, 4.4, 24.5).userData.noHide = true;
  for (const x of [-35.9, -30.1]) add(world, new THREE.SphereGeometry(0.3, 10, 8), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffd9ec, emissiveIntensity: 1.2 }), x, 4.5, 23.9, { cast: false });
  const mgTiles = createMinigame(world, colliders, {
    id: 'c4salt', title: 'Salt & Song', rules: ['Run over the tiles to salt them (☀)', 'or sing them (☾). Most tiles in 30 s!'],
    at: { x: -33, y: 0, z: 26.6 }, face: 0, pads: { sun: [-36.4, 27.0], moon: [-29.6, 27.0] }, dur: 30000,
    game: tilesGame({ cx: -33, cz: 34.6, y: 0, n: 5, size: 2.2 }),
  });

  // ================================================================ checkpoints, mist
  const cps = [
    checkpoint(world, { x: 0, y: 0, z: 33, r: 2.4, sun: [-1, 0, 31], moon: [1, 0, 31] }),
    checkpoint(world, { x: 14.3, y: G1, z: Z0 + 0.35, r: 2.2, sun: [14.4, G1, LZ], moon: [15.6, G1, LZ], label: 'The Red Tower' }),
    checkpoint(world, { x: 17.9, y: BF, z: Z0 + 0.35, r: 2.6, sun: [17.4, BF, LZ], moon: [18.4, BF, LZ], label: 'The belfry 🔔' }),
    checkpoint(world, { x: -20, y: CH, z: Z0 + 0.35, r: 2.6, sun: [-19.4, CH, LZ], moon: [-20.6, CH, LZ], label: 'The church bridge' }),
    checkpoint(world, { x: -43.2, y: UP, z: Z0 + 0.35, r: 1.6, sun: [-42.8, UP, LZ], moon: [-43.8, UP, LZ], label: 'Between the blue towers' }),
  ];
  {
    const P = [];
    for (let x = -74; x <= 44; x += 7) { P.push([x, 1 + R() * 3, 50 + R() * 3]); P.push([x, 2 + R() * 4, -42 - R() * 3]); }
    for (let z = -36; z <= 44; z += 7) { P.push([47 + R() * 2, 1 + R() * 3, z]); P.push([-77 - R() * 2, 1 + R() * 3, z]); }
    memoryMist(world, P, { size: 11, color: 0xd8d0e8, opacity: 0.4 });
  }

  // ================================================================ state
  const upThere = { sun: false, moon: false };
  const prevY = { sun: 0, moon: 0 }, vyEst = { sun: 0, moon: 0 };
  let doneT = -1;
  const line = lane([24, LZ], [-64, LZ], { half: 2.3, y0: 7.4, y1: 90, dist: 17, pitch: 0.1 });

  return {
    id: 'ch4-markt',
    title: 'Chapter 4 · Halle — Marktplatz',
    colliders,
    stars,
    movers: {},
    spawn: { sun: new THREE.Vector3(-1, 0, 31), moon: new THREE.Vector3(1, 0, 31) },
    camYaw: { sun: 0, moon: 0 },
    lobbyCam: { cx: -10, cz: 6, r: 70, h: 34 },
    killY: -8,
    // once you've been up on the galleries, the square is a long way down: back to your partner / the lantern
    killAt(p) {
      if (!api) return false;
      const r = p === api.bodies.sun.pos ? 'sun' : 'moon';
      if (p.y > 8.6 && p.z < Z1 + 0.4 && p.z > Z0 - 0.4) upThere[r] = true;
      if (!upThere[r]) return false;
      const dead = p.x > 9.5 ? p.y < 6.5 : p.y < 29;
      if (dead && p.x > 9.5 && (api.save?.cp?.l !== 'ch4-markt' || !(api.save.cp.i >= 1))) upThere[r] = false;   // (fell before the first lantern: just climb again)
      return dead && upThere[r];
    },
    lanes: [line],
    checkpoints: cps,
    hints: [
      'Sun: stand by the white ring under the market bell and tap Salt. Moon: stand close and Sing. The shards ring the bell. Then go to the white ring at the foot of the Red Tower: both stand ON the crystal, Moon sings.',
      'Every floor works the same: Sun grows a crystal at the white ring, both stand on it, Moon sings and you fly up. A salt wall in the way breaks when Moon sings next to it. If a grey bubble is over you, wait until it drifts off.',
      'Ring the big bell first (crystal under it, then sing). That wakes the tilted ring at the west edge: stand on that crystal together and sing. Hold the stick towards the church while you fly.',
      'Sing next to the salt wall when the grey bubble is away. At the tall step, grow the crystal, both stand on it, and sing between two passes of the bubble.',
      'Sun grows the crystal under one bell, runs to the other and grows that one too (they last 14 s). Moon stands in the MIDDLE between the two bells and sings when the grey bubble is away: both ring at once.',
    ],
    respawnNearPartner: (pp) => !!pp,
    portal: new THREE.Vector3(-50.7, UP, LZ),
    intro: {
      all: ['Chapter 4 · Halle', 'Part 1 · Marktplatz', 'His city: five towers over one square. But without her it went grey and silent. The Quiet took all five bells.'],
      sun: 'Salt ✦ grow a crystal at a white ring (Halle was built on salt)',
      moon: 'Sing ✦ her song shatters crystals, breaks salt walls and rings bells',
    },
    abilities: withMinigames(salt.abilities, [mgTiles]),
    salt,
    attach(a) { api = a; salt.attach(a); mgTiles.attach(a); },
    onCheckpoint() {},
    debug: () => ({ bells: salt.bellMask(), walls: api?.save?.ch4m?.w || 0, up: { ...upThere } }),
    story(ctx, t) {
      const a = ctx.pos.sun, b = ctx.pos.moon, P = [a, b].filter(Boolean);
      const m = salt.bellMask();
      if (P.some((p) => p.z < 22 && p.y < 2)) once('bell', ctx, 'The market bell hangs silent. There\'s a white ring of brine under it… ☀ Salt, then ☾ Sing.', 5200);
      if (m & 1 && P.some((p) => p.x > 6 && p.z < 0 && p.y < 2)) once('tower', ctx, 'The Red Tower: 9 m to the first gallery. Stand on the crystal together. Sing!', 4800);
      if (P.some((p) => p.y > G1 - 0.5 && p.y < G2 && p.x > 9.5)) once('g1', ctx, 'A crust of salt blocks the gallery. Her song breaks it.', 3800);
      if (P.some((p) => p.y > G2 - 0.5 && p.y < G3 && p.x > 9.5)) once('g2', ctx, 'The Quiet. 🌫️ Inside a grey bubble no song can be heard. Time it.', 4400);
      if (P.some((p) => p.y > BF - 0.5 && p.x > 9.5)) once('bf', ctx, 'The belfry. The big bell first!', 3200);
      if (m & 2 && P.some((p) => p.y > BF - 0.5 && p.x > 9.5)) once('throw', ctx, 'The tilted spring at the west edge: on it together… and hold on!', 4200);
      if (P.some((p) => p.x < -17 && p.y > CH - 0.5)) once('church', ctx, 'The bridge between the church towers! Bell three hangs right here.', 4000);
      if (P.some((p) => p.x < -42 && p.y > UP - 0.5)) once('blue', ctx, 'The blue towers: two bells. They only stay awake if they ring together (within 8 s).', 5200);
      if (m === 31 && doneT < 0) {
        doneT = t;
        const lines = [
          ['Five towers, five bells. 🔔 Halle is awake!', 3800],
          ['The trams hum, the market chatters, the square is full of colour again.', 4200],
          ['"So this is where you live," she says. "It\'s loud." "Only since you got here."', 4800],
          ['Part 1 complete ✨ Next: the view from his balcony.', 3600],
        ];
        let at = 2600;
        for (const [l, ms] of lines) { setTimeout(() => ctx.caption(l, ms), at); at += ms + 150; }
        setTimeout(() => ctx.finish(), at + 200);
      }
    },
    update(serverMs, t, dt) {
      spinStars(stars, t);
      // hatches: open for anyone shooting up from below
      if (api) {
        for (const r of ['sun', 'moon']) {
          const p = api.bodies[r].pos, q = prevY[r];
          vyEst[r] = dt > 0 ? (p.y - q) / dt : 0; prevY[r] = p.y;
        }
        for (const h of hatches) {
          const open = ['sun', 'moon'].some((r) => { const p = api.bodies[r].pos; return Math.abs(p.x - h.x) < 1.45 && Math.abs(p.z - LZ) < 2.6 && p.y < h.y - 0.02 && p.y > h.y - 8.5 && vyEst[r] > 7; });
          h.col.disabled = open;
          h.open += ((open ? 1 : 0) - h.open) * Math.min(1, dt * 14);
          h.mesh.material.opacity = 0.55 * (1 - h.open);
        }
      }
      for (const f of anims) f(t, dt);
      mgTiles.update(dt, serverMs, t);
      if (!api) return;
      const cpi = api.save?.cp?.l === 'ch4-markt' ? api.save.cp.i : 0;
      cps.forEach((c, i) => c.setOn(i <= cpi, t));
    },
  };
}
