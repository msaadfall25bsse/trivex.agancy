---
name: 3d-motion-interaction
description: >-
  Architects and implements high-performance motion, scroll-driven timelines, and pointer interactions using GSAP, ScrollTrigger, and Three.js. Covers scroll-linked camera movement, 3D card tilt, pointer raycasting, smooth interpolation (lerp), and scroll-scrubbed canvas/video.
---

# 3D Motion & Interaction for TRIVEX

## Purpose & Scope

The **3D Motion & Interaction** skill provides the technical framework for creating buttery-smooth, 60fps interactive animations across the TRIVEX website. It bridges WebGL 3D scenes, HTML5 video scrubbing, and DOM elements using **GSAP (GreenSock Animation Platform)** and **ScrollTrigger**.

This skill ensures that animations feel organic and responsive to human interaction, using physics-based easing and linear interpolation (`lerp`) while properly isolating and tearing down animation instances to prevent memory leaks during App Router page transitions.

---

## When to Use This Skill

Activate this skill when:
- Binding 3D camera orbits, translations, or field-of-view (FOV) changes to page scroll position.
- Animating 3D geometry rotations, mesh transitions, or particle expansions.
- Creating 3D perspective hover cards with specular reflections that follow cursor coordinates.
- Implementing scroll-scrubbed canvas video or image sequences.
- Managing GSAP timelines within Next.js React 19 lifecycle using `gsap.context()`.
- Ensuring motion gracefully respects user preferences for reduced motion (`prefers-reduced-motion`).

Do **not** use this skill for:
- Static material definitions or lighting setups (use `@skill:3d-visual-direction`).
- Low-level GPU memory disposal and buffer allocation (use `@skill:3d-scene-architecture`).

---

## Motion Choreography Principles for TRIVEX

1. **Inertia & Weight (No Instant Jumps)**: Real physical objects possess mass and momentum. All pointer interactions must use linear interpolation (`lerp`) to softly glide toward target coordinates.
2. **Subtlety Over Chaos**: 3D movement should support content comprehension, never distract from reading copy or viewing conversion CTAs.
3. **Synchronized Timelines**: DOM text reveals and 3D camera sweeps must share identical trigger points and duration curves.
4. **Zero Main-Thread Jitter**: Heavy calculations (such as raycasting against high-poly models) must be throttled or executed against simplified bounding collision volumes.

---

## GSAP & Next.js App Router Integration Architecture

### Rule 1: Always Scope Timelines with `gsap.context()`
In React 19 and Next.js, direct un-scoped GSAP calls leak listeners and trigger animations multiple times due to strict mode mounting. Always wrap animations inside `gsap.context()` for automatic cleanup:

```tsx
"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollDriven3DSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // 1. Create scoped context
    const ctx = gsap.context(() => {
      // All GSAP calls inside this callback are scoped and automatically reverted on unmount
      gsap.to(".animated-3d-target", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1, // Smooth scrub with 1s catch-up lag
        },
        y: 100,
        rotation: 180,
      });
    }, containerRef);

    // 2. Revert everything on component unmount / route transition
    return () => ctx.revert();
  }, []);

  return <div ref={containerRef} className="relative w-full min-h-screen">...</div>;
}
```

---

## Scroll-Linked 3D Camera Choreography

Connecting page scroll to a 3D camera trajectory transforms standard scrolling into a cinematic experience.

```ts
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function bindCameraToScroll(
  camera: THREE.PerspectiveCamera, 
  triggerElement: HTMLElement
) {
  // Define waypoints along the scroll journey
  const cameraTrajectory = {
    x: 0,
    y: 0,
    z: 5,
    rotX: 0,
    rotY: 0,
    fov: 45,
  };

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top top",
      end: "bottom bottom",
      scrub: 1.2, // Adds silky smooth inertia
      onUpdate: () => {
        // Sync 3D camera with GSAP trajectory state
        camera.position.set(cameraTrajectory.x, cameraTrajectory.y, cameraTrajectory.z);
        camera.rotation.x = cameraTrajectory.rotX;
        camera.rotation.y = cameraTrajectory.rotY;
        camera.fov = cameraTrajectory.fov;
        camera.updateProjectionMatrix();
      },
    },
  });

  // Beat 1: Zoom in and pan across the first headline
  tl.to(cameraTrajectory, { x: 1.5, y: -0.5, z: 3.2, rotY: 0.25, ease: "none" }, 0);

  // Beat 2: Sweep upward into the core technology artifact
  tl.to(cameraTrajectory, { x: -1.2, y: 1.0, z: 2.8, rotY: -0.2, rotX: 0.1, ease: "none" }, 0.5);

  return tl;
}
```

---

## Mouse / Pointer Physics & Inertia Tracking

Pointer tracking should never snap rigidly to cursor coordinates. Use damped interpolation in the render loop:

```ts
interface MouseState {
  x: number; // Target coordinate (-1 to 1)
  y: number;
  currentX: number; // Current interpolated coordinate
  currentY: number;
}

export function createSmoothPointerTracker(element: HTMLElement) {
  const state: MouseState = { x: 0, y: 0, currentX: 0, currentY: 0 };

  const onPointerMove = (e: PointerEvent) => {
    const rect = element.getBoundingClientRect();
    // Normalize coordinates between -1 and +1
    state.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    state.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };

  element.addEventListener("pointermove", onPointerMove, { passive: true });

  const update = (mesh: THREE.Object3D, delta: number) => {
    // Smooth lerp with frame-rate independent factor
    const factor = 1.0 - Math.exp(-6 * delta);
    state.currentX += (state.x - state.currentX) * factor;
    state.currentY += (state.y - state.currentY) * factor;

    // Apply soft tilt to 3D object
    mesh.rotation.y = state.currentX * 0.35;
    mesh.rotation.x = -state.currentY * 0.25;
  };

  const destroy = () => {
    element.removeEventListener("pointermove", onPointerMove);
  };

  return { update, destroy };
}
```

---

## 3D Perspective Tilt Cards (DOM / CSS Hybrid)

For cards (such as in `/services` and `/work`), combining CSS 3D transforms with a dynamic specular shine overlay achieves a 3D aesthetic at **zero WebGL overhead**:

```tsx
"use client";

import React, { useRef, useState } from "react";

export function PerspectiveTiltCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [shineStyle, setShineStyle] = useState({ opacity: 0, x: "50%", y: "50%" });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8; // Max 8 deg tilt
    const rotateY = ((x - centerX) / centerX) * 8;

    setTransform(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`
    );
    setShineStyle({
      opacity: 0.15,
      x: `${((x / rect.width) * 100).toFixed(1)}%`,
      y: `${((y / rect.height) * 100).toFixed(1)}%`,
    });
  };

  const handlePointerLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setShineStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        transform,
        transition: "transform 0.15s cubic-bezier(0.2, 0, 0, 1)",
      }}
      className="relative rounded-2xl border overflow-hidden bg-[#0F141C] border-[#1E2633] dark:bg-[#0F141C]"
    >
      {/* Specular cursor glow highlight */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: shineStyle.opacity,
          background: `radial-gradient(circle 250px at ${shineStyle.x} ${shineStyle.y}, rgba(0, 210, 255, 0.4), transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
}
```

---

## Scroll-Scrubbed Canvas Video / Image Sequences

For Apple-style product assembly or kinetic showcases (where 3D video is scrubbed frame-by-frame with scroll):
1. **Preload Frame Buffer**: Load image sequence into memory (WebP sequence, 60 to 120 frames).
2. **Draw to 2D Canvas**: Bind frame index to ScrollTrigger scrub progress and render via `context.drawImage()`.
3. **Prevent Memory Spikes**: Clamp canvas resolution to exact display bounds; never draw 4K frames on mobile devices.

---

## Respecting `prefers-reduced-motion`

Always check the user's OS accessibility settings. If reduced motion is requested, immediately disable scroll camera spins and parallax:

```ts
export function shouldReduceMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
```

When `shouldReduceMotion()` is true:
- Set 3D camera to static resting position.
- Disable GSAP scrub and parallax sweeps.
- Replace animated transitions with instantaneous fades.

---

## Step-by-Step Professional Workflow

1. **Step 1: Motion Storyboard & Keyframing**:
   - Define start trigger, end trigger, and scrub duration.
   - Establish camera trajectory waypoints (start position -> focal point -> exit position).
2. **Step 2: Scoped Context Creation**:
   - Wrap all GSAP timelines in `gsap.context(..., containerRef)`.
3. **Step 3: Physics & Damping Integration**:
   - Apply exponential smoothing / lerp to cursor or scroll follow variables.
4. **Step 4: Reduced Motion Guard**:
   - Add conditional branch for `prefers-reduced-motion`.
5. **Step 5: Teardown & Transition Test**:
   - Test navigating forward and backward between routes. Verify that `ScrollTrigger.getAll()` count returns to 0 when leaving the page.

---

## Performance Requirements

1. **Frame Rate**: Minimum 58+ FPS during active scroll scrubbing on mid-tier laptops and iPhones.
2. **Main Thread Work**: Frame compute time must remain below 10ms.
3. **ScrollTrigger Lifecycle**: All triggers must be killed on unmount. No zombie triggers recalculating layout on other routes.
4. **Passive Listeners**: All `pointermove` and `scroll` event listeners must be declared with `{ passive: true }`.

---

## Common Mistakes to Avoid

- **Mistake 1: Memory Leaks via Missing `ctx.revert()`**: Creating `ScrollTrigger.create()` inside React components without calling `kill()` or using `gsap.context().revert()`. The trigger continues firing after the DOM node is gone.
- **Mistake 2: Layout Thrashing during Scroll**: Reading `element.getBoundingClientRect()` inside a `scrollTrigger.onUpdate` callback. This forces a synchronous style recalculation on every frame.
- **Mistake 3: Stiff Jumpy Cursor Follow**: Setting mesh rotation directly equal to raw mouse coordinates instead of applying `lerp`.
- **Mistake 4: Disregarding Mobile Touch**: Attempting hover tilt on touchscreens, which creates sticky broken states when fingers lift from the screen.

---

## Validation Checklist

- [ ] All animations are created inside a `gsap.context()` block.
- [ ] Cleanup hook (`ctx.revert()`) executes cleanly on unmount.
- [ ] No layout thrashing (`getBoundingClientRect`) occurs during the render loop.
- [ ] Cursor interactions use linear interpolation (`lerp`) with exponential smoothing.
- [ ] `prefers-reduced-motion: reduce` halts camera spins and parallax sweeps.
- [ ] Mobile touch interactions are handled gracefully without sticky hover states.

---

## Acceptance Criteria

Motion & Interaction is accepted **only** if:
1. Animations maintain consistent 60fps frame rate without jank or stutter during scroll scrubbing.
2. Navigating away from the route destroys all ScrollTrigger instances and event listeners.
3. Users with motion sensitivities experience a stable, static, accessible presentation.
