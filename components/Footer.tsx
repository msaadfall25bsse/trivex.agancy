import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-slate-100 border-t border-slate-200 text-slate-700 dark:bg-[#0B0E14] dark:border-t dark:border-[#1E2633] dark:text-[#94A3B8] transition-colors duration-200">
      <div className="w-full px-4 sm:px-8 xl:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12 mb-12">
          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block focus:outline-none">
              <div className="relative h-9 sm:h-10 w-auto flex items-center">
                <Image
                  src="/logo-light.png"
                  alt="TRIVEX Logo"
                  width={160}
                  height={39}
                  className="h-9 sm:h-10 w-auto object-contain dark:hidden"
                />
                <Image
                  src="/logo-dark.png"
                  alt="TRIVEX Logo"
                  width={160}
                  height={39}
                  className="h-9 sm:h-10 w-auto object-contain hidden dark:block"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm text-[#404754] dark:text-[#94A3B8]">
              High-velocity engineering and global technology consultancy accelerating enterprise
              platforms, AI infrastructure, and mission-critical cloud solutions.
            </p>
            <div className="pt-2 space-y-2 text-xs font-mono text-[#404754] dark:text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-[#0074db] dark:text-[#00D2FF]">
                  mail
                </span>
                <span>contact@trivex.group</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-[#0074db] dark:text-[#00D2FF]">
                  phone_in_talk
                </span>
                <span>+1 (800) 874-8390</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-[#0074db] dark:text-[#00D2FF]">
                  dns
                </span>
                <span className="text-[#0074db] dark:text-[#00D2FF] uppercase font-semibold">
                  ISO 27001 &amp; SOC 2 TYPE II CERTIFIED
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Capabilities */}
          <div className="space-y-4">
            <h4 className="font-['Space_Grotesk'] text-base font-semibold text-[#0b1c30] dark:text-white">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="#services"
                  className="text-[#404754] hover:text-[#0074db] dark:text-[#94A3B8] dark:hover:text-[#00D2FF] transition-colors"
                >
                  Enterprise Architecture &amp; Cloud
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-[#404754] hover:text-[#0074db] dark:text-[#94A3B8] dark:hover:text-[#00D2FF] transition-colors"
                >
                  Generative AI &amp; Data Platforms
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-[#404754] hover:text-[#0074db] dark:text-[#94A3B8] dark:hover:text-[#00D2FF] transition-colors"
                >
                  Full-Cycle Product Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-[#404754] hover:text-[#0074db] dark:text-[#94A3B8] dark:hover:text-[#00D2FF] transition-colors"
                >
                  Legacy Migration &amp; Refactoring
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-[#404754] hover:text-[#0074db] dark:text-[#94A3B8] dark:hover:text-[#00D2FF] transition-colors"
                >
                  DevSecOps &amp; Platform Automation
                </Link>
              </li>
              <li>
                <Link
                  href="#hire-developer"
                  className="text-[#404754] hover:text-[#0074db] dark:text-[#94A3B8] dark:hover:text-[#00D2FF] transition-colors"
                >
                  Dedicated Engineering Squads
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Tech Stacks */}
          <div className="space-y-4">
            <h4 className="font-['Space_Grotesk'] text-base font-semibold text-[#0b1c30] dark:text-white">
              Tech Stacks
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="#services"
                  className="text-[#404754] hover:text-[#0074db] dark:text-[#94A3B8] dark:hover:text-[#00D2FF] transition-colors"
                >
                  Next.js / React / TypeScript
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-[#404754] hover:text-[#0074db] dark:text-[#94A3B8] dark:hover:text-[#00D2FF] transition-colors"
                >
                  Go / Rust / Distributed Systems
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-[#404754] hover:text-[#0074db] dark:text-[#94A3B8] dark:hover:text-[#00D2FF] transition-colors"
                >
                  Python / PyTorch / LLMOps
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-[#404754] hover:text-[#0074db] dark:text-[#94A3B8] dark:hover:text-[#00D2FF] transition-colors"
                >
                  AWS / GCP / Azure Hybrid Cloud
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-[#404754] hover:text-[#0074db] dark:text-[#94A3B8] dark:hover:text-[#00D2FF] transition-colors"
                >
                  Kubernetes / Terraform / Kafka
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-[#404754] hover:text-[#0074db] dark:text-[#94A3B8] dark:hover:text-[#00D2FF] transition-colors"
                >
                  PostgreSQL / Snowflake / Redis
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Global Delivery Hubs */}
          <div className="space-y-4">
            <h4 className="font-['Space_Grotesk'] text-base font-semibold text-[#0b1c30] dark:text-white">
              Global Delivery Hubs
            </h4>
            <div className="space-y-3 text-sm">
              <div className="border-l-2 border-[#0074db] dark:border-[#00D2FF] pl-3">
                <div className="font-semibold text-[#0b1c30] dark:text-white">United States</div>
                <div className="text-xs text-[#64748B]">New York • San Francisco • Austin</div>
              </div>
              <div className="border-l-2 border-[#0074db] dark:border-[#00D2FF] pl-3">
                <div className="font-semibold text-[#0b1c30] dark:text-white">
                  United Kingdom &amp; Sweden
                </div>
                <div className="text-xs text-[#64748B]">London Tech Square • Stockholm Hub</div>
              </div>
              <div className="border-l-2 border-[#0074db] dark:border-[#00D2FF] pl-3">
                <div className="font-semibold text-[#0b1c30] dark:text-white">
                  United Arab Emirates
                </div>
                <div className="text-xs text-[#64748B]">Dubai Internet City HQ</div>
              </div>
              <div className="border-l-2 border-[#0074db] dark:border-[#00D2FF] pl-3">
                <div className="font-semibold text-[#0b1c30] dark:text-white">
                  Pakistan Delivery Center
                </div>
                <div className="text-xs text-[#64748B]">Islamabad • Lahore Center of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal links */}
        <div className="pt-6 border-t border-slate-200 dark:border-[#1E2633] flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="text-[#64748B] text-center md:text-left">
            © 2026 TRIVEX Global Technology Group. All rights reserved. Precision-engineered enterprise solutions.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[#64748B] dark:text-[#94A3B8]">
            <Link
              href="#privacy-policy"
              className="hover:text-[#0074db] dark:hover:text-[#00D2FF] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#terms-of-service"
              className="hover:text-[#0074db] dark:hover:text-[#00D2FF] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#security"
              className="hover:text-[#0074db] dark:hover:text-[#00D2FF] transition-colors"
            >
              Security &amp; Compliance
            </Link>
            <Link
              href="#sitemap"
              className="hover:text-[#0074db] dark:hover:text-[#00D2FF] transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
