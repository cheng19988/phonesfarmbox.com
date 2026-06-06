import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Phones Farm Box — Get a Quote",
  description:
    "Request a hardware quote — include quantity, Android/iPhone mix, shipping country, and use case. Reply within 24–72 hours on business days.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
