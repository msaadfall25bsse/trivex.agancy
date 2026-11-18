"use client";

import React from "react";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      aria-label="Color mode"
      className={`flex items-center p-1 rounded-full transition-colors ${className}`}
      role="radiogroup"
      style={{
        backgroundColor: theme === "dark" ? "#141B26" : "#f1f5f9",
        border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
      }}
    >
      <button
        aria-label="Switch to light mode"
        className="flex items-center justify-center w-7 h-7 rounded-full transition-all focus:outline-none"
        style={{
          color: theme === "light" ? "#005baf" : "#64748B",
          backgroundColor: theme === "light" ? "#ffffff" : "transparent",
          boxShadow: theme === "light" ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
        }}
        type="button"
        onClick={() => setTheme("light")}
      >
        <span className="material-symbols-outlined text-base leading-none">light_mode</span>
      </button>
      <button
        aria-label="Dark mode active"
        className="flex items-center justify-center w-7 h-7 rounded-full shadow-sm transition-all focus:outline-none"
        style={{
          backgroundColor: theme === "dark" ? "#00D2FF" : "transparent",
          color: theme === "dark" ? "#080B10" : "#64748B",
          boxShadow: theme === "dark" ? "0 0 12px rgba(0, 210, 255, 0.4)" : "none",
        }}
        type="button"
        onClick={() => setTheme("dark")}
      >
        <span className="material-symbols-outlined text-base leading-none">dark_mode</span>
      </button>
    </div>
  );
}

export default ThemeToggle;
