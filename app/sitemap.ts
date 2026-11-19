import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { SERVICES } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const now = new Date().toISOString();

  const coreRoutes = [
    { path: "", priority: 1.0, freq: "daily" as const },
    { path: "/services", priority: 0.9, freq: "weekly" as const },
    { path: "/work", priority: 0.85, freq: "weekly" as const },
    { path: "/about", priority: 0.8, freq: "monthly" as const },
    { path: "/industries", priority: 0.8, freq: "monthly" as const },
    { path: "/process", priority: 0.8, freq: "monthly" as const },
    { path: "/contact", priority: 0.9, freq: "monthly" as const },
    { path: "/faq", priority: 0.75, freq: "weekly" as const },
    { path: "/privacy-policy", priority: 0.3, freq: "yearly" as const },
    { path: "/terms-of-service", priority: 0.3, freq: "yearly" as const },
    { path: "/cookie-policy", priority: 0.3, freq: "yearly" as const },
  ];

  const serviceRoutes = Object.keys(SERVICES).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const mainRoutes = coreRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.freq,
    priority: route.priority,
  }));

  return [...mainRoutes, ...serviceRoutes];
}
