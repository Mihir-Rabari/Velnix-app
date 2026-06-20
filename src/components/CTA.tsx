"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import TextifyReveal from "./TextifyReveal";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="contact" className="relative bg-[#050505] overflow-hidden border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-[62%_1fr] relative">
        
        {/* Left Column (Text) */}
        <div className="lg:border-r border-white/10 flex flex-col bg-[#050505]/40">
          <div className="p-8 md:p-12 lg:p-20 xl:p-24 pb-6 md:pb-8 border-b border-white/10">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-4 font-mono font-bold"
            >
              Get in Touch
            </motion.p>
            <TextifyReveal className="text-4xl md:text-5xl font-black text-white font-syne uppercase tracking-tight">BUILD SOMETHING INTELLIGENT.</TextifyReveal>
          </div>
          
          <div className="p-8 md:p-12 lg:p-20 xl:p-24">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-xl font-sans"
            >
              Whether you’re building AI products, scalable systems, automation platforms, or next-generation digital experiences, The Velnix helps transform ambitious ideas into production-ready software.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 sm:gap-10 sm:items-center text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase font-mono"
            >
              <div className="flex flex-col gap-2">
                <span className="text-white/10">Response Time</span>
                <span className="text-[#ffffff]">&lt; 24 Hours</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-white/10" />
              <div className="flex flex-col gap-2">
                <span className="text-white/10">Availability</span>
                <span className="text-white">Global Edge</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column (Form) */}
        <div className="px-6 py-10 md:p-12 lg:p-20 xl:p-24 bg-[#050505] flex flex-col justify-center relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-40 pointer-events-none" />
          <div className="bg-white/[0.015] backdrop-blur-xl border border-white/10 rounded-[24px] md:rounded-[32px] p-6 md:p-10 xl:p-12 relative z-10 shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <label className="text-xs tracking-[0.2em] uppercase text-zinc-500 font-bold block font-mono">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="founder@company.com"
                  required
                  className="w-full bg-transparent border-b border-white/10 pb-3 text-sm text-white placeholder:text-white/5 focus:outline-none focus:border-[#ffffff] transition-all font-sans"
                />
              </div>
              
              <div className="space-y-3">
                <label className="text-xs tracking-[0.2em] uppercase text-zinc-500 font-bold block font-mono">
                  Project Detail
                </label>
                <textarea
                  placeholder="What are we building?"
                  rows={3}
                  className="w-full bg-transparent border-b border-white/10 pb-3 text-sm text-white placeholder:text-white/5 focus:outline-none focus:border-[#ffffff] transition-all resize-none font-sans"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, scaleX: 1.04, scaleY: 0.96 }}
                whileTap={{ scale: 0.97, scaleX: 0.94, scaleY: 1.06 }}
                transition={{ type: "spring", stiffness: 400, damping: 14 }}
                className="velnix-button group min-h-12 w-full px-6 text-white font-extrabold uppercase tracking-[0.25em] text-xs font-sans cursor-pointer"
              >
                <span className="relative z-10">{submitted ? "Message Received" : "Send Transmission"}</span>
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
