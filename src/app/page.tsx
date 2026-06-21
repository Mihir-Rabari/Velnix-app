import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Products from "@/components/Products";
import MagicBento from "@/components/ui/MagicBento";
import Metrics from "@/components/Metrics";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

import { DoubleDivider } from "@/components/ui/DoubleDivider";
import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/ScrollVelocity";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#ffffff]/20 selection:text-white">
      <Navbar />
      
      <Hero />
      
      <div className="section-divider">
        <WhatWeDo />
      </div>
      
      <div className="section-divider">
        <Products />
      </div>
      
      {/* Banner Section 1 */}
      <section className="relative py-16 bg-black section-divider overflow-hidden flex flex-col justify-center gap-2">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ffffff] via-transparent to-transparent" />
        <ScrollVelocityContainer className="text-5xl md:text-8xl font-black tracking-tighter uppercase text-white/10 italic leading-none">
          <ScrollVelocityRow baseVelocity={3} direction={1}>
            AI-Native Systems • Modern Infrastructure • Intelligent Software •&nbsp;
          </ScrollVelocityRow>
          <ScrollVelocityRow baseVelocity={3} direction={-1}>
            Engineering the next layer of digital infrastructure •&nbsp;
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </section>

      <section className="relative bg-[#050505] overflow-hidden w-full flex flex-col section-divider">
        <div className="w-full border-b border-white/10 px-6 pb-6 pt-14 text-left md:px-16 md:pb-8 md:pt-20 lg:px-24">
          <p className="text-xs font-mono font-bold tracking-[0.25em] text-zinc-500 uppercase mb-4">
            // ARCHITECTURAL MATRIX
          </p>
          <h2 className="text-3xl md:text-5xl font-black font-syne uppercase tracking-tight text-white leading-[1.15]">
            Engineering software for <span className="bg-gradient-to-r from-white via-white to-[#ffffff] bg-clip-text text-transparent">humans, agents, and scale</span>
          </h2>
        </div>

        <div className="flex-grow flex items-stretch">
          <MagicBento />
        </div>
      </section>

      <Metrics />

      <FAQ />

      <div className="section-divider">
        <CTA />
      </div>

      <div className="section-divider">
        <Footer />
      </div>
    </main>
  );
}
