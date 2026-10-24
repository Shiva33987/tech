"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Target,
  Award,
  X,
  ShieldCheck,
  Globe2,
  Layers,
  Sparkles,
  Building2,
} from "lucide-react";
import { useReducedMotion } from "@/providers/ReducedMotionProvider";

export default function AboutSection({ onViewFullPage }: { onViewFullPage?: () => void }) {
  const [isCharterOpen, setIsCharterOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"pillars" | "security" | "governance">("pillars");
  const reducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.08,
        delayChildren: reducedMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: reducedMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0.2 : 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="about"
      className="relative w-full bg-white text-slate-900 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans border-t border-slate-200"
      aria-label="About Us - VR PI Tech Solutions"
    >
      {/* Subtle warm ambient background highlights */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#FA6400]/[0.035] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#E60038]/[0.025] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with Signature Orange Vertical Bar matching Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-row items-end justify-between gap-3 mb-6 sm:mb-8"
        >
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Signature Orange Bar from Reference Design */}
            <div className="w-1.5 sm:w-2 h-8 sm:h-11 rounded-full bg-gradient-to-b from-[#FA6400] to-[#E60038] shadow-[0_0_12px_rgba(250,100,0,0.3)] shrink-0" />
            <div>
              <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#E65100] block mb-0.5">
                WHO WE ARE &amp; WHAT WE STAND FOR
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 font-['Space_Grotesk'] tracking-tight">
                About Us
              </h2>
            </div>
          </div>

          <div className="flex items-center shrink-0">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[10px] sm:text-xs font-mono text-slate-600">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FA6400]" />
              <span className="tracking-wide">VR PI TECH SOLUTIONS</span>
            </span>
          </div>
        </motion.div>

        {/* Main Content Grid: Image on Left & Story/Values on Right */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "-40px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center"
        >
          {/* ========================================================= */}
          {/* LEFT COLUMN: EXECUTIVE LEADERSHIP VISUAL                   */}
          {/* ========================================================= */}
          <motion.div variants={itemVariants} className="lg:col-span-5 relative group">
            {/* Ambient Shadow Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#FA6400]/20 to-[#E60038]/20 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-700 pointer-events-none" />

            {/* Main Visual Card */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl">
              <img
                src="/images/about-team.jpg"
                alt="VR PI Tech Solutions Executive Leadership Team"
                className="w-full aspect-[4/3] sm:aspect-[1.15/1] object-cover object-top transition-transform duration-700 group-hover:scale-102"
                loading="lazy"
              />

              {/* Gradient Bottom Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              {/* Floating Leadership Glass Badge */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 right-3 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-2xl bg-slate-950/85 backdrop-blur-xl border border-white/20 text-white flex items-center justify-between shadow-xl">
                <div>
                  <div className="text-xs sm:text-sm font-bold font-['Space_Grotesk'] tracking-tight text-white flex items-center gap-1.5 sm:gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FA6400] animate-pulse shrink-0" />
                    <span>VRPI Executive Leadership</span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-slate-300 mt-0.5">
                    Integrity • Excellence • Innovation
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider uppercase text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                    ISO 27001
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: BRAND STORY, VALUES & EXPLORE CTA           */}
          {/* ========================================================= */}
          <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col justify-center">
            {/* Mission Statement Quote from User Reference Design */}
            <div className="relative pl-0 sm:pl-2 mb-3.5 sm:mb-4">
              <p className="text-sm sm:text-base lg:text-[17px] leading-relaxed text-slate-700 font-normal">
                &ldquo;
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E65100] via-[#FA6400] to-[#E60038]">
                  VR PI Tech Solutions
                </span>
                &rdquo; thrives as a dynamic and forward-thinking enterprise, specializing in cutting-edge industry solutions. Our core emphasis on pioneering software technology ensures the delivery of top-tier services, all while nurturing a culture of creativity, inclusivity, and unwavering excellence. By upholding integrity, fostering innovation, and promoting collaboration, we aspire to propel growth, generate value, and effect positive change within our industry and wider community.
              </p>
            </div>

            {/* Strategic Pillars Tabs - cleanly scrollable horizontally without wrapping */}
            <div className="flex items-center gap-2 mb-3 border-b border-slate-200 pb-2 overflow-x-auto no-scrollbar scroll-smooth">
              <button
                type="button"
                onClick={() => setActiveTab("pillars")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeTab === "pillars"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                Core Pillars
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("security")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeTab === "security"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                Security &amp; Compliance
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("governance")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeTab === "governance"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                Corporate Governance
              </button>
            </div>

            {/* Tab 1: Core Pillars - 3 Cards matching desktop arrangement on mobile */}
            {activeTab === "pillars" && (
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-5">
                <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 hover:bg-slate-100/90 border border-slate-200/90 transition-all shadow-sm group/p flex flex-col justify-between">
                  <div>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#FA6400]/10 border border-[#FA6400]/25 flex items-center justify-center text-[#E65100] mb-2 sm:mb-2.5 group-hover/p:scale-105 transition-transform">
                      <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <h3 className="font-bold text-xs sm:text-sm text-slate-900 font-['Space_Grotesk'] mb-1 leading-tight">
                      Unwavering Excellence
                    </h3>
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-600 leading-normal sm:leading-relaxed">
                    Enterprise-grade standards and high-velocity execution.
                  </p>
                </div>

                <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 hover:bg-slate-100/90 border border-slate-200/90 transition-all shadow-sm group/p flex flex-col justify-between">
                  <div>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#E60038]/10 border border-[#E60038]/25 flex items-center justify-center text-[#E60038] mb-2 sm:mb-2.5 group-hover/p:scale-105 transition-transform">
                      <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <h3 className="font-bold text-xs sm:text-sm text-slate-900 font-['Space_Grotesk'] mb-1 leading-tight">
                      Pioneering Tech
                    </h3>
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-600 leading-normal sm:leading-relaxed">
                    Autonomous AI, robotics and hyper-scale cloud platforms.
                  </p>
                </div>

                <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 hover:bg-slate-100/90 border border-slate-200/90 transition-all shadow-sm group/p flex flex-col justify-between">
                  <div>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-600 mb-2 sm:mb-2.5 group-hover/p:scale-105 transition-transform">
                      <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <h3 className="font-bold text-xs sm:text-sm text-slate-900 font-['Space_Grotesk'] mb-1 leading-tight">
                      Collaborative Value
                    </h3>
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-600 leading-normal sm:leading-relaxed">
                    Mission-critical partnerships that propel sustained growth.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 2: Security & Compliance - 3 Cards matching screenshot on mobile */}
            {activeTab === "security" && (
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-5">
                <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 mb-1.5 sm:mb-2" />
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-1 leading-tight">ISO 27001 Certified</h4>
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-600 leading-normal sm:leading-relaxed">
                    Comprehensive info security covering all cloud nodes.
                  </p>
                </div>
                <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mb-1.5 sm:mb-2" />
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-1 leading-tight">SOC 2 Type II</h4>
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-600 leading-normal sm:leading-relaxed">
                    Third-party verified compliance for data confidentiality.
                  </p>
                </div>
                <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <Globe2 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mb-1.5 sm:mb-2" />
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-1 leading-tight">GDPR &amp; DPDP</h4>
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-600 leading-normal sm:leading-relaxed">
                    Strict privacy preservation and local data enclaves.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 3: Corporate Governance - 3 Cards matching desktop on mobile */}
            {activeTab === "governance" && (
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-5">
                <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 mb-1.5 sm:mb-2" />
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-1 leading-tight">Board Oversight</h4>
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-600 leading-normal sm:leading-relaxed">
                    Independent governance ensuring fiduciary rigor.
                  </p>
                </div>
                <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600 mb-1.5 sm:mb-2" />
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-1 leading-tight">ESG Commitment</h4>
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-600 leading-normal sm:leading-relaxed">
                    100% carbon-neutral cloud compute routing.
                  </p>
                </div>
                <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 mb-1.5 sm:mb-2" />
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-1 leading-tight">Open Source R&amp;D</h4>
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-600 leading-normal sm:leading-relaxed">
                    Contributing foundational tools to Linux &amp; Apache.
                  </p>
                </div>
              </div>
            )}

            {/* Action Row: Orange "Explore Us" Button & Enterprise Quick Stats side by side */}
            <div className="flex flex-row items-center gap-4 sm:gap-6 pt-2">
              {/* Signature Orange Explore Us Button */}
              <motion.button
                type="button"
                whileHover={reducedMotion ? {} : { scale: 1.03 }}
                whileTap={reducedMotion ? {} : { scale: 0.97 }}
                onClick={() => {
                  if (onViewFullPage) {
                    onViewFullPage();
                  } else {
                    setIsCharterOpen(true);
                  }
                }}
                className="shrink-0 inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#FA6400] to-[#E60038] hover:from-[#FF7A00] hover:to-[#FF1A4B] shadow-[0_8px_25px_rgba(250,100,0,0.35)] hover:shadow-[0_10px_35px_rgba(250,100,0,0.55)] transition-all duration-300 cursor-pointer group"
              >
                <span>Explore Us</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>

              {/* Quick Credentials - Horizontal layout with vertical divider */}
              <div className="flex items-center gap-3 sm:gap-6 text-xs font-mono text-slate-600 border-l border-slate-200 pl-3.5 sm:pl-6">
                <div>
                  <span className="font-bold text-slate-900 font-sans text-xs sm:text-sm block leading-tight">Est. 2021</span>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 block">Incorporated</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900 font-sans text-xs sm:text-sm block leading-tight">50+</span>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 block whitespace-nowrap">Enterprises Scaled</span>
                </div>
                <div>
                  <span className="font-bold text-[#E65100] font-sans text-xs sm:text-sm block leading-tight">100%</span>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 block whitespace-nowrap">Node SLA</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ========================================================= */}
      {/* ENTERPRISE CHARTER & CAPABILITIES MODAL                   */}
      {/* ========================================================= */}
      <AnimatePresence>
        {isCharterOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCharterOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative w-full max-w-2xl bg-[#0C1017] border border-white/15 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsCharterOpen(false)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Close charter modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1.5 h-6 rounded-full bg-[#FA6400]" />
                <span className="text-xs font-mono font-bold tracking-widest text-[#FA6400] uppercase">
                  ENTERPRISE CHARTER &amp; MISSION
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black font-['Space_Grotesk'] text-white mb-4">
                VR PI Tech Solutions
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Specializing in full-lifecycle digital engineering, advanced AI neural pipelines, and high-availability cloud infrastructure. We bridge cutting-edge research with industrial-grade deployment to empower global organizations.
              </p>

              {/* Guiding Principles */}
              <div className="space-y-3 mb-6">
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Integrity &amp; Rigor</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Strict ethical standards, enterprise data governance, and uncompromising software quality.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FA6400] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Innovation that Scales</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Empowering partners with production-ready AI models and cloud microservices.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E60038] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Global Social &amp; Economic Impact</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Generating shared value for enterprises, developer communities, and the broader digital ecosystem.
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href="#contact"
                  onClick={() => setIsCharterOpen(false)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#FA6400] to-[#E60038] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer"
                >
                  <span>Connect with Our Leadership</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={() => setIsCharterOpen(false)}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-colors cursor-pointer"
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
