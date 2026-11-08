// Background townspeople: Quaternius Modular Character Outfits + Universal Base Characters (heads, hair) and
// Universal Animation Library 2 clips (all CC0), assembled by scripts/pack-npc.mjs into assets/npc/npc.glb
// (6 characters) and assets/npc/npc-anim.glb (shared clips). They never block the path and don't talk to the
// game: they lean on railings, chat on the phone, carry boxes back and forth, eat at the sausage kitchen…
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { clone as cloneSkinned } from 'three/addons/utils/SkeletonUtils.js';
import { registerKit } from './nature.js';

const templates = new Map(), clips = new Map();
let p = null;

function load(version = '') {
  if (!p) {
    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);
    p = Promise.all([loader.loadAsync(`assets/npc/npc.glb?v=${version}`), loader.loadAsync(`assets/npc/npc-anim.glb?v=${version}`)]).then(([lib, anim]) => {
      // the loader renames repeated bone names (pelvis_1 …); the packer stored the real ones in extras.n
      lib.scene.traverse((o) => { if (o.userData?.n) o.name = o.userData.n; });
      const seen = new Set();
      lib.scene.traverse((o) => {
        if (!o.isMesh) return;
        o.castShadow = true; o.receiveShadow = true;
        o.frustumCulled = false;   // skinned bounds don't follow the animation
        const m = o.material;
        if (seen.has(m)) return;
        seen.add(m);
        m.metalness = 0; m.roughness = 0.9;
        // softer, slightly pastel to sit better next to the toy dolls
        if (/Hair|Eyes/.test(m.name)) m.alphaTest = 0.4;
        // the pack's hair textures are grey and meant to be tinted
        if (m.name === 'MI_Hair_1') m.color.setRGB(0.32, 0.2, 0.13);
        else if (m.name === 'MI_Hair_2') m.color.setRGB(0.24, 0.14, 0.1);
        else m.color.multiplyScalar(1.08);
        if (m.map) m.map.anisotropy = 4;
      });
      for (const c of [...lib.scene.children]) templates.set(c.name.replace(/^NPC_/, ''), c);
      for (const a of anim.animations) clips.set(a.name, a);
    }).catch((e) => { p = null; throw e; });
  }
  return p;
}
registerKit('npc', { load, ready: () => templates.size > 0 });

/** a heavy-ish moving box in the arms (for the carry walk) */
function armsBox() {
  const g = new THREE.Group();
  const m = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.42, 0.42), new THREE.MeshStandardMaterial({ color: 0xd09a5e, roughness: 0.85 }));
  m.castShadow = true;
  g.add(m);
  const t = new THREE.Mesh(new THREE.BoxGeometry(0.51, 0.02, 0.1), new THREE.MeshStandardMaterial({ color: 0xe8c983 }));
  t.position.y = 0.215;
  g.add(t);
  return g;
}

/**
 * Put townspeople into a level. people: [{ who: 'PeasantM'|'PeasantF'|'RangerM'|'RangerF'|'PeasantM2'|'PeasantF2',
 *   x, y, z, rotY, clip, s = 0.74, path?: [[x,z],[x,z]] (walks back and forth, uses Walk_Carry_Loop + a box) }]
 * Returns { update(dt), list } (call update every frame), or null if the models aren't loaded.
 */
export function townspeople(parent, people) {
  if (!templates.size) return null;
  const list = [];
  for (const q of people) {
    const tpl = templates.get(q.who);
    if (!tpl) continue;
    const o = cloneSkinned(tpl);
    o.position.set(q.x, q.y ?? 0, q.z);
    o.rotation.y = q.rotY ?? 0;
    o.scale.setScalar(q.s ?? 0.74);
    o.userData.noHide = true;
    // toy proportions: a bigger head (hair and hoods grow with it), like the chunky dolls
    const head = o.getObjectByName('Head');
    if (head) head.scale.setScalar(1.4);
    parent.add(o);
    const mixer = new THREE.AnimationMixer(o);
    const clipName = q.path ? 'Walk_Carry_Loop' : q.clip || 'Idle_FoldArms_Loop';
    const clip = clips.get(clipName);
    if (clip) {
      const act = mixer.clipAction(clip);
      act.play();
      act.time = Math.random() * clip.duration;
      act.timeScale = 0.9 + Math.random() * 0.2;
    }
    if (q.path) {
      const b = armsBox();
      const chest = o.getObjectByName('spine_03');
      if (chest) { chest.add(b); b.position.set(0, 0.05, 0.42); b.scale.setScalar(1); }
    }
    // the root bone carries the walk forward; keep them on the spot and move the whole figure ourselves
    const rootBone = o.getObjectByName('root');
    list.push({ o, mixer, q, rootBone, u: Math.random(), dir: 1 });
  }
  return {
    list,
    update(dt) {
      for (const n of list) {
        n.mixer.update(Math.min(dt, 0.1));
        if (n.rootBone) { n.rootBone.position.x = 0; n.rootBone.position.z = 0; }
        const P = n.q.path;
        if (P) {
          const [a, b] = P, len = Math.hypot(b[0] - a[0], b[1] - a[1]);
          n.u += (n.dir * 1.0 * dt) / len;
          if (n.u > 1) { n.u = 1; n.dir = -1; } else if (n.u < 0) { n.u = 0; n.dir = 1; }
          n.o.position.x = a[0] + (b[0] - a[0]) * n.u;
          n.o.position.z = a[1] + (b[1] - a[1]) * n.u;
          const want = Math.atan2((b[0] - a[0]) * n.dir, (b[1] - a[1]) * n.dir);
          let d = want - n.o.rotation.y;
          d = Math.atan2(Math.sin(d), Math.cos(d));
          n.o.rotation.y += d * Math.min(1, dt * 5);
        }
      }
    },
  };
}
