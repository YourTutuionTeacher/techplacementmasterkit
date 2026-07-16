# Tech Placement Master Kit 2026 — Landing Page

A premium, production-ready landing page built with Next.js 14 (App Router),
React, TypeScript, Tailwind CSS, and Framer Motion.

---

## 1. Folder Structure

```
tech-placement-master-kit/
├── app/
│   ├── api/
│   │   └── razorpay/
│   │       ├── order/route.ts       # Creates a Razorpay order (stub)
│   │       └── verify/route.ts      # Verifies payment signature (stub)
│   ├── privacy-policy/page.tsx
│   ├── refund-policy/page.tsx
│   ├── terms/page.tsx
│   ├── success/page.tsx             # Post-payment success page
│   ├── thank-you/page.tsx           # Generic thank-you page
│   ├── globals.css
│   ├── layout.tsx                   # Fonts, SEO metadata, JSON-LD schema
│   ├── loading.tsx                  # Skeleton loader
│   ├── not-found.tsx                # Custom 404
│   ├── page.tsx                     # Assembles the landing page
│   ├── robots.ts                    # Dynamic robots.txt
│   └── sitemap.ts                   # Dynamic sitemap.xml
├── components/
│   ├── AnimatedCounter.tsx
│   ├── Analytics.tsx                # GA4 + Meta Pixel loader
│   ├── ComparisonTable.tsx
│   ├── FAQ.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── MoneyBack.tsx
│   ├── Navbar.tsx
│   ├── Pricing.tsx
│   ├── PreviewSection.tsx
│   ├── RazorpayButton.tsx           # Checkout button (stub)
│   ├── RoadmapTimeline.tsx
│   ├── Stats.tsx
│   ├── StickyMobileBar.tsx
│   ├── Testimonials.tsx
│   ├── TrustedCompanies.tsx
│   └── WhatsInside.tsx
├── lib/
│   └── data.ts                      # All copy: companies, stats, FAQs, etc.
├── public/
│   └── images/                      # Add og-cover.jpg and any real assets here
├── .env.example
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## 2. Installation

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables and fill in real values
cp .env.example .env.local

# 3. Run the dev server
npm run dev
```

Visit `http://localhost:3000`.

---

## 3. Build & Run in Production

```bash
npm run build
npm run start
```

---

## 4. Deployment — Vercel (recommended)

1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Vercel auto-detects Next.js — no config changes needed.
4. Add your environment variables (from `.env.example`) under
   **Project Settings → Environment Variables**.
5. Click **Deploy**. Every push to `main` redeploys automatically.
6. Add your custom domain under **Project Settings → Domains**.

---

## 5. Deployment — Hostinger

Hostinger's shared hosting serves static files, not Node.js servers, so you
have two options:

**Option A — Static export (simplest, but loses the API routes)**
1. Since this project uses API routes (`/api/razorpay/...`) and dynamic
   pages, a static export won't support checkout out of the box. Use this
   only if you remove/replace the Razorpay API routes with an external
   backend.
2. `next.config.js` → add `output: "export"`, then run `npm run build`.
3. Upload the generated `out/` folder via Hostinger's File Manager or FTP.

**Option B — Hostinger VPS / Node.js hosting (recommended for full functionality)**
1. Choose a Hostinger VPS or a plan with Node.js support.
2. SSH in, install Node.js 18+, clone your repo.
3. Run `npm install && npm run build`.
4. Run `npm run start` behind a process manager like `pm2`:
   ```bash
   npm install -g pm2
   pm2 start npm --name "tpmk" -- start
   pm2 save
   ```
5. Point Nginx/Apache as a reverse proxy to port 3000, and set up your
   domain + SSL (Hostinger provides free SSL via AutoSSL/Let's Encrypt).

---

## 6. Performance Optimization Checklist

- [x] `next/font` self-hosts and preloads Inter & Poppins (no render-blocking font requests)
- [x] `next/image`-ready `images` config in `next.config.js` (AVIF/WebP)
- [x] Route-level `loading.tsx` skeleton for perceived performance
- [x] Animations use `framer-motion`'s `whileInView` with `once: true` to avoid re-triggering costly reflows
- [x] Marquee/company logos use CSS transforms (GPU-accelerated), not JS-driven animation
- [ ] Replace placeholder graphics in `Hero.tsx` / `PreviewSection.tsx` with optimized real images via `next/image`
- [ ] Run `npx next build` and check the bundle analyzer if you add heavy new dependencies

---

## 7. SEO Checklist

- [x] Per-page `<title>` and `<meta name="description">` via `app/layout.tsx` metadata API
- [x] Open Graph + Twitter Card metadata
- [x] `Product` JSON-LD schema for rich results
- [x] Dynamic `sitemap.xml` (`app/sitemap.ts`) and `robots.txt` (`app/robots.ts`)
- [x] Semantic heading structure (single `h1` in Hero, `h2` per section)
- [ ] Replace `https://techplacementmasterkit.com` placeholder domain in
      `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` with your real domain
- [ ] Add a real `public/images/og-cover.jpg` (1200×630) for social sharing
- [ ] Submit the sitemap in Google Search Console after launch

---

## 8. Google Analytics Integration

1. Create a GA4 property and copy your Measurement ID (e.g. `G-XXXXXXX`).
2. Add it to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXX
   ```
3. `components/Analytics.tsx` automatically loads GA4 when this env var is present — no other changes needed.

---

## 9. Meta Pixel Integration

1. Create a Pixel in Meta Events Manager and copy the Pixel ID.
2. Add it to `.env.local`:
   ```
   NEXT_PUBLIC_META_PIXEL_ID=1234567890
   ```
3. `components/Analytics.tsx` loads the Pixel automatically when present.

---

## 10. Pricing Structure

Three tiers are defined in `lib/data.ts` (`pricingTiers`): ₹99, ₹199, ₹299.
Only the **₹299 (Ultimate)** tier is currently purchasable — the other two
show a disabled "Coming Soon" button. To enable a tier, set its `available`
flag to `true` in `lib/data.ts`.

---

## 11. Pre-Checkout Lead Form

Clicking **Buy** on an available tier opens `components/BuyModal.tsx`, a
form collecting: Full Name, Email, City, Phone Number, WhatsApp Number, and
College Name (with a "same as phone" shortcut for WhatsApp). The selected
plan is passed in automatically — the buyer doesn't need to re-select it.

On submit, the form:
1. POSTs the data to `/api/leads`, which validates and stores it (see next section).
2. Calls `payNow()` from `lib/usePayNow.ts` to open Razorpay checkout — this
   is currently a no-op with a console warning until you add your Razorpay
   keys (see Section 13).

---

## 12. Leads Backend

`app/api/leads/route.ts` is the backend for the buy-form (Section 11). It
collects Name, Email, City, Phone, WhatsApp, College, an optional
Message/Query, plus the selected plan.

**Storage automatically switches based on your environment variables:**
- If `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are set → saves to Supabase.
- If not set → falls back to a local JSON file (`data/leads.json`), so the
  form works immediately with zero setup for local testing.

### Connecting Supabase (recommended before going live)

**Step 1 — Create a Supabase project**
1. Go to [supabase.com](https://supabase.com) and sign up (free tier is enough for this).
2. Click **New Project**, give it a name, set a database password, choose a region close to your users, and create it. Wait ~2 minutes for it to provision.

**Step 2 — Create the `leads` table**
1. In your Supabase project, open the **SQL Editor** (left sidebar).
2. Paste and run this:
   ```sql
   create table leads (
     id uuid primary key,
     name text not null,
     email text not null,
     city text not null,
     phone text not null,
     whatsapp text not null,
     college text not null,
     message text,
     plan text not null,
     amount integer not null,
     created_at timestamptz not null default now()
   );

   -- Lock the table down by default; the app connects with the service
   -- role key, which bypasses RLS, so this just protects it from the
   -- public anon key being used to read/write directly.
   alter table leads enable row level security;
   ```
3. Click **Run**. You should see "Success. No rows returned."

**Step 3 — Get your API keys**
1. In your Supabase project, go to **Project Settings → API**.
2. Copy the **Project URL** → this is your `SUPABASE_URL`.
3. Copy the **service_role** key (under "Project API keys" — NOT the `anon` key) → this is your `SUPABASE_SERVICE_ROLE_KEY`.
   - ⚠️ The service role key bypasses all security rules. Never expose it in
     client-side code or commit it to git — it's only ever read on the
     server in `lib/supabaseAdmin.ts`, and `.env.local` is already
     git-ignored.

**Step 4 — Add the keys to your project**
In `.env.local` (create it from `.env.example` if you haven't):
```
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

**Step 5 — Restart your dev server**
```
npm run dev
```
Submit the buy form once as a test, then go to your Supabase project →
**Table Editor → leads** to see the row appear.

**Step 6 — Deploying (Vercel)**
Add the same two environment variables under **Project Settings →
Environment Variables** in Vercel before deploying. That's it — no code
changes needed, since the route auto-detects Supabase from the env vars.

**Viewing leads without opening Supabase:** you can still use
`/api/leads?secret=YOUR_ADMIN_SECRET` (set `ADMIN_SECRET` in `.env.local`)
— it now reads from Supabase automatically once configured, and tells you
which source it used in the response (`"source": "supabase"` or
`"source": "local-file"`).

---

## 13. Razorpay Payment Integration

The UI and button flow are fully built (`components/RazorpayButton.tsx`,
`app/api/razorpay/order/route.ts`, `app/api/razorpay/verify/route.ts`), but
you must complete these steps for live payments:

1. `npm install razorpay`
2. Get your Key ID + Key Secret from the [Razorpay Dashboard](https://dashboard.razorpay.com).
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_xxxxx
   RAZORPAY_KEY_ID=rzp_live_xxxxx
   RAZORPAY_KEY_SECRET=xxxxx
   ```
4. Uncomment the implementation block in `app/api/razorpay/order/route.ts`.
5. Test with Razorpay's test mode keys before going live.

---

## 14. Download Delivery After Successful Payment

`app/api/razorpay/verify/route.ts` verifies the payment signature. After
verification succeeds, add logic to:
- Generate a **signed, time-limited download URL** (e.g. via AWS S3
  pre-signed URLs, or a private Google Cloud Storage bucket) instead of a
  public static file — this prevents your PDF from being freely shared.
- Return that URL to the client, or email it directly (see next section).

---

## 15. Email Confirmation After Purchase

Not included by default (requires an account with an email provider). Recommended options: [Resend](https://resend.com), SendGrid, or Postmark.

Example using Resend, inside `app/api/razorpay/verify/route.ts` after signature verification:
```ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "orders@yourdomain.com",
  to: customerEmail,
  subject: "Your Tech Placement Master Kit is ready",
  html: `<p>Thanks for your purchase! Download it here: <a href="${downloadUrl}">${downloadUrl}</a></p>`,
});
```

---

## 16. Thank You / Success / 404 Pages

Already built:
- `/thank-you` — generic confirmation page
- `/success?plan=Pro` — shown after a verified Razorpay payment
- Custom 404 — `app/not-found.tsx`

---

## 17. Loading Animations & Skeleton Loaders

- `app/loading.tsx` provides a route-level skeleton shown automatically by
  Next.js during navigation/data fetching.
- Section-entry animations use Framer Motion (`whileInView`) throughout —
  see any component for the pattern.

---

## 18. Mobile Optimization

- Fully responsive from 360px up (mobile-first Tailwind breakpoints).
- `components/StickyMobileBar.tsx` shows a persistent price + Buy Now bar
  on mobile only, after the user scrolls past the hero.
- Navbar collapses into an animated mobile menu below the `md` breakpoint.

---

## 19. Accessibility

- Visible focus rings via `:focus-visible` in `globals.css`.
- `prefers-reduced-motion` respected globally.
- Accordions use `aria-expanded` on trigger buttons.
- All interactive icons have `aria-label`s where they're not accompanied by text.
- Color contrast checked against the brand palette (`#0F172A` on white, white on `#0F172A`).

---

## 20. Before You Launch — Things Marked for Replacement

- `lib/data.ts` → `testimonials` currently show Rahul (LNCT Bhopal), Sonali (IIT Kanpur), and Deepti with illustrative quotes — swap the `quote` text for each person's actual words before launch, since displaying invented quotes under real names as reviews can be misleading if they aren't genuine.
- `app/api/leads/route.ts` → stores form submissions to a local JSON file. Fine for local testing; swap for a real database (Supabase/Google Sheets/Airtable/MongoDB) before deploying to Vercel or any serverless host — see Section 12.
- `lib/data.ts` → only the ₹299 tier is enabled for purchase (`available: true`). Flip the other tiers on when you're ready to sell them.
- `components/MoneyBack.tsx` → the "30-Day Satisfaction Promise" is **off by default** (`OFFERS_SATISFACTION_PROMISE = false`). Only enable it if you actually offer that guarantee, and update `/refund-policy` to match.
- `app/privacy-policy`, `app/refund-policy`, `app/terms` → placeholder legal copy. Replace with real policies (consider a lawyer review, especially for refund terms and how you handle the personal data collected via the buy form).
- Replace `techplacementmasterkit.com` with your real domain across `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`.
- Replace the CSS-mockup hero/preview graphics with real product screenshots via `next/image` once available.
