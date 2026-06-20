"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { teamMembers, TeamMember } from "@/lib/teamData";
import { cn } from "@/lib/utils";

// Custom SVG Icons
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

interface TeamCardProps {
  member: TeamMember;
}

function TeamCard({ member }: TeamCardProps) {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [orbPos, setOrbPos] = useState({ x: 0, y: 0 });

  // 3D Parallax Tilt Math
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150, mass: 0.6 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightBg = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.015) 50%, transparent 100%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Relative coordinates [0, 1]
    const relativeX = (e.clientX - rect.left) / rect.width;
    const relativeY = (e.clientY - rect.top) / rect.height;
    
    x.set(relativeX - 0.5);
    y.set(relativeY - 0.5);

    // Absolute spotlight coords
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);

    // Relative drift coordinates for console text movement
    const centerX = (e.clientX - rect.left) - rect.width / 2;
    const centerY = (e.clientY - rect.top) - rect.height / 2;
    setOrbPos({
      x: centerX * 0.08,
      y: centerY * 0.08,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
    setOrbPos({ x: 0, y: 0 });
  };

  const navigateToProfile = () => {
    router.push(`/team/${member.id}`);
  };

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={navigateToProfile}
      className="w-full min-h-[420px] sm:aspect-[4/5] sm:min-h-0 bg-white/[0.005] hover:bg-white/[0.015] backdrop-blur-md border border-white/[0.06] border-t-white/[0.12] rounded-[24px] relative overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.5)] group hover:border-white/15 transition-all duration-300 cursor-pointer flex flex-col justify-between p-6 sm:p-8"
    >
      {/* 3D Glass Layer Depth */}
      <div 
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(120%_120%_at_50%_0%,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0)_70%)] z-0" 
        style={{ transform: "translateZ(20px)" }}
      />
      
      {/* Dynamic Specular Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: spotlightBg, transform: "translateZ(10px)" }}
      />

      {/* Top Header Card Info */}
      <div className="relative z-10 flex justify-between items-start" style={{ transform: "translateZ(30px)" }}>
        <div>
          <div className="font-mono text-[9px] font-bold text-zinc-500 tracking-[0.2em] uppercase mb-1">
            MEMBER DIRECTORY
          </div>
          <h3 className="text-xl md:text-2xl font-bold font-syne text-white tracking-tight uppercase group-hover:text-[#ffffff] transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-[10px] font-mono text-[#ffffff]/80 uppercase tracking-widest mt-1">
            {member.role}
          </p>
        </div>

        {/* Action arrow indicator */}
        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.01] group-hover:border-[#ffffff]/45 group-hover:bg-[#ffffff]/5 group-hover:text-[#ffffff] text-zinc-500 transition-all duration-300">
          <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"/>
          </svg>
        </div>
      </div>

      {/* Telemetry Panel */}
      <div 
        className="relative z-10 flex-grow flex items-center justify-center my-6"
        style={{ transform: "translateZ(40px)" }}
      >
        <motion.div 
          animate={{
            x: isHovered ? orbPos.x : 0,
            y: isHovered ? orbPos.y : 0,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="w-full font-mono text-[10px] md:text-xs text-zinc-500 space-y-2 border-l-2 border-[#ffffff]/20 pl-4 py-2 bg-white/[0.005] rounded-r-lg group-hover:bg-white/[0.015] group-hover:border-[#ffffff]/40 transition-all duration-300"
        >
          <div className="grid grid-cols-[65px_1fr] gap-x-2 gap-y-1.5">
            <span className="text-zinc-600 font-bold">POSITION:</span>
            <span className="text-zinc-300 font-semibold">{member.role}</span>

            <span className="text-zinc-600 font-bold">LOC:</span>
            <span className="text-zinc-300">{member.telemetry.location}</span>

            <span className="text-zinc-600 font-bold">FOCUS:</span>
            <span className="text-zinc-300 truncate">{member.telemetry.focus.join(", ")}</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom socials */}
      <div 
        className="relative z-10 flex justify-center items-center pt-4 border-t border-white/[0.06]"
        style={{ transform: "translateZ(30px)" }}
      >
        {/* Social CTAs */}
        <div className="flex gap-4">
          <motion.a
            href={member.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-8 h-8 rounded-full border border-white/10 hover:border-[#ffffff]/60 flex items-center justify-center bg-white/[0.01] hover:bg-[#ffffff]/5 text-zinc-400 hover:text-white transition-all duration-300"
          >
            <LinkedInIcon />
          </motion.a>
          
          <motion.a
            href={member.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-8 h-8 rounded-full border border-white/10 hover:border-[#ffffff]/60 flex items-center justify-center bg-white/[0.01] hover:bg-[#ffffff]/5 text-zinc-400 hover:text-white transition-all duration-300"
          >
            <TwitterIcon />
          </motion.a>

          <motion.a
            href={member.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-8 h-8 rounded-full border border-white/10 hover:border-[#ffffff]/60 flex items-center justify-center bg-white/[0.01] hover:bg-[#ffffff]/5 text-zinc-400 hover:text-white transition-all duration-300"
          >
            <InstagramIcon />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function TeamDirectoryClient() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#ffffff]/20 selection:text-white relative overflow-x-clip">
      <Navbar />

      {/* Decorative Grid Mesh & Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-gradient-to-tr from-[#ffffff]/10 to-transparent blur-[160px] rounded-full" />
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-gradient-to-tr from-white/5 via-transparent to-transparent blur-[180px] rounded-full" />
      </div>

      {/* Hero Header Section */}
      <section className="relative z-10 pt-28 md:pt-40 lg:pt-48 pb-12 md:pb-16 px-6 max-w-5xl mx-auto text-left w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-mono font-bold tracking-[0.25em] text-zinc-500 uppercase mb-4"
        >
          // CORE RESEARCH & DEVELOPMENT
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl font-black font-syne uppercase tracking-tight text-white mb-6 leading-[1.1]"
        >
          The Engineering <span className="bg-gradient-to-r from-white via-white to-[#ffffff] bg-clip-text text-transparent">Squad</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base text-zinc-400 max-w-2xl leading-relaxed font-sans"
        >
          We are an elite squad of system architects, AI research engineers, and full-stack builders crafting AI-native infrastructure, developer tools, and scalable software engines.
        </motion.p>
      </section>

      {/* Grid of Cards */}
      <section className="relative z-10 px-6 pb-20 md:pb-28 lg:pb-32 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
