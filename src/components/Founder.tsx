"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Textify } from "./ui/Textify";

export default function Founder() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [orbPos, setOrbPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePos({ x, y });
    
    // Relative coordinate center offset for fluid tracking drift
    const centerX = x - rect.width / 2;
    const centerY = y - rect.height / 2;
    setOrbPos({
      x: centerX * 0.15, // Drift 15% towards cursor
      y: centerY * 0.15,
    });
  };

  return (
    <section id="founder" className="relative overflow-hidden border-t border-white/10 bg-[#050505]">
      <div className="grid grid-cols-1 lg:grid-cols-[62%_1fr] relative">
        
        {/* Left Column (Text & Bio) */}
        <div className="border-r border-white/10 flex flex-col bg-[#050505]/40">
          <div className="p-12 lg:p-24 pb-8 border-b border-white/10">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-4 font-mono font-bold"
            >
              Meet the Founder
            </motion.p>
            <Textify text="Mihir Rabari" className="text-4xl md:text-5xl font-black font-syne uppercase tracking-tight text-white mb-2" />
            <p className="text-sm font-mono text-[#ffffff] uppercase tracking-wider font-bold">
              Founder & Software Engineer at The Velnix
            </p>
          </div>
          
          <div className="p-12 lg:p-24 pt-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="space-y-6 text-zinc-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl font-sans">
                <p>
                  Mihir Rabari is a builder focused on **AI-native systems**, **scalable infrastructure**, **workflow automation**, and **developer-first products**. His work spans communication intelligence, machine learning systems, security tooling, and modern web infrastructure.
                </p>
                <p>
                  He has built projects ranging from AI-powered network security systems and intelligent attendance platforms to collaborative AI development environments and agent-native communication tools.
                </p>
                <p>
                  Mihir has participated in multiple national hackathons, earned recognition for rapid problem-solving and engineering innovation, and actively explores the future of human and AI collaboration through software.
                </p>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.6 }}
                className="flex gap-4"
              >
                {/* LinkedIn Anchor CTA - Translucent Liquid Glass */}
                <motion.a 
                  href="https://www.linkedin.com/in/mihir-rabari/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, scaleX: 1.06, scaleY: 0.95 }}
                  whileTap={{ scale: 0.96, scaleX: 0.92, scaleY: 1.08 }}
                  transition={{ type: "spring", stiffness: 400, damping: 14 }}
                  className="velnix-button velnix-button-secondary group min-h-11 px-8 font-extrabold text-xs uppercase tracking-[0.2em] font-sans cursor-pointer"
                >
                  <span className="relative z-10">Connect on LinkedIn</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Right Column (Developer Telemetry Card) */}
        <div className="p-12 lg:p-24 bg-[#050505] flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setOrbPos({ x: 0, y: 0 });
            }}
            className="w-full aspect-square md:aspect-video bg-[#050505]/45 backdrop-blur-[24px] border border-white/[0.08] border-t-white/[0.15] rounded-[24px] relative overflow-hidden shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.15),inset_0_-1px_1px_rgba(255,255,255,0.05),0_30px_60px_rgba(0,0,0,0.6)] group hover:border-white/20 transition-all duration-500 cursor-pointer"
          >
            {/* Tech mesh accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.01] opacity-60 pointer-events-none" />
            
            {/* Static Curved Lens highlight */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(120%_120%_at_50%_0%,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_70%)] z-0" />

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
                    width: "280px",
                    height: "280px",
                    transform: "translate(-50%, -50%)",
                    background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.01) 50%, rgba(255,255,255,0) 80%)",
                    filter: "blur(12px)",
                  }}
                />
              )}
            </AnimatePresence>

            {/* Window control buttons */}
            <div className="absolute top-4 left-4 flex gap-1.5 z-10">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-300/40 border border-zinc-300/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-500/40 border border-zinc-500/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/40 border border-zinc-700/20" />
            </div>

            <div className="absolute top-4 right-4 z-10">
              <span className="text-[10px] font-mono text-[#ffffff]/70 tracking-widest uppercase font-bold">
                SYSTEM TELEMETRY
              </span>
            </div>
            
            {/* Center Content: Telemetry Readout */}
            <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12 font-mono text-xs md:text-sm text-zinc-500 z-10 pointer-events-none">
              <motion.div
                animate={{
                  x: isHovered ? orbPos.x : 0,
                  y: isHovered ? orbPos.y : 0,
                }}
                transition={{ type: "spring", stiffness: 85, damping: 16 }}
                className="space-y-4"
              >
                <div className="text-white font-bold">&gt; telemetry init --active</div>
                <div className="grid grid-cols-[80px_1fr] gap-2 border-l border-[#ffffff]/20 pl-4 py-2 bg-white/[0.01] rounded-lg">
                  <span className="text-zinc-600 font-semibold">FOUNDER:</span>
                  <span className="text-zinc-300">"Mihir Rabari"</span>
                  
                  <span className="text-zinc-600 font-semibold">ROLE:</span>
                  <span className="text-[#ffffff] font-semibold">"System Architect"</span>

                  <span className="text-zinc-600 font-semibold">FOCUS:</span>
                  <span className="text-zinc-300">["AI Infrastructure", "Autonomous Workflows"]</span>

                  <span className="text-zinc-600 font-semibold">PROJECTS:</span>
                  <span className="text-zinc-300">["InboxFM", "FlameNGen", "HackHunt"]</span>

                  <span className="text-zinc-600 font-semibold">CORE:</span>
                  <span className="text-zinc-400">"Next.js / TypeScript / Python / WASM / Cloudflare"</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 font-bold">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                  <span>STATUS // ONLINE_R&D_MODE</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
