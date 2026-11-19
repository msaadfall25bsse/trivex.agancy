import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import {
  HeroSection,
  PartnersSection,
  AboutSection,
  ServicesSection,
  CaseStudiesSection,
  ProcessSection,
  HomeIndustriesSection,
  TalentSection,
  TechStackSection,
  HomeFaqSection,
  ConsultationSection,
} from "@/components/home";

export const metadata: Metadata = constructMetadata({
  title: "TRIVEX | We Build, Market & Scale Digital Businesses",
  description:
    "Full-service digital growth, technology & creative agency. From performance marketing & e-commerce to full-stack web apps, mobile platforms, and AI enterprise automation.",
  pathname: "/",
});

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO & CORE AGENCY VALUE PROPOSITION */}
      <HeroSection />

      {/* 2. VERIFIED PLATFORM & ECOSYSTEM STACK */}
      <PartnersSection />

      {/* 3. ABOUT & STRATEGIC VALUE ARCHITECTURE */}
      <AboutSection />

      {/* 4. 8 CORE SERVICES CAPABILITY MATRIX */}
      <ServicesSection />

      {/* 5. FEATURED WORK & CASE STUDIES */}
      <CaseStudiesSection />

      {/* 6. 4-STAGE METHODOLOGY & EXECUTION */}
      <ProcessSection />

      {/* 7. INDUSTRY SPECIALIZATIONS */}
      <HomeIndustriesSection />

      {/* 8. TALENT & CROSS-FUNCTIONAL SQUADS */}
      <TalentSection />

      {/* 9. TECHNICAL STACK & MODERN FRAMEWORKS */}
      <TechStackSection />

      {/* 10. FREQUENTLY ASKED QUESTIONS */}
      <HomeFaqSection />

      {/* 11. GLOBAL HUBS & STRATEGIC CONSULTATION INQUIRY */}
      <ConsultationSection />
    </div>
  );
}
