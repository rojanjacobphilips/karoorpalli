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

Forms post to `/api/forms` and are sent via Hostinger SMTP (`prayers@karoorpalli.com`).

Set env (Vercel + `.env.local`):

| Variable | Value |
| --- | --- |
| `SMTP_HOST` | `smtp.hostinger.com` |
| `SMTP_PORT` | `465` |
| `SMTP_USER` | `prayers@karoorpalli.com` |
| `SMTP_PASS` | mailbox password (never commit) |
| `FORM_FROM_EMAIL` | `Karoor Palli <prayers@karoorpalli.com>` |
| `FORM_NOTIFY_EMAIL` | `secretary@karoorpalli.com` |
| `PRAYER_NOTIFY_EMAIL` | `vicar@karoorpalli.com` |

IMAP (optional, for reading mail in a client): `imap.hostinger.com` port `993`.

Prayer requests (`type=prayer`) go to `PRAYER_NOTIFY_EMAIL` and are never shown on the site. Other forms go to `FORM_NOTIFY_EMAIL`. Offering notices go to `TRUSTEE_NOTIFY_EMAIL`.

## CAPTCHA (Cloudflare Turnstile)

All form emails require Turnstile when keys are set:

1. Create a widget at [Cloudflare Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile) for `karoorpalli.com` (and `localhost` for local testing).
2. Set `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY` in Vercel / `.env.local`.
3. Restart the app. The widget appears on parish forms and the newsletter signup.

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
