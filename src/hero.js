// Sun and Moon as rigged characters (Quaternius Universal Base Characters + Modular Outfits, recoloured, with
// Sun's glasses and Moon's dress), animated with the Universal Animation Library clips. Same interface as the
// procedural dolls in characters.js: { root, kind, glow, height, kid, yaw, setYaw, land, spin, throwAnim, animate }.
// Poses the clips don't have (hanging from a ledge or zipline, lifting something over the head, gliding with arms
// out, reaching for the partner's hand) are made by aiming the arm bones after the clips have been applied.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { clone as cloneSkinned } from 'three/addons/utils/SkeletonUtils.js';
import { loadAnims, getClip, heroLook, addGlasses } from './npc.js';
import { MODE, SIZES, KID_SIZES } from './characters.js';

const tpl = new Map();
let p = null;
export function loadHeroes(version = '') {
  if (!p) {
    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);
    p = Promise.all([loader.loadAsync(`assets/npc/heroes.glb?v=${version}`), loadAnims(version)]).then(([g]) => {
      g.scene.traverse((o) => { if (o.userData?.n) o.name = o.userData.n; });
      const seen = new Set();
      g.scene.traverse((o) => {
        if (!o.isMesh) return;
        o.castShadow = true; o.receiveShadow = true; o.frustumCulled = false;
        const m = o.material;
        if (seen.has(m)) return;
        seen.add(m);
        m.metalness = 0; m.roughness = 0.85;
        if (/Hair|Eyes/.test(m.name)) m.alphaTest = 0.4;
        if (m.map) m.map.anisotropy = 8;
      });
      for (const c of [...g.scene.children]) tpl.set(c.name.replace(/^NPC_/, ''), c);
    }).catch((e) => { p = null; throw e; });
  }
  return p;
}
export const heroesReady = () => tpl.has('SunHero') && tpl.has('MoonHero') && !!getClip('Idle_Loop');

const damp = (a, b, k, dt) => a + (b - a) * (1 - Math.exp(-k * dt));
const _wq = new THREE.Quaternion(), _pq = new THREE.Quaternion(), _dq = new THREE.Quaternion(), _tq = new THREE.Quaternion();
const _a = new THREE.Vector3(), _d = new THREE.Vector3();
/** turn `bone` so the direction toward `child` points along world `dir` (blend w 0..1) */
function aim(bone, child, dir, w) {
  if (!bone || !child || w < 0.01) return;
  bone.updateWorldMatrix(true, false);
  bone.getWorldQuaternion(_wq);
  _a.copy(child.position).normalize().applyQuaternion(_wq);
  _dq.setFromUnitVectors(_a, _d.copy(dir).normalize());
  _tq.copy(_dq).multiply(_wq);
  bone.parent.getWorldQuaternion(_pq).invert();
  _tq.premultiply(_pq);
  bone.quaternion.slerp(_tq, w);
  bone.updateWorldMatrix(false, true);
}

const LOOPS = ['Idle_Loop', 'Walk_Loop', 'Jog_Fwd_Loop', 'Sprint_Loop', 'Jump_Loop', 'Sitting_Idle_Loop', 'Walk_Carry_Loop', 'Push_Loop', 'Swim_Fwd_Loop', 'Swim_Idle_Loop', 'Dance_Loop'];
const ONCE = ['Jump_Land', 'Roll', 'OverhandThrow', 'ClimbUp_1m', 'Jump_Start'];

export function makeHero(kind, { kid = false } = {}) {
  const isSun = kind === 'sun', who = isSun ? 'SunHero' : 'MoonHero';
  const H = (kid ? KID_SIZES : SIZES)[kind].h;
  const root = new THREE.Group();
  const flip = new THREE.Group();
  root.add(flip);
  const model = cloneSkinned(tpl.get(who));
  flip.add(model);
  const bone = (n) => model.getObjectByName(n);
  const B = {
    head: bone('Head'), pelvis: bone('pelvis'), spine: bone('spine_02'),
    ua: { l: bone('upperarm_l'), r: bone('upperarm_r') }, la: { l: bone('lowerarm_l'), r: bone('lowerarm_r') }, hand: { l: bone('hand_l'), r: bone('hand_r') },
  };
  // toy-ish proportions: a bigger head (more for the kid versions), then fit the height of the physics body
  if (B.head) B.head.scale.setScalar(kid ? 1.75 : 1.3);
  model.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(model, true);
  const s = (H * (kid ? 1.04 : 1.13)) / Math.max(0.5, box.max.y - Math.min(0, box.min.y));
  model.scale.setScalar(s);
  model.position.y = -Math.min(0, box.min.y) * s;
  model.updateMatrixWorld(true);
  heroLook(model, who);
  if (isSun) addGlasses(model);
  const dress = model.getObjectByName('dress');

  const glow = new THREE.PointLight(isSun ? 0xff8a5c : 0xb08cff, 0, 7, 2);
  glow.position.set(0, H * 0.6, 0);
  root.add(glow);

  // ---------- clips ----------
  const mixer = new THREE.AnimationMixer(model);
  const act = {}, wt = {};
  for (const n of [...LOOPS, ...ONCE]) {
    const c = getClip(n);
    if (!c) continue;
    const a = mixer.clipAction(c);
    if (ONCE.includes(n)) { a.setLoop(THREE.LoopOnce, 1); a.clampWhenFinished = true; }
    a.enabled = true;
    a.setEffectiveWeight(0);
    a.play();
    act[n] = a; wt[n] = 0;
  }
  if (act.Idle_Loop) { wt.Idle_Loop = 1; act.Idle_Loop.setEffectiveWeight(1); }
  // the root bone carries walk motion forward: keep the figure on the spot (the physics moves it)
  const rootBone = bone('root');
  let oneShot = null, oneT = 0, yaw = 0, spinT = 0, t = 0, loco = 'Idle_Loop';
  const ov = { up: 0, out: 0, hold: 0, holdSide: 1, tada: 0 };
  const fire = (n, timeScale = 1, dur = null) => {
    const a = act[n];
    if (!a) return;
    a.reset(); a.timeScale = timeScale; a.play();
    oneShot = n; oneT = dur ?? (a.getClip().duration / timeScale);
  };

  return {
    root, kind, glow, height: H, kid, rigged: true,
    get yaw() { return yaw; },
    setYaw(y) { yaw = y; root.rotation.y = y; },
    land(impact = 8) { if (impact > 9 && !oneShot) fire('Jump_Land', 2.2, 0.28); },
    spin() { spinT = 0.42; },
    throwAnim() { fire('OverhandThrow', 1.9); },
    /** st: { speed, grounded, vy, mode, hold } */
    animate(dt, st) {
      t += dt;
      const { speed, grounded, vy } = st;
      const mode = st.mode || 0;
      // which clip, and the arm poses on top
      let want = 'Idle_Loop', ts = 1, up = 0, out = 0, hold = 0, tada = 0;
      if (mode === MODE.carried) { want = 'Idle_Loop'; tada = 1; ts = 0.8; }   // standing tall on his hands, arms up (sitting made the legs poke through the dress)
      else if (mode === MODE.hang) { want = 'Jump_Loop'; up = 1; ts = 0.4; }
      else if (mode === MODE.climb) want = 'Jump_Loop';
      else if (mode === MODE.glide) { want = 'Jump_Loop'; out = 1; ts = 0.6; }
      else if (mode === MODE.dash) { want = 'Sprint_Loop'; ts = 1.6; }
      else if (mode === MODE.carry) { want = speed > 0.4 && grounded ? 'Walk_Loop' : grounded ? 'Idle_Loop' : 'Jump_Loop'; ts = Math.max(0.7, speed / (1.5 * s * 1.0)); up = 1; }
      else if (mode === MODE.wall) want = 'Jump_Loop';
      else if (!grounded) want = 'Jump_Loop';
      else {
        // walk ↔ jog with a little hysteresis
        if (speed < 0.25) loco = 'Idle_Loop';
        else if (loco === 'Jog_Fwd_Loop' ? speed < 2.6 : speed < 3.2) loco = 'Walk_Loop';
        else loco = 'Jog_Fwd_Loop';
        want = loco;
        ts = loco === 'Walk_Loop' ? THREE.MathUtils.clamp(speed / (1.55 * s / 0.8), 0.7, 1.6) : loco === 'Jog_Fwd_Loop' ? THREE.MathUtils.clamp(speed / (3.8 * s / 0.8), 0.75, 1.45) : 1;
      }
      if (st.hold && mode === MODE.normal) { hold = 1; ov.holdSide = st.hold < 0 ? 1 : -1; }
      if (!act[want]) want = 'Idle_Loop';
      // one-shots (landing, throw) take over briefly
      if (oneShot) {
        oneT -= dt;
        if (oneT <= 0 || (oneShot === 'Jump_Land' && (speed > 1.5 || !grounded))) { oneShot = null; }
      }
      const R = 12;
      for (const n of Object.keys(act)) {
        const target = oneShot ? (n === oneShot ? 1 : 0) : (n === want ? 1 : 0);
        wt[n] = damp(wt[n], target, oneShot === n ? 30 : R, dt);
        act[n].setEffectiveWeight(wt[n]);
        if (n === want && !oneShot) act[n].timeScale = ts;
      }
      mixer.update(Math.min(dt, 0.1));
      if (rootBone) { rootBone.position.x = 0; rootBone.position.z = 0; }

      // arm poses on top of the clip
      ov.up = damp(ov.up, up, 14, dt); ov.tada = damp(ov.tada, tada, 10, dt); ov.out = damp(ov.out, out, 10, dt); ov.hold = damp(ov.hold, hold, 10, dt);
      model.updateMatrixWorld(true);
      const q = root.getWorldQuaternion(_pq.clone());
      const side = (k) => new THREE.Vector3(k, 0, 0).applyQuaternion(q);
      for (const sd of ['l', 'r']) {
        const k = sd === 'l' ? 1 : -1;
        if (ov.up > 0.01) {
          const d = new THREE.Vector3(k * 0.18, 1, 0.12).applyQuaternion(q);
          aim(B.ua[sd], B.la[sd], d, ov.up); aim(B.la[sd], B.hand[sd], d, ov.up);
        }
        if (ov.tada > 0.01) {   // a happy "ta-da": both arms up in a V, waving a little
          const d = side(k * (0.75 + Math.sin(t * 3 + k) * 0.12)).add(new THREE.Vector3(0, 1, 0.08).applyQuaternion(q));
          aim(B.ua[sd], B.la[sd], d, ov.tada); aim(B.la[sd], B.hand[sd], d, ov.tada);
        }
        if (ov.out > 0.01) {
          const d = side(k).add(new THREE.Vector3(0, 0.15 + Math.sin(t * 6) * 0.08, 0));
          aim(B.ua[sd], B.la[sd], d, ov.out); aim(B.la[sd], B.hand[sd], d, ov.out);
        }
        if (ov.hold > 0.01 && k === ov.holdSide) {
          const d = side(k).multiplyScalar(0.75).add(new THREE.Vector3(0, -0.55, 0.15).applyQuaternion(q));
          aim(B.ua[sd], B.la[sd], d, ov.hold); aim(B.la[sd], B.hand[sd], d, ov.hold);
        }
      }
      if (dress) {
        const flare = mode === MODE.glide ? 1.18 : mode === MODE.carried ? 1.03 + Math.sin(t * 2.2) * 0.02 : !grounded ? 1.08 : 1 + Math.min(1, speed / 5.6) * 0.05;
        const f = damp(dress.scale.x, flare, 8, dt);
        dress.scale.set(f, 1, f);
      }

      // double-jump flourish: Sun does a front flip, Moon an elegant twirl
      if (spinT > 0) {
        spinT = Math.max(0, spinT - dt);
        const k = 1 - spinT / 0.42, e = k * k * (3 - 2 * k);
        if (isSun) { flip.position.y = H * 0.5; model.position.y = -H * 0.5 - Math.min(0, box.min.y) * s; flip.rotation.x = e * Math.PI * 2; }
        else flip.rotation.y = e * Math.PI * 2;
      } else {
        flip.rotation.set(0, 0, 0);
        flip.position.y = 0;
        model.position.y = -Math.min(0, box.min.y) * s;
      }
      void vy;
      glow.intensity = damp(glow.intensity, 0, 3, dt);
    },
  };
}
