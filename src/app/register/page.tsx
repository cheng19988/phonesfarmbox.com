"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        password: form.get("password"),
      }),
    });
    if (res.ok) {
      router.push("/account/orders");
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error || "Registration failed");
    }
    setLoading(false);
  }

  return (
    <div className="section">
      <div className="container-wide max-w-md">
        <h1 className="section-title text-center">Create account</h1>
        <p className="text-sm text-[var(--text-secondary)] text-center mb-6 max-w-sm mx-auto">
          Track USDT sample orders. For first-time buyers we recommend{" "}
          <Link href="/contact" className="link-accent">RFQ via contact form</Link> — no signup needed.
        </p>
        <form onSubmit={handleSubmit} className="card p-6 space-y-4">
          {error && <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>}
          <div>
            <label className="block text-sm text-slate-600 mb-1">Name</label>
            <input name="name" className="input-field" />
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-1">Email</label>
            <input name="email" type="email" required className="input-field" />
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-1">Password</label>
            <input name="password" type="password" required minLength={8} className="input-field" />
          </div>
          <button type="submit" disabled={loading} className="btn-primary w-full">{loading ? "Creating…" : "Register"}</button>
          <p className="text-center text-sm text-slate-600">
            Have an account? <Link href="/login" className="text-orange-700 font-medium">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
