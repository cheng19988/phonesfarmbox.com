import fs from "fs";
import path from "path";

const SOURCES = [
  "D:\\产品商品详情图",
  "E:\\主板机照片素材",
  "E:\\主板机照片素材\\水印\\演示文稿",
  "E:\\宣传资料主板机照片",
];

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    try {
      const st = fs.statSync(full);
      if (st.isDirectory()) walk(full, out);
      else if (/\.(jpg|jpeg|png|webp|bmp|gif)$/i.test(name))
        out.push({ dir, name, full, size: st.size });
    } catch {}
  }
  return out;
}

const all = [];
for (const src of SOURCES) {
  const found = walk(src);
  console.log(JSON.stringify({ source: src, count: found.length, files: found.map((f) => f.name) }, null, 2));
  all.push(...found);
}

fs.writeFileSync("scripts/asset-inventory.json", JSON.stringify(all, null, 2));
console.error("Total:", all.length, "written to scripts/asset-inventory.json");
