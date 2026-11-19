"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { INDUSTRIES } from "@/data/industries";
import { Icon } from "@/components/ui/Icon";

export function HomeIndustriesSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className="w-full px-margin py-space-xl transition-colors"
      style={{
        backgroundColor: isDark ? "#080B10" : "#f8f9ff",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span
              className="text-xs font-mono font-bold uppercase tracking-wider"
              style={{ color: isDark ? "#00D2FF" : "#005baf" }}
            >
              Industry Specializations
            </span>
            <h2
              className="font-display text-display uppercase tracking-tight"
              style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
            >
              Tailored Solutions for Your Industry
            </h2>
            <p
              className="font-body-md text-body-md"
              style={{ color: isDark ? "#94A3B8" : "#475569" }}
            >
              We engineer custom digital solutions aligned with the exact commercial dynamics of your sector.
            </p>
          </div>

          <Link
            href="/industries"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold hover:underline self-start md:self-auto"
            style={{ color: isDark ? "#00D2FF" : "#0088FF" }}
          >
            <span>Explore All Industries</span>
            <Icon name="arrow_forward" className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.slice(0, 3).map((ind) => (
            <div
              key={ind.slug}
              className="p-7 rounded-2xl border flex flex-col justify-between transition-all duration-200 hover:-translate-y-1"
              style={{
                backgroundColor: isDark ? "#0F141C" : "#ffffff",
                borderColor: isDark ? "#1E2633" : "#e2e8f0",
              }}
            >
              <div className="space-y-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: isDark ? "rgba(0,210,255,0.12)" : "rgba(0,136,255,0.1)",
                    color: isDark ? "#00D2FF" : "#0088FF",
                  }}
                >
                  <Icon name={ind.icon} className="w-6 h-6" />
                </div>
                <h3 className="font-brand font-bold text-xl">{ind.name}</h3>
                <p
                  className="text-xs sm:text-sm leading-relaxed"
                  style={{ color: isDark ? "#94A3B8" : "#404754" }}
                >
                  {ind.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 dark:border-[#1E2633] flex items-center justify-between">
                <Link
                  href={`/industries#${ind.slug}`}
                  className="text-xs font-mono font-semibold flex items-center gap-1 hover:underline"
                  style={{ color: isDark ? "#00D2FF" : "#0088FF" }}
                >
                  <span>View Solutions</span>
                  <Icon name="arrow_forward" className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
