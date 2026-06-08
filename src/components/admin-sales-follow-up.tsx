import { ADMIN_SALES_FOLLOW_UP } from "@/data/delivery-process";
import type { RfqParsedFields } from "@/lib/rfq-summary";

function isFollowUpDone(
  key: string,
  parsed: RfqParsedFields,
  contact: { country?: string | null; message?: string | null }
): boolean {
  switch (key) {
    case "destination":
      return Boolean(contact.country?.trim());
    case "voltage":
      return Boolean(parsed.voltageRegion);
    case "connection":
      return Boolean(parsed.connectionMode);
    case "chassis":
      return Boolean(parsed.chassisConfig);
    case "docs":
      return parsed.documentationRequested.length > 0;
    case "payment":
      return Boolean(parsed.paymentPreference);
    case "remote": {
      const m = (contact.message ?? "").toLowerCase();
      return m.includes("remote setup") || m.includes("remote control") || m.includes("remote onboarding");
    }
    default:
      return false;
  }
}

export function AdminSalesFollowUpChecklist({
  parsed,
  contact,
}: {
  parsed: RfqParsedFields;
  contact: { country?: string | null; message?: string | null };
}) {
  return (
    <div className="mt-2 p-2 rounded border border-slate-800/80 bg-slate-950/30 text-xs">
      <p className="text-slate-500 mb-1 font-medium">Sales follow-up checklist</p>
      <ul className="space-y-0.5">
        {ADMIN_SALES_FOLLOW_UP.map((item) => {
          const done = isFollowUpDone(item.key, parsed, contact);
          return (
            <li key={item.key} className={done ? "text-slate-600 line-through" : "text-amber-400/90"}>
              {done ? "✓ " : "○ "}
              {item.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
