"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "What does The Velnix build?",
    answer:
      "We design and engineer AI-native products, developer platforms, automation systems, real-time applications, and scalable cloud infrastructure from prototype through production.",
  },
  {
    question: "Who do you typically work with?",
    answer:
      "We partner with founders, product teams, and ambitious organizations that need senior technical execution for a new product, a complex platform, or a critical modernization effort.",
  },
  {
    question: "Can you work with an existing codebase?",
    answer:
      "Yes. We can audit an existing system, stabilize its architecture, improve performance, add new capabilities, or work alongside your internal engineering team without forcing a ground-up rewrite.",
  },
  {
    question: "How does an engagement begin?",
    answer:
      "We start with a focused technical discovery to define the product goal, constraints, architecture, and delivery milestones. From there, we propose a clear execution plan with an accountable scope.",
  },
  {
    question: "How quickly can a product ship?",
    answer:
      "Timelines depend on scope, but we favor small production-ready releases over long speculative builds. The first usable milestone is usually planned as early as the architecture safely allows.",
  },
  {
    question: "Do you support products after launch?",
    answer:
      "Yes. We offer ongoing engineering support, observability, performance work, infrastructure scaling, and product iteration so the system can mature after its first release.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-[#050505] border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-[38%_1fr]">
        <div className="px-6 py-14 md:px-16 md:py-20 lg:px-20 xl:px-24 lg:border-r border-white/10">
          <div className="max-w-md">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-xs font-mono font-bold tracking-[0.25em] text-zinc-500 uppercase mb-5"
            >
              // KNOWLEDGE BASE
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-3xl md:text-5xl font-black font-syne uppercase tracking-tight text-white leading-[1.05]"
            >
              Questions,
              <br />
              answered.
            </motion.h2>

            <p className="mt-6 text-sm md:text-base leading-relaxed text-zinc-500 font-sans">
              A practical briefing on how we build, collaborate, and move complex software into production.
            </p>
          </div>
        </div>

        <div className="border-t lg:border-t-0 border-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.04 }}
                className="border-b border-white/10"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="group flex min-h-20 w-full items-center gap-5 px-6 py-6 text-left transition-colors duration-300 hover:bg-white/[0.015] md:min-h-24 md:gap-8 md:px-12 lg:px-16"
                >
                  <span className="shrink-0 font-mono text-[10px] font-bold tracking-[0.2em] text-zinc-600 group-hover:text-zinc-400 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-base md:text-xl font-bold font-syne uppercase tracking-tight text-white/75 group-hover:text-white transition-colors">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="relative shrink-0 w-8 h-8 rounded-full border border-white/10 bg-white/[0.02]"
                    aria-hidden="true"
                  >
                    <span className="absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2 bg-white/70" />
                    <span className="absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-white/70" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={answerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ height: { duration: 0.35 }, opacity: { duration: 0.25 } }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 pl-[70px] pr-6 md:pb-10 md:pl-[108px] md:pr-16 max-w-3xl text-sm md:text-base leading-relaxed text-zinc-400 font-sans">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
