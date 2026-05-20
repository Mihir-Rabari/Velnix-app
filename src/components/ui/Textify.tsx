"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextifyProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

export const Textify = ({ text, className = "", delay = 0, once = true }: TextifyProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: "some" });

  // Split classes to separate parent layout from text-gradient/color styling
  // This solves nested bg-clip-text rendering bugs on flexbox containers in Chromium
  const classes = className.split(" ");
  const gradientClasses = classes.filter(c => 
    c.startsWith("bg-gradient-") || 
    c.startsWith("from-") || 
    c.startsWith("via-") || 
    c.startsWith("to-") || 
    c === "bg-clip-text" || 
    c === "text-transparent"
  ).join(" ");
  
  const parentClasses = classes.filter(c => 
    !c.startsWith("bg-gradient-") && 
    !c.startsWith("from-") && 
    !c.startsWith("via-") && 
    !c.startsWith("to-") && 
    c !== "bg-clip-text" && 
    c !== "text-transparent"
  ).join(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      style={{ display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={parentClasses}
    >
      {text.split(" ").map((word, index) => (
        <span key={index} style={{ overflow: "hidden", display: "inline-block", marginRight: "0.25em" }}>
          <motion.span
            variants={child}
            style={{ display: "inline-block" }}
            className={gradientClasses}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
};
