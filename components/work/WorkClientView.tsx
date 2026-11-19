"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { PORTFOLIO_PROJECTS } from "@/data/portfolio";

export function WorkClientView() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "E-commerce",
    "Web Applications",
    "Websites",
    "WordPress",
    "Mobile Apps",
    "Branding",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-12">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isActive
                  ? isDark
                    ? "bg-[#00D2FF] text-black shadow-[0_0_15px_rgba(0,210,255,0.35)]"
                    : "bg-[#0088FF] text-white shadow-[0_4px_12px_rgba(0,136,255,0.25)]"
                  : isDark
                  ? "bg-[#0F141C] text-slate-300 border border-[#1E2633] hover:text-white hover:border-slate-700"
                  : "bg-white text-slate-600 border border-slate-200 hover:text-slate-900 hover:border-slate-300"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            style={{
              backgroundColor: isDark ? "#0F141C" : "#ffffff",
              borderColor: isDark ? "#1E2633" : "#e2e8f0",
              boxShadow: isDark
                ? "0 10px 30px rgba(0,0,0,0.3)"
                : "0 10px 30px rgba(0,0,0,0.03)",
            }}
          >
            {/* Image Preview */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
                unoptimized
              />
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider bg-black/75 text-[#00D2FF] border border-[#00D2FF]/30 backdrop-blur-md">
                  {project.badge}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-7 space-y-5 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[#0088FF] dark:text-[#00D2FF]">
                  {project.category}
                </div>
                <h3 className="font-brand text-xl sm:text-2xl font-bold leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.summary}
                </p>

                {/* Challenge & Solution Cards */}
                <div className="space-y-2 pt-2 text-xs">
                  <div className="p-3 rounded-lg border bg-slate-50 border-slate-200 dark:bg-[#141B26] dark:border-[#1E2633]">
                    <span className="font-semibold text-slate-900 dark:text-white">Challenge: </span>
                    <span className="text-slate-600 dark:text-slate-400">{project.challenge}</span>
                  </div>
                  <div className="p-3 rounded-lg border bg-slate-50 border-slate-200 dark:bg-[#141B26] dark:border-[#1E2633]">
                    <span className="font-semibold text-slate-900 dark:text-white">Solution: </span>
                    <span className="text-slate-600 dark:text-slate-400">{project.solution}</span>
                  </div>
                </div>

                {/* Deliverables */}
                <div className="pt-2 space-y-1.5">
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold uppercase">
                    Delivered Artifacts:
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                    {project.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                        <span className="material-symbols-outlined text-sm text-[#0088FF] dark:text-[#00D2FF]">
                          check_circle
                        </span>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies & CTA */}
              <div className="pt-4 border-t border-slate-100 dark:border-[#1E2633] space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded text-[11px] font-mono border bg-slate-100 border-slate-200 text-slate-700 dark:bg-[#141B26] dark:border-[#1E2633] dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-1 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold hover:underline text-[#0088FF] dark:text-[#00D2FF]"
                  >
                    <span>Request similar project scope</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
