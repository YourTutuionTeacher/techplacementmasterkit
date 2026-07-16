import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import { pricingTiers } from "@/lib/data";

/**
 * Creates a Razorpay order server-side.
 * POST /api/razorpay/order
 * Body: { amount: number (INR, e.g. 299), planName: string }
 * Returns: { order_id, amount, currency, key_id }
 */
export async function POST(req: NextRequest) {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    return NextResponse.json(
      {
        error:
          "Razorpay is not configured. Add RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET to your environment variables.",
      },
      { status: 401 }
    );
  }

  let body: { amount?: number; planName?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { amount, planName } = body;

  if (typeof amount !== "number" || !planName) {
    return NextResponse.json(
      { error: "amount (number) and planName are required." },
      { status: 400 }
    );
  }

  // Server-side price integrity check: only allow amounts that match a real,
  // currently-available plan — never trust the amount sent from the client
  // as-is, since it could be tampered with in devtools.
  const matchingTier = pricingTiers.find(
    (tier) => tier.name === planName && tier.available
  );
  if (!matchingTier || matchingTier.price !== amount) {
    return NextResponse.json(
      { error: "Invalid plan or amount for the selected plan." },
      { status: 400 }
    );
  }

  const amountInPaise = Math.round(amount * 100);

  if (amountInPaise < 100) {
    return NextResponse.json(
      { error: "Amount must be at least ₹1 (100 paise)." },
      { status: 400 }
    );
  }

  try {
    const instance = new Razorpay({ key_id: keyId, key_secret: keySecret });

    const order = await instance.orders.create({
      amount: amountInPaise,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: { planName },
    });

    return NextResponse.json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
      key_id: keyId,
    });
  } catch (err: any) {
    // Razorpay auth failures surface here too (bad key_id/key_secret pair);
    // the SDK doesn't reliably expose an HTTP status, so we treat any
    // failure at this stage as a server-side error.
    console.error("Razorpay order creation failed:", err?.error || err);
    return NextResponse.json(
      { error: "Could not create order. Please try again." },
      { status: 500 }
    );
  }
}
