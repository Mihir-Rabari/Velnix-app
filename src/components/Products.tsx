"use client";

import { motion } from "framer-motion";
import { Textify } from "./ui/Textify";

const products = [
  { id: "01", title: "VedLabs Core", description: "The high-performance engine powering modern digital infrastructure with modular scalability." },
  { id: "02", title: "VedLabs Connect", description: "Universal integration layer designed to unify your disparate software systems seamlessly." },
  { id: "03", title: "VedLabs Vision", description: "An AI-native analysis platform currently in active development within our R&D labs." },
];

export default function Products() {
  return (
    <section className="relative overflow-hidden bg-black w-full">
      <div className="flex items-center justify-between p-12 lg:p-24 pb-8 border-b border-[#2b2b2b]">
        <Textify text="Our Products" className="text-3xl font-bold" />
        <motion.button 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="text-white/30 hover:text-[#ff7057] transition-all text-[10px] font-black uppercase tracking-[0.4em]"
        >
          view all
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: idx * 0.2, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className={`p-12 lg:p-24 group border-[#2b2b2b] ${idx !== products.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''}`}
          >
            <div className="aspect-[4/3] bg-white/5 border border-[#2b2b2b] rounded-2xl flex items-center justify-center text-6xl font-bold text-white/10 mb-6 group-hover:border-[#ff7057]/50 group-hover:bg-white/10 transition-all cursor-pointer overflow-hidden relative">
              {product.id}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <p className="text-secondary text-sm">{product.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
