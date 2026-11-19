"use client";

import React from "react";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      aria-label="Color mode"
      className={`flex items-center rounded-full p-1 shadow-inner transition-colors ${
        theme === "dark"
          ? "bg-[#10141D] border border-[#1E2633]"
          : "bg-slate-100 border border-slate-200"
      } ${className}`}
      role="radiogroup"
    >
      {/* Light Mode Switch Button */}
      <button
        aria-label="Switch to Light Mode"
        className={`p-1.5 rounded-full transition-all focus:outline-none ${
          theme === "light"
            ? "bg-[#0088FF] text-white shadow-sm"
            : "text-slate-400 hover:text-white hover:bg-[#19202E]"
        }`}
        title={theme === "light" ? "Light Mode Active" : "Switch to Light Mode"}
        type="button"
        onClick={() => setTheme("light")}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </button>

      {/* Dark Mode Switch Button */}
      <button
        aria-label="Switch to Dark Mode"
        className={`p-1.5 rounded-full transition-all focus:outline-none ${
          theme === "dark"
            ? "bg-[#00D2FF] text-black shadow-sm"
            : "text-slate-500 hover:text-slate-800 hover:bg-slate-200"
        }`}
        title={theme === "dark" ? "Dark Mode Active" : "Switch to Dark Mode"}
        type="button"
        onClick={() => setTheme("dark")}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </button>
    </div>
  );
}

export default ThemeToggle;
