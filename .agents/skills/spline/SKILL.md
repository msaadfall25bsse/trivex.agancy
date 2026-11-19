---
name: spline
description: >-
  Master orchestrator for Spline 3D design and web integration. Use when planning, authoring, embedding, or optimizing Spline 3D scenes in the TRIVEX project. Routes to specialized Spline sub-skills for building scenes, materials, animation, HTML overlays, particles, runtime integration, and scene optimization.
---

# Spline 3D Master Orchestrator for TRIVEX

## Purpose & Scope

The **spline** skill is the master index and architectural coordinator for all Spline 3D capabilities in the TRIVEX project. It outlines the end-to-end lifecycle of Spline assets—from conceptual scene authoring in Spline Editor to runtime embedding, state machine triggering, two-way JavaScript communication, and production performance optimization in Next.js 16 and React 19.

---

## When to Use This Skill

Activate this skill when:
- Deciding whether a 3D requirement should be built in Spline vs vanilla Three.js / React Three Fiber.
- Initiating a new Spline 3D project or planning multi-state interactive assets for TRIVEX routes.
- Routing to specialized Spline sub-skills based on the specific engineering or design task.
- Auditing the dependency chain between scene construction, materials, animation, and web runtime.
- Ensuring strict separation between Spline authoring workflows and standard Next.js code edits.

Do **not** use this skill for:
- Writing low-level WebGL shaders or raw Three.js buffer geometry (use `@skill:3d-scene-architecture`).
- Direct CSS / GSAP DOM-only animations (use `@skill:3d-motion-interaction`).

---

## Spline Skills Ecosystem & Dependency Matrix

The Spline capability suite consists of 8 modular, complementary skills. Follow the dependency progression below to ensure high-fidelity, leak-free delivery:

```
                          ┌──────────────────────────┐
                          │         spline           │
                          │   (Master Orchestrator)  │
                          └─────────────┬────────────┘
                                        │
           ┌────────────────────────────┼────────────────────────────┐
           ▼                            ▼                            ▼
┌──────────────────────┐     ┌──────────────────────┐     ┌──────────────────────┐
│spline-3d-building-   │     │spline-3d-materials-  │     │  spline-3d-particles │
│       scenes         │────►│       and-look       │────►│ (Atmosphere & Flows) │
│ (Geometry & Hierarchy│     │ (PBR, Glass, Lights) │     │                      │
└──────────┬───────────┘     └──────────┬───────────┘     └──────────┬───────────┘
           │                            │                            │
           └────────────────────────────┼────────────────────────────┘
                                        ▼
                             ┌──────────────────────┐
                             │ spline-3d-animation  │
                             │ (Pivots, Timelines,  │
                             │   State Machines)    │
                             └──────────┬───────────┘
                                        │
                                        ▼
                             ┌──────────────────────┐
                             │spline-3d-scene-      │
                             │     optimization     │
                             │ (Poly reduction,     │
                             │  Shadow culling)     │
                             └──────────┬───────────┘
                                        │
           ┌────────────────────────────┴────────────────────────────┐
           ▼                                                         ▼
┌──────────────────────┐                                  ┌──────────────────────┐
│    spline-3d-use     │                                  │spline-3d-html-content│
│ (React 19 Runtime,   │◄────────────────────────────────►│ (World-to-Screen,   │
│  Next.js Dynamic)    │                                  │  DOM Overlays, ARIA) │
└──────────────────────┘                                  └──────────────────────┘
```

### Specialized Skill Directory

1. **`spline-3d-building-scenes`**: Scene graph planning, procedural primitives, Booleans, pivot alignment, and hierarchy structure.
2. **`spline-3d-materials-and-look`**: Layered material system, frosted glass, metals, lighting rigs, and TRIVEX dark/light theme tokens.
3. **`spline-3d-particles`**: Spline particle emitters, dynamic data streams, gravity/turbulent deflectors, and performance limits.
4. **`spline-3d-animation`**: Keyframing, custom pivot points, state machines, easing curves, and external event triggers.
5. **`spline-3d-scene-optimization`**: Scene auditing, polygon reduction, texture downsampling, shadow culling, and visual-parity testing.
6. **`spline-3d-use`**: Next.js App Router dynamic import (`ssr: false`), runtime API (`@splinetool/react-spline`, `@splinetool/runtime`), and memory cleanup.
7. **`spline-3d-html-content`**: Projecting 3D object coordinates to 2D screen space, positioning tooltips, and two-way React-to-Spline communication.

---

## Mandatory Pre-Flight Authoring Rules

Before creating or editing any Spline scene for TRIVEX, adhere to these mandatory principles:

1. **Load Relevant Authoring Guides First**: Never generate or modify a scene without consulting the targeted skill (`spline-3d-building-scenes` for geometry, `spline-3d-materials-and-look` for shaders).
2. **Zero Code Pollution**: Do not invent unofficial React wrappers. Always use the sanctioned `@splinetool/react-spline` component or `@splinetool/runtime` inside a dynamic client boundary.
3. **No Account Assumption**: The presence of these skill files does not imply an active Spline cloud account connection. Workflows must support exported `.splinecode` binary files, self-hosted static assets, or public scene URLs.
4. **Preserve TRIVEX Aesthetic**: All Spline assets must conform to TRIVEX's dual-theme colors (Dark: `#080B10`, `#00D2FF`; Light: `#f8f9ff`, `#0088FF`) and typography.

---

## Technical Integration Options

Depending on the section requirements, select the appropriate delivery mechanism:

| Method | Target Use Case | Pros | Trade-offs |
| :--- | :--- | :--- | :--- |
| **`@splinetool/react-spline`** | Hero sections, interactive service cards | Native React props, `onLoad` access to `SplineApp` instance | Requires client-side dynamic import (`ssr: false`) |
| **`@splinetool/runtime`** | Custom canvas or WebGL pipeline integration | Direct access to camera, scene graph, and variables | Requires manual canvas lifecycle and resize listeners |
| **Exported GLTF / WebP** | Fallback mode or ultra-low latency mobile routes | Instant loading, zero runtime library overhead | Loses Spline state machine and physics interactions |

---

## Step-by-Step Professional Workflow

```
[Phase 1: Architecture & Suitability]
  ├── Determine if Spline is optimal (vs CSS 3D or Three.js)
  ├── Identify user interactions (Hover, Scroll, Click, Form Sync)
  └── Establish target route and layout footprint in TRIVEX
       │
[Phase 2: Scene Creation & Visual Design]
  ├── Build geometry using @skill:spline-3d-building-scenes
  ├── Calibrate materials & lighting with @skill:spline-3d-materials-and-look
  └── Optional: Add data particles with @skill:spline-3d-particles
       │
[Phase 3: Animation & State Machine]
  ├── Set up custom pivots & states with @skill:spline-3d-animation
  └── Test interactions inside Spline Editor preview
       │
[Phase 4: Scene Optimization & Export]
  ├── Audit draw calls & polygons using @skill:spline-3d-scene-optimization
  └── Export production-grade .splinecode file or cloud URL
       │
[Phase 5: Next.js Runtime Integration]
  ├── Embed scene using @skill:spline-3d-use
  ├── Attach HTML overlays with @skill:spline-3d-html-content
  └── Verify responsive accessibility with @skill:responsive-accessibility
```

---

## Common Mistakes to Avoid

- **Mistake 1: Conflating Spline with Next.js Code**: Attempting to write Next.js React JSX inside Spline or treating Spline's internal event graph as standard React hooks. Keep authoring and integration strictly separated.
- **Mistake 2: Skipping Scene Optimization**: Exporting a raw Spline scene with 200,000 polygons, unbaked shadows, and 8 uncompressed material layers directly into production.
- **Mistake 3: Unbounded Memory Leaks**: Mounting Spline without listening for component unmount and calling `splineApp.dispose()`.

---

## Validation Checklist

- [ ] Clear scene goal and route placement defined before authoring.
- [ ] Appropriate sub-skills consulted for geometry, materials, animation, and optimization.
- [ ] Asset payload targeted to under 2.0 MB uncompressed.
- [ ] Fallback image prepared for non-WebGL devices.
- [ ] Component structured behind Next.js dynamic import with `ssr: false`.

---

## Acceptance Criteria

A Spline 3D initiative is approved **only** if:
1. The scene loads and renders at a sustained 60 FPS on desktop and >= 45 FPS on mobile.
2. The scene adheres to the TRIVEX design language and dual-theme palette.
3. The Next.js integration introduces zero memory leaks, zero SSR hydration mismatches, and zero layout shifts.
