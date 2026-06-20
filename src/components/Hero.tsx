"use client";

import { motion } from "framer-motion";
import { Textify } from "./ui/Textify";
import Grainient from "./ui/Grainient";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center pt-24 md:pt-36 pb-12 md:pb-20 px-6 overflow-hidden bg-[#050505]">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Grainient
          color1="#000000"
          color2="#d4d4d4"
          color3="#737373"
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
        className="relative z-10 text-center max-w-5xl w-full"
      >
        <Textify 
          text="Building software for humans, agents, and scale." 
          className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-8 justify-center font-syne uppercase bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent"
        />

        <Textify 
          text="The Velnix is an AI-native software studio building intelligent infrastructure, developer tools, communication systems, and scalable digital products for the next generation of the internet."
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
          {/* Explore - Primary Specular monochrome Glass Button */}
          <motion.a 
            href="#products"
            whileHover={{ scale: 1.04, scaleX: 1.06, scaleY: 0.95 }}
            whileTap={{ scale: 0.96, scaleX: 0.92, scaleY: 1.08 }}
            transition={{ type: "spring", stiffness: 400, damping: 14 }}
            className="velnix-button group min-h-12 px-8 sm:px-10 text-white font-extrabold text-xs uppercase tracking-[0.25em] font-sans cursor-pointer"
          >
            <span className="relative z-10">Explore Products</span>
          </motion.a>

          {/* Meet the Team - Secondary Premium Glass Button */}
          <motion.a 
            href="/team"
            whileHover={{ scale: 1.04, scaleX: 1.06, scaleY: 0.95 }}
            whileTap={{ scale: 0.96, scaleX: 0.92, scaleY: 1.08 }}
            transition={{ type: "spring", stiffness: 400, damping: 14 }}
            className="velnix-button velnix-button-secondary group min-h-12 px-8 sm:px-10 font-extrabold text-xs uppercase tracking-[0.25em] font-sans cursor-pointer"
          >
            <span className="relative z-10">Meet The Team</span>
          </motion.a>
        </motion.div>

        {/* Technical Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-12 md:mt-16 border-t border-white/[0.06] pt-6 md:pt-8 max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-3 text-[10px] md:text-xs font-bold text-zinc-500 tracking-[0.12em] md:tracking-[0.15em] uppercase font-mono"
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
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-gradient-to-tr from-white/10 to-[#ffffff]/10 blur-[130px] rounded-full animate-pulse z-0 pointer-events-none" style={{ animationDuration: "12s" }} />
      <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] bg-gradient-to-tr from-[#ffffff]/15 to-[#737373]/10 blur-[150px] rounded-full animate-pulse z-0 pointer-events-none" style={{ animationDuration: "18s" }} />
    </section>
  );
}
