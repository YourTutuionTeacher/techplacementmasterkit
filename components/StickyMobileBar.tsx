"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pricingTiers } from "@/lib/data";

export default function StickyMobileBar() {
  const [visible, setVisible] = useState(false);
  const featured = pricingTiers.find((t) => t.highlight) ?? pricingTiers[0];

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 inset-x-0 z-50 border-t border-slate-200 bg-white/95 px-5 py-3 shadow-[0_-8px_30px_rgba(15,23,42,0.08)] backdrop-blur-lg md:hidden"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-medium text-slate-400">
                {featured.name} Plan
              </p>
              <p className="font-display text-lg font-bold text-primary">
                ₹{featured.price}
                <span className="ml-1.5 text-xs font-medium text-slate-400 line-through">
                  ₹{featured.originalPrice}
                </span>
              </p>
            </div>
            <a href="#pricing" className="btn-primary !py-2.5 !px-6 text-sm">
              Buy Now
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
