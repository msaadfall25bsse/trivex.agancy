"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { Icon } from "@/components/ui/Icon";

interface PracticeDomain {
  id: string;
  category: "Web Applications" | "Mobile Apps" | "E-commerce" | "AI & Automation";
  badge: string;
  status: string;
  title: string;
  scopeSummary: string;
  technologies: string[];
  deliverableHighlights: string[];
}

const PRACTICE_DOMAINS: PracticeDomain[] = [
  {
    id: "headless-commerce",
    category: "E-commerce",
    badge: "GLOBAL COMMERCE",
    status: "CASE STUDY IN PRODUCTION",
    title: "Headless E-Commerce & Multi-Currency Storefront Architecture",
    scopeSummary:
      "Sub-second page speeds, global multi-currency checkout routing, and real-time ERP inventory synchronization engineered for high-volume retail.",
    technologies: ["Shopify Plus", "Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    deliverableHighlights: [
      "Custom headless storefront frontend",
      "Single-page multi-currency checkout",
      "Automated inventory & ERP sync",
    ],
  },
  {
    id: "iot-operations-portal",
    category: "Web Applications",
    badge: "ENTERPRISE SAAS",
    status: "CASE STUDY IN PRODUCTION",
    title: "Commercial Fleet Dispatch & Operational Logistics Portal",
    scopeSummary:
      "Reactive cloud portal providing commercial fleet operators with real-time telematics tracking, automated booking scheduling, and customer self-service modules.",
    technologies: ["React / Next.js", "Node.js", "PostgreSQL", "REST APIs", "AWS"],
    deliverableHighlights: [
      "Real-time operations dispatch dashboard",
      "Interactive customer booking workflow",
      "Automated SMS & email dispatch notifications",
    ],
  },
  {
    id: "executive-dispatch-app",
    category: "Mobile Apps",
    badge: "CROSS-PLATFORM MOBILE",
    status: "CASE STUDY IN PRODUCTION",
    title: "VIP Mobility & Real-Time Fleet Telemetry Mobile Platform",
    scopeSummary:
      "Dual cross-platform passenger and driver applications built with background GPS tracking, dynamic fare pricing, and escrow payment processing.",
    technologies: ["Flutter", "Dart", "Firebase", "Stripe API", "Google Maps SDK"],
    deliverableHighlights: [
      "Passenger iOS & Android application",
      "Driver dispatch & navigation app",
      "Real-time telemetry & GPS routing",
    ],
  },
  {
    id: "intelligent-automation",
    category: "AI & Automation",
    badge: "AI SYSTEMS & WORKFLOWS",
    status: "CASE STUDY IN PRODUCTION",
    title: "Autonomous Enterprise Pipeline & Multi-Agent Intelligence",
    scopeSummary:
      "Custom LLM integrations, multi-channel customer triage agents, and enterprise workflow automation reducing repetitive operational overhead.",
    technologies: ["Python", "FastAPI", "OpenAI API", "LangChain", "Vector DB"],
    deliverableHighlights: [
      "Custom triage & document extraction bots",
      "Automated CRM & ticketing synchronizers",
      "Enterprise security & access control",
    ],
  },
];

const FILTERS = ["All Domains", "Web Applications", "Mobile Apps", "E-commerce", "AI & Automation"];

export function CaseStudiesSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [activeFilter, setActiveFilter] = useState<string>("All Domains");

  const filteredDomains =
    activeFilter === "All Domains"
      ? PRACTICE_DOMAINS
      : PRACTICE_DOMAINS.filter((d) => d.category === activeFilter);

  return (
    <section
      id="case-studies"
      className="w-full px-margin py-space-xl transition-colors bg-transparent"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span
              className="font-label-sm text-label-sm font-semibold uppercase tracking-widest"
              style={{ color: isDark ? "#00D2FF" : "#005baf" }}
            >
              Selected Work &amp; Practice Domains
            </span>
            <h2
              className="font-display text-display uppercase tracking-tight"
              style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
            >
              Architected for Performance &amp; Scale
            </h2>
            <p
              className="font-body-lg text-body-lg leading-relaxed"
              style={{ color: isDark ? "#94A3B8" : "#475569" }}
            >
              Our client engineering deliverables are designed with strict code quality, zero-waste infrastructure, and measurable commercial velocity.
            </p>
          </div>

          {/* Dynamic Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {FILTERS.map((f) => {
              const isActive = activeFilter === f;
              return (
                <button
                  key={f}
                  className="px-3.5 py-1.5 rounded-full font-mono text-xs font-semibold transition-all cursor-pointer border"
                  style={{
                    backgroundColor: isActive
                      ? isDark
                        ? "#00D2FF"
                        : "#0074db"
                      : isDark
                      ? "rgba(255, 255, 255, 0.04)"
                      : "rgba(255, 255, 255, 0.6)",
                    borderColor: isActive
                      ? isDark
                        ? "#00D2FF"
                        : "#0074db"
                      : isDark
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(0, 0, 0, 0.08)",
                    color: isActive ? (isDark ? "#080B10" : "#ffffff") : isDark ? "#94A3B8" : "#475569",
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

        {/* Practice Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {filteredDomains.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl glass-panel glass-panel-interactive p-6 sm:p-8 flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span
                    className="px-3 py-1 rounded-full font-mono text-[11px] font-bold uppercase tracking-wider border"
                    style={{
                      backgroundColor: isDark ? "rgba(0, 210, 255, 0.12)" : "rgba(0, 116, 219, 0.08)",
                      borderColor: isDark ? "rgba(0, 210, 255, 0.3)" : "rgba(0, 116, 219, 0.2)",
                      color: isDark ? "#00D2FF" : "#005baf",
                    }}
                  >
                    {item.badge}
                  </span>
                  <span
                    className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold uppercase border"
                    style={{
                      backgroundColor: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.04)",
                      borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)",
                      color: isDark ? "#94A3B8" : "#64748B",
                    }}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3
                    className="font-display text-xl sm:text-2xl font-bold tracking-tight"
                    style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-body-sm text-body-sm leading-relaxed"
                    style={{ color: isDark ? "#94A3B8" : "#475569" }}
                  >
                    {item.scopeSummary}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="pt-2 flex flex-col gap-1.5">
                  <span
                    className="font-mono text-[11px] uppercase tracking-wider font-semibold"
                    style={{ color: isDark ? "#64748B" : "#64748B" }}
                  >
                    Key Architecture Scopes
                  </span>
                  <ul className="space-y-1.5 font-body-sm text-xs">
                    {item.deliverableHighlights.map((del) => (
                      <li key={del} className="flex items-center gap-2" style={{ color: isDark ? "#CBD5E1" : "#334155" }}>
                        <Icon name="check" className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies & Inquire */}
              <div
                className="pt-4 border-t flex flex-wrap items-center justify-between gap-3"
                style={{ borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)" }}
              >
                <div className="flex flex-wrap gap-1.5">
                  {item.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono border"
                      style={{
                        backgroundColor: isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(255, 255, 255, 0.8)",
                        borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)",
                        color: isDark ? "#94A3B8" : "#64748B",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="font-mono text-xs font-bold flex items-center gap-1 hover:underline"
                  style={{ color: isDark ? "#00D2FF" : "#005baf" }}
                >
                  <span>Request Scope Overview</span>
                  <Icon name="arrow_forward" className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Confidentiality & Real Projects Notice Banner */}
        <div
          className="p-6 sm:p-8 rounded-3xl border flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            backgroundColor: isDark ? "rgba(15, 20, 28, 0.6)" : "rgba(248, 250, 252, 0.8)",
            borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
              style={{
                backgroundColor: isDark ? "rgba(0, 210, 255, 0.1)" : "rgba(0, 116, 219, 0.08)",
                borderColor: isDark ? "rgba(0, 210, 255, 0.25)" : "rgba(0, 116, 219, 0.2)",
                color: isDark ? "#00D2FF" : "#005baf",
              }}
            >
              <Icon name="lock" className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1">
              <h4
                className="font-display text-base font-bold"
                style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
              >
                Client Privacy &amp; Production Integrity
              </h4>
              <p
                className="font-body-sm text-xs sm:text-sm leading-relaxed max-w-2xl"
                style={{ color: isDark ? "#94A3B8" : "#475569" }}
              >
                TRIVEX does not publish unverified client names or fabricated performance claims. Active client codebases and case studies are protected by strict bilateral non-disclosure agreements. Verified case studies and staging demos are provided during confidential partner consultations.
              </p>
            </div>
          </div>

          <Link
            href="/work"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs font-bold transition-all border hover:brightness-110"
            style={{
              backgroundColor: isDark ? "#00D2FF" : "#0074db",
              borderColor: isDark ? "#00D2FF" : "#0074db",
              color: isDark ? "#080B10" : "#ffffff",
            }}
          >
            <span>View Work Portal</span>
            <Icon name="arrow_forward" className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesSection;
