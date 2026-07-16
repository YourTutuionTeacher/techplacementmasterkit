export const metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <main className="section-shell min-h-screen py-32">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-3xl font-bold text-primary">Terms of Service</h1>
        <p className="mt-2 text-sm text-slate-400">Last updated: [Add date]</p>

        <div className="prose prose-slate mt-8 max-w-none space-y-6 text-sm leading-relaxed text-slate-600">
          <p>
            [Placeholder — replace with your actual terms before launch.]
            These terms govern your use of this website and your purchase of
            the Tech Placement Master Kit 2026.
          </p>
          <h2 className="font-display text-lg font-semibold text-primary">
            License to Use
          </h2>
          <p>
            [State that the kit is for personal, individual use and may not
            be resold, redistributed, or shared publicly.]
          </p>
          <h2 className="font-display text-lg font-semibold text-primary">
            Disclaimer
          </h2>
          <p>
            This kit is an independent preparation resource. It is not
            affiliated with, endorsed by, or sponsored by any company
            referenced on this site, and does not guarantee interview or job
            offer outcomes.
          </p>
        </div>
      </div>
    </main>
  );
}
