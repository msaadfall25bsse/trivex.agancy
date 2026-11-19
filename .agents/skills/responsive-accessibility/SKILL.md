---
name: responsive-accessibility
description: >-
  Ensures 3D WebGL experiences in TRIVEX are universally accessible, performant across desktop, tablet, and mobile devices, and compliant with accessibility standards (WCAG 2.1 AA, prefers-reduced-motion, screen readers, keyboard navigation, and graceful WebGL fallbacks).
---

# Responsive Accessibility for TRIVEX 3D

## Purpose & Scope

The **Responsive Accessibility** skill guarantees that rich 3D and WebGL experiences in the TRIVEX platform never exclude users due to hardware limitations, input constraints, motor sensitivities, or visual impairments.

It defines tiered hardware degradation strategies, touch-first gesture normalization, screen reader descriptions for spatial interfaces, keyboard navigable 3D overlays, and seamless zero-downtime 2D fallbacks.

---

## When to Use This Skill

Activate this skill when:
- Designing or implementing 3D scenes that must run across mobile phones, tablets, and low-spec laptops.
- Implementing tiered quality detection (High, Medium, Low GPU profiles).
- Ensuring 3D scenes comply with **WCAG 2.1 AA** standards.
- Handling touch gestures (pinch-to-zoom, swipe-rotate) without hijacking page scroll.
- Wiring keyboard navigation (Tab / Arrow keys) to 3D interactive objects.
- Providing descriptive screen reader text (`aria-live`, `aria-label`, `<canvas role="img">`) for 3D elements.
- Managing WebGL context loss errors and displaying elegant recovery UI.

Do **not** use this skill for:
- Low-level GSAP animation timelines (use `@skill:3d-motion-interaction`).
- Material shader definitions and studio lighting (use `@skill:3d-visual-direction`).

---

## Tiered Quality Detection & Adaptive Rendering

Devices accessing TRIVEX range from high-end M3 Max MacBooks to budget Android smartphones. A single static WebGL setting will either underutilize high-end hardware or overheat mobile chips.

### 3-Tier Hardware Profile Strategy

```
┌─────────────────┬──────────────────┬──────────────────┬─────────────────┐
│ Feature         │ Tier 1 (High)    │ Tier 2 (Medium)  │ Tier 3 (Low)    │
│                 │ Desktop GPU / M- │ Laptops / iPads  │ Budget Mobile / │
│                 │ Series Apple     │                  │ Battery Saver   │
├─────────────────┼──────────────────┼──────────────────┼─────────────────┤
│ Target FPS      │ 60 FPS           │ 60 FPS           │ 30 FPS / Static │
│ Max Triangles   │ 30,000           │ 15,000           │ 5,000           │
│ DPR Limit       │ 1.75             │ 1.25             │ 1.0             │
│ Shadows         │ Real-time Soft   │ Contact Plane    │ Baked / None    │
│ Post-Processing │ Bloom / AO       │ Bloom Only       │ Disabled        │
│ Particles       │ 5,000            │ 1,500            │ 300             │
│ Antialiasing    │ MSAA 4x          │ FXAA / Standard  │ Off             │
└─────────────────┴──────────────────┴──────────────────┴─────────────────┘
```

### Automatic Tier Detection Helper

```ts
export type DeviceTier = "high" | "medium" | "low";

export function detectDeviceTier(): DeviceTier {
  if (typeof window === "undefined") return "medium";

  // Check battery saver or low memory
  const nav = navigator as any;
  if (nav.deviceMemory && nav.deviceMemory <= 4) return "low";
  if (nav.hardwareConcurrency && nav.hardwareConcurrency <= 4) return "low";

  // Detect mobile user agent
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  if (isMobile) {
    // Treat high-end mobile as medium tier to preserve battery
    return "medium";
  }

  // Desktop default
  return "high";
}
```

---

## Screen Reader & Semantic HTML Accessibility

Canvases are inherently invisible black boxes to screen readers. TRIVEX enforces strict accessibility encapsulation:

### Rule 1: Always Pair `<canvas>` with Semantic ARIA Markup
Every 3D canvas must have an accessible name, a role, and an off-screen descriptive fallback:

```tsx
<div className="relative w-full aspect-square">
  {/* Screen-reader accessible label and live readout */}
  <div className="sr-only" aria-live="polite">
    Interactive 3D visualization of TRIVEX enterprise software architecture. 
    Use arrow keys to rotate the model, or press enter to inspect core services.
  </div>

  <canvas
    role="img"
    aria-label="Interactive 3D model representing TRIVEX triple-core architecture"
    tabIndex={0} // Allows keyboard focus
    className="w-full h-full"
  />
</div>
```

### Rule 2: Synchronize 3D State with HTML Overlays
Whenever a 3D object is selected or hovered, update an accessible HTML DOM element:
- When a 3D service orb is selected: update an active HTML badge with `aria-current="true"`.
- Ensure all interactive links and buttons remain native HTML elements placed on top of or alongside the canvas.

---

## Keyboard Navigation & Focus Management

Users who navigate using keyboards or assistive switches must be able to interact with 3D elements without a mouse:

```ts
export function bindKeyboardControls(
  element: HTMLElement,
  onRotate: (deltaX: number, deltaY: number) => void,
  onSelect: () => void
) {
  const handleKeyDown = (e: KeyboardEvent) => {
    const ROTATION_STEP = 0.1; // radians

    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        onRotate(-ROTATION_STEP, 0);
        break;
      case "ArrowRight":
        e.preventDefault();
        onRotate(ROTATION_STEP, 0);
        break;
      case "ArrowUp":
        e.preventDefault();
        onRotate(0, -ROTATION_STEP);
        break;
      case "ArrowDown":
        e.preventDefault();
        onRotate(0, ROTATION_STEP);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        onSelect();
        break;
    }
  };

  element.addEventListener("keydown", handleKeyDown);
  return () => element.removeEventListener("keydown", handleKeyDown);
}
```

---

## Touch Gestures & Scroll Hijacking Prevention

One of the worst user experiences on mobile is accidentally getting "stuck" inside a 3D canvas while attempting to scroll down the page.

### Touch Handling Rules
1. **Never hijack default vertical touch scroll**: Set `touch-action: pan-y` on canvas wrapper elements unless full-screen spatial exploration is explicitly requested.
2. **Require two-finger gesture for 3D camera pan**: Single finger scrolls the page; two fingers orbit the 3D model.
3. **Show visible touch hint**: On mobile, display a subtle helper badge: `"Swipe with two fingers to rotate 3D view"` that fades out after initial interaction.

```css
/* Prevent canvas from trapping single-finger page scrolling */
.trivex-canvas-wrapper {
  touch-action: pan-y;
}
```

---

## WebGL Context Loss & Graceful Error Recovery

Mobile operating systems frequently evict WebGL contexts when the browser enters the background or memory gets tight. TRIVEX scenes must listen for `webglcontextlost` and restore gracefully:

```ts
export function attachContextLossRecovery(
  canvas: HTMLCanvasElement,
  onRestore: () => void
) {
  const onContextLost = (e: Event) => {
    e.preventDefault(); // Prevents browser from permanently dropping context
    console.warn("[TRIVEX 3D] WebGL context lost. Pausing render loop...");
  };

  const onContextRestored = () => {
    console.info("[TRIVEX 3D] WebGL context restored. Rebuilding scene graph...");
    onRestore();
  };

  canvas.addEventListener("webglcontextlost", onContextLost, false);
  canvas.addEventListener("webglcontextrestored", onContextRestored, false);

  return () => {
    canvas.removeEventListener("webglcontextlost", onContextLost);
    canvas.removeEventListener("webglcontextrestored", onContextRestored);
  };
}
```

---

## Loading & Error States

Every 3D scene must incorporate a robust 3-state lifecycle:

```
[State 1: Loading] ──► CSS Skeleton matching exact canvas aspect ratio
         │
         ├── Success: Fade in 3D Canvas over 200ms
         │
[State 2: Active]  ──► 60fps interactive WebGL scene
         │
         └── Context Failure / WebGL Disabled:
[State 3: Fallback]──► High-resolution static WebP rendering with interactive CSS tilt
```

---

## Step-by-Step Professional Workflow

1. **Step 1: Hardware Capability Profiling**:
   - Run `detectDeviceTier()`.
   - Apply appropriate polygon, shadow, and DPR limits.
2. **Step 2: Semantic Markup Injection**:
   - Provide `<div className="sr-only">` description of the scene's commercial meaning.
   - Set `role="img"` and `aria-label` on canvas element.
3. **Step 3: Keyboard Controls Binding**:
   - Make canvas focusable (`tabIndex={0}`) or provide adjacent HTML buttons.
   - Bind Arrow keys to rotation controls.
4. **Step 4: Touch Gestures Safeguard**:
   - Apply `touch-action: pan-y` to allow vertical scroll.
5. **Step 5: Context Loss Recovery Hook**:
   - Attach `webglcontextlost` and `webglcontextrestored` listeners.
6. **Step 6: Accessibility Audit**:
   - Verify screen reader speaks the accessible label.
   - Verify keyboard navigation works without mouse input.

---

## Validation Checklist

- [ ] Canvas has `role="img"` and a descriptive `aria-label`.
- [ ] Screen reader text (`sr-only`) explains the 3D scene's content.
- [ ] Keyboard navigation (Arrow keys + Enter) works when canvas is focused.
- [ ] Mobile touch scrolling is NOT trapped or hijacked (`touch-action: pan-y`).
- [ ] DPR is capped at 1.0 for low-tier devices and 1.75 for high-tier devices.
- [ ] `prefers-reduced-motion` immediately disables rotation and camera sweeps.
- [ ] Disabling WebGL in browser settings renders the 2D fallback image seamlessly.
- [ ] WebGL context loss is handled without unhandled runtime exceptions.

---

## Acceptance Criteria

Responsive Accessibility is accepted **only** if:
1. Keyboard-only users can navigate and trigger all 3D features without a mouse.
2. Mobile devices experience smooth page scrolling without canvas trapping.
3. The page passes automated axe / Lighthouse accessibility checks with a score of 100.
