import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import { ContactCTA } from "@/components/shared";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Phone Farm Services & Solutions",
  description:
    "Phone farm setup, remote control configuration, group control, bulk deployment, custom hardware, enterprise solutions, maintenance, samples, and overseas delivery.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="section">
      <div className="container-wide">
        <h1 className="section-title">Deployment Services</h1>
        <p className="section-subtitle max-w-3xl">
          Hardware is only half the deployment. We help with remote control setup, network planning, group control configuration, and enterprise rack rollouts from our Guangzhou workshop.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {[
            { title: "Pre-shipment configuration", desc: "Burn-in testing, firmware checks, and cable/PSU verification before export." },
            { title: "Remote onboarding", desc: "Screen sharing support for batch control install, ADB setup, and first synchronized test." },
            { title: "Enterprise project management", desc: "Dedicated engineering contact for 50+ device racks and custom cabinet builds." },
          ].map((item) => (
            <div key={item.title} className="card p-5">
              <h2 className="font-semibold text-slate-900 mb-2">{item.title}</h2>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((svc) => (
            <article key={svc.slug} className="card overflow-hidden group">
              <div className="relative aspect-video">
                <Image src={svc.image} alt={svc.title} fill className="object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-2">{svc.title}</h2>
                <p className="text-slate-400 text-sm mb-4">{svc.description}</p>
                <Link href={`/contact?service=${svc.slug}`} className="text-amber-400 text-sm hover:text-amber-300">
                  Request this service →
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16">
          <ContactCTA title="Not sure which service fits your project?" />
        </div>
      </div>
    </div>
  );
}
