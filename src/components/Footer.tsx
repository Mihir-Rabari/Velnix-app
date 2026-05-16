"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 w-full">
        {/* Brand Col */}
        <div className="p-12 lg:p-24 border-r border-[#2b2b2b] space-y-6">
          <div className="text-2xl font-black tracking-tighter uppercase text-white">VedLabs</div>
          <p className="text-secondary text-sm leading-relaxed max-w-xs">
            Engineering excellence for the modern web. Building tools that scale with your global vision.
          </p>
        </div>

        {/* Quick Links */}
        <div className="p-12 lg:p-24 border-r border-[#2b2b2b]">
          <h4 className="text-white font-bold mb-6">Studio</h4>
          <ul className="space-y-4">
            {['What we do', 'Products', 'Our Process', 'Contact'].map((item) => (
              <li key={item}>
                <Link href="#" className="text-secondary hover:text-white transition-colors text-sm">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div className="p-12 lg:p-24 border-r border-[#2b2b2b]">
          <h4 className="text-white font-bold mb-6">Social</h4>
          <ul className="space-y-4">
            {['Twitter', 'GitHub', 'LinkedIn', 'Instagram'].map((item) => (
              <li key={item}>
                <Link href="#" className="text-secondary hover:text-white transition-colors text-sm">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter/Legal */}
        <div className="p-12 lg:p-24">
          <h4 className="text-white font-bold mb-6">Subscribe</h4>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="email@example.com"
              className="bg-white/5 border border-[#2b2b2b] rounded-lg px-4 py-2 text-sm w-full focus:border-[#ff7057] outline-none"
            />
          </div>
        </div>
      </div>

      {/* Bottom Brand Strip */}
      <div className="border-t border-[#2b2b2b] w-full">
        {/* 2-Boxed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 text-xs text-white/30 tracking-widest uppercase">
          <div className="p-8 border-b md:border-b-0 md:border-r border-[#2b2b2b]">
            © 2026 VEDLABS STUDIO. ALL RIGHTS RESERVED.
          </div>
          <div className="p-8 flex gap-8 items-center">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>

        {/* Large Brand Title */}
        <div className="border-t border-[#2b2b2b] p-8 lg:p-12 flex items-center justify-center overflow-hidden">
          <div className="font-bold text-white/5 text-6xl lg:text-[15vw] select-none tracking-tighter leading-none">
            VEDLABS
          </div>
        </div>
      </div>
    </footer>
  );
}
