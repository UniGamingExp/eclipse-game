// Eclipse 3D: the two dolls, their moves, and the test island.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { gradePass, makeMotes } from './look.js';
import { createGfx, ShaftsPass, guardBloom } from './gfx.js';
import { createMemory } from './memory.js';
import { loadNature, loadKit, kitReady } from './nature.js';
import { townspeople } from './npc.js';
import { loadHeroes, heroesReady, makeHero } from './hero.js';
import { makeBata } from './bata.js';
import { makePortal } from './portal.js';
import { runFrameHooks } from './levels/hooks.js';
import { loadLevel, LEVELS, nextLevel, partsOf, CHAPTERS } from './world.js';
import { makeCharacter, MODE, SIZES, KID_SIZES } from './characters.js';
import { Body, moveBody, findLedge, playerCollider, syncPlayerCollider } from './physics.js';
import { createInput } from './input.js';
import { Effects } from './effects.js';
import { RemoteTrack } from './remote.js';
import { FirebaseNet, LocalNet, SoloNet } from './net.js';
import { sound, music, ambience } from './sound.js';
import { createUI } from './ui.js';
import { initMemoriesUI } from './memories-ui.js';
import { initQuizUI } from './quiz-editor.js';
import { clamp, damp, dampAngle, angleDiff, round3, smoother, roomIdFromWord, store, params, isTouch, isIOS, ROLE_EMOJI, ROLE_NAME, otherRole } from './util.js';

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
const camera = new THREE.PerspectiveCamera(55, 1, 0.3, 700);   // near 0.3: 3x the depth precision far away (phones flickered)
const rt = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: 4, depthTexture: new THREE.DepthTexture(4, 4) });
const composer = new EffectComposer(renderer, rt);
composer.addPass(new RenderPass(scene, camera));
const shafts = new ShaftsPass();
composer.addPass(shafts);
const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.5, 0.5, 1.3);
if (!params.has('noguard')) guardBloom(bloom);
composer.addPass(bloom);
composer.addPass(new OutputPass());
const grade = gradePass();
composer.addPass(grade);
const gfx = createGfx({ renderer, scene, camera, composer, grade, shafts });
let memory = null;   // the Sky Between layer (needs captions + sound, made below)

const QUALITY = [
  { dpr: Math.min(devicePixelRatio, 2), bloom: true, shadow: 2048, shafts: true, dof: true },
  { dpr: Math.min(devicePixelRatio, 1.6), bloom: true, shadow: 2048, shafts: true, dof: true },
  { dpr: Math.min(devicePixelRatio, 1.25), bloom: true, shadow: 1024, shafts: true, dof: true },
  { dpr: 1, bloom: true, shadow: 1024, shafts: false, dof: false },
];
let qLevel = clamp(+params.get('q') || 0, 0, 3);

let lastSize = '';
function resize() {
  const w = window.innerWidth, h = window.innerHeight, q = QUALITY[qLevel];
  // phones fire lots of resize events (address bar, keyboard): only rebuild when something changed,
  // and draw straight away so the browser never shows an empty canvas in between
  const key = `${w}x${h}@${q.dpr}`;
  if (key === lastSize) return;
  const first = !lastSize;
  lastSize = key;
  renderer.setPixelRatio(q.dpr);
  renderer.setSize(w, h, false);
  composer.setPixelRatio(q.dpr);
  composer.setSize(w, h);
  bloom.enabled = q.bloom;
  camera.aspect = w / h;
  camera.fov = w < h ? 74 : 62;
  grade.uniforms.aspect.value = w / h;
  grade.uniforms.res.value.set(1 / (w * q.dpr), 1 / (h * q.dpr));
  grade.uniforms.dofPx.value = 7 * q.dpr;
  gfx.setQuality(q);
  camera.updateProjectionMatrix();
  if (w > h) $('#rotate-hint').hidden = true;
  if (!first) try { composer.render(0); } catch { /* not ready yet */ }
}
window.addEventListener('resize', resize);
window.visualViewport?.addEventListener('resize', resize);

// ---------------------------------------------------------------- world & actors
// download the nature models first (trees, flowers, rocks…); the level falls back to simple shapes if it fails
const useDolls = new URLSearchParams(location.search).has('dolls');
const heroesP = useDolls ? null : loadHeroes(__BUILD__);
heroesP?.catch(() => {});
try {
  await loadNature(`assets/nature.glb?v=${__BUILD__}`, (k) => { $('#boot-bar').style.width = `${Math.max(5, k * 100)}%`; });
} catch (e) {
  console.warn('nature models failed to load', e);
}
$('#boot').classList.add('done');
setTimeout(() => $('#boot').remove(), 600);
// Sun & Moon (rigged characters, loaded alongside the nature models); the dolls stay as a fallback and with ?dolls=1
if (!useDolls) { try { await heroesP; } catch (e) { console.warn('heroes failed to load, using the dolls', e); } }
// building kits for the first level (Chapter 3+ need the medieval town pieces)
{
  const first = LEVELS[store.get('lastLevel', 'prologue')];
  for (const k of first?.kits || []) { try { await loadKit(k, __BUILD__); } catch (e) { console.warn('kit failed', k, e); } }
}
let world = loadLevel(scene, store.get('lastLevel', 'prologue'));
gfx.setLevel(world, LEVELS[world.id], world.camYaw ? world.camYaw.sun ?? 0 : 0);
memory = createMemory({ grade, save: () => { try { return G?.save ?? null; } catch { return null; } }, sound, caption: (t, ms) => caption(t, ms) });
memory.setLevel(world, LEVELS[world.id]);
// fetch the medieval kit in the background a little later, so Chapter 3 opens instantly
setTimeout(() => { loadKit('medieval', __BUILD__).catch(() => {}); loadKit('npc', __BUILD__).catch(() => {}); }, 9000);
const fx = new Effects(scene, camera);
const motes = makeMotes(scene);
const ROLES = ['sun', 'moon'];
const chars = {}, bodies = {}, pcols = {}, ctls = {};
const sizeOf = (r) => (world.kid ? KID_SIZES : SIZES)[r];
function makeChars() {
  for (const r of ROLES) {
    const old = chars[r];
    if (old) scene.remove(old.root);
    chars[r] = !useDolls && heroesReady() ? makeHero(r, { kid: !!world.kid }) : makeCharacter(r, { kid: !!world.kid });
    if (old) { chars[r].root.position.copy(old.root.position); chars[r].setYaw(old.yaw); }
    scene.add(chars[r].root);
  }
}
makeChars();
/** compile every shader of the current level (plus the end portal) up front, so nothing stutters the first time it appears */
function warmShaders() {
  try {
    const p = makePortal();
    p.g.position.set(0, -400, 0);
    scene.add(p.g);
    const done = () => scene.remove(p.g);
    if (renderer.compileAsync) renderer.compileAsync(scene, camera).then(done, done);
    else { renderer.compile(scene, camera); done(); }
  } catch (e) { console.warn('warm-up failed', e); }
}
setTimeout(warmShaders, 50);
for (const r of ROLES) {
  bodies[r] = new Body(sizeOf(r).r, sizeOf(r).h);
  pcols[r] = playerCollider(bodies[r]);
  pcols[r].disabled = true;
  ctls[r] = {
    role: r, body: bodies[r], coyote: 0, buffer: 0, jumps: 0, cut: true, safe: world.spawn[r].clone(), safeT: 0, k: 0, lastMoving: 0, airT: 0,
    state: 'free',          // free | hang | climb | carried
    anim: MODE.normal,      // what the doll shows (and what we send to the partner)
    wallT: 0, wallNX: 0, wallNZ: 0, wjLock: 0, regrab: 0,
    dashT: 0, dashCd: 0, dashX: 0, dashZ: 0, airDashUsed: false,
    ledge: null, hangT: 0, climbT: 0, from: new THREE.Vector3(), to: new THREE.Vector3(),
    carrying: false, liftT: 0, liftSeen: false, notCarriedT: 0, forceJump: false,
  };
}
const facingYaw = (r) => (world.camYaw ? world.camYaw[r] : 0) + Math.PI;
function placeAtSpawn(r) {
  bodies[r].pos.copy(world.spawn[r]);
  bodies[r].vel.set(0, 0, 0);
  bodies[r].grounded = false; bodies[r].ground = null;
  chars[r].root.position.copy(world.spawn[r]);
  chars[r].setYaw(facingYaw(r));
}
ROLES.forEach(placeAtSpawn);

// what a level's special abilities (world.abilities) may use
const levelApi = {
  get kind() { return G.kind; }, get role() { return G.role; }, get active() { return G.active; },
  bodies, ctls, chars, sizeOf, fx, sound, MODE,
  mine: () => (G.kind === 'solo' ? ROLES : [G.role]),
  partnerPos: (r) => partnerPos(r),
  serverNow: () => serverNow(),
  send: (type, data) => G.net?.sendEvent(type, data),
  toast: (m) => ui.toast(m),
  caption: (m, ms) => caption(m, ms),
  get save() { return G?.save ?? null; },   // (levels may ask during boot, before G exists)
  respawn: (r) => respawn(ctls[r]),
  setSave: (k, v) => G.net?.setSave(k, v),
  /** throw one of our own bodies into the air (bubble pops, bouncy things…) */
  launch(r, vy, vx = 0, vz = 0) {
    const ctl = ctls[r];
    if (ctl.state === 'carried') return;
    if (ctl.state !== 'free') { ctl.state = 'free'; ctl.anim = MODE.normal; }
    release(ctl, new THREE.Vector3(vx, vy, vz));
    ctl.jumps = 1; ctl.airDashUsed = false;
  },
  finish: () => onLevelFinished(),
  /** true while Sun and Moon hold hands */
  get holding() { return !!G.hold; },
  /** give the team one of this level's stars (e.g. for winning a minigame) */
  collectStar(id) {
    const st = world.stars.find((x) => x.id === id);
    if (!st || st.collected) return;
    st.collected = true;
    fx.sparks(st.pos.clone().setY(st.pos.y - 0.6), 0xffe27a, 24);
    sound.play('star');
    G.net?.collectStar(id);
    updateStarCount(true);
  },
  /** play a different music track for a while (e.g. at the Trex table); null = the level's own */
  setMusic(id) { G.musicOverride = id; },
  /** stop / resume the player's controls (while a minigame screen is open) */
  setInput(on) { input.setEnabled(on); },
};
world.attach?.(levelApi);
const colliders = [];
function rebuildColliders() {
  colliders.length = 0;
  colliders.push(...world.colliders, pcols.sun, pcols.moon);
}
rebuildColliders();

// ---------------------------------------------------------------- state
const G = {
  mode: 'lobby',   // lobby | connecting | play | menu
  kind: null,      // online | local | solo
  role: 'sun',
  active: 'sun',   // which body the player controls (solo can swap)
  net: null,
  track: new RemoteTrack(),
  partnerK: null,
  cam: { yaw: 0, pitch: 0.3, dist: 8.6, zoom: clamp(+store.get('camZoom', 1) || 1, 0.55, 1.8), cur: 8.6, target: new THREE.Vector3(0, 1, 5), lastDrag: -10 },
  lastSend: 0,
  stars: {},
  cooldown: { ability: 0, heart: 0 },
  t: 0,
  save: null,       // shared story progress from the network
  starsMap: {},
  hold: false,      // holding hands
  holdHeartT: 0,
};

// ---------------------------------------------------------------- story captions
const capQ = [];
let capBusy = false, capNow = '';
function caption(text, ms = 3500) {
  if (text === capNow || capQ.some((c) => c[0] === text)) return;
  capQ.push([text, ms]);
  if (!capBusy) nextCaption();
}
function nextCaption() {
  const it = capQ.shift();
  const el = $('#caption');
  if (!it) { capBusy = false; capNow = ''; music.duck(1); return; }
  capBusy = true; capNow = it[0];
  music.duck(0.55);
  el.textContent = it[0];
  el.classList.add('on');
  setTimeout(() => { el.classList.remove('on'); setTimeout(nextCaption, 450); }, it[1]);
}
function introCaptions() {
  const i = world.intro;
  if (!i) { caption(world.title, 2600); return; }
  i.all.forEach((t) => caption(t, 2700));
  const mineTxt = G.kind === 'solo' ? null : i[G.role];
  if (mineTxt) caption(mineTxt, 3000);
}

// ---------------------------------------------------------------- levels
function switchLevel(id) {
  if (world.id === id || !LEVELS[id]) return;
  const need = (LEVELS[id].kits || []).filter((k) => !kitReady(k));
  if (need.length) {
    Promise.all(need.map((k) => loadKit(k, __BUILD__))).then(() => switchLevel(id)).catch(() => ui.toast('Could not load the town models. Check the connection and try again.'));
    return;
  }
  const wasKid = !!world.kid;
  world.dispose();
  capQ.length = 0;   // drop the old level's waiting captions
  G.portal = null;
  world = loadLevel(scene, id);
  gfx.setLevel(world, LEVELS[id], world.camYaw ? world.camYaw[G.active] ?? 0 : 0);
  memory.setLevel(world, LEVELS[id]);
  world.attach?.(levelApi);
  store.set('lastLevel', id);
  if (!!world.kid !== wasKid) makeChars();
  for (const r of ROLES) {
    const sz = sizeOf(r), b = bodies[r], c = ctls[r];
    b.r = sz.r; b.h = sz.h; pcols[r].r = sz.r * 0.92; pcols[r].ready = false;
    c.state = 'free'; c.anim = MODE.normal; c.carrying = false; c.boxCarry = false; c.wallT = 0; c.dashT = 0; c.k++;
    c.safe.copy(world.spawn[r]);
    placeAtSpawn(r);
  }
  G.hold = false;
  G.track.buf.length = 0; G.track.has = false; G.partnerK = null;
  applyCheckpoint();
  G.cpApplied = world.id;
  rebuildColliders();
  shownAll = false;
  onStars(G.starsMap);
  setTimeout(warmShaders, 30);
  if (G.mode === 'play' || G.mode === 'menu') {
    G.cam.yaw = world.camYaw ? world.camYaw[G.active] : 0; G.cam.pitch = 0.3;
    G.cam.target.copy(bodies[G.active].pos);
    fade.classList.add('on'); setTimeout(() => fade.classList.remove('on'), 350);
    if (G.book) G.afterBook = startLevelStory; else startLevelStory();
  }
}
function chooseLevel(id) {
  if (!G.net) return;
  if (id === 'prologue') G.net.setSave('prologue', null); // replay the story from the start
  if (id === 'ch1-square') G.net.setSave('ch1', null);
  if (id === 'ch1-cards') { G.net.setSave('ch1/cards', null); G.net.setSave('ch1/trex', null); }
  if (id === 'ch1-plane') { G.net.setSave('ch1/plane', null); G.net.setSave('ch1/planeDone', null); }
  if (id === 'ch2-day') { G.net.setSave('ch2/day', null); G.net.setSave('ch2/day2', null); G.net.setSave('ch2/d2', null); }
  if (id === 'ch2-call') { G.net.setSave('ch2/call', null); G.net.setSave('ch2/callDone', null); G.net.setSave('ch2/call2', null); G.net.setSave('ch2/c2', null); }
  if (id === 'ch2-shy') { G.net.setSave('ch2/shy2', null); G.net.setSave('ch2/shyOpen2', null); G.net.setSave('ch2/s3', null); }
  if (id === 'ch3-bridge') G.net.setSave('ch3', null);
  if (id === 'ch3-moving') G.net.setSave('ch3m', null);
  if (id === 'ch3-train') G.net.setSave('ch3t', null);
  G.net.setSave('cp', null);
  if (G.save) G.save.cp = null;
  G.net.setSave('level', id);
  if (G.mode === 'menu') enterPlay();
}
// ---------------------------------------------------------------- end of a part: portal + storybook page
function onLevelFinished() {
  if (G.portal || LEVELS[world.id].ch == null) return;   // the Playground has no end
  const at = (world.portal || bodies[G.active].pos).clone();
  const p = makePortal();
  p.g.position.set(at.x, at.y + p.R + 0.25, at.z);
  world.root.add(p.g);
  // the portal takes them only after the colour wave and the golden thread have played
  G.portal = { p, at, from: world.id, next: nextLevel(world.id), sent: false, waitShown: false, readyAt: performance.now() + (LEVELS[world.id].ch >= 1 ? 4500 : 0) };
  memory.restore(at);
  setTimeout(() => caption('✨ A portal opened! Step in together', 4200), 8200);
  sound.play('shine');
}
function portalUpdate(dt) {
  const P = G.portal;
  if (!P) return;
  const inside = (pos) => pos && Math.hypot(pos.x - P.at.x, pos.z - P.at.z) < 1.6 && pos.y > P.at.y - 1 && pos.y < P.at.y + 3;
  const me = bodies[G.active].pos, partner = partnerPos(G.active);
  const meIn = inside(me), partnerIn = G.kind === 'solo' ? true : inside(partner);
  P.p.update(G.t, dt, camera.position, meIn || partnerIn);
  if (meIn && !partnerIn && !P.waitShown) { P.waitShown = true; caption(`Waiting for ${G.active === 'sun' ? 'Moon' : 'Sun'}… ✨`, 3000); }
  if (meIn && Math.random() < dt * 8) fx.sparks(me.clone().setY(me.y + 1), 0xffd6f0, 4, 1.2);
  // Sun's phone (or practice) sends the two of them on
  if (!P.sent && meIn && partnerIn && performance.now() > P.readyAt && (G.kind === 'solo' || G.role === 'sun')) {
    P.sent = true;
    sound.play('star');
    G.net?.setSave('level', P.next);
  }
}

const book = $('#book');
let bookTimers = [];
/** the storybook page: "Part complete" with the stars, then it turns to the next title */
function showBook(from, to, starsGot, starsAll, then) {
  const F = LEVELS[from], T = LEVELS[to];
  const chapterDone = !T || T.ch !== F.ch;
  const C = CHAPTERS[F.ch];
  $('#pa-kicker').textContent = chapterDone ? (F.ch === 0 ? '✦ Prologue complete ✦' : `✦ ${C.title} complete ✦`) : '✦ Part complete ✦';
  $('#pa-title').textContent = F.ch === 0 ? `Prologue · ${F.name}` : `${C.title} · ${F.name}`;
  const stars = $('#pa-stars');
  stars.innerHTML = starsAll ? '<span>⭐</span>'.repeat(starsAll) : '';
  const dots = $('#pa-dots');
  dots.innerHTML = partsOf(F.ch).map((id) => `<i class="${LEVELS[id].n < F.n ? 'done' : LEVELS[id].n === F.n ? 'now' : ''}"></i>`).join('');
  const lines = F.ch === 0 ? ['Two kids. Two cities. One sky ✨'] : ['This memory shines again ✨', 'The Distance backs away… 🌫️', 'One step closer to the eclipse ☀️🌙', 'Sun and Moon, side by side ✨'];
  $('#pa-line').textContent = chapterDone && F.ch > 0 ? '✨ A golden thread is tied between your skies' : starsAll && starsGot === starsAll ? 'All starlight found! ⭐' : lines[Math.floor(Math.random() * lines.length)];
  // the next page
  const N = T && T.ch != null ? T : null;
  if (N) {
    const NC = CHAPTERS[N.ch];
    $('#pb-kicker').textContent = chapterDone ? NC.title : `${NC.title} · Part ${N.n}`;
    $('#pb-icon').textContent = NC.icon;
    $('#pb-title').textContent = chapterDone ? NC.name : N.name;
    $('#pb-part').textContent = chapterDone ? `Part ${N.n} · ${N.name}` : '';
  } else {
    const nc = CHAPTERS[(F.ch ?? 0) + 1];
    $('#pb-kicker').textContent = 'Coming soon';
    $('#pb-icon').textContent = nc ? nc.icon : '✨';
    $('#pb-title').textContent = nc ? `${nc.title} · ${nc.name}` : 'To be continued…';
    $('#pb-part').textContent = 'Meanwhile: the Playground 🏝️';
  }
  bookTimers.forEach(clearTimeout); bookTimers = [];
  G.book = true;
  input.setEnabled(false);
  music.duck(0.4);
  book.classList.remove('turn', 'ready', 'show');
  book.hidden = false;
  requestAnimationFrame(() => book.classList.add('show'));
  sound.play(chapterDone ? 'win' : 'star');
  [...stars.children].forEach((sp, i) => { if (i < starsGot) bookTimers.push(setTimeout(() => { sp.classList.add('on'); sound.play('pin'); }, 700 + i * 380)); });
  bookTimers.push(setTimeout(() => then?.(), 500));                       // switch the level behind the page
  bookTimers.push(setTimeout(() => { book.classList.add('turn'); sound.play('page'); }, 3200));
  bookTimers.push(setTimeout(() => book.classList.add('ready'), 4300));
  bookTimers.push(setTimeout(closeBook, 9000));
}
function closeBook() {
  if (!G.book) return;
  bookTimers.forEach(clearTimeout); bookTimers = [];
  book.classList.remove('show');
  setTimeout(() => { book.hidden = true; }, 450);
  G.book = false;
  music.duck(1);
  if (G.mode === 'play') input.setEnabled(true);
  const f = G.afterBook; G.afterBook = null;
  f?.();
}
$('#book-go').addEventListener('click', closeBook);

// ---------------------------------------------------------------- the storybook (chapter menu)
const BLURBS = {
  0: 'Two kids under two skies.', 1: 'A noisy Syrian server… and two people who noticed each other.', 2: 'The four-hour call. The night it became official.',
  3: 'Stone bridges, moving boxes and the last train of the year.', 4: 'Towers, prefab blocks and a balcony view.', 5: 'Old streets, jasmine and sujuk in Al-Midan.',
  6: 'Series, songs and falling asleep together.', 7: 'Coffee, cooking and laughing too loud.', 8: 'Roads, seas and waiting.', 9: 'When the sun and the moon finally meet.',
};
let sbPage = 0, sbBusy = false;
const chapterIds = Object.keys(CHAPTERS).map(Number).sort((a, b) => a - b);
function sbFill() {
  const ch = chapterIds[sbPage], C = CHAPTERS[ch], parts = partsOf(ch);
  const got = (id) => (LEVELS[id].stars || []).filter((x) => G.starsMap[x]).length;
  const all = parts.reduce((n, id) => n + (LEVELS[id].stars || []).length, 0), have = parts.reduce((n, id) => n + got(id), 0);
  $('#sb-left').innerHTML = `<div class="sb-icon">${C.icon}</div><p class="sb-kicker">${C.title}</p><h2 class="sb-title">${C.name}</h2>`
    + (parts.length ? `<p class="sb-total">⭐ ${have} / ${all}</p>` : '') + `<p class="sb-blurb">${BLURBS[ch] || ''}</p>`;
  const right = $('#sb-right');
  right.innerHTML = '';
  if (!parts.length) right.innerHTML = '<p class="sb-soon">✍️ This page is still being written…<br>Coming soon</p>';
  for (const id of parts) {
    const L = LEVELS[id], row = document.createElement('div');
    row.className = 'sb-part' + (id === world.id ? ' here' : '');
    row.innerHTML = `<span class="num">${ch === 0 ? '✦' : L.n}</span><span class="nm">${L.name}</span><span class="st">${'⭐'.repeat(got(id))}${'☆'.repeat((L.stars || []).length - got(id))}</span>`;
    const go = document.createElement('button');
    go.textContent = id === world.id ? 'Restart' : 'Play';
    go.addEventListener('click', () => { $('#story').hidden = true; chooseLevel(id); });
    row.appendChild(go);
    right.appendChild(row);
  }
  if (ch === chapterIds[chapterIds.length - 1] || !partsOf(ch + 1).length) {
    const pg = document.createElement('div');
    pg.className = 'sb-part';
    pg.innerHTML = '<span class="num">🏝️</span><span class="nm">The Playground</span><span class="st"></span>';
    const go = document.createElement('button');
    go.textContent = 'Visit';
    go.addEventListener('click', () => { $('#story').hidden = true; chooseLevel('playground'); });
    pg.appendChild(go);
    if (!parts.length) right.appendChild(pg);
  }
  $('#sb-prev').disabled = sbPage === 0;
  $('#sb-next').disabled = sbPage === chapterIds.length - 1;
  $('#sb-tabs').innerHTML = chapterIds.map((c, i) => `<i class="${i === sbPage ? 'on' : ''} ${partsOf(c).length ? 'open' : ''}" data-i="${i}"></i>`).join('');
}
function sbFlip(to) {
  if (sbBusy || to < 0 || to >= chapterIds.length || to === sbPage) return;
  sbBusy = true;
  const sp = $('#sb-spread'), dir = to > sbPage ? 'next' : 'prev';
  sound.play('page');
  sp.classList.add('out-' + dir);
  setTimeout(() => {
    sbPage = to; sbFill();
    sp.classList.remove('out-' + dir);
    sp.classList.add('in-' + dir);
    void sp.offsetWidth;
    sp.classList.remove('in-' + dir);
    setTimeout(() => { sbBusy = false; }, 380);
  }, 380);
}
function openStory() {
  sbPage = Math.max(0, chapterIds.indexOf(LEVELS[world.id]?.ch ?? 0));
  sbFill();
  $('#conn').hidden = true;
  $('#story').hidden = false;
  sound.play('open');
}
$('#open-story').addEventListener('click', openStory);
$('#sb-prev').addEventListener('click', () => sbFlip(sbPage - 1));
$('#sb-next').addEventListener('click', () => sbFlip(sbPage + 1));
$('#sb-tabs').addEventListener('click', (e) => { const i = e.target.dataset?.i; if (i != null) sbFlip(+i); });
$('#sb-close').addEventListener('click', () => { $('#story').hidden = true; $('#conn').hidden = false; sound.play('close'); });
// swipe to turn pages
{
  let x0 = null;
  const el = $('#story');
  el.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  el.addEventListener('touchend', (e) => { if (x0 == null) return; const dx = e.changedTouches[0].clientX - x0; x0 = null; if (Math.abs(dx) > 50) sbFlip(sbPage + (dx < 0 ? 1 : -1)); });
}

// the shared clock (tests can push it forward with sim())
let clockSkew = 0;
const baseNow = () => (G.net ? G.net.serverNow() : Date.now());
const serverNow = () => baseNow() + clockSkew;

// ---------------------------------------------------------------- UI & input
const input = createInput({
  canvas,
  joyZone: $('#joy-zone'), joyBase: $('#joy-base'), joyKnob: $('#joy-knob'),
  buttons: { jump: $('#btn-jump'), ability: $('#btn-ability'), heart: $('#btn-heart'), swap: $('#btn-swap'), dash: $('#btn-dash'), lift: $('#btn-lift') },
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
  net.on('save', (sv) => {
    G.save = sv;
    // both phones always follow the shared level; a new room starts at the Prologue
    const lvl = sv.level || 'prologue';
    if (lvl === world.id && G.cpApplied !== world.id) { G.cpApplied = world.id; applyCheckpoint(); }
    if (lvl !== world.id) {
      if (G.portal && G.portal.from === world.id && G.mode === 'play') {
        const got = world.stars.filter((x) => x.collected).length, all = world.stars.length, from = world.id;
        G.portal = null;
        showBook(from, lvl, got, all, () => switchLevel(lvl));
      } else switchLevel(lvl);
    }
  });
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
    G.cam.yaw = world.camYaw ? world.camYaw[G.active] : 0; G.cam.pitch = 0.3;
    G.cam.target.copy(bodies[G.active].pos).add(new THREE.Vector3(0, 1.1, 0));
    if (isTouch && innerHeight > innerWidth && !store.get('rotateOk', false)) $('#rotate-hint').hidden = false;
    if (G.kind === 'solo') ui.toast('Practice: ⇄ switches characters · ☰ → choose a level');
    if (world.id === 'playground') setTimeout(() => caption('Chapter 1 is waiting: open ☰ and choose a level ✨', 4500), 3000);
    if (!store.get('introSeen', false)) playIntro(() => startLevelStory());   // the intro film, once per phone
    else startLevelStory();
  }
}

// ---------------------------------------------------------------- intro film
// films: the intro and Dr. Bata's story scenes. Played one after another (queue), skippable,
// each remembered per phone once seen.
const FILMS = { intro: 'assets/intro.mp4', 'bata-1': 'assets/cut/bata-1.mp4', 'bata-2': 'assets/cut/bata-2.mp4' };
const filmQueue = [];
let filmNow = null;
const filmSeen = (id) => (id === 'intro' ? store.get('introSeen', false) : store.get('film.' + id, false));
function playFilm(id, then) {
  if (filmNow === id || filmQueue.some((q) => q[0] === id)) { if (then) filmQueue.push([null, then]); return; }
  if (G.intro) { filmQueue.push([id, then]); return; }
  if (!id) { then?.(); nextFilm(); return; }
  const box = $('#intro'), v = box.querySelector('video'), snd = $('#intro-sound');
  G.intro = true;
  filmNow = id;
  input.setEnabled(false);
  box.hidden = false;
  snd.hidden = true;
  v.muted = false;
  v.src = `${FILMS[id]}?v=${__BUILD__}`;
  const done = () => {
    if (!G.intro || filmNow !== id) return;
    G.intro = false;
    filmNow = null;
    v.pause();
    box.hidden = true;
    v.removeAttribute('src'); v.load();
    if (id === 'intro') store.set('introSeen', true); else store.set('film.' + id, true);
    if (G.mode === 'play') input.setEnabled(true);
    then?.();
    nextFilm();
  };
  v.onended = done;
  v.onerror = done;
  $('#intro-skip').onclick = done;
  snd.onclick = () => { v.muted = false; snd.hidden = true; v.play().catch(() => {}); };
  // if the phone refuses to start it with sound (no tap just before), play muted with a "tap for sound" button
  const p = v.play();
  if (p) p.catch(() => { v.muted = true; snd.hidden = false; v.play().catch(done); });
}
function nextFilm() {
  if (G.intro || !filmQueue.length) return;
  const [id, then] = filmQueue.shift();
  playFilm(id, then);
}
const playIntro = (then) => playFilm('intro', then);
/** story scenes that belong at the start of a level (each phone plays the ones it hasn't seen) */
function levelFilms(id) {
  if (id === 'ch1-square') return ['bata-1', 'bata-2'].filter((f) => !filmSeen(f));
  return [];
}
function startLevelStory() {
  const films = levelFilms(world.id);
  if (!films.length) { introCaptions(); return; }
  films.forEach((f, i) => playFilm(f, i === films.length - 1 ? () => introCaptions() : null));
}

// a soft click for menu buttons (not the game buttons, they make their own sounds)
document.addEventListener('click', (e) => { const btn = e.target.closest('button'); if (btn && !btn.closest('#hud')) sound.play('click'); });
const musicBtn = $('#opt-music');
const paintMusic = () => { musicBtn.textContent = music.enabled ? '🎵 Music on' : '🎵 Music off'; };
paintMusic();
musicBtn.addEventListener('click', () => { music.toggle(); paintMusic(); });
let creditsFrom = null;
const openCredits = (from) => { creditsFrom = from; from.hidden = true; $('#credits').hidden = false; $('#credits').scrollTop = 0; };
$('#credits-close').addEventListener('click', () => { $('#credits').hidden = true; if (creditsFrom) creditsFrom.hidden = false; });
$('#lobby-credits').addEventListener('click', () => openCredits($('#lobby')));
$('#opt-credits').addEventListener('click', () => openCredits($('#conn')));
$('#opt-intro').addEventListener('click', () => { if (G.mode === 'menu') enterPlay(); playIntro(); });
$('#opt-bata').addEventListener('click', () => { if (G.mode === 'menu') enterPlay(); playFilm('bata-1'); playFilm('bata-2'); });

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
  if (world.abilities?.onEvent(e)) return;
  if (e.type === 'heart') {
    fx.hearts(c.root.position, e.from === 'sun' ? 0xffa64d : 0xb48cff);
    ui.toast(`${ROLE_EMOJI[e.from]} ${ROLE_NAME[e.from]} sent you a heart ${e.from === 'sun' ? '🧡' : '💜'}`);
    sound.play('heart');
  } else if (e.type === 'ability') {
    useAbilityFx(e.from);
  } else if (e.type === 'lift' && G.role === 'moon') {
    const mc = ctls.moon, b = bodies.moon;
    if (mc.state === 'free' && G.track.has && b.pos.distanceTo(G.track.pos) < 2.6) { mc.state = 'carried'; sound.play('jump2'); }
  } else if (e.type === 'throw' && G.role === 'moon') {
    if (ctls.moon.state === 'carried' && Array.isArray(e.v)) release(ctls.moon, new THREE.Vector3(e.v[0], e.v[1], e.v[2]));
  } else if (e.type === 'drop' && G.role === 'sun') {
    ctls.sun.carrying = false;
  } else if (e.type === 'hold') {
    if (e.on && handReachable(G.role, 3.2)) setHold(true, false);
    else if (!e.on) setHold(false, false);
  } else if (e.type === 'hjump' && G.hold) {
    ctls[G.role].forceJump = true;
  }
}
function useAbilityFx(role) {
  if (role === 'sun') { fx.shine(chars.sun); sound.play('shine'); } else { fx.tide(chars.moon); sound.play('tide'); }
}
function onStars(map) {
  G.starsMap = map || {};
  map = G.starsMap;
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
const SPEED = 5.6, JUMP = 11, JUMP2 = 9.5, WALL_UP = 10.5, WALL_OUT = 6.2, DASH_SPEED = 14, DASH_TIME = 0.17;
const _v = new THREE.Vector3();
const fade = $('#fade');

function control(ctl, mv, wantJump, jumpHeld, dt, wantDash = false) {
  const b = ctl.body, role = ctl.role;
  // camera-relative input direction
  const yaw = G.cam.yaw;
  const fx_ = -Math.sin(yaw), fz = -Math.cos(yaw), rx = Math.cos(yaw), rz = -Math.sin(yaw);
  let mag = Math.min(1, Math.hypot(mv.x, mv.y));
  let ix = rx * mv.x + fx_ * mv.y, iz = rz * mv.x + fz * mv.y;
  const il = Math.hypot(ix, iz);
  if (il > 1e-4) { ix /= il; iz /= il; } else { ix = 0; iz = 0; }
  // side-view sections: left/right only, along the lane
  const lane = (ctl.lane = laneAt(b.pos));
  if (lane) {
    const m = Math.abs(mv.x) > 0.15 ? mv.x : 0;
    mag = Math.min(1, Math.abs(m));
    ix = lane.ax * Math.sign(m); iz = lane.az * Math.sign(m);
  }
  ctl.regrab = Math.max(0, ctl.regrab - dt);
  ctl.wjLock = Math.max(0, ctl.wjLock - dt);

  const forced = ctl.forceJump;
  if (forced) { wantJump = true; ctl.forceJump = false; }
  if (ctl.state === 'carried') return carriedUpdate(ctl, wantJump);
  if (ctl.state === 'hang') return hangUpdate(ctl, ix, iz, mag, wantJump, dt);
  if (ctl.state === 'climb') return climbUpdate(ctl, dt);
  if (ctl.state === 'ride') { if (world.abilities?.ride) world.abilities.ride(ctl, dt, wantJump); else ctl.state = 'free'; return; }

  // dash: a quick burst in the stick direction (or where you face); one dash per jump in the air
  ctl.dashCd -= dt;
  if (b.grounded) ctl.airDashUsed = false;
  if (wantDash && ctl.dashCd <= 0 && !ctl.carrying && !ctl.boxCarry && (b.grounded || !ctl.airDashUsed)) {
    let ddx = ix, ddz = iz;
    if (mag < 0.2) { const y = chars[role].yaw; ddx = Math.sin(y); ddz = Math.cos(y); }
    if (lane) { const sg = Math.sign(ddx * lane.ax + ddz * lane.az) || 1; ddx = lane.ax * sg; ddz = lane.az * sg; }
    ctl.dashX = ddx; ctl.dashZ = ddz; ctl.dashT = DASH_TIME; ctl.dashCd = 0.45;
    if (!b.grounded) ctl.airDashUsed = true;
    chars[role].setYaw(Math.atan2(ddx, ddz));
    sound.play('dash'); fx.dust(b.pos, 4);
  }

  const speed = SPEED * (ctl.carrying ? 0.82 : 1);
  if (ctl.dashT > 0) {
    ctl.dashT -= dt;
    b.vel.x = ctl.dashX * DASH_SPEED; b.vel.z = ctl.dashZ * DASH_SPEED;
    if (!b.grounded) b.vel.y = Math.max(b.vel.y, 0);
    if (Math.random() < 0.6) fx.dust(_v.copy(b.pos).add(new THREE.Vector3(0, b.h * 0.4, 0)), 1);
  } else {
    if (G.hold) { // holding hands: a soft spring keeps you together
      const pp = partnerPos(role);
      if (pp) {
        const hx = pp.x - b.pos.x, hz = pp.z - b.pos.z, d = Math.hypot(hx, hz);
        if (d > 1.05) {
          const a = Math.min(20, (d - 1.05) * 14) * dt;
          b.vel.x += (hx / d) * a; b.vel.z += (hz / d) * a;
          if (d > 1.9) { b.pos.x += (hx / d) * (d - 1.9) * 0.5; b.pos.z += (hz / d) * (d - 1.9) * 0.5; }
        }
      }
    }
    const dx = ix * speed * mag, dz = iz * speed * mag;
    const accel = (b.grounded ? 48 : ctl.wjLock > 0 ? 5 : 24) * dt;
    let ex = dx - b.vel.x, ez = dz - b.vel.z;
    const el = Math.hypot(ex, ez);
    if (el > accel) { ex *= accel / el; ez *= accel / el; }
    b.vel.x += ex; b.vel.z += ez;
  }

  // forgiving jumps: coyote time, jump buffer, one air jump, wall jumps
  if (b.grounded) { ctl.coyote = 0.13; ctl.jumps = 0; ctl.airT = 0; ctl.wallT = 0; } else { ctl.coyote -= dt; ctl.airT += dt; }
  ctl.buffer = wantJump ? 0.16 : ctl.buffer - dt;
  if (ctl.buffer > 0) {
    if (b.grounded || ctl.coyote > 0) {
      b.vel.y = ctl.carrying ? JUMP * 0.88 : G.hold ? JUMP * 1.12 : JUMP; ctl.jumps = 1; ctl.coyote = 0; ctl.buffer = 0; ctl.cut = G.hold;
      b.grounded = false; b.ground = null;
      sound.play('jump'); fx.dust(b.pos, 4);
      if (G.hold) { // jumping while holding hands: you both jump, higher, with a twirl
        chars[role].spin();
        if (!forced) { if (G.kind === 'solo') ctls[otherRole(role)].forceJump = true; else G.net.sendEvent('hjump'); }
      }
    } else if (ctl.wallT > 0 && !ctl.carrying) {
      b.vel.set(ctl.wallNX * WALL_OUT, WALL_UP, ctl.wallNZ * WALL_OUT);
      ctl.jumps = 1; ctl.buffer = 0; ctl.cut = true; ctl.wallT = 0; ctl.wjLock = 0.2;
      chars[role].setYaw(Math.atan2(ctl.wallNX, ctl.wallNZ));
      sound.play('jump'); fx.dust(_v.copy(b.pos).add(new THREE.Vector3(-ctl.wallNX * b.r, b.h * 0.5, -ctl.wallNZ * b.r)), 3);
    } else if (ctl.jumps < 2 && !ctl.carrying) {
      b.vel.y = JUMP2; ctl.jumps = 2; ctl.buffer = 0; ctl.cut = true;
      chars[role].spin();
      sound.play('jump2'); fx.sparks(b.pos.clone().setY(b.pos.y - 0.5), role === 'sun' ? 0xffb080 : 0xc9a8ff, 8, 1.5);
    }
  }
  if (!jumpHeld && !ctl.cut && b.vel.y > 6) { b.vel.y = 6; ctl.cut = true; } // short hop when released early

  // Moon floats down gently while jump is held; wall slides are slow
  const gliding = role === 'moon' && !b.grounded && jumpHeld && b.vel.y < 0 && ctl.airT > 0.15 && ctl.wallT <= 0;
  b.maxFall = gliding ? 2.2 : ctl.wallT > 0 ? 3.2 : 28;

  if (lane) pinToLane(b, lane, dt);
  const landed = moveBody(b, colliders, dt);
  if (landed) {
    if (landed.collider.bounce) {
      sound.play('bounce'); world.bounce(landed.collider); ctl.jumps = 1; ctl.cut = true;
      chars[role].land(10);
    } else if (landed.impact > 7) {
      sound.play('land', { vol: Math.min(1, 0.35 + (landed.impact - 7) / 14) }); fx.dust(b.pos, 6); chars[role].land(landed.impact);
    } else chars[role].land(landed.impact);
  }

  // touching a wall in the air → wall slide (a jump now bounces off it)
  // (only on walls made for it, so single walls can't be climbed alone)
  if (!b.grounded && b.wallC && b.wallC.wallJump && b.vel.y < 2.5) { ctl.wallT = 0.18; ctl.wallNX = b.wallNX; ctl.wallNZ = b.wallNZ; }
  else ctl.wallT -= dt;
  if (b.grounded) ctl.wallT = 0;

  // grab a ledge when you just miss it
  if (!b.grounded && !ctl.carrying && ctl.regrab <= 0 && b.vel.y < 3.5) {
    const L = findLedge(b, colliders);
    if (L) {
      const toward = -(ix * L.nx + iz * L.nz) * mag;
      const vToward = -(b.vel.x * L.nx + b.vel.z * L.nz);
      if (toward > 0.2 || vToward > 0.8 || ctl.wallT > 0) startHang(ctl, L);
    }
  }

  if (ctl.wallT > 0 || ctl.state === 'hang') ctl.airDashUsed = false;
  if (ctl.state === 'free') ctl.anim = ctl.dashT > 0 ? MODE.dash : gliding ? MODE.glide : (ctl.wallT > 0 && !b.grounded) ? MODE.wall : (ctl.carrying || ctl.boxCarry) ? MODE.carry : MODE.normal;

  // remember a safe spot to respawn
  if (b.grounded && b.ground && b.ground.safe) {
    ctl.safeT += dt;
    if (ctl.safeT > 0.35) ctl.safe.copy(b.pos);
  } else ctl.safeT = 0;

  if (b.pos.y < world.killY || world.killAt?.(b.pos)) respawn(ctl);
}

// ---------------------------------------------------------------- side-view lanes
// world.lanes: [{ ax, az (unit, = screen right), px, pz (start), len, half, y0, y1, dist, pitch }]
function laneAt(p) {
  const L = world.lanes;
  if (!L) return null;
  for (const l of L) {
    if (p.y < l.y0 || p.y > l.y1) continue;
    const dx = p.x - l.px, dz = p.z - l.pz;
    const t = dx * l.ax + dz * l.az, o = dx * -l.az + dz * l.ax;
    if (t >= -0.5 && t <= l.len + 0.5 && Math.abs(o) <= l.half) return l;
  }
  return null;
}
function pinToLane(b, l, dt) {
  const nx = -l.az, nz = l.ax;
  const o = (b.pos.x - l.px) * nx + (b.pos.z - l.pz) * nz - (l.off || 0);
  const k = Math.min(1, dt * 10);
  b.pos.x -= nx * o * k; b.pos.z -= nz * o * k;
  const vn = b.vel.x * nx + b.vel.z * nz;
  b.vel.x -= nx * vn; b.vel.z -= nz * vn;
}

// ---------------------------------------------------------------- checkpoints
// world.checkpoints: [{ x, y, z, r, spawn: { sun: Vector3, moon: Vector3 }, yaw?, label? }]. Reaching one saves
// cp = { l: level, i } for both; loading the level (or reloading the page) starts there.
function checkpointUpdate() {
  const C = world.checkpoints;
  if (!C || G.mode !== 'play' || !G.net) return;
  const cur = G.save?.cp?.l === world.id ? G.save.cp.i : -1;
  const mine = G.kind === 'solo' ? [G.active] : [G.role];
  for (let i = cur + 1; i < C.length; i++) {
    const c = C[i];
    if (mine.some((r) => { const p = bodies[r].pos; return Math.hypot(p.x - c.x, p.z - c.z) < c.r && Math.abs(p.y - c.y) < 3; })) {
      G.net.setSave('cp', { l: world.id, i });
      if (G.save) G.save.cp = { l: world.id, i };
      for (const r of ROLES) ctls[r].safe.copy(c.spawn[r]);
      caption(`✦ Checkpoint${c.label ? ': ' + c.label : ''}`, 2200);
      sound.play('star', { vol: 0.5 });
      break;
    }
  }
}
function applyCheckpoint() {
  const cp = G.save?.cp;
  if (!cp || cp.l !== world.id || !world.checkpoints?.[cp.i]) return false;
  const c = world.checkpoints[cp.i];
  for (const r of ROLES) {
    bodies[r].pos.copy(c.spawn[r]); bodies[r].vel.set(0, 0, 0);
    bodies[r].grounded = false; bodies[r].ground = null;
    chars[r].root.position.copy(c.spawn[r]);
    ctls[r].safe.copy(c.spawn[r]);
  }
  if (c.yaw != null) G.cam.yaw = c.yaw;
  G.cam.target.copy(bodies[G.active].pos);
  world.onCheckpoint?.(cp.i, G.save);
  return true;
}

function startHang(ctl, L) {
  const b = ctl.body;
  ctl.dashT = 0; ctl.airDashUsed = false;
  ctl.state = 'hang'; ctl.ledge = L; ctl.hangT = 0; ctl.anim = MODE.hang;
  b.vel.set(0, 0, 0); b.grounded = false; b.ground = null;
  b.pos.y = L.top - b.h * 0.92;
  chars[ctl.role].setYaw(Math.atan2(-L.nx, -L.nz));
  sound.play('land');
}
function hangUpdate(ctl, ix, iz, mag, wantJump, dt) {
  const b = ctl.body, L = ctl.ledge;
  b.vel.set(0, 0, 0); b.grounded = false;
  ctl.hangT += dt; ctl.anim = MODE.hang;
  const toward = -(ix * L.nx + iz * L.nz) * mag;
  if (L.c.disabled) { ctl.state = 'free'; ctl.regrab = 0.4; return; }
  if (wantJump || (toward > 0.5 && ctl.hangT > 0.12)) {
    ctl.state = 'climb'; ctl.climbT = 0; ctl.anim = MODE.climb;
    ctl.from.copy(b.pos); ctl.to.set(L.lx, L.top, L.lz);
    sound.play('jump');
  } else if (toward < -0.6 && ctl.hangT > 0.15) {
    ctl.state = 'free'; ctl.regrab = 0.45;
    b.vel.set(L.nx * 1.5, 0, L.nz * 1.5);
  }
}
function climbUpdate(ctl, dt) {
  const b = ctl.body;
  ctl.climbT += dt / 0.34;
  const k = Math.min(1, ctl.climbT);
  b.pos.y = ctl.from.y + (ctl.to.y - ctl.from.y) * Math.min(1, k * 1.7);
  const h = smoother(clamp((k - 0.35) / 0.65, 0, 1));
  b.pos.x = ctl.from.x + (ctl.to.x - ctl.from.x) * h;
  b.pos.z = ctl.from.z + (ctl.to.z - ctl.from.z) * h;
  ctl.anim = MODE.climb;
  if (k >= 1) {
    ctl.state = 'free'; ctl.anim = MODE.normal;
    b.pos.copy(ctl.to); b.vel.set(0, 0, 0);
    b.grounded = true; b.ground = ctl.ledge.c; ctl.jumps = 0;
  }
}

// ---- Sun lifts and throws Moon
function partnerPos(role) {
  const other = otherRole(role);
  if (G.kind === 'solo') return bodies[other].pos;
  return G.track.has && G.net?.status.partnerOnline ? G.track.pos : null;
}
function canLift() {
  if (world.kid) return false;
  const sb = bodies.sun, mp = partnerPos('sun');
  if (!mp || !sb.grounded || ctls.sun.state !== 'free') return false;
  if (G.kind === 'solo' && ctls.moon.state !== 'free') return false;
  return Math.hypot(mp.x - sb.pos.x, mp.z - sb.pos.z) < 1.5 && Math.abs(mp.y - sb.pos.y) < 1.2;
}
function sunAction() {
  const sc = ctls.sun;
  if (sc.carrying) {
    const y = chars.sun.yaw, b = bodies.sun;
    const v = new THREE.Vector3(Math.sin(y) * 6.5 + b.vel.x * 0.5, 12.5, Math.cos(y) * 6.5 + b.vel.z * 0.5);
    sc.carrying = false;
    chars.sun.throwAnim();
    sound.play('bounce');
    if (G.kind === 'solo') release(ctls.moon, v);
    else G.net.sendEvent('throw', { v: [round3(v.x), round3(v.y), round3(v.z)] });
    return true;
  }
  if (canLift()) {
    sc.carrying = true; sc.liftT = performance.now(); sc.liftSeen = false; sc.notCarriedT = 0;
    sound.play('jump2');
    if (G.kind === 'solo') ctls.moon.state = 'carried';
    else G.net.sendEvent('lift');
    return true;
  }
  return false;
}
const LIFT_UP = 0.24;
function carriedUpdate(ctl, wantJump) {
  const b = ctl.body;
  const carrier = G.kind === 'solo' ? bodies.sun.pos : (G.track.has && G.net.status.partnerOnline ? G.track.pos : null);
  if (!carrier) { release(ctl, new THREE.Vector3(0, 4, 0)); return; }
  b.pos.set(carrier.x, carrier.y + sizeOf('sun').h + LIFT_UP, carrier.z);   // on his raised hands
  b.vel.set(0, 0, 0); b.grounded = true; b.ground = null;
  ctl.anim = MODE.carried;
  chars[ctl.role].setYaw(chars.sun.yaw);
  if (wantJump) {
    release(ctl, new THREE.Vector3(0, 9.5, 0));
    if (G.kind === 'solo') ctls.sun.carrying = false; else G.net.sendEvent('drop');
  }
}
function release(ctl, v) {
  const b = ctl.body;
  ctl.state = 'free'; ctl.anim = MODE.normal;
  b.vel.copy(v); b.grounded = false; b.ground = null;
  ctl.jumps = 1; ctl.cut = true; ctl.regrab = 0.25; ctl.airT = 0.2; ctl.coyote = 0;
  if (Math.hypot(v.x, v.z) > 2) ctl.wjLock = 0.5; // a throw carries you for a moment
}

function respawn(ctl) {
  const b = ctl.body;
  ctl.state = 'free'; ctl.anim = MODE.normal; ctl.wallT = 0;
  if (ctl.role === 'sun' && ctl.carrying) { ctl.carrying = false; if (G.kind === 'solo') release(ctls.moon, new THREE.Vector3(0, 2, 0)); }
  b.pos.copy(ctl.safe).add(_v.set(0, 0.3, 0));
  // on shared paths (one path for both, crossings need both lights) you come back next to your partner,
  // like in It Takes Two, so the two of you can never end up stuck on opposite sides
  if (world.respawnNearPartner) {
    const other = otherRole(ctl.role), pp = partnerPos(ctl.role);
    const grounded = G.kind === 'solo' ? bodies[other].grounded : G.track.grounded;
    const ok = typeof world.respawnNearPartner !== 'function' || world.respawnNearPartner(pp, ctl.safe);
    if (ok && pp && grounded && pp.y > world.killY + 4) b.pos.set(pp.x, pp.y + 1.2, pp.z + 0.9);
  }
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

// ---- holding hands
function handReachable(role, range = 1.9) {
  const pp = partnerPos(role), b = bodies[role];
  if (!pp || ctls[role].state !== 'free' || ctls.sun.carrying) return false;
  return Math.hypot(pp.x - b.pos.x, pp.z - b.pos.z) < range && Math.abs(pp.y - b.pos.y) < 1.0;
}
function setHold(on, send) {
  if (G.hold === on) return;
  G.hold = on;
  if (send && G.kind !== 'solo') G.net.sendEvent('hold', { on });
  if (on) {
    sound.play('heart');
    const a = bodies.sun.pos, b = bodies.moon.pos;
    fx.hearts(new THREE.Vector3().addVectors(a, partnerPos('sun') || b).multiplyScalar(0.5), 0xff7eb6);
    if (!G.holdHintShown) { G.holdHintShown = true; ui.toast('Holding hands 💞 Jump together!'); }
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
  const s = { t: Math.round(serverNow()), v: [round3(b.vel.x), round3(b.vel.y), round3(b.vel.z)], r: round3(chars[G.role].yaw), g: b.grounded ? 1 : 0, k: ctl.k, m: ctl.anim, l: world.id };
  let base = null;
  if (ctl.state === 'carried' && G.track.has) { base = G.track.pos; s.b = otherRole(G.role); }
  else if (b.grounded && b.ground) {
    if (b.ground.id === 'raft' && world.movers?.raft) base = world.movers.raft.pos(serverNow(), new THREE.Vector3());
    else if (b.ground === pcols[otherRole(G.role)] && G.track.has) base = G.track.pos;
    if (base) s.b = b.ground.id === 'raft' ? 'raft' : otherRole(G.role);
  }
  s.p = base ? [round3(b.pos.x - base.x), round3(b.pos.y - base.y), round3(b.pos.z - base.z)] : [round3(b.pos.x), round3(b.pos.y), round3(b.pos.z)];
  G.net.sendState(s);
}
function resolveBase(id, out) {
  if (id === 'raft') return world.movers?.raft ? world.movers.raft.pos(serverNow(), out) : null;
  if (id === G.role) return out.copy(bodies[G.role].pos);
  return null;
}

// ---------------------------------------------------------------- camera
/** what the camera is looking at (sharp, and the centre of the shadows), and how "story-like" the moment is */
const _focus = new THREE.Vector3();
function lookFocus() {
  if (G.photo) return { focus: _focus.set(...G.photo.look), story: G.photo.dof || 0 };
  if (G.mode === 'lobby' || G.mode === 'connecting') {
    const L = world.lobbyCam || { cx: 6, cz: -2 };
    return { focus: _focus.set(L.cx, 0.5, L.cz), story: 1 };
  }
  let story = 0;
  if (G.bata?.root.visible) story = 0.8;
  if (G.portal && bodies[G.active] && Math.hypot(bodies[G.active].pos.x - G.portal.at.x, bodies[G.active].pos.z - G.portal.at.z) < 2.2) story = 0.7;
  return { focus: _focus.copy(G.cam.target), story };
}
const _look = new THREE.Vector3();
function updateCamera(dt) {
  const c = G.cam;
  // photo mode (for making stills): a fixed camera set from the console / tests
  if (G.photo) {
    camera.position.set(...G.photo.pos);
    if (G.photo.fov && camera.fov !== G.photo.fov) { camera.fov = G.photo.fov; camera.updateProjectionMatrix(); }
    camera.lookAt(...G.photo.look);
    return;
  }
  if (G.mode === 'lobby' || G.mode === 'connecting') {
    const a = G.t * 0.06;
    const L = world.lobbyCam || { cx: 6, cz: -2, r: 24, h: 10 };
    const R = L.r * (camera.aspect < 1 ? 1.5 : 1);
    camera.position.set(L.cx + Math.sin(a) * R, L.h + Math.sin(G.t * 0.1) * 1.5, L.cz + Math.cos(a) * R);
    camera.lookAt(L.cx, 0.5, L.cz);
    return;
  }
  const d = input.takeCam();
  const ln = ctls[G.active]?.lane;
  if (ln) {   // side view: the camera swings to the side of the lane and stays there
    c.yaw = dampAngle(c.yaw, Math.atan2(-ln.az, ln.ax), 4, dt);
    c.pitch = damp(c.pitch, ln.pitch ?? 0.14, 4, dt);
    c.lastDrag = G.t;
  } else if (d.x || d.y) {
    c.yaw -= d.x * 0.0065;
    c.pitch = clamp(c.pitch + d.y * 0.0045, -0.2, 1.2);
    c.lastDrag = G.t;
  }
  const b = bodies[G.active];
  // camera corridors (narrow streets): keep the camera looking along the street, a bit from above
  const cz = !ln && world.camZones?.find((z) => b.pos.x > z.x0 && b.pos.x < z.x1 && b.pos.z > z.z0 && b.pos.z < z.z1 && b.pos.y < (z.y1 ?? 1e9));
  if (cz) {
    const dy = angleDiff(cz.yaw, c.yaw);
    if (Math.abs(dy) > cz.spread) c.yaw = dampAngle(c.yaw, cz.yaw + Math.sign(dy) * cz.spread, 6, dt);
    if (c.pitch < cz.pitchMin) c.pitch = damp(c.pitch, cz.pitchMin, 4, dt);
  }
  // gently swing the camera behind the direction of travel (never when walking towards the camera)
  const sp = Math.hypot(b.vel.x, b.vel.z);
  if (sp > 1.5 && G.t - c.lastDrag > 1.2 && !ln) {
    const behind = Math.atan2(-b.vel.x, -b.vel.z);
    const diff = angleDiff(c.yaw, behind);
    if (Math.abs(diff) < 1.75) c.yaw += clamp(diff, -1, 1) * Math.min(1, sp / SPEED) * 0.9 * dt;
  }
  _look.copy(b.pos);
  _look.y += b.h * 0.8;
  c.target.x = damp(c.target.x, _look.x, 12, dt);
  c.target.z = damp(c.target.z, _look.z, 12, dt);
  c.target.y = damp(c.target.y, _look.y, b.grounded ? 8 : 3.5, dt);
  const z = input.takeZoom();
  if (z !== 1 && Number.isFinite(z) && z > 0) { c.zoom = clamp(c.zoom * z, 0.55, 1.8); store.set('camZoom', +c.zoom.toFixed(2)); }
  if (!Number.isFinite(c.zoom)) c.zoom = 1;
  if (!Number.isFinite(c.cur)) c.cur = c.dist;
  const want = ln ? (ln.dist ?? 11) * (camera.aspect < 1 ? 1.35 : 1) : c.dist * c.zoom * (camera.aspect < 1 ? 1.2 : 1) * (world.kid ? 0.88 : 1);
  // a wall right behind the player: rise and look down over it instead of pressing against it
  const dirAt = (p) => _dir.set(Math.sin(c.yaw) * Math.cos(p), Math.sin(p), Math.cos(c.yaw) * Math.cos(p));
  let craneWant = 0;
  const h0 = ln ? want : camHit(c.target, dirAt(c.pitch), want);
  if (h0 < want * 0.55) {
    // the angle that gives the most room (a tall wall close behind: nearly top-down)
    let bestH = h0 * 1.4 + 0.5;
    for (const extra of [0.3, 0.55, 0.8, 1.05, 1.2]) {
      const p2 = Math.min(1.42, c.pitch + extra), h2 = camHit(c.target, dirAt(p2), want);
      if (h2 > bestH) { bestH = h2; craneWant = p2 - c.pitch; }
      if (h2 >= want * 0.75) break;
    }
  }
  c.crane = damp(c.crane || 0, craneWant, craneWant > (c.crane || 0) ? 4 : 1.5, dt);
  const pitchNow = Math.min(1.4, c.pitch + c.crane);
  dirAt(pitchNow);
  // don't let walls and blocks get between the camera and the player: pull in fast, ease back out
  const hit = camHit(c.target, _dir, want);
  const dist = Math.min(want, Math.max(1.4, hit - 0.35));
  c.cur = dist < c.cur ? dist : damp(c.cur, dist, 2.5, dt);
  camera.position.copy(c.target).addScaledVector(_dir, c.cur);
  if (camera.position.y < c.target.y - 1.0) camera.position.y = c.target.y - 1.0;
  camera.lookAt(c.target);
  hideOccluders();
}

// distance along the ray (origin o, unit direction d) to the first world collider, or Infinity
const _dir = new THREE.Vector3();
function camHit(o, d, maxT) {
  let best = Infinity;
  const pad = 0.25;
  for (const k of world.colliders) {
    if (k.disabled || k.noCam) continue;
    // thin things (posts, trunks, railings) don't push the camera; they get hidden instead
    if (k.type === 'box' ? Math.min(k.x1 - k.x0, k.z1 - k.z0) < 0.5 : k.r < 0.45) continue;
    let t0 = 0, t1 = maxT;
    // vertical slab (little padding on top, so the camera can look over low hedges)
    const y0 = k.bottom - pad, y1 = k.top + 0.08;
    if (Math.abs(d.y) < 1e-6) { if (o.y < y0 || o.y > y1) continue; } else {
      let a = (y0 - o.y) / d.y, b = (y1 - o.y) / d.y;
      if (a > b) [a, b] = [b, a];
      t0 = Math.max(t0, a); t1 = Math.min(t1, b);
      if (t0 > t1) continue;
    }
    if (k.type === 'box') {
      for (const [p, dd, lo, hi] of [[o.x, d.x, k.x0 - pad, k.x1 + pad], [o.z, d.z, k.z0 - pad, k.z1 + pad]]) {
        if (Math.abs(dd) < 1e-6) { if (p < lo || p > hi) { t0 = 1; t1 = 0; } continue; }
        let a = (lo - p) / dd, b = (hi - p) / dd;
        if (a > b) [a, b] = [b, a];
        t0 = Math.max(t0, a); t1 = Math.min(t1, b);
      }
    } else {
      const ox = o.x - k.x, oz = o.z - k.z, R = k.r + pad;
      const A = d.x * d.x + d.z * d.z, B = 2 * (ox * d.x + oz * d.z), C = ox * ox + oz * oz - R * R;
      if (A < 1e-8) { if (C > 0) continue; } else {
        const disc = B * B - 4 * A * C;
        if (disc < 0) continue;
        const sq = Math.sqrt(disc);
        t0 = Math.max(t0, (-B - sq) / (2 * A)); t1 = Math.min(t1, (-B + sq) / (2 * A));
      }
    }
    // starting inside a collider (e.g. standing in a doorway's padding) doesn't count as a hit
    if (t0 <= t1 && t0 > 0.05 && t0 < best) best = t0;
  }
  return best;
}

// small props (signs, bushes, trees…) between the camera and the player are hidden as a whole
const _sph = new THREE.Sphere(), _seg = new THREE.Vector3(), _q = new THREE.Vector3(), _box = new THREE.Box3();
let occluders = null, occWorld = null;
function collectOccluders(o, out) {
  for (const c of o.children) {
    if (c.userData.noHide || c.isInstancedMesh || c.isPoints || !c.frustumCulled) continue;
    _box.setFromObject(c);
    if (_box.isEmpty()) continue;
    const sph = _box.getBoundingSphere(new THREE.Sphere());
    if (sph.radius <= 2.4) out.push({ o: c, sph, hid: false });
    else if (!c.isMesh) collectOccluders(c, out);   // a big group (the level): look at its parts
  }
}
function hideOccluders() {
  if (occWorld !== world) { occWorld = world; occluders = []; collectOccluders(world.root, occluders); }
  _seg.copy(c_target()).sub(camera.position);
  const L = _seg.length();
  _seg.divideScalar(L || 1);
  for (const it of occluders) {
    if (it.hid) { it.o.visible = true; it.hid = false; }
    if (!it.o.visible) continue;    // hidden by the level itself (not ours to show)
    const sp = it.sph;
    _q.copy(sp.center).sub(camera.position);
    const t = Math.max(0, Math.min(_q.dot(_seg), L - 0.8));
    _q.copy(camera.position).addScaledVector(_seg, t);
    if (_q.distanceToSquared(sp.center) < (sp.radius * 0.8) ** 2) { it.o.visible = false; it.hid = true; }
  }
}
const c_target = () => G.cam.target;

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
  input.poll(dt);
  const sNow = serverNow();
  world.update(sNow, G.t, dt);

  const playing = G.mode === 'play' || G.mode === 'menu';
  const other = otherRole(G.role);
  let partnerVisible = false;

  if (playing) {
    // partner (remote) first, so we collide with where we see them
    if (G.kind !== 'solo') {
      // only show the partner when they're in the same level (e.g. one phone still loading it)
      const ok = G.net.status.partnerOnline && (!G.track.level || G.track.level === world.id) && G.track.sample(Date.now(), dt, resolveBase);
      partnerVisible = !!ok;
      if (ok) {
        chars[other].root.position.copy(G.track.pos);
        chars[other].setYaw(dampAngle(chars[other].yaw, G.track.yaw, 18, dt));
        syncPlayerCollider(pcols[other], G.track.pos, bodies[other].h);
      }
      pcols[other].disabled = !ok || G.track.mode === MODE.carried;
      // keep Sun's "carrying" in step with what Moon's phone reports
      const sc = ctls.sun;
      if (G.role === 'sun' && sc.carrying) {
        if (G.track.mode === MODE.carried) { sc.liftSeen = true; sc.notCarriedT = 0; }
        else if (!sc.liftSeen && performance.now() - sc.liftT > 4000) sc.carrying = false;
        else if (sc.liftSeen && (sc.notCarriedT += dt) > 0.6) sc.carrying = false;
      }
    } else {
      partnerVisible = true;
      pcols.moon.disabled = ctls.moon.state === 'carried';
    }

    // cooldowns & one-shot buttons
    G.cooldown.ability -= dt; G.cooldown.heart -= dt;
    const wantJump = input.consume('jump');
    const wantDash = input.consume('dash');
    if (input.consume('ability') && G.cooldown.ability <= 0) {
      G.cooldown.ability = 0.45;
      const who = G.kind === 'solo' ? G.active : G.role;
      // the ✦ button is always the level's power; lifting/throwing Moon has its own button
      if (!world.abilities?.use(who)) {
        useAbilityFx(who);
        G.net.sendEvent('ability');
      }
    }
    if (input.consume('lift')) { const who = G.kind === 'solo' ? G.active : G.role; if (who === 'sun') sunAction(); }
    if (input.consume('heart') && G.cooldown.heart <= 0) {
      G.cooldown.heart = 0.6;
      const who = G.kind === 'solo' ? G.active : G.role;
      if (G.hold) setHold(false, true);
      else if (handReachable(who)) setHold(true, true);
      else {
        fx.hearts(chars[who].root.position, who === 'sun' ? 0xffa64d : 0xb48cff);
        sound.play('heart');
        G.net.sendEvent('heart');
      }
    }
    // let go automatically if you drift apart
    if (G.hold) {
      const who = G.kind === 'solo' ? G.active : G.role;
      if (!handReachable(who, 3.2)) setHold(false, false);
      else if ((G.holdHeartT -= dt) < 0) { G.holdHeartT = 2.6; fx.hearts(chars[who].root.position, 0xff7eb6); }
    }
    if (input.consume('swap') && G.kind === 'solo') {
      G.active = otherRole(G.active);
      document.body.classList.remove('sun', 'moon'); document.body.classList.add(G.active);
      ui.toast(`Now playing ${ROLE_EMOJI[G.active]} ${ROLE_NAME[G.active]}`);
    }

    // local bodies
    const mine = G.kind === 'solo' ? ROLES : [G.role];
    for (const r of mine) {
      const active = r === G.active && G.mode === 'play';
      control(ctls[r], active ? input.state.move : idleInput, active && wantJump, active && input.state.jumpHeld, dt, active && wantDash);
    }
    for (const r of mine) {
      syncPlayerCollider(pcols[r], bodies[r].pos, bodies[r].h);
      const b = bodies[r], c = chars[r];
      c.root.position.copy(b.pos);
      const ctl = ctls[r];
      const sp = Math.hypot(b.vel.x, b.vel.z);
      if (ctl.state === 'free' && ctl.anim === MODE.wall) c.setYaw(dampAngle(c.yaw, Math.atan2(-ctl.wallNX, -ctl.wallNZ), 14, dt));
      else if (ctl.state === 'free' && sp > 0.4) c.setYaw(dampAngle(c.yaw, Math.atan2(b.vel.x, b.vel.z), 14, dt));
    }

    // someone on top of the tower → the toy steps slide out
    const T = world.towerTop;
    if (T) {
      const onTop = (p) => p && p.y > T.y - 0.15 && p.x > T.x0 && p.x < T.x1 && p.z > T.z0 && p.z < T.z1;
      if (mine.some((r) => onTop(bodies[r].pos)) || (partnerVisible && G.kind !== 'solo' && onTop(G.track.pos))) world.setTowerOccupied(true);
    }

    // story beats of the current level
    if (world.story && G.save) {
      const pos = { sun: null, moon: null };
      for (const r of mine) pos[r] = bodies[r].pos;
      if (G.kind !== 'solo' && partnerVisible) pos[other] = G.track.pos;
      world.story({ roles: mine, pos, holding: G.hold, save: G.save, setSave: (k, v) => G.net.setSave(k, v), caption, finish: onLevelFinished }, G.t);
    }

    world.abilities?.update(dt, sNow, G.t);

    // context label on the ability button
    const who = G.kind === 'solo' ? G.active : G.role;
    const special = world.abilities?.label(who);
    const label = special || (who === 'sun' ? 'Shine' : 'Tide');
    if (label !== G.abilityLabel) { G.abilityLabel = label; $('#ability-label').textContent = label; }
    // the Lift button shows up only when Sun can lift Moon (or is carrying her: then it throws)
    const liftState = who !== 'sun' || world.kid ? '' : ctls.sun.carrying ? 'Throw' : canLift() ? 'Lift' : '';
    if (liftState !== G.liftState) { G.liftState = liftState; $('#btn-lift').hidden = !liftState; if (liftState) $('#lift-label').textContent = liftState; }

    // stars
    for (const s of world.stars) {
      if (s.collected || s.prize) continue;   // prize stars are earned (minigames), not touched
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

  // music: the title track in the lobby, otherwise the level's (or a minigame's) track
  music.play(G.intro ? null : G.mode === 'lobby' || G.mode === 'connecting' ? 'fun' : G.musicOverride || world.music);
  const ambOn = !G.intro && (G.mode === 'play' || G.mode === 'menu') && world.amb;
  ambience.play(ambOn ? world.amb : null, (world.ambVol ?? 0.3) * (G.musicOverride ? 0.4 : 1));

  // footsteps (yours, and your partner's a little softer)
  if (playing) {
    const surf = (b) => b.ground?.surface || world.surface || 'grass';
    for (const r of (G.kind === 'solo' ? ROLES : [G.role])) {
      const b = bodies[r], ctl = ctls[r], sp = Math.hypot(b.vel.x, b.vel.z);
      if (b.grounded && ctl.state === 'free' && sp > 1.2) {
        ctl.stepAcc = (ctl.stepAcc || 0) + sp * dt;
        const stride = world.kid ? 0.62 : r === 'sun' ? 0.95 : 0.8;
        if (ctl.stepAcc > stride) { ctl.stepAcc = 0; sound.step(surf(b), r === G.active ? 1 : 0.5); }
      } else ctl.stepAcc = 0.5;
    }
    if (G.kind !== 'solo' && partnerVisible && G.track.grounded) {
      const v = G.track.vel, sp = Math.hypot(v.x, v.z);
      if (sp > 1.2) {
        G.pStep = (G.pStep || 0) + sp * dt;
        if (G.pStep > (world.kid ? 0.62 : other === 'sun' ? 0.95 : 0.8)) {
          G.pStep = 0;
          const d = chars[other].root.position.distanceTo(bodies[G.role].pos);
          if (d < 14) sound.step(world.surface || 'grass', 0.45 * (1 - d / 14));
        }
      }
    }
  }

  // character animation
  for (const r of ROLES) {
    const c = chars[r];
    const visible = !playing || G.kind === 'solo' || r === G.role || partnerVisible;
    c.root.visible = visible;
    if (!visible) continue;
    let hold = 0;
    if (playing && G.hold) {
      const me = c.root.position, pp = chars[otherRole(r)].root.position;
      const y = c.yaw, side = Math.cos(y) * (pp.x - me.x) - Math.sin(y) * (pp.z - me.z);
      hold = side >= 0 ? 1 : -1;
    }
    if (playing && (G.kind === 'solo' || r === G.role)) {
      const b = bodies[r];
      c.animate(dt, { speed: Math.hypot(b.vel.x, b.vel.z), grounded: b.grounded, vy: b.vel.y, mode: ctls[r].anim, hold });
    } else if (playing) {
      const v = G.track.vel;
      c.animate(dt, { speed: Math.hypot(v.x, v.z), grounded: G.track.grounded, vy: v.y, mode: G.track.mode, hold });
    } else c.animate(dt, { speed: 0, grounded: true, vy: 0, mode: MODE.normal });
  }

  updateCamera(dt);
  runFrameHooks(G.t, dt, camera);
  if (G.mode === 'play') { portalUpdate(dt); checkpointUpdate(); }
  if (G.bata?.root.visible) G.bata.animate(G.t, G.bata.talking);
  motes.update(G.cam.target, G.t, dt);
  updateArrow(partnerVisible);
  fx.update(dt, G.t);
  memory.update(dt, G.t);
  gfx.update(dt, G.t, lookFocus());
  composer.render(dt);

  // adaptive quality: if we can't hold ~50 fps, step resolution down (never back up)
  if (rawDt < 0.1) { ftAcc += rawDt; ftN++; }
  if (ftAcc > 2.5) {
    const avg = ftAcc / ftN;
    fpsShown = 1 / avg;
    G.slowN = avg > 1 / 45 ? (G.slowN || 0) + 1 : 0;
    if (G.slowN >= 2 && qLevel < QUALITY.length - 1 && G.t > 6 && !params.has('q') && !G.qBusy) {
      // rebuilding the canvas can show a blank frame for a moment: do it behind a quick fade
      G.slowN = 0; G.qBusy = true;
      fade.classList.add('on');
      setTimeout(() => { qLevel++; resize(); setTimeout(() => { fade.classList.remove('on'); G.qBusy = false; }, 160); }, 220);
    }
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
window.__eclipse = { gfx, composer, camHit: (o, d, m) => camHit(o, d, m), camera,
  townspeople, scene, G, bodies, chars, get world() { return world; }, input, pcols, ctls, switchLevel, setHold, music, sound,
  THREE,
  /** Dr. Bata for stills / cutscenes: bata([x,y,z], yaw, scale, talking) or bata(null) to remove */
  bata(pos, yaw = 0, scale = 1, talking = false) {
    if (!G.bata) { G.bata = makeBata(); scene.add(G.bata.root); }
    G.bata.root.visible = !!pos;
    if (pos) { G.bata.root.position.set(...pos); G.bata.root.rotation.y = yaw; G.bata.root.scale.setScalar(scale); G.bata.talking = talking; }
  },
  /** photo mode: photo({ pos: [x,y,z], look: [x,y,z], fov }) or photo(null); hides the HUD */
  photo(o) { G.photo = o; document.body.classList.toggle('photo', !!o); if (!o) resize(); },
  /** Deterministic simulation at 60 Hz for tests: moves `role` with a fixed input. */
  sim(n, o = {}) {
    const r = o.role || G.active, dt = 1 / 60, trace = [];
    let T = o.t0 ?? serverNow();
    for (let i = 0; i < n; i++) {
      T += 1000 / 60;
      clockSkew = T - baseNow();
      G.t += dt;
      world.update(T, G.t, dt);
      world.abilities?.update(dt, T, G.t);
      for (const k of ROLES) syncPlayerCollider(pcols[k], bodies[k].pos, bodies[k].h);
      if (G.kind === 'solo') pcols.moon.disabled = ctls.moon.state === 'carried';
      control(ctls[r], o.move || idleInput, (o.jumpAt || []).includes(i), o.hold ?? true, dt, (o.dashAt || []).includes(i));
      if (G.kind === 'solo') for (const k of ROLES) if (k !== r) control(ctls[k], idleInput, (o.otherJumpAt || []).includes(i), false, dt);
      if (o.actionAt && o.actionAt.includes(i)) sunAction();
      for (const [who, steps] of Object.entries(o.use || {})) if (steps.includes(i)) world.abilities?.use(who);
      if (o.every && i % o.every === 0) trace.push([+bodies[r].pos.x.toFixed(2), +bodies[r].pos.y.toFixed(2), +bodies[r].pos.z.toFixed(2), bodies[r].grounded ? 1 : 0, ctls[r].state[0] + ctls[r].anim]);
    }
    return { pos: bodies[r].pos.toArray().map((v) => +v.toFixed(3)), grounded: bodies[r].grounded, state: ctls[r].state, anim: ctls[r].anim, trace };
  },
};
