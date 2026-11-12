import Link from "next/link";
import { ParishForm } from "@/components/ParishForm";
import { SimplePage } from "@/components/SimplePage";
import { localizedPath } from "@/lib/i18n";
import { requireLocale } from "@/lib/locale-page";

export default async function Page({ params }: PageProps<"/[locale]/charity">) {
  const locale = await requireLocale(params);
  return (
    <SimplePage
      locale={locale}
      title={{ en: "Charity and outreach", ml: "ദാനധർമ്മവും സേവനവും" }}
      body={{
        en: "Onam kits, medical help and education support are coordinated by Martha Mariam Samajam and the Managing Committee. NRI families may sponsor a household through Online Offerings — Charity.",
        ml: "ഓണക്കിറ്റ്, ചികിത്സാ സഹായം, വിദ്യാഭ്യാസ പിന്തുണ എന്നിവ മാർത്താ മറിയം സമാജവും ഭരണസമിതിയും ഏകോപിപ്പിക്കുന്നു.",
      }}
    >
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          {
            en: "Peter's Hand",
            ml: "പത്രോസിന്റെ കൈ",
            href: "/organisations/peters-hand",
          },
          { en: "Medical assistance", ml: "ചികിത്സാ സഹായം" },
          { en: "Education support", ml: "വിദ്യാഭ്യാസ പിന്തുണ" },
        ].map((item) => {
          const card = (
            <>
              <h2 className="font-serif text-2xl text-maroon">{item[locale]}</h2>
            </>
          );
          const className = "rounded-3xl bg-card p-5 shadow-[var(--shadow)]";
          if ("href" in item) {
            return (
              <Link
                key={item.en}
                href={localizedPath(locale, item.href)}
                className={`${className} block transition hover:bg-ivory-deep`}
              >
                {card}
              </Link>
            );
          }
          return (
            <div key={item.en} className={className}>
              {card}
            </div>
          );
        })}
      </div>
      <div className="mt-8 max-w-xl rounded-3xl bg-card p-6 shadow-[var(--shadow)]">
        <h2 className="mb-4 font-serif text-2xl text-maroon">
          {locale === "ml" ? "ഒരു കുടുംബത്തെ സ്പോൺസർ ചെയ്യുക" : "Sponsor a family"}
        </h2>
        <ParishForm
          locale={locale}
          type="sponsor"
          fields={[
            { name: "name", label: locale === "ml" ? "പേര്" : "Name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            {
              name: "message",
              label: locale === "ml" ? "സഹായിക്കാൻ ആഗ്രഹിക്കുന്ന വിധം" : "How you would like to help",
              textarea: true,
              required: true,
            },
          ]}
        />
      </div>
    </SimplePage>
  );
}
