import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { Icon } from "@/components/ui/Icon";
import { FOUNDERS_LIST } from "@/data/founders";
import { FounderCard } from "@/components/team/FounderCard";

export const metadata = constructMetadata({
  title: "About Us | Three Minds. One Vision.",
  description:
    "Learn about TRIVEX, a multidisciplinary digital growth and technology agency unifying performance marketing, modern software engineering, and creative production.",
  pathname: "/about",
});

export default function AboutPage() {
  const VALUES = [
    {
      icon: "trending_up",
      title: "Commercial Impact Over Vanity",
      description:
        "We reject surface-level metrics that don't pay the bills. Every marketing campaign, line of code, and creative asset is engineered to drive pipeline revenue, customer acquisition, or operational efficiency.",
    },
    {
      icon: "code_blocks",
      title: "Uncompromising Technical Standards",
      description:
        "No bloated templates, brittle workarounds, or hidden technical debt. We write modern, maintainable TypeScript, clean CSS, and scalable architectures designed for long-term reliability.",
    },
    {
      icon: "visibility",
      title: "Radical Transparency & Collaboration",
      description:
        "No opaque agencies with layers of non-technical account executives. You collaborate directly with senior engineers and growth strategists with weekly staging deployments and clear sprint visibility.",
    },
    {
      icon: "lock_open",
      title: "100% Intellectual Property Ownership",
      description:
        "We believe in zero vendor lock-in. You retain 100% ownership of your source code, design systems, ad account data, and infrastructure assets from day one.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 transition-colors duration-200 bg-[#f8f9ff] text-[#0b1c30] dark:bg-[#080B10] dark:text-white">
      {/* Hero Section */}
      <section className="relative px-margin pt-12 pb-16 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono font-semibold bg-blue-500/10 border-blue-500/25 text-[#0088FF] dark:bg-cyan-500/10 dark:border-cyan-500/25 dark:text-[#00D2FF]">
            <Icon name="groups" className="w-4 h-4" />
            <span>THREE MINDS. ONE UNIFIED VISION.</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase">
            Bridging the Gap Between Engineering &amp; Commercial Growth
          </h1>

          <p className="font-body-lg text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Most companies are forced to choose between creative agencies that don&apos;t understand software engineering, and developer shops that have never sold a product online. TRIVEX was founded to eliminate this divide.
          </p>
        </div>
      </section>

      {/* The 3 Founding Partners - Strictly Equal Importance */}
      <section id="founders" className="px-margin py-12">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0088FF] dark:text-[#00D2FF]">
              Founding Partners
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              Leadership Committed to Execution
            </h2>
            <p className="font-body-md text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              TRIVEX is steered by three founding partners who remain actively involved in every client engagement, technical architecture, and system release.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FOUNDERS_LIST.map((founder) => (
              <FounderCard key={founder.id} founder={founder} />
            ))}
          </div>
        </div>
      </section>

      {/* Origin & Philosophy Section */}
      <section className="px-margin py-12">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl border bg-white border-slate-200 dark:bg-[#0F141C] dark:border-[#1E2633] space-y-8">
            <div className="max-w-3xl space-y-5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0088FF] dark:text-[#00D2FF]">
                Our Philosophy
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
                A Unified Digital Operating Model
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Modern digital businesses cannot thrive in departmental silos. An ad campaign fails if the landing page is slow. A technically brilliant web application fails if customer acquisition channels are ignored. A brand system fails if it does not convert visitors into buyers.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                TRIVEX unifies software engineering, performance marketing, and creative production into a synchronized digital engine. We design systems that perform under enterprise traffic and drive commercial scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="px-margin py-12">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0088FF] dark:text-[#00D2FF]">
              Operating Principles
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              How We Work With You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((val) => (
              <div
                key={val.title}
                className="p-8 rounded-3xl border bg-white border-slate-200 dark:bg-[#0F141C] dark:border-[#1E2633] space-y-4"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-500/10 text-[#0088FF] dark:bg-cyan-500/10 dark:text-[#00D2FF]">
                  <Icon name={val.icon} className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold">{val.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Collaboration Model */}
      <section className="px-margin py-12">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl border bg-white border-slate-200 dark:bg-[#0F141C] dark:border-[#1E2633] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0088FF] dark:text-[#00D2FF]">
                Collaboration Model
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold">
                Direct Access to Practitioners
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                When you partner with TRIVEX, you work directly with experienced practitioners. We believe the shortest path to high-velocity delivery is removing bureaucratic intermediaries and fostering open, agile communication.
              </p>
              <div className="pt-2 flex flex-wrap gap-3 text-xs font-mono">
                <span className="px-3 py-1.5 rounded-lg border bg-slate-100 border-slate-200 dark:bg-[#141B26] dark:border-[#1E2633]">
                  ✓ Weekly Live Sprint Demos
                </span>
                <span className="px-3 py-1.5 rounded-lg border bg-slate-100 border-slate-200 dark:bg-[#141B26] dark:border-[#1E2633]">
                  ✓ Dedicated Slack / Teams Channel
                </span>
                <span className="px-3 py-1.5 rounded-lg border bg-slate-100 border-slate-200 dark:bg-[#141B26] dark:border-[#1E2633]">
                  ✓ Open GitHub / Staging Access
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl border bg-slate-50 border-slate-200 dark:bg-[#141B26] dark:border-[#1E2633] space-y-4 text-center">
              <div className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400">
                Response &amp; Delivery SLA
              </div>
              <div className="font-display text-3xl font-bold text-[#0088FF] dark:text-[#00D2FF]">
                24 Business Hours
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Guaranteed response window for all client inquiries and strategic technical assessments.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-sm bg-[#0088FF] text-white dark:bg-[#00D2FF] dark:text-black shadow-md hover:brightness-110 transition-all"
                >
                  <span>Talk to Leadership</span>
                  <Icon name="arrow_forward" className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-margin pt-14">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl border text-center space-y-6 bg-white border-blue-500/30 dark:bg-[#0F141C] dark:border-cyan-500/30">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              Ready to Partner with TRIVEX?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Tell us about your project requirements or growth objectives. Our technical leadership will prepare a tailored strategy roadmap.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-[#0088FF] text-white dark:bg-[#00D2FF] dark:text-black shadow-lg hover:brightness-110 transition-all"
              >
                <span>Book a Strategy Consultation</span>
                <Icon name="arrow_forward" className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
