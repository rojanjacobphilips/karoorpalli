import { parish, ui } from "@/content/site";
import type { Locale } from "@/lib/i18n";

export function WhatsAppButton({ locale }: { locale: Locale }) {
  return (
    <a
      href={`https://wa.me/${parish.whatsapp}`}
      className="fixed bottom-5 right-5 z-40 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg"
    >
      {ui.chat[locale]}
    </a>
  );
}
