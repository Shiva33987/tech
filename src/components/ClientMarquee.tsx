"use client";

import React, { useState } from "react";
import { ShieldCheck, Zap, Building2, Sparkles, CheckCircle2 } from "lucide-react";

interface ClientBrand {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  brandColor: string;
  glowColor: string;
  badgeBg: string;
  renderLogo: () => React.ReactNode;
}

// ----------------------------------------------------------------------
// High-Fidelity Exact Vector Logo Components with True Brand Colors
// ----------------------------------------------------------------------
const CLIENTS_ROW_1: ClientBrand[] = [
  {
    id: "microsoft",
    name: "Microsoft",
    subtitle: "Enterprise Cloud & AI Systems",
    category: "Cloud Pioneer",
    brandColor: "#00A4EF",
    glowColor: "rgba(0, 164, 239, 0.4)",
    badgeBg: "rgba(0, 164, 239, 0.12)",
    renderLogo: () => (
      <div className="bg-white px-3 py-1.5 rounded-lg shadow-md flex items-center gap-2 border border-slate-100 shrink-0">
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
          <rect x="1" y="1" width="10" height="10" fill="#F25022" />
          <rect x="13" y="1" width="10" height="10" fill="#7FBA00" />
          <rect x="1" y="13" width="10" height="10" fill="#00A4EF" />
          <rect x="13" y="13" width="10" height="10" fill="#FFB900" />
        </svg>
        <span className="font-semibold text-slate-800 text-[15px] tracking-tight font-sans">
          Microsoft
        </span>
      </div>
    ),
  },
  {
    id: "icici-lombard",
    name: "ICICI Lombard",
    subtitle: "Nibhaye Vaade • General Insurance",
    category: "General Insurance",
    brandColor: "#F58220",
    glowColor: "rgba(245, 130, 32, 0.4)",
    badgeBg: "rgba(245, 130, 32, 0.12)",
    renderLogo: () => (
      <div className="bg-white px-3 py-1.5 rounded-lg shadow-md flex items-center gap-2 border border-slate-100 shrink-0">
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#9E1B32] to-[#F58220] flex items-center justify-center p-0.5">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white" fill="currentColor">
            <path d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4zm-1 16.5l-4.5-4.5 1.41-1.41L11 14.67l6.59-6.59L19 9.5 11 18.5z" />
          </svg>
        </div>
        <div className="flex flex-col text-left">
          <span className="font-black text-[#9E1B32] text-[13px] leading-tight tracking-tight">
            ICICI<span className="text-[#0B2545] font-bold ml-1">Lombard</span>
          </span>
          <span className="text-[8px] font-bold text-[#F58220] tracking-wider leading-none">
            Nibhaye Vaade
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "axis-bank",
    name: "AXIS BANK",
    subtitle: "Commercial & Digital Banking",
    category: "Premier Banking",
    brandColor: "#97144D",
    glowColor: "rgba(151, 20, 77, 0.45)",
    badgeBg: "rgba(151, 20, 77, 0.15)",
    renderLogo: () => (
      <div className="bg-white px-3 py-1.5 rounded-lg shadow-md flex items-center gap-2 border border-slate-100 shrink-0">
        <div className="w-5 h-5 rounded bg-[#97144D] flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white" fill="currentColor">
            <path d="M12 3L2 21h5.5l4.5-9 4.5 9H22L12 3zm0 5.5l2.7 5.5h-5.4L12 8.5z" />
          </svg>
        </div>
        <span className="font-black text-[#97144D] text-[13px] tracking-tight">
          AXIS BANK
        </span>
      </div>
    ),
  },
  {
    id: "godaddy",
    name: "GoDaddy",
    subtitle: "Cloud Infrastructure & Domains",
    category: "Cloud Ecosystem",
    brandColor: "#1BDBDB",
    glowColor: "rgba(27, 219, 219, 0.4)",
    badgeBg: "rgba(27, 219, 219, 0.12)",
    renderLogo: () => (
      <div className="bg-white px-3 py-1.5 rounded-lg shadow-md flex items-center gap-2 border border-slate-100 shrink-0">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <span className="font-black text-slate-900 text-[14px] tracking-tight">
          GoDaddy
        </span>
      </div>
    ),
  },
  {
    id: "hcltech",
    name: "HCLTech",
    subtitle: "Supercharging Next-Gen IT",
    category: "Global IT Services",
    brandColor: "#0072CE",
    glowColor: "rgba(0, 114, 206, 0.4)",
    badgeBg: "rgba(0, 114, 206, 0.12)",
    renderLogo: () => (
      <div className="bg-white px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 border border-slate-100 shrink-0">
        <span className="font-black italic text-[#0066B3] text-[18px] tracking-tighter leading-none">
          HCL
        </span>
        <span className="font-bold text-[#0066B3] text-[12px] tracking-tight">
          Tech
        </span>
      </div>
    ),
  },
  {
    id: "yash-tech",
    name: "YASH Technologies",
    subtitle: "More than what you think.",
    category: "Enterprise IT",
    brandColor: "#DC2626",
    glowColor: "rgba(220, 38, 38, 0.4)",
    badgeBg: "rgba(220, 38, 38, 0.12)",
    renderLogo: () => (
      <div className="bg-white px-3 py-1.5 rounded-lg shadow-md flex flex-col items-center justify-center border border-slate-100 shrink-0">
        <div className="flex items-center gap-1">
          <span className="font-black text-[#003399] text-[13px] tracking-wider leading-none">
            YASH
          </span>
          <span className="text-[9px] font-semibold text-slate-600 leading-none">
            Technologies
          </span>
        </div>
        <div className="w-full h-0.5 bg-gradient-to-r from-red-500 to-[#003399] rounded-full mt-0.5" />
      </div>
    ),
  },
  {
    id: "lazypay",
    name: "LAZYPAY",
    subtitle: "Instant Digital Credit & BNPL",
    category: "Fintech Leader",
    brandColor: "#FF2E63",
    glowColor: "rgba(255, 46, 99, 0.45)",
    badgeBg: "rgba(255, 46, 99, 0.15)",
    renderLogo: () => (
      <div className="bg-white px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 border border-slate-100 shrink-0">
        <div className="w-4 h-4 bg-[#FF2E63] flex items-center justify-center clip-triangle">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white" fill="currentColor">
            <path d="M6 3l12 9-12 9V3z" />
          </svg>
        </div>
        <span className="font-black text-slate-900 text-[13px] tracking-tight">
          LAZYPAY
        </span>
      </div>
    ),
  },
  {
    id: "savyasaachi",
    name: "Savyasaachi",
    subtitle: "SS Intelligence & Tech Innovations",
    category: "Software Engineering",
    brandColor: "#06B6D4",
    glowColor: "rgba(6, 182, 212, 0.4)",
    badgeBg: "rgba(6, 182, 212, 0.12)",
    renderLogo: () => (
      <div className="bg-white px-3 py-1.5 rounded-lg shadow-md flex items-center gap-2 border border-slate-100 shrink-0">
        <div className="w-5 h-5 rounded-full border-2 border-cyan-500 flex items-center justify-center">
          <span className="text-[9px] font-black text-cyan-600 leading-none">SS</span>
        </div>
        <span className="font-bold text-[#083344] text-[13px] tracking-tight">
          Savyasaachi
        </span>
      </div>
    ),
  },
  {
    id: "venkys",
    name: "Venky's",
    subtitle: "Agro Sciences & FMCG Conglomerate",
    category: "Consumer Goods",
    brandColor: "#DC2626",
    glowColor: "rgba(220, 38, 38, 0.4)",
    badgeBg: "rgba(220, 38, 38, 0.12)",
    renderLogo: () => (
      <div className="bg-white px-3 py-1.5 rounded-lg shadow-md flex items-center gap-2 border border-slate-100 shrink-0">
        <div className="w-5 h-5 rounded-full bg-[#B91C1C] border border-amber-400 flex items-center justify-center shadow-sm">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-amber-300" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
        </div>
        <span className="font-black text-[#B91C1C] text-[13px] tracking-tight">
          Venky's
        </span>
      </div>
    ),
  },
  {
    id: "shopse",
    name: "ShopSe",
    subtitle: "Point of Sale Instant EMI Finance",
    category: "Digital Finance",
    brandColor: "#F59E0B",
    glowColor: "rgba(245, 158, 11, 0.4)",
    badgeBg: "rgba(245, 158, 11, 0.12)",
    renderLogo: () => (
      <div className="bg-[#0A2540] px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 border border-slate-700 shrink-0">
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="font-extrabold text-white text-[12px] leading-tight">
            ShopSe
          </span>
          <span className="text-[7px] font-bold text-amber-400 uppercase tracking-widest leading-none">
            Digital Finance
          </span>
        </div>
      </div>
    ),
  },
];

const CLIENTS_ROW_2: ClientBrand[] = [
  {
    id: "kotak-bank",
    name: "Kotak Mahindra Bank",
    subtitle: "Commercial & Private Wealth Banking",
    category: "Banking Titan",
    brandColor: "#ED1C24",
    glowColor: "rgba(237, 28, 36, 0.45)",
    badgeBg: "rgba(237, 28, 36, 0.15)",
    renderLogo: () => (
      <div className="bg-white px-3 py-1.5 rounded-lg shadow-md flex items-center gap-2 border border-slate-100 shrink-0">
        <div className="w-5 h-5 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728m-12.728 0a9 9 0 010-12.728m3.536 3.536a4 4 0 010 5.656m5.656 0a4 4 0 010-5.656" />
          </svg>
        </div>
        <div className="flex flex-col text-left">
          <span className="font-black text-[#ED1C24] text-[13px] leading-tight">
            kotak
          </span>
          <span className="text-[8px] font-semibold text-[#003366] leading-none">
            Kotak Mahindra Bank
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "sbi-life",
    name: "SBI Life",
    subtitle: "Apne liye. Apno ke liye.",
    category: "Life & Wealth",
    brandColor: "#008CD5",
    glowColor: "rgba(0, 140, 213, 0.45)",
    badgeBg: "rgba(0, 140, 213, 0.15)",
    renderLogo: () => (
      <div className="bg-white px-3 py-1.5 rounded-lg shadow-md flex items-center gap-2 border border-slate-100 shrink-0">
        <div className="w-5 h-5 rounded-full bg-[#008CD5] flex items-center justify-center shadow-sm">
          <div className="w-2.5 h-2.5 rounded-full bg-white flex items-center justify-center">
            <div className="w-1 h-1.5 bg-[#008CD5] rounded-b-sm" />
          </div>
        </div>
        <div className="flex flex-col text-left">
          <span className="font-black text-[#0B2545] text-[13px] leading-tight">
            SBI Life
          </span>
          <span className="text-[8px] font-medium text-[#7C3AED] leading-none">
            Apne liye. Apno ke liye.
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "mahindra-brokers",
    name: "Mahindra Insurance",
    subtitle: "Corporate Risk & Reinsurance Brokers",
    category: "InsurTech & Brokerage",
    brandColor: "#E31837",
    glowColor: "rgba(227, 24, 55, 0.45)",
    badgeBg: "rgba(227, 24, 55, 0.15)",
    renderLogo: () => (
      <div className="bg-white px-3 py-1.5 rounded-lg shadow-md flex flex-col text-left border border-slate-100 shrink-0">
        <span className="font-black text-[#E31837] text-[12px] tracking-tight leading-tight">
          mahindra
        </span>
        <span className="font-extrabold text-slate-800 text-[8px] tracking-wider uppercase leading-none">
          INSURANCE BROKERS
        </span>
      </div>
    ),
  },
  {
    id: "niva-bupa",
    name: "Niva Bupa",
    subtitle: "Health Insurance Specialist",
    category: "Health Insurance",
    brandColor: "#00A0DF",
    glowColor: "rgba(0, 160, 223, 0.4)",
    badgeBg: "rgba(0, 160, 223, 0.12)",
    renderLogo: () => (
      <div className="bg-white px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 border border-slate-100 shrink-0">
        <span className="font-black text-[#00A0DF] text-[13px] leading-none">
          niva
        </span>
        <div className="px-1 py-0.5 rounded bg-[#0066B3] text-white font-extrabold text-[9px] leading-none">
          Bupa
        </div>
      </div>
    ),
  },
  {
    id: "unionsys",
    name: "UnionSys Technologies",
    subtitle: "Helping Accelerate Business",
    category: "Enterprise Cloud",
    brandColor: "#EF4444",
    glowColor: "rgba(239, 68, 68, 0.4)",
    badgeBg: "rgba(239, 68, 68, 0.12)",
    renderLogo: () => (
      <div className="bg-white px-3 py-1.5 rounded-lg shadow-md flex flex-col text-left border border-slate-100 shrink-0">
        <div className="flex items-center gap-1">
          <span className="font-black text-[#EF4444] text-[13px] leading-tight">
            UnionSys
          </span>
          <span className="font-bold text-slate-700 text-[10px] leading-tight">
            Technologies
          </span>
        </div>
        <span className="text-[7.5px] font-semibold text-slate-500 leading-none">
          Helping Accelerate Business
        </span>
      </div>
    ),
  },
  {
    id: "softhq",
    name: "SOFTHQ",
    subtitle: "Global IT Consulting & Staffing",
    category: "Workforce & IT",
    brandColor: "#0284C7",
    glowColor: "rgba(2, 132, 199, 0.4)",
    badgeBg: "rgba(2, 132, 199, 0.12)",
    renderLogo: () => (
      <div className="bg-white px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1 border border-slate-100 shrink-0">
        <span className="font-black text-[#0284C7] text-[14px] tracking-tight leading-none">
          SOFT
        </span>
        <span className="font-black text-[#0B2545] text-[14px] tracking-tight leading-none">
          HQ
        </span>
      </div>
    ),
  },
  {
    id: "reflections",
    name: "Reflections",
    subtitle: "IDEAS MADE REAL • Digital Engineering",
    category: "Digital Innovation",
    brandColor: "#84CC16",
    glowColor: "rgba(132, 204, 22, 0.4)",
    badgeBg: "rgba(132, 204, 22, 0.12)",
    renderLogo: () => (
      <div className="bg-white px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 border border-slate-100 shrink-0">
        <div className="w-5 h-5 rounded-full bg-[#84CC16] flex items-center justify-center shadow-sm">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5zm4 4h-2v-4h2v4zm0-6h-2V7h2v3z" />
          </svg>
        </div>
        <div className="flex flex-col text-left">
          <span className="font-bold text-slate-800 text-[12px] leading-tight">
            Reflections
          </span>
          <span className="text-[7px] font-semibold text-slate-500 tracking-wider uppercase leading-none">
            IDEAS MADE REAL
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "vs-global",
    name: "VS Global",
    subtitle: "Enterprise Technology & Infrastructure",
    category: "Systems & Infrastructure",
    brandColor: "#38BDF8",
    glowColor: "rgba(56, 189, 248, 0.4)",
    badgeBg: "rgba(56, 189, 248, 0.12)",
    renderLogo: () => (
      <div className="bg-[#0A101D] px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 border border-slate-700 shrink-0">
        <div className="w-5 h-5 rounded bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] flex items-center justify-center font-black text-white text-[10px] leading-none shadow-sm">
          VS
        </div>
        <span className="font-black text-white text-[12px] tracking-tight">
          VS Global
        </span>
      </div>
    ),
  },
  {
    id: "profit-shadow",
    name: "Profit Shadow K",
    subtitle: "Capital Advisory & Quantitative Systems",
    category: "Fintech Advisory",
    brandColor: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.45)",
    badgeBg: "rgba(16, 185, 129, 0.15)",
    renderLogo: () => (
      <div className="bg-white px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 border border-slate-100 shrink-0">
        <div className="w-5 h-5 rounded bg-[#064E3B] flex items-center justify-center text-emerald-300">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
          </svg>
        </div>
        <span className="font-black text-[#064E3B] text-[12px] tracking-tight">
          Profit Shadow
        </span>
      </div>
    ),
  },
];

export default function ClientMarquee() {
  const row1Items = [...CLIENTS_ROW_1, ...CLIENTS_ROW_1];
  const row2Items = [...CLIENTS_ROW_2, ...CLIENTS_ROW_2];

  return (
    <section 
      aria-label="Client Companies and Enterprise Partners"
      className="relative w-full py-16 sm:py-20 md:py-28 bg-[#04060A] overflow-hidden border-y border-white/[0.08]"
    >
      {/* Dynamic Ambient Glow Backdrop */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/[0.07] rounded-full blur-[120px] pointer-events-none" />

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-16 relative z-10">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-semibold tracking-wide uppercase mb-4 shadow-[0_0_20px_-3px_rgba(0,240,255,0.35)]">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Trusted by 19+ Leading Global Enterprises</span>
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Powering Mission-Critical Platforms for{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
            Global Industry Leaders
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-3.5 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          From premier banks and insurtech giants to global cloud leaders, we design, deploy,
          and accelerate transformative enterprise digital solutions.
        </p>

        {/* Trust Metric Chips with Logo Color Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 text-xs text-slate-300 font-medium">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 shadow-[0_0_15px_-4px_rgba(0,240,255,0.2)]">
            <Building2 className="w-4 h-4 text-cyan-400" />
            <span className="text-white font-semibold">19+ Enterprise Client Brands</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-emerald-500/30 shadow-[0_0_15px_-4px_rgba(16,185,129,0.2)]">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-white font-semibold">Banking & InsurTech Grade Security</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-amber-500/30 shadow-[0_0_15px_-4px_rgba(245,158,11,0.2)]">
            <Zap className="w-4 h-4 text-amber-400" />
            <span className="text-white font-semibold">99.98% High-Availability SLA</span>
          </div>
        </div>
      </div>

      {/* Marquee Tracks with Edge Vignette Masks */}
      <div className="relative w-full marquee-container overflow-hidden space-y-5 md:space-y-7">
        {/* Left Gradient Fade Mask */}
        <div className="absolute top-0 left-0 bottom-0 w-20 sm:w-36 lg:w-56 bg-gradient-to-r from-[#04060A] via-[#04060A]/90 to-transparent pointer-events-none z-20" />
        
        {/* Right Gradient Fade Mask */}
        <div className="absolute top-0 right-0 bottom-0 w-20 sm:w-36 lg:w-56 bg-gradient-to-l from-[#04060A] via-[#04060A]/90 to-transparent pointer-events-none z-20" />

        {/* ROW 1: Scrolling Left */}
        <div className="animate-marquee-left flex items-center gap-4 sm:gap-6">
          {row1Items.map((client, idx) => (
            <div
              key={`row1-${client.id}-${idx}`}
              style={{
                borderColor: `${client.brandColor}33`,
              }}
              className="group relative flex items-center gap-4 px-5 py-3 rounded-2xl bg-[#0B101D]/90 backdrop-blur-xl border hover:border-opacity-100 transition-all duration-300 shrink-0 cursor-default shadow-xl hover:-translate-y-1"
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 12px 30px -5px ${client.glowColor}`;
                e.currentTarget.style.borderColor = client.brandColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = `${client.brandColor}33`;
              }}
            >
              {client.renderLogo()}
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-extrabold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                    {client.name}
                  </span>
                  <span 
                    style={{
                      color: client.brandColor,
                      backgroundColor: client.badgeBg,
                      borderColor: `${client.brandColor}40`,
                    }}
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full border tracking-wide"
                  >
                    {client.category}
                  </span>
                </div>
                <span className="text-[11px] text-slate-300 font-medium mt-0.5">
                  {client.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ROW 2: Scrolling Right */}
        <div className="animate-marquee-right flex items-center gap-4 sm:gap-6">
          {row2Items.map((client, idx) => (
            <div
              key={`row2-${client.id}-${idx}`}
              style={{
                borderColor: `${client.brandColor}33`,
              }}
              className="group relative flex items-center gap-4 px-5 py-3 rounded-2xl bg-[#0B101D]/90 backdrop-blur-xl border hover:border-opacity-100 transition-all duration-300 shrink-0 cursor-default shadow-xl hover:-translate-y-1"
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 12px 30px -5px ${client.glowColor}`;
                e.currentTarget.style.borderColor = client.brandColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = `${client.brandColor}33`;
              }}
            >
              {client.renderLogo()}
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-extrabold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                    {client.name}
                  </span>
                  <span 
                    style={{
                      color: client.brandColor,
                      backgroundColor: client.badgeBg,
                      borderColor: `${client.brandColor}40`,
                    }}
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full border tracking-wide"
                  >
                    {client.category}
                  </span>
                </div>
                <span className="text-[11px] text-slate-300 font-medium mt-0.5">
                  {client.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Helper Cue */}
      <div className="mt-9 text-center relative z-10 flex items-center justify-center gap-2">
        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
        <p className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold">
          Hover any enterprise partner to pause scroll and inspect solutions
        </p>
      </div>
    </section>
  );
}
