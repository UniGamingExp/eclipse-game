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
import { batchKit } from './levels/medieval.js';
import { buildCh3Bridge } from './levels/ch3-bridge.js';
import { buildCh3Moving } from './levels/ch3-moving.js';
import { buildCh3Train } from './levels/ch3-train.js';
import { buildCh4Markt } from './levels/ch4-markt.js';
import { buildCh4Neustadt } from './levels/ch4-neustadt.js';
import { buildCh4Leipziger } from './levels/ch4-leipziger.js';
import { buildCh5Gate } from './levels/ch5-gate.js';
import { buildCh5Touma } from './levels/ch5-touma.js';
import { buildCh5Souq } from './levels/ch5-souq.js';
import { buildCh5Midan } from './levels/ch5-midan.js';
import { buildCh6Hood } from './levels/ch6-hood.js';

export const LEVELS = {
  prologue: { build: buildPrologue, title: 'Prologue · Two Skies', chip: '📖 Prologue', music: 'woods', ch: 0, n: 1, name: 'Two Skies', stars: ['pro-sun', 'pro-moon'] },
  'ch1-square': { build: buildCh1Square, title: 'Chapter 1 · The Town Square', chip: '💬 Ch.1 Town Square', music: 'town', ch: 1, n: 1, name: 'The Town Square', stars: ['c1-sun', 'c1-moon', 'c1-debate', 'c1-memes'] },
  'ch1-cards': { build: buildCh1Cards, title: 'Chapter 1 · The Card Tables', chip: '🃏 Ch.1 Card Tables', music: 'paws', ch: 1, n: 2, name: 'The Card Tables', stars: ['c1-card', 'c1-chips', 'c1-trex', 'c1-side'] },
  'ch1-plane': { build: buildCh1Plane, title: 'Chapter 1 · 8 October', chip: '✈️ Ch.1 8 October', music: 'lonely', ch: 1, n: 3, name: '8 October', stars: ['c1-msg', 'c1-bridge', 'c1-tower', 'c1-reply'] },
  'ch2-day': { build: buildCh2Day, title: 'Chapter 2 · Night & Day', chip: '🌗 Ch.2 Night & Day', music: 'mystic', ch: 2, n: 1, name: 'Night & Day', stars: ['c2-sun', 'c2-moon', 'c2-tower', 'c2-flare', 'c2-run'], kits: ['medieval'] },
  'ch2-call': { build: buildCh2Call, title: 'Chapter 2 · The Four-Hour Call', chip: '📞 Ch.2 The Call', music: 'hideout', ch: 2, n: 2, name: 'The Four-Hour Call', stars: ['c2-dial', 'c2-wave', 'c2-storm', 'c2-gust', 'c2-hands'] },
  'ch2-shy': { build: buildCh2Shy, title: 'Chapter 2 · Kann ich mit dir flirten?', chip: '💜 Ch.2 Shyness', music: 'devil', ch: 2, n: 3, name: '"Kann ich mit dir flirten?"', stars: ['c2-garden', 'c2-kann', 'c2-mit', 'c2-flirten', 'c2-brave'] },
  'ch3-bridge': { build: buildCh3Bridge, title: 'Chapter 3 · The Stone Bridge', chip: '🌉 Ch.3 Stone Bridge', music: 'winter', amb: 'waves', ambVol: 0.3, ch: 3, n: 1, name: 'The Stone Bridge', stars: ['c3-street', 'c3-stack', 'c3-tape', 'c3-zip', 'c3-mandl'], kits: ['medieval', 'npc'] },
  'ch3-moving': { build: buildCh3Moving, title: 'Chapter 3 · Moving Day', chip: '📦 Ch.3 Moving Day', music: 'winter', ch: 3, n: 2, name: 'Moving Day', stars: ['c3m-tree', 'c3m-van', 'c3m-well', 'c3m-wardrobe', 'c3m-yard'], kits: ['medieval', 'npc'] },
  'ch3-train': { build: buildCh3Train, title: 'Chapter 3 · The Last Train', chip: '🚆 Ch.3 The Last Train', music: 'winter', ch: 3, n: 3, name: 'The Last Train', stars: ['c3t-kiosk', 'c3t-bridge', 'c3t-arms', 'c3t-gap', 'c3t-loco'] },
  'ch4-markt': { build: buildCh4Markt, title: 'Chapter 4 · Marktplatz', chip: '🔔 Ch.4 Marktplatz', music: 'town', ch: 4, n: 1, name: 'Marktplatz', stars: ['c4-tram', 'c4-statue', 'c4-wall', 'c4-fly', 'c4-ridge'], kits: ['medieval'] },
  'ch4-neustadt': { build: buildCh4Neustadt, title: 'Chapter 4 · Neustadt', chip: '🏢 Ch.4 Neustadt', music: 'town', ch: 4, n: 2, name: 'Neustadt', stars: ['c4n-yard', 'c4n-r1', 'c4n-wall', 'c4n-dish', 'c4n-home'] },
  'ch4-leipziger': { build: buildCh4Leipziger, title: 'Chapter 4 · Leipziger Straße', chip: '🥙 Ch.4 Leipziger Straße', music: 'fun', ch: 4, n: 3, name: 'Leipziger Straße', stars: ['c4l-scaffold', 'c4l-pipe', 'c4l-pit', 'c4l-doner'], kits: ['medieval'] },
  'ch5-gate': { build: buildCh5Gate, title: 'Chapter 5 · Bab Sharqi', chip: '🌿 Ch.5 Bab Sharqi', music: 'woods', ch: 5, n: 1, name: 'Bab Sharqi', stars: ['c5-gate', 'c5-roof', 'c5-sabat', 'c5-lily', 'c5-iwan'] },
  'ch5-touma': { build: buildCh5Touma, title: 'Chapter 5 · Bab Touma', chip: '🎖️ Ch.5 Bab Touma', music: 'paws', ch: 5, n: 2, name: 'Bab Touma', stars: ['c5t-tree', 'c5t-sat', 'c5t-chat', 'c5t-plank', 'c5t-well'] },
  'ch5-souq': { build: buildCh5Souq, title: 'Chapter 5 · Souq al-Hamidiyah', chip: '🍨 Ch.5 Souq', music: 'fun', ch: 5, n: 3, name: 'Souq al-Hamidiyah', stars: ['c5s-rubble', 'c5s-rain', 'c5s-ridge', 'c5s-dome', 'c5s-cone'] },
  'ch5-midan': { build: buildCh5Midan, title: 'Chapter 5 · Al-Midan', chip: '🎆 Ch.5 Al-Midan', music: 'mystic', ch: 5, n: 4, name: 'Al-Midan', stars: ['c5m-ghost', 'c5m-roof', 'c5m-lily', 'c5m-mahabba'] },
  'ch6-hood': { build: buildCh6Hood, title: 'Chapter 6 · The Neighbourhood', chip: '🍦 Ch.6 Neighbourhood', music: 'fun', ch: 6, n: 1, name: 'The Neighbourhood', stars: ['c6n-swirl', 'c6n-bridge', 'c6n-walk', 'c6n-gap', 'c6n-ring'] },
  playground: { build: buildPlayground, title: 'Playground Isle', chip: '🏝️ Playground', music: 'fun', amb: 'waves', ambVol: 0.14 },
};

/** the story in order (the Playground is the place to wait for the next chapter) */
export const ORDER = ['prologue', 'ch1-square', 'ch1-cards', 'ch1-plane', 'ch2-day', 'ch2-call', 'ch2-shy', 'ch3-bridge', 'ch3-moving', 'ch3-train', 'ch4-markt', 'ch4-neustadt', 'ch4-leipziger', 'ch5-gate', 'ch5-touma', 'ch5-souq', 'ch5-midan', 'ch6-hood'];
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
  batchKit(root);
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
