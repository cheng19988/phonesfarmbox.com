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
  "Complete RFQ": "bg-emerald-50 text-emerald-800 border-emerald-200",
  "Needs follow-up": "bg-amber-50 text-amber-900 border-amber-200",
  "Missing destination": "bg-red-50 text-red-800 border-red-200",
  "Missing connection mode": "bg-orange-50 text-orange-900 border-orange-200",
  "Missing platform": "bg-orange-50 text-orange-900 border-orange-200",
  "Missing quantity": "bg-orange-50 text-orange-900 border-orange-200",
};

export function AdminContactRow({ contact }: { contact: ContactRow }) {
  const { parsed, badges, quality } = analyzeContactSubmission(contact);
  const hasRfqAppendix = Boolean(contact.message?.includes("--- RFQ details ---"));

  return (
    <div className="card p-4 text-sm">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <p className="text-slate-900 font-medium">
          {contact.name} · {contact.email}
        </p>
        <span className={`text-xs px-2 py-0.5 rounded border ${QUALITY_STYLES[quality] ?? "border-slate-200 text-slate-600 bg-slate-50"}`}>
          {quality}
        </span>
      </div>
      <p className="text-slate-600">
        {contact.country || "—"} · {contact.productInterest || "—"} · Qty: {contact.deviceQuantity || "—"}
      </p>

      {hasRfqAppendix && (
        <div className="mt-2 p-2 rounded border border-slate-200 bg-slate-50 text-xs">
          <p className="text-slate-600 mb-1 font-medium">RFQ summary</p>
          <ul className="text-slate-600 space-y-0.5">
            {parsed.platform && <li>Platform: {parsed.platform}</li>}
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
                ? "border-emerald-200 text-emerald-800 bg-emerald-50"
                : "border-slate-200 text-slate-500 bg-white"
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
