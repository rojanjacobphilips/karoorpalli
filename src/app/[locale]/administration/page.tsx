import Image from "next/image";
import { SimplePage } from "@/components/SimplePage";
import { metropolitan } from "@/content/site";
import { requireLocale } from "@/lib/locale-page";

function Biography({ text }: { text: string }) {
  return text.split("\n\n").map((paragraph, index) => (
    <p key={index} className="mt-3 text-muted">
      {paragraph.split(/(\*\*[^*]+\*\*)/g).map((part, partIndex) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={partIndex} className="font-semibold text-charcoal">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        ),
      )}
    </p>
  ));
}

export default async function Page({ params }: PageProps<"/[locale]/administration">) {
  const locale = await requireLocale(params);
  return (
    <SimplePage
      locale={locale}
      title={{ en: "Administration", ml: "ഭരണം" }}
      body={{
        en: "Karoor Palli is shepherded by H.G. Dr. Abraham Mar Seraphim, Metropolitan of Thumpamon Diocese, and served locally by Rev. Fr. Linu M. Babu and the elected officers.",
        ml: "തുമ്പമൺ ഭദ്രാസന മെത്രാപ്പോലീത്ത ഹി.ഗി. ഡോ. ഏബ്രഹാം മാർ സെറാഫിമിന്റെ കീഴിൽ റവ. ഫാ. ലിനു എം. ബാബുവും തിരഞ്ഞെടുക്കപ്പെട്ട ഉദ്യോഗസ്ഥരും ഇടവക നയിക്കുന്നു.",
      }}
    >
      <div className="mt-8 flex flex-col gap-6 rounded-3xl bg-card p-6 shadow-[var(--shadow)] md:flex-row">
        <Image
          src={metropolitan.photo}
          alt={metropolitan.name}
          width={240}
          height={280}
          className="h-auto w-full max-w-60 shrink-0 self-start rounded-2xl object-cover"
        />
        <div>
          <p className="text-sm text-gold">{metropolitan.role[locale]}</p>
          <h2 className="font-serif text-3xl text-maroon">{metropolitan.name}</h2>
          <Biography text={metropolitan.bio[locale]} />
        </div>
      </div>
    </SimplePage>
  );
}
