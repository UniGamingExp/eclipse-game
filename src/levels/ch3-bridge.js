// Chapter 3 · Regensburg · Part 1 "The Stone Bridge".
// Autumn 2025: Sun still lives in Regensburg and the moving boxes for Halle are already out.
// North bank (Stadtamhof) → the old Stone Bridge over the swirling Danube → the river island → the bridge
// tower → the old town by the Wurstkuchl, with the cathedral's twin spires behind.
//  1. The bridge deck starts 6.8 m above the bank: Sun stacks two moving boxes against the wall to climb up.
//  2. A broken arch (14 m): Moon tapes the two posts → a sticky tape bridge.
//  3. The island: stack boxes against the terrace house, climb to the roof terrace, Moon tapes a zipline over
//     the main channel and both zip across.
// Stars: on the bank (a two-box stack and a jump), out on a river pillar (side tape), on the zipline.
import * as THREE from 'three';
import { skyU } from '../gfx.js';
import { mat, add, rbox, sign, sky, makeStar, spinStars, lights, cloud } from './common.js';
import { kit, nature } from '../nature.js';
import { house, gateTower } from './medieval.js';
import { createMoving, BOX } from './moving.js';
import { townspeople } from '../npc.js';

const DY = 6.8;        // bridge deck height above the bank
const WATER = -3.6;    // Danube surface
const PIERS = [0.5, -8.25, -17, -31, -40.5, -50, -63, -78, -87, -96];   // pier centres along z (broken spans at the gaps)
const SPANS = [[2, -17], [-31, -50], [-78, -96]];   // intact deck segments [z0, z1]

/** world-space UVs (1 unit = `s` metres) so stone textures tile evenly on any shape */
function worldUV(geo, s = 2) {
  geo.computeVertexNormals();
  const p = geo.attributes.position, n = geo.attributes.normal, uv = [];
  for (let i = 0; i < p.count; i++) {
    const ax = Math.abs(n.getX(i)), ay = Math.abs(n.getY(i)), az = Math.abs(n.getZ(i));
    if (ay >= ax && ay >= az) uv.push(p.getX(i) / s, p.getZ(i) / s);
    else if (ax >= az) uv.push(p.getZ(i) / s, p.getY(i) / s);
    else uv.push(p.getX(i) / s, p.getY(i) / s);
  }
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  return geo;
}

function waterMaterial() {
  return new THREE.ShaderMaterial({
    fog: true,
    uniforms: { ...THREE.UniformsUtils.merge([THREE.UniformsLib.fog, { time: { value: 0 } }]), ...skyU },
    vertexShader: /* glsl */`
      varying vec3 vW;
      #include <fog_pars_vertex>
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vW = wp.xyz;
        vec4 mvPosition = viewMatrix * wp;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,
    fragmentShader: /* glsl */`
      uniform float time; uniform vec3 sunDir, sunCol;
      varying vec3 vW;
      #include <fog_pars_fragment>
      float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
      void main() {
        vec2 p = vW.xz;
        // the river flows toward +x; eddies spin behind every pier
        vec2 q = p; q.x -= time * 2.2;
        float swirl = 0.0;
        for (int k = 0; k < 6; k++) {
          float z = -3.0 - float(k) * 18.0;
          vec2 c = vec2(8.0 + mod(time * 2.2 + float(k) * 7.0, 40.0), z + sin(time + float(k)) * 2.0);
          vec2 d = p - c; float r = length(d);
          float a = atan(d.y, d.x) + r * 0.8 - time * 3.0;
          swirl += smoothstep(5.0, 0.0, r) * (0.5 + 0.5 * sin(a * 3.0));
        }
        float w = n(q * 0.18) * 0.6 + n(q * 0.5 + 3.0) * 0.4;
        float lines = smoothstep(0.82, 1.0, sin(q.x * 0.9 + n(q * 0.3) * 6.0) * 0.5 + 0.5);
        vec3 deep = vec3(0.22, 0.42, 0.62), light = vec3(0.45, 0.72, 0.85), foam = vec3(0.95, 0.97, 1.0);
        vec3 col = mix(deep, light, w);
        col = mix(col, foam, clamp(lines * 0.35 + swirl * 0.45, 0.0, 0.8));
        // ripples tilt the surface: the sky reflects at a glance, and the sun leaves a trail of glints
        float e = 0.35;
        float hx = n(q * 0.9 + vec2(e, 0.0)) - n(q * 0.9 - vec2(e, 0.0)) + (n(p * 2.3 + time * 0.6 + vec2(e, 0.0)) - n(p * 2.3 + time * 0.6 - vec2(e, 0.0))) * 0.5;
        float hz = n(q * 0.9 + vec2(0.0, e)) - n(q * 0.9 - vec2(0.0, e)) + (n(p * 2.3 + time * 0.6 + vec2(0.0, e)) - n(p * 2.3 + time * 0.6 - vec2(0.0, e))) * 0.5;
        vec3 N = normalize(vec3(-hx * 0.9, 1.0, -hz * 0.9));
        vec3 V = normalize(cameraPosition - vW);
        float fr = pow(1.0 - max(dot(N, V), 0.0), 4.0);
        vec3 skyTint = mix(vec3(1.0, 0.8, 0.86), sunCol, 0.35);
        col = mix(col, skyTint, fr * 0.55);
        float sp = max(dot(reflect(-V, N), normalize(sunDir)), 0.0);
        col += sunCol * (pow(sp, 60.0) * 0.6 + pow(sp, 400.0) * 4.0);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`,
  });
}

/** the arches between two piers: a slab with a round opening, extruded across the bridge (x) */
function archGeo(L, pw, yb, yt, s) {
  // one outline with the round opening cut into its bottom edge
  const r = (L - pw) / 2, sh = new THREE.Shape();
  sh.moveTo(0, yb);
  sh.lineTo(pw / 2, yb);
  sh.lineTo(pw / 2, s);
  sh.absarc(L / 2, s, r, Math.PI, 0, true);
  sh.lineTo(L - pw / 2, yb);
  sh.lineTo(L, yb);
  sh.lineTo(L, yt);
  sh.lineTo(0, yt);
  sh.lineTo(0, yb);
  const g = new THREE.ExtrudeGeometry(sh, { depth: 6.4, bevelEnabled: false, curveSegments: 16 });
  g.rotateY(Math.PI / 2);   // shape x → world −z, extrusion → world x
  return worldUV(g, 2.2);
}

function cathedral(parent, x, y, z, stone, roofM) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  parent.add(g);
  // the nave with a steep roof
  add(g, rbox(14, 16, 34, 0.2), stone, 0, 8, -14, { cast: false });
  const roof = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 10.5, 34, 3, 1).rotateX(Math.PI / 2).rotateZ(Math.PI), roofM);
  roof.scale.set(1, 0.95, 1); roof.position.set(0, 18.2, -14);
  g.add(roof);
  // the twin spires with their open stone tracery
  for (const sx of [-5.5, 5.5]) {
    add(g, rbox(7, 34, 7, 0.2), stone, sx, 17, 4, { cast: false });
    add(g, new THREE.CylinderGeometry(3.6, 3.9, 6, 8), stone, sx, 37, 4, { cast: false });
    const spire = add(g, new THREE.ConeGeometry(3.4, 22, 8), stone, sx, 51, 4, { cast: false });
    spire.scale.set(1, 1, 1);
    add(g, new THREE.SphereGeometry(0.5, 8, 6), mat(0xffd36b, { roughness: 0.3, metalness: 0.4 }), sx, 62.4, 4, { cast: false });
    for (const [dx, dz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) add(g, new THREE.ConeGeometry(0.6, 5, 6), stone, sx + dx * 3.2, 36.5, 4 + dz * 3.2, { cast: false });
    // tall pointed windows (dark)
    for (const wy of [10, 20, 29]) add(g, rbox(1.6, 5, 0.3, 0.6), mat(0x4a3d66), sx, wy, 7.55, { cast: false });
  }
  // rose window between the towers
  add(g, new THREE.CylinderGeometry(2.2, 2.2, 0.4, 24).rotateX(Math.PI / 2), mat(0x6a4fa0, { emissive: 0x3a2060, roughness: 0.4 }), 0, 15, 2.95, { cast: false });
  return g;
}

function bruckmandl(parent, x, y, z) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  parent.add(g);
  const st = mat(0xd8cfc4, { roughness: 0.9 });
  add(g, new THREE.CylinderGeometry(0.42, 0.5, 1.5, 10), st, 0, 0.75, 0);
  add(g, new THREE.CylinderGeometry(0.55, 0.55, 0.16, 10), st, 0, 1.55, 0);
  // the little stone man, hand over his eyes, looking toward the cathedral
  add(g, new THREE.CylinderGeometry(0.17, 0.22, 0.6, 10), st, 0, 1.93, 0);
  add(g, new THREE.SphereGeometry(0.17, 12, 10), st, 0, 2.38, 0);
  const arm = add(g, new THREE.CapsuleGeometry(0.05, 0.32, 4, 6), st, 0.12, 2.27, -0.12);
  arm.rotation.set(-1.0, 0, 0.6);
  add(g, new THREE.CylinderGeometry(0.2, 0.2, 0.05, 12), st, 0, 2.55, 0);
  return g;
}

export function buildCh3Bridge(root, scene) {
  const colliders = [];
  const stars = [];
  const anims = [];
  const world = new THREE.Group();
  root.add(world);
  const K = kit('medieval');

  scene.fog = new THREE.Fog(new THREE.Color('#d2a9c3'), 80, 300);
  sky(root, {
    top: '#3b3f8c', mid: '#f2a7a6', low: '#ffd9a8', neb1: '#8a7bff', neb2: '#ff9a7a', stars: 0.45, nebula: 0.4, cloud: 0xf6cfd2, far: false, cx: 0, cz: -55,
    lightDir: [0.6, 0.35, 0.6],
    planets: [['ember', -1.1, 0.2, 260, 0.1, 2.0], ['lilac', 1.2, 0.16, 250, 0.2, 1.6], ['giant', -0.2, 0.32, 320, 0.42], ['rose', 2.6, 0.22, 260, -0.5], ['mint', -2.4, 0.3, 240, 0.3]],
  });
  const L = lights(root, { sunColor: 0xffd7aa, sunI: 2.3, hemiSky: 0xc8c0ff, hemiGround: 0xffc8a8, hemiI: 1.45, pos: [24, 30, 10], target: [0, 0, 0], extent: 34 });

  // materials: the kit's stone where available, plain colours otherwise
  const stoneSrc = K.material?.('MI_UnevenBrick');
  const stone = stoneSrc ? stoneSrc.clone() : mat(0xcdbfc8, { roughness: 0.92 });
  if (stoneSrc) { for (const k of ['map', 'normalMap', 'roughnessMap']) if (stone[k]) { stone[k] = stone[k].clone(); stone[k].wrapS = stone[k].wrapT = THREE.RepeatWrapping; stone[k].needsUpdate = true; } stone.color.setRGB(1.55, 1.5, 1.62); }
  const deckTop = mat(0xd9c9b8, { roughness: 0.95 });
  const roofM = mat(0x7a8fb0, { roughness: 0.6 });

  // ---------- the river ----------
  const waterM = waterMaterial();
  const water = new THREE.Mesh(new THREE.PlaneGeometry(520, 260, 1, 1).rotateX(-Math.PI / 2), waterM);
  water.position.set(0, WATER, -55);
  water.userData.noHide = true;
  world.add(water);
  anims.push((t) => { waterM.uniforms.time.value = t; });

  // ---------- north bank (Stadtamhof) ----------
  const bank = (x0, x1, z0, z1, top) => {
    const geo = worldUV(new THREE.BoxGeometry(x1 - x0, top - WATER + 1.2, z1 - z0), 2.2);
    add(world, geo, stone, (x0 + x1) / 2, (top + WATER - 1.2) / 2, (z0 + z1) / 2, { cast: false });
  };
  bank(-40, 40, 1, 34, 0);
  colliders.push({ type: 'box', x0: -40, x1: 40, z0: 1, z1: 34, top: 0, bottom: -3, safe: true, surface: 'concrete' });
  // cobbles
  if (K.has('Floor_UnevenBrick')) {
    const items = [];
    for (let x = -15; x <= 15; x += 2) for (let z = 2; z <= 22; z += 2) items.push({ x, y: 0.005, z });
    K.scatter(world, 'Floor_UnevenBrick', items, { receive: true });
  }
  // the river wall along the bank, open only where the bridge starts
  for (const [x0, x1] of [[-40, -3.4], [3.4, 40]]) {
    add(world, worldUV(new THREE.BoxGeometry(x1 - x0, 0.9, 0.5), 1.5), stone, (x0 + x1) / 2, 0.45, 1.25);
    colliders.push({ type: 'box', x0, x1, z0: 1, z1: 1.5, top: 0.9, bottom: 0, noGrab: true });
  }
  // houses around the little square
  house(world, -13, 0, 8, { w: 4, d: 6, floors: 2, rotY: Math.PI / 2, seed: 11 });
  house(world, -13, 0, 16, { w: 4, d: 4, floors: 3, rotY: Math.PI / 2, style: 'plaster', seed: 12 });
  house(world, 13, 0, 9, { w: 6, d: 6, floors: 2, rotY: -Math.PI / 2, seed: 13 });
  house(world, 13, 0, 17, { w: 4, d: 4, floors: 2, rotY: -Math.PI / 2, style: 'brick', seed: 14 });
  house(world, -5, 0, 25, { w: 6, d: 6, floors: 3, rotY: Math.PI, style: 'plaster', seed: 15 });
  house(world, 4, 0, 25, { w: 4, d: 6, floors: 2, rotY: Math.PI, seed: 16 });
  for (const [x0, x1, z0, z1, top] of [[-16, -10, 6, 10, 6.24], [-15, -11, 14, 18, 9.36], [10, 16, 6, 12, 6.24], [11, 15, 15, 19, 6.24], [-8, -2, 22, 28, 9.36], [2, 6, 22, 28, 6.24]]) colliders.push({ type: 'box', x0, x1, z0, z1, top: top + 4, bottom: 0, noGrab: true });
  // the tipped-over moving cart and its boxes
  if (K.has('Prop_Wagon')) { const w = K.place(world, 'Prop_Wagon', -8.2, 0, 7.4, { rotY: 0.5 }); w.rotation.z = 0.25; }
  colliders.push({ type: 'box', x0: -9.4, x1: -7, z0: 4.2, z1: 8.4, top: 1.0, bottom: 0 });
  // lanterns
  for (const [x, z] of [[-8, 3], [8, 3], [-8, 20], [8, 20]]) {
    add(world, new THREE.CylinderGeometry(0.07, 0.09, 3.2, 8), mat(0x3a3150), x, 1.6, z);
    add(world, new THREE.SphereGeometry(0.22, 12, 8), new THREE.MeshBasicMaterial({ color: new THREE.Color(2.2, 1.7, 1.1) }), x, 3.3, z, { cast: false });
    colliders.push({ type: 'cyl', x, z, r: 0.12, top: 3.3, bottom: 0, noGrab: true });
  }
  sign(world, 3.6, 4.2, -0.35, ['🚧 Bridge too high?', 'Stack the boxes! 📦📦']);

  // ---------- the Stone Bridge ----------
  // deck segments
  for (const [z0, z1] of SPANS) {
    const len = z0 - z1, cz = (z0 + z1) / 2;
    add(world, worldUV(new THREE.BoxGeometry(6.6, 1.0, len), 2.2), stone, 0, DY - 0.5, cz);
    if (K.has('Floor_UnevenBrick')) {
      const items = [];
      for (let z = z0 - 1; z > z1; z -= 2) for (const x of [-2, 0, 2]) items.push({ x, y: DY + 0.005, z });
      K.scatter(world, 'Floor_UnevenBrick', items);
    } else add(world, new THREE.BoxGeometry(6.0, 0.06, len - 0.1), deckTop, 0, DY + 0.0, cz, { cast: false }).receiveShadow = true;
    colliders.push({ type: 'box', x0: -3.3, x1: 3.3, z0: z1, z1: z0, top: DY, bottom: z0 === 2 ? WATER - 1 : DY - 1.0, safe: true, surface: 'concrete' });
  }
  // the bank end: a solid wall from the square up to the deck (the climb)
  add(world, worldUV(new THREE.BoxGeometry(6.6, DY - WATER, 1.6), 2.2), stone, 0, (DY + WATER) / 2, 1.0);
  // parapets (with openings: the side tape on segment 2)
  const parapet = (x, z0, z1) => {
    add(world, worldUV(new THREE.BoxGeometry(0.4, 0.95, z0 - z1), 1.4), stone, x, DY + 0.47, (z0 + z1) / 2);
    colliders.push({ type: 'box', x0: x - 0.2, x1: x + 0.2, z0: z1, z1: z0, top: DY + 0.95, bottom: DY, noGrab: true });
  };
  for (const s of [-1, 1]) {
    parapet(s * 3.1, 1.6, -17);
    if (s > 0) { parapet(3.1, -31, -38.8); parapet(3.1, -41.2, -50); } else parapet(-3.1, -31, -50);
    parapet(s * 3.1, -78, -96);
  }
  // piers with pointed cutwaters, and arches between them
  const pierG = worldUV(new THREE.BoxGeometry(6.4, DY - 1 - WATER + 1, 3.4), 2.2);
  const noseG = worldUV(new THREE.BoxGeometry(2.6, 3.4, 2.6), 1.6);
  for (const pz of PIERS) {
    add(world, pierG, stone, 0, (DY - 1 + WATER - 1) / 2, pz, { cast: false });
    for (const s of [-1, 1]) { const n = add(world, noseG, stone, s * 3.2, WATER + 1.4, pz, { cast: false }); n.rotation.y = Math.PI / 4; }
    add(world, new THREE.ConeGeometry(1.9, 1.4, 4), stone, 3.2, WATER + 3.8, pz, { cast: false }).rotation.y = 0;
    add(world, new THREE.ConeGeometry(1.9, 1.4, 4), stone, -3.2, WATER + 3.8, pz, { cast: false });
  }
  for (let i = 0; i < PIERS.length - 1; i++) {
    const a = PIERS[i], b = PIERS[i + 1], span = a - b;
    const broken = (a > -31 && b < -17) || (a > -78 && b < -62) || a === -50;
    if (broken || span > 14) continue;
    const g = add(world, archGeo(span, 3.4, WATER - 0.6, DY - 1, DY - 1 - 1.1 - (span - 3.4) / 2), stone, -3.2, 0, a, { cast: false });
    g.receiveShadow = true;
  }
  // broken stubs at the gaps (jagged stones)
  for (const [z, s] of [[-17.6, 1], [-30.4, -1], [-62.4, 1], [-77.4, -1]]) {
    for (let i = 0; i < 5; i++) add(world, rbox(1 + (i % 2) * 0.4, 0.7, 1.0, 0.15), stone, -2.6 + i * 1.3, DY - 0.9 - (i % 3) * 0.25, z - s * (0.3 + (i % 2) * 0.4), { cast: false });
  }

  // ---------- the river island (Wöhrd), at deck height ----------
  add(world, worldUV(new THREE.BoxGeometry(20, DY - WATER + 1, 13), 2.2), stone, 0, (DY + WATER - 1) / 2, -56.5, { cast: false });
  colliders.push({ type: 'box', x0: -10, x1: 10, z0: -63, z1: -50, top: DY, bottom: WATER - 1, safe: true, surface: 'concrete' });
  for (const [x0, x1, z0, z1] of [[-10, -3.3, -50.2, -49.8], [3.3, 10, -50.2, -49.8], [-10.2, -9.8, -63, -50], [9.8, 10.2, -63, -50], [-10, -1.6, -63.2, -62.8]]) {
    add(world, worldUV(new THREE.BoxGeometry(x1 - x0, 0.95, z1 - z0), 1.4), stone, (x0 + x1) / 2, DY + 0.47, (z0 + z1) / 2);
    colliders.push({ type: 'box', x0, x1, z0, z1, top: DY + 0.95, bottom: DY, noGrab: true });
  }
  if (K.has('Floor_UnevenBrick')) {
    const items = [];
    for (let x = -9; x <= 9; x += 2) for (let z = -51; z >= -62; z -= 2) items.push({ x, y: DY + 0.04, z });
    K.scatter(world, 'Floor_UnevenBrick', items);
  }
  // the terrace house (climb it with boxes; the zipline starts on its roof terrace)
  const TH = { x: 6.5, z: -57.4 };
  house(world, TH.x, DY, TH.z, { w: 4, d: 4, floors: 2, s: 1.12, roof: false, rotY: -Math.PI / 2, seed: 21, style: 'mixed' });
  const tTop = DY + 2 * 3.12 * 1.12;
  add(world, rbox(4.7, 0.3, 4.7, 0.08), mat(0xb9876a, { roughness: 0.8 }), TH.x, tTop - 0.12, TH.z);
  colliders.push({ type: 'box', x0: TH.x - 2.3, x1: TH.x + 2.3, z0: TH.z - 2.3, z1: TH.z + 2.3, top: tTop + 0.03, bottom: DY });
  // a little fence on the river side of the terrace
  if (K.has('Prop_WoodenFence_Single')) for (const z of [-1.2, 1.2]) K.place(world, 'Prop_WoodenFence_Single', TH.x + 2.1, tTop + 0.03, TH.z + z, { rotY: Math.PI / 2 });
  colliders.push({ type: 'box', x0: TH.x + 2.0, x1: TH.x + 2.3, z0: TH.z - 2.3, z1: TH.z + 2.3, top: tTop + 0.85, bottom: tTop, noGrab: true });
  house(world, -6, DY, -57, { w: 4, d: 6, floors: 2, rotY: Math.PI / 2, seed: 22, style: 'plaster' });
  colliders.push({ type: 'box', x0: -9, x1: -3, z0: -59, z1: -55, top: DY + 10.3, bottom: DY, noGrab: true });
  if (nature.has('CommonTree_2')) nature.place(world, 'CommonTree_2', -1.5, DY, -61.6, { s: 0.9 });
  colliders.push({ type: 'cyl', x: -1.5, z: -61.6, r: 0.35, top: DY + 3, bottom: DY, noGrab: true });
  sign(world, 1.6, -51.2, 0.2, ['Up to the terrace!', 'Then: tape a zipline ✦']).position.y = DY;

  // ---------- the side pillar (bonus star) ----------
  add(world, worldUV(new THREE.CylinderGeometry(1.8, 2.1, DY - WATER + 1, 14), 1.6), stone, 13.6, (DY + WATER - 1) / 2, -40, { cast: false });
  colliders.push({ type: 'cyl', x: 13.6, z: -40, r: 1.8, top: DY, bottom: WATER - 1, safe: false });

  // ---------- the far end: bridge tower, old town, Wurstkuchl, cathedral ----------
  gateTower(world, 0, DY, -99, { floors: 4 });
  for (const [x0, x1, top, bottom] of [[-3.3, -1, DY + 12.5, DY], [1, 3.3, DY + 12.5, DY], [-1, 1, DY + 12.5, DY + 3.0]]) colliders.push({ type: 'box', x0, x1, z0: -102, z1: -96, top, bottom });
  if (K.has('Floor_UnevenBrick')) K.scatter(world, 'Floor_UnevenBrick', [{ x: 0, y: DY + 0.005, z: -97 }, { x: 0, y: DY + 0.005, z: -99 }, { x: 0, y: DY + 0.005, z: -101 }]);
  colliders.push({ type: 'box', x0: -1, x1: 1, z0: -102, z1: -96, top: DY, bottom: DY - 1, safe: true, surface: 'concrete' });
  bank(-40, 40, -150, -102, DY);
  colliders.push({ type: 'box', x0: -40, x1: 40, z0: -150, z1: -102, top: DY, bottom: DY - 3, safe: true, surface: 'concrete' });
  if (K.has('Floor_UnevenBrick')) {
    const items = [];
    for (let x = -15; x <= 15; x += 2) for (let z = -103; z >= -125; z -= 2) items.push({ x, y: DY + 0.005, z });
    K.scatter(world, 'Floor_UnevenBrick', items);
  }
  for (const [x0, x1] of [[-40, -3.4], [3.4, 40]]) {
    add(world, worldUV(new THREE.BoxGeometry(x1 - x0, 0.9, 0.5), 1.5), stone, (x0 + x1) / 2, DY + 0.45, -102.25);
    colliders.push({ type: 'box', x0, x1, z0: -102.5, z1: -102, top: DY + 0.9, bottom: DY, noGrab: true });
  }
  // the Wurstkuchl (the old sausage kitchen by the bridge) with its smoking chimney
  house(world, 8.5, DY, -106.5, { w: 4, d: 4, floors: 1, rotY: -Math.PI / 2, style: 'brick', seed: 31, chimney: false });
  if (K.has('Prop_Chimney')) K.place(world, 'Prop_Chimney', 8.0, DY + 4.6, -106.5);
  colliders.push({ type: 'box', x0: 6.5, x1: 10.5, z0: -108.5, z1: -104.5, top: DY + 7, bottom: DY, noGrab: true });
  sign(world, 5.6, -104.2, -0.5, ['Wurstkuchl 🌭', 'since the 1100s']).position.y = DY;
  // the salt barn and town houses
  house(world, -11, DY, -110, { w: 6, d: 8, floors: 2, style: 'plaster', seed: 32, rotY: Math.PI / 2 });
  colliders.push({ type: 'box', x0: -15, x1: -7, z0: -113, z1: -107, top: DY + 10.3, bottom: DY, noGrab: true });
  house(world, 11, DY, -116, { w: 4, d: 6, floors: 3, seed: 33, rotY: -Math.PI / 2, style: 'plaster' });
  house(world, -4, DY, -126, { w: 6, d: 6, floors: 3, seed: 34 });
  house(world, 5, DY, -126, { w: 4, d: 4, floors: 2, seed: 35, style: 'brick' });
  for (const [x0, x1, z0, z1, top] of [[8, 14, -118, -114, 9.36], [-7, -1, -129, -123, 9.36], [3, 7, -128, -124, 6.24]]) colliders.push({ type: 'box', x0, x1, z0, z1, top: DY + top + 4, bottom: DY, noGrab: true });
  cathedral(world, 0, DY, -160, stone, roofM);
  bruckmandl(world, -2.3, DY, -87);
  colliders.push({ type: 'cyl', x: -2.3, z: -87, r: 0.5, top: DY + 2.6, bottom: DY, noGrab: true });

  // ---------- Strongman & Tape gun ----------
  const zipA = [TH.x - 0.6, tTop + 2.0, TH.z - 1.6], zipB = [1.6, DY + 2.0, -80.2];
  const moving = createMoving(world, colliders, {
    key: 'ch3',
    killY: -1,
    boxes: [
      { id: 'b1', x: -5.2, y: 0, z: 5.6 }, { id: 'b2', x: -6.4, y: 0, z: 10.2 }, { id: 'b3', x: -3.2, y: 0, z: 11.2 },
      { id: 'b4', x: -1.6, y: DY, z: -53.4 }, { id: 'b5', x: 1.8, y: DY, z: -60.4 }, { id: 'b6', x: -4.6, y: DY, z: -52.2 },
    ],
    tapes: [
      { id: 't1', kind: 'walk', a: [0, DY, -16.8], b: [0, DY, -31.2], pa: [2.2, DY, -16.2], pb: [2.2, DY, -31.8] },
      { id: 't2', kind: 'walk', a: [3.3, DY, -40], b: [12.2, DY, -40], pa: [2.4, DY, -41.6], pb: [13.6, DY, -41.2] },
      { id: 't3', kind: 'zip', a: zipA, b: zipB },
    ],
  });

  // ---------- stars ----------
  stars.push(makeStar(world, 'c3-stack', -9.6, 6.3, 11.6, 0));
  stars.push(makeStar(world, 'c3-tape', 13.6, DY + 1.3, -40, 1));
  const zu = 0.5, zp = new THREE.Vector3(...zipA).lerp(new THREE.Vector3(...zipB), zu);
  stars.push(makeStar(world, 'c3-zip', zp.x, zp.y - 0.5 - 1.45 - 0.4 + 0.9, zp.z, 2));

  for (const [x, z, w] of [[-34, -30, 7], [30, -70, 8], [-28, -84, 6], [36, -20, 6]]) cloud(world, x, 22, z, w, w * 0.7, x * z);

  // ---------- townspeople in the background (never on the puzzle path) ----------
  const PEOPLE = [
    { who: 'PeasantM', x: -18, y: 0, z: 1.95, rotY: Math.PI, clip: 'Idle_Rail_Loop' },
    { who: 'PeasantF2', x: 9.4, y: 0, z: 14.6, rotY: -2.2, clip: 'Idle_TalkingPhone_Loop' },
    { who: 'PeasantM2', x: -6, y: 0, z: 19.4, path: [[-6, 19.4], [7, 19.4]], carry: true },
    { who: 'RangerF', x: -30, y: 0, z: 3.2, path: [[-32, 3.2], [-21, 3.2]], speed: 0.9 },
    { who: 'PeasantM', x: -9, y: DY, z: -119, path: [[-9, -119], [9, -119]], speed: 0.85 },
    { who: 'RangerF', x: -2.5, y: DY, z: -46, rotY: -Math.PI / 2, clip: 'Idle_Rail_Loop' },
    { who: 'PeasantF', x: -3.4, y: DY, z: -61.2, rotY: 0.4, clip: 'Idle_Lantern_Loop' },
    { who: 'PeasantM', x: 4.7, y: DY, z: -106.0, rotY: Math.PI / 2, clip: 'Consume' },
    { who: 'RangerM', x: 5.1, y: DY, z: -108.7, rotY: 1.1, clip: 'Consume' },
    { who: 'PeasantF', x: -6.2, y: DY, z: -114.6, rotY: 0.8, clip: 'Yes' },
    { who: 'PeasantM2', x: -4.9, y: DY, z: -113.3, rotY: -2.3, clip: 'Idle_FoldArms_Loop' },
  ];
  const crowd = townspeople(world, PEOPLE);
  if (crowd) for (const q of PEOPLE) if (!q.path) colliders.push({ type: 'cyl', x: q.x, z: q.z, r: 0.35, top: (q.y ?? 0) + 1.5, bottom: q.y ?? 0, noGrab: true, noStep: true });

  // ---------- story ----------
  let api = null, doneT = -1;
  const seen = {};
  const once = (k, ctx, text, ms = 4200) => { if (seen[k]) return; seen[k] = true; ctx.caption(text, ms); };
  const inTown = (p) => p && p.z < -104 && p.y > DY - 1;
  let shadowAt = new THREE.Vector3(1e9, 0, 0);

  return {
    id: 'ch3-bridge',
    title: 'Chapter 3 · Regensburg — The Stone Bridge',
    colliders,
    stars,
    movers: {},
    spawn: { sun: new THREE.Vector3(-1.6, 0, 13), moon: new THREE.Vector3(1.6, 0, 13) },
    camYaw: { sun: 0, moon: 0 },
    lobbyCam: { cx: 0, cz: -50, r: 70, h: 32 },
    killY: -1.5,
    respawnNearPartner: true,
    portal: new THREE.Vector3(0, DY, -112),
    intro: {
      all: ['Chapter 3 · Regensburg', 'Autumn 2025: Sun still lives here… and the moving boxes for Halle are already out. 📦'],
      sun: 'Strongman ✦ pick up a box, put it down next to another to stack them',
      moon: 'Tape gun ✦ stand by a glowing post and tape it to its partner',
    },
    abilities: moving.abilities,
    moving,
    attach(a) { api = a; moving.attach(a); },
    story(ctx, t) {
      const st = ctx.save.ch3 || {};
      const P = [ctx.pos.sun, ctx.pos.moon].filter(Boolean);
      // a two-box stack anywhere
      if (moving.boxes.some((o) => !o.by && o.rest.y > 0.5 && o.rest.y < 1.5)) once('stack', ctx, 'A stack! Climb it like stairs 📦📦');
      if (P.some((p) => p.y > DY - 0.5 && p.z < -3 && p.z > -12)) once('deck', ctx, 'The Stone Bridge: almost 900 years old, and still standing. 🌉');
      if (!st.t?.t1 && P.some((p) => p.y > DY - 0.5 && p.z < -12 && p.z > -18)) once('gap', ctx, 'A broken arch! Moon: tape the two glowing posts together ✦');
      if (st.t?.t1) once('taped', ctx, 'Sticky, but it holds. Walk across! 💜', 3200);
      if (P.some((p) => p.z < -50 && p.z > -63 && p.y > DY - 0.5)) once('island', ctx, 'The river island. Up to the terrace: from there, a zipline goes over the water 🧗');
      if (st.t?.t3) once('zip', ctx, 'Stand by the post on the terrace and press Zip! ✦', 3600);
      if (P.some((p) => Math.hypot(p.x + 2.3, p.z + 87) < 3 && p.y > DY - 0.5)) once('mandl', ctx, 'The Bruckmandl: a little stone man who has been watching the cathedral for centuries.');
      if (!st.bridge && inTown(ctx.pos.sun) && inTown(ctx.pos.moon)) ctx.setSave('ch3/bridge', true);
      if (st.bridge && doneT < 0) {
        doneT = t;
        const lines = [['Regensburg\'s old town. Home… for a little while longer.', 3600], ['A few more weeks, and the boxes go to Halle. 📦➜🏙️', 3600]];
        let at = 0;
        for (const [l, ms] of lines) { setTimeout(() => ctx.caption(l, ms), at); at += ms + 150; }
        setTimeout(() => ctx.finish(), at + 200);
      }
    },
    update(serverMs, t, dt) {
      spinStars(stars, t);
      for (const a of anims) a(t, dt);
      crowd?.update(dt);
      // the sun's shadow box follows the player (the level is long)
      if (api) {
        const p = api.bodies[api.active].pos;
        if (Math.abs(p.z - shadowAt.z) > 6 || Math.abs(p.x - shadowAt.x) > 6) {
          shadowAt.set(Math.round(p.x / 6) * 6, 0, Math.round(p.z / 6) * 6);
          L.sun.target.position.set(shadowAt.x, DY * 0.5, shadowAt.z);
          L.sun.position.set(shadowAt.x + 24, 34, shadowAt.z + 10);
        }
      }
    },
  };
}

export const CH3_BOX = BOX;
