// The overall "look": a soft rim light on every lit material (the toy/velvet glow on silhouettes),
// a colour-grade + vignette pass, and floating sparkles in the air around the player.
import * as THREE from 'three';
import { ShaderChunk } from 'three';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

// ---- rim light (patched into every Standard / Physical / Lambert / Phong / Toon material) ----
ShaderChunk.lights_fragment_end += /* glsl */`
#ifndef NO_RIM
{
  float rimF = pow(1.0 - saturate(dot(geometryNormal, geometryViewDir)), 3.0);
  totalEmissiveRadiance += (diffuseColor.rgb * 0.55 + vec3(0.06, 0.04, 0.08)) * rimF * 0.42;
}
#endif
`;

// ---- colour grade: gentle filmic contrast, split toning (plum shadows, peach highlights), vignette,
// light shafts added on top, depth of field, and dithering so the soft sky gradients never band on phones
export function gradePass() {
  return new ShaderPass({
    uniforms: {
      tDiffuse: { value: null }, tDepth: { value: null }, tShafts: { value: null },
      vignette: { value: 0.3 }, sat: { value: 1.12 }, contrast: { value: 0.22 }, aspect: { value: 1 },
      lift: { value: new THREE.Vector3(0.035, 0.012, 0.05) }, gain: { value: new THREE.Vector3(1.03, 1.0, 0.97) },
      shafts: { value: 0 }, shaftCol: { value: new THREE.Color(1, 0.9, 0.8) },
      dof: { value: 0 }, bgA: { value: 1.35 }, bgB: { value: 3.2 }, nearBlur: { value: 0 }, focus: { value: 10 }, near: { value: 0.1 }, far: { value: 700 },
      res: { value: new THREE.Vector2(1 / 1024, 1 / 1024) }, dofPx: { value: 9 }, time: { value: 0 },
    },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: /* glsl */`
      uniform sampler2D tDiffuse, tDepth, tShafts;
      uniform float vignette, sat, contrast, aspect, shafts, dof, bgA, bgB, nearBlur, focus, near, far, dofPx, time;
      uniform vec3 lift, gain, shaftCol; uniform vec2 res;
      varying vec2 vUv;
      float viewZ(vec2 uv){ float d = texture2D(tDepth, uv).x; return (near * far) / (far - d * (far - near)); }
      float coc(float z){
        float bg = smoothstep(focus * bgA, focus * bgB, z);
        float fg = smoothstep(focus * 0.6, focus * 0.25, z) * nearBlur;
        return max(bg, fg);
      }
      void main(){
        vec3 c = texture2D(tDiffuse, vUv).rgb;
        if (dof > 0.002) {
          float z = viewZ(vUv);
          float k = coc(z) * dof;
          if (k > 0.03 && z < far * 0.98) {
            vec3 acc = c; float ws = 1.0;
            for (int i = 0; i < 12; i++) {
              float fi = float(i);
              float r = sqrt((fi + 0.5) / 12.0), a = fi * 2.39996;
              vec2 uv = vUv + vec2(cos(a), sin(a)) * r * k * dofPx * res;
              float zs = viewZ(uv);
              float w = zs < z * 0.8 ? coc(zs) * dof : 1.0;     // sharp things in front never smear into the blur
              acc += texture2D(tDiffuse, uv).rgb * w; ws += w;
            }
            c = acc / ws;
          }
        }
        c += texture2D(tShafts, vUv).rgb * shaftCol * shafts;
        c = clamp(c, 0.0, 1.0);
        float l = dot(c, vec3(0.299, 0.587, 0.114));
        c = mix(vec3(l), c, sat);
        c = mix(c, c * c * (3.0 - 2.0 * c), contrast);                         // soft S-curve
        c = c * gain + lift * (1.0 - l) * (1.0 - l);                           // peach highs, plum shadows
        vec2 d = (vUv - 0.5) * vec2(aspect, 1.0) / max(aspect, 1.0);
        float v = smoothstep(0.85, 0.25, length(d) * 1.25);
        c *= mix(1.0 - vignette, 1.0, v);
        float n = fract(sin(dot(gl_FragCoord.xy + time * 61.0, vec2(12.9898, 78.233))) * 43758.5453);
        c += (n - 0.5) * (1.5 / 255.0);                                       // dither: no banding in the sky
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
}

// ---- sparkles drifting in the air around the player ----
function dotTexture() {
  const cv = document.createElement('canvas');
  cv.width = cv.height = 64;
  const g = cv.getContext('2d');
  const r = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  r.addColorStop(0, 'rgba(255,255,255,1)');
  r.addColorStop(0.25, 'rgba(255,240,250,0.8)');
  r.addColorStop(1, 'rgba(255,220,240,0)');
  g.fillStyle = r;
  g.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function makeMotes(scene, n = 90) {
  const box = 22;
  const pos = new Float32Array(n * 3), seed = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    pos[i * 3] = (Math.random() - 0.5) * box;
    pos[i * 3 + 1] = Math.random() * 7 - 1;
    pos[i * 3 + 2] = (Math.random() - 0.5) * box;
    seed[i] = Math.random() * 100;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mtl = new THREE.PointsMaterial({
    size: 0.16, map: dotTexture(), color: new THREE.Color(1.6, 1.35, 1.5), transparent: true, opacity: 0.8,
    depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
  });
  const pts = new THREE.Points(geo, mtl);
  pts.frustumCulled = false;
  scene.add(pts);
  const centre = new THREE.Vector3();
  return {
    points: pts,
    update(target, t, dt) {
      centre.lerp(target, 1 - Math.exp(-dt * 2));
      const p = geo.attributes.position.array;
      for (let i = 0; i < n; i++) {
        const s = seed[i];
        let x = p[i * 3] + Math.sin(t * 0.4 + s) * 0.25 * dt, y = p[i * 3 + 1] + (0.12 + Math.sin(s) * 0.06) * dt, z = p[i * 3 + 2] + Math.cos(t * 0.33 + s * 1.7) * 0.25 * dt;
        // wrap around a box that follows the player, so there are always some nearby
        const ox = x + pts.position.x - centre.x, oz = z + pts.position.z - centre.z;
        if (ox > box / 2) x -= box; else if (ox < -box / 2) x += box;
        if (oz > box / 2) z -= box; else if (oz < -box / 2) z += box;
        if (y > centre.y + 6) y -= 8; else if (y < centre.y - 2.5) y += 8;
        p[i * 3] = x; p[i * 3 + 1] = y; p[i * 3 + 2] = z;
      }
      geo.attributes.position.needsUpdate = true;
      mtl.opacity = 0.55 + 0.25 * Math.sin(t * 0.7);
    },
  };
}
