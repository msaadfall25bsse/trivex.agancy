export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "Websites" | "Web Applications" | "E-commerce" | "WordPress" | "Mobile Apps" | "Marketing & Ads" | "Branding" | "Video & Creative";
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  technologies: string[];
  image: string;
  alt: string;
  badge: string;
  featured?: boolean;
}

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: "luxury-apparel-commerce",
    slug: "luxury-apparel-commerce",
    title: "Global Apparel Flagship & Headless Store Architecture",
    category: "E-commerce",
    badge: "SHOPIFY PLUS // HEADLESS",
    summary: "Re-engineered a digital flagship store to deliver sub-second mobile page loads, streamlined multi-currency checkout, and automated inventory sync.",
    challenge: "The existing monolithic platform suffered from slow mobile load times, high checkout drop-offs, and disjointed international fulfillment across regions.",
    solution: "Designed and engineered a custom headless storefront with instant client-side transitions, simplified single-page checkout, and real-time ERP inventory sync.",
    deliverables: [
      "Headless Storefront Frontend",
      "Custom Multi-Currency Checkout Flow",
      "Automated Inventory & ERP Synchronization",
      "Core Web Vitals Speed Optimization",
    ],
    technologies: ["Shopify Plus", "Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7lsEg31e7OMSppgyqtYpLY1SKTeO6MN6mkHGucq070Su4F6VV-7byNGNAIQPlBzd0QAHVZI2XiRXOMxjvXKdGV7s-Mi900EBL6LeAFsQSkaEV2JTbY5drHRdcpSCtkg-v5LOpbmnPnY3o11nW1MhJSK9ex6EjKl-NA9qLT2_ZnjdBZ_5gayIRjHcN04dj_5xAutZcPRXvWnh4uQCOXnfCHAOkzAvdNieXoWwEBus",
    alt: "Modern luxury apparel e-commerce web platform",
    featured: true,
  },
  {
    id: "commercial-fleet-portal",
    slug: "commercial-fleet-portal",
    title: "Commercial Fleet Dispatch & Service Booking Portal",
    category: "Web Applications",
    badge: "FULL-STACK // IOT PORTAL",
    summary: "Architected an intuitive web application providing commercial vehicle operators with real-time hardware status, booking scheduling, and maintenance dispatch.",
    challenge: "Manual dispatching and fragmented spreadsheets resulted in slow communication, missed maintenance windows, and frustrated fleet managers.",
    solution: "Built a reactive, real-time web portal integrating telematics APIs, automated service scheduling, and customer self-service booking modules.",
    deliverables: [
      "Custom Operations Dashboard & Telematics Sync",
      "Interactive Customer Booking Workflow",
      "Automated SMS & Email Service Notifications",
      "Role-Based Access Control for Dispatchers",
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "REST APIs"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRhi3INl7nIl5tWWj7Hm2ZNlV2E40u11cbL-SIEyD5Kz4n4kfKayHyOms-D2FmMArlLIso8RDSQwZ-24rByLXNksvwZcAqqOzE3OpgvCyoOdakRJGw0lJGOfO2-l3hdbx2GnY75-zm4J6C4YA_L-ZOEp1jdcjXXFr265wbVTbKHMO7KsUZ9aoboDx68KD1vIJtofYyCwCfXAKtB1YILm1FchSPokGzxBcVs1kjX94",
    alt: "Fleet management operations portal interface",
    featured: true,
  },
  {
    id: "executive-mobility-app",
    slug: "executive-mobility-app",
    title: "Executive Chauffeur & Airport Dispatch Mobile Platform",
    category: "Mobile Apps",
    badge: "CROSS-PLATFORM // FLUTTER",
    summary: "Engineered dual cross-platform iOS and Android applications for passengers and drivers with real-time GPS telemetry, in-app payments, and flight tracking.",
    challenge: "The client needed a white-glove mobile experience for luxury travelers with zero dispatch latency, dynamic pricing, and seamless payment escrow.",
    solution: "Developed native-feel mobile applications in Flutter with background location tracking, flight arrival synchronization, and one-tap booking.",
    deliverables: [
      "Passenger iOS & Android Application",
      "Chauffeur Dispatch Application",
      "Real-Time Telemetry & GPS Navigation",
      "Stripe Payment Escrow Integration",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Stripe API", "Google Maps SDK"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeTyYYDCH5-3aM2oeABk9K2Re6bJ0tzM1cj57Qpxrpq5xfay0RFgNUiFD25Vea9IXYKX0Dg8eooP2r8OxvguDTlEuPrTmmLmUqZyhT4r8jfICfvY95nrjhSOZBIDkIgFZ5ZyWB43hen9rGSzhQnS3vTjNiDAKNhwGr9U54g_wWMe2UtHd2ZXY7aIDF2uXG4Tz6R6_H4tmqmDqYRWG01QoKHWHKUBuJoNYOulr1PV4",
    alt: "Executive limousine mobile application design",
    featured: true,
  },
  {
    id: "architectural-development-web",
    slug: "architectural-development-web",
    title: "Modern Architectural Development & Property Showcase",
    category: "Websites",
    badge: "NEXT.JS // 3D IMMERSIVE",
    summary: "Crafted a high-elegance web platform for premier real estate developments featuring interactive unit floor plans, buyer CRM integrations, and multi-language support.",
    challenge: "Traditional PDF brochures were failing to convey the luxury scale of developments, resulting in low international inquiry conversion.",
    solution: "Constructed an interactive web experience with fluid typography, responsive 3D floor plan explorer, and automated lead capture routing.",
    deliverables: [
      "Responsive Architectural Showcase Website",
      "Interactive Floor Plan Selector",
      "Multi-Language Architecture (English & Arabic)",
      "Automated CRM Lead Routing",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "HubSpot CRM"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0XHSbXSBMBEcSdv_DzO-DwVs8sDjBJVkzGVitO_3pOllDdG0jhKdr9XWBdsFprbRvaI_adewmzB_buO2lsgpb2n8j0CZlq_tjJRteIaM9OlHb97AP-B6nYpnFnazqr7jmG-n0Mgxd1E5JHApvW4tayMPdePKW4uJ0in4s-TFX0evw50uQZ7brp7lrCVh-kZPgCcR4oyagYbRMgp7R64jMb0Phc2JNO4eet5OaxoA",
    alt: "Architectural property showcase website",
    featured: false,
  },
  {
    id: "corporate-consulting-wordpress",
    slug: "corporate-consulting-wordpress",
    title: "Bespoke Corporate Advisory WordPress Platform",
    category: "WordPress",
    badge: "CUSTOM THEME // ACF PRO",
    summary: "Engineered a custom, bloat-free corporate WordPress website with modular Gutenberg blocks, ACF Pro custom fields, and hardened enterprise security.",
    challenge: "The client was trapped on an outdated, fragile page-builder theme that took 6+ seconds to load and frequently broke during WordPress updates.",
    solution: "Rebuilt the site from scratch with clean, semantic PHP templates, modular editor blocks, and a lightweight asset pipeline achieving 95+ PageSpeed.",
    deliverables: [
      "Custom WordPress Theme Architecture",
      "Modular Gutenberg Blocks & ACF Setup",
      "Security Hardening & 2FA Configuration",
      "Comprehensive Editorial Documentation",
    ],
    technologies: ["WordPress", "PHP 8", "ACF Pro", "MySQL", "Cloudflare"],
    image: "https://lh3.googleusercontent.com/aida/ALJJyrBzx4Y8noL01zqp5PYB66KSR1tjqH5ijNXJUsXiEyppbVMuMtGQW_DEkYKsXbe6YXt67YIdtcw20eKIt1KIJCY9qyiwMIg2mm3PhaCJtcsVmZbhBiregWNnmsu9mUp8dHPPn61SHrXXfjntBV7rEOtgKL3FQOM1KiXbRGqwv7ZU1RY6gPQCXDngrXeUqMgyk8MwNvsgbwW0SEpzZHvpPNj5i94GBD_aT6cVSHjhY4z5",
    alt: "Clean corporate WordPress website",
    featured: false,
  },
  {
    id: "fintech-brand-identity",
    slug: "fintech-brand-identity",
    title: "Fintech Platform Visual Identity & Design System",
    category: "Branding",
    badge: "BRAND SYSTEM // FIGMA",
    summary: "Designed a cohesive visual identity, comprehensive brand guidelines, custom iconography, and responsive design system for an emerging financial technology firm.",
    challenge: "The company lacked unified visual standards, with marketing materials, landing pages, and web apps each presenting conflicting styles.",
    solution: "Created an authoritative yet modern brand system, precision vector logo system, dark/light token architecture, and production-ready component library.",
    deliverables: [
      "Master Logo System & App Iconography",
      "Color Tokens, Typography & Brand Guidelines Manual",
      "Marketing Deck & Social Media Templates",
      "Figma UI Component Kit",
    ],
    technologies: ["Figma", "Adobe Illustrator", "Tokens Studio"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7lsEg31e7OMSppgyqtYpLY1SKTeO6MN6mkHGucq070Su4F6VV-7byNGNAIQPlBzd0QAHVZI2XiRXOMxjvXKdGV7s-Mi900EBL6LeAFsQSkaEV2JTbY5drHRdcpSCtkg-v5LOpbmnPnY3o11nW1MhJSK9ex6EjKl-NA9qLT2_ZnjdBZ_5gayIRjHcN04dj_5xAutZcPRXvWnh4uQCOXnfCHAOkzAvdNieXoWwEBus",
    alt: "Brand identity design system showcase",
    featured: false,
  },
];
