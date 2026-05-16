"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";
import TextifyReveal from "./TextifyReveal";

const metrics = [
  { value: 10000, suffix: "+", label: "Active Users" },
  { value: 99.9, suffix: "%", label: "Uptime SLA" },
  { value: 50, suffix: "M+", label: "Events Processed" },
  { value: 150, suffix: "+", label: "Countries" },
];

function AnimatedNumber({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(value, increment * step);
      setDisplay(current);
      if (step >= steps) {
        clearInterval(timer);
        setDisplay(value);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  const formatted =
    value >= 1000
      ? Math.round(display).toLocaleString()
      : Number.isInteger(value)
        ? Math.round(display).toString()
        : display.toFixed(1);

  return (
    <span className="font-[family-name:var(--font-geist-mono)]">
      {formatted}
      {suffix}
    </span>
  );
}

export default function Metrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative bg-black overflow-hidden border-t border-[#2b2b2b]" ref={ref}>
      <div className="p-12 lg:p-24 pb-8 border-b border-[#2b2b2b]">
        <p className="text-[11px] tracking-[0.4em] uppercase text-white/20 mb-4">Performance Metrics</p>
        <h2 className="text-4xl md:text-5xl font-black text-white">Global Infrastructure</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        {metrics.map((metric, i) => (
          <div 
            key={metric.label} 
            className={cn(
              "p-12 lg:p-24 flex flex-col justify-center group hover:bg-white/[0.02] transition-all border-b border-[#2b2b2b]",
              i % 2 === 0 ? "md:border-r" : "md:border-r-0",
              i % 4 !== 3 ? "lg:border-r" : "lg:border-r-0",
              "border-[#2b2b2b]"
            )}
          >
            <div className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">
              <AnimatedNumber
                value={metric.value}
                suffix={metric.suffix}
                inView={isInView}
              />
            </div>
            <p className="text-[11px] text-white/30 tracking-[0.2em] uppercase font-bold group-hover:text-[#ff7057] transition-colors">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
