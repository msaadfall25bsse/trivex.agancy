"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { Icon } from "@/components/ui/Icon";

export function TalentSection() {
  const { theme } = useTheme();

  const architects = [
    {
      role: "STAFF ARCHITECT",
      name: "Noman Tariq",
      desc: "Lead Backend & AI Systems (Python / Go / LangChain)",
    },
    {
      role: "DESIGN DIRECTOR",
      name: "Asfand Yar",
      desc: "Principal UI/UX & Design Systems Lead",
    },
    {
      role: "MOBILE PRINCIPAL",
      name: "Asim Tariq",
      desc: "Staff Mobile Engineer (Flutter / iOS / Android)",
    },
    {
      role: "PLATFORM LEAD",
      name: "Muhammad Haris",
      desc: "Lead Headless CMS & Modern Frontends",
    },
  ];

  return (
    <section
      id="talent"
      className="w-full px-margin py-space-xl transition-colors"
      style={{
        backgroundColor: theme === "dark" ? "#0B0E14" : "#eff4ff",
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
            className="font-display text-display uppercase tracking-tight"
            style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
          >
            Precision Talent on Demand
          </h2>
          <p
            className="font-body-lg text-body-lg leading-relaxed"
            style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
          >
            Choose between dedicated embedded squads or fixed-scope outcome delivery.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
          {/* Model A: Dedicated Squad */}
          <div
            className="p-space-lg rounded-xl shadow-sm flex flex-col justify-between gap-space-md"
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
                    backgroundColor:
                      theme === "dark" ? "rgba(0, 210, 255, 0.12)" : "rgba(0, 116, 219, 0.1)",
                    color: theme === "dark" ? "#00D2FF" : "#0074db",
                    border:
                      theme === "dark"
                        ? "1px solid rgba(0, 210, 255, 0.3)"
                        : "1px solid rgba(0, 116, 219, 0.3)",
                  }}
                >
                  RECOMMENDED FOR SCALE
                </span>
                <span
                  className="font-label-md text-label-md font-mono"
                  style={{ color: theme === "dark" ? "#94A3B8" : "#64748B" }}
                >
                  FLEXIBLE SPRINT
                </span>
              </div>
              <h3
                className="font-headline-md text-headline-md"
                style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
              >
                Dedicated Agile Engineering Squad
              </h3>
              <p
                className="font-body-md text-body-md leading-relaxed"
                style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
              >
                High-output product squads (Frontend, Backend, AI Engineer, QA, Lead PM) embedded
                directly into your tools. Scale up or down with 30-day flexibility.
              </p>
              <ul className="space-y-2 font-body-sm text-body-sm pt-2">
                {[
                  "Direct Slack/Jira/Git integration",
                  "Full IP transfer & automated daily code pushes",
                  "Overlapping working hours with US/UK/EU timezones",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2"
                    style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
                  >
                    <span style={{ color: theme === "dark" ? "#00D2FF" : "#0074db" }}>
                      <Icon name="check_circle" className="w-4 h-4 shrink-0" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              className="inline-flex items-center justify-center px-6 py-3 rounded font-label-lg text-label-lg font-medium shadow-sm transition-all"
              data-path="hire-developer"
              href="/contact"
              style={{
                backgroundColor: theme === "dark" ? "#00D2FF" : "#0074db",
                color: theme === "dark" ? "#080B10" : "#ffffff",
              }}
            >
              <span>Assemble Your Squad</span>
            </Link>
          </div>

          {/* Model B: Fixed Scope Project */}
          <div
            className="p-space-lg rounded-xl shadow-sm flex flex-col justify-between gap-space-md"
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
                    backgroundColor: theme === "dark" ? "#141B26" : "#f1f5f9",
                    color: theme === "dark" ? "#FFFFFF" : "#0b1c30",
                    border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
                  }}
                >
                  GUARANTEED OUTCOME
                </span>
                <span
                  className="font-label-md text-label-md font-mono"
                  style={{ color: theme === "dark" ? "#94A3B8" : "#64748B" }}
                >
                  MILESTONE TIERS
                </span>
              </div>
              <h3
                className="font-headline-md text-headline-md"
                style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
              >
                Fixed-Price Turnkey Project
              </h3>
              <p
                className="font-body-md text-body-md leading-relaxed"
                style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
              >
                Rigidly scoped deliverables with strict deadlines and pre-agreed financial commitments.
                Ideal for MVPs, platform revamps, and isolated AI module deliveries.
              </p>
              <ul className="space-y-2 font-body-sm text-body-sm pt-2">
                {[
                  "Strict architecture documentation & design sign-off",
                  "Zero budget creep guarantee",
                  "30-day post-launch warranty & hyper-care SLA",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2"
                    style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
                  >
                    <span style={{ color: theme === "dark" ? "#00D2FF" : "#0074db" }}>
                      <Icon name="check_circle" className="w-4 h-4 shrink-0" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              className="inline-flex items-center justify-center px-6 py-3 rounded font-label-lg text-label-lg font-medium shadow-sm transition-all"
              data-path="book-consultation"
              href="/contact"
              style={{
                backgroundColor: theme === "dark" ? "#141B26" : "#e5eeff",
                border: theme === "dark" ? "1px solid #1E2633" : "1px solid #c0c6d6",
                color: theme === "dark" ? "#FFFFFF" : "#0b1c30",
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
            style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
          >
            Featured Core Leaders &amp; Architects
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {architects.map((person) => (
              <div
                key={person.name}
                className="p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs"
                style={{
                  backgroundColor: theme === "dark" ? "#0F141C" : "#ffffff",
                  border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
                }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="font-label-sm text-label-sm font-mono font-bold"
                    style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
                  >
                    {person.role}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <span
                  className="font-headline-sm text-headline-sm"
                  style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
                >
                  {person.name}
                </span>
                <span
                  className="font-body-sm text-body-sm"
                  style={{ color: theme === "dark" ? "#94A3B8" : "#64748B" }}
                >
                  {person.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TalentSection;
