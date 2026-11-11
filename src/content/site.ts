import type {
  CommitteeMember,
  DownloadItem,
  HeroSlide,
  NavItem,
  NewsItem,
  Obituary,
  Organisation,
  ParishEvent,
  Person,
  TimelineEntry,
} from "@/content/types";
import type { Localized } from "@/content/types";

export const parish = {
  shortName: { en: "Karoor Palli", ml: "കാരൂർ പള്ളി" } satisfies Localized<string>,
  officialName: {
    en: "St. Peter's Orthodox Church, Karoor",
    ml: "സെന്റ് പീറ്റേഴ്‌സ് ഓർത്തഡോക്സ് പള്ളി, കാരൂർ",
  } satisfies Localized<string>,
  church: {
    en: "Malankara Orthodox Syrian Church",
    ml: "മലങ്കര ഓർത്തഡോക്സ് സുറിയാനി സഭ",
  } satisfies Localized<string>,
  diocese: {
    en: "Thumpamon Diocese",
    ml: "തുമ്പമൺ ഭദ്രാസനം",
  } satisfies Localized<string>,
  patron: { en: "St. Peter the Apostle", ml: "പ്രേഷിതൻ വിശുദ്ധ പത്രോസ്" } satisfies Localized<string>,
  feast: {
    en: "Feast of St. Peter — 29 June",
    ml: "വിശുദ്ധ പത്രോസിന്റെ തിരുനാൾ — ജൂൺ 29",
  } satisfies Localized<string>,
  established: "Kollavarsha 1072",
  location: {
    en: "Karoor, Elanthoor, Pathanamthitta, Kerala, India",
    ml: "കാരൂർ, ഇലന്തൂർ, പത്തനംതിട്ട, കേരളം, ഇന്ത്യ",
  } satisfies Localized<string>,
  addressLines: {
    en: ["St. Peter's Orthodox Church", "Karoor, Elanthoor P.O.", "Pathanamthitta, Kerala 689643"],
    ml: ["സെന്റ് പീറ്റേഴ്‌സ് ഓർത്തഡോക്സ് പള്ളി", "കാരൂർ, ഇലന്തൂർ പി.ഒ.", "പത്തനംതിട്ട, കേരളം 689643"],
  } satisfies Localized<string[]>,
  phone: "+91 46XX XXX XXX",
  email: "office@karoorpalli.com",
  whatsapp: "919999999999",
  mapsQuery: "Karoor Elanthoor Pathanamthitta Orthodox Church",
  mapsEmbed:
    "https://maps.google.com/maps?q=Elanthoor%2C%20Pathanamthitta%2C%20Kerala&t=&z=14&ie=UTF8&iwloc=&output=embed",
  social: {
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/919999999999",
  },
  links: {
    church: "https://mosc.in",
    diocese: "https://thumpamondiocese.org",
  },
  officeHours: {
    en: "Tue–Sat 9:30 AM – 1:00 PM · Sunday after Holy Qurbana",
    ml: "ചൊവ്വ–ശനി 9:30 AM – 1:00 PM · ഞായറാഴ്ച വിശുദ്ധ കുർബാനയ്ക്കു ശേഷം",
  } satisfies Localized<string>,
  stats: [
    { value: "320+", label: { en: "Families", ml: "കുടുംബങ്ങൾ" } },
    { value: "8", label: { en: "Organisations", ml: "സംഘടനകൾ" } },
    { value: "1072 ME", label: { en: "Established", ml: "സ്ഥാപിതം" } },
    { value: "12", label: { en: "Prayer groups", ml: "പ്രാർത്ഥനാ യൂണിറ്റുകൾ" } },
  ],
};

export const navigation: NavItem[] = [
  { href: "/", label: { en: "Home", ml: "ഹോം" } },
  {
    href: "/about",
    label: { en: "About", ml: "ഞങ്ങളെക്കുറിച്ച്" },
    children: [
      { href: "/about", label: { en: "Overview", ml: "അവലോകനം" } },
      { href: "/about/vision", label: { en: "Vision & Mission", ml: "ദർശനവും ദൗത്യവും" } },
      { href: "/about/patron", label: { en: "Patron Saint", ml: "മദ്ധ്യസ്ഥൻ" } },
      { href: "/about/feasts", label: { en: "Feasts", ml: "തിരുനാളുകൾ" } },
      { href: "/about/architecture", label: { en: "Church Building", ml: "ദേവാലയം" } },
      { href: "/about/cemetery", label: { en: "Cemetery", ml: "ശ്മശാനം" } },
      { href: "/history", label: { en: "History", ml: "ചരിത്രം" } },
    ],
  },
  {
    href: "/administration",
    label: { en: "Administration", ml: "ഭരണം" },
    children: [
      { href: "/administration/catholicos", label: { en: "Catholicos of the East", ml: "പൗരസ്ത്യ കാതോലിക്കോസ്" } },
      { href: "/administration", label: { en: "Diocesan Metropolitan", ml: "ഭദ്രാസന മെത്രാപ്പോലീത്ത" } },
      { href: "/vicar", label: { en: "Vicar", ml: "വികാരി" } },
      { href: "/administration/officers", label: { en: "Trustee & Secretary", ml: "ട്രസ്റ്റിയും സെക്രട്ടറിയും" } },
      { href: "/committee", label: { en: "Managing Committee", ml: "ഭരണസമിതി" } },
      { href: "/administration/past-vicars", label: { en: "Former Vicars", ml: "മുൻ വികാരിമാർ" } },
      { href: "/administration/reports", label: { en: "Annual Reports", ml: "വാർഷിക റിപ്പോർട്ടുകൾ" } },
    ],
  },
  {
    href: "/organisations",
    label: { en: "Organisations", ml: "സംഘടനകൾ" },
    children: [
      { href: "/organisations/sunday-school", label: { en: "Sunday School", ml: "സൺഡേ സ്കൂൾ" } },
      { href: "/organisations/balika-bala-samajam", label: { en: "Balika Bala Samajam", ml: "ബാലികാ ബാല സമാജം" } },
      { href: "/organisations/ocym", label: { en: "OCYM", ml: "ഒ.സി.വൈ.എം." } },
      { href: "/organisations/SDOF", label: { en: "SDOF", ml: "എസ്.ഡി.ഒ.എഫ്." } },
      { href: "/organisations/SJOF", label: { en: "SJOF", ml: "എസ്.ജെ.ഒ.എഫ്." } },
      {
        href: "/organisations/martha-mariam",
        label: { en: "Martha Marthiyam Vanitha Samajam", ml: "മാർത്താ മാർത്തിയം വനിതാ സമാജം" },
      },
      { href: "/organisations/prayer-groups", label: { en: "Prayer Groups", ml: "പ്രാർത്ഥനാ യൂണിറ്റുകൾ" } },
      { href: "/organisations/choir", label: { en: "Choir", ml: "ഗായകസംഘം" } },
      { href: "/organisations/altar-servers", label: { en: "AMOSS", ml: "എ.എം.ഒ.എസ്.എസ്." } },
      { href: "/organisations/peters-hand", label: { en: "Peter's Hand", ml: "പത്രോസിന്റെ കൈ" } },
    ],
  },
  {
    href: "/news",
    label: { en: "Parish life", ml: "ഇടവകാ ജീവിതം" },
    children: [
      { href: "/news", label: { en: "News", ml: "വാർത്തകൾ" } },
      { href: "/events", label: { en: "Events", ml: "പരിപാടികൾ" } },
      { href: "/gallery", label: { en: "Image Gallery", ml: "ചിത്രശാല" } },
      { href: "/videos", label: { en: "Video Gallery", ml: "വീഡിയോ" } },
      { href: "/downloads", label: { en: "Downloads", ml: "ഡൗൺലോഡുകൾ" } },
      { href: "/obituary", label: { en: "Obituary", ml: "അനുസ്മരണം" } },
      { href: "/parishioners", label: { en: "Parishioners Corner", ml: "ഇടവകാംഗങ്ങളുടെ ഇടം" } },
      { href: "/charity", label: { en: "Charity & Outreach", ml: "ദാനധർമ്മം" } },
    ],
  },
  {
    href: "/sacraments",
    label: { en: "Worship", ml: "ആരാധന" },
    children: [
      { href: "/sacraments", label: { en: "Sacraments & Services", ml: "കൂദാശകളും ശുശ്രൂഷകളും" } },
      { href: "/prayer-requests", label: { en: "Prayer Requests", ml: "പ്രാർത്ഥനാ അപേക്ഷ" } },
      { href: "/live", label: { en: "Live Stream", ml: "തത്സമയ സംപ്രേഷണം" } },
      { href: "/offerings", label: { en: "Online Offerings", ml: "ഓൺലൈൻ വഴിപാട്" } },
    ],
  },
  { href: "/contact", label: { en: "Contact", ml: "ബന്ധപ്പെടുക" } },
];

export const ui = {
  donate: { en: "Donate / Offerings", ml: "വഴിപാട്" },
  readMore: { en: "Read more", ml: "കൂടുതൽ വായിക്കുക" },
  viewAll: { en: "View all", ml: "എല്ലാം കാണുക" },
  search: { en: "Search the parish site", ml: "ഇടവകാ വെബ്‌സൈറ്റിൽ തിരയുക" },
  menu: { en: "Open menu", ml: "മെനു തുറക്കുക" },
  close: { en: "Close", ml: "അടയ്ക്കുക" },
  language: { en: "Language", ml: "ഭാഷ" },
  thisWeek: { en: "This week's schedule", ml: "ഈ ആഴ്ചയിലെ ക്രമം" },
  latestNews: { en: "Latest news", ml: "പുതിയ വാർത്തകൾ" },
  upcomingEvents: { en: "Upcoming events", ml: "വരാനിരിക്കുന്ന പരിപാടികൾ" },
  organisations: { en: "Parish organisations", ml: "ഇടവകാ സംഘടനകൾ" },
  gallery: { en: "Parish gallery", ml: "ചിത്രശാല" },
  verse: { en: "Verse for today", ml: "ഇന്നത്തെ വചനം" },
  newsletter: { en: "Parish newsletter", ml: "ഇടവകാ വാർത്താപത്രം" },
  newsletterHint: {
    en: "Feast reminders, Qurbana timings and circulars in your inbox.",
    ml: "തിരുനാൾ ഓർമ്മകളും കുർബാനാ സമയങ്ങളും കൽപ്പനകളും ഇമെയിലിൽ.",
  },
  subscribe: { en: "Subscribe", ml: "സബ്‌സ്ക്രൈബ് ചെയ്യുക" },
  copyright: {
    en: "© Karoor Palli · St. Peter's Orthodox Church, Karoor. All rights reserved.",
    ml: "© കാരൂർ പള്ളി · സെന്റ് പീറ്റേഴ്‌സ് ഓർത്തഡോക്സ് പള്ളി, കാരൂർ.",
  },
  cookie: {
    en: "We use cookies for essential site functions and anonymous analytics. You can accept or decline non-essential cookies.",
    ml: "അവശ്യ പ്രവർത്തനങ്ങൾക്കും അജ്ഞാത അനലിറ്റിക്സിനും ഞങ്ങൾ കുക്കികൾ ഉപയോഗിക്കുന്നു.",
  },
  accept: { en: "Accept", ml: "അംഗീകരിക്കുക" },
  decline: { en: "Decline", ml: "നിരസിക്കുക" },
  chat: { en: "Chat on WhatsApp", ml: "വാട്സ്ആപ്പിൽ ചാറ്റ് ചെയ്യുക" },
  addCalendar: { en: "Add to Google Calendar", ml: "ഗൂഗിൾ കലണ്ടറിലേക്ക് ചേർക്കുക" },
  share: { en: "Share", ml: "പങ്കിടുക" },
  send: { en: "Send", ml: "അയയ്ക്കുക" },
  required: { en: "Required", ml: "ആവശ്യമാണ്" },
};

export const heroSlides: HeroSlide[] = [
  {
    id: "exterior",
    image: "/church/right-side-day.jpg",
    imagePosition: "center 45%",
    imageAlt: {
      en: "St. Peter's Orthodox Church, Karoor, in daylight",
      ml: "പകൽ വെളിച്ചത്തിൽ കാരൂർ പള്ളി",
    },
    title: { en: "Welcome to Karoor Palli", ml: "കാരൂർ പള്ളിയിലേക്ക് സ്വാഗതം" },
    caption: {
      en: "St. Peter's Orthodox Church, Karoor, Elanthoor — a parish of the Malankara Orthodox Syrian Church.",
      ml: "മലങ്കര ഓർത്തഡോക്സ് സുറിയാനി സഭയുടെ ഇടവക — സെന്റ് പീറ്റേഴ്‌സ് ഓർത്തഡോക്സ് പള്ളി, കാരൂർ, ഇലന്തൂർ.",
    },
    cta: { en: "Plan your visit", ml: "സന്ദർശനം ആസൂത്രണം ചെയ്യുക" },
    href: "/contact",
  },
  {
    id: "qurbana",
    image: "/church/front-moon.jpg",
    imagePosition: "center 30%",
    imageAlt: {
      en: "The church tower at night, with the moon and palm trees",
      ml: "ചന്ദ്രനും ഈന്തപ്പനകളും സഹിതം രാത്രിയിലെ പള്ളിഗോപുരം",
    },
    title: { en: "Holy Qurbana every Sunday", ml: "ഓരോ ഞായറാഴ്ചയും വിശുദ്ധ കുർബാന" },
    caption: {
      en: "Join the Divine Liturgy in the tradition of the Malankara Orthodox Syrian Church.",
      ml: "മലങ്കര ഓർത്തഡോക്സ് പാരമ്പര്യത്തിലുള്ള ദിവ്യബലിയിൽ പങ്കുചേരുക.",
    },
    cta: { en: "Service timings", ml: "ശുശ്രൂഷാ സമയങ്ങൾ" },
    href: "/#timings",
  },
  {
    id: "feast",
    image: "/church/feast-st-peter.jpg",
    imagePosition: "center 42%",
    imageAlt: {
      en: "The church facade in daylight, with palms and the entrance",
      ml: "പകൽ വെളിച്ചത്തിൽ ഈന്തപ്പനകളോടുകൂടിയ പള്ളിയുടെ മുൻഭാഗം",
    },
    title: { en: "Feast of St. Peter", ml: "വിശുദ്ധ പത്രോസിന്റെ തിരുനാൾ" },
    caption: {
      en: "Our patronal feast is kept with Holy Qurbana, procession and community agape.",
      ml: "മദ്ധ്യസ്ഥ തിരുനാൾ വിശുദ്ധ കുർബാന, പ്രദക്ഷിണം, സ്നേഹവിരുന്ന് എന്നിവയോടെ ആചരിക്കുന്നു.",
    },
    cta: { en: "Patron saint", ml: "മദ്ധ്യസ്ഥൻ" },
    href: "/about/patron",
  },
  {
    id: "youth",
    image: "/church/right-side-cloud.jpg",
    imagePosition: "center 40%",
    imageAlt: {
      en: "The church from the road under a cloudy sky",
      ml: "മേഘാവൃതമായ ആകാശത്തിന് കീഴെ വഴിയിൽ നിന്നുള്ള പള്ളി",
    },
    title: { en: "Youth in the life of the Church", ml: "സഭാ ജീവിതത്തിലെ യുവജനങ്ങൾ" },
    caption: {
      en: "OCYM invites young people into worship, fellowship and service.",
      ml: "ആരാധന, കൂട്ടായ്മ, സേവനം എന്നിവയിലേക്ക് ഒ.സി.വൈ.എം. യുവജനങ്ങളെ ക്ഷണിക്കുന്നു.",
    },
    cta: { en: "Join OCYM", ml: "ഒ.സി.വൈ.എം.യിൽ ചേരുക" },
    href: "/organisations/ocym",
  },
  {
    id: "sunday-school",
    image: "/church/sunday-school.jpg",
    imagePosition: "center 42%",
    imageAlt: {
      en: "The sanctuary, altar and icon of Christ",
      ml: "മദ്ബഹ, അൾത്താര, ക്രിസ്തുവിന്റെ ചിത്രം",
    },
    title: { en: "Sunday School", ml: "സൺഡേ സ്കൂൾ" },
    caption: {
      en: "Faith, Scripture and our Orthodox heritage for the children of the parish.",
      ml: "ഇടവകയിലെ കുട്ടികൾക്ക് വിശ്വാസം, തിരുവചനം, ഓർത്തഡോക്സ് പാരമ്പര്യം.",
    },
    cta: { en: "Sunday School", ml: "സൺഡേ സ്കൂൾ" },
    href: "/organisations/sunday-school",
  },
  {
    id: "community",
    image: "/church/front-moon.jpg",
    imagePosition: "center 70%",
    imageAlt: {
      en: "Palm trees beside the illuminated church",
      ml: "പ്രകാശിതമായ പള്ളിയുടെ അരികിലെ ഈന്തപ്പനകൾ",
    },
    title: { en: "A home for families near and far", ml: "അടുത്തും അകലെയുമുള്ള കുടുംബങ്ങൾക്ക് ഒരു വീട്" },
    caption: {
      en: "Parishioners in the Gulf, UK, US and Australia remain part of Karoor Palli.",
      ml: "ഗൾഫ്, യുകെ, യുഎസ്, ഓസ്ട്രേലിയ എന്നിവിടങ്ങളിലെ ഇടവകാംഗങ്ങളും കാരൂർ പള്ളിയുടെ ഭാഗമാണ്.",
    },
    cta: { en: "Parishioners corner", ml: "ഇടവകാംഗങ്ങളുടെ ഇടം" },
    href: "/parishioners",
  },
  {
    id: "patron",
    image: "/church/st-peter.jpg",
    imagePosition: "center 22%",
    imageAlt: {
      en: "Icon of St. Peter the Apostle, with the keys",
      ml: "താക്കോലുകളോടുകൂടിയ പ്രേഷിതൻ വിശുദ്ധ പത്രോസിന്റെ ചിത്രം",
    },
    title: { en: "St. Peter, our patron", ml: "നമ്മുടെ മദ്ധ്യസ്ഥൻ വിശുദ്ധ പത്രോസ്" },
    caption: {
      en: "The parish is dedicated to the apostle who confessed Jesus as the Christ and was entrusted with the keys.",
      ml: "യേശുവിനെ ക്രിസ്തുവെന്ന് ഏറ്റുപറഞ്ഞ് താക്കോലുകൾ ഏൽപ്പിക്കപ്പെട്ട പ്രേഷിതന് സമർപ്പിതമായ ഇടവക.",
    },
    cta: { en: "Patron saint", ml: "മദ്ധ്യസ്ഥൻ" },
    href: "/about/patron",
  },
];

export const announcements: Localized<string>[] = [
  {
    en: "Next feast: St. Peter the Apostle — 29 June · Holy Qurbana 7:00 AM",
    ml: "അടുത്ത തിരുനാൾ: വിശുദ്ധ പത്രോസ് — ജൂൺ 29 · വിശുദ്ധ കുർബാന 7:00 AM",
  },
  {
    en: "Special Evening Prayer this Friday at 6:30 PM in memory of the faithful departed.",
    ml: "ഈ വെള്ളിയാഴ്ച 6:30 PM-ന് മരിച്ചവർക്കുവേണ്ടി പ്രത്യേക സന്ധ്യാ പ്രാർത്ഥന.",
  },
  {
    en: "Sunday School reopens after the monsoon break — registration forms in Downloads.",
    ml: "മഴക്കാല അവധിക്കുശേഷം സൺഡേ സ്കൂൾ ആരംഭിക്കുന്നു — ഫോമുകൾ ഡൗൺലോഡുകളിൽ.",
  },
];

export const timings = {
  heading: { en: "Service timings", ml: "ശുശ്രൂഷാ സമയങ്ങൾ" },
  note: {
    en: "Placeholder schedule — the office can edit this week's times in Sanity.",
    ml: "സാമ്പിൾ ക്രമം — ഈ ആഴ്ചയിലെ സമയങ്ങൾ സാനിറ്റിയിൽ തിരുത്താം.",
  },
  items: [
    {
      title: { en: "Holy Qurbana", ml: "വിശുദ്ധ കുർബാന" },
      detail: { en: "Sundays 7:00 AM · Feast days as announced", ml: "ഞായറാഴ്ച 7:00 AM · തിരുനാളുകൾ പ്രഖ്യാപനം അനുസരിച്ച്" },
    },
    {
      title: { en: "Evening Prayer", ml: "സന്ധ്യാ പ്രാർത്ഥന" },
      detail: { en: "Saturdays 6:30 PM", ml: "ശനിയാഴ്ച 6:30 PM" },
    },
    {
      title: { en: "Sunday School", ml: "സൺഡേ സ്കൂൾ" },
      detail: { en: "Sundays 9:30 AM after Qurbana", ml: "ഞായറാഴ്ച കുർബാനയ്ക്കു ശേഷം 9:30 AM" },
    },
    {
      title: { en: "This week", ml: "ഈ ആഴ്ച" },
      detail: {
        en: "Friday 6:30 PM memorial prayer · Saturday choir practice 5:00 PM",
        ml: "വെള്ളി 6:30 PM അനുസ്മരണ പ്രാർത്ഥന · ശനി 5:00 PM ഗായകസംഘ പരിശീലനം",
      },
    },
  ],
};

export const vicar: Person = {
  name: "Rev. Fr. Linu M. Babu",
  role: { en: "Vicar", ml: "വികാരി" },
  photo: "/people/linu-babu.jpg",
  email: "vicar@karoorpalli.com",
  phone: "+91 94959 14746",
  bio: {
    en: "Rev. Fr. Linu M. Babu serves as Parish Vicar of St. Peter’s Orthodox Church, Karoor.\n\nRev. Fr. Linu M. Babu is an ordained priest of the Malankara Orthodox Syrian Church serving actively within the Thumpamon Diocese.",
    ml: "റവ. ഫാ. ലിനു എം. ബാബു സെന്റ് പീറ്റേഴ്‌സ് ഓർത്തഡോക്സ് പള്ളി, കാരൂരിന്റെ വികാരിയാണ്.\n\nറവ. ഫാ. ലിനു എം. ബാബു മലങ്കര ഓർത്തഡോക്സ് സുറിയാനി സഭയിലെ അച്ചനാണ്. തുമ്പമൺ ഭദ്രാസനത്തിൽ സജീവമായി ശുശ്രൂഷ ചെയ്യുന്നു.",
  },
  facts: [
    {
      label: { en: "Family / House", ml: "കുടുംബം / വീട്ടുപേര്" },
      value: { en: "Mankottu House", ml: "മാങ്കോട്ട് വീട്" },
    },
    {
      label: { en: "Address", ml: "വിലാസം" },
      value: {
        en: "Kumbazha P.O., Pathanamthitta, Kerala, India — 689653",
        ml: "കുമ്പഴ പി.ഒ., പത്തനംതിട്ട, കേരളം, ഇന്ത്യ — 689653",
      },
    },
    {
      label: { en: "Diocese", ml: "ഭദ്രാസനം" },
      value: { en: "Diocese of Thumpamon", ml: "തുമ്പമൺ ഭദ്രാസനം" },
    },
    {
      label: { en: "Contact / Parish Affiliation", ml: "ബന്ധം / ഇടവകാ ബന്ധം" },
      value: {
        en: "Serving the spiritual flock under the ecclesiastical jurisdiction of the Thumpamon Diocese.",
        ml: "തുമ്പമൺ ഭദ്രാസനത്തിന്റെ ആത്മീയ അധികാരപരിധിയിൽ വിശ്വാസികളെ ശുശ്രൂഷിക്കുന്നു.",
      },
    },
  ],
};

export const metropolitan: Person = {
  name: "H.G. Dr. Abraham Mar Seraphim",
  role: { en: "Metropolitan of Thumpamon Diocese", ml: "തുമ്പമൺ ഭദ്രാസന മെത്രാപ്പോലീത്ത" },
  photo: "/people/abraham-mar-seraphim.jpg",
  bio: {
    en: "Karoor Palli is under the pastoral care of H.G. Dr. Abraham Mar Seraphim, Metropolitan of the Thumpamon Diocese of the Malankara Orthodox Syrian Church.\n\n**Dr. Abraham Mar Seraphim Metropolitan** is a prominent bishop of the Malankara Orthodox Syrian Church (Indian Orthodox Church). He serves as the **Metropolitan of the Thumpamon Diocese** (having taken charge as its diocesan metropolitan).\n\nBorn on December 28, 1969, to Mr. V. A. Mathews and Mrs. Annie Mathews, he belongs to St. George Valiyapally in Eram within the Thumpamon Diocese. He holds an extensive academic and theological background, including a Bachelor of Science from Mahatma Gandhi University, a Bachelor of Divinity from the Orthodox Theological Seminary in Kottayam, a Master of Theology from Dharmaram College in Bangalore, and a Doctor of Theology from the Chicago Theological Seminary.\n\nBefore taking charge of the Thumpamon Diocese, he served as the Metropolitan of the Bangalore Diocese starting in August 2010. Alongside his diocesan responsibilities, he has dedicated his ministry to youth leadership, spiritual formation, and counseling, serving in central church roles such as the President of the Mar Gregorios Orthodox Christian Movement (MGOCSM) and ARDRA, as well as being the former director of the Santhinilayam Counselling Centre.",
    ml: "കാരൂർ പള്ളി മലങ്കര ഓർത്തഡോക്സ് സുറിയാനി സഭയുടെ തുമ്പമൺ ഭദ്രാസന മെത്രാപ്പോലീത്ത ഹി.ഗി. ഡോ. ഏബ്രഹാം മാർ സെറാഫിമിന്റെ ആത്മീയ മേൽനോട്ടത്തിലാണ്.\n\n**ഡോ. ഏബ്രഹാം മാർ സെറാഫിം മെത്രാപ്പോലീത്ത** മലങ്കര ഓർത്തഡോക്സ് സുറിയാനി സഭയിലെ (ഇന്ത്യൻ ഓർത്തഡോക്സ് സഭ) പ്രമുഖ മെത്രാനാണ്. അദ്ദേഹം **തുമ്പമൺ ഭദ്രാസന മെത്രാപ്പോലീത്ത**യായി ചുമതലയേറ്റ് സേവനം ചെയ്യുന്നു.\n\n1969 ഡിസംബർ 28-ന് ശ്രീ വി. എ. മാത്യൂസിന്റെയും ശ്രീമതി ആനി മാത്യൂസിന്റെയും മകനായി ജനിച്ച അദ്ദേഹം തുമ്പമൺ ഭദ്രാസനത്തിലെ ഇറം സെന്റ് ജോർജ് വലിയപള്ളി അംഗമാണ്. മഹാത്മാഗാന്ധി സർവകലാശാലയിൽ നിന്ന് ബാച്ചിലർ ഓഫ് സയൻസ്, കോട്ടയം ഓർത്തഡോക്സ് തിയോളജിക്കൽ സെമിനാരിയിൽ നിന്ന് ബാച്ചിലർ ഓഫ് ഡിവിനിറ്റി, ബെംഗളൂരു ധർമാരാം കോളേജിൽ നിന്ന് മാസ്റ്റർ ഓഫ് തിയോളജി, ഷിക്കാഗോ തിയോളജിക്കൽ സെമിനാരിയിൽ നിന്ന് ഡോക്ടർ ഓഫ് തിയോളജി എന്നിവ നേടിയിട്ടുണ്ട്.\n\nതുമ്പമൺ ഭദ്രാസനത്തിന്റെ ചുമതലയേൽക്കുന്നതിന് മുമ്പ് 2010 ആഗസ്റ്റ് മുതൽ ബെംഗളൂരു ഭദ്രാസന മെത്രാപ്പോലീത്തയായി സേവനമനുഷ്ഠിച്ചു. ഭദ്രാസന ഉത്തരവാദിത്തങ്ങൾക്കൊപ്പം യുവജന നേതൃത്വം, ആത്മീയ രൂപീകരണം, കൗൺസിലിംഗ് എന്നിവയ്ക്കായി ശുശ്രൂഷ സമർപ്പിച്ചിട്ടുണ്ട്. മാർ ഗ്രിഗോറിയോസ് ഓർത്തഡോക്സ് ക്രിസ്ത്യൻ മൂവ്‌മെന്റിന്റെയും (എം.ജി.ഒ.സി.എസ്.എം.) ആർ.ഡി.ആർ.എ.യുടെയും പ്രസിഡന്റ്, ശാന്തിനിലയം കൗൺസിലിംഗ് സെന്ററിന്റെ മുൻ ഡയറക്ടർ എന്നീ കേന്ദ്ര സഭാ ശുശ്രൂഷകളും വഹിച്ചിട്ടുണ്ട്.",
  },
};

export const catholicos: Person = {
  name: "H.H. Baselios Marthoma Mathews III",
  role: {
    en: "The Ninth Catholicos of the East in Malankara",
    ml: "മലങ്കരയിലെ ഒൻപതാമത്തെ പൗരസ്ത്യ കാതോലിക്കോസ്",
  },
  photo: "/people/baselios-marthoma-mathews-iii.jpg",
  bio: {
    en: "His Holiness Baselios Marthoma Mathews III was enthroned as the Catholicos of the East & Malankara Metropolitan (the Supreme Head of the Malankara Orthodox Syrian Church of India) on Friday, 15th October 2021. His Holiness is the 92nd Primate on the Apostolic Throne of St. Thomas.\n\nHis Holiness was born on 12 February 1949 to Mr Cherian Anthrayos of Mattathil family, being a member of St Peters Church, Vazhoor. After his school education, he joined Kerala University and passed his BSc Chemistry. After his BSc, he joined Orthodox Seminary, Kottayam, and had his GST degree. His Holiness took his BD degree from the Serampore University and did his higher studies in Theology at Theological Academy, Leningrad, Russia. Thereupon he joined Oriental Institute, Rome, and took his MTh and PhD from there. His Holiness was ordained a deacon in 1976 and a priest in 1978 by HH Baselios Mathews I. His Holiness was escalated to the post of an Episcopa on 30 April 1991 at a function at Parumala, and metropolitan in 1993. He is a well-known teacher and a faculty member of the Orthodox Seminary, Kottayam. A philanthropist, he works relentlessly for the uplift of the poor, especially women. He has started many ventures to help give employment opportunities to women from the economically backward classes. His Holiness also served the Holy Episcopal Synod as its secretary.\n\nHis Holiness has authored a few devotional and contemplative books in Malayalam.",
    ml: "ഹി.ഹി. ബസേലിയോസ് മാർത്തോമ്മ മാത്യൂസ് തൃതീയൻ 2021 ഒക്ടോബർ 15 വെള്ളിയാഴ്ച പൗരസ്ത്യ കാതോലിക്കോസും മലങ്കര മെത്രാപ്പോലീത്തയുമായി (ഇന്ത്യയിലെ മലങ്കര ഓർത്തഡോക്സ് സുറിയാനി സഭയുടെ പരമാധ്യക്ഷൻ) അധിരൂഢനായി. വിശുദ്ധ തോമസിന്റെ അപ്പോസ്തോലിക സിംഹാസനത്തിലെ 92-ാമത്തെ പ്രഥമനാണ് അദ്ദേഹം.\n\n1949 ഫെബ്രുവരി 12-ന് വാഴൂർ സെന്റ് പീറ്റേഴ്‌സ് പള്ളി അംഗമായ മറ്റത്തിൽ കുടുംബത്തിലെ ശ്രീ ചെറിയാൻ ആന്ത്രയോസിന്റെ മകനായി ജനിച്ചു. സ്കൂൾ വിദ്യാഭ്യാസത്തിനു ശേഷം കേരള സർവകലാശാലയിൽ ചേർന്ന് ബി.എസ്.സി. കെമിസ്ട്രി പാസായി. തുടർന്ന് കോട്ടയം ഓർത്തഡോക്സ് സെമിനാരിയിൽ ചേർന്ന് ജി.എസ്.ടി. ബിരുദം നേടി. സെറാമ്പൂർ സർവകലാശാലയിൽ നിന്ന് ബി.ഡി. നേടുകയും റഷ്യയിലെ ലെനിൻഗ്രാഡ് തിയോളജിക്കൽ അക്കാദമിയിൽ ഉപരിപഠനം നടത്തുകയും ചെയ്തു. പിന്നീട് റോമിലെ ഓറിയന്റൽ ഇൻസ്റ്റിറ്റ്യൂട്ടിൽ ചേർന്ന് എം.തി.യും പി.എച്ച്.ഡി.യും നേടി. 1976-ൽ ഡീക്കനായും 1978-ൽ വൈദികനായും ഹി.ഹി. ബസേലിയോസ് മാത്യൂസ് ഒന്നാമൻ അഭിഷേകം ചെയ്തു. 1991 ഏപ്രിൽ 30-ന് പരുമലയിൽ നടന്ന ചടങ്ങിൽ എപ്പിസ്കോപ്പായും 1993-ൽ മെത്രാപ്പോലീത്തയായും ഉയർത്തപ്പെട്ടു. കോട്ടയം ഓർത്തഡോക്സ് സെമിനാരിയിലെ അറിയപ്പെടുന്ന അധ്യാപകനും ഫാക്കൽറ്റി അംഗവുമാണ്. ദരിദ്രരുടെ, പ്രത്യേകിച്ച് സ്ത്രീകളുടെ, ഉന്നമനത്തിനായി അശ്രാന്തം പ്രവർത്തിക്കുന്ന ജനസേവകനാണ്. സാമ്പത്തികമായി പിന്നോക്ക വിഭാഗങ്ങളിലെ സ്ത്രീകൾക്ക് തൊഴിൽ അവസരങ്ങൾ നൽകാൻ നിരവധി സംരംഭങ്ങൾ ആരംഭിച്ചിട്ടുണ്ട്. വിശുദ്ധ എപ്പിസ്കോപ്പൽ സുന്നഹദോസിന്റെ സെക്രട്ടറിയായും സേവനമനുഷ്ഠിച്ചിട്ടുണ്ട്.\n\nമലയാളത്തിൽ ഏതാനും ഭക്തിപരവും ധ്യാനാത്മകവുമായ പുസ്തകങ്ങൾ രചിച്ചിട്ടുണ്ട്.",
  },
};

export const officers: Person[] = [
  {
    name: "Mr. Biju M Thomas",
    role: { en: "Parish Trustee", ml: "ഇടവകാ ട്രസ്റ്റി" },
    photo: "/people/biju-thomas.jpg",
    phone: "94468 12130",
    email: "trustee@karoorpally.com",
    bio: { en: "Parish Trustee of St. Peter's Orthodox Church, Karoor.", ml: "സെന്റ് പീറ്റേഴ്‌സ് ഓർത്തഡോക്സ് പള്ളി, കാരൂരിന്റെ ഇടവകാ ട്രസ്റ്റി." },
  },
  {
    name: "Mr. Joseph T Eapen",
    role: { en: "Secretary", ml: "സെക്രട്ടറി" },
    photo: "",
    phone: "92072 46186",
    email: "secretary@karoorpally.com",
    bio: { en: "Secretary of St. Peter's Orthodox Church, Karoor.", ml: "സെന്റ് പീറ്റേഴ്‌സ് ഓർത്തഡോക്സ് പള്ളി, കാരൂരിന്റെ സെക്രട്ടറി." },
  },
];

export const news: NewsItem[] = [
  {
    slug: "peters-hand-lucky-draw",
    category: { en: "Peter's Hand", ml: "പത്രോസിന്റെ കൈ" },
    title: { en: "Peter’s Hand lucky draw coupon", ml: "Peter’s Hand - Lucky draw coupon" },
    excerpt: {
      en: "As part of its fundraising efforts to expand this year’s charitable activities and extend support to more deserving individuals, Peter’s Hand has launched a lucky draw coupon.",
      ml: "പീറ്റേഴ്സ് ഹാൻഡ്ൻ്റെ ഈ  വർഷത്തെ ജീവകാരുണ്യ പ്രവർത്തനങ്ങൾ കൂടുതൽ വിപുലമാക്കുന്നതിനും കൂടുതൽ അർഹരായ ആളുകളിലേക്ക് സഹായം എത്തിക്കുന്നതിനുമായി ഫണ്ട് സമാഹരണത്തിന്റെ ഭാഗമായി ലക്കി ഡ്രോ കൂപ്പൺ പുറത്തിറക്കി.",
    },
    date: "2026-11-08",
    image: "/news/peters-hand-lucky-draw.jpg",
  },
  {
    slug: "parish-day-announcement",
    category: { en: "Feast", ml: "തിരുനാൾ" },
    title: { en: "Parish Day and St. Peter’s feast programme", ml: "ഇടവകാ ദിനവും പത്രോസ് തിരുനാൾ പരിപാടിയും" },
    excerpt: {
      en: "Holy Qurbana, procession and a community meal. Volunteers may register with the Secretary.",
      ml: "വിശുദ്ധ കുർബാന, പ്രദക്ഷിണം, സ്നേഹവിരുന്ന്. സന്നദ്ധപ്രവർത്തകർ സെക്രട്ടറിയെ ബന്ധപ്പെടുക.",
    },
    date: "2026-06-12",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "sunday-school-exam",
    category: { en: "Sunday School", ml: "സൺഡേ സ്കൂൾ" },
    title: { en: "OVBS and annual examination dates", ml: "ഒ.വി.ബി.എസ്.യും വാർഷിക പരീക്ഷയും" },
    excerpt: {
      en: "Parents are requested to collect the circular from Downloads.",
      ml: "രക്ഷിതാക്കൾ ഡൗൺലോഡുകളിൽ നിന്ന് കൽപ്പന ശേഖരിക്കുക.",
    },
    date: "2026-04-02",
    image:
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "charity-drive",
    category: { en: "Charity", ml: "ദാനധർമ്മം" },
    title: { en: "Onam kit distribution for neighbouring families", ml: "അയൽക്കാർക്ക് ഓണക്കിറ്റ് വിതരണം" },
    excerpt: {
      en: "Martha Mariam Samajam leads the collection. NRI families may give through Online Offerings.",
      ml: "മാർത്താ മറിയം സമാജമാണ് ശേഖരണം നയിക്കുന്നത്. എൻ.ആർ.ഐ. കുടുംബങ്ങൾക്ക് ഓൺലൈൻ വഴിപാട് ഉപയോഗിക്കാം.",
    },
    date: "2026-08-18",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
  },
];

export const events: ParishEvent[] = [
  {
    slug: "parumala-feast-evening-prayer",
    title: {
      en: "Feast of St. Gregorios of Parumala — Evening prayer",
      ml: "പരിശുദ്ധ പരുമല തിരുമേനിയുടെ ഓർമ്മപ്പെരുന്നാൾ — സന്ധ്യാനമസ്കാരം",
    },
    date: "2026-11-07",
    time: { en: "6:00 PM", ml: "വൈകിട്ട് 6:00" },
    place: { en: "Karoor Palli", ml: "കാരൂർ പള്ളി" },
    excerpt: {
      en: "Evening prayer at 6:00 PM, led by Rev. Fr. Gregorios Kurisumoottil and Ulahannoor Markose Joseph.",
      ml: "വൈകിട്ട് 6:00 ന് സന്ധ്യാനമസ്കാരം. വെറ. ഗ്രിഗോറിയോസ് കുരിശുമൂട്ടിൽ, ഉലഹന്നൂർ മാർക്കോസ് ജോസഫ്.",
    },
    image: "/events/parumala-feast.jpg",
  },
  {
    slug: "parumala-feast-holy-qurbana",
    title: {
      en: "Feast of St. Gregorios of Parumala — Holy Qurbana",
      ml: "പരിശുദ്ധ പരുമല തിരുമേനിയുടെ ഓർമ്മപ്പെരുന്നാൾ — വിശുദ്ധ കുർബാന",
    },
    date: "2026-11-08",
    time: { en: "7:00 AM", ml: "രാവിലെ 7:00" },
    place: { en: "Karoor Palli", ml: "കാരൂർ പള്ളി" },
    excerpt: {
      en: "Morning prayer and Holy Qurbana at 7:00 AM, followed by procession, blessing, and nercha vilamb.",
      ml: "രാവിലെ 7:00 ന് പ്രഭാതനമസ്കാരവും വിശുദ്ധ കുർബാനയും. പ്രദക്ഷിണം, ആശിർവാദം, നേർച്ച വിളമ്പ്.",
    },
    image: "/events/parumala-feast.jpg",
  },
  {
    slug: "prayer-meeting",
    title: { en: "Prayer meeting", ml: "പ്രാർത്ഥനായോഗം" },
    date: "2026-11-08",
    time: { en: "After Holy Qurbana", ml: "വിശുദ്ധ കുർബാനയ്ക്ക് ശേഷം" },
    place: { en: "Karoor Palli", ml: "കാരൂർ പള്ളി" },
    excerpt: {
      en: "A prayer meeting for the families of the parish, held in church after Holy Qurbana. All members are cordially informed.",
      ml: "നമ്മുടെ ഇടവകയിലെ പ്രാർത്ഥനായോഗം. വിശുദ്ധ കുർബാനയ്ക്ക് ശേഷം പള്ളിയിൽ വച്ച് നടത്തുന്നതാണ്. എല്ലാ അംഗങ്ങളും സ്നേഹപൂർവ്വം അറിയിക്കുന്നു.",
    },
    image: "/events/prayer-meeting.jpg",
  },
  {
    slug: "holy-qurbana-sunday",
    title: { en: "Sunday Holy Qurbana", ml: "ഞായറാഴ്ച വിശുദ്ധ കുർബാന" },
    date: "2026-11-01",
    time: { en: "7:00 AM", ml: "7:00 AM" },
    place: { en: "Main church", ml: "മുഖ്യ ദേവാലയം" },
    excerpt: { en: "Divine Liturgy followed by Sunday School.", ml: "ദിവ്യബലിക്കു ശേഷം സൺഡേ സ്കൂൾ." },
  },
  {
    slug: "ocym-meeting",
    title: { en: "OCYM monthly gathering", ml: "ഒ.സി.വൈ.എം. മാസയോഗം" },
    date: "2026-11-08",
    time: { en: "4:00 PM", ml: "4:00 PM" },
    place: { en: "Parish hall", ml: "പള്ളി ഹാൾ" },
    excerpt: { en: "Prayer, study and planning for Christmas carol rounds.", ml: "പ്രാർത്ഥന, പഠനം, ക്രിസ്മസ് കാരൽ ആസൂത്രണം." },
  },
  {
    slug: "house-blessing",
    title: { en: "House blessing — Karoor East", ml: "ഭവനാശീർവാദം — കാരൂർ ഈസ്റ്റ്" },
    date: "2026-11-15",
    time: { en: "From 9:00 AM", ml: "9:00 AM മുതൽ" },
    place: { en: "Prayer unit 3", ml: "പ്രാർത്ഥനാ യൂണിറ്റ് 3" },
    excerpt: { en: "Please keep the home ready and inform the Vicar of any special needs.", ml: "വീട് ഒരുക്കി പ്രത്യേക ആവശ്യങ്ങൾ വികാരിയെ അറിയിക്കുക." },
  },
];

export const liturgical = {
  today: {
    en: "Thursday — Fast of the Apostles (placeholder liturgical day)",
    ml: "വ്യാഴം — ശ്ലീഹന്മാരുടെ നോമ്പ് (പ്ലേസ്‌ഹോൾഡർ)",
  },
  upcoming: [
    { date: "Nov 1", title: { en: "Sunday of the Dedication", ml: "കൂദാശാ ഞായർ" } },
    { date: "Nov 8", title: { en: "Synaxis of the Archangels", ml: "മാലാഖമാരുടെ സംഘം" } },
    { date: "Dec 25", title: { en: "Nativity of our Lord", ml: "മശിഹായുടെ ജനനം" } },
    { date: "Jun 29", title: { en: "Feast of St. Peter", ml: "വിശുദ്ധ പത്രോസിന്റെ തിരുനാൾ" } },
  ],
};

export const verse = {
  text: {
    en: "Lord, you know that I love you. Feed my sheep.",
    ml: "കർത്താവേ, ഞാൻ അങ്ങയെ സ്നേഹിക്കുന്നു എന്ന് അങ്ങയ്ക്കറിയാമല്ലോ. എന്റെ ആടുകളെ മേയിക്കുക.",
  },
  ref: { en: "John 21:17", ml: "യോഹന്നാൻ 21:17" },
};

export const organisations: Organisation[] = [
  {
    slug: "sunday-school",
    name: { en: "Sunday School", ml: "സൺഡേ സ്കൂൾ" },
    summary: {
      en: "The Orthodox Syrian Sunday School Association of the East (OSSAE) nurtures children and youth in the faith, traditions and liturgical life of the Church.",
      ml: "ഓർത്തഡോക്സ് സിറിയൻ സൺഡേ സ്കൂൾ അസോസിയേഷൻ ഓഫ് ദി ഈസ്റ്റ് (ഒ.എസ്.എസ്.എ.ഇ.) കുട്ടികളെയും യുവജനങ്ങളെയും വിശ്വാസത്തിലും പാരമ്പര്യങ്ങളിലും ആരാധനാക്രമ ജീവിതത്തിലും വളർത്തുന്നു.",
    },
    meeting: { en: "Sundays 9:30 AM", ml: "ഞായറാഴ്ച 9:30 AM" },
    lead: {
      en: "The Orthodox Syrian Sunday School Association of the East (OSSAE) is the official spiritual and educational wing of the Malankara Orthodox Syrian Church. Established with the vision of nurturing children and youth in the true faith, traditions, and liturgical life of the church, it plays a vital role in shaping the spiritual foundation of the younger generation.",
      ml: "ഓർത്തഡോക്സ് സിറിയൻ സൺഡേ സ്കൂൾ അസോസിയേഷൻ ഓഫ് ദി ഈസ്റ്റ് (ഒ.എസ്.എസ്.എ.ഇ.) മലങ്കര ഓർത്തഡോക്സ് സുറിയാനി സഭയുടെ ഔദ്യോഗിക ആത്മീയവും വിദ്യാഭ്യാസപരവുമായ വിഭാഗമാണ്. കുട്ടികളെയും യുവജനങ്ങളെയും യഥാർത്ഥ വിശ്വാസത്തിലും പാരമ്പര്യങ്ങളിലും സഭയുടെ ആരാധനാക്രമ ജീവിതത്തിലും വളർത്തുക എന്ന ദർശനത്തോടെ സ്ഥാപിതമായ ഇത് യുവതലമുറയുടെ ആത്മീയ അടിത്തറ രൂപപ്പെടുത്തുന്നതിൽ നിർണായക പങ്ക് വഹിക്കുന്നു.",
    },
    sections: [
      {
        heading: { en: "1. History and Vision", ml: "1. ചരിത്രവും ദർശനവും" },
        points: [
          {
            label: { en: "Foundation", ml: "അടിത്തറ" },
            text: {
              en: "Recognizing the urgent need to impart biblical knowledge and church heritage to the youth, the Sunday School movement was officially organized under the guidance of the Holy Episcopal Synod of the Malankara Church. Over the decades, it has grown into one of the largest structured religious education networks in India and across the global diaspora.",
              ml: "ബൈബിൾ അറിവും സഭാ പൈതൃകവും യുവജനങ്ങൾക്ക് പകർന്നുനൽകേണ്ട അടിയന്തര ആവശ്യം തിരിച്ചറിഞ്ഞ്, മലങ്കര സഭയുടെ വിശുദ്ധ എപ്പിസ്കോപ്പൽ സുന്നഹദോസിന്റെ മാർഗനിർദേശത്തിൽ സൺഡേ സ്കൂൾ പ്രസ്ഥാനം ഔദ്യോഗികമായി സംഘടിപ്പിക്കപ്പെട്ടു. പതിറ്റാണ്ടുകളായി ഇന്ത്യയിലും ലോകമെമ്പാടുമുള്ള പ്രവാസ സമൂഹങ്ങളിലും ഏറ്റവും വലിയ ക്രമീകൃത മതവിദ്യാഭ്യാസ ശൃംഖലകളിലൊന്നായി അത് വളർന്നു.",
            },
          },
          {
            label: { en: "Motto", ml: "മുദ്രാവാക്യം" },
            text: {
              en: "The overarching vision of OSSAE is encapsulated in guiding children to grow in “Wisdom, Stature, and in favor with God and man” (following the pattern of our Lord Jesus Christ in Luke 2:52).",
              ml: "“ജ്ഞാനത്തിലും പ്രായത്തിലും ദൈവത്തിന്റെയും മനുഷ്യരുടെയും പ്രീതിയിലും” വളരാൻ കുട്ടികളെ നയിക്കുക എന്നതാണ് ഒ.എസ്.എസ്.എ.ഇ.യുടെ ദർശനം (ലൂക്കോസ് 2:52-ൽ നമ്മുടെ കർത്താവായ യേശുക്രിസ്തുവിന്റെ മാതൃക അനുസരിച്ച്).",
            },
          },
        ],
      },
      {
        heading: { en: "2. Curriculum and Educational Structure", ml: "2. പാഠ്യപദ്ധതിയും വിദ്യാഭ്യാസ ഘടനയും" },
        intro: {
          en: "OSSAE provides a comprehensive syllabus tailored to different age groups, from kindergarten through higher secondary levels:",
          ml: "കിന്റർഗാർട്ടൻ മുതൽ ഹയർ സെക്കൻഡറി വരെയുള്ള പ്രായക്കാർക്ക് അനുയോജ്യമായ സമഗ്ര പാഠ്യപദ്ധതി ഒ.എസ്.എസ്.എ.ഇ. നൽകുന്നു:",
        },
        points: [
          {
            label: { en: "Textbooks & Syllabus", ml: "പാഠപുസ്തകങ്ങളും പാഠ്യപദ്ധതിയും" },
            text: {
              en: "The curriculum covers a wide range of subjects, including Holy Bible studies (Old and New Testaments), Church History, Dogma and Theology, the Orthodox Badarakam (Sacraments), Liturgy, and Christian Ethics.",
              ml: "വിശുദ്ധ ബൈബിൾ പഠനം (പഴയ നിയമവും പുതിയ നിയമവും), സഭാ ചരിത്രം, വിശ്വാസസിദ്ധാന്തവും ദൈവശാസ്ത്രവും, ഓർത്തഡോക്സ് കൂദാശകൾ, ആരാധനാക്രമം, ക്രൈസ്തവ നൈതികത എന്നിവ പാഠ്യപദ്ധതിയിൽ ഉൾപ്പെടുന്നു.",
            },
          },
          {
            label: { en: "Examinations", ml: "പരീക്ഷകൾ" },
            text: {
              en: "To encourage diligent study, the central association conducts standardized annual examinations at diocesan and general (parish-wide) levels. High-achieving students are recognized at the diocesan and central levels.",
              ml: "ശ്രദ്ധയോടെയുള്ള പഠനം പ്രോത്സാഹിപ്പിക്കാൻ കേന്ദ്ര അസോസിയേഷൻ ഭദ്രാസന തലത്തിലും പൊതു (ഇടവകാ) തലത്തിലും ഏകീകൃത വാർഷിക പരീക്ഷകൾ നടത്തുന്നു. ഉയർന്ന നേട്ടം കൈവരിക്കുന്ന വിദ്യാർത്ഥികളെ ഭദ്രാസന തലത്തിലും കേന്ദ്ര തലത്തിലും അംഗീകരിക്കുന്നു.",
            },
          },
          {
            label: { en: "Teacher Training", ml: "അധ്യാപക പരിശീലനം" },
            text: {
              en: "Sunday school teachers (often referred to as Sunday school masters and mistresses) undergo spiritual training, retreats, and pedagogical workshops organized by diocesan Sunday School bodies to ensure sound teaching.",
              ml: "സൺഡേ സ്കൂൾ അധ്യാപകർ ഭദ്രാസന സൺഡേ സ്കൂൾ സമിതികൾ സംഘടിപ്പിക്കുന്ന ആത്മീയ പരിശീലനം, ധ്യാനയോഗങ്ങൾ, അധ്യാപന ശിൽപശാലകൾ എന്നിവയിൽ പങ്കെടുക്കുന്നു.",
            },
          },
        ],
      },
      {
        heading: { en: "3. Key Activities and Youth Engagement", ml: "3. പ്രധാന പ്രവർത്തനങ്ങളും യുവജന പങ്കാളിത്തവും" },
        intro: {
          en: "Beyond regular Sunday classes held right after or before the Holy Qurbana, OSSAE fosters community and spiritual growth through:",
          ml: "വിശുദ്ധ കുർബാനയ്ക്ക് ശേഷമോ മുമ്പോ നടക്കുന്ന ഞായറാഴ്ച ക്ലാസുകൾക്കപ്പുറം, ഒ.എസ്.എസ്.എ.ഇ. ഇവയിലൂടെ കൂട്ടായ്മയും ആത്മീയ വളർച്ചയും വളർത്തുന്നു:",
        },
        points: [
          {
            label: { en: "Annual Competitions", ml: "വാർഷിക മത്സരങ്ങൾ" },
            text: {
              en: "Diocesan and regional art and literary competitions—such as Bible recitation, elocution, singing (church hymns), quiz competitions, and essay writing—encourage active participation among students.",
              ml: "ബൈബിൾ ഓർത്തുചൊല്ലൽ, പ്രസംഗം, ഗാനം (സഭാ ഗീതങ്ങൾ), ക്വിസ്, ഉപന്യാസം എന്നിവയുൾപ്പെടെയുള്ള ഭദ്രാസന-പ്രാദേശിക കലാ-സാഹിത്യ മത്സരങ്ങൾ വിദ്യാർത്ഥികളുടെ സജീവ പങ്കാളിത്തം പ്രോത്സാഹിപ്പിക്കുന്നു.",
            },
          },
          {
            label: { en: "Youth Camps and Retreats", ml: "യുവജന ക്യാമ്പുകളും ധ്യാനയോഗങ്ങളും" },
            text: {
              en: "Spiritual camps, Orthodox Vacation Bible schools (OVBS), and leadership seminars are organized regularly to help youth build personal prayer lives, fellowship, and a deeper attachment to the church's sacraments.",
              ml: "ആത്മീയ ക്യാമ്പുകൾ, ഓർത്തഡോക്സ് വെക്കേഷൻ ബൈബിൾ സ്കൂൾ (ഒ.വി.ബി.എസ്.), നേതൃത്വ സെമിനാറുകൾ എന്നിവ യുവജനങ്ങൾക്ക് വ്യക്തിഗത പ്രാർത്ഥനാ ജീവിതവും കൂട്ടായ്മയും കൂദാശകളോടുള്ള ആഴമേറിയ ബന്ധവും വളർത്താൻ സഹായിക്കുന്നു.",
            },
          },
        ],
      },
    ],
    note: {
      en: "Mr. Saji Ninan is serving as the Head Master of our unit. More than 30 teaching and non-teaching staff work for the Sunday School.",
      ml: "ശ്രീ സാജി നിനാൻ നമ്മുടെ യൂണിറ്റിന്റെ ഹെഡ് മാസ്റ്ററായി സേവനം ചെയ്യുന്നു. 30-ലധികം അധ്യാപകരും അനധ്യാപകരുമായ ജീവനക്കാർ സൺഡേ സ്കൂളിനായി പ്രവർത്തിക്കുന്നു.",
    },
  },
  {
    slug: "balika-bala-samajam",
    name: { en: "Balika Bala Samajam", ml: "ബാലികാ ബാല സമാജം" },
    summary: {
      en: "The children’s and student wing of the Church, nurturing faith and character from ages 5 to 15.",
      ml: "5 മുതൽ 15 വയസ്സുവരെയുള്ള കുട്ടികളുടെ വിശ്വാസവും സ്വഭാവവും വളർത്തുന്ന സഭയുടെ ബാലവിഭാഗം.",
    },
    lead: {
      en: "The Akhila Malankara Balika Bala Samajam (commonly known as Bala Samajam) is the official children's and student wing of the Malankara Orthodox Syrian Church. It is a foundational spiritual organization designed to nurture the faith and character of the youngest members of the church community.",
      ml: "അഖില മലങ്കര ബാലികാ ബാല സമാജം (സാധാരണയായി ബാല സമാജം എന്നറിയപ്പെടുന്നു) മലങ്കര ഓർത്തഡോക്സ് സുറിയാനി സഭയുടെ കുട്ടികളുടെയും വിദ്യാർത്ഥികളുടെയും ഔദ്യോഗിക വിഭാഗമാണ്. സഭാ സമൂഹത്തിലെ ഏറ്റവും ഇളയ അംഗങ്ങളുടെ വിശ്വാസവും സ്വഭാവവും വളർത്തുന്ന അടിസ്ഥാന ആത്മീയ സംഘടനയാണിത്.",
    },
    sections: [
      {
        heading: { en: "Core Overview", ml: "പ്രധാന അവലോകനം" },
        points: [
          {
            label: { en: "Target Audience", ml: "ലക്ഷ്യസമൂഹം" },
            text: {
              en: "The organization serves young boys and girls, typically between the ages of 5 and 15.",
              ml: "സാധാരണയായി 5 മുതൽ 15 വയസ്സുവരെയുള്ള ആൺകുട്ടികളെയും പെൺകുട്ടികളെയും ഈ സംഘടന സേവിക്കുന്നു.",
            },
          },
          {
            label: { en: "Core Philosophy", ml: "മുഖ്യ ദർശനം" },
            text: {
              en: "Much like the OCYM, its main objectives revolve around Worship, Study, and Virtuous Life (or Service). It strives for the integrated, all-round personality development of children.",
              ml: "ഒ.സി.വൈ.എമ്മിനെപ്പോലെ ആരാധന, പഠനം, സദാചാര ജീവിതം (അഥവാ സേവനം) എന്നിവയാണ് ഇതിന്റെ പ്രധാന ലക്ഷ്യങ്ങൾ. കുട്ടികളുടെ സമഗ്രമായ വ്യക്തിത്വ വികസനമാണ് ലക്ഷ്യം.",
            },
          },
          {
            label: { en: "History", ml: "ചരിത്രം" },
            text: {
              en: "While local units existed prior, the organization was formally structured on an all-Malankara (church-wide) basis in 1982.",
              ml: "പ്രാദേശിക യൂണിറ്റുകൾ മുമ്പുണ്ടായിരുന്നെങ്കിലും 1982-ൽ അഖില മലങ്കര (സഭാമൊത്തം) അടിസ്ഥാനത്തിൽ ഈ സംഘടന ഔപചാരികമായി രൂപീകരിച്ചു.",
            },
          },
        ],
      },
      {
        heading: { en: "Key Activities & Focus Areas", ml: "പ്രധാന പ്രവർത്തനങ്ങളും ശ്രദ്ധാകേന്ദ്രങ്ങളും" },
        points: [
          {
            label: { en: "Spiritual Learning", ml: "ആത്മീയ പഠനം" },
            text: {
              en: "Children are encouraged to deeply study the Holy Bible, as well as the unique traditions, liturgy, and history of the Orthodox Church alongside their standard academic schooling.",
              ml: "പാഠ്യപദ്ധതിയോടൊപ്പം വിശുദ്ധ ബൈബിളും ഓർത്തഡോക്സ് സഭയുടെ പ്രത്യേക പാരമ്പര്യങ്ങളും ആരാധനാക്രമവും ചരിത്രവും ആഴത്തിൽ പഠിക്കാൻ കുട്ടികളെ പ്രോത്സാഹിപ്പിക്കുന്നു.",
            },
          },
          {
            label: { en: "Moral Grounding", ml: "ധാർമ്മിക അടിത്തറ" },
            text: {
              en: "The Samajam presents the life stories and histories of Church Saints to help children cultivate spiritual habits, simplicity, prayer, and moral responsibility.",
              ml: "ആത്മീയ ശീലങ്ങൾ, ലാളിത്യം, പ്രാർത്ഥന, ധാർമ്മിക ഉത്തരവാദിത്തം എന്നിവ വളർത്താൻ സഭാ പുണ്യവാളന്മാരുടെ ജീവിതവും ചരിത്രവും സമാജം അവതരിപ്പിക്കുന്നു.",
            },
          },
          {
            label: { en: "Parish Engagement", ml: "ഇടവകാ പങ്കാളിത്തം" },
            text: {
              en: "Local parish units host regular meetings featuring Bible readings, devotional singing, short speeches, and quizzes. Many units form dedicated Bala Samajam Choirs to actively participate in the Holy Qurbana and church functions.",
              ml: "ബൈബിൾ വായന, ഭക്തിഗാനം, ഹ്രസ്വ പ്രസംഗങ്ങൾ, ക്വിസുകൾ എന്നിവയുള്ള യോഗങ്ങൾ പ്രാദേശിക ഇടവകാ യൂണിറ്റുകൾ പതിവായി നടത്തുന്നു. വിശുദ്ധ കുർബാനയിലും സഭാ പരിപാടികളിലും സജീവമായി പങ്കെടുക്കാൻ പല യൂണിറ്റുകളും പ്രത്യേക ബാല സമാജം ഗായകസംഘങ്ങൾ രൂപീകരിക്കുന്നു.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "peters-hand",
    name: { en: "Peter's Hand", ml: "പത്രോസിന്റെ കൈ" },
    summary: {
      en: "The parish charity that offers medical help, family support and educational aid.",
      ml: "രോഗികൾക്കും കുടുംബങ്ങൾക്കും വിദ്യാർത്ഥികൾക്കും സഹായം നൽകുന്ന ഇടവകാ ദാനധർമ്മം.",
    },
    lead: {
      en: "Peter’s Hand has been at the forefront of our parish's charitable initiatives for many years, serving as a beacon of hope and compassion.\n\nThrough our continuous efforts, we extend a helping hand to those in need—providing critical medical assistance to underprivileged patients, financial support to struggling families, and educational aid to deserving students.",
      ml: "പത്രോസിന്റെ കൈ വർഷങ്ങളായി നമ്മുടെ ഇടവകയുടെ ദാനധർമ്മ പ്രവർത്തനങ്ങളുടെ മുൻനിരയിലാണ്. പ്രത്യാശയുടെയും കരുണയുടെയും വിളക്കായി അത് നിലകൊള്ളുന്നു.\n\nതുടർച്ചയായ ശ്രമങ്ങളിലൂടെ ആവശ്യമുള്ളവർക്ക് ഞങ്ങൾ കൈനീട്ടുന്നു — ദരിദ്രരായ രോഗികൾക്ക് അത്യാവശ്യ വൈദ്യസഹായം, ബുദ്ധിമുട്ടുന്ന കുടുംബങ്ങൾക്ക് സാമ്പത്തിക സഹായം, അർഹരായ വിദ്യാർത്ഥികൾക്ക് വിദ്യാഭ്യാസ സഹായം.",
    },
    sections: [
      {
        heading: { en: "Office Bearers — 2026–27", ml: "ഭാരവാഹികൾ — 2026–27" },
        points: [
          {
            label: { en: "Vice President", ml: "വൈസ് പ്രസിഡന്റ്" },
            text: { en: "Mrs. Shibi Laji", ml: "ശ്രീമതി ഷിബി ലാജി" },
          },
          {
            label: { en: "Secretary", ml: "സെക്രട്ടറി" },
            text: { en: "Mrs. Sheenu Sunil", ml: "ശ്രീമതി ഷീനു സുനിൽ" },
          },
          {
            label: { en: "Joint Secretary", ml: "ജോയിന്റ് സെക്രട്ടറി" },
            text: { en: "Mrs. Biji Saji", ml: "ശ്രീമതി ബിജി സാജി" },
          },
          {
            label: { en: "Treasurer", ml: "ട്രഷറർ" },
            text: { en: "Mrs. Nisha Elizabeth Babu", ml: "ശ്രീമതി നിഷ എലിസബത്ത് ബാബു" },
          },
          {
            label: { en: "Auditor", ml: "ഓഡിറ്റർ" },
            text: { en: "Mrs. Achamma Shiju", ml: "ശ്രീമതി അച്ചാമ്മ ഷിജു" },
          },
        ],
      },
    ],
  },
  {
    slug: "martha-mariam",
    name: { en: "Martha Marthiyam Vanitha Samajam", ml: "മാർത്താ മാർത്തിയം വനിതാ സമാജം" },
    summary: {
      en: "The women’s wing of the Malankara Orthodox Syrian Church, founded in 1928 for the spiritual progress of women.",
      ml: "1928-ൽ സ്ത്രീകളുടെ ആത്മീയ പുരോഗതിക്കായി സ്ഥാപിതമായ മലങ്കര ഓർത്തഡോക്സ് സുറിയാനി സഭയുടെ വനിതാ വിഭാഗം.",
    },
    meeting: { en: "Every Saturday", ml: "എല്ലാ ശനിയാഴ്ചയും" },
    lead: {
      en: "Martha Mariam Samajam is the women’s wing of the Malankara Orthodox Syrian Church of India. It is one of the major spiritual organisations of the Church, bringing together all the women members. The organisation was founded in 1928 for the spiritual progress of women. The founders named it “Marth Mariam Samajam” after the Blessed Virgin Mary, whom they accepted as their interceding saint. H.G. Dr. Yuhanon Mar Diascoros Metropolitan is the current president.",
      ml: "മാർത്താ മറിയം സമാജം ഇന്ത്യയിലെ മലങ്കര ഓർത്തഡോക്സ് സുറിയാനി സഭയുടെ വനിതാ വിഭാഗമാണ്. സഭയിലെ സ്ത്രീ അംഗങ്ങളെ ഒന്നിപ്പിക്കുന്ന പ്രധാന ആത്മീയ സംഘടനകളിലൊന്നാണിത്. സ്ത്രീകളുടെ ആത്മീയ പുരോഗതിക്കായി 1928-ൽ സ്ഥാപിതമായി. മദ്ധ്യസ്ഥയായി സ്വീകരിച്ച പരിശുദ്ധ കന്യകാമറിയത്തിന്റെ നാമത്തിൽ സ്ഥാപകർ ഇതിന് “മാർത്ത് മറിയം സമാജം” എന്ന് പേരിട്ടു. ഹി.ഗി. ഡോ. യൂഹാനോൻ മാർ ദിയസ്കോറോസ് മെത്രാപ്പോലീത്ത ഇപ്പോഴത്തെ പ്രസിഡന്റാണ്.",
    },
    sections: [
      {
        heading: { en: "Motto", ml: "മുദ്രാവാക്യം" },
        intro: {
          en: "Prarthikkuka, Pravarthikkuka, Prakasikkuka.",
          ml: "പ്രാർത്ഥിക്കുക, പ്രവർത്തിക്കുക, പ്രകാശിക്കുക.",
        },
        points: [],
      },
      {
        heading: { en: "Office Bearers — 2026–27", ml: "ഭാരവാഹികൾ — 2026–27" },
        points: [
          {
            label: { en: "General Secretary", ml: "ജനറൽ സെക്രട്ടറി" },
            text: { en: "Mrs. Lovely Thomas, Valiathuparampil", ml: "ശ്രീമതി ലവ്ലി തോമസ്, വലിയതുപറമ്പിൽ" },
          },
          {
            label: { en: "Joint Secretary", ml: "ജോയിന്റ് സെക്രട്ടറി" },
            text: { en: "Mrs. Annamma Thomas, Alunilkunnathil", ml: "ശ്രീമതി അന്നമ്മ തോമസ്, ആലുനിൽക്കുന്നത്തിൽ" },
          },
        ],
      },
      {
        heading: { en: "Group secretaries", ml: "ഗ്രൂപ്പ് സെക്രട്ടറിമാർ" },
        points: [
          {
            label: { en: "Senai samajam", ml: "സേനായ് സമാജം" },
            text: { en: "Mrs. Annamma Juby, Pulpreth", ml: "ശ്രീമതി അന്നമ്മ ജൂബി, പുൽപ്രേത്ത്" },
          },
          {
            label: { en: "Bethel samajam", ml: "ബേഥേൽ സമാജം" },
            text: { en: "Mrs. Jiji James, Valiakochethu", ml: "ശ്രീമതി ജിജി ജെയിംസ്, വലിയകൊച്ചേത്ത്" },
          },
          {
            label: { en: "Gilayad samajam", ml: "ഗിലയാദ് സമാജം" },
            text: { en: "Mrs. Mariamma K.G, Plavunilkunnathil", ml: "ശ്രീമതി മറിയാമ്മ കെ.ജി., പ്ലാവുനിൽക്കുന്നത്തിൽ" },
          },
          {
            label: { en: "Bethlehem samajam", ml: "ബെത്‌ലഹേം സമാജം" },
            text: { en: "Mrs. Mariamma Thomas, Poovappallil", ml: "ശ്രീമതി മറിയാമ്മ തോമസ്, പൂവപ്പള്ളിൽ" },
          },
          {
            label: { en: "Carmel samajam", ml: "കർമ്മൽ സമാജം" },
            text: { en: "Mrs. Selin Anil, Cherukunnathu", ml: "ശ്രീമതി സെലിൻ അനിൽ, ചെറുകുന്നത്ത്" },
          },
          {
            label: { en: "Thabor samajam", ml: "താബോർ സമാജം" },
            text: { en: "Mrs. Rosamma Sunny, Pullonal", ml: "ശ്രീമതി റോസമ്മ സണ്ണി, പുള്ളോനാൽ" },
          },
        ],
      },
    ],
  },
  {
    slug: "ocym",
    name: { en: "Orthodox Christian Youth Movement", ml: "ഓർത്തഡോക്സ് ക്രിസ്ത്യൻ യുവജന പ്രസ്ഥാനം" },
    title: {
      en: "OCYM - Orthodox Christian Youth Movement",
      ml: "ഒ.സി.വൈ.എം. - ഓർത്തഡോക്സ് ക്രിസ്ത്യൻ യുവജന പ്രസ്ഥാനം",
    },
    summary: {
      en: "The youth wing of the Church, shaped by worship, study and service.",
      ml: "ആരാധന, പഠനം, സേവനം എന്നിവയിലൂടെ രൂപപ്പെടുന്ന സഭയുടെ യുവജന വിഭാഗം.",
    },
    meeting: { en: "Every Sunday after Holy Qurbana", ml: "വിശുദ്ധ കുർബാനയ്ക്ക് ശേഷം എല്ലാ ഞായറാഴ്ചയും" },
    lead: {
      en: "The Orthodox Christian Youth Movement of India (OCYM), the youth wing of the Malankara Orthodox Syrian Church, was started with the objectives of worship, study, and service. OCYM contributes to the goodness and progress of the Church and community in the three-fold path of worship, study and service. It aims at molding the minds and visions of the youth against the background of the contemporary issues. OCYM continues its spiritual journey with broader visions and effective Christian youth leadership. H.G. Dr. Geevarghese Mar Yulios Metropolitan is the current president.\n\nOur parish has a very active OCYM unit with more than 70 active members, and we conduct several activities throughout the year to engage the youth in worship, study and service. The OCYM unit meets every Sunday after Holy Qurbana.",
      ml: "ഇന്ത്യയിലെ ഓർത്തഡോക്സ് ക്രിസ്ത്യൻ യൂത്ത് മൂവ്‌മെന്റ് (ഒ.സി.വൈ.എം.) മലങ്കര ഓർത്തഡോക്സ് സുറിയാനി സഭയുടെ യുവജന വിഭാഗമാണ്. ആരാധന, പഠനം, സേവനം എന്ന ലക്ഷ്യങ്ങളോടെയാണ് ഇത് ആരംഭിച്ചത്. ആരാധന, പഠനം, സേവനം എന്ന ത്രിമാർഗത്തിലൂടെ സഭയുടെയും സമൂഹത്തിന്റെയും നന്മയ്ക്കും പുരോഗതിക്കും ഒ.സി.വൈ.എം. സംഭാവന ചെയ്യുന്നു. സമകാലിക വിഷയങ്ങളുടെ പശ്ചാത്തലത്തിൽ യുവജനങ്ങളുടെ ചിന്തയും കാഴ്ചപ്പാടും രൂപപ്പെടുത്തുകയാണ് ഇതിന്റെ ലക്ഷ്യം. വിശാലമായ ദർശനങ്ങളോടും ഫലപ്രദമായ ക്രൈസ്തവ യുവജന നേതൃത്വത്തോടും കൂടി ഒ.സി.വൈ.എം. ആത്മീയ യാത്ര തുടരുന്നു. ഹി.ഗി. ഡോ. ഗീവർഗീസ് മാർ യൂലിയോസ് മെത്രാപ്പോലീത്ത ഇപ്പോഴത്തെ പ്രസിഡന്റാണ്.\n\nനമ്മുടെ ഇടവകയിൽ 70-ലധികം സജീവ അംഗങ്ങളുള്ള ഒ.സി.വൈ.എം. യൂണിറ്റുണ്ട്. ആരാധന, പഠനം, സേവനം എന്നിവയിൽ യുവജനങ്ങളെ ഉൾപ്പെടുത്താൻ വർഷം മുഴുവൻ നിരവധി പ്രവർത്തനങ്ങൾ നടത്തുന്നു. യൂണിറ്റ് വിശുദ്ധ കുർബാനയ്ക്ക് ശേഷം എല്ലാ ഞായറാഴ്ചയും യോഗം ചേരുന്നു.",
    },
    sections: [
      {
        heading: { en: "Motto", ml: "മുദ്രാവാക്യം" },
        intro: {
          en: "Worship, Study, Service.",
          ml: "ആരാധന, പഠനം, സേവനം.",
        },
        points: [],
      },
      {
        heading: { en: "Office Bearers", ml: "ഭാരവാഹികൾ" },
        points: [
          {
            label: { en: "Vice President", ml: "വൈസ് പ്രസിഡന്റ്" },
            text: { en: "Mr. Lainu George Mathew", ml: "ശ്രീ ലൈനു ജോർജ് മാത്യു" },
          },
          {
            label: { en: "Secretary", ml: "സെക്രട്ടറി" },
            text: { en: "Mrs. Rajitha Raj", ml: "ശ്രീമതി രജിത രാജ്" },
          },
          {
            label: { en: "Joint Secretary", ml: "ജോയിന്റ് സെക്രട്ടറി" },
            text: { en: "Mr. Varghese Joy", ml: "ശ്രീ വർഗീസ് ജോയ്" },
          },
          {
            label: { en: "Treasurer", ml: "ട്രഷറർ" },
            text: { en: "Mr. Ajish T Alex", ml: "ശ്രീ അജീഷ് ടി. അലക്സ്" },
          },
          {
            label: { en: "Auditor", ml: "ഓഡിറ്റർ" },
            text: { en: "Mr. Melwin Mathai Pothen", ml: "ശ്രീ മെൽവിൻ മത്തായി പോത്തൻ" },
          },
        ],
      },
    ],
  },
  {
    slug: "prayer-groups",
    name: { en: "Prayer Groups", ml: "പ്രാർത്ഥനാ യൂണിറ്റുകൾ" },
    summary: {
      en: "Ten prayer groups, arranged by area, that worship together after Holy Qurbana.",
      ml: "പ്രദേശം അനുസരിച്ച് ക്രമീകരിച്ച 10 പ്രാർത്ഥനാ ഗ്രൂപ്പുകൾ. വിശുദ്ധ കുർബാനയ്ക്ക് ശേഷം ഒന്നിച്ച് ആരാധിക്കുന്നു.",
    },
    meeting: { en: "After Holy Qurbana", ml: "വിശുദ്ധ കുർബാനയ്ക്ക് ശേഷം" },
    lead: {
      en: "There are 10 active prayer groups in our parish. These groups are classified and grouped based on the geographical location. All the respective prayer groups meet and worship God Almighty after the Holy Qurbana.",
      ml: "നമ്മുടെ ഇടവകയിൽ 10 സജീവ പ്രാർത്ഥനാ ഗ്രൂപ്പുകളുണ്ട്. ഭൂമിശാസ്ത്രപരമായ സ്ഥാനത്തിന്റെ അടിസ്ഥാനത്തിൽ ഈ ഗ്രൂപ്പുകളെ തരംതിരിച്ച് ക്രമീകരിച്ചിരിക്കുന്നു. എല്ലാ പ്രാർത്ഥനാ ഗ്രൂപ്പുകളും വിശുദ്ധ കുർബാനയ്ക്ക് ശേഷം ഒന്നിച്ച് സർവ്വശക്തനായ ദൈവത്തെ ആരാധിക്കുന്നു.",
    },
  },
  {
    slug: "choir",
    name: { en: "Choir", ml: "ഗായകസംഘം" },
    summary: {
      en: "Liturgical singing for Holy Qurbana, feasts and funerals.",
      ml: "വിശുദ്ധ കുർബാന, തിരുനാളുകൾ, ശവസംസ്കാരം എന്നിവയ്ക്കുള്ള ഗാനശുശ്രൂഷ.",
    },
    meeting: { en: "Saturdays 5:00 PM", ml: "ശനിയാഴ്ച 5:00 PM" },
  },
  {
    slug: "altar-servers",
    name: { en: "AMOSS", ml: "എ.എം.ഒ.എസ്.എസ്." },
    summary: {
      en: "AMOSS, the Church’s association for altar servers and lay ministers.",
      ml: "ശുശ്രൂഷകർക്കും അല്മായ ശുശ്രൂഷകർക്കുമുള്ള സഭാ സംഘടനയായ എ.എം.ഒ.എസ്.എസ്.",
    },
    lead: {
      en: "AMOSS stands for the Akhila Malankara Orthodox Shusrushaka Sangham, which is the official association for altar servers (altar boys) and lay ministers within the Malankara Orthodox Syrian Church.",
      ml: "എ.എം.ഒ.എസ്.എസ്. എന്നത് അഖില മലങ്കര ഓർത്തഡോക്സ് ശുശ്രൂഷക സംഘം എന്നതിന്റെ ചുരുക്കപ്പേരാണ്. മലങ്കര ഓർത്തഡോക്സ് സുറിയാനി സഭയിലെ ശുശ്രൂഷകർക്കും (അൾത്താര ബോയ്സ്) അല്മായ ശുശ്രൂഷകർക്കുമുള്ള ഔദ്യോഗിക സംഘടനയാണിത്.",
    },
    sections: [
      {
        heading: { en: "Core Purpose & Identity", ml: "മുഖ്യ ലക്ഷ്യവും സ്വത്വവും" },
        intro: {
          en: "The primary mission of AMOSS is to standardize, unify, and elevate the liturgical service rendered by altar assistants across all parishes in the church. The organization helps young men and boys view their role at the altar not just as a mechanical duty, but as a sacred, deeply spiritual calling.",
          ml: "സഭയിലെ എല്ലാ ഇടവകകളിലെയും മദ്ബഹാ ശുശ്രൂഷകരുടെ ആരാധനാക്രമ ശുശ്രൂഷയെ ഏകീകരിക്കുകയും ഉയർത്തുകയും ചെയ്യുകയാണ് എ.എം.ഒ.എസ്.എസിന്റെ പ്രധാന ദൗത്യം. മദ്ബഹയിലെ തങ്ങളുടെ പങ്ക് ഒരു യാന്ത്രിക കടമയായിട്ടല്ല, വിശുദ്ധവും ആഴമേറിയതുമായ ആത്മീയ വിളിയായി യുവാക്കളും ബാലന്മാരും കാണാൻ ഈ സംഘടന സഹായിക്കുന്നു.",
        },
        points: [],
      },
      {
        heading: { en: "Key Objectives", ml: "പ്രധാന ലക്ഷ്യങ്ങൾ" },
        points: [
          {
            label: { en: "Uniformity in Worship", ml: "ആരാധനയിലെ ഏകരൂപം" },
            text: {
              en: "It provides systematic instructions to altar servers to maintain an unaltered, uniform standard for church traditions, rituals, and vestments across different regions.",
              ml: "വിവിധ പ്രദേശങ്ങളിലെ സഭാ പാരമ്പര്യങ്ങൾ, കർമ്മങ്ങൾ, വസ്ത്രങ്ങൾ എന്നിവയിൽ മാറ്റമില്ലാത്ത ഏകീകൃത നിലവാരം പാലിക്കാൻ ശുശ്രൂഷകർക്ക് ക്രമാനുഗതമായ നിർദ്ദേശങ്ങൾ ഇത് നൽകുന്നു.",
            },
          },
          {
            label: { en: "Spiritual Grooming", ml: "ആത്മീയ രൂപീകരണം" },
            text: {
              en: "It molds dedicated individuals who lead a sacramental, prayerful life, balancing their spiritual grace with practical, worldly discipline.",
              ml: "ആത്മീയ കൃപയും പ്രായോഗികമായ ലൗകിക അച്ചടക്കവും സമന്വയിപ്പിച്ച് കൂദാശാജീവിതവും പ്രാർത്ഥനാജീവിതവും നയിക്കുന്ന സമർപ്പിതരെ ഇത് രൂപപ്പെടുത്തുന്നു.",
            },
          },
          {
            label: { en: "Preserving Tradition", ml: "പാരമ്പര്യ സംരക്ഷണം" },
            text: {
              en: "It trains attendants to understand the profound theological meaning and historical value behind every ritual action in the West Syriac (Malankara) Liturgy.",
              ml: "പശ്ചിമ സുറിയാനി (മലങ്കര) ആരാധനാക്രമത്തിലെ ഓരോ കർമ്മത്തിനു പിന്നിലെയും ആഴമേറിയ ദൈവശാസ്ത്ര അർത്ഥവും ചരിത്രമൂല്യവും മനസ്സിലാക്കാൻ ശുശ്രൂഷകരെ ഇത് പരിശീലിപ്പിക്കുന്നു.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "SDOF",
    name: { en: "SDOF", ml: "എസ്.ഡി.ഒ.എഫ്." },
    title: {
      en: "SDOF - Saint Dionysius Orthodox Fellowship",
      ml: "എസ്.ഡി.ഒ.എഫ്. - വിശുദ്ധ ദിവന്നാസിയോസ് ഓർത്തഡോക്സ് ഫെലോഷിപ്പ്",
    },
    summary: {
      en: "The fellowship that bridges OCYM and SJOF for members in their forties, fifties and early sixties.",
      ml: "നാൽപ്പതുകളിലും അൻപതുകളിലും അറുപതിന്റെ തുടക്കത്തിലും ഉള്ള അംഗങ്ങൾക്കായി ഒ.സി.വൈ.എമ്മിനും എസ്.ജെ.ഒ.എഫിനും ഇടയിലുള്ള ഫെലോഷിപ്പ്.",
    },
    lead: {
      en: "The SDOF acts as a bridge between the youth movement (OCYM) and the senior fellowship (SJOF). It serves church members typically falling between the ages of 40 and 60 (or 65 in some regions).",
      ml: "എസ്.ഡി.ഒ.എഫ്. യുവജന പ്രസ്ഥാനമായ ഒ.സി.വൈ.എമ്മിനും മുതിർന്നവരുടെ ഫെലോഷിപ്പായ എസ്.ജെ.ഒ.എഫിനും ഇടയിലുള്ള പാലമാണ്. സാധാരണയായി 40 മുതൽ 60 വയസ്സുവരെ (ചില പ്രദേശങ്ങളിൽ 65 വരെ) പ്രായമുള്ള സഭാംഗങ്ങളെ ഇത് സേവിക്കുന്നു.",
    },
    sections: [
      {
        heading: { en: "Core Purpose & Identity", ml: "മുഖ്യ ലക്ഷ്യവും സ്വത്വവും" },
        points: [
          {
            label: { en: "Patron Saint", ml: "മദ്ധ്യസ്ഥൻ" },
            text: {
              en: "Named in honor of Saint Dionysius of Vattasseril (Vattasseril Thirumeni), a revered former Metropolitan and Malankara Metropolitan celebrated as a great defender of the Orthodox faith.",
              ml: "വട്ടശ്ശേരിൽ മാർ ദിവന്നാസിയോസ് (വട്ടശ്ശേരിൽ തിരുമേനി) എന്ന വിശുദ്ധന്റെ ബഹുമാനാർത്ഥം നാമകരണം ചെയ്തിരിക്കുന്നു. ഓർത്തഡോക്സ് വിശ്വാസത്തിന്റെ മഹത്തായ പ്രതിരോധകനായി ആഘോഷിക്കപ്പെടുന്ന മുൻ മെത്രാപ്പോലീത്തയും മലങ്കര മെത്രാപ്പോലീത്തയുമായിരുന്നു അദ്ദേഹം.",
            },
          },
          {
            label: { en: "The Need", ml: "ആവശ്യം" },
            text: {
              en: "It was established to keep individuals engaged in active spiritual fellowship as they navigate a hectic phase of life—balancing mature career growth, raising families, and expanding worldly responsibilities.",
              ml: "പക്വമായ തൊഴിൽ വളർച്ച, കുടുംബ പരിപാലനം, വർധിച്ചുവരുന്ന ലൗകിക ഉത്തരവാദിത്തങ്ങൾ എന്നിവ സന്തുലിതമാക്കുന്ന തിരക്കേറിയ ജീവിതഘട്ടത്തിൽ ആത്മീയ കൂട്ടായ്മയിൽ സജീവമായി തുടരാൻ വ്യക്തികളെ സഹായിക്കുന്നതിനാണ് ഇത് സ്ഥാപിതമായത്.",
            },
          },
        ],
      },
      {
        heading: { en: "Key Focus Areas", ml: "പ്രധാന ശ്രദ്ധാകേന്ദ്രങ്ങൾ" },
        points: [
          {
            label: { en: "Spiritual Anchor", ml: "ആത്മീയ നങ്കൂരം" },
            text: {
              en: "Provides dedicated scriptural study, liturgical evaluation, and prayer circles to help members seek deeper theological connection with God amidst busy domestic schedules.",
              ml: "തിരക്കേറിയ ഗാർഹിക ജീവിതത്തിനിടയിൽ ദൈവത്തോട് ആഴമേറിയ ദൈവശാസ്ത്ര ബന്ധം തേടാൻ തിരുവചന പഠനം, ആരാധനാക്രമ വിലയിരുത്തൽ, പ്രാർത്ഥനാ വൃത്തങ്ങൾ എന്നിവ നൽകുന്നു.",
            },
          },
          {
            label: { en: "Family & Parenting Guidance", ml: "കുടുംബവും രക്ഷാകർതൃ മാർഗനിർദേശവും" },
            text: {
              en: "Focuses heavily on Christian family values, offering forums where couples can discuss marital growth and the spiritual upbringing of children.",
              ml: "ക്രൈസ്തവ കുടുംബ മൂല്യങ്ങളിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നു. ദാമ്പത്യ വളർച്ചയെയും കുട്ടികളുടെ ആത്മീയ വളർത്തലിനെയും കുറിച്ച് ദമ്പതികൾക്ക് ചർച്ച ചെയ്യാനുള്ള വേദികൾ ഒരുക്കുന്നു.",
            },
          },
        ],
      },
      {
        heading: { en: "Office Bearers — 2026–27", ml: "ഭാരവാഹികൾ — 2026–27" },
        points: [
          {
            label: { en: "Vice President", ml: "വൈസ് പ്രസിഡന്റ്" },
            text: { en: "Mrs. Shibi Laji", ml: "ശ്രീമതി ഷിബി ലാജി" },
          },
          {
            label: { en: "Secretary", ml: "സെക്രട്ടറി" },
            text: { en: "Mrs. Sheenu Sunil", ml: "ശ്രീമതി ഷീനു സുനിൽ" },
          },
          {
            label: { en: "Joint Secretary", ml: "ജോയിന്റ് സെക്രട്ടറി" },
            text: { en: "Mrs. Biji Saji", ml: "ശ്രീമതി ബിജി സാജി" },
          },
          {
            label: { en: "Treasurer", ml: "ട്രഷറർ" },
            text: { en: "Mrs. Nisha Elizabeth Babu", ml: "ശ്രീമതി നിഷ എലിസബത്ത് ബാബു" },
          },
          {
            label: { en: "Auditor", ml: "ഓഡിറ്റർ" },
            text: { en: "Mrs. Achamma Shiju", ml: "ശ്രീമതി അച്ചാമ്മ ഷിജു" },
          },
        ],
      },
    ],
  },
  {
    slug: "SJOF",
    name: { en: "SJOF", ml: "എസ്.ജെ.ഒ.എഫ്." },
    title: {
      en: "SJOF - St. Joseph Orthodox Fellowship",
      ml: "എസ്.ജെ.ഒ.എഫ്. - സെന്റ് ജോസഫ് ഓർത്തഡോക്സ് ഫെലോഷിപ്പ്",
    },
    summary: {
      en: "The Church’s fellowship for members aged 60 and above, built on prayer, fellowship and guidance.",
      ml: "60 വയസ്സും അതിനുമുകളിലുമുള്ള അംഗങ്ങൾക്കായി പ്രാർത്ഥന, കൂട്ടായ്മ, മാർഗനിർദേശം എന്നിവയിൽ അധിഷ്ഠിതമായ സഭാ ഫെലോഷിപ്പ്.",
    },
    lead: {
      en: "SJOF stands for the St. Joseph Orthodox Fellowship, which is the official forum and spiritual organization for senior citizens within the Malankara Orthodox Syrian Church.",
      ml: "എസ്.ജെ.ഒ.എഫ്. എന്നത് സെന്റ് ജോസഫ് ഓർത്തഡോക്സ് ഫെലോഷിപ്പ് എന്നതിന്റെ ചുരുക്കപ്പേരാണ്. മലങ്കര ഓർത്തഡോക്സ് സുറിയാനി സഭയിലെ മുതിർന്ന പൗരന്മാർക്കുള്ള ഔദ്യോഗിക വേദിയും ആത്മീയ സംഘടനയുമാണിത്.",
    },
    sections: [
      {
        heading: { en: "Core Purpose & Identity", ml: "മുഖ്യ ലക്ഷ്യവും സ്വത്വവും" },
        intro: {
          en: "The SJOF is a faith-driven spiritual wing specifically dedicated to church members aged 60 and above. Its objective is to strengthen, empower, and support senior members, ensuring they remain active, valued participants in the life of the parish.",
          ml: "എസ്.ജെ.ഒ.എഫ്. 60 വയസ്സും അതിനുമുകളിലും പ്രായമുള്ള സഭാംഗങ്ങൾക്കായി സമർപ്പിച്ച വിശ്വാസാധിഷ്ഠിത ആത്മീയ വിഭാഗമാണ്. മുതിർന്ന അംഗങ്ങളെ ശക്തിപ്പെടുത്തുകയും പിന്തുണയ്ക്കുകയും ഇടവകാ ജീവിതത്തിൽ സജീവവും വിലമതിക്കപ്പെടുന്നവരുമായി തുടരാൻ സഹായിക്കുകയും ചെയ്യുകയാണ് ഇതിന്റെ ലക്ഷ്യം.",
        },
        points: [
          {
            label: { en: "Motto", ml: "മുദ്രാവാക്യം" },
            text: {
              en: "“Prayer, Fellowship & Guidance”.",
              ml: "“പ്രാർത്ഥന, കൂട്ടായ്മ, മാർഗനിർദേശം”.",
            },
          },
          {
            label: { en: "Patron Saint", ml: "മദ്ധ്യസ്ഥൻ" },
            text: {
              en: "Named after St. Joseph, honoring his legacy of quiet devotion, righteousness, and obedience.",
              ml: "നിശ്ശബ്ദ ഭക്തി, നീതി, അനുസരണം എന്നിവയുടെ പാരമ്പര്യത്തെ ബഹുമാനിച്ച് വിശുദ്ധ യൗസേപ്പിന്റെ നാമത്തിലാണ് ഇത് അറിയപ്പെടുന്നത്.",
            },
          },
        ],
      },
      {
        heading: { en: "The Three Guiding Pillars", ml: "മൂന്ന് മാർഗദർശക സ്തംഭങ്ങൾ" },
        intro: {
          en: "The fellowship structures its activities around its three-part motto:",
          ml: "ത്രിമുഖ മുദ്രാവാക്യത്തെ അടിസ്ഥാനമാക്കിയാണ് ഫെലോഷിപ്പ് പ്രവർത്തനങ്ങൾ ക്രമീകരിക്കുന്നത്.",
        },
        points: [
          {
            label: { en: "Prayer", ml: "പ്രാർത്ഥന" },
            text: {
              en: "Encouraging seniors to transform their leisure time into intentional, selfless intercessory prayer for their families, the church, and society.",
              ml: "കുടുംബങ്ങൾക്കും സഭയ്ക്കും സമൂഹത്തിനും വേണ്ടി ഉദ്ദേശ്യപൂർവവും നിസ്വാർത്ഥവുമായ മദ്ധ്യസ്ഥ പ്രാർത്ഥനയായി ഒഴിവുസമയം മാറ്റാൻ മുതിർന്നവരെ പ്രോത്സാഹിപ്പിക്കുന്നു.",
            },
          },
          {
            label: { en: "Fellowship", ml: "കൂട്ടായ്മ" },
            text: {
              en: "Providing a community space to counteract the loneliness or isolation that can come with older age, fostering a deep sense of camaraderie and belonging.",
              ml: "പ്രായാധിക്യത്തോടൊപ്പം വരാവുന്ന ഏകാന്തതയെയും ഒറ്റപ്പെടലിനെയും നേരിടാൻ ഒരു സമൂഹ ഇടം ഒരുക്കുന്നു. ആഴമേറിയ സൗഹൃദവും ഉൾപ്പെടലും വളർത്തുന്നു.",
            },
          },
          {
            label: { en: "Guidance", ml: "മാർഗനിർദേശം" },
            text: {
              en: "Utilizing the vast life experiences, wisdom, and spiritual maturity of senior members to mentor and guide younger generations within the church.",
              ml: "മുതിർന്ന അംഗങ്ങളുടെ ജീവിതാനുഭവവും ജ്ഞാനവും ആത്മീയ പക്വതയും ഉപയോഗിച്ച് സഭയിലെ യുവതലമുറയെ ഉപദേശിക്കുകയും നയിക്കുകയും ചെയ്യുന്നു.",
            },
          },
        ],
      },
      {
        heading: { en: "Key Activities", ml: "പ്രധാന പ്രവർത്തനങ്ങൾ" },
        points: [
          {
            label: { en: "Spiritual Upliftment", ml: "ആത്മീയ ഉണർവ്" },
            text: {
              en: "Regular meetings featuring Bible studies, prayer groups, devotional songs, and sacramental confession prep.",
              ml: "ബൈബിൾ പഠനം, പ്രാർത്ഥനാ ഗ്രൂപ്പുകൾ, ഭക്തിഗാനങ്ങൾ, കുമ്പസാരത്തിനുള്ള ഒരുക്കം എന്നിവയുള്ള പതിവ് യോഗങ്ങൾ.",
            },
          },
          {
            label: { en: "Charity & Outreach", ml: "ദാനധർമ്മവും ഔട്ട്റീച്ചും" },
            text: {
              en: "Organizing and participating in parish-led community service initiatives to assist those in need.",
              ml: "ആവശ്യമുള്ളവരെ സഹായിക്കാൻ ഇടവകാ നേതൃത്വത്തിലുള്ള സമൂഹസേവനങ്ങളിൽ പങ്കെടുക്കുകയും അവ സംഘടിപ്പിക്കുകയും ചെയ്യുന്നു.",
            },
          },
          {
            label: { en: "Health & Well-being", ml: "ആരോഗ്യവും ക്ഷേമവും" },
            text: {
              en: "Hosting seminars focused on senior health, mental wellness, and navigating life after retirement.",
              ml: "മുതിർന്നവരുടെ ആരോഗ്യം, മാനസിക ക്ഷേമം, വിരമിക്കലിനു ശേഷമുള്ള ജീവിതം എന്നിവയെക്കുറിച്ചുള്ള സെമിനാറുകൾ.",
            },
          },
        ],
      },
      {
        heading: { en: "Office Bearers — 2026–27", ml: "ഭാരവാഹികൾ — 2026–27" },
        points: [
          {
            label: { en: "Vice President", ml: "വൈസ് പ്രസിഡന്റ്" },
            text: { en: "Mr. Simon George", ml: "ശ്രീ.സൈമൺ ജോർജ്ജ്" },
          },
          {
            label: { en: "Secretary", ml: "സെക്രട്ടറി" },
            text: { en: "Mr. Abraham Kurian", ml: "ശ്രീ.ഏബ്രഹാം കുര്യൻ" },
          },
          {
            label: { en: "Joint Secretary", ml: "ജോയിന്റ് സെക്രട്ടറി" },
            text: { en: "Mr. Abraham Varghese", ml: "ശ്രീ.ഏബ്രഹാം വർഗീസ്" },
          },
          {
            label: { en: "Treasurer", ml: "ട്രഷറർ" },
            text: { en: "Mr. Saramma Alexander", ml: "ശ്രീ.സാരമ്മ അലക്സാണ്ടർ" },
          },
        ],
      },
    ],
  },
];

const organisationOrder = [
  "sunday-school",
  "balika-bala-samajam",
  "ocym",
  "SDOF",
  "SJOF",
  "martha-mariam",
  "prayer-groups",
  "choir",
  "altar-servers",
  "peters-hand",
];

organisations.sort(
  (a, b) => organisationOrder.indexOf(a.slug) - organisationOrder.indexOf(b.slug),
);

export const galleryPreview = [
  {
    src: "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?auto=format&fit=crop&w=800&q=80",
    alt: { en: "Placeholder church nave", ml: "പ്ലേസ്‌ഹോൾഡർ ദേവാലയം" },
  },
  {
    src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=800&q=80",
    alt: { en: "Placeholder candles", ml: "പ്ലേസ്‌ഹോൾഡർ മെഴുകുതിരി" },
  },
  {
    src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80",
    alt: { en: "Placeholder gathering", ml: "പ്ലേസ്‌ഹോൾഡർ കൂട്ടായ്മ" },
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
    alt: { en: "Placeholder landscape", ml: "പ്ലേസ്‌ഹോൾഡർ നാട്" },
  },
  {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    alt: { en: "Placeholder light through trees", ml: "പ്ലേസ്‌ഹോൾഡർ പ്രകാശം" },
  },
  {
    src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=800&q=80",
    alt: { en: "Placeholder feast table", ml: "പ്ലേസ്‌ഹോൾഡർ വിരുന്ന്" },
  },
];

const luckyDrawAlt = {
  en: "Peters Hand lucky draw coupon release",
  ml: "പീറ്റേഴ്‌സ് ഹാൻഡ് ലക്കി ഡ്രോ കൂപ്പൺ റിലീസ്",
};

const chapelAlt = {
  en: "St. George Chapel Consecration",
  ml: "വിശുദ്ധ ഗീവർഗീസ് ചാപ്പൽ കൂദാശ",
};

export const galleryAlbums = [
  {
    slug: "st-george-chapel-consecration",
    title: chapelAlt,
    images: Array.from({ length: 22 }, (_, index) => ({
      type: "image" as const,
      src: `/gallery/st-george-chapel-consecration/${String(index + 1).padStart(2, "0")}.jpg`,
      alt: chapelAlt,
    })),
  },
  {
    slug: "onam-2026",
    title: { en: "Onam 2026", ml: "ഓണം 2026" },
    images: [
      {
        type: "video" as const,
        src: "/gallery/onam-2026/KaroorOnam2026.mp4",
        alt: { en: "Onam 2026", ml: "ഓണം 2026" },
      },
    ],
  },
  {
    slug: "peters-hand-lucky-draw",
    title: {
      en: "Peters Hand Lucky Draw Coupon release",
      ml: "പീറ്റേഴ്‌സ് ഹാൻഡ് ലക്കി ഡ്രോ കൂപ്പൺ റിലീസ്",
    },
    images: Array.from({ length: 12 }, (_, index) => ({
      type: "image" as const,
      src: `/gallery/peters-hand-lucky-draw/${String(index + 1).padStart(2, "0")}.jpg`,
      alt: luckyDrawAlt,
    })),
  },
];

export const videos = [
  {
    id: "live",
    title: { en: "Holy Qurbana live", ml: "വിശുദ്ധ കുർബാന തത്സമയം" },
    youtube: "",
    category: { en: "Live", ml: "തത്സമയം" },
  },
  {
    id: "feast",
    title: { en: "Perunnal 15/05/2026", ml: "പെരുന്നാൾ 15/05/2026" },
    youtube: "QmSs5T-FQlE",
    category: { en: "Feasts", ml: "തിരുനാളുകൾ" },
  },
  {
    id: "flag-hoisting-2026",
    title: {
      en: "Flag Hoisting ceremony - Perunnal 2026",
      ml: "കൊടിയേറ്റ ചടങ്ങ് - പെരുന്നാൾ 2026",
    },
    facebook: "https://www.facebook.com/reel/1462917741986674/",
    category: { en: "Feasts", ml: "തിരുനാളുകൾ" },
  },
  {
    id: "good-friday-2026",
    title: { en: "Good Friday 2026", ml: "ദുഃഖവെള്ളി 2026" },
    facebook: "https://www.facebook.com/reel/1962027101076209/",
    category: { en: "Feasts", ml: "തിരുനാളുകൾ" },
  },
  {
    id: "palm-sunday-2026",
    title: { en: "Palm Sunday 2026", ml: "ഓശാന ഞായർ 2026" },
    facebook: "https://www.facebook.com/reel/813628971208088/",
    category: { en: "Feasts", ml: "തിരുനാളുകൾ" },
  },
  {
    id: "sermon",
    title: { en: "Sermon archive", ml: "പ്രസംഗ ശേഖരം" },
    youtube: "",
    category: { en: "Sermons", ml: "പ്രസംഗങ്ങൾ" },
  },
  {
    id: "events",
    title: { en: "Parish events", ml: "ഇടവകാ പരിപാടികൾ" },
    youtube: "",
    category: { en: "Events", ml: "പരിപാടികൾ" },
  },
];

export const downloads: DownloadItem[] = [
  {
    title: { en: "Panjangom 2026", ml: "പഞ്ചാംഗം 2026" },
    category: { en: "Bulletin", ml: "ബുള്ളറ്റിൻ" },
    size: "594 KB",
    href: "/downloads/Panjangom2026.pdf",
  },
  {
    title: { en: "Membership form", ml: "അംഗത്വ ഫോം" },
    category: { en: "Forms", ml: "ഫോമുകൾ" },
    size: "180 KB",
    href: "/downloads/sample.txt",
  },
  {
    title: { en: "Baptism application", ml: "മാമോദീസാ അപേക്ഷ" },
    category: { en: "Forms", ml: "ഫോമുകൾ" },
    size: "160 KB",
    href: "/downloads/sample.txt",
  },
  {
    title: { en: "Marriage application", ml: "വിവാഹ അപേക്ഷ" },
    category: { en: "Forms", ml: "ഫോമുകൾ" },
    size: "210 KB",
    href: "/downloads/sample.txt",
  },
  {
    title: { en: "Qurbana Thaksa (link placeholder)", ml: "കുർബാന തക്സാ" },
    category: { en: "Prayer books", ml: "പ്രാർത്ഥനാ പുസ്തകങ്ങൾ" },
    size: "PDF",
    href: "/downloads/sample.txt",
  },
  {
    title: { en: "Annual report 2025 (sample)", ml: "വാർഷിക റിപ്പോർട്ട് 2025" },
    category: { en: "Reports", ml: "റിപ്പോർട്ടുകൾ" },
    size: "2.4 MB",
    href: "/downloads/sample.txt",
  },
];

export const obituaries: Obituary[] = [
  {
    slug: "omana-abraham",
    name: { en: "Omana Abraham", ml: "ഓമന എബ്രഹാം" },
    house: { en: "Chemmanil", ml: "ചെമ്മണ്ണിൽ" },
    date: "19 October 2026",
    funeral: {
      en: "Monday, 19 October 2026. The mortal remains will be brought to Home at 10:00 AM. Service at Home: 2:15 PM. Service at the church: 3:00 PM.",
      ml: "19/10/2026 തിങ്കളാഴ്ച. ഭൗതിക ശരീരം രാവിലെ 10 മണിക്ക് വീട്ടിൽ കൊണ്ടുവരും. വീട്ടിലെ ശുശ്രൂഷ: 2:15 PM. ദേവാലയത്തിലെ ശുശ്രൂഷ: 3:00 PM.",
    },
    burial: {
      en: "Burial will then be held at the parish cemetery.",
      ml: "തുടർന്ന് ഇടവക സെമിത്തേരിയിൽ സംസ്കാരം നിർവ്വഹിക്കപ്പെടുന്നതാണ്.",
    },
    message: {
      en: "With homage to the late Omana Abraham of Chemmanil. The parish keeps the family in prayer.",
      ml: "ചെമ്മണ്ണിൽ പരേതയായ ഓമന എബ്രഹാമിന് ആദരാഞ്ജലികൾ. ഇടവക കുടുംബത്തെ പ്രാർത്ഥനയിൽ ഓർക്കുന്നു.",
    },
    photo: "/obituary/omana-abraham.jpg",
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: "1072 ME",
    title: { en: "The Early Days", ml: "ആദ്യകാലം" },
    body: {
      en: "On the 9th of Meenam, Kollavarsha 1072, St. Gregorios of Parumala laid the foundation stone in the name of St. Peter, consecrated the parish cross and offered the first Holy Qurbana. Known then as Pariyaram Puthen Palli, the sanctuary was of bamboo and grass, with woven bamboo-mat walls, serving 65 founding families.",
      ml: "കൊല്ലവർഷം 1072 മീനം 9-ന് പരുമല തിരുമേനി വിശുദ്ധ പത്രോസിന്റെ നാമത്തിൽ തറക്കല്ലിടുകയും ഇടവകാ കുരിശ് കൂദാശ ചെയ്യുകയും ആദ്യ വിശുദ്ധ കുർബാന അർപ്പിക്കുകയും ചെയ്തു. പരിയാരം പുത്തൻപള്ളി എന്നറിയപ്പെട്ട ആദ്യ ദേവാലയം മുളയും പുല്ലും കൊണ്ട് നിർമിച്ചതായിരുന്നു; മതിലുകൾ മുളമെത്തിയായിരുന്നു. 65 കുടുംബങ്ങളായിരുന്നു ആദ്യ അംഗങ്ങൾ.",
    },
  },
  {
    year: "1999",
    title: { en: "The New Sanctuary", ml: "പുതിയ ദേവാലയം" },
    body: {
      en: "To accommodate the growing spiritual family, a new church was built — 120 feet long, 45 feet wide and 113 feet high (Kotta). It was solemnly consecrated on 14 and 15 May 1999 by H.H. Baselios Marthoma Mathews II, Catholicos of the East and Malankara Metropolitan. Rev. Fr. Titus George served as Parish Vicar. The consecration took place in the presence of:",
      ml: "വളരുന്ന ഇടവകയ്ക്കായി 120 അടി നീളം, 45 അടി വീതി, 113 അടി ഉയരം (കോട്ട) ഉള്ള പുതിയ ദേവാലയം നിർമിച്ചു. 1999 മെയ് 14-നും 15-നും പൂർവ്വദിക്ക് കാതോലിക്കോസും മലങ്കര മെത്രാപ്പോലീത്തയുമായ ബസേലിയോസ് മാർത്തോമ്മ മാത്യൂസ് ദ്വിതീയൻ കൂദാശ ചെയ്തു. വികാരി റവ. ഫാ. ടൈറ്റസ് ജോർജ്. സന്നിഹിതരായ മെത്രാന്മാർ:",
    },
  },
];

const committeePhotos = [
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
];

const committeeNames: { en: string; ml: string; auditor?: boolean }[] = [
  { en: "Mr. Jacob Mathew", ml: "ശ്രീ.ജേക്കബ് മാത്യു" },
  { en: "Mr. Alex C. Mathew", ml: "ശ്രീ.അലക്സ് സി മാത്യു" },
  { en: "Mr. Mathew Thomas", ml: "ശ്രീ.മാത്യു തോമസ്" },
  { en: "Mr. Jacob John", ml: "ശ്രീ.ജേക്കബ് ജോൺ" },
  { en: "Mr. Thomas Mathew", ml: "ശ്രീ.തോമസ് മാത്യു" },
  { en: "Mr. Rajan N. V.", ml: "ശ്രീ.രാജൻ എൻ. വി." },
  { en: "Mr. Abraham Kurian", ml: "ശ്രീ.ഏബ്രഹാം കുര്യൻ" },
  { en: "Mr. O. J. John", ml: "ശ്രീ.ഒ. ജെ. ജോൺ" },
  { en: "Mr. Simon George", ml: "ശ്രീ.സൈമൺ ജോർജ്ജ്" },
  { en: "Mr. K. A. Alexander", ml: "ശ്രീ.കെ. എ.അലക്സാണ്ടർ" },
  { en: "Mr. Sibu Sam Mathew", ml: "ശ്രീ.സിബു സാം മാത്യു" },
  { en: "Mrs. Mariamma Thomas", ml: "ശ്രീമതി. മറിയാമ്മ തോമസ്" },
  { en: "Mr. Sam Ninan", ml: "ശ്രീ.സാം നൈനാൻ", auditor: true },
  { en: "Mr. Binoy Abraham", ml: "ശ്രീ.ബിനോയി ഏബ്രഹാം", auditor: true },
];

export const committee: CommitteeMember[] = committeeNames.map((person, index) => ({
  name: { en: person.en, ml: person.ml },
  role: person.auditor
    ? { en: "Auditor", ml: "ഓഡിറ്റർ" }
    : { en: "Committee member", ml: "സമിതി അംഗം" },
  term: "2025–2026",
  photo: committeePhotos[index % committeePhotos.length],
}));

export const sacraments = [
  {
    slug: "baptism",
    title: { en: "Baptism", ml: "മാമോദീസാ" },
    body: {
      en: "Please contact the Vicar at least two weeks in advance. Godparents should be practising Orthodox Christians. Bring the application form from Downloads.",
      ml: "കുറഞ്ഞത് രണ്ടാഴ്ച മുമ്പ് വികാരിയെ ബന്ധപ്പെടുക. ധർമ്മമാതാപിതാക്കൾ ഓർത്തഡോക്സ് വിശ്വാസികളായിരിക്കണം.",
    },
  },
  {
    slug: "marriage",
    title: { en: "Marriage", ml: "വിവാഹം" },
    body: {
      en: "Meet the Vicar for counselling, banns and diocesan requirements. Inter-church marriages need additional permissions.",
      ml: "കൂടിയാലോചന, വിലക്ക്, ഭദ്രാസന നിബന്ധനകൾ എന്നിവയ്ക്ക് വികാരിയെ കാണുക.",
    },
  },
  {
    slug: "qurbana",
    title: { en: "Holy Qurbana", ml: "വിശുദ്ധ കുർബാന" },
    body: {
      en: "The Divine Liturgy is the heart of parish life. Prepare with confession as advised by the Vicar, especially in fasting seasons.",
      ml: "ദിവ്യബലിയാണ് ഇടവകാ ജീവിതത്തിന്റെ ഹൃദയം. നോമ്പുകാലങ്ങളിൽ കുമ്പസാരത്തോടെ ഒരുങ്ങുക.",
    },
  },
  {
    slug: "funeral",
    title: { en: "Funeral", ml: "ശവസംസ്കാരം" },
    body: {
      en: "Inform the Vicar immediately. The parish will help with the funeral Qurbana, cemetery and condolence gathering.",
      ml: "ഉടൻ വികാരിയെ അറിയിക്കുക. ശവസംസ്കാര കുർബാന, ശ്മശാനം, ആശ്വാസ യോഗം എന്നിവയിൽ ഇടവക സഹായിക്കും.",
    },
  },
  {
    slug: "house-blessing",
    title: { en: "House blessing", ml: "ഭവനാശീർവാദം" },
    body: {
      en: "New homes and annual blessings can be scheduled through the parish office.",
      ml: "പുതിയ വീടുകളും വാർഷിക ആശീർവാദവും ഓഫീസ് വഴി ക്രമീകരിക്കാം.",
    },
  },
  {
    slug: "certificates",
    title: { en: "Certificates", ml: "സർട്ടിഫിക്കറ്റുകൾ" },
    body: {
      en: "Baptism, marriage and membership certificates: apply at the office with ID and offering as listed in Downloads.",
      ml: "മാമോദീസാ, വിവാഹ, അംഗത്വ സർട്ടിഫിക്കറ്റുകൾ ഓഫീസിൽ അപേക്ഷിക്കുക.",
    },
  },
];

export const offeringCategories = [
  { en: "General fund", ml: "പൊതു നിധി" },
  { en: "Building fund", ml: "നിർമാണ നിധി" },
  { en: "Charity", ml: "ദാനധർമ്മം" },
  { en: "Feast sponsorship", ml: "തിരുനാൾ സ്പോൺസർഷിപ്പ്" },
  { en: "Memorial offerings", ml: "ഓർമ്മ വഴിപാട്" },
];

export const bank = {
  name: { en: "Parish account (placeholder)", ml: "ഇടവകാ അക്കൗണ്ട് (പ്ലേസ്‌ഹോൾഡർ)" },
  account: "XXXXXXXXXXXX",
  ifsc: "XXXX0000000",
  upi: "karoorpalli@upi",
};

export const historyPage = {
  kicker: {
    en: "Elanthoor, Pathanamthitta | Diocese of Thumpamon",
    ml: "ഇലന്തൂർ, പത്തനംതിട്ട | തുമ്പമൺ ഭദ്രാസനം",
  },
  subtitle: {
    en: "St. Peter’s Orthodox Church, Karoor (Karoor Pally)",
    ml: "സെന്റ് പീറ്റേഴ്‌സ് ഓർത്തഡോക്സ് പള്ളി, കാരൂർ (കാരൂർ പള്ളി)",
  },
  welcomeTitle: { en: "Welcome to Our Parish", ml: "ഇടവകയിലേക്ക് സ്വാഗതം" },
  welcome: {
    en: "Welcome to the official web portal of St. Peter’s Orthodox Church, Karoor (affectionately known as Karoor Pally). Conveniently located along the Pathanamthitta–Kozhencherry Road in Elanthoor, our parish stands as a beacon of faith, heritage, and community worship under the Thumpamon Diocese of the Malankara Orthodox Syrian Church.",
    ml: "സെന്റ് പീറ്റേഴ്‌സ് ഓർത്തഡോക്സ് പള്ളി, കാരൂർ (കാരൂർ പള്ളി) എന്ന ഔദ്യോഗിക വെബ് പോർട്ടലിലേക്ക് സ്വാഗതം. ഇലന്തൂരിൽ പത്തനംതിട്ട–കോഴഞ്ചേരി റോഡിനരികെ സ്ഥിതി ചെയ്യുന്ന ഈ ഇടവക മലങ്കര ഓർത്തഡോക്സ് സുറിയാനി സഭയുടെ തുമ്പമൺ ഭദ്രാസനത്തിന് കീഴിൽ വിശ്വാസത്തിന്റെയും പാരമ്പര്യത്തിന്റെയും ആരാധനയുടെയും ദീപസ്തംഭമാണ്.",
  },
  foundationsTitle: {
    en: "Our History & Divine Foundations",
    ml: "ചരിത്രവും ദിവ്യ അടിത്തറയും",
  },
  faithTitle: { en: "Our Apostolic Faith & Heritage", ml: "അപ്പോസ്തോലിക വിശ്വാസവും പാരമ്പര്യവും" },
  faith: {
    en: "The Malankara Orthodox Syrian Church traces its lineage back to A.D. 52, established through the apostolic mission of St. Thomas the Apostle in India. It stands today as an ancient, autonomous, autocephalous Indian Church, rooted in Orthodox tradition and Christian faith.",
    ml: "മലങ്കര ഓർത്തഡോക്സ് സുറിയാനി സഭ ക്രി.വ. 52-ൽ ഇന്ത്യയിലെത്തിയ പ്രേഷിതൻ വിശുദ്ധ തോമസിന്റെ ശ്ലൈഹിക ദൗത്യത്തിൽ നിന്ന് ഉത്ഭവിക്കുന്നു. ഓർത്തഡോക്സ് പാരമ്പര്യത്തിലും ക്രൈസ്തവ വിശ്വാസത്തിലും വേരൂന്നിയ, പുരാതനവും സ്വയംഭരണവും സ്വയംശീർഷകവുമായ ഇന്ത്യൻ സഭയാണിത്.",
  },
  leadershipTitle: { en: "Parish Leadership", ml: "ഇടവകാ നേതൃത്വം" },
  metropolitans1999: [
    "H.G. Philipose Mar Eusebius",
    "H.G. Kuriakose Mar Clemis",
    "H.G. Dr. Thomas Mar Athanasius",
    "H.G. Paulose Mar Pachomios",
  ],
};

export const visionPage = {
  visionTitle: { en: "Vision", ml: "ദർശനം" },
  vision: {
    en: "To be a vibrant, Christ-centered parish rooted in apostolic faith, radiating the love of God, preserving our rich Malankara Orthodox heritage, and serving as a beacon of hope, worship, and spiritual transformation for generations to come.",
    ml: "അപ്പോസ്തോലിക വിശ്വാസത്തിൽ വേരൂന്നിയ, ക്രിസ്തുകേന്ദ്രിതവും ജീവസ്സുറ്റതുമായ ഇടവകയായി നിലകൊള്ളുക; ദൈവസ്നേഹം പ്രസരിപ്പിക്കുക; മലങ്കര ഓർത്തഡോക്സ് പാരമ്പര്യം കാത്തുസൂക്ഷിക്കുക; തലമുറകൾക്ക് പ്രത്യാശയുടെയും ആരാധനയുടെയും ആത്മീയ പരിവർത്തനത്തിന്റെയും ദീപസ്തംഭമായിരിക്കുക.",
  },
  missionTitle: { en: "Mission", ml: "ദൗത്യം" },
  missions: [
    {
      title: { en: "Worship in Spirit & Truth", ml: "ആത്മാവിലും സത്യത്തിലുമുള്ള ആരാധന" },
      body: {
        en: "To uphold and celebrate the ancient, sacramental liturgy (Holy Qurbana) of St. Thomas Christians, fostering deep spiritual renewal through prayer, fellowship, and Orthodox tradition.",
        ml: "വിശുദ്ധ തോമസ് ക്രൈസ്തവരുടെ പുരാതന കൂദാശാ ആരാധന (വിശുദ്ധ കുർബാന) നിലനിർത്തുകയും ആഘോഷിക്കുകയും, പ്രാർത്ഥന, കൂട്ടായ്മ, ഓർത്തഡോക്സ് പാരമ്പര്യം എന്നിവയിലൂടെ ആത്മീയ നവീകരണം വളർത്തുകയും ചെയ്യുക.",
      },
    },
    {
      title: { en: "Nurture Faith & Christian Living", ml: "വിശ്വാസവും ക്രൈസ്തവ ജീവിതവും പോഷിപ്പിക്കുക" },
      body: {
        en: "To educate and empower children, youth, and adults through active spiritual organizations (Sunday School, OCYM, MGSOG, Martha Mariam Samajam) to live out Gospel values in daily life.",
        ml: "സൺഡേ സ്കൂൾ, ഒ.സി.വൈ.എം., എം.ജി.എസ്.ഒ.ജി., മാർത്താ മറിയം സമാജം എന്നീ ആത്മീയ സംഘടനകളിലൂടെ കുട്ടികളെയും യുവജനങ്ങളെയും മുതിർന്നവരെയും സുവിശേഷ മൂല്യങ്ങൾ ദൈനംദിന ജീവിതത്തിൽ പാലിക്കാൻ പഠിപ്പിക്കുകയും ശക്തിപ്പെടുത്തുകയും ചെയ്യുക.",
      },
    },
    {
      title: { en: "Serve with Christian Compassion", ml: "ക്രൈസ്തവ കാരുണ്യത്തോടെ സേവിക്കുക" },
      body: {
        en: "To extend Christ’s love to the broader community in Karoor and beyond through charitable initiatives, pastoral care, and active social outreach.",
        ml: "ദാനധർമ്മം, ഇടവകാ ശുശ്രൂഷ, സാമൂഹിക സേവനം എന്നിവയിലൂടെ കാരൂരിലും അതിനപ്പുറവും ക്രിസ്തുവിന്റെ സ്നേഹം പങ്കുവയ്ക്കുക.",
      },
    },
    {
      title: { en: "Preserve & Pass On Heritage", ml: "പാരമ്പര്യം കാത്ത് കൈമാറുക" },
      body: {
        en: "To honor our historic foundation—blessed by St. Gregorios of Parumala—by sustaining a united, welcoming parish family that passes down faith and unity to future generations.",
        ml: "പരുമല തിരുമേനി അനുഗ്രഹിച്ച ചരിത്ര അടിത്തറയെ ബഹുമാനിച്ച്, വിശ്വാസവും ഐക്യവും അടുത്ത തലമുറയ്ക്ക് കൈമാറുന്ന ഒന്നിച്ചുള്ള, സ്വാഗതാർഹമായ ഇടവകാ കുടുംബമായി നിലനിൽക്കുക.",
      },
    },
    {
      title: { en: "Promote Unity & Witness", ml: "ഐക്യവും സാക്ഷ്യവും" },
      body: {
        en: "To bear faithful witness to Jesus Christ as an integral part of the Thumpamon Diocese, standing firm in unity under the Holy See of St. Thomas.",
        ml: "തുമ്പമൺ ഭദ്രാസനത്തിന്റെ ഭാഗമായി യേശുക്രിസ്തുവിന് വിശ്വസ്ത സാക്ഷ്യം വഹിക്കുക; വിശുദ്ധ തോമസിന്റെ അപ്പോസ്തോലിക സിംഹാസനത്തിന് കീഴിൽ ഐക്യത്തിൽ ഉറച്ചുനിൽക്കുക.",
      },
    },
  ],
};

export const pagesCopy = {
  about: {
    title: { en: "About the parish", ml: "ഇടവകയെക്കുറിച്ച്" },
    lead: {
      en: "Welcome to the official web page of St. Peter’s Orthodox Church, Karoor. Located in the peaceful village of Elanthoor within the Pathanamthitta district of Kerala, our parish serves as a spiritual home for the local Orthodox Christian community under the pastoral guidance of the Malankara Orthodox Syrian Church (Thumpamon Diocese).\n\nWe gather for Holy Qurbana, teach the faith to our children, and care for families in Kerala and across the Gulf, UK, US and Australia.",
      ml: "സെന്റ് പീറ്റേഴ്‌സ് ഓർത്തഡോക്സ് പള്ളി, കാരൂരിന്റെ ഔദ്യോഗിക വെബ് പേജിലേക്ക് സ്വാഗതം. പത്തനംതിട്ട ജില്ലയിലെ ഇലന്തൂരിലെ ശാന്തമായ ഗ്രാമത്തിൽ സ്ഥിതി ചെയ്യുന്ന ഈ ഇടവക, മലങ്കര ഓർത്തഡോക്സ് സുറിയാനി സഭയുടെ (തുമ്പമൺ ഭദ്രാസനം) ആത്മീയ മേൽനോട്ടത്തിൽ പ്രാദേശിക ഓർത്തഡോക്സ് വിശ്വാസികൾക്ക് ഒരു ആത്മീയ ഭവനമാണ്.\n\nവിശുദ്ധ കുർബാനയ്ക്കായി നാം ഒന്നിക്കുന്നു, കുട്ടികൾക്ക് വിശ്വാസം പഠിപ്പിക്കുന്നു, കേരളത്തിലും ഗൾഫ്, യുകെ, യുഎസ്, ഓസ്ട്രേലിയ എന്നിവിടങ്ങളിലുമുള്ള കുടുംബങ്ങളെ പരിപാലിക്കുന്നു.",
    },
    sections: [
      {
        heading: { en: "Our History & Heritage", ml: "നമ്മുടെ ചരിത്രവും പൈതൃകവും" },
        body: {
          en: "Rooted in the ancient traditions of the Malankara Orthodox Syrian Church—traditionally believed to have been established by St. Thomas the Apostle in AD 52—St. Peter’s Orthodox Church, Karoor, has stood as a beacon of faith and fellowship in Elanthoor for generations. Over the decades, our parish has preserved the rich liturgical heritage, Syriac traditions, and spiritual discipline handed down by our forebears while growing dynamically to meet the needs of a modern congregation.",
          ml: "മലങ്കര ഓർത്തഡോക്സ് സുറിയാനി സഭയുടെ പൗരാണിക പാരമ്പര്യത്തിൽ — പരമ്പരാഗതമായി എ.ഡി. 52-ൽ പ്രേഷിതൻ വിശുദ്ധ തോമസ് സ്ഥാപിച്ചതെന്ന് വിശ്വസിക്കപ്പെടുന്നു — വേരൂന്നിയ സെന്റ് പീറ്റേഴ്‌സ് ഓർത്തഡോക്സ് പള്ളി, കാരൂർ, തലമുറകളായി ഇലന്തൂരിൽ വിശ്വാസത്തിന്റെയും കൂട്ടായ്മയുടെയും വിളക്കായി നിലകൊള്ളുന്നു. ദശകങ്ങളായി നമ്മുടെ ഇടവക, പൂർവ്വികർ ഏൽപ്പിച്ച സമ്പന്നമായ ആരാധനാക്രമ പൈതൃകവും സുറിയാനി പാരമ്പര്യവും ആത്മീയ അച്ചടക്കവും കാത്തുസൂക്ഷിക്കുകയും ആധുനിക സമൂഹത്തിന്റെ ആവശ്യങ്ങൾ നിറവേറ്റാൻ ചലനാത്മകമായി വളരുകയും ചെയ്യുന്നു.",
        },
      },
      {
        heading: { en: "Spiritual Services & Schedule", ml: "ആത്മീയ ശുശ്രൂഷകളും സമയക്രമവും" },
        points: [
          {
            label: { en: "Holy Qurbana", ml: "വിശുദ്ധ കുർബാന" },
            text: {
              en: "Celebrated regularly, bringing the faithful together in divine worship and Holy Communion. Sundays: Morning Prayers at 8:00 AM, followed by Holy Qurbana.",
              ml: "ദൈവീക ആരാധനയിലും വിശുദ്ധ കുർബാനയിലും വിശ്വാസികളെ ഒന്നിപ്പിച്ച് പതിവായി അർപ്പിക്കുന്നു. ഞായറാഴ്ച: രാവിലെ 8:00 ന് പ്രഭാത പ്രാർത്ഥന, തുടർന്ന് വിശുദ്ധ കുർബാന.",
            },
          },
          {
            label: { en: "Feasts & Festivals", ml: "തിരുനാളുകളും ഉത്സവങ്ങളും" },
            text: {
              en: "Annual church feast celebrations honoring our patron saint, St. Peter, along with commemorations of church fathers and historical saints, drawing believers from across the region.",
              ml: "മദ്ധ്യസ്ഥനായ വിശുദ്ധ പത്രോസിന്റെ വാർഷിക ഇടവകാ തിരുനാളും സഭാ പിതാക്കന്മാരുടെയും ചരിത്രപുണ്യവാളന്മാരുടെയും അനുസ്മരണങ്ങളും. പ്രദേശത്തുടനീളമുള്ള വിശ്വാസികളെ ഇത് ആകർഷിക്കുന്നു.",
            },
          },
          {
            label: { en: "Intercessory Prayers", ml: "മദ്ധ്യസ്ഥ പ്രാർത്ഥനകൾ" },
            text: {
              en: "Special novenas and prayer services dedicated to strengthening families and comforting those in need.",
              ml: "കുടുംബങ്ങളെ ശക്തിപ്പെടുത്താനും ആവശ്യമുള്ളവരെ ആശ്വസിപ്പിക്കാനും സമർപ്പിതമായ നൊവേനകളും പ്രാർത്ഥനാ ശുശ്രൂഷകളും.",
            },
          },
        ],
      },
      {
        heading: { en: "Parish Organizations & Ministries", ml: "ഇടവകാ സംഘടനകളും ശുശ്രൂഷകളും" },
        body: {
          en: "Our active spiritual organizations nurture faith and fellowship across all age groups.",
          ml: "എല്ലാ പ്രായക്കാർക്കും വിശ്വാസവും കൂട്ടായ്മയും വളർത്തുന്ന സജീവ ആത്മീയ സംഘടനകളാണിവ.",
        },
        points: [
          {
            label: { en: "Sunday School", ml: "സൺഡേ സ്കൂൾ" },
            href: "/organisations/sunday-school",
            text: {
              en: "Dedicated to imparting biblical knowledge, Orthodox theology, and moral values to the younger generation.",
              ml: "യുവതലമുറയ്ക്ക് ബൈബിൾ അറിവും ഓർത്തഡോക്സ് ദൈവശാസ്ത്രവും ധാർമ്മിക മൂല്യങ്ങളും പകരുന്നു.",
            },
          },
          {
            label: { en: "Orthodox Christian Youth Movement (OCYM)", ml: "ഓർത്തഡോക്സ് ക്രിസ്ത്യൻ യുവജന പ്രസ്ഥാനം (ഒ.സി.വൈ.എം.)" },
            href: "/organisations/ocym",
            text: {
              en: "Fostering leadership, spiritual growth, and social service among the youth.",
              ml: "യുവജനങ്ങളിൽ നേതൃത്വവും ആത്മീയ വളർച്ചയും സാമൂഹിക സേവനവും വളർത്തുന്നു.",
            },
          },
          {
            label: { en: "Martha Mariam Vanitha Samajam", ml: "മാർത്താ മറിയം വനിതാ സമാജം" },
            href: "/organisations/martha-mariam",
            text: {
              en: "A vibrant women's fellowship focused on prayer, charitable outreach, and family welfare.",
              ml: "പ്രാർത്ഥന, ദാനധർമ്മം, കുടുംബക്ഷേമം എന്നിവയിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്ന സജീവ വനിതാ കൂട്ടായ്മ.",
            },
          },
          {
            label: { en: "Balasamajam", ml: "ബാലസമാജം" },
            href: "/organisations/balika-bala-samajam",
            text: {
              en: "Cultivating spiritual awareness, talents, and community bonding among children.",
              ml: "കുട്ടികളിൽ ആത്മീയ ബോധവും കഴിവുകളും സമൂഹ ബന്ധവും വളർത്തുന്നു.",
            },
          },
        ],
      },
      {
        heading: { en: "Global Diaspora & Community Care", ml: "ആഗോള പ്രവാസവും സമൂഹ പരിചരണവും" },
        body: {
          en: "While Elanthoor remains our spiritual anchor, the Karoor parish family extends far beyond the borders of Kerala. We take immense pride in supporting our members living and working across the globe—including the Gulf countries, the United Kingdom, the United States, and Australia. Through digital connectivity, regional prayer groups, and pastoral care, we ensure that every member, near or far, remains intrinsically connected to their home parish and roots.",
          ml: "ഇലന്തൂർ നമ്മുടെ ആത്മീയ നങ്കൂരമായി തുടരുമ്പോൾ, കാരൂർ ഇടവകാ കുടുംബം കേരളത്തിന്റെ അതിരുകൾക്കപ്പുറത്തേക്ക് വ്യാപിക്കുന്നു. ഗൾഫ് രാജ്യങ്ങൾ, യുണൈറ്റഡ് കിംഗ്ഡം, അമേരിക്കൻ ഐക്യനാടുകൾ, ഓസ്ട്രേലിയ എന്നിവിടങ്ങളിൽ ജീവിക്കുകയും പ്രവർത്തിക്കുകയും ചെയ്യുന്ന അംഗങ്ങളെ പിന്തുണയ്ക്കുന്നതിൽ ഞങ്ങൾ അഭിമാനിക്കുന്നു. ഡിജിറ്റൽ ബന്ധം, പ്രാദേശിക പ്രാർത്ഥനാ ഗ്രൂപ്പുകൾ, ഇടയപരിചരണം എന്നിവയിലൂടെ അടുത്തും ദൂരെയുമുള്ള ഓരോ അംഗവും തങ്ങളുടെ മാതൃ ഇടവകയോടും വേരുകളോടും അഭേദ്യമായി ബന്ധപ്പെട്ടിരിക്കുന്നു.",
        },
      },
      {
        heading: { en: "Get Involved & Connect", ml: "പങ്കാളികളാകുക, ബന്ധപ്പെടുക" },
        body: {
          en: "Whether you are a local resident, returning to your ancestral home in Kerala, or visiting from abroad, you are warmly invited to join us in worship.",
          ml: "പ്രാദേശിക നിവാസിയായാലും കേരളത്തിലെ പൂർവ്വിക ഭവനത്തിലേക്ക് മടങ്ങിയെത്തുന്നവരായാലും വിദേശത്തുനിന്ന് സന്ദർശിക്കുന്നവരായാലും ആരാധനയിൽ ഞങ്ങളോടൊപ്പം ചേരാൻ നിങ്ങളെ ഹൃദയപൂർവം ക്ഷണിക്കുന്നു.",
        },
        points: [
          {
            label: { en: "Location", ml: "സ്ഥലം" },
            text: {
              en: "Karoor, Elanthoor P.O., Pathanamthitta District, Kerala, India - 689643",
              ml: "കാരൂർ, ഇലന്തൂർ പി.ഒ., പത്തനംതിട്ട ജില്ല, കേരളം, ഇന്ത്യ - 689643",
            },
          },
          {
            label: { en: "Diocese", ml: "ഭദ്രാസനം" },
            text: {
              en: "Thumpamon Diocese, Malankara Orthodox Syrian Church",
              ml: "തുമ്പമൺ ഭദ്രാസനം, മലങ്കര ഓർത്തഡോക്സ് സുറിയാനി സഭ",
            },
          },
        ],
      },
    ],
  },
  vision: {
    title: { en: "Vision and mission", ml: "ദർശനവും ദൗത്യവും" },
  },
  feasts: {
    title: {
      en: "Parish Feast Days & Liturgical Celebrations",
      ml: "ഇടവകാ തിരുനാളുകളും ആരാധനാക്രമ ആഘോഷങ്ങളും",
    },
    items: [
      {
        title: { en: "1. Annual Perunnal — May 15th", ml: "1. വാർഷിക പെരുന്നാൾ — മേയ് 15" },
        subtitle: {
          en: "Commemorating the Consecration of the Renewed Church",
          ml: "പുതുക്കിയ ദേവാലയത്തിന്റെ കൂദാശയുടെ ഓർമ്മ",
        },
        body: {
          en: "Every year on May 15th, our parish gathers with great joy and thanksgiving to celebrate the Perunnal marking the consecration of our renewed church building. This special day is a time to thank Almighty God for His abundant grace upon our parish community, honoring the physical and spiritual foundation of our church where generations gather to offer the Holy Qurbana, receive the sacraments, and grow together in faith.",
          ml: "എല്ലാ വർഷവും മേയ് 15-ന് നമ്മുടെ ഇടവക വലിയ സന്തോഷത്തോടെയും നന്ദിയോടെയും ഒന്നിച്ചുകൂടി, പുതുക്കിയ ദേവാലയത്തിന്റെ കൂദാശയെ അനുസ്മരിക്കുന്ന പെരുന്നാൾ ആഘോഷിക്കുന്നു. നമ്മുടെ ഇടവകാ സമൂഹത്തിന്മേൽ സർവ്വശക്തനായ ദൈവത്തിന്റെ സമൃദ്ധമായ കൃപയ്ക്ക് നന്ദി പറയുന്ന ദിനമാണിത്. തലമുറകൾ വിശുദ്ധ കുർബാന അർപ്പിക്കാനും കൂദാശകൾ സ്വീകരിക്കാനും വിശ്വാസത്തിൽ ഒന്നിച്ചു വളരാനും കൂടുന്ന നമ്മുടെ ദേവാലയത്തിന്റെ ഭൗതികവും ആത്മീയവുമായ അടിത്തറയെ ഈ ദിനം ബഹുമാനിക്കുന്നു.",
        },
      },
      {
        title: { en: "2. Feast of St. Peter — June 29th", ml: "2. വിശുദ്ധ പത്രോസിന്റെ തിരുനാൾ — ജൂൺ 29" },
        subtitle: {
          en: "Honoring the Chief of the Apostles",
          ml: "പ്രേഷിതരുടെ പ്രമുഖനെ ബഹുമാനിക്കുന്നു",
        },
        body: {
          en: "On June 29th, we join the universal Malankara Orthodox Church in celebrating the glorious Feast of St. Peter (alongside St. Paul). Concluding the traditional Apostles' Fast (Sleeba Nombu), this feast invites us to reflect on St. Peter's profound confession of faith, his journey of repentance, and his apostolic stewardship. It stands as a powerful reminder of our church's apostolic roots and calls us all to renew our commitment to following Christ with courage and devotion.",
          ml: "ജൂൺ 29-ന് സാർവത്രിക മലങ്കര ഓർത്തഡോക്സ് സഭയോടൊപ്പം വിശുദ്ധ പത്രോസിന്റെയും വിശുദ്ധ പൗലോസിന്റെയും മഹത്ത്വമേറിയ തിരുനാൾ ആഘോഷിക്കുന്നു. പരമ്പരാഗത ശ്ലീഹാ നോമ്പിന് സമാപനമായ ഈ തിരുനാൾ വിശുദ്ധ പത്രോസിന്റെ ആഴമേറിയ വിശ്വാസ ഏറ്റുപറച്ചിലിനെയും അനുതാപ യാത്രയെയും അപ്പോസ്തോലിക കാര്യനിർവഹണത്തെയും ധ്യാനിക്കാൻ നമ്മെ ക്ഷണിക്കുന്നു. നമ്മുടെ സഭയുടെ അപ്പോസ്തോലിക വേരുകളുടെ ശക്തമായ ഓർമ്മപ്പെടുത്തലാണിത്. ധൈര്യത്തോടെയും ഭക്തിയോടെയും ക്രിസ്തുവിനെ അനുഗമിക്കാനുള്ള പ്രതിബദ്ധത പുതുക്കാൻ നമ്മെയെല്ലാം വിളിക്കുന്നു.",
        },
      },
    ],
  },
  patron: {
    title: { en: "St. Peter the Apostle", ml: "പ്രേഷിതൻ വിശുദ്ധ പത്രോസ്" },
    body: {
      en: "The parish is dedicated to St. Peter, the apostle who confessed Jesus as the Christ and was called to feed the flock. His feast is kept on 29 June with Holy Qurbana, procession and the gathering of families.",
      ml: "ഈ ഇടവക പ്രേഷിതൻ വിശുദ്ധ പത്രോസിന് സമർപ്പിതമാണ്. തിരുനാൾ ജൂൺ 29-ന് വിശുദ്ധ കുർബാനയോടെയും പ്രദക്ഷിണത്തോടെയും ആചരിക്കുന്നു.",
    },
  },
  architecture: {
    title: { en: "Church building and architecture", ml: "ദേവാലയവും വാസ്തുവിദ്യയും" },
    body: {
      en: "A description of the sanctuary, madbaha, narthex, bell tower, parish hall and cemetery approach will sit here. Until measured drawings and photographs arrive, this page holds the structure for that story — the eastward altar, the Orthodox cross, and the space where Karoor prays.",
      ml: "മദ്ബഹാ, നാർതെക്സ്, മണിമാളിക, പള്ളി ഹാൾ, ശ്മശാനം എന്നിവയുടെ വിവരണം ഇവിടെ വരും. ഫോട്ടോകൾ ലഭിക്കുന്നതുവരെ ഈ ഘടന നിലനിർത്തുന്നു.",
    },
  },
  cemetery: {
    title: { en: "Cemetery information", ml: "ശ്മശാന വിവരങ്ങൾ" },
    body: {
      en: "The parish cemetery is administered by the Managing Committee. Burial of parishioners follows diocesan and civil rules. Families should contact the Vicar and Trustee. Visiting hours and plot records will be published here after office confirmation. Please treat the ground as holy, keep silence, and do not litter.",
      ml: "ഇടവകാ ശ്മശാനം ഭരണസമിതിയുടെ മേൽനോട്ടത്തിലാണ്. സംസ്കാരം ഭദ്രാസന-സിവിൽ നിയമങ്ങൾക്ക് വിധേയം. വികാരിയെയും ട്രസ്റ്റിയെയും ബന്ധപ്പെടുക.",
    },
  },
  privacy: {
    title: { en: "Privacy policy", ml: "സ്വകാര്യതാ നയം" },
    body: {
      en: "Karoor Palli collects only what is needed to answer forms, process offerings and send newsletters you requested. Prayer requests are visible only to the Vicar and authorised clergy. We do not sell personal data. Analytics, if accepted via the cookie banner, is anonymised (Google Analytics 4). You may email office@karoorpalli.com to access or delete your data.",
      ml: "ഫോമുകൾക്കും വഴിപാടുകൾക്കും നിങ്ങൾ ആവശ്യപ്പെട്ട വാർത്താപത്രത്തിനും വേണ്ടി മാത്രമേ വിവരങ്ങൾ ശേഖരിക്കൂ. പ്രാർത്ഥനാ അപേക്ഷകൾ വികാരിക്ക് മാത്രം ദൃശ്യമാണ്.",
    },
  },
  terms: {
    title: { en: "Terms of use", ml: "ഉപയോഗ നിബന്ധനകൾ" },
    body: {
      en: "This website is provided by St. Peter's Orthodox Church, Karoor, for pastoral communication. Content is for information; sacramental bookings are confirmed only by the parish office. Do not misuse forms. Photographs of minors are published only with family consent. The parish may update these terms.",
      ml: "ഈ വെബ്‌സൈറ്റ് ഇടവകാ വാർത്താവിനിമയത്തിനാണ്. കൂദാശകൾ ഓഫീസ് സ്ഥിരീകരിക്കുമ്പോൾ മാത്രം ഉറപ്പാണ്.",
    },
  },
};

export const searchIndex = [
  { href: "/about", title: { en: "About the parish", ml: "ഇടവകയെക്കുറിച്ച്" } },
  { href: "/about/patron", title: { en: "Patron Saint", ml: "മദ്ധ്യസ്ഥൻ" } },
  { href: "/about/feasts", title: { en: "Feasts", ml: "തിരുനാളുകൾ" } },
  { href: "/history", title: { en: "History", ml: "ചരിത്രം" } },
  { href: "/vicar", title: { en: "Vicar", ml: "വികാരി" } },
  { href: "/news", title: { en: "News", ml: "വാർത്തകൾ" } },
  { href: "/events", title: { en: "Events", ml: "പരിപാടികൾ" } },
  { href: "/obituary", title: { en: "Obituary", ml: "അനുസ്മരണം" } },
  { href: "/offerings", title: { en: "Online offerings", ml: "ഓൺലൈൻ വഴിപാട്" } },
  { href: "/contact", title: { en: "Contact", ml: "ബന്ധപ്പെടുക" } },
  { href: "/live", title: { en: "Live stream", ml: "തത്സമയ സംപ്രേഷണം" } },
  { href: "/downloads", title: { en: "Downloads", ml: "ഡൗൺലോഡുകൾ" } },
  { href: "/history", title: { en: "Parish history", ml: "ഇടവകാ ചരിത്രം" } },
  { href: "/gallery", title: { en: "Image gallery", ml: "ചിത്രശാല" } },
  { href: "/charity", title: { en: "Charity", ml: "ദാനധർമ്മം" } },
  { href: "/sacraments", title: { en: "Sacraments", ml: "കൂദാശകൾ" } },
  { href: "/parishioners", title: { en: "Parishioners corner", ml: "ഇടവകാംഗങ്ങളുടെ ഇടം" } },
];
