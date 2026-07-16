import Link from "next/link";
import { Download, PartyPopper } from "lucide-react";

export const metadata = {
  title: "Payment Successful",
  robots: { index: false, follow: false },
};

export default function SuccessPage({
  searchParams,
}: {
  searchParams: { plan?: string };
}) {
  const plan = searchParams?.plan ?? "your";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-hero-gradient px-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl glass-dark text-accent">
        <PartyPopper size={28} />
      </div>
      <h1 className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl">
        Payment successful!
      </h1>
      <p className="mt-3 max-w-md text-slate-300">
        Your {plan} plan is ready. A confirmation email with your download
        link is on its way — you can also download directly below.
      </p>

      {/*
        NOTE: Wire this button to your actual delivery mechanism —
        e.g. a signed URL from cloud storage generated after payment
        verification in /api/razorpay/verify.
      */}
      <a href="https://gofile.io/d/2uGXXj" className="btn-primary mt-8">
        <Download size={18} />
        Download Your Kit
      </a>

      <Link href="/" className="mt-4 text-sm text-slate-400 hover:text-white">
        Back to Home
      </Link>
    </main>
  );
}
