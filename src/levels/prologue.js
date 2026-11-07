// Prologue · "Two Skies": little Sun and little Moon, each on their own childhood island, learn to
// move. When both look up through their telescopes, a bridge of stars grows between the islands;
// they meet in the middle and hold hands for the first time.
import * as THREE from 'three';
import { starShape } from '../effects.js';
import { mat, add, rbox, islandMeshes, tree, sign, cloud, sky, makeStar, spinStars, lights, meadow, decorate } from './common.js';
import { nature } from '../nature.js';
import { smoother } from '../util.js';

const CX = 30;        // islands sit at x = -30 (Sun) and +30 (Moon)
const R = 9;          // island radius
const TERRACE = 2.3;  // garden terrace height
const CENTER_Y = 4.4; // the starlight cloud in the middle

/** Oleander or jasmine bush: a cluster of green blobs dotted with flowers. */
function bush(parent, x, z, s, flowerColor) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.scale.setScalar(s);
  parent.add(g);
  if (nature.has('Bush_Common_Flowers')) nature.place(g, 'Bush_Common_Flowers', 0, 0, 0, { s: 0.8, rotY: x * 0.7 });
  else {
    const leaf = new THREE.IcosahedronGeometry(1, 1);
    [[0, 0.55, 0, 0.6], [0.45, 0.45, 0.2, 0.45], [-0.4, 0.5, -0.1, 0.48], [0.1, 0.95, -0.05, 0.4]].forEach(([x, y, zz, r], i) => {
      const m = add(g, leaf, mat([0x5fae5a, 0x6cbb63, 0x58a456][i % 3], { flatShading: true }), x, y, zz);
      m.scale.setScalar(r);
    });
  }
  const fl = new THREE.SphereGeometry(0.075, 8, 6);
  for (let i = 0; i < 16; i++) {
    const a = i * 2.39, h = 0.3 + (i % 5) * 0.17, rr = 0.55 + (i % 3) * 0.08;
    add(g, fl, mat(flowerColor, { emissive: flowerColor, emissiveIntensity: 0.15 }), Math.cos(a) * rr, h + 0.2, Math.sin(a) * rr, { cast: false });
  }
  return g;
}

function palm(parent, x, z, s = 1) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.scale.setScalar(s);
  parent.add(g);
  for (let i = 0; i < 6; i++) {
    const seg = add(g, new THREE.CylinderGeometry(0.17 - i * 0.012, 0.2 - i * 0.012, 0.6, 9), mat(0xb08560), Math.sin(i * 0.5) * 0.08 * i, 0.3 + i * 0.56, 0);
    seg.rotation.z = -0.05 * i;
  }
  for (let i = 0; i < 7; i++) {
    const pivot = new THREE.Group();
    pivot.position.set(0.25, 3.45, 0);
    pivot.rotation.y = (i / 7) * Math.PI * 2;
    g.add(pivot);
    const frond = add(pivot, new THREE.ConeGeometry(0.3, 2.0, 4), mat(0x6fb85f, { flatShading: true }), 0.95, -0.2, 0);
    frond.scale.set(1, 1, 0.22);
    frond.rotation.z = -1.25;
  }
  return g;
}

function telescope(parent, x, y, z, aimX) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  parent.add(g);
  const brass = mat(0xd6a94a, { metalness: 0.6, roughness: 0.35 });
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2;
    const leg = add(g, new THREE.CylinderGeometry(0.03, 0.03, 1.15, 6), mat(0x8a5a3c), Math.cos(a) * 0.22, 0.55, Math.sin(a) * 0.22);
    leg.rotation.set(Math.sin(a) * 0.25, 0, -Math.cos(a) * 0.25);
  }
  const tube = add(g, new THREE.CylinderGeometry(0.09, 0.13, 1.1, 14), brass, 0, 1.25, 0);
  tube.rotation.z = -Math.sign(aimX) * 0.9;
  add(g, new THREE.CylinderGeometry(0.135, 0.135, 0.06, 14), mat(0x3a2f4a), Math.sign(aimX) * 0.43, 1.55, 0).rotation.z = -Math.sign(aimX) * 0.9;
  return g;
}

/** One of the two childhood islands. dir = +1 builds towards +x (Sun), -1 towards -x (Moon). */
function childhoodIsland(world, colliders, stars, role) {
  const sun = role === 'sun';
  const dir = sun ? 1 : -1;
  const cx = -dir * CX;
  const X = (lx) => cx + dir * lx;
  const grass = sun ? 0x8fd16e : 0xa6d98a;
  islandMeshes(world, cx, 0, R, 0, 7, grass, sun ? 0xe0a67c : 0xd9a8a0, sun ? 0x8f6c9c : 0x7c6aa8);
  colliders.push({ type: 'cyl', x: cx, z: 0, r: R - 0.05, top: 0, bottom: -1.2, safe: true });

  // tiled courtyard path
  const tile = new THREE.BoxGeometry(0.9, 0.06, 0.9);
  for (let i = 0; i < 9; i++) for (let j = -1; j <= 1; j++) {
    if ((i + j) % 2 && Math.random() < 0.3) continue;
    add(world, tile, mat((i + j) % 2 ? 0xe8dccb : 0xd8c6b2), X(-7 + i * 0.95), 0.03, j * 0.95, { cast: false });
  }

  // garden gate with flowers (his: pink oleander; hers: white jasmine and lilac)
  const flower = sun ? 0xff6fa8 : 0xffffff;
  for (const s of [-1, 1]) {
    add(world, rbox(0.42, 1.6, 0.42, 0.06), mat(0xf4efe6), X(-5), 0.8, s * 1.35);
    bush(world, X(-5.6), s * 2.4, 1.15, flower);
    if (!sun) bush(world, X(-4.4), s * 2.6, 0.8, 0xc6a3f0);
    colliders.push({ type: 'cyl', x: X(-5), z: s * 1.35, r: 0.3, top: 1.6, bottom: 0, noStep: true });
  }
  for (const s of [-1, 1]) { // the open gate wings
    const wing = new THREE.Group();
    wing.position.set(X(-5), 0, s * 1.15);
    wing.rotation.y = s * dir * 1.2;
    world.add(wing);
    for (let k = 0; k < 6; k++) add(wing, new THREE.CylinderGeometry(0.02, 0.02, 1.1, 5), mat(0x4a3b52, { metalness: 0.5, roughness: 0.4 }), 0, 0.6, -s * (0.1 + k * 0.17));
    add(wing, new THREE.BoxGeometry(0.04, 0.05, 1.0), mat(0x4a3b52), 0, 1.1, -s * 0.5);
  }
  if (sun) palm(world, X(-6.5), -4.2, 0.85); else tree(world, X(-6.5), 0, -4.2, 0.9, 1);
  tree(world, X(-2), 0, -6.6, 0.8, 2);
  colliders.push({ type: 'cyl', x: X(-6.5), z: -4.2, r: 0.25, top: 3, bottom: 0, noStep: true });
  colliders.push({ type: 'cyl', x: X(-2), z: -6.6, r: 0.25, top: 2.6, bottom: 0, noStep: true });

  // 1. a low hedge: jump
  const hw = Math.sqrt(R * R - 2.6 * 2.6) - 0.5;
  add(world, rbox(0.6, 0.85, hw * 2, 0.2), mat(sun ? 0x5fae5a : 0xb79be0), X(-2.6), 0.425, 0);
  colliders.push({ type: 'box', x0: Math.min(X(-2.9), X(-2.3)), x1: Math.max(X(-2.9), X(-2.3)), z0: -hw, z1: hw, top: 0.85, bottom: 0, noStep: true });
  const face = -dir * Math.PI / 2; // signs face the player walking in
  sign(world, X(-3.9), 2.3, face + 0.35 * dir, ['Jump!']);

  // 2. the garden terrace: jump twice, or grab the edge
  const tw = Math.sqrt(R * R - 4.5 * 4.5) - 0.4;
  const wallMat = mat(sun ? 0xf2e3cf : 0xeadcf2);
  add(world, rbox(5, TERRACE, tw * 2, 0.15), wallMat, X(2), TERRACE / 2, 0);
  add(world, rbox(5.08, 0.16, tw * 2 + 0.08, 0.06), mat(grass), X(2), TERRACE, 0);
  colliders.push({ type: 'box', x0: Math.min(X(-0.5), X(4.5)), x1: Math.max(X(-0.5), X(4.5)), z0: -tw, z1: tw, top: TERRACE + 0.08, bottom: 0, safe: true });
  sign(world, X(-1.4), 2.7, face + 0.3 * dir, ['Too high? Jump twice,', 'or grab the edge!']);
  for (const z of [-3.2, 3.2]) bush(world, X(2.6), z, 0.7, flower).position.y = TERRACE;

  // 3. the leap to the lookout: double jump + dash (or float, for Moon)
  const s3 = sign(world, X(3.7), 2.6, face + 0.25 * dir, sun ? ['Jump, jump again,', 'then DASH »'] : ['Jump, then hold Jump', 'to float (or dash »)']);
  s3.position.y = TERRACE;

  // 4. the lookout: a little cloud deck with a telescope pointing at the middle of the sky
  const lx = 14.5;
  cloud(world, X(lx), TERRACE, 0, 3.2, 3.2, sun ? 5 : 9);
  colliders.push({ type: 'box', x0: Math.min(X(lx - 1.6), X(lx + 1.6)), x1: Math.max(X(lx - 1.6), X(lx + 1.6)), z0: -1.6, z1: 1.6, top: TERRACE, bottom: TERRACE - 0.5, safe: true });
  const scope = telescope(world, X(lx + 0.8), TERRACE, 0.5, dir);
  stars.push(makeStar(world, sun ? 'pro-sun' : 'pro-moon', X(lx - 0.6), TERRACE + 1.0, -0.6, sun ? 0 : 1));

  return { cx, dir, scopePos: new THREE.Vector3(X(lx + 0.8), TERRACE, 0.5), scope };
}

export function buildPrologue(root, scene) {
  const colliders = [];
  const stars = [];
  const anims = [];
  const world = new THREE.Group();
  root.add(world);

  // dusk sky: warm horizon, indigo above, first stars
  scene.fog = new THREE.Fog(new THREE.Color('#e9a9c6'), 60, 210);
  sky(root, {
    top: '#2c2f7a', mid: '#f4a9c6', low: '#ffd7b5', neb1: '#9a7bff', neb2: '#ff7fb8', stars: 1, nebula: 0.8, cloud: 0xf3c2dd, far: false, cx: 0,
    lightDir: [0.2, 0.35, 1],
    planets: [
      ['giant', 0.0, 0.17, 300, 0.42],     // straight ahead from the middle cloud, between the two islands
      ['lilac', 1.45, 0.1, 230, 0.2, 1.5],  // over Moon's side (+x): what Sun sees at the start (her colour)
      ['ember', -1.45, 0.1, 220, 0.1, 2.2], // …and a red one over Sun's side (-x): what Moon sees
      ['ocean', 2.6, 0.12, 270, 0.3],
      ['mint', -2.4, 0.33, 220, 0.3],
      ['rose', 3.6, 0.2, 250, -0.5],
    ],
  });
  lights(root, { sunColor: 0xffd2b0, sunI: 2.3, hemiSky: 0xc9c4ff, hemiGround: 0xffc6a8, hemiI: 1.35, pos: [0, 28, 22], target: [0, 0, 0], extent: 46 });

  const islands = { sun: childhoodIsland(world, colliders, stars, 'sun'), moon: childhoodIsland(world, colliders, stars, 'moon') };
  meadow(world, [
    { x: -CX, z: 0, r: R, flowers: 90, tufts: 150 },
    { x: CX, z: 0, r: R, flowers: 90, tufts: 150 },
  ], [[-CX - 6, 0, 1.4], [CX + 6, 0, 1.4], [-CX + 2, 0, 7.2], [CX - 2, 0, 7.2], [-CX - 2.6, 0, 9], [CX + 2.6, 0, 9]],
  { flowerCols: [0xff8fbf, 0xffffff, 0xffe27a, 0xc6b3ff, 0xff6fa8] });
  // nature models: flowers, ferns, pebbles, rim grass (kept off the path, the terrace and the gate)
  const keepClear = [];
  for (const dir of [1, -1]) {
    const X = (lx) => -dir * CX + dir * lx;
    keepClear.push(
      [X(-7.8), X(0.2), -1.8, 1.8],      // courtyard path
      [X(-3.1), X(4.8), -9, 9],          // hedge + terrace
      [X(-5.6), 2.4, 1.3], [X(-5.6), -2.4, 1.3], [X(-4.4), 2.6, 1], [X(-4.4), -2.6, 1], [X(-5), 1.35, 0.6], [X(-5), -1.35, 0.6],
      [X(-6.5), -4.2, 1.3], [X(-2), -6.6, 1.3], [X(-3.9), 2.3, 0.8], [X(-1.4), 2.7, 0.7],
    );
  }
  decorate(world, [{ x: -CX, z: 0, r: R }, { x: CX, z: 0, r: R }], keepClear, { seed: 3 });

  // the bridge of stars and the starlight cloud in the middle (appear later)
  const starTile = new THREE.ExtrudeGeometry(starShape(0.85, 0.45), { depth: 0.18, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.05, bevelSegments: 2 });
  starTile.rotateX(-Math.PI / 2);
  const tileMat = new THREE.MeshStandardMaterial({ color: 0xfff1b8, emissive: 0xffc94d, emissiveIntensity: 2.2, roughness: 0.4 });
  const bridge = [];
  for (const role of ['sun', 'moon']) {
    const d = islands[role].dir;
    for (let i = 0; i < 6; i++) {
      const x = -d * (12.6 - i * 1.65), y = TERRACE + 0.25 + i * 0.36, z = Math.sin(i * 1.3) * 0.6;
      const m = add(world, starTile, tileMat, x, y - 0.2, z, { receive: false });
      m.scale.setScalar(0.001);
      const col = { type: 'cyl', x, z, r: 0.78, top: y, bottom: y - 0.3, disabled: true, safe: true };
      colliders.push(col);
      bridge.push({ m, col, delay: i * 0.35 + (role === 'moon' ? 0.15 : 0), y });
    }
  }
  const center = new THREE.Group();
  world.add(center);
  center.position.set(0, CENTER_Y, 0);
  center.scale.setScalar(0.001);
  cloud(center, 0, 0, 0, 7, 7, 12);
  const halo = add(center, new THREE.TorusGeometry(3.7, 0.06, 8, 64), new THREE.MeshBasicMaterial({ color: new THREE.Color(2.4, 2.0, 1.1) }), 0, 0.05, 0, { cast: false });
  halo.rotation.x = Math.PI / 2;
  const centerCol = { type: 'cyl', x: 0, z: 0, r: 3.5, top: CENTER_Y, bottom: CENTER_Y - 0.6, disabled: true, safe: true };
  colliders.push(centerCol);

  let bridgeT = -1;          // >= 0 once the bridge is growing
  let shownBridge = false, promptAt = 0, finaleT = -1, lookedShown = { sun: false, moon: false };

  anims.push((t, dt) => {
    if (bridgeT >= 0) {
      bridgeT += dt;
      for (const b of bridge) {
        const k = Math.min(1, Math.max(0, (bridgeT - b.delay) / 0.6));
        b.m.scale.setScalar(Math.max(0.001, smoother(k)));
        b.m.rotation.y = (1 - k) * 2;
        b.col.disabled = k < 0.7;
      }
      const kc = Math.min(1, Math.max(0, (bridgeT - 2.2) / 1.0));
      center.scale.setScalar(Math.max(0.001, smoother(kc)));
      centerCol.disabled = kc < 0.8;
      halo.rotation.z = t * 0.3;
    }
  });

  const onCenter = (p) => p && p.y > CENTER_Y - 0.6 && Math.hypot(p.x, p.z) < 3.6;

  return {
    id: 'prologue',
    title: 'Prologue · Two Skies',
    kid: true,
    colliders,
    stars,
    movers: {},
    spawn: { sun: new THREE.Vector3(-CX - 6.5, 0, 0), moon: new THREE.Vector3(CX + 6.5, 0, 0) },
    camYaw: { sun: -Math.PI / 2, moon: Math.PI / 2 },
    lobbyCam: { cx: 0, cz: 0, r: 46, h: 16 },
    killY: -14,
    intro: { all: ['Prologue · Two Skies', 'Long before they met…'], sun: 'Little Sun, in his garden', moon: 'Little Moon, in her garden' },
    bounce() {},
    /**
     * Story beats. ctx: { roles (local), pos: {sun, moon} (known positions), holding, save, setSave, caption, finish }
     */
    story(ctx, t) {
      const st = ctx.save.prologue || {};
      for (const r of ctx.roles) {
        const p = ctx.pos[r];
        if (p && p.y > TERRACE - 0.3 && Math.hypot(p.x - islands[r].scopePos.x, p.z - islands[r].scopePos.z) < 1.8 && !st[r + 'Look']) {
          ctx.setSave(`prologue/${r}Look`, true);
        }
        if (st[r + 'Look'] && !lookedShown[r] && !(st.sunLook && st.moonLook)) {
          lookedShown[r] = true;
          ctx.caption('You look up at the sky… someone far away is looking at the same stars ✨', 4500);
        }
      }
      if (st.sunLook && st.moonLook && bridgeT < 0) bridgeT = 0;
      if (bridgeT >= 0 && !shownBridge) {
        shownBridge = true;
        ctx.caption('A bridge of stars appears. Meet in the middle!', 4500);
      }
      const both = onCenter(ctx.pos.sun) && onCenter(ctx.pos.moon);
      if (both && !st.done) {
        if (ctx.holding) ctx.setSave('prologue/done', true);
        else if (t > promptAt) { promptAt = t + 7; ctx.caption('Stand close and tap ♥ to hold hands', 4000); }
      }
      if (st.done && finaleT < 0 && bridgeT >= 0) {
        finaleT = t;
        ctx.caption('Two kids. Two cities. One sky.', 3200);
        setTimeout(() => ctx.caption('One day, they would find each other…', 3200), 3400);
        setTimeout(() => ctx.finish(), 7000);
      }
    },
    update(serverMs, t, dt) {
      spinStars(stars, t);
      for (const a of anims) a(t, dt);
    },
  };
}
