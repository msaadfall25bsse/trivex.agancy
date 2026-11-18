"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

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

export default function Home() {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState<string>("All Work");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const filteredCaseStudies =
    activeFilter === "All Work"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) => cs.category === activeFilter);

  return (
    <div className="flex flex-col w-full">
      {/* ======================================================== */}
      {/* SECTION 1: HERO & CORE ENGINE METRICS                     */}
      {/* ======================================================== */}
      <section className="relative w-full px-margin py-space-xl overflow-hidden bg-surface">
        {/* Background Graphic with Gradient Fade */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Futuristic tech agency office studio"
            className="absolute right-0 top-0 h-full w-full lg:w-3/5 object-cover object-center"
            style={{ opacity: 0.92, filter: "contrast(1.05) brightness(1.02)" }}
            src="https://lh3.googleusercontent.com/aida/ALJJyrBzx4Y8noL01zqp5PYB66KSR1tjqH5ijNXJUsXiEyppbVMuMtGQW_DEkYKsXbe6YXt67YIdtcw20eKIt1KIJCY9qyiwMIg2mm3PhaCJtcsVmZbhBiregWNnmsu9mUp8dHPPn61SHrXXfjntBV7rEOtgKL3FQOM1KiXbRGqwv7ZU1RY6gPQCXDngrXeUqMgyk8MwNvsgbwW0SEpzZHvpPNj5i94GBD_aT6cVSHjhY4z5"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                theme === "dark"
                  ? "linear-gradient(to right, rgb(8, 11, 16) 0%, rgb(8, 11, 16) 38%, rgba(8, 11, 16) 0.75) 55%, rgba(8, 11, 16) 0.2) 75%, transparent 92%)"
                  : "linear-gradient(to right, rgba(248, 249, 255, 0.95) 0%, rgba(248, 249, 255, 0.9) 38%, rgba(248, 249, 255, 0.75) 55%, rgba(248, 249, 255, 0.3) 75%, transparent 92%)",
            }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-transparent to-transparent pointer-events-none"
            style={{ height: "100%", opacity: theme === "dark" ? 0.7 : 0.2 }}
          />
          <div
            className="absolute -top-32 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(0, 210, 255, 0.18) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-space-xl">
          {/* Top Tagline & Status Pill */}
          <div className="flex flex-wrap items-center justify-between gap-space-md">
            <div
              className="inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-full shadow-sm"
              style={{
                backgroundColor: theme === "dark" ? "#141B26" : "#f1f5f9",
                border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
                color: theme === "dark" ? "#00D2FF" : "#005baf",
              }}
            >
              <span
                className="inline-block w-2 h-2 rounded-full animate-pulse"
                style={{
                  backgroundColor: theme === "dark" ? "#00D2FF" : "#005baf",
                  boxShadow: theme === "dark" ? "0 0 8px #00D2FF" : "0 0 8px #005baf",
                }}
              />
              <span className="font-label-md text-label-md uppercase tracking-wider font-semibold">
                ⚡ Next-Gen Digital Growth &amp; Technology Partner
              </span>
            </div>
            <div
              className="flex items-center gap-space-sm font-label-sm text-label-sm px-3 py-1 rounded shadow-sm"
              style={{
                backgroundColor: theme === "dark" ? "#0F141C" : "#f8fafc",
                border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
                color: theme === "dark" ? "#94A3B8" : "#64748B",
              }}
            >
              <span
                className="font-mono font-semibold"
                style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
              >
                DEPLOYED GLOBAL NODES:
              </span>
              <span style={{ color: theme === "dark" ? "#FFFFFF" : "#0f172a" }}>
                US • UK • UAE • SE • PK
              </span>
            </div>
          </div>

          {/* Main Asymmetric Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            {/* Left: Hero Headline & Narrative */}
            <div className="lg:col-span-7 flex flex-col gap-space-lg">
              <h1
                className="font-display text-display uppercase tracking-tight"
                style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
              >
                We build, market &amp; scale{" "}
                <span className="bg-gradient-to-r from-[#00D2FF] to-[#84c7ff] bg-clip-text text-transparent">
                  world-class digital
                </span>{" "}
                businesses.
              </h1>
              <p
                className="font-body-lg text-body-lg max-w-2xl leading-relaxed"
                style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
              >
                From performance marketing, e-commerce, and high-conversion creative to custom web
                applications, mobile platforms, and AI enterprise automation—we unite strategy,
                engineering, and digital growth under one roof.
              </p>
              {/* Dual CTA */}
              <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                <Link
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded font-label-lg text-label-lg font-medium shadow-md transition-all"
                  data-path="book-consultation"
                  href="#book-consultation"
                  style={{
                    backgroundColor: "#00D2FF",
                    color: "#080B10",
                    boxShadow: "0 4px 14px rgba(0, 210, 255, 0.3)",
                  }}
                >
                  <span>Book a Free Consultation</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
                <Link
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded font-label-lg text-label-lg font-medium transition-all hover:border-[#00D2FF] hover:text-[#00D2FF]"
                  href="#services-matrix"
                  style={{
                    backgroundColor: theme === "dark" ? "#141B26" : "#f1f5f9",
                    border: theme === "dark" ? "1px solid #1E2633" : "1px solid #cbd5e1",
                    color: theme === "dark" ? "#FFFFFF" : "#0b1c30",
                  }}
                >
                  <span>Explore Capabilities</span>
                  <span className="material-symbols-outlined text-base">terminal</span>
                </Link>
              </div>
              {/* Quick Proof Chips */}
              <div className="pt-space-md flex flex-wrap items-center gap-space-sm">
                <span className="font-label-sm text-label-sm" style={{ color: "#64748B" }}>
                  TRUSTED INFRASTRUCTURE:
                </span>
                {["ISO 27001", "SOC 2 Type II", "GDPR Compliant", "Zero Fluff Architecture"].map(
                  (chip) => (
                    <span
                      key={chip}
                      className="px-2.5 py-1 rounded font-label-sm text-label-sm"
                      style={{
                        backgroundColor: theme === "dark" ? "#141B26" : "#f1f5f9",
                        border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
                        color: theme === "dark" ? "#94A3B8" : "#475569",
                      }}
                    >
                      {chip}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Right: Telemetry & Studio Banner Console */}
            <div className="lg:col-span-5 flex flex-col gap-space-md">
              {/* Live Telemetry Card */}
              <div
                className="p-space-lg rounded-xl shadow-md flex flex-col gap-space-md"
                style={{
                  backgroundColor: theme === "dark" ? "#0F141C" : "#ffffff",
                  border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span
                      className="font-label-md text-label-md font-bold"
                      style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
                    >
                      CORE-ENGINE V4.8 - ONLINE
                    </span>
                  </div>
                  <span
                    className="px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold"
                    style={{
                      backgroundColor: "rgba(0, 210, 255, 0.12)",
                      color: "#00D2FF",
                      border: "1px solid rgba(0, 210, 255, 0.25)",
                    }}
                  >
                    99.4% SLA
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-space-md py-space-xs">
                  <div
                    className="p-space-sm rounded"
                    style={{
                      backgroundColor: theme === "dark" ? "#141B26" : "#f8fafc",
                      border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
                    }}
                  >
                    <span className="font-label-sm text-label-sm block" style={{ color: "#64748B" }}>
                      ACTIVE PODS
                    </span>
                    <span
                      className="font-headline-md text-headline-md font-bold"
                      style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
                    >
                      14 SQUADS
                    </span>
                    <span
                      className="font-label-sm text-label-sm block mt-0.5"
                      style={{ color: "#00D2FF" }}
                    >
                      Global Allocation
                    </span>
                  </div>
                  <div
                    className="p-space-sm rounded"
                    style={{
                      backgroundColor: theme === "dark" ? "#141B26" : "#f8fafc",
                      border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
                    }}
                  >
                    <span className="font-label-sm text-label-sm block" style={{ color: "#64748B" }}>
                      ON-TIME SHIP RATE
                    </span>
                    <span
                      className="font-headline-md text-headline-md font-bold"
                      style={{ color: "#00D2FF" }}
                    >
                      99.4%
                    </span>
                    <span
                      className="font-label-sm text-label-sm block mt-0.5"
                      style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
                    >
                      350+ Releases
                    </span>
                  </div>
                </div>
                {/* Inline SVG Sparkline */}
                <div
                  className="p-space-sm rounded flex flex-col gap-1"
                  style={{
                    backgroundColor: theme === "dark" ? "#141B26" : "#f8fafc",
                    border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
                  }}
                >
                  <div
                    className="flex justify-between items-center font-label-sm text-label-sm"
                    style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
                  >
                    <span>MONTHLY SYSTEM VELOCITY</span>
                    <span className="font-bold" style={{ color: "#00D2FF" }}>
                      +142.8% YoY
                    </span>
                  </div>
                  <svg className="w-full h-12" fill="none" style={{ color: "#00D2FF" }} viewBox="0 0 300 48">
                    <path
                      d="M0 36 L30 32 L60 38 L90 24 L120 28 L150 16 L180 20 L210 10 L240 14 L270 4 L300 2"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M0 36 L30 32 L60 38 L90 24 L120 28 L150 16 L180 20 L210 10 L240 14 L270 4 L300 2 V 48 H 0 Z"
                      fill="currentColor"
                      fillOpacity="0.15"
                    />
                  </svg>
                </div>
                <div
                  className="flex items-center justify-between font-label-sm text-label-sm"
                  style={{ color: "#64748B" }}
                >
                  <span>Security: ISO 27001 &amp; SOC2 TYPE II</span>
                  <span className="font-mono font-medium" style={{ color: "#00D2FF" }}>
                    US • UK • UAE • SE • PK
                  </span>
                </div>
              </div>

              {/* Studio Photo Preview */}
              <div
                className="relative rounded-xl overflow-hidden shadow-sm h-48"
                style={{
                  backgroundColor: theme === "dark" ? "#141B26" : "#f1f5f9",
                  border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover"
                  alt="TRIVEX Global Delivery Network Studio"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpHUh43ZCgzSAe3oqp7WbAZKshntsivvCFLGmclgXvMzBa0O99tYLs9wh6Nw0kZcOlXcX01_iu-6FojUxGtB3DryxdTzoElIrjlVTCCn9kHsHJvscucVa9ng5LlnXGvQ6XqCuwYEgVC9rwp5qHMydw5O7wyoB1OS3de49p6e4OXBnZe43TEE6DI73NdQtOdSwwF_wFOXp9xQFunXTWqN6q9_DUB6gNTUWWrLqHRPA"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B10]/90 via-[#080B10]/30 to-transparent flex items-end p-space-md">
                  <p className="text-white font-label-md text-label-md">
                    TRIVEX Global Delivery Network // Central Engineering Room
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Core Key Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md pt-space-md">
            {[
              {
                label: "LOCATIONS",
                value: "05",
                desc: "Global Hubs in Key Tech Hubs",
                highlight: false,
              },
              {
                label: "TALENT NETWORK",
                value: "150+",
                desc: "Vetted Senior Engineers & Designers",
                highlight: true,
              },
              {
                label: "DELIVERY SPEED",
                value: "99.4%",
                desc: "On-Time Sprint Completion SLA",
                highlight: false,
              },
              {
                label: "ENTERPRISE SECURITY",
                value: "100%",
                desc: "SOC 2 Type II & ISO 27001 Protection",
                highlight: true,
              },
            ].map((metric) => (
              <div
                key={metric.label}
                className="p-space-lg rounded-xl shadow-sm flex flex-col justify-between"
                style={{
                  backgroundColor: theme === "dark" ? "#0F141C" : "#ffffff",
                  border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
                }}
              >
                <span className="font-label-sm text-label-sm" style={{ color: "#64748B" }}>
                  {metric.label}
                </span>
                <span
                  className="font-display text-display font-bold"
                  style={{
                    color: metric.highlight
                      ? "#00D2FF"
                      : theme === "dark"
                      ? "#FFFFFF"
                      : "#0b1c30",
                  }}
                >
                  {metric.value}
                </span>
                <span
                  className="font-body-sm text-body-sm"
                  style={{ color: theme === "dark" ? "#94A3B8" : "#64748B" }}
                >
                  {metric.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 2: TRUSTED CLOUD & ECOSYSTEM PARTNERS             */}
      {/* ======================================================== */}
      <section
        className="w-full px-margin py-space-lg"
        style={{
          backgroundColor: theme === "dark" ? "#0B0E14" : "#f1f5f9",
          borderTop: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
          borderBottom: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-space-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
            <span
              className="font-label-md text-label-md uppercase tracking-wider font-semibold"
              style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
            >
              Certified Ecosystem &amp; Cloud Partners
            </span>
            <span
              className="font-label-sm text-label-sm font-semibold"
              style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
            >
              TIER 1 PLATFORM INTEGRATIONS
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-space-sm">
            {[
              { icon: "cloud_queue", name: "AWS Partner" },
              { icon: "neurology", name: "OpenAI" },
              { icon: "shopping_cart", name: "Shopify Plus" },
              { icon: "payments", name: "Stripe Verified" },
              { icon: "public", name: "Google Cloud" },
              { icon: "ads_click", name: "Meta Business" },
              { icon: "terminal", name: "Vercel Enterprise" },
            ].map((partner) => (
              <div
                key={partner.name}
                className="p-4 rounded-xl shadow-sm flex flex-col items-center justify-center gap-1 hover:border-[#00D2FF] transition-all"
                style={{
                  backgroundColor: theme === "dark" ? "#0F141C" : "#ffffff",
                  border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
                }}
              >
                <span
                  className="material-symbols-outlined text-2xl"
                  style={{ color: theme === "dark" ? "#00D2FF" : "#0074db" }}
                >
                  {partner.icon}
                </span>
                <span
                  className="font-label-sm text-label-sm font-bold"
                  style={{ color: theme === "dark" ? "#FFFFFF" : "#0f172a" }}
                >
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 3: ABOUT & WHY CHOOSE US                          */}
      {/* ======================================================== */}
      <section
        id="about-us"
        className="w-full px-margin py-space-xl"
        style={{ backgroundColor: theme === "dark" ? "#080B10" : "#ffffff" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          {/* Section Header */}
          <div className="flex flex-col gap-space-xs max-w-3xl">
            <span
              className="font-label-sm text-label-sm font-semibold tracking-widest uppercase"
              style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
            >
              Engineered for Velocity
            </span>
            <h2
              className="font-display text-display"
              style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
            >
              Our Journey of Building Scalable Digital Success.
            </h2>
            <p
              className="font-body-lg text-body-lg leading-relaxed"
              style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
            >
              We began as an elite core of full-stack engineers and performance architects. Today,
              TRIVEX accelerates high-growth startups and established global enterprises through
              surgical execution, zero-waste infrastructure, and revenue-centric marketing.
            </p>
          </div>

          {/* 4 Core Pillars Strip */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {[
              {
                icon: "trending_up",
                title: "Growth & Performance",
                desc: "Omnichannel paid ad scaling, programmatic CRO, and predictive lifetime-value modeling.",
              },
              {
                icon: "code",
                title: "Engineering & Code",
                desc: "Distributed cloud microservices, reactive frontends, and rock-solid mobile applications.",
              },
              {
                icon: "palette",
                title: "Creative & Motion",
                desc: "Brand systems, high-converting motion design, 3D product visualization, and dynamic UGC.",
              },
              {
                icon: "psychology",
                title: "AI Business Automation",
                desc: "Custom LLM agents, automated enterprise pipelines, and bespoke intelligence nodes.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="p-space-lg rounded-xl shadow-sm hover:border-[#00D2FF] transition-all flex flex-col gap-space-sm"
                style={{
                  backgroundColor: theme === "dark" ? "#0F141C" : "#f8fafc",
                  border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
                }}
              >
                <div
                  className="w-10 h-10 rounded flex items-center justify-center"
                  style={{
                    backgroundColor: theme === "dark" ? "#141B26" : "#e0f2fe",
                    color: theme === "dark" ? "#00D2FF" : "#0074db",
                  }}
                >
                  <span className="material-symbols-outlined">{pillar.icon}</span>
                </div>
                <h3
                  className="font-headline-sm text-headline-sm"
                  style={{ color: theme === "dark" ? "#FFFFFF" : "#0f172a" }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="font-body-sm text-body-sm"
                  style={{ color: theme === "dark" ? "#94A3B8" : "#64748B" }}
                >
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 3 Structural Value Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
            {[
              {
                pillarNum: "01",
                title: "Global Delivery Excellence",
                desc: "Strategic presences across Sacramento (US), London (UK), Dubai (UAE), Stockholm (Sweden), anchored by high-velocity technical execution squads in Pakistan. Round-the-clock handover cycles.",
                meta: "CONTINUOUS 24/7 SPRINT CYCLE",
              },
              {
                pillarNum: "02",
                title: "Zero Fluff Real Code",
                desc: "We do not outsource to unverified freelancers. Every single line of code passes strict CI/CD linting, automated vulnerability scans, and code reviews led by Principal Staff Engineers.",
                meta: "100% TRANSPARENT GIT REPOSITORIES",
              },
              {
                pillarNum: "03",
                title: "Dedicated Agile Pods",
                desc: "Plug integrated cross-functional units—PM, UI/UX Designer, Lead Full-Stack, and QA Engineer—directly into your Slack and Jira environments in under 72 hours.",
                meta: "EMBEDDED OPERATING MODEL",
              },
            ].map((card) => (
              <div
                key={card.pillarNum}
                className="p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md justify-between"
                style={{
                  backgroundColor: theme === "dark" ? "#0B0E14" : "#f1f5f9",
                  border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
                }}
              >
                <div className="flex flex-col gap-space-sm">
                  <span
                    className="font-label-md text-label-md font-bold"
                    style={{ color: theme === "dark" ? "#00D2FF" : "#0074db" }}
                  >
                    PILLAR // {card.pillarNum}
                  </span>
                  <h4
                    className="font-headline-md text-headline-md"
                    style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
                  >
                    {card.title}
                  </h4>
                  <p
                    className="font-body-md text-body-md"
                    style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
                  >
                    {card.desc}
                  </p>
                </div>
                <div
                  className="font-label-sm text-label-sm font-mono font-semibold"
                  style={{ color: theme === "dark" ? "#00D2FF" : "#0074db" }}
                >
                  {card.meta}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 4: 8 CAPABILITY SERVICE CARDS                     */}
      {/* ======================================================== */}
      <section
        id="services-matrix"
        className="w-full px-margin py-space-xl"
        style={{
          backgroundColor: theme === "dark" ? "#0B0E14" : "#f8fafc",
          borderTop: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
          borderBottom: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span
                className="font-label-sm text-label-sm font-semibold uppercase tracking-widest"
                style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
              >
                Complete Technical Spectrum
              </span>
              <h2
                className="font-display text-display"
                style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
              >
                Full-Suite Digital Capabilities
              </h2>
              <p
                className="font-body-lg text-body-lg"
                style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
              >
                Modular engineering and growth blocks ready to build, launch, and compound
                enterprise market share.
              </p>
            </div>
            <Link
              className="font-label-lg text-label-lg font-semibold flex items-center gap-1 hover:underline"
              data-path="services"
              href="#services-matrix"
              style={{ color: theme === "dark" ? "#00D2FF" : "#0074db" }}
            >
              <span>View Detailed Spec Sheets</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>

          {/* 8 Bento Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {[
              {
                num: "01 // PLATFORMS",
                icon: "web",
                title: "Web Dev & Custom Platforms",
                items: [
                  "Next.js 15 & React Architecture",
                  "Enterprise Headless CMS",
                  "Micro-frontends & High Scale APIs",
                ],
                action: "Explore Service",
                href: "#services-matrix",
              },
              {
                num: "02 // MOBILE",
                icon: "smartphone",
                title: "Mobile App Engineering",
                items: [
                  "Native iOS (Swift) & Android (Kotlin)",
                  "Flutter Cross-Platform Mastery",
                  "Offline-First Sync & Low Latency",
                ],
                action: "Explore Service",
                href: "#services-matrix",
              },
              {
                num: "03 // COMMERCE",
                icon: "shopping_bag",
                title: "E-Commerce & Scaling",
                items: [
                  "Shopify Plus Custom Hydrogen",
                  "High-Volume Checkout Workflows",
                  "ERP & Fulfillment Sync Engines",
                ],
                action: "Explore Service",
                href: "#services-matrix",
              },
              {
                num: "04 // GROWTH",
                icon: "query_stats",
                title: "Digital Marketing & CRO",
                items: [
                  "Meta & Google Ads at Scale",
                  "Algorithmic SEO & Content Hubs",
                  "Multivariate Funnel Optimization",
                ],
                action: "Explore Service",
                href: "#services-matrix",
              },
              {
                num: "05 // INTELLIGENCE",
                icon: "smart_toy",
                title: "AI & Enterprise Automations",
                items: [
                  "LangChain, LlamaIndex & RAG",
                  "Autonomous Ops & RPA Bots",
                  "Computer Vision & OCR Pipelines",
                ],
                action: "Explore Service",
                href: "#services-matrix",
              },
              {
                num: "06 // EXPERIENCE",
                icon: "design_services",
                title: "UI/UX & Product Design",
                items: [
                  "Enterprise Design Systems",
                  "User Journey Mapping & Wireframes",
                  "High-Fidelity Interactive Prototypes",
                ],
                action: "Explore Service",
                href: "#services-matrix",
              },
              {
                num: "07 // CREATIVE",
                icon: "movie",
                title: "Creative Video & Branding",
                items: [
                  "AI-Enhanced UGC Ad Creatives",
                  "3D Motion Graphics & Spline",
                  "Visual Brand Identity Systems",
                ],
                action: "Explore Service",
                href: "#services-matrix",
              },
              {
                num: "08 // SQUADS",
                icon: "group_add",
                title: "Staff Augmentation & Pods",
                items: [
                  "Top 3% Screened Developers",
                  "Zero-Overhead Ramp in 48-72h",
                  "Fully Aligned to Time Zones",
                ],
                action: "Hire Developers",
                href: "#hire-developer",
              },
            ].map((svc) => (
              <div
                key={svc.num}
                className="p-space-lg rounded-xl shadow-sm hover:border-[#00D2FF] transition-all flex flex-col justify-between group"
                style={{
                  backgroundColor: theme === "dark" ? "#0F141C" : "#ffffff",
                  border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
                }}
              >
                <div className="flex flex-col gap-space-sm">
                  <div className="flex justify-between items-center">
                    <span
                      className="font-label-sm text-label-sm font-mono font-bold"
                      style={{ color: theme === "dark" ? "#00D2FF" : "#0074db" }}
                    >
                      {svc.num}
                    </span>
                    <span
                      className="material-symbols-outlined transition-colors"
                      style={{ color: "#94A3B8" }}
                    >
                      {svc.icon}
                    </span>
                  </div>
                  <h3
                    className="font-headline-sm text-headline-sm"
                    style={{ color: theme === "dark" ? "#FFFFFF" : "#0f172a" }}
                  >
                    {svc.title}
                  </h3>
                  <ul
                    className="space-y-1.5 font-body-sm text-body-sm"
                    style={{ color: theme === "dark" ? "#94A3B8" : "#64748B" }}
                  >
                    {svc.items.map((it) => (
                      <li key={it}>• {it}</li>
                    ))}
                  </ul>
                </div>
                <Link
                  className="pt-space-md font-label-md text-label-md font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  href={svc.href}
                  style={{ color: theme === "dark" ? "#00D2FF" : "#0074db" }}
                >
                  <span>{svc.action}</span>
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 5: FEATURED WORK / CASE STUDIES                   */}
      {/* ======================================================== */}
      <section
        id="case-studies"
        className="w-full px-margin py-space-xl"
        style={{ backgroundColor: theme === "dark" ? "#080B10" : "#ffffff" }}
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
                className="font-display text-display"
                style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
              >
                Featured Case Studies
              </h2>
            </div>
            {/* Interactive Filter Strip */}
            <div
              className="flex flex-wrap items-center gap-2 p-1.5 rounded-lg"
              id="case-study-filters"
              style={{
                backgroundColor: theme === "dark" ? "#0F141C" : "#f1f5f9",
                border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
              }}
            >
              {["All Work", "Web Apps", "Mobile", "E-commerce", "AI Systems"].map((tab) => {
                const isActive = activeFilter === tab;
                return (
                  <button
                    key={tab}
                    className="px-3.5 py-1.5 rounded font-label-sm text-label-sm font-semibold shadow-sm transition-all"
                    style={{
                      backgroundColor: isActive
                        ? "#00D2FF"
                        : "transparent",
                      color: isActive
                        ? "#080B10"
                        : theme === "dark"
                        ? "#94A3B8"
                        : "#64748B",
                    }}
                    type="button"
                    onClick={() => setActiveFilter(tab)}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Case Studies Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            {filteredCaseStudies.map((cs) => (
              <div
                key={cs.id}
                className="rounded-xl overflow-hidden shadow-sm hover:border-[#00D2FF] transition-all flex flex-col"
                style={{
                  backgroundColor: theme === "dark" ? "#0F141C" : "#f8fafc",
                  border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
                }}
              >
                <div className="relative h-64 w-full bg-slate-900 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="w-full h-full object-cover" alt={cs.alt} src={cs.image} />
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded backdrop-blur font-label-sm text-label-sm font-bold"
                    style={{
                      backgroundColor: "rgba(8, 11, 16, 0.85)",
                      border: "1px solid #1E2633",
                      color: "#00D2FF",
                    }}
                  >
                    {cs.badge}
                  </div>
                  <div
                    className="absolute bottom-4 right-4 px-3 py-1 rounded font-label-sm text-label-sm font-bold shadow-sm"
                    style={{
                      backgroundColor: "rgba(8, 11, 16, 0.9)",
                      border: "1px solid #1E2633",
                      color: "#10B981",
                    }}
                  >
                    {cs.statBadge}
                  </div>
                </div>
                <div className="p-space-lg flex flex-col gap-space-sm flex-1 justify-between">
                  <div className="flex flex-col gap-space-xs">
                    <span className="font-label-sm text-label-sm font-mono" style={{ color: "#64748B" }}>
                      {cs.client}
                    </span>
                    <h3
                      className="font-headline-md text-headline-md"
                      style={{ color: theme === "dark" ? "#FFFFFF" : "#0f172a" }}
                    >
                      {cs.title}
                    </h3>
                    <p
                      className="font-body-sm text-body-sm"
                      style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
                    >
                      {cs.description}
                    </p>
                  </div>
                  <div
                    className="pt-space-sm flex items-center justify-between border-t"
                    style={{ borderTopColor: theme === "dark" ? "#1E2633" : "#e2e8f0" }}
                  >
                    <span className="font-label-sm text-label-sm" style={{ color: "#64748B" }}>
                      {cs.meta}
                    </span>
                    <Link
                      className="font-label-md text-label-md font-semibold flex items-center gap-1 hover:underline"
                      data-path="case-studies"
                      href="#case-studies"
                      style={{ color: theme === "dark" ? "#00D2FF" : "#0074db" }}
                    >
                      <span>View Full Case Study</span>
                      <span className="material-symbols-outlined text-sm">north_east</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 6: STAFF AUGMENTATION & ENGINEERING TALENT        */}
      {/* ======================================================== */}
      <section
        id="hire-developer"
        className="w-full px-margin py-space-xl"
        style={{
          backgroundColor: theme === "dark" ? "#0B0E14" : "#f1f5f9",
          borderTop: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
          borderBottom: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          <div className="flex flex-col gap-space-xs max-w-3xl">
            <span
              className="font-label-sm text-label-sm font-semibold uppercase tracking-widest"
              style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
            >
              Flexible Scale Models
            </span>
            <h2
              className="font-display text-display"
              style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
            >
              Precision Talent on Demand
            </h2>
            <p
              className="font-body-lg text-body-lg"
              style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
            >
              Choose between dedicated embedded squads or fixed-scope outcome delivery.
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
            {/* Model A: Dedicated Team */}
            <div
              className="p-space-lg rounded-xl shadow-sm flex flex-col justify-between gap-space-md hover:border-[#00D2FF] transition-all"
              style={{
                backgroundColor: theme === "dark" ? "#0F141C" : "#ffffff",
                border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
              }}
            >
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span
                    className="px-3 py-1 rounded font-label-sm text-label-sm font-bold"
                    style={{
                      backgroundColor: "rgba(0, 210, 255, 0.12)",
                      color: "#00D2FF",
                      border: "1px solid rgba(0, 210, 255, 0.25)",
                    }}
                  >
                    RECOMMENDED FOR SCALE
                  </span>
                  <span className="font-label-md text-label-md font-mono" style={{ color: "#64748B" }}>
                    FLEXIBLE SPRINT
                  </span>
                </div>
                <h3
                  className="font-headline-md text-headline-md"
                  style={{ color: theme === "dark" ? "#FFFFFF" : "#0f172a" }}
                >
                  Dedicated Agile Engineering Squad
                </h3>
                <p
                  className="font-body-md text-body-md"
                  style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
                >
                  High-output product squads (Frontend, Backend, AI Engineer, QA, Lead PM) embedded
                  directly into your tools. Scale up or down with 30-day flexibility.
                </p>
                <ul
                  className="space-y-2 font-body-sm text-body-sm pt-2"
                  style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
                >
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base" style={{ color: "#00D2FF" }}>
                      check_circle
                    </span>
                    Direct Slack/Jira/Git integration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base" style={{ color: "#00D2FF" }}>
                      check_circle
                    </span>
                    Full IP transfer &amp; automated daily code pushes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base" style={{ color: "#00D2FF" }}>
                      check_circle
                    </span>
                    Overlapping working hours with US/UK/EU timezones
                  </li>
                </ul>
              </div>
              <Link
                className="inline-flex items-center justify-center px-6 py-3 rounded font-label-lg text-label-lg font-medium shadow-sm transition-all"
                data-path="hire-developer"
                href="#book-consultation"
                style={{ backgroundColor: "#00D2FF", color: "#080B10" }}
              >
                <span>Assemble Your Squad</span>
              </Link>
            </div>

            {/* Model B: Fixed Scope Project */}
            <div
              className="p-space-lg rounded-xl shadow-sm flex flex-col justify-between gap-space-md hover:border-[#00D2FF] transition-all"
              style={{
                backgroundColor: theme === "dark" ? "#0F141C" : "#ffffff",
                border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
              }}
            >
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span
                    className="px-3 py-1 rounded font-label-sm text-label-sm font-bold"
                    style={{
                      backgroundColor: theme === "dark" ? "#1E2633" : "#e2e8f0",
                      color: theme === "dark" ? "#FFFFFF" : "#0f172a",
                    }}
                  >
                    GUARANTEED OUTCOME
                  </span>
                  <span className="font-label-md text-label-md font-mono" style={{ color: "#64748B" }}>
                    MILESTONE TIERS
                  </span>
                </div>
                <h3
                  className="font-headline-md text-headline-md"
                  style={{ color: theme === "dark" ? "#FFFFFF" : "#0f172a" }}
                >
                  Fixed-Price Turnkey Project
                </h3>
                <p
                  className="font-body-md text-body-md"
                  style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
                >
                  Rigidly scoped deliverables with strict deadlines and pre-agreed financial
                  commitments. Ideal for MVPs, platform revamps, and isolated AI module deliveries.
                </p>
                <ul
                  className="space-y-2 font-body-sm text-body-sm pt-2"
                  style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
                >
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base" style={{ color: "#00D2FF" }}>
                      check_circle
                    </span>
                    Strict architecture documentation &amp; design sign-off
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base" style={{ color: "#00D2FF" }}>
                      check_circle
                    </span>
                    Zero budget creep guarantee
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base" style={{ color: "#00D2FF" }}>
                      check_circle
                    </span>
                    30-day post-launch warranty &amp; hyper-care SLA
                  </li>
                </ul>
              </div>
              <Link
                className="inline-flex items-center justify-center px-6 py-3 rounded font-label-lg text-label-lg font-medium shadow-sm transition-all hover:border-[#00D2FF]"
                data-path="book-consultation"
                href="#book-consultation"
                style={{
                  backgroundColor: theme === "dark" ? "#141B26" : "#f1f5f9",
                  border: theme === "dark" ? "1px solid #1E2633" : "1px solid #cbd5e1",
                  color: theme === "dark" ? "#FFFFFF" : "#0f172a",
                }}
              >
                <span>Request Fixed Quote</span>
              </Link>
            </div>
          </div>

          {/* Talent Snapshot Strip */}
          <div className="flex flex-col gap-space-md">
            <span
              className="font-label-md text-label-md uppercase tracking-wider font-semibold"
              style={{ color: theme === "dark" ? "#94A3B8" : "#64748B" }}
            >
              Featured Core Leaders &amp; Architects
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
              {[
                {
                  role: "STAFF ARCHITECT",
                  name: "Noman Tariq",
                  expertise: "Lead Backend & AI Systems (Python / Go / LangChain)",
                },
                {
                  role: "DESIGN DIRECTOR",
                  name: "Asfand Yar",
                  expertise: "Principal UI/UX & Design Systems Lead",
                },
                {
                  role: "MOBILE PRINCIPAL",
                  name: "Asim Tariq",
                  expertise: "Staff Mobile Engineer (Flutter / iOS / Android)",
                },
                {
                  role: "PLATFORM LEAD",
                  name: "Muhammad Haris",
                  expertise: "Lead Headless CMS & Modern Frontends",
                },
              ].map((ldr) => (
                <div
                  key={ldr.name}
                  className="p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs hover:border-[#00D2FF] transition-all"
                  style={{
                    backgroundColor: theme === "dark" ? "#0F141C" : "#ffffff",
                    border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="font-label-sm text-label-sm font-mono font-bold"
                      style={{ color: theme === "dark" ? "#00D2FF" : "#0074db" }}
                    >
                      {ldr.role}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <span
                    className="font-headline-sm text-headline-sm"
                    style={{ color: theme === "dark" ? "#FFFFFF" : "#0f172a" }}
                  >
                    {ldr.name}
                  </span>
                  <span
                    className="font-body-sm text-body-sm"
                    style={{ color: theme === "dark" ? "#94A3B8" : "#64748B" }}
                  >
                    {ldr.expertise}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 7: 6-STEP PRECISION PROCESS                       */}
      {/* ======================================================== */}
      <section
        className="w-full px-margin py-space-xl"
        style={{ backgroundColor: theme === "dark" ? "#080B10" : "#ffffff" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          <div className="flex flex-col gap-space-xs max-w-3xl">
            <span
              className="font-label-sm text-label-sm font-semibold uppercase tracking-widest"
              style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
            >
              Engineering Methodology
            </span>
            <h2
              className="font-display text-display"
              style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
            >
              6-Step Execution Lifecycle
            </h2>
            <p
              className="font-body-lg text-body-lg"
              style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
            >
              How we transform ambitious scopes into high-velocity reality without friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
            {[
              {
                num: "01",
                title: "Ideate & Discover",
                desc: "Comprehensive discovery sprints, business architecture modeling, KPI alignment, and tech-stack feasibility analysis.",
              },
              {
                num: "02",
                title: "Prototype & UX",
                desc: "High-fidelity wireframes, interactive user testing flows, and design system components finalized in Figma before a single line of code.",
              },
              {
                num: "03",
                title: "Agile Development",
                desc: "Bi-weekly sprints, pull request reviews, automated CI/CD builds, and constant visibility via Slack channels and staging deployments.",
              },
              {
                num: "04",
                title: "Rigorous QA & Testing",
                desc: "Automated end-to-end Cypress/Playwright suites, regression testing, load balancing stress tests, and SOC2 compliance audits.",
              },
              {
                num: "05",
                title: "Strategic Launch",
                desc: "Zero-downtime blue/green deployments, DNS migrations, conversion tracking tagging, and live infrastructure monitoring on day one.",
              },
              {
                num: "06",
                title: "24/7 Support & Scale",
                desc: "Dedicated maintenance pods, monthly performance audits, continuous CRO experiments, and instant security patch cycles.",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm relative hover:border-[#00D2FF] transition-all"
                style={{
                  backgroundColor: theme === "dark" ? "#0F141C" : "#f8fafc",
                  border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
                }}
              >
                <span
                  className="font-headline-lg text-headline-lg font-bold font-mono"
                  style={{
                    color: theme === "dark" ? "rgba(0, 210, 255, 0.25)" : "rgba(0, 116, 219, 0.25)",
                  }}
                >
                  {step.num}
                </span>
                <h3
                  className="font-headline-sm text-headline-sm"
                  style={{ color: theme === "dark" ? "#FFFFFF" : "#0f172a" }}
                >
                  {step.title}
                </h3>
                <p
                  className="font-body-sm text-body-sm"
                  style={{ color: theme === "dark" ? "#94A3B8" : "#64748B" }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 8: TECH STACK MATRIX                              */}
      {/* ======================================================== */}
      <section
        className="w-full px-margin py-space-xl"
        style={{
          backgroundColor: theme === "dark" ? "#0B0E14" : "#f1f5f9",
          borderTop: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
          borderBottom: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span
              className="font-label-sm text-label-sm font-semibold uppercase tracking-widest"
              style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
            >
              Architectural Foundation
            </span>
            <h2
              className="font-display text-display"
              style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
            >
              Technical Stack Matrix
            </h2>
            <p
              className="font-body-lg text-body-lg"
              style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
            >
              Battle-tested tools and frameworks selected strictly for velocity, scale, and long-term
              stability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-md">
            {[
              {
                icon: "browser_updated",
                title: "Frontend",
                tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Vue / Nuxt", "GraphQL"],
              },
              {
                icon: "dns",
                title: "Backend",
                tags: ["Node.js", "Python", "Django", "Go (Golang)", "PostgreSQL", "Redis"],
              },
              {
                icon: "phone_iphone",
                title: "Mobile",
                tags: ["Flutter", "React Native", "Swift (iOS)", "Kotlin (Android)", "Firebase"],
              },
              {
                icon: "memory",
                title: "AI & Data",
                tags: ["OpenAI API", "LangChain", "PyTorch", "Pinecone", "HuggingFace"],
              },
              {
                icon: "cloud",
                title: "Cloud & Ops",
                tags: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
              },
            ].map((col) => (
              <div
                key={col.title}
                className="p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm"
                style={{
                  backgroundColor: theme === "dark" ? "#0F141C" : "#ffffff",
                  border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined"
                    style={{ color: theme === "dark" ? "#00D2FF" : "#0074db" }}
                  >
                    {col.icon}
                  </span>
                  <h4
                    className="font-headline-sm text-headline-sm"
                    style={{ color: theme === "dark" ? "#FFFFFF" : "#0f172a" }}
                  >
                    {col.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {col.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded font-label-sm text-label-sm"
                      style={{
                        backgroundColor: theme === "dark" ? "#141B26" : "#f1f5f9",
                        border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
                        color: theme === "dark" ? "#FFFFFF" : "#0f172a",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 9: GLOBAL HUBS & TECHNICAL CONSULTATION FORM      */}
      {/* ======================================================== */}
      <section
        id="book-consultation"
        className="w-full px-margin py-space-xl"
        style={{ backgroundColor: theme === "dark" ? "#080B10" : "#ffffff" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          {/* Section Intro */}
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span
              className="font-label-sm text-label-sm font-semibold uppercase tracking-widest"
              style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
            >
              Global Reach • Local Precision
            </span>
            <h2
              className="font-display text-display"
              style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
            >
              Initiate an Engineering Consultation
            </h2>
            <p
              className="font-body-lg text-body-lg"
              style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
            >
              Speak directly with a Senior Technical Director. We evaluate your requirements and provide
              an architecture estimate within 24 hours.
            </p>
          </div>

          {/* Split Layout: Regional Hubs vs Interactive Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
            {/* Left: Hub Directory */}
            <div className="lg:col-span-5 flex flex-col gap-space-md">
              <div
                className="p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md"
                style={{
                  backgroundColor: theme === "dark" ? "#0F141C" : "#f8fafc",
                  border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
                }}
              >
                <h3
                  className="font-headline-sm text-headline-sm"
                  style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
                >
                  Worldwide Locations
                </h3>
                <div className="flex flex-col gap-space-sm divide-y-0">
                  {[
                    {
                      country: "United States",
                      tz: "PST / EST",
                      desc: "Sacramento & San Francisco Tech Corridor",
                    },
                    {
                      country: "United Kingdom",
                      tz: "GMT / BST",
                      desc: "London Tech Square Delivery Studio",
                    },
                    {
                      country: "United Arab Emirates",
                      tz: "GST (UTC+4)",
                      desc: "Dubai Internet City & Sharjah Tech District",
                    },
                    {
                      country: "Nordics Hub",
                      tz: "CET",
                      desc: "Stockholm Engineering Studio, Sweden",
                    },
                    {
                      country: "Delivery Center",
                      tz: "PKT (UTC+5)",
                      desc: "Abbottabad & Islamabad Innovation Labs",
                    },
                  ].map((hub) => (
                    <div
                      key={hub.country}
                      className="p-space-sm rounded shadow-sm flex flex-col gap-1"
                      style={{
                        backgroundColor: theme === "dark" ? "#141B26" : "#ffffff",
                        border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className="font-headline-sm text-headline-sm font-semibold"
                          style={{ color: theme === "dark" ? "#FFFFFF" : "#0f172a" }}
                        >
                          {hub.country}
                        </span>
                        <span
                          className="font-label-sm text-label-sm font-mono font-semibold"
                          style={{ color: theme === "dark" ? "#00D2FF" : "#0074db" }}
                        >
                          {hub.tz}
                        </span>
                      </div>
                      <p
                        className="font-body-sm text-body-sm"
                        style={{ color: theme === "dark" ? "#94A3B8" : "#64748B" }}
                      >
                        {hub.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Direct Contact details */}
                <div
                  className="pt-space-sm flex flex-col gap-2 font-label-md text-label-md"
                  style={{ color: theme === "dark" ? "#94A3B8" : "#64748B" }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-base"
                      style={{ color: theme === "dark" ? "#00D2FF" : "#0074db" }}
                    >
                      mail
                    </span>
                    <span
                      className="font-semibold"
                      style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
                    >
                      info@trivex.agency
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-base"
                      style={{ color: theme === "dark" ? "#00D2FF" : "#0074db" }}
                    >
                      forum
                    </span>
                    <span>Direct WhatsApp Engineering Concierge Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Technical Consultation Form */}
            <div
              className="lg:col-span-7 p-space-lg rounded-xl shadow-md flex flex-col gap-space-md"
              style={{
                backgroundColor: theme === "dark" ? "#0F141C" : "#f8fafc",
                border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
              }}
            >
              <div className="flex flex-col gap-1">
                <span
                  className="font-label-sm text-label-sm font-mono font-bold"
                  style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
                >
                  PROJECT ENGAGEMENT SPEC
                </span>
                <h3
                  className="font-headline-md text-headline-md"
                  style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
                >
                  Tell us about your requirements
                </h3>
              </div>

              {formSubmitted ? (
                <div
                  className="p-6 rounded-lg text-center flex flex-col items-center gap-3"
                  style={{
                    backgroundColor: "rgba(16, 185, 129, 0.12)",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    color: "#10B981",
                  }}
                >
                  <span className="material-symbols-outlined text-4xl">check_circle</span>
                  <h4 className="font-headline-sm text-lg font-bold">Consultation Scope Received!</h4>
                  <p className="text-sm text-[#94A3B8]">
                    A Senior Technical Director will review your requirements and reach out within 24
                    hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="mt-2 px-4 py-2 rounded text-xs font-mono font-semibold"
                    style={{ backgroundColor: "#00D2FF", color: "#080B10" }}
                  >
                    Submit Another Scope
                  </button>
                </div>
              ) : (
                <form
                  className="flex flex-col gap-space-md"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1">
                      <label
                        className="font-label-sm text-label-sm font-semibold"
                        style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
                      >
                        FULL NAME *
                      </label>
                      <input
                        className="w-full px-3 py-2.5 rounded font-body-md text-body-md shadow-sm outline-none focus:ring-2 focus:ring-[#0074db]"
                        placeholder="e.g. Alex Henderson"
                        required
                        style={{
                          backgroundColor: theme === "dark" ? "#141B26" : "#ffffff",
                          border: theme === "dark" ? "1px solid #1E2633" : "1px solid #cbd5e1",
                          color: theme === "dark" ? "#FFFFFF" : "#0f172a",
                        }}
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        className="font-label-sm text-label-sm font-semibold"
                        style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
                      >
                        WORK EMAIL *
                      </label>
                      <input
                        className="w-full px-3 py-2.5 rounded font-body-md text-body-md shadow-sm outline-none focus:ring-2 focus:ring-[#0074db]"
                        placeholder="alex@company.com"
                        required
                        style={{
                          backgroundColor: theme === "dark" ? "#141B26" : "#ffffff",
                          border: theme === "dark" ? "1px solid #1E2633" : "1px solid #cbd5e1",
                          color: theme === "dark" ? "#FFFFFF" : "#0f172a",
                        }}
                        type="email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1">
                      <label
                        className="font-label-sm text-label-sm font-semibold"
                        style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
                      >
                        PRIMARY REQUIREMENT *
                      </label>
                      <select
                        className="w-full px-3 py-2.5 rounded font-body-md text-body-md shadow-sm outline-none focus:ring-2 focus:ring-[#0074db]"
                        style={{
                          backgroundColor: theme === "dark" ? "#141B26" : "#ffffff",
                          border: theme === "dark" ? "1px solid #1E2633" : "1px solid #cbd5e1",
                          color: theme === "dark" ? "#FFFFFF" : "#0f172a",
                        }}
                      >
                        <option>Full-Stack Web App Development</option>
                        <option>Mobile App (Flutter / Native)</option>
                        <option>E-commerce Architecture &amp; Shopify Plus</option>
                        <option>AI Automation &amp; LLM Systems</option>
                        <option>Dedicated Agile Engineering Pod</option>
                        <option>Growth Marketing &amp; Paid Scaling</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        className="font-label-sm text-label-sm font-semibold"
                        style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
                      >
                        ESTIMATED BUDGET
                      </label>
                      <select
                        className="w-full px-3 py-2.5 rounded font-body-md text-body-md shadow-sm outline-none focus:ring-2 focus:ring-[#0074db]"
                        style={{
                          backgroundColor: theme === "dark" ? "#141B26" : "#ffffff",
                          border: theme === "dark" ? "1px solid #1E2633" : "1px solid #cbd5e1",
                          color: theme === "dark" ? "#FFFFFF" : "#0f172a",
                        }}
                      >
                        <option>$10k - $25k</option>
                        <option>$25k - $50k</option>
                        <option>$50k - $150k</option>
                        <option>$150k+</option>
                        <option>Monthly Retainer / Squad</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      className="font-label-sm text-label-sm font-semibold"
                      style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
                    >
                      PROJECT SUMMARY / TECHNICAL SCOPE
                    </label>
                    <textarea
                      className="w-full px-3 py-2.5 rounded font-body-md text-body-md shadow-sm outline-none focus:ring-2 focus:ring-[#0074db] placeholder-slate-500"
                      placeholder="Describe the current architecture, timelines, key integrations, or target metrics..."
                      rows={4}
                      style={{
                        backgroundColor: theme === "dark" ? "#141B26" : "#ffffff",
                        border: theme === "dark" ? "1px solid #1E2633" : "1px solid #cbd5e1",
                        color: theme === "dark" ? "#FFFFFF" : "#0f172a",
                      }}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-xs">
                    <div className="flex items-center gap-2">
                      <input
                        defaultChecked
                        className="w-4 h-4 rounded text-[#0074db] focus:ring-0"
                        id="nda"
                        type="checkbox"
                      />
                      <label
                        className="font-label-sm text-label-sm"
                        htmlFor="nda"
                        style={{ color: theme === "dark" ? "#94A3B8" : "#64748B" }}
                      >
                        Standard NDA protection applies automatically
                      </label>
                    </div>
                    <button
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded font-label-lg text-label-lg font-medium shadow-md transition-all"
                      style={{
                        backgroundColor: "#00D2FF",
                        color: "#080B10",
                      }}
                      type="submit"
                    >
                      <span>Submit Technical Scope</span>
                      <span className="material-symbols-outlined text-base">send</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
