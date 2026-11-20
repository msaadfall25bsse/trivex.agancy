"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { Icon } from "@/components/ui/Icon";

export function ServicesSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const services = [
    {
      num: "01 // PLATFORMS",
      icon: "web",
      title: "Web Dev & Custom Platforms",
      features: [
        "• Next.js 16 & React Architecture",
        "• Enterprise Headless CMS & APIs",
        "• Sub-Second Core Web Vitals",
      ],
      linkText: "Explore Service",
      href: "/services/web-development",
    },
    {
      num: "02 // MOBILE",
      icon: "smartphone",
      title: "Mobile App Engineering",
      features: [
        "• Cross-Platform Flutter & React Native",
        "• Offline-First Sync & Low Latency",
        "• Native iOS & Android Publishing",
      ],
      linkText: "Explore Service",
      href: "/services/mobile-app-development",
    },
    {
      num: "03 // COMMERCE",
      icon: "shopping_bag",
      title: "E-Commerce & Scaling",
      features: [
        "• Shopify Plus & Headless Storefronts",
        "• High-Volume Checkout Optimization",
        "• ERP, Payment & Inventory Sync",
      ],
      linkText: "Explore Service",
      href: "/services/ecommerce",
    },
    {
      num: "04 // GROWTH",
      icon: "query_stats",
      title: "Digital Marketing & CRO",
      features: [
        "• Meta, Google & TikTok Paid Ads",
        "• Technical & Algorithmic SEO",
        "• Funnel Optimization & Attribution",
      ],
      linkText: "Explore Service",
      href: "/services/digital-marketing",
    },
    {
      num: "05 // INTELLIGENCE",
      icon: "smart_toy",
      title: "Business Automation & AI",
      features: [
        "• Internal Tooling & Process RPA",
        "• Custom AI Assistants & Chatbots",
        "• CRM, Webhook & Zapier Architecture",
      ],
      linkText: "Explore Service",
      href: "/services/business-automation",
    },
    {
      num: "06 // EXPERIENCE",
      icon: "design_services",
      title: "UI/UX & Product Design",
      features: [
        "• Production Figma Component Systems",
        "• High-Fidelity User Journey Flows",
        "• Responsive Interactive Prototypes",
      ],
      linkText: "Explore Service",
      href: "/services/ui-ux-design",
    },
    {
      num: "07 // CREATIVE",
      icon: "movie",
      title: "AI Video & UGC Production",
      features: [
        "• High-Hook Paid Social Video Ads",
        "• Scripting, Voice & UGC Sequencing",
        "• Multi-Platform Aspect Ratio Cuts",
      ],
      linkText: "Explore Service",
      href: "/services/ai-video-production",
    },
    {
      num: "08 // WORDPRESS",
      icon: "code_blocks",
      title: "WordPress Development",
      features: [
        "• Bespoke Custom PHP & Gutenberg",
        "• Zero-Bloat Theme Engineering",
        "• Security Hardened & High-Speed",
      ],
      linkText: "Explore Service",
      href: "/services/wordpress-development",
    },
  ];

  return (
    <section
      id="services-matrix"
      className="w-full px-margin py-space-xl transition-colors bg-transparent"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span
              className="font-label-sm text-label-sm font-semibold uppercase tracking-widest"
              style={{ color: isDark ? "#00D2FF" : "#005baf" }}
            >
              Comprehensive Capabilities
            </span>
            <h2
              className="font-display text-display uppercase tracking-tight"
              style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
            >
              Full-Spectrum Growth &amp; Technology Stack
            </h2>
            <p
              className="font-body-lg text-body-lg leading-relaxed"
              style={{ color: isDark ? "#94A3B8" : "#475569" }}
            >
              From engineering mission-critical web applications to orchestrating multi-channel paid
              advertising, our cross-functional squads deliver outcomes that compound.
            </p>
          </div>

          <Link
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-label-md text-label-md font-bold transition-all shadow-md self-start md:self-auto hover:brightness-110"
            href="/services"
            style={{
              backgroundColor: isDark ? "#00D2FF" : "#0074db",
              color: isDark ? "#080B10" : "#ffffff",
            }}
          >
            <span>View All 12 Services</span>
            <Icon name="arrow_forward" className="w-4 h-4" />
          </Link>
        </div>

        {/* 8 Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {services.map((svc) => (
            <div
              key={svc.num}
              className="glass-panel glass-panel-interactive p-space-lg rounded-3xl flex flex-col justify-between gap-space-md group"
            >
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span
                    className="font-label-sm text-label-sm font-mono font-bold"
                    style={{ color: isDark ? "#00D2FF" : "#005baf" }}
                  >
                    {svc.num}
                  </span>
                  <span
                    className="group-hover:scale-110 transition-transform"
                    style={{ color: isDark ? "#00D2FF" : "#0074db" }}
                  >
                    <Icon name={svc.icon} className="w-6 h-6" />
                  </span>
                </div>
                <h3
                  className="font-headline-sm text-headline-sm"
                  style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
                >
                  {svc.title}
                </h3>
                <ul className="flex flex-col gap-1.5 pt-space-xs">
                  {svc.features.map((feat) => (
                    <li
                      key={feat}
                      className="font-body-sm text-body-sm"
                      style={{ color: isDark ? "#94A3B8" : "#475569" }}
                    >
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                className="font-label-sm text-label-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all border-t pt-space-sm mt-space-xs"
                href={svc.href}
                style={{
                  color: isDark ? "#00D2FF" : "#005baf",
                  borderColor: isDark ? "#1E2633" : "#e2e8f0",
                }}
              >
                <span>{svc.linkText}</span>
                <Icon name="arrow_forward" className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
