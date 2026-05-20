"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TeamMember } from "@/lib/teamData";
import { cn } from "@/lib/utils";

// Social Icons
const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

interface TeamMemberClientProps {
  member: TeamMember;
}

export default function TeamMemberClient({ member }: TeamMemberClientProps) {
  const [sessionUptime, setSessionUptime] = useState(0);

  // Keep-alive simple system uptime counter
  useEffect(() => {
    const timer = setInterval(() => {
      setSessionUptime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <main 
      className="min-h-screen bg-[#040407] text-white selection:bg-[#ff7057]/20 selection:text-white relative flex flex-col"
    >
      <Navbar />

      {/* Futuristic Mesh Background & Red Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-[30%] left-[5%] w-[450px] h-[450px] bg-gradient-to-tr from-[#ff7057]/8 to-transparent blur-[140px] rounded-full animate-pulse" style={{ animationDuration: "14s" }} />
        <div className="absolute bottom-[10%] right-[5%] w-[550px] h-[550px] bg-gradient-to-tr from-purple-500/5 to-transparent blur-[160px] rounded-full" />
      </div>

      {/* Back button container */}
      <div className="relative z-10 pt-28 md:pt-36 px-6 max-w-6xl mx-auto w-full">
        <Link 
          href="/team" 
          className="inline-flex items-center gap-2 group text-xs font-mono font-bold text-zinc-500 hover:text-white transition-colors duration-300 uppercase tracking-widest"
        >
          <svg className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
          </svg>
          Back to squad
        </Link>
      </div>

      {/* Main Dossier Split Grid */}
      <section className="relative z-10 px-6 pb-32 pt-6 max-w-6xl mx-auto w-full flex-grow grid grid-cols-1 lg:grid-cols-[38%_1fr] gap-12 lg:gap-16">
        
        {/* Left Column - Diagnostics Frame */}
        <div className="flex flex-col gap-8">
          <div className="bg-white/[0.005] backdrop-blur-md border border-white/[0.06] border-t-white/[0.12] rounded-[32px] p-8 relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.6)] group">
            
            {/* Top decorative lines */}
            <div className="absolute top-4 left-6 right-6 flex justify-between items-center z-10">
              <span className="text-[9px] font-mono text-zinc-600 font-bold uppercase tracking-widest">// DOSSIER //</span>
              <span className="w-2 h-2 rounded-full bg-[#ff7057] animate-pulse" />
            </div>

            {/* Custom Animated Grid Radar Scanning Visual */}
            <div className="aspect-square w-full rounded-[24px] bg-black/40 border border-white/[0.04] mt-4 relative overflow-hidden flex items-center justify-center">
              {/* Futuristic scanning sweep animation */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,112,87,0.02)_0%,rgba(0,0,0,0)_70%)]" />
              
              {/* Radar ring SVGs */}
              <svg className="w-4/5 h-4/5 text-zinc-800 opacity-80" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                {/* Crosshairs */}
                <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="0.25" />
                <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="0.25" />
              </svg>

              {/* Pulsing focal radar nodes */}
              <motion.div 
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute w-24 h-24 rounded-full border border-[#ff7057]/15 flex items-center justify-center"
              />
              <motion.div 
                animate={{ scale: [1, 1.6, 1], opacity: [0.1, 0.5, 0.1] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute w-44 h-44 rounded-full border border-[#ff7057]/5"
              />

              {/* Glowing signal node */}
              <motion.div 
                animate={{ 
                  x: [0, 25, -20, 10, 0],
                  y: [0, -30, 20, -10, 0]
                }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                className="absolute w-2.5 h-2.5 rounded-full bg-[#ff7057] shadow-[0_0_12px_#ff7057] z-10"
              />

              <div className="absolute bottom-4 left-6 right-6 flex justify-between font-mono text-[9px] text-zinc-600">
                <span>RADAR // FEED: OK</span>
                <span>AZIMUTH: 312.44</span>
              </div>
            </div>

            {/* Profile Info Details */}
            <div className="mt-8">
              <h1 className="text-3xl font-black font-syne uppercase tracking-tight text-white mb-2">
                {member.name}
              </h1>
              <p className="text-xs font-mono text-[#ff7057] uppercase tracking-widest font-bold">
                {member.role}
              </p>

              {/* Micro diagnostic stats */}
              <div className="mt-6 space-y-3.5 border-t border-white/[0.06] pt-6 font-mono text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-600 font-bold">LOCATION:</span>
                  <span className="text-zinc-300 font-medium">{member.telemetry.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-600 font-bold">ROLE SPEC:</span>
                  <span className="text-zinc-300 font-medium">{member.telemetry.role}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-600 font-bold">SYSTEM STATUS:</span>
                  <span className="text-green-500 font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    {member.telemetry.status}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-600 font-bold">SYSTEM UPTIME:</span>
                  <span className="text-zinc-300">{sessionUptime}s</span>
                </div>
              </div>

              {/* Dynamic Socials */}
              <div className="mt-8 flex gap-3 border-t border-white/[0.06] pt-6 justify-center">
                <motion.a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-grow py-3 rounded-xl border border-white/10 hover:border-[#ff7057]/60 flex items-center justify-center gap-2 bg-white/[0.01] hover:bg-[#ff7057]/5 text-zinc-400 hover:text-white transition-all duration-300 font-mono text-[10px] font-bold uppercase tracking-widest"
                >
                  <LinkedInIcon />
                  LinkedIn
                </motion.a>

                <motion.a
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 py-3 rounded-xl border border-white/10 hover:border-[#ff7057]/60 flex items-center justify-center bg-white/[0.01] hover:bg-[#ff7057]/5 text-zinc-400 hover:text-white transition-all duration-300"
                >
                  <TwitterIcon />
                </motion.a>

                <motion.a
                  href={member.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 py-3 rounded-xl border border-white/10 hover:border-[#ff7057]/60 flex items-center justify-center bg-white/[0.01] hover:bg-[#ff7057]/5 text-zinc-400 hover:text-white transition-all duration-300"
                >
                  <InstagramIcon />
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Classified Biography & Dossier */}
        <div className="flex flex-col gap-10">
          
          {/* Biography Bio Block */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-[#ff7057] uppercase mb-4">
              // BIOGRAPHIC FILE
            </h2>
            <div className="space-y-6 text-zinc-400 text-base md:text-lg leading-relaxed font-sans max-w-3xl">
              {member.detailedBio.map((paragraph, index) => {
                // Style bold tags highlighted inside paragraph
                const parts = paragraph.split(/\*\*(.*?)\*\*/g);
                return (
                  <p key={index}>
                    {parts.map((part, i) => i % 2 === 1 ? <strong key={i} className="text-white font-bold">{part}</strong> : part)}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Stacks Grid */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-[#ff7057] uppercase mb-4">
              // ACTIVE CORE TECH STACK
            </h2>
            <div className="flex flex-wrap gap-2.5 max-w-2xl">
              {member.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05, borderColor: "rgba(255,112,87,0.4)" }}
                  className="text-xs font-mono font-bold px-4 py-2 bg-white/[0.02] border border-white/10 rounded-xl text-zinc-300 select-none cursor-default transition-colors duration-300 hover:text-white"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>


        </div>
      </section>

      <Footer />
    </main>
  );
}
