"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "motion/react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  Mail,
  Building,
  User,
  FileText,
  Terminal,
  Lock,
  ArrowRight,
  PhoneCall,
  MapPin,
  Calendar,
  Sparkles,
  Copy,
  Check,
  ChevronDown,
  HelpCircle,
  Globe,
  MessageSquare,
} from "lucide-react";
import { useReducedMotion } from "@/providers/ReducedMotionProvider";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  workEmail: z.string().email("Please provide a valid corporate work email"),
  organization: z.string().min(2, "Organization or company name must be at least 2 characters"),
  projectType: z.string().min(1, "Please select an engineering practice area"),
  budgetBracket: z.string().min(1, "Please select an estimated investment scope"),
  timeline: z.string().min(1, "Please select a target deployment timeline"),
  message: z.string().min(10, "Please describe your project scope (minimum 10 characters)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const PRACTICE_AREAS = [
  "Mobile Applications",
  "Enterprise Web Platforms",
  "AI & Neural Systems",
  "BPO & Operations",
  "DOOH Smart Media",
  "Co-Working Tech Hubs",
];

const BUDGET_BRACKETS = ["$25k - $50k", "$50k - $100k", "$100k - $250k", "$250k+"];

const TIMELINES = ["Immediate (< 30 days)", "1 - 3 Months", "Enterprise Roadmap"];

const FAQS = [
  {
    question: "What happens after I submit a technical brief?",
    answer:
      "Your submission is assigned directly to a Principal Systems Architect. We evaluate feasibility, initial architecture dependencies, and SLA criteria, responding with a detailed scheduling brief within 2 business hours.",
  },
  {
    question: "Do we execute a mutual NDA prior to detailed discussions?",
    answer:
      "Yes. We provide our standard bilateral NDA or can review and countersign your enterprise legal counsel's confidentiality agreement before any proprietary code or specifications are shared.",
  },
  {
    question: "How do your engineering pods integrate with in-house teams?",
    answer:
      "Our engineering pods operate as high-velocity specialized extensions. We integrate directly into your Jira, GitHub Enterprise, and Slack channels, participating in daily async standups with continuous GitOps delivery.",
  },
  {
    question: "Can VRPI modernize existing legacy software without downtime?",
    answer:
      "Yes. We specialize in strangler-fig pattern migrations and edge routing transitions, progressively swapping out monolithic systems while guaranteeing 99.999% uninterrupted uptime.",
  },
];

const GLOBAL_HUBS = [
  {
    city: "Wanaparthy",
    type: "Registered Corporate Headquarters",
    address: "2/27/163, Gandhi Nagar Street, Near Jammi Chettu, Wanaparthy, Telangana 509103",
    email: "info@vrpigroup.co.in",
    phone: "+91 8790946714",
    status: "Corporate HQ",
  },
  {
    city: "Hyderabad",
    type: "Cloud Infrastructure & High-Availability Mesh",
    address: "HITEC City Cyber Towers, Phase II, Hyderabad, Telangana 500081",
    email: "info@vrpigroup.co.in",
    phone: "+91 8790946714",
    status: "Active Production Hub",
  },
  {
    city: "Bengaluru",
    type: "AI & Smart Media Engineering Lab",
    address: "Outer Ring Road Tech Corridor, Bengaluru, Karnataka 560103",
    email: "info@vrpigroup.co.in",
    phone: "+91 8790946714",
    status: "Active Production Hub",
  },
];

export default function ContactPage({ onNavigateHome }: { onNavigateHome?: () => void }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const prefersReducedMotion = useReducedMotion();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      workEmail: "",
      organization: "",
      projectType: "Mobile Applications",
      budgetBracket: "$50k - $100k",
      timeline: "Immediate (< 30 days)",
      message: "",
    },
  });

  const selectedProjectType = watch("projectType");
  const selectedBudget = watch("budgetBracket");
  const selectedTimeline = watch("timeline");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 75,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#FA6400", "#E60038", "#FFB703"],
      });
    } catch {
      // safe fallback
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("info@vrpigroup.co.in");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="w-full bg-[#080B10] text-white min-h-screen pt-24 sm:pt-28 pb-16 font-sans relative">
      {/* Refined Enterprise Ambient Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle, highly diffused top ambient wash */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[420px] bg-gradient-to-b from-[#FA6400]/[0.05] via-[#E60038]/[0.03] to-transparent blur-3xl pointer-events-none" />
        {/* Crisp enterprise micro-grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* HERO BANNER & BREADCRUMBS                                 */}
        {/* ========================================================= */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-16"
        >
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 mb-6 text-xs font-mono text-slate-400">
            <button
              type="button"
              onClick={onNavigateHome}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 group"
            >
              <span className="group-hover:-translate-x-0.5 transition-transform">&larr;</span>
              <span>Home</span>
            </button>
            <span>/</span>
            <span className="text-[#FA6400] font-semibold">Contact Us &amp; Technical Consultation</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 sm:gap-4 mb-3">
                <div className="w-1.5 sm:w-2 h-10 sm:h-12 rounded-full bg-gradient-to-b from-[#FA6400] to-[#E60038] shadow-[0_0_12px_rgba(250,100,0,0.35)] shrink-0" />
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FA6400] block mb-0.5">
                    DIRECT PRINCIPAL ARCHITECT CONSULTATION
                  </span>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Space_Grotesk'] text-white tracking-tight leading-[1.1]">
                    Contact Us
                  </h1>
                </div>
              </div>
              <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-normal pl-5">
                Engage directly with our Principal Systems Architects and Engineering Fellows. Zero intermediate sales reps. Sub-2 hour guaranteed triage, strict confidentiality, and actionable blueprints.
              </p>
            </div>

            {/* Quick Guarantees Strip */}
            <div className="flex lg:flex-col gap-4 sm:gap-6 bg-white/[0.03] border border-white/10 p-5 rounded-2xl shrink-0 shadow-lg">
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk'] block">
                  &lt; 2 Hours
                </span>
                <span className="text-xs font-mono text-slate-400">Guaranteed Response SLA</span>
              </div>
              <div className="lg:border-t lg:border-white/10 lg:pt-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#FA6400] font-['Space_Grotesk'] block">
                  Mutual NDA
                </span>
                <span className="text-xs font-mono text-slate-400">Enterprise IP Protection</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* MAIN COMMAND GRID: COORDINATES + INTERACTIVE BRIEF FORM   */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20">
          {/* ======================================================= */}
          {/* LEFT COLUMN: DIRECT INQUIRY CHANNELS & SLOTS            */}
          {/* ======================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, x: -30 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#FA6400] mb-4">
                <Terminal className="w-3.5 h-3.5 text-amber-400" />
                <span>DIRECT ACCESS PROTOCOL</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-white tracking-tight leading-snug">
                Let&rsquo;s engineer your next mission-critical system.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed font-normal">
                Whether you need sub-millisecond fintech transaction pipelines, automated DOOH networks, or an end-to-end cloud refactoring, our systems directors are ready to scope your roadmap.
              </p>

              {/* SLA Guarantees Cards */}
              <div className="mt-8 space-y-3.5">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#FA6400]/15 border border-[#FA6400]/30 flex items-center justify-center text-[#FA6400] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white font-['Space_Grotesk']">
                      Guaranteed SLA Response &lt; 2 Hours
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Your technical brief is reviewed and triaged by staff engineers within 120 minutes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#E60038]/15 border border-[#E60038]/30 flex items-center justify-center text-[#E60038] shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white font-['Space_Grotesk']">
                      Mutual NDA &amp; IP Protection
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Strict enterprise confidentiality protocols protect all shared specifications and ideas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white font-['Space_Grotesk']">
                      Zero Junior Handoffs
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Every project roadmap is scoped and overseen by senior engineering fellows.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Direct Channel Box with One-Click Copy */}
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400 block font-bold">
                DIRECT INQUIRY CHANNELS
              </span>

              <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/10">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <Mail className="w-4 h-4 text-[#FA6400] shrink-0" />
                  <a
                    href="mailto:info@vrpigroup.co.in"
                    className="hover:text-white transition-colors font-mono"
                  >
                    info@vrpigroup.co.in
                  </a>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/10 hover:bg-white/20 text-white flex items-center gap-1 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200 p-2">
                <PhoneCall className="w-4 h-4 text-[#E60038] shrink-0" />
                <a
                  href="tel:+918790946714"
                  className="hover:text-white transition-colors font-mono"
                >
                  +91 8790946714 • Mon - Sat (09:00 - 19:00 IST)
                </a>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 p-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  2/27/163, Gandhi Nagar Street, Near Jammi Chettu, Wanaparthy, Telangana 509103, India
                </span>
              </div>
            </div>
          </div>

          {/* ======================================================= */}
          {/* RIGHT COLUMN: INTERACTIVE ARCHITECTURAL SCOPE BUILDER   */}
          {/* ======================================================= */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: 30 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0c1017] border border-white/[0.12] shadow-2xl relative overflow-hidden">
              {/* Top Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FA6400] via-[#E60038] to-[#FFB703]" />

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold mb-2 block">
                    BRIEF DISPATCHED • REF #VRPI-REQ-84920
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white mb-2">
                    Architectural Brief Received
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md leading-relaxed mb-8">
                    Your brief has been assigned to a Principal Systems Architect. We will review your project requirements and reply to your work email within 2 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      reset();
                    }}
                    className="px-6 py-2.5 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer border border-white/15"
                  >
                    Submit Another Brief
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        {...register("fullName")}
                        type="text"
                        placeholder="Satya Nadella"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:border-[#FA6400] focus:outline-none transition-colors"
                      />
                      {errors.fullName && (
                        <span className="text-[11px] text-rose-400 mt-1 block">
                          {errors.fullName.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                        Corporate Work Email *
                      </label>
                      <input
                        {...register("workEmail")}
                        type="email"
                        placeholder="satya@microsoft.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:border-[#FA6400] focus:outline-none transition-colors"
                      />
                      {errors.workEmail && (
                        <span className="text-[11px] text-rose-400 mt-1 block">
                          {errors.workEmail.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                      Organization / Company *
                    </label>
                    <input
                      {...register("organization")}
                      type="text"
                      placeholder="Microsoft / Acme Capital Corp"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:border-[#FA6400] focus:outline-none transition-colors"
                    />
                    {errors.organization && (
                      <span className="text-[11px] text-rose-400 mt-1 block">
                        {errors.organization.message}
                      </span>
                    )}
                  </div>

                  {/* Practice Area Chips */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                      Engineering Practice Area *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {PRACTICE_AREAS.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setValue("projectType", type)}
                          className={`px-3 py-2.5 rounded-xl text-xs font-sans font-medium text-left transition-all cursor-pointer border ${
                            selectedProjectType === type
                              ? "bg-white text-black font-bold border-white shadow-[0_0_15px_rgba(255,255,255,0.25)]"
                              : "bg-white/[0.03] border-white/10 text-slate-300 hover:border-white/25 hover:text-white"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Bracket */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                      Estimated Project Scope / Investment *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {BUDGET_BRACKETS.map((budget) => (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => setValue("budgetBracket", budget)}
                          className={`px-3 py-2.5 rounded-xl text-xs font-mono font-medium text-center transition-all cursor-pointer border ${
                            selectedBudget === budget
                              ? "bg-gradient-to-r from-[#FA6400] to-[#E60038] text-white font-bold border-transparent shadow-[0_0_15px_rgba(250,100,0,0.35)]"
                              : "bg-white/[0.03] border-white/10 text-slate-300 hover:border-white/25 hover:text-white"
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline Selector */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                      Target Deployment Timeline *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {TIMELINES.map((tl) => (
                        <button
                          key={tl}
                          type="button"
                          onClick={() => setValue("timeline", tl)}
                          className={`px-3 py-2.5 rounded-xl text-xs font-sans font-medium text-center transition-all cursor-pointer border ${
                            selectedTimeline === tl
                              ? "bg-white text-black font-bold border-white shadow-[0_0_15px_rgba(255,255,255,0.25)]"
                              : "bg-white/[0.03] border-white/10 text-slate-300 hover:border-white/25 hover:text-white"
                          }`}
                        >
                          {tl}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Scope */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                      Technical Scope &amp; Architecture Goals *
                    </label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Outline your systems requirements, current bottlenecks, target throughput, or delivery timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:border-[#FA6400] focus:outline-none transition-colors leading-relaxed"
                    />
                    {errors.message && (
                      <span className="text-[11px] text-rose-400 mt-1 block">
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  {/* Submit CTA Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#FA6400] via-[#FF4500] to-[#E60038] hover:brightness-110 active:scale-[0.99] transition-all shadow-[0_8px_30px_rgba(250,100,0,0.35)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? "Encrypting & Dispatching..." : "Submit Technical Brief"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] font-mono text-center text-slate-400">
                    PROTECTED BY MUTUAL NDA • 256-BIT ENCRYPTED TRANSMISSION • NO MARKETING SOLICITATION
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* REGIONAL HUBS GRID (Bengaluru, Mumbai, Hyderabad)         */}
        {/* ========================================================= */}
        <section className="mb-20">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FA6400] block mb-2">
              PHYSICAL &amp; CLOUD INFRASTRUCTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight">
              Our Regional Engineering Hubs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GLOBAL_HUBS.map((hub, idx) => (
              <motion.div
                key={hub.city}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 25 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: prefersReducedMotion ? 0 : idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="p-6 rounded-3xl bg-[#0b0e15] border border-white/10 hover:border-white/25 transition-all shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-2xl font-bold font-['Space_Grotesk'] text-white">
                      {hub.city}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                      {hub.status}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-[#FA6400] font-semibold block mb-3">
                    {hub.type}
                  </span>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {hub.address}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-1.5 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-slate-500" />
                    <span>{hub.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneCall className="w-3.5 h-3.5 text-slate-500" />
                    <span>{hub.phone}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* FREQUENTLY ASKED QUESTIONS ACCORDION                      */}
        {/* ========================================================= */}
        <section className="mb-16 rounded-3xl bg-[#090C12] border border-white/10 p-6 sm:p-10 shadow-2xl">
          <div className="max-w-2xl mb-8">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FA6400] block mb-2">
              ENGAGEMENT METHODOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white font-['Space_Grotesk']">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 text-[#FA6400]" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/[0.05] pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
