import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import {
  HeroSection,
  PartnersSection,
  AboutSection,
  ServicesSection,
  CaseStudiesSection,
  TalentSection,
  ProcessSection,
  TechStackSection,
  ConsultationSection,
} from "@/components/home";

export const metadata: Metadata = constructMetadata({
  title: "High-Velocity Enterprise Engineering & AI Platforms",
  description:
    "We build, market & scale world-class digital businesses. From performance marketing & e-commerce to full-stack web apps, mobile platforms, and AI enterprise automation.",
  pathname: "/",
});

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO & CORE ENGINE METRICS */}
      <HeroSection />

      {/* SECTION 2: TRUSTED CLOUD & ECOSYSTEM PARTNERS */}
      <PartnersSection />

      {/* SECTION 3: ABOUT & STRUCTURAL VALUE ARCHITECTURE */}
      <AboutSection />

      {/* SECTION 4: 8 CAPABILITY SERVICE CARDS */}
      <ServicesSection />

      {/* SECTION 5: FEATURED WORK / CASE STUDIES */}
      <CaseStudiesSection />

      {/* SECTION 6: GLOBAL ENGINEERING TALENT & ELASTIC STAFFING */}
      <TalentSection />

      {/* SECTION 7: 6-STEP EXECUTION LIFECYCLE */}
      <ProcessSection />

      {/* SECTION 8: TECHNICAL STACK MATRIX */}
      <TechStackSection />

      {/* SECTION 9: GLOBAL HUBS & TECHNICAL CONSULTATION FORM */}
      <ConsultationSection />
    </div>
  );
}
