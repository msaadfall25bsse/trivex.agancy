"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-[#0B0E14]/85 backdrop-blur-md border-b border-slate-200 dark:border-[#1E2633] text-[#0b1c30] dark:text-white transition-colors duration-200">
      <div className="h-20 w-full px-4 sm:px-8 xl:px-12 flex items-center justify-between gap-4">
        {/* Left: Brand Logo & Main Nav */}
        <div className="flex items-center gap-6 xl:gap-10">
          <Link href="/" className="flex items-center gap-2 group focus:outline-none">
            <span className="font-['Space_Grotesk'] text-2xl xl:text-[28px] font-bold tracking-tight flex items-center text-[#0b1c30] dark:text-white">
              TRIVE
              <span className="text-[#0074db] dark:text-[#00D2FF] transition-colors">X</span>
            </span>
            <span className="hidden xl:inline-block font-mono text-[10px] uppercase px-1.5 py-0.5 rounded tracking-widest bg-blue-50 text-[#005baf] border border-blue-200/50 dark:bg-[rgba(0,210,255,0.12)] dark:text-[#00D2FF] dark:border-[rgba(0,210,255,0.3)] transition-colors">
              Global
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
            <Link
              href="/"
              className="py-1 font-semibold text-[#0074db] dark:text-[#00D2FF] transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about-us"
              className="py-1 text-[#404754] hover:text-[#0b1c30] dark:text-[#94A3B8] dark:hover:text-white transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#services"
              className="py-1 text-[#404754] hover:text-[#0b1c30] dark:text-[#94A3B8] dark:hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="#case-studies"
              className="py-1 text-[#404754] hover:text-[#0b1c30] dark:text-[#94A3B8] dark:hover:text-white transition-colors"
            >
              Our Work / Case Studies
            </Link>
            <Link
              href="#industries"
              className="py-1 text-[#404754] hover:text-[#0b1c30] dark:text-[#94A3B8] dark:hover:text-white transition-colors"
            >
              Industries
            </Link>
            <Link
              href="#careers"
              className="py-1 text-[#404754] hover:text-[#0b1c30] dark:text-[#94A3B8] dark:hover:text-white transition-colors"
            >
              Careers
            </Link>
          </nav>
        </div>

        {/* Right: Theme Toggle, Direct Actions, Consultation Button, Profile */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Dark / Light Mode Switcher */}
          <div
            aria-label="Color mode"
            className="flex items-center bg-slate-100 dark:bg-[#141B26] p-1 rounded-full border border-slate-200 dark:border-[#1E2633] transition-colors"
            role="radiogroup"
          >
            <button
              aria-label="Switch to light mode"
              onClick={() => setTheme("light")}
              className={`flex items-center justify-center w-7 h-7 rounded-full transition-all ${
                theme === "light"
                  ? "bg-white shadow-sm text-[#0074db]"
                  : "text-[#64748B] hover:text-[#0b1c30] dark:text-[#64748B] dark:hover:text-white bg-transparent"
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-base leading-none">light_mode</span>
            </button>
            <button
              aria-label="Switch to dark mode"
              onClick={() => setTheme("dark")}
              className={`flex items-center justify-center w-7 h-7 rounded-full transition-all ${
                theme === "dark"
                  ? "bg-[#00D2FF] text-[#080B10] shadow-[0_0_12px_rgba(0,210,255,0.4)]"
                  : "text-[#565e74] hover:text-[#0b1c30] bg-transparent"
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-base leading-none">dark_mode</span>
            </button>
          </div>

          {/* Quick links for 2XL screens */}
          <div className="hidden 2xl:flex items-center gap-3 font-mono text-xs">
            <Link
              href="#apply-as-talent"
              className="text-[#404754] dark:text-[#94A3B8] hover:text-[#0074db] dark:hover:text-[#00D2FF] transition-colors"
            >
              Apply as Talent
            </Link>
            <span className="text-slate-300 dark:text-[#1E2633]">|</span>
            <Link
              href="#hire-developer"
              className="text-[#404754] dark:text-[#94A3B8] hover:text-[#0074db] dark:hover:text-[#00D2FF] transition-colors"
            >
              Hire Developer
            </Link>
          </div>

          {/* Consultation CTA */}
          <Link
            href="#book-consultation"
            className="inline-flex items-center justify-center px-3.5 sm:px-4 py-2 sm:py-2.5 rounded font-medium text-xs sm:text-sm whitespace-nowrap shadow-sm transition-all duration-150 bg-[#0074db] text-white hover:bg-[#006194] dark:bg-[#00D2FF] dark:text-[#080B10] dark:hover:bg-[#00D2FF]/90 dark:shadow-[0_0_12px_rgba(0,210,255,0.35)]"
          >
            <span>Book a Free Consultation</span>
          </Link>

          {/* Profile Avatar */}
          <div className="hidden sm:flex items-center pl-2 border-l border-slate-200 dark:border-[#1E2633]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover border border-slate-200 dark:border-[#1E2633]"
              src="https://lh3.googleusercontent.com/aida/ALJJyrBrwg-tCHth-hOm-zvwKV-ScTcNAKX-KVMSLDsfHdhDVjtXixpBrGLL-N2IXCE9vNy59ZvOHmQUl2GP9Sh4OJbXgMVXP4v3oAf-2OPc7jzApWL5AoqOxUF_DdQo0V_MbQu9qMTAQLTttI2sT1UxtEmP8f716J4SkNUUvQtUaQJCTxkf9KUAqQ5lk1YKRx3GoJH7GFuNPVygU0Q_wBotRUqXk6CaNXVlnABDEdbcdy1z4ybf9EWqxTXWSP4"
            />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#141B26] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full px-6 py-4 bg-white/95 dark:bg-[#0B0E14]/95 border-b border-slate-200 dark:border-[#1E2633] backdrop-blur-md flex flex-col gap-3 text-sm">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 font-semibold text-[#0074db] dark:text-[#00D2FF]"
          >
            Home
          </Link>
          <Link
            href="#about-us"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-[#404754] hover:text-[#0b1c30] dark:text-[#94A3B8] dark:hover:text-white"
          >
            About Us
          </Link>
          <Link
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-[#404754] hover:text-[#0b1c30] dark:text-[#94A3B8] dark:hover:text-white"
          >
            Services
          </Link>
          <Link
            href="#case-studies"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-[#404754] hover:text-[#0b1c30] dark:text-[#94A3B8] dark:hover:text-white"
          >
            Our Work / Case Studies
          </Link>
          <Link
            href="#industries"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-[#404754] hover:text-[#0b1c30] dark:text-[#94A3B8] dark:hover:text-white"
          >
            Industries
          </Link>
          <Link
            href="#careers"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-[#404754] hover:text-[#0b1c30] dark:text-[#94A3B8] dark:hover:text-white"
          >
            Careers
          </Link>
          <div className="pt-2 border-t border-slate-200 dark:border-[#1E2633] flex flex-col gap-2">
            <Link
              href="#apply-as-talent"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[#404754] dark:text-[#94A3B8]"
            >
              Apply as Talent
            </Link>
            <Link
              href="#hire-developer"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[#404754] dark:text-[#94A3B8]"
            >
              Hire Developer
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
