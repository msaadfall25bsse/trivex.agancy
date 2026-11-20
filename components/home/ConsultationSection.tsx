"use client";

import React, { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { Icon } from "@/components/ui/Icon";

export function ConsultationSection() {
  const { theme } = useTheme();
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    requirement: "Full-Stack Web App Development",
    budget: "$25k - $50k",
    scope: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const hubs = [
    {
      country: "United States",
      timezone: "PST / EST",
      detail: "Sacramento & San Francisco Tech Corridor",
    },
    {
      country: "United Kingdom",
      timezone: "GMT / BST",
      detail: "London Tech Square Delivery Studio",
    },
    {
      country: "United Arab Emirates",
      timezone: "GST (UTC+4)",
      detail: "Dubai Internet City & Sharjah Tech District",
    },
    {
      country: "Nordics Hub",
      timezone: "CET",
      detail: "Stockholm Engineering Studio, Sweden",
    },
    {
      country: "Delivery Center",
      timezone: "PKT (UTC+5)",
      detail: "Abbottabad & Islamabad Innovation Labs",
    },
  ];

  return (
    <section
      id="book-consultation"
      className="w-full px-margin py-space-xl transition-colors bg-transparent"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Intro */}
        <div className="flex flex-col gap-space-xs max-w-2xl">
          <span
            className="font-label-sm text-label-sm font-semibold uppercase tracking-widest"
            style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
          >
            Global Reach • Local Precision
          </span>
          <h2
            className="font-display text-display uppercase tracking-tight"
            style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
          >
            Initiate an Engineering Consultation
          </h2>
          <p
            className="font-body-lg text-body-lg leading-relaxed"
            style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
          >
            Speak directly with a Senior Technical Director. We evaluate your requirements and provide
            an architecture estimate within 24 hours.
          </p>
        </div>

        {/* Split Layout: Regional Hubs vs Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          {/* Left: Hub Directory */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="glass-panel p-space-lg rounded-3xl shadow-xl flex flex-col gap-space-md">
              <h3
                className="font-headline-sm text-headline-sm"
                style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
              >
                Worldwide Locations
              </h3>
              <div className="flex flex-col gap-space-sm divide-y-0">
                {hubs.map((hub) => (
                  <div
                    key={hub.country}
                    className="p-space-sm rounded shadow-sm flex flex-col gap-1"
                    style={{
                      backgroundColor: theme === "dark" ? "#141B26" : "#ffffff",
                      border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="font-headline-sm text-sm font-semibold"
                        style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
                      >
                        {hub.country}
                      </span>
                      <span
                        className="font-label-sm text-label-sm font-mono font-semibold"
                        style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
                      >
                        {hub.timezone}
                      </span>
                    </div>
                    <p
                      className="font-body-sm text-body-sm"
                      style={{ color: theme === "dark" ? "#94A3B8" : "#64748B" }}
                    >
                      {hub.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Direct Contact details */}
              <div
                className="pt-space-sm flex flex-col gap-2 font-label-md text-label-md"
                style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
              >
                <div className="flex items-center gap-2">
                  <span style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}>
                    <Icon name="mail" className="w-4 h-4" />
                  </span>
                  <span
                    className="font-semibold"
                    style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
                  >
                    info@trivex.agency
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}>
                    <Icon name="forum" className="w-4 h-4" />
                  </span>
                  <span>Direct WhatsApp Engineering Concierge Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Consultation Form */}
          <div className="lg:col-span-7 glass-panel p-space-lg rounded-3xl shadow-xl flex flex-col gap-space-md">
            <div className="flex flex-col gap-1">
              <span
                className="font-label-sm text-label-sm font-mono font-bold"
                style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
              >
                PROJECT ENGAGEMENT SPEC
              </span>
              <h3
                className="font-headline-md text-headline-md"
                style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
              >
                Tell us about your requirements
              </h3>
            </div>

            {formSubmitted ? (
              <div
                className="p-6 rounded-lg text-center flex flex-col items-center gap-3 animate-in fade-in duration-300"
                style={{
                  backgroundColor:
                    theme === "dark" ? "rgba(0, 210, 255, 0.08)" : "rgba(0, 116, 219, 0.06)",
                  border:
                    theme === "dark"
                      ? "1px solid rgba(0, 210, 255, 0.3)"
                      : "1px solid rgba(0, 116, 219, 0.3)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl"
                  style={{
                    backgroundColor: theme === "dark" ? "#00D2FF" : "#0074db",
                    color: theme === "dark" ? "#080B10" : "#ffffff",
                  }}
                >
                  ✓
                </div>
                <h4
                  className="font-headline-sm text-headline-sm"
                  style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
                >
                  Consultation Request Received
                </h4>
                <p
                  className="font-body-md text-body-md max-w-md"
                  style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
                >
                  A Senior Technical Director from our Sacramento or London engineering pod has been
                  assigned and will contact you at{" "}
                  <strong style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}>
                    {formData.email || "your email"}
                  </strong>{" "}
                  within 24 hours.
                </p>
                <button
                  className="mt-2 px-4 py-2 rounded text-xs font-mono font-medium hover:underline focus:outline-none"
                  style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-label-sm text-label-sm font-semibold"
                      style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
                    >
                      FULL NAME *
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-xl font-body-md text-body-md shadow-xs outline-none transition-all focus:ring-2 focus:ring-[#00D2FF]/50 glass-pill"
                      placeholder="e.g. Alex Henderson"
                      required
                      style={{
                        color: theme === "dark" ? "#FFFFFF" : "#0b1c30",
                      }}
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-label-sm text-label-sm font-semibold"
                      style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
                    >
                      WORK EMAIL *
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-xl font-body-md text-body-md shadow-xs outline-none transition-all focus:ring-2 focus:ring-[#00D2FF]/50 glass-pill"
                      placeholder="alex@company.com"
                      required
                      style={{
                        color: theme === "dark" ? "#FFFFFF" : "#0b1c30",
                      }}
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-label-sm text-label-sm font-semibold"
                      style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
                    >
                      PRIMARY REQUIREMENT *
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl font-body-md text-body-md shadow-xs outline-none transition-all focus:ring-2 focus:ring-[#00D2FF]/50 glass-pill cursor-pointer"
                      style={{
                        color: theme === "dark" ? "#FFFFFF" : "#0b1c30",
                      }}
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    >
                      <option className="text-black dark:text-white dark:bg-[#0F141C]">Full-Stack Web App Development</option>
                      <option className="text-black dark:text-white dark:bg-[#0F141C]">Mobile App (Flutter / Native)</option>
                      <option className="text-black dark:text-white dark:bg-[#0F141C]">E-commerce Architecture &amp; Shopify Plus</option>
                      <option className="text-black dark:text-white dark:bg-[#0F141C]">AI Automation &amp; LLM Systems</option>
                      <option className="text-black dark:text-white dark:bg-[#0F141C]">Dedicated Agile Engineering Pod</option>
                      <option className="text-black dark:text-white dark:bg-[#0F141C]">Growth Marketing &amp; Paid Scaling</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-label-sm text-label-sm font-semibold"
                      style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
                    >
                      ESTIMATED BUDGET
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl font-body-md text-body-md shadow-xs outline-none transition-all focus:ring-2 focus:ring-[#00D2FF]/50 glass-pill cursor-pointer"
                      style={{
                        color: theme === "dark" ? "#FFFFFF" : "#0b1c30",
                      }}
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    >
                      <option className="text-black dark:text-white dark:bg-[#0F141C]">$10k - $25k</option>
                      <option className="text-black dark:text-white dark:bg-[#0F141C]">$25k - $50k</option>
                      <option className="text-black dark:text-white dark:bg-[#0F141C]">$50k - $150k</option>
                      <option className="text-black dark:text-white dark:bg-[#0F141C]">$150k+</option>
                      <option className="text-black dark:text-white dark:bg-[#0F141C]">Monthly Retainer / Squad</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-label-sm text-label-sm font-semibold"
                    style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
                  >
                    PROJECT SUMMARY / TECHNICAL SCOPE
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-xl font-body-md text-body-md shadow-xs outline-none transition-all focus:ring-2 focus:ring-[#00D2FF]/50 glass-pill"
                    placeholder="Describe the current architecture, timelines, key integrations, or target metrics..."
                    rows={4}
                    style={{
                      color: theme === "dark" ? "#FFFFFF" : "#0b1c30",
                    }}
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-xs">
                  <div className="flex items-center gap-2">
                    <input
                      defaultChecked
                      className="w-4 h-4 rounded text-[#0074db] focus:ring-0"
                      id="nda"
                      type="checkbox"
                    />
                    <label
                      className="font-label-sm text-label-sm cursor-pointer"
                      htmlFor="nda"
                      style={{ color: theme === "dark" ? "#94A3B8" : "#64748B" }}
                    >
                      Standard NDA protection applies automatically
                    </label>
                  </div>
                  <button
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded font-label-lg text-label-lg font-medium shadow-md transition-all hover:scale-[1.02]"
                    style={{
                      backgroundColor: theme === "dark" ? "#00D2FF" : "#0074db",
                      color: theme === "dark" ? "#080B10" : "#ffffff",
                    }}
                    type="submit"
                  >
                    <span>Submit Technical Scope</span>
                    <Icon name="send" className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConsultationSection;
