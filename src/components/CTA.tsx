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
    <section id="contact" className="relative bg-[#040407] overflow-hidden border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-[62%_1fr] relative">
        
        {/* Left Column (Text) */}
        <div className="border-r border-white/10 flex flex-col bg-[#040407]/40">
          <div className="p-12 lg:p-24 pb-8 border-b border-white/10">
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
          
          <div className="p-12 lg:p-24">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-xl font-sans"
            >
              Whether you’re building AI products, scalable systems, automation platforms, or next-generation digital experiences, VedLabs helps transform ambitious ideas into production-ready software.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
              className="flex gap-10 items-center text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase font-mono"
            >
              <div className="flex flex-col gap-2">
                <span className="text-white/10">Response Time</span>
                <span className="text-[#ff7057]">&lt; 24 Hours</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex flex-col gap-2">
                <span className="text-white/10">Availability</span>
                <span className="text-white">Global Edge</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column (Form) */}
        <div className="p-12 lg:p-24 bg-[#040407] flex flex-col justify-center relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent opacity-40 pointer-events-none" />
          <div className="bg-white/[0.015] backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-12 relative z-10 shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
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
                  className="w-full bg-transparent border-b border-white/10 pb-3 text-sm text-white placeholder:text-white/5 focus:outline-none focus:border-[#ff7057] transition-all font-sans"
                />
              </div>
              
              <div className="space-y-3">
                <label className="text-xs tracking-[0.2em] uppercase text-zinc-500 font-bold block font-mono">
                  Project Detail
                </label>
                <textarea
                  placeholder="What are we building?"
                  rows={3}
                  className="w-full bg-transparent border-b border-white/10 pb-3 text-sm text-white placeholder:text-white/5 focus:outline-none focus:border-[#ff7057] transition-all resize-none font-sans"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, scaleX: 1.04, scaleY: 0.96 }}
                whileTap={{ scale: 0.97, scaleX: 0.94, scaleY: 1.06 }}
                transition={{ type: "spring", stiffness: 400, damping: 14 }}
                className="relative overflow-hidden group w-full py-4 text-white font-extrabold uppercase tracking-[0.25em] text-xs font-sans rounded-full border border-[#ffaba0]/45 bg-[radial-gradient(circle_at_50%_20%,#ff9b85_0%,#ef4b30_45%,#b01a07_100%)] shadow-[0_8px_20px_rgba(239,75,48,0.3),inset_0_2px_3px_rgba(255,255,255,0.85),inset_0_-2px_4px_rgba(255,255,255,0.25),inset_0_-4px_8px_rgba(0,0,0,0.4)] hover:border-[#ffaba0]/70 hover:shadow-[0_16px_32px_rgba(239,75,48,0.55),inset_0_2.5px_4px_rgba(255,255,255,0.95),inset_0_-2px_4px_rgba(255,255,255,0.35),inset_0_-5px_10px_rgba(0,0,0,0.5)] transition-all duration-300 ease-out cursor-pointer flex items-center justify-center"
              >
                <span className="relative z-30">{submitted ? "Message Received" : "Send Transmission"}</span>
                {/* White Crescent Glare - Always Visible */}
                <span className="absolute top-[2.5px] left-[6px] right-[6px] h-[38%] rounded-full bg-gradient-to-b from-white/80 via-white/20 to-transparent pointer-events-none opacity-90 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-300 z-10" />
                {/* Diagonal shimmer sheen */}
                <span className="absolute inset-0 w-[50%] h-full -left-[75%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none z-20 group-hover:animate-[glass-shimmer_0.85s_cubic-bezier(0.16,1,0.3,1)_forwards]" />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
