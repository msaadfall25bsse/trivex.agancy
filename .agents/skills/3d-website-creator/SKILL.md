---
name: 3d-website-creator
description: >-
  Plans and architects production-grade 3D web experiences integrated seamlessly into Next.js App Router applications. Use when planning multi-page 3D scene distribution, establishing route-by-route 3D scene specs, evaluating 3D feasibility without degrading performance, or defining technical standards for WebGL in the TRIVEX project.
---

# 3D Website Creator for TRIVEX

## Purpose & Scope

The **3D Website Creator** skill establishes the master planning, architectural governance, and integration standards for embedding interactive 3D WebGL scenes into the TRIVEX digital agency platform. 

This skill ensures that 3D experiences elevate brand authority and conversion without compromising Core Web Vitals, page speed, accessibility, or mobile responsiveness. It enforces strict separation between server-rendered informational content and client-side WebGL canvas contexts, ensuring search engine crawlability and instant text rendering.

---

## When to Use This Skill

Activate this skill when:
- Designing or architecting new 3D features across any route of the TRIVEX website (`/`, `/about`, `/services`, `/work`, `/industries`, `/process`, `/contact`).
- Deciding whether a page section requires WebGL, CSS 3D transforms, or optimized canvas animations.
- Establishing the route-by-route 3D scene specification and asset budget.
- Planning the integration of Three.js or React Three Fiber within the Next.js App Router and React 19 architecture.
- Preventing memory leaks, uncoordinated canvas instances, and hydration mismatches during route transitions.

Do **not** use this skill for:
- Writing low-level shader math (defer to `@skill:3d-visual-direction`).
- Low-level Three.js disposal and asset pipeline mechanics (defer to `@skill:3d-scene-architecture`).
- Scroll-bound timeline scrubbing and GSAP triggers (defer to `@skill:3d-motion-interaction`).

---

## Multi-Page 3D Scene Architecture for TRIVEX

3D should never be applied indiscriminately. Every 3D element must serve a commercial purpose: highlighting technical precision, illustrating data flow, or rewarding user interaction.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        TRIVEX Route Architecture                        │
├─────────────────────┬───────────────────────────┬──────────────────────┤
│ Route               │ Primary 3D Experience     │ Fallback Mode        │
├─────────────────────┼───────────────────────────┼──────────────────────┤
│ / (Homepage)        │ Global Mesh Node Console  │ Static WebP graphic  │
│ /about              │ Interactive Triple-Core   │ Vector SVG diagram   │
│ /services           │ Pillar Telemetry Orb      │ CSS Glass Badge      │
│ /services/[slug]    │ Service Artifact Showcase │ High-res preview img │
│ /work               │ 3D Project Depth View     │ Interactive 2D card  │
│ /industries         │ Vertical Spatial Grid     │ Tabular card layout  │
│ /process            │ 4-Stage Lifecycle Orbit   │ Step timeline card   │
│ /contact            │ Reactive Magnetic Orb     │ Minimal glowing ring │
└─────────────────────┴───────────────────────────┴──────────────────────┘
```

### Route-by-Route Scene Specifications

#### 1. Homepage (`/`)
- **Scene Goal**: Convey world-class enterprise capability and high velocity.
- **Visual Concept**: A dark, floating volumetric polygonal core with subtle data-stream particles and neon cyan edge illumination (`#00D2FF` in dark mode, royal blue `#0088FF` in light mode).
- **Interaction**: Gentle floating rotation, reacting with subtle inertia to mouse cursor pointer movements; tilts on scroll.
- **Budget**: Max 15,000 vertices, 1 draw call for mesh, 1 draw call for particle system.

#### 2. About Us (`/about`)
- **Scene Goal**: Symbolize the "Three Minds. One Vision." heritage.
- **Visual Concept**: Three interlocking glass-metallic tori rotating on synchronized axes with subtle dispersion and caustic reflections.
- **Interaction**: Interactive hover states that align the three rings into a unified singular emblem when hovered.

#### 3. Services Directory & Detail Pages (`/services`, `/services/[slug]`)
- **Scene Goal**: Differentiate the 4 agency pillars with tactile, distinct geometric artifacts.
  - *Marketing & Growth*: Expanding data helix / radar sphere.
  - *Engineering & Platforms*: Modular crystalline structure assembling dynamically.
  - *Creative & Design*: Prismatic refractive prism with chromatic dispersion.
  - *Automation & Intelligence*: Kinetic nodal network pulsing with light.
- **Interaction**: Viewport trigger on scroll entry with smooth rotation decay.

#### 4. Case Studies & Portfolio (`/work`)
- **Scene Goal**: Provide spatial depth and tactile realism to featured project cards.
- **Visual Concept**: Subtle 3D card tilt with specular sheen and real-time normal-mapped lighting reflections following the cursor.

#### 5. 4-Stage Process (`/process`)
- **Scene Goal**: Clarify the progression through Discover, Strategise, Build, and Launch.
- **Visual Concept**: Orbital path with a central core transferring state to 4 planetary waypoints along a spline curve.

#### 6. Contact & Consultation (`/contact`)
- **Scene Goal**: Calming, high-focus interactive sphere responding to form input focus states with subtle harmonic pulsation.

---

## Next.js App Router & React 19 Integration Standards

### Rule 1: Always Use Client Boundaries with Dynamic Imports
Never import Three.js or WebGL canvas components directly in Server Components (`page.tsx` or layout wrappers). Always isolate 3D components behind dynamic imports with Server-Side Rendering disabled (`ssr: false`):

```tsx
// components/3d/HeroSceneDynamic.tsx
"use client";

import dynamic from "next/dynamic";
import React from "react";

const HeroScene = dynamic(
  () => import("@/components/3d/HeroScene").then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => (
      <div 
        className="w-full h-full flex items-center justify-center bg-transparent animate-pulse"
        aria-hidden="true"
      >
        <div className="w-16 h-16 rounded-full border border-cyan-500/20" />
      </div>
    ),
  }
);

export function HeroSceneDynamic() {
  return <HeroScene />;
}
```

### Rule 2: Shared Canvas vs Isolated Canvas Strategy
- For scenes that transition between routes: Utilize a single shared root Canvas mounted inside a client layout provider using the Tunnel / View pattern (e.g. `three-stdlib` or Drei `<View />`).
- For standalone hero or section backgrounds: Use dedicated, self-contained Canvas containers that unmount and fully dispose of GPU resources immediately when navigating away.

### Rule 3: Zero Layout Shift (CLS = 0)
Always wrap 3D canvas containers in explicit aspect-ratio or absolute positioning shells with matching fallback skeleton backgrounds so that canvas hydration causes zero pixel shift:

```tsx
<div className="relative w-full aspect-square max-w-[500px] overflow-hidden">
  {/* Fallback image sits beneath the canvas */}
  <img 
    src="/assets/fallback-mesh.webp" 
    alt="" 
    className="absolute inset-0 w-full h-full object-contain pointer-events-none" 
  />
  {/* Canvas hydrates over fallback */}
  <HeroSceneDynamic />
</div>
```

---

## Step-by-Step Professional Workflow

```
[Phase 1: Feasibility & Scope]
  ├── Audit target route's content hierarchy & typography
  ├── Determine commercial intent of the 3D element
  └── Define strict performance budget (triangles, draw calls, VRAM)
       │
[Phase 2: Scene & Material Blueprint]
  ├── Define geometry (primitive procedural vs GLTF model)
  ├── Set lighting & dark/light theme color adaptation
  └── Specify user interaction (hover, mouse move, scroll scrub)
       │
[Phase 3: Implementation & Component Isolation]
  ├── Build self-contained client component with WebGL detection
  ├── Implement render loop with RAF / useFrame hook
  └── Attach resize & visibility observers (pause rendering when offscreen)
       │
[Phase 4: Cleanup & Lifecycle Management]
  ├── Dispose geometries, textures, materials, and WebGLRenderer
  ├── Cancel requestAnimationFrame handlers
  └── Remove all window event listeners
       │
[Phase 5: Performance & QA Verification]
  ├── Verify Lighthouse Performance >= 90
  ├── Verify 60fps render loop on mid-tier hardware
  └── Verify seamless theme toggle (Dark / Light)
```

---

## Performance Requirements & Budgets

To ensure TRIVEX remains an ultra-fast enterprise agency website, all 3D implementations must strictly satisfy these constraints:

1. **Polygon Budget**: Maximum 30,000 polygons / triangles across the entire active scene on desktop; maximum 12,000 on mobile devices.
2. **Draw Calls**: Maximum 25 draw calls per frame (ideal: < 10 through geometry instancing and texture atlas packing).
3. **Asset Size**: GLB models must not exceed 1.2 MB uncompressed. Always compress models with Draco or Meshopt (`gltf-pipeline` or `gltf-transform`).
4. **Texture Size**: Maximum 1024x1024 textures for models; maximum 2048x1024 for environment HDRI maps. Always use compressed KTX2 / Basis or optimized WebP textures.
5. **DPR Clamping**: Always clamp device pixel ratio between `1.0` and `1.75` (never render at native Retina `3.0x`, which causes mobile GPU throttling):
   ```ts
   const dpr = Math.min(window.devicePixelRatio, 1.75);
   renderer.setPixelRatio(dpr);
   ```
6. **Visibility Culling**: When a 3D element scrolls out of the active browser viewport, the render loop must halt immediately using an `IntersectionObserver`.

---

## Common Mistakes to Avoid

- **Mistake 1: Blocking text rendering**: Rendering hero headlines inside 3D text meshes instead of semantic HTML `<h1>`. *Fix*: Always render semantic HTML text on top of the canvas so SEO and accessibility remain unaffected.
- **Mistake 2: Missing WebGL Context Loss Handling**: Failing to handle context loss (`webglcontextlost`) when the OS or mobile browser reclaims GPU memory. *Fix*: Listen for `webglcontextlost` and gracefully show the fallback static image.
- **Mistake 3: Unbounded Memory Leaks**: Navigating between pages in Next.js App Router without disposing Three.js materials and geometries, causing the browser tab to crash after several page switches. *Fix*: Implement strict teardown routines on component unmount.
- **Mistake 4: Heavy 3D on Mobile**: Running particle simulations with 50,000 particles on mobile batteries. *Fix*: Detect touch devices or low-power modes and scale down particle counts by 75% or switch to CSS animations.

---

## Validation Checklist

- [ ] 3D canvas is dynamically loaded with SSR disabled (`ssr: false`).
- [ ] Fallback image/skeleton renders instantly with 0 cumulative layout shift.
- [ ] Semantic HTML headings, badges, and CTAs sit cleanly above or alongside the canvas.
- [ ] Frame rate remains solid at 60fps on mid-tier test hardware.
- [ ] Total uncompressed 3D asset payload is under 1.5MB.
- [ ] Dark and light themes adapt dynamically without page reloads.
- [ ] Render loop pauses when the scene is scrolled out of the viewport.
- [ ] Component unmount cleans up all GPU resources (`dispose()` called on geometries, materials, textures, renderer).

---

## Acceptance Criteria

A 3D website integration in TRIVEX is accepted **only** if:
1. Google Lighthouse Performance score remains >= 90 on mobile and >= 95 on desktop.
2. The site remains fully functional, legible, and interactive even if WebGL is completely disabled in the browser.
3. The TRIVEX visual brand identity (Space Grotesk typography, cyan `#00D2FF` dark mode accents, blue `#0088FF` light mode accents) is honored without deviation.
