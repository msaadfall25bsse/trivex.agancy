"use client";

import React, { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { Icon } from "@/components/ui/Icon";

export function ConsultationSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
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

  const globalCoverage = [
    {
      region: "North America",
      timezone: "PST / EST Alignment",
      detail: "Active synchronous sprint overlap, architecture reviews, and client collaboration.",
    },
    {
      region: "United Kingdom & Europe",
      timezone: "GMT / CET Overlap",
      detail: "Sprint management, live milestone demos, and staging environment sync.",
    },
    {
      region: "Middle East & Gulf",
      timezone: "GST (UTC+4)",
      detail: "Digital commerce execution, enterprise platform delivery, and localized support.",
    },
    {
      region: "Global Delivery Standard",
      timezone: "24h SLA Turnaround",
      detail: "Rapid scoping, automated CI/CD pipelines, and direct founding partner access.",
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
            style={{ color: isDark ? "#00D2FF" : "#005baf" }}
          >
            Global Delivery • Remote-First Excellence
          </span>
          <h2
            className="font-display text-display uppercase tracking-tight"
            style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
          >
            Initiate an Engineering Consultation
          </h2>
          <p
            className="font-body-lg text-body-lg leading-relaxed"
            style={{ color: isDark ? "#94A3B8" : "#475569" }}
          >
            Speak directly with TRIVEX founding leadership. We evaluate your requirements and provide an architecture estimate within 24 business hours.
          </p>
        </div>

        {/* Split Layout: Global Timezone Coverage vs Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          {/* Left: Timezone Coverage Directory */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="glass-panel p-space-lg rounded-3xl shadow-xl flex flex-col gap-space-md">
              <h3
                className="font-headline-sm text-headline-sm"
                style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
              >
                Global Client Delivery
              </h3>
              <div className="flex flex-col gap-space-sm divide-y-0">
                {globalCoverage.map((item) => (
                  <div
                    key={item.region}
                    className="p-space-sm rounded shadow-sm flex flex-col gap-1"
                    style={{
                      backgroundColor: isDark ? "#141B26" : "#ffffff",
                      border: isDark ? "1px solid #1E2633" : "1px solid #e2e8f0",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="font-headline-sm text-sm font-semibold"
                        style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
                      >
                        {item.region}
                      </span>
                      <span
                        className="font-label-sm text-label-sm font-mono font-semibold"
                        style={{ color: isDark ? "#00D2FF" : "#005baf" }}
                      >
                        {item.timezone}
                      </span>
                    </div>
                    <p
                      className="font-body-sm text-body-sm"
                      style={{ color: isDark ? "#94A3B8" : "#64748B" }}
                    >
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Direct Contact details */}
              <div
                className="pt-space-sm flex flex-col gap-2 font-label-md text-label-md"
                style={{ color: isDark ? "#94A3B8" : "#404754" }}
              >
                <div className="flex items-center gap-2">
                  <Icon name="mail" className="w-4 h-4 text-[#00D2FF]" />
                  <span>Direct Inquiries:</span>
                  <a
                    href="mailto:contact@trivex.group"
                    className="underline hover:text-[#00D2FF]"
                    style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
                  >
                    contact@trivex.group
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="verified" className="w-4 h-4 text-emerald-400" />
                  <span>24-Hour Architecture Turnaround Guarantee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Consultation Form */}
          <div className="lg:col-span-7 glass-panel p-space-lg rounded-3xl shadow-xl flex flex-col gap-space-md">
            <h3
              className="font-headline-sm text-headline-sm"
              style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
            >
              Consultation Specification
            </h3>

            {formSubmitted ? (
              <div
                className="p-8 rounded-2xl flex flex-col items-center justify-center text-center gap-4 animate-fade-in"
                style={{
                  backgroundColor: isDark ? "#141B26" : "#f0fdf4",
                  border: isDark ? "1px solid #10B981" : "1px solid #bbf7d0",
                }}
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
                  <Icon name="check_circle" className="w-6 h-6" />
                </div>
                <h4
                  className="font-headline-sm text-headline-sm"
                  style={{ color: isDark ? "#FFFFFF" : "#14532d" }}
                >
                  Technical Scope Received
                </h4>
                <p
                  className="font-body-sm text-body-sm max-w-md"
                  style={{ color: isDark ? "#94A3B8" : "#166534" }}
                >
                  Thank you, <strong>{formData.name}</strong>. A TRIVEX founding partner has received your inquiry for <strong>{formData.requirement}</strong> and will follow up within 24 business hours.
                </p>
                <button
                  type="button"
                  className="px-4 py-2 rounded font-mono text-xs font-bold underline cursor-pointer"
                  style={{ color: isDark ? "#00D2FF" : "#005baf" }}
                  onClick={() => setFormSubmitted(false)}
                >
                  Submit another scope
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-label-sm text-label-sm font-semibold"
                      style={{ color: isDark ? "#94A3B8" : "#475569" }}
                    >
                      FULL NAME *
                    </label>
                    <input
                      required
                      className="w-full px-4 py-3 rounded-xl font-body-md text-body-md shadow-xs outline-none transition-all focus:ring-2 focus:ring-[#00D2FF]/50 glass-pill"
                      placeholder="e.g. John Doe"
                      style={{
                        color: isDark ? "#FFFFFF" : "#0b1c30",
                      }}
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-label-sm text-label-sm font-semibold"
                      style={{ color: isDark ? "#94A3B8" : "#475569" }}
                    >
                      WORK EMAIL *
                    </label>
                    <input
                      required
                      className="w-full px-4 py-3 rounded-xl font-body-md text-body-md shadow-xs outline-none transition-all focus:ring-2 focus:ring-[#00D2FF]/50 glass-pill"
                      placeholder="john@company.com"
                      style={{
                        color: isDark ? "#FFFFFF" : "#0b1c30",
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
                      style={{ color: isDark ? "#94A3B8" : "#475569" }}
                    >
                      PRIMARY REQUIREMENT
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl font-body-md text-body-md shadow-xs outline-none transition-all focus:ring-2 focus:ring-[#00D2FF]/50 glass-pill cursor-pointer"
                      style={{
                        color: isDark ? "#FFFFFF" : "#0b1c30",
                      }}
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    >
                      <option className="text-black dark:text-white dark:bg-[#0F141C]">Full-Stack Web App Development</option>
                      <option className="text-black dark:text-white dark:bg-[#0F141C]">Mobile App (Flutter / React Native)</option>
                      <option className="text-black dark:text-white dark:bg-[#0F141C]">E-commerce Architecture &amp; Shopify Plus</option>
                      <option className="text-black dark:text-white dark:bg-[#0F141C]">AI Automation &amp; LLM Systems</option>
                      <option className="text-black dark:text-white dark:bg-[#0F141C]">Dedicated Agile Engineering Squad</option>
                      <option className="text-black dark:text-white dark:bg-[#0F141C]">Growth Marketing &amp; Paid Scaling</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-label-sm text-label-sm font-semibold"
                      style={{ color: isDark ? "#94A3B8" : "#475569" }}
                    >
                      ESTIMATED INVESTMENT RANGE
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl font-body-md text-body-md shadow-xs outline-none transition-all focus:ring-2 focus:ring-[#00D2FF]/50 glass-pill cursor-pointer"
                      style={{
                        color: isDark ? "#FFFFFF" : "#0b1c30",
                      }}
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    >
                      <option className="text-black dark:text-white dark:bg-[#0F141C]">&lt; $10k</option>
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
                    style={{ color: isDark ? "#94A3B8" : "#475569" }}
                  >
                    PROJECT SUMMARY / TECHNICAL SCOPE *
                  </label>
                  <textarea
                    required
                    className="w-full px-4 py-3 rounded-xl font-body-md text-body-md shadow-xs outline-none transition-all focus:ring-2 focus:ring-[#00D2FF]/50 glass-pill"
                    placeholder="Describe your current challenge, target audience, timeline, or key technical integrations..."
                    rows={4}
                    style={{
                      color: isDark ? "#FFFFFF" : "#0b1c30",
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
                      style={{ color: isDark ? "#94A3B8" : "#64748B" }}
                    >
                      Standard NDA protection applies automatically
                    </label>
                  </div>
                  <button
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-mono text-xs font-bold shadow-md transition-all hover:scale-105 cursor-pointer"
                    style={{
                      backgroundColor: isDark ? "#00D2FF" : "#0074db",
                      color: isDark ? "#080B10" : "#ffffff",
                    }}
                    type="submit"
                  >
                    <span>Submit Scope for Assessment</span>
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
