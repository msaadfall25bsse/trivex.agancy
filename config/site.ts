export const siteConfig = {
  name: "TRIVEX | Digital Growth & Technology Agency",
  shortName: "TRIVEX",
  tagline: "We Build, Market & Scale Digital Businesses.",
  description:
    "Full-service digital growth, software engineering, and creative technology agency. Three founding partners, one unified operating model for international clients.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://trivex-agancy.vercel.app",
  ogImage: "https://trivex-agancy.vercel.app/logo-dark.png",
  creator: "TRIVEX Agency",
  founders: ["Muhammad Saad", "Sardar Samiullah", "Shafaq Ejaz"],
  keywords: [
    "Digital Growth Agency",
    "Performance Marketing & Paid Ads",
    "Custom Website Development",
    "WordPress Development",
    "Next.js Development",
    "Mobile App Development Flutter",
    "E-commerce Store Solutions",
    "UI/UX & Product Design",
    "Creative Video Production",
    "SEO & Organic Visibility",
    "Business Automation Solutions",
    "TRIVEX Agency",
  ],
  links: {
    twitter: "https://twitter.com",
    github: "https://github.com/msaadfall25bsse/trivex.agancy",
    linkedin: "https://linkedin.com",
  },
  contact: {
    email: "contact@trivex.group",
    responseCommitment: "Consultation response within 24 business hours",
  },
};

export type SiteConfig = typeof siteConfig;
