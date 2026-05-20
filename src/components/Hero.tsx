"use client";

import { motion } from "framer-motion";
import { Textify } from "./ui/Textify";
import Grainient from "./ui/Grainient";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 md:pt-36 pb-12 md:pb-20 px-6 overflow-hidden bg-[#040407]">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Grainient
          color1="#000000"
          color2="#ffc2b7"
          color3="#ff4626"
          timeSpeed={0.65}
          colorBalance={0.01}
          warpStrength={0}
          warpFrequency={12}
          warpSpeed={1}
          warpAmplitude={50}
          blendAngle={48}
          blendSoftness={0.05}
          rotationAmount={150}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={0.6}
          centerX={0}
          centerY={0}
          zoom={0.7}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-5xl w-full px-4"
      >
        <Textify 
          text="Building software for humans, agents, and scale." 
          className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-8 justify-center font-syne uppercase bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent"
        />

        <Textify 
          text="VedLabs is an AI-native software studio building intelligent infrastructure, developer tools, communication systems, and scalable digital products for the next generation of the internet."
          className="text-base md:text-lg text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed justify-center font-sans"
          delay={0.2}
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          {/* Explore - Primary Specular Coral Glass Button */}
          <motion.a 
            href="#products"
            whileHover={{ scale: 1.04, scaleX: 1.06, scaleY: 0.95 }}
            whileTap={{ scale: 0.96, scaleX: 0.92, scaleY: 1.08 }}
            transition={{ type: "spring", stiffness: 400, damping: 14 }}
            className="relative overflow-hidden group px-10 py-4 text-white font-extrabold text-xs uppercase tracking-[0.25em] font-sans rounded-full border border-[#ffaba0]/45 bg-[radial-gradient(circle_at_50%_20%,#ff9b85_0%,#ef4b30_45%,#b01a07_100%)] shadow-[0_8px_20px_rgba(239,75,48,0.3),inset_0_2px_3px_rgba(255,255,255,0.85),inset_0_-2px_4px_rgba(255,255,255,0.25),inset_0_-4px_8px_rgba(0,0,0,0.4)] hover:border-[#ffaba0]/70 hover:shadow-[0_16px_32px_rgba(239,75,48,0.55),inset_0_2.5px_4px_rgba(255,255,255,0.95),inset_0_-2px_4px_rgba(255,255,255,0.35),inset_0_-5px_10px_rgba(0,0,0,0.5)] transition-all duration-300 ease-out cursor-pointer flex items-center justify-center"
          >
            <span className="relative z-30">Explore Products</span>
            {/* White Crescent Glare - Always Visible */}
            <span className="absolute top-[2.5px] left-[6px] right-[6px] h-[38%] rounded-full bg-gradient-to-b from-white/80 via-white/20 to-transparent pointer-events-none opacity-90 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-300 z-10" />
            {/* Diagonal shimmer sheen */}
            <span className="absolute inset-0 w-[50%] h-full -left-[75%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none z-20 group-hover:animate-[glass-shimmer_0.85s_cubic-bezier(0.16,1,0.3,1)_forwards]" />
          </motion.a>

          {/* Meet the Team - Secondary Premium Glass Button */}
          <motion.a 
            href="/team"
            whileHover={{ scale: 1.04, scaleX: 1.06, scaleY: 0.95 }}
            whileTap={{ scale: 0.96, scaleX: 0.92, scaleY: 1.08 }}
            transition={{ type: "spring", stiffness: 400, damping: 14 }}
            className="relative overflow-hidden group px-10 py-4 text-white font-extrabold text-xs uppercase tracking-[0.25em] font-sans rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_20px_rgba(0,0,0,0.4)] hover:bg-white/[0.12] hover:border-white/25 hover:shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.25),0_12px_24px_rgba(0,0,0,0.55)] transition-all duration-300 ease-out cursor-pointer flex items-center justify-center"
          >
            <span className="relative z-30">Meet The Team</span>
            {/* White Crescent Glare */}
            <span className="absolute top-[2.5px] left-[6px] right-[6px] h-[38%] rounded-full bg-gradient-to-b from-white/20 via-white/5 to-transparent pointer-events-none opacity-40 group-hover:opacity-60 transition-all duration-300 z-10" />
          </motion.a>
        </motion.div>

        {/* Technical Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-16 border-t border-white/[0.06] pt-8 max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-bold text-zinc-500 tracking-[0.15em] uppercase font-mono"
        >
          <span>AI Systems</span>
          <span className="text-white/10">•</span>
          <span>Developer Infrastructure</span>
          <span className="text-white/10">•</span>
          <span>Agentic Workflows</span>
          <span className="text-white/10">•</span>
          <span>Cloud Architecture</span>
          <span className="text-white/10">•</span>
          <span>Intelligent Products</span>
        </motion.div>
      </motion.div>

      {/* Premium Ambient Glowing Mesh Blobs */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-gradient-to-tr from-purple-500/15 to-[#ff7057]/10 blur-[130px] rounded-full animate-pulse z-0 pointer-events-none" style={{ animationDuration: "12s" }} />
      <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] bg-gradient-to-tr from-[#ff7057]/15 to-[#3b82f6]/10 blur-[150px] rounded-full animate-pulse z-0 pointer-events-none" style={{ animationDuration: "18s" }} />
    </section>
  );
}
