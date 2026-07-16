"use client";

import { motion } from "framer-motion";
import { Star, UserCircle2 } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="section-shell py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow justify-center">Reviews</span>
        <h2 className="mt-4 font-display text-3xl font-bold text-primary sm:text-4xl">
          What students are saying
        </h2>
        <p className="mt-4 text-slate-500">
          Real feedback from students who used the kit to prepare.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="card-surface relative p-6"
          >
            <div className="flex text-accent">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <Star key={idx} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <UserCircle2 size={34} className="text-slate-300" />
              <div>
                <p className="text-sm font-semibold text-primary">{t.name}</p>
                <p className="text-xs text-slate-400">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
