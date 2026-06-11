import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Sign In — Phones Farm Box",
  description: "Sign in to your Phones Farm Box account.",
  path: "/login",
  noIndex: true,
});

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
