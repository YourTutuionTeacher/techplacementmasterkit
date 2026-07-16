import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

/**
 * Verifies the Razorpay payment signature server-side.
 * POST /api/razorpay/verify
 * Body: { razorpay_order_id, razorpay_payment_id, razorpay_signature }
 *
 * Algorithm: HMAC-SHA256(order_id + "|" + payment_id, RAZORPAY_KEY_SECRET),
 * compared against the signature Razorpay sent back. Only returns
 * success:true if they match — never trust the frontend's word alone.
 *
 * Still TODO for production: generate a signed/expiring download URL
 * (rather than a public static file) and send a confirmation email —
 * see the TODO comment below and README Section 14/15.
 */
export async function POST(req: NextRequest) {
  let body: {
    razorpay_order_id?: string;
    razorpay_payment_id?: string;
    razorpay_signature?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  const secret = process.env.RAZORPAY_KEY_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "Razorpay is not configured on the server." },
      { status: 501 }
    );
  }

  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  const isValid = expectedSignature === razorpay_signature;

  if (!isValid) {
    // Signature mismatch — do NOT mark as paid.
    return NextResponse.json({ success: false, error: "Signature verification failed." }, { status: 400 });
  }

  // TODO: generate a signed download URL and send the confirmation email here.

  return NextResponse.json({ success: true });
}
