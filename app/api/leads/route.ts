import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

/**
 * Stores buyer details submitted from the pre-checkout form (BuyModal.tsx).
 *
 * STORAGE: automatically uses Supabase when SUPABASE_URL and
 * SUPABASE_SERVICE_ROLE_KEY are set in your environment. Until then, it
 * falls back to a local JSON file (`data/leads.json`) so the form works
 * out of the box with zero setup.
 *
 * ⚠️ The local-file fallback will NOT persist reliably on Vercel or most
 * serverless hosts (their filesystem resets between requests) — set up
 * Supabase (see README, Section 12) before deploying live.
 */

const dataFile = path.join(process.cwd(), "data", "leads.json");

type Lead = {
  id: string;
  name: string;
  email: string;
  city: string;
  phone: string;
  whatsapp: string;
  college: string;
  message: string;
  plan: string;
  amount: number;
  createdAt: string;
};

// ---- Local JSON file fallback (used only when Supabase isn't configured) ----

async function readLeadsFromFile(): Promise<Lead[]> {
  try {
    const raw = await fs.readFile(dataFile, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeLeadToFile(lead: Lead) {
  const leads = await readLeadsFromFile();
  leads.push(lead);
  await fs.mkdir(path.dirname(dataFile), { recursive: true });
  await fs.writeFile(dataFile, JSON.stringify(leads, null, 2), "utf-8");
}

// ---- Validation ----

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, city, phone, whatsapp, college, message, plan, amount } = body;

  // Basic server-side validation — never trust client input alone.
  // (message is optional, so it's excluded from this required-field check)
  if (!name || !email || !city || !phone || !whatsapp || !college || !plan) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }
  if (!/^\+?[0-9]{7,15}$/.test(phone.replace(/[\s-]/g, ""))) {
    return NextResponse.json({ error: "Invalid phone number." }, { status: 400 });
  }

  const lead: Lead = {
    id: randomUUID(),
    name: String(name).trim(),
    email: String(email).trim().toLowerCase(),
    city: String(city).trim(),
    phone: String(phone).trim(),
    whatsapp: String(whatsapp).trim(),
    college: String(college).trim(),
    message: message ? String(message).trim().slice(0, 500) : "",
    plan: String(plan).trim(),
    amount: Number(amount) || 0,
    createdAt: new Date().toISOString(),
  };

  const supabase = getSupabaseAdmin();

  if (supabase) {
    const { error } = await supabase.from("leads").insert({
      id: lead.id,
      name: lead.name,
      email: lead.email,
      city: lead.city,
      phone: lead.phone,
      whatsapp: lead.whatsapp,
      college: lead.college,
      message: lead.message,
      plan: lead.plan,
      amount: lead.amount,
      created_at: lead.createdAt,
    });

    if (error) {
      console.error("Supabase insert failed:", error.message);
      return NextResponse.json(
        { error: "Failed to save your details. Please try again." },
        { status: 500 }
      );
    }
  } else {
    // Supabase not configured yet — fall back to local file storage.
    await writeLeadToFile(lead);
  }

  return NextResponse.json({ success: true, id: lead.id });
}

/**
 * Lists stored leads — for your own use while testing.
 * Protected by a simple shared-secret query param so it isn't wide open.
 * Set ADMIN_SECRET in .env.local, then visit:
 *   /api/leads?secret=YOUR_ADMIN_SECRET
 *
 * Replace this with proper authenticated admin tooling before production use.
 */
export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  const expected = process.env.ADMIN_SECRET;

  if (!expected || secret !== expected) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const supabase = getSupabaseAdmin();

  if (supabase) {
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ leads: data, source: "supabase" });
  }

  const leads = await readLeadsFromFile();
  return NextResponse.json({ leads, source: "local-file" });
}
