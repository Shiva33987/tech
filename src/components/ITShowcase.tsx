"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  Shield,
  Cpu,
  Cloud,
  Database,
  Code2,
  CheckCircle2,
  ExternalLink,
  Layers,
} from "lucide-react";
import { useReducedMotion } from "@/providers/ReducedMotionProvider";

interface ITItem {
  id: string;
  number: string;
  tag: string;
  quote: string;
  author: string;
  title: string;
  subtitle: string;
  specs: { label: string; value: string }[];
  points: string[];
  shortLabel: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  accentBadge: string;
}

const IT_ITEMS: ITItem[] = [
  {
    id: "robotics",
    number: "01",
    tag: "EMBODIED AI & ROBOTICS",
    quote:
      '"Bridging algorithmic intelligence with physical execution; engineering autonomous robotic systems that redefine industry velocity."',
    author: "VRPI Robotics & Kinematics Lab",
    title: "Autonomous AI & Neural Robotics",
    subtitle: "Real-Time Spatial Edge & Kinematic Intelligence",
    specs: [
      { label: "Inference Latency", value: "< 8.5ms" },
      { label: "ROS2 Integration", value: "Native DDS" },
      { label: "Sensor Fusion", value: "LiDAR + Vision" },
    ],
    points: [
      "Sub-10ms Inference Latency with Hardware-Accelerated Tensor Cores",
      "Full-Stack ROS2 & Multimodal Sensor Fusion for Industrial Autonomy",
      "Core Capabilities: Computer Vision • Adaptive Path Planning • Neuromorphic Edge",
    ],
    shortLabel: "AI Robotics",
    image: "/images/it-showcase/ai-robotics.jpg",
    icon: Cpu,
    accentColor: "text-cyan-400",
    accentBadge: "bg-cyan-500/10 border-cyan-400/30 text-cyan-300",
  },
  {
    id: "cloud",
    number: "02",
    tag: "DISTRIBUTED CLOUD SYSTEMS",
    quote:
      '"Zero-downtime, hyper-scalable cloud mesh architectures engineered to handle mission-critical global enterprise throughput."',
    author: "Distributed Infrastructure Directorate",
    title: "Hyperscale Cloud & Kubernetes Mesh",
    subtitle: "Multi-Region Resiliency & High-Availability Service Mesh",
    specs: [
      { label: "Target Availability", value: "99.999%" },
      { label: "Failover RTO", value: "< 15s" },
      { label: "Orchestration", value: "GitOps K8s" },
    ],
    points: [
      "99.999% Service Level Availability with Automated Self-Healing Topologies",
      "Declarative Kubernetes Orchestration & Continuous GitOps Deployment",
      "Core Stack: Multi-Cloud Mesh • Terraform IaC • Microservices Telemetry",
    ],
    shortLabel: "Cloud Mesh",
    image: "/images/it-showcase/cloud-infrastructure.jpg",
    icon: Cloud,
    accentColor: "text-blue-400",
    accentBadge: "bg-blue-500/10 border-blue-400/30 text-blue-300",
  },
  {
    id: "cybersecurity",
    number: "03",
    tag: "DEFENSE IN DEPTH",
    quote:
      '"Proactive threat neutralization and sovereign cryptographic enclaves guarding enterprise assets across every attack surface."',
    author: "Global Cyber Defense Operations",
    title: "Next-Gen Cybersecurity & Zero Trust",
    subtitle: "Automated Threat Intelligence & Quantum-Resistant Defense",
    specs: [
      { label: "Encryption", value: "mTLS + AES-256-GCM" },
      { label: "Compliance", value: "SOC2 + HIPAA" },
      { label: "Threat Engine", value: "Real-time AI SIEM" },
    ],
    points: [
      "Real-Time Behavioral AI Anomaly Detection & Unified SIEM Intelligence",
      "Hardware-Rooted Cryptographic Enclaves & Strict Zero-Trust Architecture",
      "Security Posture: Continuous Compliance • Red-Team Hardening • Automated Incident Response",
    ],
    shortLabel: "Cyber Defense",
    image: "/images/it-showcase/cyber-defense.jpg",
    icon: Shield,
    accentColor: "text-emerald-400",
    accentBadge: "bg-emerald-500/10 border-emerald-400/30 text-emerald-300",
  },
  {
    id: "data",
    number: "04",
    tag: "STREAMING DATA PIPELINES",
    quote:
      '"Transforming raw enterprise streaming data into high-velocity predictive intelligence with ultra-low latency distributed engines."',
    author: "Enterprise Intelligence Directorate",
    title: "Streaming Data & Real-Time Analytics",
    subtitle: "Distributed Event Streaming & Vector Knowledge RAG",
    specs: [
      { label: "Ingest Velocity", value: "1.2M events/s" },
      { label: "Vector Index", value: "HNSW pgvector" },
      { label: "Stream Engine", value: "Kafka + Flink" },
    ],
    points: [
      "Massive-Scale Kafka & Apache Flink Pipelines Processing 1M+ Events/Second",
      "Vector Database Topologies Optimized for Enterprise RAG & Neural Search",
      "Data Architecture: Apache Iceberg • Snowflake • Real-Time Feature Stores",
    ],
    shortLabel: "Data Analytics",
    image: "/images/it-showcase/data-intelligence.jpg",
    icon: Database,
    accentColor: "text-indigo-400",
    accentBadge: "bg-indigo-500/10 border-indigo-400/30 text-indigo-300",
  },
  {
    id: "software",
    number: "05",
    tag: "CORE RUNTIMES",
    quote:
      '"Precision engineering applied to full-stack platforms; crafting resilient backbones that scale from initial launch to global scale."',
    author: "Core Platform Engineering Group",
    title: "Mission-Critical Software Architecture",
    subtitle: "End-to-End Type Safety & High-Concurrency Systems",
    specs: [
      { label: "Code Coverage", value: "98.5% E2E" },
      { label: "Type Safety", value: "Strict TS 5+" },
      { label: "Framework", value: "Next.js 15 App Router" },
    ],
    points: [
      "Modern React Server Components with Zero Client Runtime Overhead",
      "Distributed Micro-Frontends & Event-Driven Decoupled Domain Microservices",
      "Strict Quality Gates: Sub-second TTFB, Automated Unit & Performance Budgets",
    ],
    shortLabel: "Software Arch",
    image: "/images/it-showcase/software-architecture.jpg",
    icon: Code2,
    accentColor: "text-violet-400",
    accentBadge: "bg-violet-500/10 border-violet-400/30 text-violet-300",
  },
];

export default function ITShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const currentItem = IT_ITEMS[activeTab] || IT_ITEMS[0];
  const { prefersReducedMotion } = useReducedMotion();

  return (
    <section
      id="it-showcase"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.08] bg-[#05070B] overflow-hidden"
      aria-label="Capabilities and IT Showcase"
    >
      <div className="absolute inset-0 bg-grid-tech opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-hud border border-cyan-400/30 text-xs font-mono-tech text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FRONTIER CAPABILITIES</span>
          </div>

          <h2 className="heading-section text-slate-100 font-bold tracking-tight text-balance">
            Engineered for <br />
            <span className="text-gradient-cyan">Mission-Critical Scale.</span>
          </h2>

          <p className="body-large text-slate-300 mt-5 max-w-xl leading-relaxed">
            Explore the five technical pillars powering our enterprise deployments. Every capability
            is proven under production load.
          </p>
        </div>

        {/* Tab Controls Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none" role="tablist">
          {IT_ITEMS.map((item, idx) => {
            const isActive = activeTab === idx;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-xl font-display font-medium text-xs sm:text-sm whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-white/[0.08] border border-cyan-400/40 text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                    : "bg-white/[0.02] border border-white/[0.06] text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-cyan-400" : "text-slate-500"}`} />
                <span>{item.shortLabel}</span>
                <span className="font-mono-tech text-[10px] text-slate-500">{item.number}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Pillar Bento View */}
        <div className="p-6 sm:p-10 rounded-3xl glass-panel-elevated border border-white/[0.08] relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Technical Briefing */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono-tech border ${currentItem.accentBadge}`}>
                      {currentItem.tag}
                    </span>
                    <span className="font-mono-tech text-xs text-slate-500">PILLAR #{currentItem.number}</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
                    {currentItem.title}
                  </h3>
                  <p className="font-display text-sm sm:text-base text-cyan-300/90 font-medium mt-1">
                    {currentItem.subtitle}
                  </p>

                  <blockquote className="my-6 pl-4 border-l-2 border-cyan-400/40 text-sm sm:text-base italic text-slate-300 leading-relaxed">
                    {currentItem.quote}
                    <footer className="text-xs font-mono-tech text-slate-500 not-italic mt-2">
                      — {currentItem.author}
                    </footer>
                  </blockquote>

                  {/* Monospace Specs Grid */}
                  <div className="grid grid-cols-3 gap-3 my-6 pt-4 border-t border-white/[0.06]">
                    {currentItem.specs.map((sp) => (
                      <div key={sp.label} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                        <span className="text-[10px] font-mono-tech text-slate-400 uppercase block">{sp.label}</span>
                        <span className="font-display font-semibold text-sm sm:text-base text-white text-gradient-silver">{sp.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Core Execution Points */}
                  <div className="space-y-2.5 mb-8">
                    {currentItem.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pillar Action Trigger */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06]">
                  <a
                    href="#contact"
                    className="px-5 py-2.5 rounded-xl font-display font-semibold text-xs sm:text-sm btn-million-dollar inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Deploy {currentItem.shortLabel}</span>
                    <ArrowRight className="w-4 h-4 text-slate-950" />
                  </a>
                  <a
                    href="#ecosystem"
                    className="px-4 py-2.5 rounded-xl font-display text-xs sm:text-sm btn-glass-secondary inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Inspect Stack Architecture</span>
                  </a>
                </div>
              </div>

              {/* Right Column: High-Res Visual Showcase with HUD Accents */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
                  {/* Aspect Ratio Container */}
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#0A0E17]">
                    <img
                      src={currentItem.image}
                      alt={currentItem.title}
                      className="w-full h-full object-cover object-center filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-transparent opacity-80" />

                    {/* HUD Corner Elements */}
                    <div className="absolute top-3 left-3 px-2 py-1 rounded bg-[#05070B]/80 backdrop-blur-md border border-white/10 text-[9px] font-mono-tech text-cyan-400">
                      LIVE STREAM · TELEMETRY ACTIVE
                    </div>
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded bg-[#05070B]/80 backdrop-blur-md border border-white/10 text-[9px] font-mono-tech text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      HEALTHY
                    </div>

                    <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-[#05070B]/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono-tech">
                      <span className="text-slate-300">{currentItem.title}</span>
                      <span className="text-cyan-400 font-semibold">{currentItem.specs[0]?.value}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
