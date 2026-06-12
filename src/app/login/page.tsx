"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.get("email"), password: form.get("password") }),
    });
    if (res.ok) {
      router.push("/account/orders");
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error || "Login failed");
    }
    setLoading(false);
  }

  return (
    <div className="section">
      <div className="container-wide max-w-md">
        <h1 className="section-title text-center">Existing orders</h1>
        <p className="text-sm text-[var(--text-secondary)] text-center mb-6 max-w-sm mx-auto">
          Optional login for USDT sample checkout tracking. RFQ inquiries do not require an account —{" "}
          <Link href="/contact" className="link-accent">send a quote request</Link>.
        </p>
        <form onSubmit={handleSubmit} className="card p-6 space-y-4">
          {error && <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>}
          <div>
            <label className="block text-sm text-slate-600 mb-1">Email</label>
            <input name="email" type="email" required className="input-field" />
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-1">Password</label>
            <input name="password" type="password" required className="input-field" />
          </div>
          <button type="submit" disabled={loading} className="btn-primary w-full">{loading ? "Logging in…" : "Log in"}</button>
          <p className="text-center text-sm text-slate-600">
            New account? <Link href="/register" className="text-orange-700 font-medium">Register</Link>
            {" · "}
            <Link href="/how-to-order" className="text-orange-700 font-medium">How to order</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
