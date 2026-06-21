"use client";

import { motion } from "framer-motion";
import Grainient from "./ui/Grainient";

const capabilities = [
  "AI Systems",
  "Developer Infrastructure",
  "Agentic Workflows",
  "Cloud Architecture",
  "Intelligent Products",
];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#050505] px-6 pb-10 pt-24 md:pt-32">
      <div className="absolute inset-0 z-0 opacity-[0.2]">
        <Grainient
          color1="#000000"
          color2="#a3a3a3"
          color3="#404040"
          timeSpeed={0.35}
          colorBalance={-0.08}
          warpStrength={0}
          warpFrequency={8}
          warpSpeed={0.5}
          warpAmplitude={32}
          blendAngle={36}
          blendSoftness={0.08}
          rotationAmount={100}
          noiseScale={2.4}
          grainAmount={0.08}
          grainScale={2}
          grainAnimated={false}
          contrast={1.35}
          gamma={0.9}
          saturation={0}
          centerX={0}
          centerY={0.1}
          zoom={0.78}
        />
      </div>

      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_62%_56%_at_50%_48%,transparent_0%,rgba(5,5,5,0.28)_58%,#050505_100%)]" />
      <div className="absolute inset-0 z-[1] opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_78%,transparent)]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-10rem)] w-full max-w-[1760px] flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-7 inline-flex items-center gap-3 border border-white/10 bg-black/20 px-4 py-2 font-mono text-[9px] font-bold uppercase tracking-[0.28em] text-zinc-400 backdrop-blur-sm md:mb-9 md:text-[10px]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
          Independent AI systems studio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
          className="w-full font-syne text-[clamp(1.8rem,6.7vw,4rem)] xl:text-[clamp(3rem,3.8vw,4.25rem)] font-black uppercase leading-[0.9] tracking-[-0.055em] text-white"
        >
          <span className="block xl:hidden">
            Software for
            <br />
            <span className="text-white/62">humans + agents.</span>
            <br />
            Built to scale.
          </span>
          <span className="hidden whitespace-nowrap xl:block">Software for humans.</span>
          <span className="hidden whitespace-nowrap text-white/62 xl:block">Systems for agents.</span>
          <span className="hidden whitespace-nowrap xl:block">Built to scale.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.22, ease: "easeOut" }}
          className="mt-7 max-w-2xl text-sm leading-relaxed text-zinc-400 md:mt-9 md:text-lg"
        >
          The Velnix engineers AI-native products, developer platforms, and resilient digital infrastructure for teams building beyond the obvious.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34, ease: "easeOut" }}
          className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center md:mt-10"
        >
          <motion.a
            href="#products"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 420, damping: 24 }}
            className="velnix-button group min-h-13 min-w-[220px] gap-4 px-7 font-sans text-xs font-extrabold uppercase tracking-[0.22em]"
          >
            Explore Products
            <span aria-hidden="true" className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </motion.a>

          <motion.a
            href="/team"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 420, damping: 24 }}
            className="velnix-button velnix-button-secondary group min-h-13 min-w-[190px] gap-4 px-7 font-sans text-xs font-extrabold uppercase tracking-[0.22em]"
          >
            Meet The Team
            <span aria-hidden="true" className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-x-4 gap-y-3 border-t border-white/[0.07] pt-5 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-zinc-600 md:gap-x-7 md:text-[10px]"
        >
          {capabilities.map((capability, index) => (
            <span key={capability} className="inline-flex items-center gap-4 md:gap-7">
              {index > 0 && <span className="text-white/15" aria-hidden="true">/</span>}
              <span>{capability}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
