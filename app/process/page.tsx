import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Our Process & Methodology | 4-Stage Delivery Framework",
  description:
    "Learn about TRIVEX's disciplined 4-stage execution process: Discover, Strategise, Create & Build, and Launch & Improve. Transparent, agile, and aligned with business ROI.",
  pathname: "/process",
});

export default function ProcessPage() {
  const STAGES = [
    {
      step: "01",
      name: "Discover & Frame",
      headline: "Deconstruct Objectives & Establish Empirical Baselines",
      description:
        "Every successful initiative starts with deep domain understanding. We analyze your commercial targets, audit existing technical assets and marketing funnels, and benchmark competitor positioning.",
      deliverables: [
        "Stakeholder Discovery Workshop",
        "Technical Architecture & Funnel Audit",
        "Competitive Landscape & Benchmarking",
        "Project Scope Definition & Target KPI Matrix",
      ],
      timeframe: "Week 1",
      icon: "explore",
    },
    {
      step: "02",
      name: "Strategise & Architect",
      headline: "Blueprint the Solution Before Writing a Single Line of Code",
      description:
        "We eliminate risk and rework through meticulous architectural design. We construct user journeys, wireframes, component design systems, and data flow models.",
      deliverables: [
        "High-Fidelity Wireframes & UX User Journeys",
        "System Architecture & API Specifications",
        "Component Design System & Style Tokens",
        "Sprint Roadmap & Milestones Schedule",
      ],
      timeframe: "Weeks 1 – 2",
      icon: "architecture",
    },
    {
      step: "03",
      name: "Create & Build",
      headline: "Rapid, Modular Execution with Full Staging Visibility",
      description:
        "Our multidisciplinary squads execute in focused two-week sprints. Code is committed to clean repositories with continuous integration, while clients have 24/7 visibility on active staging environments.",
      deliverables: [
        "Iterative Sprint Cycles with Weekly Demos",
        "Clean, Maintainable Next.js / TypeScript / WordPress Code",
        "Live Staging Environment Updates",
        "Automated Unit, Integration & Responsive Testing",
      ],
      timeframe: "Weeks 3 – 8 (Scope Dependent)",
      icon: "code",
    },
    {
      step: "04",
      name: "Launch & Improve",
      headline: "Flawless Deployment Followed by Continuous Data-Driven Optimization",
      description:
        "Deployment is not the end; it is the starting point of real customer feedback. We conduct pre-launch security audits, DNS migrations, analytics tagging verification, and post-launch conversion optimization.",
      deliverables: [
        "Zero-Downtime Production Deployment",
        "Core Web Vitals & Technical SEO Certification",
        "Full Git Repository, Design System & IP Handover",
        "Post-Launch Performance Monitoring & CRO Roadmap",
      ],
      timeframe: "Ongoing Post-Launch",
      icon: "rocket_launch",
    },
  ];

  const STANDARDS = [
    {
      title: "Direct Access to Engineers",
      desc: "No game of telephone through non-technical account managers. You speak directly with the architects and creatives building your product.",
      icon: "forum",
    },
    {
      title: "Weekly Staging Releases",
      desc: "You never have to wonder what is happening. We push functional code to interactive staging URLs every Friday for review.",
      icon: "published_with_changes",
    },
    {
      title: "Clean Code & Zero Lock-in",
      desc: "All source code, design libraries, and ad accounts belong entirely to you from day one. You can inspect git commits at any time.",
      icon: "verified_user",
    },
    {
      title: "Transparent Fixed-Scope Milestones",
      desc: "Clear scope of work agreements with transparent payment milestones tied to concrete delivery gates.",
      icon: "fact_check",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 transition-colors duration-200 bg-[#f8f9ff] text-[#0b1c30] dark:bg-[#080B10] dark:text-white">
      {/* Hero Section */}
      <section className="relative px-margin pt-12 pb-16 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono font-semibold bg-blue-500/10 border-blue-500/25 text-[#0088FF] dark:bg-cyan-500/10 dark:border-cyan-500/25 dark:text-[#00D2FF]">
            <span className="material-symbols-outlined text-sm">cycle</span>
            <span>METHODOLOGY &amp; EXECUTION</span>
          </div>

          <h1 className="font-brand text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            How We Turn Ideas into Scalable Digital Realities
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Predictability, transparency, and speed. Our 4-stage delivery lifecycle eliminates miscommunication and guarantees software and marketing assets built to standard.
          </p>
        </div>
      </section>

      {/* 4 Stages Detailed Section */}
      <section className="px-margin py-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {STAGES.map((stage) => (
            <div
              key={stage.step}
              className="p-8 sm:p-12 rounded-3xl border bg-white border-slate-200 dark:bg-[#0F141C] dark:border-[#1E2633] space-y-8"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-[#1E2633] pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-mono text-xl font-bold bg-blue-500/10 text-[#0088FF] dark:bg-cyan-500/10 dark:text-[#00D2FF]">
                    {stage.step}
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-[#0088FF] dark:text-[#00D2FF] uppercase">
                      Stage {stage.step}
                    </div>
                    <h2 className="font-brand text-2xl sm:text-3xl font-bold">{stage.name}</h2>
                  </div>
                </div>

                <div className="px-4 py-2 rounded-xl text-xs font-mono font-semibold border bg-slate-50 border-slate-200 dark:bg-[#141B26] dark:border-[#1E2633] self-start md:self-auto">
                  Typical Duration: {stage.timeframe}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-brand text-lg sm:text-xl font-bold">{stage.headline}</h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl">
                  {stage.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="p-6 rounded-2xl border bg-slate-50 border-slate-200 dark:bg-[#141B26] dark:border-[#1E2633] space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider font-bold text-[#0088FF] dark:text-[#00D2FF]">
                  Key Stage Artifacts &amp; Deliverables:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {stage.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <span className="material-symbols-outlined text-base text-[#0088FF] dark:text-[#00D2FF]">
                        check_circle
                      </span>
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Delivery Standards Grid */}
      <section className="px-margin py-14">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0088FF] dark:text-[#00D2FF]">
              Collaboration Principles
            </span>
            <h2 className="font-brand text-2xl sm:text-3xl md:text-4xl font-bold">
              Communication &amp; Quality Standards
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              How we keep projects running smoothly, on budget, and free from administrative overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STANDARDS.map((std, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl border bg-white border-slate-200 dark:bg-[#0F141C] dark:border-[#1E2633] space-y-3"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-500/10 text-[#0088FF] dark:bg-cyan-500/10 dark:text-[#00D2FF]">
                  <span className="material-symbols-outlined text-xl">{std.icon}</span>
                </div>
                <h3 className="font-brand text-base font-bold">{std.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {std.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="px-margin pt-10">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl border text-center space-y-6 bg-white border-blue-500/30 dark:bg-[#0F141C] dark:border-cyan-500/30">
            <h2 className="font-brand text-2xl sm:text-3xl md:text-4xl font-bold">
              Ready to Kick Off Stage 01?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Book a 30-minute discovery session. We will evaluate your scope and assemble an actionable roadmap within 24 business hours.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-[#0088FF] text-white dark:bg-[#00D2FF] dark:text-black shadow-lg hover:brightness-110 transition-all"
              >
                <span>Book a Free Strategy Consultation</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
