// "Playground Isle": the test island with a teamwork tower, toy-block stairs, a ledge-grab block, a
// wall-jump chimney, a cloud raft to a mushroom isle, and stars. Good for practising every move.
import * as THREE from 'three';
import { heartShape } from '../effects.js';
import { smoother } from '../util.js';
import { mat, add, rbox, islandMeshes, tree, sign, cloud, sky, makeStar, spinStars, lights, meadow, decorate } from './common.js';
import { nature } from '../nature.js';

export function buildPlayground(root, scene) {
  const colliders = [];
  const stars = [];
  const anims = [];
  const world = new THREE.Group();
  root.add(world);

  scene.fog = new THREE.Fog(new THREE.Color('#f9cfe0'), 55, 190);
  sky(root);

  const { sun } = lights(root);

  // --- main island ---
  islandMeshes(world, 0, 0, 9, 0, 7, 0x8fd16e, 0xe0a67c, 0x8f6c9c);
  colliders.push({ type: 'cyl', x: 0, z: 0, r: 8.95, top: 0, bottom: -1.2, safe: true });

  // heart arch (the start gate)
  const archMat = mat(0xffe4ee), pink = mat(0xff7eb0, { emissive: 0xff4f93, emissiveIntensity: 0.35 });
  for (const x of [-1.7, 1.7]) {
    add(world, new THREE.CylinderGeometry(0.2, 0.24, 2.3, 14), archMat, x, 1.15, 3);
    add(world, rbox(0.62, 0.2, 0.62, 0.08), archMat, x, 0.1, 3);
    colliders.push({ type: 'cyl', x, z: 3, r: 0.26, top: 2.4, bottom: 0 });
  }
  const arc = add(world, new THREE.TorusGeometry(1.7, 0.17, 12, 40, Math.PI), archMat, 0, 2.3, 3);
  arc.rotation.z = 0;
  const heart = add(world, new THREE.ExtrudeGeometry(heartShape(1.1), { depth: 0.22, bevelEnabled: true, bevelSize: 0.06, bevelThickness: 0.06, bevelSegments: 3 }), pink, 0, 4.0, 2.89);
  anims.push((t) => { heart.rotation.y = Math.sin(t * 1.2) * 0.25; heart.position.y = 4.0 + Math.sin(t * 2) * 0.06; });

  // teamwork tower: a stack of toy blocks, too tall for one player (even with a ledge grab)
  const TOWER = 5.2;
  const layers = [0xf6b8c8, 0xffd59a, 0xbfe3a8, 0xa9c8f5, 0xd7c2f7];
  layers.forEach((col, i) => {
    const m = add(world, rbox(3.2, 1.04, 2.7, 0.14), mat(col), 0, 0.52 + i * 1.04, -5.25);
    m.rotation.y = (i % 2 ? 1 : -1) * 0.035;
  });
  add(world, rbox(3.3, 0.18, 2.8, 0.08), mat(0x8fd16e), 0, TOWER, -5.25);
  const towerCol = { type: 'box', x0: -1.6, x1: 1.6, z0: -6.6, z1: -3.9, top: TOWER + 0.08, bottom: 0, safe: true };
  colliders.push(towerCol);
  sign(world, -2.7, -2.5, 0.15, ['Too high?', 'Stack up, or Sun throws Moon!']);
  // once someone is on top, toy-block steps slide out so the other one can follow
  const popSteps = [];
  [[1.3, -6.1], [2.6, -5.2], [3.9, -4.3]].forEach(([h, z], i) => {
    const m = add(world, rbox(1.0, h, 0.86, 0.1), mat([0xffb3c7, 0xffd38c, 0x9fd0f5][i]), 1.1, h / 2, z);
    const col = { type: 'box', x0: 0, x1: 0, z0: z - 0.43, z1: z + 0.43, top: h, bottom: 0, safe: true, disabled: true };
    colliders.push(col);
    popSteps.push({ m, col, out: 0 });
  });
  let towerOccupied = false;
  anims.push((t, dt) => {
    for (const st of popSteps) {
      st.out = Math.min(1, st.out + (towerOccupied ? dt * 1.2 : 0));
      const x = 1.1 + smoother(st.out) * 1.0;
      st.m.position.x = x;
      st.col.x0 = x - 0.5; st.col.x1 = x + 0.5;
      st.col.disabled = st.out < 0.98;
    }
  });

  // ledge-grab block: too high to jump onto, but you can grab the edge and pull yourself up
  const GRAB = 3.3;
  [[0, 0xa9e0d2], [1, 0xf7c9a5], [2, 0xc7b3f5]].forEach(([i, col]) => add(world, rbox(2.2, 1.1, 2.2, 0.12), mat(col), 3.0, 0.55 + i * 1.1, 0.8));
  add(world, rbox(2.28, 0.14, 2.28, 0.06), mat(0x8fd16e), 3.0, GRAB, 0.8);
  colliders.push({ type: 'box', x0: 1.9, x1: 4.1, z0: -0.3, z1: 1.9, top: GRAB + 0.07, bottom: 0, safe: true });
  sign(world, 4.3, 2.6, -0.3, ['Jump, then', 'grab the edge!']);

  // wall-jump chimney: two tall walls, bounce between them to the top
  const WALL = 5.4;
  for (const [x0, x1] of [[-7.0, -6.0], [-4.0, -3.0]]) {
    for (let i = 0; i < 5; i++) {
      add(world, rbox(1.0, WALL / 5, 1.8, 0.1), mat([0x9fd0f5, 0xc7b3f5, 0xffb3c7, 0xffd38c, 0xb9e4a0][(i + (x0 < -5 ? 0 : 2)) % 5]), (x0 + x1) / 2, (i + 0.5) * (WALL / 5), -4.5);
    }
    add(world, rbox(1.06, 0.14, 1.86, 0.06), mat(0x8fd16e), (x0 + x1) / 2, WALL, -4.5);
    colliders.push({ type: 'box', x0, x1, z0: -5.4, z1: -3.6, top: WALL + 0.07, bottom: 0, safe: true, wallJump: true });
    // little white chevrons mark wall-jump walls
    for (let k = 0; k < 4; k++) {
      const face = x0 < -5 ? x1 + 0.01 : x0 - 0.01;
      const ch = add(world, new THREE.ConeGeometry(0.16, 0.3, 3), mat(0xffffff, { emissive: 0xffffff, emissiveIntensity: 0.25 }), face, 1.0 + k * 1.15, -4.5, { cast: false });
      ch.rotation.z = 0; ch.scale.set(1, 1, 0.25); ch.rotation.y = Math.PI / 2;
    }
  }
  sign(world, -5.0, -2.9, 0.1, ['Wall jump!', 'Jump from wall to wall']);

  // toy-block stairs up to a lookout
  const blockCols = [0xffb3c7, 0xffd38c, 0xb9e4a0, 0x9fd0f5, 0xc7b3f5];
  for (let i = 0; i < 5; i++) {
    const h = 0.4 * (i + 1), z = 4.1 - i * 0.9;
    add(world, rbox(1.6, h, 0.9, 0.1), mat(blockCols[i]), 5.8, h / 2, z);
    colliders.push({ type: 'box', x0: 5.0, x1: 6.6, z0: z - 0.45, z1: z + 0.45, top: h, bottom: 0, safe: true });
  }
  add(world, rbox(2.0, 2.0, 1.7, 0.14), mat(0xf7c9a5), 5.8, 1.0, -0.78);
  add(world, rbox(2.06, 0.14, 1.76, 0.06), mat(0x8fd16e), 5.8, 2.0, -0.78);
  colliders.push({ type: 'box', x0: 4.8, x1: 6.8, z0: -1.63, z1: 0.07, top: 2.07, bottom: 0, safe: true });
  add(world, new THREE.CylinderGeometry(0.04, 0.04, 1.6, 8), mat(0xffffff), 6.55, 2.8, -1.45);
  const flag = add(world, new THREE.ConeGeometry(0.22, 0.6, 3), mat(0xff7eb0), 6.55, 3.3, -1.15);
  flag.rotation.x = Math.PI / 2;
  anims.push((t) => { flag.rotation.z = Math.sin(t * 4) * 0.15; });

  // campfire + tent
  const fire = new THREE.Group();
  fire.position.set(-4.5, 0, 1.5);
  world.add(fire);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const s = add(fire, new THREE.DodecahedronGeometry(0.16, 0), mat(0xb9b3c9, { flatShading: true }), Math.cos(a) * 0.5, 0.08, Math.sin(a) * 0.5);
    s.rotation.set(i, i * 1.3, 0);
  }
  for (let i = 0; i < 3; i++) {
    const l = add(fire, new THREE.CylinderGeometry(0.06, 0.07, 0.7, 8), mat(0x8a5a3c), 0, 0.12, 0);
    l.rotation.order = 'YXZ';
    l.rotation.set(Math.PI / 2 - 0.2, (i / 3) * Math.PI, 0);
  }
  const flameA = add(fire, new THREE.ConeGeometry(0.22, 0.6, 10), new THREE.MeshBasicMaterial({ color: new THREE.Color(2.4, 1.0, 0.25) }), 0, 0.45, 0, { cast: false });
  const flameB = add(fire, new THREE.ConeGeometry(0.12, 0.38, 10), new THREE.MeshBasicMaterial({ color: new THREE.Color(2.6, 2.1, 0.7) }), 0, 0.38, 0, { cast: false });
  const fireLight = new THREE.PointLight(0xffa24a, 6, 7, 2);
  fireLight.position.set(0, 0.8, 0);
  fire.add(fireLight);
  anims.push((t) => {
    const f = 1 + Math.sin(t * 13) * 0.08 + Math.sin(t * 7.3) * 0.06;
    flameA.scale.set(1, f, 1); flameB.scale.set(1, 2 - f, 1);
    flameA.rotation.y = t * 2;
    fireLight.intensity = 5 + f * 2;
  });
  colliders.push({ type: 'cyl', x: -4.5, z: 1.5, r: 0.55, top: 0.25, bottom: 0 });
  for (const [x, z, ry] of [[-4.5, 3.0, 0], [-3.0, 1.2, Math.PI / 2.4]]) {
    const log = add(world, new THREE.CylinderGeometry(0.22, 0.22, 1.3, 12), mat(0xb07b55), x, 0.22, z);
    log.rotation.set(0, ry, Math.PI / 2);
    colliders.push({ type: 'box', x0: x - (ry ? 0.3 : 0.65), x1: x + (ry ? 0.3 : 0.65), z0: z - (ry ? 0.65 : 0.25), z1: z + (ry ? 0.65 : 0.25), top: 0.42, bottom: 0 });
  }
  const tent = new THREE.Group();
  tent.position.set(-6.3, 0, -1.2);
  tent.rotation.y = 0.9;
  world.add(tent);
  const tentBody = add(tent, new THREE.ConeGeometry(1.3, 1.9, 4, 1), mat(0xff9c8a, { flatShading: true }), 0, 0.95, 0);
  tentBody.rotation.y = Math.PI / 4;
  const door = add(tent, new THREE.ConeGeometry(0.5, 1.05, 3, 1), mat(0x6b4a7a, { flatShading: true }), 0, 0.5, 0.6, { cast: false });
  door.scale.z = 0.2;
  colliders.push({ type: 'cyl', x: -6.3, z: -1.2, r: 1.0, top: 1.8, bottom: 0, noStep: true });

  // trees and rocks
  [[-7.0, 3.9, 1.0, 0], [-2.5, -7.9, 1.05, 1], [3.4, -7.4, 0.95, 2], [-7.9, -0.3, 0.8, 2], [8.0, 2.4, 0.75, 3]].forEach(([x, z, s, t]) => {
    tree(world, x, 0, z, s, t);
    colliders.push({ type: 'cyl', x, z, r: 0.3 * s, top: 3.2 * s, bottom: 0, noStep: true });
  });
  const rockMat = mat(0xc5bcd9, { flatShading: true });
  [[2.6, -2.2, 0.45], [-1.8, -8.0, 0.4], [7.4, 4.4, 0.5], [-7.2, 5.2, 0.35], [1.2, 8.4, 0.3]].forEach(([x, z, s], i) => {
    const name = `Rock_Medium_${(i % 3) + 1}`;
    if (nature.has(name)) nature.place(world, name, x, 0, z, { s: s * 0.75, rotY: i * 2 });
    else {
      const r = add(world, new THREE.DodecahedronGeometry(1, 0), rockMat, x, s * 0.55, z);
      r.scale.set(s * 1.2, s, s);
      r.rotation.set(i, i * 2, 0);
    }
    colliders.push({ type: 'cyl', x, z, r: s * 1.05, top: s * 1.2, bottom: 0 });
  });

  // --- cloud raft (moving platform, timed by server clock so both players see the same thing) ---
  const raftZ = -3.5, raftA = 10.2, raftB = 18.4;
  const raft = cloud(world, raftA, 0.05, raftZ, 3, 3, 7);
  const raftCol = { type: 'box', id: 'raft', x0: 0, x1: 0, z0: raftZ - 1.5, z1: raftZ + 1.5, top: 0.05, bottom: -0.4, dx: 0, dy: 0, dz: 0 };
  colliders.push(raftCol);
  const raftX = (ms) => {
    const T = 9000, u = (((ms % T) + T) % T) / T * 9; // seconds within the cycle
    if (u < 1.5) return raftA;
    if (u < 4.5) return raftA + (raftB - raftA) * smoother((u - 1.5) / 3);
    if (u < 6) return raftB;
    return raftB + (raftA - raftB) * smoother((u - 6) / 3);
  };
  const movers = {
    raft: { pos: (ms, out = new THREE.Vector3()) => out.set(raftX(ms), 0.05, raftZ) },
  };
  sign(world, 6.6, -5.6, 0.35, ['Cloud raft →']);

  // --- mushroom isle ---
  islandMeshes(world, 24, -3.5, 4.2, 0, 4.5, 0x9ad877, 0xe5ae86, 0x9a78a6);
  colliders.push({ type: 'cyl', x: 24, z: -3.5, r: 4.15, top: 0, bottom: -1.2, safe: true });
  const mush = new THREE.Group();
  mush.position.set(24.5, 0, -2.5);
  world.add(mush);
  add(mush, new THREE.CylinderGeometry(0.36, 0.48, 0.8, 16), mat(0xfff1dc), 0, 0.4, 0);
  const capG = new THREE.Group();
  capG.position.y = 0.75;
  mush.add(capG);
  const capM = add(capG, new THREE.SphereGeometry(1.3, 32, 14, 0, Math.PI * 2, 0, Math.PI / 2), mat(0xff6f7d, { roughness: 0.6 }), 0, 0, 0);
  capM.scale.y = 0.46;
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2, rr = i === 0 ? 0 : 0.8;
    const dot = add(capG, new THREE.SphereGeometry(0.16, 12, 8), mat(0xffffff), Math.cos(a) * rr, i === 0 ? 0.6 : 0.42, Math.sin(a) * rr, { cast: false });
    dot.scale.y = 0.4;
  }
  const mushCol = { type: 'cyl', x: 24.5, z: -2.5, r: 1.25, top: 1.35, bottom: 0, bounce: 17, isMushroom: true };
  colliders.push(mushCol);
  let mushSquash = 0;
  anims.push((t, dt) => {
    mushSquash = Math.max(0, mushSquash - dt * 3);
    const s = 1 - Math.sin(mushSquash * Math.PI) * 0.25 * mushSquash;
    capG.scale.set(1 + (1 - s) * 0.6, s, 1 + (1 - s) * 0.6);
  });
  tree(world, 26.6, 0, -1.5, 0.8, 2);
  colliders.push({ type: 'cyl', x: 26.6, z: -1.5, r: 0.25, top: 2.6, bottom: 0, noStep: true });
  sign(world, 21.2, -0.6, -Math.PI / 2 + 0.5, ['Bounce!']);
  cloud(world, 24.5, 5.5, -7.5, 3.4, 3.4, 3);
  colliders.push({ type: 'box', x0: 22.8, x1: 26.2, z0: -9.2, z1: -5.8, top: 5.5, bottom: 5.0, safe: true });

  // flowers and swaying grass (instanced)
  const avoid = [[3.0, 0.8, 1.7], [-5.0, -4.5, 2.4], [2.1, -5.2, 1.0], [4.3, 2.6, 0.4], [-5.0, -2.9, 0.4], [0, 5.5, 1.4], [-1.7, 3, 0.5], [1.7, 3, 0.5], [0, -5.25, 2.3], [5.8, 2.2, 2.6], [5.8, -0.8, 1.5], [-4.5, 1.5, 1.2], [-6.3, -1.2, 1.5], [-4.5, 3.0, 0.8], [-3.0, 1.2, 0.8], [24.5, -2.5, 1.5], [-2.7, -2.5, 0.4]];
  meadow(world, [
    { x: 0, z: 0, r: 9, flowers: 150, tint: 0x86cc66 },
    { x: 24, z: -3.5, r: 4.2, flowers: 40, tint: 0x8fd16e },
  ], avoid, { tuftColor: 0x86cc66 });
  const treeSpots = [[-7.0, 3.9, 1], [-2.5, -7.9, 1], [3.4, -7.4, 1], [-7.9, -0.3, 1], [8.0, 2.4, 1], [26.6, -1.5, 1], [2.6, -2.2, 0.9], [-1.8, -8.0, 0.8], [7.4, 4.4, 1], [-7.2, 5.2, 0.8], [1.2, 8.4, 0.7]];
  decorate(world, [{ x: 0, z: 0, r: 9, n: 0.8 }, { x: 24, z: -3.5, r: 4.2 }], [...avoid.map(([x, z, r]) => [x, z, r + 0.3]), ...treeSpots,
    [-1.2, 1.2, 2.5, 9.5],   // the path in from the spawn through the heart arch
  ], { seed: 5 });

  // stars to collect
  [['ledge', 0, TOWER + 0.75, -5.25], ['lookout', 5.8, 2.7, -0.8], ['grab', 3.0, GRAB + 0.7, 0.8], ['chimney', -5.0, WALL + 0.3, -4.5], ['cloud', 24.5, 6.15, -7.5]]
    .forEach(([id, x, y, z], i) => stars.push(makeStar(world, id, x, y, z, i)));

  return {
    colliders,
    stars,
    movers,
    id: 'playground',
    title: 'Playground Isle',
    kid: false,
    spawn: { sun: new THREE.Vector3(-1.2, 0, 5.6), moon: new THREE.Vector3(1.2, 0, 5.6) },
    lobbyCam: { cx: 6, cz: -2, r: 24, h: 10 },
    killY: -14,
    sunLight: sun,
    bounce(col) { if (col.isMushroom) mushSquash = 1; },
    towerTop: { x0: -1.6, x1: 1.6, z0: -6.6, z1: -3.9, y: TOWER },
    setTowerOccupied(v) { if (v) towerOccupied = true; },
    /** serverMs: shared clock (ms). t: local seconds. */
    update(serverMs, t, dt) {
      const x = raftX(serverMs);
      raftCol.dx = (x - 1.5) - raftCol.x0; raftCol.dy = 0; raftCol.dz = 0;
      if (raftCol.x0 === 0) raftCol.dx = 0;
      raftCol.x0 = x - 1.5; raftCol.x1 = x + 1.5;
      raft.position.x = x;
      raft.position.y = 0.05 + Math.sin(t * 1.6) * 0.03;
      spinStars(stars, t);
      for (const a of anims) a(t, dt);
    },
  };
}
