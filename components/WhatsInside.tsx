"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Building2 } from "lucide-react";
import { companyPrepDetails } from "@/lib/data";

export default function WhatsInside() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="whats-inside" className="bg-slate-50/60 py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">What&apos;s inside</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary sm:text-4xl">
            A closer look at company-wise preparation
          </h2>
          <p className="mt-4 text-slate-500">
            Every company track breaks down the hiring process, what to focus
            on, and a ready-to-follow roadmap.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {companyPrepDetails.map((entry, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={entry.company}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/5 text-primary">
                      <Building2 size={16} />
                    </span>
                    <span className="font-display font-semibold text-primary">
                      {entry.company}
                    </span>
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-slate-400"
                  >
                    <ChevronDown size={18} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-4 px-6 pb-6 sm:grid-cols-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                            Interview Process
                          </p>
                          <p className="mt-1.5 text-sm text-slate-600">
                            {entry.rounds}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                            Focus Areas
                          </p>
                          <p className="mt-1.5 text-sm text-slate-600">
                            {entry.focus}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                            Suggested Roadmap
                          </p>
                          <p className="mt-1.5 text-sm text-slate-600">
                            {entry.roadmap}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-400">
          24 more company tracks are included in the full kit, covering
          product, service, and core engineering companies.
        </p>
      </div>
    </section>
  );
}
