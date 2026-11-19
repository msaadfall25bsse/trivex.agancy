"use client";

import React from "react";
import { useTheme } from "@/components/ThemeProvider";
import { Icon } from "@/components/ui/Icon";

export function TechStackSection() {
  const { theme } = useTheme();

  const categories = [
    {
      name: "Frontend",
      icon: "browser_updated",
      tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Vue / Nuxt", "GraphQL"],
    },
    {
      name: "Backend",
      icon: "dns",
      tags: ["Node.js", "Python", "Django", "Go (Golang)", "PostgreSQL", "Redis"],
    },
    {
      name: "Mobile",
      icon: "phone_iphone",
      tags: ["Flutter", "React Native", "Swift (iOS)", "Kotlin (Android)", "Firebase"],
    },
    {
      name: "AI & Data",
      icon: "memory",
      tags: ["OpenAI API", "LangChain", "PyTorch", "Pinecone", "HuggingFace"],
    },
    {
      name: "Cloud & Ops",
      icon: "cloud",
      tags: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    },
  ];

  return (
    <section
      className="w-full px-margin py-space-xl transition-colors"
      style={{
        backgroundColor: theme === "dark" ? "#0B0E14" : "#eff4ff",
        borderTop: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
        borderBottom: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        <div className="flex flex-col gap-space-xs max-w-2xl">
          <span
            className="font-label-sm text-label-sm font-semibold uppercase tracking-widest"
            style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}
          >
            Architectural Foundation
          </span>
          <h2
            className="font-display text-display uppercase tracking-tight"
            style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
          >
            Technical Stack Matrix
          </h2>
          <p
            className="font-body-lg text-body-lg leading-relaxed"
            style={{ color: theme === "dark" ? "#94A3B8" : "#475569" }}
          >
            Battle-tested tools and frameworks selected strictly for velocity, scale, and long-term stability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-md">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm"
              style={{
                backgroundColor: theme === "dark" ? "#0F141C" : "#ffffff",
                border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
              }}
            >
              <div className="flex items-center gap-2">
                <span style={{ color: theme === "dark" ? "#00D2FF" : "#005baf" }}>
                  <Icon name={cat.icon} className="w-5 h-5" />
                </span>
                <h4
                  className="font-headline-sm text-headline-sm"
                  style={{ color: theme === "dark" ? "#FFFFFF" : "#0b1c30" }}
                >
                  {cat.name}
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded font-label-sm text-label-sm font-medium"
                    style={{
                      backgroundColor: theme === "dark" ? "#141B26" : "#eff4ff",
                      border: theme === "dark" ? "1px solid #1E2633" : "1px solid #e2e8f0",
                      color: theme === "dark" ? "#FFFFFF" : "#0b1c30",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStackSection;
