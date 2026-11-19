import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { SERVICES } from "@/data/services";
import { Icon } from "@/components/ui/Icon";

export const metadata = constructMetadata({
  title: "All Services | Full-Service Digital Growth & Technology",
  description:
    "Explore TRIVEX's 12 specialized services spanning performance marketing, custom software engineering, mobile apps, e-commerce, creative production, and AI automation.",
  pathname: "/services",
});

const CATEGORIES = [
  {
    name: "Marketing & Growth",
    icon: "query_stats",
    description: "Multi-channel paid acquisition, search engine dominance, and high-converting marketing funnels.",
  },
  {
    name: "Engineering & Platforms",
    icon: "terminal",
    description: "Modern web applications, high-performance WordPress, headless e-commerce, and native-feel mobile apps.",
  },
  {
    name: "Creative & Design",
    icon: "palette",
    description: "Visual identity systems, UX/UI interfaces, AI-powered UGC campaigns, and broadcast-grade video editing.",
  },
  {
    name: "Automation & Intelligence",
    icon: "smart_toy",
    description: "Custom internal tooling, CRM workflows, AI chatbots, and intelligent business process automation.",
  },
];

export default function ServicesPage() {
  const allServices = Object.values(SERVICES);

  return (
    <div className="min-h-screen pt-28 pb-20 transition-colors duration-200 bg-[#f8f9ff] text-[#0b1c30] dark:bg-[#080B10] dark:text-white">
      {/* Hero Section */}
      <section className="relative px-margin pt-12 pb-16 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono font-semibold bg-blue-500/10 border-blue-500/25 text-[#0088FF] dark:bg-cyan-500/10 dark:border-cyan-500/25 dark:text-[#00D2FF]">
            <Icon name="hub" className="w-4 h-4" />
            <span>COMPREHENSIVE AGENCY SERVICES</span>
          </div>

          <h1 className="font-brand text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Integrated Digital Growth &amp; Technology Solutions
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From customer acquisition and creative production to robust software engineering and AI automation, we provide the full spectrum of capabilities modern businesses need to scale.
          </p>

          <div className="pt-2 flex justify-center">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-lg font-bold text-sm bg-[#0088FF] text-white dark:bg-[#00D2FF] dark:text-black shadow-lg hover:brightness-110 flex items-center gap-2 transition-all"
            >
              <span>Schedule a Free Strategy Call</span>
              <Icon name="arrow_forward" className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grouped by Category */}
      <section className="px-margin py-10">
        <div className="max-w-7xl mx-auto space-y-16">
          {CATEGORIES.map((cat) => {
            const categoryServices = allServices.filter((s) => s.category === cat.name);
            return (
              <div key={cat.name} className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b pb-4 border-slate-200 dark:border-slate-800 gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#0088FF] dark:text-[#00D2FF]">
                      <Icon name={cat.icon} className="w-4 h-4" />
                      <span>{cat.name}</span>
                    </div>
                    <h2 className="font-brand text-2xl sm:text-3xl font-bold">{cat.name}</h2>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
                    {cat.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group p-7 rounded-2xl border flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 bg-white border-slate-200 hover:border-[#0088FF] dark:bg-[#0F141C] dark:border-[#1E2633] dark:hover:border-[#00D2FF]"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-500/10 text-[#0088FF] dark:bg-cyan-500/10 dark:text-[#00D2FF] group-hover:scale-110 transition-transform">
                            <Icon name={service.icon} className="w-6 h-6" />
                          </div>
                          <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-md border bg-slate-100 border-slate-200 text-slate-700 dark:bg-[#141B26] dark:border-[#1E2633] dark:text-slate-300">
                            {service.badge}
                          </span>
                        </div>

                        <h3 className="font-brand text-xl font-bold group-hover:text-[#0088FF] dark:group-hover:text-[#00D2FF] transition-colors">
                          {service.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {service.shortDescription}
                        </p>

                        <div className="pt-2 flex flex-wrap gap-1.5">
                          {service.deliverables.slice(0, 3).map((del, dIdx) => (
                            <span
                              key={dIdx}
                              className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 dark:bg-[#141B26] dark:text-slate-400"
                            >
                              • {del}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 mt-4 border-t border-slate-100 dark:border-[#1E2633] flex items-center justify-between text-xs font-mono font-semibold text-[#0088FF] dark:text-[#00D2FF]">
                        <span>Explore details &amp; deliverables</span>
                        <Icon name="arrow_forward" className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="px-margin pt-14">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl border text-center space-y-6 bg-white border-blue-500/30 dark:bg-[#0F141C] dark:border-cyan-500/30">
            <h2 className="font-brand text-2xl sm:text-3xl md:text-4xl font-bold">
              Not Sure Which Service Fits Your Growth Goals?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Our technical strategists will analyze your current digital presence, identify bottlenecks, and recommend a clear, high-ROI execution plan.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-[#0088FF] text-white dark:bg-[#00D2FF] dark:text-black shadow-lg hover:brightness-110 transition-all"
              >
                <span>Book a Free Strategy Consultation</span>
                <Icon name="arrow_forward" className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
