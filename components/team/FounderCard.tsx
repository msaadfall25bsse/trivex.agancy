"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { Icon } from "@/components/ui/Icon";
import type { FounderData } from "@/data/founders";

interface FounderCardProps {
  founder: FounderData;
}

export function FounderCard({ founder }: FounderCardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="glass-panel glass-panel-interactive p-6 sm:p-8 rounded-3xl flex flex-col justify-between gap-6 transition-all duration-300">
      <div className="flex flex-col gap-5">
        {/* Top Header: Monogram Avatar & Founding Badge */}
        <div className="flex items-center justify-between">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center font-display font-bold text-lg shadow-sm border"
            style={{
              backgroundColor: isDark ? "rgba(0, 210, 255, 0.12)" : "rgba(0, 116, 219, 0.1)",
              borderColor: isDark ? "rgba(0, 210, 255, 0.3)" : "rgba(0, 116, 219, 0.25)",
              color: isDark ? "#00D2FF" : "#005baf",
            }}
          >
            {founder.initials}
          </div>
          <div className="flex items-center gap-2">
            <span
              className="px-3 py-1 rounded-full font-mono text-[11px] font-bold uppercase tracking-wider border"
              style={{
                backgroundColor: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.04)",
                borderColor: isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)",
                color: isDark ? "#00D2FF" : "#0074db",
              }}
            >
              {founder.role}
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500" title="Verified Founding Partner" />
          </div>
        </div>

        {/* Founder Name & Bio */}
        <div className="flex flex-col gap-2">
          <h3
            className="font-display text-xl sm:text-2xl font-bold tracking-tight"
            style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
          >
            {founder.name}
          </h3>
          <p
            className="font-body-sm text-body-sm leading-relaxed"
            style={{ color: isDark ? "#94A3B8" : "#475569" }}
          >
            {founder.shortBio}
          </p>
        </div>

        {/* Verified Practice Areas */}
        <div className="flex flex-col gap-2 pt-2 border-t" style={{ borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)" }}>
          <span
            className="font-mono text-[11px] uppercase tracking-wider font-semibold"
            style={{ color: isDark ? "#64748B" : "#64748B" }}
          >
            Core Practice Areas
          </span>
          <div className="flex flex-wrap gap-1.5">
            {founder.verifiedPracticeAreas.slice(0, 3).map((area) => (
              <span
                key={area}
                className="px-2.5 py-1 rounded-lg text-xs font-medium border"
                style={{
                  backgroundColor: isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(255, 255, 255, 0.7)",
                  borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)",
                  color: isDark ? "#CBD5E1" : "#334155",
                }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action: View Profile */}
      <div className="pt-2">
        <Link
          href={`/team/${founder.slug}`}
          className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl font-mono text-xs font-bold transition-all border group"
          style={{
            backgroundColor: isDark ? "rgba(0, 210, 255, 0.08)" : "rgba(0, 116, 219, 0.06)",
            borderColor: isDark ? "rgba(0, 210, 255, 0.25)" : "rgba(0, 116, 219, 0.2)",
            color: isDark ? "#00D2FF" : "#005baf",
          }}
        >
          <span>View Professional Profile</span>
          <Icon name="arrow_forward" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

export default FounderCard;
