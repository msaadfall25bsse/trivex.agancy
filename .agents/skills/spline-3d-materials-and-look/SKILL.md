---
name: spline-3d-materials-and-look
description: >-
  Guides the authoring of physical PBR materials, frosted glass, brushed metals, lighting rigs, shadows, and dual-theme visual styling inside Spline 3D. Covers material layer stacking, glass refraction, Fresnel edge glows, studio lighting calibration, and TRIVEX brand token alignment.
---

# Spline 3D Materials, Lighting & Visual Identity for TRIVEX

## Purpose & Scope

The **spline-3d-materials-and-look** skill establishes the material design, shader composition, and studio lighting standards for Spline 3D scenes. It defines how to combine Spline's layered material system to create tactile frosted glass, brushed titanium, deep obsidian composites, and glowing data vectors.

This skill ensures that 3D visuals achieve a premium international tech aesthetic (Apple, Linear, Stripe) while maintaining strict performance efficiency and seamless compatibility with TRIVEX **Dark Theme** (`#080B10`) and **Light Theme** (`#f8f9ff`).

---

## When to Use This Skill

Activate this skill when:
- Designing or editing material layers on 3D meshes inside Spline Editor.
- Creating optical glass, frosted acrylic, smoked crystal, or transparent lens shaders.
- Formulating brushed metal, chrome, or anodized titanium materials.
- Setting up and tuning studio lighting rigs (Directional, Point, Ambient, Spotlights) and contact shadows.
- Calibrating material colors to match TRIVEX brand tokens (`#00D2FF` Electric Cyan, `#0088FF` Royal Blue).
- Setting up Dark Mode and Light Mode material states and variables in Spline.

Do **not** use this skill for:
- Geometry modeling and Boolean operations (use `@skill:spline-3d-building-scenes`).
- Setting up animation states and transitions (use `@skill:spline-3d-animation`).

---

## Mandatory Pre-Flight Authoring Check

Before configuring materials in Spline:
1. **Material Layer Budget**: Each material layer incurs a GPU shader computation pass. Limit material layers to **3 to 4 layers maximum** per mesh.
2. **Review Lighting Count**: Maximum **3 active light sources** in any real-time scene (1 Key Light + 1 Fill Light + 1 Rim Accent). Do not scatter 10 un-attenuated point lights.
3. **Inspect Active Theme**: Determine whether the primary scene view is Dark Mode or Light Mode, and establish theme variable mappings.

---

## The Spline Layered Material Architecture

Unlike traditional 3D software that relies on complex node graphs, Spline stacks material layers from bottom to top, blending them via blend modes (Normal, Multiply, Overlay, Screen):

```
┌────────────────────────────────────────────────────────────────────────┐
│                      Spline Material Layer Stack                       │
├────────────────────────────────────────────────────────────────────────┤
│ Layer 4 (Top):    Fresnel (Edge Rim Glow, Screen mode, Opacity: 60%)   │
│                                │                                       │
│ Layer 3:          Glass / Refraction (Blur: 8, IOR: 1.45, Opacity: 90%)│
│                                │                                       │
│ Layer 2:          Lighting (PBR Roughness: 25%, Metalness: 80%)        │
│                                │                                       │
│ Layer 1 (Bottom): Color / Gradient (Base Diffuse Tone, Normal mode)    │
└────────────────────────────────────────────────────────────────────────┘
```

---

## Material Recipes for TRIVEX

### 1. High-End Frosted Glass (Smoked Crystal / Acrylic)
Used for floating cards, lenses, telemetry bezels, and emblem shrouds.

| Layer Index | Layer Type | Settings / Parameters |
| :--- | :--- | :--- |
| **Layer 1 (Bottom)** | `Color` | Dark Mode: `#0F141C` (Opacity: 40%)<br>Light Mode: `#ffffff` (Opacity: 50%) |
| **Layer 2** | `Lighting` | Roughness: `15%`, Metalness: `5%` |
| **Layer 3** | `Glass` | Blur: `12`, Refraction Index (IOR): `1.48`, Dispersion: `0.05`, Thickness: `25` |
| **Layer 4 (Top)** | `Fresnel` | Color: Dark (`#00D2FF`) / Light (`#0088FF`), Bias: `0.15`, Intensity: `1.8`, Blend: `Screen` |

### 2. Anodized Obsidian & Brushed Titanium Metal
Used for mechanical cores, structural frames, and enterprise hardware nodes.

| Layer Index | Layer Type | Settings / Parameters |
| :--- | :--- | :--- |
| **Layer 1 (Bottom)** | `Gradient` | Radial gradient from `#1E2633` to `#0B0E14` |
| **Layer 2** | `Lighting` | Roughness: `32%`, Metalness: `92%` |
| **Layer 3** | `Noise` | Scale: `150`, Bump strength: `2%` (creates subtle brushed texture) |
| **Layer 4 (Top)** | `Fresnel` | Color: `#ffffff`, Intensity: `0.8`, Opacity: `30%`, Blend: `Overlay` |

### 3. Cybernetic Glowing Data Lines (Emissive Vector)
Used for active status indicators, energy rings, and data connection vectors.

| Layer Index | Layer Type | Settings / Parameters |
| :--- | :--- | :--- |
| **Layer 1 (Bottom)** | `Color` | `#00D2FF` (Electric Cyan) in Dark Mode; `#0074db` in Light Mode |
| **Layer 2** | `Fresnel` | Color: `#ffffff`, Intensity: `2.5`, Bias: `0.4` |
| **Layer 3 (Top)** | `Bloom` (Global) | Threshold: `0.8`, Intensity: `1.5`, Radius: `0.6` |

---

## Studio Lighting Calibration

Lighting defines the form. Without deliberate lighting, even the best materials appear flat.

```
                  [Key Light: Directional, #FFFFFF]
                                \
                                 \
      [Fill Light: Point, Soft] → [3D Subject] ← [Rim Light: Directional, #00D2FF]
                                  /
                                 /
                   [Contact Shadow Plane: Blur 25]
```

### Lighting Parameters
1. **Key Light (Directional)**:
   - Position: `(x: 200, y: 350, z: 250)`
   - Color: Pure White (`#FFFFFF`), Intensity: `1.8`
   - Cast Shadows: `ON`
   - Shadow Map Size: `1024` (desktop), Softness/Blur: `25`
2. **Fill Light (Directional or Point)**:
   - Position: `(x: -250, y: -100, z: -150)`
   - Color: Cool Slate (`#94A3B8`), Intensity: `0.6`
   - Cast Shadows: `OFF` (crucial for performance)
3. **Rim Light (Brand Accent)**:
   - Position: `(x: 0, y: -200, z: -300)`
   - Color: TRIVEX Cyan (`#00D2FF`) in Dark Mode; Royal Blue (`#0088FF`) in Light Mode
   - Intensity: `2.2`
   - Cast Shadows: `OFF`

---

## Shadow Tuning & Optimization

- **Contact Shadows**: Place an invisible ground plane directly under floating objects with a soft shadow catcher material or use Spline's built-in ground plane shadow.
- **Shadow Resolution**: Never set shadow map resolution to `2048` or `4096` for real-time web delivery. Use `1024` for hero scenes, or `512` for micro-scenes.
- **Shadow Caster Filtering**: Disable `Cast Shadow` on all small decorative elements (bolts, particles, secondary rings). Only the primary silhouette should cast shadows.

---

## Dual-Theme Adaptation via Spline Variables

To allow a single Spline asset to adapt between TRIVEX Dark and Light themes:
1. In the Left Panel, create a Variable: `isDark` (Boolean, default: `true`).
2. On the primary background and material color layers, create a **Variable Binding**:
   - When `isDark == true`: Background = `#080B10`, Accent = `#00D2FF`, Base = `#0F141C`.
   - When `isDark == false`: Background = `#f8f9ff`, Accent = `#0088FF`, Base = `#ffffff`.
3. In Next.js, update this variable via `splineApp.setVariable("isDark", theme === "dark")`.

---

## Step-by-Step Professional Workflow

1. **Step 1: Set Base Ambient Tone**:
   - Establish background clear color matching TRIVEX theme.
2. **Step 2: Studio Lighting Setup**:
   - Add Key Light with soft shadows, Fill Light, and Brand Rim Light.
3. **Step 3: Primary Material Stacking**:
   - Build base diffuse color -> add PBR lighting layer -> add glass refraction or noise -> top with subtle Fresnel rim.
4. **Step 4: Specular & Highlight Inspection**:
   - Rotate camera 360° around the model to ensure specular glints catch nicely on beveled edges.
5. **Step 5: Theme Variable Pairing**:
   - Connect color swatches to the `isDark` variable and test toggling inside Spline Editor preview.

---

## Performance Requirements

1. **Layer Limits**: Maximum 4 material layers per mesh (avoid 7-layer stacks that cause mobile GPU shader compile stalls).
2. **Shadow Caster Limit**: Maximum **1 shadow-casting directional light** per scene.
3. **Glass Layer Prudence**: Use the `Glass` material layer only on key hero meshes (maximum 2-3 glass meshes per scene).

---

## Common Mistakes to Avoid

- **Mistake 1: Missing Environment/Fresnel**: Creating pure dark materials without Fresnel or environment reflections, turning the 3D model into an unreadable black silhouette in dark mode.
- **Mistake 2: Over-Blown Bloom**: Setting global Bloom intensity above `2.0`, creating glowing neon blobs that bleed over text and obscure geometric contours.
- **Mistake 3: Hard Blocky Shadows**: Leaving shadow bias at default `0`, creating distracting jagged shadow artifacts (shadow acne) across curved surfaces.

---

## Validation Checklist

- [ ] Material layer stack is under 4 layers per object.
- [ ] Only 1 directional light casts shadows.
- [ ] High-end frosted glass uses calibrated blur (8-15) and realistic IOR (1.45-1.52).
- [ ] Accent lighting strictly uses TRIVEX tokens (`#00D2FF` / `#0088FF`).
- [ ] Material properties adapt cleanly when toggling the `isDark` variable.
- [ ] Text overlays maintain a minimum 4.5:1 contrast against 3D materials.

---

## Acceptance Criteria

Material and lighting design is approved **only** if:
1. Materials exhibit tactile realism (glass refracts naturally, metal reflects cleanly).
2. The scene harmonizes with both TRIVEX Dark Mode and Light Mode.
3. Shaders compile instantly without stuttering on mobile GPU hardware.
