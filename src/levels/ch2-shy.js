// Chapter 2 · 12 October · Part 3 "Kann ich mit dir flirten?" — the boss: SHYNESS.
// A big, timid cloud with a blushing face drifts over a round night arena.
//   Phase 1: it sends out "awkward silence" shockwaves (jump over them). Flare together near it → it blushes. 3 hits.
//   Phase 2: it hides its face. Stand on the ☀ and ☾ courage pads at the same time → it peeks out for a few
//            seconds → flare together. 2 hits.
//   Phase 3: it sinks down, almost gone. Walk up to it holding hands → the confession, then "Babeee".
// Its path follows the shared clock; Sun's phone (or practice) decides hits and writes them to save.ch2.shy.
import * as THREE from 'three';
import { mat, add, rbox, islandMeshes, sign, cloud, sky, makeStar, spinStars, lights, meadow } from './common.js';
import { createLights, FLARE_R } from './light.js';

const AR = 13;
const PADS = { sun: new THREE.Vector3(-7, 0, -1), moon: new THREE.Vector3(7, 0, -1) };
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

export function buildCh2Shy(root, scene) {
  const colliders = [];
  const stars = [];
  const anims = [];
  const world = new THREE.Group();
  root.add(world);

  scene.fog = new THREE.Fog(new THREE.Color('#5a4890'), 50, 220);
  sky(root, {
    top: '#120f3a', mid: '#5a3f8f', low: '#e58fb4', neb1: '#ff8fc8', neb2: '#9a7bff', stars: 1, nebula: 1, cloud: 0xc8a6e0, far: false, cx: 0, cz: 0,
    lightDir: [0.2, 0.5, 1],
    planets: [['lilac', 0.0, 0.2, 240, 0.2, 2.0], ['ember', 0.9, 0.12, 230, 0.1, 1.6], ['rose', -0.9, 0.18, 250, -0.5, 1.4], ['giant', 2.6, 0.24, 300, 0.42], ['mint', -2.5, 0.3, 220, 0.3]],
  });
  lights(root, { sunColor: 0xe8d8ff, sunI: 1.9, hemiSky: 0xb0a4ff, hemiGround: 0xffb0c8, hemiI: 1.55, pos: [10, 30, 16], target: [0, 0, 0], extent: 30 });

  islandMeshes(world, 0, 0, AR, 0, 7, 0xb8a6e8, 0xd9a8c0, 0x6e5a9a);
  colliders.push({ type: 'cyl', x: 0, z: 0, r: AR - 0.05, top: 0, bottom: -1.2, safe: true, surface: 'grass' });
  meadow(world, [{ x: 0, z: 0, r: AR, flowers: 90, tint: 0xb9e6a0 }], [[PADS.sun.x, PADS.sun.z, 1.8], [PADS.moon.x, PADS.moon.z, 1.8]], { flowerCols: [0xffffff, 0xff8fbf, 0xc6b3ff, 0xffd27a] });
  // heart lanterns around the edge
  const heart = new THREE.Shape();
  heart.moveTo(0, -0.35); heart.bezierCurveTo(0.5, 0, 0.45, 0.45, 0, 0.25); heart.bezierCurveTo(-0.45, 0.45, -0.5, 0, 0, -0.35);
  const heartGeo = new THREE.ExtrudeGeometry(heart, { depth: 0.12, bevelEnabled: true, bevelSize: 0.04, bevelThickness: 0.04, bevelSegments: 3 });
  const heartMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(2.0, 0.9, 1.4) });
  const hearts = [];
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2, x = Math.sin(a) * (AR - 1), z = Math.cos(a) * (AR - 1);
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
  sign(world, -2.6, 10.6, 0.3, ['Flare together near it', 'to give it courage ✨']);
  stars.push(makeStar(world, 'c2-shy', 0, 1.6, 11.5, 0));

  const lit = createLights(world, colliders, []);
  const shy = makeShyness();
  shy.g.userData.noHide = true;
  world.add(shy.g);
  // the awkward-silence shockwave ring
  const wave = add(world, new THREE.TorusGeometry(1, 0.12, 8, 64).rotateX(Math.PI / 2), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 0.8, 1.4), transparent: true, opacity: 0.9 }), 0, 0.3, 0, { cast: false, receive: false });
  wave.visible = false;
  wave.userData.noHide = true;
  for (const [x, z, w] of [[-20, 10, 5], [20, -8, 6], [-8, -22, 5], [14, 18, 4]]) cloud(world, x, -3, z, w, w * 0.8, x * z);

  // ---------- state ----------
  let doneTime = null;
  let api = null, invulnUntil = 0, lastHits = -1, hitAnimT = 0, doneT = -1, knockT = 0, phase3Shown = false;
  const bossPos = new THREE.Vector3();
  const hitsOf = () => api?.save?.ch2?.shy || 0;
  const openUntil = () => api?.save?.ch2?.shyOpen || 0;
  const authority = () => api && (api.kind === 'solo' || api.role === 'sun');
  const WAVE_P = 4200;

  function bossAt(sNow, hits, out) {
    const s = sNow / 1000;
    if (hits >= 5) return out.set(0, 1.5 + Math.sin(s * 1.2) * 0.15, -1);            // phase 3: low and still
    if (hits >= 3) return out.set(Math.sin(s * 0.4) * 1.2, 3.8 + Math.sin(s) * 0.3, -1); // phase 2: hiding over the centre
    return out.set(Math.sin(s * 0.35) * 6, 2.8 + Math.sin(s * 1.1) * 0.5, -1 + Math.sin(s * 0.23 + 1) * 5);
  }
  const posOf = (r) => (api.mine().includes(r) ? api.bodies[r].pos : api.partnerPos(r === 'sun' ? 'moon' : 'sun'));
  const flat = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);

  const abilities = {
    label: lit.abilities.label,
    use: lit.abilities.use,
    onEvent: lit.abilities.onEvent,
    update(dt, sNow, t) {
      lit.abilities.update(dt, sNow, t);
      const hits = hitsOf();
      bossAt(sNow, hits, bossPos);
      if (!authority() || hits >= 6) return;
      const S = posOf('sun'), M = posOf('moon');
      if (!S || !M) return;
      const fl = lit.flareUntil;
      const open = hits < 3 || sNow < openUntil();
      // flare together near it
      if (hits < 5 && open && sNow > invulnUntil && fl.sun > sNow && fl.moon > sNow && flat(S, bossPos) < FLARE_R && flat(M, bossPos) < FLARE_R) {
        invulnUntil = Math.max(fl.sun, fl.moon) + 300;   // one hit per pair of flares
        api.setSave('ch2/shy', hits + 1);
        if (hits + 1 === 3 || hits + 1 === 5) api.setSave('ch2/shyOpen', 0);
      }
      // phase 2: both on their pads → it peeks out
      if (hits >= 3 && hits < 5 && sNow > openUntil() && flat(S, PADS.sun) < 1.5 && flat(M, PADS.moon) < 1.5) api.setSave('ch2/shyOpen', Math.round(sNow + 5500));
      // phase 3: hand in hand, right next to it
      if (hits === 5 && api.holding && flat(S, bossPos) < 3.6 && flat(M, bossPos) < 3.6) api.setSave('ch2/shy', 6);
    },
  };

  return {
    id: 'ch2-shy',
    title: 'Chapter 2 · 12 October — "Kann ich mit dir flirten?"',
    colliders,
    stars,
    movers: {},
    spawn: { sun: new THREE.Vector3(-3, 0, 9), moon: new THREE.Vector3(3, 0, 9) },
    camYaw: { sun: 0, moon: 0 },
    lobbyCam: { cx: 0, cz: 0, r: 26, h: 12 },
    killY: -14,
    portal: new THREE.Vector3(0, 0, -1),   // where the end-of-part portal opens
    respawnNearPartner: true,
    intro: { all: ['Part 3 · "Kann ich mit dir flirten?"', 'Around 10 PM, something big got in the way: SHYNESS.'] },
    abilities,
    lights: lit,
    attach(a) { api = a; lit.attach(a); },
    story(ctx, t) {
      const hits = (ctx.save.ch2 || {}).shy || 0;
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
      const hits = hitsOf(), open = hits < 3 || serverMs < openUntil();
      if (!api) return;
      bossAt(serverMs, hits, bossPos);
      // the boss: drift, bob, blush more with every hit, hide its face in phase 2
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
            if (b.pos.y < 0.7 && Math.abs(d - R) < 0.55) {
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
