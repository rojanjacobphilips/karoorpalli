# Deployment and maintenance — karoorpalli.com

## DNS

| Record | Name | Value |
| --- | --- | --- |
| A or CNAME | `@` | Vercel target (dashboard) |
| CNAME | `www` | `cname.vercel-dns.com` |
| MX | `@` | Google Workspace / Microsoft 365 / your mail host |
| TXT | `@` | SPF for the mail host |
| TXT | `@` | Google Search Console verification |

Point the domain in Vercel → Project → Settings → Domains. SSL is automatic (Let's Encrypt).

## Email

Create `office@karoorpalli.com` and `vicar@karoorpalli.com` on the same domain. Forms currently log on the server; add Resend or SMTP in `src/app/api/forms/route.ts` before launch.

## Environment

Copy `.env.example` to `.env.local` (and Vercel env):

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET=production`
- `NEXT_PUBLIC_GA_ID` (load only after cookie accept)

## Launch checklist

1. Replace placeholder phone, WhatsApp, PIN, founding year, vicar name, metropolitan name, bank/UPI, map embed, social URLs.
2. Replace Unsplash images with parish photos.
3. Add logo SVG/PNG in the header (`Header.tsx`).
4. Connect Sanity; migrate sample content.
5. `npm run build` — fix errors.
6. Submit `https://karoorpalli.com/sitemap.xml` in Search Console.
7. Test EN/ML, mobile drawer, forms honeypot, 404, offerings page, obituary tone.
8. Daily backups: Vercel deployments + Sanity dataset export (schedule in Sanity).

## Maintenance

- Dependabot / `npm audit` monthly
- Renew nothing for SSL on Vercel
- Rotate CMS users when the Managing Committee changes
- Keep the ticker empty rather than stale
