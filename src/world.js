// Level manager: builds a level into its own group so it can be swapped for another one.
import * as THREE from 'three';
import { buildPlayground } from './levels/playground.js';
import { buildPrologue } from './levels/prologue.js';
import { clearFrameHooks } from './levels/hooks.js';
import { buildCh1Square } from './levels/ch1-square.js';
import { buildCh1Cards } from './levels/ch1-cards.js';

export const LEVELS = {
  prologue: { build: buildPrologue, title: 'Prologue · Two Skies', chip: '📖 Prologue' },
  'ch1-square': { build: buildCh1Square, title: 'Chapter 1 · The Town Square', chip: '💬 Ch.1 Town Square' },
  'ch1-cards': { build: buildCh1Cards, title: 'Chapter 1 · The Card Tables', chip: '🃏 Ch.1 Card Tables' },
  playground: { build: buildPlayground, title: 'Playground Isle', chip: '🏝️ Playground' },
};

export function loadLevel(scene, id) {
  const def = LEVELS[id] || LEVELS.playground;
  clearFrameHooks();
  const root = new THREE.Group();
  scene.add(root);
  const w = def.build(root, scene);
  w.id = id in LEVELS ? id : 'playground';
  w.root = root;
  w.dispose = () => {
    scene.remove(root);
    root.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
  };
  return w;
}
