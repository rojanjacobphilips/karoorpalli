# Admin guide for church staff

The public website is edited in **Sanity Studio** at `https://karoorpalli.com/studio` (after the developer connects a Sanity project). Until then, a developer updates `src/content/site.ts`.

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

Contact, prayer requests, appointments, event registration, condolences, offerings notices and newsletter signups go to `/api/forms`. Prayer requests are **not** shown on the website. Connect Resend/email in production so `office@karoorpalli.com` and the Vicar receive them.

## Photographs

- Prefer landscape WebP, under 400 KB for heroes.
- Always add English and Malayalam alt text.
- Children: only with family consent (see Terms).

## Language

Every public title needs both `en` and `ml`. If Malayalam is not ready, keep the English and ask a Malayalam-speaking editor to complete it before the feast announcement goes live.
