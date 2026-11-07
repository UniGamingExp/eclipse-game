// Nature models (trees, bushes, flowers, grass, rocks, pebbles, mushrooms) from the Quaternius
// Stylized Nature MegaKit (CC0), packed by scripts/pack-nature.mjs into assets/nature.glb (~1.6 MB).
// Loaded once at startup; levels place them with nature.place() (single) or nature.scatter() (instanced).
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { timeU } from './levels/hooks.js';

const models = new Map();

/** Wind sway in the vertex shader: the higher a vertex sits in the model, the more it moves. */
function addWind(material, perMeter) {
  material.onBeforeCompile = (sh) => {
    sh.uniforms.time = timeU;
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nuniform float time;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        {
          #ifdef USE_INSTANCING
            vec3 wp0 = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
          #else
            vec3 wp0 = (modelMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
          #endif
          float h = max(transformed.y, 0.0) * ${perMeter.toFixed(4)};
          float w = sin(time * 1.7 + wp0.x * 0.45 + wp0.z * 0.3 + transformed.y * 0.6) + 0.4 * sin(time * 2.9 + wp0.z * 0.8);
          transformed.x += w * h;
          transformed.z += cos(time * 1.3 + wp0.x * 0.5) * h * 0.7;
        }`);
  };
  material.customProgramCacheKey = () => 'wind' + perMeter;
}

export async function loadNature(url, onProgress) {
  const loader = new GLTFLoader();
  loader.setMeshoptDecoder(MeshoptDecoder);
  const gltf = await loader.loadAsync(url, (e) => onProgress?.(e.total ? e.loaded / e.total : 0));
  const seen = new Set();
  gltf.scene.traverse((o) => {
    if (!o.isMesh) return;
    const m = o.material;
    if (seen.has(m)) return;
    seen.add(m);
    m.vertexColors = false;   // COLOR_0 holds the kit's wind mask, not a colour
    m.roughness = 0.9;
    m.metalness = 0;
    if (/Leaves|Leaf/.test(m.name)) { addWind(m, 0.012); m.alphaTest = 0.45; m.color.setRGB(1.3, 1.38, 1.2); }
    else if (/Grass|Flowers/.test(m.name)) { addWind(m, 0.07); m.alphaTest = 0.4; m.color.setScalar(1.15); }
    else if (/Rock/.test(m.name)) m.color.setRGB(1.35, 1.28, 1.45);   // lighter, a little lavender
    if (m.map) m.map.anisotropy = 4;
  });
  // keep each model's own transform: mesh quantization stores the real size and offset there
  gltf.scene.updateMatrixWorld(true);
  for (const c of [...gltf.scene.children]) models.set(c.name, c);
  return models;
}

const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _s = new THREE.Vector3(), _p = new THREE.Vector3(), _e = new THREE.Euler();

export const nature = {
  has: (name) => models.has(name),
  names: () => [...models.keys()],

  /** One copy of a model (shares geometry and materials). */
  place(parent, name, x, y, z, { s = 1, rotY = 0, cast = true, receive = true } = {}) {
    const src = models.get(name);
    if (!src) return null;
    const o = new THREE.Group();
    o.name = name;
    o.add(src.clone());
    o.position.set(x, y, z);
    o.rotation.y = rotY;
    o.scale.setScalar(s);
    o.traverse((c) => { if (c.isMesh) { c.castShadow = cast; c.receiveShadow = receive; } });
    parent.add(o);
    return o;
  },

  /** Many copies of a model as instanced meshes. items: [{ x, y, z, s, rotY }]. */
  scatter(parent, name, items, { cast = false, receive = true } = {}) {
    const src = models.get(name);
    if (!src || !items.length) return [];
    const meshes = [];
    src.traverse((c) => { if (c.isMesh) meshes.push(c); });
    const out = [];
    for (const mesh of meshes) {
      const im = new THREE.InstancedMesh(mesh.geometry, mesh.material, items.length);
      items.forEach((it, i) => {
        _p.set(it.x, it.y ?? 0, it.z);
        _q.setFromEuler(_e.set(0, it.rotY ?? 0, 0));
        _s.setScalar(it.s ?? 1);
        _m.compose(_p, _q, _s).multiply(mesh.matrixWorld);   // the mesh's own offset inside the model
        im.setMatrixAt(i, _m);
      });
      im.castShadow = cast;
      im.receiveShadow = receive;
      im.userData.noHide = true;
      im.computeBoundingSphere();
      parent.add(im);
      out.push(im);
    }
    return out;
  },
};
