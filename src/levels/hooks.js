// Per-frame callbacks registered by level pieces (sky, grass…) and a shared time uniform for shaders.
// The level manager clears the list when a level is unloaded.
const hooks = [];
export const timeU = { value: 0 };
export function onFrame(fn) { hooks.push(fn); }
export function clearFrameHooks() { hooks.length = 0; }
export function runFrameHooks(t, dt, camera) { timeU.value = t; for (const f of hooks) f(t, dt, camera); }
