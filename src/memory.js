// The Sky Between (story layer, see the project doc "eclipse-sky-between"):
//  • every chapter level is a memory the Distance has half eaten: it starts faded, and its colours come
//    back as Sun and Moon find stars and reach checkpoints
//  • finishing a part sends a wave of colour out from the portal and ties a golden thread into the sky
//  • soft glowing mist where a memory ends (memoryMist), so the edges read as "the end of a memory"
import * as THREE from 'three';

const SAT_GREY = 0.8, SAT_FULL = 1.12;   // a faded memory is only a little grey: still pretty

/** grade = the colour-grade pass; save() → the shared save; level def comes with setLevel */
export function createMemory({ grade, save, sound, caption }) {
  let world = null, active = false, restored = false, kNow = 1;
  let wave = null, thread = null;

  function setLevel(w, def = {}) {
    world = w;
    active = def.ch != null && def.ch >= 1;      // the Prologue (childhood) and the Playground stay in full colour
    restored = false;
    wave = thread = null;
    kNow = active ? progress() : 1;
  }

  function progress() {
    if (!active) return 1;
    if (restored) return 1;
    const S = world.stars || [];
    const sf = S.length ? S.filter((s) => s.collected).length / S.length : 0;
    const C = world.checkpoints;
    const sv = save();
    const ci = sv?.cp?.l === world.id ? sv.cp.i : 0;
    const cf = C && C.length > 1 ? ci / (C.length - 1) : 0;
    return Math.min(0.85, 0.1 + (C ? 0.5 * cf + 0.25 * sf : 0.55 * sf));
  }

  /** the part is done: colour wave from `at`, golden thread into the sky */
  function restore(at) {
    if (!active || restored) return;
    restored = true;
    const root = world.root;
    // the wave: a bright ring racing outwards over the island
    const ringM = new THREE.MeshBasicMaterial({ color: new THREE.Color(2.4, 1.7, 1.9), transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.9, 1, 96).rotateX(-Math.PI / 2), ringM);
    ring.position.copy(at).y += 0.4;
    ring.userData.noHide = true;
    root.add(ring);
    wave = { ring, ringM, t: 0 };
    // the thread: from the portal up and away across the sky, towards the next memory
    const a = at.clone().add(new THREE.Vector3(0, 3.2, 0));
    const pts = [a, a.clone().add(new THREE.Vector3(6, 22, -10)), a.clone().add(new THREE.Vector3(40, 70, -90)), a.clone().add(new THREE.Vector3(110, 130, -260))];
    const geo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 160, 0.22, 8);
    const tm = new THREE.MeshBasicMaterial({ color: new THREE.Color(3.0, 2.2, 0.9), transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false });
    const tube = new THREE.Mesh(geo, tm);
    tube.frustumCulled = false;
    tube.userData.noHide = true;
    geo.setDrawRange(0, 0);
    root.add(tube);
    thread = { tube, geo, t: 0, n: geo.index.count };
    sound?.play('win');
    setTimeout(() => caption?.('✨ This memory has its colours back', 3200), 900);
    setTimeout(() => caption?.('A golden thread reaches into the sky…', 3200), 4300);
  }

  function update(dt, t) {
    const want = progress();
    kNow += (want - kNow) * Math.min(1, dt * (restored ? 0.9 : 0.6));
    const g = grade.uniforms;
    g.sat.value = SAT_GREY + (SAT_FULL - SAT_GREY) * kNow;
    g.contrast.value = 0.1 + 0.12 * kNow;
    if (wave) {
      wave.t += dt;
      const r = 1 + wave.t * 38;
      wave.ring.scale.setScalar(r);
      wave.ringM.opacity = Math.max(0, 0.9 * (1 - wave.t / 3.2));
      if (wave.t > 3.3) { wave.ring.removeFromParent(); wave = null; }
    }
    if (thread) {
      thread.t += dt;
      const f = Math.min(1, thread.t / 3.0);
      thread.geo.setDrawRange(0, Math.floor((f * f * (3 - 2 * f)) * thread.n / 3) * 3);
      thread.tube.material.opacity = 0.75 + Math.sin(t * 3) * 0.2;
    }
  }

  return { setLevel, restore, update, get k() { return kNow; } };
}

/** soft glowing mist where a memory ends: points = [[x, y, z], …] */
export function memoryMist(parent, points, { size = 9, color = 0xffc8e6, opacity = 0.55 } = {}) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = 64;
  const g = cv.getContext('2d');
  const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(0.4, 'rgba(255,255,255,0.45)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd; g.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(cv);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(points.flat(), 3));
  const m = new THREE.PointsMaterial({ map: tex, size, color, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true, fog: false });
  const p = new THREE.Points(geo, m);
  p.userData.noHide = true;
  p.renderOrder = 3;
  parent.add(p);
  return p;
}
