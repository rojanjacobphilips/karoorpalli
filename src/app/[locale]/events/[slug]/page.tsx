import { notFound } from "next/navigation";
import { ParishForm } from "@/components/ParishForm";
import { SimplePage } from "@/components/SimplePage";
import { events, parish, ui } from "@/content/site";
import { isLocale } from "@/lib/i18n";

export default async function Page({ params }: PageProps<"/[locale]/events/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const item = events.find((entry) => entry.slug === slug);
  if (!item) notFound();
  const start = item.date.replace(/-/g, "");
  const calendar = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(item.title.en)}&dates=${start}/${start}&details=${encodeURIComponent(item.excerpt.en)}&location=${encodeURIComponent(parish.location.en)}`;
  return (
    <SimplePage locale={locale} title={item.title}>
      <p className="text-gold">
        {item.date} · {item.time[locale]} · {item.place[locale]}
      </p>
      <p className="mt-4 text-lg text-muted">{item.excerpt[locale]}</p>
      <a href={calendar} className="mt-6 inline-flex rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-ivory">
        {ui.addCalendar[locale]}
      </a>
      <div className="mt-10 rounded-3xl bg-card p-6 shadow-[var(--shadow)]">
        <h2 className="mb-4 font-serif text-2xl text-maroon">
          {locale === "ml" ? "രജിസ്റ്റർ ചെയ്യുക" : "Register for this event"}
        </h2>
        <ParishForm
          locale={locale}
          type="event-registration"
          fields={[
            { name: "name", label: locale === "ml" ? "പേര്" : "Name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "phone", label: locale === "ml" ? "ഫോൺ" : "Phone" },
            { name: "message", label: locale === "ml" ? "കുറിപ്പ്" : "Notes", textarea: true },
          ]}
        />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: item.title.en,
            startDate: item.date,
            location: parish.location.en,
          }),
        }}
      />
    </SimplePage>
  );
}
