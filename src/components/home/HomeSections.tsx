import Image from "next/image";
import Link from "next/link";
import {
  announcements,
  events,
  galleryPreview,
  liturgical,
  news,
  organisations,
  parish,
  timings,
  ui,
  vicar,
  verse,
} from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { BookOpen, Calendar, Camera, Download, HeartHandshake, Newspaper, Phone, ScrollText } from "lucide-react";

const quickLinks = [
  { href: "/history", icon: ScrollText, label: { en: "History", ml: "ചരിത്രം" } },
  { href: "/events", icon: Calendar, label: { en: "Events", ml: "പരിപാടികൾ" } },
  { href: "/news", icon: Newspaper, label: { en: "News", ml: "വാർത്തകൾ" } },
  { href: "/obituary", icon: BookOpen, label: { en: "Obituary", ml: "അനുസ്മരണം" } },
  { href: "/gallery", icon: Camera, label: { en: "Gallery", ml: "ചിത്രശാല" } },
  { href: "/downloads", icon: Download, label: { en: "Downloads", ml: "ഡൗൺലോഡുകൾ" } },
  { href: "/contact", icon: Phone, label: { en: "Contact", ml: "ബന്ധപ്പെടുക" } },
  { href: "/offerings", icon: HeartHandshake, label: { en: "Online Offerings", ml: "വഴിപാട്" } },
];

export function HomeSections({ locale }: { locale: Locale }) {
  const t = (value: { en: string; ml: string }) => value[locale];

  return (
    <>
      <div className="overflow-hidden border-y border-gold/30 bg-maroon text-ivory">
        <div className="ticker flex w-max gap-16 py-2.5 text-sm">
          {[...announcements, ...announcements].map((item, i) => (
            <span key={i} className="whitespace-nowrap">
              ✠ {t(item)}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 lg:grid-cols-3 lg:px-6">
        <section id="timings" className="reveal rounded-3xl bg-card p-6 shadow-[var(--shadow)] lg:col-span-1">
          <h2 className="font-serif text-3xl text-maroon">{t(timings.heading)}</h2>
          <p className="mt-2 text-sm text-muted">{t(timings.note)}</p>
          <ul className="mt-5 space-y-4">
            {timings.items.map((item) => (
              <li key={item.title.en} className="rounded-2xl bg-ivory-deep/60 p-4">
                <div className="text-sm uppercase tracking-wide text-gold">{t(item.title)}</div>
                <div className="font-medium">{t(item.detail)}</div>
              </li>
            ))}
          </ul>
        </section>

        <section className="reveal rounded-3xl bg-card p-6 shadow-[var(--shadow)] lg:col-span-2">
          <div className="flex flex-col gap-6 md:flex-row">
            <Image
              src={vicar.photo}
              alt={vicar.name}
              width={280}
              height={340}
              className="h-64 w-full rounded-2xl object-cover md:h-auto md:w-56"
            />
            <div>
              <p className="text-sm uppercase tracking-wide text-gold">{t(vicar.role)}</p>
              <h2 className="font-serif text-3xl text-maroon">{vicar.name}</h2>
              <p className="mt-4 text-muted">{t(vicar.bio).split("\n\n")[0]}</p>
              <Link
                href={localizedPath(locale, "/vicar")}
                className="mt-5 inline-flex rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-ivory"
              >
                {t(ui.readMore)}
              </Link>
            </div>
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-8 lg:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={localizedPath(locale, item.href)}
              className="group rounded-3xl bg-card p-5 shadow-[var(--shadow)] transition hover:-translate-y-1"
            >
              <item.icon className="h-6 w-6 text-gold" />
              <div className="mt-3 font-serif text-xl text-maroon">{t(item.label)}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-2 lg:px-6">
        <div>
          <div className="mb-4 flex items-end justify-between">
            <h2 className="font-serif text-3xl text-maroon">{t(ui.latestNews)}</h2>
            <Link href={localizedPath(locale, "/news")} className="text-sm font-semibold text-maroon">
              {t(ui.viewAll)}
            </Link>
          </div>
          <div className="space-y-4">
            {news.map((item) => (
              <Link
                key={item.slug}
                href={localizedPath(locale, `/news/${item.slug}`)}
                className="flex gap-4 rounded-3xl bg-card p-3 shadow-[var(--shadow)]"
              >
                <Image src={item.image} alt="" width={120} height={90} className="h-24 w-28 rounded-2xl object-cover" />
                <div>
                  <div className="text-xs uppercase text-gold">{t(item.category)}</div>
                  <h3 className="font-serif text-xl text-maroon">{t(item.title)}</h3>
                  <p className="line-clamp-2 text-sm text-muted">{t(item.excerpt)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-4 flex items-end justify-between">
            <h2 className="font-serif text-3xl text-maroon">{t(ui.upcomingEvents)}</h2>
            <Link href={localizedPath(locale, "/events")} className="text-sm font-semibold text-maroon">
              {t(ui.viewAll)}
            </Link>
          </div>
          <div className="space-y-4">
            {events.map((item) => (
              <Link
                key={item.slug}
                href={localizedPath(locale, `/events/${item.slug}`)}
                className="block rounded-3xl bg-card p-5 shadow-[var(--shadow)]"
              >
                <div className="text-sm text-gold">
                  {item.date} · {t(item.time)}
                </div>
                <h3 className="font-serif text-2xl text-maroon">{t(item.title)}</h3>
                <p className="text-sm text-muted">{t(item.place)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 lg:px-6">
        <div className="rounded-3xl bg-maroon p-6 text-ivory shadow-[var(--shadow)] md:p-8">
          <h2 className="font-serif text-3xl">{locale === "ml" ? "ആരാധനാ കലണ്ടർ" : "Liturgical calendar"}</h2>
          <p className="mt-2 text-gold">{t(liturgical.today)}</p>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {liturgical.upcoming.map((item) => (
              <li key={item.date} className="rounded-2xl bg-white/10 px-4 py-3">
                <span className="text-gold">{item.date}</span>
                <div>{t(item.title)}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="font-serif text-3xl text-maroon">{t(ui.gallery)}</h2>
          <Link href={localizedPath(locale, "/gallery")} className="text-sm font-semibold text-maroon">
            {t(ui.viewAll)}
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="masonry lg:col-span-2">
            {galleryPreview.map((img) => (
              <Image key={img.src} src={img.src} alt={t(img.alt)} width={600} height={400} className="rounded-2xl" />
            ))}
          </div>
          <div className="overflow-hidden rounded-3xl bg-maroon-deep p-6 text-ivory shadow-[var(--shadow)]">
            <p className="text-sm uppercase tracking-wide text-gold">
              {t({ en: "Featured video", ml: "ഫീച്ചർ വീഡിയോ" })}
            </p>
            <h3 className="mt-2 font-serif text-2xl">
              {t({ en: "Holy Qurbana live stream", ml: "വിശുദ്ധ കുർബാന തത്സമയം" })}
            </h3>
            <p className="mt-3 text-sm text-ivory/80">
              {t({
                en: "The parish YouTube channel will appear here. Until the office adds the live URL in Sanity, join us in church or open the Live Stream page.",
                ml: "ഇടവകയുടെ യൂട്യൂബ് ചാനൽ ഇവിടെ വരും. ലൈവ് പേജ് തുറക്കുക, അല്ലെങ്കിൽ ദേവാലയത്തിൽ പങ്കുചേരുക.",
              })}
            </p>
            <Link
              href={localizedPath(locale, "/live")}
              className="mt-5 inline-flex rounded-full bg-gold px-5 py-2 text-sm font-semibold text-maroon-deep"
            >
              {t({ en: "Open live stream", ml: "തത്സമയം തുറക്കുക" })}
            </Link>
          </div>
        </div>
      </section>

      <section className="cross-pattern mx-auto max-w-7xl px-4 py-8 lg:px-6">
        <div className="grid gap-4 rounded-3xl bg-card/90 p-6 text-center shadow-[var(--shadow)] sm:grid-cols-4">
          {parish.stats.map((stat) => (
            <div key={stat.label.en}>
              <div className="font-serif text-4xl text-maroon">{stat.value}</div>
              <div className="text-sm text-muted">{t(stat.label)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
        <h2 className="mb-6 font-serif text-3xl text-maroon">{t(ui.organisations)}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {organisations.map((org) => (
            <Link
              key={org.slug}
              href={localizedPath(locale, `/organisations/${org.slug}`)}
              className="rounded-3xl border border-maroon/10 bg-card p-5 shadow-[var(--shadow)]"
            >
              <h3 className="font-serif text-2xl text-maroon">{t(org.name)}</h3>
              <p className="mt-2 text-sm text-muted">{t(org.summary)}</p>
              {org.meeting ? <p className="mt-3 text-sm text-gold">{t(org.meeting)}</p> : null}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-8 text-center lg:px-6">
        <p className="text-sm uppercase tracking-[0.2em] text-gold">{t(ui.verse)}</p>
        <blockquote className="mt-3 font-serif text-3xl text-maroon">“{t(verse.text)}”</blockquote>
        <cite className="mt-2 block text-muted not-italic">{t(verse.ref)}</cite>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 lg:grid-cols-2 lg:px-6">
        <div className="overflow-hidden rounded-3xl shadow-[var(--shadow)]">
          <iframe
            title="Map of Karoor, Elanthoor"
            src={parish.mapsEmbed}
            className="h-80 w-full border-0"
            loading="lazy"
          />
        </div>
        <div className="rounded-3xl bg-card p-6 shadow-[var(--shadow)]">
          <h2 className="font-serif text-3xl text-maroon">{t({ en: "Visit us", ml: "സന്ദർശിക്കുക" })}</h2>
          <p className="mt-3">{t(parish.location)}</p>
          <p className="mt-2">{t(parish.officeHours)}</p>
          <p className="mt-2">
            {parish.phone}
            <br />
            {parish.email}
          </p>
          <Link
            href={localizedPath(locale, "/contact")}
            className="mt-5 inline-flex rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-ivory"
          >
            {t({ en: "Contact and directions", ml: "ബന്ധപ്പെടുക" })}
          </Link>
        </div>
      </section>
    </>
  );
}
