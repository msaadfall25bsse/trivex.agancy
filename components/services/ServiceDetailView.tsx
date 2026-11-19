"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { ServiceData, SERVICES } from "@/data/services";
import { Icon } from "@/components/ui/Icon";

interface ServiceDetailViewProps {
  service: ServiceData;
}

export function ServiceDetailView({ service }: ServiceDetailViewProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const relatedServices = (service.relatedSlugs || [])
    .map((slug) => SERVICES[slug])
    .filter(Boolean);

  return (
    <div
      className="min-h-screen pt-28 pb-20 transition-colors duration-200"
      style={{
        backgroundColor: isDark ? "#080B10" : "#f8f9ff",
        color: isDark ? "#ffffff" : "#0b1c30",
      }}
    >
      {/* Breadcrumb Bar */}
      <div className="w-full px-margin py-3 border-b" style={{ borderColor: isDark ? "#1E2633" : "#e2e8f0" }}>
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-mono" style={{ color: isDark ? "#64748B" : "#64748b" }}>
          <Link href="/" className="hover:text-[#00D2FF] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-[#00D2FF] transition-colors">Services</Link>
          <span>/</span>
          <span style={{ color: isDark ? "#00D2FF" : "#0088FF" }}>{service.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative px-margin pt-12 pb-16 overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[140px] pointer-events-none opacity-20"
          style={{ backgroundColor: isDark ? "#00D2FF" : "#0088FF" }}
        />

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono font-semibold"
            style={{
              backgroundColor: isDark ? "rgba(0, 210, 255, 0.08)" : "rgba(0, 136, 255, 0.08)",
              borderColor: isDark ? "rgba(0, 210, 255, 0.25)" : "rgba(0, 136, 255, 0.25)",
              color: isDark ? "#00D2FF" : "#0088FF",
            }}
          >
            <Icon name={service.icon} className="w-4 h-4" />
            <span>{service.badge}</span>
          </div>

          <h1 className="font-brand text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            {service.heroHeadline}
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: isDark ? "#94A3B8" : "#404754" }}
          >
            {service.heroDescription}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-lg font-bold text-sm transition-all shadow-lg hover:brightness-110 flex items-center gap-2"
              style={{
                backgroundColor: isDark ? "#00D2FF" : "#0088FF",
                color: isDark ? "#000000" : "#ffffff",
                boxShadow: isDark
                  ? "0 0 25px rgba(0, 210, 255, 0.35)"
                  : "0 4px 15px rgba(0, 136, 255, 0.25)",
              }}
            >
              <span>Book a Free Strategy Consultation</span>
              <Icon name="arrow_forward" className="w-4 h-4" />
            </Link>

            <Link
              href="/services"
              className="px-6 py-3.5 rounded-lg font-semibold text-sm border transition-all hover:bg-slate-500/10"
              style={{
                borderColor: isDark ? "#1E2633" : "#cbd5e1",
                color: isDark ? "#ffffff" : "#0b1c30",
              }}
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition & Highlights */}
      <section className="px-margin py-12">
        <div className="max-w-7xl mx-auto">
          <div
            className="p-8 sm:p-10 rounded-2xl border relative overflow-hidden"
            style={{
              backgroundColor: isDark ? "#0F141C" : "#ffffff",
              borderColor: isDark ? "#1E2633" : "#e2e8f0",
              boxShadow: isDark
                ? "0 10px 30px rgba(0,0,0,0.4)"
                : "0 10px 30px rgba(0,0,0,0.03)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span
                  className="text-xs font-mono font-bold uppercase tracking-wider"
                  style={{ color: isDark ? "#00D2FF" : "#0088FF" }}
                >
                  Strategic Focus &amp; Commercial Impact
                </span>
                <h2 className="font-brand text-2xl sm:text-3xl font-bold">
                  Engineered for Growth, Not Just Outputs
                </h2>
                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ color: isDark ? "#94A3B8" : "#404754" }}
                >
                  {service.valueProposition}
                </p>
              </div>

              <div
                className="lg:col-span-4 p-6 rounded-xl border flex flex-col justify-between space-y-4"
                style={{
                  backgroundColor: isDark ? "#141B26" : "#f1f5f9",
                  borderColor: isDark ? "#1E2633" : "#cbd5e1",
                }}
              >
                <div>
                  <div className="text-xs font-mono uppercase text-slate-400 mb-1">Service SLA</div>
                  <div className="font-brand text-lg font-bold">24-Hour Consultation Turnaround</div>
                </div>
                <div className="border-t pt-4" style={{ borderColor: isDark ? "#1E2633" : "#cbd5e1" }}>
                  <div className="text-xs font-mono uppercase text-slate-400 mb-1">Commercial Guarantee</div>
                  <div className="text-sm font-semibold">100% IP &amp; Code Ownership</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Grid */}
      <section className="px-margin py-14">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span
              className="text-xs font-mono font-bold uppercase tracking-wider"
              style={{ color: isDark ? "#00D2FF" : "#0088FF" }}
            >
              Scope of Work
            </span>
            <h2 className="font-brand text-2xl sm:text-3xl md:text-4xl font-bold">
              Key Deliverables &amp; Artifacts
            </h2>
            <p
              className="text-sm sm:text-base max-w-2xl mx-auto"
              style={{ color: isDark ? "#94A3B8" : "#404754" }}
            >
              Every engagement is clearly scoped with tangible deliverables and documented production milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1"
                style={{
                  backgroundColor: isDark ? "#0F141C" : "#ffffff",
                  borderColor: isDark ? "#1E2633" : "#e2e8f0",
                }}
              >
                <div className="space-y-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold"
                    style={{
                      backgroundColor: isDark ? "rgba(0,210,255,0.12)" : "rgba(0,136,255,0.1)",
                      color: isDark ? "#00D2FF" : "#0088FF",
                    }}
                  >
                    0{idx + 1}
                  </div>
                  <p className="font-brand font-semibold text-sm leading-snug">
                    {item}
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <span style={{ color: isDark ? "#00D2FF" : "#0088FF" }}>
                    <Icon name="check_circle" className="w-4 h-4" />
                  </span>
                  <span>Included in SOW</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is it for & Problems Solved */}
      <section className="px-margin py-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Who is it for */}
          <div
            className="p-8 rounded-2xl border space-y-6"
            style={{
              backgroundColor: isDark ? "#0F141C" : "#ffffff",
              borderColor: isDark ? "#1E2633" : "#e2e8f0",
            }}
          >
            <div className="flex items-center gap-3">
              <span style={{ color: isDark ? "#00D2FF" : "#0088FF" }}>
                <Icon name="groups" className="w-6 h-6" />
              </span>
              <h3 className="font-brand text-xl sm:text-2xl font-bold">Who This Is For</h3>
            </div>
            <ul className="space-y-3.5">
              {service.whoIsItFor.map((target, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 shrink-0"
                    style={{ color: isDark ? "#00D2FF" : "#0088FF" }}
                  >
                    <Icon name="verified" className="w-4 h-4" />
                  </span>
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: isDark ? "#94A3B8" : "#404754" }}
                  >
                    {target}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Problems Solved */}
          <div
            className="p-8 rounded-2xl border space-y-6"
            style={{
              backgroundColor: isDark ? "#0F141C" : "#ffffff",
              borderColor: isDark ? "#1E2633" : "#e2e8f0",
            }}
          >
            <div className="flex items-center gap-3">
              <span style={{ color: isDark ? "#00D2FF" : "#0088FF" }}>
                <Icon name="healing" className="w-6 h-6" />
              </span>
              <h3 className="font-brand text-xl sm:text-2xl font-bold">Business Problems Solved</h3>
            </div>
            <ul className="space-y-3.5">
              {service.problemsSolved.map((problem, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 shrink-0"
                    style={{ color: isDark ? "#00D2FF" : "#0088FF" }}
                  >
                    <Icon name="check" className="w-4 h-4" />
                  </span>
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: isDark ? "#94A3B8" : "#404754" }}
                  >
                    {problem}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4-Step Execution Process */}
      <section className="px-margin py-14">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span
              className="text-xs font-mono font-bold uppercase tracking-wider"
              style={{ color: isDark ? "#00D2FF" : "#0088FF" }}
            >
              Execution Framework
            </span>
            <h2 className="font-brand text-2xl sm:text-3xl md:text-4xl font-bold">
              Our 4-Stage Delivery Lifecycle
            </h2>
            <p
              className="text-sm sm:text-base max-w-2xl mx-auto"
              style={{ color: isDark ? "#94A3B8" : "#404754" }}
            >
              We eliminate guesswork with transparent milestones, regular staging demos, and systematic quality assurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-xl border relative space-y-3"
                style={{
                  backgroundColor: isDark ? "#0F141C" : "#ffffff",
                  borderColor: isDark ? "#1E2633" : "#e2e8f0",
                }}
              >
                <div
                  className="text-2xl font-mono font-bold"
                  style={{ color: isDark ? "#00D2FF" : "#0088FF" }}
                >
                  {step.step}
                </div>
                <h4 className="font-brand font-bold text-base">{step.title}</h4>
                <p
                  className="text-xs sm:text-sm leading-relaxed"
                  style={{ color: isDark ? "#94A3B8" : "#404754" }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Stack */}
      <section className="px-margin py-10">
        <div className="max-w-7xl mx-auto">
          <div
            className="p-8 rounded-2xl border space-y-6 text-center"
            style={{
              backgroundColor: isDark ? "#0F141C" : "#ffffff",
              borderColor: isDark ? "#1E2633" : "#e2e8f0",
            }}
          >
            <div className="space-y-2">
              <span
                className="text-xs font-mono font-bold uppercase tracking-wider"
                style={{ color: isDark ? "#00D2FF" : "#0088FF" }}
              >
                Technology Stack
              </span>
              <h3 className="font-brand text-xl sm:text-2xl font-bold">
                Industry-Standard Tools &amp; Frameworks
              </h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto pt-2">
              {service.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-lg text-xs font-mono font-semibold border"
                  style={{
                    backgroundColor: isDark ? "#141B26" : "#f1f5f9",
                    borderColor: isDark ? "#1E2633" : "#cbd5e1",
                    color: isDark ? "#ffffff" : "#0b1c30",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service-Specific FAQs */}
      <section className="px-margin py-14">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <span
              className="text-xs font-mono font-bold uppercase tracking-wider"
              style={{ color: isDark ? "#00D2FF" : "#0088FF" }}
            >
              Frequently Asked Questions
            </span>
            <h2 className="font-brand text-2xl sm:text-3xl font-bold">
              Questions About {service.title}
            </h2>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border overflow-hidden transition-colors"
                  style={{
                    backgroundColor: isDark ? "#0F141C" : "#ffffff",
                    borderColor: isDark ? "#1E2633" : "#e2e8f0",
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-brand font-semibold text-sm sm:text-base cursor-pointer"
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
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="px-margin py-10">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span
                  className="text-xs font-mono font-bold uppercase tracking-wider"
                  style={{ color: isDark ? "#00D2FF" : "#0088FF" }}
                >
                  Complementary Solutions
                </span>
                <h3 className="font-brand text-xl sm:text-2xl font-bold">Related Services</h3>
              </div>
              <Link
                href="/services"
                className="text-xs font-mono font-semibold flex items-center gap-1 hover:underline"
                style={{ color: isDark ? "#00D2FF" : "#0088FF" }}
              >
                <span>View all 12 services</span>
                <Icon name="arrow_forward" className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="p-6 rounded-xl border flex flex-col justify-between group transition-all hover:border-[#00D2FF]"
                  style={{
                    backgroundColor: isDark ? "#0F141C" : "#ffffff",
                    borderColor: isDark ? "#1E2633" : "#e2e8f0",
                  }}
                >
                  <div className="space-y-3">
                    <span
                      className="group-hover:scale-110 transition-transform inline-block"
                      style={{ color: isDark ? "#00D2FF" : "#0088FF" }}
                    >
                      <Icon name={rel.icon} className="w-6 h-6" />
                    </span>
                    <h4 className="font-brand font-bold text-base group-hover:text-[#00D2FF] transition-colors">
                      {rel.title}
                    </h4>
                    <p
                      className="text-xs leading-relaxed line-clamp-2"
                      style={{ color: isDark ? "#94A3B8" : "#404754" }}
                    >
                      {rel.shortDescription}
                    </p>
                  </div>
                  <div className="pt-4 flex items-center gap-1 text-xs font-mono font-semibold" style={{ color: isDark ? "#00D2FF" : "#0088FF" }}>
                    <span>Learn more</span>
                    <Icon name="arrow_forward" className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA Banner */}
      <section className="px-margin pt-14">
        <div className="max-w-7xl mx-auto">
          <div
            className="p-8 sm:p-12 rounded-3xl border text-center space-y-6 relative overflow-hidden"
            style={{
              backgroundColor: isDark ? "#0F141C" : "#ffffff",
              borderColor: isDark ? "rgba(0,210,255,0.3)" : "rgba(0,136,255,0.3)",
              boxShadow: isDark
                ? "0 20px 50px rgba(0, 210, 255, 0.1)"
                : "0 20px 50px rgba(0, 136, 255, 0.08)",
            }}
          >
            <span
              className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border inline-block"
              style={{
                backgroundColor: isDark ? "rgba(0,210,255,0.1)" : "rgba(0,136,255,0.08)",
                borderColor: isDark ? "rgba(0,210,255,0.3)" : "rgba(0,136,255,0.2)",
                color: isDark ? "#00D2FF" : "#0088FF",
              }}
            >
              Get Started with TRIVEX
            </span>
            <h2 className="font-brand text-3xl sm:text-4xl font-bold max-w-2xl mx-auto">
              Ready to Accelerate Your {service.title}?
            </h2>
            <p
              className="text-sm sm:text-base max-w-xl mx-auto"
              style={{ color: isDark ? "#94A3B8" : "#404754" }}
            >
              Schedule a technical strategy call with our leadership. We will evaluate your goals and outline a direct, actionable delivery plan.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-xl hover:brightness-110"
                style={{
                  backgroundColor: isDark ? "#00D2FF" : "#0088FF",
                  color: isDark ? "#000000" : "#ffffff",
                  boxShadow: isDark
                    ? "0 0 30px rgba(0, 210, 255, 0.4)"
                    : "0 6px 20px rgba(0, 136, 255, 0.3)",
                }}
              >
                <span>Request a Free Project Consultation</span>
                <Icon name="arrow_forward" className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
