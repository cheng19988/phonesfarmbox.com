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
    <span className={missing ? "text-amber-700" : "text-emerald-700"}>{missing ? "pending" : "set"}</span>
  );
}

const inputClass =
  "w-full bg-white border border-slate-200 rounded px-2 py-1.5 text-sm text-slate-900";
const labelClass = "block text-xs text-slate-600 mb-1";

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
      <div>
        <h4 className="text-sm font-medium text-slate-900 mb-3">Image paths &amp; status</h4>
        <p className="text-xs text-slate-500 mb-3">
          Local paths only, e.g. <code className="text-slate-600">/images/products/phone-farm-box-primary-01.webp</code>.
          Batch import: see <code className="text-slate-600">docs/product-image-import-template.csv</code> and{" "}
          <code className="text-slate-600">npm run images:import</code>.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className={labelClass}>Primary image URL (local path under /images/)</label>
            <input
              className={inputClass}
              placeholder="/images/products/phone-farm-box-main.webp"
              value={form.primaryImageUrl ?? ""}
              onChange={(e) => setField("primaryImageUrl", e.target.value)}
            />
          </div>
          <div className="md:col-span-2">
            <label className={labelClass}>Gallery images (one local path per line)</label>
            <textarea
              className={`${inputClass} min-h-[80px]`}
              placeholder="/images/assembly/example.webp"
              value={form.galleryImages ?? ""}
              onChange={(e) => setField("galleryImages", e.target.value)}
            />
          </div>
          {(
            [
              ["imageAlt", "Image alt text"],
              ["imageSourceNote", "Image source note"],
              ["imageLastVerifiedAt", "Image last verified (YYYY-MM-DD)"],
              ["imageVerificationNote", "Image verification note"],
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
        {form.imageType === "official_photo" && (
          <p className="text-xs text-orange-700/90 mt-2">
            official_photo requires imageSourceNote or imageVerificationNote — only use for verified real product photos.
          </p>
        )}
      </div>

      <div>
        <h4 className="text-sm font-medium text-slate-900 mb-3">Hardware datasheet fields</h4>
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
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={save}
          disabled={saving}
          className="text-sm px-3 py-1.5 rounded bg-orange-100 text-orange-800 hover:bg-orange-200 disabled:opacity-50"
        >
          {saving ? "Saving…" : "Save product data"}
        </button>
        <button type="button" onClick={onCancel} className="text-sm text-slate-600 hover:text-slate-900">
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
          <tr className="border-b border-slate-200 text-slate-600">
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
                <tr key={slug} className="border-b border-slate-200 align-top">
                  <td className="py-2 pr-2 text-slate-900">
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
                      className="text-orange-700 hover:text-orange-800 font-medium"
                    >
                      {isEditing ? "Close" : "Edit"}
                    </button>
                  </td>
                </tr>
                {isEditing && (
                  <tr key={`${slug}-edit`} className="border-b border-slate-200">
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
        Edit verified hardware and image fields per SKU. Empty fields stay &ldquo;Confirmed before quote&rdquo; on the storefront. Use local paths under <code className="text-slate-600">/images/</code> only — no external URLs.
      </p>
    </div>
  );
}
