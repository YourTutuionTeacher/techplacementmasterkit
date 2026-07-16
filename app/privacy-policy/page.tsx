export const metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <main className="section-shell min-h-screen py-32">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-3xl font-bold text-primary">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-400">Last updated: [Add date]</p>

        <div className="prose prose-slate mt-8 max-w-none space-y-6 text-sm leading-relaxed text-slate-600">
          <p>
            [Placeholder — replace with your actual privacy policy before
            launch.] This page explains what information we collect when you
            visit this website or purchase the Tech Placement Master Kit, how
            it is used, and the choices you have.
          </p>
          <h2 className="font-display text-lg font-semibold text-primary">
            Information We Collect
          </h2>
          <p>
            [List the data you collect: e.g. name, email, payment details
            processed via your payment gateway, and analytics data such as
            pages visited.]
          </p>
          <h2 className="font-display text-lg font-semibold text-primary">
            How We Use Your Information
          </h2>
          <p>
            [Explain usage: delivering the purchased product, sending order
            confirmations, and improving the website.]
          </p>
          <h2 className="font-display text-lg font-semibold text-primary">
            Contact
          </h2>
          <p>Questions about this policy can be sent to support@techplacementmasterkit.com.</p>
        </div>
      </div>
    </main>
  );
}
