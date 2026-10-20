"use client";

import React from "react";
import { CheckCircle2, Shield, Zap, Terminal, Activity, Lock, Cpu, Globe } from "lucide-react";

const TRUST_METRICS = [
  {
    title: "Outcome Ownership",
    tag: "ENGINEERING DISCIPLINE",
    desc: "We measure success by production throughput, revenue velocity, and user adoption — not just closed tickets. From architecture to launch, we own the result.",
    icon: CheckCircle2,
    stat: "100%",
    statLabel: "Accountability",
  },
  {
    title: "Deterministic Reliability",
    tag: "ZERO-DOWNTIME CORE",
    desc: "Every system is backed by active-active multi-region failover, automated regression test harnesses, and self-healing container topologies.",
    icon: Shield,
    stat: "99.999%",
    statLabel: "Guaranteed SLA",
  },
  {
    title: "Rapid Deployment Velocity",
    tag: "CONTINUOUS DELIVERY",
    desc: "Continuous integration pipelines that ship production-grade code safely within hours, not multi-month bureaucratic quarters.",
    icon: Zap,
    stat: "< 14d",
    statLabel: "Sprint to Prod",
  },
];

const COMPLIANCE_BADGES = [
  { name: "SOC 2 Type II", desc: "Audited Security Controls" },
  { name: "HIPAA Compliant", desc: "Healthcare Enclave Ready" },
  { name: "ISO 27001", desc: "Information Security Standard" },
  { name: "GDPR Sovereign", desc: "Zero Data Leakage" },
];

export default function IntroTrust() {
  return (
    <section
      id="about"
      className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.08] bg-[#05070B]"
      aria-label="About VRPI Trust Statement"
    >
      <div className="absolute inset-0 bg-grid-tech opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main Statement */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-hud border border-cyan-400/30 text-xs font-mono-tech text-cyan-400 mb-6">
              <Activity className="w-3.5 h-3.5" />
              <span>THE ENGINEERING MANIFESTO</span>
            </div>

            <h2 className="heading-section text-slate-100 font-bold tracking-tight text-balance">
              Technology should <br />
              <span className="text-gradient-cyan">simplify complexity.</span>
            </h2>

            <p className="body-large text-slate-300 mt-6 max-w-xl leading-relaxed">
              VRPI Tech Solutions operates between a boutique studio and an enterprise consultancy.
              We engineer mission-critical digital products, scalable cloud platforms, and intelligent systems
              for organizations that cannot afford to fail.
            </p>

            {/* Compliance & Security Row */}
            <div className="mt-10 w-full pt-8 border-t border-white/[0.08]">
              <span className="font-mono-tech text-[10px] uppercase tracking-wider text-slate-500 block mb-4">
                ENTERPRISE GOVERNANCE & SECURITY BASELINE
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {COMPLIANCE_BADGES.map((b) => (
                  <div
                    key={b.name}
                    className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-cyan-400/30 transition-colors"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-200">
                      <Lock className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span>{b.name}</span>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-1 leading-tight">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3 Interactive Trust Pillars */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            {TRUST_METRICS.map((metric) => {
              const Icon = metric.icon;
              return (
                <div
                  key={metric.title}
                  className="p-6 sm:p-7 rounded-2xl glass-panel-elevated border border-white/[0.08] hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 group-hover:bg-cyan-500/20 transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="font-mono-tech text-[10px] text-cyan-400 uppercase tracking-wider font-semibold">
                          {metric.tag}
                        </span>
                        <h3 className="text-lg font-display font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors mt-0.5">
                          {metric.title}
                        </h3>
                        <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                          {metric.desc}
                        </p>
                      </div>
                    </div>

                    <div className="hidden sm:flex flex-col items-end shrink-0 pl-3">
                      <span className="font-display text-xl font-bold text-white text-gradient-silver">
                        {metric.stat}
                      </span>
                      <span className="text-[10px] font-mono-tech text-slate-400 uppercase">
                        {metric.statLabel}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
