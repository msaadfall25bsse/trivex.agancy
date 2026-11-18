"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-[#0B0E14]/85 backdrop-blur-md border-b border-slate-200 dark:border-[#1E2633] text-[#0b1c30] dark:text-white transition-all">
      <div className="h-20 w-full px-4 sm:px-8 xl:px-12 flex items-center justify-between gap-6">
        {/* Left Side: Brand Logo & Navigation */}
        <div className="flex items-center gap-8 xl:gap-10">
          <Link href="/" className="flex items-center gap-2.5 group focus:outline-none">
            {/* Professional Brand Logo (Speed Lines + TRIVEX) */}
            <div className="relative h-8 flex items-center">
              {/* Light Mode Logo: Black speed lines + Black TRIVE + Blue X */}
              <Image
                src="/logo-light.png"
                alt="TRIVEX"
                width={216}
                height={32}
                priority
                className="h-7 sm:h-8 w-auto object-contain dark:hidden"
              />
              {/* Dark Mode Logo: White speed lines + White TRIVE + Cyan X */}
              <Image
                src="/logo-dark.png"
                alt="TRIVEX"
                width={216}
                height={32}
                priority
                className="h-7 sm:h-8 w-auto object-contain hidden dark:block"
              />
            </div>

            {/* Global Badge from index_dark.html */}
            <span
              className="hidden xl:inline-block font-mono text-[10px] uppercase px-1.5 py-0.5 rounded tracking-widest font-semibold transition-colors"
              style={{
                backgroundColor:
                  theme === "dark" ? "rgba(0, 210, 255, 0.12)" : "rgba(0, 91, 175, 0.1)",
                color: theme === "dark" ? "#00D2FF" : "#005baf",
                border:
                  theme === "dark"
                    ? "1px solid rgba(0, 210, 255, 0.3)"
                    : "1px solid rgba(0, 91, 175, 0.3)",
              }}
            >
              Global
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[15px]">
            <Link
              href="/"
              className="py-1 font-semibold transition-colors"
              style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
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

        {/* Right Side: Color mode toggle, Quick links, Consultation CTA, Profile */}
        <div className="flex items-center gap-4">
          {/* Color Mode Switcher */}
          <div
            aria-label="Color mode"
            className="flex items-center p-1 rounded-full transition-colors"
            style={{
              backgroundColor: theme === "dark" ? "#141B26" : "#f1f5f9",
              border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
            }}
            role="radiogroup"
          >
            {/* Light Mode Button */}
            <button
              aria-label="Switch to light mode"
              onClick={() => setTheme("light")}
              className="flex items-center justify-center w-7 h-7 rounded-full transition-all"
              style={{
                backgroundColor: theme === "light" ? "#ffffff" : "transparent",
                color: theme === "light" ? "#005baf" : "#64748B",
                boxShadow: theme === "light" ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
              }}
              type="button"
            >
              <span className="material-symbols-outlined text-base leading-none">light_mode</span>
            </button>

            {/* Dark Mode Button */}
            <button
              aria-label="Dark mode active"
              onClick={() => setTheme("dark")}
              className="flex items-center justify-center w-7 h-7 rounded-full transition-all"
              style={{
                backgroundColor: theme === "dark" ? "#00D2FF" : "transparent",
                color: theme === "dark" ? "#080B10" : "#64748B",
                boxShadow: theme === "dark" ? "0 0 12px rgba(0, 210, 255, 0.4)" : "none",
              }}
              type="button"
            >
              <span className="material-symbols-outlined text-base leading-none">dark_mode</span>
            </button>
          </div>

          {/* 2XL Quick Links */}
          <div className="hidden 2xl:flex items-center gap-4 font-mono text-[13px]">
            <Link
              href="#apply-as-talent"
              className="text-[#404754] hover:text-[#005baf] dark:text-[#94A3B8] dark:hover:text-[#00D2FF] transition-colors"
            >
              Apply as Talent
            </Link>
            <span className="text-slate-300 dark:text-[#717785]">|</span>
            <Link
              href="#hire-developer"
              className="text-[#404754] hover:text-[#005baf] dark:text-[#94A3B8] dark:hover:text-[#00D2FF] transition-colors"
            >
              Hire Developer
            </Link>
          </div>

          {/* Book a Free Consultation CTA Button */}
          <Link
            href="#book-consultation"
            className="inline-flex items-center justify-center px-4 py-2.5 rounded font-mono text-[13px] font-medium shadow-[0_1px_3px_rgba(11,15,23,0.04)] transition-all whitespace-nowrap bg-[#0074db] hover:bg-[#006194] text-white"
          >
            <span>Book a Free Consultation</span>
          </Link>

          {/* Profile Avatar with Left Border */}
          <div
            className="flex items-center pl-2 border-l border-slate-200 dark:border-[#1E2633]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover border border-slate-200 dark:border-[#1E2633]"
              src="https://lh3.googleusercontent.com/aida/ALJJyrBrwg-tCHth-hOm-zvwKV-ScTcNAKX-KVMSLDsfHdhDVjtXixpBrGLL-N2IXCE9vNy59ZvOHmQUl2GP9Sh4OJbXgMVXP4v3oAf-2OPc7jzApWL5AoqOxUF_DdQo0V_MbQu9qMTAQLTttI2sT1UxtEmP8f716J4SkNUUvQtUaQJCTxkf9KUAqQ5lk1YKRx3GoJH7GFuNPVygU0Q_wBotRUqXk6CaNXVlnABDEdbcdy1z4ybf9EWqxTXWSP4"
            />
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full px-6 py-4 bg-white/95 dark:bg-[#0B0E14]/95 border-b border-slate-200 dark:border-[#1E2633] backdrop-blur-md flex flex-col gap-3 text-sm">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 font-semibold text-[#005baf] dark:text-[#00D2FF]"
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
