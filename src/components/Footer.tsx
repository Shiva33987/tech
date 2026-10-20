"use client";

import React from "react";
import {
  MapPin,
  PhoneCall,
  Mail,
  ArrowUp,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative bg-gradient-to-br from-[#320614] via-[#1E040D] to-[#2E0D03] border-t border-[#E60038]/30 text-slate-300 overflow-hidden font-sans"
      aria-label="Footer & Contact Information"
    >
      {/* Top Brand Accent Line: Matching VRPI Logo (Crimson Red to Amber Orange) */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#E60038] via-[#FF5500] to-[#FA6400]" />

      {/* Ambient background glow accents in exact logo colors */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-[#E60038]/[0.12] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[#FA6400]/[0.10] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-6">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pb-6 border-b border-white/[0.08] items-start">
          {/* Brand Column (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Logo & Identity */}
              <a href="#hero" className="inline-flex items-center gap-3 group mb-3 focus:outline-none">
                <img
                  src="/vrpi-logo.png"
                  alt="VRPI Logo"
                  className="h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                />
                <div className="flex flex-col">
                  <span className="font-display font-bold text-sm tracking-tight text-white">
                    VRPI TECH SOLUTIONS
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-rose-400 font-semibold">
                    PRIVATE LIMITED
                  </span>
                </div>
              </a>

              <p className="text-xs text-slate-300 leading-relaxed mb-3.5 max-w-sm">
                Full-stack digital engineering firm transforming enterprise complexity into
                resilient platforms, autonomous neural systems, and distributed cloud infrastructure.
              </p>

              {/* Verified SLA & Operational Status */}
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold">All Production Nodes 100% Operational</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="mt-4 flex items-center gap-2.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="VRPI LinkedIn"
                className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-[#E60038]/20 border border-white/10 hover:border-[#E60038]/40 flex items-center justify-center text-slate-400 hover:text-white transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="VRPI GitHub"
                className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-[#E60038]/20 border border-white/10 hover:border-[#E60038]/40 flex items-center justify-center text-slate-400 hover:text-white transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="VRPI Twitter/X"
                className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-[#E60038]/20 border border-white/10 hover:border-[#E60038]/40 flex items-center justify-center text-slate-400 hover:text-white transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Solutions & Frontier R&D Columns (Side-by-side on mobile & desktop) */}
          <div className="grid grid-cols-2 lg:col-span-4 gap-6 sm:pl-2">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-2.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E60038]" />
                <span>Solutions</span>
              </h3>
              <ul className="space-y-1.5 text-xs sm:text-[13px]">
                <li>
                  <a href="#services" className="text-slate-400 hover:text-white transition-colors">
                    Mobile Engineering
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-slate-400 hover:text-white transition-colors">
                    Web Platforms
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-slate-400 hover:text-white transition-colors">
                    Custom Software
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-slate-400 hover:text-white transition-colors">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-slate-400 hover:text-white transition-colors">
                    Co-Working &amp; Nodes
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-slate-400 hover:text-white transition-colors">
                    EduTech &amp; Training
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-2.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FA6400]" />
                <span>Frontier R&amp;D</span>
              </h3>
              <ul className="space-y-1.5 text-xs sm:text-[13px]">
                <li>
                  <a href="#hero" className="text-slate-400 hover:text-white transition-colors">
                    Autonomous Robotics
                  </a>
                </li>
                <li>
                  <a href="#hero" className="text-slate-400 hover:text-white transition-colors">
                    Cloud Infrastructure
                  </a>
                </li>
                <li>
                  <a href="#hero" className="text-slate-400 hover:text-white transition-colors">
                    Zero-Trust Defense
                  </a>
                </li>
                <li>
                  <a href="#hero" className="text-slate-400 hover:text-white transition-colors">
                    Data Intelligence
                  </a>
                </li>
                <li>
                  <a href="#hero" className="text-slate-400 hover:text-white transition-colors">
                    Distributed Mesh
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Dedicated Contact Us Card (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl p-4 bg-black/35 hover:bg-black/45 backdrop-blur-md border border-white/[0.12] hover:border-[#FA6400]/40 transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
              <h3 className="text-xs sm:text-sm font-bold font-display uppercase tracking-wider text-white mb-3 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E60038]" />
                  <span>Contact Us</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono font-semibold text-[#FFA040] bg-[#FA6400]/15 px-2 py-0.5 rounded-full border border-[#FA6400]/30">
                  Headquarters
                </span>
              </h3>

              {/* Physical Address */}
              <div className="flex items-start gap-2.5 mb-2.5 pb-2.5 border-b border-white/[0.08]">
                <div className="w-7 h-7 rounded-lg bg-[#E60038]/15 border border-[#E60038]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FF4D6D]" />
                </div>
                <div className="text-[11px] sm:text-xs leading-snug text-slate-200">
                  <p className="font-semibold text-white">2/27/163, GANDHI NAGAR STREET,</p>
                  <p className="text-slate-300">NEAR JAMMI CHETTU, WANAPARTHY, TELANGANA, <span className="font-mono font-semibold text-rose-300">509103</span></p>
                </div>
              </div>

              {/* Phone Line */}
              <div className="flex items-start gap-2.5 mb-2.5 pb-2.5 border-b border-white/[0.08]">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div>
                  <a
                    href="tel:+918790946714"
                    className="text-xs font-semibold font-mono text-white hover:text-emerald-300 transition-colors block"
                  >
                    +91 8790946714
                  </a>
                  <span className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <Clock className="w-2.5 h-2.5 text-slate-400" />
                    <span>Mon – Sat, 9:00 AM – 7:00 PM IST</span>
                  </span>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#FA6400]/15 border border-[#FA6400]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-3.5 h-3.5 text-[#FFA040]" />
                </div>
                <div>
                  <a
                    href="mailto:info@vrpigroup.co.in"
                    className="text-xs font-semibold font-mono text-white hover:text-[#FFA040] transition-colors block break-all"
                  >
                    info@vrpigroup.co.in
                  </a>
                  <span className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                    <span>Guaranteed Response within 24h</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Telemetry Beacon & Copyright */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
          <div className="flex flex-wrap items-center gap-2">
            <span>© 2026 VRPI TECH SOLUTIONS PRIVATE LIMITED.</span>
            <span className="hidden sm:inline text-slate-500">·</span>
            <span className="text-slate-400">ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-slate-500 hidden lg:inline">TLS 1.3 ENFORCED · ISO COMPLIANT</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-300 hover:text-[#FA6400] transition-colors cursor-pointer group"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
