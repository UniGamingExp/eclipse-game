// Sound: real sound effects (Kenney, CC0) with small synthesized fallbacks, plus background music
// (see CREDITS.md) that loops seamlessly or with a soft crossfade. iPhone needs a tap to unlock audio.
// Two switches: sound effects and music (both remembered on the device).
import { store } from './util.js';

let ctx = null, master = null, sfxBus = null, musicBus = null;
let enabled = store.get('sound', true);
let musicOn = store.get('music', true);
const MUSIC_VOL = 0.42;
const BASE = 'assets/';
const V = typeof __BUILD__ !== 'undefined' ? __BUILD__ : '1';

// ---------------------------------------------------------------- sample sets
// name → files (one is picked at random) and default volume
const SAMPLES = {
  'step-grass': { files: [0, 1, 2, 3, 4].map((i) => `step-grass-${i}`), vol: 0.22 },
  'step-concrete': { files: [0, 1, 2, 3, 4].map((i) => `step-concrete-${i}`), vol: 0.2 },
  'step-carpet': { files: [0, 1, 2, 3, 4].map((i) => `step-carpet-${i}`), vol: 0.28 },
  'step-wood': { files: [0, 1, 2, 3, 4].map((i) => `step-wood-${i}`), vol: 0.22 },
  land: { files: ['land-0', 'land-1', 'land-2'], vol: 0.45 },
  card: { files: ['card-1', 'card-2', 'card-3', 'card-4'], vol: 0.7 },
  slide: { files: ['slide-1', 'slide-2', 'slide-3'], vol: 0.55 },
  shuffle: { files: ['shuffle'], vol: 0.7 },
  chips: { files: ['chips-1', 'chips-2'], vol: 0.5 },
  click: { files: ['click'], vol: 0.5 },
  select: { files: ['select'], vol: 0.5 },
  confirm: { files: ['confirm'], vol: 0.55 },
  error: { files: ['error'], vol: 0.4 },
  toggle: { files: ['toggle'], vol: 0.5 },
  pluck: { files: ['pluck'], vol: 0.6 },
  drop: { files: ['drop'], vol: 0.5 },
  open: { files: ['open'], vol: 0.5 },
  close: { files: ['close'], vol: 0.45 },
  page: { files: ['page'], vol: 0.5 },
};
// game sound name → which sample (if loaded) and whether the synth plays too
const USE = {
  land: { s: 'land' },
  no: { s: 'error' },
  pin: { s: 'pluck', synth: true },
  card: { s: 'card' },
  trick: { s: 'slide' },
  shuffle: { s: 'shuffle' },
  chips: { s: 'chips' },
  click: { s: 'click' },
  win: { s: 'confirm', synth: 'star' },
  open: { s: 'open' },
  close: { s: 'close' },
  page: { s: 'page' },
};
const buffers = new Map();    // file → AudioBuffer
let samplesRequested = false;

async function loadBuffer(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(url + ' ' + res.status);
  const data = await res.arrayBuffer();
  return await new Promise((ok, fail) => ctx.decodeAudioData(data, ok, fail));
}
function loadSamples() {
  if (samplesRequested || !ctx) return;
  samplesRequested = true;
  const files = new Set(Object.values(SAMPLES).flatMap((s) => s.files));
  for (const f of files) loadBuffer(`${BASE}sfx/${f}.mp3?v=${V}`).then((b) => buffers.set(f, b)).catch(() => { /* synth fallback */ });
}
function playSample(set, { vol = 1, rate = 1 } = {}) {
  const S = SAMPLES[set];
  if (!S) return false;
  const ready = S.files.filter((f) => buffers.has(f));
  if (!ready.length) return false;
  const src = ctx.createBufferSource();
  src.buffer = buffers.get(ready[Math.floor(Math.random() * ready.length)]);
  src.playbackRate.value = rate * (0.94 + Math.random() * 0.12);
  const g = ctx.createGain();
  g.gain.value = S.vol * vol;
  src.connect(g); g.connect(sfxBus);
  src.start();
  return true;
}

// ---------------------------------------------------------------- unlock
export function unlockAudio() {
  try {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      ctx = new AC();
      master = ctx.createGain();
      master.connect(ctx.destination);
      sfxBus = ctx.createGain();
      sfxBus.gain.value = enabled ? 0.5 : 0;
      sfxBus.connect(master);
      musicBus = ctx.createGain();
      musicBus.gain.value = musicOn ? MUSIC_VOL : 0;
      musicBus.connect(master);
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) ctx.suspend?.(); else ctx.resume?.();
      });
    }
    if (ctx.state !== 'running') ctx.resume();
    // play a silent buffer: required on some iOS versions
    const b = ctx.createBuffer(1, 1, 22050), s = ctx.createBufferSource();
    s.buffer = b; s.connect(master); s.start(0);
    loadSamples();
    music._kick();
    ambience._kick();
  } catch { /* no audio */ }
}

export const sound = {
  get enabled() { return enabled; },
  toggle() {
    enabled = !enabled;
    store.set('sound', enabled);
    if (sfxBus) sfxBus.gain.value = enabled ? 0.5 : 0;
    return enabled;
  },
  play(name, opts = {}) {
    if (!ctx || !enabled || ctx.state !== 'running') return;
    const u = USE[name];
    let played = false;
    if (u) played = playSample(u.s, opts);
    if (!played || (u && u.synth)) {
      const fx = FX[u && typeof u.synth === 'string' ? u.synth : name];
      if (fx) try { fx(ctx.currentTime, opts.vol ?? 1); } catch { /* ignore */ }
    }
  },
  /** a footstep on a surface: grass | concrete | carpet | wood */
  step(surface = 'grass', vol = 1) {
    if (!ctx || !enabled || ctx.state !== 'running') return;
    playSample('step-' + surface, { vol }) || playSample('step-grass', { vol });
  },
};

// ---------------------------------------------------------------- music
// tracks: id → { loop: 'seamless' | crossfade seconds }
const TRACKS = {
  fun: { x: 0 }, paws: { x: 0 }, hideout: { x: 3 },
  woods: { x: 0 }, mystic: { x: 0 }, winter: { x: 0 }, deepsea: { x: 0 }, devil: { x: 0 }, sneaky: { x: 0 }, suspense: { x: 0 },
  town: { x: 5, cut: 14 }, lonely: { x: 4, cut: 2 },   // songs with an ending: loop before the outro, crossfade
};
const musicBuf = new Map(), musicLoading = new Map();
let want = null, cur = null, duckK = 1;

/** sample-accurate loop points: skip the codec's silent padding at both ends */
function loopPoints(buf) {
  const d = buf.getChannelData(0), sr = buf.sampleRate, lim = Math.floor(sr * 0.08), th = 1e-4;
  let a = 0, b = d.length - 1;
  while (a < lim && Math.abs(d[a]) < th) a++;
  while (d.length - 1 - b < lim && Math.abs(d[b]) < th) b--;
  return { start: a / sr, end: (b + 1) / sr };
}

function startTrack(id) {
  const buf = musicBuf.get(id), T = TRACKS[id] || { x: 0 };
  const lp = loopPoints(buf);
  const end = lp.end - (T.cut || 0);
  const node = { id, gain: ctx.createGain(), sources: [], timer: null, stopped: false };
  node.gain.gain.setValueAtTime(0.0001, ctx.currentTime);
  node.gain.gain.exponentialRampToValueAtTime(1, ctx.currentTime + 1.6);
  node.gain.connect(musicBus);
  if (!T.x) {
    const s = ctx.createBufferSource();
    s.buffer = buf; s.loop = true; s.loopStart = lp.start; s.loopEnd = end;
    s.connect(node.gain);
    s.start(ctx.currentTime, lp.start);
    node.sources.push(s);
  } else {
    // play the song, and start the next copy a few seconds before the end with a crossfade
    const x = T.x, len = end - lp.start;
    const one = (when) => {
      if (node.stopped) return;
      const s = ctx.createBufferSource(), g = ctx.createGain();
      s.buffer = buf; s.connect(g); g.connect(node.gain);
      g.gain.setValueAtTime(0.0001, when);
      g.gain.exponentialRampToValueAtTime(1, when + x);
      g.gain.setValueAtTime(1, when + len - x);
      g.gain.exponentialRampToValueAtTime(0.0001, when + len);
      s.start(when, lp.start, len + 0.05);
      node.sources.push(s);
      if (node.sources.length > 3) node.sources.shift();
      node.timer = setTimeout(() => one(when + len - x), Math.max(0, (when + len - x - ctx.currentTime - 1) * 1000));
    };
    one(ctx.currentTime + 0.05);
  }
  return node;
}
function stopTrack(node, fade = 1.4) {
  if (!node) return;
  node.stopped = true;
  clearTimeout(node.timer);
  const t = ctx.currentTime;
  node.gain.gain.cancelScheduledValues(t);
  node.gain.gain.setValueAtTime(Math.max(0.0001, node.gain.gain.value), t);
  node.gain.gain.exponentialRampToValueAtTime(0.0001, t + fade);
  for (const s of node.sources) try { s.stop(t + fade + 0.05); } catch { /* already stopped */ }
}

export const music = {
  get enabled() { return musicOn; },
  get current() { return cur?.id || null; },
  toggle() {
    musicOn = !musicOn;
    store.set('music', musicOn);
    if (musicBus) musicBus.gain.setTargetAtTime(musicOn ? MUSIC_VOL * duckK : 0, ctx.currentTime, 0.2);
    return musicOn;
  },
  /** switch to a track (crossfades); null = silence. Safe to call before audio is unlocked. */
  play(id) {
    want = id;
    music._kick();
  },
  /** soften the music (k = 0..1), e.g. while a story caption is shown */
  duck(k) {
    duckK = k;
    if (ctx && musicBus && musicOn) musicBus.gain.setTargetAtTime(MUSIC_VOL * k, ctx.currentTime, 0.35);
  },
  _kick() {
    if (!ctx || ctx.state !== 'running') return;
    const id = want;
    if ((cur?.id || null) === id) return;
    if (!id) { stopTrack(cur); cur = null; return; }
    if (musicBuf.has(id)) { stopTrack(cur); cur = startTrack(id); return; }
    if (!musicLoading.has(id)) {
      musicLoading.set(id, loadBuffer(`${BASE}music/${id}.mp3?v=${V}`)
        .then((b) => { musicBuf.set(id, b); music._kick(); })
        .catch(() => musicLoading.delete(id)));
    }
  },
};

// ---------------------------------------------------------------- ambience (a quiet looping bed under the music: river, rain, forest…)
const ambBuf = new Map(), ambLoading = new Map();
let ambWant = null, ambCur = null;
export const ambience = {
  /** play an ambience loop from assets/amb/<id>.mp3 (null = none). vol 0..1 relative to the sound effects */
  play(id, vol = 0.35) {
    ambWant = id ? { id, vol } : null;
    ambience._kick();
  },
  _kick() {
    if (!ctx || ctx.state !== 'running') return;
    const w = ambWant;
    if ((ambCur?.id || null) === (w?.id || null)) { if (ambCur && w && ambCur.vol !== w.vol) { ambCur.vol = w.vol; ambCur.gain.gain.setTargetAtTime(w.vol, ctx.currentTime, 0.5); } return; }
    if (!w) { stopTrack(ambCur, 2); ambCur = null; return; }
    if (ambBuf.has(w.id)) {
      stopTrack(ambCur, 2);
      const buf = ambBuf.get(w.id), lp = loopPoints(buf);
      const node = { id: w.id, vol: w.vol, gain: ctx.createGain(), sources: [], timer: null, stopped: false };
      node.gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      node.gain.gain.exponentialRampToValueAtTime(w.vol, ctx.currentTime + 2.5);
      node.gain.connect(sfxBus);
      const s = ctx.createBufferSource();
      s.buffer = buf; s.loop = true; s.loopStart = lp.start; s.loopEnd = lp.end;
      s.connect(node.gain); s.start(ctx.currentTime, lp.start);
      node.sources.push(s);
      ambCur = node;
      return;
    }
    if (!ambLoading.has(w.id)) {
      ambLoading.set(w.id, loadBuffer(`${BASE}amb/${w.id}.mp3?v=${V}`)
        .then((b) => { ambBuf.set(w.id, b); ambience._kick(); })
        .catch(() => ambLoading.delete(w.id)));
    }
  },
};

// ---------------------------------------------------------------- synthesized fallbacks
function tone(t, { type = 'sine', f0, f1 = f0, dur = 0.15, vol = 0.3, attack = 0.005 }) {
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(f0, t);
  o.frequency.exponentialRampToValueAtTime(Math.max(1, f1), t + dur);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g); g.connect(sfxBus);
  o.start(t); o.stop(t + dur + 0.02);
}

const FX = {
  jump: (t) => tone(t, { type: 'triangle', f0: 320, f1: 620, dur: 0.14, vol: 0.22 }),
  jump2: (t) => tone(t, { type: 'triangle', f0: 480, f1: 900, dur: 0.14, vol: 0.2 }),
  land: (t) => tone(t, { type: 'sine', f0: 160, f1: 70, dur: 0.1, vol: 0.25 }),
  bounce: (t) => { tone(t, { type: 'sine', f0: 180, f1: 720, dur: 0.32, vol: 0.32 }); tone(t + 0.05, { type: 'triangle', f0: 360, f1: 1100, dur: 0.25, vol: 0.12 }); },
  star: (t) => [784, 988, 1175, 1568].forEach((f, i) => tone(t + i * 0.07, { type: 'triangle', f0: f, dur: 0.22, vol: 0.18 })),
  heart: (t) => { tone(t, { type: 'sine', f0: 660, dur: 0.12, vol: 0.22 }); tone(t + 0.11, { type: 'sine', f0: 880, dur: 0.2, vol: 0.22 }); },
  shine: (t) => [523, 659, 784].forEach((f, i) => tone(t + i * 0.04, { type: 'sine', f0: f, f1: f * 1.5, dur: 0.4, vol: 0.12 })),
  tide: (t) => { tone(t, { type: 'sine', f0: 300, f1: 150, dur: 0.5, vol: 0.2 }); tone(t + 0.1, { type: 'sine', f0: 450, f1: 220, dur: 0.5, vol: 0.12 }); },
  dash: (t) => { tone(t, { type: 'sawtooth', f0: 900, f1: 180, dur: 0.16, vol: 0.06 }); tone(t, { type: 'sine', f0: 500, f1: 120, dur: 0.18, vol: 0.14 }); },
  join: (t) => [523, 784].forEach((f, i) => tone(t + i * 0.12, { type: 'triangle', f0: f, dur: 0.25, vol: 0.18 })),
  shout: (t) => { tone(t, { type: 'square', f0: 220, f1: 330, dur: 0.12, vol: 0.06 }); tone(t + 0.05, { type: 'sawtooth', f0: 330, f1: 520, dur: 0.18, vol: 0.05 }); tone(t, { type: 'sine', f0: 440, f1: 660, dur: 0.22, vol: 0.16 }); },
  pin: (t) => { tone(t, { type: 'triangle', f0: 1200, f1: 900, dur: 0.06, vol: 0.12 }); },
  pop: (t) => { tone(t, { type: 'sine', f0: 900, f1: 120, dur: 0.12, vol: 0.3 }); tone(t + 0.02, { type: 'triangle', f0: 400, f1: 1400, dur: 0.3, vol: 0.12 }); },
  no: (t) => tone(t, { type: 'triangle', f0: 200, f1: 150, dur: 0.12, vol: 0.12 }),
  card: (t) => tone(t, { type: 'triangle', f0: 1200, f1: 700, dur: 0.05, vol: 0.1 }),
  respawn: (t) => tone(t, { type: 'sine', f0: 900, f1: 300, dur: 0.35, vol: 0.15 }),
};
