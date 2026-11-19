import React from "react";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Cookie Policy | TRIVEX Agency",
  description: "TRIVEX cookie policy outlining how cookies and local storage are utilized.",
  pathname: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 transition-colors duration-200 bg-[#f8f9ff] text-[#0b1c30] dark:bg-[#080B10] dark:text-white">
      <div className="max-w-4xl mx-auto px-margin py-12 space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold uppercase text-[#0088FF] dark:text-[#00D2FF]">
            Legal Documentation
          </span>
          <h1 className="font-brand text-3xl sm:text-4xl font-bold">Cookie Policy</h1>
          <p className="text-xs font-mono text-slate-500">Last updated: January 2026</p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl border bg-white border-slate-200 dark:bg-[#0F141C] dark:border-[#1E2633] space-y-6 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
          <section className="space-y-3">
            <h2 className="font-brand text-xl font-bold text-slate-900 dark:text-white">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work efficiently and provide essential reporting information to site owners.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-brand text-xl font-bold text-slate-900 dark:text-white">2. How TRIVEX Uses Cookies</h2>
            <p>
              We use cookies and browser local storage strictly for:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Remembering your visual interface preference (Dark Mode vs Light Mode).</li>
              <li>Aggregated, anonymous web analytics to understand page performance.</li>
              <li>Ensuring security and preventing CSRF abuse during consultation form submissions.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-brand text-xl font-bold text-slate-900 dark:text-white">3. Managing Cookie Preferences</h2>
            <p>
              You can instruct your web browser to refuse all cookies or indicate when a cookie is being sent. However, disabling cookies may impact your user experience and theme persistence across sessions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-brand text-xl font-bold text-slate-900 dark:text-white">4. Inquiries</h2>
            <p>
              If you have any questions regarding our cookie practices, please contact us at{" "}
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
