"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isDark = theme === "dark";

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-3 sm:px-6 lg:px-8 pt-3 pb-1">
      <div className="max-w-7xl mx-auto">
        <header
          className={`w-full backdrop-blur-md rounded-xl transition-all duration-200 ${
            isDark
              ? "bg-[#080B10]/95 border border-[#1E2633] shadow-2xl"
              : "bg-white/95 border border-slate-200/90 shadow-lg"
          }`}
        >
          <div className="w-full px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            {/* Left: Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group focus:outline-none"
              data-path="home"
            >
              <div className="flex items-center tracking-tighter">
                <span
                  className={`text-2xl sm:text-3xl font-black tracking-wider font-brand transition-colors ${
                    isDark ? "text-white" : "text-[#0B0F17]"
                  }`}
                >
                  TRIVE
                </span>
                <span
                  className={`text-2xl sm:text-3xl font-black tracking-wider font-brand transition-colors ${
                    isDark ? "text-[#00D2FF]" : "text-[#0088FF]"
                  }`}
                >
                  X
                </span>
              </div>
              <span
                className={`px-1.5 py-0.5 text-[9px] font-bold tracking-widest rounded uppercase font-mono transition-colors ${
                  isDark
                    ? "bg-[#00D2FF]/10 text-[#00D2FF] border border-[#00D2FF]/30"
                    : "bg-[#0088FF]/10 text-[#0088FF] border border-[#0088FF]/20"
                }`}
              >
                GLOBAL
              </span>
            </Link>

            {/* Center: Nav Items */}
            <nav className="hidden md:flex items-center space-x-7 lg:space-x-8">
              <Link
                href="/"
                className={`text-sm font-semibold pb-1 transition-colors border-b-2 ${
                  isDark
                    ? "text-[#00D2FF] border-[#00D2FF]"
                    : "text-[#0088FF] border-[#0088FF]"
                }`}
              >
                Home
              </Link>
              <Link
                href="#about-us"
                className={`text-sm font-medium transition-colors ${
                  isDark
                    ? "text-slate-300 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                About Us
              </Link>
              <Link
                href="#services-matrix"
                className={`text-sm font-medium transition-colors ${
                  isDark
                    ? "text-slate-300 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Services
              </Link>
              <Link
                href="#case-studies"
                className={`text-sm font-medium transition-colors ${
                  isDark
                    ? "text-slate-300 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Our Work / Case Studies
              </Link>
              <Link
                href="#industries"
                className={`text-sm font-medium transition-colors ${
                  isDark
                    ? "text-slate-300 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Industries
              </Link>
              <Link
                href="#careers"
                className={`text-sm font-medium transition-colors ${
                  isDark
                    ? "text-slate-300 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Careers
              </Link>
            </nav>

            {/* Right: Theme Switcher & Actions */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Dark/Light Theme Toggle Pill */}
              <div
                aria-label="Theme mode toggle"
                className={`flex items-center rounded-full p-1 shadow-inner transition-colors ${
                  isDark
                    ? "bg-[#10141D] border border-[#1E2633]"
                    : "bg-slate-100 border border-slate-200"
                }`}
                role="radiogroup"
              >
                {/* Switch to Light Button */}
                <button
                  aria-label="Switch to Light Mode"
                  className={`p-1.5 rounded-full transition-all focus:outline-none ${
                    !isDark
                      ? "bg-[#0088FF] text-white shadow-sm"
                      : "text-slate-400 hover:text-white hover:bg-[#19202E]"
                  }`}
                  title={!isDark ? "Light Mode Active" : "Switch to Light Mode"}
                  type="button"
                  onClick={() => setTheme("light")}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </button>

                {/* Switch to Dark Button */}
                <button
                  aria-label="Switch to Dark Mode"
                  className={`p-1.5 rounded-full transition-all focus:outline-none ${
                    isDark
                      ? "bg-[#00D2FF] text-black shadow-sm"
                      : "text-slate-500 hover:text-slate-800 hover:bg-slate-200"
                  }`}
                  title={isDark ? "Dark Mode Active" : "Switch to Dark Mode"}
                  type="button"
                  onClick={() => setTheme("dark")}
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                </button>
              </div>

              {/* Primary Book Consultation CTA Button */}
              <Link
                href="#book-consultation"
                className={`inline-flex items-center justify-center px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap ${
                  isDark
                    ? "bg-[#00D2FF] hover:bg-[#2fe0ff] text-black shadow-[0_0_20px_rgba(0,210,255,0.35)]"
                    : "bg-[#0088FF] hover:bg-[#0070d6] text-white shadow-[0_4px_14px_rgba(0,136,255,0.35)]"
                }`}
              >
                Book a Free Consultation
              </Link>

              {/* Mobile Hamburger Menu Button */}
              <button
                aria-label="Toggle Navigation Menu"
                className={`md:hidden p-2 rounded-lg transition-colors focus:outline-none ${
                  isDark
                    ? "bg-[#10141D] text-slate-300 border border-[#1E2633] hover:text-white"
                    : "bg-slate-100 text-slate-600 border border-slate-200 hover:text-slate-900"
                }`}
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          {mobileMenuOpen && (
            <div
              className={`md:hidden px-6 py-6 border-t rounded-b-xl flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200 ${
                isDark
                  ? "bg-[#080B10] border-[#1E2633] text-slate-200"
                  : "bg-white border-slate-200 text-slate-800"
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-inherit">
                <span
                  className={`text-xs font-mono font-semibold uppercase tracking-wider ${
                    isDark ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Theme Mode
                </span>
                <div
                  className={`flex items-center rounded-full p-1 shadow-inner ${
                    isDark
                      ? "bg-[#10141D] border border-[#1E2633]"
                      : "bg-slate-100 border border-slate-200"
                  }`}
                >
                  <button
                    className={`p-1.5 rounded-full ${
                      !isDark
                        ? "bg-[#0088FF] text-white shadow-sm"
                        : "text-slate-400"
                    }`}
                    type="button"
                    onClick={() => setTheme("light")}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </button>
                  <button
                    className={`p-1.5 rounded-full ${
                      isDark
                        ? "bg-[#00D2FF] text-black shadow-sm"
                        : "text-slate-500"
                    }`}
                    type="button"
                    onClick={() => setTheme("dark")}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  </button>
                </div>
              </div>

              <nav className="flex flex-col gap-3 font-medium text-sm">
                <Link
                  href="/"
                  className={`py-1 transition-colors ${
                    isDark ? "text-[#00D2FF]" : "text-[#0088FF]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#about-us"
                  className={`py-1 transition-colors ${
                    isDark
                      ? "text-slate-300 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="#services-matrix"
                  className={`py-1 transition-colors ${
                    isDark
                      ? "text-slate-300 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="#case-studies"
                  className={`py-1 transition-colors ${
                    isDark
                      ? "text-slate-300 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Work / Case Studies
                </Link>
                <Link
                  href="#industries"
                  className={`py-1 transition-colors ${
                    isDark
                      ? "text-slate-300 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Industries
                </Link>
                <Link
                  href="#careers"
                  className={`py-1 transition-colors ${
                    isDark
                      ? "text-slate-300 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Careers
                </Link>
              </nav>

              <div className="pt-2">
                <Link
                  href="#book-consultation"
                  className={`w-full flex items-center justify-center py-2.5 rounded-lg text-xs font-bold transition-all ${
                    isDark
                      ? "bg-[#00D2FF] text-black shadow-[0_0_15px_rgba(0,210,255,0.35)]"
                      : "bg-[#0088FF] text-white shadow-[0_4px_14px_rgba(0,136,255,0.35)]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book a Free Consultation
                </Link>
              </div>
            </div>
          )}
        </header>
      </div>
    </div>
  );
}

export default Header;
