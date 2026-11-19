---
name: spline-3d-animation
description: >-
  Guides professional 3D object animation, custom pivot point alignment, state machines, timing, easing curves, and interactive triggers in Spline. Covers multi-state transitions, Look-At tracking, scroll scrubbing, and controlling Spline animations via JavaScript.
---

# Spline 3D Animation, Pivots & State Machines for TRIVEX

## Purpose & Scope

The **spline-3d-animation** skill provides the technical and kinematic standards for animating 3D objects, building interactive state machines, aligning rotational pivot points, and engineering responsive hover/click states inside Spline.

It ensures that animations are physically grounded, smooth (60 FPS), and capable of responding both to in-canvas user interaction and programmatic commands issued from external Next.js React UI elements.

---

## When to Use This Skill

Activate this skill when:
- Creating multi-state animations in Spline (Base State -> Hover State -> Active/Selected State).
- Fixing eccentric rotational wobbles by resetting and centering custom object **Pivot Points**.
- Setting up event triggers in Spline (Mouse Hover, Mouse Down, Start, Look At, Scroll, Key Press).
- Designing professional easing curves (Cubic Bezier, Elastic, Spring damping).
- Programmatically triggering or reversing Spline animations from Next.js React components via `splineApp.emitEvent()`.
- Optimizing animation hierarchies to prevent CPU frame drops.

Do **not** use this skill for:
- Pure CSS or GSAP DOM-only transitions (use `@skill:3d-motion-interaction`).
- Material shading, glass refractions, and lighting adjustments (use `@skill:spline-3d-materials-and-look`).

---

## The Pivot Point Principle (Zero-Wobble Rule)

In 3D animation, **an object always rotates around its Pivot Point**. If a sphere or ring's pivot is offset by even 2 millimeters from its geometric center, any rotation animation will result in an unsightly elliptical wobble.

```
       [INCORRECT PIVOT]                      [CORRECT PIVOT]
     ┌──────────────────┐                  ┌──────────────────┐
     │                  │                  │                  │
     │      (Mesh)      │                  │      (Mesh)      │
     │                  │                  │        • (Pivot) │
     │                  │                  │                  │
  • (Offset Pivot)      │                  │                  │
     └──────────────────┘                  └──────────────────┘
       Rotation causes                       Rotation causes
       elliptical wobble                     smooth axial spin
```

### Pivot Calibration Procedure in Spline Editor
1. Select the target mesh in the Left Layer Tree.
2. Press **Alt + P** (or click the Pivot Tool in the top toolbar).
3. In the Right Properties Panel, select **Center Pivot** to instantly snap the anchor to the bounding box center, or manually align it to the intended mechanical hinge axis.
4. Exit Pivot Mode before creating States or keyframing.

---

## State Machine Architecture in Spline

Every interactive 3D asset in TRIVEX follows a standardized **4-State Lifecycle**:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        TRIVEX 4-State Machine                          │
├───────────────┬──────────────────────────────────┬─────────────────────┤
│ State         │ Geometric & Material Attributes  │ Trigger Event       │
├───────────────┼──────────────────────────────────┼─────────────────────┤
│ 1. Base State │ Resting rotation, neutral scale  │ Scene start         │
│ 2. Hover      │ +5% scale, elevated emissive     │ Mouse Hover         │
│ 3. Active     │ Targeted rotation, modal display │ Mouse Down / Click  │
│ 4. Transition │ Seamless return to Base State    │ Mouse Leave / Reset │
└───────────────┴──────────────────────────────────┴─────────────────────┘
```

### Configuring Multi-State Transitions in Spline
1. **Base State**: Set the default coordinates, rotation `(0, 0, 0)`, and scale `(1, 1, 1)`.
2. **Add State (+)**: Name it `State_Hover`. Adjust only the deltas (e.g., Rotation Y: `+45°`, Scale: `1.05`, Light Emissive: `1.5x`).
3. **Add State (+)**: Name it `State_Active`. Configure full inspection angle (e.g., Rotation Y: `180°`, Position Z: `+50`).
4. **Attach Event**:
   - Trigger: `Mouse Hover` -> Target: `Current Object` -> Transition: To `State_Hover`.
   - Trigger: `Mouse Leave` -> Target: `Current Object` -> Transition: To `Base State`.
   - Trigger: `Mouse Down` -> Target: `Current Object` -> Transition: To `State_Active`.

---

## Easing Curves & Timing Standards

Never use `Linear` easing for organic or branded tech animations. Linear movement feels mechanical and cheap.

| Movement Type | Easing Profile | Duration | Use Case |
| :--- | :--- | :--- | :--- |
| **Hover Feedback** | `Ease Out (Cubic)` | `0.3s - 0.4s` | Instant tactile response to cursor entry |
| **Resting Exit** | `Ease In-Out (Quad)` | `0.5s - 0.6s` | Smooth, natural deceleration back to Base State |
| **State Inspection** | `Spring (Damping: 18, Mass: 1)` | `0.8s` | High-end organic snap for card/model inspection |
| **Ambient Idle Orbit**| `Linear (Continuous Loop)` | `12s - 20s` | Subtle continuous background rotation |

---

## Look-At & Cursor Parallax Tracking

To make 3D assets feel alive and reactive:
1. In the Spline Editor, select the main camera or focal 3D object.
2. In the Right Panel, add an Event: **Look At**.
3. Set Target to **Mouse**.
4. Set **Damping / Speed**: `0.05` to `0.1` (never `1.0`, which causes dizzying instant snapping).
5. Set Limit Angles: Restrict pitch and yaw to maximum `[-25°, +25°]` so the object cannot be flipped inside out.

---

## Programmatic Animation Control via Next.js

When an HTML button outside the canvas is clicked, trigger a specific Spline state transition programmatically:

```tsx
"use client";

import React, { useRef } from "react";
import Spline from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";

export function ControlledSplineScene() {
  const splineRef = useRef<Application | null>(null);

  const handleInspectService = () => {
    if (!splineRef.current) return;
    
    // Trigger the named animation event created in Spline Editor
    splineRef.current.emitEvent("mouseDown", "Orb_Engineering");
  };

  const handleReset = () => {
    if (!splineRef.current) return;
    
    // Reverse transition back to base state
    splineRef.current.emitEventReverse("mouseDown", "Orb_Engineering");
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <button 
          onClick={handleInspectService}
          className="px-4 py-2 rounded-lg bg-[#0088FF] dark:bg-[#00D2FF] text-white dark:text-black font-bold text-xs"
        >
          Inspect Architecture
        </button>
        <button 
          onClick={handleReset}
          className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-semibold"
        >
          Reset View
        </button>
      </div>

      <div className="w-full aspect-video">
        <Spline
          scene="/models/trivex-interactive.splinecode"
          onLoad={(splineApp) => {
            splineRef.current = splineApp;
          }}
        />
      </div>
    </div>
  );
}
```

---

## Step-by-Step Professional Workflow

1. **Step 1: Pivot Verification**:
   - Inspect every animated element and verify its pivot point is centered or positioned on its hinge.
2. **Step 2: Base State Lock**:
   - Set coordinates and scale at rest. Never animate from an uncommitted base state.
3. **Step 3: State Delta Creation**:
   - Create named states (`State_Hover`, `State_Active`). Modify only the specific properties required.
4. **Step 4: Easing Calibration**:
   - Apply Ease-Out or Spring easing. Verify duration is under 500ms for hover reactions.
5. **Step 5: External Event Hookup**:
   - Test `splineApp.emitEvent()` calls from Next.js client controls to verify smooth triggering.

---

## Performance Requirements

1. **Hierarchy Depth**: Do not animate parent groups with more than 4 nested children simultaneously.
2. **Animation Frame Budget**: Spline animation transitions must maintain **60 FPS** without frame drops.
3. **Event Throttling**: Look-At mouse updates must be internally damped by Spline; do not flood external animation calls on every single pixel delta.

---

## Common Mistakes to Avoid

- **Mistake 1: Uncentered Pivots**: Animating an object whose pivot is outside its geometry, producing severe wobbles.
- **Mistake 2: Missing Reversal Triggers**: Adding a `Mouse Hover` event without a corresponding `Mouse Leave` event, leaving the 3D model permanently stuck in its hover state.
- **Mistake 3: Excessive Transition Duration**: Setting hover durations to 1.5 seconds, making the interface feel sluggish and unresponsive.
- **Mistake 4: Overlapping Conflicting Events**: Binding both Spline's internal scroll event and a parent GSAP ScrollTrigger to the same coordinate simultaneously, causing jitter.

---

## Validation Checklist

- [ ] Pivot points are verified and centered for all rotating objects.
- [ ] Hover and Leave states are paired and return cleanly to Base State.
- [ ] Easing is calibrated with Ease-Out or Spring (zero raw Linear easing on user interactions).
- [ ] Transition duration is snappy (between 250ms and 500ms for interactive states).
- [ ] External `emitEvent()` and `emitEventReverse()` calls function reliably from React.

---

## Acceptance Criteria

Animation is accepted **only** if:
1. All rotations execute cleanly around designated geometric axes without wobbling.
2. Interactive states respond instantly to pointer events with natural physical easing.
3. JavaScript-driven animation triggers execute with zero console errors.
