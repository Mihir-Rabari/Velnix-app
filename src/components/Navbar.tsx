"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b",
      scrolled 
        ? "bg-black/60 backdrop-blur-xl border-white/10 py-3" 
        : "bg-transparent border-transparent py-6"
    )}>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="max-w-7xl mx-auto px-8"
      >
        <div className="grid grid-cols-3 items-center">
          {/* Left Side Links */}
          <div className="flex gap-8 items-center">
            <Link href="/products" className="text-[11px] font-bold text-zinc-400 hover:text-white transition-all uppercase tracking-[0.3em]">
              products
            </Link>
            <Link href="/about" className="text-[11px] font-bold text-zinc-400 hover:text-white transition-all uppercase tracking-[0.3em]">
              about
            </Link>
          </div>

          {/* Centered Logo */}
          <div className="flex justify-center">
            <Link href="/" className="group">
              <span className="text-xl font-black tracking-tighter text-white uppercase group-hover:text-[#ff7057] transition-colors duration-300">
                VedLabs
              </span>
            </Link>
          </div>

          {/* Right Side Links */}
          <div className="flex gap-8 items-center justify-end">
            <Link href="/blog" className="text-[11px] font-bold text-zinc-400 hover:text-white transition-all uppercase tracking-[0.3em]">
              blog
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-2.5 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#ff7057] hover:text-white transition-all duration-300 shadow-[4px_4px_0px_rgba(255,255,255,0.1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              Contact
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
