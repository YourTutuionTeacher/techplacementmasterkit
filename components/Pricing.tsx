"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Lock } from "lucide-react";
import { pricingTiers, PricingTier } from "@/lib/data";
import BuyModal from "./BuyModal";

export default function Pricing() {
  const [modalTier, setModalTier] = useState<PricingTier | null>(null);

  return (
    <section id="pricing" className="section-shell py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow justify-center">Pricing</span>
        <h2 className="mt-4 font-display text-3xl font-bold text-primary sm:text-4xl">
          One-time payment, lifetime prep
        </h2>
        <p className="mt-4 text-slate-500">
          No subscriptions. Pick a plan, download instantly, and keep it
          forever.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {pricingTiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative rounded-3xl p-8 ${
              tier.highlight
                ? "bg-primary text-white shadow-glow lg:-translate-y-3"
                : "card-surface text-primary"
            } ${!tier.available ? "opacity-80" : ""}`}
          >
            {tier.highlight && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-white shadow-soft"
              >
                <Sparkles size={13} />
                MOST POPULAR
              </motion.div>
            )}

            {!tier.available && (
              <span className="absolute right-6 top-6 flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                <Lock size={10} />
                Coming Soon
              </span>
            )}

            <h3 className="font-display text-lg font-semibold">{tier.name}</h3>
            <p className={`mt-1 text-sm ${tier.highlight ? "text-slate-300" : "text-slate-500"}`}>
              {tier.description}
            </p>

            <div className="mt-6 flex items-end gap-2">
              <span className="font-display text-4xl font-bold">₹{tier.price}</span>
              <span
                className={`mb-1 text-sm line-through ${
                  tier.highlight ? "text-slate-400" : "text-slate-400"
                }`}
              >
                ₹{tier.originalPrice}
              </span>
            </div>

            <ul className="mt-7 space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <Check
                    size={16}
                    className={`mt-0.5 shrink-0 ${
                      tier.highlight ? "text-accent" : "text-secondary"
                    }`}
                  />
                  <span className={tier.highlight ? "text-slate-200" : "text-slate-600"}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => tier.available && setModalTier(tier)}
              disabled={!tier.available}
              className={`mt-8 w-full rounded-full py-3.5 text-sm font-semibold transition-all duration-300 ${
                tier.available
                  ? `hover:-translate-y-0.5 ${
                      tier.highlight
                        ? "bg-accent text-white hover:bg-accent-dark"
                        : "bg-primary text-white hover:bg-primary-light"
                    }`
                  : "cursor-not-allowed bg-slate-100 text-slate-400"
              }`}
            >
              {tier.available ? `Buy ${tier.name}` : "Notify Me"}
            </button>
          </motion.div>
        ))}
      </div>

      <BuyModal
        open={modalTier !== null}
        onClose={() => setModalTier(null)}
        planName={modalTier?.name ?? ""}
        amount={modalTier?.price ?? 0}
      />
    </section>
  );
}
