import { writeFileSync } from "fs";
import { join } from "path";
import { generateLlmsContent } from "../src/lib/generate-llms-content";
import { generateLlmsFullContent } from "../src/lib/generate-llms-full-content";

const publicDir = join(process.cwd(), "public");

const txt = generateLlmsContent();
writeFileSync(join(publicDir, "llms.txt"), txt, "utf8");
console.log(`Wrote ${join(publicDir, "llms.txt")} (${txt.length} bytes, ${txt.split("\n").length} lines)`);

const full = generateLlmsFullContent();
writeFileSync(join(publicDir, "llms-full.txt"), full, "utf8");
console.log(`Wrote ${join(publicDir, "llms-full.txt")} (${full.length} bytes, ${full.split("\n").length} lines)`);
