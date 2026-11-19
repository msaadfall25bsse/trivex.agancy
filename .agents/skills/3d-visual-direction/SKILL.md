---
name: 3d-visual-direction
description: >-
  Establishes cinematic visual direction, lighting, realistic physical materials (PBR, glass, metal, frosted translucent surfaces), and dual-theme (Dark/Light) harmony for 3D elements in TRIVEX. Use when configuring Three.js materials, tuning environment maps, designing lighting rigs, or ensuring visual cohesion with TRIVEX design tokens.
---

# 3D Visual Direction for TRIVEX

## Purpose & Scope

The **3D Visual Direction** skill establishes the aesthetic and material standards for all 3D assets within the TRIVEX design system. Inspired by high-end tech design languages (Apple, Linear, Stripe, and teenage engineering), this skill details how to achieve cinematic lighting, realistic physically based rendering (PBR), frosted glass, precision brushed metals, and seamless dual-theme adaptability.

Visual direction must never be generic. Every 3D shader, material, and reflection must reflect TRIVEX's brand attributes: **precision engineering, enterprise speed, and architectural minimalism**.

---

## When to Use This Skill

Activate this skill when:
- Designing or tweaking materials (`MeshPhysicalMaterial`, `MeshStandardMaterial`, custom shaders).
- Configuring scene lighting rigs, environment HDRI maps, contact shadows, or ambient occlusion.
- Creating glass, acrylic, metallic, or glowing data-stream shaders.
- Ensuring a 3D element seamlessly transitions between TRIVEX **Dark Theme** (`#080B10`) and **Light Theme** (`#f8f9ff`).
- Harmonizing 3D elements with TRIVEX typography (`Space Grotesk`, `Hanken Grotesk`, `JetBrains Mono`).

Do **not** use this skill for:
- Route architecture and canvas placement (use `@skill:3d-website-creator`).
- Camera animation timelines and scroll triggers (use `@skill:3d-motion-interaction`).

---

## Brand Visual Identity & Color Tokens

All 3D visual parameters must align with the TRIVEX visual system:

| Element | Dark Mode Token | Light Mode Token | 3D Interpretation |
| :--- | :--- | :--- | :--- |
| **Primary Background** | `#080B10` (Deep Void) | `#f8f9ff` (Soft Slate) | Clear color of WebGL renderer |
| **Accent Glow** | `#00D2FF` (Electric Cyan) | `#0088FF` (Cobalt Royal) | Emissive edges, point light accents, rim lights |
| **Surface Card** | `#0F141C` (Obsidian) | `#ffffff` (Pure White) | Base diffuse color for structural elements |
| **Borders & Seams** | `#1E2633` (Slate Border) | `#e2e8f0` (Light Border) | Subtle Fresnel reflection rings, chamfer highlights |
| **Typography Family** | Space Grotesk / Mono | Space Grotesk / Mono | Labels, telemetry readouts, UI badges |

---

## Material System & Physical Shaders

### 1. High-End Frosted Glass (Acrylic / Smoked Crystal)
Used for floating cards, lenses, and telemetry frames.

```ts
import * as THREE from "three";

export function createTrivexGlassMaterial(isDark: boolean) {
  return new THREE.MeshPhysicalMaterial({
    color: isDark ? new THREE.Color("#0F141C") : new THREE.Color("#ffffff"),
    metalness: 0.05,
    roughness: isDark ? 0.18 : 0.12,
    transmission: 0.92, // High optical transmission
    thickness: 1.2,     // Refraction volume
    ior: 1.52,          // Crown glass index of refraction
    reflectivity: 0.6,
    clearcoat: 1.0,
    clearcoatRoughness: 0.08,
    attenuationColor: isDark 
      ? new THREE.Color("#00D2FF") 
      : new THREE.Color("#0088FF"),
    attenuationDistance: 1.5,
    transparent: true,
    opacity: 0.95,
  });
}
```

### 2. Anodized Brushed Titanium & Obsidian Metal
Used for core structural geometry, mechanical frames, and engineering nodes.

```ts
export function createTrivexMetalMaterial(isDark: boolean) {
  return new THREE.MeshStandardMaterial({
    color: isDark ? new THREE.Color("#141B26") : new THREE.Color("#e2e8f0"),
    metalness: 0.92,
    roughness: isDark ? 0.28 : 0.35,
    envMapIntensity: isDark ? 1.4 : 0.8,
  });
}
```

### 3. Cybernetic Glowing Data Lines (Emissive Fresnel)
Used for edge accents, active status rings, and connection vectors.

```ts
export function createTrivexEmissiveEdgeMaterial(isDark: boolean) {
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color(isDark ? "#00D2FF" : "#0088FF"),
    emissive: new THREE.Color(isDark ? "#00D2FF" : "#0074db"),
    emissiveIntensity: isDark ? 1.6 : 0.9,
    roughness: 0.2,
    metalness: 0.5,
    toneMapped: false, // Ensures glowing vibrance in post-processing
  });
}
```

---

## Lighting & Shadow Architecture

A flat 3D scene destroys enterprise credibility. TRIVEX scenes must use a **3-Point Studio Rig + Rim Accent + Soft Contact Shadow**:

```
                  [Key Light: Soft Warm/Neutral]
                              \
                               \
      [Fill Light: Cool Diffuse] → [3D Subject] ← [Rim Light: #00D2FF / #0088FF]
                                  /
                                 /
                     [Contact Shadow Plane: Soft Grounding]
```

### Studio Rig Configuration

```ts
export function setupTrivexLighting(scene: THREE.Scene, isDark: boolean) {
  // 1. Ambient baseline
  const ambient = new THREE.AmbientLight(
    isDark ? "#080B10" : "#ffffff", 
    isDark ? 0.6 : 1.2
  );
  scene.add(ambient);

  // 2. Key Light (Top-left directional with soft shadow)
  const keyLight = new THREE.DirectionalLight("#ffffff", isDark ? 2.2 : 2.8);
  keyLight.position.set(5, 8, 6);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width = 1024;
  keyLight.shadow.mapSize.height = 1024;
  keyLight.shadow.camera.near = 0.5;
  keyLight.shadow.camera.far = 25;
  keyLight.shadow.bias = -0.0001;
  scene.add(keyLight);

  // 3. Fill Light (Opposite side, cool tone)
  const fillLight = new THREE.DirectionalLight(
    isDark ? "#1E2633" : "#cbd5e1", 
    isDark ? 0.8 : 0.6
  );
  fillLight.position.set(-6, -2, -4);
  scene.add(fillLight);

  // 4. Accent Rim Light (Brand identity pop)
  const rimLight = new THREE.DirectionalLight(
    isDark ? "#00D2FF" : "#0088FF", 
    isDark ? 3.0 : 1.8
  );
  rimLight.position.set(0, -5, -6);
  scene.add(rimLight);
}
```

### Soft Contact Shadows
Never use hard, pixelated default Three.js shadows on plain geometry. Instead, use:
- **Contact Shadow Plane**: A blurred grayscale shadow texture or Drei `<ContactShadows />` positioned directly underneath floating models with high blur (`blur={2.5}`) and low opacity (`opacity={isDark ? 0.6 : 0.3}`).

---

## Dual-Theme Adaptation Workflow

When the visitor toggles between Dark Mode and Light Mode via the header toggle:
1. **Background**: Clear color dynamically switches between `#080B10` and `#f8f9ff`.
2. **Environment Exposure**: Dark mode requires lower ambient light and punchier emissive glows; Light mode requires higher diffuse fill light and subtle metallic highlights.
3. **Accent Shaders**: Swap emissive color from `#00D2FF` (neon cyan) to `#0088FF` (royal cobalt).
4. **Transition**: Interpolate colors over 250ms via GSAP or lerp in the render loop to prevent harsh visual snapping.

```ts
// Smooth theme transition in render loop
function updateThemeColors(material: THREE.MeshStandardMaterial, targetColor: THREE.Color, delta: number) {
  material.color.lerp(targetColor, delta * 4);
}
```

---

## Typography & Overlay Harmony

When 3D scenes are layered behind or alongside text:
- **Preserve Hierarchy**: Headings (`font-brand`, `Space Grotesk`) and labels (`JetBrains Mono`) must have maximum contrast against the 3D scene.
- **Occlusion Gradients**: Always place a subtle CSS linear or radial gradient between the 3D canvas and the text content:
  ```css
  /* Dark mode text readability scrim */
  background: linear-gradient(
    to right, 
    rgba(8, 11, 16, 0.95) 0%, 
    rgba(8, 11, 16, 0.7) 40%, 
    transparent 80%
  );
  ```
- **Depth of Field**: Ensure the 3D object focal point doesn't physically clip into text bounding boxes.

---

## Step-by-Step Professional Workflow

1. **Step 1: Moodboard & Visual Specification**:
   - Establish whether the subject is organic, hard-surface mechanical, or abstract data architecture.
   - Select the 2 dominant materials (e.g., Frosted Glass + Anodized Titanium).
2. **Step 2: Geometry & Chamfer Inspection**:
   - Verify all 3D geometries have beveled/chamfered edges. Sharp 90-degree computer edges fail to catch specular highlights and look cheap.
3. **Step 3: Studio Lighting Setup**:
   - Add Key, Fill, and Brand Rim lights.
   - Position an environment reflection map (neutral studio HDRI with low roughness) to provide realistic specular reflections.
4. **Step 4: Material Tuning**:
   - Calibrate roughness and metalness values. Test under both extreme bright and dark camera angles.
5. **Step 5: Theme Harmonization**:
   - Bind theme state from `@/components/ThemeProvider`. Verify both dark mode and light mode appear balanced.
6. **Step 6: Typography Contrast Check**:
   - Inspect text overlays with WCAG contrast analyzer (minimum 4.5:1 ratio against the 3D scene).

---

## Common Mistakes to Avoid

- **Mistake 1: Raw Unshaded Meshes**: Using `MeshBasicMaterial` for primary objects, making them look like 1995 video games. *Fix*: Always use `MeshStandardMaterial` or `MeshPhysicalMaterial` with PBR properties.
- **Mistake 2: Missing Specular Highlights**: Pure black diffuse textures without roughness or environment reflections make dark mode objects look flat. *Fix*: Give dark objects subtle roughness (0.2 - 0.4) and a neutral studio envMap so their contours gleam.
- **Mistake 3: Harsh Colored Lights**: Flooding the entire scene with cyan lights, washing out all detail. *Fix*: Use pure white for key and fill lights; restrict cyan `#00D2FF` strictly to rim accents and emissive vectors.
- **Mistake 4: Disconnecting 3D from Page Typography**: Floating 3D objects with font styles that mismatch Space Grotesk. *Fix*: Any text in 3D canvas must match Space Grotesk (Troika text or HTML overlay).

---

## Validation Checklist

- [ ] All 3D materials use physically based rendering (PBR).
- [ ] Geometry edges are beveled/rounded to catch natural specular highlights.
- [ ] 3-point lighting setup is present with a dedicated TRIVEX brand rim light.
- [ ] Contact shadows ground the object naturally without dark harsh edges.
- [ ] Switching between Dark Theme and Light Theme smoothly updates colors and lighting.
- [ ] HTML text overlays remain 100% legible with minimum 4.5:1 contrast against the 3D background.
- [ ] Space Grotesk, Hanken Grotesk, and JetBrains Mono typographic hierarchy is strictly preserved.

---

## Acceptance Criteria

Visual direction is accepted **only** if:
1. The 3D scene looks visually consistent with top-tier international digital products (Apple, Linear, Stripe).
2. The scene feels organically integrated with TRIVEX's dual-theme color palette.
3. Text readability is completely unimpaired across all screen resolutions.
