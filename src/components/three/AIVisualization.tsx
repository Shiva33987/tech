"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useReducedMotion } from "@/providers/ReducedMotionProvider";
import { Cpu, Database, Network, ShieldCheck, Play, Pause, RefreshCw } from "lucide-react";

const PIPELINE_STAGES = [
  {
    id: "ingest",
    name: "01. Vector Ingestion",
    sub: "High-throughput tokenization & HNSW indexing",
    latency: "14ms",
    icon: Database,
    color: "#55D6FF",
    metrics: "4.2M tokens/sec",
  },
  {
    id: "routing",
    name: "02. Semantic Routing",
    sub: "Intent classification & contextual graph retrieval",
    latency: "28ms",
    icon: Network,
    color: "#5B7CFF",
    metrics: "99.8% precision",
  },
  {
    id: "inference",
    name: "03. Model Inference",
    sub: "Speculative decoding on private GPU clusters",
    latency: "45ms",
    icon: Cpu,
    color: "#8B7CFF",
    metrics: "Zero prompt leakage",
  },
  {
    id: "action",
    name: "04. Verified Action",
    sub: "Deterministic tool invocation & compliance gates",
    latency: "12ms",
    icon: ShieldCheck,
    color: "#4ADE80",
    metrics: "100% audit log",
  },
];

export default function AIVisualization() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { prefersReducedMotion, isMobile } = useReducedMotion();
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (prefersReducedMotion || isMobile) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let animationFrameId: number;
    let isVisible = true;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.set(0, 0, 140);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    const updateSize = () => {
      const width = container.clientWidth || 600;
      const height = container.clientHeight || 400;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      renderer.setPixelRatio(dpr);
      renderer.setSize(width, height, false);
    };

    updateSize();

    // 4 Pipeline Stage Nodes in 3D space
    const stagePositions = [
      new THREE.Vector3(-60, 0, 0),
      new THREE.Vector3(-20, 10, 0),
      new THREE.Vector3(20, -10, 0),
      new THREE.Vector3(60, 0, 0),
    ];

    // Pipeline flow particles (200 flow particles max)
    const particleCount = 180;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleProgress = new Float32Array(particleCount);
    const particleSpeeds = new Float32Array(particleCount);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particleProgress[i] = Math.random();
      particleSpeeds[i] = 0.003 + Math.random() * 0.004;

      particleColors[i * 3] = 0.33;
      particleColors[i * 3 + 1] = 0.84;
      particleColors[i * 3 + 2] = 1.0;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 3.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const flowPoints = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(flowPoints);

    // Connecting spline line
    const curve = new THREE.CatmullRomCurve3(stagePositions);
    const splinePoints = curve.getPoints(100);
    const splineGeometry = new THREE.BufferGeometry().setFromPoints(splinePoints);
    const splineMaterial = new THREE.LineBasicMaterial({
      color: 0x5b7cff,
      transparent: true,
      opacity: 0.35,
    });
    const pipelineLine = new THREE.Line(splineGeometry, splineMaterial);
    scene.add(pipelineLine);

    // Observer to pause
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        isVisible = Boolean(entry?.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    let clock = new THREE.Clock();

    const animate = () => {
      if (!isVisible || !isPlaying) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      clock.getElapsedTime();

      // Update flow particles along the curve
      const posArray = particleGeometry.attributes.position?.array as Float32Array | undefined;
      if (posArray) {
        for (let i = 0; i < particleCount; i++) {
          const current = particleProgress[i] ?? 0;
          const next = current + (particleSpeeds[i] ?? 0.003);
          particleProgress[i] = next > 1 ? 0 : next;

          const point = curve.getPoint(particleProgress[i] ?? 0);
          const pIdx = i * 3;

          // slight random jitter around pipeline tube
          const jitter = (Math.sin(i * 12 + next * 20) * 1.5);
          posArray[pIdx] = point.x;
          posArray[pIdx + 1] = point.y + jitter;
          posArray[pIdx + 2] = point.z + jitter;
        }
        const posAttr = particleGeometry.getAttribute("position");
        if (posAttr) posAttr.needsUpdate = true;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => updateSize();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      particleGeometry.dispose();
      particleMaterial.dispose();
      splineGeometry.dispose();
      splineMaterial.dispose();
      renderer.dispose();
    };
  }, [prefersReducedMotion, isMobile, isPlaying]);

  return (
    <div className="relative w-full rounded-2xl glass-panel-elevated p-6 md:p-8 overflow-hidden border border-white/10">
      {/* Header telemetry bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs text-cyan-400 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            LIVE TELEMETRY STREAM
          </div>
          <span className="text-xs text-slate-400 font-mono hidden sm:inline">
            SYSTEM-LATENCY: 99ms P99
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause simulation" : "Resume simulation"}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={() => setActiveStage((prev) => (prev + 1) % PIPELINE_STAGES.length)}
            aria-label="Cycle stage"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3D Flow Canvas / Fallback container */}
      <div
        ref={containerRef}
        className="relative w-full h-44 sm:h-56 md:h-64 my-4 flex items-center justify-center overflow-hidden"
      >
        {prefersReducedMotion || isMobile ? (
          /* Simplified 2D SVG animation fallback as mandated in spec */
          <div className="w-full h-full flex flex-col justify-center items-center px-4" aria-hidden="true">
            <svg
              className="w-full max-w-lg h-24 stroke-cyan-400/40 fill-none"
              viewBox="0 0 400 60"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M 20 30 Q 110 5, 200 30 T 380 30"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <circle cx="40" cy="30" r="6" fill="#55D6FF" />
              <circle cx="150" cy="18" r="6" fill="#5B7CFF" />
              <circle cx="260" cy="42" r="6" fill="#8B7CFF" />
              <circle cx="360" cy="30" r="6" fill="#4ADE80" />
            </svg>
            <p className="text-xs text-slate-400 font-mono mt-2">
              Adaptive 2D low-power pipeline view active
            </p>
          </div>
        ) : (
          <canvas ref={canvasRef} className="w-full h-full block" />
        )}
      </div>

      {/* Interactive 4-stage breakdown cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
        {PIPELINE_STAGES.map((stage, idx) => {
          const Icon = stage.icon;
          const isSelected = activeStage === idx;
          return (
            <button
              key={stage.id}
              type="button"
              onClick={() => setActiveStage(idx)}
              className={`p-4 rounded-xl text-left transition-all duration-200 border ${
                isSelected
                  ? "bg-white/[0.08] border-cyan-400/40 shadow-lg shadow-cyan-500/5 ring-1 ring-cyan-400/20"
                  : "bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center border"
                  style={{
                    backgroundColor: `${stage.color}15`,
                    borderColor: `${stage.color}30`,
                    color: stage.color,
                  }}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-mono text-slate-400">{stage.latency}</span>
              </div>
              <h4 className="text-sm font-semibold text-slate-100">{stage.name}</h4>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">{stage.sub}</p>
              <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-cyan-300">
                <span>{stage.metrics}</span>
                <span className="text-slate-500 text-[10px]">VERIFIED</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
