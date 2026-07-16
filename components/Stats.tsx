"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import AnimatedCounter from "./AnimatedCounter";

export default function Stats() {
  return (
    <section className="bg-primary py-20">
      <div className="section-shell grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="text-center"
          >
            <div className="font-display text-3xl font-bold text-white sm:text-4xl">
              <AnimatedCounter value={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-xs font-medium text-slate-400 sm:text-sm">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
