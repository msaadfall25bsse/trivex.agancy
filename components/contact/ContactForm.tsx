"use client";

import React, { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

export function ContactForm() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "Web & Custom Development",
    budget: "$5k – $15k",
    timeline: "Within 1 Month",
    details: "",
    agreeToTerms: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate immediate, reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  if (isSubmitted) {
    return (
      <div
        className="p-8 sm:p-12 rounded-3xl border text-center space-y-6"
        style={{
          backgroundColor: isDark ? "#0F141C" : "#ffffff",
          borderColor: isDark ? "#00D2FF" : "#0088FF",
          boxShadow: isDark
            ? "0 0 30px rgba(0,210,255,0.2)"
            : "0 10px 30px rgba(0,136,255,0.1)",
        }}
      >
        <div
          className="w-16 h-16 rounded-full mx-auto flex items-center justify-center"
          style={{
            backgroundColor: isDark ? "rgba(0,210,255,0.15)" : "rgba(0,136,255,0.1)",
            color: isDark ? "#00D2FF" : "#0088FF",
          }}
        >
          <span className="material-symbols-outlined text-3xl">check_circle</span>
        </div>

        <h3 className="font-brand text-2xl sm:text-3xl font-bold">
          Consultation Request Received
        </h3>

        <p
          className="text-sm sm:text-base max-w-md mx-auto leading-relaxed"
          style={{ color: isDark ? "#94A3B8" : "#404754" }}
        >
          Thank you, <strong>{formData.fullName}</strong>. A TRIVEX senior technical strategist has received your inquiry for <strong>{formData.service}</strong> and will follow up within 24 business hours.
        </p>

        <div
          className="p-4 rounded-xl border max-w-sm mx-auto text-xs font-mono"
          style={{
            backgroundColor: isDark ? "#141B26" : "#f1f5f9",
            borderColor: isDark ? "#1E2633" : "#cbd5e1",
          }}
        >
          Direct Inquiries: <span style={{ color: isDark ? "#00D2FF" : "#0088FF" }}>contact@trivex.group</span>
        </div>

        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              fullName: "",
              email: "",
              company: "",
              service: "Web & Custom Development",
              budget: "$5k – $15k",
              timeline: "Within 1 Month",
              details: "",
              agreeToTerms: true,
            });
          }}
          className="text-xs font-mono underline hover:no-underline pt-2 cursor-pointer"
          style={{ color: isDark ? "#00D2FF" : "#0088FF" }}
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 sm:p-10 rounded-3xl border space-y-6"
      style={{
        backgroundColor: isDark ? "#0F141C" : "#ffffff",
        borderColor: isDark ? "#1E2633" : "#e2e8f0",
        boxShadow: isDark ? "0 10px 30px rgba(0,0,0,0.4)" : "0 10px 30px rgba(0,0,0,0.03)",
      }}
    >
      <div className="space-y-1">
        <h3 className="font-brand text-xl sm:text-2xl font-bold">Request a Project Consultation</h3>
        <p className="text-xs sm:text-sm" style={{ color: isDark ? "#94A3B8" : "#404754" }}>
          Fill in the details below. Our team reviews all requests within 24 business hours.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono font-semibold" style={{ color: isDark ? "#CBD5E1" : "#1E293B" }}>
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Alexander Vance"
            className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors"
            style={{
              backgroundColor: isDark ? "#141B26" : "#f8f9ff",
              borderColor: isDark ? "#1E2633" : "#cbd5e1",
              color: isDark ? "#ffffff" : "#0b1c30",
            }}
          />
        </div>

        {/* Work Email */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono font-semibold" style={{ color: isDark ? "#CBD5E1" : "#1E293B" }}>
            Work Email *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="alexander@company.com"
            className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors"
            style={{
              backgroundColor: isDark ? "#141B26" : "#f8f9ff",
              borderColor: isDark ? "#1E2633" : "#cbd5e1",
              color: isDark ? "#ffffff" : "#0b1c30",
            }}
          />
        </div>

        {/* Company Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono font-semibold" style={{ color: isDark ? "#CBD5E1" : "#1E293B" }}>
            Company or Organization
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Acme Global Ltd."
            className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors"
            style={{
              backgroundColor: isDark ? "#141B26" : "#f8f9ff",
              borderColor: isDark ? "#1E2633" : "#cbd5e1",
              color: isDark ? "#ffffff" : "#0b1c30",
            }}
          />
        </div>

        {/* Service of Interest */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono font-semibold" style={{ color: isDark ? "#CBD5E1" : "#1E293B" }}>
            Primary Service *
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors cursor-pointer"
            style={{
              backgroundColor: isDark ? "#141B26" : "#f8f9ff",
              borderColor: isDark ? "#1E2633" : "#cbd5e1",
              color: isDark ? "#ffffff" : "#0b1c30",
            }}
          >
            <option>Web &amp; Custom Development</option>
            <option>WordPress Development</option>
            <option>E-Commerce Solutions</option>
            <option>Mobile App Development</option>
            <option>Digital Marketing &amp; Paid Ads</option>
            <option>Social Media Marketing</option>
            <option>Search Engine Optimization (SEO)</option>
            <option>Business Automation &amp; AI</option>
            <option>UI/UX &amp; Product Design</option>
            <option>AI Video &amp; UGC Production</option>
            <option>Graphic Design &amp; Branding</option>
            <option>Video Editing &amp; Motion</option>
          </select>
        </div>

        {/* Estimated Budget */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono font-semibold" style={{ color: isDark ? "#CBD5E1" : "#1E293B" }}>
            Estimated Investment Range
          </label>
          <select
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors cursor-pointer"
            style={{
              backgroundColor: isDark ? "#141B26" : "#f8f9ff",
              borderColor: isDark ? "#1E2633" : "#cbd5e1",
              color: isDark ? "#ffffff" : "#0b1c30",
            }}
          >
            <option>&lt; $5,000</option>
            <option>$5,000 – $15,000</option>
            <option>$15,000 – $35,000</option>
            <option>$35,000 – $75,000</option>
            <option>$75,000+</option>
          </select>
        </div>

        {/* Timeline */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono font-semibold" style={{ color: isDark ? "#CBD5E1" : "#1E293B" }}>
            Target Timeline
          </label>
          <select
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors cursor-pointer"
            style={{
              backgroundColor: isDark ? "#141B26" : "#f8f9ff",
              borderColor: isDark ? "#1E2633" : "#cbd5e1",
              color: isDark ? "#ffffff" : "#0b1c30",
            }}
          >
            <option>Immediate / ASAP</option>
            <option>Within 1 Month</option>
            <option>Within 2 – 3 Months</option>
            <option>Flexible / Planning Ahead</option>
          </select>
        </div>
      </div>

      {/* Scope Details */}
      <div className="space-y-1.5">
        <label className="text-xs font-mono font-semibold" style={{ color: isDark ? "#CBD5E1" : "#1E293B" }}>
          Project Goals &amp; Scope Overview *
        </label>
        <textarea
          required
          rows={4}
          value={formData.details}
          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          placeholder="Describe your current challenge, target audience, technical requirements, or key deliverables..."
          className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors resize-y"
          style={{
            backgroundColor: isDark ? "#141B26" : "#f8f9ff",
            borderColor: isDark ? "#1E2633" : "#cbd5e1",
            color: isDark ? "#ffffff" : "#0b1c30",
          }}
        />
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-3 pt-1">
        <input
          type="checkbox"
          id="agree"
          required
          checked={formData.agreeToTerms}
          onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
          className="mt-1 cursor-pointer"
        />
        <label htmlFor="agree" className="text-xs cursor-pointer" style={{ color: isDark ? "#94A3B8" : "#404754" }}>
          I agree that TRIVEX may process my contact information to respond to this consultation inquiry in accordance with the Privacy Policy.
        </label>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:brightness-110"
          style={{
            backgroundColor: isDark ? "#00D2FF" : "#0088FF",
            color: isDark ? "#000000" : "#ffffff",
            boxShadow: isDark
              ? "0 0 25px rgba(0, 210, 255, 0.35)"
              : "0 4px 15px rgba(0, 136, 255, 0.25)",
            opacity: isSubmitting ? 0.7 : 1,
          }}
        >
          {isSubmitting ? (
            <>
              <span className="material-symbols-outlined text-base animate-spin">refresh</span>
              <span>Submitting Request...</span>
            </>
          ) : (
            <>
              <span>Schedule Technical Consultation</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
