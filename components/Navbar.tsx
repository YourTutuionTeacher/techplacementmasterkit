"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GraduationCap, ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="section-shell">
        <div
          className={`relative flex items-center justify-between overflow-hidden rounded-2xl px-5 py-3 transition-all duration-300 ${
            scrolled
              ? "glass shadow-soft"
              : "border border-white/0 bg-white/40 backdrop-blur-md"
          }`}
        >
          {/* subtle gradient accent line along the top edge */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

          <a href="#top" className="group flex items-center gap-2.5">
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-primary-light to-secondary text-white shadow-soft transition-transform duration-300 group-hover:scale-105">
              <GraduationCap size={19} />
              <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-white bg-accent" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-[15px] font-bold text-primary sm:text-base">
                Tech Placement <span className="hidden sm:inline">Master Kit</span>
                <span className="sm:hidden">Kit</span>
              </span>
              <span className="hidden text-[10px] font-semibold uppercase tracking-widest text-secondary sm:block">
                2026 Edition
              </span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-primary/70">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => setActiveHref(link.href)}
                onMouseLeave={() => setActiveHref(null)}
                className="relative rounded-full px-4 py-2 transition-colors hover:text-primary"
              >
                {link.label}
                {activeHref === link.href && (
                  <motion.span
                    layoutId="nav-hover"
                    className="absolute inset-0 -z-10 rounded-full bg-primary/5"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary to-secondary-dark px-6 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5"
            >
              Get the Kit
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-primary/10 bg-white/60"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="mt-2 glass rounded-2xl p-5 flex flex-col gap-4 shadow-soft">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-primary/80"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#pricing"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-secondary to-secondary-dark px-6 py-3 text-sm font-semibold text-white"
                >
                  Get the Kit
                  <ArrowRight size={15} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
