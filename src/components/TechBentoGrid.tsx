"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { ArrowUpRight, ArrowRight, X } from "lucide-react";
import { useReducedMotion } from "@/providers/ReducedMotionProvider";

interface BentoCard {
  id: string;
  badge?: string;
  title: string;
  description: string;
  image: string;
  bgColor?: string;
  textColor?: string;
  techStack: string[];
  specs: { label: string; value: string }[];
}

const BENTO_CARDS: BentoCard[] = [
  {
    id: "ai-robotics",
    badge: "EMBODIED AI",
    title: "AUTONOMOUS AI & ROBOTICS",
    description: "Enterprise LLM pipelines, autonomous robotic vision, and neuromorphic edge inference.",
    image: "/images/it-showcase/ai-robotics.jpg",
    bgColor: "#B3A4E8",
    textColor: "#0A0A0A",
    techStack: ["PyTorch", "ROS2", "CUDA", "TensorRT", "OpenCV"],
    specs: [
      { label: "Inference Latency", value: "< 8.5ms" },
      { label: "Architecture", value: "Neuromorphic Edge" },
      { label: "Perception", value: "LiDAR + Vision Fusion" },
    ],
  },
  {
    id: "cyber-defense",
    badge: "ZERO-TRUST SOC",
    title: "CYBER DEFENSE & ZERO-TRUST",
    description: "Military-grade biometric auth, 24/7 SOC telemetry, and AI-driven automated threat mitigation.",
    image: "/images/it-showcase/cyber-defense.jpg",
    bgColor: "#D4FF32",
    textColor: "#0A0A0A",
    techStack: ["eBPF", "Zero-Trust", "SIEM", "TLS 1.3", "FIPS 140-3"],
    specs: [
      { label: "Threat Mitigation", value: "Sub-Second Auto-Contain" },
      { label: "Compliance", value: "SOC 2 Type II, ISO 27001" },
      { label: "Encryption", value: "Post-Quantum Dilithium" },
    ],
  },
  {
    id: "data-intelligence",
    badge: "KAFKA & TELEMETRY",
    title: "DATA INTELLIGENCE & TELEMETRY",
    description: "Global data topologies, real-time Kafka event streams, and predictive enterprise intelligence.",
    image: "/images/it-showcase/data-intelligence.jpg",
    bgColor: "#FBF6EA",
    textColor: "#0A0A0A",
    techStack: ["Apache Kafka", "ClickHouse", "Spark", "Flink", "Snowflake"],
    specs: [
      { label: "Throughput", value: "1.2M Events / Sec" },
      { label: "Query Speed", value: "< 25ms P99" },
      { label: "Data Pipeline", value: "Automated ELT Matrix" },
    ],
  },
  {
    id: "software-architecture",
    badge: "MICROSERVICES CORE",
    title: "SOFTWARE ARCHITECTURE & APIS",
    description: "Microservices decomposition, high-concurrency cloud backends, and low-latency API gateways.",
    image: "/images/it-showcase/software-architecture.jpg",
    bgColor: "#FBF6EA",
    textColor: "#0A0A0A",
    techStack: ["Go", "Rust", "Node.js", "GraphQL", "gRPC", "Docker"],
    specs: [
      { label: "API Latency", value: "< 12ms Global P95" },
      { label: "Concurrency", value: "150k Active Conns" },
      { label: "Deployment", value: "Canary GitOps" },
    ],
  },
  {
    id: "mobile-apps",
    badge: "MOBILE & WEB PLATFORMS",
    title: "NEXT-GEN MOBILE & CLOUD APPS",
    description: "Fintech-grade iOS & Android native platforms, progressive web architectures, and biometric verification.",
    image: "/images/service-mobile.jpg",
    bgColor: "#FED6CE",
    textColor: "#0A0A0A",
    techStack: ["React Native", "Swift", "Kotlin", "Next.js", "WebAssembly"],
    specs: [
      { label: "Frame Rate", value: "Solid 120 FPS Native" },
      { label: "Offline First", value: "Encrypted SQLite Sync" },
      { label: "Store Rating", value: "4.9★ Average" },
    ],
  },
  {
    id: "cloud-infrastructure",
    badge: "HYPERSCALE CLOUD",
    title: "HYPERSCALE CLOUD & EDGE INFRASTRUCTURE",
    description: "High-availability distributed compute, global edge networks, and accelerated GPU clusters engineered for 99.99% uptime.",
    image: "/images/it-showcase/cloud-infrastructure.jpg",
    bgColor: "#090D14",
    textColor: "#FFFFFF",
    techStack: ["Kubernetes", "AWS / GCP", "Terraform", "Cloudflare", "NVIDIA H100"],
    specs: [
      { label: "Availability SLA", value: "99.995% Uptime" },
      { label: "Edge PoPs", value: "320+ Global Locations" },
      { label: "Failover", value: "Zero-Downtime Multi-Region" },
    ],
  },
];

export default function TechBentoGrid() {
  const [selectedCard, setSelectedCard] = useState<BentoCard | null>(null);
  const reducedMotion = useReducedMotion();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.09,
        delayChildren: reducedMotion ? 0 : 0.04,
      },
    },
  };

  // Card slide-up animation with pronounced travel and fluid easing
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: reducedMotion ? 0 : 65,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0.2 : 0.75,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="solutions-bento"
      className="relative w-full bg-[#E5E8EC] text-slate-900 py-6 sm:py-10 lg:py-14 px-3 sm:px-6 lg:px-8 overflow-hidden font-sans"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Main Bento Grid with Animated Stagger Slide-Up */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "-40px" }}
          className="grid grid-cols-12 gap-2.5 sm:gap-4 lg:gap-5 items-stretch"
        >
          {/* ========================================================= */}
          {/* CARD 1: TALL HERO CARD (LEFT COLUMN, SPANS 2 ROWS)        */}
          {/* ========================================================= */}
          <motion.div
            variants={cardVariants}
            whileHover={
              reducedMotion
                ? {}
                : {
                    y: -5,
                    scale: 1.01,
                    transition: { type: "spring", stiffness: 350, damping: 25 },
                  }
            }
            className="col-span-12 lg:col-span-4 lg:row-span-2 rounded-[20px] sm:rounded-[28px] bg-[#00C265] p-4 sm:p-7 lg:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden group transition-shadow duration-300 hover:shadow-[0_20px_40px_-10px_rgba(0,194,101,0.4)]"
          >
            {/* Subtle Tech Grid Texture overlay */}
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-multiply"
              style={{
                backgroundImage:
                  "radial-gradient(#000 1.5px, transparent 1.5px), radial-gradient(#000 1.5px, transparent 1.5px)",
                backgroundSize: "20px 20px",
                backgroundPosition: "0 0, 10px 10px",
              }}
            />

            {/* Top Kicker & Headline */}
            <div className="relative z-10">
              <span className="font-mono text-xs font-black tracking-[0.25em] text-black/85 uppercase flex items-center gap-2 mb-2 sm:mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-black" />
                </span>
                BECAUSE
              </span>
              <h2 className="font-black text-2xl sm:text-3xl xl:text-[38px] leading-[1.08] tracking-tight uppercase italic text-black font-['Space_Grotesk'] break-words">
                &ldquo;CODE AND PRAY&rdquo; <br />
                <span className="not-italic tracking-normal">ISN&apos;T A STRATEGY</span>
              </h2>
            </div>

            {/* Metrics & Action Button */}
            <div className="relative z-10 pt-5 sm:pt-8">
              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pb-4 sm:pb-5 border-t border-black/15 pt-4 sm:pt-5">
                <div>
                  <div className="font-black text-lg sm:text-2xl lg:text-[28px] tracking-tight text-black font-['Space_Grotesk'] leading-none">
                    50+
                  </div>
                  <div className="text-[8px] sm:text-[10px] font-bold tracking-tight sm:tracking-wider text-black/75 uppercase mt-1 truncate">
                    BRANDS SCALED
                  </div>
                </div>
                <div>
                  <div className="font-black text-lg sm:text-2xl lg:text-[28px] tracking-tight text-black font-['Space_Grotesk'] leading-none">
                    99.99%
                  </div>
                  <div className="text-[8px] sm:text-[10px] font-bold tracking-tight sm:tracking-wider text-black/75 uppercase mt-1 truncate">
                    UPTIME SLA
                  </div>
                </div>
                <div>
                  <div className="font-black text-lg sm:text-2xl lg:text-[28px] tracking-tight text-black font-['Space_Grotesk'] leading-none">
                    10M+
                  </div>
                  <div className="text-[8px] sm:text-[10px] font-bold tracking-tight sm:tracking-wider text-black/75 uppercase mt-1 truncate">
                    OPS POWERED
                  </div>
                </div>
              </div>

              {/* Action Pill Button with Hover Spring */}
              <motion.button
                type="button"
                whileHover={reducedMotion ? {} : { scale: 1.03 }}
                whileTap={reducedMotion ? {} : { scale: 0.97 }}
                onClick={() => scrollToSection("services")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-black hover:bg-neutral-900 text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md shadow-black/20 cursor-pointer group/btn"
              >
                <span>EXPLORE ALL OUR WORKS</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
              </motion.button>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* CARD 2: TOP MIDDLE (LAVENDER / PASTEL PURPLE)             */}
          {/* ========================================================= */}
          <motion.div
            variants={cardVariants}
            whileHover={
              reducedMotion
                ? {}
                : {
                    y: -5,
                    scale: 1.012,
                    transition: { type: "spring", stiffness: 350, damping: 25 },
                  }
            }
            whileTap={reducedMotion ? {} : { scale: 0.99 }}
            onClick={() => setSelectedCard(BENTO_CARDS[0])}
            className="col-span-6 lg:col-span-4 rounded-[18px] sm:rounded-[24px] p-3.5 sm:p-6 flex flex-col justify-between cursor-pointer group transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(179,164,232,0.5)] relative overflow-hidden"
            style={{ backgroundColor: "#B3A4E8" }}
          >
            <div>
              <div className="flex items-start justify-between gap-2 sm:gap-3">
                <h3 className="font-black text-xs sm:text-xl uppercase leading-tight tracking-tight text-black font-['Space_Grotesk'] line-clamp-2">
                  AUTONOMOUS AI &amp; ROBOTICS
                </h3>
                <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-black/10 flex items-center justify-center text-black shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45 group-hover:bg-black/20 group-hover:scale-110">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" />
                </div>
              </div>
              <p className="mt-1.5 sm:mt-2.5 text-black/80 text-[10px] sm:text-sm font-medium leading-snug sm:leading-relaxed line-clamp-3">
                Enterprise LLM pipelines, autonomous robotic vision, and neuromorphic edge inference.
              </p>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* CARD 3: TOP RIGHT (NEON ELECTRIC LIME)                    */}
          {/* ========================================================= */}
          <motion.div
            variants={cardVariants}
            whileHover={
              reducedMotion
                ? {}
                : {
                    y: -5,
                    scale: 1.012,
                    transition: { type: "spring", stiffness: 350, damping: 25 },
                  }
            }
            whileTap={reducedMotion ? {} : { scale: 0.99 }}
            onClick={() => setSelectedCard(BENTO_CARDS[1])}
            className="col-span-6 lg:col-span-4 rounded-[18px] sm:rounded-[24px] p-3.5 sm:p-6 flex flex-col justify-between cursor-pointer group transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(212,255,50,0.5)] relative overflow-hidden"
            style={{ backgroundColor: "#D4FF32" }}
          >
            <div>
              <div className="flex items-start justify-between gap-2 sm:gap-3">
                <h3 className="font-black text-xs sm:text-xl uppercase leading-tight tracking-tight text-black font-['Space_Grotesk'] line-clamp-2">
                  CYBER DEFENSE &amp; ZERO-TRUST
                </h3>
                <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-black/10 flex items-center justify-center text-black shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45 group-hover:bg-black/20 group-hover:scale-110">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" />
                </div>
              </div>
              <p className="mt-1.5 sm:mt-2.5 text-black/80 text-[10px] sm:text-sm font-medium leading-snug sm:leading-relaxed line-clamp-3">
                Military-grade biometric auth, 24/7 SOC telemetry, and AI-driven automated threat mitigation.
              </p>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* CARD 4: MIDDLE ROW, MIDDLE COLUMN (WARM IVORY / CREAM)    */}
          {/* ========================================================= */}
          <motion.div
            variants={cardVariants}
            whileHover={
              reducedMotion
                ? {}
                : {
                    y: -5,
                    scale: 1.012,
                    transition: { type: "spring", stiffness: 350, damping: 25 },
                  }
            }
            whileTap={reducedMotion ? {} : { scale: 0.99 }}
            onClick={() => setSelectedCard(BENTO_CARDS[2])}
            className="col-span-6 lg:col-span-4 rounded-[18px] sm:rounded-[24px] p-3.5 sm:p-6 flex flex-col justify-between cursor-pointer group transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.14)] relative overflow-hidden border border-black/5"
            style={{ backgroundColor: "#FBF6EA" }}
          >
            <div>
              <div className="flex items-start justify-between gap-2 sm:gap-3">
                <h3 className="font-black text-xs sm:text-xl uppercase leading-tight tracking-tight text-black font-['Space_Grotesk'] line-clamp-2">
                  DATA INTELLIGENCE &amp; TELEMETRY
                </h3>
                <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-black/10 flex items-center justify-center text-black shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45 group-hover:bg-black/20 group-hover:scale-110">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" />
                </div>
              </div>
              <p className="mt-1.5 sm:mt-2.5 text-black/75 text-[10px] sm:text-sm font-medium leading-snug sm:leading-relaxed line-clamp-3">
                Global data topologies, real-time Kafka event streams, and predictive enterprise intelligence.
              </p>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* CARD 5: MIDDLE ROW, RIGHT COLUMN (WARM IVORY / CREAM)     */}
          {/* ========================================================= */}
          <motion.div
            variants={cardVariants}
            whileHover={
              reducedMotion
                ? {}
                : {
                    y: -5,
                    scale: 1.012,
                    transition: { type: "spring", stiffness: 350, damping: 25 },
                  }
            }
            whileTap={reducedMotion ? {} : { scale: 0.99 }}
            onClick={() => setSelectedCard(BENTO_CARDS[3])}
            className="col-span-6 lg:col-span-4 rounded-[18px] sm:rounded-[24px] p-3.5 sm:p-6 flex flex-col justify-between cursor-pointer group transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.14)] relative overflow-hidden border border-black/5"
            style={{ backgroundColor: "#FBF6EA" }}
          >
            <div>
              <div className="flex items-start justify-between gap-2 sm:gap-3">
                <h3 className="font-black text-xs sm:text-xl uppercase leading-tight tracking-tight text-black font-['Space_Grotesk'] line-clamp-2">
                  SOFTWARE ARCHITECTURE &amp; APIS
                </h3>
                <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-black/10 flex items-center justify-center text-black shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45 group-hover:bg-black/20 group-hover:scale-110">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" />
                </div>
              </div>
              <p className="mt-1.5 sm:mt-2.5 text-black/75 text-[10px] sm:text-sm font-medium leading-snug sm:leading-relaxed line-clamp-3">
                Microservices decomposition, high-concurrency cloud backends, and low-latency API gateways.
              </p>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* CARD 6: BOTTOM ROW, LEFT SIDE (SOFT PEACH / CORAL)        */}
          {/* ========================================================= */}
          <motion.div
            variants={cardVariants}
            whileHover={
              reducedMotion
                ? {}
                : {
                    y: -5,
                    scale: 1.012,
                    transition: { type: "spring", stiffness: 350, damping: 25 },
                  }
            }
            whileTap={reducedMotion ? {} : { scale: 0.99 }}
            onClick={() => setSelectedCard(BENTO_CARDS[4])}
            className="col-span-6 lg:col-span-5 rounded-[18px] sm:rounded-[24px] p-3.5 sm:p-6 flex flex-col justify-between cursor-pointer group transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(254,214,206,0.6)] relative overflow-hidden"
            style={{ backgroundColor: "#FED6CE" }}
          >
            <div>
              <div className="flex items-start justify-between gap-2 sm:gap-3">
                <h3 className="font-black text-xs sm:text-xl uppercase leading-tight tracking-tight text-black font-['Space_Grotesk'] line-clamp-2">
                  NEXT-GEN MOBILE &amp; CLOUD APPS
                </h3>
                <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-black/10 flex items-center justify-center text-black shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45 group-hover:bg-black/20 group-hover:scale-110">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" />
                </div>
              </div>
              <p className="mt-1.5 sm:mt-2.5 text-black/80 text-[10px] sm:text-sm font-medium leading-snug sm:leading-relaxed line-clamp-3">
                Fintech-grade iOS &amp; Android native platforms, progressive web architectures, and biometric verification.
              </p>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* CARD 7: BOTTOM ROW, RIGHT SIDE (FULL-BLEED 4K PHOTO CARD) */}
          {/* ========================================================= */}
          <motion.div
            variants={cardVariants}
            whileHover={
              reducedMotion
                ? {}
                : {
                    y: -5,
                    scale: 1.01,
                    transition: { type: "spring", stiffness: 350, damping: 25 },
                  }
            }
            whileTap={reducedMotion ? {} : { scale: 0.99 }}
            onClick={() => setSelectedCard(BENTO_CARDS[5])}
            className="col-span-6 lg:col-span-7 rounded-[18px] sm:rounded-[28px] p-3.5 sm:p-6 lg:p-7 flex flex-col justify-end cursor-pointer group transition-all duration-300 hover:shadow-[0_25px_50px_-10px_rgba(0,0,0,0.7)] relative overflow-hidden min-h-[140px] sm:min-h-[180px]"
          >
            {/* Background 4K Image with Slow Cinematic Zoom */}
            <img
              src="/images/it-showcase/cloud-infrastructure.jpg"
              alt="Hyperscale Cloud & Edge Datacenter"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-108"
              loading="lazy"
            />

            {/* Cinematic Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/25 transition-opacity duration-300 group-hover:opacity-90" />

            {/* Light Sweep Reflection Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

            {/* Content Overlaid */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4">
              <div className="max-w-xl">
                <h3 className="font-black text-xs sm:text-2xl lg:text-[26px] uppercase leading-tight tracking-tight text-white font-['Space_Grotesk'] line-clamp-2 sm:line-clamp-none">
                  HYPERSCALE CLOUD &amp; EDGE INFRASTRUCTURE
                </h3>
                <p className="mt-1 sm:mt-1.5 text-white/80 text-[9px] sm:text-sm font-normal leading-snug sm:leading-relaxed line-clamp-2">
                  High-availability distributed compute, global edge networks, and accelerated GPU clusters engineered for 99.99% uptime.
                </p>
              </div>

              {/* Circular Arrow Button (Bottom Right) with Spring Effect */}
              <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-md flex items-center justify-center text-white shrink-0 self-end sm:self-auto transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45 group-hover:scale-110 border border-white/25 shadow-md">
                <ArrowUpRight className="w-3 h-3 sm:w-5 sm:h-5" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ========================================================= */}
      {/* QUICK VIEW TECH MODAL FOR INSPECTING ARCHITECTURE SPECS   */}
      {/* ========================================================= */}
      <AnimatePresence>
        {selectedCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog with Spring Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative w-full max-w-xl bg-[#0C1017] border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-7 text-white shadow-2xl overflow-hidden z-10 max-h-[92vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Image */}
              <div className="w-full aspect-[16/8] rounded-2xl overflow-hidden border border-white/10 mb-5 relative">
                <img
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-mono font-bold tracking-wider text-cyan-300 uppercase">
                  {selectedCard.badge}
                </div>
              </div>

              {/* Title & Description */}
              <h4 className="font-black text-xl sm:text-2xl uppercase tracking-tight font-['Space_Grotesk'] text-white">
                {selectedCard.title}
              </h4>
              <p className="mt-2 text-slate-300 text-xs sm:text-sm leading-relaxed">
                {selectedCard.description}
              </p>

              {/* Specs Grid */}
              <div className="mt-5 pt-4 border-t border-white/10">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2.5">
                  SYSTEM BENCHMARKS &amp; SPECS
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {selectedCard.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white/[0.04] border border-white/5"
                    >
                      <div className="text-[10px] text-slate-400 uppercase font-medium">
                        {spec.label}
                      </div>
                      <div className="text-xs font-bold text-white mt-0.5">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="mt-5">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  CORE TECH STACK
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCard.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono font-semibold text-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCard(null);
                    scrollToSection("services");
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>EXPLORE IN SERVICES</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCard(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
