"use client";

import React, { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { AGENCY_FAQS } from "@/data/faq";

export function FaqClientView() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openIndices, setOpenIndices] = useState<Record<number, boolean>>({ 0: true, 1: true });

  const categories = ["All", "General", "Development", "Services", "Process & Pricing"];

  const filteredFaqs =
    activeCategory === "All"
      ? AGENCY_FAQS
      : AGENCY_FAQS.filter((f) => f.category === activeCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="space-y-10">
      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
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

      {/* Accordion List */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = !!openIndices[idx];
          return (
            <div
              key={idx}
              className="rounded-2xl border overflow-hidden transition-all duration-200"
              style={{
                backgroundColor: isDark ? "#0F141C" : "#ffffff",
                borderColor: isDark ? "#1E2633" : "#e2e8f0",
                boxShadow: isDark ? "0 4px 20px rgba(0,0,0,0.2)" : "0 4px 15px rgba(0,0,0,0.02)",
              }}
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer font-brand font-bold text-base sm:text-lg"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: isDark ? "#00D2FF" : "#0088FF" }}
                  />
                  <span>{faq.question}</span>
                </div>
                <span
                  className="material-symbols-outlined text-xl transition-transform duration-200 shrink-0"
                  style={{
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    color: isDark ? "#00D2FF" : "#0088FF",
                  }}
                >
                  expand_more
                </span>
              </button>

              {isOpen && (
                <div
                  className="px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed border-t"
                  style={{
                    borderColor: isDark ? "#1E2633" : "#f1f5f9",
                    color: isDark ? "#94A3B8" : "#404754",
                  }}
                >
                  <p>{faq.answer}</p>
                  <div className="pt-4 flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded border text-slate-400 border-slate-700/50">
                      Category: {faq.category}
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
