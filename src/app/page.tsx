import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Products from "@/components/Products";
import MagicBento from "@/components/ui/MagicBento";
import Metrics from "@/components/Metrics";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

import { DoubleDivider } from "@/components/ui/DoubleDivider";
import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/ScrollVelocity";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#ff7057]/30 selection:text-white">
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
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ff7057] via-transparent to-transparent" />
        <ScrollVelocityContainer className="text-5xl md:text-8xl font-black tracking-tighter uppercase text-white/10 italic leading-none">
          <ScrollVelocityRow baseVelocity={3} direction={1}>
            Engineering the Future of Scale •&nbsp;
          </ScrollVelocityRow>
          <ScrollVelocityRow baseVelocity={3} direction={-1}>
            <span className="text-[#ff7057]">VedLabs</span> Multi-disciplinary Studio •&nbsp;
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </section>

      <section className="relative bg-black overflow-hidden w-full min-h-[80vh] flex flex-col">
        <div className="p-12 lg:p-20 border-b border-[#2b2b2b]">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">Building Software for Scale</h2>
        </div>

        <div className="flex-grow flex items-stretch">
          <MagicBento />
        </div>
      </section>

      <Metrics />

      <div className="section-divider">
        <CTA />
      </div>

      <div className="section-divider">
        <Footer />
      </div>
    </main>
  );
}
