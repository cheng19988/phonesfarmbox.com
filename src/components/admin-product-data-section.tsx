"use client";

import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import {
  DATASHEET_STATUSES,
  IMAGE_TYPES,
  type ProductDataProfile,
  getProfileCompleteness,
  imageTypeLabel,
  productDataToFormDefaults,
  type ProductDataFormInput,
} from "@/lib/product-profile";

type Row = {
  slug: string;
  name: string;
  data: ProductDataProfile | null;
};

function StatusCell({ missing }: { missing: boolean }) {
  return (
    <span className={missing ? "text-amber-400" : "text-emerald-400"}>{missing ? "pending" : "set"}</span>
  );
}

const inputClass =
  "w-full bg-slate-800 border border-slate-700 rounded px-2 py-1.5 text-sm text-white";
const labelClass = "block text-xs text-slate-400 mb-1";

function ProductDataEditForm({
  slug,
  data,
  onCancel,
  onSaved,
}: {
  slug: string;
  data: ProductDataProfile | null;
  onCancel: () => void;
  onSaved: () => void;
}) {
  const [form, setForm] = useState<ProductDataFormInput>(() => productDataToFormDefaults(data));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  function setField<K extends keyof ProductDataFormInput>(key: K, value: ProductDataFormInput[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setError(null);
    setSuccess(false);
  }

  async function save() {
    setSaving(true);
    setError(null);
    setSuccess(false);
    try {
      const res = await fetch(`/api/admin/product-data/${encodeURIComponent(slug)}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const payload = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok) {
        setError(payload.error || "Save failed");
        return;
      }
      setSuccess(true);
      onSaved();
    } catch {
      setError("Network error — try again");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="p-4 border border-slate-700 rounded-lg bg-slate-900/50 space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        {(
          [
            ["dimensions", "Dimensions"],
            ["weight", "Weight"],
            ["powerRequirement", "Power requirement"],
            ["fanCooling", "Fan / cooling"],
            ["portLayout", "Port layout"],
            ["warrantyTerms", "Warranty terms"],
            ["leadTimeNote", "Lead time note"],
            ["moqNote", "MOQ note"],
            ["imageVerificationNote", "Image verification note"],
            ["internalAdminNote", "Internal admin note"],
          ] as const
        ).map(([key, label]) => (
          <div key={key}>
            <label className={labelClass}>{label}</label>
            <input
              className={inputClass}
              value={form[key] ?? ""}
              onChange={(e) => setField(key, e.target.value)}
            />
          </div>
        ))}

        {(
          [
            ["supportedModels", "Supported models (one per line)"],
            ["compatiblePhones", "Compatible devices (one per line)"],
            ["packingList", "Packing list (one per line)"],
          ] as const
        ).map(([key, label]) => (
          <div key={key} className="md:col-span-2">
            <label className={labelClass}>{label}</label>
            <textarea
              className={`${inputClass} min-h-[80px]`}
              value={form[key] ?? ""}
              onChange={(e) => setField(key, e.target.value)}
            />
          </div>
        ))}

        <div>
          <label className={labelClass}>Image type</label>
          <select
            className={inputClass}
            value={form.imageType ?? "product_illustration"}
            onChange={(e) => setField("imageType", e.target.value)}
          >
            {IMAGE_TYPES.map((type) => (
              <option key={type} value={type}>
                {imageTypeLabel(type)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass}>Datasheet status</label>
          <select
            className={inputClass}
            value={form.datasheetStatus ?? "partial"}
            onChange={(e) => setField("datasheetStatus", e.target.value)}
          >
            {DATASHEET_STATUSES.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={save}
          disabled={saving}
          className="text-sm px-3 py-1.5 rounded bg-amber-500/20 text-amber-400 hover:text-cyan-300 disabled:opacity-50"
        >
          {saving ? "Saving…" : "Save product data"}
        </button>
        <button type="button" onClick={onCancel} className="text-sm text-slate-400 hover:text-white">
          Cancel
        </button>
        {success && <span className="text-sm text-emerald-400">Saved</span>}
        {error && <span className="text-sm text-red-400">{error}</span>}
      </div>
    </div>
  );
}

export function AdminProductDataSection({ rows }: { rows: Row[] }) {
  const router = useRouter();
  const [editingSlug, setEditingSlug] = useState<string | null>(null);

  function handleSaved() {
    router.refresh();
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-slate-800 text-slate-400">
            <th className="text-left py-2 pr-2">SKU</th>
            <th className="text-left py-2 pr-2">Datasheet</th>
            <th className="text-left py-2 pr-2">Dims</th>
            <th className="text-left py-2 pr-2">Weight</th>
            <th className="text-left py-2 pr-2">Power</th>
            <th className="text-left py-2 pr-2">Packing</th>
            <th className="text-left py-2 pr-2">Image</th>
            <th className="text-left py-2 pr-2">Admin note</th>
            <th className="text-left py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ slug, name, data }) => {
            const c = getProfileCompleteness(data);
            const isEditing = editingSlug === slug;
            return (
              <Fragment key={slug}>
                <tr key={slug} className="border-b border-slate-800 align-top">
                  <td className="py-2 pr-2 text-white">
                    <div>{slug}</div>
                    <div className="text-slate-500">{name}</div>
                  </td>
                  <td className="py-2 pr-2 text-slate-300">{data?.datasheetStatus ?? "—"}</td>
                  <td className="py-2 pr-2">
                    <StatusCell missing={c.missingDimensions} />
                  </td>
                  <td className="py-2 pr-2">
                    <StatusCell missing={c.missingWeight} />
                  </td>
                  <td className="py-2 pr-2">
                    <StatusCell missing={c.missingPower} />
                  </td>
                  <td className="py-2 pr-2">
                    <StatusCell missing={c.missingPacking} />
                  </td>
                  <td className="py-2 pr-2 text-slate-300">
                    {data ? imageTypeLabel(data.imageType).replace(" reference", "").replace(" illustration", "") : "—"}
                  </td>
                  <td className="py-2 pr-2 text-slate-500 max-w-[200px] truncate" title={data?.internalAdminNote}>
                    {data?.internalAdminNote ?? "—"}
                  </td>
                  <td className="py-2">
                    <button
                      type="button"
                      onClick={() => setEditingSlug(isEditing ? null : slug)}
                      className="text-amber-400 hover:text-cyan-300"
                    >
                      {isEditing ? "Close" : "Edit"}
                    </button>
                  </td>
                </tr>
                {isEditing && (
                  <tr key={`${slug}-edit`} className="border-b border-slate-800">
                    <td colSpan={9} className="py-3">
                      <ProductDataEditForm
                        slug={slug}
                        data={data}
                        onCancel={() => setEditingSlug(null)}
                        onSaved={handleSaved}
                      />
                    </td>
                  </tr>
                )}
              </Fragment>
            );
          })}
        </tbody>
      </table>
      <p className="text-xs text-slate-500 mt-3">
        Edit verified hardware fields per SKU. Empty fields stay &ldquo;Confirmed before quote&rdquo; on the storefront.
      </p>
    </div>
  );
}
