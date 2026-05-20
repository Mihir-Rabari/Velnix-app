"use client";

import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from "framer-motion";

interface CardItem {
  title: string;
  description: string;
  label: string;
  icon: React.ReactNode;
}

const cardData: CardItem[] = [
  {
    title: 'Agentic Systems',
    description: 'AI-native architectures designed for autonomous workflows, memory-aware systems, and intelligent task execution.',
    label: 'AI SYSTEMS',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full opacity-10">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    )
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable backend systems powered by distributed architectures, event-driven workflows, and modern cloud platforms.',
    label: 'INFRASTRUCTURE',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full opacity-10">
        <path d="M17.5 19a3.5 3.5 0 0 0 0-7h-1.5a7 7 0 1 0-14 0c0 1.93.78 3.68 2.05 4.95" />
        <path d="M12 12v9" />
        <path d="m8 17 4 4 4-4" />
      </svg>
    )
  },
  {
    title: 'API Ecosystems',
    description: 'Developer-first APIs and programmable systems built for extensibility, interoperability, and automation.',
    label: 'ARCHITECTURES',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full opacity-10">
        <path d="M20 7h-9" />
        <path d="M14 17H5" />
        <circle cx="17" cy="17" r="3" />
        <circle cx="7" cy="7" r="3" />
      </svg>
    )
  },
  {
    title: 'Real-time Systems',
    description: 'High-performance event-driven applications optimized for low latency and scalable communication.',
    label: 'SYSTEMS',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full opacity-10">
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
        <path d="M16 16h5v5" />
      </svg>
    )
  }
];

interface BentoCardProps extends CardItem {
  index: number;
}

function BentoCard({ title, description, label, icon, index }: BentoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);

    // Elegant 3D tilt (max 4.5 degrees)
    const rx = ((y - rect.height / 2) / (rect.height / 2)) * -4.5;
    const ry = ((x - rect.width / 2) / (rect.width / 2)) * 4.5;
    setRotateX(rx);
    setRotateY(ry);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  // Specular Liquid Glass dynamic spotlights (highly performant via Framer template wrappers)
  const spotlightBg = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, rgba(255, 112, 87, 0.06) 0%, rgba(255, 255, 255, 0.01) 50%, transparent 100%)`;
  const spotlightBorder = useMotionTemplate`radial-gradient(160px circle at ${mouseX}px ${mouseY}px, rgba(255, 112, 87, 0.22) 0%, rgba(255, 255, 255, 0.07) 50%, transparent 100%)`;

  return (
    <div 
      className="w-full h-full"
      style={{ perspective: 1000 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ 
          delay: (index % 3) * 0.08, 
          duration: 0.8, 
          ease: [0.23, 1, 0.32, 1] 
        }}
        animate={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
        }}
        whileHover={{ 
          y: -4, 
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.05)"
        }}
        whileTap={{ 
          scale: 0.97, 
          y: -1,
          transition: { type: "spring", stiffness: 450, damping: 14 } 
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden w-full h-full bg-[#08080b]/85 backdrop-blur-xl rounded-[28px] p-[1px] transition-all duration-300 cursor-pointer select-none group"
      >
        {/* Dynamic Glowing Border Spotlight */}
        <motion.div
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ background: spotlightBorder }}
        />

        {/* Inner Card Panel */}
        <div className="relative z-10 w-full h-full rounded-[27px] bg-[#09090c]/95 p-8 md:p-10 flex flex-col items-center justify-center text-center overflow-hidden border border-white/[0.04]">
          {/* Dynamic Background Spotlight Sheen */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: spotlightBg }}
          />

          {/* Curved Lens Highlight Sheen */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(120%_120%_at_50%_0%,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0)_70%)] group-hover:bg-[radial-gradient(120%_120%_at_50%_0%,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_70%)] transition-all duration-500 z-0" />

          {/* Interactive Floating Center Icon */}
          <motion.div 
            animate={{
              x: isHovered ? (mouseX.get() - 160) * 0.04 : 0,
              y: isHovered ? (mouseY.get() - 140) * 0.04 : 0,
              rotate: isHovered ? 4 : 0,
              scale: isHovered ? 1.08 : 1
            }}
            transition={{ type: "spring", stiffness: 100, damping: 16 }}
            className="w-14 h-14 md:w-16 md:h-16 text-[#ff7057]/60 group-hover:text-[#ff7057] transition-all duration-500 mb-5 flex items-center justify-center pointer-events-none z-10"
          >
            <div className="w-full h-full">
              {icon}
            </div>
          </motion.div>

          <div className="relative z-10 flex flex-col items-center w-full">
            {/* Label header with pill layout */}
            <div className="border border-white/10 group-hover:border-[#ff7057]/30 px-3 py-1 rounded-full bg-white/[0.02] group-hover:bg-[#ff7057]/5 transition-all duration-300 mb-4 inline-block">
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-zinc-500 group-hover:text-white transition-colors duration-300">
                {label}
              </span>
            </div>

            {/* Content descriptions centered */}
            <h3 className="font-syne text-md md:text-lg font-bold tracking-tight uppercase text-white/50 group-hover:text-white transition-colors duration-300 mb-2">
              {title}
            </h3>
            <p className="font-sans text-xs md:text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300 max-w-[90%] mx-auto">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function MagicBento() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 md:px-16 lg:px-24 py-12 w-full items-stretch">
      {cardData.map((card, index) => {
        let gridClass = "lg:col-span-1 lg:row-span-1";
        if (index === 0) {
          gridClass = "lg:col-span-2 lg:row-span-2 lg:min-h-[400px]"; // Perfect, compact height
        } else if (index === 1) {
          gridClass = "lg:col-span-2 lg:row-span-1";
        }
        
        return (
          <div key={index} className={`${gridClass} h-full`}>
            <BentoCard {...card} index={index} />
          </div>
        );
      })}
    </div>
  );
}

