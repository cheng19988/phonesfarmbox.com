import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Create Account — Phones Farm Box",
  description: "Create a Phones Farm Box account.",
  path: "/register",
  noIndex: true,
});

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
