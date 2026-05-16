"use client";

import { motion } from "framer-motion";
import { Textify } from "./ui/Textify";
import Grainient from "./ui/Grainient";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-black">
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
        className="relative z-10 text-center max-w-4xl"
      >
        <Textify 
          text="Build products people love" 
          className="text-6xl md:text-8xl font-bold tracking-tight mb-8 justify-center"
        />

        <Textify 
          text="We create software that helps teams ship faster, think clearer, and build with confidence."
          className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 leading-relaxed justify-center"
          delay={0.2}
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="px-12 py-5 bg-white text-black font-black text-xs uppercase tracking-[0.4em] hover:bg-[#ff7057] hover:text-white transition-all shadow-[8px_8px_0px_rgba(255,255,255,0.05)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
            Explore
          </button>

          <button className="group text-white font-medium flex items-center gap-2 hover:text-[#ff7057] transition-colors">
            Learn More
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Decorative Glow */}
      <div className="glow-orb -top-40 -left-40" />
    </section>
  );
}
