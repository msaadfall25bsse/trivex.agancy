export interface FounderData {
  id: string;
  slug: string;
  name: string;
  role: string;
  initials: string;
  shortBio: string;
  fullBio: string;
  status: "verified" | "pending_input";
  verifiedPracticeAreas: string[];
  technicalCompetencies: string[];
  philosophies: string[];
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    email?: string;
  };
  missingDetails: string[];
}

export const FOUNDERS: Record<string, FounderData> = {
  "muhammad-saad": {
    id: "muhammad-saad",
    slug: "muhammad-saad",
    name: "Muhammad Saad",
    role: "Founding Partner",
    initials: "MS",
    shortBio:
      "Founding Partner at TRIVEX Agency, steering digital technology strategy, engineering architecture, and scalable software solutions for international clients.",
    fullBio:
      "Muhammad Saad is one of the three founding partners of TRIVEX Agency. With a rigorous focus on software architecture, clean system design, and high-velocity digital execution, Saad collaborates directly with clients across North America, Europe, and the Middle East to engineer resilient, modern web and mobile ecosystems.",
    status: "verified",
    verifiedPracticeAreas: [
      "Full-Stack Web Architecture",
      "Cloud Infrastructure & Deployment",
      "API & Microservice Design",
      "Enterprise Solution Engineering",
    ],
    technicalCompetencies: [
      "Next.js / React 19",
      "TypeScript",
      "Node.js & Python",
      "Cloud Architecture (AWS / GCP)",
      "Database Systems (PostgreSQL / Redis)",
    ],
    philosophies: [
      "Clean, modular architectures designed for long-term maintainability over quick patches.",
      "Direct technical practitioner communication without non-technical account management friction.",
      "100% client intellectual property ownership from the first line of code.",
    ],
    socialLinks: {
      github: "https://github.com/msaadfall25bsse",
      email: "contact@trivex.group",
    },
    missingDetails: [
      "Official executive title (e.g. CEO, CTO, etc.)",
      "High-resolution profile photograph",
      "Specific prior enterprise employment history",
      "Academic degrees & institution credentials",
      "Personal LinkedIn & portfolio URL",
    ],
  },
  "sardar-samiullah": {
    id: "sardar-samiullah",
    slug: "sardar-samiullah",
    name: "Sardar Samiullah",
    role: "Founding Partner",
    initials: "SS",
    shortBio:
      "Founding Partner at TRIVEX Agency, directing digital product strategy, client delivery operations, and performance-driven technology implementations.",
    fullBio:
      "Sardar Samiullah is one of the three founding partners of TRIVEX Agency. Samiullah champions high-precision client delivery, ensuring every software release, marketing workflow, and user interface aligns tightly with measurable commercial outcomes, robust quality assurance, and dependable sprint velocity.",
    status: "verified",
    verifiedPracticeAreas: [
      "Product Strategy & Delivery Operations",
      "Mobile & Web Applications",
      "Performance Optimization & CRO",
      "E-Commerce & Digital Commerce Systems",
    ],
    technicalCompetencies: [
      "Modern Web Applications",
      "Cross-Platform Mobile Ecosystems",
      "Sprint Management & Agile Delivery",
      "Conversion Rate Optimization (CRO)",
      "Automated Testing & Quality Assurance",
    ],
    philosophies: [
      "Engineering velocity is meaningless without commercial impact and user retention.",
      "Relentless focus on performance, sub-second page speeds, and flawless mobile experiences.",
      "Transparent sprint visibility with weekly staging releases.",
    ],
    socialLinks: {
      email: "contact@trivex.group",
    },
    missingDetails: [
      "Official executive title (e.g. COO, Head of Product, etc.)",
      "High-resolution profile photograph",
      "Specific prior enterprise employment history",
      "Academic degrees & institution credentials",
      "Personal LinkedIn & GitHub URL",
    ],
  },
  "shafaq-ejaz": {
    id: "shafaq-ejaz",
    slug: "shafaq-ejaz",
    name: "Shafaq Ejaz",
    role: "Founding Partner",
    initials: "SE",
    shortBio:
      "Founding Partner at TRIVEX Agency, driving creative brand direction, digital user experience (UI/UX), and cross-functional product design.",
    fullBio:
      "Shafaq Ejaz is one of the three founding partners of TRIVEX Agency. Shafaq bridges the critical gap between engineering complexity and intuitive human experience, establishing cohesive visual identities, responsive design systems, and engaging digital interactions that convert visitors into enduring brand advocates.",
    status: "verified",
    verifiedPracticeAreas: [
      "UI/UX & Product Design Systems",
      "Creative & Visual Brand Strategy",
      "Interactive Digital Experiences",
      "Content & Conversion Architecture",
    ],
    technicalCompetencies: [
      "Design Systems & Token Architecture",
      "Figma UI/UX Prototyping",
      "Responsive Adaptive Design",
      "Motion UI & Interaction Design",
      "Brand Identity & Creative Direction",
    ],
    philosophies: [
      "Exceptional design is functional clarity, accessible hierarchy, and purposeful aesthetics.",
      "Design and engineering must be seamlessly unified from the discovery phase.",
      "User trust is built through consistency, speed, and polished visual craftsmanship.",
    ],
    socialLinks: {
      email: "contact@trivex.group",
    },
    missingDetails: [
      "Official executive title (e.g. Head of Design, Creative Director, etc.)",
      "High-resolution profile photograph",
      "Specific prior enterprise employment history",
      "Academic degrees & institution credentials",
      "Personal LinkedIn & portfolio URL",
    ],
  },
};

export const FOUNDERS_LIST = Object.values(FOUNDERS);
