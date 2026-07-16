export const metadata = { title: "Refund Policy" };

export default function RefundPolicyPage() {
  return (
    <main className="section-shell min-h-screen py-32">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-3xl font-bold text-primary">Refund Policy</h1>
        <p className="mt-2 text-sm text-slate-400">Last updated: [Add date]</p>

        <div className="prose prose-slate mt-8 max-w-none space-y-6 text-sm leading-relaxed text-slate-600">
          <p>
            [Placeholder — replace with your actual refund terms before
            launch. Because this is a digital product delivered instantly on
            purchase, many sellers offer limited or no refunds after
            download. State your real policy clearly here, including any
            conditions, time windows, and how to request one.]
          </p>
          <h2 className="font-display text-lg font-semibold text-primary">
            How to Request a Refund
          </h2>
          <p>
            [Explain the process, e.g. emailing support with the order ID
            within a stated window.]
          </p>
        </div>
      </div>
    </main>
  );
}
