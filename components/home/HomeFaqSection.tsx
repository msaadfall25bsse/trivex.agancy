"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { AGENCY_FAQS } from "@/data/faq";
import { Icon } from "@/components/ui/Icon";

export function HomeFaqSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const homeFaqs = AGENCY_FAQS.slice(0, 5);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      className="w-full px-margin py-space-xl transition-colors"
      style={{
        backgroundColor: isDark ? "#080B10" : "#f8f9ff",
      }}
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-space-lg">
        <div className="text-center space-y-2">
          <span
            className="text-xs font-mono font-bold uppercase tracking-wider"
            style={{ color: isDark ? "#00D2FF" : "#005baf" }}
          >
            Clear Answers
          </span>
          <h2
            className="font-display text-display uppercase tracking-tight"
            style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="font-body-md text-body-md"
            style={{ color: isDark ? "#94A3B8" : "#475569" }}
          >
            Key details about our agency models, technology standards, and commercial agreements.
          </p>
        </div>

        <div className="space-y-3 pt-4">
          {homeFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border overflow-hidden transition-colors"
                style={{
                  backgroundColor: isDark ? "#0F141C" : "#ffffff",
                  borderColor: isDark ? "#1E2633" : "#e2e8f0",
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-brand font-bold text-sm sm:text-base cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <span
                    className="transition-transform duration-200 shrink-0"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      color: isDark ? "#00D2FF" : "#0088FF",
                    }}
                  >
                    <Icon name="expand_more" className="w-5 h-5" />
                  </span>
                </button>
                {isOpen && (
                  <div
                    className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t"
                    style={{
                      borderColor: isDark ? "#1E2633" : "#f1f5f9",
                      color: isDark ? "#94A3B8" : "#404754",
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center pt-2">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold hover:underline"
            style={{ color: isDark ? "#00D2FF" : "#0088FF" }}
          >
            <span>View All Frequently Asked Questions</span>
            <Icon name="arrow_forward" className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
