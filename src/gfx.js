// The lighting pass ("shader pack"): everything that makes the world look rich without new art.
//  • sky light: each level's sky is baked into an environment map, so every material picks up soft
//    coloured light from the sky around it and shiny things reflect it
//  • a glowing sun (or moon) low in the sky, with light shafts through anything in front of it
//  • crisp soft shadows that follow the players (instead of one huge blurry shadow map per level)
//  • depth of field for story moments (title screen, portal), and a light background softness in play
// The colour grade itself (contrast, split toning, vignette, dithering) lives in look.js.
import * as THREE from 'three';
import { Pass, FullScreenQuad } from 'three/addons/postprocessing/Pass.js';

// replaces broken pixels (NaN / infinity) with black; checks the float's bits, which shader compilers can't optimise away
export const SAFE_GLSL = /* glsl */`
bool badF(float x){ return (floatBitsToUint(x) & 0x7f800000u) == 0x7f800000u; }
vec3 safeC(vec3 c){ return (badF(c.r) || badF(c.g) || badF(c.b)) ? vec3(0.0) : clamp(c, 0.0, 32.0); }`;

// ---------------------------------------------------------------- light shafts (quarter resolution)
// Marches from each pixel towards the sun on screen and gathers the glowing sky it passes over.
// Anything with depth (trees, towers, characters, planets) blocks the sky, which is what carves the rays.
export class ShaftsPass extends Pass {
  constructor() {
    super();
    this.needsSwap = false;
    this.rt = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, depthBuffer: false });
    this.rt.texture.generateMipmaps = false;
    this.mat = new THREE.ShaderMaterial({
      uniforms: { tColor: { value: null }, tDepth: { value: null }, sun: { value: new THREE.Vector2(0.5, 0.8) }, aspect: { value: 1 }, amt: { value: 0 } },
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
      fragmentShader: /* glsl */`
        uniform sampler2D tColor, tDepth; uniform vec2 sun; uniform float aspect, amt; varying vec2 vUv;
        bool badF(float x){ return (floatBitsToUint(x) & 0x7f800000u) == 0x7f800000u; }
vec3 safeC(vec3 c){ return (badF(c.r) || badF(c.g) || badF(c.b)) ? vec3(0.0) : clamp(c, 0.0, 32.0); }
        vec3 sky(vec2 uv){
          if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) return vec3(0.0);
          if (texture2D(tDepth, uv).x < 0.99999) return vec3(0.0);
          vec2 d = (uv - sun) * vec2(aspect, 1.0);
          return safeC(texture2D(tColor, uv).rgb) * exp(-dot(d, d) * 7.0);
        }
        void main(){
          if (amt < 0.001) { gl_FragColor = vec4(0.0); return; }
          const int N = 24;
          vec2 st = (sun - vUv) / float(N) * 0.85;
          float j = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);   // dither the march start
          vec2 uv = vUv + st * j;
          vec3 acc = vec3(0.0); float w = 1.0;
          for (int i = 0; i < N; i++) { acc += sky(uv) * w; w *= 0.95; uv += st; }
          gl_FragColor = vec4(acc / float(N) * amt, 1.0);
        }`,
      depthTest: false, depthWrite: false,
    });
    this.quad = new FullScreenQuad(this.mat);
  }
  setSize(w, h) { this.rt.setSize(Math.max(1, Math.round(w / 4)), Math.max(1, Math.round(h / 4))); this.mat.uniforms.aspect.value = w / Math.max(1, h); }
  render(renderer, writeBuffer, readBuffer) {
    this.mat.uniforms.tColor.value = readBuffer.texture;
    this.mat.uniforms.tDepth.value = readBuffer.depthTexture;
    renderer.setRenderTarget(this.rt);
    this.quad.render(renderer);
  }
}

// shared with shaders that want to know where the sun is (the river's glints, ...)
export const skyU = { sunDir: { value: new THREE.Vector3(0, 0.3, -1).normalize() }, sunCol: { value: new THREE.Color(1, 0.9, 0.8) } };

/**
 * One broken pixel (a NaN from some lighting maths) is invisible on its own, but the bloom blurs it over
 * the whole screen and the frame goes black (seen in playtest 2). Make the bloom's first step skip them.
 */
export function guardBloom(bloom) {
  const m = bloom.materialHighPassFilter;
  m.fragmentShader = m.fragmentShader
    .replace('void main() {', SAFE_GLSL + '\nvoid main() {')
    .replace('vec4 texel = texture2D( tDiffuse, vUv );', 'vec4 texel = texture2D( tDiffuse, vUv ); texel.rgb = safeC( texel.rgb ); texel.a = 1.0;');
  if (!m.fragmentShader.includes('safeC( texel')) console.warn('guardBloom: shader changed');
  m.needsUpdate = true;
}

// ---------------------------------------------------------------- per level
const UP = new THREE.Vector3(0, 1, 0);
const tmp = new THREE.Vector3(), tmp2 = new THREE.Vector3(), fwd = new THREE.Vector3();

/**
 * renderer/scene/camera/composer from main; grade = the grade ShaderPass (look.js); shafts = ShaftsPass.
 * Returns { setLevel(world, def), setQuality(q), update(dt, t, opts) }.
 */
export function createGfx({ renderer, scene, camera, composer, grade, shafts }) {
  const pmrem = new THREE.PMREMGenerator(renderer);
  let env = null, sun = null, sunOff = new THREE.Vector3(), dome = null, q = { shadow: 2048, shafts: true, dof: true };
  const L = { sunDir: new THREE.Vector3(0, 0.3, -1), sunCol: new THREE.Color(1, 0.9, 0.8), shafts: 0.5, dofPlay: 0.35, env: 0.55 };
  let dofNow = 0, focusNow = 10;

  function setLevel(world, def = {}, camYaw = null) {
    const root = world.root;
    const look = { env: 0.42, hemi: 0.5, key: 1.12, aim: true, aimOff: 0.55, shafts: 0.9, sunAmt: 0.85, sunEl: 0.15, dofPlay: 0.45, ...(def.look || {}), ...(world.look || {}) };
    Object.assign(L, look);
    // find the level's key light and its sky dome
    sun = null; dome = null;
    const hemis = [];
    root.traverse((o) => {
      if (o.isDirectionalLight && o.castShadow && !sun) sun = o;
      if (o.isHemisphereLight) hemis.push(o);
      if (o.userData.skyDome) dome = o;
    });
    if (sun) {
      sunOff.copy(sun.position).sub(sun.target.position).normalize();
      L.sunCol.copy(sun.color);
      sun.intensity *= look.key;
      sun.shadow.radius = 4;
      sun.shadow.bias = -0.0003;
      sun.shadow.normalBias = 0.025;
      if (look.aim && camYaw != null) aimSun(camYaw); else placeSun(sunOff);
    }
    for (const h of hemis) h.intensity *= look.hemi;   // much of the sky light now comes from the env map
    if (!dome || look.env <= 0) scene.environment = null;
    applyShadow();
  }

  // the visible sun sits lower than the shadow light, so you actually see it (and its rays) while playing
  function placeSun(dir) {
    sunOff.copy(dir).normalize();
    tmp.set(sunOff.x, 0, sunOff.z).normalize();
    L.sunDir.copy(tmp).multiplyScalar(Math.cos(L.sunEl)).addScaledVector(UP, Math.sin(L.sunEl)).normalize();
    skyU.sunDir.value.copy(L.sunDir); skyU.sunCol.value.copy(L.sunCol);
    if (dome) {
      const u = dome.material.uniforms;
      u.sunDir.value.copy(L.sunDir);
      u.sunCol.value.copy(L.sunCol);
      u.sunAmt.value = L.sunAmt;
    }
    bakeEnv();
  }
  // bake the sky into an environment map (cheap: a few ms, once per level)
  function bakeEnv() {
    if (env) { env.dispose(); env = null; }
    if (!dome || L.env <= 0) return;
    const s = new THREE.Scene();
    s.add(new THREE.Mesh(dome.geometry, dome.material));
    env = pmrem.fromScene(s, 0.02, 1, 1000);
    scene.environment = env.texture;
    scene.environmentIntensity = L.env;
  }
  // golden hour: swing the sun round to sit a little to one side of where the camera starts out looking,
  // so the light comes towards you (glowing edges, long shadows, rays through the scenery)
  function aimSun(camYaw) {
    fwd.set(-Math.sin(camYaw), 0, -Math.cos(camYaw));
    const el = Math.asin(THREE.MathUtils.clamp(sunOff.y, -1, 1));
    const a0 = Math.atan2(sunOff.x, sunOff.z), af = Math.atan2(fwd.x, fwd.z);
    const off = L.aimOff, d1 = Math.abs(Math.atan2(Math.sin(af + off - a0), Math.cos(af + off - a0))), d2 = Math.abs(Math.atan2(Math.sin(af - off - a0), Math.cos(af - off - a0)));
    const az = d1 < d2 ? af + off : af - off;
    placeSun(tmp2.set(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el)));
  }

  function applyShadow() {
    if (!sun) return;
    const ext = q.shadow >= 2048 ? 26 : 22;
    const sc = sun.shadow.camera;
    sc.left = -ext; sc.right = ext; sc.top = ext; sc.bottom = -ext; sc.near = 1; sc.far = 120;
    sc.updateProjectionMatrix();
    if (sun.shadow.mapSize.x !== q.shadow) {
      sun.shadow.mapSize.set(q.shadow, q.shadow);
      sun.shadow.map?.dispose(); sun.shadow.map = null;
    }
  }

  function setQuality(qq) { q = qq; shafts.enabled = !!qq.shafts; applyShadow(); }

  // shadows follow the players: centre the shadow camera on them, snapped to whole texels (no shimmer)
  const right = new THREE.Vector3(), upv = new THREE.Vector3();
  function followShadow(centre) {
    if (!sun) return;
    const ext = sun.shadow.camera.right, texel = (2 * ext) / sun.shadow.mapSize.x;
    right.crossVectors(UP, sunOff).normalize(); upv.crossVectors(sunOff, right);
    const a = Math.round(centre.dot(right) / texel) * texel, b = Math.round(centre.dot(upv) / texel) * texel, c = centre.dot(sunOff);
    tmp.copy(right).multiplyScalar(a).addScaledVector(upv, b).addScaledVector(sunOff, c);
    if (sun.parent) sun.parent.worldToLocal(tmp);
    sun.target.position.copy(tmp);
    sun.position.copy(tmp).addScaledVector(sunOff, 60);
    sun.target.updateMatrixWorld();
  }

  /** opts: focus (Vector3 the camera looks at), story (0..1 depth-of-field strength for story moments) */
  function update(dt, t, { focus, story = 0 } = {}) {
    if (focus && api.follow) followShadow(focus);
    const g = grade.uniforms;
    // where the sun is on screen
    camera.getWorldDirection(fwd);
    const facing = fwd.dot(L.sunDir);
    tmp2.copy(camera.position).addScaledVector(L.sunDir, 400).project(camera);
    shafts.mat.uniforms.sun.value.set(tmp2.x * 0.5 + 0.5, tmp2.y * 0.5 + 0.5);
    const sa = facing > 0 ? THREE.MathUtils.smoothstep(facing, 0.05, 0.6) * L.shafts : 0;
    shafts.mat.uniforms.amt.value = q.shafts ? sa : 0;
    g.shafts.value = q.shafts ? 1 : 0;
    g.shaftCol.value.copy(L.sunCol);
    // depth of field: strong in story moments, a light background softness while playing
    const want = q.dof ? Math.max(story, L.dofPlay) : 0;
    dofNow += (want - dofNow) * Math.min(1, dt * 3);
    const fd = focus ? camera.position.distanceTo(focus) : 10;
    focusNow += (fd - focusNow) * Math.min(1, dt * 6);
    g.dof.value = dofNow;
    // story moments: the background melts away just behind the subject; in play only the far distance softens
    const k = THREE.MathUtils.clamp(story / Math.max(0.01, want), 0, 1);
    g.bgA.value = THREE.MathUtils.lerp(4, 1.35, k);
    g.bgB.value = THREE.MathUtils.lerp(12, 3.2, k);
    g.nearBlur.value = Math.min(1, story * 1.2);
    g.focus.value = focusNow;
    g.near.value = camera.near; g.far.value = camera.far;
    g.time.value = t % 1000;
    const rt = composer.readBuffer;                 // the target the scene is about to be drawn into
    g.tDepth.value = rt.depthTexture;
    g.tShafts.value = shafts.rt.texture;
  }

  const api = { setLevel, setQuality, update, follow: true, L, get sun() { return sun; } };
  return api;
}
