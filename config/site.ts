export const siteConfig = {
  name: "TRIVEX | Global Enterprise Engineering",
  shortName: "TRIVEX",
  tagline: "Three Minds. One Vision.",
  description:
    "High-velocity engineering and global technology consultancy accelerating enterprise platforms, AI infrastructure, and mission-critical cloud solutions.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://trivex.agency",
  ogImage: "https://trivex.agency/og-image.jpg",
  creator: "TRIVEX Global Technology Group",
  keywords: [
    "Enterprise Software Engineering",
    "Generative AI & LLM Systems",
    "High-Performance Cloud Architecture",
    "Full-Stack Web App Development",
    "Next.js 15 & React 19",
    "Mobile App Engineering Flutter",
    "Headless Shopify Plus",
    "DevSecOps & Platform Automation",
    "Dedicated Engineering Squads",
    "TRIVEX Global",
  ],
  links: {
    twitter: "https://twitter.com/trivexagency",
    github: "https://github.com/msaadfall25bsse/trivex.agancy",
    linkedin: "https://linkedin.com/company/trivex-global",
  },
  contact: {
    email: "contact@trivex.group",
    infoEmail: "info@trivex.agency",
    phone: "+1 (800) 874-8390",
    certifications: "ISO 27001 & SOC 2 TYPE II CERTIFIED",
  },
  hubs: [
    { country: "United States", location: "Sacramento & San Francisco Tech Corridor", tz: "PST / EST" },
    { country: "United Kingdom", location: "London Tech Square Delivery Studio", tz: "GMT / BST" },
    { country: "United Arab Emirates", location: "Dubai Internet City & Sharjah Tech District", tz: "GST (UTC+4)" },
    { country: "Nordics Hub", location: "Stockholm Engineering Studio, Sweden", tz: "CET" },
    { country: "Delivery Center", location: "Abbottabad & Islamabad Innovation Labs", tz: "PKT (UTC+5)" },
  ],
};

export type SiteConfig = typeof siteConfig;
