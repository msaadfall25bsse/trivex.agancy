"use client";

import React from "react";
import { useTheme } from "@/components/ThemeProvider";
import { Icon } from "@/components/ui/Icon";

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
      className="w-full px-margin py-space-lg transition-colors border-y backdrop-blur-md"
      style={{
        backgroundColor: theme === "dark" ? "rgba(8, 11, 16, 0.45)" : "rgba(255, 255, 255, 0.45)",
        borderColor: theme === "dark" ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.5)",
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
              className="p-4 rounded-2xl flex flex-col items-center justify-center gap-1 glass-panel glass-panel-interactive"
            >
              <span
                style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
              >
                <Icon name={partner.icon} className="w-6 h-6" />
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
