"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { POST_RFQ_EXPECTATIONS } from "@/data/quote-process";
import { CONTACT } from "@/lib/config";

const FORM_ID = "rfq-form";
const STATUS_ID = "rfq-form-status";

export function ContactFormClientBridge() {
  const router = useRouter();

  useEffect(() => {
    const form = document.getElementById(FORM_ID) as HTMLFormElement | null;
    if (!form) return;

    async function onSubmit(e: Event) {
      e.preventDefault();
      const statusEl = document.getElementById(STATUS_ID);
      const submitBtn = form!.querySelector<HTMLButtonElement>('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending…";
      }
      if (statusEl) statusEl.innerHTML = "";

      const formData = new FormData(form!);
      formData.set("_ajax", "1");

      try {
        const res = await fetch("/api/contact", { method: "POST", body: formData });
        const data = await res.json().catch(() => ({}));
        if (res.ok && data.ref) {
          router.replace(`/contact?submitted=${encodeURIComponent(data.ref)}`, { scroll: false });
          router.refresh();
        } else if (statusEl) {
          statusEl.innerHTML = `<div class="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">Send failed — try <a href="${CONTACT.whatsappUrl}" class="font-semibold underline">WhatsApp</a>.</div>`;
        }
      } catch {
        if (statusEl) {
          statusEl.innerHTML = `<div class="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">Network error — form will submit normally if you try again.</div>`;
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Submit RFQ";
        }
      }
    }

    form.addEventListener("submit", onSubmit);
    return () => form.removeEventListener("submit", onSubmit);
  }, [router]);

  return null;
}

export function ContactFormSuccess({ inquiryRef }: { inquiryRef: string }) {
  const waUrl = `${CONTACT.whatsappUrl}?text=${encodeURIComponent(`Hi, following up on RFQ ${inquiryRef}. `)}`;

  return (
    <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-sm space-y-3 mb-6">
      <p className="text-emerald-900 font-semibold text-base">Inquiry received — ref {inquiryRef}</p>
      <p className="text-slate-700">Save this reference when messaging us on WhatsApp.</p>
      <ul className="space-y-2 text-slate-600">
        {POST_RFQ_EXPECTATIONS.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-emerald-600 shrink-0">✓</span>
            {item}
          </li>
        ))}
      </ul>
      <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex text-sm mt-2">
        Open WhatsApp with ref
      </a>
    </div>
  );
}
