"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#040407] overflow-hidden w-full border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-4 w-full bg-black/10">
        {/* Brand Col */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="p-12 lg:p-24 border-r border-white/10 space-y-6"
        >
          <div className="text-2xl font-black tracking-tight uppercase text-white font-syne">VedLabs</div>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xs font-sans">
            VedLabs is an AI-native software studio building intelligent products, scalable infrastructure, developer tools, and communication systems.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1 }}
          className="p-12 lg:p-24 border-r border-white/10"
        >
          <h4 className="text-white font-bold mb-6 font-syne uppercase tracking-wider text-sm">Studio</h4>
          <ul className="space-y-4 font-sans">
            {[
              { label: 'Products', href: '#products' },
              { label: 'Research', href: '/research' },
              { label: 'Blog', href: '/blog' },
              { label: 'Contact', href: '#contact' },
              { label: 'Privacy', href: '/privacy' }
            ].map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-zinc-400 hover:text-[#ff7057] transition-colors text-sm">{item.label}</Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
          className="p-12 lg:p-24 border-r border-white/10"
        >
          <h4 className="text-white font-bold mb-6 font-syne uppercase tracking-wider text-sm">Social</h4>
          <ul className="space-y-4 font-sans">
            {[
              { label: 'GitHub', href: 'https://github.com/' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mihir-rabari/' },
              { label: 'Research', href: '/research' },
              { label: 'Blog', href: '/blog' }
            ].map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#ff7057] transition-colors text-sm">{item.label}</a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter/Subscribe */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
          className="p-12 lg:p-24"
        >
          <h4 className="text-white font-bold mb-6 font-syne uppercase tracking-wider text-sm">Subscribe</h4>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="email@example.com"
              className="bg-white/[0.02] border border-white/10 rounded-full px-4 py-2.5 text-sm w-full focus:border-[#ff7057] outline-none placeholder:text-zinc-600 text-white transition-all font-sans"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Brand Strip */}
      <div className="border-t border-white/10 w-full bg-black/25">
        {/* 2-Boxed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 text-xs text-zinc-500 tracking-[0.25em] uppercase font-mono">
          <div className="p-8 border-b md:border-b-0 md:border-r border-white/10">
            © 2026 VEDLABS STUDIO. ALL RIGHTS RESERVED.
          </div>
          <div className="p-8 flex gap-8 items-center">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>

        {/* Large Brand Title */}
        <div className="border-t border-white/10 p-8 lg:p-12 flex flex-col items-center justify-center overflow-hidden relative bg-[#040407]">
          {/* Subtle backlighting */}
          <div className="absolute w-[300px] h-[100px] bg-gradient-to-tr from-[#ff7057]/10 to-purple-600/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="font-black text-white/[0.03] text-6xl lg:text-[15vw] select-none tracking-tighter leading-none font-syne hover:text-white/[0.06] transition-colors duration-500">
            VEDLABS
          </div>
        </div>
      </div>
    </footer>
  );
}
