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
      { href: "/about/patron", label: { en: "Patron Saint & Feast", ml: "മദ്ധ്യസ്ഥനും തിരുനാളും" } },
      { href: "/about/architecture", label: { en: "Church Building", ml: "ദേവാലയം" } },
      { href: "/about/cemetery", label: { en: "Cemetery", ml: "ശ്മശാനം" } },
      { href: "/history", label: { en: "History", ml: "ചരിത്രം" } },
    ],
  },
  {
    href: "/administration",
    label: { en: "Administration", ml: "ഭരണം" },
    children: [
      { href: "/administration", label: { en: "Diocesan Metropolitan", ml: "ഭദ്രാസന മെത്രാപ്പോലീത്ത" } },
      { href: "/administration/officers", label: { en: "Trustee, Secretary & Treasurer", ml: "ട്രസ്റ്റി, സെക്രട്ടറി, ട്രഷറർ" } },
      { href: "/vicar", label: { en: "Vicar", ml: "വികാരി" } },
      { href: "/administration/past-vicars", label: { en: "Past Vicars", ml: "മുൻ വികാരിമാർ" } },
      { href: "/committee", label: { en: "Managing Committee", ml: "ഭരണസമിതി" } },
      { href: "/administration/reports", label: { en: "Annual Reports", ml: "വാർഷിക റിപ്പോർട്ടുകൾ" } },
    ],
  },
  {
    href: "/organisations",
    label: { en: "Organisations", ml: "സംഘടനകൾ" },
    children: [
      { href: "/organisations/sunday-school", label: { en: "Sunday School", ml: "സൺഡേ സ്കൂൾ" } },
      { href: "/organisations/mgocsm", label: { en: "MGOCSM", ml: "എം.ജി.ഒ.സി.എസ്.എം." } },
      { href: "/organisations/martha-mariam", label: { en: "Martha Mariam Samajam", ml: "മാർത്താ മറിയം സമാജം" } },
      { href: "/organisations/ocym", label: { en: "OCYM", ml: "ഒ.സി.വൈ.എം." } },
      { href: "/organisations/prayer-groups", label: { en: "Prayer Groups", ml: "പ്രാർത്ഥനാ യൂണിറ്റുകൾ" } },
      { href: "/organisations/choir", label: { en: "Choir", ml: "ഗായകസംഘം" } },
      { href: "/organisations/altar-servers", label: { en: "Altar Servers", ml: "ശുശ്രൂഷകർ" } },
      { href: "/organisations/seniors", label: { en: "Senior Citizens Forum", ml: "മുതിർന്ന പൗര സംഘം" } },
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
    image:
      "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1920&q=80",
    imageAlt: {
      en: "Placeholder: church exterior at dusk (replace with Karoor Palli photograph)",
      ml: "പ്ലേസ്‌ഹോൾഡർ: ദേവാലയത്തിന്റെ പുറം കാഴ്ച",
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
    image:
      "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1920&q=80",
    imageAlt: {
      en: "Placeholder: congregation at prayer during Holy Qurbana",
      ml: "പ്ലേസ്‌ഹോൾഡർ: വിശുദ്ധ കുർബാന",
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
    image:
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1920&q=80",
    imageAlt: { en: "Placeholder: feast-day celebration", ml: "പ്ലേസ്‌ഹോൾഡർ: തിരുനാൾ" },
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
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&q=80",
    imageAlt: { en: "Placeholder: youth gathering", ml: "പ്ലേസ്‌ഹോൾഡർ: യുവജനങ്ങൾ" },
    title: { en: "Youth in the life of the Church", ml: "സഭാ ജീവിതത്തിലെ യുവജനങ്ങൾ" },
    caption: {
      en: "OCYM and MGOCSM invite young people into worship, fellowship and service.",
      ml: "ആരാധന, കൂട്ടായ്മ, സേവനം എന്നിവയിലേക്ക് ഒ.സി.വൈ.എം.യും എം.ജി.ഒ.സി.എസ്.എമ്മും യുവജനങ്ങളെ ക്ഷണിക്കുന്നു.",
    },
    cta: { en: "Join OCYM", ml: "ഒ.സി.വൈ.എം.യിൽ ചേരുക" },
    href: "/organisations/ocym",
  },
  {
    id: "sunday-school",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80",
    imageAlt: { en: "Placeholder: children in Sunday School", ml: "പ്ലേസ്‌ഹോൾഡർ: സൺഡേ സ്കൂൾ" },
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
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80",
    imageAlt: { en: "Placeholder: Kerala landscape near the parish", ml: "പ്ലേസ്‌ഹോൾഡർ: നാട്ടുകാഴ്ച" },
    title: { en: "A home for families near and far", ml: "അടുത്തും അകലെയുമുള്ള കുടുംബങ്ങൾക്ക് ഒരു വീട്" },
    caption: {
      en: "Parishioners in the Gulf, UK, US and Australia remain part of Karoor Palli.",
      ml: "ഗൾഫ്, യുകെ, യുഎസ്, ഓസ്ട്രേലിയ എന്നിവിടങ്ങളിലെ ഇടവകാംഗങ്ങളും കാരൂർ പള്ളിയുടെ ഭാഗമാണ്.",
    },
    cta: { en: "Parishioners corner", ml: "ഇടവകാംഗങ്ങളുടെ ഇടം" },
    href: "/parishioners",
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
  name: "Rev. Fr. Linu Babu",
  role: { en: "Vicar", ml: "വികാരി" },
  photo:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=640&q=80",
  email: "vicar@karoorpalli.com",
  phone: "+91 9XXXX XXXXX",
  bio: {
    en: "Rev. Fr. Linu Babu serves as Parish Vicar of St. Peter’s Orthodox Church, Karoor. A fuller photograph, biography and pastoral message will be added here.",
    ml: "റവ. ഫാ. ലിനു ബാബു സെന്റ് പീറ്റേഴ്‌സ് ഓർത്തഡോക്സ് പള്ളി, കാരൂരിന്റെ വികാരിയാണ്. ഫോട്ടോയും ജീവചരിത്രവും ഇടവകാ സന്ദേശവും ഇവിടെ ചേർക്കും.",
  },
};

export const metropolitan: Person = {
  name: "H.G. Dr. Abraham Mar Seraphim",
  role: { en: "Metropolitan of Thumpamon Diocese", ml: "തുമ്പമൺ ഭദ്രാസന മെത്രാപ്പോലീത്ത" },
  photo:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=640&q=80",
  bio: {
    en: "Karoor Palli is under the pastoral care of H.G. Dr. Abraham Mar Seraphim, Metropolitan of the Thumpamon Diocese of the Malankara Orthodox Syrian Church.",
    ml: "കാരൂർ പള്ളി മലങ്കര ഓർത്തഡോക്സ് സുറിയാനി സഭയുടെ തുമ്പമൺ ഭദ്രാസന മെത്രാപ്പോലീത്ത ഹി.ഗി. ഡോ. ഏബ്രഹാം മാർ സെറാഫിമിന്റെ ആത്മീയ മേൽനോട്ടത്തിലാണ്.",
  },
};

export const officers: Person[] = [
  {
    name: "[Trustee Name]",
    role: { en: "Parish Trustee", ml: "ഇടവകാ ട്രസ്റ്റി" },
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    bio: { en: "Placeholder officer profile.", ml: "പ്ലേസ്‌ഹോൾഡർ." },
  },
  {
    name: "[Secretary Name]",
    role: { en: "Secretary", ml: "സെക്രട്ടറി" },
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    bio: { en: "Placeholder officer profile.", ml: "പ്ലേസ്‌ഹോൾഡർ." },
  },
  {
    name: "[Treasurer Name]",
    role: { en: "Treasurer", ml: "ട്രഷറർ" },
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    bio: { en: "Placeholder officer profile.", ml: "പ്ലേസ്‌ഹോൾഡർ." },
  },
];

export const news: NewsItem[] = [
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
      en: "Catechesis for children, OVBS and annual examinations of the Orthodox Sunday School.",
      ml: "കുട്ടികൾക്കുള്ള വിശ്വാസപഠനം, ഒ.വി.ബി.എസ്., വാർഷിക പരീക്ഷ.",
    },
    meeting: { en: "Sundays 9:30 AM", ml: "ഞായറാഴ്ച 9:30 AM" },
  },
  {
    slug: "mgocsm",
    name: { en: "MGOCSM", ml: "എം.ജി.ഒ.സി.എസ്.എം." },
    summary: {
      en: "Mar Gregorios Orthodox Christian Student Movement — campus and student ministry.",
      ml: "മാർ ഗ്രീഗോറിയോസ് ഓർത്തഡോക്സ് ക്രൈസ്തവ വിദ്യാർത്ഥി പ്രസ്ഥാനം.",
    },
    meeting: { en: "Second Saturday 5:00 PM", ml: "രണ്ടാം ശനി 5:00 PM" },
  },
  {
    slug: "martha-mariam",
    name: { en: "Martha Mariam Samajam", ml: "മാർത്താ മറിയം സമാജം" },
    summary: {
      en: "Women’s fellowship for prayer, pastoral care and charity.",
      ml: "പ്രാർത്ഥന, ഇടവകാ ശുശ്രൂഷ, ദാനധർമ്മം എന്നിവയ്ക്കുള്ള വനിതാ കൂട്ടായ്മ.",
    },
    meeting: { en: "First Wednesday 10:00 AM", ml: "ഒന്നാം ബുധൻ 10:00 AM" },
  },
  {
    slug: "ocym",
    name: { en: "Orthodox Youth Movement", ml: "ഓർത്തഡോക്സ് യുവജന പ്രസ്ഥാനം" },
    summary: {
      en: "Worship, study and service for the youth of Karoor Palli.",
      ml: "കാരൂർ പള്ളിയിലെ യുവജനങ്ങൾക്ക് ആരാധന, പഠനം, സേവനം.",
    },
    meeting: { en: "Second Sunday 4:00 PM", ml: "രണ്ടാം ഞായർ 4:00 PM" },
  },
  {
    slug: "prayer-groups",
    name: { en: "Prayer Groups", ml: "പ്രാർത്ഥനാ യൂണിറ്റുകൾ" },
    summary: {
      en: "Area prayer fellowships that visit homes and care for neighbours.",
      ml: "വീടുകൾ സന്ദർശിച്ച് അയൽക്കാരെ പരിപാലിക്കുന്ന പ്രാദേശിക യൂണിറ്റുകൾ.",
    },
    meeting: { en: "Weekly by unit", ml: "യൂണിറ്റ് അനുസരിച്ച് ആഴ്ചതോറും" },
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
    name: { en: "Altar Servers", ml: "ശുശ്രൂഷകർ" },
    summary: {
      en: "Boys and young men trained for reverent service at the altar.",
      ml: "മദ്ബഹാ ശുശ്രൂഷയ്ക്ക് പരിശീലിപ്പിക്കുന്ന ബാലന്മാരും യുവാക്കളും.",
    },
    meeting: { en: "Before Sunday Qurbana", ml: "ഞായറാഴ്ച കുർബാനയ്ക്ക് മുമ്പ്" },
  },
  {
    slug: "seniors",
    name: { en: "Senior Citizens Forum", ml: "മുതിർന്ന പൗര സംഘം" },
    summary: {
      en: "Fellowship, health visits and prayer for our elders.",
      ml: "മുതിർന്നവർക്കുള്ള കൂട്ടായ്മ, ആരോഗ്യ സന്ദർശനം, പ്രാർത്ഥന.",
    },
    meeting: { en: "Third Tuesday 10:30 AM", ml: "മൂന്നാം ചൊവ്വ 10:30 AM" },
  },
];

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

export const videos = [
  {
    id: "live",
    title: { en: "Holy Qurbana live", ml: "വിശുദ്ധ കുർബാന തത്സമയം" },
    youtube: "",
    category: { en: "Live", ml: "തത്സമയം" },
  },
  {
    id: "feast",
    title: { en: "Feast day highlights (add YouTube ID in Sanity)", ml: "തിരുനാൾ ദൃശ്യങ്ങൾ" },
    youtube: "",
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
    title: { en: "Parish bulletin — October 2026 (sample)", ml: "ഇടവകാ ബുള്ളറ്റിൻ — ഒക്ടോബർ 2026" },
    category: { en: "Bulletin", ml: "ബുള്ളറ്റിൻ" },
    size: "1.2 MB",
    href: "/downloads/sample.txt",
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
    slug: "sample-remembrance",
    name: "[Name of the faithful departed]",
    house: { en: "[House name], Karoor", ml: "[വീട്ടുപേര്], കാരൂർ" },
    age: 78,
    date: "2026-09-14",
    funeral: { en: "Funeral Qurbana: 16 Sep 2026, 10:00 AM at Karoor Palli", ml: "ശവസംസ്കാര കുർബാന: 2026 സെപ് 16, 10:00 AM കാരൂർ പള്ളി" },
    burial: { en: "Parish cemetery, Karoor", ml: "ഇടവകാ ശ്മശാനം, കാരൂർ" },
    message: {
      en: "The parish remembers our brother/sister in the hope of the resurrection. Kindly keep the family in prayer. This entry is a respectful sample until the Obituary Editor posts from the CMS.",
      ml: "ഉയിർത്തെഴുന്നേൽപ്പിന്റെ പ്രത്യാശയിൽ ഇടവക ഓർക്കുന്നു. കുടുംബത്തെ പ്രാർത്ഥനയിൽ ഓർക്കുക. ഇത് സാമ്പിൾ രേഖയാണ്.",
    },
    photo:
      "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?auto=format&fit=crop&w=400&q=80",
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

export const committee: CommitteeMember[] = [
  {
    name: "[Member 1]",
    role: { en: "Trustee", ml: "ട്രസ്റ്റി" },
    term: "2025–2026",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "[Member 2]",
    role: { en: "Secretary", ml: "സെക്രട്ടറി" },
    term: "2025–2026",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "[Member 3]",
    role: { en: "Treasurer", ml: "ട്രഷറർ" },
    term: "2025–2026",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "[Member 4]",
    role: { en: "Committee member", ml: "സമിതി അംഗം" },
    term: "2025–2026",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
];

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
    body: {
      en: "Welcome to the official web page of St. Peter’s Orthodox Church, Karoor. Located in the peaceful village of Elanthoor within the Pathanamthitta district of Kerala, our parish serves as a spiritual home for the local Orthodox Christian community under the pastoral guidance of the Malankara Orthodox Syrian Church (Thumpamon Diocese).\n\nWe gather for Holy Qurbana, teach the faith to our children, and care for families in Kerala and across the Gulf, UK, US and Australia.",
      ml: "സെന്റ് പീറ്റേഴ്‌സ് ഓർത്തഡോക്സ് പള്ളി, കാരൂരിന്റെ ഔദ്യോഗിക വെബ് പേജിലേക്ക് സ്വാഗതം. പത്തനംതിട്ട ജില്ലയിലെ ഇലന്തൂരിലെ ശാന്തമായ ഗ്രാമത്തിൽ സ്ഥിതി ചെയ്യുന്ന ഈ ഇടവക, മലങ്കര ഓർത്തഡോക്സ് സുറിയാനി സഭയുടെ (തുമ്പമൺ ഭദ്രാസനം) ആത്മീയ മേൽനോട്ടത്തിൽ പ്രാദേശിക ഓർത്തഡോക്സ് വിശ്വാസികൾക്ക് ഒരു ആത്മീയ ഭവനമാണ്.\n\nവിശുദ്ധ കുർബാനയ്ക്കായി നാം ഒന്നിക്കുന്നു, കുട്ടികൾക്ക് വിശ്വാസം പഠിപ്പിക്കുന്നു, കേരളത്തിലും ഗൾഫ്, യുകെ, യുഎസ്, ഓസ്ട്രേലിയ എന്നിവിടങ്ങളിലുമുള്ള കുടുംബങ്ങളെ പരിപാലിക്കുന്നു.",
    },
  },
  vision: {
    title: { en: "Vision and mission", ml: "ദർശനവും ദൗത്യവും" },
  },
  patron: {
    title: { en: "St. Peter the Apostle", ml: "പ്രേഷിതൻ വിശുദ്ധ പത്രോസ്" },
    body: {
      en: "The parish is dedicated to St. Peter, the apostle who confessed Jesus as the Christ and was called to feed the flock. His feast is kept on 29 June with Holy Qurbana, procession and the gathering of families. Icons and a full synaxarion will be added when the parish supplies images.",
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
