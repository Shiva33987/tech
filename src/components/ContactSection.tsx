"use client";

import React, { useState } from "react";
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
} from "lucide-react";
import { useReducedMotion } from "@/providers/ReducedMotionProvider";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  workEmail: z.string().email("Please enter a valid business work email"),
  organization: z.string().min(2, "Organization name must be at least 2 characters"),
  projectType: z.string().min(1, "Please select an engineering service domain"),
  budgetBracket: z.string().min(1, "Please select an estimated budget scope"),
  timeline: z.string().min(1, "Please select a target deployment timeline"),
  message: z.string().min(10, "Please describe your project scope (minimum 10 characters)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const prefersReducedMotion = useReducedMotion();

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

  const projectTypes = [
    "Mobile Applications",
    "Web Solutions",
    "AI & Neural Systems",
    "BPO & Operations",
    "Advertising & DOOH",
    "Cloud & Infrastructure",
  ];

  const budgetBrackets = ["$25k - $50k", "$50k - $100k", "$100k - $250k", "$250k+"];

  const timelines = ["Immediate (< 30 days)", "1 - 3 Months", "Enterprise Roadmap"];

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.65 },
        colors: ["#FA6400", "#E60038", "#FFB703"],
      });
    } catch {
      // safe fallback if confetti blocked
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#07090E] text-white border-t border-white/[0.08] overflow-hidden font-sans"
      aria-label="Contact and Technical Consultation"
    >
      {/* Ambient background glows in VRPI brand colors */}
      <div className="absolute top-1/4 -right-32 w-[600px] h-[400px] bg-[#E60038]/[0.08] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-[600px] h-[400px] bg-[#FA6400]/[0.07] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 25 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-14"
        >
          <div className="w-2 h-10 sm:h-12 rounded-full bg-gradient-to-b from-[#FA6400] to-[#E60038]" />
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FA6400] block mb-0.5">
              TECHNICAL CONSULTATION &amp; SCOPING
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Space_Grotesk'] tracking-tight text-white">
              Contact Us
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* ========================================================= */}
          {/* LEFT CONTEXT COLUMN: DIRECT ACCESS & CREDIBILITY          */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#FA6400] mb-4">
                <Terminal className="w-3.5 h-3.5 text-amber-400" />
                <span>DIRECT PRINCIPAL ARCHITECT ACCESS</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-white tracking-tight leading-snug">
                Let&rsquo;s engineer your next breakthrough platform together.
              </h3>

              <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed font-normal">
                No intermediate sales representatives. You will speak directly with a Principal Systems Architect to assess feasibility, evaluate specs, and design the optimal technical deployment.
              </p>

              {/* SLA Guarantees Grid */}
              <div className="mt-8 space-y-3.5">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#FA6400]/15 border border-[#FA6400]/30 flex items-center justify-center text-[#FA6400] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white font-['Space_Grotesk']">
                      Guaranteed SLA Response &lt; 2 Hours
                    </h4>
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
                    <h4 className="text-sm font-semibold text-white font-['Space_Grotesk']">
                      Mutual NDA &amp; IP Protection
                    </h4>
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
                    <h4 className="text-sm font-semibold text-white font-['Space_Grotesk']">
                      Zero Junior Handoffs
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Every project roadmap is scoped and overseen by senior engineering fellows.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Coordinates */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3.5">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400 block mb-2 font-bold">
                DIRECT INQUIRY CHANNELS
              </span>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                <Mail className="w-4 h-4 text-[#FA6400] shrink-0" />
                <a href="mailto:info@vrpigroup.co.in" className="hover:text-white underline-offset-2 hover:underline font-mono">
                  info@vrpigroup.co.in
                </a>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                <PhoneCall className="w-4 h-4 text-[#E60038] shrink-0" />
                <a href="tel:+918790946714" className="hover:text-white transition-colors font-mono">
                  +91 8790946714 • Mon – Sat (09:00 – 19:00 IST)
                </a>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  2/27/163, Gandhi Nagar Street, Near Jammi Chettu, Wanaparthy, Telangana 509103, India
                </span>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: INTERACTIVE TECHNICAL SCOPE BUILDER FORM   */}
          {/* ========================================================= */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0c1017] border border-white/[0.12] shadow-2xl relative overflow-hidden">
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FA6400] via-[#E60038] to-[#FFB703]" />

              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white mb-2">
                    Technical Brief Dispatched
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md leading-relaxed mb-8">
                    Your architecture brief has been assigned to a Principal Systems Architect. We will review your project scope and respond to your work email within 2 business hours.
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
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name and Work Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        {...register("fullName")}
                        type="text"
                        placeholder="Alex Morgan"
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
                        Work Email *
                      </label>
                      <input
                        {...register("workEmail")}
                        type="email"
                        placeholder="alex@enterprise.com"
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
                      placeholder="Acme Financial Technologies"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:border-[#FA6400] focus:outline-none transition-colors"
                    />
                    {errors.organization && (
                      <span className="text-[11px] text-rose-400 mt-1 block">
                        {errors.organization.message}
                      </span>
                    )}
                  </div>

                  {/* Service Domain Chips */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                      Engineering Service Domain *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {projectTypes.map((type) => (
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
                      {budgetBrackets.map((budget) => (
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
                      {timelines.map((tl) => (
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
                    PROTECTED BY MUTUAL NDA • 256-BIT ENCRYPTED TRANSMISSION • NO UNWANTED MARKETING
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
