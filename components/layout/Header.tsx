"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider";
import { Icon } from "@/components/ui/Icon";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const isDark = theme === "dark";

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  const serviceCategories = [
    {
      category: "Marketing & Growth",
      icon: "query_stats",
      items: [
        { title: "Digital Marketing & Ads", href: "/services/digital-marketing" },
        { title: "Social Media & Content", href: "/services/social-media-marketing" },
        { title: "SEO & Organic Visibility", href: "/services/seo" },
      ],
    },
    {
      category: "Engineering & Platforms",
      icon: "terminal",
      items: [
        { title: "Web & Custom Development", href: "/services/web-development" },
        { title: "WordPress Development", href: "/services/wordpress-development" },
        { title: "E-Commerce Solutions", href: "/services/ecommerce" },
        { title: "Mobile App Development", href: "/services/mobile-app-development" },
      ],
    },
    {
      category: "Creative & Design",
      icon: "palette",
      items: [
        { title: "AI Video & UGC Production", href: "/services/ai-video-production" },
        { title: "Graphic Design & Branding", href: "/services/graphic-design" },
        { title: "Video Editing & Motion", href: "/services/video-editing" },
        { title: "UI/UX & Product Design", href: "/services/ui-ux-design" },
      ],
    },
    {
      category: "Automation & AI",
      icon: "smart_toy",
      items: [
        { title: "Business Automation & AI", href: "/services/business-automation" },
      ],
    },
  ];

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/work" },
    { label: "Industries", href: "/industries" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-3 sm:px-6 lg:px-8 pt-3 pb-1">
      <div className="max-w-7xl mx-auto">
        <header
          className={`w-full backdrop-blur-xl rounded-2xl transition-all duration-300 ${
            isDark
              ? "bg-[#080B10]/75 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.45),inset_0_1px_0_0_rgba(255,255,255,0.1)]"
              : "bg-white/75 border border-white/80 shadow-[0_8px_32px_0_rgba(0,80,200,0.06),inset_0_1px_0_0_rgba(255,255,255,0.95)]"
          }`}
        >
          <div className="w-full px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            {/* Left: Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group focus:outline-none"
              data-path="home"
            >
              <div className="relative h-8 sm:h-9 w-auto flex items-center">
                {/* Light theme: black text logo */}
                <Image
                  src="/logo-light.png"
                  alt="TRIVEX Logo"
                  width={220}
                  height={34}
                  priority
                  className={`h-7 sm:h-8 md:h-9 w-auto object-contain transition-opacity duration-200 ${
                    isDark ? "hidden" : "block"
                  }`}
                />
                {/* Dark theme: white text logo */}
                <Image
                  src="/logo-dark.png"
                  alt="TRIVEX Logo"
                  width={220}
                  height={34}
                  priority
                  className={`h-7 sm:h-8 md:h-9 w-auto object-contain transition-opacity duration-200 ${
                    isDark ? "block" : "hidden"
                  }`}
                />
              </div>
            </Link>

            {/* Center: Nav Items */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {/* Home */}
              <Link
                href="/"
                className={`text-sm font-semibold pb-1 transition-colors border-b-2 ${
                  pathname === "/"
                    ? isDark
                      ? "text-[#00D2FF] border-[#00D2FF]"
                      : "text-[#0088FF] border-[#0088FF]"
                    : isDark
                    ? "text-slate-300 border-transparent hover:text-white"
                    : "text-slate-600 border-transparent hover:text-slate-900"
                }`}
              >
                Home
              </Link>

              {/* Services Mega Dropdown Trigger */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/services"
                  className={`text-sm font-semibold pb-1 flex items-center gap-1 transition-colors border-b-2 ${
                    pathname?.startsWith("/services")
                      ? isDark
                        ? "text-[#00D2FF] border-[#00D2FF]"
                        : "text-[#0088FF] border-[#0088FF]"
                      : isDark
                      ? "text-slate-300 border-transparent hover:text-white"
                      : "text-slate-600 border-transparent hover:text-slate-900"
                  }`}
                >
                  <span>Services</span>
                  <Icon
                    name="expand_more"
                    className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""}`}
                  />
                </Link>

                {/* Dropdown Menu */}
                {servicesDropdownOpen && (
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[720px] p-6 rounded-xl shadow-2xl border transition-all duration-200 animate-in fade-in-50 zoom-in-95 z-50 ${
                      isDark
                        ? "bg-[#0B0E14] border-[#1E2633]"
                        : "bg-white border-slate-200"
                    }`}
                  >
                    <div className="grid grid-cols-2 gap-6">
                      {serviceCategories.map((group) => (
                        <div key={group.category} className="space-y-2">
                          <div
                            className={`flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider ${
                              isDark ? "text-[#00D2FF]" : "text-[#0088FF]"
                            }`}
                          >
                            <Icon name={group.icon} className="w-4 h-4" />
                            <span>{group.category}</span>
                          </div>
                          <ul className="space-y-1.5 pl-6 border-l" style={{ borderColor: isDark ? "#1E2633" : "#e2e8f0" }}>
                            {group.items.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  className={`text-xs font-medium block py-0.5 transition-colors ${
                                    isDark
                                      ? "text-slate-300 hover:text-[#00D2FF]"
                                      : "text-slate-600 hover:text-[#0088FF]"
                                  }`}
                                  onClick={() => setServicesDropdownOpen(false)}
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div
                      className={`mt-4 pt-3 border-t flex items-center justify-between text-xs font-mono`}
                      style={{ borderColor: isDark ? "#1E2633" : "#e2e8f0" }}
                    >
                      <span className={isDark ? "text-slate-400" : "text-slate-500"}>
                        Full-spectrum digital capabilities &amp; growth architecture
                      </span>
                      <Link
                        href="/services"
                        className={`font-bold flex items-center gap-1 hover:underline ${
                          isDark ? "text-[#00D2FF]" : "text-[#0088FF]"
                        }`}
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        <span>View All Services</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Remaining Nav Links */}
              {navLinks.slice(1).map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-semibold pb-1 transition-colors border-b-2 ${
                      isActive
                        ? isDark
                          ? "text-[#00D2FF] border-[#00D2FF]"
                          : "text-[#0088FF] border-[#0088FF]"
                        : isDark
                        ? "text-slate-300 border-transparent hover:text-white"
                        : "text-slate-600 border-transparent hover:text-slate-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
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
                href="/contact"
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
                className={`lg:hidden p-2 rounded-lg transition-colors focus:outline-none ${
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
              className={`lg:hidden px-6 py-6 border-t rounded-b-xl flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200 max-h-[80vh] overflow-y-auto ${
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

              <nav className="flex flex-col gap-2.5 font-medium text-sm">
                <Link
                  href="/"
                  className={`py-1.5 transition-colors ${
                    pathname === "/" ? (isDark ? "text-[#00D2FF] font-bold" : "text-[#0088FF] font-bold") : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>

                {/* Mobile Services Section */}
                <div className="py-1">
                  <div className="flex items-center justify-between font-semibold py-1">
                    <Link
                      href="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className={pathname?.startsWith("/services") ? (isDark ? "text-[#00D2FF]" : "text-[#0088FF]") : ""}
                    >
                      All Services
                    </Link>
                  </div>
                  <div className="pl-3 mt-1 space-y-1.5 border-l text-xs font-normal" style={{ borderColor: isDark ? "#1E2633" : "#e2e8f0" }}>
                    <Link href="/services/digital-marketing" className="block py-0.5 hover:text-[#00D2FF]" onClick={() => setMobileMenuOpen(false)}>• Digital Marketing &amp; Ads</Link>
                    <Link href="/services/social-media-marketing" className="block py-0.5 hover:text-[#00D2FF]" onClick={() => setMobileMenuOpen(false)}>• Social Media &amp; Content</Link>
                    <Link href="/services/ecommerce" className="block py-0.5 hover:text-[#00D2FF]" onClick={() => setMobileMenuOpen(false)}>• E-Commerce Solutions</Link>
                    <Link href="/services/wordpress-development" className="block py-0.5 hover:text-[#00D2FF]" onClick={() => setMobileMenuOpen(false)}>• WordPress Development</Link>
                    <Link href="/services/web-development" className="block py-0.5 hover:text-[#00D2FF]" onClick={() => setMobileMenuOpen(false)}>• Web &amp; Custom Software</Link>
                    <Link href="/services/mobile-app-development" className="block py-0.5 hover:text-[#00D2FF]" onClick={() => setMobileMenuOpen(false)}>• Mobile App Development</Link>
                    <Link href="/services/ai-video-production" className="block py-0.5 hover:text-[#00D2FF]" onClick={() => setMobileMenuOpen(false)}>• AI Video &amp; UGC Creative</Link>
                    <Link href="/services/seo" className="block py-0.5 hover:text-[#00D2FF]" onClick={() => setMobileMenuOpen(false)}>• SEO &amp; Organic Growth</Link>
                    <Link href="/services/ui-ux-design" className="block py-0.5 hover:text-[#00D2FF]" onClick={() => setMobileMenuOpen(false)}>• UI/UX Product Design</Link>
                    <Link href="/services/business-automation" className="block py-0.5 hover:text-[#00D2FF]" onClick={() => setMobileMenuOpen(false)}>• Business Automation &amp; AI</Link>
                  </div>
                </div>

                <Link
                  href="/work"
                  className={`py-1.5 transition-colors ${
                    pathname === "/work" ? (isDark ? "text-[#00D2FF] font-bold" : "text-[#0088FF] font-bold") : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Work / Portfolio
                </Link>
                <Link
                  href="/about"
                  className={`py-1.5 transition-colors ${
                    pathname === "/about" ? (isDark ? "text-[#00D2FF] font-bold" : "text-[#0088FF] font-bold") : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/industries"
                  className={`py-1.5 transition-colors ${
                    pathname === "/industries" ? (isDark ? "text-[#00D2FF] font-bold" : "text-[#0088FF] font-bold") : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Industries
                </Link>
                <Link
                  href="/process"
                  className={`py-1.5 transition-colors ${
                    pathname === "/process" ? (isDark ? "text-[#00D2FF] font-bold" : "text-[#0088FF] font-bold") : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How We Work
                </Link>
                <Link
                  href="/contact"
                  className={`py-1.5 transition-colors ${
                    pathname === "/contact" ? (isDark ? "text-[#00D2FF] font-bold" : "text-[#0088FF] font-bold") : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>

              <div className="pt-2">
                <Link
                  href="/contact"
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
