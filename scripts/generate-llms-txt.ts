import { writeFileSync } from "fs";
import { join } from "path";
import { generateLlmsContent } from "../src/lib/generate-llms-content";

const outPath = join(process.cwd(), "public", "llms.txt");
const content = generateLlmsContent();
writeFileSync(outPath, content, "utf8");
console.log(`Wrote ${outPath} (${content.length} bytes, ${content.split("\n").length} lines)`);
