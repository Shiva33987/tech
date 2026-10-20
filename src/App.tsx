import React, { useState, useEffect } from "react";
import Navbar, { type AppPage } from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechBentoGrid from "@/components/TechBentoGrid";
import Services from "@/components/Services";
import ServicesPage from "@/components/ServicesPage";
import BlogPage from "@/components/BlogPage";
import AboutSection from "@/components/AboutSection";
import AboutPage from "@/components/AboutPage";
import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Footer";
import { ReducedMotionProvider } from "@/providers/ReducedMotionProvider";
import { LenisProvider } from "@/providers/LenisProvider";

export default function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("service")) return "services";
      if (hash.includes("blog")) return "blog";
      if (hash.includes("about")) return "about";
      if (hash.includes("contact")) return "contact";
    }
    return "home";
  });

  // Keep state in sync with URL hash & browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("service")) {
        setCurrentPage("services");
      } else if (hash.includes("blog")) {
        setCurrentPage("blog");
      } else if (hash.includes("about")) {
        setCurrentPage("about");
      } else if (hash.includes("contact")) {
        setCurrentPage("contact");
      } else {
        setCurrentPage("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavigate = (page: AppPage, targetId?: string) => {
    if (page === "services") {
      setCurrentPage("services");
      window.location.hash = "/services";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (page === "blog") {
      setCurrentPage("blog");
      window.location.hash = "/blog";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (page === "about") {
      setCurrentPage("about");
      window.location.hash = "/about";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (page === "contact") {
      setCurrentPage("contact");
      window.location.hash = "/contact";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setCurrentPage("home");
      if (targetId && targetId !== "hero") {
        window.location.hash = `/${targetId}`;
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 60);
      } else {
        window.location.hash = "/";
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <ReducedMotionProvider>
      <LenisProvider>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        {/* Global Navigation with active pill state */}
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

        <main id="main-content" className="flex-1 flex flex-col w-full min-h-screen">
          {currentPage === "services" ? (
            /* ======================================================== */
            /* DEDICATED SERVICES SEPARATE PAGE                         */
            /* ======================================================== */
            <ServicesPage onNavigateHome={() => handleNavigate("home", "hero")} />
          ) : currentPage === "blog" ? (
            /* ======================================================== */
            /* DEDICATED BLOG SEPARATE PAGE                             */
            /* ======================================================== */
            <BlogPage onNavigateHome={() => handleNavigate("home", "hero")} />
          ) : currentPage === "about" ? (
            /* ======================================================== */
            /* DEDICATED ABOUT US SEPARATE PAGE                         */
            /* ======================================================== */
            <AboutPage onNavigateHome={() => handleNavigate("home", "hero")} />
          ) : currentPage === "contact" ? (
            /* ======================================================== */
            /* DEDICATED CONTACT US SEPARATE PAGE                       */
            /* ======================================================== */
            <ContactPage onNavigateHome={() => handleNavigate("home", "hero")} />
          ) : (
            /* ======================================================== */
            /* HOME PAGE LAYOUT                                         */
            /* ======================================================== */
            <>
              <Hero />
              <TechBentoGrid />
              <Services onViewFullPage={() => handleNavigate("services")} />
              <AboutSection onViewFullPage={() => handleNavigate("about")} />
            </>
          )}
        </main>

        <Footer />
      </LenisProvider>
    </ReducedMotionProvider>
  );
}
