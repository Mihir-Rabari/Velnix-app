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
    <section id="contact" className="relative bg-black overflow-hidden border-t border-[#2b2b2b]">
      <div className="grid grid-cols-1 lg:grid-cols-[62%_1fr] relative">
        
        {/* Left Column (Text) */}
        <div className="border-r border-[#2b2b2b] flex flex-col">
          <div className="p-12 lg:p-24 pb-8 border-b border-[#2b2b2b]">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="text-[11px] tracking-[0.4em] uppercase text-white/20 mb-4"
            >
              Get in Touch
            </motion.p>
            <TextifyReveal text="Let's build the future." className="text-4xl md:text-5xl font-black text-white" />
          </div>
          
          <div className="p-12 lg:p-24">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-secondary text-lg leading-relaxed mb-10 max-w-xl"
            >
              Ready to scale your digital infrastructure? Join the engineering teams building with VedLabs across 150+ countries. Our team is ready to help you navigate the complexities of modern scale.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
              className="flex gap-10 items-center text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase"
            >
              <div className="flex flex-col gap-2">
                <span className="text-white/10">Response Time</span>
                <span className="text-white">&lt; 24 Hours</span>
              </div>
              <div className="w-px h-8 bg-[#2b2b2b]" />
              <div className="flex flex-col gap-2">
                <span className="text-white/10">Availability</span>
                <span className="text-white">Global Edge</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column (Form) */}
        <div className="p-12 lg:p-24 bg-[#0a0a0a]">
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="space-y-4">
              <label className="text-[11px] tracking-[0.3em] uppercase text-white/20 font-bold block">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="founder@company.com"
                required
                className="w-full bg-transparent border-b border-[#2b2b2b] pb-4 text-sm text-white placeholder:text-white/10 focus:outline-none focus:border-[#ff7057] transition-all"
              />
            </div>
            
            <div className="space-y-4">
              <label className="text-[11px] tracking-[0.3em] uppercase text-white/20 font-bold block">
                Project Detail
              </label>
              <textarea
                placeholder="What are we building?"
                rows={4}
                className="w-full bg-transparent border-b border-[#2b2b2b] pb-4 text-sm text-white placeholder:text-white/10 focus:outline-none focus:border-[#ff7057] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-xs hover:bg-[#ff7057] hover:text-white transition-all shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              {submitted ? "Message Received" : "Send Transmission"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
