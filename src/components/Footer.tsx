"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] overflow-hidden w-full border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-4 w-full bg-black/10">
        {/* Brand Col */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="p-8 md:p-10 lg:p-12 xl:p-16 border-b md:border-b-0 md:border-r border-white/10 space-y-6"
        >
          <BrandLogo imageClassName="h-10 w-auto" />
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xs font-sans">
            The Velnix is an AI-native software studio building intelligent products, scalable infrastructure, developer tools, and communication systems.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1 }}
          className="p-8 md:p-10 lg:p-12 xl:p-16 border-b md:border-b-0 md:border-r border-white/10"
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
                <Link href={item.href} className="text-zinc-400 hover:text-[#ffffff] transition-colors text-sm">{item.label}</Link>
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
          className="p-8 md:p-10 lg:p-12 xl:p-16 border-b md:border-b-0 md:border-r border-white/10"
        >
          <h4 className="text-white font-bold mb-6 font-syne uppercase tracking-wider text-sm">Social</h4>
          <ul className="space-y-4 font-sans">
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/company/the-velnix/' },
              { label: 'Instagram', href: 'https://www.instagram.com/the_velnix/' },
              { label: 'Email', href: 'mailto:hello@thevelnix.com' },
              { label: 'Blog', href: '/blog' }
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-zinc-400 hover:text-[#ffffff] transition-colors text-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
          className="p-8 md:p-10 lg:p-12 xl:p-16"
        >
          <h4 className="text-white font-bold mb-6 font-syne uppercase tracking-wider text-sm">Contact</h4>
          <p className="text-zinc-500 text-xs leading-relaxed mb-4 font-sans">
            New products, technical partnerships, and ambitious systems.
          </p>
          <a
            href="mailto:hello@thevelnix.com"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors font-sans break-all"
          >
            hello@thevelnix.com
            <span aria-hidden="true">&rarr;</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Brand Strip */}
      <div className="border-t border-white/10 w-full bg-black/25">
        {/* 2-Boxed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 text-xs text-zinc-500 tracking-[0.25em] uppercase font-mono">
          <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10">
            © 2026 THE VELNIX STUDIO. ALL RIGHTS RESERVED.
          </div>
          <div className="p-6 md:p-8 flex flex-wrap gap-6 md:gap-8 items-center">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>

        {/* Large Brand Title */}
        <div className="border-t border-white/10 px-6 py-10 lg:p-12 flex flex-col items-center justify-center overflow-hidden relative bg-[#050505]">
          {/* Subtle backlighting */}
          <div className="absolute w-[300px] h-[100px] bg-gradient-to-tr from-[#ffffff]/10 to-zinc-400/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="font-black text-white/[0.03] text-[9vw] select-none tracking-tighter leading-none font-syne hover:text-white/[0.06] transition-colors duration-500 whitespace-nowrap">
            THE VELNIX
          </div>
        </div>
      </div>
    </footer>
  );
}
