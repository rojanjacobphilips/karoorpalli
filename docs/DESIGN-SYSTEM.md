# Design system — Karoor Palli

## Why Next.js + Tailwind + Sanity (Option A)

Church office staff need to edit news, obituaries and slides without a developer. Sanity gives role-based access (Admin / Editor / Obituary Editor) and a Malayalam-friendly form UI. Next.js on Vercel gives bilingual routes, image optimisation, HTTPS and a Lighthouse-friendly App Router. WordPress + Elementor would be familiar, but it is heavier to keep secure and harder to match this 2026 card-based layout.

The site ships with **local bilingual content** in `src/content/site.ts` so it is previewable before a Sanity project exists.

## Palette

| Token | Hex | Use |
| --- | --- | --- |
| Maroon | `#6b1d2a` | Header accents, buttons, headings |
| Maroon deep | `#3f1018` | Hero overlay, footer |
| Gold | `#c9a227` | CTAs, feast labels |
| Ivory | `#f7f1e8` | Page background |
| Charcoal | `#1c1917` | Body text |

Contrast is aimed at WCAG 2.1 AA (maroon on ivory, ivory on maroon, gold only on dark maroon).

## Type

- Headings: Playfair Display
- Body: Inter
- Malayalam: Manjari (`html[lang=ml]`)
- Minimum body size: 17px; generous line-height for older readers
- Focus rings: 3px gold

## Motifs

Orthodox (Byzantine-style) cross in the logo mark and a very light cross pattern on heroes. Do not add extra iconography unless the parish supplies a photograph of the actual altar cross.

## Layout notes (home)

1. Sticky header: mark, name, mega-menu, search, EN/മലയാളം, offerings
2. Full-width hero (fade + Ken Burns, swipe, pause on hover)
3. Maroon announcement ticker
4. Timings card + Vicar welcome
5. Eight quick-link tiles
6. News (3) + events (3)
7. Liturgical calendar
8. Masonry gallery + live-stream card
9. Stats counters
10. Organisations
11. Verse (John 21:17 — St. Peter)
12. Map + visit snapshot
13. Footer: address, MOSC + diocese links, newsletter, social

Inner pages share `PageHero` (maroon band) + ivory article cards.
