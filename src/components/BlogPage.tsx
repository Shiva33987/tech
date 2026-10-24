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
    <div className="w-full bg-white text-slate-900 min-h-screen pt-28 sm:pt-32 pb-12 font-sans relative">
      {/* Subtle warm ambient background highlights */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-[#FA6400]/[0.035] rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-[#E60038]/[0.025] rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* BLOG HERO BANNER & BREADCRUMB                             */}
        {/* ========================================================= */}
        <div className="mb-4 sm:mb-5">
          <div className="flex items-center gap-2 mb-3 sm:mb-4 text-xs font-mono text-slate-500">
            <button
              type="button"
              onClick={onNavigateHome}
              className="hover:text-slate-900 transition-colors cursor-pointer flex items-center gap-1 group"
            >
              <span className="group-hover:-translate-x-0.5 transition-transform">&larr;</span>
              <span>Home</span>
            </button>
            <span>/</span>
            <span className="text-[#E65100] font-semibold">Engineering Blog &amp; Publications</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-4 sm:pb-5 border-b border-slate-200">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 sm:gap-4 mb-1.5">
                <div className="w-1.5 sm:w-2 h-8 sm:h-10 rounded-full bg-gradient-to-b from-[#FA6400] to-[#E60038] shadow-[0_0_12px_rgba(250,100,0,0.3)] shrink-0" />
                <div>
                  <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#E65100] block mb-0.5">
                    PEER-REVIEWED ARCHITECTURAL BRIEFS
                  </span>
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-['Space_Grotesk'] text-slate-950 tracking-tight leading-[1.1]">
                    Engineering Blog
                  </h1>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 sm:mt-2 leading-relaxed font-normal pl-4 sm:pl-5">
                Technical research, distributed systems post-mortems, and architectural benchmarks authored directly by our principal engineers and researchers.
              </p>
            </div>

            {/* Quick Publication Stats */}
            <div className="flex lg:flex-col gap-3 sm:gap-3 bg-slate-50 border border-slate-200 p-3 sm:p-3.5 rounded-2xl shrink-0 shadow-sm">
              <div>
                <span className="text-lg sm:text-xl font-extrabold text-slate-950 font-['Space_Grotesk'] block leading-none">
                  10,000+
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-slate-500 block mt-1">Subscribed Engineers</span>
              </div>
              <div className="lg:border-t lg:border-slate-200 lg:pt-2">
                <span className="text-lg sm:text-xl font-extrabold text-[#E65100] font-['Space_Grotesk'] block leading-none">
                  Fortnightly
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-slate-500 block mt-1">Production Dispatches</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* INTERACTIVE CATEGORY TABS & SEARCH                        */}
        {/* ========================================================= */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-4 sm:mb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? "bg-slate-950 text-white font-bold border-slate-950 shadow-md"
                      : "bg-slate-100 text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="relative min-w-[260px] sm:min-w-[300px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, paper, or tag..."
              className="w-full pl-10 pr-4 py-1.5 sm:py-2 rounded-full bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FA6400] focus:ring-1 focus:ring-[#FA6400] transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer"
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
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setReadingPost(featuredPost)}
            className="group relative rounded-3xl overflow-hidden border border-slate-200 bg-white hover:border-slate-300 transition-all duration-500 shadow-xl hover:shadow-2xl mb-8 cursor-pointer"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px] lg:min-h-[420px]">
              {/* Media */}
              <div className="lg:col-span-5 relative overflow-hidden min-h-[240px] lg:min-h-full">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-[#FA6400] text-white shadow-lg">
                    FEATURED PUBLICATION
                  </span>
                </div>
                {featuredPost.metricsHighlight && (
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/15 text-xs font-mono text-emerald-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{featuredPost.metricsHighlight}</span>
                  </div>
                )}
              </div>

              {/* Editorial */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-500 mb-3">
                    <span className="text-[#E65100] font-bold">{featuredPost.category}</span>
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

                  <h2 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-slate-950 group-hover:text-[#FA6400] transition-colors leading-tight mb-3">
                    {featuredPost.title}
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                    {featuredPost.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 border border-slate-200 text-slate-700"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-slate-200">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <span className="block text-sm font-semibold text-slate-900">
                        {featuredPost.author.name}
                      </span>
                      <span className="block text-xs font-mono text-slate-500">
                        {featuredPost.author.role}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 group-hover:bg-slate-950 text-slate-800 group-hover:text-white text-xs font-mono font-semibold tracking-wider transition-all duration-300 shadow-sm">
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
              className="group flex flex-col justify-between rounded-3xl overflow-hidden border border-slate-200 bg-white hover:border-slate-300 hover:shadow-xl transition-all duration-300 shadow-md cursor-pointer"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-slate-950/80 backdrop-blur-md border border-white/10 text-white font-medium">
                  {post.category}
                </span>
                {post.metricsHighlight && (
                  <span className="absolute bottom-2 right-3 text-[10px] font-mono text-emerald-300 bg-black/70 px-2 py-0.5 rounded border border-white/15">
                    {post.metricsHighlight.split("•")[0]}
                  </span>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-2">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.publishDate}</span>
                  </div>

                  <h3 className="text-lg font-bold font-['Space_Grotesk'] text-slate-950 group-hover:text-[#FA6400] transition-colors line-clamp-2 leading-snug mb-2.5">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-7 h-7 rounded-full object-cover border border-slate-200"
                    />
                    <span className="text-xs font-medium text-slate-700">
                      {post.author.name}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-slate-950 text-slate-700 group-hover:text-white flex items-center justify-center transition-all shadow-sm">
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
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:p-10 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono text-[#FA6400] font-bold mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#FA6400]" />
              <span>VRPI ARCHITECTURE DISPATCH</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk'] text-slate-950 tracking-tight">
              Get peer-reviewed systems architecture briefs every fortnight.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              No marketing noise. Pure production post-mortems, edge benchmarks, and high-concurrency architecture blueprints.
            </p>
          </div>

          <div className="w-full lg:w-auto min-w-[320px]">
            {newsletterSubscribed ? (
              <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
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
                  className="px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FA6400] focus:ring-1 focus:ring-[#FA6400] flex-1 min-w-0"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-2xl my-auto max-h-[90vh] overflow-y-auto text-slate-800"
              role="dialog"
              aria-modal="true"
            >
              <button
                type="button"
                onClick={() => setReadingPost(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-all cursor-pointer z-20"
                aria-label="Close article modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 text-xs font-mono text-slate-500 mb-3">
                <span className="px-2.5 py-1 rounded-md bg-orange-50 border border-orange-200 text-[#FA6400] font-semibold">
                  {readingPost.category}
                </span>
                <span>•</span>
                <span>{readingPost.readTime}</span>
                <span>•</span>
                <span>{readingPost.publishDate}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] text-slate-950 leading-tight mb-4">
                {readingPost.title}
              </h2>

              <div className="flex items-center gap-3.5 pb-6 mb-6 border-b border-slate-200">
                <img
                  src={readingPost.author.avatar}
                  alt={readingPost.author.name}
                  className="w-12 h-12 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    {readingPost.author.name}
                  </div>
                  <div className="text-xs font-mono text-slate-500">
                    {readingPost.author.role}
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-[16/8] mb-6 border border-slate-200 shadow-sm">
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

              <div className="space-y-5 text-sm sm:text-base leading-relaxed text-slate-700">
                <p className="text-base sm:text-lg text-slate-900 font-medium leading-relaxed">
                  {readingPost.content.lead}
                </p>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#E65100] font-bold block">
                    KEY ARCHITECTURAL TAKEAWAYS
                  </span>
                  <ul className="space-y-2.5">
                    {readingPost.content.keyTakeaways.map((takeaway, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 text-xs font-mono text-cyan-300">
                  <span className="text-slate-400 block mb-1">SYSTEM TOPOLOGY SPECIFICATION:</span>
                  {readingPost.content.architectureNote}
                </div>

                <p className="pt-2 text-slate-700">{readingPost.content.conclusion}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {readingPost.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 text-slate-600 border border-slate-200"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setReadingPost(null)}
                  className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono cursor-pointer shadow-sm"
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
