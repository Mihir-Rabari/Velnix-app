"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      setScrolled(currentScrollY > 20);
      if (currentScrollY < 80) {
        setIsHidden(false);
      } else if (Math.abs(scrollDelta) > 6) {
        setIsHidden(scrollDelta > 0);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const navLinksLeft = [
    { id: "products", href: "/products", label: "products" },
    { id: "team", href: "/team", label: "team" },
  ];

  const navLinksRight = [
    { id: "blog", href: "/blog", label: "blog" },
  ];

  return (
    <motion.nav
      className="fixed top-0 inset-x-0 z-50 px-3 py-3 sm:px-4 md:py-6"
      animate={{ y: isHidden ? -120 : 0, opacity: isHidden ? 0 : 1 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      onFocusCapture={() => setIsHidden(false)}
    >
      <div className="max-w-5xl mx-auto relative group">
        {/* Glassmorphic border glow at scroll */}
        
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setHoveredLink(null);
          }}
          className={cn(
            "px-5 md:px-8 py-3 rounded-full border transition-all duration-500 relative overflow-hidden",
            scrolled 
              ? "bg-[#050505]/45 backdrop-blur-[24px] border-white/[0.08] border-t-white/[0.15] shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.15),inset_0_-1px_1px_rgba(255,255,255,0.05),0_20px_50px_rgba(0,0,0,0.7)]"
              : "bg-white/[0.01] backdrop-blur-[12px] border-white/[0.04] border-t-white/[0.08] shadow-none"
          )}
        >
          {/* Static Curved Lens highlight */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(120%_120%_at_50%_0%,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_70%)] z-0" />

          {/* Interactive Mouse Refraction Spotlight */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute pointer-events-none rounded-full z-0 overflow-hidden mix-blend-screen"
                style={{
                  left: mousePos.x,
                  top: mousePos.y,
                  width: "240px",
                  height: "240px",
                  transform: "translate(-50%, -50%)",
                  background: "radial-gradient(circle, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0) 80%)",
                  filter: "blur(8px)",
                }}
              />
            )}
          </AnimatePresence>

          <div className="flex items-center justify-center md:justify-between relative z-10">
            {/* Left Side Links */}
            <div className="hidden md:flex gap-2 items-center">
              {navLinksLeft.map((link) => (
                <div 
                  key={link.id}
                  className="relative py-1.5 px-3.5 flex items-center justify-center rounded-full"
                  onMouseEnter={() => setHoveredLink(link.id)}
                >
                  <Link 
                    href={link.href} 
                    className="text-[10px] font-bold text-zinc-400 hover:text-white transition-all uppercase tracking-[0.25em] font-mono z-10 relative"
                  >
                    {link.label}
                  </Link>
                  {hoveredLink === link.id && (
                    <motion.span
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 bg-white/[0.07] border border-white/[0.08] rounded-full z-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Centered brand */}
            <div 
              className="flex justify-center"
              onMouseEnter={() => setHoveredLink(null)}
            >
              <BrandLogo
                priority
                imageClassName="h-6 md:h-7 w-auto"
                className="group transition-opacity duration-300 hover:opacity-80"
              />
            </div>

            {/* Right Side Links */}
            <div className="hidden md:flex gap-4 items-center justify-end">
              {navLinksRight.map((link) => (
                <div 
                  key={link.id}
                  className="relative py-1.5 px-3.5 flex items-center justify-center rounded-full"
                  onMouseEnter={() => setHoveredLink(link.id)}
                >
                  <Link 
                    href={link.href} 
                    className="text-[10px] font-bold text-zinc-400 hover:text-white transition-all uppercase tracking-[0.25em] font-mono z-10 relative"
                  >
                    {link.label}
                  </Link>
                  {hoveredLink === link.id && (
                    <motion.span
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 bg-white/[0.07] border border-white/[0.08] rounded-full z-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </div>
              ))}

              <motion.div
                whileHover={{ scale: 1.04, scaleX: 1.06, scaleY: 0.95 }}
                whileTap={{ scale: 0.96, scaleX: 0.92, scaleY: 1.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 14 }}
                className="z-10"
              >
                <Link 
                  href="/contact" 
                  onMouseEnter={() => setHoveredLink(null)}
                  className="velnix-button group min-h-10 px-6 text-xs font-extrabold uppercase tracking-[0.25em] font-sans cursor-pointer"
                >
                  <span className="relative z-10">Contact</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
