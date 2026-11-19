---
name: spline-3d-use
description: >-
  Guides the integration, embedding, and runtime management of Spline 3D scenes in Next.js App Router and React 19 applications. Covers dynamic client imports, runtime API usage (@splinetool/react-spline and @splinetool/runtime), two-way event passing, aspect ratio scaling, and strict GPU memory teardown.
---

# Spline 3D Web Integration & Runtime for TRIVEX

## Purpose & Scope

The **spline-3d-use** skill establishes the technical engineering standards for integrating, embedding, and interacting with Spline 3D scenes within the TRIVEX Next.js 16 and React 19 codebase.

It covers safe dynamic client mounting, bidirectional communication between React components and Spline's internal state machine, responsive canvas scaling, and comprehensive teardown routines to prevent WebGL context leaks during client-side route navigation.

---

## When to Use This Skill

Activate this skill when:
- Embedding a `.splinecode` export or Spline public scene URL into any TRIVEX route component.
- Implementing `@splinetool/react-spline` or `@splinetool/runtime`.
- Passing React state (such as Dark/Light theme changes, button clicks, or scroll progress) into Spline scene variables.
- Listening to 3D object click or hover events inside Spline to trigger React state updates or Next.js page transitions.
- Configuring loading skeletons and fallback UI during 3D asset initialization.
- Disposing of the Spline runtime instance on component unmount.

Do **not** use this skill for:
- Constructing 3D geometry inside the Spline Editor (use `@skill:spline-3d-building-scenes`).
- Configuring lighting and PBR material layers (use `@skill:spline-3d-materials-and-look`).
- Building HTML overlays positioned over 3D coordinates (use `@skill:spline-3d-html-content`).

---

## Next.js App Router Integration Architecture

### Rule 1: Mandatory Dynamic Client Boundary (`ssr: false`)
WebGL and the Spline runtime require browser-only primitives (`window`, `HTMLCanvasElement`, WebGL context). Direct imports in Server Components will trigger immediate hydration failures. Always encapsulate Spline behind a dynamic import:

```tsx
// components/spline/TrivexSplineHero.tsx
"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";

// Dynamic import with SSR disabled
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <SplineLoadingSkeleton />,
});

export function TrivexSplineHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full aspect-square max-w-[600px] mx-auto overflow-hidden">
      {!isLoaded && <SplineLoadingSkeleton />}
      <div className={`w-full h-full transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <Spline
          scene="https://prod.spline.design/your-scene-id/scene.splinecode"
          onLoad={(splineApp) => {
            setIsLoaded(true);
            // SplineApp instance available for interaction
          }}
        />
      </div>
    </div>
  );
}

function SplineLoadingSkeleton() {
  return (
    <div 
      className="absolute inset-0 flex items-center justify-center bg-slate-100/50 dark:bg-[#0F141C]/50 rounded-2xl animate-pulse"
      aria-hidden="true"
    >
      <div className="w-12 h-12 rounded-full border-2 border-cyan-500/30 border-t-[#00D2FF] animate-spin" />
    </div>
  );
}
```

---

## Bidirectional React-to-Spline Communication

The `splineApp` instance returned by `onLoad` exposes powerful APIs for reading and manipulating the 3D scene in real time.

### 1. Driving Spline Variables from React State (e.g., Theme Switch)
Spline scenes can declare custom variables (Number, Boolean, Color, String). Synchronize them seamlessly when React state updates:

```tsx
import { Application } from "@splinetool/runtime";
import { useEffect, useRef } from "react";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeAwareSplineScene({ sceneUrl }: { sceneUrl: string }) {
  const splineRef = useRef<Application | null>(null);
  const { theme } = useTheme();

  // Handle scene initialization
  const handleLoad = (splineApp: Application) => {
    splineRef.current = splineApp;
    // Set initial theme variable
    splineApp.setVariable("isDark", theme === "dark");
  };

  // Sync with theme changes
  useEffect(() => {
    if (!splineRef.current) return;
    splineRef.current.setVariable("isDark", theme === "dark");
  }, [theme]);

  return <Spline scene={sceneUrl} onLoad={handleLoad} />;
}
```

### 2. Finding Objects and Triggering Named Events
Target specific 3D objects by name or ID to animate or transform them programmatically:

```ts
function triggerArtifactBurst(splineApp: Application) {
  // Find object by name defined in Spline Editor
  const targetObject = splineApp.findObjectByName("CoreEmblem");
  
  if (targetObject) {
    // Emit named event defined in the Spline state machine
    splineApp.emitEvent("mouseHover", "CoreEmblem");
    
    // Direct coordinate transform if required
    targetObject.rotation.y += Math.PI / 4;
  }
}
```

### 3. Listening to Spline 3D Interactions in React
Wire 3D clicks directly to Next.js route navigation or modal dialogs:

```tsx
<Spline
  scene="/models/trivex-services.splinecode"
  onSplineMouseDown={(e) => {
    // Inspect the clicked 3D object name
    const clickedName = e.target.name;
    
    if (clickedName === "Card_Engineering") {
      router.push("/services/web-development");
    } else if (clickedName === "Card_Marketing") {
      router.push("/services/digital-marketing");
    }
  }}
/>
```

---

## Memory Management & Proper Canvas Disposal

In single-page applications, navigating away from a route without tearing down the WebGL canvas can lock 50MB-150MB of GPU memory per view.

When using pure `@splinetool/runtime`, always call `dispose()` in the cleanup hook:

```tsx
"use client";

import React, { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";

export function PureRuntimeSplineCanvas({ sceneUrl }: { sceneUrl: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const splineApp = new Application(canvas);
    let isMounted = true;

    splineApp.load(sceneUrl).catch((err) => {
      if (isMounted) console.error("Failed to load Spline scene:", err);
    });

    return () => {
      isMounted = false;
      // 1. Dispose Spline application
      splineApp.dispose();
      // 2. Clear canvas context references
      canvas.width = 1;
      canvas.height = 1;
    };
  }, [sceneUrl]);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}
```

---

## Responsive Scaling & Touch Scroll Safety

Spline embeds frequently capture pointer events, which can trap users on mobile when trying to scroll down the page.

### Touch Scroll Protection
Apply `touch-action: pan-y` and selectively manage pointer events:

```tsx
<div 
  className="relative w-full aspect-[4/3] sm:aspect-video overflow-hidden"
  style={{ touchAction: "pan-y" }} // Allows vertical mobile scrolling
>
  <Spline scene={sceneUrl} />
</div>
```

---

## Step-by-Step Professional Workflow

1. **Step 1: Export Validation**:
   - Verify the `.splinecode` file or public URL is accessible and loads without 404s.
2. **Step 2: Component Scaffolding**:
   - Create a dedicated client component under `components/spline/`.
   - Wrap in dynamic import with `ssr: false` and a skeleton loader.
3. **Step 3: State & Theme Binding**:
   - Wire `setVariable("isDark", isDark)` on theme changes.
   - Verify both Dark Mode and Light Mode backgrounds transition cleanly.
4. **Step 4: Interaction Wiring**:
   - Connect `onSplineMouseDown` to React navigation or state.
   - Ensure pointer events do not trap mobile scrolling.
5. **Step 5: Teardown & Route Transition Test**:
   - Test navigating away from the page and back 5 times while observing GPU memory in Chrome Task Manager.

---

## Performance Requirements

1. **Hydration**: Zero hydration mismatches (`Text content does not match server-rendered HTML`).
2. **First Input Delay**: Canvas initialization must not block the main JavaScript thread for more than 50ms.
3. **Responsive Scaling**: Scene must dynamically resize on window resize events with zero layout jump.
4. **Memory Teardown**: Upon unmounting, all WebGL contexts and event listeners must be disposed.

---

## Common Mistakes to Avoid

- **Mistake 1: Server-Side Rendering Attempt**: Directly importing `@splinetool/react-spline` in a Next.js Server Component without `"use client"` and `dynamic(..., { ssr: false })`.
- **Mistake 2: Missing Cleanup on Route Switch**: Leaving active event listeners or Spline render loops running when navigating to another page.
- **Mistake 3: Touch Trapping on Mobile**: Allowing Spline's internal orbit controls to intercept vertical scroll gestures on smartphones.
- **Mistake 4: Missing Fallback Skeletons**: Leaving a blank, shifting void on the page while the 2MB `.splinecode` asset downloads over slow connections.

---

## Validation Checklist

- [ ] Component is isolated behind dynamic client import with `ssr: false`.
- [ ] Skeleton placeholder prevents Cumulative Layout Shift (CLS).
- [ ] Theme changes update Spline scene variables without full component remounts.
- [ ] Mobile touch scrolling is unimpeded (`touch-action: pan-y`).
- [ ] Unmount cleanup routine calls `splineApp.dispose()`.
- [ ] Browser console reports 0 WebGL warnings or uncaught runtime rejections.

---

## Acceptance Criteria

The integration is approved **only** if:
1. The 3D scene renders cleanly within 1.5 seconds on a standard 4G connection.
2. The scene updates reliably with TRIVEX theme switches (Dark / Light).
3. Memory clears completely upon navigating to another route.
