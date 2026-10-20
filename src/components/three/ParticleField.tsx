"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useReducedMotion } from "@/providers/ReducedMotionProvider";

interface ParticleFieldProps {
  count?: number;
  connectionDistance?: number;
  nodeColor?: string;
  lineColor?: string;
  className?: string;
}

export default function ParticleField({
  count = 200,
  connectionDistance = 80,
  nodeColor = "#55D6FF",
  lineColor = "rgba(91, 124, 255, 0.15)",
  className = "",
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { prefersReducedMotion, isMobile } = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || isMobile) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let animationFrameId: number;
    let isVisible = true;

    // Scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    camera.position.z = 240;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    const updateSize = () => {
      const width = container.clientWidth || 300;
      const height = container.clientHeight || 300;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      renderer.setPixelRatio(dpr);
      renderer.setSize(width, height, false);
    };

    updateSize();

    // Particle nodes setup
    const effectiveCount = Math.min(count, 350);
    const particlePositions = new Float32Array(effectiveCount * 3);
    const velocities = new Float32Array(effectiveCount * 3);
    const spread = 220;

    for (let i = 0; i < effectiveCount; i++) {
      const idx = i * 3;
      particlePositions[idx] = (Math.random() - 0.5) * spread;
      particlePositions[idx + 1] = (Math.random() - 0.5) * (spread * 0.8);
      particlePositions[idx + 2] = (Math.random() - 0.5) * (spread * 0.6);

      velocities[idx] = (Math.random() - 0.5) * 0.18;
      velocities[idx + 1] = (Math.random() - 0.5) * 0.18;
      velocities[idx + 2] = (Math.random() - 0.5) * 0.12;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    // Particle points
    const pointsMaterial = new THREE.PointsMaterial({
      color: new THREE.Color(nodeColor),
      size: 2.5,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(geometry, pointsMaterial);
    scene.add(points);

    // Dynamic connection lines
    const maxLineSegments = effectiveCount * 4;
    const linePositions = new Float32Array(maxLineSegments * 6);
    const lineColors = new Float32Array(maxLineSegments * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Mouse tracking
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 15;
      targetY = -y * 15;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Intersection observer to pause rendering off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        isVisible = Boolean(entry?.isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      const elapsed = clock.getElapsedTime();

      // Camera lerp with damping 0.05
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      camera.position.x = currentX;
      camera.position.y = currentY;
      camera.lookAt(0, 0, 0);

      // Autonomous node sinusoidal drift
      const positions = geometry.attributes.position?.array as Float32Array | undefined;
      if (positions) {
        let lineVertexIndex = 0;
        let lineSegmentCount = 0;

        for (let i = 0; i < effectiveCount; i++) {
          const idx = i * 3;
          // Apply velocity and slight sinusoidal oscillation
          const v0 = velocities[idx] ?? 0;
          const v1 = velocities[idx + 1] ?? 0;
          const v2 = velocities[idx + 2] ?? 0;

          positions[idx] = (positions[idx] ?? 0) + v0 + Math.sin(elapsed + i) * 0.03;
          positions[idx + 1] = (positions[idx + 1] ?? 0) + v1 + Math.cos(elapsed + i * 0.5) * 0.03;
          positions[idx + 2] = (positions[idx + 2] ?? 0) + v2;

          // Bounds bouncing
          const halfSpread = spread * 0.5;
          if (Math.abs(positions[idx] ?? 0) > halfSpread) {
            velocities[idx] = -v0;
          }
          if (Math.abs(positions[idx + 1] ?? 0) > halfSpread * 0.8) {
            velocities[idx + 1] = -v1;
          }
          if (Math.abs(positions[idx + 2] ?? 0) > halfSpread * 0.6) {
            velocities[idx + 2] = -v2;
          }

          // Compute lines between proximate nodes
          for (let j = i + 1; j < effectiveCount && lineSegmentCount < maxLineSegments; j++) {
            const jdx = j * 3;
            const dx = (positions[idx] ?? 0) - (positions[jdx] ?? 0);
            const dy = (positions[idx + 1] ?? 0) - (positions[jdx + 1] ?? 0);
            const dz = (positions[idx + 2] ?? 0) - (positions[jdx + 2] ?? 0);
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < connectionDistance) {
              const alpha = 1 - dist / connectionDistance;

              linePositions[lineVertexIndex] = positions[idx] ?? 0;
              linePositions[lineVertexIndex + 1] = positions[idx + 1] ?? 0;
              linePositions[lineVertexIndex + 2] = positions[idx + 2] ?? 0;

              linePositions[lineVertexIndex + 3] = positions[jdx] ?? 0;
              linePositions[lineVertexIndex + 4] = positions[jdx + 1] ?? 0;
              linePositions[lineVertexIndex + 5] = positions[jdx + 2] ?? 0;

              // Color gradient along the line (Cyan to Blue)
              lineColors[lineVertexIndex] = 0.33 * alpha;
              lineColors[lineVertexIndex + 1] = 0.84 * alpha;
              lineColors[lineVertexIndex + 2] = 1.0 * alpha;

              lineColors[lineVertexIndex + 3] = 0.35 * alpha;
              lineColors[lineVertexIndex + 4] = 0.48 * alpha;
              lineColors[lineVertexIndex + 5] = 1.0 * alpha;

              lineVertexIndex += 6;
              lineSegmentCount++;
            }
          }
        }

        const geomPosAttr = geometry.getAttribute("position");
        if (geomPosAttr) geomPosAttr.needsUpdate = true;

        const linePosAttr = lineGeometry.getAttribute("position");
        if (linePosAttr) linePosAttr.needsUpdate = true;

        const lineColorAttr = lineGeometry.getAttribute("color");
        if (lineColorAttr) lineColorAttr.needsUpdate = true;

        lineGeometry.setDrawRange(0, lineSegmentCount * 2);
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
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      geometry.dispose();
      lineGeometry.dispose();
      pointsMaterial.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, [count, connectionDistance, nodeColor, lineColor, prefersReducedMotion, isMobile]);

  // Reduced motion / mobile fallback: static ambient glow + SVG architecture diagram
  if (prefersReducedMotion || isMobile) {
    return (
      <div
        className={`w-full h-full relative overflow-hidden pointer-events-none flex items-center justify-center ${className}`}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-radial-fade bg-[radial-gradient(circle_at_50%_50%,rgba(85,214,255,0.08),transparent_70%)]" />
        <div className="w-64 h-64 rounded-full border border-cyan-500/20 bg-cyan-500/5 blur-xl animate-pulse" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
