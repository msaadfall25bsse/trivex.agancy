"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { Icon } from "@/components/ui/Icon";
import type { FounderData } from "@/data/founders";

interface FounderProfileViewProps {
  founder: FounderData;
  otherFounders: FounderData[];
}

export function FounderProfileView({ founder, otherFounders }: FounderProfileViewProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col gap-12">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs font-mono" style={{ color: isDark ? "#64748B" : "#64748B" }}>
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <Link href="/about" className="hover:underline">About</Link>
        <span>/</span>
        <span style={{ color: isDark ? "#00D2FF" : "#005baf" }}>Leadership</span>
        <span>/</span>
        <span style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}>{founder.name}</span>
      </div>

      {/* Main Profile Header Hero */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          {/* Avatar Monogram */}
          <div
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl flex items-center justify-center font-display font-bold text-3xl sm:text-4xl shadow-md border shrink-0"
            style={{
              backgroundColor: isDark ? "rgba(0, 210, 255, 0.12)" : "rgba(0, 116, 219, 0.1)",
              borderColor: isDark ? "rgba(0, 210, 255, 0.35)" : "rgba(0, 116, 219, 0.3)",
              color: isDark ? "#00D2FF" : "#005baf",
            }}
          >
            {founder.initials}
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className="px-3 py-1 rounded-full font-mono text-xs font-bold uppercase tracking-wider border"
                style={{
                  backgroundColor: isDark ? "rgba(0, 210, 255, 0.15)" : "rgba(0, 116, 219, 0.1)",
                  borderColor: isDark ? "rgba(0, 210, 255, 0.35)" : "rgba(0, 116, 219, 0.25)",
                  color: isDark ? "#00D2FF" : "#005baf",
                }}
              >
                {founder.role}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-500 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Verified Executive Partner
              </span>
            </div>

            <h1
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
              style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
            >
              {founder.name}
            </h1>

            <p
              className="font-body-md text-body-md max-w-2xl leading-relaxed"
              style={{ color: isDark ? "#94A3B8" : "#475569" }}
            >
              {founder.shortBio}
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="shrink-0 w-full md:w-auto">
          <Link
            href="/contact"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs font-bold transition-all shadow-md hover:scale-105"
            style={{
              backgroundColor: isDark ? "#00D2FF" : "#0074db",
              color: isDark ? "#080B10" : "#ffffff",
            }}
          >
            <span>Book Consultation With Leadership</span>
            <Icon name="arrow_forward" className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Two Column Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (8 cols): Biography & Core Pillars */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          {/* Executive Biography */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl flex flex-col gap-4">
            <h2
              className="font-display text-xl sm:text-2xl font-bold tracking-tight"
              style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
            >
              Executive Background &amp; Vision
            </h2>
            <p
              className="font-body-md text-body-md leading-relaxed"
              style={{ color: isDark ? "#CBD5E1" : "#334155" }}
            >
              {founder.fullBio}
            </p>
          </div>

          {/* Verified Practice Areas */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl flex flex-col gap-5">
            <h2
              className="font-display text-xl sm:text-2xl font-bold tracking-tight"
              style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
            >
              Primary Practice Domains
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {founder.verifiedPracticeAreas.map((area, idx) => (
                <div
                  key={area}
                  className="p-4 rounded-2xl border flex items-center gap-3"
                  style={{
                    backgroundColor: isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(255, 255, 255, 0.8)",
                    borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <span
                    className="font-mono text-xs font-bold px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: isDark ? "rgba(0, 210, 255, 0.15)" : "rgba(0, 116, 219, 0.1)",
                      color: isDark ? "#00D2FF" : "#005baf",
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <span
                    className="font-body-sm text-body-sm font-semibold"
                    style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
                  >
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering & Delivery Philosophies */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl flex flex-col gap-5">
            <h2
              className="font-display text-xl sm:text-2xl font-bold tracking-tight"
              style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
            >
              Core Operating Standards
            </h2>
            <div className="flex flex-col gap-3">
              {founder.philosophies.map((phil) => (
                <div
                  key={phil}
                  className="p-4 rounded-2xl border flex items-start gap-3.5"
                  style={{
                    backgroundColor: isDark ? "rgba(255, 255, 255, 0.02)" : "rgba(255, 255, 255, 0.7)",
                    borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <span style={{ color: isDark ? "#00D2FF" : "#0074db" }} className="mt-0.5 shrink-0">
                    <Icon name="check_circle" className="w-5 h-5" />
                  </span>
                  <p
                    className="font-body-sm text-body-sm leading-relaxed"
                    style={{ color: isDark ? "#CBD5E1" : "#334155" }}
                  >
                    {phil}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (4 cols): Technical Stack, Verification Info & Socials */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Technical Competencies Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl flex flex-col gap-4">
            <h3
              className="font-mono text-xs font-bold uppercase tracking-wider"
              style={{ color: isDark ? "#00D2FF" : "#005baf" }}
            >
              Technical Core &amp; Tooling
            </h3>
            <div className="flex flex-wrap gap-2">
              {founder.technicalCompetencies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl font-mono text-xs font-medium border"
                  style={{
                    backgroundColor: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.9)",
                    borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)",
                    color: isDark ? "#E2E8F0" : "#1E293B",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Strict Verification Standard Card */}
          <div
            className="p-6 rounded-3xl border flex flex-col gap-3"
            style={{
              backgroundColor: isDark ? "rgba(15, 20, 28, 0.6)" : "rgba(248, 250, 252, 0.8)",
              borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)",
            }}
          >
            <div className="flex items-center gap-2">
              <Icon name="verified_user" className="w-5 h-5 text-emerald-500" />
              <span className="font-mono text-xs font-bold uppercase text-emerald-500">
                Verified Profile Policy
              </span>
            </div>
            <p className="font-body-sm text-xs leading-relaxed" style={{ color: isDark ? "#94A3B8" : "#64748B" }}>
              TRIVEX strictly adheres to zero-fabrication standards. We publish only verified executive details. Academic credentials and enterprise case studies are updated upon verified submission.
            </p>
          </div>

          {/* Connect & Inquire */}
          <div className="glass-panel p-6 rounded-3xl flex flex-col gap-4">
            <h3
              className="font-mono text-xs font-bold uppercase tracking-wider"
              style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
            >
              Leadership Inquiries
            </h3>
            <div className="flex flex-col gap-2 font-body-sm text-xs" style={{ color: isDark ? "#94A3B8" : "#475569" }}>
              <div className="flex items-center gap-2">
                <Icon name="mail" className="w-4 h-4 text-[#00D2FF]" />
                <a href="mailto:contact@trivex.group" className="hover:underline">
                  contact@trivex.group
                </a>
              </div>
              {founder.socialLinks.github && (
                <div className="flex items-center gap-2">
                  <Icon name="code" className="w-4 h-4 text-[#00D2FF]" />
                  <a
                    href={founder.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    GitHub Profile
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Equal Prominence: Other Founding Partners */}
      <div className="pt-8 border-t flex flex-col gap-6" style={{ borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)" }}>
        <div className="flex flex-col gap-1">
          <span
            className="font-mono text-xs font-bold uppercase tracking-wider"
            style={{ color: isDark ? "#00D2FF" : "#005baf" }}
          >
            The Founding Team
          </span>
          <h3
            className="font-display text-2xl font-bold tracking-tight"
            style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
          >
            Three Minds. One Unified Vision.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherFounders.map((other) => (
            <Link
              key={other.slug}
              href={`/team/${other.slug}`}
              className="glass-panel glass-panel-interactive p-6 rounded-2xl flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-sm border"
                  style={{
                    backgroundColor: isDark ? "rgba(0, 210, 255, 0.1)" : "rgba(0, 116, 219, 0.08)",
                    borderColor: isDark ? "rgba(0, 210, 255, 0.25)" : "rgba(0, 116, 219, 0.2)",
                    color: isDark ? "#00D2FF" : "#005baf",
                  }}
                >
                  {other.initials}
                </div>
                <div>
                  <h4
                    className="font-display text-base font-bold group-hover:text-[#00D2FF] transition-colors"
                    style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
                  >
                    {other.name}
                  </h4>
                  <span className="font-mono text-xs" style={{ color: isDark ? "#94A3B8" : "#64748B" }}>
                    {other.role}
                  </span>
                </div>
              </div>
              <Icon name="arrow_forward" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FounderProfileView;
