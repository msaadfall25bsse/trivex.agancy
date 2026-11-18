"use client";

import React from "react";
import { useTheme } from "@/components/ThemeProvider";

export function PartnersSection() {
  const { theme } = useTheme();

  const partners = [
    { name: "AWS Partner", icon: "cloud_queue" },
    { name: "OpenAI", icon: "neurology" },
    { name: "Shopify Plus", icon: "shopping_cart" },
    { name: "Stripe Verified", icon: "payments" },
    { name: "Google Cloud", icon: "public" },
    { name: "Meta Business", icon: "ads_click" },
    { name: "Vercel Enterprise", icon: "terminal" },
  ];

  return (
    <section
      className="w-full px-margin py-space-lg transition-colors"
      style={{
        backgroundColor: theme === "dark" ? "#0B0E14" : "#eff4ff",
        borderTop: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
        borderBottom: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
          <span
            className="font-label-md text-label-md uppercase tracking-wider font-semibold"
            style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
          >
            Certified Ecosystem &amp; Cloud Partners
          </span>
          <span
            className="font-label-sm text-label-sm font-semibold"
            style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
          >
            TIER 1 PLATFORM INTEGRATIONS
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-space-sm">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="p-4 rounded-xl shadow-sm flex flex-col items-center justify-center gap-1 transition-all hover:scale-[1.02]"
              style={{
                backgroundColor: theme === "dark" ? "#0F141C" : "#ffffff",
                border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
              }}
            >
              <span
                className="material-symbols-outlined text-2xl"
                style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
              >
                {partner.icon}
              </span>
              <span
                className="font-label-sm text-label-sm font-bold text-center"
                style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
              >
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
