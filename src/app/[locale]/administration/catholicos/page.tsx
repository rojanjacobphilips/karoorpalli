import Image from "next/image";
import { SimplePage } from "@/components/SimplePage";
import { catholicos } from "@/content/site";
import { requireLocale } from "@/lib/locale-page";

function Biography({ text }: { text: string }) {
  return text.split("\n\n").map((paragraph) => (
    <p key={paragraph.slice(0, 48)} className="mt-3 text-muted">
      {paragraph}
    </p>
  ));
}

export default async function Page({ params }: PageProps<"/[locale]/administration/catholicos">) {
  const locale = await requireLocale(params);
  return (
    <SimplePage
      locale={locale}
      title={{ en: "Catholicos of the East", ml: "പൗരസ്ത്യ കാതോലിക്കോസ്" }}
    >
      <div className="mt-8 flex flex-col gap-6 rounded-3xl bg-card p-6 shadow-[var(--shadow)] md:flex-row">
        <Image
          src={catholicos.photo}
          alt={catholicos.name}
          width={480}
          height={720}
          className="h-auto w-full max-w-xs shrink-0 self-center rounded-2xl md:self-start"
        />
        <div>
          <p className="text-sm text-gold">{catholicos.role[locale]}</p>
          <h2 className="font-serif text-3xl text-maroon">{catholicos.name}</h2>
          <Biography text={catholicos.bio[locale]} />
        </div>
      </div>
    </SimplePage>
  );
}
