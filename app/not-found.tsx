import Link from "next/link";
import { Home, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-hero-gradient px-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl glass-dark text-white">
        <SearchX size={28} />
      </div>
      <h1 className="mt-6 font-display text-4xl font-bold text-white">
        404 — Page not found
      </h1>
      <p className="mt-3 max-w-md text-slate-300">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link href="/" className="btn-primary mt-8">
        <Home size={18} />
        Back to Home
      </Link>
    </main>
  );
}
