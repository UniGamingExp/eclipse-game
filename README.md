# Eclipse

A cosy co-op 3D game for two phones: the Sun and the Moon, playing together from far apart.

**Play:** https://unigamingexp.github.io/eclipse-game/

## How to play together
1. Both open the link (Android: Chrome, iPhone: Safari).
2. One picks ☀️ **Sun**, the other 🌙 **Moon**.
3. Both type the **same secret word** and tap **Play together**.
4. The connection screen shows a green tick for the game server, your ping, and whether your partner is here.

Controls: drag on the left to walk, drag anywhere else to look around, pinch with two fingers (or use the mouse wheel) to zoom the camera in or out, **Jump** (tap again in the air for a double jump), **♥** sends a heart. The action button changes with the situation: Sun can **Lift** Moon when she's close and **Throw** her; otherwise it's Shine/Tide.

**Dash** (») gives a quick burst forward, once per jump in the air. Keyboard: Shift.

Moves: jump short of an edge and you **grab it** (push forward or tap Jump to climb up). Between two walls marked with white arrows you can **wall jump**. Moon **floats** down slowly while you hold Jump.

On iPhone, use Share → **Add to Home Screen** for full screen.

## Story
The game starts with the **Prologue · Two Skies**: little Sun and little Moon each learn to move on their own childhood island. When both reach their telescope, a bridge of stars appears; meet in the middle and tap ♥ next to each other to hold hands. Tap ♥ near your partner anytime to hold hands (jump together!), tap again to let go. Switch between the Prologue and the Playground in the menu (☰).

## Development
```bash
npm install
npm run build      # bundles src/ → build/game.js and stamps a cache-busting version into index.html
npm run serve      # http://localhost:8080
```
- `?net=local` plays across two tabs of the same browser (no Firebase); add `&lag=120` to fake network delay.
- `?debug=1` shows fps, playback delay, jitter and ping.
- `?q=0..3` forces a quality level (0 = best).

GitHub Pages serves the repo root from `main`, so **commit `build/game.js` after every build**.

### Files
| File | What it does |
|---|---|
| `src/main.js` | Game loop, player control, camera, wiring |
| `src/world.js` | Level manager (loads / swaps levels) |
| `src/levels/` | `common.js` building blocks, `prologue.js`, `playground.js` (test island) |
| `src/characters.js` | Sun and Moon models and animation |
| `src/physics.js` | Small character physics (cylinders vs boxes/cylinders) |
| `src/net.js` | Firebase / two-tab / solo networking |
| `src/remote.js` | Smooth playback of the partner's movement |
| `src/input.js` | Touch joystick, buttons, camera drag + pinch zoom, keyboard |
| `src/nature.js` | Loads `assets/nature.glb` (trees, bushes, flowers, rocks… from the Quaternius Stylized Nature MegaKit, CC0) with wind sway; `place` / `scatter` helpers |
| `scripts/pack-nature.mjs` | Picks and compresses the MegaKit models into `assets/nature.glb` (run in a folder with @gltf-transform, sharp, meshoptimizer) |
| `src/levels/ch1-square.js`, `ch1-cards.js`, `ch1-plane.js` | Chapter 1 · Syria Unfiltered: The Town Square, The Card Tables, 8 October |
| `src/levels/bubbles.js` | Chapter 1 powers: Sun's Megaphone (speech-bubble platforms), Moon's Reply pin (pin / pop to launch), synced by events |
| `src/trex.js`, `src/trex-ui.js` | Trex (King of Hearts + Diamonds) as partners vs two bots: deterministic rules + the card table screen; plays stored in `save.ch1.trex` |
| `src/sound.js` | Sound effects (Kenney samples + synth fallbacks), music per level with seamless loops / crossfades, ducking, sound + music switches |
| `assets/music/`, `assets/sfx/` | Music and sound effects (MP3). Licenses and attribution: `CREDITS.md` (also in the game: ☰ → Credits) |
| `src/look.js` | Rim light on all materials, colour grade + vignette, floating sparkles |
| `src/levels/sky.js` | Sky dome with stars and nebula, planets with rings and moons, shooting stars, cloud sea |
| `src/levels/hooks.js` | Per-frame callbacks for level pieces + shared shader time |
| `src/ui.js` | Lobby, connection screen, HUD |
| `database.rules.json` | Realtime Database security rules (paste into the Firebase console) |
