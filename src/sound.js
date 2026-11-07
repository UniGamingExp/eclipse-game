// Tiny synthesized sound effects (no files). iPhone needs the audio unlocked by a tap first.
import { store } from './util.js';

let ctx = null, master = null;
let enabled = store.get('sound', true);

export function unlockAudio() {
  try {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = enabled ? 0.5 : 0;
      master.connect(ctx.destination);
    }
    if (ctx.state !== 'running') ctx.resume();
    // play a silent buffer: required on some iOS versions
    const b = ctx.createBuffer(1, 1, 22050), s = ctx.createBufferSource();
    s.buffer = b; s.connect(master); s.start(0);
  } catch { /* no audio */ }
}

export const sound = {
  get enabled() { return enabled; },
  toggle() {
    enabled = !enabled;
    store.set('sound', enabled);
    if (master) master.gain.value = enabled ? 0.5 : 0;
    return enabled;
  },
  play(name) {
    if (!ctx || !enabled || ctx.state !== 'running') return;
    const fx = FX[name];
    if (fx) try { fx(ctx.currentTime); } catch { /* ignore */ }
  },
};

function tone(t, { type = 'sine', f0, f1 = f0, dur = 0.15, vol = 0.3, attack = 0.005 }) {
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(f0, t);
  o.frequency.exponentialRampToValueAtTime(Math.max(1, f1), t + dur);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g); g.connect(master);
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
  join: (t) => [523, 784].forEach((f, i) => tone(t + i * 0.12, { type: 'triangle', f0: f, dur: 0.25, vol: 0.18 })),
  respawn: (t) => tone(t, { type: 'sine', f0: 900, f1: 300, dur: 0.35, vol: 0.15 }),
};
