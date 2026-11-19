export interface ServiceData {
  slug: string;
  title: string;
  category: "Marketing & Growth" | "Engineering & Platforms" | "Creative & Design" | "Automation & Intelligence";
  icon: string;
  shortDescription: string;
  badge: string;
  heroHeadline: string;
  heroDescription: string;
  valueProposition: string;
  whoIsItFor: string[];
  problemsSolved: string[];
  deliverables: string[];
  technologies: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const SERVICES: Record<string, ServiceData> = {
  "digital-marketing": {
    slug: "digital-marketing",
    title: "Digital Marketing & Performance Growth",
    category: "Marketing & Growth",
    icon: "query_stats",
    shortDescription:
      "Data-driven paid advertising, multi-channel acquisition, and programmatic CRO designed to compound pipeline revenue and maximize ROI.",
    badge: "PERFORMANCE ACQUISITION",
    heroHeadline: "Scale Your Inbound Pipeline with Predictable Paid Acquisition.",
    heroDescription:
      "We design, manage, and optimize high-converting multi-channel ad campaigns across Meta, Google, and TikTok that deliver measurable customer acquisition at scale.",
    valueProposition:
      "Instead of vanity impressions, our performance marketing framework aligns budget allocation with direct revenue metrics, customer acquisition costs (CAC), and customer lifetime value (LTV).",
    whoIsItFor: [
      "E-commerce brands seeking profitable customer acquisition and ROAS expansion.",
      "B2B and SaaS companies requiring qualified lead velocity and sales pipeline growth.",
      "Local service businesses aiming to dominate regional market search and lead volume.",
      "High-growth startups ready to scale beyond early organic channels.",
    ],
    problemsSolved: [
      "Stagnant ad spend with diminishing return on ad spend (ROAS).",
      "Lack of clean conversion tracking, attribution modeling, and funnel transparency.",
      "High customer acquisition costs due to generic ad copy and unfocused audience targeting.",
      "Disconnection between ad campaigns and landing page conversion performance.",
    ],
    deliverables: [
      "Comprehensive Digital Marketing & Channel Growth Strategy",
      "Full-Funnel Campaign Architecture (Top, Middle & Bottom of Funnel)",
      "Meta Ads Management (Facebook & Instagram Feed, Stories, Reels)",
      "Google Ads (Search, Performance Max, Display, YouTube Ads)",
      "TikTok Ads Management & High-Hook Creative Testing",
      "Conversion Rate Optimization (CRO) & Dedicated Landing Pages",
      "Advanced Tracking Setup (Google Tag Manager, GA4, Meta CAPI)",
      "Bi-Weekly Performance Audits & Real-Time Analytics Dashboard",
    ],
    technologies: ["Google Ads", "Meta Ads Manager", "TikTok Ads", "Google Analytics 4", "Google Tag Manager", "Triple Whale", "Hotjar"],
    process: [
      { step: "01", title: "Audit & Baseline Analysis", desc: "We review existing ad accounts, conversion tracking, historic ROAS, and audience data to establish clear benchmark metrics." },
      { step: "02", title: "Funnel & Strategy Blueprint", desc: "We map out the multi-channel acquisition architecture, audience segments, campaign structures, and budget allocations." },
      { step: "03", title: "Creative & Landing Page Deployment", desc: "We deploy high-converting ad creative angles paired with dedicated conversion-focused landing pages." },
      { step: "04", title: "Algorithmic Scaling & Optimization", desc: "Continuous bid management, multivariate testing, audience pruning, and scaling winners to maximize acquisition velocity." },
    ],
    faqs: [
      { question: "What ad budget do I need to get started?", answer: "We typically recommend a minimum monthly ad spend of $2,000 to $3,000 so that advertising algorithms have sufficient data to optimize effectively." },
      { question: "How do you track campaign performance?", answer: "We configure server-side tracking (Meta Conversions API, GA4, GTM) to provide 100% transparent reporting on conversions, cost per lead, and revenue attribution." },
      { question: "How quickly can we see results?", answer: "While initial data and test campaigns yield early signals within 7–14 days, mature algorithmic optimization and scalable ROAS typically compound between weeks 4 and 8." },
    ],
    relatedSlugs: ["social-media-marketing", "seo", "ecommerce", "ui-ux-design"],
  },

  "social-media-marketing": {
    slug: "social-media-marketing",
    title: "Social Media & Content Marketing",
    category: "Marketing & Growth",
    icon: "forum",
    shortDescription:
      "Strategic content calendars, organic community growth, and compelling narrative copywriting that turns audience attention into brand advocacy.",
    badge: "ORGANIC BRAND BUILDING",
    heroHeadline: "Build An Engaged Community That Drives Organic Brand Authority.",
    heroDescription:
      "We build and execute tailored social media strategies combining authentic content creation, active community engagement, and consistent storytelling across modern channels.",
    valueProposition:
      "Social media should build lasting brand equity. We bridge creative storytelling with commercial intent so every post strengthens your market positioning and nurtures warm leads.",
    whoIsItFor: [
      "Modern consumer brands building active lifestyle and product communities.",
      "Corporate leadership and B2B firms looking to establish category authority on LinkedIn.",
      "Service providers seeking consistent social touchpoints to educate prospective clients.",
      "Organizations wanting cohesive, on-brand social presence without in-house overhead.",
    ],
    problemsSolved: [
      "Inconsistent posting schedules and fragmented visual brand presentation.",
      "Low engagement rates and superficial content that fails to resonate with buyers.",
      "Lack of structured content planning, leaving teams scrambling for daily posts.",
      "Disconnection between organic social efforts and actual website traffic or sales.",
    ],
    deliverables: [
      "Comprehensive Multi-Channel Social Media Strategy",
      "Monthly Content Calendars with Pre-Approved Posts",
      "High-Fidelity Visual Assets (Carousels, Graphics, Short-Form Edits)",
      "Engaging Brand Copywriting & Strategic Hashtag Frameworks",
      "Community Management & Direct Message / Comment Triage",
      "Platform-Specific Formatting (LinkedIn, Instagram, X/Twitter, Facebook)",
      "Creator / Influencer Outreach & Collaboration Coordination",
      "Monthly Audience Growth & Engagement Analytics Reporting",
    ],
    technologies: ["Canva Pro", "Figma", "Buffer / Hootsuite", "Meta Business Suite", "LinkedIn Creator Studio", "Notion"],
    process: [
      { step: "01", title: "Brand Voice Discovery", desc: "We define your brand tone, target audience personas, content pillars, and competitive positioning." },
      { step: "02", title: "Calendar Curation", desc: "Our team drafts monthly content calendars featuring curated topics, visual mockups, and copy for your review." },
      { step: "03", title: "Asset Production & Scheduling", desc: "Once approved, visual assets and copy are produced, quality checked, and scheduled across all target platforms." },
      { step: "04", title: "Engagement & Monthly Insights", desc: "We actively monitor comment interactions and compile monthly analytics reports to continually refine performance." },
    ],
    faqs: [
      { question: "Which platforms should my business focus on?", answer: "Platform selection depends on where your target audience spends time. B2B businesses typically excel on LinkedIn and X, while consumer brands thrive on Instagram and TikTok." },
      { question: "Do we review content before it goes live?", answer: "Yes, you receive complete content calendars for approval with copy, hashtags, and visual assets before any post is published." },
      { question: "Do you handle community responses and comments?", answer: "Yes, our community management packages include daily monitoring of comments, mentions, and basic inquiries." },
    ],
    relatedSlugs: ["digital-marketing", "graphic-design", "ai-video-production", "video-editing"],
  },

  "ecommerce": {
    slug: "ecommerce",
    title: "E-Commerce & Online Store Solutions",
    category: "Engineering & Platforms",
    icon: "shopping_cart",
    shortDescription:
      "High-conversion Shopify and WooCommerce storefronts engineered for fast page loads, effortless checkout, and frictionless ERP integrations.",
    badge: "STORE COMMERCE & CRO",
    heroHeadline: "Convert Store Visitors into Loyal Customers with Engineered Commerce.",
    heroDescription:
      "From custom Shopify theme builds to headless commerce architectures and automated inventory synchronizers, we create online stores built for peak sales volume.",
    valueProposition:
      "Every millisecond of page load speed and every click in the checkout funnel directly impacts your revenue. We engineer stores optimized for speed, average order value, and conversion lift.",
    whoIsItFor: [
      "Direct-to-Consumer (DTC) brands scaling beyond default template limitations.",
      "Retailers transitioning from physical storefronts to modern digital retail.",
      "Established e-commerce operators needing store speed optimization and custom checkout flows.",
      "High-SKU businesses requiring seamless ERP, CRM, and inventory synchronization.",
    ],
    problemsSolved: [
      "Slow storefront load times causing high cart abandonment and lost sales.",
      "Cluttered, non-responsive checkout flows that fail on mobile devices.",
      "Clunky third-party app bloat slowing down store code and causing technical glitches.",
      "Inability to handle traffic spikes during major product drops and holiday promotions.",
    ],
    deliverables: [
      "Custom Shopify & Shopify Plus Theme Development",
      "WooCommerce Store Architecture & Performance Tuning",
      "Mobile-First Responsive Shopping Experience",
      "Conversion Rate Optimization (CRO) & One-Page Checkout Flows",
      "Third-Party App Consolidation & Custom App Integration",
      "Inventory, Warehouse & ERP Synchronization Workflows",
      "Multi-Currency, Multi-Language & Global Tax Setup",
      "Sub-Second Page Load Speed Optimization (Lighthouse 90+ Score)",
    ],
    technologies: ["Shopify Plus", "Liquid", "Hydrogen / Next.js", "WooCommerce", "Stripe", "Klaviyo", "Sanity / Contentful"],
    process: [
      { step: "01", title: "Commerce Architecture Audit", desc: "We analyze your catalog, customer journeys, checkout funnel, and existing integrations to define technical requirements." },
      { step: "02", title: "UX Wireframing & Design", desc: "We design clean product pages, collection filters, and streamlined cart experiences tailored to your brand identity." },
      { step: "03", title: "Custom Theme Engineering", desc: "Our engineers build clean, lightweight code with zero template bloat, rigorously tested across all mobile devices." },
      { step: "04", title: "Integration, QA & Launch", desc: "We connect payment gateways, analytics, and shipping integrations before executing a zero-downtime launch." },
    ],
    faqs: [
      { question: "Do you build on Shopify or WooCommerce?", answer: "We build on both Shopify (including Shopify Plus and custom Hydrogen headless setups) and WooCommerce, depending on your business model, catalog size, and operational requirements." },
      { question: "Can you migrate our store from another platform?", answer: "Yes, we handle complete data migrations (products, customers, order history, and 301 redirects) with zero loss of SEO rankings." },
      { question: "How do you improve store loading speed?", answer: "We eliminate bloated apps, optimize assets, implement modern responsive image formats, and rewrite theme code to achieve sub-second load times." },
    ],
    relatedSlugs: ["wordpress-development", "web-development", "digital-marketing", "ui-ux-design"],
  },

  "wordpress-development": {
    slug: "wordpress-development",
    title: "WordPress Development",
    category: "Engineering & Platforms",
    icon: "code_blocks",
    shortDescription:
      "Enterprise WordPress websites, custom theme development, bespoke plugin integration, and hardened security built for long-term scalability.",
    badge: "CUSTOM CMS ARCHITECTURE",
    heroHeadline: "Bespoke, High-Performance WordPress Websites Built Without Bloat.",
    heroDescription:
      "We develop custom WordPress business websites, corporate portals, and high-converting landing pages that are secure, lightning-fast, and effortless for your team to edit.",
    valueProposition:
      "Say goodbye to slow, fragile, off-the-shelf page builder templates. We build custom, modular WordPress sites with lightweight code, robust security, and intuitive editing experiences.",
    whoIsItFor: [
      "Corporate companies requiring reliable, professional web presentation.",
      "Marketing teams needing flexible, easy-to-manage block editors for content updates.",
      "Organizations dealing with slow, bloated WordPress sites needing clean redevelopment.",
      "Businesses requiring custom post types, bespoke calculators, or complex API integrations.",
    ],
    problemsSolved: [
      "Extremely slow loading speeds caused by 40+ plugins and heavy generic themes.",
      "Frequent plugin conflicts, visual breakage after updates, and vulnerability risks.",
      "Frustrating admin dashboards that require a developer just to edit simple text or images.",
      "Poor mobile responsiveness and low Core Web Vitals scores hurting Google rankings.",
    ],
    deliverables: [
      "Custom WordPress Theme Engineering (Tailored to Your Design)",
      "Gutenberg Block Editor Integration for Drag-and-Drop Control",
      "Custom Post Types, Taxonomies & Advanced Custom Fields (ACF Pro)",
      "Enterprise Security Hardening & Automated Daily Backups",
      "Speed Optimization & Caching Configuration (Core Web Vitals Pass)",
      "Seamless Website Migration & 301 Redirect Mapping",
      "Custom Plugin Development & Third-Party API Integrations",
      "Client Training Documentation & Ongoing Maintenance Support",
    ],
    technologies: ["WordPress Core", "PHP 8+", "Advanced Custom Fields (ACF)", "Gutenberg Blocks", "MySQL", "WP Rocket", "Cloudflare"],
    process: [
      { step: "01", title: "Content Architecture", desc: "We map out your page hierarchy, custom data fields, and administrative editorial workflows." },
      { step: "02", title: "Custom Theme Build", desc: "We code custom templates and modular blocks from scratch using semantic HTML, CSS, and modern PHP." },
      { step: "03", title: "Content Migration & Hardening", desc: "We migrate your articles and media, configure SSL, disable XML-RPC, and apply enterprise security standards." },
      { step: "04", title: "Speed Tuning & Launch", desc: "Full performance optimization, asset compression, and DNS cutover with zero downtime." },
    ],
    faqs: [
      { question: "Will my team be able to edit the website easily?", answer: "Yes, we configure intuitive modular Gutenberg blocks and ACF fields so non-technical team members can update text, images, and pages with ease." },
      { question: "How do you keep WordPress websites secure?", answer: "We implement custom login paths, two-factor authentication, Cloudflare WAF, secure file permissions, and automated security monitoring." },
      { question: "Can you fix our existing slow WordPress site?", answer: "Yes, we perform thorough speed audits, eliminate unnecessary plugins, optimize databases, and refactor slow queries to dramatically improve loading speed." },
    ],
    relatedSlugs: ["web-development", "ecommerce", "seo", "ui-ux-design"],
  },

  "web-development": {
    slug: "web-development",
    title: "Website & Custom Software Development",
    category: "Engineering & Platforms",
    icon: "terminal",
    shortDescription:
      "Modern full-stack web applications, interactive Next.js platforms, client portals, and resilient cloud architectures engineered for velocity.",
    badge: "FULL-STACK ENGINEERING",
    heroHeadline: "Modern Next.js & Full-Stack Web Applications Engineered for Scale.",
    heroDescription:
      "We design and build robust web applications, interactive enterprise platforms, client dashboards, and custom software systems using modern TypeScript and cloud technology.",
    valueProposition:
      "When off-the-shelf software falls short, we architect tailored digital platforms that streamline operations, deliver exceptional user experiences, and provide lasting competitive advantages.",
    whoIsItFor: [
      "Startups building their Minimum Viable Product (MVP) or scaling to version 2.0.",
      "Enterprises requiring internal dashboards, customer portals, or workflow tools.",
      "Businesses seeking ultra-fast headless web architectures with modern tech stacks.",
      "Teams needing complex third-party API orchestrations and database architectures.",
    ],
    problemsSolved: [
      "Rigid legacy systems that cannot adapt to changing business requirements.",
      "Poor application performance and high latency under increasing concurrent user traffic.",
      "High technical debt from hurried, unmaintainable spaghetti code.",
      "Security vulnerabilities and lack of modern automated testing and CI/CD pipelines.",
    ],
    deliverables: [
      "Full-Stack Web Application Architecture & System Design",
      "Modern Next.js & React Frontend Development with TypeScript",
      "RESTful & GraphQL API Design & Microservices Engineering",
      "Scalable Relational & NoSQL Database Architecture (PostgreSQL, Redis)",
      "Secure Role-Based Authentication & Authorization (SSO, OAuth, JWT)",
      "Interactive Dashboards, Data Visualization & Admin Portals",
      "Automated Testing Suites (Unit, Integration, End-to-End)",
      "CI/CD Pipeline Setup & Cloud Deployment (Vercel, AWS, Google Cloud)",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker", "Vercel", "AWS"],
    process: [
      { step: "01", title: "Technical Discovery & Blueprint", desc: "We define system architecture, data models, API endpoints, user roles, and security requirements." },
      { step: "02", title: "Iterative Sprint Development", desc: "We develop in two-week agile sprints with continuous staging deployments so you can test features early." },
      { step: "03", title: "Testing & Code Audits", desc: "Rigorous automated testing, security vulnerability scans, and performance benchmarking." },
      { step: "04", title: "Production Release & Handover", desc: "Seamless deployment, comprehensive technical documentation, and post-launch SLA monitoring." },
    ],
    faqs: [
      { question: "Why do you recommend Next.js and TypeScript?", answer: "Next.js provides industry-leading performance, server-side rendering, and SEO out of the box, while TypeScript prevents runtime bugs and makes long-term code maintenance predictable." },
      { question: "Do we own 100% of the source code?", answer: "Yes, you own complete intellectual property and source code rights from day one, delivered directly into your Git repository." },
      { question: "Can you integrate with our existing backend or CRM?", answer: "Yes, our engineers frequently connect with existing databases, third-party REST/GraphQL APIs, payment processors, and enterprise ERP systems." },
    ],
    relatedSlugs: ["mobile-app-development", "ui-ux-design", "business-automation", "wordpress-development"],
  },

  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    category: "Engineering & Platforms",
    icon: "smartphone",
    shortDescription:
      "Native and cross-platform iOS and Android mobile applications crafted with intuitive touch experiences, offline-first sync, and smooth performance.",
    badge: "MOBILE ENGINEERING",
    heroHeadline: "Engaging Mobile Applications for iOS and Android.",
    heroDescription:
      "We conceptualize, design, and develop cross-platform and native mobile apps that deliver fluid user interfaces, reliable offline functionality, and seamless backend synchronization.",
    valueProposition:
      "Mobile apps succeed on speed and intuitiveness. We build cross-platform applications that look and feel completely native on both iOS and Android while keeping maintenance costs efficient.",
    whoIsItFor: [
      "Businesses launching on-demand services, booking systems, or marketplace apps.",
      "Companies wanting dedicated customer loyalty, ordering, or member portals.",
      "Organizations equipping field teams with mobile data collection and inspection tools.",
      "Startups building mobile-first consumer products.",
    ],
    problemsSolved: [
      "Expensive, duplicated engineering costs from maintaining separate native codebases.",
      "Clunky user interfaces with laggy scrolling and poor touch feedback.",
      "App store rejections caused by guideline compliance oversights.",
      "Unreliable performance in low-connectivity or offline field environments.",
    ],
    deliverables: [
      "iOS & Android Cross-Platform App Development (Flutter / React Native)",
      "Intuitive Mobile UI/UX Design, Interaction States & Clickable Prototypes",
      "Secure Backend API Synchronization & Real-Time Push Notifications",
      "Offline-First Data Storage & Automatic Background Synchronization",
      "Biometric Authentication (Face ID, Touch ID, Fingerprint)",
      "In-App Purchases, Apple Pay, Google Pay & Payment Gateway Integration",
      "App Store & Google Play Store Submission Management & Compliance",
      "Post-Launch Maintenance, Crash Analytics & OS Upgrade Support",
    ],
    technologies: ["Flutter", "React Native", "Swift (iOS)", "Kotlin (Android)", "Firebase", "REST APIs", "App Store Connect"],
    process: [
      { step: "01", title: "User Flows & Wireframing", desc: "We design every screen interaction, touch state, and navigation journey tailored to standard mobile ergonomics." },
      { step: "02", title: "App Architecture & APIs", desc: "We engineer resilient client architectures with offline caching, state management, and API endpoints." },
      { step: "03", title: "Device Testing & QA", desc: "Comprehensive testing across physical iOS and Android devices, screen sizes, and operating system versions." },
      { step: "04", title: "Store Submission & Launch", desc: "We prepare metadata, screenshots, privacy declarations, and guide your app through store approval." },
    ],
    faqs: [
      { question: "Should we build cross-platform or separate native apps?", answer: "For 90% of business applications, cross-platform frameworks like Flutter deliver native performance, identical UX, and cut development and maintenance costs in half." },
      { question: "Will you help submit the app to Apple App Store and Google Play?", answer: "Yes, we handle the entire submission, certificates, privacy disclosures, and review compliance process." },
      { question: "Can the app function without an active internet connection?", answer: "Yes, we can implement local database caching so users can view data and queue actions that sync automatically when reconnected." },
    ],
    relatedSlugs: ["web-development", "ui-ux-design", "business-automation", "digital-marketing"],
  },

  "ai-video-production": {
    slug: "ai-video-production",
    title: "AI Video, UGC & Creative Production",
    category: "Creative & Design",
    icon: "videocam",
    shortDescription:
      "High-hook UGC ad creatives, AI-assisted video productions, and compelling short-form reels tailored for paid advertising and social conversion.",
    badge: "CREATIVE & VIDEO",
    heroHeadline: "High-Conversion Video & Creative Content Engineered for Attention.",
    heroDescription:
      "We produce high-impact UGC-style advertisements, AI-enhanced video assets, and short-form video creative engineered specifically to stop the scroll and drive clicks.",
    valueProposition:
      "Creative fatigue kills ad performance. We produce rapid creative variations with strong visual hooks, natural messaging, and dynamic captions to keep your paid campaigns profitable.",
    whoIsItFor: [
      "E-commerce brands needing a continuous pipeline of fresh ad creative.",
      "Service providers wanting engaging short-form reels to explain their offers.",
      "Companies wanting professional video production without multi-month studio timelines.",
      "Performance marketers testing multivariate visual hooks across TikTok and Meta.",
    ],
    problemsSolved: [
      "Ad fatigue causing sudden spikes in customer acquisition cost.",
      "Stiff, corporate videos that users instantly skip on modern social feeds.",
      "High production costs and lengthy turnaround times for video revisions.",
      "Lack of structured testing angles to identify winning creative concepts.",
    ],
    deliverables: [
      "Creative Strategy & High-Hook Concept Development",
      "UGC-Style Video Ads with Native Social Formatting (9:16 Vertical)",
      "AI-Assisted Video Production & Voice-Over Synchronization",
      "Dynamic Captions, Sound Design & Audio Mixing",
      "Hook Variations (Testing 3–5 Opening Hooks per Angle)",
      "Product Demonstration & Feature Showcase Videos",
      "Platform-Ready Export Formatting for Meta, TikTok & YouTube Shorts",
      "Monthly Creative Batch Refresh to Prevent Ad Fatigue",
    ],
    technologies: ["Premiere Pro", "After Effects", "CapCut Pro", "Midjourney", "ElevenLabs", "Descript"],
    process: [
      { step: "01", title: "Creative Ideation & Scripting", desc: "We study your customer pain points and write conversational scripts with tested hook frameworks." },
      { step: "02", title: "Asset Capture & Generation", desc: "Production of raw footage, AI-assisted visual elements, and authentic voiceovers." },
      { step: "03", title: "Paced Editing & Motion Styling", desc: "Fast-paced editing with engaging subtitles, zoom cuts, sound effects, and clear calls to action." },
      { step: "04", title: "Hook Variation Delivery", desc: "We deliver final polished cuts plus modular opening hook variations ready for your ad manager." },
    ],
    faqs: [
      { question: "What is UGC and why is it effective?", answer: "User-Generated Content (UGC) resembles authentic content created by real customers. It blends natively into social feeds and consistently outperforms polished corporate ads." },
      { question: "How many video variations do you deliver?", answer: "Depending on your package, we typically deliver core creative angles with 3–5 alternative opening hooks so you can isolate and scale what works." },
      { question: "Can we use these videos for organic social media?", answer: "Yes, all delivered video assets can be published natively across Instagram Reels, TikTok, YouTube Shorts, and Facebook." },
    ],
    relatedSlugs: ["video-editing", "graphic-design", "digital-marketing", "social-media-marketing"],
  },

  "graphic-design": {
    slug: "graphic-design",
    title: "Graphic Design & Brand Identity",
    category: "Creative & Design",
    icon: "palette",
    shortDescription:
      "Distinctive visual brand identities, logo design systems, typography standards, and cohesive marketing collateral that build instant credibility.",
    badge: "BRAND IDENTITY & GRAPHICS",
    heroHeadline: "Memorable Visual Identities That Establish Category Authority.",
    heroDescription:
      "We craft cohesive brand identities, modern logo marks, typography standards, and high-impact digital collateral that make your business instantly recognizable.",
    valueProposition:
      "A weak visual presentation undermines even the best service or product. We build coherent design systems that project professionalism, build trust, and command premium pricing.",
    whoIsItFor: [
      "New businesses launching an ambitious brand from the ground up.",
      "Established companies whose visual branding no longer reflects their market position.",
      "Marketing teams needing consistent ad creative, presentation decks, and brand assets.",
      "Product companies requiring distinctive packaging and promotional collateral.",
    ],
    problemsSolved: [
      "Inconsistent branding across website, ads, presentations, and social channels.",
      "Dated visual design that causes prospective clients to question credibility.",
      "Lack of clean brand guidelines, leading to chaotic visual implementation.",
      "Generic logo marks that blend into competitor clutter.",
    ],
    deliverables: [
      "Custom Logo Design System (Primary, Secondary & Icon Marks)",
      "Comprehensive Brand Style Guidelines (Typography, Color Palettes, Usage)",
      "Digital Advertising Creative Kits (Banners, Social Templates)",
      "Corporate Presentation & Pitch Deck Design",
      "Marketing Collateral (Brochures, One-Pagers, Business Cards)",
      "Custom Iconography & Vector Illustration Elements",
      "Social Media Profile Kits (Covers, Avatars, Highlight Badges)",
      "Complete Vector Source Files (AI, SVG, PDF, PNG, WebP)",
    ],
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "InDesign", "Fontbase"],
    process: [
      { step: "01", title: "Brand Positioning & Moodboarding", desc: "We explore visual directions, competitor aesthetics, and typography styles that align with your market niche." },
      { step: "02", title: "Logo Concepts & Exploration", desc: "Our designers craft distinct, vector-based identity concepts explored in real-world mockups." },
      { step: "03", title: "Refinement & Identity Expansion", desc: "We fine-tune the selected direction and build the complete visual palette, fonts, and collateral." },
      { step: "04", title: "Brand Guidelines & Asset Delivery", desc: "Delivery of organized, production-ready vector assets and an easy-to-follow brand rulebook." },
    ],
    faqs: [
      { question: "What files do we receive upon project completion?", answer: "You receive all master vector files (.AI, .EPS, .SVG) as well as high-resolution web formats (.PNG with transparency, .PDF, .WebP)." },
      { question: "Do you provide brand guidelines for our internal team?", answer: "Yes, every identity project includes a comprehensive Brand Guidelines manual explaining exact colors, typography, spacing, and application rules." },
      { question: "Can you refresh an existing logo without completely changing it?", answer: "Yes, we frequently modernize existing logos to improve vector fidelity, readability, and digital screen versatility while preserving established brand equity." },
    ],
    relatedSlugs: ["ui-ux-design", "ai-video-production", "social-media-marketing", "web-development"],
  },

  "video-editing": {
    slug: "video-editing",
    title: "Video Editing & Motion Graphics",
    category: "Creative & Design",
    icon: "movie_edit",
    shortDescription:
      "Precision video editing, kinetic motion graphics, explainer animations, and polished audio mixing crafted to retain viewer retention.",
    badge: "POST-PRODUCTION & MOTION",
    heroHeadline: "Engaging Post-Production & Motion Graphics That Retain Attention.",
    heroDescription:
      "We turn raw footage into compelling visual stories through surgical editing, dynamic motion graphics, expressive sound design, and platform-optimized pacing.",
    valueProposition:
      "Modern audiences decide in seconds whether to keep watching. We apply retention-focused pacing, clean transitions, and crisp sound design to keep viewers engaged from start to finish.",
    whoIsItFor: [
      "Content creators and podcasters scaling weekly video publishing cadences.",
      "B2B software companies needing clear, animated product explainer videos.",
      "Marketing teams needing high-volume ad variations and localized promotional cuts.",
      "Corporate communications teams producing executive announcements and internal training.",
    ],
    problemsSolved: [
      "Dull, poorly-paced video footage that viewers drop off from after 5 seconds.",
      "Lack of internal video editing bandwidth causing huge backlogs in content output.",
      "Amateurish sound mixing and muddy audio that ruins visual quality.",
      "Inability to create slick, animated motion graphics in-house.",
    ],
    deliverables: [
      "Short-Form Video Editing (Reels, TikToks, Shorts with Dynamic Subtitles)",
      "Long-Form YouTube & Podcast Video Post-Production",
      "Kinetic Typography, Motion Graphics & Lower Thirds",
      "2D Explainer & Product Walkthrough Animations",
      "Professional Color Grading & Lighting Correction",
      "High-Fidelity Audio Mastering, Sound Design & Noise Removal",
      "Thumbnail Design & Click-Through Optimization",
      "Multi-Format Delivery (16:9 Landscape, 9:16 Vertical, 1:1 Square)",
    ],
    technologies: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Audition", "Figma"],
    process: [
      { step: "01", title: "Footage Review & Narrative Cut", desc: "We ingest raw footage, identify key moments, eliminate filler, and assemble a tight narrative story." },
      { step: "02", title: "Motion Graphics & B-Roll", desc: "We integrate custom kinetic text, graphic overlays, smooth transitions, and relevant visual cutaways." },
      { step: "03", title: "Audio Mastering & Color Grading", desc: "Audio levels are balanced, background noise eliminated, and colors graded for rich contrast." },
      { step: "04", title: "Review & Platform Formatting", desc: "You review the cut via interactive timestamped feedback tools before final platform delivery." },
    ],
    faqs: [
      { question: "How do we share large video files with your team?", answer: "We provide secure shared cloud storage links (Dropbox / Google Drive) where you can easily drag-and-drop raw footage." },
      { question: "How many rounds of revisions are included?", answer: "Each video project includes structured revision rounds using time-coded review tools so you can request exact adjustments seamlessly." },
      { question: "Can you handle ongoing monthly video editing?", answer: "Yes, we offer recurring monthly video editing retainers for creators and marketing teams needing a predictable weekly output." },
    ],
    relatedSlugs: ["ai-video-production", "graphic-design", "social-media-marketing", "digital-marketing"],
  },

  "seo": {
    slug: "seo",
    title: "SEO & Organic Visibility",
    category: "Marketing & Growth",
    icon: "travel_explore",
    shortDescription:
      "Technical SEO audits, high-intent keyword strategies, on-page optimization, and authoritative backlink building that capture high-intent search demand.",
    badge: "SEARCH ENGINE OPTIMIZATION",
    heroHeadline: "Capture High-Intent Buyer Traffic with Sustainable Organic Search.",
    heroDescription:
      "We implement comprehensive technical, on-page, and local SEO strategies that elevate your search rankings, compound organic traffic, and capture inbound commercial demand.",
    valueProposition:
      "Paid ads stop the minute your budget does. SEO builds long-term compounding digital equity, positioning your business at the exact moment prospects are actively searching for your solutions.",
    whoIsItFor: [
      "Service businesses aiming to dominate local Google search and map pack results.",
      "E-commerce stores wanting organic category and product page rankings.",
      "B2B and SaaS firms targeting high-intent commercial keywords and search queries.",
      "Websites undergoing redesigns that need their existing search rankings protected.",
    ],
    problemsSolved: [
      "Invisibility on Google search results, forcing complete reliance on expensive paid ads.",
      "Technical website errors (crawl issues, slow speeds, broken links) penalizing rankings.",
      "Targeting vanity keywords that generate clicks without driving actual business inquiries.",
      "Loss of organic traffic following poorly executed website redesigns or migrations.",
    ],
    deliverables: [
      "Comprehensive Technical SEO Audit & Crawlability Fixes",
      "Commercial-Intent Keyword Research & Topic Clustering Strategy",
      "On-Page Optimization (Titles, Meta, H1-H3, Internal Linking, Schema Markup)",
      "Core Web Vitals & Page Experience Optimization",
      "Local SEO & Google Business Profile Optimization",
      "Content Strategy Briefs & Semantic Keyword Optimization",
      "Structured Data & Rich Snippets Implementation (JSON-LD)",
      "Monthly Organic Ranking, Traffic & Conversion Attribution Reports",
    ],
    technologies: ["Ahrefs", "SEMrush", "Google Search Console", "Google Analytics 4", "Screaming Frog", "Schema.org"],
    process: [
      { step: "01", title: "Technical Crawl & Audit", desc: "We identify indexation issues, 404 errors, canonical loops, slow response times, and broken schemas." },
      { step: "02", title: "Commercial Keyword Mapping", desc: "We identify what your best customers are searching for and map high-intent queries to specific pages." },
      { step: "03", title: "On-Page & Technical Remediation", desc: "We rewrite metadata, optimize page hierarchy, implement Schema.org JSON-LD, and fix crawl obstacles." },
      { step: "04", title: "Monitoring & Strategic Expansion", desc: "Continuous position tracking, new content briefs, and technical hygiene to compound organic authority." },
    ],
    faqs: [
      { question: "How long does SEO take to produce measurable results?", answer: "Technical fixes can improve indexation within weeks, while noticeable organic keyword movements and traffic compounding typically become evident between months 3 and 6." },
      { question: "Do you guarantee #1 rankings on Google?", answer: "No ethical SEO agency can guarantee #1 rankings because search engine algorithms evolve constantly. We guarantee disciplined, industry-standard best practices that have consistently propelled clients to top visibility." },
      { question: "What is the difference between Technical SEO and On-Page SEO?", answer: "Technical SEO ensures search engines can crawl, index, and render your site fast and without errors. On-page SEO ensures your actual page content and keywords closely match user intent." },
    ],
    relatedSlugs: ["digital-marketing", "wordpress-development", "web-development", "ui-ux-design"],
  },

  "ui-ux-design": {
    slug: "ui-ux-design",
    title: "UI/UX & Digital Product Design",
    category: "Creative & Design",
    icon: "design_services",
    shortDescription:
      "Conversion-focused web and app interfaces, comprehensive Figma design systems, interactive prototypes, and frictionless user flows.",
    badge: "PRODUCT INTERACTION DESIGN",
    heroHeadline: "Intuitive Digital Interfaces Designed for Clarity and Conversion.",
    heroDescription:
      "We design elegant, human-centric web and mobile interfaces that clarify complex workflows, delight users, and drive measurable business actions.",
    valueProposition:
      "Design is not just how something looks; it is how it works. We combine behavioral psychology, ergonomic heuristics, and sleek aesthetics to turn casual visitors into loyal users.",
    whoIsItFor: [
      "Companies launching new digital products, SaaS tools, or mobile apps.",
      "Businesses struggling with confusing user flows, drop-offs, and low conversion rates.",
      "Organizations modernizing legacy portals into clean, intuitive experiences.",
      "Product teams needing cohesive, scalable Figma design systems and component libraries.",
    ],
    problemsSolved: [
      "Confusing user journeys causing high bounce rates and abandoned checkouts.",
      "Inconsistent interfaces where every screen feels like it was designed by a different person.",
      "Developers wasting expensive time guessing spacing, fonts, and responsive behavior.",
      "Cluttered, outdated visual styling that fails modern enterprise expectations.",
    ],
    deliverables: [
      "User Persona Modeling & User Journey Mapping",
      "Information Architecture & Low-Fidelity Wireframes",
      "High-Fidelity Interactive Prototypes in Figma",
      "Comprehensive Enterprise Design Systems (Tokens, Components, Variants)",
      "Mobile, Tablet & Desktop Responsive Layouts",
      "Micro-Interactions & Motion Behavior Specifications",
      "Usability Testing & Conversion Rate Optimization Insights",
      "Developer-Ready Design Handoff with Full Assets & Spacing Specs",
    ],
    technologies: ["Figma", "FigJam", "Adobe Creative Cloud", "Principle", "UserTesting"],
    process: [
      { step: "01", title: "Discovery & User Research", desc: "We study target user habits, pain points, competitor patterns, and core conversion objectives." },
      { step: "02", title: "Wireframes & UX Architecture", desc: "We establish clean content hierarchies and screen flows before introducing color or decorative elements." },
      { step: "03", title: "High-Fidelity Visual Design", desc: "We craft polished visual treatments, typography, micro-interactions, and responsive variants in Figma." },
      { step: "04", title: "Interactive Prototype & Handoff", desc: "Clickable prototypes for validation, accompanied by organized component systems for developers." },
    ],
    faqs: [
      { question: "What tools do you use for design?", answer: "We design exclusively in Figma, allowing real-time collaboration, interactive prototyping, and seamless developer handoff with inspectable CSS tokens." },
      { question: "Do you provide clickable prototypes?", answer: "Yes, we build interactive clickable prototypes in Figma so you and your stakeholders can test realistic workflows before coding begins." },
      { question: "Will our development team have everything they need?", answer: "Yes, our Figma handoff files include full typography tokens, color palettes, auto-layout components, responsive variants, and exported assets." },
    ],
    relatedSlugs: ["web-development", "mobile-app-development", "graphic-design", "ecommerce"],
  },

  "business-automation": {
    slug: "business-automation",
    title: "Business Automation & AI Solutions",
    category: "Automation & Intelligence",
    icon: "smart_toy",
    shortDescription:
      "Intelligent workflow automations, custom AI agents, CRM synchronizers, and internal operational tooling engineered to eliminate manual busywork.",
    badge: "WORKFLOW AUTOMATION & AI",
    heroHeadline: "Automate Repetitive Operations & Unlock Enterprise Productivity.",
    heroDescription:
      "We design and build intelligent automation workflows, bespoke AI assistance nodes, and CRM integrations that eliminate manual data entry and accelerate business velocity.",
    valueProposition:
      "Your team should focus on high-leverage strategic work, not manual copy-pasting between disconnected tools. We engineer automated pipelines that operate reliably 24/7.",
    whoIsItFor: [
      "Growing companies buried under manual data entry, customer follow-ups, and spreadsheets.",
      "Sales teams needing automated lead routing, instant CRM enrichment, and follow-ups.",
      "Customer support teams wanting AI-assisted response routing and ticket triage.",
      "Operations leaders aiming to scale business output without ballooning headcount.",
    ],
    problemsSolved: [
      "Valuable hours wasted each week on manual data re-entry across disconnected software.",
      "Slow customer lead response times leading to lost deals and cold prospects.",
      "Human error in invoice generation, contract dispatch, and client onboarding.",
      "Inability to scale operational volume without hiring additional administrative staff.",
    ],
    deliverables: [
      "Operational Workflow Audit & Automation Opportunity Blueprint",
      "Custom Workflow Automation (Make.com, Zapier, n8n)",
      "CRM Integration & Automated Lead Routing (HubSpot, Salesforce, Pipedrive)",
      "AI-Assisted Knowledge Bases & Smart Document Processing (OCR)",
      "Automated Client Onboarding, Form Processing & Contract Generation",
      "Multi-App Synchronization (Stripe, Slack, Google Workspace, Airtable)",
      "Internal Dashboards for Monitoring Operational Throughput",
      "Comprehensive Documentation & Error-Handling Fallback Protocols",
    ],
    technologies: ["Make.com", "Zapier", "n8n", "OpenAI API", "HubSpot", "Airtable", "Webhooks / REST APIs"],
    process: [
      { step: "01", title: "Workflow Friction Audit", desc: "We map your current manual processes, identify bottlenecks, and calculate hours and cost saved by automation." },
      { step: "02", title: "Automation Architecture", desc: "We design secure data flow blueprints with robust error catching, data formatting, and permission boundaries." },
      { step: "03", title: "Integration & Testing", desc: "We connect your business tools, build edge-case fallbacks, and test workflows thoroughly with real data scenarios." },
      { step: "04", title: "Deployment & Training", desc: "We activate the automations, monitor execution logs, and train your team on viewing and managing records." },
    ],
    faqs: [
      { question: "What tools can you connect together?", answer: "We can connect virtually any modern software that has an API or webhook support, including CRMs, spreadsheets, email providers, payment gateways, and project management tools." },
      { question: "What happens if an automated workflow fails?", answer: "We build automated error-handling and notification alerts into every pipeline, ensuring failed data payloads are safely logged and automatically retried." },
      { question: "Is our business data secure?", answer: "Yes, we adhere strictly to data privacy standards, using encrypted API keys and tokenized authentication with zero unnecessary intermediate data storage." },
    ],
    relatedSlugs: ["web-development", "digital-marketing", "seo", "ecommerce"],
  },
};
