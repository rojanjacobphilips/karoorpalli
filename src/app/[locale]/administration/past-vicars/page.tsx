import { SimplePage } from "@/components/SimplePage";
import { requireLocale } from "@/lib/locale-page";

const past = [
  { years: "1999", name: "Rev. Fr. Titus George" },
];

export default async function Page({ params }: PageProps<"/[locale]/administration/past-vicars">) {
  const locale = await requireLocale(params);
  return (
    <SimplePage
      locale={locale}
      title={{ en: "Former Vicars", ml: "മുൻ വികാരിമാർ" }}
      body={{
        en: "Rev. Fr. Titus George served at the 1999 consecration. The complete list of former vicars, with years and photographs, will be added as records are confirmed.",
        ml: "സേവന കാലവും ഫോട്ടോകളും ഓഫീസ് നൽകും.",
      }}
    >
      <ul className="mt-6 divide-y divide-maroon/10 rounded-3xl bg-card shadow-[var(--shadow)]">
        {past.map((item, i) => (
          <li key={i} className="flex justify-between px-5 py-4">
            <span className="font-serif text-xl text-maroon">{item.name}</span>
            <span className="text-gold">{item.years}</span>
          </li>
        ))}
      </ul>
    </SimplePage>
  );
}
