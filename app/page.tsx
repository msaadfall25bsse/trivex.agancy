import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { TalentSection } from "@/components/sections/TalentSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ConsultationSection } from "@/components/sections/ConsultationSection";

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
