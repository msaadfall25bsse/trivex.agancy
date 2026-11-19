import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { SERVICES } from "@/data/services";
import { ServiceDetailView } from "@/components/services/ServiceDetailView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES[slug];

  if (!service) {
    return constructMetadata({
      title: "Service Not Found",
      description: "The requested service could not be found.",
      noIndex: true,
    });
  }

  return constructMetadata({
    title: `${service.title} | TRIVEX Services`,
    description: service.shortDescription,
    pathname: `/services/${service.slug}`,
    keywords: [
      service.title,
      service.category,
      ...service.technologies,
      "TRIVEX agency",
    ],
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES[slug];

  if (!service) {
    notFound();
  }

  return <ServiceDetailView service={service} />;
}
