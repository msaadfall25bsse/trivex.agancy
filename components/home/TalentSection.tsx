"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { Icon } from "@/components/ui/Icon";
import { FOUNDERS_LIST } from "@/data/founders";
import { FounderCard } from "@/components/team/FounderCard";

export function TalentSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="leadership"
      className="w-full px-margin py-space-xl transition-colors bg-transparent"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span
              className="font-label-sm text-label-sm font-semibold uppercase tracking-widest"
              style={{ color: isDark ? "#00D2FF" : "#005baf" }}
            >
              Founding Leadership
            </span>
            <h2
              className="font-display text-display uppercase tracking-tight"
              style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
            >
              Three Minds. One Unified Vision.
            </h2>
            <p
              className="font-body-lg text-body-lg leading-relaxed"
              style={{ color: isDark ? "#94A3B8" : "#475569" }}
            >
              Every client project is guided directly by the three founding partners. We unite software architecture, delivery velocity, and digital brand design under one accountable leadership team.
            </p>
          </div>

          <Link
            href="/team"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold hover:underline shrink-0"
            style={{ color: isDark ? "#00D2FF" : "#005baf" }}
          >
            <span>Explore Executive Profiles</span>
            <Icon name="arrow_forward" className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Founders Grid - Strictly Equal Visual Importance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          {FOUNDERS_LIST.map((founder) => (
            <FounderCard key={founder.id} founder={founder} />
          ))}
        </div>

        {/* Flexible Engagement Models Header */}
        <div className="pt-space-md flex flex-col gap-space-xs max-w-3xl">
          <span
            className="font-label-sm text-label-sm font-semibold uppercase tracking-widest"
            style={{ color: isDark ? "#00D2FF" : "#005baf" }}
          >
            Engagement Models
          </span>
          <h3
            className="font-headline-lg text-headline-lg"
            style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
          >
            Precision Delivery Structured Around Your Business
          </h3>
          <p
            className="font-body-md text-body-md leading-relaxed"
            style={{ color: isDark ? "#94A3B8" : "#475569" }}
          >
            Choose between dedicated embedded squads or fixed-scope outcome delivery.
          </p>
        </div>

        {/* Comparison Cards: Model A vs Model B */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
          {/* Model A: Dedicated Squad */}
          <div className="glass-panel glass-panel-interactive p-space-lg rounded-3xl flex flex-col justify-between gap-space-md">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span
                  className="px-3 py-1 rounded font-label-sm text-label-sm font-bold"
                  style={{
                    backgroundColor: isDark ? "rgba(0, 210, 255, 0.12)" : "rgba(0, 116, 219, 0.1)",
                    color: isDark ? "#00D2FF" : "#0074db",
                    border: isDark
                      ? "1px solid rgba(0, 210, 255, 0.3)"
                      : "1px solid rgba(0, 116, 219, 0.3)",
                  }}
                >
                  RECOMMENDED FOR SCALE
                </span>
                <span
                  className="font-label-md text-label-md font-mono"
                  style={{ color: isDark ? "#94A3B8" : "#64748B" }}
                >
                  FLEXIBLE SPRINT
                </span>
              </div>
              <h4
                className="font-headline-md text-headline-md"
                style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
              >
                Dedicated Agile Engineering Squad
              </h4>
              <p
                className="font-body-md text-body-md leading-relaxed"
                style={{ color: isDark ? "#94A3B8" : "#475569" }}
              >
                Cross-functional product squads (Frontend, Backend, Design, QA) embedded directly into your tools. Scale up or down with 30-day sprint flexibility.
              </p>
              <ul className="space-y-2 font-body-sm text-body-sm pt-2">
                {[
                  "Direct Slack / GitHub / Jira integration",
                  "100% intellectual property transfer with automated daily commits",
                  "Active working hour overlap across US, UK, and European timezones",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2"
                    style={{ color: isDark ? "#94A3B8" : "#475569" }}
                  >
                    <span style={{ color: isDark ? "#00D2FF" : "#0074db" }}>
                      <Icon name="check_circle" className="w-4 h-4 shrink-0" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              className="inline-flex items-center justify-center px-6 py-3 rounded font-label-lg text-label-lg font-medium shadow-sm transition-all hover:brightness-110"
              href="/contact"
              style={{
                backgroundColor: isDark ? "#00D2FF" : "#0074db",
                color: isDark ? "#080B10" : "#ffffff",
              }}
            >
              <span>Explore Dedicated Squad</span>
            </Link>
          </div>

          {/* Model B: Fixed Scope Project */}
          <div className="glass-panel glass-panel-interactive p-space-lg rounded-3xl flex flex-col justify-between gap-space-md">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span
                  className="px-3 py-1 rounded font-label-sm text-label-sm font-bold"
                  style={{
                    backgroundColor: isDark ? "#141B26" : "#f1f5f9",
                    color: isDark ? "#FFFFFF" : "#0b1c30",
                    border: isDark ? "1px solid #1E2633" : "1px solid #e2e8f0",
                  }}
                >
                  GUARANTEED OUTCOME
                </span>
                <span
                  className="font-label-md text-label-md font-mono"
                  style={{ color: isDark ? "#94A3B8" : "#64748B" }}
                >
                  MILESTONE TIERS
                </span>
              </div>
              <h4
                className="font-headline-md text-headline-md"
                style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
              >
                Fixed-Price Turnkey Delivery
              </h4>
              <p
                className="font-body-md text-body-md leading-relaxed"
                style={{ color: isDark ? "#94A3B8" : "#475569" }}
              >
                Rigidly scoped deliverables with strict milestones and pre-agreed financial commitments. Ideal for MVPs, platform revamps, and isolated feature deliveries.
              </p>
              <ul className="space-y-2 font-body-sm text-body-sm pt-2">
                {[
                  "Detailed architecture documentation and design system sign-off",
                  "Zero budget creep guarantee with clearly defined scope boundaries",
                  "30-day post-launch warranty and hyper-care SLA",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2"
                    style={{ color: isDark ? "#94A3B8" : "#475569" }}
                  >
                    <span style={{ color: isDark ? "#00D2FF" : "#0074db" }}>
                      <Icon name="check_circle" className="w-4 h-4 shrink-0" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              className="inline-flex items-center justify-center px-6 py-3 rounded font-label-lg text-label-lg font-medium shadow-sm transition-all hover:brightness-105"
              href="/contact"
              style={{
                backgroundColor: isDark ? "#141B26" : "#e5eeff",
                border: isDark ? "1px solid #1E2633" : "1px solid #c0c6d6",
                color: isDark ? "#FFFFFF" : "#0b1c30",
              }}
            >
              <span>Request Fixed Scope Quote</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TalentSection;
