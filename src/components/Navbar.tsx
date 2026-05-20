"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
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
    <nav className="fixed top-0 inset-x-0 z-50 transition-all duration-500 py-4 md:py-6 px-4">
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
            "px-6 md:px-8 py-3 rounded-full border transition-all duration-500 relative overflow-hidden",
            scrolled 
              ? "bg-[#040407]/45 backdrop-blur-[24px] border-white/[0.08] border-t-white/[0.15] shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.15),inset_0_-1px_1px_rgba(255,255,255,0.05),0_20px_50px_rgba(0,0,0,0.7)]" 
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

          <div className="flex items-center justify-between relative z-10">
            {/* Left Side Links */}
            <div className="flex gap-2 items-center">
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

            {/* Centered Logo */}
            <div 
              className="flex justify-center"
              onMouseEnter={() => setHoveredLink(null)}
            >
              <Link href="/" className="group">
                <span className="text-2xl font-black tracking-tight text-white uppercase font-syne transition-colors duration-300">
                  VedLabs
                </span>
              </Link>
            </div>

            {/* Right Side Links */}
            <div className="flex gap-4 items-center justify-end">
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
                  className="relative overflow-hidden group px-6 py-2.5 text-xs font-extrabold uppercase tracking-[0.25em] font-sans rounded-full cursor-pointer text-white border border-[#ffaba0]/45 bg-[radial-gradient(circle_at_50%_20%,#ff9b85_0%,#ef4b30_45%,#b01a07_100%)] shadow-[0_6px_15px_rgba(239,75,48,0.25),inset_0_2px_3px_rgba(255,255,255,0.85),inset_0_-2px_4px_rgba(255,255,255,0.25),inset_0_-4px_8px_rgba(0,0,0,0.4)] hover:border-[#ffaba0]/70 hover:shadow-[0_12px_24px_rgba(239,75,48,0.45),inset_0_2.5px_4px_rgba(255,255,255,0.95),inset_0_-2px_4px_rgba(255,255,255,0.35),inset_0_-5px_10px_rgba(0,0,0,0.5)] transition-all duration-300 ease-out flex items-center justify-center"
                >
                  <span className="relative z-30">Contact</span>
                  {/* White Crescent Glare - Always Visible */}
                  <span className="absolute top-[2.5px] left-[6px] right-[6px] h-[38%] rounded-full bg-gradient-to-b from-white/80 via-white/20 to-transparent pointer-events-none opacity-90 group-hover:opacity-100 transition-all duration-300 z-10" />
                  {/* Diagonal shimmer sheen */}
                  <span className="absolute inset-0 w-[50%] h-full -left-[75%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none z-20 group-hover:animate-[glass-shimmer_0.85s_cubic-bezier(0.16,1,0.3,1)_forwards]" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
