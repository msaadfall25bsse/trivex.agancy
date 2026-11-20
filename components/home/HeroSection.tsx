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

          {/* Right: Telemetry & Console Card */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            {/* Live Telemetry Card */}
            <div className="glass-panel p-space-lg rounded-2xl shadow-xl flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span
                    className="font-label-md text-label-md font-bold"
                    style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
                  >
                    CORE-ENGINE V4.8 - ONLINE
                  </span>
                </div>
                <span
                  className="px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold"
                  style={{
                    backgroundColor: isDark ? "rgba(0, 210, 255, 0.12)" : "rgba(0, 116, 219, 0.1)",
                    color: isDark ? "#00D2FF" : "#005baf",
                    border: `1px solid ${isDark ? "rgba(0, 210, 255, 0.25)" : "rgba(0, 116, 219, 0.2)"}`,
                  }}
                >
                  99.4% SLA
                </span>
              </div>
              <div className="grid grid-cols-2 gap-space-md py-space-xs">
                <div
                  className="p-space-sm rounded-lg glass-panel-interactive"
                  style={{
                    backgroundColor: isDark ? "rgba(20, 27, 38, 0.6)" : "rgba(255, 255, 255, 0.65)",
                    border: `1px solid ${isDark ? "#1E2633" : "rgba(0, 80, 200, 0.1)"}`,
                  }}
                >
                  <span className="font-label-sm text-label-sm block" style={{ color: "#64748B" }}>
                    ACTIVE PODS
                  </span>
                  <span
                    className="font-headline-md text-headline-md font-bold block"
                    style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
                  >
                    14 SQUADS
                  </span>
                  <span
                    className="font-label-sm text-label-sm block mt-0.5"
                    style={{ color: isDark ? "#00D2FF" : "#005baf" }}
                  >
                    Global Allocation
                  </span>
                </div>
                <div
                  className="p-space-sm rounded-lg glass-panel-interactive"
                  style={{
                    backgroundColor: isDark ? "rgba(20, 27, 38, 0.6)" : "rgba(255, 255, 255, 0.65)",
                    border: `1px solid ${isDark ? "#1E2633" : "rgba(0, 80, 200, 0.1)"}`,
                  }}
                >
                  <span className="font-label-sm text-label-sm block" style={{ color: "#64748B" }}>
                    ON-TIME SHIP RATE
                  </span>
                  <span
                    className="font-headline-md text-headline-md font-bold block"
                    style={{ color: isDark ? "#00D2FF" : "#005baf" }}
                  >
                    99.4%
                  </span>
                  <span
                    className="font-label-sm text-label-sm block mt-0.5"
                    style={{ color: isDark ? "#94A3B8" : "#64748B" }}
                  >
                    350+ Releases
                  </span>
                </div>
              </div>

              {/* Inline SVG Sparkline */}
              <div
                className="p-space-sm rounded-lg flex flex-col gap-1"
                style={{
                  backgroundColor: isDark ? "rgba(20, 27, 38, 0.6)" : "rgba(255, 255, 255, 0.65)",
                  border: `1px solid ${isDark ? "#1E2633" : "rgba(0, 80, 200, 0.1)"}`,
                }}
              >
                <div
                  className="flex justify-between items-center font-label-sm text-label-sm"
                  style={{ color: isDark ? "#94A3B8" : "#64748B" }}
                >
                  <span>MONTHLY SYSTEM VELOCITY</span>
                  <span className="font-bold" style={{ color: isDark ? "#00D2FF" : "#005baf" }}>
                    +142.8% YoY
                  </span>
                </div>
                <svg
                  className="w-full h-12"
                  fill="none"
                  style={{ color: isDark ? "#00D2FF" : "#0074db" }}
                  viewBox="0 0 300 48"
                >
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
                <span
                  className="font-mono font-medium"
                  style={{ color: isDark ? "#00D2FF" : "#005baf" }}
                >
                  US • UK • UAE • SE • PK
                </span>
              </div>
            </div>

            {/* Studio Photo Preview Banner */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-sm h-44 glass-panel border"
              style={{
                borderColor: isDark ? "#1E2633" : "rgba(0, 80, 200, 0.1)",
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
          <div className="p-space-lg rounded-2xl shadow-sm flex flex-col justify-between glass-panel glass-panel-interactive">
            <span className="font-label-sm text-label-sm" style={{ color: "#64748B" }}>
              LOCATIONS
            </span>
            <span
              className="font-display text-display font-bold"
              style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
            >
              05
            </span>
            <span
              className="font-body-sm text-body-sm"
              style={{ color: isDark ? "#94A3B8" : "#64748B" }}
            >
              Global Hubs in Key Tech Hubs
            </span>
          </div>
          <div className="p-space-lg rounded-2xl shadow-sm flex flex-col justify-between glass-panel glass-panel-interactive">
            <span className="font-label-sm text-label-sm" style={{ color: "#64748B" }}>
              TALENT NETWORK
            </span>
            <span
              className="font-display text-display font-bold"
              style={{ color: isDark ? "#00D2FF" : "#005baf" }}
            >
              150+
            </span>
            <span
              className="font-body-sm text-body-sm"
              style={{ color: isDark ? "#94A3B8" : "#64748B" }}
            >
              Vetted Senior Engineers &amp; Designers
            </span>
          </div>
          <div className="p-space-lg rounded-2xl shadow-sm flex flex-col justify-between glass-panel glass-panel-interactive">
            <span className="font-label-sm text-label-sm" style={{ color: "#64748B" }}>
              DELIVERY SPEED
            </span>
            <span
              className="font-display text-display font-bold"
              style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
            >
              99.4%
            </span>
            <span
              className="font-body-sm text-body-sm"
              style={{ color: isDark ? "#94A3B8" : "#64748B" }}
            >
              On-Time Sprint Completion SLA
            </span>
          </div>
          <div className="p-space-lg rounded-2xl shadow-sm flex flex-col justify-between glass-panel glass-panel-interactive">
            <span className="font-label-sm text-label-sm" style={{ color: "#64748B" }}>
              ENTERPRISE SECURITY
            </span>
            <span
              className="font-display text-display font-bold"
              style={{ color: isDark ? "#00D2FF" : "#005baf" }}
            >
              100%
            </span>
            <span
              className="font-body-sm text-body-sm"
              style={{ color: isDark ? "#94A3B8" : "#64748B" }}
            >
              SOC 2 Type II &amp; ISO 27001 Protection
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
