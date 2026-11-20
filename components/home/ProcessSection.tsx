"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { Icon } from "@/components/ui/Icon";

export function ProcessSection() {
  const { theme } = useTheme();

  const steps = [
    {
      num: "01",
      title: "Discovery & Strategy",
      desc: "Deep dive into user personas, unit economics, architecture blueprints, and KPI scorecards to ensure business-first engineering.",
    },
    {
      num: "02",
      title: "Prototype & UX",
      desc: "High-fidelity wireframes, interactive user testing flows, and design system components finalized in Figma before a single line of code.",
    },
    {
      num: "03",
      title: "Agile Development",
      desc: "Bi-weekly sprints, pull request reviews, automated CI/CD builds, and constant visibility via Slack channels and staging deployments.",
    },
    {
      num: "04",
      title: "Rigorous QA & Testing",
      desc: "Automated end-to-end Cypress/Playwright suites, regression testing, load balancing stress tests, and SOC2 compliance audits.",
    },
    {
      num: "05",
      title: "Strategic Launch",
      desc: "Zero-downtime blue/green deployments, DNS migrations, conversion tracking tagging, and live infrastructure monitoring on day one.",
    },
    {
      num: "06",
      title: "24/7 Support & Scale",
      desc: "Dedicated maintenance pods, monthly performance audits, continuous CRO experiments, and instant security patch cycles.",
    },
  ];

  return (
    <section
      className="w-full px-margin py-space-xl transition-colors bg-transparent"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        <div className="flex flex-col gap-space-xs max-w-3xl">
          <span
            className="font-label-sm text-label-sm font-semibold uppercase tracking-widest"
            style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
          >
            Engineering Methodology
          </span>
          <h2
            className="font-display text-display uppercase tracking-tight"
            style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
          >
            6-Step Execution Lifecycle
          </h2>
          <p
            className="font-body-lg text-body-lg leading-relaxed"
            style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
          >
            How we transform ambitious scopes into high-velocity reality without friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {steps.map((step) => (
            <div
              key={step.num}
              className="glass-panel glass-panel-interactive p-space-lg rounded-3xl flex flex-col gap-space-sm relative"
            >
              <span
                className="font-headline-lg text-headline-lg font-bold font-mono"
                style={{
                  color:
                    theme === "dark" ? "rgba(0, 210, 255, 0.25)" : "rgba(0, 91, 175, 0.25)",
                }}
              >
                {step.num}
              </span>
              <h3
                className="font-headline-sm text-headline-sm"
                style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
              >
                {step.title}
              </h3>
              <p
                className="font-body-sm text-body-sm leading-relaxed"
                style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Link to Full Process Page */}
        <div className="flex justify-center pt-2">
          <Link
            href="/process"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm font-mono transition-all hover:brightness-110 shadow-md"
            style={{
              backgroundColor: theme === "dark" ? "#00D2FF" : "#0088FF",
              color: theme === "dark" ? "#000000" : "#ffffff",
            }}
          >
            <span>Learn More About Our Engineering Methodology</span>
            <Icon name="arrow_forward" className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
