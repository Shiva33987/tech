"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, X, Activity, Server, Shield, CheckCircle2, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useReducedMotion } from "@/providers/ReducedMotionProvider";

interface Project {
  id: string;
  category: string;
  client: string;
  title: string;
  oneLiner: string;
  description: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  architectureOverview: string;
  impact: string;
}

const PROJECTS: Project[] = [
  {
    id: "nexahealth",
    category: "Healthcare Systems",
    client: "NexaHealth International",
    title: "Distributed Clinical Workflow Engine",
    oneLiner: "HIPAA-compliant distributed clinical workflow handling multi-region patient records.",
    description:
      "Engineered an event-driven platform enabling multi-facility hospital networks to coordinate surgery scheduling, telemetry capture, and lab reporting in real time with sub-40ms P99 latency.",
    metrics: [
      { label: "Daily Transactions", value: "3.8M+" },
      { label: "System Availability", value: "99.999%" },
      { label: "Query Execution", value: "< 38ms" },
    ],
    tags: ["Next.js 15", "PostgreSQL", "Kubernetes", "Redis Streams"],
    architectureOverview:
      "Microservice cluster orchestrated on AWS EKS across 3 availability zones. Active-active data replication with strict encryption at rest and in transit.",
    impact: "Eliminated hospital coordination bottlenecks and reduced clinical wait times by 31%.",
  },
  {
    id: "orbit-fintech",
    category: "FinTech & Ledgers",
    client: "Orbit Financial Core",
    title: "High-Frequency Settlement Engine",
    oneLiner: "High-frequency settlement engine and double-entry ledger synchronization.",
    description:
      "Designed and deployed a fault-tolerant double-entry financial ledger and instant settlement system processing global payment rails with mathematical immutability.",
    metrics: [
      { label: "Execution Latency", value: "< 12ms p99" },
      { label: "Annual Volume", value: "$1.8B+" },
      { label: "Ledger Divergence", value: "0.000%" },
    ],
    tags: ["Go", "Kafka", "AWS Nitro Enclaves", "PostgreSQL"],
    architectureOverview:
      "Deterministic event sourcing on Apache Kafka paired with memory-mapped write-ahead transaction logs inside hardened enclave environments.",
    impact: "Handled Black Friday peak bursts of 24,000 TPS with zero transaction errors or reconciliation delays.",
  },
  {
    id: "stratum-ai",
    category: "Autonomous AI",
    client: "Stratum Global Logistics",
    title: "Autonomous Fleet & Routing AI",
    oneLiner: "Multi-agent autonomous routing and real-time inventory rebalancing.",
    description:
      "Constructed a multi-agent autonomous decision pipeline that re-routes freight schedules dynamically based on real-time port delays, weather forecasts, and spot fuel prices.",
    metrics: [
      { label: "Routing Latency", value: "-42%" },
      { label: "Annual Savings", value: "$14.2M" },
      { label: "Decision Traceability", value: "100%" },
    ],
    tags: ["Python", "PyTorch", "pgvector", "EventBridge"],
    architectureOverview:
      "HNSW vector search over maritime freight logs combined with specialized reinforcement models operating with human-in-the-loop exception fallbacks.",
    impact: "Saved 2.4M gallons of diesel fuel annually across 4,200 active intermodal transportation routes.",
  },
  {
    id: "aeris-iot",
    category: "Industrial IoT",
    client: "Aeris Smart Grid",
    title: "Edge Telemetry & Anomaly Ingestion",
    oneLiner: "Edge device sensor aggregation with sub-second anomaly detection.",
    description:
      "Built a distributed MQTT ingestion pipeline streaming continuous power telemetry across 120,000 smart grid transformers to preempt grid failures.",
    metrics: [
      { label: "Connected Devices", value: "120,000+" },
      { label: "Anomaly Detection", value: "< 850ms" },
      { label: "False Positive Rate", value: "< 0.02%" },
    ],
    tags: ["Rust", "MQTT", "TimescaleDB", "WebSockets"],
    architectureOverview:
      "Rust edge agents pushing lightweight binary protobuf streams into distributed TimescaleDB hypertables with vectorized continuous aggregates.",
    impact: "Prevented 14 regional brownouts through proactive transformer load balancing.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Healthcare Systems", "FinTech & Ledgers", "Autonomous AI", "Industrial IoT"];

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.08] bg-[#05070B]"
      aria-label="Production Case Studies"
    >
      <div className="absolute inset-0 bg-grid-tech opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-hud border border-cyan-400/30 text-xs font-mono-tech text-cyan-400 mb-4">
              <Terminal className="w-3.5 h-3.5" />
              <span>PRODUCTION SYSTEMS</span>
            </div>

            <h2 className="heading-section text-slate-100 font-bold tracking-tight text-balance">
              Verified Enterprise <br />
              <span className="text-gradient-cyan">Deployments.</span>
            </h2>

            <p className="body-large text-slate-300 mt-5 leading-relaxed">
              Real systems operating at scale. Explore production architectures, key metrics,
              and verifiable business outcomes engineered by VRPI.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.06] overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-display font-medium transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? "bg-white/[0.08] text-cyan-300 border border-cyan-400/30 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2x2 High-Impact Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="p-7 sm:p-9 rounded-3xl glass-panel-elevated border border-white/[0.08] hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(0,240,255,0.18)] transition-all duration-300 group flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono-tech px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-medium">
                    {project.category}
                  </span>
                  <span className="font-mono-tech text-xs text-slate-500">{project.client}</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  {project.oneLiner}
                </p>

                {/* Metrics Pill Grid */}
                <div className="grid grid-cols-3 gap-3 my-6 pt-5 border-t border-white/[0.06]">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <span className="font-display text-lg sm:text-xl font-bold text-white text-gradient-silver block">
                        {m.value}
                      </span>
                      <span className="text-[10px] font-mono-tech text-cyan-400 uppercase mt-0.5 block">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono-tech bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Inspect Link */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono-tech">
                    Impact: {project.impact.slice(0, 48)}...
                  </span>
                  <span className="text-xs font-display font-medium text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                    <span>Inspect Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-[#0A0E17] border border-cyan-400/30 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,240,255,0.2)] max-h-[90vh] overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close case study"
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/[0.05] border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono-tech text-xs text-cyan-400 font-semibold uppercase">
                  {selectedProject.category}
                </span>
                <span className="text-slate-600">·</span>
                <span className="font-mono-tech text-xs text-slate-400">{selectedProject.client}</span>
              </div>

              <h3 id="project-modal-title" className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Metrics Showcase */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {selectedProject.metrics.map((m) => (
                  <div key={m.label} className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                    <span className="font-display text-xl font-bold text-white text-gradient-silver block">
                      {m.value}
                    </span>
                    <span className="text-[10px] font-mono-tech text-cyan-400 uppercase mt-0.5 block">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Architecture Blueprint Section */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 mb-6">
                <span className="text-[11px] font-mono-tech text-cyan-400 uppercase font-semibold block mb-1.5">
                  Production Architecture Blueprint
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedProject.architectureOverview}
                </p>
              </div>

              {/* Business Impact Box */}
              <div className="p-4 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/25 mb-6">
                <span className="text-[11px] font-mono-tech text-emerald-400 uppercase font-semibold block mb-1">
                  Measurable Business Impact
                </span>
                <p className="text-xs sm:text-sm text-slate-200 font-medium">
                  {selectedProject.impact}
                </p>
              </div>

              {/* Tech Stack Chips */}
              <div className="mb-6">
                <span className="text-xs font-mono-tech text-slate-400 uppercase block mb-2">
                  Engineered With
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg text-xs font-mono-tech bg-white/[0.04] border border-white/10 text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 rounded-xl font-display font-semibold text-xs sm:text-sm btn-million-dollar flex items-center gap-2"
                >
                  <span>Build Similar System</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2.5 rounded-xl font-display text-xs text-slate-400 hover:text-white"
                >
                  Close Blueprint
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
