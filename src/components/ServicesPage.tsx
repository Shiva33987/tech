"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Cpu,
  Layers,
  Code2,
  Database,
  Smartphone,
  Globe,
  Headphones,
  Tv,
  Building,
  GraduationCap,
  ExternalLink,
  ChevronRight,
  SlidersHorizontal,
  Search,
  Zap,
  Target,
  BarChart3,
  X,
  FileCode,
  Terminal,
} from "lucide-react";
import { useReducedMotion } from "@/providers/ReducedMotionProvider";

export interface ServiceDetail {
  id: string;
  category: "Digital Software" | "Enterprise Operations" | "Edge & Smart Infrastructure";
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  image: string;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  metrics: { label: string; value: string; note: string }[];
  deliverables: string[];
  techStack: string[];
  architectureSummary: string;
  caseStudy: {
    clientType: string;
    challenge: string;
    outcome: string;
  };
}

export const DETAILED_SERVICES: ServiceDetail[] = [
  {
    id: "mobile-applications",
    category: "Digital Software",
    number: "01",
    title: "Mobile Applications Engineering",
    tagline: "High-concurrency iOS & Android native engines built for sub-second execution.",
    description:
      "We design and engineer enterprise mobile platforms handling mission-critical transactional loads. From fintech-grade biometric vaults and zero-latency WebSocket feeds to cross-platform codebases that never sacrifice native fluidity.",
    icon: Smartphone,
    image: "/images/service-mobile.jpg",
    accentColor: "#FA6400",
    accentBg: "bg-orange-50",
    accentBorder: "border-orange-200",
    metrics: [
      { label: "Crash-Free Rate", value: "99.98%", note: "Across 2.4M devices" },
      { label: "API Sync Latency", value: "< 50ms P99", note: "Encrypted WebSocket" },
      { label: "Cold Start Time", value: "< 420ms", note: "Optimized native trees" },
    ],
    deliverables: [
      "Native iOS (Swift) & Android (Kotlin) specialized architecture",
      "Unified cross-platform React Native & Flutter codebases",
      "Biometric hardware security enclave & offline-first SQLite synchronization",
      "Continuous automated test automation across 200+ physical device profiles",
      "App Store & Google Play enterprise distribution & compliance governance",
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "SQLite SQLCipher", "gRPC", "WebSockets", "Fastlane"],
    architectureSummary:
      "Dual-layer mobile architecture separating transactional state from UI render loops. Employs hardware-isolated encryption enclaves for biometric signing and delta-compression sync engines over unreliable network conditions.",
    caseStudy: {
      clientType: "Tier-1 Asset Management Firm",
      challenge: "Needed sub-100ms real-time portfolio rebalancing app with zero local plaintext footprint.",
      outcome: "Delivered 99.99% crash-free mobile platform servicing $1.8B in monthly transaction volume.",
    },
  },
  {
    id: "web-solutions",
    category: "Digital Software",
    number: "02",
    title: "Enterprise Web Platforms",
    tagline: "Edge-rendered, hyper-scalable web architectures engineered for five-nines uptime.",
    description:
      "We build resilient digital experiences that blend consumer-grade speed with enterprise security. Serverless micro-frontends, sub-35ms global CDN delivery, multi-tenant RBAC, and bespoke interactive visualizations that transform complex data into actionable insight.",
    icon: Globe,
    image: "/images/service-web.jpg",
    accentColor: "#0D9488",
    accentBg: "bg-teal-50",
    accentBorder: "border-teal-200",
    metrics: [
      { label: "Core Web Vitals", value: "100/100", note: "Perfect Lighthouse score" },
      { label: "Global Edge TTL", value: "< 35ms", note: "Distributed Cloudflare" },
      { label: "Uptime SLA", value: "99.999%", note: "Zero-downtime deploys" },
    ],
    deliverables: [
      "Full-stack Next.js & React 19 enterprise architectures",
      "Edge-rendered micro-frontends with federated module deployment",
      "Multi-tenant authorization, SAML/SSO & SOC 2 compliant audit trails",
      "Dynamic WebGL & 3D data visualization dashboards",
      "Headless CMS, GraphQL gateways & declarative API contracts",
    ],
    techStack: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL", "Docker", "AWS / Cloudflare"],
    architectureSummary:
      "Static-edge hydration combined with serverless backend compute. In-memory distributed Redis cache layers buffer database read spikes, guaranteeing instantaneous navigation under sudden 10x traffic surges.",
    caseStudy: {
      clientType: "Global Logistics Exchange",
      challenge: "Legacy portal suffered 4.8s page loads and frequent downtime during market open surges.",
      outcome: "Rebuilt to Next.js edge platform, slashing load times to 380ms and boosting daily transactions by 320%.",
    },
  },
  {
    id: "bpo-services",
    category: "Enterprise Operations",
    number: "03",
    title: "BPO & Intelligent Operations",
    tagline: "AI-accelerated human-in-the-loop business process outsourcing and customer operations.",
    description:
      "Modern business process outsourcing combines skilled multi-lingual teams with proprietary automated workflow agents. We streamline front-office customer engagement, complex back-office data pipelines, and technical support queues with audited accuracy.",
    icon: Headphones,
    image: "/images/service-software.jpg",
    accentColor: "#E60038",
    accentBg: "bg-rose-50",
    accentBorder: "border-rose-200",
    metrics: [
      { label: "First Contact Res", value: "94.8%", note: "Tier-1 & Tier-2" },
      { label: "Process SLA", value: "99.7%", note: "Audited compliance" },
      { label: "Operational Cost", value: "-45%", note: "Average reduction" },
    ],
    deliverables: [
      "24/7/365 Omni-channel Tier-1 to Tier-3 technical support desks",
      "AI-assisted document verification, OCR parsing & regulatory compliance",
      "Data processing, annotation & reinforcement learning RLHF validation",
      "Dedicated multi-lingual customer success pods with ISO 9001 quality controls",
      "Custom analytics dashboards reporting real-time CSAT, AHT, and resolution velocity",
    ],
    techStack: ["RPA Automation", "Zendesk Enterprise", "Salesforce CRM", "LLM Workflows", "Kibana", "Encrypted VPNs"],
    architectureSummary:
      "Human-in-the-loop workflow architecture where deterministic tasks are triaged instantly by fine-tuned AI agents, escalating complex edge cases to specialized operational engineers with complete contextual briefs.",
    caseStudy: {
      clientType: "Fintech Banking As A Service Provider",
      challenge: "Rapid expansion created a 14-day backlog in business KYC document verification.",
      outcome: "Deployed 24/7 hybrid BPO pod with automated OCR parsing, reducing verification turnaround to 18 minutes.",
    },
  },
  {
    id: "advertising-dooh",
    category: "Edge & Smart Infrastructure",
    number: "04",
    title: "DOOH & Smart Media Networks",
    tagline: "Programmatic digital-out-of-home networks with real-time computer vision verification.",
    description:
      "Transforming urban advertising into an intelligent, programmatic medium. Our DOOH platform orchestrates thousands of high-brightness LED displays across transit hubs, commercial corridors, and urban landmarks with sub-second schedule propagation and proof-of-play auditing.",
    icon: Tv,
    image: "/images/service-marketing.jpg",
    accentColor: "#0284C7",
    accentBg: "bg-sky-50",
    accentBorder: "border-sky-200",
    metrics: [
      { label: "Daily Reach", value: "3.5M+ Eyes", note: "Metro impressions" },
      { label: "Screen Network", value: "120+ Prime", note: "Railway & hubs" },
      { label: "CMS Sync SLA", value: "< 1.5s", note: "Real-time edge" },
    ],
    deliverables: [
      "High-density commercial LED billboard & transit corridor displays",
      "Centralized cloud CMS for real-time campaign scheduling and geo-fencing",
      "Computer-vision footfall & audience dwell time telemetry",
      "Programmatic ad-exchange integrations via OpenRTB protocols",
      "Cryptographic proof-of-play audit logs for verified advertiser billing",
    ],
    techStack: ["Edge Linux Players", "MQTT Real-Time Bus", "OpenCV", "OpenRTB Protocol", "AWS S3 Sync", "Grafana"],
    architectureSummary:
      "Decentralized edge signage architecture. Media players cache high-definition assets locally and sync via low-bandwidth MQTT heartbeats, ensuring uninterrupted visual playback even during temporary cellular link dropouts.",
    caseStudy: {
      clientType: "Metropolitan Transit Authority",
      challenge: "Needed to replace legacy static boards with synchronized high-definition network across 40 railway stations.",
      outcome: "Installed 120 smart DOOH screens achieving 99.98% uptime and generating 210% increase in advertising yield.",
    },
  },
  {
    id: "coworking-spaces",
    category: "Edge & Smart Infrastructure",
    number: "05",
    title: "Smart Tech Co-Working Spaces",
    tagline: "Ultra-modern, biometric-secured workspaces engineered for fast-scaling technology pods.",
    description:
      "We design and operate collaborative tech sanctuaries featuring dual-mesh gigabit routing, soundproofed video production pods, ergonomic workstations, and automated room scheduling. Built to host engineering teams, startup founders, and enterprise regional hubs.",
    icon: Building,
    image: "/images/service-coworking.jpg",
    accentColor: "#D97706",
    accentBg: "bg-amber-50",
    accentBorder: "border-amber-200",
    metrics: [
      { label: "Bandwidth Mesh", value: "Dual 1 Gbps", note: "Fiber ISP failover" },
      { label: "Security", value: "24/7 Access", note: "Biometric NFC" },
      { label: "Occupancy Rate", value: "98.2%", note: "Consistently booked" },
    ],
    deliverables: [
      "Dedicated private cabins, flexible hot-desks & executive boardrooms",
      "Dual enterprise fiber lines with automated BGP failover & isolated VLANs",
      "Automated mobile app for meeting room booking & visitor check-in",
      "Acoustically treated podcasting & 4K video conferencing suites",
      "Full hospitality services, gourmet coffee lounge & community event programming",
    ],
    techStack: ["Cisco Meraki Mesh", "Biometric Access Control", "Zigbee IoT", "Room Scheduling CMS", "Energy Telemetry"],
    architectureSummary:
      "Zero-trust facility network architecture. Each corporate tenant operates within an encrypted dynamic VLAN with dedicated bandwidth reservations and zero mutual visibility, preventing cross-company LAN snooping.",
    caseStudy: {
      clientType: "Global AI Scale-up",
      challenge: "Required an immediate 60-seat engineering hub with strict SOC 2 physical security compliance.",
      outcome: "Configured custom private floor within 72 hours, with dedicated server room and biometric access logging.",
    },
  },
  {
    id: "edutech-platforms",
    category: "Edge & Smart Infrastructure",
    number: "06",
    title: "Next-Gen Edu-Tech Systems",
    tagline: "Adaptive AI learning pathways and ultra-low-latency interactive classroom platforms.",
    description:
      "We build learning management ecosystems that personalize student growth. Integrating adaptive neural difficulty engines, low-latency WebRTC group classrooms, automated anti-cheat exam proctoring, and comprehensive institutional analytics for schools and enterprise universities.",
    icon: GraduationCap,
    image: "/images/service-edutech.jpg",
    accentColor: "#2563EB",
    accentBg: "bg-blue-50",
    accentBorder: "border-blue-200",
    metrics: [
      { label: "Concurrent Scale", value: "100k+ Active", note: "Simultaneous test" },
      { label: "Video Latency", value: "< 180ms", note: "WebRTC streaming" },
      { label: "Student Pass Rate", value: "+38%", note: "Adaptive pathways" },
    ],
    deliverables: [
      "Modular cloud LMS supporting courses, graded assessments & live lectures",
      "Adaptive learning algorithm adjusting curriculum velocity to student comprehension",
      "Browser-based low-latency WebRTC interactive classrooms with virtual whiteboards",
      "AI-driven exam proctoring with multi-angle anomaly detection",
      "Enterprise SCORM & LTI compliance integrations for legacy university systems",
    ],
    techStack: ["WebRTC", "Adaptive Neural Engine", "Node.js", "Redis Pub/Sub", "PostgreSQL", "Canvas API", "HLS Caching"],
    architectureSummary:
      "Distributed media server mesh orchestrated with WebRTC selective forwarding units (SFUs). Video bitrates dynamically adapt to mobile bandwidth constraints without interrupting the shared teacher canvas.",
    caseStudy: {
      clientType: "National Educational Board",
      challenge: "Legacy portal crashed when 45,000 students attempted synchronized entrance examinations.",
      outcome: "Architected resilient cloud exam engine successfully handling 115,000 concurrent students with zero downtime.",
    },
  },
];

const CATEGORIES = [
  "All Disciplines",
  "Digital Software",
  "Enterprise Operations",
  "Edge & Smart Infrastructure",
] as const;

export default function ServicesPage({ onNavigateHome }: { onNavigateHome?: () => void }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Disciplines");
  const [activeModalService, setActiveModalService] = useState<ServiceDetail | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const prefersReducedMotion = useReducedMotion();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredServices = DETAILED_SERVICES.filter((svc) => {
    const matchesCategory =
      selectedCategory === "All Disciplines" || svc.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      svc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-white text-slate-900 min-h-screen pt-28 sm:pt-32 pb-12 font-sans relative">
      {/* Subtle warm ambient background highlights */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-[#FA6400]/[0.035] rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-[#E60038]/[0.025] rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* SERVICES HERO BANNER (Animated Slide-up)                  */}
        {/* ========================================================= */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 sm:mb-8"
        >
          {/* Breadcrumb / Back Navigation */}
          <div className="flex items-center gap-2 mb-4 sm:mb-5 text-xs font-mono text-slate-500">
            <button
              type="button"
              onClick={onNavigateHome}
              className="hover:text-slate-900 transition-colors cursor-pointer flex items-center gap-1 group"
            >
              <span className="group-hover:-translate-x-0.5 transition-transform">&larr;</span>
              <span>Home</span>
            </button>
            <span>/</span>
            <span className="text-[#E65100] font-semibold">Services &amp; Practice Areas</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 pb-5 sm:pb-6 border-b border-slate-200">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 sm:gap-4 mb-2">
                <div className="w-1.5 sm:w-2 h-9 sm:h-11 rounded-full bg-gradient-to-b from-[#FA6400] to-[#E60038] shadow-[0_0_12px_rgba(250,100,0,0.3)] shrink-0" />
                <div>
                  <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#E65100] block mb-0.5">
                    FULL-SPECTRUM ENTERPRISE PRACTICE AREAS
                  </span>
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-['Space_Grotesk'] text-slate-950 tracking-tight leading-[1.15]">
                    Engineering Scalable Software, Media, &amp; Smart Infrastructure
                  </h1>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-700 mt-2 sm:mt-3 leading-relaxed font-normal pl-4 sm:pl-5">
                We empower forward-thinking organizations with industrial-grade mobile applications, edge web architectures, intelligent BPO operations, programmatic DOOH advertising, smart tech spaces, and interactive Edu-Tech.
              </p>
            </div>

            {/* Quick Metrics Badge Strip */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="flex lg:flex-col gap-4 sm:gap-4 bg-slate-50 border border-slate-200 p-3.5 sm:p-4 rounded-2xl shrink-0 shadow-sm"
            >
              <div>
                <span className="text-xl sm:text-2xl font-extrabold text-slate-950 font-['Space_Grotesk'] block leading-none">
                  99.999%
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-slate-500 block mt-1">Platform Uptime SLA</span>
              </div>
              <div className="lg:border-t lg:border-slate-200 lg:pt-2.5">
                <span className="text-xl sm:text-2xl font-extrabold text-[#E65100] font-['Space_Grotesk'] block leading-none">
                  06 Practices
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-slate-500 block mt-1">Full-Lifecycle Delivery</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* INTERACTIVE FILTER & SEARCH BAR                           */}
        {/* ========================================================= */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3.5 mb-6 sm:mb-8"
        >
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <motion.button
                  key={cat}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.96 }}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-mono whitespace-nowrap transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? "bg-slate-950 text-white font-bold border-slate-950 shadow-md"
                      : "bg-slate-100 text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  {cat}
                </motion.button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-full sm:min-w-[280px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by tech or keyword..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FA6400] focus:ring-1 focus:ring-[#FA6400] transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* DETAILED SERVICES SHOWCASE (BENTO GRID WITH FLUID MOTION) */}
        {/* ========================================================= */}
        <div className="space-y-8 sm:space-y-12 mb-16 sm:mb-20">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const Icon = service.icon;
              const isReversed = index % 2 === 1;

              return (
                <motion.article
                  key={service.id}
                  id={service.id}
                  layout
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 70 }}
                  whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12, margin: "-40px" }}
                  transition={{
                    duration: 0.75,
                    delay: prefersReducedMotion ? 0 : index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={
                    prefersReducedMotion
                      ? {}
                      : {
                          y: -6,
                          transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                        }
                  }
                  className="group relative rounded-[26px] sm:rounded-3xl overflow-hidden border border-slate-200/90 bg-white hover:border-slate-300 hover:shadow-2xl transition-all duration-500 shadow-xl p-4 sm:p-7 lg:p-9"
                >
                  {/* Subtle accent glow */}
                  <div
                    className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-[140px] opacity-15 group-hover:opacity-25 group-hover:scale-125 transition-all duration-700 pointer-events-none"
                    style={{ backgroundColor: service.accentColor }}
                  />

                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}>
                    {/* Media Column (5 cols) */}
                    <div className={`lg:col-span-5 relative ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="relative rounded-2xl overflow-hidden border border-slate-200 aspect-[16/10] sm:aspect-[4/3] lg:aspect-[1.25/1] shadow-md group-hover:shadow-xl transition-all">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                        {/* Number Pill Overlay */}
                        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 sm:px-3 py-1 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-mono font-bold text-white flex items-center gap-1.5 sm:gap-2">
                          <Icon className="w-3.5 h-3.5" style={{ color: service.accentColor }} />
                          <span>DISCIPLINE {service.number}</span>
                        </div>

                        {/* Case Study Snippet Preview */}
                        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-3.5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-white/15 text-xs text-white">
                          <span className="block font-mono text-[10px] text-amber-400 uppercase tracking-wider mb-0.5 font-bold">
                            VERIFIED CLIENT OUTCOME
                          </span>
                          <p className="text-slate-200 line-clamp-2 leading-relaxed text-[11.5px] sm:text-xs">
                            {service.caseStudy.outcome}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Editorial & Capabilities Column (7 cols) */}
                    <div className={`lg:col-span-7 flex flex-col justify-between ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                      <div>
                        {/* Category Badge & Index Indicator */}
                        <div className="flex items-center justify-between gap-4 mb-2.5">
                          <span
                            className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase border shadow-sm"
                            style={{
                              color: service.accentColor,
                              backgroundColor: `${service.accentColor}12`,
                              borderColor: `${service.accentColor}35`,
                            }}
                          >
                            {service.category}
                          </span>
                          <span className="font-mono text-xs text-slate-400 font-semibold tracking-wider">
                            {service.number} / 06
                          </span>
                        </div>

                        {/* Headline in Signature Vibrant Orange/Gradient Pop */}
                        <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] text-[#FA6400] tracking-tight leading-tight mb-2.5">
                          {service.title}
                        </h2>

                        <p className="text-sm sm:text-base font-semibold text-slate-900 mb-2.5 leading-snug">
                          {service.tagline}
                        </p>

                        <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Verified Metrics Row - 3 Columns on all screens including Mobile */}
                        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-5 p-2.5 sm:p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80">
                          {service.metrics.map((m, mIdx) => (
                            <div
                              key={mIdx}
                              className="p-1 sm:p-2 rounded-xl transition-colors"
                            >
                              <span className="block font-mono text-[8.5px] sm:text-[10px] text-slate-500 uppercase tracking-wider font-semibold truncate">
                                {m.label}
                              </span>
                              <span className="text-xs sm:text-base lg:text-lg font-bold text-slate-950 font-['Space_Grotesk'] block mt-0.5 truncate">
                                {m.value}
                              </span>
                              <span className="text-[9.5px] sm:text-[11px] text-slate-500 leading-tight block truncate mt-0.5">
                                {m.note}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Deliverables Checklist with Tinted Check Badges */}
                        <div className="space-y-2 mb-4 sm:mb-5">
                          <span className="block font-mono text-[10.5px] sm:text-xs uppercase tracking-wider text-slate-600 font-bold mb-1">
                            CORE ARCHITECTURAL CAPABILITIES
                          </span>
                          <ul className="space-y-2">
                            {service.deliverables.slice(0, 3).map((item, idx) => (
                              <li
                                key={idx}
                                className="group/item flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 hover:text-slate-950 transition-all duration-200"
                              >
                                <CheckCircle2
                                  className="w-4 h-4 shrink-0 mt-0.5"
                                  style={{ color: service.accentColor }}
                                />
                                <span className="leading-snug">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Stack Chips */}
                        <div className="flex flex-wrap gap-1.5 mb-5 sm:mb-6">
                          {service.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md text-[10.5px] sm:text-[11px] font-mono bg-slate-100/90 hover:bg-slate-200 border border-slate-200/90 text-slate-700 transition-all cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons: side by side on mobile matching desktop screenshot */}
                      <div className="flex flex-row items-center gap-2.5 sm:gap-3 pt-3.5 sm:pt-4 border-t border-slate-200">
                        <motion.button
                          type="button"
                          whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                          whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                          onClick={() => setActiveModalService(service)}
                          className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-slate-950 text-white font-mono text-[10.5px] sm:text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-all cursor-pointer shadow-md shrink-0"
                        >
                          <span>Deep Architecture Specs</span>
                          <ArrowRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                        </motion.button>

                        <motion.a
                          href="#contact"
                          whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                          whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                          className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono text-[10.5px] sm:text-xs font-semibold tracking-wider transition-all border border-slate-200 cursor-pointer shrink-0"
                        >
                          <span>Inquire About {service.title.split(" ")[0]}</span>
                          <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-slate-500" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* ========================================================= */}
        {/* ENTERPRISE 4-STAGE DELIVERY PROTOCOL                       */}
        {/* ========================================================= */}
        <motion.section
          initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-20 rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-12 shadow-xl relative overflow-hidden"
        >
          <div className="max-w-2xl mb-8 sm:mb-10">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FA6400] block mb-2">
              PRECISION SYSTEM LIFECYCLE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight">
              Our 4-Stage Architectural Protocol
            </h2>
            <p className="text-xs sm:text-base text-slate-300 mt-2">
              From zero-trust threat modeling to high-throughput chaos validation, every service deployment adheres to deterministic engineering rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                step: "01",
                color: "text-[#FA6400]",
                borderHover: "hover:border-[#FA6400]/40",
                title: "Feasibility & Threat Modeling",
                desc: "Deconstructing business SLAs, latency limits, concurrent load demands, and cryptographic security boundaries.",
              },
              {
                step: "02",
                color: "text-[#E60038]",
                borderHover: "hover:border-[#E60038]/40",
                title: "Prototype & Distributed Benchmark",
                desc: "Building hardened sandbox prototypes and executing synthetic stress runs across multi-region networks.",
              },
              {
                step: "03",
                color: "text-amber-400",
                borderHover: "hover:border-amber-400/40",
                title: "Automated CI/CD & Chaos Engineering",
                desc: "Injecting simulated packet loss, container termination, and fiber latency to ensure self-healing failover.",
              },
              {
                step: "04",
                color: "text-emerald-400",
                borderHover: "hover:border-emerald-400/40",
                title: "Zero-Downtime Rollout & Telemetry",
                desc: "Canary deployment protocols with 24/7 automated tracing, sub-second error alerts, and guaranteed SLAs.",
              },
            ].map((p, pIdx) => (
              <motion.div
                key={p.step}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 25 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: prefersReducedMotion ? 0 : pIdx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : { y: -6, transition: { duration: 0.25 } }
                }
                className={`p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 ${p.borderHover} transition-all duration-300 shadow-md`}
              >
                <span className={`font-mono text-xl sm:text-2xl font-black ${p.color} block mb-2 sm:mb-3`}>
                  {p.step}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 sm:mb-2 font-['Space_Grotesk']">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* ========================================================= */}
      {/* INTERACTIVE FULL SPECIFICATION MODAL                      */}
      {/* ========================================================= */}
      <AnimatePresence>
        {activeModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl p-5 sm:p-10 shadow-2xl my-auto max-h-[90vh] overflow-y-auto"
              role="dialog"
              aria-modal="true"
            >
              {/* Top Accent Strip */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{ backgroundColor: activeModalService.accentColor }}
              />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalService(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-all cursor-pointer z-10"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs uppercase tracking-widest px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-600 font-semibold">
                  DISCIPLINE {activeModalService.number}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-slate-500">
                  {activeModalService.category}
                </span>
              </div>

              <h2 className="text-xl sm:text-3xl font-bold font-['Space_Grotesk'] text-slate-950 mb-2">
                {activeModalService.title}
              </h2>
              <p className="text-xs sm:text-base text-slate-600 mb-5 sm:mb-6 font-medium">
                {activeModalService.tagline}
              </p>

              {/* Architecture Blueprint Note */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900 text-xs font-mono text-cyan-300 mb-5 sm:mb-6">
                <span className="text-slate-400 block mb-1">SYSTEM ARCHITECTURE BLUEPRINT:</span>
                {activeModalService.architectureSummary}
              </div>

              {/* Deliverables */}
              <div className="mb-5 sm:mb-6">
                <span className="block font-mono text-xs uppercase tracking-wider text-slate-700 font-bold mb-2">
                  FULL DELIVERABLES &amp; COMPLIANCE SPECIFICATIONS
                </span>
                <ul className="space-y-2">
                  {activeModalService.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: activeModalService.accentColor }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Case Study Details */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-5 sm:mb-6 space-y-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#E65100] font-bold block">
                  CASE STUDY: {activeModalService.caseStudy.clientType.toUpperCase()}
                </span>
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong className="text-slate-900">Challenge: </strong>
                  {activeModalService.caseStudy.challenge}
                </p>
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong className="text-emerald-700">Outcome: </strong>
                  {activeModalService.caseStudy.outcome}
                </p>
              </div>

              {/* Modal CTA */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalService(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-mono text-slate-500 hover:text-slate-900 cursor-pointer"
                >
                  Close
                </button>

                <a
                  href="#contact"
                  onClick={() => setActiveModalService(null)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#FA6400] to-[#E60038] text-white hover:brightness-110 transition-all text-center shadow-md cursor-pointer"
                >
                  Schedule Technical Briefing
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
