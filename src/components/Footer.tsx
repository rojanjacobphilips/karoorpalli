import Link from "next/link";
import { navigation, parish, ui } from "@/content/site";
import { OrthodoxCross } from "@/components/OrthodoxCross";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const t = (value: { en: string; ml: string }) => value[locale];
  const quick = navigation.flatMap((item) => item.children ?? [item]).slice(0, 10);

  return (
    <footer className="mt-auto border-t border-maroon/10 bg-maroon-deep text-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-6">
        <div>
          <div className="mb-3 flex items-center gap-2 font-serif text-2xl">
            <OrthodoxCross className="h-8 w-5 text-gold" />
            {t(parish.shortName)}
          </div>
          <p className="text-sm text-ivory/80">{t(parish.officialName)}</p>
          <p className="mt-1 text-sm text-gold">{t(parish.diocese)}</p>
          <address className="mt-4 not-italic text-sm leading-7 text-ivory/80">
            {parish.addressLines[locale].map((line) => (
              <div key={line}>{line}</div>
            ))}
            <div>
              <a href={`tel:${parish.phone.replace(/\s/g, "")}`}>{parish.phone}</a>
            </div>
            <div>
              <a href={`mailto:${parish.email}`}>{parish.email}</a>
            </div>
          </address>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-xl text-gold">{locale === "ml" ? "ലിങ്കുകൾ" : "Quick links"}</h2>
          <ul className="space-y-2 text-sm">
            {quick.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-gold" href={localizedPath(locale, item.href)}>
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-xl text-gold">{locale === "ml" ? "ഔദ്യോഗിക സൈറ്റുകൾ" : "Official sites"}</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-gold" href={parish.links.church}>
                {t(parish.church)}
              </a>
            </li>
            <li>
              <a className="hover:text-gold" href={parish.links.diocese}>
                {t(parish.diocese)}
              </a>
            </li>
            <li>
              <Link className="hover:text-gold" href={localizedPath(locale, "/privacy")}>
                {t({ en: "Privacy policy", ml: "സ്വകാര്യത" })}
              </Link>
            </li>
            <li>
              <Link className="hover:text-gold" href={localizedPath(locale, "/terms")}>
                {t({ en: "Terms", ml: "നിബന്ധനകൾ" })}
              </Link>
            </li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a aria-label="Facebook" href={parish.social.facebook} className="rounded-full bg-white/10 p-2 hover:bg-gold hover:text-maroon-deep">
              <SocialIcon kind="facebook" />
            </a>
            <a aria-label="YouTube" href={parish.social.youtube} className="rounded-full bg-white/10 p-2 hover:bg-gold hover:text-maroon-deep">
              <SocialIcon kind="youtube" />
            </a>
            <a aria-label="Instagram" href={parish.social.instagram} className="rounded-full bg-white/10 p-2 hover:bg-gold hover:text-maroon-deep">
              <SocialIcon kind="instagram" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-xl text-gold">{t(ui.newsletter)}</h2>
          <p className="mb-3 text-sm text-ivory/80">{t(ui.newsletterHint)}</p>
          <form action="/api/forms" method="post" className="space-y-2">
            <input type="hidden" name="type" value="newsletter" />
            <label className="sr-only" htmlFor="newsletter-email">
              Email
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              placeholder="you@email.com"
              className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm"
            />
            <p className="hidden" aria-hidden>
              <label>
                Company
                <input name="company" tabIndex={-1} autoComplete="off" />
              </label>
            </p>
            <button type="submit" className="w-full rounded-full bg-gold py-2 text-sm font-semibold text-maroon-deep">
              {t(ui.subscribe)}
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-ivory/70">
        {t(ui.copyright)}
      </div>
    </footer>
  );
}

function SocialIcon({ kind }: { kind: "facebook" | "youtube" | "instagram" }) {
  if (kind === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1z" />
      </svg>
    );
  }
  if (kind === "youtube") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M23 12s0-3.4-.4-5c-.2-1.1-1.1-2-2.2-2.2C18.2 4.4 12 4.4 12 4.4s-6.2 0-8.4.4C2.5 5 1.6 5.9 1.4 7 1 8.6 1 12 1 12s0 3.4.4 5c.2 1.1 1.1 2 2.2 2.2 2.2.4 8.4.4 8.4.4s6.2 0 8.4-.4c1.1-.2 2-1.1 2.2-2.2.4-1.6.4-5 .4-5zM9.8 15.5v-7l6.2 3.5-6.2 3.5z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zM17.4 6.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM12 3.6c-2.3 0-2.6 0-3.5.1-2.3.1-4.2 2-4.3 4.3-.1.9-.1 1.2-.1 3.5s0 2.6.1 3.5c.1 2.3 2 4.2 4.3 4.3.9.1 1.2.1 3.5.1s2.6 0 3.5-.1c2.3-.1 4.2-2 4.3-4.3.1-.9.1-1.2.1-3.5s0-2.6-.1-3.5c-.1-2.3-2-4.2-4.3-4.3-.9-.1-1.2-.1-3.5-.1zm0 1.6c2.2 0 2.5 0 3.3.1 1.8.1 3.2 1.5 3.3 3.3.1.9.1 1.1.1 3.3s0 2.4-.1 3.3c-.1 1.8-1.5 3.2-3.3 3.3-.8.1-1.1.1-3.3.1s-2.5 0-3.3-.1c-1.8-.1-3.2-1.5-3.3-3.3-.1-.9-.1-1.1-.1-3.3s0-2.4.1-3.3c.1-1.8 1.5-3.2 3.3-3.3.8-.1 1.1-.1 3.3-.1z" />
    </svg>
  );
}
