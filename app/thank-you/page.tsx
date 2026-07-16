import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Thank You",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
        <CheckCircle2 size={28} />
      </div>
      <h1 className="mt-6 font-display text-3xl font-bold text-primary sm:text-4xl">
        Thank you!
      </h1>
      <p className="mt-3 max-w-md text-slate-500">
        We&apos;ve received your message. Our team will get back to you at the
        email address you provided.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </main>
  );
}
