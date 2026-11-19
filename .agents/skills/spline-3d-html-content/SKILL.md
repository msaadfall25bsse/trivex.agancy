---
name: spline-3d-html-content
description: >-
  Architects HTML/DOM overlays layered over Spline 3D scenes with two-way JavaScript scene communication. Covers world-to-screen coordinate projection, floating 3D tooltips, safe pointer-event pass-through, accessible screen-reader synchronization, and driving Next.js state from 3D clicks.
---

# Spline 3D HTML Overlays & Bidirectional Communication for TRIVEX

## Purpose & Scope

The **spline-3d-html-content** skill establishes the engineering pattern for pairing rich HTML/DOM UI elements (tooltips, badges, telemetry readouts, interactive forms) directly with 3D objects inside a Spline scene.

By projecting 3D object coordinates into 2D viewport coordinates, this skill allows high-fidelity text rendering with perfect anti-aliasing, native SEO crawlability, and full screen-reader accessibility, while preserving seamless pointer event routing across the 2D/3D interface boundary.

---

## When to Use This Skill

Activate this skill when:
- Attaching interactive HTML badges, price tags, or feature tooltips to moving 3D objects.
- Displaying real-time telemetry or data labels positioned above Spline meshes.
- Ensuring pointer events pass cleanly through HTML overlays to the underlying 3D canvas (`pointer-events: none` vs `pointer-events: auto`).
- Synchronizing 3D selection events with Next.js router transitions or dialog popups.
- Generating accessible ARIA descriptions and live regions for 3D state updates.

Do **not** use this skill for:
- Pure CSS 3D transforms on DOM elements (use `@skill:3d-motion-interaction`).
- Internal Spline 3D text primitives (use `@skill:spline-3d-building-scenes`).

---

## Coordinate Projection Architecture (World-to-Screen)

To place an HTML `<div>` exactly over a 3D object as the camera moves, we project the object's 3D world coordinates through the camera's view-projection matrix:

```
┌────────────────────────────────────────────────────────────────────────┐
│                     World-to-Screen Projection                         │
├────────────────────────────────────────────────────────────────────────┤
│ 1. 3D World Position: object.position (x, y, z)                        │
│                           │                                            │
│                           ▼                                            │
│ 2. Project via Camera: vector.project(splineCamera)                    │
│    Result: Normalized Device Coordinates (-1.0 to +1.0)                │
│                           │                                            │
│                           ▼                                            │
│ 3. Viewport Pixel Conversion:                                          │
│    screenX = (vector.x * 0.5 + 0.5) * canvasWidth                      │
│    screenY = -(vector.y * 0.5 + 0.5) * canvasHeight + canvasHeight     │
│                           │                                            │
│                           ▼                                            │
│ 4. Apply to HTML Overlay: style.transform = `translate3d(Xpx, Ypx, 0)`│
└────────────────────────────────────────────────────────────────────────┘
```

### Complete React Hook for Tracking 3D Object Screen Coordinates

```tsx
"use client";

import { useEffect, useState } from "react";
import { Application } from "@splinetool/runtime";

export function useSplineObjectScreenPosition(
  splineApp: Application | null,
  objectName: string
) {
  const [coords, setCoords] = useState<{ x: number; y: number; visible: boolean }>({
    x: 0,
    y: 0,
    visible: false,
  });

  useEffect(() => {
    if (!splineApp) return;

    let animId: number;
    const targetObj = splineApp.findObjectByName(objectName);

    const updatePosition = () => {
      if (targetObj) {
        // Spline runtime provides projection helpers
        const screenPos = splineApp.projectWorldToScreen(targetObj.position);
        if (screenPos) {
          setCoords({
            x: screenPos.x,
            y: screenPos.y,
            visible: screenPos.z < 1.0, // Behind camera check
          });
        }
      }
      animId = requestAnimationFrame(updatePosition);
    };

    animId = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(animId);
  }, [splineApp, objectName]);

  return coords;
}
```

---

## Safe Pointer Event Routing (`pointer-events` Architecture)

If an HTML overlay covers the 3D canvas, mouse and touch events will be intercepted by the HTML layer, preventing users from clicking or orbiting the 3D scene.

### The Sandwich Layer Pattern

```tsx
export function SplineWithHtmlOverlays() {
  return (
    <div className="relative w-full aspect-video overflow-hidden">
      {/* Layer 1: Underlying 3D WebGL Canvas */}
      <div className="absolute inset-0 z-0">
        <Spline scene="/models/trivex-platform.splinecode" />
      </div>

      {/* Layer 2: Transparent HTML Overlay Container (PASS-THROUGH) */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        aria-hidden="false"
      >
        {/* Layer 3: Interactive Tooltip or Button (INTERACTIVE) */}
        <div 
          style={{ transform: "translate3d(240px, 180px, 0)" }}
          className="pointer-events-auto absolute p-3 rounded-xl bg-white/90 dark:bg-[#0F141C]/90 border border-slate-200 dark:border-[#1E2633] shadow-lg backdrop-blur-md"
        >
          <div className="text-xs font-mono font-bold text-[#0088FF] dark:text-[#00D2FF]">
            ENGINEERING CLUSTER
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Next.js 16 Micro-Frontends
          </p>
          <button 
            onClick={() => alert("Cluster inspected")}
            className="mt-2 px-3 py-1 text-[11px] font-bold rounded bg-[#0088FF] dark:bg-[#00D2FF] text-white dark:text-black cursor-pointer"
          >
            Explore Stack
          </button>
        </div>
      </div>
    </div>
  );
}
```

---

## Accessible Two-Way Communication & ARIA Synchronization

3D interactions must be communicated to assistive technologies. Whenever a user interacts with a 3D object, update an off-screen live region:

```tsx
"use client";

import React, { useState } from "react";
import Spline from "@splinetool/react-spline";

export function AccessibleSplineShowcase() {
  const [activeArtifact, setActiveArtifact] = useState<string>("Overview");

  return (
    <div className="relative w-full">
      {/* Screen reader live region */}
      <div className="sr-only" aria-live="polite">
        Currently active 3D module: {activeArtifact}
      </div>

      {/* 3D Canvas with native keyboard support */}
      <Spline
        scene="/models/trivex-ecosystem.splinecode"
        onSplineMouseDown={(e) => {
          const name = e.target.name;
          setActiveArtifact(name);
        }}
      />

      {/* Synchronized accessible HTML status readout */}
      <div className="p-4 border-t border-slate-200 dark:border-[#1E2633] flex items-center justify-between text-xs font-mono">
        <span>Selected Architecture: <strong>{activeArtifact}</strong></span>
        <span className="text-[#0088FF] dark:text-[#00D2FF]">Synchronized with Spline Runtime</span>
      </div>
    </div>
  );
}
```

---

## Step-by-Step Professional Workflow

1. **Step 1: Identify 3D Targets**:
   - Determine which specific 3D meshes require HTML annotations or badges.
   - Name them clearly in the Spline Editor (e.g., `Node_Database`, `Node_Frontend`).
2. **Step 2: Implement Overlay Wrapper**:
   - Create the overlay container with `pointer-events: none`.
3. **Step 3: Connect Coordinate Projection**:
   - Use `projectWorldToScreen` in an animation loop to track object positions.
4. **Step 4: Enable Target Interactivity**:
   - Add `pointer-events: auto` strictly to interactive tooltip buttons or cards.
5. **Step 5: Accessibility Verification**:
   - Verify screen reader speaks selected 3D states via `aria-live="polite"`.

---

## Performance Requirements

1. **Overlay Frame Cost**: Updating HTML overlay transforms must consume `< 2ms` per frame.
2. **Use GPU Transforms Only**: Always position overlays via `style.transform = translate3d(x, y, 0)`. Never animate `top` or `left` properties (which trigger layout reflow).
3. **Throttled Updates**: If the camera is stationary, pause coordinate recalculation until the next pointer move or rotation.

---

## Common Mistakes to Avoid

- **Mistake 1: Blocking Canvas Clicks**: Forgetting `pointer-events: none` on the overlay wrapper, making the entire 3D canvas completely unclickable.
- **Mistake 2: Layout Reflow via Top/Left**: Setting `overlay.style.top = `${y}px`` inside `requestAnimationFrame`, causing continuous browser layout thrashing.
- **Mistake 3: Z-Index Inversion**: Failing to hide HTML tooltips when their associated 3D object orbits behind another object or behind the camera (`screenPos.z > 1.0`).

---

## Validation Checklist

- [ ] Overlay wrapper has `pointer-events: none` set.
- [ ] Interactive overlay buttons have `pointer-events: auto` set.
- [ ] Tooltip positions use `translate3d` hardware acceleration.
- [ ] Tooltips hide when the target 3D object is behind the camera.
- [ ] Screen readers announce 3D state updates via `aria-live`.
- [ ] Canvas is clickable and draggable through non-interactive overlay areas.

---

## Acceptance Criteria

HTML overlay integration is approved **only** if:
1. Users can seamlessly rotate and interact with the 3D canvas without overlay deadzones.
2. Overlay text and tooltips adhere to TRIVEX typography tokens (`font-brand`, `font-label-sm`).
3. Tooltips track their 3D anchors with zero jitter or latency during camera movement.
