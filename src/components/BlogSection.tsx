"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  Clock,
  User,
  Calendar,
  Bookmark,
  Share2,
  X,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Tag,
  CheckCircle2,
  Terminal,
  FileText,
} from "lucide-react";
import { useReducedMotion } from "@/providers/ReducedMotionProvider";

export interface BlogPost {
  id: string;
  category: "AI & Agentic Systems" | "Distributed Cloud" | "Zero-Trust Security" | "Fintech & High-Throughput";
  title: string;
  summary: string;
  readTime: string;
  publishDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  metricsHighlight?: string;
  tags: string[];
  image: string;
  featured?: boolean;
  content: {
    lead: string;
    keyTakeaways: string[];
    architectureNote: string;
    conclusion: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "embodied-ai-neuromorphic-2026",
    category: "AI & Agentic Systems",
    featured: true,
    title: "Embodied AI & Neuromorphic Edge Topologies in 2026 Enterprise Deployments",
    summary:
      "How multi-modal foundation models and sub-5ms neuromorphic edge chips are replacing traditional robotic kinematics pipelines across autonomous logistics and manufacturing.",
    readTime: "7 min read",
    publishDate: "OCT 18, 2026",
    author: {
      name: "Dr. Aris Thorne",
      role: "Chief AI Scientist, VRPI Systems",
      avatar: "/images/avatar-1.jpg",
    },
    metricsHighlight: "< 4.2ms Edge Latency • 99.4% Kinematic Accuracy",
    tags: ["Autonomous Systems", "ROS2", "Neuromorphic AI", "TensorRT"],
    image: "/images/it-showcase/ai-robotics.jpg",
    content: {
      lead:
        "The convergence of multi-modal vision-language-action (VLA) models with ultra-low-power neuromorphic processors has breached the latency barrier required for real-time spatial actuation. Systems that previously required multi-server rack computation can now achieve sub-5ms inference directly on autonomous edge nodes.",
      keyTakeaways: [
        "Elimination of cloud round-trip latency through quantized 4-bit edge weights running locally on dedicated NPU hardware.",
        "Deterministic ROS2 micro-kernel scheduling ensuring strict hard-realtime fail-safes during physical obstacle interactions.",
        "Self-calibrating multi-spectral LiDAR and event camera fusion under erratic ambient lighting environments.",
      ],
      architectureNote:
        "Architecture integrates a dual-ring memory fabric: Ring A handles safety-critical kinematics at 1000Hz, while Ring B streams contextual telemetry to central fleet analytics at 20Hz.",
      conclusion:
        "Enterprise industrial operators adopting this pattern observe a 42% decrease in robotic cycle times and zero unscheduled edge halt events across 12-month operational runs.",
    },
  },
  {
    id: "zero-downtime-kubernetes-mesh",
    category: "Distributed Cloud",
    title: "Orchestrating Multi-Region Kubernetes Meshes for 99.999% Service Level Availability",
    summary:
      "A deep architectural post-mortem on our geo-distributed GitOps pipeline handling over 850 million transactions with automated failover under 12 seconds.",
    readTime: "5 min read",
    publishDate: "OCT 14, 2026",
    author: {
      name: "Elena Rostova",
      role: "VP Cloud Engineering",
      avatar: "/images/avatar-2.jpg",
    },
    metricsHighlight: "99.999% Uptime • < 12s Region Failover",
    tags: ["Kubernetes", "eBPF", "GitOps", "Service Mesh"],
    image: "/images/it-showcase/cloud-infrastructure.jpg",
    content: {
      lead:
        "Achieving five-nines uptime in a global multi-tenant environment requires abandoning static DNS routing in favor of active eBPF-driven state inspection and autonomous regional drain controllers.",
      keyTakeaways: [
        "eBPF routing sidecars eliminate Envoy proxy memory overhead, reducing P99 latency by 28%.",
        "Declarative ArgoCD control loops maintain zero-drift policy compliance across AWS, Azure, and bare-metal nodes.",
        "Synthetic health probes conduct continuous chaos validation to trigger failovers before end-users experience degradation.",
      ],
      architectureNote:
        "Inter-region consistency uses a Raft consensus cluster with tuned lease timeouts to prevent split-brain scenarios during Atlantic fiber cut simulations.",
      conclusion:
        "Resilient multi-cloud engineering is no longer an insurance policy; it is the fundamental prerequisite for continuous enterprise market confidence.",
    },
  },
  {
    id: "zero-trust-cryptography-enclaves",
    category: "Zero-Trust Security",
    title: "Quantum-Resistant Enclaves: Sovereign Security for High-Assurance Financial Data",
    summary:
      "Implementing Kyber and Dilithium lattice cryptography inside isolated hardware enclaves to safeguard confidential banking transactions against harvest-now-decrypt-later vectors.",
    readTime: "8 min read",
    publishDate: "OCT 09, 2026",
    author: {
      name: "Marcus Vance",
      role: "Principal Cryptographic Architect",
      avatar: "/images/avatar-3.jpg",
    },
    metricsHighlight: "Post-Quantum Dilithium • Zero-Knowledge Proofs",
    tags: ["Post-Quantum", "HSM Enclaves", "SOC2 Type II", "mTLS"],
    image: "/images/it-showcase/cyber-defense.jpg",
    content: {
      lead:
        "Adversaries are actively stockpiling encrypted financial and corporate telemetry in anticipation of cryptanalytically relevant quantum computers. Implementing quantum-resistant key encapsulation today is vital.",
      keyTakeaways: [
        "Hybrid post-quantum TLS 1.3 tunnels combining classical ECDH with CRYSTALS-Kyber-768 for defense-in-depth.",
        "Remote attestation validation running exclusively inside AMD SEV-SNP protected execution boundaries.",
        "Continuous automated rotation of sovereign credentials with zero-knowledge cryptographic receipts.",
      ],
      architectureNote:
        "Enclaves operate with no persistent root credentials; ephemeral private keys exist solely within volatile memory registers and self-terminate upon heartbeat loss.",
      conclusion:
        "Financial institutions operating on VRPI security fabrics now meet the upcoming 2030 NIST post-quantum compliance mandate four years ahead of schedule.",
    },
  },
  {
    id: "high-throughput-event-streaming",
    category: "Fintech & High-Throughput",
    title: "Sub-Millisecond Event Topologies: Processing 1.2M EPS on Memory-Mapped Fabrics",
    summary:
      "How zero-copy ring buffers and kernel-bypass networking enabled real-time fraud scoring for top-tier clearing houses with zero dropped frames.",
    readTime: "6 min read",
    publishDate: "OCT 02, 2026",
    author: {
      name: "Siddharth Verma",
      role: "Lead Systems Architect",
      avatar: "/images/avatar-4.jpg",
    },
    metricsHighlight: "1.2M Events/Sec • 0.35ms P99 Latency",
    tags: ["Rust", "Zero-Copy", "High-Throughput", "Kafka Mesh"],
    image: "/images/it-showcase/data-intelligence.jpg",
    content: {
      lead:
        "When processing clearing house order books, standard JVM garbage collection pauses are disqualifying. By migrating transaction ingestion to bare-metal Rust with DPDK kernel bypass, we reduced P99 latency variance from 12ms to 350 microseconds.",
      keyTakeaways: [
        "Single-writer lockless ring buffers prevent CPU cache thrashing across NUMA nodes.",
        "Hardware-offloaded TCP packet filtering discards malicious telemetry at the NIC layer before CPU context switching.",
        "Parallel snapshotting pipeline writes encrypted audit ledgers to NVMe storage arrays with zero throughput degradation.",
      ],
      architectureNote:
        "Memory-mapped files allow instant crash recovery by retaining buffer state across unexpected process restarts with zero data corruption.",
      conclusion:
        "High-performance architecture is an art of mechanical sympathy: aligning your software abstractions with the underlying silicon architecture.",
    },
  },
];

const CATEGORIES = [
  "All Publications",
  "AI & Agentic Systems",
  "Distributed Cloud",
  "Zero-Trust Security",
  "Fintech & High-Throughput",
] as const;

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Publications");
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const filteredPosts =
    selectedCategory === "All Publications"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === selectedCategory);

  const featuredPost = filteredPosts.find((p) => p.featured) || filteredPosts[0];
  const gridPosts = filteredPosts.filter((p) => p.id !== featuredPost?.id);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim().includes("@")) {
      setNewsletterSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <section
      id="blog"
      className="relative w-full bg-[#080B10] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans border-t border-white/[0.08]"
      aria-label="VRPI Blog and Technical Engineering Publications"
    >
      {/* Background Ambient Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[300px] bg-[#E60038]/[0.06] rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[300px] bg-[#FA6400]/[0.05] rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-10 rounded-full bg-gradient-to-b from-[#FA6400] to-[#E60038]" />
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FA6400] block">
                  TECHNICAL INSIGHTS &amp; ENGINEERING PAPERS
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Space_Grotesk'] tracking-tight text-white">
                  Engineering Blog
                </h2>
              </div>
            </div>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl pl-5 mt-2 leading-relaxed">
              Architectural deep-dives, production post-mortems, and research notes authored directly by our principal engineers and AI researchers.
            </p>
          </div>

          {/* Interactive Category Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? "bg-white text-black font-semibold border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                      : "bg-white/[0.04] text-slate-400 border-white/10 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* ============================================================ */}
        {/* FEATURED FLAGSHIP ARTICLE (Bento Top)                        */}
        {/* ============================================================ */}
        {featuredPost && (
          <motion.article
            initial={prefersReducedMotion ? false : { opacity: 0, y: 25 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setReadingPost(featuredPost)}
            className="group relative rounded-3xl overflow-hidden border border-white/[0.12] bg-[#0c1017] hover:border-white/30 transition-all duration-500 shadow-2xl mb-8 cursor-pointer"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px] lg:min-h-[420px]">
              {/* Left Column: Visual Media with atmospheric glow */}
              <div className="lg:col-span-5 relative overflow-hidden min-h-[240px] lg:min-h-full">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.85] group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-[#FA6400] text-black shadow-lg">
                    FEATURED PUBLICATION
                  </span>
                </div>
                {featuredPost.metricsHighlight && (
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 text-xs font-mono text-emerald-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{featuredPost.metricsHighlight}</span>
                  </div>
                )}
              </div>

              {/* Right Column: Editorial Overview & Author Credential */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mb-3">
                    <span className="text-[#FA6400] font-semibold">{featuredPost.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {featuredPost.publishDate}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-white group-hover:text-amber-200 transition-colors leading-tight mb-3">
                    {featuredPost.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                    {featuredPost.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.05] border border-white/10 text-slate-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author Card & Read CTA */}
                <div className="flex items-center justify-between pt-5 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-10 h-10 rounded-full object-cover border border-white/20"
                    />
                    <div>
                      <span className="block text-sm font-semibold text-white">
                        {featuredPost.author.name}
                      </span>
                      <span className="block text-xs font-mono text-slate-400">
                        {featuredPost.author.role}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.08] group-hover:bg-white text-white group-hover:text-black text-xs font-mono font-semibold tracking-wider transition-all duration-300">
                    <span>READ BRIEF</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        )}

        {/* ============================================================ */}
        {/* SECONDARY ARTICLE GRID (3-Column Layout)                     */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {gridPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => setReadingPost(post)}
              className="group flex flex-col justify-between rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0c1017]/80 hover:bg-[#10141f] hover:border-white/25 transition-all duration-300 shadow-lg cursor-pointer"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1017] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-black/70 backdrop-blur-md border border-white/10 text-white font-medium">
                  {post.category}
                </span>
                {post.metricsHighlight && (
                  <span className="absolute bottom-2 right-3 text-[10px] font-mono text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-500/30">
                    {post.metricsHighlight.split("•")[0]}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.publishDate}</span>
                  </div>

                  <h4 className="text-lg font-bold font-['Space_Grotesk'] text-white group-hover:text-amber-300 transition-colors line-clamp-2 leading-snug mb-2.5">
                    {post.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed mb-4">
                    {post.summary}
                  </p>
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-7 h-7 rounded-full object-cover border border-white/20"
                    />
                    <span className="text-xs font-medium text-slate-300">
                      {post.author.name}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white/[0.05] group-hover:bg-white text-white group-hover:text-black flex items-center justify-center transition-all">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ============================================================ */}
        {/* ENGINEERING DISPATCH NEWSLETTER STRIP                        */}
        {/* ============================================================ */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-r from-[#170a14] via-[#0d1017] to-[#1a0e08] p-6 sm:p-8 lg:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-mono text-[#FA6400] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>VRPI ARCHITECTURE DISPATCH</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk'] text-white tracking-tight">
              Get peer-reviewed systems architecture briefs every fortnight.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              No sales pitches. Straightforward production benchmarks, distributed systems analyses, and sovereign AI architectures.
            </p>
          </div>

          <div className="w-full lg:w-auto min-w-[320px]">
            {newsletterSubscribed ? (
              <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Confirmed. Welcome to the VRPI Architecture Dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="engineer@enterprise.com"
                  required
                  className="px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FA6400] flex-1 min-w-0"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#FA6400] to-[#E60038] text-white font-mono text-xs font-bold uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-md cursor-pointer whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>

      {/* ============================================================ */}
      {/* INTERACTIVE FULL-ARTICLE READER MODAL                        */}
      {/* ============================================================ */}
      <AnimatePresence>
        {readingPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-3xl bg-[#0b0e14] border border-white/20 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden my-auto max-h-[90vh] overflow-y-auto text-slate-200"
              role="dialog"
              aria-modal="true"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setReadingPost(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer z-20"
                aria-label="Close article modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Category & Meta */}
              <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mb-3">
                <span className="px-2.5 py-1 rounded-md bg-[#FA6400]/15 border border-[#FA6400]/30 text-[#FA6400] font-semibold">
                  {readingPost.category}
                </span>
                <span>•</span>
                <span>{readingPost.readTime}</span>
                <span>•</span>
                <span>{readingPost.publishDate}</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] text-white leading-tight mb-4">
                {readingPost.title}
              </h2>

              {/* Author Strip */}
              <div className="flex items-center gap-3.5 pb-6 mb-6 border-b border-white/10">
                <img
                  src={readingPost.author.avatar}
                  alt={readingPost.author.name}
                  className="w-12 h-12 rounded-full object-cover border border-white/25"
                />
                <div>
                  <div className="text-sm font-bold text-white">
                    {readingPost.author.name}
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    {readingPost.author.role}
                  </div>
                </div>
              </div>

              {/* Article Hero Media */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/8] mb-6 border border-white/10">
                <img
                  src={readingPost.image}
                  alt={readingPost.title}
                  className="w-full h-full object-cover"
                />
                {readingPost.metricsHighlight && (
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono text-emerald-400">
                    {readingPost.metricsHighlight}
                  </div>
                )}
              </div>

              {/* Main Narrative */}
              <div className="space-y-5 text-sm sm:text-base leading-relaxed text-slate-300">
                <p className="text-base sm:text-lg text-white font-medium leading-relaxed">
                  {readingPost.content.lead}
                </p>

                {/* Key Architectural Takeaways Box */}
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-amber-400 font-bold block">
                    KEY ARCHITECTURAL TAKEAWAYS
                  </span>
                  <ul className="space-y-2.5">
                    {readingPost.content.keyTakeaways.map((takeaway, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                  <span className="text-slate-400 block mb-1">SYSTEM TOPOLOGY SPECIFICATION:</span>
                  {readingPost.content.architectureNote}
                </div>

                <p className="pt-2">{readingPost.content.conclusion}</p>
              </div>

              {/* Modal Actions */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {readingPost.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.05] text-slate-400 border border-white/10"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="#contact"
                    onClick={() => setReadingPost(null)}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FA6400] to-[#E60038] text-white text-xs font-mono font-bold tracking-wider uppercase text-center cursor-pointer hover:brightness-110"
                  >
                    Consult Authors
                  </a>
                  <button
                    type="button"
                    onClick={() => setReadingPost(null)}
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
