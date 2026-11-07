// Tiny character physics: players are vertical cylinders (radius r, height h, position = feet).
// World colliders are axis-aligned boxes or vertical cylinders. Each collider has `top` and `bottom`.
//   box: { type:'box', x0, x1, z0, z1, top, bottom }
//   cyl: { type:'cyl', x, z, r, top, bottom }
// Optional flags: bounce (launch speed), safe (good respawn spot), noStep, owner (skip self),
// dx/dy/dz (how far it moved this frame, for carrying riders).
import { Vector3 } from 'three';

export const GRAVITY = 30;
const STEP = 0.45;      // walk up ledges this high without jumping
const MAX_FALL = 28;

export class Body {
  constructor(r = 0.36, h = 1.0) {
    this.pos = new Vector3();
    this.vel = new Vector3();
    this.r = r;
    this.h = h;
    this.grounded = false;
    this.ground = null;
  }
}

const push = { x: 0, z: 0 };

function circleBox(px, pz, r, c) {
  const cx = px < c.x0 ? c.x0 : px > c.x1 ? c.x1 : px;
  const cz = pz < c.z0 ? c.z0 : pz > c.z1 ? c.z1 : pz;
  const dx = px - cx, dz = pz - cz;
  const d2 = dx * dx + dz * dz;
  if (d2 >= r * r) return false;
  if (d2 > 1e-10) {
    const d = Math.sqrt(d2);
    push.x = (dx / d) * (r - d);
    push.z = (dz / d) * (r - d);
    return true;
  }
  // centre inside the box: leave by the nearest side
  const l = px - c.x0, rr = c.x1 - px, b = pz - c.z0, f = c.z1 - pz;
  const m = Math.min(l, rr, b, f);
  push.x = 0; push.z = 0;
  if (m === l) push.x = -(l + r);
  else if (m === rr) push.x = rr + r;
  else if (m === b) push.z = -(b + r);
  else push.z = f + r;
  return true;
}

function circleCyl(px, pz, r, c) {
  const dx = px - c.x, dz = pz - c.z;
  const R = r + c.r;
  const d2 = dx * dx + dz * dz;
  if (d2 >= R * R) return false;
  const d = Math.sqrt(d2);
  if (d < 1e-6) { push.x = R; push.z = 0; return true; }
  push.x = (dx / d) * (R - d);
  push.z = (dz / d) * (R - d);
  return true;
}

const overlap = (px, pz, r, c) => (c.type === 'box' ? circleBox(px, pz, r, c) : circleCyl(px, pz, r, c));

/** Advance one body by dt (call with small dt; see `moveBody`). Returns the collider landed on this step, if any. */
function step(b, colliders, dt) {
  const wasGrounded = b.grounded;

  // --- horizontal ---
  b.pos.x += b.vel.x * dt;
  b.pos.z += b.vel.z * dt;
  for (const c of colliders) {
    if (c.owner === b || c.disabled) continue;
    const feet = b.pos.y, head = feet + b.h;
    if (feet >= c.top - 1e-3 || head <= c.bottom + 1e-3) continue;
    if (!overlap(b.pos.x, b.pos.z, b.r, c)) continue;
    // step up small ledges; while falling, also pop up onto edges you barely miss (forgiving)
    const rise = c.top - feet;
    if (!c.noStep && b.vel.y <= 0.01 && (wasGrounded ? rise <= STEP : rise <= 0.35)) {
      b.pos.y = c.top;
      continue;
    }
    b.pos.x += push.x;
    b.pos.z += push.z;
    const l = Math.hypot(push.x, push.z);
    if (l > 1e-6) {
      const nx = push.x / l, nz = push.z / l;
      const vn = b.vel.x * nx + b.vel.z * nz;
      if (vn < 0) { b.vel.x -= vn * nx; b.vel.z -= vn * nz; }
    }
  }

  // --- vertical ---
  const prevY = b.pos.y;
  b.vel.y = Math.max(b.vel.y - GRAVITY * dt, -MAX_FALL);
  b.pos.y += b.vel.y * dt;
  b.grounded = false;
  b.ground = null;
  let best = null;
  for (const c of colliders) {
    if (c.owner === b || c.disabled) continue;
    if (!overlap(b.pos.x, b.pos.z, b.r, c)) continue;
    if (b.vel.y <= 0) {
      if (prevY >= c.top - 0.25 && b.pos.y <= c.top && (!best || c.top > best.top)) best = c;
    } else if (prevY + b.h <= c.bottom + 0.05 && b.pos.y + b.h > c.bottom) {
      b.pos.y = c.bottom - b.h; // bonk head
      b.vel.y = 0;
    }
  }
  if (best) {
    const impact = -b.vel.y;
    b.pos.y = best.top;
    b.vel.y = 0;
    b.grounded = true;
    b.ground = best;
    if (!wasGrounded) return { collider: best, impact };
  }
  return null;
}

/** Move a body for one frame: carries it with whatever it stands on, then sub-steps physics. */
export function moveBody(b, colliders, dt) {
  const g = b.ground;
  if (g && g.dx !== undefined) {
    const d2 = g.dx * g.dx + g.dy * g.dy + g.dz * g.dz;
    if (d2 < 1) { b.pos.x += g.dx; b.pos.y += g.dy; b.pos.z += g.dz; }
  }
  const speed = Math.hypot(b.vel.x, b.vel.y, b.vel.z) + 1;
  const n = Math.min(8, Math.max(1, Math.ceil((speed * dt) / 0.12)));
  let landed = null;
  for (let i = 0; i < n; i++) {
    const l = step(b, colliders, dt / n);
    if (l) {
      landed = l;
      if (l.collider.bounce) { // springy things launch you straight away
        b.vel.y = l.collider.bounce;
        b.grounded = false;
        b.ground = null;
      }
    }
  }
  return landed;
}

/** A cylinder collider that follows a player so the other one can bump into / stand on them. */
export function playerCollider(owner) {
  return { type: 'cyl', x: 0, z: 0, r: 0.34, top: 1, bottom: 0, dx: 0, dy: 0, dz: 0, isPlayer: true, owner, ready: false, px: 0, py: 0, pz: 0 };
}
export function syncPlayerCollider(c, pos, h) {
  if (c.ready) { c.dx = pos.x - c.px; c.dy = pos.y - c.py; c.dz = pos.z - c.pz; } else { c.dx = c.dy = c.dz = 0; }
  c.px = pos.x; c.py = pos.y; c.pz = pos.z; c.ready = true;
  c.x = pos.x; c.z = pos.z; c.bottom = pos.y; c.top = pos.y + h;
}
