import React from "react";
import { constructMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/contact/ContactForm";
import { Icon } from "@/components/ui/Icon";

export const metadata = constructMetadata({
  title: "Book a Consultation | Contact TRIVEX Agency",
  description:
    "Schedule a strategic technical consultation with TRIVEX. Discuss web development, performance marketing, mobile apps, or automation with our senior engineering team.",
  pathname: "/contact",
});

export default function ContactPage() {
  const CONTACT_HIGHLIGHTS = [
    {
      icon: "schedule",
      title: "24-Hour Response Guarantee",
      desc: "All submitted scopes are reviewed directly by senior technical directors within 24 business hours.",
    },
    {
      icon: "handshake",
      title: "Zero-Pressure Discovery",
      desc: "An honest technical assessment and transparent project estimate, with zero sales pressure.",
    },
    {
      icon: "verified_user",
      title: "Strict NDA & IP Protection",
      desc: "All client concepts, business models, and trade secrets are kept under strict confidentiality.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 transition-colors duration-200 bg-[#f8f9ff] text-[#0b1c30] dark:bg-[#080B10] dark:text-white">
      {/* Hero Section */}
      <section className="relative px-margin pt-12 pb-12 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono font-semibold bg-blue-500/10 border-blue-500/25 text-[#0088FF] dark:bg-cyan-500/10 dark:border-cyan-500/25 dark:text-[#00D2FF]">
            <Icon name="mail" className="w-4 h-4" />
            <span>STRATEGIC CONSULTATION</span>
          </div>

          <h1 className="font-brand text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Let&apos;s Build Something Great Together
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Have a new product to engineer, a store to scale, or a marketing funnel to optimize? Tell us about your objectives and let&apos;s design the roadmap.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Agency Details */}
      <section className="px-margin py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Details column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Card */}
            <div className="p-8 rounded-3xl border bg-white border-slate-200 dark:bg-[#0F141C] dark:border-[#1E2633] space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase text-[#0088FF] dark:text-[#00D2FF]">
                  Direct Channels
                </span>
                <h3 className="font-brand text-xl font-bold">Contact Our Leadership</h3>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-blue-500/10 text-[#0088FF] dark:bg-cyan-500/10 dark:text-[#00D2FF]">
                    <Icon name="alternate_email" className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-400">Direct Email</div>
                    <a
                      href="mailto:contact@trivex.group"
                      className="font-semibold hover:underline text-slate-900 dark:text-white"
                    >
                      contact@trivex.group
                    </a>
                    <div className="text-xs text-slate-500">Fastest channel for project RFPs</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-blue-500/10 text-[#0088FF] dark:bg-cyan-500/10 dark:text-[#00D2FF]">
                    <Icon name="phone_in_talk" className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-400">Telephone</div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      +1 (800) 874-8390
                    </div>
                    <div className="text-xs text-slate-500">Mon – Fri: 9:00 AM – 6:00 PM EST</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-blue-500/10 text-[#0088FF] dark:bg-cyan-500/10 dark:text-[#00D2FF]">
                    <Icon name="location_on" className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-400">Global Hubs</div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      United States • UK • UAE • Pakistan
                    </div>
                    <div className="text-xs text-slate-500">Distributed client collaboration</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Commitments Card */}
            <div className="p-8 rounded-3xl border bg-white border-slate-200 dark:bg-[#0F141C] dark:border-[#1E2633] space-y-5">
              <h4 className="font-brand font-bold text-base">Our Engagement Principles</h4>
              <div className="space-y-4">
                {CONTACT_HIGHLIGHTS.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="mt-0.5 text-[#0088FF] dark:text-[#00D2FF]">
                      <Icon name={h.icon} className="w-4 h-4" />
                    </span>
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        {h.title}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {h.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
