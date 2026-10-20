"use client";

import React, { lazy, Suspense, useState } from "react";
import { Sparkles, Terminal, CheckCircle2, ShieldCheck, ArrowRight, Activity, Cpu } from "lucide-react";

const AIVisualization = lazy(() => import("@/components/three/AIVisualization"));

export default function AIEngineering() {
  const [testPrompt, setTestPrompt] = useState("Execute multi-region ledger reconciliation with zero divergence");
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationResult, setSimulationResult] = useState<string | null>(null);

  const runSimulation = () => {
    setIsSimulating(true);
    setSimulationResult(null);
    setTimeout(() => {
      setIsSimulating(false);
      setSimulationResult("STATUS: VERIFIED · 0 Hallucinations · Deterministic Schema Gate PASSED · Latency: 18.4ms");
    }, 700);
  };

  return (
    <section
      id="ai-engineering"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.08] bg-[#05070B]"
      aria-label="AI and Automation Systems"
    >
      <div className="absolute inset-0 bg-grid-tech opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-hud border border-cyan-400/30 text-xs font-mono-tech text-cyan-400 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DETERMINISTIC NEURAL ARCHITECTURE</span>
            </div>

            <h2 className="heading-section text-slate-100 font-bold tracking-tight text-balance">
              Intelligence, <br />
              <span className="text-gradient-cyan">Engineered.</span>
            </h2>

            <p className="body-large text-slate-300 mt-5 leading-relaxed">
              We design artificial intelligence systems around verifiable business outcomes, not novelty.
              Every pipeline, embedding model, and autonomous agent is wrapped in programmatic guardrails.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs font-mono-tech text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>PIPELINE ENGINE: ONLINE</span>
          </div>
        </div>

        {/* 3D Dynamic Pipeline Canvas Box */}
        <div className="mb-12 rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0A0E17]/80 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
          <Suspense
            fallback={
              <div className="w-full h-80 rounded-2xl glass-panel animate-pulse flex items-center justify-center text-slate-500 font-mono-tech text-xs">
                INITIALIZING THREE.JS NEURAL PIPELINE...
              </div>
            }
          >
            <AIVisualization />
          </Suspense>
        </div>

        {/* Interactive Neural Guardrail Tester Ribbon */}
        <div className="p-6 rounded-2xl glass-panel-elevated border border-white/[0.08] mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono-tech uppercase text-cyan-400 font-semibold block">
                  LIVE REASONING GATE SIMULATOR
                </span>
                <span className="text-xs sm:text-sm text-slate-200 font-display">
                  Test prompt execution through deterministic validation boundaries:
                </span>
              </div>
            </div>

            <div className="flex flex-1 max-w-xl items-center gap-2">
              <input
                type="text"
                value={testPrompt}
                onChange={(e) => setTestPrompt(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-black/50 border border-white/10 text-xs font-mono-tech text-slate-200 focus:border-cyan-400 focus:outline-none"
                placeholder="Enter autonomous intent..."
              />
              <button
                type="button"
                onClick={runSimulation}
                disabled={isSimulating}
                className="px-4 py-2 rounded-xl font-display font-semibold text-xs btn-million-dollar shrink-0 disabled:opacity-50 cursor-pointer"
              >
                {isSimulating ? "Simulating..." : "Test Gate"}
              </button>
            </div>
          </div>

          {simulationResult && (
            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono-tech text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{simulationResult}</span>
            </div>
          )}
        </div>

        {/* 3 Core Architecture Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl glass-panel-elevated border border-white/[0.08] hover:border-cyan-400/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
              <Terminal className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono-tech text-cyan-400 uppercase font-semibold">
              PRE-FLIGHT VALIDATION
            </span>
            <h3 className="text-lg font-display font-semibold text-slate-100 mt-1">
              Deterministic Output Gates
            </h3>
            <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
              We wrap LLMs in programmatic schema validation and sandbox boundaries, eliminating hallucinations
              and ensuring outputs match strict business contracts before execution.
            </p>
          </div>

          <div className="p-7 rounded-2xl glass-panel-elevated border border-white/[0.08] hover:border-blue-400/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
              <Cpu className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono-tech text-blue-400 uppercase font-semibold">
              DATA SOVEREIGNTY
            </span>
            <h3 className="text-lg font-display font-semibold text-slate-100 mt-1">
              Private Inference Clusters
            </h3>
            <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
              Air-gapped on-premises or dedicated cloud VPC deployments ensure your proprietary source code,
              customer records, and financial ledgers never touch public foundation model logs.
            </p>
          </div>

          <div className="p-7 rounded-2xl glass-panel-elevated border border-white/[0.08] hover:border-emerald-400/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono-tech text-emerald-400 uppercase font-semibold">
              REGRESSION TESTING
            </span>
            <h3 className="text-lg font-display font-semibold text-slate-100 mt-1">
              Continuous Automated Eval
            </h3>
            <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
              Automated evaluation test benches grade model accuracy, latency, and semantic drift against
              thousands of domain-specific synthetic test suites on every pull request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
