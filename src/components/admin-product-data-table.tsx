import {
  type ProductDataProfile,
  getProfileCompleteness,
  imageTypeLabel,
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

export function AdminProductDataTable({ rows }: { rows: Row[] }) {
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
            <th className="text-left py-2">Admin note</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ slug, name, data }) => {
            const c = getProfileCompleteness(data);
            return (
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
                <td className="py-2 text-slate-500 max-w-[200px] truncate" title={data?.internalAdminNote}>
                  {data?.internalAdminNote ?? "—"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="text-xs text-slate-500 mt-3">
        Read-only completeness view. Update verified fields via Prisma Studio or future admin editor on{" "}
        <code className="text-slate-400">productData</code> JSON.
      </p>
    </div>
  );
}
