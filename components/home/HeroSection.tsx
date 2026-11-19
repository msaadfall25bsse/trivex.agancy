"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

export function HeroSection() {
  const { theme } = useTheme();

  return (
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
                ? "linear-gradient(to right, rgb(8, 11, 16) 0%, rgb(8, 11, 16) 38%, rgba(8, 11, 16, 0.75) 55%, rgba(8, 11, 16, 0.2) 75%, transparent 92%)"
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
              <span
                className={
                  theme === "dark"
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
                  backgroundColor: theme === "dark" ? "#00D2FF" : "#0074db",
                  color: theme === "dark" ? "#080B10" : "#ffffff",
                  boxShadow:
                    theme === "dark"
                      ? "0 4px 14px rgba(0, 210, 255, 0.3)"
                      : "0 4px 14px rgba(0, 116, 219, 0.3)",
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
                  <span
                    className="w-2.5 h-2.5 rounded-full animate-ping"
                    style={{ backgroundColor: theme === "dark" ? "#00D2FF" : "#0074db" }}
                  />
                  <span
                    className="font-label-sm text-label-sm font-mono font-bold tracking-wider"
                    style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
                  >
                    ACTIVE ARCHITECTURE INSTANCE
                  </span>
                </div>
                <span
                  className="font-label-sm text-label-sm font-mono"
                  style={{ color: "#64748B" }}
                >
                  SYSTEM NOMINAL // 99.98% SLA
                </span>
              </div>

              {/* Sparkline Visual Simulation */}
              <div
                className="w-full h-24 rounded flex items-end p-2 relative overflow-hidden"
                style={{
                  backgroundColor: theme === "dark" ? "#080B10" : "#f8fafc",
                  border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
                }}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(#00D2FF 1px, transparent 1px), linear-gradient(90deg, #00D2FF 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                />
                <svg
                  className="w-full h-full"
                  preserveAspectRatio="none"
                  viewBox="0 0 300 80"
                >
                  <path
                    d="M0,60 Q20,30 40,45 T80,20 T120,40 T160,15 T200,30 T240,10 T280,25 T300,5"
                    fill="none"
                    stroke={theme === "dark" ? "#00D2FF" : "#0074db"}
                    strokeLinecap="round"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M0,60 Q20,30 40,45 T80,20 T120,40 T160,15 T200,30 T240,10 T280,25 T300,5 L300,80 L0,80 Z"
                    fill={
                      theme === "dark"
                        ? "url(#cyan-grad-dark)"
                        : "url(#blue-grad-light)"
                    }
                  />
                  <defs>
                    <linearGradient id="cyan-grad-dark" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#00D2FF" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="blue-grad-light" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#0074db" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#0074db" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Console Quick Metrics */}
              <div className="grid grid-cols-3 gap-2 text-center pt-1 font-mono">
                <div
                  className="p-2 rounded"
                  style={{
                    backgroundColor: theme === "dark" ? "#141B26" : "#f8fafc",
                    border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
                  }}
                >
                  <div
                    className="font-bold text-sm"
                    style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
                  >
                    4.2k
                  </div>
                  <div className="text-[10px]" style={{ color: "#64748B" }}>
                    REQ / SEC
                  </div>
                </div>
                <div
                  className="p-2 rounded"
                  style={{
                    backgroundColor: theme === "dark" ? "#141B26" : "#f8fafc",
                    border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
                  }}
                >
                  <div
                    className="font-bold text-sm"
                    style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
                  >
                    5 NODES
                  </div>
                  <div className="text-[10px]" style={{ color: "#64748B" }}>
                    GLOBAL MESH
                  </div>
                </div>
                <div
                  className="p-2 rounded"
                  style={{
                    backgroundColor: theme === "dark" ? "#141B26" : "#f8fafc",
                    border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
                  }}
                >
                  <div
                    className="font-bold text-sm"
                    style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
                  >
                    &lt; 12 MIN
                  </div>
                  <div className="text-[10px]" style={{ color: "#64748B" }}>
                    DEPLOY VELOCITY
                  </div>
                </div>
              </div>
            </div>

            {/* Studio Banner Preview Card */}
            <div
              className="p-4 rounded-xl flex items-center justify-between shadow-sm"
              style={{
                backgroundColor: theme === "dark" ? "#0F141C" : "#ffffff",
                border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded flex items-center justify-center font-mono font-bold"
                  style={{
                    backgroundColor:
                      theme === "dark" ? "rgba(0, 210, 255, 0.12)" : "rgba(0, 116, 219, 0.1)",
                    color: theme === "dark" ? "#00D2FF" : "#0074db",
                  }}
                >
                  TX
                </div>
                <div>
                  <div
                    className="font-headline-sm text-xs font-bold uppercase tracking-wider"
                    style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
                  >
                    Global Delivery Engine
                  </div>
                  <div className="font-label-sm text-[11px]" style={{ color: "#64748B" }}>
                    Sacramento • London • Dubai • Islamabad
                  </div>
                </div>
              </div>
              <span
                className="font-mono text-xs font-semibold px-2 py-1 rounded"
                style={{
                  backgroundColor: "rgba(16, 185, 129, 0.15)",
                  color: "#10B981",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                }}
              >
                PODS ONLINE
              </span>
            </div>
          </div>
        </div>

        {/* Core Engine Metrics Bar */}
        <div
          className="p-space-lg rounded-xl shadow-md grid grid-cols-2 md:grid-cols-5 gap-space-md"
          style={{
            backgroundColor: theme === "dark" ? "#0F141C" : "#ffffff",
            border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
          }}
        >
          <div className="flex flex-col gap-1">
            <span
              className="font-display text-2xl lg:text-3xl font-bold"
              style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
            >
              $140M+
            </span>
            <span
              className="font-label-sm text-label-sm"
              style={{ color: theme === "dark" ? "#94A3B8" : "#64748B" }}
            >
              Attributed Client Revenue
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span
              className="font-display text-2xl lg:text-3xl font-bold"
              style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
            >
              45+
            </span>
            <span
              className="font-label-sm text-label-sm"
              style={{ color: theme === "dark" ? "#94A3B8" : "#64748B" }}
            >
              Production Systems Deployed
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span
              className="font-display text-2xl lg:text-3xl font-bold"
              style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
            >
              99.98%
            </span>
            <span
              className="font-label-sm text-label-sm"
              style={{ color: theme === "dark" ? "#94A3B8" : "#64748B" }}
            >
              Average System Availability
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span
              className="font-display text-2xl lg:text-3xl font-bold"
              style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
            >
              4.2x
            </span>
            <span
              className="font-label-sm text-label-sm"
              style={{ color: theme === "dark" ? "#94A3B8" : "#64748B" }}
            >
              Median Client Lead Velocity
            </span>
          </div>
          <div className="flex flex-col gap-1 col-span-2 md:col-span-1">
            <span
              className="font-display text-2xl lg:text-3xl font-bold"
              style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
            >
              8
            </span>
            <span
              className="font-label-sm text-label-sm"
              style={{ color: theme === "dark" ? "#94A3B8" : "#64748B" }}
            >
              Global Engineering Delivery Hubs
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
