"use client";

import React, { useState, useEffect } from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface TechSlide {
  id: string;
  count: string;
  badge: string;
  image: string;
  title: string;
  description: string;
}

const TECH_SLIDES: TechSlide[] = [
  {
    id: "ai-robotics",
    count: "01/05",
    badge: "AI & Robotics",
    image: "/images/it-showcase/ai-robotics.jpg",
    title: "Autonomous Neural Systems & Intelligent Robotics",
    description: "Enterprise AI pipelines powering autonomous automation and next-gen intelligence.",
  },
  {
    id: "cloud-infrastructure",
    count: "02/05",
    badge: "Cloud Platform",
    image: "/images/it-showcase/cloud-infrastructure.jpg",
    title: "Hyper-Scale Cloud & Resilient Edge Infrastructure",
    description: "Distributed high-availability cloud architecture engineered for global scale.",
  },
  {
    id: "cyber-defense",
    count: "03/05",
    badge: "Cyber Defense",
    image: "/images/it-showcase/cyber-defense.jpg",
    title: "Zero-Trust Security & Real-Time Threat Mitigation",
    description: "Military-grade biometric verification and intelligent threat monitoring matrices.",
  },
  {
    id: "data-intelligence",
    count: "04/05",
    badge: "Data Intelligence",
    image: "/images/it-showcase/data-intelligence.jpg",
    title: "Real-Time Telemetry & Global Neural Analytics",
    description: "Live streaming data topologies and predictive enterprise intelligence dashboards.",
  },
  {
    id: "software-architecture",
    count: "05/05",
    badge: "Engineering",
    image: "/images/it-showcase/software-architecture.jpg",
    title: "Enterprise Full-Stack & Distributed Microservices",
    description: "Modern, high-velocity cloud-native software engineering built for performance.",
  },
];

export default function Hero() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const currentSlide = TECH_SLIDES[currentSlideIndex];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % TECH_SLIDES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen lg:min-h-[680px] lg:h-auto flex flex-col justify-center overflow-hidden bg-[#07090D] pt-20 sm:pt-24 pb-6 sm:pb-8"
      aria-label="Hero Section - VRPI Technology Solutions"
    >
      {/* Background Pavilion Image */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        <img
          src="/hero-image.jpg"
          alt="Serene architectural pavilion nestled in misty lush twilight forest"
          className="w-full h-full object-cover object-center filter brightness-[1.03] contrast-[1.02]"
        />

        {/* Balanced Atmospheric Overlays - clear image visibility without dominating */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090D]/80 via-transparent to-black/35" />
      </div>

      {/* Main Content Area: Left Hero Headline/Actions & Right Showcase Card */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 my-auto pt-6 pb-10 sm:pt-12 sm:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        {/* Left Hero Content */}
        <div className="lg:col-span-7 flex flex-col items-start z-10 text-left">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-black/45 hover:bg-black/60 backdrop-blur-xl border border-white/20 text-xs sm:text-sm font-medium text-white mb-4 sm:mb-6 shadow-lg transition-all duration-300"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF3366] shadow-[0_0_10px_#FF3366] animate-pulse" />
            <span className="tracking-wide">AI &bull; Robotics &bull; Innovation</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-[68px] font-extrabold tracking-tight leading-[1.08] text-white mb-4 sm:mb-6 font-display"
          >
            Shaping a Smarter{" "}
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-[#FF3366] via-[#FF4D6D] to-[#FF8C66] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,51,102,0.35)]">
              Tomorrow
            </span>
          </motion.h1>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-sm sm:text-lg lg:text-xl text-slate-300 max-w-xl leading-relaxed mb-6 sm:mb-10 font-normal"
          >
            Explore the future of AI and robotics with VRPi &mdash; where innovation meets real-world solutions.
          </motion.p>

          {/* Three Feature Highlights with Custom Glowing Neon Icons (Always 3 Columns across mobile & desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-3 gap-2 sm:gap-6 mb-6 sm:mb-10 w-full max-w-2xl"
          >
            {/* Feature 1: AI Solutions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 group">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-rose-500/10 border border-rose-500/25 flex items-center justify-center shrink-0 shadow-[0_0_18px_rgba(255,51,102,0.25)] group-hover:scale-105 transition-transform duration-300">
                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-[#FF3366]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.44 2.5 2.5 0 0 0-2.96 3.08 3 3 0 0 0-.34 5.58 2.5 2.5 0 0 0 1.32 4.24 2.5 2.5 0 0 0 4.44 2.04V4.5z" />
                  <path d="M12 4.5a2.5 2.5 0 0 1 4.96-.44 2.5 2.5 0 0 1 2.96 3.08 3 3 0 0 1 .34 5.58 2.5 2.5 0 0 1-1.32 4.24 2.5 2.5 0 0 1-4.44 2.04V4.5z" />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-base font-bold text-white tracking-tight leading-snug">AI Solutions</h3>
                <p className="text-[10px] sm:text-[13px] text-slate-300 leading-snug">Smarter systems</p>
              </div>
            </div>

            {/* Feature 2: Robotics */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 group">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-rose-500/10 border border-rose-500/25 flex items-center justify-center shrink-0 shadow-[0_0_18px_rgba(255,51,102,0.25)] group-hover:scale-105 transition-transform duration-300">
                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-[#FF3366]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="19" width="18" height="3" rx="1" />
                  <path d="M7 19v-3h10v3" />
                  <path d="M12 16V10" />
                  <circle cx="12" cy="10" r="2" />
                  <path d="m13.5 8.5 4-4" />
                  <circle cx="18" cy="4" r="1.5" />
                  <path d="M19.5 2.5 22 5" />
                  <path d="M16.5 5.5 19 8" />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-base font-bold text-white tracking-tight leading-snug">Robotics</h3>
                <p className="text-[10px] sm:text-[13px] text-slate-300 leading-snug">Real-world impact</p>
              </div>
            </div>

            {/* Feature 3: Innovation */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 group">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-rose-500/10 border border-rose-500/25 flex items-center justify-center shrink-0 shadow-[0_0_18px_rgba(255,51,102,0.25)] group-hover:scale-105 transition-transform duration-300">
                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-[#FF3366]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="4" cy="12" r="2" />
                  <circle cx="20" cy="12" r="2" />
                  <circle cx="12" cy="4" r="2" />
                  <circle cx="12" cy="20" r="2" />
                  <path d="M6 12h3" />
                  <path d="M15 12h3" />
                  <path d="M12 6v3" />
                  <path d="M12 15v3" />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-base font-bold text-white tracking-tight leading-snug">Innovation</h3>
                <p className="text-[10px] sm:text-[13px] text-slate-300 leading-snug">Built for tomorrow</p>
              </div>
            </div>
          </motion.div>

          {/* Call to Actions (Buttons) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            {/* Primary Action Button */}
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-base font-bold text-white bg-gradient-to-r from-[#FF3366] via-[#FF4D6D] to-[#FF7555] shadow-[0_0_35px_rgba(255,51,102,0.55)] hover:shadow-[0_0_45px_rgba(255,51,102,0.8)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
            >
              <span>Explore Our Solutions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Right Hero Showcase Card Container */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full mt-2 lg:mt-0">
          {/* Right Hero Showcase Card (Glassmorphic Tech Showcase Card) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] rounded-3xl p-3.5 sm:p-5 bg-white/[0.08] hover:bg-white/[0.12] backdrop-blur-2xl border border-white/[0.18] shadow-[0_25px_60px_rgba(0,0,0,0.7)] transition-all duration-500 group"
          >
            {/* Card Image with Glow */}
            <div className="relative h-[210px] sm:h-[300px] md:h-[330px] w-full rounded-2xl overflow-hidden mb-3.5 bg-black/40">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide.id}
                src={currentSlide.image}
                alt={currentSlide.title}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />
            </AnimatePresence>
            
            {/* Subtle dark gradient overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

            {/* Floating image badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.badge}
                initial={{ opacity: 0, y: -6, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -4, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-semibold text-white tracking-wide shadow-md flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                {currentSlide.badge}
              </motion.div>
            </AnimatePresence>

            {/* 5-Second Micro Progress Indicator Line */}
            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-white/10 overflow-hidden z-10">
              <motion.div
                key={currentSlide.id}
                initial={{ width: "0%" }}
                animate={{ width: isPaused ? undefined : "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="h-full bg-gradient-to-r from-rose-500 via-amber-400 to-rose-500"
              />
            </div>
          </div>

          {/* Slide Title & Description with AnimatePresence */}
          <div className="px-0.5 min-h-[68px] sm:min-h-[76px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <h3 className="text-base sm:text-lg font-bold font-display text-white tracking-tight leading-snug">
                  {currentSlide.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                  {currentSlide.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Action Footer */}
          <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between px-0.5">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentSlide.badge}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 6 }}
                transition={{ duration: 0.3 }}
                className="text-[11px] font-semibold text-rose-400 tracking-wider uppercase"
              >
                {currentSlide.badge}
              </motion.span>
            </AnimatePresence>
            <a
              href="#services"
              className="inline-flex items-center gap-1 text-xs font-semibold text-white/90 hover:text-white transition-colors group/link"
            >
              Explore Solutions <ChevronRight className="w-3.5 h-3.5 text-rose-400 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
