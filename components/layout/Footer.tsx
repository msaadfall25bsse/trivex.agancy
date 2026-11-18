"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className="w-full transition-colors duration-200"
      style={{
        backgroundColor: theme === "dark" ? "#0B0E14" : "#f1f5f9",
        borderTop: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
        color: theme === "dark" ? "#94A3B8" : "#404754",
      }}
    >
      <div className="w-full px-margin py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-space-xl">
          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-space-md">
            <Link href="/" className="inline-block focus:outline-none">
              <div
                className="font-headline-md text-headline-md font-bold tracking-tight flex items-center transition-colors"
                style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
              >
                TRIVE
                <span
                  className="font-headline-md"
                  style={{ color: theme === "dark" ? "#00D2FF" : "#0074db" }}
                >
                  X
                </span>
              </div>
            </Link>
            <p
              className="font-body-sm text-body-sm leading-relaxed max-w-sm transition-colors"
              style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
            >
              High-velocity engineering and global technology consultancy accelerating enterprise
              platforms, AI infrastructure, and mission-critical cloud solutions.
            </p>
            <div
              className="pt-2 space-y-1.5 font-label-md text-label-md transition-colors"
              style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
                >
                  mail
                </span>
                <span>contact@trivex.group</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
                >
                  phone_in_talk
                </span>
                <span>+1 (800) 874-8390</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
                >
                  dns
                </span>
                <span
                  className="font-mono font-semibold"
                  style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
                >
                  ISO 27001 &amp; SOC 2 TYPE II CERTIFIED
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Capabilities */}
          <div className="space-y-space-md">
            <h4
              className="font-headline-sm text-headline-sm transition-colors"
              style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
            >
              Capabilities
            </h4>
            <ul className="space-y-2.5 font-body-sm text-body-sm">
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  data-path="services"
                  href="#services-matrix"
                  style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
                >
                  Enterprise Architecture &amp; Cloud
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  data-path="services"
                  href="#services-matrix"
                  style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
                >
                  Generative AI &amp; Data Platforms
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  data-path="services"
                  href="#services-matrix"
                  style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
                >
                  Full-Cycle Product Engineering
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  data-path="services"
                  href="#services-matrix"
                  style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
                >
                  Legacy Migration &amp; Refactoring
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  data-path="services"
                  href="#services-matrix"
                  style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
                >
                  DevSecOps &amp; Platform Automation
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  data-path="hire-developer"
                  href="#hire-developer"
                  style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
                >
                  Dedicated Engineering Squads
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Tech Stacks */}
          <div className="space-y-space-md">
            <h4
              className="font-headline-sm text-headline-sm transition-colors"
              style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
            >
              Tech Stacks
            </h4>
            <ul className="space-y-2.5 font-body-sm text-body-sm">
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  data-path="services"
                  href="#services-matrix"
                  style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
                >
                  Next.js / React / TypeScript
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  data-path="services"
                  href="#services-matrix"
                  style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
                >
                  Go / Rust / Distributed Systems
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  data-path="services"
                  href="#services-matrix"
                  style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
                >
                  Python / PyTorch / LLMOps
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  data-path="services"
                  href="#services-matrix"
                  style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
                >
                  AWS / GCP / Azure Hybrid Cloud
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  data-path="services"
                  href="#services-matrix"
                  style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
                >
                  Kubernetes / Terraform / Kafka
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-[#00D2FF]"
                  data-path="services"
                  href="#services-matrix"
                  style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
                >
                  PostgreSQL / Snowflake / Redis
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Global Delivery Hubs */}
          <div className="space-y-space-md">
            <h4
              className="font-headline-sm text-headline-sm transition-colors"
              style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
            >
              Global Delivery Hubs
            </h4>
            <div className="space-y-3 font-body-sm text-body-sm">
              <div
                className="border-l-2 pl-3"
                style={{ borderLeftColor: theme === "dark" ? "#00D2FF" : "#0074db" }}
              >
                <div
                  className="font-label-md text-label-md font-semibold transition-colors"
                  style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
                >
                  United States
                </div>
                <div
                  className="text-xs transition-colors"
                  style={{ color: theme === "dark" ? "#64748B" : "#64748B" }}
                >
                  New York • San Francisco • Austin
                </div>
              </div>
              <div
                className="border-l-2 pl-3"
                style={{ borderLeftColor: theme === "dark" ? "#00D2FF" : "#0074db" }}
              >
                <div
                  className="font-label-md text-label-md font-semibold transition-colors"
                  style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
                >
                  United Kingdom &amp; Sweden
                </div>
                <div
                  className="text-xs transition-colors"
                  style={{ color: theme === "dark" ? "#64748B" : "#64748B" }}
                >
                  London Tech Square • Stockholm Hub
                </div>
              </div>
              <div
                className="border-l-2 pl-3"
                style={{ borderLeftColor: theme === "dark" ? "#00D2FF" : "#0074db" }}
              >
                <div
                  className="font-label-md text-label-md font-semibold transition-colors"
                  style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
                >
                  United Arab Emirates
                </div>
                <div
                  className="text-xs transition-colors"
                  style={{ color: theme === "dark" ? "#64748B" : "#64748B" }}
                >
                  Dubai Internet City HQ
                </div>
              </div>
              <div
                className="border-l-2 pl-3"
                style={{ borderLeftColor: theme === "dark" ? "#00D2FF" : "#0074db" }}
              >
                <div
                  className="font-label-md text-label-md font-semibold transition-colors"
                  style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
                >
                  Pakistan Delivery Center
                </div>
                <div
                  className="text-xs transition-colors"
                  style={{ color: theme === "dark" ? "#64748B" : "#64748B" }}
                >
                  Islamabad • Lahore Center of Excellence
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal links */}
        <div
          className="pt-space-lg border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: theme === "dark" ? "#1E2633" : "#e2e8f0" }}
        >
          <div
            className="font-label-sm text-label-sm transition-colors text-center md:text-left"
            style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
          >
            © 2026 TRIVEX Global Technology Group. All rights reserved. Precision-engineered enterprise solutions.
          </div>
          <div
            className="flex items-center gap-space-lg font-label-sm text-label-sm transition-colors"
            style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
          >
            <Link
              className="hover:text-primary transition-colors"
              data-path="privacy-policy"
              href="#privacy-policy"
            >
              Privacy Policy
            </Link>
            <Link
              className="hover:text-primary transition-colors"
              data-path="terms-of-service"
              href="#terms-of-service"
            >
              Terms of Service
            </Link>
            <Link
              className="hover:text-primary transition-colors"
              data-path="security"
              href="#security"
            >
              Security &amp; Compliance
            </Link>
            <Link
              className="hover:text-primary transition-colors"
              data-path="sitemap"
              href="#sitemap"
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
