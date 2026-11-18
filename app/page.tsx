"use client";

import { useTheme } from "@/components/ThemeProvider";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center px-4 py-20 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200/50 dark:border-[#1E2633] bg-blue-50 dark:bg-[#141B26] text-xs font-mono font-semibold text-[#0074db] dark:text-[#00D2FF]">
          <span className="w-2 h-2 rounded-full bg-[#0074db] dark:bg-[#00D2FF] animate-pulse"></span>
          HEADER &amp; FOOTER READY • CURRENT THEME:{" "}
          <span className="uppercase font-bold">{theme}</span>
        </div>

        <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0b1c30] dark:text-white">
          TRIVEX Global Platform
        </h1>

        <p className="text-base sm:text-lg text-[#404754] dark:text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
          Header aur Footer successfully design aur integrate ho chuke hain with persistent Dark/Light mode support. Next sections ke liye aap apni HTML files share kar sakte hain.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs font-mono text-[#64748B]">
          <span className="px-3 py-1.5 rounded bg-slate-100 dark:bg-[#141B26] border border-slate-200 dark:border-[#1E2633]">
            ✓ Reusable Header Component
          </span>
          <span className="px-3 py-1.5 rounded bg-slate-100 dark:bg-[#141B26] border border-slate-200 dark:border-[#1E2633]">
            ✓ Reusable Footer Component
          </span>
          <span className="px-3 py-1.5 rounded bg-slate-100 dark:bg-[#141B26] border border-slate-200 dark:border-[#1E2633]">
            ✓ Persistent Theme Switcher (localStorage)
          </span>
        </div>
      </div>
    </div>
  );
}
