---
name: spline-3d-scene-optimization
description: >-
  Audits, reduces, compresses, and benchmarks Spline 3D scenes for web deployment. Covers polygon decimation, hidden face culling, material layer consolidation, shadow map optimization, texture compression, export packaging, and visual-parity verification for TRIVEX.
---

# Spline 3D Scene Optimization & Visual Parity for TRIVEX

## Purpose & Scope

The **spline-3d-scene-optimization** skill is the final engineering gate before exporting and deploying any Spline 3D scene into the TRIVEX website.

It provides a systematic audit methodology to identify performance bottlenecks: decimating excess polygons, culling invisible geometry, collapsing heavy shader passes into optimized PBR layers, minimizing shadow render overhead, and verifying that the lightweight web asset maintains **100% visual parity** with the high-poly artistic master.

---

## When to Use This Skill

Activate this skill when:
- Auditing a newly completed Spline scene prior to public export.
- Reducing asset payload sizes (`.splinecode` files over 2.5 MB).
- Diagnosing low frame rates, thermal throttling, or mobile battery drain caused by 3D assets.
- Decimating complex Boolean geometry and cleaning up edge topology.
- Consolidating redundant materials and culling non-visible faces.
- Performing side-by-side visual parity verification between master design and web export.

Do **not** use this skill for:
- Initial geometry creation or modeling (use `@skill:spline-3d-building-scenes`).
- Initial animation state setup (use `@skill:spline-3d-animation`).

---

## The 4-Tier Optimization Framework

Every Spline scene destined for web deployment must be audited across four distinct dimensions:

```
┌────────────────────────────────────────────────────────────────────────┐
│                     Spline 4-Tier Audit Framework                      │
├─────────────────────┬───────────────────────────┬──────────────────────┤
│ Audit Dimension     │ Production Ceiling        │ Critical Failure Flag│
├─────────────────────┼───────────────────────────┼──────────────────────┤
│ 1. Geometry (Polys) │ < 25,000 Triangles        │ > 45,000 Triangles   │
├─────────────────────┼───────────────────────────┼──────────────────────┤
│ 2. Shaders (Layers) │ <= 4 Layers / Mesh        │ > 6 Layers / Mesh    │
├─────────────────────┼───────────────────────────┼──────────────────────┤
│ 3. Shadows & Lights │ 1 Shadow Caster, <= 3 Lts │ Multiple 2K Shadows  │
├─────────────────────┼───────────────────────────┼──────────────────────┤
│ 4. Asset File Size  │ < 1.8 MB uncompressed     │ > 3.5 MB uncompressed│
└─────────────────────┴───────────────────────────┴──────────────────────┘
```

---

## 1. Geometry Decimation & Mesh Hygiene

Dense geometric meshes consume excessive VRAM and slow down CPU-to-GPU draw call submission.

### Reduction Rules
1. **Remove Hidden Interior Faces**:
   - If an object is housed inside another opaque mesh or sits beneath a floor plane, delete its unseen polygons.
2. **Parametric Primitives Downsampling**:
   - Reduce Cylinder segments from `64` to `24`.
   - Reduce Sphere rings from `48` to `24-32`.
   - Inspect with Flat Shading turned on to confirm smooth silhouette contours.
3. **Boolean Decimation**:
   - Convert complex Boolean assemblies into editable meshes and run the **Decimate / Simplify** tool to reduce polygon density by 40% - 60% while preserving silhouette edges.

---

## 2. Material Layer Consolidation

Each material layer in Spline acts as an extra render pass. A model with 6 material layers (Color, Gradient, Noise, Depth, Glass, Fresnel) takes 6x longer to shade than a clean 2-layer material.

### Material Streamlining Techniques
- **Shared Material Library**: Never recreate identical materials across separate objects. Save materials to the **Asset Library** and assign instances. Reusing materials enables GPU batching and reduces shader switches.
- **Glass Culling**: Restrict `Glass` and `Refraction` layers strictly to hero focal objects. Background or small secondary objects should use a standard transparent `Color` layer with `Fresnel` rim instead of heavy true glass refraction.
- **Noise Bump Minimization**: High-frequency procedural noise maps force heavy fragment shader computations. If subtle roughness is needed, prefer a small baked 256x256 seamless normal map.

---

## 3. Lighting & Shadow Pass Culling

Shadow rendering is frequently the single largest contributor to frame drops on mobile devices:

```
[Normal Render Pass]   ──► 1 Draw Call per Mesh
[With Shadow Casting]  ──► 1 Draw Call for Shadow Map + 1 Draw Call for Camera View (2x)
[With 3 Shadow Lights] ──► 3 Shadow Passes + 1 Camera View (4x Draw Calls!)
```

### Shadow Hardening Rules
1. **Single Shadow Caster Rule**: Exactly **one** directional light in the entire scene may have `Cast Shadows: ON`.
2. **Shadow Map Resolution**:
   - Desktop standard: `1024x1024` with soft blur `25`.
   - Never use `2048x2048` or `4096x4096` in web assets.
3. **Selective Caster Assignment**: Select all small parts, wires, bolts, and particles; uncheck `Cast Shadows` and `Receive Shadows`.

---

## 4. Visual-Parity Verification Protocol

Optimization must never degrade the artistic integrity or brand authority of the scene.

### Side-by-Side Audit Workflow
1. Open the **Master High-Poly Scene** in Window A.
2. Open the **Optimized Web Scene** in Window B.
3. Compare across 4 inspection angles:
   - **Hero Frontal Angle (0°)**: Verify specular reflections on chamfered edges are intact.
   - **Extreme Side View (75°)**: Check for silhouette faceting (jagged curves on spheres or toruses).
   - **Dark Mode View**: Verify emissive rim lights (`#00D2FF`) glow with identical intensity.
   - **Light Mode View**: Verify diffuse shadows appear soft and realistic against `#f8f9ff`.
4. If silhouette faceting is detectable at standard viewport zoom, increase segments on that specific outer boundary curve only.

---

## Export Configuration for Next.js Web Delivery

When exporting from Spline Editor for production:

```text
Export Settings in Spline:
├── Format: Web Content (.splinecode)
├── Compress Geometry: ENABLED
├── Generate LODs: ENABLED (for complex models)
├── Optimize Textures: ENABLED (Maximum 1024px)
├── Background Color: Transparent (let Next.js CSS handle the background)
└── Code Output: URL or self-hosted .splinecode file
```

---

## Step-by-Step Professional Workflow

1. **Step 1: Baseline Performance Metric Recording**:
   - Open Spline Statistics panel. Note initial triangle count, light count, and layer count.
2. **Step 2: Geometry Pruning**:
   - Delete invisible faces; reduce primitive segments; simplify Boolean topology.
3. **Step 3: Material Layer Audit**:
   - Collapse redundant layers; instance materials across identical parts.
4. **Step 4: Shadow Culling**:
   - Restrict shadow casting to the single main light and primary subject.
5. **Step 5: Visual Parity Check**:
   - Conduct side-by-side inspection against the master design.
6. **Step 6: Export & Network Profile**:
   - Export `.splinecode`. Confirm file size is under **1.8 MB**.

---

## Performance Requirements

1. **Polygon Ceiling**: Maximum **25,000 triangles** total per scene.
2. **File Size**: Exported `.splinecode` must not exceed **2.0 MB** uncompressed.
3. **Draw Calls**: Total draw calls submitted to the WebGL context must remain under **30**.
4. **Frame Rate**: Minimum sustained **60 FPS** on desktop, **>= 45 FPS** on mobile.

---

## Common Mistakes to Avoid

- **Mistake 1: Premature Over-Decimation**: Crushing polygon count down to 1,000 triangles and ruining smooth circular silhouettes. Optimize strategically where eyes don't look.
- **Mistake 2: Leaving 4K Embedded Textures**: Importing a 4096x4096 PNG for a tiny background decal, swelling the `.splinecode` file from 800 KB to 12 MB.
- **Mistake 3: Forgetting to Enable Compression on Export**: Exporting uncompressed geometry, doubling network download times.

---

## Validation Checklist

- [ ] Total scene polygon count is below 25,000 triangles.
- [ ] Only 1 directional light casts shadows.
- [ ] Shadow map size is set to 1024 or 512.
- [ ] Material layers are limited to <= 4 per mesh.
- [ ] Redundant materials are consolidated into shared library instances.
- [ ] Side-by-side visual parity confirms zero perceptible loss in visual quality.
- [ ] Final `.splinecode` payload is under 2.0 MB.

---

## Acceptance Criteria

The optimized scene is accepted for web production **only** if:
1. It achieves 100% visual parity with the master design at standard viewport zoom.
2. The final file size is under 2.0 MB and loads in under 1.5 seconds on standard broadband.
3. Frame rates sustain 60 FPS without thermal throttling or memory growth.
