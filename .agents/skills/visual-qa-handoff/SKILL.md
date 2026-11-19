---
name: visual-qa-handoff
description: >-
  Provides end-to-end visual quality assurance, multi-breakpoint regression testing, and production handoff verification for 3D and interactive components in TRIVEX. Covers route-by-route screenshot comparisons, Dark/Light theme verification, FPS performance profiling, console error zero-tolerance audits, and standardized defect reporting.
---

# Visual QA Handoff for TRIVEX

## Purpose & Scope

The **Visual QA Handoff** skill enforces rigorous, deterministic quality assurance standards before any 3D experience or visual component is merged into the TRIVEX production branch.

It defines automated and manual verification protocols across responsive breakpoints (Desktop, Tablet, Mobile), verifies theme parity between Dark Mode (`#080B10`) and Light Mode (`#f8f9ff`), audits frame rates (FPS) and memory footprints, checks console health, and structures defect reporting.

---

## When to Use This Skill

Activate this skill when:
- Completing a new 3D feature, interactive section, or animation pipeline.
- Performing pre-merge or pre-deployment visual regression testing.
- Verifying cross-device responsiveness across Desktop (1920x1080), Laptop (1440x900), Tablet (768x1024), and Mobile (390x844).
- Testing dual-theme switching to confirm zero artifacts, color mismatches, or flash of unstyled theme (FOUT).
- Auditing memory consumption, draw calls, and frame rate stability.
- Documenting and filing structured defect reports for visual or performance regressions.

Do **not** use this skill for:
- Writing or adjusting initial 3D material shaders (use `@skill:3d-visual-direction`).
- Setting up initial scene geometry or loaders (use `@skill:3d-scene-architecture`).

---

## The 5-Point TRIVEX Visual QA Matrix

Every interactive or 3D element must pass all 5 verification gates:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        TRIVEX Visual QA Matrix                         │
├────────────────────┬───────────────────────────────────────────────────┤
│ 1. Breakpoint Gate │ Desktop (1920), Laptop (1440), Tablet (768),      │
│                    │ Mobile (390). Zero horizontal overflow.           │
├────────────────────┼───────────────────────────────────────────────────┤
│ 2. Theme Gate      │ Dark Mode & Light Mode rendering parity.          │
│                    │ Smooth 250ms transition. Zero uncolored elements. │
├────────────────────┼───────────────────────────────────────────────────┤
│ 3. Motion Gate     │ 58-60 FPS sustained render loop.                  │
│                    │ Immediate pause when out of viewport.             │
├────────────────────┼───────────────────────────────────────────────────┤
│ 4. Console Gate    │ Zero unhandled exceptions. Zero WebGL warnings.   │
│                    │ Zero 404 missing asset requests.                  │
├────────────────────┼───────────────────────────────────────────────────┤
│ 5. Memory Gate     │ Heap memory returns to baseline after route       │
│                    │ transitions. WebGL context cleanly disposed.      │
└────────────────────┴───────────────────────────────────────────────────┘
```

---

## Route-by-Route Visual Verification Protocols

### 1. Homepage (`/`)
- [ ] 3D Hero Mesh aligns correctly with the asymmetric grid; does not occlude `<h1>` text.
- [ ] Dark Mode: Emissive rim light is sharp Electric Cyan (`#00D2FF`).
- [ ] Light Mode: Clear color switches to `#f8f9ff`; rim accent shifts to Royal Blue (`#0088FF`).
- [ ] Mobile (375px/390px): 3D canvas scales down; touch scroll is completely unimpeded (`touch-action: pan-y`).

### 2. About Us (`/about`)
- [ ] Triple-core geometry rotates without stutter.
- [ ] Hover interaction centers rings smoothly.
- [ ] Card overlays maintain strict typography contrast against the canvas.

### 3. Services Directory & Detail (`/services`, `/services/[slug]`)
- [ ] All 12 service slugs render their respective 3D artifact or icon correctly.
- [ ] Breadcrumbs, badges, and deliverable checklists remain crisp and fully legible.
- [ ] Fast route jumping across services does not trigger WebGL context loss.

### 4. Case Studies & Portfolio (`/work`)
- [ ] 3D card tilt tracking tracks mouse coordinates smoothly with lerp damping.
- [ ] Category tabs ("All", "Web Applications", "E-commerce", etc.) switch active cards without animation jank.
- [ ] Touch devices disable cursor tilt to prevent sticky tilted cards.

### 5. Process & Methodology (`/process`)
- [ ] 4-Stage orbital waypoints align with step descriptions.
- [ ] ScrollTrigger scrubbing tracks smoothly without rubber-banding or layout jitter.

### 6. Contact & Consultation (`/contact`)
- [ ] Form input focus states trigger harmonic 3D sphere pulsation.
- [ ] Submitting the form renders the clean success state without unmounting or crashing the canvas.

---

## Automated QA & Profiling Procedures

### 1. Console & Network Hygiene Audit
Run a clean production build and check for runtime warnings:
```bash
# 1. Run production build
npm run build

# 2. Start production server
npm run start
```
Inspect Chrome DevTools Console:
- Filter by `Warnings` and `Errors`.
- **Zero Tolerance Policy**: Any Three.js warning (e.g., `THREE.WebGLRenderer: Texture is not power of two`, `THREE.BufferGeometry: computeVertexNormals missing attribute`) must be fixed before approval.

### 2. FPS & Performance Profiling with Chrome DevTools
1. Open Chrome DevTools -> **Rendering** tab.
2. Check **Frame Rendering Stats** (shows real-time FPS meter and GPU memory).
3. Scroll through the page at varied velocities (slow read, fast flick).
4. **Pass Criteria**: Frame rate must never drop below 50 FPS during active scrolling on test hardware.

### 3. Memory Leak Audit Protocol
1. Open Chrome DevTools -> **Memory** tab.
2. Take baseline Heap Snapshot (`Snapshot 1`).
3. Click through routes: `/` -> `/about` -> `/services` -> `/work` -> `/contact` -> `/` (repeat 5 times).
4. Click the garbage collect icon in DevTools.
5. Take second Heap Snapshot (`Snapshot 2`).
6. Compare `Snapshot 2` vs `Snapshot 1`:
   - Number of `WebGLRenderer`, `BufferGeometry`, and `Texture` instances must remain identical (no accumulating detached objects).

---

## Standardized Defect Reporting Format

When a visual bug or performance flaw is uncovered during QA, document it using this structured template:

```markdown
### 🐛 DEFECT REPORT: [Short Descriptive Title]

- **Route Affected**: `/services/ecommerce`
- **Breakpoint**: Mobile (iPhone 14 / 390x844)
- **Theme**: Light Mode
- **Severity**: High (Blocks Interaction) | Medium (Visual Flaw) | Low (Polish)

#### Description
Single-finger touch scroll gets trapped when touching the 3D canvas area, preventing the user from scrolling past the hero section.

#### Steps to Reproduce
1. Open Chrome DevTools and toggle Device Toolbar (iPhone 14).
2. Navigate to `http://localhost:3000/services/ecommerce`.
3. Switch theme to Light Mode.
4. Attempt to swipe vertically with one finger across the 3D canvas.

#### Expected Behavior
Page scrolls vertically down to the deliverables section (`touch-action: pan-y`).

#### Actual Behavior
Canvas traps touch event, preventing page scroll.

#### Root Cause & Suggested Fix
Canvas wrapper missing `touch-action: pan-y` CSS property in `ServiceDetailView.tsx`.
```

---

## Step-by-Step Professional Workflow

1. **Step 1: Local Production Build Verification**:
   - Never run Visual QA in dev mode (React StrictMode double-invokes effects). Run `npm run build && npm run start`.
2. **Step 2: Multi-Breakpoint Screenshot Audit**:
   - Capture full-page screenshots at 1920px, 1440px, 768px, and 390px widths.
   - Inspect for horizontal scrollbars, text clipping, or overlapping 3D meshes.
3. **Step 3: Theme Toggle Stress Test**:
   - Rapidly toggle between Dark and Light mode 10 times.
   - Verify materials, shadows, and text colors update immediately without flashing white or black.
4. **Step 4: Performance & Memory Profile**:
   - Run Chrome Performance profiler during a 10-second scroll test.
   - Confirm sustained 60 FPS and clean GPU memory teardown.
5. **Step 5: Sign-Off or Defect Filing**:
   - If all tests pass: Generate Handoff Sign-off report.
   - If any test fails: File structured Defect Report and route back to engineering.

---

## Validation Checklist

- [ ] Route passes inspection at Desktop (1920px), Tablet (768px), and Mobile (390px).
- [ ] No horizontal scrollbars (`overflow-x: hidden` strictly observed).
- [ ] Dark Mode and Light Mode render with complete visual parity.
- [ ] Sustained frame rate is >= 55 FPS during scroll scrubbing.
- [ ] Zero WebGL warnings or error logs in browser DevTools console.
- [ ] Navigating between pages 5+ times causes 0 memory leaks.
- [ ] Fallback static images display seamlessly when WebGL is turned off.

---

## Acceptance Criteria

A feature achieves Visual QA Sign-off **only** if:
1. All 5 gates of the Visual QA Matrix are green.
2. Zero high or medium severity defects remain open.
3. Typography, colors, and layouts match the TRIVEX design specification with 100% fidelity.
