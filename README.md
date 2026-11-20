# TRIVEX — Full-Service Digital Growth & Technology Agency

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Deployment-Vercel-black?style=flat&logo=vercel)](https://trivex-agancy.vercel.app/)

> **Live Production Website:** [https://trivex-agancy.vercel.app/](https://trivex-agancy.vercel.app/)  
> **Repository:** [https://github.com/msaadfall25bsse/trivex.agancy](https://github.com/msaadfall25bsse/trivex.agancy)

---

## ⚡ Overview

**TRIVEX** is a multidisciplinary digital growth and technology agency unifying performance marketing, custom software engineering, e-commerce, and high-conversion creative production under one team.

### Core Capabilities & Verticals:
- **Performance Marketing & Paid Acquisition:** Meta, Google, TikTok, and programmatic campaigns with attribution tracking.
- **Web & Custom Software Engineering:** Next.js, React, Node.js, Python, and scalable cloud architectures.
- **E-Commerce & WordPress Solutions:** Shopify Plus, headless storefronts, custom WooCommerce, and enterprise WordPress.
- **Mobile Application Development:** Cross-platform Flutter and React Native apps, native iOS/Android development.
- **AI Video & UGC Creative Production:** Direct-response video ads, TikTok/Reels UGC, motion design, and product render assets.
- **Business Automation & Enterprise AI:** Internal workflow automation, CRM orchestration, and custom AI agents.

---

## 🏗️ Architecture & Technical Stack

- **Framework:** Next.js 16 (App Router with Turbopack)
- **UI Runtime:** React 19 + TypeScript
- **Styling:** Tailwind CSS v4 + Custom Design Tokens (`Space Grotesk`, `Hanken Grotesk`, `JetBrains Mono`)
- **Theme Engine:** Dual-Theme Architecture (Dark Mode & Light Mode with zero-FOUC script injection and localStorage persistence)
- **Icon System:** Zero-dependency inline SVG `<Icon />` system preventing ligature leaks and layout shift
- **SEO & Structured Data:** Dynamic JSON-LD schemas (`Organization`, `WebSite`, `Services`), centralized metadata generator, `sitemap.xml`, and `robots.txt`

---

## 📁 Repository Structure

```text
├── .agents/skills/              # 15 Advanced 3D & Spline agent engineering skills
│   ├── 3d-motion-interaction/
│   ├── 3d-scene-architecture/
│   ├── 3d-visual-direction/
│   ├── 3d-website-creator/
│   ├── responsive-accessibility/
│   ├── site-recon-brief/
│   ├── spline/
│   ├── spline-3d-animation/
│   ├── spline-3d-building-scenes/
│   ├── spline-3d-html-content/
│   ├── spline-3d-materials-and-look/
│   ├── spline-3d-particles/
│   ├── spline-3d-scene-optimization/
│   ├── spline-3d-use/
│   └── visual-qa-handoff/
├── app/                         # Next.js App Router (29 Prerendered Static Routes)
│   ├── about/                   # About page (Three Minds. One Vision.)
│   ├── contact/                 # Strategic consultation booking & contact form
│   ├── cookie-policy/           # Cookie compliance
│   ├── faq/                     # Interactive searchable FAQ
│   ├── industries/              # 5 Vertical specialization breakdowns
│   ├── privacy-policy/          # Client privacy & data protection
│   ├── process/                 # 4-Stage delivery framework & communication standards
│   ├── services/                # Comprehensive 12-service directory
│   │   └── [slug]/              # Dynamic full-scope service detail pages
│   ├── terms-of-service/        # Commercial terms & IP ownership
│   ├── work/                    # Portfolio & case studies
│   ├── globals.css              # Global styles & design system tokens
│   ├── layout.tsx               # Root layout with fonts, JSON-LD, ThemeProvider
│   ├── page.tsx                 # High-conversion agency homepage
│   ├── robots.ts                # Dynamic robots.txt
│   └── sitemap.ts               # Dynamic XML sitemap
├── components/                  # Modular component library
│   ├── contact/                 # ContactForm and form validation
│   ├── faq/                     # FaqClientView interactive accordion
│   ├── home/                    # 11 Dedicated homepage section components
│   ├── layout/                  # Responsive Header, Navbar, Footer, JsonLd
│   ├── services/                # ServiceDetailView template
│   ├── ui/                      # Universal SVG Icon system (<Icon />)
│   ├── work/                    # WorkClientView portfolio filter
│   └── ThemeProvider.tsx        # Dark/Light theme context & toggle
├── config/                      # Site metadata, navigation links, and settings
├── data/                        # Static datasets (services, case studies, industries, faqs)
├── lib/                         # Centralized SEO metadata utilities
├── public/                      # Static brand assets and logos (Dark/Light mode)
└── *.html                       # Original reference HTML designs (Dark, Light & Header showcase)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ or 20+
- npm or yarn or pnpm

### Installation

```bash
git clone https://github.com/msaadfall25bsse/trivex.agancy.git
cd trivex.agancy
npm install
```

### Development Server

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Quality Checks & Linting

```bash
npm run lint
```

### Production Build

```bash
npm run build
```

---

## 🛡️ License & IP Ownership

All client deliverables, source code, and design assets are developed under a strict 100% Client Code & IP Ownership policy.  
Copyright © 2026 TRIVEX Agency. All rights reserved.
