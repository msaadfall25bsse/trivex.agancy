import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "#about-us",
    "#services-matrix",
    "#case-studies",
    "#talent",
    "#book-consultation",
  ].map((route) => ({
    url: `${siteConfig.url}/${route ? route : ""}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  return routes;
}
