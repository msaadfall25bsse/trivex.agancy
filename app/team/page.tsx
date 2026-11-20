import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FOUNDERS_LIST } from "@/data/founders";
import { FounderCard } from "@/components/team/FounderCard";
import { constructMetadata } from "@/lib/seo";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = constructMetadata({
  title: "Founding Leadership | Three Minds. One Vision.",
  description:
    "Meet the founding partners of TRIVEX Agency: Muhammad Saad, Sardar Samiullah, and Shafaq Ejaz. Unifying engineering precision, client delivery, and brand design.",
  pathname: "/team",
});

export default function TeamPage() {
  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col gap-16">
      {/* Header Hero */}
      <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono font-semibold mx-auto bg-blue-500/10 border-blue-500/25 text-[#0088FF] dark:bg-cyan-500/10 dark:border-cyan-500/25 dark:text-[#00D2FF]">
          <Icon name="groups" className="w-4 h-4" />
          <span>EXECUTIVE LEADERSHIP</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0b1c30] dark:text-white uppercase">
          Three Minds. One Unified Vision.
        </h1>

        <p className="font-body-lg text-body-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          TRIVEX was founded on a simple conviction: world-class digital platforms require absolute unity between software architecture, high-velocity delivery, and intuitive visual design.
        </p>
      </div>

      {/* The 3 Founders Grid - Strictly Equal Visual Prominence */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {FOUNDERS_LIST.map((founder) => (
          <FounderCard key={founder.id} founder={founder} />
        ))}
      </div>

      {/* Trust & Zero-Fabrication Charter */}
      <div className="glass-panel p-8 sm:p-10 rounded-3xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Icon name="verified" className="w-5 h-5 text-emerald-500" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-500">
              TRIVEX Leadership Charter
            </span>
          </div>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0b1c30] dark:text-white">
            Direct Access to Core Technical Practitioners
          </h2>
          <p className="font-body-sm text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            When you engage TRIVEX, your project is directly scoped, architected, and reviewed by the founding partners. We do not pass clients down to junior non-technical account handlers or offshore sub-agencies.
          </p>
        </div>

        <div className="md:col-span-4 flex justify-start md:justify-end">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs font-bold transition-all shadow-md bg-[#0088FF] text-white dark:bg-[#00D2FF] dark:text-black hover:scale-105"
          >
            <span>Initiate an Engagement</span>
            <Icon name="arrow_forward" className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
