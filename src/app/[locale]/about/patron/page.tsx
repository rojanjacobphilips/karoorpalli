import type { ReactNode } from "react";
import Image from "next/image";
import { SimplePage } from "@/components/SimplePage";
import { patronEssay } from "@/content/patron";
import { pagesCopy } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { requireLocale } from "@/lib/locale-page";

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /\*\*((?:(?!\*\*).)+)\*\*|\*((?:(?!\*).)+)\*/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let index = 0;

  while ((match = pattern.exec(text))) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    if (match[1] !== undefined) {
      nodes.push(
        <strong key={index} className="font-semibold text-charcoal">
          {renderInline(match[1])}
        </strong>,
      );
    } else {
      nodes.push(<em key={index}>{match[2]}</em>);
    }
    last = match.index + match[0].length;
    index += 1;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function PatronEssay({ locale }: { locale: Locale }) {
  const essay = patronEssay[locale];
  return (
    <div className="mt-10 border-t border-ivory-deep pt-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-start">
        <Image
          src="/people/st-peter.png"
          alt={locale === "ml" ? "പ്രേഷിതൻ വിശുദ്ധ പത്രോസിന്റെ ഐക്കൺ" : "Icon of St. Peter the Apostle"}
          width={420}
          height={540}
          className="h-auto w-full max-w-xs shrink-0 self-center rounded-2xl shadow-[var(--shadow)] md:self-start"
        />
        <div>
          <h2 className="font-serif text-3xl text-maroon">{essay.title}</h2>
          <p className="mt-4 text-lg text-muted">{renderInline(essay.lead)}</p>
        </div>
      </div>
      {essay.sections.map((section) => (
        <section key={section.heading} className="mt-8">
          <h3 className="font-serif text-2xl text-maroon">{section.heading}</h3>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="mt-4 text-lg text-muted">
              {renderInline(paragraph)}
            </p>
          ))}
          {section.list ? (
            <ul className="mt-4 list-disc space-y-3 pl-6 text-lg text-muted">
              {section.list.map((item) => (
                <li key={item.slice(0, 48)}>{renderInline(item)}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
      <p className="mt-8 text-lg text-muted">{renderInline(essay.closing)}</p>
    </div>
  );
}

export default async function Page({ params }: PageProps<"/[locale]/about/patron">) {
  const locale = await requireLocale(params);
  return (
    <SimplePage locale={locale} {...pagesCopy.patron}>
      <PatronEssay locale={locale} />
    </SimplePage>
  );
}
