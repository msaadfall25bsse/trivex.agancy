import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface MetadataProps {
  title?: string;
  description?: string;
  image?: string;
  pathname?: string;
  noIndex?: boolean;
  keywords?: string[];
}

/**
 * Enterprise SEO Metadata Builder
 * Use this helper in any page.tsx to generate comprehensive, optimized metadata.
 *
 * Example usage:
 * export const metadata = constructMetadata({
 *   title: "Custom Title",
 *   description: "Page description...",
 *   pathname: "/about",
 * });
 */
export function constructMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  pathname = "",
  noIndex = false,
  keywords = siteConfig.keywords,
}: MetadataProps = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.shortName}`
    : siteConfig.name;

  const url = `${siteConfig.url}${pathname}`;

  return {
    title: fullTitle,
    description,
    keywords,
    authors: [{ name: siteConfig.creator }],
    creator: siteConfig.creator,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.shortName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.shortName} - ${title || "Global Enterprise Engineering"}`,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@trivexagency",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/logo-dark.png",
    },
  };
}
