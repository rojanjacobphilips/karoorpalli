# Karoor Palli — St. Peter's Orthodox Church, Karoor

Parish website for **St. Peter's Orthodox Church, Karoor, Elanthoor** (Malankara Orthodox Syrian Church, **Thumpamon Diocese**). Domain: [karoorpalli.com](https://karoorpalli.com).

English is the default language; Malayalam is at `/ml`.

## Stack

**Next.js 16 + Tailwind CSS 4 + Sanity CMS**, hosted on Vercel.

Sanity lets non-technical office staff edit news, events, obituaries, gallery, downloads and home slides with roles (Admin, Editor, Obituary Editor). Next.js gives bilingual routes, schema.org markup, image optimisation and a fast mobile-first UI. Local placeholder content in `src/content/site.ts` keeps the site runnable before Sanity is connected.

## Develop

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (redirects to `/en`). CMS: `/studio` after a Sanity project ID is set.

## Docs

- [Sitemap and navigation](docs/SITEMAP.md)
- [Design system](docs/DESIGN-SYSTEM.md)
- [Staff admin guide](docs/ADMIN-GUIDE.md)
- [Deployment](docs/DEPLOYMENT.md)
- [Further improvements](docs/IMPROVEMENTS.md)

## Still needed from the parish

These are marked **TBC** or `[Name]` in the UI:

- Founding year and historic photographs
- Parish logo (the site uses an Orthodox cross mark until then)
- Vicar name, photo, biography and phone
- Metropolitan name and photograph
- Trustee, Secretary, Treasurer and committee names
- Real phone, WhatsApp, PIN code, bank / UPI / QR
- YouTube / Facebook live URLs
- Consent to publish any photo of minors
