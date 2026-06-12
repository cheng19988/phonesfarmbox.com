import Link from "next/link";
import type { ProductProcurement } from "@/lib/product-procurement";

const ROWS: { key: keyof ProductProcurement; label: string }[] = [
  { key: "moq", label: "MOQ" },
  { key: "leadTime", label: "Lead time" },
  { key: "packingSize", label: "Packing size" },
  { key: "grossWeight", label: "Gross weight" },
  { key: "voltage", label: "Voltage / plug" },
  { key: "warranty", label: "Warranty" },
  { key: "shippingMethod", label: "Shipping method" },
  { key: "paymentProcess", label: "Payment process" },
];

export function ProductProcurementSection({ procurement }: { procurement: ProductProcurement }) {
  return (
    <section className="mb-16" aria-labelledby="procurement-heading">
      <h2 id="procurement-heading" className="text-2xl font-bold text-slate-900 mb-2">
        Export &amp; procurement
      </h2>
      <p className="text-sm text-slate-500 mb-4">
        Planning reference — exact carton dimensions and invoice weights confirmed on your written proforma.{" "}
        <Link href="/buyer-specs" className="link-accent">
          Buyer specs
        </Link>
        {" · "}
        <Link href="/how-to-order" className="link-accent">
          How to order
        </Link>
      </p>
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <table className="w-full text-sm">
          <tbody>
            {ROWS.map(({ key, label }) => (
              <tr key={key} className="border-b border-slate-100 last:border-0">
                <th scope="row" className="py-3 px-4 text-left font-semibold text-slate-700 bg-slate-50/80 w-36 md:w-44 align-top">
                  {label}
                </th>
                <td className="py-3 px-4 text-slate-600 leading-relaxed">{procurement[key]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
