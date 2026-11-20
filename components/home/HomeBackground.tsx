"use client";

import React from "react";
import { useTheme } from "@/components/ThemeProvider";

export function HomeBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* Dark Theme Background: Futuristic Connected Digital Globe */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/bg-home-dark.jpg"
          alt=""
          className="w-full h-full object-cover object-center scale-102"
          style={{ filter: "blur(1.5px)" }}
        />
        {/* Layered atmospheric tint for contrast while keeping the globe and network sharp */}
        <div className="absolute inset-0 bg-[#080B10]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080B10]/25 via-transparent to-[#080B10]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-[#080B10]/70" />
      </div>

      {/* Light Theme Background: Futuristic 3D White Architectural Globe */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
          !isDark ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/bg-home-light.jpg"
          alt=""
          className="w-full h-full object-cover object-center scale-102"
          style={{ filter: "blur(1.5px)" }}
        />
        {/* Layered soft white tint for contrast while keeping the architectural globe sharp */}
        <div className="absolute inset-0 bg-white/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-white/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-white/70" />
      </div>
    </div>
  );
}

export default HomeBackground;
