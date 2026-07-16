"use client";

import { motion } from "framer-motion";
import { Download, ChevronRight, Star, CheckCircle2 } from "lucide-react";

const floatingIcons = [
  { label: "{ }", top: "8%", left: "4%", delay: 0 },
  { label: "SQL", top: "70%", left: "2%", delay: 0.6 },
  { label: "</>", top: "18%", left: "88%", delay: 0.3 },
  { label: "DSA", top: "78%", left: "84%", delay: 0.9 },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-hero-gradient pt-36 pb-24 sm:pb-32"
    >
      {/* ambient glow blobs */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-secondary/30 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-accent/20 blur-[110px]" />

      <div className="section-shell relative grid gap-16 lg:grid-cols-2 lg:items-center">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="eyebrow mb-6 text-secondary-light">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Placement Season 2026 Edition
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
            Crack Tech Interviews with{" "}
            <span className="gradient-text">Confidence</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Master coding interviews, aptitude, DSA, resume building, HR
            interviews, and company-specific preparation in one complete
            study kit.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#pricing" className="btn-primary">
              <Download size={18} />
              Download Now
            </a>
            <a
              href="#whats-inside"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-white/5"
            >
              View Contents
              <ChevronRight size={16} />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <div className="flex text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span>Trusted prep framework</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-secondary-light" />
              Instant digital download
            </div>
          </div>
        </motion.div>

        {/* Right: mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto h-[380px] w-full max-w-md sm:h-[440px]"
        >
          {/* floating badges */}
          {floatingIcons.map((f, i) => (
            <motion.div
              key={i}
              className="absolute z-20 flex h-14 w-14 items-center justify-center rounded-2xl glass-dark text-[11px] font-bold text-white shadow-glow"
              style={{ top: f.top, left: f.left }}
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: f.delay,
              }}
            >
              {f.label}
            </motion.div>
          ))}

          {/* laptop base */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[86%] rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-3 shadow-glow backdrop-blur-md">
              <div className="flex items-center gap-1.5 pb-2 pl-1">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              </div>
              <div className="rounded-xl bg-white p-5 shadow-inner">
                <div className="mb-3 h-3 w-2/3 rounded-full bg-primary/90" />
                <div className="mb-1.5 h-2 w-full rounded-full bg-slate-200" />
                <div className="mb-1.5 h-2 w-5/6 rounded-full bg-slate-200" />
                <div className="mb-4 h-2 w-4/6 rounded-full bg-slate-200" />
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-16 rounded-lg bg-secondary/10" />
                  <div className="h-16 rounded-lg bg-accent/10" />
                  <div className="h-16 rounded-lg bg-primary/10" />
                </div>
              </div>
            </div>
          </div>

          {/* PDF card floating in front */}
          <motion.div
            className="absolute bottom-2 left-1/2 z-30 w-48 -translate-x-1/2 rounded-2xl bg-white p-4 shadow-soft sm:left-auto sm:right-0 sm:translate-x-0"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 text-accent">
              <Download size={16} />
            </div>
            <p className="text-xs font-semibold text-primary">
              Master Kit 2026.pdf
            </p>
            <p className="mt-0.5 text-[11px] text-slate-400">240+ pages</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
