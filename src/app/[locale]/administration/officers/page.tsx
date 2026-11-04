import Image from "next/image";
import { SimplePage } from "@/components/SimplePage";
import { officers } from "@/content/site";
import { requireLocale } from "@/lib/locale-page";

export default async function Page({ params }: PageProps<"/[locale]/administration/officers">) {
  const locale = await requireLocale(params);
  return (
    <SimplePage
      locale={locale}
      title={{ en: "Parish officers", ml: "ഇടവകാ ഉദ്യോഗസ്ഥർ" }}
    >
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {officers.map((person) => (
          <article key={person.role.en} className="rounded-3xl bg-card p-4 shadow-[var(--shadow)]">
            <Image src={person.photo} alt={person.name} width={400} height={320} className="h-48 w-full rounded-2xl object-cover" />
            <h2 className="mt-3 font-serif text-2xl text-maroon">{person.name}</h2>
            <p className="text-gold">{person.role[locale]}</p>
          </article>
        ))}
      </div>
    </SimplePage>
  );
}
