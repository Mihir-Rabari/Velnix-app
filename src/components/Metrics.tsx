"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";
import TextifyReveal from "./TextifyReveal";

const convictions = [
  {
    index: "01",
    title: "High-Fidelity Engineering",
    tagline: "TYPE-SAFE & ULTRA-PRECISE",
    description: "No cheap templates, no bloated boilerplates. We write every line of code with strict type safety, modular design patterns, and sub-millisecond runtime efficiency.",
  },
  {
    index: "02",
    title: "AI-First Paradigms",
    tagline: "COGNITIVE & AUTONOMOUS",
    description: "We design distributed architectures where human intelligence and autonomous agent networks collaborate seamlessly, converting heavy operations into cognitive workflows.",
  },
  {
    index: "03",
    title: "Event-Driven Scale",
    tagline: "LOW-LATENCY CONCURRENCY",
    description: "Our backends are designed for massive throughput, distributed resilience, and active websocket sync. Scalability is a core architectural priority, not an after-thought.",
  },
  {
    index: "04",
    title: "Active Partnership",
    tagline: "R&D CO-FOUNDER PARITY",
    description: "We don't act as passive vendors. We operate as an elite technical co-founder, aligning directly with your vision to write, validate, and ship high-conviction code in weeks.",
  },
];

interface ConvictionCardProps {
  index: string;
  title: string;
  tagline: string;
  description: string;
  cardIndex: number;
}

function ConvictionCard({ index, title, tagline, description, cardIndex }: ConvictionCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const spotlightBg = useMotionTemplate`radial-gradient(220px circle at ${mouseX}px ${mouseY}px, rgba(255, 112, 87, 0.05) 0%, rgba(255, 255, 255, 0.01) 60%, transparent 100%)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: cardIndex * 0.1, duration: 0.8 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative overflow-hidden p-12 lg:p-16 flex flex-col justify-between group transition-all duration-500 bg-white/[0.005] hover:bg-white/[0.015] border-b border-white/10 select-none cursor-pointer",
        cardIndex % 2 === 0 ? "md:border-r" : "md:border-r-0",
        cardIndex % 4 !== 3 ? "lg:border-r" : "lg:border-r-0",
        "border-white/10"
      )}
    >
      {/* Specular Mouse Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: spotlightBg }}
      />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          {/* Index Counter */}
          <div className="font-mono text-xs font-bold text-[#ff7057] tracking-wider mb-8 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
            // {index}
          </div>

          {/* Heading */}
          <h3 className="text-xl font-bold text-white/70 group-hover:text-white tracking-tight font-syne uppercase transition-colors duration-300 mb-2">
            {title}
          </h3>

          {/* Tagline */}
          <div className="font-mono text-[9px] font-bold text-zinc-500 tracking-[0.2em] uppercase mb-6 group-hover:text-[#ff7057]/80 transition-colors duration-300">
            {tagline}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs md:text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors duration-500 leading-relaxed font-sans mt-4 max-w-[95%]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Metrics() {
  const ref = useRef(null);

  return (
    <section id="about" className="relative bg-[#040407] overflow-hidden border-t border-white/10" ref={ref}>
      <div className="px-8 md:px-16 lg:px-24 pb-8 border-b border-white/10 w-full">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-4 font-mono font-bold"
        >
          // OPERATING PHILOSOPHY
        </motion.p>
        
        <h2 className="text-3xl md:text-5xl font-black font-syne uppercase tracking-tight text-white leading-[1.15]">
          Studio <span className="bg-gradient-to-r from-white via-white to-[#ff7057] bg-clip-text text-transparent">Convictions</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full bg-black/20">
        {convictions.map((conviction, i) => (
          <ConvictionCard 
            key={conviction.title} 
            {...conviction} 
            cardIndex={i}
          />
        ))}
      </div>
    </section>
  );
}

