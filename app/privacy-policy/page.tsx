import React from "react";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Privacy Policy | TRIVEX Agency",
  description: "TRIVEX privacy policy detailing data protection, collection, and storage practices.",
  pathname: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 transition-colors duration-200 bg-[#f8f9ff] text-[#0b1c30] dark:bg-[#080B10] dark:text-white">
      <div className="max-w-4xl mx-auto px-margin py-12 space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold uppercase text-[#0088FF] dark:text-[#00D2FF]">
            Legal Documentation
          </span>
          <h1 className="font-brand text-3xl sm:text-4xl font-bold">Privacy Policy</h1>
          <p className="text-xs font-mono text-slate-500">Last updated: January 2026</p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl border bg-white border-slate-200 dark:bg-[#0F141C] dark:border-[#1E2633] space-y-6 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
          <section className="space-y-3">
            <h2 className="font-brand text-xl font-bold text-slate-900 dark:text-white">1. Information We Collect</h2>
            <p>
              When you visit the TRIVEX website or submit a project consultation inquiry, we may collect personal information such as your name, corporate email address, telephone number, company name, and details concerning your project requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-brand text-xl font-bold text-slate-900 dark:text-white">2. How We Use Your Information</h2>
            <p>
              We use the collected information exclusively to evaluate project feasibility, provide technical scopes of work, deliver agreed client engineering and growth services, and communicate administrative updates. We never sell, rent, or trade your personal information to third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-brand text-xl font-bold text-slate-900 dark:text-white">3. Data Security &amp; Confidentiality</h2>
            <p>
              TRIVEX implements industry-standard technical and organizational security controls to protect client information and intellectual property. We employ TLS/SSL encryption for data in transit and adhere to strict access controls.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-brand text-xl font-bold text-slate-900 dark:text-white">4. Your Rights</h2>
            <p>
              You have the right to request access to the personal data we hold about you, request rectification of any inaccuracies, or request the deletion of your personal data by contacting us at{" "}
              <a href="mailto:contact@trivex.group" className="text-[#0088FF] dark:text-[#00D2FF] underline">
                contact@trivex.group
              </a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-brand text-xl font-bold text-slate-900 dark:text-white">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact our data privacy officer at{" "}
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
