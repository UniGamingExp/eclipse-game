// Level manager: builds a level into its own group so it can be swapped for another one.
import * as THREE from 'three';
import { buildPlayground } from './levels/playground.js';
import { buildPrologue } from './levels/prologue.js';
import { clearFrameHooks } from './levels/hooks.js';
import { buildCh1Square } from './levels/ch1-square.js';
import { buildCh1Cards } from './levels/ch1-cards.js';
import { buildCh1Plane } from './levels/ch1-plane.js';
import { buildCh2Day } from './levels/ch2-day.js';

export const LEVELS = {
  prologue: { build: buildPrologue, title: 'Prologue · Two Skies', chip: '📖 Prologue', music: 'woods' },
  'ch1-square': { build: buildCh1Square, title: 'Chapter 1 · The Town Square', chip: '💬 Ch.1 Town Square', music: 'town' },
  'ch1-cards': { build: buildCh1Cards, title: 'Chapter 1 · The Card Tables', chip: '🃏 Ch.1 Card Tables', music: 'paws' },
  'ch1-plane': { build: buildCh1Plane, title: 'Chapter 1 · 8 October', chip: '✈️ Ch.1 8 October', music: 'lonely' },
  'ch2-day': { build: buildCh2Day, title: 'Chapter 2 · Night & Day', chip: '🌗 Ch.2 Night & Day', music: 'mystic' },
  playground: { build: buildPlayground, title: 'Playground Isle', chip: '🏝️ Playground', music: 'fun' },
};

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
