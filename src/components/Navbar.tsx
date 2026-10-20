"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Compass, Sparkles } from "lucide-react";

export type AppPage = "home" | "services" | "blog" | "about" | "contact";

interface NavbarProps {
  currentPage?: AppPage;
  onNavigate?: (page: AppPage, targetId?: string) => void;
}

const NAV_ITEMS = [
  { label: "Home", page: "home" as const, targetId: "hero" },
  { label: "Services", page: "services" as const, targetId: "services-top" },
  { label: "Blog", page: "blog" as const, targetId: "blog-top" },
  { label: "About", page: "about" as const, targetId: "about-top" },
  { label: "Contact us", page: "contact" as const, targetId: "contact-top" },
];

export default function Navbar({ currentPage = "home", onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (e: React.MouseEvent, page: AppPage, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (onNavigate) {
      onNavigate(page, targetId);
    } else {
      if (page === "services") {
        window.location.hash = "/services";
      } else if (page === "blog") {
        window.location.hash = "/blog";
      } else if (page === "about") {
        window.location.hash = "/about";
      } else if (page === "contact") {
        window.location.hash = "/contact";
      } else {
        window.location.hash = targetId ? `/${targetId}` : "/";
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled
          ? "py-3 bg-black/55 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
          : "py-5 sm:py-6 bg-gradient-to-b from-black/70 via-black/30 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleItemClick(e, "home", "hero")}
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-lg py-1 ml-0 sm:ml-4 lg:ml-6 cursor-pointer"
            aria-label="VRPI Home"
          >
            <img
              src="/vrpi-logo.png"
              alt="VRPI Logo"
              className="h-7 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links with Active Pill Capsule */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] backdrop-blur-xl border border-white/[0.1] shadow-inner"
            aria-label="Primary Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                (item.label === "Services" && currentPage === "services") ||
                (item.label === "Blog" && currentPage === "blog") ||
                (item.label === "About" && currentPage === "about") ||
                (item.label === "Contact us" && currentPage === "contact") ||
                (item.label === "Home" && currentPage === "home");

              return (
                <a
                  key={item.label}
                  href={`#${item.targetId}`}
                  onClick={(e) => handleItemClick(e, item.page, item.targetId)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-white/[0.16] text-white font-semibold shadow-[0_2px_12px_rgba(0,0,0,0.4)] border border-white/20"
                      : "text-white/75 hover:text-white hover:bg-white/[0.08]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Get Started CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              onClick={(e) => handleItemClick(e, "contact", "contact-top")}
              className="relative group inline-flex items-center justify-center px-4 sm:px-6 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white overflow-hidden shadow-[0_0_25px_rgba(255,51,102,0.45)] hover:shadow-[0_0_35px_rgba(255,51,102,0.7)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF3366] via-[#FF4D6D] to-[#FF5E62]" />
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-1.5">
                Get Started
              </span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/10 text-white transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Horizontal Pill Navigation Bar (matching desktop capsule style) */}
        <div className="md:hidden mt-2.5 flex items-center justify-center w-full">
          <nav
            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/[0.12] shadow-inner overflow-x-auto max-w-full no-scrollbar"
            aria-label="Mobile Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                (item.label === "Services" && currentPage === "services") ||
                (item.label === "Blog" && currentPage === "blog") ||
                (item.label === "About" && currentPage === "about") ||
                (item.label === "Contact us" && currentPage === "contact") ||
                (item.label === "Home" && currentPage === "home");

              return (
                <a
                  key={item.label}
                  href={`#${item.targetId}`}
                  onClick={(e) => handleItemClick(e, item.page, item.targetId)}
                  className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-white/[0.2] text-white font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.4)] border border-white/20"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 p-5 rounded-3xl bg-black/90 backdrop-blur-3xl border border-white/[0.15] shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col gap-2.5 animate-in fade-in slide-in-from-top-4 duration-200">
          {NAV_ITEMS.map((item) => {
            const isActive =
              (item.label === "Services" && currentPage === "services") ||
              (item.label === "Blog" && currentPage === "blog") ||
              (item.label === "About" && currentPage === "about") ||
              (item.label === "Contact us" && currentPage === "contact") ||
              (item.label === "Home" && currentPage === "home");

            return (
              <a
                key={item.label}
                href={`#${item.targetId}`}
                onClick={(e) => handleItemClick(e, item.page, item.targetId)}
                className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors cursor-pointer ${
                  isActive
                    ? "bg-white/[0.15] text-white font-bold border border-white/20"
                    : "text-white/80 hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-2 border-t border-white/10">
            <a
              href="#contact"
              onClick={(e) => handleItemClick(e, "contact", "contact-top")}
              className="w-full py-3 rounded-full text-center text-sm font-semibold text-white bg-gradient-to-r from-[#FF3366] to-[#FF5E62] block shadow-[0_0_20px_rgba(255,51,102,0.4)] cursor-pointer"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
