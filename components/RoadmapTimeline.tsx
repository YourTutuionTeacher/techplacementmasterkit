"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { timeline } from "@/lib/data";

export default function RoadmapTimeline() {
  return (
    <section id="roadmap" className="section-shell py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow justify-center">Your 30-day plan</span>
        <h2 className="mt-4 font-display text-3xl font-bold text-primary sm:text-4xl">
          A roadmap, not a random pile of notes
        </h2>
        <p className="mt-4 text-slate-500">
          Follow a structured, week-by-week path from fundamentals to
          interview-ready.
        </p>
      </div>

      <div className="relative mx-auto mt-16 max-w-3xl">
        <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-secondary/50 via-secondary/20 to-transparent sm:left-1/2" />

        <div className="space-y-12">
          {timeline.map((phase, i) => (
            <motion.div
              key={phase.range}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className={`relative flex flex-col gap-6 sm:flex-row sm:items-center ${
                i % 2 === 1 ? "sm:flex-row-reverse" : ""
              }`}
            >
              <div className="absolute left-6 top-1.5 z-10 -translate-x-1/2 sm:left-1/2">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-secondary ring-4 ring-secondary/15" />
              </div>

              <div className="pl-14 sm:w-1/2 sm:pl-0">
                <div
                  className={`card-surface p-6 ${
                    i % 2 === 1 ? "sm:ml-10" : "sm:mr-10"
                  }`}
                >
                  <span className="eyebrow">{phase.range}</span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-primary">
                    {phase.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {phase.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-secondary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="hidden sm:block sm:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
