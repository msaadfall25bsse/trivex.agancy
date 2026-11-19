export interface FaqItem {
  question: string;
  answer: string;
  category: "General" | "Services" | "Development" | "Process & Pricing";
}

export const AGENCY_FAQS: FaqItem[] = [
  {
    question: "What services does TRIVEX provide?",
    answer:
      "TRIVEX is a full-service digital growth and technology agency. We provide end-to-end solutions across four core pillars: Performance Marketing & Paid Advertising, Web & Custom Software Engineering (Next.js, React, WordPress, Shopify), Mobile Application Development (iOS & Android), and Creative Production (Brand Identity, UI/UX Design, and Video Production).",
    category: "General",
  },
  {
    question: "Who can work with your agency?",
    answer:
      "We partner with ambitious startups, growing e-commerce brands, established mid-market enterprises, and local service providers seeking measurable growth. Whether you need a completely new digital product engineered from scratch or a high-velocity marketing engine to scale revenue, we tailor our collaboration model to your stage.",
    category: "General",
  },
  {
    question: "Do you develop WordPress and custom websites?",
    answer:
      "Yes, we build both. For marketing teams desiring an easy-to-edit CMS, we engineer bespoke, bloat-free WordPress themes with modular Gutenberg blocks and zero template clutter. For complex applications, portals, and high-performance platforms, we build modern full-stack web applications using Next.js, React, TypeScript, and cloud databases.",
    category: "Development",
  },
  {
    question: "Can you develop mobile applications?",
    answer:
      "Yes, we design and build cross-platform mobile apps for iOS and Android using modern frameworks like Flutter and React Native. This enables native touch performance, beautiful interfaces, and offline-first capabilities while maintaining a unified codebase that saves our clients time and maintenance costs.",
    category: "Development",
  },
  {
    question: "How does your project process work?",
    answer:
      "We operate on a transparent 4-stage delivery lifecycle: 1) Discover (defining requirements and business goals), 2) Strategise (wireframes, architecture blueprints, and sprint planning), 3) Create & Build (iterative development with staging visibility), and 4) Launch & Improve (rigorous QA, smooth deployment, and ongoing optimization).",
    category: "Process & Pricing",
  },
  {
    question: "How can I request a consultation?",
    answer:
      "You can request an architectural strategy consultation directly through our Contact page or by emailing contact@trivex.group. A senior technical director will review your project scope and follow up with a tailored assessment within 24 hours.",
    category: "Process & Pricing",
  },
  {
    question: "Do I own 100% of the code and assets upon completion?",
    answer:
      "Yes, absolutely. Once deliverables are finalized and paid for, you retain complete intellectual property and source code ownership. We transfer all Git repositories, design files, and production assets directly to your team with zero vendor lock-in.",
    category: "General",
  },
  {
    question: "How do you price your engagements?",
    answer:
      "We offer transparent, outcome-oriented pricing models depending on project scope: Fixed-Price Turnkey Projects for clearly scoped deliverables, Dedicated Agile Pods / Monthly Retainers for continuous software engineering or performance marketing, and Strategic Advisory for architecture reviews.",
    category: "Process & Pricing",
  },
];
