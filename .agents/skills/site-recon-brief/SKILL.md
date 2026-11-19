---
name: site-recon-brief
description: >-
  Performs structural reconnaissance, route inventory, design system discovery, and technical feasibility inspection across the TRIVEX codebase. Use before introducing new 3D components or architectural changes to discover existing typography, colors, layout patterns, and constraints.
---

# Site Recon Brief for TRIVEX

## Purpose & Scope

The **Site Recon Brief** skill provides a rigorous, standardized methodology for inspecting, mapping, and documenting the active TRIVEX codebase prior to proposing or implementing any 3D, animation, or structural changes.

This skill ensures that developers and autonomous agents thoroughly understand existing routes, design tokens, typography rules, layout hierarchies, and architectural constraints. It prevents accidental regression, design system fragmentation, and redundant component creation.

---

## When to Use This Skill

Activate this skill when:
- Commencing work on any new 3D feature, page enhancement, or interactive component in TRIVEX.
- Auditing the current route inventory and discovering where 3D experiences can be integrated with highest commercial ROI.
- Extracting exact CSS classes, font families, colors, spacing tokens, and asset paths from the codebase.
- Identifying technical boundaries (such as Next.js 16 Turbopack, React 19 Server/Client components, and Tailwind v4).
- Formulating an implementation plan grounded in empirical project reality rather than assumptions.

Do **not** use this skill for:
- Writing 3D code directly (use `@skill:3d-website-creator` or `@skill:3d-scene-architecture`).
- Running visual QA testing (use `@skill:visual-qa-handoff`).

---

## TRIVEX Architectural Baseline & Inventory

A successful reconnaissance must inspect and document all six architectural layers of the project:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        TRIVEX Architectural Layers                     │
├────────────────────┬───────────────────────────────────────────────────┤
│ 1. Framework Layer │ Next.js 16.4.6, React 19.3.0, Turbopack, TS 5.    │
├────────────────────┼───────────────────────────────────────────────────┤
│ 2. Styling Layer   │ Tailwind CSS v4 (@import "tailwindcss"), CSS vars │
│                    │ Dark variant: @custom-variant dark                │
├────────────────────┼───────────────────────────────────────────────────┤
│ 3. Typography      │ Space Grotesk (Brand), Hanken Grotesk (Body),     │
│                    │ JetBrains Mono (Labels / Telemetry)               │
├────────────────────┼───────────────────────────────────────────────────┤
│ 4. Color Palette   │ Dark: #080B10, #0F141C, #1E2633, #00D2FF          │
│                    │ Light: #f8f9ff, #ffffff, #e2e8f0, #0088FF         │
├────────────────────┼───────────────────────────────────────────────────┤
│ 5. Routes          │ App Router (29 static pages pre-rendered)         │
│                    │ /, /about, /services, /services/[slug] (12),      │
│                    │ /work, /industries, /process, /contact, /faq      │
├────────────────────┼───────────────────────────────────────────────────┤
│ 6. Data Layer      │ data/services.ts, data/portfolio.ts,              │
│                    │ data/industries.ts, data/faq.ts, config/site.ts   │
└────────────────────┴───────────────────────────────────────────────────┘
```

---

## 4-Phase Reconnaissance Methodology

```
[Phase 1: Route & Page Recon]
  ├── Scan app/ directory for all route folders and dynamic params
  ├── Map route hierarchy to data models in data/*.ts
  └── Verify existing metadata and canonical URLs in lib/seo.ts
       │
[Phase 2: Design Token & Typography Extraction]
  ├── Inspect app/globals.css for custom typography tokens
  ├── Map .font-brand, .font-display, .font-headline-*, .font-body-*
  └── Document container paddings (.px-margin, .py-space-xl, .gap-gutter)
       │
[Phase 3: Component & Layout Discovery]
  ├── Inspect components/layout/ (Header.tsx, Footer.tsx, ThemeToggle.tsx)
  ├── Inspect components/home/ for existing section components
  └── Identify client component boundaries ('use client' directives)
       │
[Phase 4: Asset & Dependency Audit]
  ├── Check public/ directory for images, logos, and fonts
  ├── Inspect package.json for installed packages and peer dependencies
  └── Formulate 3D Implementation Blueprint with zero breaking changes
```

---

## Technical Token Reference Sheet

When building new components, always reuse these exact classes discovered during reconnaissance:

### 1. Typography Tokens (`app/globals.css`)
- **Primary Brand / Headings**: `.font-brand` (Space Grotesk, sans-serif)
- **Large Display Titles**: `.font-display .text-display` (clamp(2.25rem, 5vw, 3.5rem))
- **Section Headlines**: `.font-headline-lg .text-headline-lg` (2.5rem, leading 3rem)
- **Card Titles**: `.font-headline-sm .text-headline-sm` (1.25rem, leading 1.75rem)
- **Body Text**: `.font-body-md .text-body-md` (0.9375rem, leading 1.5rem, Hanken Grotesk)
- **Labels & Badges**: `.font-label-sm .text-label-sm` (0.625rem, JetBrains Mono, uppercase)

### 2. Spacing Tokens (`app/globals.css`)
- **Horizontal Page Gutter**: `.px-margin` (clamp(1rem, 4vw, 3rem))
- **Vertical Section Spacing**: `.py-space-xl` (2.5rem top & bottom)
- **Compact Section Spacing**: `.py-space-lg` (1.5rem top & bottom)
- **Grid Gutters**: `.gap-gutter` (1.5rem) or `.gap-space-md` (1rem)

### 3. Theme State Pattern
Always extract theme state using the established hook:
```tsx
import { useTheme } from "@/components/ThemeProvider";

export function MyComponent() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  // Apply isDark logic to styles, shaders, or canvas backgrounds
}
```

---

## Producing the "Site Recon Brief" Document

Prior to developing a 3D feature, generate a standardized markdown brief and store it in your scratchpad or project notes:

```markdown
# 📋 TRIVEX SITE RECON BRIEF: [Feature Name]

## 1. Target Route & Section
- **Target URL**: `/services/web-development`
- **Mount Point**: Hero section background (replacing static gradient)
- **Surrounding DOM**: `<h1>` headline, breadcrumbs, CTA buttons

## 2. Technical Dependencies Discovered
- Next.js Version: 16.4.6 (Turbopack)
- React Version: 19.3.0
- WebGL Capability: Requires dynamic import with `ssr: false`

## 3. Visual & Token Constraints
- Dark Theme Background: `#080B10`
- Light Theme Background: `#f8f9ff`
- Accent Color: `#00D2FF` (Dark) / `#0088FF` (Light)
- Typography: Must not disrupt `.font-brand` or `.font-label-sm`
- Content Layering: Must sit behind text with z-index 0

## 4. Performance Budget
- Maximum Polygon Count: 18,000
- Maximum Uncompressed Model Size: 950 KB
- Draw Calls Target: <= 12
- Target Frame Rate: 60 FPS

## 5. Potential Risks & Mitigation
- **Risk**: React 19 strict mode double mounting canvas context.
- **Mitigation**: Implement strict cleanup and cancellation in `useEffect`.
```

---

## Step-by-Step Professional Workflow

1. **Step 1: Codebase Directory Walk**:
   - Run `Get-ChildItem -Directory` across `app/`, `components/`, and `data/`.
   - Confirm active routes and component ownership.
2. **Step 2: Token Verification**:
   - Inspect `app/globals.css` to verify no custom classes are invented.
   - Confirm dark mode variant implementation (`@custom-variant dark`).
3. **Step 3: Data Schema Inspection**:
   - Inspect `data/services.ts` and `data/portfolio.ts` to see what fields are available for 3D synchronization.
4. **Step 4: Layout & Container Alignment**:
   - Ensure the prospective 3D container conforms to `.px-margin` and `max-w-7xl mx-auto`.
5. **Step 5: Synthesize Recon Brief**:
   - Produce the brief and verify that proposed 3D additions require 0 modifications to existing layouts.

---

## Common Mistakes to Avoid

- **Mistake 1: Inventing New Color Codes**: Hardcoding `#00e5ff` or `#3b82f6` instead of the project's official `#00D2FF` (dark) and `#0088FF` (light).
- **Mistake 2: Introducing Conflicting Font Imports**: Loading Google Fonts directly in component CSS instead of using the Next.js font variables defined in `app/layout.tsx`.
- **Mistake 3: Breaking Server Component Boundaries**: Attempting to add browser APIs (`window`, `document`, WebGL) directly inside server `page.tsx` files instead of creating isolated client components.
- **Mistake 4: Bypassing the Data Layer**: Hardcoding service titles or portfolio descriptions directly into 3D scenes instead of pulling from `data/services.ts`.

---

## Validation Checklist

- [ ] All 29 routes and data structures are fully identified and documented.
- [ ] Typography tokens (`.font-brand`, `.font-display`, `.font-label-*`) are correctly mapped.
- [ ] Spacing tokens (`.px-margin`, `.py-space-xl`) are documented and respected.
- [ ] Theme switching mechanism (`useTheme()`) is verified.
- [ ] Dependencies in `package.json` are inspected with 0 unnecessary additions.
- [ ] A written Site Recon Brief is prepared before writing code.

---

## Acceptance Criteria

Reconnaissance is accepted **only** if:
1. The resulting plan preserves 100% of existing functionality, styling, routes, and design tokens.
2. The prospective 3D implementation introduces zero breaking changes to the Next.js App Router structure.
3. Every color, font, and spacing value matches TRIVEX design tokens.
