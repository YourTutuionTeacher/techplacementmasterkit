"use client";

import { motion } from "framer-motion";
import {
  Building2,
  TrendingUp,
  Code2,
  Map,
  FileText,
  CheckCircle2,
  Linkedin,
  ClipboardList,
  Wallet,
  Mic2,
  FolderKanban,
  Route,
  Calculator,
  Brain,
  MessageSquare,
  Database,
  Server,
  Cpu,
  Network,
  Layers,
  Users,
  LucideIcon,
} from "lucide-react";
import { features, Feature } from "@/lib/data";

const iconMap: Record<Feature["icon"], LucideIcon> = {
  building: Building2,
  trending: TrendingUp,
  code: Code2,
  map: Map,
  file: FileText,
  check: CheckCircle2,
  linkedin: Linkedin,
  clipboard: ClipboardList,
  wallet: Wallet,
  mic: Mic2,
  folder: FolderKanban,
  route: Route,
  calculator: Calculator,
  brain: Brain,
  message: MessageSquare,
  database: Database,
  server: Server,
  cpu: Cpu,
  network: Network,
  layers: Layers,
  users: Users,
};

export default function Features() {
  return (
    <section id="features" className="section-shell py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow justify-center">Everything, in one kit</span>
        <h2 className="mt-4 font-display text-3xl font-bold text-primary sm:text-4xl">
          21 tools to prepare like a topper
        </h2>
        <p className="mt-4 text-slate-500">
          Every subject, template, and roadmap you&apos;d otherwise piece together
          from a dozen sources — organized in one place.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => {
          const Icon = iconMap[feature.icon];
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
              className="card-surface group p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                <Icon size={20} />
              </div>
              <h3 className="font-display text-base font-semibold text-primary">
                {feature.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
