// Chapter 4 · Halle · Part 2 "Neustadt" — the climb to his balcony and the view over Halle-Neustadt.
//  1. The courtyard between the blocks (ground map): playground, laundry, the door chime that wakes the first spring.
//  2. Between two blocks (side view): balconies left and right, each 6 m higher than the last and 10 m across.
//     Tilted springs throw both of them over, back and forth; chimes wake dry springs; the Quiet drifts on the
//     balconies.
//  3. The roof: the window-cleaners' gondola on the tall block only docks for a few seconds. The spring that
//     throws you onto it is only awake while it is there.
//  4. His balcony: the plan board (a hint for the finale, guarded by Dr. Bata) and the wind chime. Sunset.
//  🎮 Hidden minigame "Sock Rain": under the laundry lines in the south-west corner of the courtyard.
import * as THREE from 'three';
import { mat, add, rbox, sign, hangSign, sky, makeStar, spinStars, lights } from './common.js';
import { checkpoint, lane, platform } from './play.js';
import { memoryMist } from '../memory.js';
import { createSalt } from './salt.js';
import { createMinigame, starsGame, withMinigames } from './minigame.js';
import { makeBata } from '../bata.js';

const LZ = -6, Z0 = LZ - 2.2, Z1 = LZ + 2.2;
const FL = 6;                       // one balcony step
const ROOF = 36, DOCK = 39, HOME = 54;
const LX = -12, RX = 12;            // the two facades

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
  const pos = geo.attributes.position, nor = geo.attributes.normal, uv = geo.attributes.uv;
  for (let i = 0; i < pos.count; i++) {
    const nx = Math.abs(nor.getX(i)), ny = Math.abs(nor.getY(i));
    if (ny > 0.5) uv.setXY(i, pos.getX(i) / s, pos.getZ(i) / s);
    else if (nx > 0.5) uv.setXY(i, pos.getZ(i) / s, pos.getY(i) / s);
    else uv.setXY(i, pos.getX(i) / s, pos.getY(i) / s);
  }
  return geo;
}

export function buildCh4Neustadt(root, scene) {
  const colliders = [], stars = [];
  const world = new THREE.Group();
  root.add(world);
  let seed = 11;
  const R = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);

  scene.fog = new THREE.Fog(new THREE.Color('#e8c0b0'), 90, 320);
  sky(root, {
    top: '#4a5aa0', mid: '#d8a8c8', low: '#ffc89a', neb1: '#ffb0c8', neb2: '#ffd8a0', stars: 0.3, nebula: 0.5, cloud: 0xffe6da, far: false, cx: 15, cz: 0, seaY: -16,
    lightDir: [-0.7, 0.3, 0.5],
    planets: [['ember', 0.9, 0.3, 280, 0.2, 1.5], ['lilac', 2.6, 0.34, 260, 0.3, 1.4]],
  });
  lights(root, { sunColor: 0xffd8b0, sunI: 2.3, hemiSky: 0xe4dcff, hemiGround: 0xffd0b0, hemiI: 1.5, pos: [-40, 70, 50], target: [15, 20, -4], extent: 90 });

  // ================================================================ materials
  /** a prefab-panel facade: one window bay per 3 × 3 m */
  const panelT = (base, frame, lit) => canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = base; g.fillRect(0, 0, w, h);
    g.strokeStyle = 'rgba(0,0,0,0.16)'; g.lineWidth = 3; g.strokeRect(1.5, 1.5, w - 3, h - 3);
    g.fillStyle = frame; g.fillRect(50, 60, 156, 120);
    g.fillStyle = lit; g.fillRect(58, 68, 66, 104); g.fillRect(132, 68, 66, 104);
    g.fillStyle = 'rgba(255,255,255,0.25)'; g.fillRect(58, 68, 66, 20); g.fillRect(132, 68, 66, 20);
    g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(40, 196, 176, 14);
  }, [1, 1]);
  const facM = [['#d9cfc4', '#f4efe6', '#5a6a8a'], ['#cfd6d0', '#eef2ee', '#ffcf8a'], ['#d8c8c0', '#f2e8e0', '#6a7a9a']].map(([b, f, l]) => new THREE.MeshStandardMaterial({ map: panelT(b, f, l), roughness: 0.9 }));
  const concM = mat(0xbdb6ae, { roughness: 0.95 }), darkM = mat(0x4a4650, { roughness: 0.7 }), ironM = mat(0x5a6078, { roughness: 0.5, metalness: 0.5 });
  const slabM = mat(0xe6dfd6, { roughness: 0.85 }), grassM = mat(0x8fbf78, { roughness: 1 }), pathM = mat(0xc9c2ba, { roughness: 0.95 });
  const COLORS = [0xe2733a, 0x3a9ac8, 0xe2b03a, 0x6ab86a, 0xc85a9a];

  const block = (x0, x1, z0, z1, top, bottom, m, col = {}, uv = 3) => {
    const mesh = m ? add(world, worldUV(new THREE.BoxGeometry(x1 - x0, top - bottom, z1 - z0), uv), m, (x0 + x1) / 2, (top + bottom) / 2, (z0 + z1) / 2) : null;
    if (mesh) mesh.userData.noHide = true;
    if (m && top > 5) add(world, new THREE.BoxGeometry(x1 - x0 + 0.5, 0.3, z1 - z0 + 0.5), concM, (x0 + x1) / 2, top - 0.13, (z0 + z1) / 2).userData.noHide = true;   // a plain roof
    const c = { type: 'box', x0, x1, z0, z1, top, bottom, noGrab: true, ...col };
    colliders.push(c);
    return c;
  };
  /** a balcony slab on the side-view line with a coloured parapet at the back */
  const ledge = (x0, x1, y, ci = 0, th = 0.4) => {
    add(world, rbox(x1 - x0, th, Z1 - Z0, 0.06), slabM, (x0 + x1) / 2, y - th / 2, LZ).userData.noHide = true;
    add(world, rbox(x1 - x0, 1.0, 0.12, 0.04), mat(COLORS[ci % COLORS.length], { roughness: 0.7 }), (x0 + x1) / 2, y + 0.5, Z0 + 0.08).userData.noHide = true;
    colliders.push({ type: 'box', x0, x1, z0: Z0, z1: Z1, top: y, bottom: y - th, noGrab: true, surface: 'concrete' });
  };
  const hatches = [];
  const hatchM = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffd9ec, emissiveIntensity: 0.4, roughness: 0.15, transparent: true, opacity: 0.55, depthWrite: false });
  const hatch = (x, y) => {
    const mesh = add(world, rbox(2.5, 0.3, Z1 - Z0 - 0.3, 0.06), hatchM.clone(), x, y - 0.15, LZ, { cast: false });
    mesh.userData.noHide = true;
    const col = { type: 'box', x0: x - 1.25, x1: x + 1.25, z0: Z0, z1: Z1, top: y, bottom: y - 0.3, noGrab: true };
    colliders.push(col);
    hatches.push({ x, y, col, mesh, open: 0 });
  };

  // ================================================================ 1. THE COURTYARD
  add(world, new THREE.BoxGeometry(150, 2, 100), grassM, 15, -1, 4, { cast: false }).userData.noHide = true;
  colliders.push({ type: 'box', x0: -60, x1: 90, z0: -46, z1: 54, top: 0, bottom: -2, safe: true, surface: 'grass' });
  for (const [x, z, w, d] of [[0, 22, 60, 3], [0, 2, 3, 40], [-22, 10, 3, 26], [24, 12, 3, 22], [15, 34, 90, 3.4]]) add(world, new THREE.BoxGeometry(w, 0.06, d), pathM, x, 0.03, z, { cast: false });
  // the two blocks of the climb, the tall block with his balcony, and the blocks that close the yard
  block(-34, LX, -20, Z1, 34, 0, facM[0]);
  block(RX, 26, -20, Z1, ROOF, 0, facM[1], { noGrab: true });
  block(54, 78, -22, Z1, 64, 0, facM[2]);                      // the tall block
  block(47, 54, -22, Z1, HOME, 0, facM[2]);                    // …and the part under his balcony
  add(world, worldUV(new THREE.BoxGeometry(7, 64 - HOME - 4.2, Z1 + 22), 3), facM[2], 50.5, (64 + HOME + 4.2) / 2, (Z1 - 22) / 2).userData.noHide = true;   // the floors above it
  block(-60, -54, -40, 50, 22, 0, facM[1]);
  block(84, 90, -40, 50, 28, 0, facM[0]);
  block(-54, 84, 48, 54, 19, 0, facM[2]);
  block(-54, -34, -44, -38, 25, 0, facM[2]); block(-12, 12, -44, -38, 31, 0, facM[0]); block(26, 54, -44, -38, 25, 0, facM[1]);
  // the far skyline of Neustadt
  {
    const N = 26, im = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), mat(0xcfc4c8, { roughness: 1 }), N), o = new THREE.Object3D();
    for (let i = 0; i < N; i++) { const w = 14 + R() * 26, h = 16 + R() * 42; o.position.set(-150 + i * 13 + R() * 6, h / 2 - 4, -80 - R() * 90); o.scale.set(w, h, 10); o.updateMatrix(); im.setMatrixAt(i, o.matrix); }
    im.userData.noHide = true; world.add(im);
  }
  // playground: climbing frame, slide, sandpit, swings
  {
    const g = new THREE.Group(); g.position.set(8, 0, 14); world.add(g);
    for (const [x, z] of [[-1.5, -1.5], [1.5, -1.5], [-1.5, 1.5], [1.5, 1.5]]) add(g, new THREE.CylinderGeometry(0.07, 0.07, 3.2, 6), mat(0xe2533a), x, 1.6, z);
    add(g, rbox(3.3, 0.14, 3.3, 0.05), mat(0xe2b03a), 0, 3.2, 0);
    add(g, rbox(1.0, 0.1, 4.2, 0.04), mat(0x3a9ac8), 2.2, 1.6, 2.6).rotation.x = 0.82;
    colliders.push({ type: 'box', x0: 6.35, x1: 9.65, z0: 12.35, z1: 15.65, top: 3.27, bottom: 3.1 });
    stars.push(makeStar(world, 'c4n-yard', 8, 4.5, 14, 0));
    add(world, new THREE.CylinderGeometry(3, 3, 0.2, 20), mat(0xf0d9a0, { roughness: 1 }), 16, 0.1, 22, { cast: false });
    for (const dx of [-1.6, 1.6]) { add(world, new THREE.CylinderGeometry(0.06, 0.06, 2.6, 6), ironM, 1 + dx, 1.3, 28); }
    add(world, new THREE.CylinderGeometry(0.05, 0.05, 3.4, 6).rotateZ(Math.PI / 2), ironM, 1, 2.6, 28);
    for (const dx of [-0.7, 0.7]) add(world, rbox(0.5, 0.06, 0.3, 0.02), mat(0xe2533a), 1 + dx, 0.6, 28);
  }
  // benches, bins, bikes, trees
  for (const [x, z] of [[-18, 26], [30, 26], [-30, 30], [40, 20], [-40, 16], [60, 30], [70, 12], [36, -22], [-44, -20], [20, 44], [-10, 42], [66, -24]]) {
    add(world, new THREE.CylinderGeometry(0.2, 0.28, 2.6, 7), mat(0x7a5a44), x, 1.3, z);
    add(world, new THREE.IcosahedronGeometry(1.9, 1), mat([0x7ab86a, 0x8fc878, 0xe2a85a][Math.floor(R() * 3)], { roughness: 1, flatShading: true }), x, 3.7, z);
    colliders.push({ type: 'cyl', x, z, r: 0.3, top: 2.6, bottom: 0, noGrab: true, noStep: true });
  }
  for (const [x, z, r] of [[-6, 20, 0], [6, 24, 3.1], [-26, 4, 1.6], [28, 2, -1.6]]) {
    const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = r; world.add(g);
    add(g, rbox(2.0, 0.12, 0.6, 0.04), mat(0x9a6a4a), 0, 0.5, 0); add(g, rbox(2.0, 0.5, 0.1, 0.04), mat(0x9a6a4a), 0, 0.85, -0.28);
    colliders.push({ type: 'cyl', x, z, r: 0.7, top: 0.56, bottom: 0 });
  }
  // the entrance canopy of the left block and its door chime
  add(world, rbox(5, 0.25, 2.6, 0.06), concM, -20, 3.5, Z1 + 1.3);
  for (const dx of [-2.3, 2.3]) add(world, new THREE.CylinderGeometry(0.07, 0.07, 3.4, 6), ironM, -20 + dx, 1.7, Z1 + 2.4);
  add(world, rbox(1.6, 2.6, 0.1, 0.04), darkM, -20, 1.3, Z1 + 0.06, { cast: false });
  // ================================================================ 2. BETWEEN THE BLOCKS (side view)
  // left balconies at 6, 18, 30; right balconies at 12, 24; the right block's roof at 36
  ledge(LX, -10.85, FL, 0); hatch(-9.6, FL); ledge(-8.35, -5, FL, 0);
  ledge(5, RX, 2 * FL, 1);
  ledge(LX, -5, 3 * FL, 2);
  ledge(5, RX, 4 * FL, 3);
  ledge(LX, -5, 5 * FL, 4);
  for (const [x, ys] of [[-5.2, [FL, 3 * FL, 5 * FL]], [5.2, [2 * FL, 4 * FL]]]) for (const y of ys) add(world, rbox(0.1, 1.0, Z1 - Z0, 0.03), ironM, x, y + 0.5, LZ).userData.noHide = true;   // (just a railing to look at: the throw clears it)
  // roof furniture of the right block
  for (const [x, z] of [[15, -12], [20, -15], [23, -10]]) { add(world, rbox(1.6, 1.2, 1.6, 0.08), concM, x, ROOF + 0.6, z); add(world, new THREE.SphereGeometry(0.9, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2).rotateX(-0.9), mat(0xeeeeee), x, ROOF + 1.9, z); }
  stars.push(makeStar(world, 'c4n-dish', 14, ROOF + 3.3, LZ, 3));

  // ================================================================ 3. THE GONDOLA on the tall block
  const gond = platform(world, colliders, { w: 5, h: 0.3, d: Z1 - Z0, x: 44.5, y: DOCK, z: LZ, material: mat(0xe2b03a, { roughness: 0.6 }), surface: 'wood' });
  gond.col.noGrab = true; gond.m.userData.noHide = true;
  {
    for (const [dx, dz] of [[-2.4, -2.1], [2.4, -2.1], [-2.4, 2.1], [2.4, 2.1]]) add(gond.m, new THREE.CylinderGeometry(0.04, 0.04, 30, 5), darkM, dx, 15.2, dz, { cast: false });
    add(gond.m, rbox(5, 0.9, 0.08, 0.03), ironM, 0, 0.6, -2.15);
    add(gond.m, rbox(0.3, 0.3, 0.3, 0.05), mat(0x3a9ac8), 1.8, 0.3, -1.6);
  }
  const lamp = add(world, new THREE.SphereGeometry(0.3, 12, 10), new THREE.MeshStandardMaterial({ color: 0x222222, emissive: 0x33ff66, emissiveIntensity: 0 }), 25.4, ROOF + 2.4, Z0 + 0.3, { cast: false });
  add(world, new THREE.CylinderGeometry(0.06, 0.06, 2.2, 6), ironM, 25.4, ROOF + 1.1, Z0 + 0.3);
  const CYCLE = 24000;   // 7 s docked, 6 s up, 6 s at the balcony, 5 s down
  const gondY = (ms) => {
    const u = ((ms % CYCLE) + CYCLE) % CYCLE, e = (k) => k * k * (3 - 2 * k);
    if (u < 7000) return DOCK;
    if (u < 13000) return DOCK + (HOME - DOCK) * e((u - 7000) / 6000);
    if (u < 19000) return HOME;
    return HOME - (HOME - DOCK) * e((u - 19000) / 5000);
  };
  let nowMs = 0;
  const docked = () => { const u = ((nowMs % CYCLE) + CYCLE) % CYCLE; return u < 5200 || u > CYCLE - 600; };   // (awake only while there's time to fly over)

  // ================================================================ 4. HIS BALCONY
  add(world, rbox(7, 0.3, Z1 - Z0, 0.05), slabM, 50.5, HOME + 0.02, LZ, { cast: false }).userData.noHide = true;
  add(world, rbox(0.12, 1.0, Z1 - Z0, 0.03), ironM, 47.1, HOME + 0.5, LZ).userData.noHide = true;
  // (the rail has a gap where the gondola stops)
  add(world, worldUV(new THREE.BoxGeometry(7, 4.2, 0.3), 3), mat(0xf2e8dc), 50.5, HOME + 2.1, Z0 - 0.1).userData.noHide = true;
  colliders.push({ type: 'box', x0: 53.9, x1: 54.2, z0: Z0, z1: Z1, top: 64, bottom: HOME, noGrab: true });
  // a chair, a little table with two cups, plants, fairy lights
  add(world, rbox(0.7, 0.08, 0.7, 0.03), mat(0x9a6a4a), 52.6, HOME + 0.75, Z0 + 0.8); add(world, new THREE.CylinderGeometry(0.05, 0.05, 0.75, 6), darkM, 52.6, HOME + 0.38, Z0 + 0.8);
  for (const dx of [-0.15, 0.15]) add(world, new THREE.CylinderGeometry(0.06, 0.05, 0.12, 8), mat(dx < 0 ? 0xe2533a : 0xa98bff), 52.6 + dx, HOME + 0.86, Z0 + 0.8);
  for (const x of [47.8, 53.3]) { add(world, new THREE.CylinderGeometry(0.25, 0.2, 0.4, 8), mat(0xc87a5a), x, HOME + 0.2, Z0 + 0.5); add(world, new THREE.IcosahedronGeometry(0.42, 1), mat(0x6ab86a, { flatShading: true }), x, HOME + 0.72, Z0 + 0.5); }
  for (let i = 0; i < 9; i++) add(world, new THREE.SphereGeometry(0.07, 6, 5), new THREE.MeshStandardMaterial({ color: 0xfff0c0, emissive: 0xffd080, emissiveIntensity: 1.3 }), 47.6 + i * 0.75, HOME + 3.7 - Math.sin((i / 8) * Math.PI) * 0.3, Z0 + 0.12, { cast: false });
  // the plan board (a hint for the finale): a calendar, a map, a sticky note
  const boardT = canvasTex(512, 384, (g) => {
    g.fillStyle = '#c89a6a'; g.fillRect(0, 0, 512, 384); g.fillStyle = '#e8d2b0'; g.fillRect(12, 12, 488, 360);
    g.fillStyle = '#ffffff'; g.fillRect(30, 30, 190, 150); g.fillStyle = '#e2533a'; g.fillRect(30, 30, 190, 30);
    g.fillStyle = '#555'; for (let j = 0; j < 4; j++) for (let i = 0; i < 6; i++) g.fillRect(42 + i * 30, 74 + j * 26, 16, 12);
    g.strokeStyle = '#e2533a'; g.lineWidth = 4; g.beginPath(); g.arc(140, 132, 15, 0, 7); g.stroke();
    g.fillStyle = '#dfe8d8'; g.fillRect(250, 30, 230, 190); g.strokeStyle = '#8a9a8a'; g.lineWidth = 2;
    for (let k = 0; k < 7; k++) { g.beginPath(); g.moveTo(250, 50 + k * 26); g.bezierCurveTo(320, 30 + k * 30, 400, 80 + k * 20, 480, 40 + k * 28); g.stroke(); }
    g.fillStyle = '#e2533a'; g.beginPath(); g.arc(380, 130, 9, 0, 7); g.fill();
    g.font = 'bold 22px sans-serif'; g.fillStyle = '#555'; g.fillText('DAMASCUS', 300, 210);
    g.fillStyle = '#ffe27a'; g.save(); g.translate(120, 280); g.rotate(-0.08); g.fillRect(-80, -60, 160, 120); g.fillStyle = '#444'; g.font = 'bold 34px sans-serif'; g.fillText('rooftop?', -66, 12); g.restore();
    g.fillStyle = '#ff9ec4'; g.font = '40px sans-serif'; g.fillText('♥', 330, 320);
  });
  add(world, new THREE.PlaneGeometry(2.6, 1.95), new THREE.MeshBasicMaterial({ map: boardT }), 50.4, HOME + 1.9, Z0 + 0.08, { cast: false });
  const bata = makeBata();
  bata.root.position.set(51.9, HOME, Z0 + 0.7); bata.root.scale.setScalar(0.9); bata.root.rotation.y = 0.3;
  world.add(bata.root);

  // ================================================================ salt and song
  let api = null;
  const seen = {};
  const once = (k, ctx, text, ms = 4200) => { if (seen[k]) return; seen[k] = true; (ctx || api)?.caption(text, ms); };
  const BELL_Y = (y) => y + 3.45;
  const T = 1.36, VX = 14.8;       // a balcony throw: 15.5 m across, 6 m up (the air takes about 5 m/s² off the sideways speed)
  const salt = createSalt(world, colliders, {
    key: 'ch4n',
    springs: [
      { id: 'd0', x: -20, y: 0, z: Z1 + 1.4 },                                    // under the door chime
      { id: 's1', x: -9.6, y: 0, z: LZ, need: 'door' },                          // up to the first balcony
      { id: 't0', x: -6.6, y: FL, z: LZ, v: [VX, 23, 0], lock: T + 0.1 },
      { id: 't1', x: 6.6, y: 2 * FL, z: LZ, v: [-VX, 23, 0], lock: T + 0.1 },
      { id: 'c2', x: -10.6, y: 3 * FL, z: LZ },                                  // under the wind chime
      { id: 't2', x: -6.6, y: 3 * FL, z: LZ, v: [VX, 23, 0], lock: T + 0.1, need: 'ch2' },
      { id: 'c3', x: 10.6, y: 4 * FL, z: LZ },
      { id: 't3', x: 6.6, y: 4 * FL, z: LZ, v: [-VX, 23, 0], lock: T + 0.1, need: 'ch3' },
      { id: 't4', x: -6.6, y: 5 * FL, z: LZ, v: [19.7, 23, 0], lock: T + 0.1 },  // up onto the roof
      { id: 'g1', x: 24.4, y: ROOF, z: LZ, v: [19.2, 19.2, 0], lock: 1.35, need: docked, dry: 'The gondola isn\'t there. Wait for the green lamp 🟢' },
      { id: 'h1', x: 49.2, y: HOME, z: LZ },                                     // under his wind chime
    ],
    walls: [
      { id: 'w0', x0: -9.0, x1: -8.3, z0: Z0, z1: Z1, y: 5 * FL, h: 5.5 },       // a balcony door crusted shut
    ],
    bells: [
      { id: 'door', x: -20, y: 3.3, z: Z1 + 1.4, spring: 'd0', s: 0.7 },
      { id: 'ch2', x: -10.6, y: BELL_Y(3 * FL), z: LZ, spring: 'c2', s: 0.8 },
      { id: 'ch3', x: 10.6, y: BELL_Y(4 * FL), z: LZ, spring: 'c3', s: 0.8 },
      { id: 'home', x: 49.2, y: BELL_Y(HOME), z: LZ, spring: 'h1', s: 0.85 },
    ],
    quiet: [
      { x0: 5.6, x1: 11.2, y: 2 * FL, z: LZ, r: 2.1, period: 6 },
      { x0: 5.6, x1: 11.4, y: 4 * FL, z: LZ, r: 2.2, period: 5, off: 2 },
      { x0: -11.4, x1: -5.6, y: 5 * FL, z: LZ, r: 2.2, period: 6.5, off: 1 },
    ],
    onRing(id) {
      const text = {
        door: 'Ding-dong! 🔔 A spring wakes up between the two blocks.',
        ch2: 'The wind chime sings: the spring at the edge is awake.',
        ch3: 'Another chime! On to the next balcony.',
      }[id];
      if (text) api?.caption(text, 3800);
    },
  });
  // brackets the chimes hang from
  for (const [x, y] of [[-10.6, 3 * FL], [10.6, 4 * FL], [49.2, HOME]]) add(world, rbox(0.14, 0.14, 2.4, 0.03), darkM, x, y + 3.75, Z0 + 1.2).userData.noHide = true;
  stars.push(makeStar(world, 'c4n-r1', 11.2, 2 * FL + 3.4, LZ, 1));      // high in the back corner of the first right balcony
  stars.push(makeStar(world, 'c4n-wall', -11, 5 * FL + 1.4, LZ, 2));     // behind the crusted door on the top balcony
  stars.push(makeStar(world, 'c4n-home', 53.2, HOME + 2.6, LZ, 4));      // on his balcony, over the plant

  sign(world, 3.4, 8.4, -0.3, ['His block is the tall one.', 'The way up: between', 'the two blocks ➡']);
  hangSign(world, -9.6, FL + 3.4, Z0 + 0.5, ['Tilted ring = a THROW.', 'On it together, sing!']);
  hangSign(world, 19, ROOF + 3.6, Z0 + 0.5, ['Gondola 🟢 = go.', 'Ring at the roof edge']);

  // ================================================================ hidden minigame under the laundry lines
  for (const z of [30, 34, 38]) {
    for (const x of [-48, -34]) add(world, new THREE.CylinderGeometry(0.06, 0.06, 2.6, 6), ironM, x, 1.3, z);
    add(world, new THREE.CylinderGeometry(0.015, 0.015, 14, 4).rotateZ(Math.PI / 2), darkM, -41, 2.5, z, { cast: false });
    for (let i = 0; i < 6; i++) add(world, new THREE.PlaneGeometry(0.9 + R() * 0.8, 1.0 + R() * 0.5), new THREE.MeshStandardMaterial({ color: [0xffffff, 0xff9ec4, 0xa8d8ff, 0xffe27a, 0xc6b3ff][i % 5], side: THREE.DoubleSide, roughness: 1 }), -46.5 + i * 2.2, 1.9, z, { cast: false });
  }
  const mgSocks = createMinigame(world, colliders, {
    id: 'c4sock', title: 'Sock Rain', rules: ['The laundry is falling! Catch the most.', 'Golden socks count 3 🧦'],
    at: { x: -50.6, y: 0, z: 40.5 }, face: Math.PI / 2, pads: { sun: [-49.8, 37.6], moon: [-49.8, 43.4] }, dur: 32000,
    game: starsGame({ cx: -41, cz: 41.5, y: 0, half: 3.8, count: 56 }),
  });

  // ================================================================ checkpoints, mist
  const cps = [
    checkpoint(world, { x: 0, y: 0, z: 30, r: 2.4, sun: [-1, 0, 28], moon: [1, 0, 28] }),
    checkpoint(world, { x: -11.3, y: FL, z: Z0 + 0.35, r: 1.8, sun: [-11.2, FL, LZ], moon: [-10.4, FL, LZ - 0.6], label: 'Between the blocks' }),
    checkpoint(world, { x: -8.4, y: 3 * FL, z: Z0 + 0.35, r: 2.2, sun: [-8.8, 3 * FL, LZ], moon: [-8, 3 * FL, LZ], label: 'Third floor' }),
    checkpoint(world, { x: 17, y: ROOF, z: Z0 + 0.35, r: 3, sun: [16.4, ROOF, LZ], moon: [17.6, ROOF, LZ], label: 'The roof' }),
    checkpoint(world, { x: 51, y: HOME + 0.17, z: Z0 + 0.5, r: 3.4, sun: [50.4, HOME + 0.17, LZ], moon: [51.6, HOME + 0.17, LZ], label: 'His balcony 🏠' }),
  ];
  {
    const P = [];
    for (let x = -58; x <= 88; x += 8) { P.push([x, 1 + R() * 3, 54 + R() * 3]); P.push([x, 2 + R() * 4, -46 - R() * 3]); }
    for (let z = -40; z <= 50; z += 8) { P.push([90 + R() * 2, 1 + R() * 3, z]); P.push([-60 - R() * 2, 1 + R() * 3, z]); }
    memoryMist(world, P, { size: 11, color: 0xf0d8d0, opacity: 0.4 });
  }
  colliders.push({ type: 'box', x0: 47, x1: 54, z0: Z0, z1: Z1, top: HOME + 0.17, bottom: HOME - 0.2, noGrab: true, surface: 'concrete' });

  // ================================================================ state
  const upThere = { sun: false, moon: false }, prevY = { sun: 0, moon: 0 }, vyEst = { sun: 0, moon: 0 };
  let doneT = -1;
  const line = lane([80, LZ], [-40, LZ], { half: 2.3, y0: 4.6, y1: 90, dist: 17, pitch: 0.1 });

  return {
    id: 'ch4-neustadt',
    title: 'Chapter 4 · Halle — Neustadt',
    colliders,
    stars,
    movers: {},
    spawn: { sun: new THREE.Vector3(-1, 0, 28), moon: new THREE.Vector3(1, 0, 28) },
    camYaw: { sun: 0, moon: 0 },
    lobbyCam: { cx: 10, cz: 6, r: 80, h: 40 },
    killY: -8,
    killAt(p) {
      if (!api) return false;
      const r = p === api.bodies.sun.pos ? 'sun' : 'moon';
      if (p.y > FL - 0.4 && p.z < Z1 + 0.4 && p.z > Z0 - 0.4) upThere[r] = true;
      return upThere[r] && p.y < (p.x > 26.5 ? 30 : 3.2) && p.z < Z1 + 0.6;
    },
    lanes: [line],
    checkpoints: cps,
    hints: [
      'Ring the little door chime under the entrance canopy of the left block (Salt under it, then Sing). Then go to the white ring between the two blocks, stand on the crystal together and sing.',
      'The ring at the balcony edge is tilted: it throws you across to the next balcony. Sun grows the crystal, both stand on it, Moon sings. On the right balcony, wait until the grey bubble has drifted away from the ring.',
      'If the ring at the edge is grey, it is dry: ring the wind chime at the back of the balcony first (crystal under it, then sing). On the top balcony, Moon\'s song breaks the salt crust.',
      'Watch the gondola on the tall block. When it is docked the lamp on the roof turns green and the ring at the roof edge wakes up: grow the crystal, stand on it together, sing. Then ride the gondola up.',
      'Ring the wind chime on his balcony: crystal under it, then sing.',
    ],
    respawnNearPartner: (pp) => !!pp,
    portal: new THREE.Vector3(50.6, HOME + 0.17, LZ + 0.6),
    intro: {
      all: ['Chapter 4 · Halle', 'Part 2 · Neustadt', 'His block is the tall one at the back. The lift is out of order, of course. But there is another way up.'],
      sun: 'Salt ✦ tilted rings grow crystals that THROW',
      moon: 'Sing ✦ wind chimes wake dry springs',
    },
    abilities: withMinigames(salt.abilities, [mgSocks]),
    salt, gondY,
    attach(a) { api = a; salt.attach(a); mgSocks.attach(a); },
    onCheckpoint() {},
    debug: () => ({ bells: salt.bellMask(), up: { ...upThere }, gond: gond.y, docked: docked() }),
    story(ctx, t) {
      const P = [ctx.pos.sun, ctx.pos.moon].filter(Boolean);
      const m = salt.bellMask();
      if (P.some((p) => p.z < 12 && p.y < 2)) once('door', ctx, 'The door chime under the canopy is silent too. Salt, then Sing.', 4200);
      if (P.some((p) => p.y > FL - 0.5 && p.y < 2 * FL - 1 && p.x < 0)) once('throw', ctx, 'This ring leans towards the other block. It doesn\'t lift: it THROWS.', 4400);
      if (P.some((p) => p.y > 3 * FL - 0.5 && p.y < 4 * FL - 1 && p.x < 0)) once('dry', ctx, 'The ring at the edge is dry. There\'s a wind chime at the back…', 4000);
      if (P.some((p) => p.y > ROOF - 0.5 && p.x > 11 && p.x < 27)) once('roof', ctx, 'The roof! And over there, the window-cleaners\' gondola. It only stops for a moment.', 4800);
      if (P.some((p) => p.y > HOME - 0.5 && p.x > 46.5)) once('home', ctx, '"This is it. My balcony." The whole of Neustadt, and nobody to show it to. Until now.', 5200);
      const moon = ctx.pos.moon;
      if (moon && moon.y > HOME - 0.5 && Math.abs(moon.x - 50.4) < 1.6 && moon.x > 47) once('board', ctx, '🦆 "Nothing to see here! Classified!" (Dr. Bata spreads a wing over the board.) …a calendar? A map of Damascus? "rooftop?"', 6400);
      if (m & 8 && doneT < 0) {
        doneT = t;
        const lines = [
          ['The chime rings out over the rooftops… and the grey lifts. 🌇', 4000],
          ['Window by window, Neustadt lights up in sunset colours.', 3800],
          ['The view over Halle-Neustadt. He has sent her this photo so many times.', 4400],
          ['"It\'s better from here," she says. "Everything is, with you here."', 4400],
          ['Part 2 complete ✨ Next: he\'s hungry. Leipziger Straße.', 3600],
        ];
        let at = 2400;
        for (const [l, ms] of lines) { setTimeout(() => ctx.caption(l, ms), at); at += ms + 150; }
        setTimeout(() => ctx.finish(), at + 200);
      }
    },
    update(serverMs, t, dt) {
      spinStars(stars, t);
      nowMs = serverMs;
      gond.set(44.5, gondY(serverMs), LZ);
      const dk = docked();
      lamp.material.emissiveIntensity += ((dk ? 2.2 : 0) - lamp.material.emissiveIntensity) * Math.min(1, dt * 8);
      lamp.material.color.setHex(dk ? 0x33ff66 : 0x442222);
      bata.animate?.(t, false);
      mgSocks.update(dt, serverMs, t);
      if (!api) return;
      for (const r of ['sun', 'moon']) { const p = api.bodies[r].pos; vyEst[r] = dt > 0 ? (p.y - prevY[r]) / dt : 0; prevY[r] = p.y; }
      for (const h of hatches) {
        const open = ['sun', 'moon'].some((r) => { const p = api.bodies[r].pos; return Math.abs(p.x - h.x) < 1.45 && Math.abs(p.z - LZ) < 2.6 && p.y < h.y - 0.02 && p.y > h.y - 8.5 && vyEst[r] > 7; });
        h.col.disabled = open;
        h.open += ((open ? 1 : 0) - h.open) * Math.min(1, dt * 14);
        h.mesh.material.opacity = 0.55 * (1 - h.open);
      }
      const cpi = api.save?.cp?.l === 'ch4-neustadt' ? api.save.cp.i : 0;
      cps.forEach((c, i) => c.setOn(i <= cpi, t));
    },
  };
}
