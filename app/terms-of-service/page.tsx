import React from "react";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Terms of Service | TRIVEX Agency",
  description: "TRIVEX terms of service regarding client engagements, deliverables, and IP ownership.",
  pathname: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen pt-28 pb-20 transition-colors duration-200 bg-[#f8f9ff] text-[#0b1c30] dark:bg-[#080B10] dark:text-white">
      <div className="max-w-4xl mx-auto px-margin py-12 space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold uppercase text-[#0088FF] dark:text-[#00D2FF]">
            Legal Documentation
          </span>
          <h1 className="font-brand text-3xl sm:text-4xl font-bold">Terms of Service</h1>
          <p className="text-xs font-mono text-slate-500">Last updated: January 2026</p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl border bg-white border-slate-200 dark:bg-[#0F141C] dark:border-[#1E2633] space-y-6 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
          <section className="space-y-3">
            <h2 className="font-brand text-xl font-bold text-slate-900 dark:text-white">1. Agreement to Terms</h2>
            <p>
              By accessing our website or engaging TRIVEX for digital growth, design, marketing, or software development services, you agree to be bound by these Terms of Service and any project-specific Statements of Work (SOW) executed between the parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-brand text-xl font-bold text-slate-900 dark:text-white">2. Scope of Services</h2>
            <p>
              TRIVEX provides consulting, performance marketing management, web development, mobile application engineering, and creative production. All deliverables, timelines, milestone criteria, and payment terms are formally defined in written Statements of Work.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-brand text-xl font-bold text-slate-900 dark:text-white">3. Intellectual Property Ownership</h2>
            <p>
              Upon receipt of full payment for agreed milestones, TRIVEX assigns 100% intellectual property rights, source code ownership, repository access, and design assets developed specifically for the client directly to the client. TRIVEX retains no proprietary lock-in.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-brand text-xl font-bold text-slate-900 dark:text-white">4. Confidentiality</h2>
            <p>
              Both parties agree to protect and maintain confidential all non-public information, business trade secrets, financial details, customer data, and code architectures exchanged during the course of the engagement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-brand text-xl font-bold text-slate-900 dark:text-white">5. Governing Law &amp; Contact</h2>
            <p>
              These terms shall be governed by and construed in accordance with applicable laws. Inquiries concerning these terms should be addressed to{" "}
              <a href="mailto:contact@trivex.group" className="text-[#0088FF] dark:text-[#00D2FF] underline">
                contact@trivex.group
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
