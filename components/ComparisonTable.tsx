"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { comparisonRows } from "@/lib/data";

export default function ComparisonTable() {
  return (
    <section className="bg-slate-50/60 py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Why this kit</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary sm:text-4xl">
            Structured prep vs. scattered notes
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft"
        >
          <div className="grid grid-cols-3 border-b border-slate-100 bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:text-sm">
            <div className="p-4">Feature</div>
            <div className="p-4 text-center">Random PDFs / Notes</div>
            <div className="p-4 text-center text-secondary">
              Tech Placement Master Kit
            </div>
          </div>
          {comparisonRows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 items-center text-sm ${
                i % 2 === 0 ? "bg-white" : "bg-slate-50/40"
              }`}
            >
              <div className="p-4 text-primary/80">{row.feature}</div>
              <div className="flex justify-center p-4">
                {row.others ? (
                  <Check size={18} className="text-slate-400" />
                ) : (
                  <X size={18} className="text-slate-300" />
                )}
              </div>
              <div className="flex justify-center bg-secondary/[0.04] p-4">
                {row.kit ? (
                  <Check size={18} className="text-secondary" />
                ) : (
                  <X size={18} className="text-slate-300" />
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
