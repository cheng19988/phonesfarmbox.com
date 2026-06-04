# Asset Library Reference

**Correct path:** `D:\网站搭建素材库\FINAL_phonefarm_6sites_package_CN\02_六个网站分类素材\06_phonesfarmbox.com_box_knowledge_site`

**Fallback path:** `D:\网站搭建素材库\02_six_website_ready\phonesfarmbox.com_box_knowledge_site`

## Deployed to
```
public/images/
  ├── hero_1600x900/
  ├── detail_1200x900/
  └── card_800x800/
```

## Refresh images
```powershell
$src = "D:\网站搭建素材库\FINAL_phonefarm_6sites_package_CN\02_六个网站分类素材\06_phonesfarmbox.com_box_knowledge_site"
$dst = "D:\phonesfarmbox.com\public\images"
if (-not (Test-Path $src)) {
  $src = "D:\网站搭建素材库\02_six_website_ready\phonesfarmbox.com_box_knowledge_site"
}
robocopy $src $dst /E
```

Image paths mapped in `src/lib/images.ts` with prefix `phonesfarmbox.com-`.
