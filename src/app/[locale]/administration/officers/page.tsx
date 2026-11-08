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
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {officers.map((person) => (
          <article key={person.role.en} className="rounded-3xl bg-card p-4 shadow-[var(--shadow)]">
            <Image
              src={person.photo}
              alt={person.name}
              width={480}
              height={600}
              className="h-80 w-full rounded-2xl object-cover object-top"
            />
            <h2 className="mt-3 font-serif text-2xl text-maroon">{person.name}</h2>
            <p className="text-gold">{person.role[locale]}</p>
          </article>
        ))}
      </div>
    </SimplePage>
  );
}
