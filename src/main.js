// Eclipse 3D, step 1: foundation.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { buildWorld } from './world.js';
import { makeCharacter } from './characters.js';
import { Body, moveBody, playerCollider, syncPlayerCollider } from './physics.js';
import { createInput } from './input.js';
import { Effects } from './effects.js';
import { RemoteTrack } from './remote.js';
import { FirebaseNet, LocalNet, SoloNet } from './net.js';
import { sound } from './sound.js';
import { createUI } from './ui.js';
import { initMemoriesUI } from './memories-ui.js';
import { initQuizUI } from './quiz-editor.js';
import { clamp, damp, dampAngle, angleDiff, round3, roomIdFromWord, store, params, isTouch, isIOS, ROLE_EMOJI, ROLE_NAME, otherRole } from './util.js';

const $ = (s) => document.querySelector(s);
const DEBUG = params.has('debug');

// ---------------------------------------------------------------- renderer
const canvas = $('#game');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
renderer.toneMapping = THREE.NeutralToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 700);
const rt = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: 4 });
const composer = new EffectComposer(renderer, rt);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.6, 0.55, 1.0);
composer.addPass(bloom);
composer.addPass(new OutputPass());

const QUALITY = [
  { dpr: Math.min(devicePixelRatio, 2), bloom: true, shadow: 2048 },
  { dpr: Math.min(devicePixelRatio, 1.6), bloom: true, shadow: 2048 },
  { dpr: Math.min(devicePixelRatio, 1.25), bloom: true, shadow: 1024 },
  { dpr: 1, bloom: false, shadow: 1024 },
];
let qLevel = clamp(+params.get('q') || 0, 0, 3);

function resize() {
  const w = window.innerWidth, h = window.innerHeight, q = QUALITY[qLevel];
  renderer.setPixelRatio(q.dpr);
  renderer.setSize(w, h, false);
  composer.setPixelRatio(q.dpr);
  composer.setSize(w, h);
  bloom.enabled = q.bloom;
  camera.aspect = w / h;
  camera.fov = w < h ? 70 : 55;
  camera.updateProjectionMatrix();
  if (w > h) $('#rotate-hint').hidden = true;
}
window.addEventListener('resize', resize);
window.visualViewport?.addEventListener('resize', resize);

// ---------------------------------------------------------------- world & actors
const world = buildWorld(scene);
const fx = new Effects(scene, camera);
const ROLES = ['sun', 'moon'];
const chars = {}, bodies = {}, pcols = {}, ctls = {};
for (const r of ROLES) {
  chars[r] = makeCharacter(r);
  scene.add(chars[r].root);
  bodies[r] = new Body();
  pcols[r] = playerCollider(bodies[r]);
  pcols[r].disabled = true;
  ctls[r] = { role: r, body: bodies[r], coyote: 0, buffer: 0, jumps: 0, cut: true, safe: world.spawn[r].clone(), safeT: 0, k: 0, lastMoving: 0, airT: 0 };
}
function placeAtSpawn(r) {
  bodies[r].pos.copy(world.spawn[r]);
  bodies[r].vel.set(0, 0, 0);
  chars[r].root.position.copy(world.spawn[r]);
  chars[r].setYaw(Math.PI);
}
ROLES.forEach(placeAtSpawn);
const colliders = [...world.colliders, pcols.sun, pcols.moon];

// ---------------------------------------------------------------- state
const G = {
  mode: 'lobby',   // lobby | connecting | play | menu
  kind: null,      // online | local | solo
  role: 'sun',
  active: 'sun',   // which body the player controls (solo can swap)
  net: null,
  track: new RemoteTrack(),
  partnerK: null,
  cam: { yaw: 0, pitch: 0.3, dist: 7.2, target: new THREE.Vector3(0, 1, 5), lastDrag: -10 },
  lastSend: 0,
  stars: {},
  cooldown: { ability: 0, heart: 0 },
  t: 0,
};
const serverNow = () => (G.net ? G.net.serverNow() : Date.now());

// ---------------------------------------------------------------- UI & input
const input = createInput({
  canvas,
  joyZone: $('#joy-zone'), joyBase: $('#joy-base'), joyKnob: $('#joy-knob'),
  buttons: { jump: $('#btn-jump'), ability: $('#btn-ability'), heart: $('#btn-heart'), swap: $('#btn-swap') },
});
const canFullscreen = isTouch && !isIOS && !!document.documentElement.requestFullscreen;
function goFullscreen() {
  if (!canFullscreen || document.fullscreenElement) return;
  document.documentElement.requestFullscreen({ navigationUI: 'hide' })
    .then(() => screen.orientation?.lock?.('landscape').catch(() => {}))
    .catch(() => {});
}
const ui = createUI({
  canFullscreen,
  onJoin: (role, word) => startSession(params.get('net') === 'local' ? 'local' : 'online', role, word),
  onSolo: (role) => startSession('solo', role, ''),
  onStart: () => enterPlay(),
  onRetry: () => { sessionStorage.setItem('eclipse.autojoin', '1'); location.reload(); },
  onLeave: () => { sessionStorage.removeItem('eclipse.autojoin'); (G.net ? G.net.leave() : Promise.resolve()).finally(() => location.reload()); },
  onResetStars: () => G.net?.resetStars(),
  onToggleSound: () => sound.toggle(),
  onFullscreen: goFullscreen,
});
ui.paintSound(sound.enabled);
initMemoriesUI();
const quizUI = initQuizUI({ getNet: () => G.net, getRole: () => G.role });
ui.setStars(0, world.stars.length);
$('#menu-btn').addEventListener('click', () => { if (G.mode === 'play') { G.mode = 'menu'; input.setEnabled(false); ui.showConn('menu'); refreshStatus(); } });
$('#status-pill').addEventListener('click', () => $('#menu-btn').click());
$('#rotate-ok').addEventListener('click', () => { $('#rotate-hint').hidden = true; store.set('rotateOk', true); });

function refreshStatus() { if (G.net) ui.renderStatus(G.net.status, G.role, G.kind); }

function startSession(kind, role, word) {
  G.kind = kind;
  G.role = role;
  G.active = role;
  document.body.classList.remove('sun', 'moon');
  document.body.classList.add(role);
  $('#ability-label').textContent = role === 'sun' ? 'Shine' : 'Tide';
  $('#partner-arrow-icon').textContent = ROLE_EMOJI[otherRole(role)];
  $('#btn-swap').hidden = kind !== 'solo';
  if (kind === 'solo') pcols.sun.disabled = pcols.moon.disabled = false;
  if (canFullscreen) goFullscreen();

  const net = (G.net = kind === 'online' ? new FirebaseNet() : kind === 'local' ? new LocalNet(+params.get('lag') || 0) : new SoloNet());
  net.on('status', refreshStatus);
  net.on('state', (s) => {
    if (G.partnerK !== s.k) { G.partnerK = s.k; G.track.push(s, Date.now()); G.track.snap(); return; }
    G.track.push(s, Date.now());
  });
  net.on('partner', (online) => {
    if (G.mode !== 'play' && G.mode !== 'menu') return;
    const other = otherRole(G.role);
    ui.toast(online ? `${ROLE_EMOJI[other]} ${ROLE_NAME[other]} joined!` : `${ROLE_EMOJI[other]} ${ROLE_NAME[other]} left`);
    if (online) sound.play('join');
  });
  net.on('event', onRemoteEvent);
  net.on('stars', onStars);
  net.on('quiz', (mine, partner) => quizUI.update(mine, partner));
  net.join(kind === 'solo' ? 'solo' : roomIdFromWord(word), role);

  if (kind === 'solo') { refreshStatus(); enterPlay(); return; }
  G.mode = 'connecting';
  ui.showConn('join');
  refreshStatus();
}

function enterPlay() {
  const first = G.mode === 'connecting' || G.mode === 'lobby';
  G.mode = 'play';
  ui.showHud();
  input.setEnabled(true);
  if (first) {
    G.cam.yaw = 0; G.cam.pitch = 0.3;
    G.cam.target.copy(bodies[G.active].pos).add(new THREE.Vector3(0, 1.1, 0));
    if (isTouch && innerHeight > innerWidth && !store.get('rotateOk', false)) $('#rotate-hint').hidden = false;
    ui.toast(G.kind === 'solo' ? 'Practice: tap ⇄ to switch characters' : 'Find the 3 stars together ⭐');
  }
}

// auto-rejoin after "Try again"
if (sessionStorage.getItem('eclipse.autojoin') && store.get('role') && store.get('word')) {
  sessionStorage.removeItem('eclipse.autojoin');
  startSession(params.get('net') === 'local' ? 'local' : 'online', store.get('role'), store.get('word'));
} else {
  ui.showLobby();
}

// ---------------------------------------------------------------- events & stars
function onRemoteEvent(e) {
  const c = chars[e.from];
  if (!c) return;
  if (e.type === 'heart') {
    fx.hearts(c.root.position, e.from === 'sun' ? 0xffa64d : 0xb48cff);
    ui.toast(`${ROLE_EMOJI[e.from]} ${ROLE_NAME[e.from]} sent you a heart ${e.from === 'sun' ? '🧡' : '💜'}`);
    sound.play('heart');
  } else if (e.type === 'ability') {
    useAbilityFx(e.from);
  }
}
function useAbilityFx(role) {
  if (role === 'sun') { fx.shine(chars.sun); sound.play('shine'); } else { fx.tide(chars.moon); sound.play('tide'); }
}
function onStars(map) {
  for (const s of world.stars) {
    const now = !!map[s.id];
    if (now && !s.collected) { fx.sparks(s.pos.clone().setY(s.pos.y - 0.6), 0xffe27a, 22); sound.play('star'); }
    s.collected = now;
  }
  updateStarCount(false);
}
let shownAll = false;
function updateStarCount(byMe) {
  const n = world.stars.filter((s) => s.collected).length;
  ui.setStars(n, world.stars.length);
  if (byMe) ui.toast(`⭐ ${n}/${world.stars.length}`);
  if (n === world.stars.length && !shownAll && G.mode === 'play') { shownAll = true; setTimeout(() => ui.toast('All stars found! You two make a great team ✨'), 600); }
  if (n < world.stars.length) shownAll = false;
}

// ---------------------------------------------------------------- player control
const SPEED = 5.6, JUMP = 11, JUMP2 = 9.5;
const _v = new THREE.Vector3();
const fade = $('#fade');

function control(ctl, mv, wantJump, jumpHeld, dt) {
  const b = ctl.body;
  const yaw = G.cam.yaw;
  // camera-relative movement
  const fx_ = -Math.sin(yaw), fz = -Math.cos(yaw), rx = Math.cos(yaw), rz = -Math.sin(yaw);
  const mag = Math.min(1, Math.hypot(mv.x, mv.y));
  let dx = rx * mv.x + fx_ * mv.y, dz = rz * mv.x + fz * mv.y;
  const dl = Math.hypot(dx, dz);
  if (dl > 1e-4) { dx = (dx / dl) * SPEED * mag; dz = (dz / dl) * SPEED * mag; } else { dx = 0; dz = 0; }
  const accel = (b.grounded ? 48 : 24) * dt;
  let ex = dx - b.vel.x, ez = dz - b.vel.z;
  const el = Math.hypot(ex, ez);
  if (el > accel) { ex *= accel / el; ez *= accel / el; }
  b.vel.x += ex; b.vel.z += ez;

  // forgiving jumps: coyote time, jump buffer, one air jump
  if (b.grounded) { ctl.coyote = 0.13; ctl.jumps = 0; ctl.airT = 0; } else { ctl.coyote -= dt; ctl.airT += dt; }
  ctl.buffer = wantJump ? 0.16 : ctl.buffer - dt;
  if (ctl.buffer > 0) {
    if (b.grounded || ctl.coyote > 0) {
      b.vel.y = JUMP; ctl.jumps = 1; ctl.coyote = 0; ctl.buffer = 0; ctl.cut = false;
      b.grounded = false; b.ground = null;
      sound.play('jump'); fx.dust(b.pos, 4);
    } else if (ctl.jumps < 2) {
      b.vel.y = JUMP2; ctl.jumps = 2; ctl.buffer = 0; ctl.cut = true;
      sound.play('jump2'); fx.sparks(b.pos.clone().setY(b.pos.y - 0.5), ctl.role === 'sun' ? 0xffd060 : 0xaab8ff, 8, 1.5);
    }
  }
  if (!jumpHeld && !ctl.cut && b.vel.y > 6) { b.vel.y = 6; ctl.cut = true; } // short hop when released early

  const landed = moveBody(b, colliders, dt);
  if (landed) {
    if (landed.collider.bounce) {
      sound.play('bounce'); world.bounce(landed.collider); ctl.jumps = 1; ctl.cut = true;
      chars[ctl.role].land(10);
    } else if (landed.impact > 7) {
      sound.play('land'); fx.dust(b.pos, 6); chars[ctl.role].land(landed.impact);
    } else chars[ctl.role].land(landed.impact);
  }

  // remember a safe spot to respawn
  if (b.grounded && b.ground && b.ground.safe) {
    ctl.safeT += dt;
    if (ctl.safeT > 0.35) ctl.safe.copy(b.pos);
  } else ctl.safeT = 0;

  if (b.pos.y < world.killY) respawn(ctl);
}

function respawn(ctl) {
  const b = ctl.body;
  b.pos.copy(ctl.safe).add(_v.set(0, 0.3, 0));
  b.vel.set(0, 0, 0);
  b.ground = null; b.grounded = false;
  ctl.k++;
  pcols[ctl.role].ready = false;
  chars[ctl.role].root.position.copy(b.pos);
  if (ctl.role === G.active) {
    fade.classList.add('on');
    setTimeout(() => fade.classList.remove('on'), 180);
    sound.play('respawn');
  }
}

// ---------------------------------------------------------------- networking out
function sendState(now) {
  const ctl = ctls[G.role], b = ctl.body;
  const moving = Math.hypot(b.vel.x, b.vel.z) > 0.05 || !b.grounded;
  if (moving) ctl.lastMoving = now;
  const interval = now - ctl.lastMoving < 600 ? 66 : 500;
  if (now - G.lastSend < interval) return;
  G.lastSend = now;
  const s = { t: Math.round(serverNow()), v: [round3(b.vel.x), round3(b.vel.y), round3(b.vel.z)], r: round3(chars[G.role].yaw), g: b.grounded ? 1 : 0, k: ctl.k };
  let base = null;
  if (b.grounded && b.ground) {
    if (b.ground.id === 'raft') base = world.movers.raft.pos(serverNow(), new THREE.Vector3());
    else if (b.ground === pcols[otherRole(G.role)] && G.track.has) base = G.track.pos;
    if (base) s.b = b.ground.id === 'raft' ? 'raft' : otherRole(G.role);
  }
  s.p = base ? [round3(b.pos.x - base.x), round3(b.pos.y - base.y), round3(b.pos.z - base.z)] : [round3(b.pos.x), round3(b.pos.y), round3(b.pos.z)];
  G.net.sendState(s);
}
function resolveBase(id, out) {
  if (id === 'raft') return world.movers.raft.pos(serverNow(), out);
  if (id === G.role) return out.copy(bodies[G.role].pos);
  return null;
}

// ---------------------------------------------------------------- camera
const _look = new THREE.Vector3();
function updateCamera(dt) {
  const c = G.cam;
  if (G.mode === 'lobby' || G.mode === 'connecting') {
    const a = G.t * 0.06;
    const R = camera.aspect < 1 ? 36 : 24;
    camera.position.set(6 + Math.sin(a) * R, 10 + Math.sin(G.t * 0.1) * 1.5, -2 + Math.cos(a) * R);
    camera.lookAt(6, 0.5, -2);
    return;
  }
  const d = input.takeCam();
  if (d.x || d.y) {
    c.yaw -= d.x * 0.0065;
    c.pitch = clamp(c.pitch + d.y * 0.0045, -0.2, 1.2);
    c.lastDrag = G.t;
  }
  const b = bodies[G.active];
  // gently swing the camera behind the direction of travel (never when walking towards the camera)
  const sp = Math.hypot(b.vel.x, b.vel.z);
  if (sp > 1.5 && G.t - c.lastDrag > 1.2) {
    const behind = Math.atan2(-b.vel.x, -b.vel.z);
    const diff = angleDiff(c.yaw, behind);
    if (Math.abs(diff) < 1.75) c.yaw += clamp(diff, -1, 1) * Math.min(1, sp / SPEED) * 0.9 * dt;
  }
  _look.copy(b.pos);
  _look.y += 1.1;
  c.target.x = damp(c.target.x, _look.x, 12, dt);
  c.target.z = damp(c.target.z, _look.z, 12, dt);
  c.target.y = damp(c.target.y, _look.y, b.grounded ? 8 : 3.5, dt);
  const dist = c.dist * (camera.aspect < 1 ? 1.25 : 1);
  const cp = Math.cos(c.pitch);
  camera.position.set(c.target.x + Math.sin(c.yaw) * cp * dist, c.target.y + Math.sin(c.pitch) * dist, c.target.z + Math.cos(c.yaw) * cp * dist);
  if (camera.position.y < c.target.y - 1.0) camera.position.y = c.target.y - 1.0;
  camera.lookAt(c.target);
}

// partner indicator at the screen edge
const arrow = $('#partner-arrow');
const _p = new THREE.Vector3();
function updateArrow(visible) {
  if (!visible || G.mode !== 'play') { arrow.hidden = true; return; }
  const other = G.kind === 'solo' ? otherRole(G.active) : otherRole(G.role);
  _p.copy(chars[other].root.position);
  _p.y += 0.6;
  _p.project(camera);
  const behind = _p.z > 1;
  if (!behind && Math.abs(_p.x) < 0.95 && Math.abs(_p.y) < 0.92) { arrow.hidden = true; return; }
  let x = behind ? -_p.x : _p.x, y = behind ? -_p.y : _p.y;
  const m = Math.max(Math.abs(x), Math.abs(y)) || 1;
  x /= m; y /= m;
  const W = innerWidth, H = innerHeight;
  arrow.hidden = false;
  $('#partner-arrow-icon').textContent = ROLE_EMOJI[other];
  const ax = clamp((x * 0.5 + 0.5) * W, 34, W - 34);
  // keep clear of the buttons in the bottom-right corner
  const ay = clamp((-y * 0.5 + 0.5) * H, 70, ax > W - 240 ? H - 200 : H - 34);
  arrow.style.transform = `translate(${ax}px, ${ay}px)`;
}

// ---------------------------------------------------------------- main loop
let last = performance.now(), ftAcc = 0, ftN = 0, fpsShown = 0;
const idleInput = { x: 0, y: 0 };
resize();

function frame(nowMs) {
  requestAnimationFrame(frame);
  const rawDt = (nowMs - last) / 1000;
  last = nowMs;
  const dt = Math.min(0.05, Math.max(0.001, rawDt));
  G.t += dt;
  const sNow = serverNow();
  world.update(sNow, G.t, dt);

  const playing = G.mode === 'play' || G.mode === 'menu';
  const other = otherRole(G.role);
  let partnerVisible = false;

  if (playing) {
    // partner (remote) first, so we collide with where we see them
    if (G.kind !== 'solo') {
      const ok = G.net.status.partnerOnline && G.track.sample(Date.now(), dt, resolveBase);
      partnerVisible = !!ok;
      if (ok) {
        chars[other].root.position.copy(G.track.pos);
        chars[other].setYaw(dampAngle(chars[other].yaw, G.track.yaw, 18, dt));
        syncPlayerCollider(pcols[other], G.track.pos, bodies[other].h);
      }
      pcols[other].disabled = !ok;
    } else partnerVisible = true;

    // cooldowns & one-shot buttons
    G.cooldown.ability -= dt; G.cooldown.heart -= dt;
    const wantJump = input.consume('jump');
    if (input.consume('ability') && G.cooldown.ability <= 0) {
      G.cooldown.ability = 0.6;
      useAbilityFx(G.kind === 'solo' ? G.active : G.role);
      G.net.sendEvent('ability');
    }
    if (input.consume('heart') && G.cooldown.heart <= 0) {
      G.cooldown.heart = 0.8;
      const who = G.kind === 'solo' ? G.active : G.role;
      fx.hearts(chars[who].root.position, who === 'sun' ? 0xffa64d : 0xb48cff);
      sound.play('heart');
      G.net.sendEvent('heart');
    }
    if (input.consume('swap') && G.kind === 'solo') {
      G.active = otherRole(G.active);
      $('#ability-label').textContent = G.active === 'sun' ? 'Shine' : 'Tide';
      document.body.classList.remove('sun', 'moon'); document.body.classList.add(G.active);
      ui.toast(`Now playing ${ROLE_EMOJI[G.active]} ${ROLE_NAME[G.active]}`);
    }

    // local bodies
    const mine = G.kind === 'solo' ? ROLES : [G.role];
    for (const r of mine) {
      const active = r === G.active && G.mode === 'play';
      control(ctls[r], active ? input.state.move : idleInput, active && wantJump, active && input.state.jumpHeld, dt);
    }
    for (const r of mine) {
      syncPlayerCollider(pcols[r], bodies[r].pos, bodies[r].h);
      const b = bodies[r], c = chars[r];
      c.root.position.copy(b.pos);
      const sp = Math.hypot(b.vel.x, b.vel.z);
      if (sp > 0.4) c.setYaw(dampAngle(c.yaw, Math.atan2(b.vel.x, b.vel.z), 14, dt));
    }

    // stars
    for (const s of world.stars) {
      if (s.collected) continue;
      for (const r of mine) {
        const b = bodies[r];
        if (Math.abs(b.pos.x - s.pos.x) < 0.95 && Math.abs(b.pos.z - s.pos.z) < 0.95 && s.pos.y - b.pos.y > -0.6 && s.pos.y - b.pos.y < 1.6) {
          s.collected = true;
          fx.sparks(s.pos.clone().setY(s.pos.y - 0.6), 0xffe27a, 24);
          sound.play('star');
          G.net.collectStar(s.id);
          updateStarCount(true);
          break;
        }
      }
    }

    if (G.kind !== 'solo') sendState(nowMs);
  }

  // character animation
  for (const r of ROLES) {
    const c = chars[r];
    const visible = !playing || G.kind === 'solo' || r === G.role || partnerVisible;
    c.root.visible = visible;
    if (!visible) continue;
    if (playing && (G.kind === 'solo' || r === G.role)) {
      const b = bodies[r];
      c.animate(dt, Math.hypot(b.vel.x, b.vel.z), b.grounded, b.vel.y);
    } else if (playing) {
      const v = G.track.vel;
      c.animate(dt, Math.hypot(v.x, v.z), G.track.grounded, v.y);
    } else c.animate(dt, 0, true, 0);
  }

  updateCamera(dt);
  updateArrow(partnerVisible);
  fx.update(dt, G.t);
  composer.render(dt);

  // adaptive quality: if we can't hold ~50 fps, step resolution down (never back up)
  if (rawDt < 0.1) { ftAcc += rawDt; ftN++; }
  if (ftAcc > 2.5) {
    const avg = ftAcc / ftN;
    fpsShown = 1 / avg;
    if (avg > 1 / 48 && qLevel < QUALITY.length - 1 && G.t > 4 && !params.has('q')) { qLevel++; resize(); }
    ftAcc = 0; ftN = 0;
  }
  if (DEBUG) {
    $('#debug').hidden = false;
    $('#debug').textContent = `fps ${fpsShown.toFixed(0)}  q${qLevel} dpr ${renderer.getPixelRatio()}\n` +
      `delay ${Math.round(G.track.delay ?? 0)}ms  jitter ${G.track.jitter()}ms  buf ${G.track.buf.length}\n` +
      `ping ${G.net?.status.ping ?? '-'}  partner ${G.net?.status.partnerPing ?? '-'}\n` +
      `pos ${bodies[G.active].pos.toArray().map((v) => v.toFixed(1)).join(', ')}`;
  }
}
requestAnimationFrame(frame);

// for automated tests
window.__eclipse = {
  G, bodies, chars, world, input, pcols, ctls,
  /** Deterministic simulation at 60 Hz for tests: moves `role` with a fixed input. */
  sim(n, o = {}) {
    const r = o.role || G.active, dt = 1 / 60, trace = [];
    let T = o.t0 ?? serverNow();
    for (let i = 0; i < n; i++) {
      T += 1000 / 60;
      world.update(T, G.t, dt);
      for (const k of ROLES) syncPlayerCollider(pcols[k], bodies[k].pos, bodies[k].h);
      control(ctls[r], o.move || idleInput, (o.jumpAt || []).includes(i), o.hold ?? true, dt);
      if (o.every && i % o.every === 0) trace.push([+bodies[r].pos.x.toFixed(2), +bodies[r].pos.y.toFixed(2), +bodies[r].pos.z.toFixed(2), bodies[r].grounded ? 1 : 0, world.movers.raft.pos(T).x.toFixed(2)]);
    }
    return { pos: bodies[r].pos.toArray().map((v) => +v.toFixed(3)), grounded: bodies[r].grounded, trace };
  },
};
