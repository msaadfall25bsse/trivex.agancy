export interface IndustryData {
  slug: string;
  name: string;
  headline: string;
  description: string;
  icon: string;
  challenges: string[];
  capabilities: string[];
  recommendedServices: { title: string; href: string }[];
}

export const INDUSTRIES: IndustryData[] = [
  {
    slug: "ecommerce-retail",
    name: "E-commerce & Retail",
    headline: "Scale Digital Retail with Engineered Storefronts & High-ROAS Acquisition",
    description:
      "Modern retail moves fast. We help direct-to-consumer brands and omnichannel retailers build lightning-fast storefronts, streamline fulfillment, and drive profitable paid customer acquisition.",
    icon: "shopping_bag",
    challenges: [
      "Rising customer acquisition costs (CAC) eating into gross product margins.",
      "Slow website loading speeds causing cart abandonment on mobile devices.",
      "Disjointed inventory, shipping, and multi-channel marketing synchronization.",
      "Customer retention and low repeat-purchase lifetime value (LTV).",
    ],
    capabilities: [
      "Headless Shopify & custom WooCommerce storefront engineering.",
      "Multi-channel paid acquisition across Meta, Google, and TikTok Ads.",
      "High-converting landing pages and programmatic cart CRO.",
      "Automated email, SMS, and post-purchase customer retention flows.",
    ],
    recommendedServices: [
      { title: "E-commerce Solutions", href: "/services/ecommerce" },
      { title: "Digital Marketing & Growth", href: "/services/digital-marketing" },
      { title: "AI Video & UGC Production", href: "/services/ai-video-production" },
    ],
  },
  {
    slug: "local-home-services",
    name: "Local & Home Services",
    headline: "Dominate Local Market Search & Fill Service Booking Calendars",
    description:
      "For contractors, legal practices, clinics, and regional home service operators, local visibility is everything. We engineer high-converting booking funnels and dominant local SEO visibility.",
    icon: "storefront",
    challenges: [
      "Reliance on low-quality third-party lead brokers charging high per-lead fees.",
      "Poor local Google Search and Google Maps rankings in primary operating territory.",
      "Websites that fail to convert mobile visitors into phone calls and booked appointments.",
      "Inconsistent follow-ups allowing warm customer inquiries to slip away.",
    ],
    capabilities: [
      "High-converting local lead generation websites and mobile landing pages.",
      "Google Local Services Ads (LSA) and targeted localized Search campaigns.",
      "Comprehensive Local SEO & Google Business Profile ranking optimization.",
      "Automated SMS booking confirmations and instant lead notification workflows.",
    ],
    recommendedServices: [
      { title: "WordPress Development", href: "/services/wordpress-development" },
      { title: "SEO & Local Visibility", href: "/services/seo" },
      { title: "Business Automation", href: "/services/business-automation" },
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    headline: "Project Institutional Credibility & Attract Qualified High-Value Mandates",
    description:
      "Consulting firms, legal practices, financial advisories, and architecture studios require web presence that immediately conveys discretion, institutional authority, and intellectual caliber.",
    icon: "corporate_fare",
    challenges: [
      "Outdated corporate websites that fail to reflect the premium quality of the firm.",
      "Difficulty demonstrating complex capabilities without overwhelming prospects.",
      "Absence of structured thought leadership and strategic content distribution.",
      "Inability to track which corporate marketing initiatives drive closed client mandates.",
    ],
    capabilities: [
      "Bespoke corporate web architectures built on clean Next.js or custom WordPress.",
      "Sophisticated brand identity systems, typography guidelines, and pitch decks.",
      "Executive LinkedIn content strategy and category-defining B2B copywriting.",
      "Secure client intake portals, document collection, and CRM pipeline automation.",
    ],
    recommendedServices: [
      { title: "Web & Custom Development", href: "/services/web-development" },
      { title: "Graphic Design & Branding", href: "/services/graphic-design" },
      { title: "Social Media & Content", href: "/services/social-media-marketing" },
    ],
  },
  {
    slug: "startups-technology",
    name: "Startups & Technology",
    headline: "Accelerate Product Velocity from MVP Validation to Scaling Rounds",
    description:
      "Speed is the ultimate differentiator for venture-backed and bootstrapped tech startups. We build reactive web applications, cross-platform mobile apps, and high-impact launch landing pages.",
    icon: "rocket_launch",
    challenges: [
      "Lengthy recruitment cycles delaying critical software sprint milestones.",
      "Technical debt from rapid early prototypes requiring systematic architectural refactoring.",
      "High bounce rates on product marketing pages that fail to articulate value propositions.",
      "Complex third-party API orchestrations and scaling database workloads.",
    ],
    capabilities: [
      "Rapid MVP engineering using Next.js, TypeScript, PostgreSQL, and modern cloud platforms.",
      "Cross-platform iOS and Android mobile app development with Flutter.",
      "Sleek product UI/UX design, interactive Figma prototypes, and component design systems.",
      "High-conversion SaaS product marketing pages and documentation hubs.",
    ],
    recommendedServices: [
      { title: "Web & Custom Development", href: "/services/web-development" },
      { title: "Mobile App Development", href: "/services/mobile-app-development" },
      { title: "UI/UX & Product Design", href: "/services/ui-ux-design" },
    ],
  },
  {
    slug: "established-businesses",
    name: "Established Businesses",
    headline: "Modernize Legacy Systems & Unlock Enterprise Digital Growth",
    description:
      "We partner with mid-market and established enterprises to modernize legacy web assets, eliminate operational friction through automation, and implement scalable digital marketing engines.",
    icon: "domain",
    challenges: [
      "Aging legacy websites built on fragile platforms that are difficult to update.",
      "Siloed internal departments relying on manual data transfer between disconnected tools.",
      "Disjointed brand messaging across disparate divisions, websites, and subsidiaries.",
      "Competitive pressure from agile digital-native challengers in their sector.",
    ],
    capabilities: [
      "Zero-downtime legacy website migration to modern high-performance frameworks.",
      "Enterprise workflow automation connecting CRMs, ERPs, and customer support queues.",
      "Centralized brand design systems unifying subsidiaries and digital touchpoints.",
      "Scalable multi-channel paid acquisition and technical SEO modernization.",
    ],
    recommendedServices: [
      { title: "Web & Custom Development", href: "/services/web-development" },
      { title: "Business Automation & AI", href: "/services/business-automation" },
      { title: "Digital Marketing & Growth", href: "/services/digital-marketing" },
    ],
  },
];
