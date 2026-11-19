import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { WorkClientView } from "@/components/work/WorkClientView";
import { Icon } from "@/components/ui/Icon";

export const metadata = constructMetadata({
  title: "Case Studies & Work | Engineered for Commercial Growth",
  description:
    "Explore real-world case studies and digital products delivered by TRIVEX across e-commerce, web applications, custom WordPress, mobile apps, and branding.",
  pathname: "/work",
});

export default function WorkPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 transition-colors duration-200 bg-[#f8f9ff] text-[#0b1c30] dark:bg-[#080B10] dark:text-white">
      {/* Hero Section */}
      <section className="relative px-margin pt-12 pb-16 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono font-semibold bg-blue-500/10 border-blue-500/25 text-[#0088FF] dark:bg-cyan-500/10 dark:border-cyan-500/25 dark:text-[#00D2FF]">
            <Icon name="rocket_launch" className="w-4 h-4" />
            <span>PORTFOLIO &amp; DELIVERED SOLUTIONS</span>
          </div>

          <h1 className="font-brand text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Proven Solutions Engineered for Measurable Impact
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We don&apos;t just build interfaces; we engineer digital operating engines. Browse our featured client case studies across web apps, e-commerce, and mobile platforms.
          </p>
        </div>
      </section>

      {/* Interactive Case Studies Grid */}
      <section className="px-margin py-8">
        <div className="max-w-7xl mx-auto">
          <WorkClientView />
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="px-margin pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl border text-center space-y-6 bg-white border-blue-500/30 dark:bg-[#0F141C] dark:border-cyan-500/30">
            <h2 className="font-brand text-2xl sm:text-3xl md:text-4xl font-bold">
              Have a Similar Project in Mind?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Schedule an architecture and requirements session with our team. We will review your goals and provide an actionable scope and timeline.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-[#0088FF] text-white dark:bg-[#00D2FF] dark:text-black shadow-lg hover:brightness-110 transition-all"
              >
                <span>Request a Free Project Assessment</span>
                <Icon name="arrow_forward" className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
