"use client";

import { motion } from "framer-motion";
import { Globe } from "./ui/Globe";

export default function WhatWeDo() {
  return (
    <section className="relative overflow-hidden bg-[#050505] border-t border-white/10 min-h-[90vh] lg:h-[90vh] flex items-center">
      
      {/* Subtle monochrome mesh glow */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-[#ffffff]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-[58%_1fr] w-full h-full relative items-center">
        
        {/* Left Column (Text & Bio) */}
        <div className="lg:border-r border-white/10 flex flex-col justify-center h-full px-6 md:px-16 lg:pl-24 lg:pr-16 py-16 lg:py-20">
          <div className="pb-8 border-b border-white/10">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-mono font-bold tracking-[0.25em] text-zinc-500 uppercase mb-4"
            >
              // OPERATIONAL CAPABILITIES
            </motion.p>
            
            <h2 className="text-3xl md:text-5xl font-black font-syne uppercase tracking-tight text-white mb-2 leading-[1.15]">
              We build systems that <span className="bg-gradient-to-r from-white via-white to-[#ffffff] bg-clip-text text-transparent">think & scale</span>
            </h2>
          </div>
          
          <div className="pt-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="space-y-5 text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-xl font-sans">
                <p>
                  The Velnix is a multi-disciplinary software studio focused on building AI-native products, scalable backend systems, developer infrastructure, and intelligent workflow platforms.
                </p>
                <p>
                  We specialize in transforming ambitious ideas into production-ready systems with a strong focus on performance, automation, usability, and long-term scalability.
                </p>
                <p>
                  From communication intelligence platforms like InboxFM to infrastructure tooling, automation systems, and developer-first experiences, our work sits at the intersection of AI, engineering, and product design.
                </p>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex gap-4"
              >
                {/* Explore Products Specular monochrome Button */}
                <motion.a 
                  href="#products"
                  whileHover={{ scale: 1.04, scaleX: 1.06, scaleY: 0.95 }}
                  whileTap={{ scale: 0.96, scaleX: 0.92, scaleY: 1.08 }}
                  transition={{ type: "spring", stiffness: 400, damping: 14 }}
                  className="velnix-button group min-h-11 px-8 text-white font-extrabold text-xs uppercase tracking-[0.2em] font-sans cursor-pointer"
                >
                  <span className="relative z-10">Explore Products</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Right Column (WebGL Globe & Aura) */}
        <div className="flex items-center justify-center h-full w-full py-10 lg:py-20 relative overflow-hidden min-h-[360px] md:min-h-[440px] lg:min-h-0">
          
          {/* Monochrome glowing aura behind the globe */}
          <div className="absolute w-[350px] h-[350px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.02)_60%,transparent_100%)] blur-[40px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: "9s" }} />

          {/* Luxury Background Text behind the globe */}
          <div className="absolute pointer-events-none z-0 select-none flex flex-col items-center justify-center">
            <span className="text-[56px] sm:text-[72px] md:text-[96px] lg:text-[68px] xl:text-[90px] font-black font-syne uppercase tracking-tighter text-white/[0.02] leading-none">
              GLOBAL
            </span>
            <span className="text-[12px] md:text-sm font-mono font-bold tracking-[0.5em] text-[#ffffff]/10 uppercase leading-none mt-2">
              AVAILABILITY
            </span>
          </div>

          {/* Interactive WebGL Globe Canvas Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px] lg:w-[500px] lg:h-[500px] relative aspect-square z-10 flex items-center justify-center"
          >
            <Globe className="w-full h-full absolute inset-0 z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
