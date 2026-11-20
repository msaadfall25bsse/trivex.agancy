export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  client?: string;
  category:
    | "Web Applications"
    | "Mobile Apps"
    | "E-commerce"
    | "AI & Automation"
    | "WordPress & CMS"
    | "Branding & Design";
  summary: string;
  challenge?: string;
  approach?: string;
  deliverables: string[];
  technologies: string[];
  image?: string;
  alt?: string;
  badge: string;
  results?: string[];
  liveUrl?: string;
  status: "published" | "in_production" | "confidential";
  featured?: boolean;
}

export interface PracticeDomainScope {
  id: string;
  category: ProjectItem["category"];
  badge: string;
  title: string;
  summary: string;
  architecturalFocus: string[];
  technologies: string[];
  statusNote: string;
}

/**
 * ARCHITECTURAL PRACTICE DOMAINS
 * These reflect the concrete engineering scopes TRIVEX delivers to international clients.
 */
export const PRACTICE_DOMAINS: PracticeDomainScope[] = [
  {
    id: "full-stack-web-apps",
    category: "Web Applications",
    badge: "FULL-STACK SAAS",
    title: "Reactive Cloud Platforms & Enterprise Web Applications",
    summary:
      "Modern full-stack web applications with sub-second page loads, modular React 19 / Next.js architectures, distributed REST/GraphQL APIs, and resilient PostgreSQL databases.",
    architecturalFocus: [
      "Role-based access control (RBAC) and enterprise authentication",
      "Real-time event synchronization and webhook dispatching",
      "Automated CI/CD deployment pipelines on AWS and Vercel",
    ],
    technologies: ["Next.js", "React 19", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    statusNote: "Case studies in active production — walkthroughs available under NDA",
  },
  {
    id: "headless-ecommerce",
    category: "E-commerce",
    badge: "HEADLESS COMMERCE",
    title: "Global Multi-Currency Flagships & Headless Storefronts",
    summary:
      "Decoupled e-commerce architectures engineered for high-volume retail. Instant client-side transitions, unified single-page checkout flows, and automated inventory sync.",
    architecturalFocus: [
      "Headless storefront frontend with 95+ PageSpeed Core Web Vitals",
      "Multi-currency checkout and localized tax/shipping gateways",
      "Bidirectional ERP & inventory catalog synchronizers",
    ],
    technologies: ["Shopify Plus", "Next.js", "Stripe API", "GraphQL", "Tailwind CSS"],
    statusNote: "Case studies in active production — walkthroughs available under NDA",
  },
  {
    id: "cross-platform-mobile",
    category: "Mobile Apps",
    badge: "CROSS-PLATFORM MOBILE",
    title: "Cross-Platform iOS & Android Mobile Applications",
    summary:
      "High-performance native-feel mobile applications built with Flutter and React Native. Seamless background telemetry, real-time push notifications, and in-app payments.",
    architecturalFocus: [
      "Background GPS telemetry and live map tracking",
      "Secure payment escrow and in-app subscription processing",
      "Offline-first state synchronization and encrypted local storage",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Stripe SDK", "Google Maps SDK"],
    statusNote: "Case studies in active production — walkthroughs available under NDA",
  },
  {
    id: "ai-enterprise-automation",
    category: "AI & Automation",
    badge: "AI & WORKFLOWS",
    title: "Autonomous Enterprise AI Pipelines & Intelligence Nodes",
    summary:
      "Bespoke LLM integrations, document extraction agents, and multi-channel customer triage bots that automate repetitive administrative and operational workflows.",
    architecturalFocus: [
      "Semantic search and vector retrieval augmentation (RAG)",
      "Automated CRM, lead routing, and ticketing synchronization",
      "Enterprise audit logging and privacy-preserving data redaction",
    ],
    technologies: ["Python", "FastAPI", "OpenAI API", "LangChain", "Vector DB", "Docker"],
    statusNote: "Case studies in active production — walkthroughs available under NDA",
  },
  {
    id: "custom-wordpress-cms",
    category: "WordPress & CMS",
    badge: "HEADLESS CMS // ACF PRO",
    title: "Custom Corporate WordPress & Editorial Publishing Platforms",
    summary:
      "Bespoke, bloat-free WordPress themes engineered with custom Gutenberg blocks, ACF Pro fields, and hardened enterprise security. Zero fragile page-builders.",
    architecturalFocus: [
      "Custom semantic PHP & React Gutenberg block components",
      "Lightweight asset pipeline with 95+ Lighthouse scores",
      "Two-factor authentication and automated daily backup routines",
    ],
    technologies: ["WordPress", "PHP 8", "ACF Pro", "MySQL", "Cloudflare CDN"],
    statusNote: "Case studies in active production — walkthroughs available under NDA",
  },
  {
    id: "design-systems-branding",
    category: "Branding & Design",
    badge: "DESIGN SYSTEMS",
    title: "Design Tokens, Figma UI Component Systems & Brand Identity",
    summary:
      "Comprehensive digital brand systems, precision vector logo iconography, dual-theme dark/light token palettes, and production-ready Figma component libraries.",
    architecturalFocus: [
      "Cross-platform design token architecture and spacing scales",
      "Accessible WCAG 2.2 AA compliant color contrast systems",
      "Interactive component states, motion guidelines, and micro-interactions",
    ],
    technologies: ["Figma", "Tokens Studio", "Adobe Illustrator", "Storybook"],
    statusNote: "Case studies in active production — walkthroughs available under NDA",
  },
];

/**
 * PRODUCTION CLIENT PROJECTS
 * Strictly populated only when genuine, verified client projects and permissions are provided.
 * No fabricated clients, fake revenue lifts, or invented case studies.
 */
export const PORTFOLIO_PROJECTS: ProjectItem[] = [];
