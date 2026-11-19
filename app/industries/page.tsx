import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { INDUSTRIES } from "@/data/industries";

export const metadata = constructMetadata({
  title: "Industries We Serve | Tailored Digital Solutions",
  description:
    "Discover how TRIVEX engineers tailored growth and technology solutions for E-commerce, Local Services, Professional Firms, Tech Startups, and Mid-Market Enterprises.",
  pathname: "/industries",
});

export default function IndustriesPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 transition-colors duration-200 bg-[#f8f9ff] text-[#0b1c30] dark:bg-[#080B10] dark:text-white">
      {/* Hero Section */}
      <section className="relative px-margin pt-12 pb-16 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono font-semibold bg-blue-500/10 border-blue-500/25 text-[#0088FF] dark:bg-cyan-500/10 dark:border-cyan-500/25 dark:text-[#00D2FF]">
            <span className="material-symbols-outlined text-sm">domain</span>
            <span>INDUSTRY SPECIALIZATIONS</span>
          </div>

          <h1 className="font-brand text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Tailored Solutions for Your Market Dynamics
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Every vertical presents distinct commercial hurdles, compliance demands, and customer behaviors. We deploy specialized architectures tuned to your business model.
          </p>
        </div>
      </section>

      {/* Industries Showcase */}
      <section className="px-margin py-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {INDUSTRIES.map((industry, idx) => (
            <div
              key={industry.slug}
              id={industry.slug}
              className="p-8 sm:p-12 rounded-3xl border bg-white border-slate-200 dark:bg-[#0F141C] dark:border-[#1E2633] space-y-8"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-[#1E2633] pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-blue-500/10 text-[#0088FF] dark:bg-cyan-500/10 dark:text-[#00D2FF]">
                    <span className="material-symbols-outlined text-3xl">{industry.icon}</span>
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-[#0088FF] dark:text-[#00D2FF] uppercase">
                      Vertical 0{idx + 1}
                    </div>
                    <h2 className="font-brand text-2xl sm:text-3xl font-bold">{industry.name}</h2>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#0088FF] text-white dark:bg-[#00D2FF] dark:text-black shadow-md hover:brightness-110 transition-all self-start md:self-auto"
                >
                  <span>Discuss Vertical Scope</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>

              {/* Headline & Description */}
              <div className="space-y-3">
                <h3 className="font-brand text-lg sm:text-xl font-bold">{industry.headline}</h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl">
                  {industry.description}
                </p>
              </div>

              {/* Challenges vs Capabilities */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
                {/* Industry Challenges */}
                <div className="p-6 rounded-2xl border bg-slate-50 border-slate-200 dark:bg-[#141B26] dark:border-[#1E2633] space-y-4">
                  <div className="flex items-center gap-2 font-brand font-bold text-base text-red-500 dark:text-red-400">
                    <span className="material-symbols-outlined text-lg">warning</span>
                    <span>Industry Challenges</span>
                  </div>
                  <ul className="space-y-2.5">
                    {industry.challenges.map((c, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <span className="text-red-500 dark:text-red-400 font-bold">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* TRIVEX Capabilities */}
                <div className="p-6 rounded-2xl border bg-slate-50 border-slate-200 dark:bg-[#141B26] dark:border-[#1E2633] space-y-4">
                  <div className="flex items-center gap-2 font-brand font-bold text-base text-[#0088FF] dark:text-[#00D2FF]">
                    <span className="material-symbols-outlined text-lg">task_alt</span>
                    <span>TRIVEX Capabilities</span>
                  </div>
                  <ul className="space-y-2.5">
                    {industry.capabilities.map((cap, capIdx) => (
                      <li key={capIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <span className="text-[#0088FF] dark:text-[#00D2FF] font-bold">•</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Recommended Services */}
              <div className="pt-4 border-t border-slate-100 dark:border-[#1E2633] flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono font-semibold uppercase text-slate-500 dark:text-slate-400">
                  Recommended Core Services:
                </span>
                {industry.recommendedServices.map((svc) => (
                  <Link
                    key={svc.title}
                    href={svc.href}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold hover:border-[#0088FF] dark:hover:border-[#00D2FF] transition-all bg-white border-slate-200 dark:bg-[#141B26] dark:border-[#1E2633]"
                  >
                    <span>{svc.title}</span>
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="px-margin pt-14">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl border text-center space-y-6 bg-white border-blue-500/30 dark:bg-[#0F141C] dark:border-cyan-500/30">
            <h2 className="font-brand text-2xl sm:text-3xl md:text-4xl font-bold">
              Operating in a Different Vertical?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Our multidisciplinary engineering and growth methodologies adapt to complex requirements. Speak with our leadership to explore a custom collaboration.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-[#0088FF] text-white dark:bg-[#00D2FF] dark:text-black shadow-lg hover:brightness-110 transition-all"
              >
                <span>Book a Discovery Consultation</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
