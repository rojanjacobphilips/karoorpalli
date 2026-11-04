import Link from "next/link";
import { SimplePage } from "@/components/SimplePage";
import { parish, timings } from "@/content/site";
import { localizedPath } from "@/lib/i18n";
import { requireLocale } from "@/lib/locale-page";

export default async function Page({ params }: PageProps<"/[locale]/live">) {
  const locale = await requireLocale(params);
  return (
    <SimplePage
      locale={locale}
      title={{ en: "Live stream", ml: "തത്സമയ സംപ്രേഷണം" }}
      body={{
        en: "Holy Qurbana and feast-day services will stream here from the parish YouTube or Facebook page. Add the channel ID in Sanity. Families abroad are encouraged to pray with us at the published times.",
        ml: "വിശുദ്ധ കുർബാനയും തിരുനാൾ ശുശ്രൂഷകളും ഇവിടെ തത്സമയം കാണാം. ചാനൽ Sanity-യിൽ ചേർക്കുക.",
      }}
    >
      <div className="mt-8 overflow-hidden rounded-3xl bg-maroon-deep p-8 text-ivory shadow-[var(--shadow)]">
        <p className="text-gold">{timings.items[0].detail[locale]}</p>
        <p className="mt-4 max-w-2xl text-ivory/80">
          {locale === "ml"
            ? "സ്ട്രീം ലിങ്ക് ലഭിക്കുന്നതുവരെ ഈ സ്ഥലം ഒഴിഞ്ഞിരിക്കും. ദേവാലയത്തിൽ നേരിട്ട് പങ്കുചേരാൻ നിങ്ങളെ ക്ഷണിക്കുന്നു."
            : "This player stays empty until the office pastes a YouTube or Facebook live URL. You are always welcome to join in person at Karoor Palli."}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-maroon-deep"
            href={parish.social.youtube}
          >
            YouTube
          </a>
          <a
            className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold"
            href={parish.social.facebook}
          >
            Facebook
          </a>
          <Link
            className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold"
            href={localizedPath(locale, "/#timings")}
          >
            {timings.heading[locale]}
          </Link>
        </div>
      </div>
    </SimplePage>
  );
}
