// Level manager: builds a level into its own group so it can be swapped for another one.
import * as THREE from 'three';
import { buildPlayground } from './levels/playground.js';
import { buildPrologue } from './levels/prologue.js';

export const LEVELS = {
  prologue: { build: buildPrologue, title: 'Prologue · Two Skies', chip: '📖 Prologue' },
  playground: { build: buildPlayground, title: 'Playground Isle', chip: '🏝️ Playground' },
};

export function loadLevel(scene, id) {
  const def = LEVELS[id] || LEVELS.playground;
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
