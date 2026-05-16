"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface TextifyRevealProps {
  children: React.ReactNode;
  as?: "p" | "h1" | "h2" | "h3" | "span" | "div";
  className?: string;
  stagger?: number;
  duration?: number;
  delay?: number;
}

export default function TextifyReveal({
  children,
  as: Tag = "p",
  className,
  stagger = 0.1,
  duration = 0.7,
  delay = 0,
}: TextifyRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const splitRef = useRef<SplitText | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const split = new SplitText(el, {
      type: "lines",
      linesClass: "textify-line",
    });
    splitRef.current = split;

    // Wrap each line in overflow-hidden container
    split.lines.forEach((line) => {
      const wrapper = document.createElement("div");
      wrapper.style.overflow = "hidden";
      wrapper.style.display = "block";
      wrapper.style.lineHeight = "inherit";
      line.parentNode?.insertBefore(wrapper, line);
      wrapper.appendChild(line);
    });

    // Set initial state
    gsap.set(split.lines, {
      y: "100%",
      opacity: 0,
    });

    // Animate on scroll into view
    gsap.to(split.lines, {
      y: "0%",
      opacity: 1,
      duration,
      stagger,
      delay,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    });

    return () => {
      split.revert();
    };
  }, [stagger, duration, delay]);

  return (
    <Tag ref={ref as React.Ref<never>} className={className}>
      {children}
    </Tag>
  );
}
