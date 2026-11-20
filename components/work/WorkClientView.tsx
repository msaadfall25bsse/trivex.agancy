"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { PORTFOLIO_PROJECTS, PRACTICE_DOMAINS } from "@/data/portfolio";
import { Icon } from "@/components/ui/Icon";

export function WorkClientView() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Web Applications",
    "Mobile Apps",
    "E-commerce",
    "AI & Automation",
    "WordPress & CMS",
    "Branding & Design",
  ];

  const hasRealProjects = PORTFOLIO_PROJECTS.length > 0;

  const filteredDomains =
    selectedCategory === "All"
      ? PRACTICE_DOMAINS
      : PRACTICE_DOMAINS.filter((d) => d.category === selectedCategory);

  return (
    <div className="space-y-12">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all cursor-pointer border"
              style={{
                backgroundColor: isActive
                  ? isDark
                    ? "#00D2FF"
                    : "#0074db"
                  : isDark
                  ? "rgba(255, 255, 255, 0.04)"
                  : "rgba(255, 255, 255, 0.7)",
                borderColor: isActive
                  ? isDark
                    ? "#00D2FF"
                    : "#0074db"
                  : isDark
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(0, 0, 0, 0.08)",
                color: isActive ? (isDark ? "#080B10" : "#ffffff") : isDark ? "#CBD5E1" : "#475569",
              }}
              type="button"
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* When Real Projects Are Empty: Showcase Authentic Practice Scopes & In-Production State */}
      {!hasRealProjects && (
        <div className="space-y-8">
          {/* Honest Status & Confidentiality Banner */}
          <div
            className="p-6 sm:p-8 rounded-3xl border flex flex-col md:flex-row items-center justify-between gap-6"
            style={{
              backgroundColor: isDark ? "rgba(15, 20, 28, 0.75)" : "rgba(248, 250, 252, 0.9)",
              borderColor: isDark ? "rgba(0, 210, 255, 0.25)" : "rgba(0, 116, 219, 0.2)",
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border"
                style={{
                  backgroundColor: isDark ? "rgba(0, 210, 255, 0.12)" : "rgba(0, 116, 219, 0.1)",
                  borderColor: isDark ? "rgba(0, 210, 255, 0.3)" : "rgba(0, 116, 219, 0.25)",
                  color: isDark ? "#00D2FF" : "#005baf",
                }}
              >
                <Icon name="verified_user" className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-500">
                    Active Production &amp; Confidential Engagements
                  </span>
                </div>
                <h3
                  className="font-display text-lg sm:text-xl font-bold"
                  style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
                >
                  Authentic Client Work Under Bilateral NDA
                </h3>
                <p
                  className="font-body-sm text-xs sm:text-sm leading-relaxed max-w-3xl"
                  style={{ color: isDark ? "#94A3B8" : "#475569" }}
                >
                  TRIVEX enforces a strict zero-fabrication policy. We never publish fake client names, fictitious case studies, or fabricated ROI metrics. Our active client engagements are governed by strict confidentiality. Below are our concrete architectural practice scopes. Full case study walkthroughs and live staging environments are shared during private consultation sessions.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs font-bold transition-all shadow-md hover:scale-105"
              style={{
                backgroundColor: isDark ? "#00D2FF" : "#0074db",
                color: isDark ? "#080B10" : "#ffffff",
              }}
            >
              <span>Schedule NDA Walkthrough</span>
              <Icon name="arrow_forward" className="w-4 h-4" />
            </Link>
          </div>

          {/* Practice Domains Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDomains.map((domain) => (
              <div
                key={domain.id}
                className="glass-panel glass-panel-interactive p-6 sm:p-7 rounded-3xl flex flex-col justify-between gap-6"
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
                      {domain.badge}
                    </span>
                    <span
                      className="text-[10px] font-mono px-2 py-0.5 rounded border"
                      style={{
                        backgroundColor: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.04)",
                        borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)",
                        color: isDark ? "#94A3B8" : "#64748B",
                      }}
                    >
                      IN PRODUCTION
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3
                      className="font-display text-lg sm:text-xl font-bold tracking-tight"
                      style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
                    >
                      {domain.title}
                    </h3>
                    <p
                      className="font-body-sm text-xs sm:text-sm leading-relaxed"
                      style={{ color: isDark ? "#94A3B8" : "#475569" }}
                    >
                      {domain.summary}
                    </p>
                  </div>

                  {/* Architecture Focus */}
                  <div className="pt-2 flex flex-col gap-2">
                    <span
                      className="font-mono text-[11px] uppercase tracking-wider font-semibold"
                      style={{ color: isDark ? "#64748B" : "#64748B" }}
                    >
                      Delivery Specifications
                    </span>
                    <ul className="space-y-1.5 font-body-sm text-xs">
                      {domain.architecturalFocus.map((focus) => (
                        <li key={focus} className="flex items-start gap-2" style={{ color: isDark ? "#CBD5E1" : "#334155" }}>
                          <span style={{ color: isDark ? "#00D2FF" : "#0074db" }} className="mt-0.5 shrink-0">
                            <Icon name="check" className="w-3.5 h-3.5 text-emerald-500" />
                          </span>
                          <span>{focus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies & Action */}
                <div
                  className="pt-4 border-t flex flex-col gap-3"
                  style={{ borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)" }}
                >
                  <div className="flex flex-wrap gap-1.5">
                    {domain.technologies.map((t) => (
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
                    className="font-mono text-xs font-bold flex items-center justify-between pt-1 hover:underline"
                    style={{ color: isDark ? "#00D2FF" : "#005baf" }}
                  >
                    <span>Request Technical Scope</span>
                    <Icon name="arrow_forward" className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkClientView;
