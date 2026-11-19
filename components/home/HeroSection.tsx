"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

export function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="relative w-full px-margin py-space-xl overflow-hidden bg-surface">
      {/* Background Graphic with Gradient Fade */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Modern digital technology agency studio"
          className="absolute right-0 top-0 h-full w-full lg:w-3/5 object-cover object-center"
          style={{ opacity: 0.92, filter: "contrast(1.05) brightness(1.02)" }}
          src="https://lh3.googleusercontent.com/aida/ALJJyrBzx4Y8noL01zqp5PYB66KSR1tjqH5ijNXJUsXiEyppbVMuMtGQW_DEkYKsXbe6YXt67YIdtcw20eKIt1KIJCY9qyiwMIg2mm3PhaCJtcsVmZbhBiregWNnmsu9mUp8dHPPn61SHrXXfjntBV7rEOtgKL3FQOM1KiXbRGqwv7ZU1RY6gPQCXDngrXeUqMgyk8MwNvsgbwW0SEpzZHvpPNj5i94GBD_aT6cVSHjhY4z5"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isDark
              ? "linear-gradient(to right, rgb(8, 11, 16) 0%, rgb(8, 11, 16) 38%, rgba(8, 11, 16, 0.75) 55%, rgba(8, 11, 16, 0.2) 75%, transparent 92%)"
              : "linear-gradient(to right, rgba(248, 249, 255, 0.95) 0%, rgba(248, 249, 255, 0.9) 38%, rgba(248, 249, 255, 0.75) 55%, rgba(248, 249, 255, 0.3) 75%, transparent 92%)",
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-transparent to-transparent pointer-events-none"
          style={{ height: "100%", opacity: isDark ? 0.7 : 0.2 }}
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
              backgroundColor: isDark ? "#141B26" : "#f1f5f9",
              border: isDark ? "1px solid #1E2633" : "1px solid #e2e8f0",
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
              ⚡ Full-Service Digital Growth &amp; Technology Agency
            </span>
          </div>
          <div
            className="flex items-center gap-space-sm font-label-sm text-label-sm px-3 py-1 rounded shadow-sm"
            style={{
              backgroundColor: isDark ? "#0F141C" : "#f8fafc",
              border: isDark ? "1px solid #1E2633" : "1px solid #e2e8f0",
              color: isDark ? "#94A3B8" : "#64748B",
            }}
          >
            <span
              className="font-mono font-semibold"
              style={{ color: isDark ? "#00D2FF" : "#005baf" }}
            >
              GLOBAL DELIVERY HUBS:
            </span>
            <span style={{ color: isDark ? "#FFFFFF" : "#0f172a" }}>
              United States • UK • UAE • Pakistan
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
              engineering, and commercial growth under one unified team.
            </p>

            {/* Dual CTA */}
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <Link
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded font-label-lg text-label-lg font-medium shadow-md transition-all hover:brightness-110"
                href="/contact"
                style={{
                  backgroundColor: isDark ? "#00D2FF" : "#0074db",
                  color: isDark ? "#080B10" : "#ffffff",
                  boxShadow: isDark
                    ? "0 4px 14px rgba(0, 210, 255, 0.3)"
                    : "0 4px 14px rgba(0, 116, 219, 0.3)",
                }}
              >
                <span>Book a Free Consultation</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
              <Link
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded font-label-lg text-label-lg font-medium transition-all hover:border-[#00D2FF] hover:text-[#00D2FF]"
                href="/services"
                style={{
                  backgroundColor: isDark ? "#141B26" : "#f1f5f9",
                  border: isDark ? "1px solid #1E2633" : "1px solid #cbd5e1",
                  color: isDark ? "#FFFFFF" : "#0b1c30",
                }}
              >
                <span>Explore All Services</span>
                <span className="material-symbols-outlined text-base">hub</span>
              </Link>
            </div>

            {/* Quick Proof Chips */}
            <div className="pt-space-md flex flex-wrap items-center gap-space-sm">
              <span className="font-label-sm text-label-sm" style={{ color: "#64748B" }}>
                CORE STANDARDS:
              </span>
              {[
                "100% Client Code & IP Ownership",
                "Direct Senior Practitioner Access",
                "24-Hour Consultation Turnaround",
                "Clean Modular Architecture",
              ].map((chip) => (
                <span
                  key={chip}
                  className="px-2.5 py-1 rounded font-label-sm text-label-sm"
                  style={{
                    backgroundColor: isDark ? "#141B26" : "#f1f5f9",
                    border: isDark ? "1px solid #1E2633" : "1px solid #e2e8f0",
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
            <div
              className="p-space-lg rounded-2xl shadow-md flex flex-col gap-space-md"
              style={{
                backgroundColor: isDark ? "#0F141C" : "#ffffff",
                border: isDark ? "1px solid #1E2633" : "1px solid #e2e8f0",
              }}
            >
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
                  className="font-mono text-[11px] font-semibold px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    color: "#10B981",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                  }}
                >
                  INTAKE OPEN
                </span>
              </div>

              {/* 4 Pillars Preview */}
              <div className="space-y-2.5 pt-1">
                <div
                  className="p-3 rounded-xl border flex items-center justify-between"
                  style={{
                    backgroundColor: isDark ? "#141B26" : "#f8fafc",
                    borderColor: isDark ? "#1E2633" : "#e2e8f0",
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-lg" style={{ color: isDark ? "#00D2FF" : "#0074db" }}>
                      query_stats
                    </span>
                    <span className="font-brand font-semibold text-xs sm:text-sm">Marketing &amp; Paid Acquisition</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">Meta • Google • TikTok</span>
                </div>

                <div
                  className="p-3 rounded-xl border flex items-center justify-between"
                  style={{
                    backgroundColor: isDark ? "#141B26" : "#f8fafc",
                    borderColor: isDark ? "#1E2633" : "#e2e8f0",
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-lg" style={{ color: isDark ? "#00D2FF" : "#0074db" }}>
                      terminal
                    </span>
                    <span className="font-brand font-semibold text-xs sm:text-sm">Web &amp; Custom Software</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">Next.js • React • TypeScript</span>
                </div>

                <div
                  className="p-3 rounded-xl border flex items-center justify-between"
                  style={{
                    backgroundColor: isDark ? "#141B26" : "#f8fafc",
                    borderColor: isDark ? "#1E2633" : "#e2e8f0",
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-lg" style={{ color: isDark ? "#00D2FF" : "#0074db" }}>
                      shopping_bag
                    </span>
                    <span className="font-brand font-semibold text-xs sm:text-sm">E-Commerce &amp; WordPress</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">Shopify • Headless • ACF</span>
                </div>

                <div
                  className="p-3 rounded-xl border flex items-center justify-between"
                  style={{
                    backgroundColor: isDark ? "#141B26" : "#f8fafc",
                    borderColor: isDark ? "#1E2633" : "#e2e8f0",
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-lg" style={{ color: isDark ? "#00D2FF" : "#0074db" }}>
                      smart_toy
                    </span>
                    <span className="font-brand font-semibold text-xs sm:text-sm">Business Automation &amp; AI</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">Workflows • CRM • Custom Bots</span>
                </div>
              </div>
            </div>

            {/* Studio Banner Preview Card */}
            <div
              className="p-4 rounded-xl flex items-center justify-between shadow-sm"
              style={{
                backgroundColor: isDark ? "#0F141C" : "#ffffff",
                border: isDark ? "1px solid #1E2633" : "1px solid #e2e8f0",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded flex items-center justify-center font-mono font-bold"
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
        <div
          className="p-space-lg rounded-2xl shadow-md grid grid-cols-2 md:grid-cols-4 gap-space-md"
          style={{
            backgroundColor: isDark ? "#0F141C" : "#ffffff",
            border: isDark ? "1px solid #1E2633" : "1px solid #e2e8f0",
          }}
        >
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
