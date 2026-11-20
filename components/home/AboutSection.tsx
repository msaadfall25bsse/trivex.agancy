"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { Icon } from "@/components/ui/Icon";

export function AboutSection() {
  const { theme } = useTheme();

  const fourPillars = [
    {
      icon: "trending_up",
      title: "Growth & Performance",
      desc: "Omnichannel paid ad scaling, programmatic CRO, and predictive lifetime-value modeling.",
    },
    {
      icon: "code",
      title: "Engineering & Code",
      desc: "Distributed cloud microservices, reactive frontends, and rock-solid mobile applications.",
    },
    {
      icon: "palette",
      title: "Creative & Motion",
      desc: "Brand systems, high-converting motion design, 3D product visualization, and dynamic UGC.",
    },
    {
      icon: "psychology",
      title: "AI Business Automation",
      desc: "Custom LLM agents, automated enterprise pipelines, and bespoke intelligence nodes.",
    },
  ];

  const structuralCards = [
    {
      pillar: "PILLAR // 01",
      title: "Global Delivery Excellence",
      desc: "Strategic presences across Sacramento (US), London (UK), Dubai (UAE), Stockholm (Sweden), anchored by high-velocity technical execution squads in Pakistan. Round-the-clock handover cycles.",
      tag: "CONTINUOUS 24/7 SPRINT CYCLE",
    },
    {
      pillar: "PILLAR // 02",
      title: "Zero Fluff Real Code",
      desc: "We do not outsource to unverified freelancers. Every single line of code passes strict CI/CD linting, automated vulnerability scans, and code reviews led by Principal Staff Engineers.",
      tag: "100% TRANSPARENT GIT REPOSITORIES",
    },
    {
      pillar: "PILLAR // 03",
      title: "Dedicated Agile Pods",
      desc: "Plug integrated cross-functional units—PM, UI/UX Designer, Lead Full-Stack, and QA Engineer—directly into your Slack and Jira environments in under 72 hours.",
      tag: "EMBEDDED OPERATING MODEL",
    },
  ];

  return (
    <section
      id="about-us"
      className="w-full px-margin py-space-xl transition-colors bg-transparent"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col gap-space-xs max-w-3xl">
          <span
            className="font-label-sm text-label-sm font-semibold tracking-widest uppercase"
            style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
          >
            Engineered for Velocity
          </span>
          <h2
            className="font-display text-display uppercase tracking-tight"
            style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
          >
            Our Journey of Building Scalable Digital Success.
          </h2>
          <p
            className="font-body-lg text-body-lg leading-relaxed"
            style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
          >
            We began as an elite core of full-stack engineers and performance architects. Today,
            TRIVEX accelerates high-growth startups and established global enterprises through surgical
            execution, zero-waste infrastructure, and revenue-centric marketing.
          </p>
        </div>

        {/* 4 Core Pillars Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {fourPillars.map((p) => (
            <div
              key={p.title}
              className="glass-panel glass-panel-interactive p-space-lg rounded-2xl flex flex-col gap-space-sm"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor:
                    theme === "dark" ? "rgba(0, 210, 255, 0.12)" : "rgba(0, 116, 219, 0.1)",
                  color: theme === "dark" ? "#00D2FF" : "#0074db",
                }}
              >
                <Icon name={p.icon} className="w-5 h-5" />
              </div>
              <h3
                className="font-headline-sm text-headline-sm"
                style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
              >
                {p.title}
              </h3>
              <p
                className="font-body-sm text-body-sm leading-relaxed"
                style={{ color: theme === "dark" ? "#94A3B8" : "#64748B" }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 3 Structural Value Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
          {structuralCards.map((card) => (
            <div
              key={card.pillar}
              className="glass-panel glass-panel-interactive p-space-lg rounded-3xl flex flex-col gap-space-md justify-between"
            >
              <div className="flex flex-col gap-space-sm">
                <span
                  className="font-label-md text-label-md font-bold"
                  style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
                >
                  {card.pillar}
                </span>
                <h4
                  className="font-headline-md text-headline-md"
                  style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
                >
                  {card.title}
                </h4>
                <p
                  className="font-body-md text-body-md leading-relaxed"
                  style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
                >
                  {card.desc}
                </p>
              </div>
              <div
                className="font-label-sm text-label-sm font-mono font-semibold"
                style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
              >
                {card.tag}
              </div>
            </div>
          ))}
        </div>

        {/* Link to Full About Page */}
        <div className="flex justify-center pt-2">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm font-mono transition-all hover:brightness-110 shadow-md"
            style={{
              backgroundColor: theme === "dark" ? "#00D2FF" : "#0088FF",
              color: theme === "dark" ? "#000000" : "#ffffff",
            }}
          >
            <span>Learn More About Our Team &amp; Philosophy</span>
            <Icon name="arrow_forward" className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
