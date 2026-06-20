"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "./BrandLogo";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo — lowercase serif like reference */}
          <BrandLogo imageClassName="h-8 w-auto" />

          {/* Right side — social + CTA */}
          <div className="hidden md:flex items-center gap-5">
            {/* Social icons */}
            <a
              href="https://www.linkedin.com/company/the-velnix/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/70 transition-colors"
              aria-label="The Velnix on LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 10H5.67v8h2.67v-8ZM7 6.13A1.55 1.55 0 1 0 7 9.22a1.55 1.55 0 0 0 0-3.09ZM18.33 13.42c0-2.4-1.28-3.52-3-3.52a2.6 2.6 0 0 0-2.35 1.3V10h-2.66v8h2.66v-3.96c0-1.04.2-2.05 1.49-2.05 1.27 0 1.29 1.19 1.29 2.12V18h2.67l-.1-4.58Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/the_velnix/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/70 transition-colors"
              aria-label="The Velnix on Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="mailto:hello@thevelnix.com" className="text-white/30 hover:text-white/70 transition-colors" aria-label="Email The Velnix">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
              </svg>
            </a>

            <div className="w-px h-5 bg-white/10 mx-1" />

            {/* CTA */}
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-5 py-2 text-[13px] font-medium text-white/70 hover:text-white hover:border-white/30 transition-all duration-200"
            >
              Book a call
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen ? (
                <path d="M4 4l12 12M16 4L4 16" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/[0.06] overflow-hidden"
          >
            <div className="px-6 py-8 space-y-4">
              <a href="#products" onClick={() => setMobileOpen(false)} className="block text-sm text-white/50 hover:text-white transition-colors">Products</a>
              <a href="#about" onClick={() => setMobileOpen(false)} className="block text-sm text-white/50 hover:text-white transition-colors">About</a>
              <a href="#features" onClick={() => setMobileOpen(false)} className="block text-sm text-white/50 hover:text-white transition-colors">Features</a>
              <a href="#contact" onClick={() => setMobileOpen(false)} className="block rounded-full border border-white/15 px-5 py-2 text-sm text-white/70 hover:text-white text-center mt-4">Book a call</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
