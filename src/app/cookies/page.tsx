import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/config";

export const metadata = buildMetadata({
  title: "Cookie Policy",
  description: `Cookie policy for ${SITE.name}. How we use cookies and similar technologies on phonesfarmbox.com.`,
  path: "/cookies",
});

export default function CookiePolicyPage() {
  return (
    <div className="section">
      <div className="container-wide max-w-3xl prose-content">
        <h1 className="section-title">Cookie Policy</h1>
        <p>Last updated: June 2026</p>
        <h2>What Are Cookies</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and improve your experience.
        </p>
        <h2>Cookies We Use</h2>
        <ul>
          <li><strong>Essential cookies</strong> — Required for login sessions, shopping cart, and order checkout. These cannot be disabled without breaking core site functions.</li>
          <li><strong>Analytics cookies</strong> — Optional usage statistics to improve site content and performance. We do not sell analytics data to third parties.</li>
        </ul>
        <h2>Managing Cookies</h2>
        <p>
          You can control cookies through your browser settings. Disabling essential cookies may prevent you from logging in or completing orders.
        </p>
        <h2>Contact</h2>
        <p>For questions about this policy, email qiuxui646@gmail.com.</p>
      </div>
    </div>
  );
}
