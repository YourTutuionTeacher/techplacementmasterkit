import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import Analytics from "@/components/Analytics";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = "https://techplacementmasterkit.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tech Placement Master Kit 2026 | Crack Tech Interviews with Confidence",
    template: "%s | Tech Placement Master Kit 2026",
  },
  description:
    "Master coding interviews, aptitude, DSA, resume building, HR interviews, and company-specific preparation in one complete study kit. 5000+ practice questions covering 30+ top tech companies.",
  keywords: [
    "tech placement kit",
    "coding interview preparation",
    "DSA roadmap",
    "placement preparation 2026",
    "resume templates",
    "HR interview questions",
    "company wise interview preparation",
  ],
  authors: [{ name: "Tech Placement Master Kit" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Tech Placement Master Kit 2026",
    title: "Tech Placement Master Kit 2026 | Crack Tech Interviews with Confidence",
    description:
      "Master coding interviews, aptitude, DSA, resume building, HR interviews, and company-specific preparation in one complete study kit.",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Tech Placement Master Kit 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Placement Master Kit 2026",
    description:
      "Master coding interviews, aptitude, DSA, resume building, and HR interviews in one complete study kit.",
    images: ["/images/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Tech Placement Master Kit 2026",
  description:
    "A complete digital study kit covering coding interviews, DSA, aptitude, resume building, HR interviews, and company-specific preparation.",
  brand: {
    "@type": "Brand",
    name: "Tech Placement Master Kit",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    lowPrice: "99",
    highPrice: "299",
    offerCount: "3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased text-primary bg-white selection:bg-secondary/20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
