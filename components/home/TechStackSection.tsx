"use client";

import React from "react";
import { useTheme } from "@/components/ThemeProvider";
import { TechLogo } from "./TechLogos";

export function TechStackSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const row1Frontend = [
    { name: "React js" },
    { name: "Next.Js" },
    { name: "CSS" },
    { name: "Vue" },
    { name: "Typescript" },
    { name: "Javascript" },
    { name: "MaterialUI" },
    { name: "Rest API" },
    { name: "Html5" },
    { name: "Tailwind CSS" },
  ];

  const row2Backend = [
    { name: "Node.js" },
    { name: "Python" },
    { name: "Scala" },
    { name: "Php" },
    { name: "Laravel" },
    { name: "Django" },
    { name: "PostgreSQL" },
    { name: "Redis" },
    { name: "Rest API" },
    { name: "Next.Js" },
  ];

  const row3CMSMobile = [
    { name: "WordPress" },
    { name: "Shopify" },
    { name: "Webflow" },
    { name: "Flutter" },
    { name: "React Native" },
    { name: "Firebase" },
    { name: "Typescript" },
    { name: "Html5" },
    { name: "CSS" },
    { name: "Rest API" },
  ];

  const row4CloudAI = [
    { name: "AWS" },
    { name: "Docker" },
    { name: "OpenAI API" },
    { name: "Python" },
    { name: "Node.js" },
    { name: "PostgreSQL" },
    { name: "Redis" },
    { name: "Next.Js" },
    { name: "Typescript" },
    { name: "Rest API" },
  ];

  // Helper to duplicate items for seamless loop
  const duplicate = (arr: { name: string }[]) => [...arr, ...arr, ...arr];

  return (
    <section className="w-full py-space-xl overflow-hidden transition-colors bg-transparent relative">
      <div className="max-w-7xl mx-auto px-margin flex flex-col gap-space-md mb-8">
        <div className="flex flex-col gap-space-xs max-w-2xl">
          <span
            className="font-label-sm text-label-sm font-semibold uppercase tracking-widest"
            style={{ color: isDark ? "#00D2FF" : "#005baf" }}
          >
            Architectural Foundation
          </span>
          <h2
            className="font-display text-display uppercase tracking-tight"
            style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
          >
            Technical Stack Matrix
          </h2>
          <p
            className="font-body-lg text-body-lg leading-relaxed"
            style={{ color: isDark ? "#94A3B8" : "#475569" }}
          >
            Battle-tested tools and frameworks selected strictly for velocity, scale, and long-term stability.
          </p>
        </div>
      </div>

      {/* Marquee Tracks Container with Gradient Edge Fades */}
      <div className="relative w-full overflow-hidden flex flex-col gap-5 sm:gap-6 py-2 select-none">
        {/* Left & Right Edge Gradient Fades */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-44 z-20"
          style={{
            background: isDark
              ? "linear-gradient(to right, #080B10 0%, rgba(8,11,16,0.8) 40%, transparent 100%)"
              : "linear-gradient(to right, #f8f9ff 0%, rgba(248,249,255,0.8) 40%, transparent 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-44 z-20"
          style={{
            background: isDark
              ? "linear-gradient(to left, #080B10 0%, rgba(8,11,16,0.8) 40%, transparent 100%)"
              : "linear-gradient(to left, #f8f9ff 0%, rgba(248,249,255,0.8) 40%, transparent 100%)",
          }}
        />

        {/* Row 1: Frontend (Moves from Right to Left) */}
        <div className="flex overflow-hidden w-full">
          <div className="animate-marquee-left flex items-center gap-4 sm:gap-5 px-3">
            {duplicate(row1Frontend).map((item, idx) => (
              <div
                key={`row1-${item.name}-${idx}`}
                className={`group flex items-center gap-3 px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer shadow-sm hover:scale-105 hover:-translate-y-0.5 whitespace-nowrap ${
                  isDark
                    ? "bg-[#10141D]/80 border border-white/10 hover:border-[#00D2FF]/60 hover:bg-[#141B26] hover:shadow-[0_0_20px_rgba(0,210,255,0.25)] text-white"
                    : "bg-white/90 border border-slate-200/90 hover:border-[#0088FF]/50 hover:bg-white hover:shadow-[0_8px_25px_rgba(0,136,255,0.15)] text-[#0b1c30]"
                }`}
              >
                <TechLogo name={item.name} className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-headline-sm text-sm sm:text-base font-semibold tracking-normal">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Backend (Moves from Left to Right) */}
        <div className="flex overflow-hidden w-full">
          <div className="animate-marquee-right flex items-center gap-4 sm:gap-5 px-3">
            {duplicate(row2Backend).map((item, idx) => (
              <div
                key={`row2-${item.name}-${idx}`}
                className={`group flex items-center gap-3 px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer shadow-sm hover:scale-105 hover:-translate-y-0.5 whitespace-nowrap ${
                  isDark
                    ? "bg-[#10141D]/80 border border-white/10 hover:border-[#00D2FF]/60 hover:bg-[#141B26] hover:shadow-[0_0_20px_rgba(0,210,255,0.25)] text-white"
                    : "bg-white/90 border border-slate-200/90 hover:border-[#0088FF]/50 hover:bg-white hover:shadow-[0_8px_25px_rgba(0,136,255,0.15)] text-[#0b1c30]"
                }`}
              >
                <TechLogo name={item.name} className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-headline-sm text-sm sm:text-base font-semibold tracking-normal">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: CMS & Mobile (Moves from Right to Left) */}
        <div className="flex overflow-hidden w-full">
          <div className="animate-marquee-left flex items-center gap-4 sm:gap-5 px-3">
            {duplicate(row3CMSMobile).map((item, idx) => (
              <div
                key={`row3-${item.name}-${idx}`}
                className={`group flex items-center gap-3 px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer shadow-sm hover:scale-105 hover:-translate-y-0.5 whitespace-nowrap ${
                  isDark
                    ? "bg-[#10141D]/80 border border-white/10 hover:border-[#00D2FF]/60 hover:bg-[#141B26] hover:shadow-[0_0_20px_rgba(0,210,255,0.25)] text-white"
                    : "bg-white/90 border border-slate-200/90 hover:border-[#0088FF]/50 hover:bg-white hover:shadow-[0_8px_25px_rgba(0,136,255,0.15)] text-[#0b1c30]"
                }`}
              >
                <TechLogo name={item.name} className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-headline-sm text-sm sm:text-base font-semibold tracking-normal">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 4: Cloud & AI (Moves from Left to Right) */}
        <div className="flex overflow-hidden w-full">
          <div className="animate-marquee-right flex items-center gap-4 sm:gap-5 px-3">
            {duplicate(row4CloudAI).map((item, idx) => (
              <div
                key={`row4-${item.name}-${idx}`}
                className={`group flex items-center gap-3 px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer shadow-sm hover:scale-105 hover:-translate-y-0.5 whitespace-nowrap ${
                  isDark
                    ? "bg-[#10141D]/80 border border-white/10 hover:border-[#00D2FF]/60 hover:bg-[#141B26] hover:shadow-[0_0_20px_rgba(0,210,255,0.25)] text-white"
                    : "bg-white/90 border border-slate-200/90 hover:border-[#0088FF]/50 hover:bg-white hover:shadow-[0_8px_25px_rgba(0,136,255,0.15)] text-[#0b1c30]"
                }`}
              >
                <TechLogo name={item.name} className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-headline-sm text-sm sm:text-base font-semibold tracking-normal">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStackSection;