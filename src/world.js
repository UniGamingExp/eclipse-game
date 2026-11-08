// Level manager: builds a level into its own group so it can be swapped for another one.
import * as THREE from 'three';
import { buildPlayground } from './levels/playground.js';
import { buildPrologue } from './levels/prologue.js';
import { clearFrameHooks } from './levels/hooks.js';
import { buildCh1Square } from './levels/ch1-square.js';
import { buildCh1Cards } from './levels/ch1-cards.js';
import { buildCh1Plane } from './levels/ch1-plane.js';
import { buildCh2Day } from './levels/ch2-day.js';
import { buildCh2Call } from './levels/ch2-call.js';
import { buildCh2Shy } from './levels/ch2-shy.js';
import { buildCh3Bridge } from './levels/ch3-bridge.js';

export const LEVELS = {
  prologue: { build: buildPrologue, title: 'Prologue · Two Skies', chip: '📖 Prologue', music: 'woods', ch: 0, n: 1, name: 'Two Skies', stars: ['pro-sun', 'pro-moon'] },
  'ch1-square': { build: buildCh1Square, title: 'Chapter 1 · The Town Square', chip: '💬 Ch.1 Town Square', music: 'town', ch: 1, n: 1, name: 'The Town Square', stars: ['c1-sun', 'c1-moon', 'c1-debate'] },
  'ch1-cards': { build: buildCh1Cards, title: 'Chapter 1 · The Card Tables', chip: '🃏 Ch.1 Card Tables', music: 'paws', ch: 1, n: 2, name: 'The Card Tables', stars: ['c1-card', 'c1-chips', 'c1-trex'] },
  'ch1-plane': { build: buildCh1Plane, title: 'Chapter 1 · 8 October', chip: '✈️ Ch.1 8 October', music: 'lonely', ch: 1, n: 3, name: '8 October', stars: ['c1-msg', 'c1-bridge', 'c1-tower'] },
  'ch2-day': { build: buildCh2Day, title: 'Chapter 2 · Night & Day', chip: '🌗 Ch.2 Night & Day', music: 'mystic', ch: 2, n: 1, name: 'Night & Day', stars: ['c2-sun', 'c2-moon', 'c2-tower', 'c2-flare', 'c2-run'], kits: ['medieval'] },
  'ch2-call': { build: buildCh2Call, title: 'Chapter 2 · The Four-Hour Call', chip: '📞 Ch.2 The Call', music: 'hideout', ch: 2, n: 2, name: 'The Four-Hour Call', stars: ['c2-static', 'c2-wave', 'c2-twilight'] },
  'ch2-shy': { build: buildCh2Shy, title: 'Chapter 2 · Kann ich mit dir flirten?', chip: '💜 Ch.2 Shyness', music: 'devil', ch: 2, n: 3, name: '"Kann ich mit dir flirten?"', stars: ['c2-shy'] },
  'ch3-bridge': { build: buildCh3Bridge, title: 'Chapter 3 · The Stone Bridge', chip: '🌉 Ch.3 Stone Bridge', music: 'winter', amb: 'waves', ambVol: 0.3, ch: 3, n: 1, name: 'The Stone Bridge', stars: ['c3-stack', 'c3-tape', 'c3-zip'], kits: ['medieval', 'npc'] },
  playground: { build: buildPlayground, title: 'Playground Isle', chip: '🏝️ Playground', music: 'fun', amb: 'waves', ambVol: 0.14 },
};

/** the story in order (the Playground is the place to wait for the next chapter) */
export const ORDER = ['prologue', 'ch1-square', 'ch1-cards', 'ch1-plane', 'ch2-day', 'ch2-call', 'ch2-shy', 'ch3-bridge'];
export const CHAPTERS = {
  0: { title: 'Prologue', name: 'Two Skies', icon: '📖' },
  1: { title: 'Chapter 1', name: 'Syria Unfiltered', icon: '💬' },
  2: { title: 'Chapter 2', name: '12 October', icon: '🌗' },
  3: { title: 'Chapter 3', name: 'Regensburg', icon: '🌉' },
  4: { title: 'Chapter 4', name: 'Halle', icon: '🏙️' },
  5: { title: 'Chapter 5', name: 'Damascus', icon: '🌹' },
  6: { title: 'Chapter 6', name: 'Watching Together', icon: '🎬' },
  7: { title: 'Chapter 7', name: 'Us, Every Day', icon: '☕' },
  8: { title: 'Chapter 8', name: 'The Distance', icon: '✈️' },
  9: { title: 'Chapter 9', name: 'Eclipse', icon: '🌒' },
};
export const nextLevel = (id) => { const i = ORDER.indexOf(id); return i >= 0 && i < ORDER.length - 1 ? ORDER[i + 1] : 'playground'; };
export const partsOf = (ch) => ORDER.filter((id) => LEVELS[id].ch === ch);

export function loadLevel(scene, id) {
  const def = LEVELS[id] || LEVELS.playground;
  clearFrameHooks();
  const root = new THREE.Group();
  scene.add(root);
  const w = def.build(root, scene);
  w.id = id in LEVELS ? id : 'playground';
  w.music = def.music || null;
  w.amb = def.amb || null;          // ambience loop (assets/amb/<id>.mp3) under the music
  w.ambVol = def.ambVol ?? 0.3;
  w.root = root;
  w.dispose = () => {
    scene.remove(root);
    root.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
  };
  return w;
}
