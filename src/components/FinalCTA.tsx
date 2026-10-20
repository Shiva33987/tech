"use client";

import React, { lazy, Suspense } from "react";
import { ArrowRight, MessageSquare, Terminal, Sparkles, Activity } from "lucide-react";

const ParticleField = lazy(() => import("@/components/three/ParticleField"));

export default function FinalCTA() {
  return (
    <section
      className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.08] bg-[#05070B] overflow-hidden"
      aria-label="Final Call to Action"
    >
      {/* Background Particle Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <Suspense fallback={null}>
          <ParticleField count={110} connectionDistance={75} />
        </Suspense>
      </div>

      {/* Ambient Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-hud border border-cyan-400/30 text-xs font-mono-tech text-cyan-400 mb-6">
          <Terminal className="w-3.5 h-3.5" />
          <span>PRODUCTION-GRADE EXECUTION</span>
        </div>

        {/* Headline */}
        <h2 className="heading-section text-slate-100 font-bold tracking-tight text-balance">
          Have an idea <br />
          <span className="text-gradient-cyan">worth building?</span>
        </h2>

        {/* Subhead */}
        <p className="body-large text-slate-300 mt-6 max-w-xl leading-relaxed">
          Let&apos;s turn your vision into a scalable, fault-tolerant digital product.
          Direct access to principal systems engineers from day one.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mt-9 w-full sm:w-auto">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-display font-semibold text-sm btn-million-dollar flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-display font-medium text-sm btn-glass-secondary flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            <span>Explore Practice Areas</span>
          </a>
        </div>

        {/* Availability Marker */}
        <div className="mt-8 flex items-center gap-2 text-xs font-mono-tech text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>ACCEPTING NEW ENTERPRISE PARTNERSHIPS FOR Q2/Q3</span>
        </div>
      </div>
    </section>
  );
}
