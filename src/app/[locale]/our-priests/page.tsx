import Image from "next/image";
import { SimplePage } from "@/components/SimplePage";
import { ourPriests, ourSisters, type ParishClergy } from "@/content/site";
import { requireLocale } from "@/lib/locale-page";
import type { Locale } from "@/lib/i18n";

function ClergyCard({ person, locale }: { person: ParishClergy; locale: Locale }) {
  return (
    <article className="rounded-3xl bg-card p-4 text-center shadow-[var(--shadow)]">
      {person.photo ? (
        <Image
          src={person.photo}
          alt={person.name[locale]}
          width={280}
          height={280}
          className="mx-auto h-40 w-40 rounded-full object-cover object-top"
        />
      ) : (
        <div className="mx-auto grid h-40 w-40 place-items-center rounded-full bg-maroon text-ivory">
          <span className="font-serif text-3xl">
            {person.name.en
              .replace(/Very Rev\.|Rev\. Fr\.|Sister\.|Corepiscopa|\(late\)/gi, "")
              .trim()
              .split(/\s+/)
              .filter(Boolean)
              .slice(0, 2)
              .map((part) => part[0])
              .join("")}
          </span>
        </div>
      )}
      <h3 className="mt-3 font-serif text-xl text-maroon">{person.name[locale]}</h3>
      {person.late ? (
        <p className="mt-1 text-sm text-gold">{locale === "ml" ? "പരേതൻ" : "Late"}</p>
      ) : null}
    </article>
  );
}

export default async function Page({ params }: PageProps<"/[locale]/our-priests">) {
  const locale = await requireLocale(params);
  return (
    <SimplePage
      locale={locale}
      title={{ en: "Our Priests", ml: "നമ്മുടെ വൈദികർ" }}
      body={{
        en: "Priests and sisters from our parish family.",
        ml: "നമ്മുടെ ഇടവകാ കുടുംബത്തിലെ വൈദികരും സിസ്റ്റർമാരും.",
      }}
    >
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {ourPriests.map((person) => (
          <ClergyCard key={person.name.en} person={person} locale={locale} />
        ))}
      </div>

      <h2 className="mt-12 font-serif text-3xl text-maroon">
        {locale === "ml" ? "സിസ്റ്റർമാർ" : "Sisters"}
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {ourSisters.map((person) => (
          <ClergyCard key={person.name.en} person={person} locale={locale} />
        ))}
      </div>
    </SimplePage>
  );
}
