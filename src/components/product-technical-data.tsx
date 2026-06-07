import Link from "next/link";
import {
  type ListFieldValue,
  type ProductDataProfile,
  TECHNICAL_DATA_ROWS,
  datasheetStatusLabel,
  displayProfileValue,
  imageTypeLabel,
  PENDING_QUOTE,
} from "@/lib/product-profile";

type Props = {
  slug: string;
  data: ProductDataProfile;
};

export function ProductTechnicalDataStatus({ slug, data }: Props) {
  const rows = TECHNICAL_DATA_ROWS.filter((row) => {
    const val = data[row.key] as string | ListFieldValue | undefined;
    if (val === undefined) return false;
    if (typeof val === "string" && val === "N/A — service SKU") return false;
    return true;
  });

  return (
    <section className="mb-12 p-6 rounded-xl border border-slate-800 bg-slate-900/30">
      <h2 className="text-2xl font-bold text-white mb-2">Technical data status</h2>
      <p className="text-sm text-slate-400 mb-6">
        Values below are confirmed for your quoted configuration. Fields marked &ldquo;{PENDING_QUOTE}&rdquo; are not
        published as fixed specs — request a written datasheet or packing photo before purchase.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-6 text-sm">
        <div className="p-3 rounded-lg border border-slate-800">
          <div className="text-xs text-slate-500 uppercase mb-1">Image type</div>
          <div className="text-slate-200">{imageTypeLabel(data.imageType)}</div>
          {data.imageVerificationNote && (
            <p className="text-xs text-slate-500 mt-2">{data.imageVerificationNote}</p>
          )}
        </div>
        <div className="p-3 rounded-lg border border-slate-800">
          <div className="text-xs text-slate-500 uppercase mb-1">Datasheet</div>
          <div className="text-slate-200">{datasheetStatusLabel(data.datasheetStatus)}</div>
        </div>
      </div>

      <table className="w-full text-sm mb-6">
        <tbody>
          {rows.map((row) => {
            const raw = data[row.key] as string | ListFieldValue | undefined;
            const display = displayProfileValue(raw);
            const isPending = display === PENDING_QUOTE;
            return (
              <tr key={row.key} className="border-b border-slate-800">
                <td className="py-3 text-slate-400 pr-4 w-1/3">{row.label}</td>
                <td className={`py-3 ${isPending ? "text-slate-500 italic" : "text-white"}`}>{display}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <p className="text-sm text-slate-400">
        Need verified dimensions, weight, power draw, or packing photos?{" "}
        <Link href={`/contact?product=${slug}`} className="text-amber-400 hover:underline">
          Request quote with datasheet
        </Link>
        .
      </p>
    </section>
  );
}
