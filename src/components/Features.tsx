"use client";

import ScrollReveal from "./ScrollReveal";
import TextifyReveal from "./TextifyReveal";

const features = [
  {
    title: "Lightning Fast",
    description: "Sub-millisecond response times globally. Built on edge infrastructure for maximum performance.",
  },
  {
    title: "Enterprise Security",
    description: "SOC 2 Type II certified. End-to-end encryption, SSO, and role-based access control built in.",
  },
  {
    title: "API First",
    description: "RESTful and GraphQL APIs for every feature. Comprehensive SDKs for all major languages.",
  },
  {
    title: "Real-time Sync",
    description: "Changes propagate instantly across all connected clients. WebSocket and SSE support.",
  },
  {
    title: "24/7 Support",
    description: "Dedicated support engineers available around the clock. Average response time under 5 minutes.",
  },
  {
    title: "Global CDN",
    description: "Content delivered from 200+ edge locations worldwide. Automatic geo-routing and caching.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 bg-[#0a0a0a] grain overflow-hidden">
      {/* Warm glow */}
      <div
        className="absolute top-0 left-0 w-[40%] h-[60%] z-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(140,90,60,0.06), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-8 lg:px-16">
        {/* Section header */}
        <div className="mb-20">
          <ScrollReveal>
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/20 mb-6">
              Capabilities
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2
              className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.03em] text-white max-w-3xl"
              style={{ fontFamily: "var(--font-serif-display)" }}
            >
              Built for <br />
              <span className="text-white/30">scale</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Features as editorial list rows */}
        <div>
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.08}>
              <div className="group border-t border-white/[0.06] py-8 lg:py-10 grid lg:grid-cols-12 gap-4 lg:gap-12 items-baseline">
                <div className="lg:col-span-5">
                  <h3 className="text-lg font-medium text-white/80 group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>
                <div className="lg:col-span-5">
                  <TextifyReveal
                    as="p"
                    className="text-[15px] text-white/35 leading-relaxed"
                    stagger={0.06}
                    duration={0.5}
                  >
                    {feature.description}
                  </TextifyReveal>
                </div>
                <div className="hidden lg:block lg:col-span-2 text-right">
                  <span className="text-white/10 text-2xl group-hover:text-[#ff7057]/50 transition-colors duration-500">
                    →
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
          <div className="border-t border-white/[0.06]" />
        </div>
      </div>
    </section>
  );
}
