# phonesfarmbox.com

**Phones Farm Box** — Real-device phone farm box hardware and knowledge platform from Guangzhou, China.

Reference site structure: [duoplus.net](https://www.duoplus.net/) (converted from cloud phone to real device hardware).

## Stack

- Next.js 16 (App Router)
- Prisma + SQLite
- Tailwind CSS 4
- USDT TRC20 payment (TronGrid API placeholder)

## Development

```bash
npm install
npm run dev
```

Admin: `admin@phonesfarmbox.com` / `admin123456`

## Build

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Import the GitHub repo — no `DATABASE_URL` required (defaults to bundled `prisma/data.db`, copied to `/tmp` at runtime).
2. Set environment variables in Vercel project settings:
   - `JWT_SECRET` — long random string (required for login sessions)
   - `TRON_API_KEY` — optional, for USDT payment verification
3. Redeploy after pushing. Build runs `prisma generate`, `prisma db push`, seed, then `next build`.

## Asset Library

`D:\网站搭建素材库\FINAL_phonefarm_6sites_package_CN\02_六个网站分类素材\06_phonesfarmbox.com_box_knowledge_site`

See `ASSETS.md` for image refresh instructions.
