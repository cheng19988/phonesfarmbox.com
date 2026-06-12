import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Order Status",
  description: "Track USDT sample order payment and fulfillment status.",
  path: "/orders/status",
  noIndex: true,
});

export default function OrderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
