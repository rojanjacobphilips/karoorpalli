import { EventsBrowser } from "@/components/EventsBrowser";
import { SimplePage } from "@/components/SimplePage";
import { getEvents } from "@/content/cms";
import { requireLocale } from "@/lib/locale-page";

export default async function Page({ params }: PageProps<"/[locale]/events">) {
  const locale = await requireLocale(params);
  const events = await getEvents();
  return (
    <SimplePage locale={locale} title={{ en: "Events", ml: "പരിപാടികൾ" }}>
      <EventsBrowser locale={locale} events={events} />
    </SimplePage>
  );
}
