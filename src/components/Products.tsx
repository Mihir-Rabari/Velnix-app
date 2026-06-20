"use client";

import { motion } from "framer-motion";
import { Textify } from "./ui/Textify";

const products = [
  { 
    id: "01", 
    title: "InboxFM", 
    tagline: "AI-native communication workspace",
    description: "InboxFM transforms email into actionable intelligence using AI-powered summaries, reminders, memory extraction, workflow automation, and agent-ready APIs." 
  },
  { 
    id: "02", 
    title: "FlameNGen", 
    tagline: "Visual game engine scripting",
    description: "A next-generation visual game engine focused on interactive storytelling, scalable gameplay systems, and creator-first tooling." 
  },
  { 
    id: "03", 
    title: "HackHunt", 
    tagline: "Semantic hackathon discovery platform",
    description: "HackHunt helps builders and teams discover hackathons, developer ecosystems, and opportunities through semantic discovery and AI-assisted search." 
  },
];

export default function Products() {
  return (
    <section id="products" className="relative overflow-hidden bg-[#050505] w-full min-h-[90vh] flex flex-col justify-center">
      
      {/* Background Red Mesh blur */}
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-[#ffffff]/3 blur-[140px] rounded-full pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-end justify-between px-6 md:px-16 lg:px-24 pb-6 md:pb-8 border-b border-white/10 w-full">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-[0.25em] text-zinc-500 uppercase mb-4"
          >
            // R&D PRODUCT SUITE
          </motion.p>
          
          <h2 className="text-3xl md:text-5xl font-black font-syne uppercase tracking-tight text-white leading-[1.15]">
            Intelligent software <span className="bg-gradient-to-r from-white via-white to-[#ffffff] bg-clip-text text-transparent">engineered for impact</span>
          </h2>
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-zinc-500 hover:text-white transition-all text-[10px] font-bold uppercase tracking-[0.25em] font-mono cursor-pointer border-b border-transparent hover:border-white/30 pb-0.5 mt-6 md:mt-0"
        >
          view all
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 w-full bg-black/20">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: idx * 0.2, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className={`p-6 sm:p-8 lg:p-12 xl:p-14 group border-white/10 hover:bg-white/[0.01] transition-all duration-300 ${
              idx !== products.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''
            }`}
          >
            <div className="aspect-[16/9] bg-white/[0.015] border border-white/10 rounded-2xl flex items-center justify-center text-5xl font-black text-white/3 mb-6 group-hover:border-white/20 group-hover:bg-white/[0.04] transition-all duration-500 cursor-pointer overflow-hidden relative font-syne shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              {product.id}
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <h3 className="text-xl font-bold font-syne uppercase tracking-tight mb-1 text-white/80 group-hover:text-white transition-colors">
              {product.title}
            </h3>
            <p className="text-[#ffffff] text-[9px] uppercase font-bold tracking-wider font-mono mb-4">
              {product.tagline}
            </p>
            <p className="text-zinc-400 text-sm font-sans leading-relaxed">
              {product.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
