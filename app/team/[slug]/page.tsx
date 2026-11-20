import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FOUNDERS, FOUNDERS_LIST } from "@/data/founders";
import { FounderProfileView } from "@/components/team/FounderProfileView";
import { constructMetadata } from "@/lib/seo";

interface FounderPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return FOUNDERS_LIST.map((founder) => ({
    slug: founder.slug,
  }));
}

export async function generateMetadata({ params }: FounderPageProps): Promise<Metadata> {
  const { slug } = await params;
  const founder = FOUNDERS[slug];

  if (!founder) {
    return constructMetadata({
      title: "Founder Profile Not Found",
      description: "The requested executive profile could not be found.",
      noIndex: true,
    });
  }

  return constructMetadata({
    title: `${founder.name} — ${founder.role} | TRIVEX Agency`,
    description: founder.shortBio,
    pathname: `/team/${founder.slug}`,
  });
}

export default async function FounderPage({ params }: FounderPageProps) {
  const { slug } = await params;
  const founder = FOUNDERS[slug];

  if (!founder) {
    notFound();
  }

  const otherFounders = FOUNDERS_LIST.filter((f) => f.slug !== slug);

  return <FounderProfileView founder={founder} otherFounders={otherFounders} />;
}
