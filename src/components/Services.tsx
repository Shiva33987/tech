"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Layers,
  CheckCircle2,
  SlidersHorizontal,
  ChevronRight,
  LayoutGrid,
  Maximize2,
  X,
  ExternalLink,
} from "lucide-react";
import { useReducedMotion } from "@/providers/ReducedMotionProvider";

export interface ServiceCapability {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  bullets: string[];
  description: string;
  badge: string;
  image: string;
  theme: {
    baseHex: string;        // Hex for bottom banner block (Image 1)
    darkHex: string;        // Dark background tint
    borderHex: string;      // Accent border color
    glowHex: string;        // Ambient shadow glow
    accentText: string;     // Text highlight color
  };
  metrics: { label: string; value: string }[];
  techStack: string[];
}

export const SERVICES_LIST: ServiceCapability[] = [
  {
    id: "mobile-applications",
    number: "01",
    title: "Mobile Applications",
    subtitle: "Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses.",
    bullets: [
      "Full-lifecycle iOS & Android native and cross-platform apps",
      "Biometric authentication, encrypted local storage & real-time sync",
      "High-concurrency transaction pipelines with fintech-grade security",
    ],
    description:
      "We engineer resilient mobile applications that handle high-velocity enterprise operations with seamless UX and sub-second execution.",
    badge: "MOBILE ENGINEERING",
    image: "/images/service-mobile.jpg",
    theme: {
      baseHex: "#5A1F4B",
      darkHex: "#280A22",
      borderHex: "rgba(217, 70, 239, 0.4)",
      glowHex: "rgba(168, 85, 247, 0.28)",
      accentText: "#E879F9",
    },
    metrics: [
      { label: "Crash-Free Rate", value: "99.98%" },
      { label: "Offline Sync", value: "Encrypted SQLite" },
      { label: "API Latency", value: "< 50ms P99" },
    ],
    techStack: [
      "React Native",
      "Flutter & Swift",
      "Kotlin",
      "Offline Sync",
      "Biometric Security",
      "REST & gRPC",
    ],
  },
  {
    id: "web-solutions",
    number: "02",
    title: "Web Solutions",
    subtitle: "Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses.",
    bullets: [
      "Modern edge-optimized Next.js, React & TypeScript web platforms",
      "Zero-downtime serverless architecture and sub-50ms global latency",
      "Enterprise security, multi-tenant RBAC & interactive data visualization",
    ],
    description:
      "We design and deliver scalable web solutions engineered for high availability, search engine domination, and flawless conversion.",
    badge: "WEB PLATFORMS",
    image: "/images/service-web.jpg",
    theme: {
      baseHex: "#11473B",
      darkHex: "#082921",
      borderHex: "rgba(20, 184, 166, 0.4)",
      glowHex: "rgba(13, 148, 136, 0.28)",
      accentText: "#2DD4BF",
    },
    metrics: [
      { label: "Core Web Vitals", value: "100/100 Perf" },
      { label: "Global Edge", value: "< 35ms CDN" },
      { label: "Uptime SLA", value: "99.999%" },
    ],
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Edge Middleware",
      "Cloudflare",
    ],
  },
  {
    id: "custom-software",
    number: "03",
    title: "Custom Software Solution",
    subtitle: "Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses.",
    bullets: [
      "Distributed microservices, event-driven pipelines & Kubernetes mesh",
      "Legacy monolith refactoring, API integration & cloud-native migration",
      "Strict SOC2, ISO & Zero-Trust compliant enterprise security standards",
    ],
    description:
      "We build bespoke enterprise platforms tailored to your exact operational workflows, eliminating system bottlenecks and legacy technical debt.",
    badge: "CUSTOM SYSTEMS",
    image: "/images/service-software.jpg",
    theme: {
      baseHex: "#133A6B",
      darkHex: "#081E3B",
      borderHex: "rgba(37, 99, 235, 0.4)",
      glowHex: "rgba(29, 78, 216, 0.28)",
      accentText: "#93C5FD",
    },
    metrics: [
      { label: "Architecture", value: "Event Microservices" },
      { label: "Compliance", value: "SOC2 & HIPAA" },
      { label: "Throughput", value: "50k req/sec" },
    ],
    techStack: [
      "Node.js & Go",
      "Kubernetes & Docker",
      "Kafka / RabbitMQ",
      "PostgreSQL",
      "Redis Mesh",
      "Terraform IaC",
    ],
  },
  {
    id: "digital-marketing",
    number: "04",
    title: "Digital Marketing",
    subtitle: "Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses.",
    bullets: [
      "Automated funnel attribution, conversion tracking & audience segmentation",
      "Performance marketing campaigns, technical SEO & content ecosystems",
      "Real-time CAC/LTV telemetry and automated growth testing pipelines",
    ],
    description:
      "We fuse performance engineering with data-driven creative strategy to scale qualified enterprise pipeline and maximize marketing ROI.",
    badge: "GROWTH & ANALYTICS",
    image: "/images/service-marketing.jpg",
    theme: {
      baseHex: "#943823",
      darkHex: "#451406",
      borderHex: "rgba(249, 115, 22, 0.4)",
      glowHex: "rgba(234, 88, 12, 0.28)",
      accentText: "#FB923C",
    },
    metrics: [
      { label: "Attribution", value: "Multi-Touch ROI" },
      { label: "Funnel Lift", value: "+38% Avg CVR" },
      { label: "Telemetry", value: "Real-Time BI" },
    ],
    techStack: [
      "Conversion Tech",
      "Technical SEO",
      "Google Analytics 4",
      "Segment & Mixpanel",
      "Ad Automated API",
      "Funnel Telemetry",
    ],
  },
  {
    id: "rent-a-desk",
    number: "05",
    title: "Rent-a-desk",
    subtitle: "Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses.",
    bullets: [
      "Gigabit fiber mesh, dedicated private cabins & hot-desk zones",
      "Ergonomic workstations, 4K conferencing & podcast media suites",
      "Flexible daily, monthly & team enterprise membership tiers",
    ],
    description:
      "Architectural collaborative workspaces with ultra-fast gigabit mesh, private suites, and collaborative environments designed for high-focus teams.",
    badge: "WORKSPACE ENCLAVE",
    image: "/images/service-coworking.jpg",
    theme: {
      baseHex: "#7C3E1D",
      darkHex: "#381708",
      borderHex: "rgba(245, 158, 11, 0.4)",
      glowHex: "rgba(217, 119, 6, 0.28)",
      accentText: "#FBBF24",
    },
    metrics: [
      { label: "Connectivity", value: "Gigabit Dual-Mesh" },
      { label: "Access Hours", value: "24/7 Biometric" },
      { label: "Meeting Suites", value: "4K Video Conferencing" },
    ],
    techStack: [
      "High-Speed Mesh",
      "Private Cabins",
      "Ergonomic Tech",
      "Meeting Pods",
      "Coffee & Lounge",
      "Events Arena",
    ],
  },
  {
    id: "edu-tech",
    number: "06",
    title: "Edu-Tech",
    subtitle: "Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses.",
    bullets: [
      "Interactive LMS platforms, real-time quizzes & grading engines",
      "AI-assisted personalized curriculum pathways & student analytics",
      "Multi-platform live streaming, video caching & offline syncing",
    ],
    description:
      "We engineer next-generation educational technologies with adaptive AI workflows, live interactive classrooms, and seamless multi-device access.",
    badge: "EDUCATION SYSTEMS",
    image: "/images/service-edutech.jpg",
    theme: {
      baseHex: "#1B4369",
      darkHex: "#0D253D",
      borderHex: "rgba(59, 130, 246, 0.4)",
      glowHex: "rgba(37, 99, 235, 0.28)",
      accentText: "#60A5FA",
    },
    metrics: [
      { label: "Concurrent Users", value: "100k+ Active" },
      { label: "Video Latency", value: "< 200ms WebRTC" },
      { label: "Adaptive AI", value: "Neural Learning" },
    ],
    techStack: [
      "Interactive LMS",
      "Adaptive Learning AI",
      "WebRTC Live Video",
      "Cloud Video Caching",
      "Automated Grading",
      "Mobile Classroom",
    ],
  },
];

export default function Services({ onViewFullPage }: { onViewFullPage?: () => void }) {
  const prefersReducedMotion = useReducedMotion();
  // Selected card index (0 = Mobile Applications by default)
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  // Detail modal state when clicking the arrow button
  const [detailModalItem, setDetailModalItem] = useState<ServiceCapability | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (detailModalItem) {
        if (e.key === "Escape") setDetailModalItem(null);
        return;
      }
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev === null ? 0 : (prev + 1) % SERVICES_LIST.length
        );
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === null
            ? SERVICES_LIST.length - 1
            : (prev - 1 + SERVICES_LIST.length) % SERVICES_LIST.length
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [detailModalItem]);

  const activeService =
    activeIndex !== null ? SERVICES_LIST[activeIndex] : SERVICES_LIST[0];

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative w-full bg-[#050608] text-white pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-10 lg:pb-12 overflow-hidden select-none border-t border-white/[0.06]"
      aria-label="Capabilities and Services Showcase"
    >
      {/* Background Subtle Gradient Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-indigo-950/20 rounded-full blur-[140px] opacity-60" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-purple-950/15 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Matching Image 1: Services We Provide) */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 25 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-5 sm:mb-6"
        >
          <div className="max-w-2xl">
            {/* Orange border-left mark matching Image 1 */}
            <div className="border-l-4 border-orange-500 pl-3.5 mb-2">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-tight">
                Services We Provide
              </h2>
            </div>
            <p className="text-sm sm:text-base text-white/60 font-normal pl-4 mt-2 leading-relaxed">
              Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses.
            </p>
          </div>

          {/* Interactive Navigation Hint & Full Page Link */}
          <div className="flex items-center gap-2 self-start lg:self-end">
            {onViewFullPage && (
              <button
                type="button"
                onClick={onViewFullPage}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-slate-200 transition-all shadow-md cursor-pointer"
              >
                <span>OPEN SEPARATE PAGE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
            <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-white/60 font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              <span className="tracking-wider uppercase text-[11px]">
                06 SERVICES • HOVER TO EXPLORE
              </span>
            </div>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* DESKTOP INTERACTIVE ACCORDION (Unified in one place)         */}
        {/* ============================================================ */}
        <div className="flex w-full h-[390px] sm:h-[400px] xl:h-[420px] gap-2.5 sm:gap-3.5 overflow-x-auto pb-3 snap-x no-scrollbar transition-all duration-500 ease-out">
          {SERVICES_LIST.map((service, idx) => {
            const isExpanded = activeIndex === idx;

            return (
              <motion.div
                key={service.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`relative rounded-2xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer group select-none border shrink-0 snap-center ${
                  isExpanded
                    ? "w-[85vw] max-w-[480px] lg:w-auto lg:flex-[3.2] xl:flex-[3.4] border-white/25 shadow-[0_20px_45px_rgba(0,0,0,0.85)]"
                    : "w-[56px] sm:w-[80px] lg:w-auto lg:flex-1 lg:min-w-[90px] xl:min-w-[110px] border-white/10 hover:border-white/25 bg-[#0b0d13]/70 hover:bg-[#0f121a]"
                }`}
                style={{
                  boxShadow: isExpanded
                    ? `0 16px 50px -10px ${service.theme.glowHex}`
                    : undefined,
                }}
                role="tab"
                aria-selected={isExpanded}
                tabIndex={0}
                aria-label={`${service.number} ${service.title}`}
              >
                {/* Background Smoke / Fluid Nebula Photograph */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={service.image}
                    alt=""
                    className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                      isExpanded
                        ? "scale-100 brightness-[0.88] contrast-[1.05]"
                        : "scale-105 brightness-[0.65] group-hover:brightness-[0.78] group-hover:scale-100"
                    }`}
                    draggable={false}
                  />
                  {/* Atmospheric Vignette Overlay */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isExpanded
                        ? "bg-gradient-to-r from-black/85 via-black/45 to-black/70"
                        : "bg-black/35 group-hover:bg-black/20"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/45" />
                </div>

                {/* -------------------------------------------------------- */}
                {/* EXPANDED CONTENT STATE (Image 2 Left Card)               */}
                {/* -------------------------------------------------------- */}
                {isExpanded ? (
                  <div className="relative z-10 w-full h-full p-6 lg:p-7 xl:p-8 flex flex-col justify-between">
                    {/* Top Header Row: Title on Left, Large Outline Number on Right */}
                    <motion.div
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                      animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                      transition={{ duration: 0.38, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-start justify-between gap-4"
                    >
                      <div className="max-w-[75%]">
                        <h3 className="font-display font-bold text-xl lg:text-2xl text-white tracking-tight leading-snug">
                          {service.title}
                        </h3>
                      </div>
                      <span className="font-sans font-extralight text-4xl lg:text-5xl text-white/50 tracking-tight leading-none select-none">
                        {service.number}
                      </span>
                    </motion.div>

                    {/* Middle Body: Subtitle, Bullets, and Narrative Description */}
                    <div className="space-y-2.5 my-auto pr-4">
                      <motion.p
                        initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                        animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.38, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[14.5px] lg:text-[15.5px] font-medium text-white/95 leading-snug"
                      >
                        {service.subtitle}
                      </motion.p>

                      {/* Bulleted Points with Staggered Slide-Up */}
                      <ul className="space-y-1 text-xs lg:text-[13px] text-white/80 leading-relaxed list-disc pl-5 marker:text-white/60">
                        {service.bullets.map((bullet, bIdx) => (
                          <motion.li
                            key={bIdx}
                            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.32,
                              delay: 0.15 + bIdx * 0.05,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="pl-1"
                          >
                            {bullet}
                          </motion.li>
                        ))}
                      </ul>

                      {/* Narrative summary paragraph */}
                      <motion.p
                        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                        animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.38, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[11.5px] lg:text-[12.5px] text-white/70 leading-relaxed font-normal pt-1 max-w-lg"
                      >
                        {service.description}
                      </motion.p>
                    </div>

                    {/* Bottom Footer: Sleek Vector Arrow Button */}
                    <motion.div
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 14, scale: 0.94 }}
                      animate={prefersReducedMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-center justify-between pt-1"
                    >
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setDetailModalItem(service);
                        }}
                        className="group/btn flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/10 hover:bg-white text-white hover:text-black transition-all duration-300 backdrop-blur-md shadow-md hover:scale-105 cursor-pointer"
                        aria-label={`View deep architecture specifications for ${service.title}`}
                        title="Open detailed architecture breakdown"
                      >
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                      </button>
                    </motion.div>
                  </div>
                ) : (
                  /* ------------------------------------------------------ */
                  /* COLLAPSED RIBBON PILLAR (Image 2 Right 4 Cards)        */
                  /* ------------------------------------------------------ */
                  <motion.div
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                    animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="relative z-10 w-full h-full flex flex-col justify-between items-center pt-6 pb-6 px-2"
                  >
                    {/* Top: Large Outline Number */}
                    <motion.span
                      initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
                      animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="font-sans font-extralight text-3xl lg:text-4xl text-white/60 tracking-tight leading-none group-hover:text-white transition-colors select-none"
                    >
                      {service.number}
                    </motion.span>

                    {/* Middle: Rotated Vertical Title Reading Upwards (Image 2) */}
                    <motion.div
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                      animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.05 }}
                      className="flex-1 flex items-center justify-center my-auto overflow-hidden py-3"
                    >
                      <span className="writing-mode-vertical font-display font-medium text-[14px] lg:text-[15px] text-white/75 group-hover:text-white tracking-wide transition-colors">
                        {service.title}
                      </span>
                    </motion.div>

                    {/* Clean bottom anchor without cluttered dots */}
                    <div className="h-2 w-full" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Status / Navigation Bar */}
        <div className="mt-6 sm:mt-8 pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/50">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="tracking-widest uppercase">
              ALL 6 SERVICES OPERATIONAL FOR ENTERPRISE DEPLOYMENT
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 tracking-widest uppercase">
            {onViewFullPage && (
              <button
                type="button"
                onClick={onViewFullPage}
                className="text-[#FA6400] hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer font-bold"
              >
                <span>VIEW DEDICATED SERVICES PAGE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
            <a
              href="#contact"
              className="text-white hover:text-cyan-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              <span>DISCUSS YOUR SYSTEM</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* INTERACTIVE DETAIL MODAL / DRAWER                            */}
      {/* ============================================================ */}
      <AnimatePresence>
        {detailModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-2xl bg-[#0d1017] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
              style={{
                boxShadow: `0 25px 70px -15px ${detailModalItem.theme.glowHex}`,
              }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Atmospheric Header Tint */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{ backgroundColor: detailModalItem.theme.baseHex }}
              />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setDetailModalItem(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs uppercase tracking-widest px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/70">
                  DISCIPLINE {detailModalItem.number}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-white/50">
                  {detailModalItem.badge}
                </span>
              </div>

              <h3
                id="modal-title"
                className="font-display text-2xl sm:text-3xl font-bold text-white mb-2"
              >
                {detailModalItem.title}
              </h3>
              <p className="text-sm sm:text-base text-white/80 font-medium mb-6">
                {detailModalItem.subtitle}
              </p>

              {/* Verified Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {detailModalItem.metrics.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10"
                  >
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-white/50 mb-1">
                      {m.label}
                    </span>
                    <span className="font-display font-bold text-sm sm:text-base text-white">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Core Deliverables */}
              <div className="mb-6">
                <span className="block font-mono text-xs uppercase tracking-wider text-white/50 mb-2.5">
                  CORE DELIVERABLES & ARCHITECTURAL CAPABILITIES
                </span>
                <ul className="space-y-2">
                  {detailModalItem.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80"
                    >
                      <CheckCircle2
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: detailModalItem.theme.accentText }}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Stack Tags */}
              <div className="mb-8">
                <span className="block font-mono text-xs uppercase tracking-wider text-white/50 mb-2.5">
                  PRIMARY TECHNOLOGY STACK
                </span>
                <div className="flex flex-wrap gap-2">
                  {detailModalItem.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setDetailModalItem(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider text-white/60 hover:text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setDetailModalItem(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider text-black font-semibold bg-white hover:bg-white/90 transition-all shadow-md cursor-pointer"
                >
                  <span>Inquire About {detailModalItem.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
