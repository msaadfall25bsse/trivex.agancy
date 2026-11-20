"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { Icon } from "@/components/ui/Icon";

interface CaseStudy {
  id: string;
  category: "Web Apps" | "Mobile" | "E-commerce" | "AI Systems";
  badge: string;
  statBadge: string;
  client: string;
  title: string;
  description: string;
  meta: string;
  image: string;
  alt: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "italo-milan",
    category: "E-commerce",
    badge: "SHOPIFY PLUS • HEADLESS",
    statBadge: "+140% CONVERSION LIFT",
    client: "ITALO MILAN // LUXURY E-COMMERCE",
    title: "High-Conversion Global Store Scaling & Multi-Currency Engine",
    description:
      "Re-engineered the global digital flagship store from monolithic legacy systems to headless Shopify with 98 Lighthouse performance score, sub-second checkout, and international fulfillment synchronizers.",
    meta: "Deployment: 10 Weeks",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB7lsEg31e7OMSppgyqtYpLY1SKTeO6MN6mkHGucq070Su4F6VV-7byNGNAIQPlBzd0QAHVZI2XiRXOMxjvXKdGV7s-Mi900EBL6LeAFsQSkaEV2JTbY5drHRdcpSCtkg-v5LOpbmnPnY3o11nW1MhJSK9ex6EjKl-NA9qLT2_ZnjdBZ_5gayIRjHcN04dj_5xAutZcPRXvWnh4uQCOXnfCHAOkzAvdNieXoWwEBus",
    alt: "High-fashion modern minimalist luxury apparel website",
  },
  {
    id: "vanlock",
    category: "Web Apps",
    badge: "WEB APP • IOT PLATFORM",
    statBadge: "45,000+ ACTIVE VEHICLES",
    client: "VANLOCK SECURITY // TELEMATICS & IOT",
    title: "Commercial Fleet Lock Security & Instant Booking Portal",
    description:
      "Architected an end-to-end commercial fleet security portal with IoT hardware synchronization, digital service bookings, and dispatch logistics for UK commercial transport operators.",
    meta: "Tech: Next.js, Node.js, AWS IoT",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRhi3INl7nIl5tWWj7Hm2ZNlV2E40u11cbL-SIEyD5Kz4n4kfKayHyOms-D2FmMArlLIso8RDSQwZ-24rByLXNksvwZcAqqOzE3OpgvCyoOdakRJGw0lJGOfO2-l3hdbx2GnY75-zm4J6C4YA_L-ZOEp1jdcjXXFr265wbVTbKHMO7KsUZ9aoboDx68KD1vIJtofYyCwCfXAKtB1YILm1FchSPokGzxBcVs1kjX94",
    alt: "Futuristic fleet management and commercial vehicle security platform",
  },
  {
    id: "rukan-albait",
    category: "Web Apps",
    badge: "NEXT.JS • 3D IMMERSIVE",
    statBadge: "$82M+ PIPELINE INVENTORY",
    client: "RUKAN ALBAIT // REAL ESTATE PORTFOLIO",
    title: "Modern Architectural Development & Property Platform",
    description:
      "Crafted a high-elegance real estate ecosystem for premier Middle Eastern developments featuring 3D floor plan walk-throughs, buyer CRM integrations, and multi-language support (AR/EN).",
    meta: "Impact: 3.4x Inbound Lead Velocity",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA0XHSbXSBMBEcSdv_DzO-DwVs8sDjBJVkzGVitO_3pOllDdG0jhKdr9XWBdsFprbRvaI_adewmzB_buO2lsgpb2n8j0CZlq_tjJRteIaM9OlHb97AP-B6nYpnFnazqr7jmG-n0Mgxd1E5JHApvW4tayMPdePKW4uJ0in4s-TFX0evw50uQZ7brp7lrCVh-kZPgCcR4oyagYbRMgp7R64jMb0Phc2JNO4eet5OaxoA",
    alt: "Ultra-luxury architectural engineering web platform",
  },
  {
    id: "black-sea-limo",
    category: "Mobile",
    badge: "FLUTTER • STRIPE • REALTIME",
    statBadge: "99.98% DISPATCH UPTIME",
    client: "BLACK SEA LIMO // MOBILITY PLATFORM",
    title: "VIP Executive Chauffeur & Airport Dispatch Booking Engine",
    description:
      "Delivered dual mobile applications (Passenger & Chauffeur) with automated dynamic pricing, Stripe payment split escrows, flight telemetry synchronization, and GPS turn-by-turn routing.",
    meta: "Platform: iOS, Android, Dispatch Web",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAeTyYYDCH5-3aM2oeABk9K2Re6bJ0tzM1cj57Qpxrpq5xfay0RFgNUiFD25Vea9IXYKX0Dg8eooP2r8OxvguDTlEuPrTmmLmUqZyhT4r8jfICfvY95nrjhSOZBIDkIgFZ5ZyWB43hen9rGSzhQnS3vTjNiDAKNhwGr9U54g_wWMe2UtHd2ZXY7aIDF2uXG4Tz6R6_H4tmqmDqYRWG01QoKHWHKUBuJoNYOulr1PV4",
    alt: "Luxury executive black limousine mobile app interface",
  },
];

const FILTERS = ["All Work", "Web Apps", "Mobile", "E-commerce", "AI Systems"];

export function CaseStudiesSection() {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState<string>("All Work");

  const filteredCaseStudies =
    activeFilter === "All Work"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) => cs.category === activeFilter);

  return (
    <section
      id="case-studies"
      className="w-full px-margin py-space-xl transition-colors bg-transparent"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Title & Dynamic Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs">
            <span
              className="font-label-sm text-label-sm font-semibold uppercase tracking-widest"
              style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
            >
              Proven Measurable ROI
            </span>
            <h2
              className="font-display text-display uppercase tracking-tight"
              style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
            >
              Featured Case Studies
            </h2>
          </div>

          {/* Interactive Filter Strip */}
          <div
            className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl glass-pill"
            id="case-study-filters"
          >
            {FILTERS.map((f) => {
              const isActive = activeFilter === f;
              return (
                <button
                  key={f}
                  className="px-3.5 py-1.5 rounded font-label-sm text-label-sm transition-all focus:outline-none"
                  style={{
                    backgroundColor: isActive
                      ? theme === "dark"
                        ? "#00D2FF"
                        : "#ffffff"
                      : "transparent",
                    color: isActive
                      ? theme === "dark"
                        ? "#080B10"
                        : "#005baf"
                      : theme === "dark"
                      ? "#94A3B8"
                      : "#404754",
                    fontWeight: isActive ? 600 : 400,
                    boxShadow: isActive ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
                  }}
                  type="button"
                  onClick={() => setActiveFilter(f)}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4 Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {filteredCaseStudies.map((cs) => (
            <div
              key={cs.id}
              className="rounded-3xl overflow-hidden glass-panel glass-panel-interactive flex flex-col justify-between"
            >
              <div
                className="relative h-64 w-full overflow-hidden"
                style={{ backgroundColor: theme === "dark" ? "#141B26" : "#eff4ff" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={cs.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  src={cs.image}
                />
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded backdrop-blur font-label-sm text-label-sm font-bold"
                  style={{
                    backgroundColor:
                      theme === "dark" ? "rgba(15, 20, 28, 0.85)" : "rgba(255, 255, 255, 0.9)",
                    color: theme === "dark" ? "#00D2FF" : "#005baf",
                    border:
                      theme === "dark"
                        ? "1px solid rgba(0, 210, 255, 0.3)"
                        : "1px solid rgba(0, 91, 175, 0.2)",
                  }}
                >
                  {cs.badge}
                </div>
                <div
                  className="absolute bottom-4 right-4 px-3 py-1 rounded font-label-sm text-label-sm font-bold shadow-sm"
                  style={{
                    backgroundColor:
                      theme === "dark" ? "rgba(15, 20, 28, 0.9)" : "rgba(255, 255, 255, 0.95)",
                    color: "#10B981",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                  }}
                >
                  {cs.statBadge}
                </div>
              </div>

              <div className="p-space-lg flex flex-col gap-space-sm flex-1 justify-between">
                <div className="flex flex-col gap-space-xs">
                  <span
                    className="font-label-sm text-label-sm font-mono"
                    style={{ color: theme === "dark" ? "#94A3B8" : "#64748B" }}
                  >
                    {cs.client}
                  </span>
                  <h3
                    className="font-headline-md text-headline-md"
                    style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
                  >
                    {cs.title}
                  </h3>
                  <p
                    className="font-body-sm text-body-sm leading-relaxed"
                    style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
                  >
                    {cs.description}
                  </p>
                </div>
                <div
                  className="pt-space-sm flex items-center justify-between border-t mt-space-sm"
                  style={{ borderColor: theme === "dark" ? "#1E2633" : "#e2e8f0" }}
                >
                  <span
                    className="font-label-sm text-label-sm font-mono"
                    style={{ color: theme === "dark" ? "#94A3B8" : "#64748B" }}
                  >
                    {cs.meta}
                  </span>
                  <Link
                    className="font-label-sm text-label-sm font-bold flex items-center gap-1 hover:underline"
                    href="/work"
                    style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
                  >
                    <span>View Case Study</span>
                    <Icon name="arrow_forward" className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Work Link */}
        <div className="flex justify-center pt-2">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm font-mono transition-all hover:brightness-110 shadow-md"
            style={{
              backgroundColor: theme === "dark" ? "#00D2FF" : "#0088FF",
              color: theme === "dark" ? "#000000" : "#ffffff",
            }}
          >
            <span>Explore All Projects &amp; Case Studies</span>
            <Icon name="arrow_forward" className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesSection;
