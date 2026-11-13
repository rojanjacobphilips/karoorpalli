import Image from "next/image";
import { SimplePage } from "@/components/SimplePage";
import { requireLocale } from "@/lib/locale-page";

const roles = {
  vicar: { en: "Vicar", ml: "വികാരി" },
  assistant: { en: "Assistant", ml: "അസിസ്റ്റന്റ്" },
} as const;

const past: { name: { en: string; ml: string }; role: keyof typeof roles; years?: string }[] = [
  {
    name: {
      en: "V. Rev. Fr. Kochitty Geevarghese Cor-Episcopa Thengumtharayil",
      ml: "വെരി. റവ. ഫാ. കൊച്ചിറ്റി ഗീവർഗീസ് കോർ-എപ്പിസ്കോപ്പ തെങ്ങുംതറയിൽ",
    },
    role: "vicar",
  },
  {
    name: {
      en: "Rev. Fr. Idicheria Thomas Thengumthara Vadakekara",
      ml: "റവ. ഫാ. ഇടിചെറിയ തോമസ് തെങ്ങുംതറ വടക്കേകര",
    },
    role: "assistant",
  },
  {
    name: {
      en: "Rev. Fr. Abraham Alumkkunnathil Mylapra",
      ml: "റവ. ഫാ. എബ്രഹാം ആലുംകുന്നത്തിൽ മൈലാപ്ര",
    },
    role: "assistant",
  },
  {
    name: {
      en: "V. Rev. Fr. Geevarghese Cor-Episcopa Thengumtharayil",
      ml: "വെരി. റവ. ഫാ. ഗീവർഗീസ് കോർ-എപ്പിസ്കോപ്പ തെങ്ങുംതറയിൽ",
    },
    role: "vicar",
  },
  {
    name: {
      en: "V. Rev. Fr. C.V. John Cor-Episcopa Cherikirethu",
      ml: "വെരി. റവ. ഫാ. സി.വി. ജോൺ കോർ-എപ്പിസ്കോപ്പ ചെരികരേത്തു",
    },
    role: "vicar",
  },
  {
    name: {
      en: "Rev. Fr. T. G. Abraham Thengumtharayil",
      ml: "വെരി. ഫാ. ടി. ജി. എബ്രഹാം തെങ്ങുംതറയിൽ",
    },
    role: "vicar",
    years: "1940–1945",
  },
  {
    name: {
      en: "Rev. Fr. K. A. Varghese Kollentayathu",
      ml: "റവ. ഫാ. കെ. എ. വർഗീസ് കൊല്ലന്റയാത്തു",
    },
    role: "vicar",
    years: "1947–1950",
  },
  {
    name: {
      en: "Rev. Fr. P. T. Mathews Puthenparampil, Naranganam",
      ml: "റവ. ഫാ. പി. ടി. മാത്യൂസ് പുത്തൻപറമ്പിൽ, നാരങ്ങാനം",
    },
    role: "vicar",
    years: "1950–1965",
  },
  {
    name: {
      en: "Rev. Fr. C. O. Varghese Chakkittadethu",
      ml: "റവ. ഫാ. സി. ഒ. വർഗീസ് ചക്കിട്ടടത്തു",
    },
    role: "vicar",
    years: "1965–1967",
  },
  {
    name: {
      en: "Rev. Fr. P. K. Mathews Palakunni",
      ml: "റവ. ഫാ. പി. കെ. മാത്യൂസ് പാലാകുന്നി",
    },
    role: "vicar",
    years: "1966–1967",
  },
  {
    name: {
      en: "Rev. Fr. George Kurian Kakkudiyil",
      ml: "റവ. ഫാ. ജോർജ് കുര്യൻ കാക്കുടിയിൽ",
    },
    role: "vicar",
    years: "1975–1978",
  },
  {
    name: {
      en: "Rev. Fr. T. G. Stephan Thengumtharayil",
      ml: "റവ. ഫാ. ടി. ജി. സ്റ്റീഫൻ തെങ്ങുംതറയിൽ",
    },
    role: "vicar",
    years: "1978–1980",
  },
  {
    name: { en: "Rev. Fr. V. T. Thomas Ulanadu", ml: "റവ. ഫാ. വി. ടി. തോമസ് ഉലനാട്" },
    role: "vicar",
    years: "1980–1981",
  },
  {
    name: {
      en: "Rev. Fr. T. D. Samuel Thekkemanil",
      ml: "റവ. ഫാ. ടി. ഡി. സാമുവൽ തെക്കേമാനിൽ",
    },
    role: "vicar",
    years: "1981–1983",
  },
  {
    name: {
      en: "Rev. Fr. V. T. Thomas Vettikooltathil",
      ml: "റവ. ഫാ. വി. ടി. തോമസ് വെട്ടികൂൾത്തത്തിൽ",
    },
    role: "vicar",
    years: "1983–1986",
  },
  {
    name: {
      en: "Rev. Fr. Mathew Varghese Thiruvinal",
      ml: "റവ. ഫാ. മാത്യു വർഗീസ് തിരുവിലാൽ",
    },
    role: "vicar",
    years: "1988–1990",
  },
  {
    name: {
      en: "Rev. Fr. Dr. M. O. John Madathil",
      ml: "റവ. ഫാ. ഡോ. എം. ഒ. ജോൺ മാടത്തിൽ",
    },
    role: "vicar",
    years: "1990–1990",
  },
  {
    name: {
      en: "Rev. Fr. Jacob Daniel Mar Kuriyakose Dayara",
      ml: "റവ. ഫാ. ജേക്കബ് ഡാനിയേൽ മാർ കുര്യാക്കോസ് ദയറ",
    },
    role: "vicar",
    years: "1990–1993",
  },
  {
    name: {
      en: "Rev. Fr. Abraham George Anakallil",
      ml: "റവ. ഫാ. എബ്രഹാം ജോർജ് അനക്കല്ലിൽ",
    },
    role: "vicar",
    years: "1992–1992",
  },
  {
    name: {
      en: "Rev. Fr. Titus George Basil Aramana",
      ml: "റവ. ഫാ. തീത്തോസ് ജോർജ് ബേസിൽ അരമന",
    },
    role: "vicar",
    years: "1993–1999",
  },
  {
    name: {
      en: "Rev. Fr. Raju Daniel Plamthodathil",
      ml: "റവ. ഫാ. രാജു ഡാനിയേൽ പ്ലാന്തോടത്തിൽ",
    },
    role: "assistant",
    years: "1996–1999",
  },
  {
    name: {
      en: "Rev. Fr. Mathew Samuel Achen Veettil",
      ml: "റവ. ഫാ. മാത്യു സാമുവൽ അച്ചൻ വീട്ടിൽ",
    },
    role: "assistant",
    years: "1999–1999",
  },
  {
    name: {
      en: "Rev. Fr. P. T. John Padiyara Veettil",
      ml: "റവ. ഫാ. പി. ടി. ജോൺ പടിയറ വീട്ടിൽ",
    },
    role: "vicar",
    years: "1999–2000",
  },
  {
    name: {
      en: "Rev. Fr. Peter Thomas Pathanapuram Dayara",
      ml: "റവ. ഫാ. പീറ്റർ തോമസ് പത്തനാപുരം ദയറ",
    },
    role: "vicar",
    years: "2000–2003",
  },
  {
    name: {
      en: "Rev. Fr. George Varghese Mannarakkulanji",
      ml: "റവ. ഫാ. ജോർജ് വർഗീസ് മണ്ണാറക്കുളഞ്ഞി",
    },
    role: "vicar",
    years: "2003–2006",
  },
  {
    name: {
      en: "Rev. Fr. Simon Skariah Holy Trinity, Ranny",
      ml: "റവ. ഫാ. സൈമൺ സ്കറിയ ഹോളി ട്രിനിറ്റി, റാന്നി",
    },
    role: "vicar",
    years: "2006–2007",
  },
  {
    name: {
      en: "Rev. Fr. Biju Mathews Mannarakkulanji",
      ml: "റവ. ഫാ. ബിജു മാത്യൂസ് മണ്ണാറക്കുളഞ്ഞി",
    },
    role: "vicar",
    years: "2007–2009",
  },
  {
    name: {
      en: "Rev. Fr. Dr. K. T. Mathews Kadammanitta",
      ml: "റവ. ഫാ. ഡോ. കെ. ടി. മാത്യൂസ് കടമ്മനിട്ട",
    },
    role: "vicar",
    years: "2009–2012",
  },
  {
    name: {
      en: "Rev. Fr. John Mathews Madathilethu",
      ml: "റവ. ഫാ. ജോൺ മാത്യൂസ് മാടത്തിലേത്തു",
    },
    role: "vicar",
    years: "2012–2015",
  },
  {
    name: {
      en: "V. Rev. Fr. P. T. Mathews Cor-Episcopa Puthuparambil",
      ml: "വി. റവ. ഫാ. പി. ടി. മാത്യൂസ് കോർ-എപ്പിസ്കോപ്പ പുതുപറമ്പിൽ",
    },
    role: "vicar",
    years: "2015–2018",
  },
  {
    name: {
      en: "Rev. Fr. Leslie P. Cherian, Chemponthara Anie Chambers",
      ml: "റവ. ഫാ. ലെസ്ലി പി. ചെറിയാൻ, ചെമ്പൊന്തറ ആനി ചേമ്പേഴ്സ്",
    },
    role: "vicar",
    years: "2018–2021",
  },
  {
    name: { en: "Rev. Fr. Sajan B Varghese", ml: "റവ. ഫാ. സാജൻ ബി. വർഗീസ്" },
    role: "vicar",
    years: "2021–2024",
  },
];

const disclaimer = {
  en: "This list is compiled from the parish records available to us. Some names or years may be incomplete or incorrect. We regret any error, and corrections are welcome.",
  ml: "ലഭ്യമായ ഇടവകാ രേഖകളെ അടിസ്ഥാനമാക്കിയാണ് ഈ പട്ടിക തയ്യാറാക്കിയിരിക്കുന്നത്. ചില പേരുകളോ വർഷങ്ങളോ അപൂർണമോ തെറ്റോ ആകാം. പിഴവുകൾക്ക് ക്ഷമാപണം. തിരുത്തലുകൾ അറിയിക്കുക.",
};

export default async function Page({ params }: PageProps<"/[locale]/administration/past-vicars">) {
  const locale = await requireLocale(params);
  return (
    <SimplePage
      locale={locale}
      title={{ en: "Former Vicars", ml: "മുൻ വികാരിമാർ" }}
      body={{
        en: "Vicars and assistants who have served the parish.",
        ml: "ഇടവകയിൽ സേവനം അനുഷ്ഠിച്ച വികാരിമാരും അസിസ്റ്റന്റുമാരും.",
      }}
    >
      <figure className="mt-6 overflow-hidden rounded-3xl bg-card shadow-[var(--shadow)]">
        <Image
          src="/church/former-vicars-poster.jpg"
          alt={
            locale === "ml"
              ? "മുൻ വികാരിമാരുടെ സ്മാരക ചിത്രം"
              : "Commemorative poster of former vicars of Karoor Palli"
          }
          width={730}
          height={1024}
          className="mx-auto h-auto w-full max-w-3xl object-contain"
          priority
        />
        <figcaption className="border-t border-maroon/10 px-5 py-3 text-center text-sm text-muted">
          {locale === "ml" ? "മുൻവികാരിമാർ — ഇടവകാ സ്മാരക പോസ്റ്റർ" : "Former Vicars — parish commemorative poster"}
        </figcaption>
      </figure>

      <h2 className="mt-10 font-serif text-2xl text-maroon">
        {locale === "ml" ? "പേരുകളുടെ പട്ടിക" : "Names"}
      </h2>
      <ul className="mt-4 divide-y divide-maroon/10 rounded-3xl bg-card shadow-[var(--shadow)]">
        {past.map((item) => (
          <li key={item.name.en} className="flex items-start justify-between gap-4 px-5 py-4">
            <span>
              <span className="block font-serif text-xl text-maroon">{item.name[locale]}</span>
              <span className="text-sm text-gold">{roles[item.role][locale]}</span>
            </span>
            {item.years ? <span className="shrink-0 text-gold">{item.years}</span> : null}
          </li>
        ))}
      </ul>
      <p className="mt-8 rounded-3xl bg-ivory-deep p-6 text-sm text-muted">{disclaimer[locale]}</p>
    </SimplePage>
  );
}
