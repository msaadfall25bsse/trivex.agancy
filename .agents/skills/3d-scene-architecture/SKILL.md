---
name: 3d-scene-architecture
description: >-
  Guides the engineering architecture of Three.js and React Three Fiber (R3F) scenes. Covers memory leak prevention, resource disposal, GLTF/GLB loading pipelines, geometry/material sharing, Shared Canvas / Tunnel patterns, and graceful non-WebGL fallbacks.
---

# 3D Scene Architecture for TRIVEX

## Purpose & Scope

The **3D Scene Architecture** skill provides the technical engineering blueprint for building robust, leak-free, high-performance WebGL applications in Next.js 16 and React 19. It defines standards for asset loading, GPU memory management, scene graph composition, shared multi-scene canvas rendering, and zero-downtime fallback rendering when WebGL is unavailable or fails.

---

## When to Use This Skill

Activate this skill when:
- Creating or structuring new Three.js / React Three Fiber components.
- Designing the asset pipeline for 3D models (GLTF/GLB compression, Draco/Meshopt decoding).
- Implementing reusable geometries, instance meshes, and shared material caches.
- Implementing the Shared Canvas architecture (one persistent canvas rendering multiple route views).
- Diagnosing and eliminating WebGL memory leaks, uncollected textures, or runaway animation frames.
- Implementing graceful fallback mechanisms for devices without WebGL support.

Do **not** use this skill for:
- Material styling, colors, and lighting direction (use `@skill:3d-visual-direction`).
- Scroll-bound animations and GSAP choreography (use `@skill:3d-motion-interaction`).

---

## Technical Stack & Architecture Patterns

TRIVEX supports two execution models depending on the complexity of the section:
1. **Lightweight Vanilla Three.js Module**: Ideal for self-contained, high-performance background shaders, particle meshes, and minimal interactive cards.
2. **React Three Fiber (R3F) + Drei Ecosystem**: Ideal for multi-element scenes, complex GLTF rigs, camera controls, and dynamic scene transitions.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        TRIVEX WebGL Pipeline                           │
├────────────────────────────────────────────────────────────────────────┤
│  Client Component Boundary ('use client', dynamic import with ssr:false)│
│                                │                                       │
│                    [WebGL Capability Check]                            │
│                    ├── Supported: Mount Canvas Context                 │
│                    └── Unsupported: Render Static WebP / SVG Fallback  │
│                                │                                       │
│                    [Resource Cache & Loader]                           │
│                    ├── DRACO / KTX2 Compressed Loader                  │
│                    └── Geometry & Material Singleton Pool              │
│                                │                                       │
│                    [Active Scene Lifecycle]                            │
│                    ├── IntersectionObserver (Pause when offscreen)     │
│                    ├── Clamped DPR Render Loop (60 FPS Target)         │
│                    └── Cleanup Routine (Unmount -> Deep GPU Disposal)  │
└────────────────────────────────────────────────────────────────────────┘
```

---

## Shared Canvas Architecture (Tunnel / View Pattern)

In multi-page Next.js applications, creating a new `<canvas>` on every route causes GPU context churn, browser thread stutter, and memory fragmentation. The **Shared Canvas Architecture** mounts a single fixed WebGL canvas in the background and projects 3D views into DOM placeholders:

```tsx
// components/3d/CanvasContainer.tsx
"use client";

import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

export function SharedCanvasProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Background persistent canvas */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <Canvas
          dpr={[1, 1.75]}
          gl={{
            powerPreference: "high-performance",
            antialias: true,
            alpha: true,
            stencil: false,
            depth: true,
          }}
          camera={{ position: [0, 0, 5], fov: 45 }}
          onCreated={({ gl }) => {
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.toneMappingExposure = 1.0;
          }}
        >
          {/* Global lighting and persistent camera rigs live here */}
        </Canvas>
      </div>
      {/* DOM content layers above canvas */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </>
  );
}
```

---

## GLTF/GLB Asset Optimization Pipeline

Raw 3D exports from Blender or Maya can easily exceed 20MB. TRIVEX enforces a strict 3-step asset compression pipeline:

```
[Raw 3D Model: .blend / .obj / .fbx]
          │
          ▼  (Export to GLTF 2.0 with PBR Textures)
[Exported .gltf / .bin / textures]
          │
          ▼  (Run CLI gltfpack or gltf-transform)
  - Compress geometry: Draco or Meshopt (-c)
  - Compress textures: Basis Universal / KTX2 / WebP
  - Deduplicate material slots
          │
          ▼
[Production .glb Asset: < 1.2 MB Target Size]
```

### Loading Pipeline with Fallback Skeleton

```ts
import { useGLTF } from "@react-three/drei";

export function TrivexModel({ url }: { url: string }) {
  // Preloads and caches the decoded model
  const { scene } = useGLTF(url, "/draco/");
  
  return <primitive object={scene} />;
}

// Preload critical assets in the browser
useGLTF.preload("/models/trivex-core.glb", "/draco/");
```

---

## Memory Leak Prevention & Complete GPU Cleanup

WebGL memory is managed on the GPU, outside JavaScript's garbage collector. **If you unmount a Three.js component without disposing of resources, the GPU memory stays allocated until the browser tab is closed.**

### Strict Cleanup Routine

Every standalone Three.js client component must implement a comprehensive recursive disposal function on unmount:

```ts
export function disposeScene(scene: THREE.Scene, renderer: THREE.WebGLRenderer) {
  // 1. Traverse and dispose every mesh, geometry, and material
  scene.traverse((object) => {
    if (!(object instanceof THREE.Mesh)) return;

    // Dispose geometry
    if (object.geometry) {
      object.geometry.dispose();
    }

    // Dispose materials and their texture maps
    if (object.material) {
      if (Array.isArray(object.material)) {
        object.material.forEach((mat) => disposeMaterial(mat));
      } else {
        disposeMaterial(object.material);
      }
    }
  });

  // 2. Clear scene children
  while (scene.children.length > 0) {
    scene.remove(scene.children[0]);
  }

  // 3. Dispose renderer and force context loss
  renderer.dispose();
  renderer.forceContextLoss();
  if (renderer.domElement && renderer.domElement.parentNode) {
    renderer.domElement.parentNode.removeChild(renderer.domElement);
  }
}

function disposeMaterial(material: THREE.Material) {
  material.dispose();

  // Inspect standard texture slots
  const pbrMat = material as any;
  const textureSlots = [
    "map", "normalMap", "roughnessMap", "metalnessMap", 
    "aoMap", "emissiveMap", "envMap", "clearcoatMap"
  ];

  textureSlots.forEach((slot) => {
    if (pbrMat[slot] && pbrMat[slot] instanceof THREE.Texture) {
      pbrMat[slot].dispose();
    }
  });
}
```

---

## Offscreen Culling via IntersectionObserver

Never let a 3D canvas render at 60 FPS while the user has scrolled past it. Use an `IntersectionObserver` to halt the render loop:

```ts
export function useVisibilityRenderController(
  containerRef: React.RefObject<HTMLElement | null>,
  onVisibilityChange: (isVisible: boolean) => void
) {
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        onVisibilityChange(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [containerRef, onVisibilityChange]);
}
```

---

## WebGL Detection & Graceful Fallback Architecture

Always verify WebGL support before attempting to create a canvas. If WebGL is disabled, unsupported, or crashes, seamlessly render the fallback without breaking the page layout:

```tsx
"use client";

import React, { useState, useEffect } from "react";

export function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
}

export function WebGLSafeContainer({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback: React.ReactNode;
}) {
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);

  useEffect(() => {
    setHasWebGL(isWebGLAvailable());
  }, []);

  if (hasWebGL === false) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
```

---

## Step-by-Step Professional Workflow

1. **Step 1: Determine Canvas Scope**:
   - Standalone micro-scene (hero/card) vs Shared global background canvas.
2. **Step 2: Model & Asset Preparation**:
   - Compress GLB models with Draco / Meshopt.
   - Verify textures are power-of-two (POT, e.g., 512x512, 1024x1024) to allow mipmap generation.
3. **Step 3: Component Isolation & WebGL Guard**:
   - Wrap the component in `WebGLSafeContainer` with high-resolution WebP fallback.
   - Use dynamic import with `ssr: false`.
4. **Step 4: Lifecycle & Visibility Connection**:
   - Attach `IntersectionObserver` to halt rendering when offscreen.
   - Clamp DPR between `1.0` and `1.75`.
5. **Step 5: Disposal & Cleanup Hook**:
   - Ensure `useEffect` cleanup return runs `disposeScene()`.
   - Test by navigating back and forth across routes 10 times while observing browser memory in DevTools Performance/Memory tab.

---

## Performance Requirements

1. **Memory Budget**: Peak GPU memory footprint must remain below **80 MB** for all 3D assets on any single page.
2. **Heap Growth**: Zero memory leaks across route navigation. After garbage collection, heap memory must return to baseline (+/- 5%).
3. **Frame Timing**: Render function must complete in under **8ms** per frame (leaving 8ms budget for browser compositing and UI events to guarantee 60fps).
4. **Draw Call Consolidation**: Use `InstancedMesh` whenever rendering more than 10 repeated geometric entities (e.g., nodes, particles, floating cubes).

---

## Common Mistakes to Avoid

- **Mistake 1: Memory Leaks via Missing Texture Disposal**: Disposing geometry but forgetting textures keeps MBs of GPU VRAM locked in memory.
- **Mistake 2: Missing requestAnimationFrame Cancellation**: Forgetting `cancelAnimationFrame(reqId)` causes background loops to spin CPU fans endlessly.
- **Mistake 3: Unclamped High-DPI Rendering**: Setting `renderer.setPixelRatio(window.devicePixelRatio)` on modern smartphones with 3.5x DPR renders 12x the pixel density, causing immediate overheating and lag.
- **Mistake 4: Synchronous Asset Loading in Component Render**: Triggering file fetches during React render passes instead of inside `useEffect` or suspended loaders.

---

## Validation Checklist

- [ ] WebGL availability check is executed before mounting canvas.
- [ ] Fallback image renders smoothly when WebGL is unavailable.
- [ ] GLB files are compressed under 1.2 MB using Draco/Meshopt.
- [ ] DPR is clamped to `Math.min(window.devicePixelRatio, 1.75)`.
- [ ] Render loop pauses when element is outside the viewport.
- [ ] `disposeScene()` executes cleanly on unmount with zero console warnings.
- [ ] Navigating between pages demonstrates 0 memory leaks in Chrome Task Manager.

---

## Acceptance Criteria

Architecture is accepted **only** if:
1. Zero unhandled WebGL errors or context loss crashes occur in browser console.
2. Memory consumption remains stable and cleans up completely after leaving the route.
3. Users on low-end or WebGL-disabled devices receive an indistinguishable, polished 2D fallback.
