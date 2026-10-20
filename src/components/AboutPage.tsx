"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  Target,
  Award,
  ShieldCheck,
  Globe2,
  Cpu,
  Layers,
  Building2,
  Calendar,
  Clock,
  TrendingUp,
  FileText,
  Lock,
  X,
  ExternalLink,
} from "lucide-react";
import { useReducedMotion } from "@/providers/ReducedMotionProvider";

interface LeaderProfile {
  name: string;
  role: string;
  discipline: string;
  experience: string;
  bio: string;
  credentials: string[];
}

const LEADERS: LeaderProfile[] = [
  {
    name: "Rajesh V. Sharma",
    role: "Managing Director & CEO",
    discipline: "Executive Governance & Corporate Strategy",
    experience: "22+ Years in Enterprise Tech",
    bio: "Pioneered distributed systems architecture and enterprise technology scale across South Asia and North America. Oversees group-wide capital allocation, strategic partnerships, and global delivery standards.",
    credentials: ["B.Tech IIT Bombay", "Ex-VP Engineering", "Board Advisor"],
  },
  {
    name: "Pooja Krishnamurthy",
    role: "Chief Technology Officer",
    discipline: "Distributed Systems & Cloud Architecture",
    experience: "18+ Years in Cloud Engineering",
    bio: "Spearheads VRPI's technical roadmap, zero-trust cloud topologies, and five-nines infrastructure deployments. Deeply focused on micro-frontends, high-concurrency event fabrics, and edge computing.",
    credentials: ["M.S. Computer Science", "Author of 4 Patents", "Kubernetes Fellow"],
  },
  {
    name: "Vikramaditya Sen",
    role: "Head of AI & Robotic Systems",
    discipline: "Embodied AI & Neuromorphic Edge",
    experience: "15+ Years in Neural Systems",
    bio: "Leads research and industrial deployment of multi-modal foundation models, ROS2 kinematic robotics, and sub-millisecond edge AI inference across autonomous manufacturing and logistics.",
    credentials: ["Ph.D. Machine Intelligence", "IEEE Senior Member", "Ex-R&D Lead"],
  },
];

const MILESTONES = [
  {
    year: "2021",
    title: "Incorporation & Core Systems Practice",
    desc: "VR PI Group founded with a charter to deliver high-velocity, fault-tolerant digital software architectures for banking, asset management, and enterprise logistics.",
  },
  {
    year: "2022",
    title: "Distributed Cloud Mesh & Global Nodes",
    desc: "Scaled production service meshes to 40+ enterprise nodes with automated GitOps pipelines and zero-downtime rolling upgrades.",
  },
  {
    year: "2023",
    title: "Smart DOOH Advertising Network Launch",
    desc: "Engineered programmatic digital-out-of-home display network with computer vision audience verification across railway terminals and transit hubs.",
  },
  {
    year: "2024",
    title: "Co-Working Tech Hubs & Edu-Tech Scale",
    desc: "Opened biometric-secured smart workspaces and launched low-latency WebRTC interactive learning platforms servicing 100k+ concurrent students.",
  },
  {
    year: "2025",
    title: "Embodied AI & Robotics Lab Inauguration",
    desc: "Established dedicated kinematics and neuromorphic edge lab, pioneering sub-5ms spatial intelligence for autonomous industrial robotics.",
  },
  {
    year: "2026",
    title: "Post-Quantum Cryptography & Global Expansion",
    desc: "Implemented NIST-compliant post-quantum key encapsulation across cloud fabrics, serving 50+ enterprise scale-ups globally.",
  },
];

export default function AboutPage({ onNavigateHome }: { onNavigateHome?: () => void }) {
  const [activeTab, setActiveTab] = useState<"vision" | "governance" | "compliance">("vision");
  const [isCharterOpen, setIsCharterOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full bg-white text-slate-900 min-h-screen pt-24 sm:pt-28 pb-16 font-sans">
      {/* Subtle warm ambient background highlights */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-[#FA6400]/[0.035] rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-[#E60038]/[0.025] rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* HERO BANNER & BREADCRUMB                                  */}
        {/* ========================================================= */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-16"
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-xs font-mono text-slate-500">
            <button
              type="button"
              onClick={onNavigateHome}
              className="hover:text-slate-900 transition-colors cursor-pointer flex items-center gap-1 group"
            >
              <span className="group-hover:-translate-x-0.5 transition-transform">&larr;</span>
              <span>Home</span>
            </button>
            <span>/</span>
            <span className="text-[#E65100] font-semibold">About Us &amp; Corporate Governance</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 sm:gap-4 mb-3">
                <div className="w-1.5 sm:w-2 h-10 sm:h-12 rounded-full bg-gradient-to-b from-[#FA6400] to-[#E60038] shadow-[0_0_12px_rgba(250,100,0,0.3)] shrink-0" />
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#E65100] block mb-0.5">
                    WHO WE ARE &amp; WHAT WE STAND FOR
                  </span>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 font-['Space_Grotesk'] tracking-tight leading-[1.1]">
                    About Us
                  </h1>
                </div>
              </div>
              <p className="text-base sm:text-lg text-slate-700 mt-4 leading-relaxed font-normal pl-5">
                Specializing in full-lifecycle digital engineering, advanced AI neural pipelines, and high-availability cloud infrastructure. We bridge cutting-edge research with industrial-grade deployment.
              </p>
            </div>

            {/* Verified Enterprise Metric Badges */}
            <div className="flex lg:flex-col gap-4 sm:gap-6 bg-slate-50 border border-slate-200 p-5 rounded-2xl shrink-0 shadow-sm">
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-['Space_Grotesk'] block">
                  Est. 2021
                </span>
                <span className="text-xs font-mono text-slate-500">Incorporated &amp; Scaled</span>
              </div>
              <div className="lg:border-t lg:border-slate-200 lg:pt-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#E65100] font-['Space_Grotesk'] block">
                  100% SLA
                </span>
                <span className="text-xs font-mono text-slate-500">Verified Production Uptime</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* EXECUTIVE LEADERSHIP SHOWCASE                             */}
        {/* ========================================================= */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
            {/* Left Portrait Card */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, x: -30 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative group"
            >
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#FA6400]/25 to-[#E60038]/25 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-700 pointer-events-none" />

              <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl">
                <img
                  src="/images/about-team.jpg"
                  alt="VR PI Group Executive Leadership Team"
                  className="w-full aspect-[4/3] sm:aspect-[1.15/1] object-cover object-top transition-transform duration-700 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-xl border border-white/20 text-white flex items-center justify-between shadow-xl">
                  <div>
                    <div className="text-xs sm:text-sm font-bold font-['Space_Grotesk'] tracking-tight text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#FA6400] animate-pulse" />
                      <span>VRPI Executive Leadership</span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-300 mt-0.5">
                      Integrity • Excellence • Innovation
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                      ISO 27001
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Story & Strategic Narrative */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, x: 30 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <div className="relative pl-0 sm:pl-2 mb-6">
                <p className="text-lg sm:text-xl lg:text-[22px] leading-relaxed text-slate-800 font-normal">
                  &ldquo;
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E65100] via-[#FA6400] to-[#E60038]">
                    VR PI Group of Companies
                  </span>
                  &rdquo; thrives as a dynamic and forward-thinking enterprise, specializing in cutting-edge industry solutions. Our core emphasis on pioneering software technology ensures the delivery of top-tier services, all while nurturing a culture of creativity, inclusivity, and unwavering excellence.
                </p>
                <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
                  By upholding integrity, fostering innovation, and promoting collaboration, we aspire to propel growth, generate value, and effect positive change within our industry and wider community.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsCharterOpen(true)}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-[#FA6400] to-[#E60038] hover:from-[#FF7A00] hover:to-[#FF1A4B] shadow-[0_8px_25px_rgba(250,100,0,0.35)] transition-all cursor-pointer group"
                >
                  <span>Read Corporate Charter</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <span>Connect with Board</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Leadership Profiles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEADERS.map((leader, lIdx) => (
              <motion.div
                key={leader.name}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 25 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: prefersReducedMotion ? 0 : lIdx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#E65100] font-bold block mb-1">
                    {leader.discipline}
                  </span>
                  <h3 className="text-xl font-bold font-['Space_Grotesk'] text-slate-950 mb-0.5">
                    {leader.name}
                  </h3>
                  <span className="text-xs font-semibold text-slate-600 block mb-3">
                    {leader.role} • {leader.experience}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {leader.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex flex-wrap gap-1.5">
                  {leader.credentials.map((cred) => (
                    <span
                      key={cred}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white border border-slate-200 text-slate-700 font-medium"
                    >
                      {cred}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6-YEAR COMPANY JOURNEY TIMELINE (2021 - 2026)             */}
        {/* ========================================================= */}
        <section className="mb-20 rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#E65100] block mb-2">
              FOUNDATIONAL MILESTONES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] text-slate-950 tracking-tight">
              Our Journey of Technological Velocity
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              From our incorporation in 2021 to deploying high-concurrency neural fabrics and sovereign cryptography in 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MILESTONES.map((m, idx) => (
              <motion.div
                key={m.year}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 25 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: prefersReducedMotion ? 0 : idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FA6400] to-[#E60038] block mb-2">
                    {m.year}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2 font-['Space_Grotesk']">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* ENTERPRISE SECURITY & COMPLIANCE MATRIX                   */}
        {/* ========================================================= */}
        <section className="mb-20">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#E65100] block mb-2">
              AUDITED COMPLIANCE &amp; GOVERNANCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] text-slate-950 tracking-tight">
              Enterprise Trust &amp; Sovereignty
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
              <ShieldCheck className="w-8 h-8 text-emerald-600 mb-4" />
              <h3 className="text-base font-bold text-slate-950 mb-1 font-['Space_Grotesk']">
                ISO 27001 Certified
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Comprehensive Information Security Management Systems (ISMS) protecting code repositories and data pipelines.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
              <Lock className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-base font-bold text-slate-950 mb-1 font-['Space_Grotesk']">
                SOC 2 Type II Audited
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Independent verification validating operational security, processing integrity, and customer data confidentiality.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
              <Globe2 className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-base font-bold text-slate-950 mb-1 font-['Space_Grotesk']">
                GDPR &amp; DPDP Enforced
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strict data residency compliance, isolated local databases, and zero cross-border telemetry leakage.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
              <Award className="w-8 h-8 text-amber-600 mb-4" />
              <h3 className="text-base font-bold text-slate-950 mb-1 font-['Space_Grotesk']">
                99.999% High Availability
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Contractually backed SLAs with automated geo-failover and 24/7 dedicated engineering incident response.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* ESG & OPEN-SOURCE COMMITMENT STRIP                        */}
        {/* ========================================================= */}
        <section className="mb-16 rounded-3xl bg-slate-950 text-white p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FA6400] block mb-2">
              ENVIRONMENTAL &amp; SOCIAL IMPACT
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight">
              Committed to Sustainable Technology &amp; Education
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
              We allocate 2% of annual engineering hours to open-source contributions and provide full tuition grants for underprivileged women pursuing computer science degrees. All cloud workloads run on carbon-neutral renewable regions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-white text-slate-950 hover:bg-slate-200 transition-colors text-center"
            >
              Contact Our Board
            </a>
          </div>
        </section>
      </div>

      {/* ========================================================= */}
      {/* ENTERPRISE CHARTER & CAPABILITIES MODAL                   */}
      {/* ========================================================= */}
      <AnimatePresence>
        {isCharterOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-2xl bg-[#0C1017] border border-white/15 rounded-3xl p-6 sm:p-8 text-white shadow-2xl my-auto max-h-[90vh] overflow-y-auto"
              role="dialog"
              aria-modal="true"
            >
              <button
                type="button"
                onClick={() => setIsCharterOpen(false)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Close charter modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-1.5 h-6 rounded-full bg-[#FA6400]" />
                <span className="text-xs font-mono font-bold tracking-widest text-[#FA6400] uppercase">
                  ENTERPRISE CHARTER &amp; MISSION
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black font-['Space_Grotesk'] text-white mb-4">
                VR PI Group of Companies
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Specializing in full-lifecycle digital engineering, advanced AI neural pipelines, and high-availability cloud infrastructure. We bridge cutting-edge research with industrial-grade deployment to empower global organizations.
              </p>

              <div className="space-y-3 mb-6">
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Integrity &amp; Rigor</h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Strict ethical standards, enterprise data governance, and uncompromising software quality.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FA6400] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Innovation that Scales</h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Empowering partners with production-ready AI models and cloud microservices.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E60038] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Global Social &amp; Economic Impact</h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Generating shared value for enterprises, developer communities, and the broader digital ecosystem.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setIsCharterOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-colors cursor-pointer"
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
