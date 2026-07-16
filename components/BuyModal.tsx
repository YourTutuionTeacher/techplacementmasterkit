"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, CheckCircle2, AlertTriangle } from "lucide-react";
import { usePayNow } from "@/lib/usePayNow";

type Props = {
  open: boolean;
  onClose: () => void;
  planName: string;
  amount: number;
};

type FormState = {
  name: string;
  email: string;
  city: string;
  phone: string;
  whatsapp: string;
  college: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  city: "",
  phone: "",
  whatsapp: "",
  college: "",
  message: "",
};

export default function BuyModal({ open, onClose, planName, amount }: Props) {
  const [form, setForm] = useState<FormState>(initialState);
  const [sameAsPhone, setSameAsPhone] = useState(true);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "leadSaved" | "processingPayment" | "error"
  >("idle");
  const [paymentNote, setPaymentNote] = useState<string | null>(null);
  const { payNow } = usePayNow();

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (field === "phone" && sameAsPhone) next.whatsapp = value;
      return next;
    });
  };

  const startPayment = async () => {
    setStatus("processingPayment");
    setPaymentNote(null);
    await payNow({
      planName,
      amount,
      onDismiss: () => {
        setStatus("leadSaved");
        setPaymentNote("Checkout was closed before completing payment.");
      },
      onError: (message) => {
        setStatus("leadSaved");
        setPaymentNote(message);
      },
    });
    // On success, payNow redirects the browser to /success itself.
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, plan: planName, amount }),
      });

      if (!res.ok) throw new Error("Failed to save");

      setStatus("leadSaved");
      await startPayment();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setForm(initialState);
      setStatus("idle");
      setPaymentNote(null);
    }, 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/50 px-4 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl bg-white p-7 shadow-glow sm:p-8"
          >
            <button
              onClick={handleClose}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-primary"
            >
              <X size={18} />
            </button>

            {status === "leadSaved" || status === "processingPayment" ? (
              <div className="flex flex-col items-center py-8 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  {status === "processingPayment" ? (
                    <Loader2 size={26} className="animate-spin" />
                  ) : (
                    <CheckCircle2 size={26} />
                  )}
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-primary">
                  {status === "processingPayment"
                    ? "Opening secure checkout…"
                    : "Details saved!"}
                </h3>

                {paymentNote && (
                  <div className="mt-3 flex items-start gap-2 rounded-xl bg-amber-50 p-3 text-left text-xs text-amber-700">
                    <AlertTriangle size={15} className="mt-0.5 shrink-0" />
                    <span>{paymentNote}</span>
                  </div>
                )}

                {!paymentNote && status === "leadSaved" && (
                  <p className="mt-2 text-sm text-slate-500">
                    We&apos;ll use your details to deliver the kit once payment is complete.
                  </p>
                )}

                <div className="mt-6 flex w-full flex-col gap-2.5">
                  {status === "leadSaved" && (
                    <button onClick={startPayment} className="btn-primary !py-2.5 text-sm">
                      {paymentNote ? "Retry Payment" : "Open Checkout Again"}
                    </button>
                  )}
                  <button
                    onClick={handleClose}
                    className="btn-secondary !py-2.5 text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <>
                <span className="eyebrow">{planName} Plan · ₹{amount}</span>
                <h3 className="mt-2 font-display text-2xl font-bold text-primary">
                  A few details before checkout
                </h3>
                <p className="mt-1.5 text-sm text-slate-500">
                  We&apos;ll use this to deliver your kit and keep you updated.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-secondary"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-secondary"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                        City
                      </label>
                      <input
                        required
                        type="text"
                        value={form.city}
                        onChange={(e) => update("city", e.target.value)}
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-secondary"
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                        College Name
                      </label>
                      <input
                        required
                        type="text"
                        value={form.college}
                        onChange={(e) => update("college", e.target.value)}
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-secondary"
                        placeholder="College"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                      Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-secondary"
                      placeholder="10-digit mobile number"
                    />
                  </div>

                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="block text-xs font-semibold text-slate-600">
                        WhatsApp Number
                      </label>
                      <label className="flex items-center gap-1.5 text-[11px] text-slate-400">
                        <input
                          type="checkbox"
                          checked={sameAsPhone}
                          onChange={(e) => {
                            setSameAsPhone(e.target.checked);
                            if (e.target.checked) update("whatsapp", form.phone);
                          }}
                        />
                        Same as phone
                      </label>
                    </div>
                    <input
                      required
                      type="tel"
                      disabled={sameAsPhone}
                      value={form.whatsapp}
                      onChange={(e) => update("whatsapp", e.target.value)}
                      className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-secondary disabled:bg-slate-50 disabled:text-slate-400"
                      placeholder="WhatsApp number"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                      Additional Message / Query{" "}
                      <span className="font-normal text-slate-400">(optional)</span>
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      rows={3}
                      maxLength={500}
                      className="w-full resize-none rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-secondary"
                      placeholder="Anything specific you'd like us to know or help with?"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-xs font-medium text-red-500">
                      Something went wrong saving your details. Please try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-primary w-full !py-3.5"
                  >
                    {status === "submitting" ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      `Continue to Payment · ₹${amount}`
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
