import { ShieldCheck, Lock, Zap } from "lucide-react";

// IMPORTANT: Only set this to true if you actually offer a 30-day refund/
// satisfaction guarantee. Do not display a promise you don't honor —
// update /app/refund-policy accordingly if you enable this.
const OFFERS_SATISFACTION_PROMISE = false;

const baseAssurances = [
  {
    icon: Lock,
    title: "Secure Payment",
    description: "Checkout is encrypted end-to-end via a trusted payment gateway.",
  },
  {
    icon: Zap,
    title: "Instant Download",
    description: "Get your download link the moment payment is confirmed.",
  },
];

const withPromise = [
  {
    icon: ShieldCheck,
    title: "30-Day Satisfaction Promise",
    description: "Not happy with the kit? Reach out within 30 days for support.",
  },
  ...baseAssurances,
];

export default function MoneyBack() {
  const items = OFFERS_SATISFACTION_PROMISE ? withPromise : baseAssurances;
  const gridCols = items.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";

  return (
    <section className="section-shell py-20">
      <div
        className={`mx-auto grid max-w-4xl gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft ${gridCols}`}
      >
        {items.map((item) => (
          <div key={item.title} className="flex items-start gap-4 sm:flex-col sm:items-center sm:text-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
              <item.icon size={20} />
            </div>
            <div>
              <p className="font-display font-semibold text-primary">{item.title}</p>
              <p className="mt-1 text-sm text-slate-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
