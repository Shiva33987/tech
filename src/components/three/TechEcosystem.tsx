"use client";

import React, { useState } from "react";
import { useReducedMotion } from "@/providers/ReducedMotionProvider";
import {
  Layers,
  Cpu,
  Database,
  Cloud,
  Code2,
  Workflow,
  Lock,
  Zap,
  ArrowRight,
  Terminal,
} from "lucide-react";

interface TechNode {
  id: string;
  name: string;
  category: "Runtime" | "AI & Data" | "Infrastructure" | "Protocol";
  description: string;
  stat: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const TECH_NODES: TechNode[] = [
  {
    id: "nextjs",
    name: "Next.js 15 & React 19",
    category: "Runtime",
    description: "App Router streaming SSR, React Server Components, zero client JS overhead for static paths.",
    stat: "< 100ms TTFB",
    icon: Code2,
    color: "#00F0FF",
  },
  {
    id: "typescript",
    name: "TypeScript Strict Mode",
    category: "Runtime",
    description: "End-to-end compile-time safety, strictNullChecks, noUncheckedIndexedAccess, strict schemas.",
    stat: "100% Type Coverage",
    icon: Layers,
    color: "#3B82F6",
  },
  {
    id: "python-ai",
    name: "PyTorch & LangChain",
    category: "AI & Data",
    description: "Autonomous reasoning engines, token streaming, quantized inference, semantic vector search.",
    stat: "4.2M tokens/s",
    icon: Cpu,
    color: "#8B5CF6",
  },
  {
    id: "pgvector",
    name: "PostgreSQL + pgvector",
    category: "AI & Data",
    description: "ACID transactional relational core coupled with high-dimensional HNSW vector index embeddings.",
    stat: "99.999% Durability",
    icon: Database,
    color: "#00F0FF",
  },
  {
    id: "kubernetes",
    name: "Kubernetes & Docker",
    category: "Infrastructure",
    description: "Multi-region cluster orchestration, auto-scaling horizontal pods, zero-downtime rolling deploys.",
    stat: "99.99% Uptime",
    icon: Cloud,
    color: "#3B82F6",
  },
  {
    id: "redis-kafka",
    name: "Kafka & Redis Core",
    category: "Protocol",
    description: "Sub-millisecond pub/sub streaming queues, distributed caches, event-driven state hydration.",
    stat: "< 2ms p99 latency",
    icon: Zap,
    color: "#8B5CF6",
  },
  {
    id: "security",
    name: "Zero-Trust Security",
    category: "Infrastructure",
    description: "mTLS inter-service mesh, automated IAM credential rotation, SOC2/HIPAA compliance baseline.",
    stat: "0 Exploit Vectors",
    icon: Lock,
    color: "#10B981",
  },
  {
    id: "ci-cd",
    name: "GitOps & Terraform",
    category: "Infrastructure",
    description: "Declarative infrastructure as code, automated regression gates, instant canary rollback.",
    stat: "12m Deploy Cycle",
    icon: Workflow,
    color: "#00F0FF",
  },
];

export default function TechEcosystem() {
  const { prefersReducedMotion, isMobile } = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedNode, setSelectedNode] = useState<TechNode>(TECH_NODES[0]!);

  const categories = ["All", "Runtime", "AI & Data", "Infrastructure", "Protocol"];

  const filteredNodes =
    activeCategory === "All"
      ? TECH_NODES
      : TECH_NODES.filter((node) => node.category === activeCategory);

  return (
    <div className="relative w-full rounded-3xl glass-panel-elevated p-6 sm:p-10 border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
      {/* Category filter tabs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-hud border border-cyan-400/30 text-xs font-mono-tech text-cyan-400 mb-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>TECHNOLOGY MATRIX</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-100 tracking-tight">
            Engineered for Resilient Scale
          </h3>
        </div>

        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.06] overflow-x-auto max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-display font-medium transition-all cursor-pointer ${
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

      {/* Main Grid View */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mt-6 sm:mt-8">
        {filteredNodes.map((node) => {
          const Icon = node.icon;
          const isSelected = selectedNode.id === node.id;
          return (
            <button
              key={node.id}
              type="button"
              onClick={() => setSelectedNode(node)}
              className={`p-3.5 sm:p-6 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between group cursor-pointer ${
                isSelected
                  ? "bg-white/[0.08] border-cyan-400/50 shadow-[0_0_25px_rgba(0,240,255,0.18)]"
                  : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: `${node.color}18`,
                      borderColor: `${node.color}40`,
                      color: node.color,
                    }}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] uppercase font-mono-tech tracking-wider text-slate-400 px-1.5 sm:px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
                    {node.category}
                  </span>
                </div>
                <h4 className="text-xs sm:text-base font-display font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors line-clamp-1 sm:line-clamp-none">
                  {node.name}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-1 sm:mt-2 line-clamp-2 leading-relaxed">
                  {node.description}
                </p>
              </div>

              <div className="mt-3 sm:mt-5 pt-2 sm:pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] sm:text-xs font-mono-tech">
                <span className="text-cyan-400 font-semibold">{node.stat}</span>
                <span className="text-slate-500 group-hover:translate-x-1 group-hover:text-cyan-400 transition-all">
                  →
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Node Spec Inspector Drawer */}
      <div className="mt-8 p-5 sm:p-7 rounded-2xl bg-[#080C14]/90 border border-cyan-400/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-[0_0_30px_rgba(0,240,255,0.1)]">
        <div className="flex items-center gap-4">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center border shrink-0"
            style={{
              backgroundColor: `${selectedNode.color}20`,
              borderColor: `${selectedNode.color}50`,
              color: selectedNode.color,
            }}
          >
            {React.createElement(selectedNode.icon, { className: "w-7 h-7" })}
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <h4 className="text-lg font-display font-bold text-slate-100">{selectedNode.name}</h4>
              <span className="text-[10px] font-mono-tech px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                {selectedNode.category}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              {selectedNode.description}
            </p>
          </div>
        </div>

        <div className="text-left sm:text-right shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 w-full sm:w-auto border-white/10">
          <div className="text-[10px] uppercase tracking-wider text-slate-400 font-mono-tech">
            Production Benchmark
          </div>
          <div className="text-lg font-display font-bold font-mono-tech text-cyan-400 mt-0.5">
            {selectedNode.stat}
          </div>
        </div>
      </div>
    </div>
  );
}
