"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useReducedMotion } from "@/providers/ReducedMotionProvider";

export default function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { prefersReducedMotion, isMobile } = useReducedMotion();
  const [hasWebGLError, setHasWebGLError] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || isMobile) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let animationFrameId: number;
    let isVisible = true;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;

    try {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
      camera.position.z = 190;

      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      setHasWebGLError(true);
      return;
    }

    const updateSize = () => {
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      renderer.setPixelRatio(dpr);
      renderer.setSize(width, height, false);
    };

    updateSize();

    // Infrastructure topology nodes: Hubs and edge compute points
    const hubCount = 6;
    const edgeCount = 180;
    const totalNodes = hubCount + edgeCount;

    const nodePositions = new Float32Array(totalNodes * 3);
    const initialPositions = new Float32Array(totalNodes * 3);
    const nodeVelocities = new Float32Array(totalNodes * 3);
    const nodeSizes = new Float32Array(totalNodes);

    // Setup 6 main server/database infrastructure hubs
    const hubCoords = [
      [-65, 20, 10],
      [55, 30, -15],
      [-20, -35, 25],
      [40, -25, -5],
      [-50, -10, -30],
      [20, 45, 20],
    ];

    for (let i = 0; i < hubCount; i++) {
      const idx = i * 3;
      const coord = hubCoords[i] ?? [0, 0, 0];
      nodePositions[idx] = coord[0] ?? 0;
      nodePositions[idx + 1] = coord[1] ?? 0;
      nodePositions[idx + 2] = coord[2] ?? 0;

      initialPositions[idx] = nodePositions[idx] ?? 0;
      initialPositions[idx + 1] = nodePositions[idx + 1] ?? 0;
      initialPositions[idx + 2] = nodePositions[idx + 2] ?? 0;

      nodeVelocities[idx] = 0;
      nodeVelocities[idx + 1] = 0;
      nodeVelocities[idx + 2] = 0;
      nodeSizes[i] = 7.0; // Larger for hubs
    }

    // Setup cluster nodes surrounding hubs
    for (let i = hubCount; i < totalNodes; i++) {
      const idx = i * 3;
      const parentHub = hubCoords[i % hubCount] ?? [0, 0, 0];
      const r = 25 + Math.random() * 55;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      const px = (parentHub[0] ?? 0) + r * Math.cos(theta) * Math.cos(phi);
      const py = (parentHub[1] ?? 0) + r * Math.sin(phi);
      const pz = (parentHub[2] ?? 0) + r * Math.sin(theta) * Math.cos(phi);

      nodePositions[idx] = px;
      nodePositions[idx + 1] = py;
      nodePositions[idx + 2] = pz;

      initialPositions[idx] = px;
      initialPositions[idx + 1] = py;
      initialPositions[idx + 2] = pz;

      nodeVelocities[idx] = (Math.random() - 0.5) * 0.12;
      nodeVelocities[idx + 1] = (Math.random() - 0.5) * 0.12;
      nodeVelocities[idx + 2] = (Math.random() - 0.5) * 0.12;
      nodeSizes[i] = Math.random() > 0.85 ? 3.8 : 2.2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(nodeSizes, 1));

    // Custom shader material for nodes with soft glow
    const nodeMaterial = new THREE.PointsMaterial({
      color: new THREE.Color("#55D6FF"),
      size: 2.5,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const pointCloud = new THREE.Points(geometry, nodeMaterial);
    scene.add(pointCloud);

    // Dynamic telemetry pipeline connections
    const maxLines = totalNodes * 3;
    const linePositions = new Float32Array(maxLines * 6);
    const lineColors = new Float32Array(maxLines * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);

    // Data packets (moving pulses along connections)
    const packetCount = 24;
    const packetPositions = new Float32Array(packetCount * 3);
    const packetProgress = new Float32Array(packetCount);
    const packetSources = new Int32Array(packetCount);
    const packetTargets = new Int32Array(packetCount);

    for (let p = 0; p < packetCount; p++) {
      packetProgress[p] = Math.random();
      packetSources[p] = Math.floor(Math.random() * hubCount);
      packetTargets[p] = hubCount + Math.floor(Math.random() * (totalNodes - hubCount));
    }

    const packetGeometry = new THREE.BufferGeometry();
    packetGeometry.setAttribute("position", new THREE.BufferAttribute(packetPositions, 3));
    const packetMaterial = new THREE.PointsMaterial({
      color: new THREE.Color("#8B7CFF"),
      size: 4.5,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
    });
    const packetMesh = new THREE.Points(packetGeometry, packetMaterial);
    scene.add(packetMesh);

    // Mouse tracking & damping
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      // ±3° max rotation = ~0.052 radians
      targetRotY = normX * 0.052;
      targetRotX = -normY * 0.052;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Viewport intersection observer to eliminate idle GPU cost
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        isVisible = Boolean(entry?.isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    let clock = new THREE.Clock();

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const elapsed = clock.getElapsedTime();

      // Camera lerp with 0.05 damping
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      camera.rotation.x = currentRotX;
      camera.rotation.y = currentRotY;

      // Autonomous idle drift: sinusoidal node movement amplitude < 8px
      const posArray = geometry.attributes.position?.array as Float32Array | undefined;
      if (posArray) {
        let lineIdx = 0;
        let lineCount = 0;

        for (let i = 0; i < totalNodes; i++) {
          const idx = i * 3;
          const initX = initialPositions[idx] ?? 0;
          const initY = initialPositions[idx + 1] ?? 0;
          const initZ = initialPositions[idx + 2] ?? 0;

          // Sinusoidal subtle drift (< 6px amplitude)
          const driftX = Math.sin(elapsed * 0.7 + i * 0.4) * 4.5;
          const driftY = Math.cos(elapsed * 0.6 + i * 0.5) * 4.5;
          const driftZ = Math.sin(elapsed * 0.5 + i * 0.3) * 3.0;

          posArray[idx] = initX + driftX;
          posArray[idx + 1] = initY + driftY;
          posArray[idx + 2] = initZ + driftZ;

          // Connect hub nodes and nearby edge nodes
          if (i < hubCount) {
            // Interconnect all hubs
            for (let h = i + 1; h < hubCount; h++) {
              const hIdx = h * 3;
              linePositions[lineIdx] = posArray[idx] ?? 0;
              linePositions[lineIdx + 1] = posArray[idx + 1] ?? 0;
              linePositions[lineIdx + 2] = posArray[idx + 2] ?? 0;

              linePositions[lineIdx + 3] = posArray[hIdx] ?? 0;
              linePositions[lineIdx + 4] = posArray[hIdx + 1] ?? 0;
              linePositions[lineIdx + 5] = posArray[hIdx + 2] ?? 0;

              // Vivid cyan-blue data highway
              lineColors[lineIdx] = 0.33;
              lineColors[lineIdx + 1] = 0.84;
              lineColors[lineIdx + 2] = 1.0;

              lineColors[lineIdx + 3] = 0.35;
              lineColors[lineIdx + 4] = 0.48;
              lineColors[lineIdx + 5] = 1.0;

              lineIdx += 6;
              lineCount++;
            }
          } else {
            // Connect to nearest hub
            const parentHubIdx = (i % hubCount) * 3;
            const px = posArray[idx] ?? 0;
            const py = posArray[idx + 1] ?? 0;
            const pz = posArray[idx + 2] ?? 0;

            const hx = posArray[parentHubIdx] ?? 0;
            const hy = posArray[parentHubIdx + 1] ?? 0;
            const hz = posArray[parentHubIdx + 2] ?? 0;

            const distSq = (px - hx) ** 2 + (py - hy) ** 2 + (pz - hz) ** 2;
            if (distSq < 3200 && lineCount < maxLines) {
              const alpha = Math.max(0.08, 1 - Math.sqrt(distSq) / 56);

              linePositions[lineIdx] = px;
              linePositions[lineIdx + 1] = py;
              linePositions[lineIdx + 2] = pz;

              linePositions[lineIdx + 3] = hx;
              linePositions[lineIdx + 4] = hy;
              linePositions[lineIdx + 5] = hz;

              lineColors[lineIdx] = 0.35 * alpha;
              lineColors[lineIdx + 1] = 0.48 * alpha;
              lineColors[lineIdx + 2] = 1.0 * alpha;

              lineColors[lineIdx + 3] = 0.33 * alpha;
              lineColors[lineIdx + 4] = 0.84 * alpha;
              lineColors[lineIdx + 5] = 1.0 * alpha;

              lineIdx += 6;
              lineCount++;
            }
          }
        }

        // Animate data packets
        const pktPos = packetGeometry.attributes.position?.array as Float32Array | undefined;
        if (pktPos) {
          for (let p = 0; p < packetCount; p++) {
            const currentProg = packetProgress[p] ?? 0;
            const nextProg = currentProg + 0.008;
            packetProgress[p] = nextProg > 1 ? 0 : nextProg;

            const sIdx = (packetSources[p] ?? 0) * 3;
            const tIdx = (packetTargets[p] ?? 0) * 3;
            const pIdx = p * 3;

            const sx = posArray[sIdx] ?? 0;
            const sy = posArray[sIdx + 1] ?? 0;
            const sz = posArray[sIdx + 2] ?? 0;

            const tx = posArray[tIdx] ?? 0;
            const ty = posArray[tIdx + 1] ?? 0;
            const tz = posArray[tIdx + 2] ?? 0;

            const prog = packetProgress[p] ?? 0;
            pktPos[pIdx] = sx + (tx - sx) * prog;
            pktPos[pIdx + 1] = sy + (ty - sy) * prog;
            pktPos[pIdx + 2] = sz + (tz - sz) * prog;
          }
          const packetPosAttr = packetGeometry.getAttribute("position");
          if (packetPosAttr) packetPosAttr.needsUpdate = true;
        }

        const geomPosAttr = geometry.getAttribute("position");
        if (geomPosAttr) geomPosAttr.needsUpdate = true;

        const linePosAttr = lineGeometry.getAttribute("position");
        if (linePosAttr) linePosAttr.needsUpdate = true;

        const lineColorAttr = lineGeometry.getAttribute("color");
        if (lineColorAttr) lineColorAttr.needsUpdate = true;

        lineGeometry.setDrawRange(0, lineCount * 2);
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => updateSize();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      geometry.dispose();
      lineGeometry.dispose();
      packetGeometry.dispose();
      nodeMaterial.dispose();
      lineMaterial.dispose();
      packetMaterial.dispose();
      renderer.dispose();
    };
  }, [prefersReducedMotion, isMobile]);

  // Fallback for reduced motion, mobile, or WebGL error
  if (prefersReducedMotion || isMobile || hasWebGLError) {
    return (
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-radial-fade bg-[radial-gradient(ellipse_at_center,rgba(85,214,255,0.08)_0%,rgba(91,124,255,0.04)_45%,transparent_75%)]" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl" />
        {/* Subtle geometric grid network */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#55D6FF_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block opacity-85" />
    </div>
  );
}
