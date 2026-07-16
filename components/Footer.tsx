import { GraduationCap, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary pb-24 pt-16 text-slate-300 md:pb-16">
      <div className="section-shell grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
              <GraduationCap size={18} />
            </span>
            Tech Placement Master Kit
          </div>
          <p className="mt-4 text-sm text-slate-400">
            A complete, structured preparation kit for tech placements —
            built for the 2026 hiring season.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Legal</p>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
            <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/refund-policy" className="hover:text-white">Refund Policy</a></li>
            <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-2">
              <Mail size={15} /> support@techplacementmasterkit.com
            </li>
            <li className="flex items-center gap-4 pt-1">
              <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin size={18} /></a>
            </li>
          </ul>
        </div>
      </div>

      <div className="section-shell mt-12 border-t border-white/10 pt-6 text-xs text-slate-500">
        © {new Date().getFullYear()} Tech Placement Master Kit. All rights reserved.
        Not affiliated with or endorsed by any company mentioned on this page.
      </div>
    </footer>
  );
}
