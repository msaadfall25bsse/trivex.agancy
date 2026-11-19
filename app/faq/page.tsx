import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { FaqClientView } from "@/components/faq/FaqClientView";

export const metadata = constructMetadata({
  title: "Frequently Asked Questions (FAQ) | TRIVEX Agency",
  description:
    "Find answers to frequently asked questions regarding TRIVEX services, development methodologies, code ownership, project timelines, and engagement models.",
  pathname: "/faq",
});

export default function FaqPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 transition-colors duration-200 bg-[#f8f9ff] text-[#0b1c30] dark:bg-[#080B10] dark:text-white">
      {/* Hero Section */}
      <section className="relative px-margin pt-12 pb-16 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono font-semibold bg-blue-500/10 border-blue-500/25 text-[#0088FF] dark:bg-cyan-500/10 dark:border-cyan-500/25 dark:text-[#00D2FF]">
            <span className="material-symbols-outlined text-sm">help</span>
            <span>AGENCY FAQ</span>
          </div>

          <h1 className="font-brand text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our services, software development standards, IP ownership, and project pricing.
          </p>
        </div>
      </section>

      {/* Interactive FAQ View */}
      <section className="px-margin py-8">
        <div className="max-w-7xl mx-auto">
          <FaqClientView />
        </div>
      </section>

      {/* Still Have Questions Banner */}
      <section className="px-margin pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl border text-center space-y-6 bg-white border-blue-500/30 dark:bg-[#0F141C] dark:border-cyan-500/30">
            <h2 className="font-brand text-2xl sm:text-3xl md:text-4xl font-bold">
              Still Have a Specific Question?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Our team is ready to answer questions about architecture, scoping, or commercial frameworks.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-[#0088FF] text-white dark:bg-[#00D2FF] dark:text-black shadow-lg hover:brightness-110 transition-all"
              >
                <span>Ask Us Directly</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
