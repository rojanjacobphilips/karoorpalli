# Admin guide for church staff

Parish staff edit **Events, Gallery, Videos, and Obituaries** in the in-app admin at `/admin` (local: `http://localhost:3000/admin`, live: `https://karoorpalli.com/admin`).

Sign in with `ADMIN_PASSWORD`. Saving content also needs `SANITY_API_WRITE_TOKEN` (Sanity → API → Tokens → Editor). Schemas live in `src/sanity/schemaTypes`.

Until the project ID is set, those pages keep using the bilingual fallback in `src/content/site.ts`.

## Connect Sanity (one-time, developer)

1. Create a free project at [sanity.io/manage](https://www.sanity.io/manage) named **Karoor Palli**, dataset `production`.
2. Copy the project ID into `.env.local` and Hostinger Node env:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=yourProjectId
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-10-01
```

3. In Sanity manage → API → CORS origins, allow `http://localhost:3000` and `https://karoorpalli.com` (Allow credentials).
4. Deploy or sync the schema from this repo (`sanity schema deploy` / Studio with this `sanity.config.ts`), then invite editors.
5. Restart the app after env changes.

When a content type has **at least one published document** in Sanity, that type’s page uses CMS data. Empty types keep the site.ts fallback so the live site never goes blank.

## Roles

| Role | Can do |
| --- | --- |
| **Admin** | Everything: people, bank details, settings, users |
| **Editor** | News, events, slides, gallery, downloads, videos, organisations |
| **Obituary Editor** | Obituaries and remembrance only |

Ask the developer to create these as Sanity roles. Do not give Obituary Editor rights to post news.

## Weekly rhythm

1. Update **This week's schedule** in Site settings.
2. Add or expire **Ticker announcements**.
3. Publish **News** and **Events** with English and Malayalam.
4. After a feast, upload a **Gallery album** (resize photos; avoid full-resolution camera files).
5. Obituaries: photo, house name, age, funeral time, burial place, a short hope-of-resurrection message. Never publish medical details.

## Forms

Contact, prayer requests, appointments, event registration, condolences, offerings notices and newsletter signups go to `/api/forms` via Hostinger SMTP (`prayers@karoorpalli.com`). Prayer / appointments → `vicar@karoorpalli.com`; offerings → `trustee@karoorpalli.com`; other forms → `secretary@karoorpalli.com`. Requires `SMTP_PASS` in production. CAPTCHA uses Cloudflare Turnstile when `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY` are set.

## Photographs

- Prefer landscape WebP, under 400 KB for heroes.
- Always add English and Malayalam alt text.
- Children: only with family consent (see Terms).

## Language

Every public title needs both `en` and `ml`. If Malayalam is not ready, keep the English and ask a Malayalam-speaking editor to complete it before the feast announcement goes live.
