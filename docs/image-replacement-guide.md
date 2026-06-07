# Image replacement guide

This guide explains how to add **verified** product images to phonesfarmbox.com without mislabeling illustrations as factory photos.

## Principles

- Do **not** use stolen web images, AI-generated renders, or stock photos as `official_photo`.
- If you do not have a verified real product photo, keep `imageType` as `product_illustration`, `assembly_reference`, or `packing_reference`.
- Never label an illustration as “factory photo” or “real photo” on the storefront.
- Only set `imageType: official_photo` when you have a **user-provided or supplier-verified** product photo and document the source in Admin.

## Directory layout

Place files under `public/images/`:

| Folder | Purpose |
|---|---|
| `public/images/products/` | Primary SKU product images |
| `public/images/assembly/` | Assembly / wiring reference shots |
| `public/images/packing/` | Carton / packing reference shots |
| `public/images/factory/` | Verified on-site factory or workshop photos |
| `public/images/real/` | Other verified real-device deployment photos |

Existing site assets also live under:

- `public/images/card_800x800/`
- `public/images/hero_1600x900/`
- `public/images/detail_1200x900/`

You may reference any local path that starts with `/images/`.

## File naming

Use lowercase, hyphenated names tied to SKU:

```text
public/images/products/phone-farm-box-main.webp
public/images/products/phone-farm-box-packing-01.webp
public/images/assembly/motherboard-box-wiring-ref.webp
```

Suggested pattern: `{sku}-{view}-{optional-seq}.{ext}`

## Format & size

| Use | Suggested size | Format |
|---|---|---|
| Product detail main | 1200×900 or 1600×900 | `.webp` preferred |
| Product card | 800×800 | `.webp` |
| Gallery thumbs | 600–800 px wide | `.webp` or `.jpg` |

- Prefer **WebP** for photos (smaller, faster).
- Use **PNG** only when transparency is required.
- Compress before upload; avoid multi-MB files.

## Admin workflow

1. Copy image files into the appropriate `public/images/...` folder.
2. Go to `/admin` → **Product data completeness** → **Edit** on the SKU.
3. Fill in:
   - **Primary image URL** — e.g. `/images/products/phone-farm-box-main.webp`
   - **Gallery images** — one path per line
   - **Image alt** — concise description for accessibility
   - **Image source note** — e.g. `User-provided factory photo, 2026-03-15`
   - **Image last verified** — `YYYY-MM-DD`
   - **Image type** — see below
   - **Image verification note** — optional buyer-facing clarification
4. Save. The product detail page will use `primaryImageUrl` when set and show a simple gallery.

## When to use each `imageType`

| imageType | Use when |
|---|---|
| `official_photo` | Verified real product photo from supplier or your own shoot. Requires `imageSourceNote` or `imageVerificationNote`. |
| `product_illustration` | Marketing render, diagram, or generic product visual — **default for most SKUs today**. |
| `assembly_reference` | Wiring, internal layout, or assembly bench reference (may not match final BOM). |
| `packing_reference` | Carton, crate, or export packing example. |

## What not to do

- Do not download images from Google, Alibaba listings, or competitors.
- Do not use AI images as `official_photo`.
- Do not hotlink external URLs in `primaryImageUrl` / `galleryImages` (Admin rejects non-`/images/` paths).
- Do not mark `official_photo` without source documentation.

## Deploying new images

1. Add files under `public/images/...`
2. Commit image files + any Admin `productData` updates (or update via Production Admin after deploy).
3. Verify on the product page:
   - Main image loads
   - Image type label is honest
   - Technical data status matches Admin settings

## Current site status (audit baseline)

- All product/card/hero images are **local** files under `public/images/{card,hero,detail}_*/`.
- No product images use external hotlinks.
- Most SKU seeds use `product_illustration` or `assembly_reference` — not `official_photo`.
- About page already states images are references unless labeled otherwise.

When real photos arrive, update Admin first, then optionally replace legacy paths in `src/lib/images.ts` / seed data during a later cleanup pass.
