"use client";

import { useState } from "react";

export function AdminProductRow({
  id,
  name,
  priceUsd,
  stock,
}: {
  id: string;
  name: string;
  priceUsd: number;
  stock: number;
}) {
  const [price, setPrice] = useState(String(priceUsd));
  const [qty, setQty] = useState(String(stock));
  const [saved, setSaved] = useState(false);

  async function save() {
    await fetch("/api/admin/products", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: id, priceUsd: price, stock: qty }),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <tr className="border-b border-slate-200">
      <td className="py-3 px-4 text-slate-900">{name}</td>
      <td className="py-3 px-4">
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-20 bg-white border border-slate-200 rounded px-2 py-1 text-sm text-slate-900"
        />
      </td>
      <td className="py-3 px-4">
        <input
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          className="w-16 bg-white border border-slate-200 rounded px-2 py-1 text-sm text-slate-900"
        />
      </td>
      <td className="py-3 px-4">
        <button type="button" onClick={save} className="text-orange-700 text-xs font-semibold hover:text-orange-800">
          {saved ? "Saved" : "Save"}
        </button>
      </td>
    </tr>
  );
}
