"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer
      className="w-full transition-colors duration-200 backdrop-blur-xl"
      style={{
        backgroundColor: isDark ? "rgba(8, 11, 16, 0.85)" : "rgba(241, 245, 249, 0.85)",
        borderTop: isDark ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(0, 0, 0, 0.06)",
        color: isDark ? "#94A3B8" : "#404754",
      }}
    >
      <div className="w-full px-margin py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-space-xl">
          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-space-md">
            <Link href="/" className="inline-block focus:outline-none">
              <div className="relative h-9 sm:h-10 w-auto flex items-center">
                <Image
                  src="/logo-light.png"
                  alt="TRIVEX Logo"
                  width={220}
                  height={34}
                  className={`h-8 sm:h-9 w-auto object-contain ${
                    isDark ? "hidden" : "block"
                  }`}
                />
                <Image
                  src="/logo-dark.png"
                  alt="TRIVEX Logo"
                  width={220}
                  height={34}
                  className={`h-8 sm:h-9 w-auto object-contain ${
                    isDark ? "block" : "hidden"
                  }`}
                />
              </div>
            </Link>
            <p
              className="font-body-sm text-body-sm leading-relaxed max-w-sm transition-colors"
              style={{ color: isDark ? "#94A3B8" : "#404754" }}
            >
              Full-service digital growth, software engineering, and creative technology agency. Three founding partners, one synchronized execution model.
            </p>
            <div
              className="pt-2 space-y-2 font-label-md text-label-md transition-colors"
              style={{ color: isDark ? "#94A3B8" : "#404754" }}
            >
              <div className="flex items-center gap-2">
                <span style={{ color: isDark ? "#00D2FF" : "#005baf" }}>
                  <Icon name="mail" className="w-4 h-4" />
                </span>
                <a
                  href="mailto:contact@trivex.group"
                  className="hover:underline transition-colors"
                  style={{ color: isDark ? "#ffffff" : "#0b1c30" }}
                >
                  contact@trivex.group
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: isDark ? "#00D2FF" : "#005baf" }}>
                  <Icon name="verified" className="w-4 h-4" />
                </span>
                <span
                  className="font-mono text-xs font-semibold"
                  style={{ color: isDark ? "#00D2FF" : "#005baf" }}
                >
                  24-Hour Consultation Turnaround
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Key Services */}
          <div className="space-y-space-md">
            <h4
              className="font-headline-sm text-headline-sm transition-colors"
              style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
            >
              Core Services
            </h4>
            <ul className="space-y-2.5 font-body-sm text-body-sm">
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  href="/services/web-development"
                  style={{ color: isDark ? "#94A3B8" : "#404754" }}
                >
                  Web &amp; Custom Development
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  href="/services/ecommerce"
                  style={{ color: isDark ? "#94A3B8" : "#404754" }}
                >
                  E-Commerce Storefronts
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  href="/services/mobile-app-development"
                  style={{ color: isDark ? "#94A3B8" : "#404754" }}
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  href="/services/digital-marketing"
                  style={{ color: isDark ? "#94A3B8" : "#404754" }}
                >
                  Digital Marketing &amp; Paid Ads
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  href="/services/business-automation"
                  style={{ color: isDark ? "#94A3B8" : "#404754" }}
                >
                  Business Automation &amp; AI
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  href="/services/ui-ux-design"
                  style={{ color: isDark ? "#94A3B8" : "#404754" }}
                >
                  UI/UX &amp; Product Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Leadership */}
          <div className="space-y-space-md">
            <h4
              className="font-headline-sm text-headline-sm transition-colors"
              style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
            >
              Company &amp; Team
            </h4>
            <ul className="space-y-2.5 font-body-sm text-body-sm">
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  href="/about"
                  style={{ color: isDark ? "#94A3B8" : "#404754" }}
                >
                  About TRIVEX
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  href="/team"
                  style={{ color: isDark ? "#94A3B8" : "#404754" }}
                >
                  Founding Leadership
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  href="/work"
                  style={{ color: isDark ? "#94A3B8" : "#404754" }}
                >
                  Selected Work &amp; Scopes
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  href="/process"
                  style={{ color: isDark ? "#94A3B8" : "#404754" }}
                >
                  Development Process
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  href="/industries"
                  style={{ color: isDark ? "#94A3B8" : "#404754" }}
                >
                  Industries Served
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  href="/contact"
                  style={{ color: isDark ? "#94A3B8" : "#404754" }}
                >
                  Contact &amp; Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Global Timezone Alignment */}
          <div className="space-y-space-md">
            <h4
              className="font-headline-sm text-headline-sm transition-colors"
              style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
            >
              Global Timezone Reach
            </h4>
            <div className="space-y-3 font-body-sm text-body-sm">
              <div
                className="border-l-2 pl-3"
                style={{ borderLeftColor: isDark ? "#00D2FF" : "#0074db" }}
              >
                <div
                  className="font-label-md text-label-md font-semibold transition-colors"
                  style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
                >
                  North America
                </div>
                <div
                  className="text-xs transition-colors"
                  style={{ color: isDark ? "#64748B" : "#64748B" }}
                >
                  PST / EST Active Sprint Overlap
                </div>
              </div>
              <div
                className="border-l-2 pl-3"
                style={{ borderLeftColor: isDark ? "#00D2FF" : "#0074db" }}
              >
                <div
                  className="font-label-md text-label-md font-semibold transition-colors"
                  style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
                >
                  United Kingdom &amp; Europe
                </div>
                <div
                  className="text-xs transition-colors"
                  style={{ color: isDark ? "#64748B" : "#64748B" }}
                >
                  GMT / CET Milestone Demos
                </div>
              </div>
              <div
                className="border-l-2 pl-3"
                style={{ borderLeftColor: isDark ? "#00D2FF" : "#0074db" }}
              >
                <div
                  className="font-label-md text-label-md font-semibold transition-colors"
                  style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
                >
                  Middle East &amp; Gulf
                </div>
                <div
                  className="text-xs transition-colors"
                  style={{ color: isDark ? "#64748B" : "#64748B" }}
                >
                  GST (UTC+4) Commercial Operations
                </div>
              </div>
              <div
                className="border-l-2 pl-3"
                style={{ borderLeftColor: isDark ? "#00D2FF" : "#0074db" }}
              >
                <div
                  className="font-label-md text-label-md font-semibold transition-colors"
                  style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
                >
                  Global Remote Delivery
                </div>
                <div
                  className="text-xs transition-colors"
                  style={{ color: isDark ? "#64748B" : "#64748B" }}
                >
                  24h Rapid Response SLA &amp; IP Protection
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal links */}
        <div
          className="pt-space-lg border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: isDark ? "#1E2633" : "#e2e8f0" }}
        >
          <div
            className="font-label-sm text-label-sm transition-colors text-center md:text-left"
            style={{ color: isDark ? "#94A3B8" : "#404754" }}
          >
            © 2026 TRIVEX Agency. All rights reserved. Precision-engineered digital growth and technology solutions.
          </div>
          <div
            className="flex flex-wrap items-center justify-center gap-space-md sm:gap-space-lg font-label-sm text-label-sm transition-colors"
            style={{ color: isDark ? "#94A3B8" : "#404754" }}
          >
            <Link
              className="hover:text-primary transition-colors"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
            <Link
              className="hover:text-primary transition-colors"
              href="/terms-of-service"
            >
              Terms of Service
            </Link>
            <Link
              className="hover:text-primary transition-colors"
              href="/cookie-policy"
            >
              Cookie Policy
            </Link>
            <Link
              className="hover:text-primary transition-colors"
              href="/faq"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
