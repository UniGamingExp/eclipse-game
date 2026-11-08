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
let p = null, pAnim = null;

/** the shared animation clips (both Universal Animation Libraries, see scripts/pack-npc.mjs) */
export function loadAnims(version = '') {
  if (!pAnim) {
    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);
    pAnim = loader.loadAsync(`assets/npc/npc-anim.glb?v=${version}`).then((anim) => { for (const a of anim.animations) clips.set(a.name, a); })
      .catch((e) => { pAnim = null; throw e; });
  }
  return pAnim;
}
export const getClip = (name) => clips.get(name);

function load(version = '') {
  if (!p) {
    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);
    p = Promise.all([loader.loadAsync(`assets/npc/npc.glb?v=${version}`), loadAnims(version)]).then(([lib]) => {
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
    }).catch((e) => { p = null; throw e; });
  }
  return p;
}
registerKit('npc', { load, ready: () => templates.size > 0 });

/** rectangular tortoiseshell glasses (Sun wears them), sized to the eyes and fixed to the head bone */
export function addGlasses(o) {
  const head = o.getObjectByName('Head');
  let eyes = null;
  o.traverse((m) => { if (m.isMesh && m.material?.name === 'MI_Eyes') eyes = m; });
  if (!head || !eyes) return;
  o.updateMatrixWorld(true);
  // precise box: runs the skinning on the vertices, so it is where the eyes really are
  const bb = new THREE.Box3().setFromObject(eyes, true);
  const c = bb.getCenter(new THREE.Vector3()), size = bb.getSize(new THREE.Vector3());
  const w = Math.max(size.x, 0.05);   // across both eyes
  const frame = new THREE.MeshStandardMaterial({ color: 0x5a3020, roughness: 0.35, metalness: 0.1 });
  const g = new THREE.Group();
  const lensW = w * 0.62, lensH = w * 0.38, t = w * 0.07;
  const shape = (W, H) => { const s = new THREE.Shape(); const r = H * 0.25; s.moveTo(-W / 2 + r, -H / 2); s.lineTo(W / 2 - r, -H / 2); s.quadraticCurveTo(W / 2, -H / 2, W / 2, -H / 2 + r); s.lineTo(W / 2, H / 2 - r); s.quadraticCurveTo(W / 2, H / 2, W / 2 - r, H / 2); s.lineTo(-W / 2 + r, H / 2); s.quadraticCurveTo(-W / 2, H / 2, -W / 2, H / 2 - r); s.lineTo(-W / 2, -H / 2 + r); s.quadraticCurveTo(-W / 2, -H / 2, -W / 2 + r, -H / 2); return s; };
  for (const sx of [-1, 1]) {
    const ring = shape(lensW + t * 2, lensH + t * 2);
    ring.holes.push(shape(lensW, lensH));
    const m = new THREE.Mesh(new THREE.ExtrudeGeometry(ring, { depth: t * 0.8, bevelEnabled: false }), frame);
    m.position.set(sx * (lensW / 2 + t * 1.6), 0, 0);
    g.add(m);
    const arm = new THREE.Mesh(new THREE.BoxGeometry(t * 0.7, t * 0.9, w * 1.25), frame);
    arm.position.set(sx * (lensW + t * 2.6), lensH * 0.2, -w * 0.62);
    g.add(arm);
  }
  const bridge = new THREE.Mesh(new THREE.BoxGeometry(t * 3.4, t * 0.9, t * 0.8), frame);
  bridge.position.set(0, lensH * 0.22, t * 0.4);
  g.add(bridge);
  // build it in world units at the eyes, then hand it to the head bone (attach keeps the world transform)
  const holder = o.parent;
  g.position.copy(holder.worldToLocal(new THREE.Vector3(c.x, c.y + lensH * 0.05, bb.max.z + t * 0.4)));
  holder.add(g);
  holder.updateMatrixWorld(true);
  head.attach(g);
}

/** Sun and Moon: their own (fairer) skin, dark hair; Moon gets a long flowing dress over the trousers */
export function heroLook(o, who) {
  const swap = new Map();
  o.traverse((m) => {
    if (!m.isMesh) return;
    const mat = m.material;
    if (!/Superhero|Regular|Hair/.test(mat.name)) return;
    if (!swap.has(mat)) {
      const c = mat.clone();
      if (/Hair/.test(mat.name)) c.color.setRGB(0.12, 0.08, 0.07);
      else {
        // the pack's skin texture is tanned: blend it toward their real (fair) skin, keeping the painted shading
        const tone = who === 'SunHero' ? new THREE.Vector3(1.0, 0.86, 0.78) : new THREE.Vector3(0.97, 0.8, 0.7);
        c.onBeforeCompile = (sh) => {
          sh.uniforms.skinTone = { value: tone };
          sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nuniform vec3 skinTone;')
            .replace('#include <map_fragment>', '#include <map_fragment>\n{ float l = dot(diffuseColor.rgb, vec3(0.3, 0.59, 0.11)); diffuseColor.rgb = mix(diffuseColor.rgb, skinTone * clamp(l / 0.42, 0.35, 1.25), 0.72); }');
        };
        c.customProgramCacheKey = () => 'skin' + who;
      }
      swap.set(mat, c);
    }
    m.material = swap.get(mat);
  });
  if (who !== 'MoonHero') return null;
  const pelvis = o.getObjectByName('pelvis');
  if (!pelvis) return null;
  o.updateMatrixWorld(true);
  const p = pelvis.getWorldPosition(new THREE.Vector3());
  const k = o.scale.x;
  void k;
  // a softly flared skirt with gentle folds
  const prof = [];
  for (let i = 0; i <= 14; i++) {
    const u = i / 14, y = 0.12 - u * 0.98;
    const r = 0.165 + 0.03 * Math.min(1, u * 6) + Math.pow(u, 1.6) * 0.25;
    prof.push(new THREE.Vector2(r * 1.06, y * 1.1));
  }
  const geo = new THREE.LatheGeometry(prof, 64);
  const pa = geo.attributes.position;
  for (let i = 0; i < pa.count; i++) {
    const x = pa.getX(i), z = pa.getZ(i), y = pa.getY(i);
    const a = Math.atan2(z, x), depth = Math.max(0, -y) / 1.08;
    const k = 1 + Math.sin(a * 9) * 0.045 * depth + Math.sin(a * 4 + 1.3) * 0.02 * depth;
    pa.setX(i, x * k); pa.setZ(i, z * k);
  }
  geo.computeVertexNormals();
  const dress = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x6b2fa6, roughness: 0.55, side: THREE.DoubleSide, emissive: 0x1a0830 }));
  dress.castShadow = true;
  dress.name = 'dress';
  dress.position.copy(o.worldToLocal(p.clone()));
  o.add(dress);
  return dress;
}

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
 *   x, y, z, rotY, clip, s = 0.74, path?: [[x,z],[x,z]] (walks back and forth), carry? (with a moving box) }]
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
    if (head) head.scale.setScalar(q.head ?? 1.4);
    parent.add(o);
    if (q.who === 'SunHero' || q.who === 'MoonHero') heroLook(o, q.who);
    if (q.who === 'SunHero') addGlasses(o);
    const mixer = new THREE.AnimationMixer(o);
    const clipName = q.path ? (q.carry ? 'Walk_Carry_Loop' : q.clip || 'Walk_Loop') : q.clip || 'Idle_FoldArms_Loop';
    const clip = clips.get(clipName);
    if (clip) {
      const act = mixer.clipAction(clip);
      act.play();
      act.time = Math.random() * clip.duration;
      act.timeScale = 0.9 + Math.random() * 0.2;
    }
    if (q.path && q.carry) {
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
          n.u += (n.dir * (n.q.speed ?? 1.0) * dt) / len;
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
