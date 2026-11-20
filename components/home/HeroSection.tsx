"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { Icon } from "@/components/ui/Icon";

export function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="relative w-full px-margin py-space-xl overflow-hidden bg-transparent">
      {/* Subtle atmospheric ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none opacity-40 dark:opacity-25 bg-gradient-to-br from-cyan-500/30 via-blue-500/15 to-transparent z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Top Tagline & Status Pill */}
        <div className="flex flex-wrap items-center justify-between gap-space-md">
          <div
            className="inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-full shadow-sm glass-pill"
            style={{
              color: isDark ? "#00D2FF" : "#005baf",
            }}
          >
            <span
              className="inline-block w-2 h-2 rounded-full animate-pulse"
              style={{
                backgroundColor: isDark ? "#00D2FF" : "#005baf",
                boxShadow: isDark ? "0 0 8px #00D2FF" : "0 0 8px #005baf",
              }}
            />
            <span className="font-label-md text-label-md uppercase tracking-wider font-semibold">
              ⚡ Next-Gen Digital Growth &amp; Technology Partner
            </span>
          </div>
          <div
            className="flex items-center gap-space-sm font-label-sm text-label-sm px-3.5 py-1.5 rounded-full shadow-sm glass-pill"
            style={{
              color: isDark ? "#94A3B8" : "#64748B",
            }}
          >
            <span
              className="font-mono font-semibold"
              style={{ color: isDark ? "#00D2FF" : "#005baf" }}
            >
              DEPLOYED GLOBAL NODES:
            </span>
            <span style={{ color: isDark ? "#FFFFFF" : "#0f172a" }}>
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
              style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
            >
              We build, market &amp; scale{" "}
              <span
                className={
                  isDark
                    ? "bg-gradient-to-r from-[#00D2FF] to-[#84c7ff] bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-[#005baf] to-[#007bb9] bg-clip-text text-transparent"
                }
              >
                world-class digital
              </span>{" "}
              businesses.
            </h1>
            <p
              className="font-body-lg text-body-lg max-w-2xl leading-relaxed"
              style={{ color: isDark ? "#94A3B8" : "#475569" }}
            >
              From performance marketing, e-commerce, and high-conversion creative to custom web
              applications, mobile platforms, and AI enterprise automation—we unite strategy,
              engineering, and digital growth under one roof.
            </p>

            {/* Dual CTA */}
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <Link
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-label-lg text-label-lg font-medium shadow-md transition-all hover:scale-[1.02]"
                href="/contact"
                style={{
                  backgroundColor: isDark ? "#00D2FF" : "#0074db",
                  color: isDark ? "#080B10" : "#ffffff",
                  boxShadow: isDark
                    ? "0 4px 14px rgba(0, 210, 255, 0.3)"
                    : "0 4px 14px rgba(0, 116, 219, 0.25)",
                }}
              >
                <span>Book a Free Consultation</span>
                <Icon name="arrow_forward" className="w-4 h-4" />
              </Link>
              <Link
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-label-lg text-label-lg font-medium transition-all glass-panel glass-panel-interactive hover:text-[#00D2FF]"
                href="/services"
                style={{
                  color: isDark ? "#FFFFFF" : "#0b1c30",
                }}
              >
                <span>Explore Capabilities</span>
                <Icon name="terminal" className="w-4 h-4" />
              </Link>
            </div>

            {/* Quick Proof Chips */}
            <div className="pt-space-md flex flex-wrap items-center gap-space-sm">
              <span className="font-label-sm text-label-sm" style={{ color: "#64748B" }}>
                TRUSTED INFRASTRUCTURE:
              </span>
              {[
                "ISO 27001",
                "SOC 2 Type II",
                "GDPR Compliant",
                "Zero Fluff Architecture",
              ].map((chip) => (
                <span
                  key={chip}
                  className="px-2.5 py-1 rounded font-label-sm text-label-sm glass-pill shadow-xs"
                  style={{
                    color: isDark ? "#94A3B8" : "#475569",
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Core Capability Console */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="glass-panel p-space-lg rounded-3xl shadow-xl flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: isDark ? "#00D2FF" : "#0074db" }}
                  />
                  <span
                    className="font-label-sm text-label-sm font-mono font-bold tracking-wider"
                    style={{ color: isDark ? "#00D2FF" : "#005baf" }}
                  >
                    AGENCY OPERATING CAPABILITIES
                  </span>
                </div>
                <span
                  className="font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                  style={{
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    color: "#10B981",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                  }}
                >
                  INTAKE OPEN
                </span>
              </div>

              {/* 4 Pillars Preview with Glassmorphism */}
              <div className="space-y-2.5 pt-1">
                <div className="p-3.5 rounded-2xl border flex items-center justify-between glass-panel-interactive bg-white/40 dark:bg-white/[0.04] border-white/50 dark:border-white/10">
                  <div className="flex items-center gap-2.5">
                    <span style={{ color: isDark ? "#00D2FF" : "#0074db" }}>
                      <Icon name="query_stats" className="w-5 h-5" />
                    </span>
                    <span className="font-brand font-semibold text-xs sm:text-sm">Marketing &amp; Paid Acquisition</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">Meta • Google • TikTok</span>
                </div>

                <div className="p-3.5 rounded-2xl border flex items-center justify-between glass-panel-interactive bg-white/40 dark:bg-white/[0.04] border-white/50 dark:border-white/10">
                  <div className="flex items-center gap-2.5">
                    <span style={{ color: isDark ? "#00D2FF" : "#0074db" }}>
                      <Icon name="terminal" className="w-5 h-5" />
                    </span>
                    <span className="font-brand font-semibold text-xs sm:text-sm">Web &amp; Custom Software</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">Next.js • React • TypeScript</span>
                </div>

                <div className="p-3.5 rounded-2xl border flex items-center justify-between glass-panel-interactive bg-white/40 dark:bg-white/[0.04] border-white/50 dark:border-white/10">
                  <div className="flex items-center gap-2.5">
                    <span style={{ color: isDark ? "#00D2FF" : "#0074db" }}>
                      <Icon name="shopping_bag" className="w-5 h-5" />
                    </span>
                    <span className="font-brand font-semibold text-xs sm:text-sm">E-Commerce &amp; WordPress</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">Shopify • Headless • ACF</span>
                </div>

                <div className="p-3.5 rounded-2xl border flex items-center justify-between glass-panel-interactive bg-white/40 dark:bg-white/[0.04] border-white/50 dark:border-white/10">
                  <div className="flex items-center gap-2.5">
                    <span style={{ color: isDark ? "#00D2FF" : "#0074db" }}>
                      <Icon name="smart_toy" className="w-5 h-5" />
                    </span>
                    <span className="font-brand font-semibold text-xs sm:text-sm">Business Automation &amp; AI</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">Workflows • CRM • Custom Bots</span>
                </div>
              </div>
            </div>

            {/* Studio Banner Preview Card */}
            <div className="glass-panel p-4 rounded-2xl flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold"
                  style={{
                    backgroundColor: isDark ? "rgba(0, 210, 255, 0.12)" : "rgba(0, 116, 219, 0.1)",
                    color: isDark ? "#00D2FF" : "#0074db",
                  }}
                >
                  TX
                </div>
                <div>
                  <div
                    className="font-headline-sm text-xs font-bold uppercase tracking-wider"
                    style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
                  >
                    TRIVEX Collaborative Model
                  </div>
                  <div className="font-label-sm text-[11px]" style={{ color: "#64748B" }}>
                    Dedicated Engineering &amp; Creative Pods
                  </div>
                </div>
              </div>
              <Link
                href="/about"
                className="text-xs font-mono font-semibold hover:underline"
                style={{ color: isDark ? "#00D2FF" : "#0088FF" }}
              >
                Our Story →
              </Link>
            </div>
          </div>
        </div>

        {/* Honest Agency Value Metrics Bar */}
        <div className="glass-panel p-space-lg rounded-3xl shadow-xl grid grid-cols-2 md:grid-cols-4 gap-space-md">
          <div className="flex flex-col gap-1">
            <span
              className="font-display text-2xl lg:text-3xl font-bold"
              style={{ color: isDark ? "#00D2FF" : "#005baf" }}
            >
              12
            </span>
            <span
              className="font-label-sm text-label-sm"
              style={{ color: isDark ? "#94A3B8" : "#64748B" }}
            >
              Core Specialized Services
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span
              className="font-display text-2xl lg:text-3xl font-bold"
              style={{ color: isDark ? "#00D2FF" : "#005baf" }}
            >
              4
            </span>
            <span
              className="font-label-sm text-label-sm"
              style={{ color: isDark ? "#94A3B8" : "#64748B" }}
            >
              Global Operational Hubs
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span
              className="font-display text-2xl lg:text-3xl font-bold"
              style={{ color: isDark ? "#00D2FF" : "#005baf" }}
            >
              100%
            </span>
            <span
              className="font-label-sm text-label-sm"
              style={{ color: isDark ? "#94A3B8" : "#64748B" }}
            >
              Client Source Code &amp; IP Ownership
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span
              className="font-display text-2xl lg:text-3xl font-bold"
              style={{ color: isDark ? "#00D2FF" : "#005baf" }}
            >
              24h
            </span>
            <span
              className="font-label-sm text-label-sm"
              style={{ color: isDark ? "#94A3B8" : "#64748B" }}
            >
              Consultation Assessment Turnaround
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
