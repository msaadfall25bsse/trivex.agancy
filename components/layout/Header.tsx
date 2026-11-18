"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const { theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all backdrop-blur-md border-b"
      style={{
        backgroundColor: theme === "dark" ? "rgba(11, 14, 20, 0.85)" : "rgba(255, 255, 255, 0.9)",
        borderBottomColor: theme === "dark" ? "#1E2633" : "#e2e8f0",
        color: theme === "dark" ? "#FFFFFF" : "#0b1c30",
      }}
    >
      <div className="h-20 w-full px-margin flex items-center justify-between gap-gutter">
        {/* Left Side: Brand Logo & Navigation */}
        <div className="flex items-center gap-space-xl">
          <Link
            className="flex items-center gap-space-sm group focus:outline-none"
            data-path="home"
            href="/"
          >
            <span
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
            </span>
            <span
              className="hidden xl:inline-block font-label-sm text-label-sm uppercase px-1.5 py-0.5 rounded tracking-widest transition-colors font-medium"
              style={{
                backgroundColor:
                  theme === "dark" ? "rgba(0, 210, 255, 0.12)" : "rgba(0, 116, 219, 0.1)",
                color: theme === "dark" ? "#00D2FF" : "#0074db",
                border:
                  theme === "dark"
                    ? "1px solid rgba(0, 210, 255, 0.3)"
                    : "1px solid rgba(0, 116, 219, 0.3)",
              }}
            >
              Global
            </span>
          </Link>

          <nav
            className="hidden lg:flex items-center gap-space-lg"
            data-active-classes="text-primary font-semibold"
          >
            <Link
              aria-current="page"
              className="transition-colors py-1 font-semibold"
              data-path="home"
              href="/"
              style={{ color: theme === "dark" ? "#00D2FF" : "#0074db" }}
            >
              Home
            </Link>
            <Link
              className="font-body-md text-body-md transition-colors py-1 hover:text-white"
              data-path="about-us"
              href="#about-us"
              style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
            >
              About Us
            </Link>
            <Link
              className="font-body-md text-body-md transition-colors py-1 hover:text-white"
              data-path="services"
              href="#services-matrix"
              style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
            >
              Services
            </Link>
            <Link
              className="font-body-md text-body-md transition-colors py-1 hover:text-white"
              data-path="case-studies"
              href="#case-studies"
              style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
            >
              Our Work / Case Studies
            </Link>
            <Link
              className="font-body-md text-body-md transition-colors py-1 hover:text-white"
              data-path="industries"
              href="#industries"
              style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
            >
              Industries
            </Link>
            <Link
              className="font-body-md text-body-md transition-colors py-1 hover:text-white"
              data-path="careers"
              href="#careers"
              style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
            >
              Careers
            </Link>
          </nav>
        </div>

        {/* Right Side: Color mode toggle, 2xl links, CTA button, Profile */}
        <div className="flex items-center gap-space-md">
          {/* Color Mode Toggle */}
          <ThemeToggle className="hidden sm:flex" />

          {/* 2XL Quick Links */}
          <div className="hidden 2xl:flex items-center gap-space-md font-label-lg text-label-lg">
            <Link
              className="transition-colors hover:text-[#00D2FF]"
              data-path="apply-as-talent"
              href="#apply-as-talent"
              style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
            >
              Apply as Talent
            </Link>
            <span style={{ color: theme === "dark" ? "#1E2633" : "#cbd5e1" }}>|</span>
            <Link
              className="transition-colors hover:text-[#00D2FF]"
              data-path="hire-developer"
              href="#hire-developer"
              style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
            >
              Hire Developer
            </Link>
          </div>

          {/* Consultation CTA Button */}
          <Link
            className="inline-flex items-center justify-center px-4 py-2.5 rounded font-label-lg text-label-lg font-medium shadow-[0_1px_3px_rgba(11,15,23,0.04)] transition-all whitespace-nowrap"
            data-path="book-consultation"
            href="#book-consultation"
            style={{
              backgroundColor: "#0074db",
              color: "#fefcff",
            }}
          >
            <span>Book a Free Consultation</span>
          </Link>

          {/* Profile Avatar */}
          <div
            className="flex items-center pl-2 border-l"
            style={{ borderLeftColor: theme === "dark" ? "#1E2633" : "#e2e8f0" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover border"
              style={{ borderColor: theme === "dark" ? "#1E2633" : "#e2e8f0" }}
              src="https://lh3.googleusercontent.com/aida/ALJJyrBrwg-tCHth-hOm-zvwKV-ScTcNAKX-KVMSLDsfHdhDVjtXixpBrGLL-N2IXCE9vNy59ZvOHmQUl2GP9Sh4OJbXgMVXP4v3oAf-2OPc7jzApWL5AoqOxUF_DdQo0V_MbQu9qMTAQLTttI2sT1UxtEmP8f716J4SkNUUvQtUaQJCTxkf9KUAqQ5lk1YKRx3GoJH7GFuNPVygU0Q_wBotRUqXk6CaNXVlnABDEdbcdy1z4ybf9EWqxTXWSP4"
            />
          </div>

          {/* Responsive Mobile Drawer Button */}
          <button
            aria-label="Toggle navigation menu"
            className="lg:hidden flex items-center justify-center p-2 rounded focus:outline-none"
            style={{
              color: theme === "dark" ? "#94A3B8" : "#404754",
              border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
            }}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden w-full px-6 py-6 border-t flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200"
          style={{
            backgroundColor: theme === "dark" ? "#0F141C" : "#ffffff",
            borderColor: theme === "dark" ? "#1E2633" : "#e2e8f0",
          }}
        >
          <div className="flex items-center justify-between pb-3 border-b border-inherit">
            <span
              className="font-label-md text-label-md uppercase tracking-wider font-semibold"
              style={{ color: theme === "dark" ? "#94A3B8" : "#64748B" }}
            >
              Theme Selection
            </span>
            <ThemeToggle />
          </div>

          <nav className="flex flex-col gap-3 font-body-md text-body-md">
            <Link
              className="py-1 font-semibold transition-colors"
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: theme === "dark" ? "#00D2FF" : "#0074db" }}
            >
              Home
            </Link>
            <Link
              className="py-1 transition-colors"
              href="#about-us"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
            >
              About Us
            </Link>
            <Link
              className="py-1 transition-colors"
              href="#services-matrix"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
            >
              Services
            </Link>
            <Link
              className="py-1 transition-colors"
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
            >
              Our Work / Case Studies
            </Link>
            <Link
              className="py-1 transition-colors"
              href="#industries"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
            >
              Industries
            </Link>
            <Link
              className="py-1 transition-colors"
              href="#careers"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: theme === "dark" ? "#94A3B8" : "#404754" }}
            >
              Careers
            </Link>
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <Link
              className="w-full text-center py-2.5 rounded font-label-lg text-label-lg font-medium transition-colors"
              href="#book-consultation"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                backgroundColor: "#0074db",
                color: "#fefcff",
              }}
            >
              Book a Free Consultation
            </Link>
            <div className="flex items-center justify-around pt-2 text-xs font-mono">
              <Link
                href="#apply-as-talent"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: theme === "dark" ? "#94A3B8" : "#64748B" }}
              >
                Apply as Talent
              </Link>
              <span style={{ color: theme === "dark" ? "#1E2633" : "#cbd5e1" }}>•</span>
              <Link
                href="#hire-developer"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: theme === "dark" ? "#94A3B8" : "#64748B" }}
              >
                Hire Developer
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
