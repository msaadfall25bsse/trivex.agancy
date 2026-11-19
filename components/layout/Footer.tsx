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
      className="w-full transition-colors duration-200"
      style={{
        backgroundColor: isDark ? "#0B0E14" : "#f1f5f9",
        borderTop: isDark ? "1px solid #1E2633" : "1px solid #e2e8f0",
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
              Full-service digital growth, engineering, and creative agency helping modern businesses build, scale, and automate. Three minds, one unified vision.
            </p>
            <div
              className="pt-2 space-y-1.5 font-label-md text-label-md transition-colors"
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
                  <Icon name="phone_in_talk" className="w-4 h-4" />
                </span>
                <span>+1 (800) 874-8390</span>
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: isDark ? "#00D2FF" : "#005baf" }}>
                  <Icon name="verified" className="w-4 h-4" />
                </span>
                <span
                  className="font-mono font-semibold"
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
                  href="/services/wordpress-development"
                  style={{ color: isDark ? "#94A3B8" : "#404754" }}
                >
                  WordPress Theme Engineering
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  href="/services/mobile-app-development"
                  style={{ color: isDark ? "#94A3B8" : "#404754" }}
                >
                  Cross-Platform Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  href="/services/digital-marketing"
                  style={{ color: isDark ? "#94A3B8" : "#404754" }}
                >
                  Paid Ads &amp; Performance Marketing
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors font-semibold hover:text-[#00D2FF]"
                  href="/services"
                  style={{ color: isDark ? "#00D2FF" : "#0088FF" }}
                >
                  View All 12 Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Agency & Methodology */}
          <div className="space-y-space-md">
            <h4
              className="font-headline-sm text-headline-sm transition-colors"
              style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
            >
              TRIVEX Agency
            </h4>
            <ul className="space-y-2.5 font-body-sm text-body-sm">
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  href="/about"
                  style={{ color: isDark ? "#94A3B8" : "#404754" }}
                >
                  About Our Philosophy
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  href="/work"
                  style={{ color: isDark ? "#94A3B8" : "#404754" }}
                >
                  Portfolio &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  href="/industries"
                  style={{ color: isDark ? "#94A3B8" : "#404754" }}
                >
                  Industries We Support
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  href="/process"
                  style={{ color: isDark ? "#94A3B8" : "#404754" }}
                >
                  4-Stage Execution Process
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  href="/faq"
                  style={{ color: isDark ? "#94A3B8" : "#404754" }}
                >
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  href="/contact"
                  style={{ color: isDark ? "#94A3B8" : "#404754" }}
                >
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Global Hubs */}
          <div className="space-y-space-md">
            <h4
              className="font-headline-sm text-headline-sm transition-colors"
              style={{ color: isDark ? "#FFFFFF" : "#0b1c30" }}
            >
              Global Hubs
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
                  United States
                </div>
                <div
                  className="text-xs transition-colors"
                  style={{ color: isDark ? "#64748B" : "#64748B" }}
                >
                  Strategic Client Growth &amp; Advisory
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
                  United Kingdom &amp; Sweden
                </div>
                <div
                  className="text-xs transition-colors"
                  style={{ color: isDark ? "#64748B" : "#64748B" }}
                >
                  European Delivery &amp; Design Architecture
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
                  United Arab Emirates
                </div>
                <div
                  className="text-xs transition-colors"
                  style={{ color: isDark ? "#64748B" : "#64748B" }}
                >
                  MENA Commercial Operations
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
                  Center of Technical Excellence
                </div>
                <div
                  className="text-xs transition-colors"
                  style={{ color: isDark ? "#64748B" : "#64748B" }}
                >
                  Abbottabad &amp; Islamabad Engineering Hubs
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
            <Link
              className="hover:text-primary transition-colors"
              href="/sitemap.xml"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
