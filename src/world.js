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

export const LEVELS = {
  prologue: { build: buildPrologue, title: 'Prologue · Two Skies', chip: '📖 Prologue', music: 'woods', ch: 0, n: 1, name: 'Two Skies' },
  'ch1-square': { build: buildCh1Square, title: 'Chapter 1 · The Town Square', chip: '💬 Ch.1 Town Square', music: 'town', ch: 1, n: 1, name: 'The Town Square' },
  'ch1-cards': { build: buildCh1Cards, title: 'Chapter 1 · The Card Tables', chip: '🃏 Ch.1 Card Tables', music: 'paws', ch: 1, n: 2, name: 'The Card Tables' },
  'ch1-plane': { build: buildCh1Plane, title: 'Chapter 1 · 8 October', chip: '✈️ Ch.1 8 October', music: 'lonely', ch: 1, n: 3, name: '8 October' },
  'ch2-day': { build: buildCh2Day, title: 'Chapter 2 · Night & Day', chip: '🌗 Ch.2 Night & Day', music: 'mystic', ch: 2, n: 1, name: 'Night & Day' },
  'ch2-call': { build: buildCh2Call, title: 'Chapter 2 · The Four-Hour Call', chip: '📞 Ch.2 The Call', music: 'hideout', ch: 2, n: 2, name: 'The Four-Hour Call' },
  'ch2-shy': { build: buildCh2Shy, title: 'Chapter 2 · Kann ich mit dir flirten?', chip: '💜 Ch.2 Shyness', music: 'devil', ch: 2, n: 3, name: '"Kann ich mit dir flirten?"' },
  playground: { build: buildPlayground, title: 'Playground Isle', chip: '🏝️ Playground', music: 'fun' },
};

/** the story in order (the Playground is the place to wait for the next chapter) */
export const ORDER = ['prologue', 'ch1-square', 'ch1-cards', 'ch1-plane', 'ch2-day', 'ch2-call', 'ch2-shy'];
export const CHAPTERS = {
  0: { title: 'Prologue', name: 'Two Skies', icon: '📖' },
  1: { title: 'Chapter 1', name: 'Syria Unfiltered', icon: '💬' },
  2: { title: 'Chapter 2', name: '12 October', icon: '🌗' },
  3: { title: 'Chapter 3', name: 'Regensburg', icon: '🌉' },
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
  w.root = root;
  w.dispose = () => {
    scene.remove(root);
    root.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
  };
  return w;
}
