"use client";

import { motion } from "framer-motion";
import { Textify } from "./ui/Textify";

export default function ScaleGrid() {
  return (
    <section className="relative bg-black overflow-hidden w-full">
      <div className="p-12 lg:p-24 pb-8 border-b border-[#2b2b2b]">
        <Textify text="Building Software for Scale" className="text-4xl md:text-5xl font-black font-syne uppercase tracking-tight" />
      </div>

      {/* Protected Diagram Area (48px padding) */}
      <div className="p-12 lg:p-[48px]">
        <div className="relative grid grid-cols-12 grid-rows-6 overflow-hidden rounded-[24px] border border-[#2b2b2b]">
          {/* Geometry Lines Overlay - PRECISE WIREFRAME MATCH */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 1000 600" preserveAspectRatio="none">
            <line x1="0" y1="300" x2="1000" y2="300" stroke="white" strokeWidth="2" strokeOpacity="0.4" />
            <path d="M 0 320 L 250 480" stroke="white" strokeWidth="2" strokeOpacity="0.4" />
            <path d="M 666 50 Q 200 300 666 550" fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.4" />
            <line x1="250" y1="300" x2="666" y2="70" stroke="white" strokeWidth="2" strokeOpacity="0.4" />
            <line x1="250" y1="300" x2="666" y2="530" stroke="white" strokeWidth="2" strokeOpacity="0.4" />
          </svg>

        {/* Column 1 (Left) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="col-span-4 row-span-6 grid grid-rows-2"
        >
            <div className="row-span-1 bg-black p-12 flex flex-col items-center justify-center border-b border-white/10 group hover:bg-[#ff7057]/5 transition-all">
              <span className="text-4xl font-black text-white/10 group-hover:text-white transition-colors">EDGE</span>
              <p className="text-[10px] text-white/5 uppercase tracking-[0.2em] mt-2 group-hover:text-[#ff7057]">Latency Optimized</p>
            </div>
            <div className="row-span-1 bg-black p-12 flex flex-col items-center justify-center group hover:bg-[#ff7057]/5 transition-all">
              <span className="text-4xl font-black text-white/10 group-hover:text-white transition-colors">CLOUD</span>
              <p className="text-[10px] text-white/5 uppercase tracking-[0.2em] mt-2 group-hover:text-[#ff7057]">Native Stack</p>
            </div>
        </motion.div>
          
        {/* Column 2 (Center) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="col-span-4 row-span-6 grid grid-cols-2 grid-rows-2 border-x border-[#2b2b2b]"
        >
            <div className="bg-black p-8 border-r border-b border-white/10 flex flex-col items-center justify-center group hover:bg-[#ff7057]/5 transition-all">
               <span className="text-3xl font-black text-white/10 group-hover:text-white">99.9</span>
               <p className="text-[9px] text-white/5 uppercase tracking-[0.2em] mt-1 group-hover:text-[#ff7057]">Uptime SLA</p>
            </div>
            <div className="bg-black p-8 border-b border-white/10 flex flex-col items-center justify-center group hover:bg-[#ff7057]/5 transition-all">
              <span className="text-3xl font-black text-white/10 group-hover:text-white">API</span>
              <p className="text-[9px] text-white/5 uppercase tracking-[0.2em] mt-1 group-hover:text-[#ff7057]">Full Access</p>
            </div>
            <div className="bg-black p-8 border-r border-white/10 flex flex-col items-center justify-center group hover:bg-[#ff7057]/5 transition-all">
               <span className="text-3xl font-black text-white/10 group-hover:text-white">DEV</span>
               <p className="text-[9px] text-white/5 uppercase tracking-[0.2em] mt-1 group-hover:text-[#ff7057]">Experience</p>
            </div>
            <div className="bg-black p-8 flex flex-col items-center justify-center group hover:bg-[#ff7057]/5 transition-all">
               <span className="text-3xl font-black text-white/10 group-hover:text-white">SEC</span>
               <p className="text-[9px] text-white/5 uppercase tracking-[0.2em] mt-1 group-hover:text-[#ff7057]">Encrypted</p>
            </div>
        </motion.div>
 
        {/* Column 3 (Right) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="col-span-4 row-span-6 grid grid-rows-2"
        >
            <div className="row-span-1 bg-black p-12 flex flex-col items-center justify-center border-b border-white/10 group hover:bg-[#ff7057]/5 transition-all">
              <span className="text-4xl font-black text-white/10 group-hover:text-white transition-colors">CORE</span>
              <p className="text-[10px] text-white/5 uppercase tracking-[0.2em] mt-2 group-hover:text-[#ff7057]">Infrastructure</p>
            </div>
            <div className="row-span-1 bg-black p-12 flex flex-col items-center justify-center group hover:bg-[#ff7057]/5 transition-all">
              <span className="text-4xl font-black text-white/10 group-hover:text-white transition-colors">SDK</span>
              <p className="text-[10px] text-white/5 uppercase tracking-[0.2em] mt-2 group-hover:text-[#ff7057]">Open Standard</p>
            </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
