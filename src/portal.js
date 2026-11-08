// The end-of-part portal: a ring that is half sun (orange) and half moon (lilac), a swirling starry
// vortex inside, rising sparkles and a soft light. It grows out of the ground when a part is finished;
// step in together to travel on.
import * as THREE from 'three';

export function makePortal() {
  const g = new THREE.Group();
  const inner = new THREE.Group();   // faces the camera around the vertical axis
  g.add(inner);
  const R = 1.6;
  // ring: two half tori
  for (const [c, a0] of [[new THREE.Color(2.2, 1.2, 0.45), -Math.PI / 2], [new THREE.Color(1.3, 0.95, 2.3), Math.PI / 2]]) {
    const t = new THREE.Mesh(new THREE.TorusGeometry(R, 0.12, 14, 64, Math.PI), new THREE.MeshBasicMaterial({ color: c }));
    t.rotation.z = a0;
    inner.add(t);
  }
  // little sun and moon on the ring
  const sun = new THREE.Mesh(new THREE.SphereGeometry(0.2, 18, 12), new THREE.MeshBasicMaterial({ color: new THREE.Color(2.6, 1.6, 0.5) }));
  sun.position.set(-R, 0, 0.05);
  const moon = new THREE.Mesh(new THREE.SphereGeometry(0.18, 18, 12), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.8, 1.6, 2.6) }));
  moon.position.set(R, 0, 0.05);
  inner.add(sun, moon);
  // the vortex
  const vMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.DoubleSide,
    uniforms: { time: { value: 0 }, open: { value: 0 } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: /* glsl */`uniform float time, open; varying vec2 vUv;
      float h(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5); }
      void main(){
        vec2 p = vUv * 2.0 - 1.0; float r = length(p); if (r > 1.0) discard;
        float a = atan(p.y, p.x);
        float sw = sin(a * 3.0 + r * 9.0 - time * 3.0) * 0.5 + 0.5;
        vec3 warm = vec3(1.0, 0.62, 0.3), cool = vec3(0.6, 0.45, 1.0), core = vec3(1.0, 0.95, 1.0);
        vec3 c = mix(cool, warm, smoothstep(-0.3, 0.3, p.x + sin(time + r * 4.0) * 0.3));
        c = mix(c, core, smoothstep(0.55, 0.0, r) * 0.8);
        c *= 0.7 + sw * 0.6;
        // tiny stars swirling in
        vec2 q = vec2(a / 6.2832 + time * 0.05 + r * 0.3, r - time * 0.15) * vec2(26.0, 12.0);
        float st = step(0.93, h(floor(q))) * smoothstep(0.5, 0.0, length(fract(q) - 0.5));
        c += vec3(1.0) * st * 1.5;
        float alpha = smoothstep(1.0, 0.85, r) * open;
        gl_FragColor = vec4(c * 1.5, alpha * 0.92);
      }`,
  });
  const disc = new THREE.Mesh(new THREE.CircleGeometry(R - 0.05, 64), vMat);
  inner.add(disc);
  // a glowing pool on the ground
  const pool = new THREE.Mesh(new THREE.CircleGeometry(1.8, 48).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 1.1, 1.8), transparent: true, opacity: 0.35, depthWrite: false }));
  pool.position.y = -R - 0.25 + 0.03;
  g.add(pool);
  // rising sparkles
  const N = 40, pos = new Float32Array(N * 3), seed = new Float32Array(N);
  for (let i = 0; i < N; i++) seed[i] = Math.random();
  const pg = new THREE.BufferGeometry();
  pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const pts = new THREE.Points(pg, new THREE.PointsMaterial({ size: 0.12, color: new THREE.Color(2, 1.7, 2.2), transparent: true, opacity: 0.9, depthWrite: false }));
  g.add(pts);
  const light = new THREE.PointLight(0xffc8f0, 0, 10, 1.5);
  g.add(light);
  inner.position.y = 0;
  g.userData.noHide = true;
  g.traverse((o) => { o.castShadow = false; o.frustumCulled = false; o.userData.noHide = true; });

  let open = 0;
  return {
    g,
    R,
    /** t: time, k: 0→1 open amount target, camPos: to face the camera, busy: someone is inside */
    update(t, dt, camPos, busy) {
      open += (1 - open) * Math.min(1, dt * 1.6);
      const s = Math.max(0.001, open);
      inner.scale.setScalar(s * (1 + (busy ? Math.sin(t * 8) * 0.04 : 0)));
      inner.rotation.y = Math.atan2(camPos.x - g.position.x, camPos.z - g.position.z);
      inner.children[0].rotation.z = -Math.PI / 2 + t * 0.4;
      inner.children[1].rotation.z = Math.PI / 2 + t * 0.4;
      sun.position.set(Math.cos(t * 0.4 + Math.PI) * R, Math.sin(t * 0.4 + Math.PI) * R, 0.05);
      moon.position.set(Math.cos(t * 0.4) * R, Math.sin(t * 0.4) * R, 0.05);
      vMat.uniforms.time.value = t;
      vMat.uniforms.open.value = open;
      pool.material.opacity = 0.35 * open + (busy ? 0.25 : 0);
      light.intensity = 8 * open;
      const p = pg.attributes.position.array;
      for (let i = 0; i < N; i++) {
        const u = (seed[i] + t * (0.15 + seed[i] * 0.2)) % 1, a = seed[i] * 40 + t * 0.6;
        const rr = (1.2 + seed[i] * 0.8) * (1 - u * 0.4) * open;
        p[i * 3] = Math.cos(a) * rr; p[i * 3 + 1] = -R - 0.2 + u * 3.2; p[i * 3 + 2] = Math.sin(a) * rr;
      }
      pg.attributes.position.needsUpdate = true;
    },
  };
}
