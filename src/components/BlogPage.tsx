"use client";

import React, { useState, useEffect } from "react";
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
  Search,
} from "lucide-react";
import { useReducedMotion } from "@/providers/ReducedMotionProvider";
import { BLOG_POSTS, type BlogPost } from "@/components/BlogSection";

const CATEGORIES = [
  "All Publications",
  "AI & Agentic Systems",
  "Distributed Cloud",
  "Zero-Trust Security",
  "Fintech & High-Throughput",
] as const;

export default function BlogPage({ onNavigateHome }: { onNavigateHome?: () => void }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Publications");
  const [searchQuery, setSearchQuery] = useState("");
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === "All Publications" || post.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
    <div className="w-full bg-[#080B10] text-white min-h-screen pt-24 sm:pt-28 pb-16 font-sans relative">
      {/* Refined Enterprise Ambient Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle, highly diffused top ambient wash */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[420px] bg-gradient-to-b from-[#FA6400]/[0.05] via-[#E60038]/[0.03] to-transparent blur-3xl pointer-events-none" />
        {/* Crisp enterprise micro-grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* BLOG HERO BANNER & BREADCRUMB                             */}
        {/* ========================================================= */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-6 text-xs font-mono text-slate-400">
            <button
              type="button"
              onClick={onNavigateHome}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-[#FA6400] font-semibold">Engineering Blog &amp; Publications</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-10 rounded-full bg-gradient-to-b from-[#FA6400] to-[#E60038]" />
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FA6400] block">
                    PEER-REVIEWED ARCHITECTURAL BRIEFS
                  </span>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Space_Grotesk'] text-white tracking-tight leading-[1.1]">
                    Engineering Blog
                  </h1>
                </div>
              </div>
              <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-normal pl-5">
                Technical research, distributed systems post-mortems, and architectural benchmarks authored directly by our principal engineers and researchers.
              </p>
            </div>

            {/* Quick Publication Stats */}
            <div className="flex lg:flex-col gap-4 sm:gap-6 bg-white/[0.03] border border-white/10 p-5 rounded-2xl shrink-0">
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk'] block">
                  10,000+
                </span>
                <span className="text-xs font-mono text-slate-400">Subscribed Engineers</span>
              </div>
              <div className="lg:border-t lg:border-white/10 lg:pt-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#FA6400] font-['Space_Grotesk'] block">
                  Fortnightly
                </span>
                <span className="text-xs font-mono text-slate-400">Production Dispatches</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* INTERACTIVE CATEGORY TABS & SEARCH                        */}
        {/* ========================================================= */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-mono whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? "bg-white text-black font-bold border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                      : "bg-white/[0.03] text-slate-400 border-white/10 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="relative min-w-[260px] sm:min-w-[300px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, paper, or tag..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FA6400] transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* ========================================================= */}
        {/* FEATURED FLAGSHIP ARTICLE (Bento Top)                     */}
        {/* ========================================================= */}
        {featuredPost && (
          <motion.article
            initial={prefersReducedMotion ? false : { opacity: 0, y: 25 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setReadingPost(featuredPost)}
            className="group relative rounded-3xl overflow-hidden border border-white/[0.12] bg-[#0c1017] hover:border-white/30 transition-all duration-500 shadow-2xl mb-10 cursor-pointer"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px] lg:min-h-[420px]">
              {/* Media */}
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

              {/* Editorial */}
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

                  <h2 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-white group-hover:text-amber-200 transition-colors leading-tight mb-3">
                    {featuredPost.title}
                  </h2>

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

        {/* ========================================================= */}
        {/* SECONDARY ARTICLE GRID (3-Column Layout)                  */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.publishDate}</span>
                  </div>

                  <h3 className="text-lg font-bold font-['Space_Grotesk'] text-white group-hover:text-amber-300 transition-colors line-clamp-2 leading-snug mb-2.5">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed mb-4">
                    {post.summary}
                  </p>
                </div>

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

        {/* ========================================================= */}
        {/* ENGINEERING DISPATCH NEWSLETTER STRIP                     */}
        {/* ========================================================= */}
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-r from-[#170a14] via-[#0d1017] to-[#1a0e08] p-6 sm:p-8 lg:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-mono text-[#FA6400] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>VRPI ARCHITECTURE DISPATCH</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk'] text-white tracking-tight">
              Get peer-reviewed systems architecture briefs every fortnight.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              No marketing noise. Pure production post-mortems, edge benchmarks, and high-concurrency architecture blueprints.
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
                  placeholder="architect@enterprise.com"
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
        </div>
      </div>

      {/* ========================================================= */}
      {/* INTERACTIVE FULL-ARTICLE READER MODAL                     */}
      {/* ========================================================= */}
      <AnimatePresence>
        {readingPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-3xl bg-[#0b0e14] border border-white/20 rounded-3xl p-6 sm:p-10 shadow-2xl my-auto max-h-[90vh] overflow-y-auto text-slate-200"
              role="dialog"
              aria-modal="true"
            >
              <button
                type="button"
                onClick={() => setReadingPost(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer z-20"
                aria-label="Close article modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mb-3">
                <span className="px-2.5 py-1 rounded-md bg-[#FA6400]/15 border border-[#FA6400]/30 text-[#FA6400] font-semibold">
                  {readingPost.category}
                </span>
                <span>•</span>
                <span>{readingPost.readTime}</span>
                <span>•</span>
                <span>{readingPost.publishDate}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] text-white leading-tight mb-4">
                {readingPost.title}
              </h2>

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

              <div className="space-y-5 text-sm sm:text-base leading-relaxed text-slate-300">
                <p className="text-base sm:text-lg text-white font-medium leading-relaxed">
                  {readingPost.content.lead}
                </p>

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

                <button
                  type="button"
                  onClick={() => setReadingPost(null)}
                  className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
