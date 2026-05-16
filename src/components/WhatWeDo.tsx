"use client";

import { motion } from "framer-motion";
import { Textify } from "./ui/Textify";

export default function WhatWeDo() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[62%_1fr] relative">
        
        {/* Left Column (Text) */}
        <div className="border-r border-[#2b2b2b] flex flex-col">
          <div className="p-12 lg:p-24 pb-8 border-b border-[#2b2b2b]">
            <Textify text="What we do ?" className="text-4xl md:text-5xl font-bold" />
          </div>
          
          <div className="p-12 lg:p-24 pt-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Textify 
                text="VedLabs is a multi-disciplinary software studio. We specialize in building robust, scalable, and user-centric digital products. From initial concept to final deployment, we ensure every line of code serves a purpose. Our team blends engineering excellence with creative problem solving to deliver results that move the needle."
                className="text-secondary text-lg leading-relaxed mb-10 max-w-xl"
                delay={0.1}
              />
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.6 }}
                className="flex gap-8"
              >
                <button className="px-10 py-4 bg-white text-black font-black text-[10px] uppercase tracking-[0.3em] hover:bg-[#ff7057] hover:text-white transition-all shadow-[6px_6px_0px_rgba(255,255,255,0.05)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none">
                  Explore
                </button>
                <button className="text-white font-black text-[10px] uppercase tracking-[0.3em] hover:text-[#ff7057] transition-colors flex items-center gap-3 group">
                  Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Right Column (Card) */}
        <div className="p-12 lg:p-24 bg-black flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full aspect-video bg-white/5 border border-[#2b2b2b] rounded-[24px] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff7057]/10 to-transparent opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[#ff7057]/20 blur-xl animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
