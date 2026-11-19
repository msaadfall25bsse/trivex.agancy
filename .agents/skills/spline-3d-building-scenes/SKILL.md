---
name: spline-3d-building-scenes
description: >-
  Guides the structural construction, procedural geometry, scene graph hierarchy, and camera setup inside the Spline 3D Editor. Covers primitive modeling, vector extrusion, Boolean operations, group parenting, scale normalization, and camera perspective configuration for TRIVEX assets.
---

# Spline 3D Scene Construction & Geometry for TRIVEX

## Purpose & Scope

The **spline-3d-building-scenes** skill establishes the architectural modeling, geometry structuring, and scene graph organization rules for authoring clean, production-ready 3D assets in Spline.

It enforces structural discipline: preventing bloated triangle counts, maintaining clean transformation matrices `(scale 1, 1, 1)`, organizing logical parent-child hierarchies, and setting up cameras to ensure scenes export cleanly to web applications.

---

## When to Use This Skill

Activate this skill when:
- Creating new 3D assets, emblems, devices, or abstract geometric artifacts in Spline Editor.
- Modeling procedural primitives (Cubes, Spheres, Toruses, Cylinders) and vector extrusions.
- Performing Boolean modeling operations (Union, Subtract, Intersect).
- Organizing scene graph hierarchies, layers, and group parenting.
- Configuring cameras (Perspective vs. Orthographic, FOV, clipping planes).
- Preparing raw geometry for downstream animation (`@skill:spline-3d-animation`) and material application (`@skill:spline-3d-materials-and-look`).

Do **not** use this skill for:
- Writing Next.js React wrapper code (use `@skill:spline-3d-use`).
- Final polygon decimation and export packaging (use `@skill:spline-3d-scene-optimization`).

---

## Mandatory Pre-Flight Authoring Check

Before opening Spline Editor or making any scene modifications:
1. **Define Scene Purpose**: Is this asset a hero background, an interactive card element, or a floating service icon?
2. **Review Polygon Budget**: Maximum **25,000 triangles** for hero scenes; maximum **8,000 triangles** for isolated card icons.
3. **Inspect TRIVEX Brand Shapes**: TRIVEX geometry emphasizes architectural precision, beveled chamfers, interlocking rings, and aerodynamic facets. Avoid bulbous, organic "cartoonish" forms.

---

## Geometry Construction Strategies

Spline provides three primary modeling workflows. Choose the strategy that yields the lowest polygon overhead:

```
┌────────────────────────────────────────────────────────────────────────┐
│                     Spline Geometry Hierarchy                          │
├─────────────────────┬───────────────────────────┬──────────────────────┤
│ Strategy            │ Best For                  │ Poly Efficiency      │
├─────────────────────┼───────────────────────────┼──────────────────────┤
│ 1. Procedural Prims │ Abstract geometric rings, │ Extremely High       │
│                     │ tech orbs, cards, lenses  │ (Parametric segments)│
├─────────────────────┼───────────────────────────┼──────────────────────┤
│ 2. Vector Extrusion │ Logos, icons, typography, │ High                 │
│                     │ architectural profiles    │ (Control curve count)│
├─────────────────────┼───────────────────────────┼──────────────────────┤
│ 3. Boolean Ops      │ Cutouts, ports, inset     │ Medium to Low        │
│                     │ technical slots           │ (Requires remeshing) │
└─────────────────────┴───────────────────────────┴──────────────────────┘
```

### 1. Parametric Primitives (Preferred)
- Always start with primitives (Cube, Cylinder, Torus, Sphere).
- **Segment Optimization**: A default Sphere in Spline might have 64 subdivisions. For web delivery, clamp subdivisions to **24-32 segments**. The difference is visually imperceptible under smooth shading but reduces polygon count by 75%.
- **Bevel Chamfers**: Always apply a subtle corner bevel (Radius: `2 - 4`, Steps: `2 - 3`). Pure 90° digital edges fail to reflect light realistically.

### 2. Extruded Vector Shapes
- Import or draw clean vector curves using the Pen tool.
- Minimize vector control points: Every extra anchor point on a bezier curve multiplies polygon tessellation upon extrusion.
- Set Extrusion Depth and Cap Bevel appropriately.

### 3. Boolean Operations (Use with Caution)
- Booleans (Union, Subtract, Intersect) generate messy internal n-gons and non-manifold geometry.
- After completing a Boolean operation, inspect the wireframe. If dense triangle clusters appear, convert to editable mesh and dissolve redundant edges or remesh with quad topology.

---

## Scene Graph Structuring & Layer Hygiene

Messy, unorganized scenes with dozens of objects named `Cube 14` or `Group 8` create immense friction when attaching animations or targeting objects via JavaScript.

### Semantic Naming Conventions
Always adhere to this naming taxonomy in the Left Layer Tree:

```text
Root_Scene
├── Camera_Main
├── Rig_Lighting
│   ├── Light_Key
│   ├── Light_Fill
│   └── Light_RimCyan
├── Core_Artifact (Group)
│   ├── Mesh_OuterRing
│   ├── Mesh_InnerRing
│   └── Mesh_CentralNucleus
└── Env_ContactShadowPlane
```

### Transformation Matrix Normalization (The 1, 1, 1 Rule)
- Never leave parent groups with arbitrary scales like `(0.42, 1.87, 0.11)`.
- If a group is scaled during modeling, select the mesh and apply **Bake / Reset Transform** so the scale returns to `(1, 1, 1)`.
- Non-uniform parent scales cause child objects to shear and distort during rotations.

---

## Camera Architecture & Field of View (FOV)

Camera parameters dictate the spatial drama of the scene:

```
                  [Camera Setup in Spline]
┌─────────────────────────────────┬─────────────────────────────────┐
│ Perspective (FOV: 35° - 45°)    │ Orthographic (Isometric)        │
├─────────────────────────────────┼─────────────────────────────────┤
│ - Cinematic depth perception    │ - Technical blueprint aesthetic │
│ - Natural parallax on scroll    │ - Zero perspective distortion   │
│ - Ideal for Hero & Product showcases - Ideal for UI cards & diagrams  │
└─────────────────────────────────┴─────────────────────────────────┘
```

### Clipping Planes Best Practice
- **Near Clipping Plane**: Set to `0.5` or `1.0`. Never set near clipping to `0.0001` (causes Z-fighting and flickering shadows).
- **Far Clipping Plane**: Clamp to `1000` or `2000`. Do not leave far clipping at infinity.

---

## Step-by-Step Professional Workflow

1. **Step 1: Set Up Project Workspace**:
   - Set viewport background color to TRIVEX Dark (`#080B10`) or Light (`#f8f9ff`).
   - Configure main camera: Perspective with FOV 40°.
2. **Step 2: Base Geometry Assembly**:
   - Add primitives and calibrate segment subdivisions.
   - Apply subtle bevels to all visible hard edges.
3. **Step 3: Hierarchy Grouping & Naming**:
   - Organize components into logical functional groups.
   - Rename every layer following the semantic taxonomy (`Mesh_*`, `Light_*`, `Rig_*`).
4. **Step 4: Transform Baking**:
   - Verify scales are `(1, 1, 1)`.
   - Align pivot points to geometric centers.
5. **Step 5: Hand-Off to Materials**:
   - Pass the verified scene graph to `@skill:spline-3d-materials-and-look`.

---

## Performance Requirements

1. **Polygon Ceiling**: Maximum 25,000 triangles for standalone hero scenes; maximum 8,000 for secondary cards.
2. **Object Count**: Total mesh count in a single scene should remain under **35 objects**.
3. **Subdivision Clamping**: Spheres capped at 32 subdivisions; cylinders capped at 24 subdivisions.

---

## Common Mistakes to Avoid

- **Mistake 1: Un-subdivided Primitives / Faceting**: Leaving cylinders with 8 sides when smooth circular curves are required, or conversely, using 128 sides and wasting 10,000 triangles on a single bolt.
- **Mistake 2: Negative Scale Factors**: Leaving mirrored parts with `-1` scale, causing normals to invert and materials to render black.
- **Mistake 3: Nested Ghost Groups**: Creating empty group folders within groups, cluttering the scene hierarchy and degrading raycasting performance.

---

## Validation Checklist

- [ ] All primitives use calibrated subdivisions (no excessive tessellation).
- [ ] Hard edges feature subtle beveled chamfers.
- [ ] Layer tree is semantically named (`Mesh_*`, `Light_*`).
- [ ] Scales are normalized to `(1, 1, 1)`.
- [ ] Camera FOV and clipping planes are configured.
- [ ] Total scene polygon count is within budget (< 25,000 triangles).

---

## Acceptance Criteria

Scene construction is accepted **only** if:
1. Geometry wireframes demonstrate clean, balanced edge topology.
2. All objects possess clean semantic names easily targetable via JavaScript.
3. Scene renders without inverted normals or geometry clipping.
