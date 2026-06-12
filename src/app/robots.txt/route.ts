import { SITE } from "@/lib/config";
import { absoluteUrl } from "@/lib/site-url";

const AI_BOTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "Google-Extended",
  "Googlebot",
  "Bingbot",
  "anthropic-ai",
  "ClaudeBot",
  "Claude-Web",
  "Bytespider",
  "PerplexityBot",
  "CCBot",
  "DeepSeekBot",
  "Applebot-Extended",
  "cohere-ai",
];

function botBlock(agent: string) {
  return `User-agent: ${agent}
Allow: /
Disallow: /admin
Disallow: /account/
Disallow: /api/
Disallow: /login
Disallow: /register
Disallow: /orders/
Disallow: /sample-order
`;
}

export async function GET() {
  const lines = [
    botBlock("*"),
    ...AI_BOTS.map((b) => botBlock(b)),
    `Sitemap: ${absoluteUrl("/sitemap.xml", SITE.url)}`,
    "",
    `llms-txt: ${absoluteUrl("/llms.txt", SITE.url)}`,
    `llms-full-txt: ${absoluteUrl("/llms-full.txt", SITE.url)}`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
