// Sun and Moon: chunky toy characters built from simple shapes. Model faces +z; root sits at the feet.
import * as THREE from 'three';
import { damp } from './util.js';

const sphere = new THREE.SphereGeometry(1, 32, 22);
const lowSphere = new THREE.SphereGeometry(1, 16, 12);
const eyeGeo = new THREE.CapsuleGeometry(0.034, 0.07, 4, 10);
const eyeMat = new THREE.MeshStandardMaterial({ color: 0x2b2550, roughness: 0.35 });
const cheekMat = new THREE.MeshStandardMaterial({ color: 0xff8fb1, roughness: 0.9, transparent: true, opacity: 0.85 });

function mesh(geo, mat, x, y, z, sx = 1, sy = sx, sz = sx) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.scale.set(sx, sy, sz);
  m.castShadow = true;
  return m;
}

export function makeCharacter(kind) {
  const root = new THREE.Group();
  const pivot = new THREE.Group(); // squash & stretch around the feet
  root.add(pivot);
  const lean = new THREE.Group();
  pivot.add(lean);

  const isSun = kind === 'sun';
  const bodyMat = new THREE.MeshStandardMaterial(isSun
    ? { color: 0xffc83d, emissive: 0xff8a00, emissiveIntensity: 0.28, roughness: 0.55 }
    : { color: 0xcdd6ff, emissive: 0x6f7dff, emissiveIntensity: 0.14, roughness: 0.6 });
  const footMat = new THREE.MeshStandardMaterial({ color: isSun ? 0xf08a24 : 0x6c74c9, roughness: 0.7 });

  const body = mesh(sphere, bodyMat, 0, 0.5, 0, 0.42, 0.42, 0.4);
  lean.add(body);

  const face = new THREE.Group();
  face.position.set(0, 0.55, 0.36);
  lean.add(face);
  const eyeL = mesh(eyeGeo, eyeMat, -0.12, 0.03, 0.02); eyeL.castShadow = false;
  const eyeR = mesh(eyeGeo, eyeMat, 0.12, 0.03, 0.02); eyeR.castShadow = false;
  face.add(eyeL, eyeR);
  const chL = mesh(lowSphere, cheekMat, -0.22, -0.07, -0.03, 0.07, 0.045, 0.03);
  const chR = mesh(lowSphere, cheekMat, 0.22, -0.07, -0.03, 0.07, 0.045, 0.03);
  chL.castShadow = chR.castShadow = false;
  chL.rotation.y = -0.5; chR.rotation.y = 0.5;
  face.add(chL, chR);

  const feet = [mesh(lowSphere, footMat, -0.16, 0.07, 0.03, 0.12, 0.08, 0.16), mesh(lowSphere, footMat, 0.16, 0.07, 0.03, 0.12, 0.08, 0.16)];
  pivot.add(...feet);

  let spinner = null, pom = null, cap = null;
  if (isSun) {
    // a ring of glowing rays around the face
    spinner = new THREE.Group();
    spinner.position.set(0, 0.5, -0.02);
    const rayMat = new THREE.MeshStandardMaterial({ color: 0xffc23a, emissive: 0xffa000, emissiveIntensity: 1.4, roughness: 0.5 });
    const rayGeo = new THREE.ConeGeometry(0.075, 0.2, 10);
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2;
      const r = mesh(rayGeo, rayMat, Math.cos(a) * 0.52, Math.sin(a) * 0.52, 0);
      r.rotation.z = a - Math.PI / 2;
      spinner.add(r);
    }
    lean.add(spinner);
  } else {
    // sleepy nightcap with a little star pom-pom, plus a couple of craters
    const capMat = new THREE.MeshStandardMaterial({ color: 0x4a4fa8, roughness: 0.8 });
    cap = mesh(new THREE.ConeGeometry(0.26, 0.5, 20), capMat, 0.05, 0.98, -0.05);
    cap.rotation.z = -0.35; cap.rotation.x = -0.2;
    lean.add(cap);
    const brim = mesh(new THREE.TorusGeometry(0.25, 0.06, 10, 24), new THREE.MeshStandardMaterial({ color: 0xf4f1ff, roughness: 0.9 }), 0, 0.79, -0.02);
    brim.rotation.x = Math.PI / 2 - 0.2; brim.rotation.y = 0.35 * 0.4;
    lean.add(brim);
    pom = mesh(lowSphere, new THREE.MeshStandardMaterial({ color: 0xfff3b0, emissive: 0xffd34d, emissiveIntensity: 1.2 }), 0.2, 1.2, -0.12, 0.075);
    lean.add(pom);
    const craterMat = new THREE.MeshStandardMaterial({ color: 0xa9b5f0, roughness: 0.9 });
    const c1 = mesh(lowSphere, craterMat, -0.3, 0.62, -0.2, 0.08, 0.08, 0.03); c1.lookAt(-0.9, 0.7, -0.6);
    const c2 = mesh(lowSphere, craterMat, 0.28, 0.36, -0.24, 0.06, 0.06, 0.025); c2.lookAt(0.9, 0.3, -0.8);
    const c3 = mesh(lowSphere, craterMat, 0.05, 0.75, -0.33, 0.05, 0.05, 0.02); c3.lookAt(0.1, 0.9, -1);
    lean.add(c1, c2, c3);
  }

  // a soft glow light used by the ability effect
  const glow = new THREE.PointLight(isSun ? 0xffb347 : 0x8fa0ff, 0, 7, 2);
  glow.position.set(0, 0.7, 0);
  root.add(glow);

  // animation state
  let phase = 0, squash = 0, t = 0, blink = 2 + Math.random() * 3, yaw = 0, wasGrounded = true, leanX = 0;
  const st = { speed: 0, grounded: true, vy: 0 };

  return {
    root, kind, glow,
    get yaw() { return yaw; },
    setYaw(y) { yaw = y; root.rotation.y = y; },
    land(impact = 8) { squash = Math.min(1, impact / 16); },
    /** speed: horizontal m/s, grounded: bool, vy: vertical m/s */
    animate(dt, speed, grounded, vy) {
      t += dt;
      st.speed = speed; st.grounded = grounded; st.vy = vy;
      if (grounded && !wasGrounded) squash = Math.max(squash, 0.5);
      wasGrounded = grounded;
      const run = Math.min(1, speed / 5);
      phase += dt * (6 + speed * 2.2);
      squash = damp(squash, 0, 9, dt);

      let sy = 1 + Math.sin(t * 2.6) * 0.02 * (1 - run);
      if (!grounded) sy += Math.max(-0.08, Math.min(0.14, vy * 0.012));
      sy -= squash * 0.28;
      const sxz = 1 / Math.sqrt(Math.max(0.5, sy));
      pivot.scale.set(sxz, sy, sxz);

      const bob = grounded ? Math.abs(Math.sin(phase)) * 0.07 * run : 0;
      lean.position.y = bob;
      leanX = damp(leanX, grounded ? run * 0.16 : 0.05, 10, dt);
      lean.rotation.x = leanX;
      lean.rotation.z = grounded ? Math.sin(phase) * 0.05 * run : 0;

      // feet: walk cycle, tuck in the air
      for (let i = 0; i < 2; i++) {
        const f = feet[i];
        const s = Math.sin(phase + i * Math.PI);
        if (grounded) {
          f.position.z = 0.03 + s * 0.14 * run;
          f.position.y = 0.07 + Math.max(0, -Math.cos(phase + i * Math.PI)) * 0.08 * run;
        } else {
          f.position.z = damp(f.position.z, 0.08, 12, dt);
          f.position.y = damp(f.position.y, 0.14, 12, dt);
        }
      }

      blink -= dt;
      const closed = blink < 0.12;
      eyeL.scale.y = eyeR.scale.y = closed ? 0.15 : 1;
      if (blink < 0) blink = 2.5 + Math.random() * 3.5;

      if (spinner) spinner.rotation.z += dt * (0.6 + run * 2.5);
      if (pom) {
        pom.position.x = 0.2 + Math.sin(t * 3) * 0.015 - leanX * 0.1;
        pom.position.y = 1.2 + (grounded ? 0 : -Math.min(0.08, vy * 0.01));
      }
      if (cap) cap.rotation.x = -0.2 - leanX * 0.6;
      glow.intensity = damp(glow.intensity, 0, 3, dt);
    },
  };
}
