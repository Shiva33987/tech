"use client";

import React from "react";
import { Code, Users, TrendingUp, Compass, CheckCircle2, X, Terminal, ShieldCheck } from "lucide-react";

const PRINCIPLES = [
  {
    number: "01",
    title: "Engineering Excellence",
    subtitle: "Clean architecture, 100% strict TypeScript, specs that outlive the project.",
    description:
      "We write strict TypeScript, maintain automated test suites (unit, integration, and E2E), and enforce modular domain boundaries. Every commit undergoes automated linting and security scans before deployment.",
    icon: Code,
    highlights: ["100% Strict Type Safety", "Automated E2E Test Gates", "Zero Technical Debt SLA"],
  },
  {
    number: "02",
    title: "Human-Centered Design",
    subtitle: "Interfaces built for user flow velocity, not internal corporate politics.",
    description:
      "We translate complex workflows into intuitive, fluid interactions. We prioritize accessibility (WCAG 2.1 AA), keyboard navigation, sub-100ms response feedback, and clear visual hierarchy across all viewports.",
    icon: Users,
    highlights: ["WCAG 2.1 AA Compliant", "Sub-100ms Micro-Interactions", "Fluid Clamp Typography"],
  },
  {
    number: "03",
    title: "Scalable Architecture",
    subtitle: "Systems designed for the traffic and throughput you will need in two years.",
    description:
      "We avoid premature optimization while guaranteeing forward scalability. Stateless service tiers, horizontal autoscaling, distributed caching, and clean schema migrations ensure you never hit a technical ceiling.",
    icon: TrendingUp,
    highlights: ["Horizontal Pod Autoscaling", "Event-Driven Decoupling", "Zero-Downtime Migrations"],
  },
  {
    number: "04",
    title: "Continuous Innovation",
    subtitle: "We stay on the frontier so your stack never turns into obsolete tech debt.",
    description:
      "We track modern web standards, serverless runtimes, and practical AI models so you don't have to rewrite your stack from scratch every 24 months. Stable modernization without chasing fleeting fads.",
    icon: Compass,
    highlights: ["Next.js 15 Primitives", "Edge Compute Streaming", "Quarterly Architecture Audits"],
  },
];

const COMPARISON = [
  {
    feature: "Direct Principal Architect On All Calls",
    boutique: true,
    consultancy: false,
    vrpi: true,
  },
  {
    feature: "Enterprise Multi-Region Infrastructure",
    boutique: false,
    consultancy: true,
    vrpi: true,
  },
  {
    feature: "Zero Junior-Staff Hand-offs",
    boutique: true,
    consultancy: false,
    vrpi: true,
  },
  {
    feature: "Continuous Automated CI/CD & Security Gates",
    boutique: false,
    consultancy: true,
    vrpi: true,
  },
  {
    feature: "Sub-4h Technical Consultation SLA",
    boutique: false,
    consultancy: false,
    vrpi: true,
  },
];

export default function WhyVRPI() {
  return (
    <section
      id="why-us"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.08] bg-[#05070B]"
      aria-label="Why VRPI Principles and Comparison"
    >
      <div className="absolute inset-0 bg-grid-tech opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-hud border border-cyan-400/30 text-xs font-mono-tech text-cyan-400 mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>OPERATIONAL RIGOR</span>
          </div>

          <h2 className="heading-section text-slate-100 font-bold tracking-tight text-balance">
            Why VRPI? <br />
            <span className="text-gradient-cyan">Guaranteed Engineering Standards.</span>
          </h2>

          <p className="body-large text-slate-300 mt-5 leading-relaxed">
            Positioned between a boutique studio and an enterprise consultancy. You receive high-touch
            craftsmanship paired with battle-tested enterprise rigor.
          </p>
        </div>

        {/* 4 Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-16">
          {PRINCIPLES.map((principle) => {
            const Icon = principle.icon;
            return (
              <div
                key={principle.number}
                className="relative p-8 rounded-3xl glass-panel-elevated border border-white/[0.08] hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(0,240,255,0.18)] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono-tech text-sm font-semibold text-slate-500 group-hover:text-cyan-400 transition-colors">
                      [{principle.number}]
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {principle.title}
                  </h3>

                  <p className="text-xs font-mono-tech text-cyan-400/90 mt-1.5 font-medium leading-relaxed">
                    {principle.subtitle}
                  </p>

                  <p className="text-sm text-slate-400 mt-4 leading-relaxed">
                    {principle.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.06] space-y-2">
                  {principle.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise Comparison Matrix */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel-elevated border border-white/[0.08]">
          <div className="mb-8">
            <span className="font-mono-tech text-xs text-cyan-400 uppercase tracking-wider font-semibold block mb-1">
              THE ADVANTAGE
            </span>
            <h3 className="font-display text-2xl font-bold text-white tracking-tight">
              How VRPI Compares to Traditional Options
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 font-mono-tech text-[11px] uppercase tracking-wider">
                  <th className="pb-4 font-medium">Evaluation Criterion</th>
                  <th className="pb-4 font-medium text-center">Boutique Agency</th>
                  <th className="pb-4 font-medium text-center">Enterprise Consultancy</th>
                  <th className="pb-4 font-semibold text-cyan-400 text-center">VRPI Tech Solutions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {COMPARISON.map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 text-slate-200 font-medium">{row.feature}</td>
                    <td className="py-4 text-center">
                      {row.boutique ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-slate-600 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 text-center">
                      {row.consultancy ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-slate-600 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 text-center bg-cyan-500/[0.04]">
                      <div className="inline-flex items-center gap-1 text-cyan-400 font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs">Guaranteed</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
