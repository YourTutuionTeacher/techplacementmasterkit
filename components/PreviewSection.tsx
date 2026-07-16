"use client";

import { motion } from "framer-motion";

const previews = [
  { title: "DSA Roadmap", tone: "from-secondary/15 to-secondary/5" },
  { title: "Company-Wise Guide", tone: "from-accent/15 to-accent/5" },
  { title: "Resume Templates", tone: "from-primary/10 to-primary/5" },
  { title: "Mock Interview Bank", tone: "from-secondary/15 to-accent/10" },
];

export default function PreviewSection() {
  return (
    <section className="bg-slate-50/60 py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Inside the kit</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary sm:text-4xl">
            A peek at the actual pages
          </h2>
          <p className="mt-4 text-slate-500">
            Clean, print-ready layouts designed for fast scanning — not walls
            of unstructured text.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {previews.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.tone} transition-transform duration-500 group-hover:scale-110`}
              />
              <div className="relative flex h-full flex-col justify-between p-4">
                <div className="space-y-1.5">
                  <div className="h-2 w-3/4 rounded-full bg-primary/20" />
                  <div className="h-1.5 w-full rounded-full bg-primary/10" />
                  <div className="h-1.5 w-5/6 rounded-full bg-primary/10" />
                </div>
                <p className="text-xs font-semibold text-primary/70">
                  {p.title}
                </p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-primary/0 opacity-0 backdrop-blur-0 transition-all duration-300 group-hover:bg-primary/40 group-hover:opacity-100 group-hover:backdrop-blur-[2px]">
                <span className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-primary">
                  Preview
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
