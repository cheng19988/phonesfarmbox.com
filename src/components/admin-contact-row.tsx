import { analyzeContactSubmission } from "@/lib/rfq-summary";
import { AdminSalesFollowUpChecklist } from "@/components/admin-sales-follow-up";

type ContactRow = {
  id: string;
  name: string;
  email: string;
  country: string | null;
  productInterest: string | null;
  deviceQuantity: string | null;
  message: string | null;
  createdAt: Date;
};

const QUALITY_STYLES: Record<string, string> = {
  "Complete RFQ": "bg-emerald-950/50 text-emerald-400 border-emerald-800/40",
  "Needs follow-up": "bg-amber-950/50 text-amber-400 border-amber-800/40",
  "Missing destination": "bg-red-950/50 text-red-400 border-red-800/40",
  "Missing connection mode": "bg-orange-950/50 text-orange-400 border-orange-800/40",
  "Missing quantity": "bg-orange-950/50 text-orange-400 border-orange-800/40",
};

export function AdminContactRow({ contact }: { contact: ContactRow }) {
  const { parsed, badges, quality } = analyzeContactSubmission(contact);
  const hasRfqAppendix = Boolean(contact.message?.includes("--- RFQ details ---"));

  return (
    <div className="card p-4 text-sm">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <p className="text-white font-medium">
          {contact.name} · {contact.email}
        </p>
        <span className={`text-xs px-2 py-0.5 rounded border ${QUALITY_STYLES[quality] ?? "border-slate-700 text-slate-400"}`}>
          {quality}
        </span>
      </div>
      <p className="text-slate-400">
        {contact.country || "—"} · {contact.productInterest || "—"} · Qty: {contact.deviceQuantity || "—"}
      </p>

      {hasRfqAppendix && (
        <div className="mt-2 p-2 rounded border border-slate-800 bg-slate-950/50 text-xs">
          <p className="text-slate-500 mb-1 font-medium">RFQ summary</p>
          <ul className="text-slate-400 space-y-0.5">
            {parsed.connectionMode && <li>Connection: {parsed.connectionMode}</li>}
            {parsed.voltageRegion && <li>Voltage: {parsed.voltageRegion}</li>}
            {parsed.chassisConfig && <li>Chassis: {parsed.chassisConfig}</li>}
            {parsed.targetModels && <li>Models: {parsed.targetModels}</li>}
            {parsed.paymentPreference && <li>Payment: {parsed.paymentPreference}</li>}
            {parsed.documentationRequested.length > 0 && (
              <li>Docs: {parsed.documentationRequested.join(", ")}</li>
            )}
          </ul>
        </div>
      )}

      <AdminSalesFollowUpChecklist parsed={parsed} contact={contact} />

      <div className="flex flex-wrap gap-1.5 mt-2">
        {badges.map((b) => (
          <span
            key={b.key}
            className={`text-[10px] px-1.5 py-0.5 rounded border ${
              b.present
                ? "border-emerald-800/50 text-emerald-400/90 bg-emerald-950/30"
                : "border-slate-800 text-slate-600"
            }`}
          >
            {b.label}
          </span>
        ))}
      </div>

      <p className="text-slate-500 mt-2 line-clamp-2">{contact.message}</p>
    </div>
  );
}
