"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

export function ServicesSection() {
  const { theme } = useTheme();

  const services = [
    {
      num: "01 // PLATFORMS",
      icon: "web",
      title: "Web Dev & Custom Platforms",
      features: [
        "• Next.js 15 & React Architecture",
        "• Enterprise Headless CMS",
        "• Micro-frontends & High Scale APIs",
      ],
      linkText: "Explore Service",
      href: "#services-matrix",
    },
    {
      num: "02 // MOBILE",
      icon: "smartphone",
      title: "Mobile App Engineering",
      features: [
        "• Native iOS (Swift) & Android (Kotlin)",
        "• Flutter Cross-Platform Mastery",
        "• Offline-First Sync & Low Latency",
      ],
      linkText: "Explore Service",
      href: "#services-matrix",
    },
    {
      num: "03 // COMMERCE",
      icon: "shopping_bag",
      title: "E-Commerce & Scaling",
      features: [
        "• Shopify Plus Custom Hydrogen",
        "• High-Volume Checkout Workflows",
        "• ERP & Fulfillment Sync Engines",
      ],
      linkText: "Explore Service",
      href: "#services-matrix",
    },
    {
      num: "04 // GROWTH",
      icon: "query_stats",
      title: "Digital Marketing & CRO",
      features: [
        "• Meta & Google Ads at Scale",
        "• Algorithmic SEO & Content Hubs",
        "• Multivariate Funnel Optimization",
      ],
      linkText: "Explore Service",
      href: "#services-matrix",
    },
    {
      num: "05 // INTELLIGENCE",
      icon: "smart_toy",
      title: "AI & Enterprise Automations",
      features: [
        "• LangChain, LlamaIndex & RAG",
        "• Autonomous Ops & RPA Bots",
        "• Computer Vision & OCR Pipelines",
      ],
      linkText: "Explore Service",
      href: "#services-matrix",
    },
    {
      num: "06 // EXPERIENCE",
      icon: "design_services",
      title: "UI/UX & Product Design",
      features: [
        "• Enterprise Design Systems",
        "• User Journey Mapping & Wireframes",
        "• High-Fidelity Interactive Prototypes",
      ],
      linkText: "Explore Service",
      href: "#services-matrix",
    },
    {
      num: "07 // CREATIVE",
      icon: "movie",
      title: "Creative Video & Branding",
      features: [
        "• AI-Enhanced UGC Ad Creatives",
        "• 3D Motion Graphics & Spline",
        "• Visual Brand Identity Systems",
      ],
      linkText: "Explore Service",
      href: "#services-matrix",
    },
    {
      num: "08 // SQUADS",
      icon: "group_add",
      title: "Staff Augmentation & Pods",
      features: [
        "• Top 3% Screened Developers",
        "• Zero-Overhead Ramp in 48-72h",
        "• Fully Aligned to Time Zones",
      ],
      linkText: "Hire Developers",
      href: "#hire-developer",
    },
  ];

  return (
    <section
      id="services-matrix"
      className="w-full px-margin py-space-xl transition-colors"
      style={{
        backgroundColor: theme === "dark" ? "#0B0E14" : "#eff4ff",
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
              className="font-display text-display uppercase tracking-tight"
              style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
            >
              Full-Suite Digital Capabilities
            </h2>
            <p
              className="font-body-lg text-body-lg leading-relaxed"
              style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
            >
              Modular engineering and growth blocks ready to build, launch, and compound enterprise
              market share.
            </p>
          </div>
          <Link
            className="font-label-lg text-label-lg font-semibold flex items-center gap-1 hover:underline whitespace-nowrap"
            data-path="services"
            href="#services-matrix"
            style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
          >
            <span>View Detailed Spec Sheets</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>

        {/* 8 Bento Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {services.map((s) => (
            <div
              key={s.num}
              className="p-space-lg rounded-xl shadow-sm hover:scale-[1.01] transition-all flex flex-col justify-between group"
              style={{
                backgroundColor: theme === "dark" ? "#0F141C" : "#ffffff",
                border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
              }}
            >
              <div className="flex flex-col gap-space-sm">
                <div className="flex justify-between items-center">
                  <span
                    className="font-label-sm text-label-sm font-mono font-bold"
                    style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
                  >
                    {s.num}
                  </span>
                  <span
                    className="material-symbols-outlined transition-colors group-hover:text-[#00D2FF]"
                    style={{ color: theme === "dark" ? "#94A3B8" : "#64748B" }}
                  >
                    {s.icon}
                  </span>
                </div>
                <h3
                  className="font-headline-sm text-headline-sm"
                  style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
                >
                  {s.title}
                </h3>
                <ul
                  className="space-y-1.5 font-body-sm text-body-sm"
                  style={{ color: theme === "dark" ? "#94A3B8" : "#64748B" }}
                >
                  {s.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              <Link
                className="pt-space-md font-label-md text-label-md font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                data-path={s.href.replace("#", "")}
                href={s.href}
                style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
              >
                <span>{s.linkText}</span>
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
