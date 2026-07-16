"use client";

declare global {
  interface Window {
    Razorpay: any;
  }
}

type PayNowArgs = {
  planName: string;
  amount: number; // in INR (e.g. 299)
  /** Called if the user closes the checkout modal without paying. */
  onDismiss?: () => void;
  /** Called on a failed payment attempt (card declined, etc.) or a setup error. */
  onError?: (message: string) => void;
};

/**
 * Triggers the Razorpay Standard Checkout flow.
 *
 * Flow: POST /api/razorpay/order -> open Razorpay modal -> on success,
 * POST /api/razorpay/verify to confirm the signature server-side -> redirect
 * to /success only once verification passes.
 */
export function usePayNow() {
  const payNow = async ({ planName, amount, onDismiss, onError }: PayNowArgs) => {
    if (typeof window === "undefined" || !window.Razorpay) {
      const msg =
        "Payment could not start — the checkout script hasn't loaded yet. Please try again in a moment.";
      console.warn(msg);
      onError?.(msg);
      return;
    }

    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    if (!keyId) {
      const msg = "Payments aren't configured yet. Please contact support.";
      console.warn(
        "Razorpay is not configured. Add NEXT_PUBLIC_RAZORPAY_KEY_ID to your environment variables."
      );
      onError?.(msg);
      return;
    }

    try {
      const orderRes = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, planName }),
      });

      const order = await orderRes.json();

      if (!orderRes.ok) {
        onError?.(order.error || "Could not start payment. Please try again.");
        return;
      }

      const rzp = new window.Razorpay({
        key: order.key_id || keyId,
        amount: order.amount,
        currency: order.currency || "INR",
        name: "Tech Placement Master Kit",
        description: `${planName} Plan`,
        order_id: order.order_id,
        handler: async function (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) {
          try {
            const verifyRes = await fetch("/api/razorpay/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            });
            const result = await verifyRes.json();

            if (result.success) {
              window.location.href = `/success?plan=${encodeURIComponent(planName)}`;
            } else {
              onError?.(
                "Payment could not be verified. If money was deducted, please contact support with your payment ID: " +
                  response.razorpay_payment_id
              );
            }
          } catch (err) {
            console.error("Payment verification request failed", err);
            onError?.("Could not verify payment. Please contact support.");
          }
        },
        modal: {
          // User closed the checkout modal without completing payment.
          ondismiss: () => {
            onDismiss?.();
          },
        },
        theme: { color: "#2563EB" },
      });

      // Payment attempt failed (card declined, insufficient funds, etc.)
      rzp.on("payment.failed", function (response: any) {
        console.error("Razorpay payment failed:", response.error);
        onError?.(
          response?.error?.description || "Payment failed. Please try again."
        );
      });

      rzp.open();
    } catch (err) {
      console.error("Payment initialization failed", err);
      onError?.("Could not start payment. Please check your connection and try again.");
    }
  };

  return { payNow };
}
