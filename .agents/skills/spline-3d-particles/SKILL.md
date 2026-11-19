---
name: spline-3d-particles
description: >-
  Guides the design, simulation, emitter tuning, and optimization of Spline 3D particle systems. Covers point/mesh emitters, particle life cycles, turbulence and attractor physics, mouse gravity interaction, and strict mobile performance budgeting for TRIVEX atmospheric and data-stream effects.
---

# Spline 3D Particle Systems & Data Streams for TRIVEX

## Purpose & Scope

The **spline-3d-particles** skill governs the architectural design, physical simulation, and performance optimization of 3D particle systems within Spline.

It covers atmospheric background particles, cybernetic data streams, floating constellation meshes, and interactive particle fields that react to user cursor movements, while enforcing strict polygon and memory ceilings to preserve 60 FPS performance on all client devices.

---

## When to Use This Skill

Activate this skill when:
- Creating floating atmospheric dust, ambient telemetry motes, or data grids in hero sections.
- Simulating energy streams, node connections, or particle bursts for TRIVEX Automation & AI showcases.
- Configuring particle physics: Emitters, Direction, Spread, Speed, Gravity, Turbulence, and Attractors.
- Adding interactive mouse gravity/repulsion to particle fields.
- Optimizing particle render loops and enforcing mobile particle count limits.

Do **not** use this skill for:
- Static geometry or Boolean primitives (use `@skill:spline-3d-building-scenes`).
- Standard CSS / DOM confetti or UI micro-animations (use `@skill:3d-motion-interaction`).

---

## Particle Types & Geometry Selection

Choosing the correct particle shape determines whether the system renders effortlessly or drags the GPU down:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Spline Particle Geometry                        │
├─────────────────────┬───────────────────────────┬──────────────────────┤
│ Particle Type       │ Best For                  │ Performance Impact   │
├─────────────────────┼───────────────────────────┼──────────────────────┤
│ 1. Point / Sprites  │ Ambient background dust,  │ Extremely Low        │
│                     │ cosmic energy fields      │ (Instanced 2D quads) │
├─────────────────────┼───────────────────────────┼──────────────────────┤
│ 2. Simple Primitives│ Floating geometric cubes, │ Moderate             │
│    (Low-poly)       │ octahedral data packets   │ (Instanced 3D mesh)  │
├─────────────────────┼───────────────────────────┼──────────────────────┤
│ 3. Custom Meshes    │ Complex branded emblems,  │ High (Use sparingly, │
│                     │ high-poly debris          │ max 50 particles)    │
└─────────────────────┴───────────────────────────┴──────────────────────┘
```

---

## Particle System Parameters & Calibration

### 1. Core Emitter Configuration
In the Right Panel of Spline Editor, add a **Particle** component to an empty or container object:

| Parameter | Recommended Setting | Purpose |
| :--- | :--- | :--- |
| **Emission Shape** | `Box` or `Sphere` | Defines the spatial boundary where particles spawn |
| **Count** | `300 - 800` (Desktop)<br>`150 - 250` (Mobile) | Strict ceiling to preserve mobile battery and frame rate |
| **Rate** | `15 - 25 particles/sec` | Controls density of newly spawned particles |
| **Life** | `3.0s - 5.0s` | Duration before particle fades out and recycles |
| **Speed** | `10 - 30` | Gentle floating velocity (avoid chaotic high speeds) |
| **Spread** | `15° - 35°` | Angular dispersion from the emission vector |
| **Size** | `2px - 6px` | Subtle scale; avoid large overlapping blurry billboards |

### 2. Opacity & Scale Curves (Soft In / Soft Out)
Never allow particles to pop into existence or vanish abruptly:
- **Scale over Life**: Start at `0%` -> ramp to `100%` at life `0.1` -> remain stable -> decay to `0%` at life `0.9`.
- **Opacity over Life**: Fade in smoothly from `0%` to `60%` opacity, then fade out gently to prevent harsh flickering.

---

## Interaction Physics & Force Fields

Spline particles can dynamically respond to user presence through Force Fields:

### 1. Cursor Gravity / Magnetic Attractor
- Add a **Force Field** component set to **Attractor**.
- Bind the position of the attractor to **Mouse Cursor**.
- Set Strength to `+50` for gentle magnetic pull, or `-60` for a futuristic repulsion wave as the visitor hovers over the hero section.

### 2. Micro-Turbulence (Organic Drift)
- Add a subtle **Turbulence** force field (`Strength: 5 - 12`, `Frequency: 0.2`).
- This adds gentle Brownian motion, preventing particles from moving in rigid, mechanical straight lines.

---

## Brand Aesthetic: TRIVEX Cybernetic Data Streams

For TRIVEX hero backgrounds and technical architecture showcases:
- **Dark Mode Palette**: Particles use a 2-color gradient from `#00D2FF` (Electric Cyan) to `#ffffff` (Pure White). Blend mode set to `Screen` or `Add` with subtle glow.
- **Light Mode Palette**: Particles use Royal Blue (`#0088FF`) to Slate (`#94A3B8`). Blend mode set to `Normal` with `30%` opacity to avoid visual clutter against white backgrounds.

---

## Mobile Adaptation & Battery Conservation

Particle simulations cause significant mobile battery drain if left unchecked.

### Strict Mobile Clamping Rules
1. **Reduce Particle Count by 70% on Mobile**:
   If the user agent is mobile, set the Spline variable `particleCount` to `150` instead of `800`.
2. **Disable Shadows on Particles**:
   Never enable `Cast Shadow` on particle systems. Doing so multiplies shadow map render passes by hundreds of instances.
3. **Viewport Pausing**:
   Ensure the particle simulation is immediately paused when scrolled out of view via `IntersectionObserver`.

---

## Step-by-Step Professional Workflow

1. **Step 1: Emitter Placement**:
   - Position the particle emitter behind text overlays and primary product models.
2. **Step 2: Particle Lifecycle Tuning**:
   - Calibrate Count, Rate, and Life so the density feels balanced without crowding.
3. **Step 3: Opacity Curve Assignment**:
   - Apply fade-in and fade-out curves to ensure smooth recycling.
4. **Step 4: Force Field Integration**:
   - Attach subtle turbulence and optional mouse repulsion.
5. **Step 5: Mobile Stress Test**:
   - Throttle CPU 4x in DevTools and verify frame rate remains above 50 FPS.

---

## Performance Requirements

1. **Instance Limit**: Maximum **1,200 particles** on desktop; maximum **300 particles** on mobile devices.
2. **Shadow Policy**: Particles must **never** cast shadows (`Cast Shadow: OFF`).
3. **Draw Calls**: All particles in a system must render in **1 single instanced draw call**.

---

## Common Mistakes to Avoid

- **Mistake 1: Uncapped Particle Counts**: Setting particle counts to 10,000, which causes mobile browsers to crash with Out-Of-Memory (OOM) errors.
- **Mistake 2: Enabling Shadows on Particles**: Toggling shadow casting on 500 particles, creating 500 shadow draw calls that reduce FPS to single digits.
- **Mistake 3: Visual Noise Over Text**: Placing bright, fast-moving particles directly across primary headings, ruining readability and failing accessibility audits.

---

## Validation Checklist

- [ ] Total particle count is under 800 on desktop, under 300 on mobile.
- [ ] Particles do NOT cast shadows.
- [ ] Life cycles feature smooth fade-in and fade-out curves (no visual popping).
- [ ] Particles do not obscure semantic HTML text readability.
- [ ] Frame rate remains >= 58 FPS during active particle simulation.

---

## Acceptance Criteria

Particle systems are accepted **only** if:
1. They add refined atmospheric depth without distracting from commercial messaging.
2. The entire particle simulation runs inside a single instanced draw call.
3. Frame rates on mobile devices remain smooth and stutter-free.
