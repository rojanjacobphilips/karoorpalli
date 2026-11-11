import Image from "next/image";
import { SimplePage } from "@/components/SimplePage";
import { diocesanCouncilMembers } from "@/content/site";
import { requireLocale } from "@/lib/locale-page";

export default async function Page({
  params,
}: PageProps<"/[locale]/administration/diocesan-council">) {
  const locale = await requireLocale(params);
  return (
    <SimplePage
      locale={locale}
      title={{ en: "Diocesan Council Members", ml: "ഭദ്രാസന കൗൺസിൽ അംഗങ്ങൾ" }}
      body={{
        en: "Parish members of the Diocesan Council.",
        ml: "ഭദ്രാസന കൗൺസിലിലെ ഇടവകാ അംഗങ്ങൾ.",
      }}
    >
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {diocesanCouncilMembers.map((member) => (
          <article key={member.name.en} className="rounded-3xl bg-card p-4 text-center shadow-[var(--shadow)]">
            <Image
              src={member.photo}
              alt={member.name[locale]}
              width={280}
              height={280}
              className="mx-auto h-40 w-40 rounded-full object-cover"
            />
            <h2 className="mt-3 font-serif text-xl text-maroon">{member.name[locale]}</h2>
            <p className="text-sm text-gold">{member.role[locale]}</p>
          </article>
        ))}
      </div>
    </SimplePage>
  );
}
