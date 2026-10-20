"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface ReducedMotionContextType {
  prefersReducedMotion: boolean;
  isMobile: boolean;
  lowPowerMode: boolean;
  setLowPowerMode: (val: boolean) => void;
}

const ReducedMotionContext = createContext<ReducedMotionContextType>({
  prefersReducedMotion: false,
  isMobile: false,
  lowPowerMode: false,
  setLowPowerMode: () => {},
});

export function ReducedMotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [lowPowerMode, setLowPowerMode] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQueryMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mediaQueryMobile = window.matchMedia("(pointer: coarse), (max-width: 768px)");

    setPrefersReducedMotion(mediaQueryMotion.matches);
    setIsMobile(mediaQueryMobile.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    const handleMobileChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQueryMotion.addEventListener("change", handleMotionChange);
    mediaQueryMobile.addEventListener("change", handleMobileChange);

    return () => {
      mediaQueryMotion.removeEventListener("change", handleMotionChange);
      mediaQueryMobile.removeEventListener("change", handleMobileChange);
    };
  }, []);

  return (
    <ReducedMotionContext.Provider
      value={{
        prefersReducedMotion,
        isMobile,
        lowPowerMode,
        setLowPowerMode,
      }}
    >
      {children}
    </ReducedMotionContext.Provider>
  );
}

export function useReducedMotion() {
  return useContext(ReducedMotionContext);
}
