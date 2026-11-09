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
            {person.photo ? (
              <Image
                src={person.photo}
                alt={person.name}
                width={480}
                height={600}
                className="h-80 w-full rounded-2xl object-cover object-top"
              />
            ) : (
              <div className="grid h-80 w-full place-items-center rounded-2xl bg-maroon text-ivory">
                <span className="font-serif text-5xl">
                  {person.name
                    .split(" ")
                    .filter((part) => part !== "Mr." && part !== "Mrs.")
                    .map((part) => part[0])
                    .join("")}
                </span>
              </div>
            )}
            <h2 className="mt-3 font-serif text-2xl text-maroon">{person.name}</h2>
            <p className="text-gold">{person.role[locale]}</p>
            {person.phone ? (
              <a href={`tel:${person.phone.replace(/\s/g, "")}`} className="mt-3 block text-sm text-charcoal">
                {person.phone}
              </a>
            ) : null}
            {person.email ? (
              <a href={`mailto:${person.email}`} className="block text-sm text-maroon">
                {person.email}
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </SimplePage>
  );
}
