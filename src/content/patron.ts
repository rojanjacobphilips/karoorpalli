import type { Locale } from "@/lib/i18n";

export type PatronSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type PatronEssay = {
  title: string;
  lead: string;
  sections: PatronSection[];
  closing: string;
};

export const patronEssay: Record<Locale, PatronEssay> = {
  en: {
    title: "The Rock of Faith and Apostolic Grace: St. Peter in the Malankara Orthodox Perspective",
    lead: "Within the rich liturgical, spiritual, and theological tapestry of the **Malankara Orthodox Syrian Church** (the Indian Orthodox Church), **Saint Peter** holds a deeply revered and foundational place. As an integral member of the Oriental Orthodox communion, the Malankara Church views St. Peter not merely as a historical figure of the early Christian movement, but as the chief of the Apostles, a pillar of faith, and the foundational first occupant of the Apostolic See of Antioch—from which the lineage of the Church’s spiritual authority historically flows.",
    sections: [
      {
        heading: "1. The Chief of the Apostles and Confessor of the Faith",
        paragraphs: [
          "In the Malankara Orthodox tradition, St. Peter’s pivotal confession—*\"You are the Messiah, the Son of the living God\"* (Matthew 16:16)—is viewed as the bedrock of Christian identity. Christ’s response to Peter (\"Upon this rock I will build My Church\") is understood through the eyes of the Church Fathers as a commendation of the *faith* that Peter confessed.",
          "Far from being portrayed as flawless, Peter’s human journey—his impulsive zeal, his walking on water, his bitter tears of repentance after the denial, and his subsequent restoration by the risen Christ—resonates deeply with the Orthodox understanding of spiritual frailty and divine mercy. He stands in the liturgy as a supreme example of human weakness transformed by grace, proving that repentance can mend even the deepest fractures in our relationship with God.",
        ],
      },
      {
        heading: "2. Liturgical Commemoration: The Apostles' Fast and Feast",
        paragraphs: [
          "The memory of St. Peter is not confined to theology books; it is lived out dynamically through the liturgical calendar of the Malankara Church:",
        ],
        list: [
          "**The Apostles' Fast (*Sleeba Nombu* or the Fast of the Holy Apostles):** Leading up to the joint feast of St. Peter and St. Paul, the faithful participate in a period of fasting and spiritual discipline. This tradition mirrors the fasting and prayer of the early apostolic community as they prepared for the work of evangelization.",
          "**The Feast of Sts. Peter and Paul (June 29):** Celebrated with solemn Holy Qurbana (Eucharist) across parishes, this day honors the joint martyrdom and apostolic zeal of Peter, the fisherman of Galilee, and Paul, the apostle to the Gentiles. In the prayers of the liturgy, their names are invoked as twin pillars who upheld the canopy of the global Church.",
        ],
      },
      {
        heading: "3. A Patron of Repentance and Pastoral Care",
        paragraphs: [
          "In the sacramental life of the Malankara Orthodox Church, where the mystery of Holy Confession (Penance) is treated as a vital second baptism of tears, St. Peter occupies a special place of comfort. Believers looking up to Peter remember that the apostle who wept bitterly after denying his Lord was met not with condemnation, but with the compassionate, restoring fire of Christ’s love by the Sea of Galilee (*\"Do you love me? Feed my sheep\"*). For struggling believers, Peter is the ultimate patron of restoration—proving that a fall into sin is never the end of a Christian's story when met with genuine repentance.",
        ],
      },
    ],
    closing:
      "To the Malankara Orthodox Syrian Church, St. Peter is much more than a historical relic of the ancient Near East. He is a living presence in the communion of saints, a voice speaking through the ancient Syriac liturgies, and an elder brother in the faith. Through his writings, his courageous witness, and his enduring legacy tied to the Apostolic See, St. Peter continues to point the faithful of India and the world toward the same eternal confession: that Jesus Christ is Lord, to the glory of God the Father.",
  },
  ml: {
    title: "വിശ്വാസത്തിന്റെ പാറയും അപ്പോസ്തോലിക കൃപയും: മലങ്കര ഓർത്തഡോക്സ് ദൃഷ്ടിയിൽ വിശുദ്ധ പത്രോസ്",
    lead: "**മലങ്കര ഓർത്തഡോക്സ് സുറിയാനി സഭയുടെ** (ഇന്ത്യൻ ഓർത്തഡോക്സ് സഭ) ആരാധനാക്രമപരവും ആത്മീയവും ദൈവശാസ്ത്രപരവുമായ സമ്പന്നമായ പാരമ്പര്യത്തിൽ **വിശുദ്ധ പത്രോസ്** ആഴമായി ആദരിക്കപ്പെടുന്ന അടിസ്ഥാന സ്ഥാനം വഹിക്കുന്നു. ഓറിയന്റൽ ഓർത്തഡോക്സ് കൂട്ടായ്മയിലെ അംഗമായ മലങ്കര സഭ വിശുദ്ധ പത്രോസിനെ ആദിമ ക്രൈസ്തവ പ്രസ്ഥാനത്തിലെ ഒരു ചരിത്ര വ്യക്തിയായി മാത്രമല്ല, പ്രേഷിതരുടെ പ്രമുഖൻ, വിശ്വാസത്തിന്റെ തൂൺ, അന്ത്യോക്യയുടെ അപ്പോസ്തോലിക സിംഹാസനത്തിന്റെ ആദ്യ അധിപൻ എന്നീ നിലകളിൽ കാണുന്നു. സഭയുടെ ആത്മീയ അധികാരത്തിന്റെ പാരമ്പര്യം ചരിത്രപരമായി അവിടെ നിന്നാണ് ഒഴുകുന്നത്.",
    sections: [
      {
        heading: "1. പ്രേഷിതരുടെ പ്രമുഖനും വിശ്വാസത്തിന്റെ ഏറ്റുപറച്ചിൽക്കാരനും",
        paragraphs: [
          "മലങ്കര ഓർത്തഡോക്സ് പാരമ്പര്യത്തിൽ വിശുദ്ധ പത്രോസിന്റെ നിർണായക ഏറ്റുപറച്ചിൽ — *\"നീ ജീവനുള്ള ദൈവത്തിന്റെ പുത്രനായ മിശിഹാ ആകുന്നു\"* (മത്തായി 16:16) — ക്രൈസ്തവ സ്വത്വത്തിന്റെ അടിത്തറയായി കാണുന്നു. പത്രോസിനോടുള്ള ക്രിസ്തുവിന്റെ മറുപടി (\"ഈ പാറമേൽ ഞാൻ എന്റെ സഭ പണിയും\") സഭാപിതാക്കന്മാരുടെ ദൃഷ്ടിയിൽ പത്രോസ് ഏറ്റുപറഞ്ഞ *വിശ്വാസത്തെ* പ്രശംസിക്കുന്നതായി മനസ്സിലാക്കുന്നു.",
          "പിഴവില്ലാത്തവനായി ചിത്രീകരിക്കപ്പെടാതെ, പത്രോസിന്റെ മാനുഷിക യാത്ര — അദ്ദേഹത്തിന്റെ ആവേശം, വെള്ളത്തിനുമീതെ നടന്നത്, തള്ളിപ്പറഞ്ഞതിന് ശേഷമുള്ള കയ്പേറിയ കണ്ണീർ, ഉയിർത്തെഴുന്നേറ്റ ക്രിസ്തുവിന്റെ പുനഃസ്ഥാപനം — ആത്മീയ ബലഹീനതയെയും ദൈവിക കരുണയെയും കുറിച്ചുള്ള ഓർത്തഡോക്സ് ധാരണയോട് ആഴത്തിൽ ചേരുന്നു. അനുതാപത്തിന് ദൈവവുമായുള്ള ബന്ധത്തിലെ ആഴമേറിയ വിള്ളലുകൾ പോലും യോജിപ്പിക്കാൻ കഴിയുമെന്നതിന്റെ ഉന്നത മാതൃകയായി അദ്ദേഹം ആരാധനാക്രമത്തിൽ നിലകൊള്ളുന്നു.",
        ],
      },
      {
        heading: "2. ആരാധനാക്രമ സ്മരണ: ശ്ലീഹാ നോമ്പും തിരുനാളും",
        paragraphs: [
          "വിശുദ്ധ പത്രോസിന്റെ ഓർമ്മ ദൈവശാസ്ത്ര ഗ്രന്ഥങ്ങളിൽ മാത്രം ഒതുങ്ങുന്നില്ല. മലങ്കര സഭയുടെ ആരാധനാക്രമ കലണ്ടറിലൂടെ അത് ജീവിക്കുന്നു:",
        ],
        list: [
          "**ശ്ലീഹന്മാരുടെ നോമ്പ് (*ശ്ലീഹാ നോമ്പ്* അഥവാ വിശുദ്ധ പ്രേഷിതരുടെ നോമ്പ്):** വിശുദ്ധ പത്രോസിന്റെയും വിശുദ്ധ പൗലോസിന്റെയും സംയുക്ത തിരുനാളിന് മുമ്പ് വിശ്വാസികൾ നോമ്പിലും ആത്മീയ അച്ചടക്കത്തിലും പങ്കെടുക്കുന്നു. സുവിശേഷ പ്രവർത്തനത്തിന് ഒരുങ്ങിയ ആദിമ അപ്പോസ്തോലിക സമൂഹത്തിന്റെ നോമ്പും പ്രാർത്ഥനയും ഈ പാരമ്പര്യം പ്രതിഫലിപ്പിക്കുന്നു.",
          "**വിശുദ്ധ പത്രോസിന്റെയും പൗലോസിന്റെയും തിരുനാൾ (ജൂൺ 29):** ഇടവകകളിൽ വിശുദ്ധ കുർബാനയോടെ ആചരിക്കുന്ന ഈ ദിനം ഗലീലിയിലെ മുക്കുവനായ പത്രോസിന്റെയും ജാതികളുടെ പ്രേഷിതനായ പൗലോസിന്റെയും രക്തസാക്ഷിത്വത്തെയും അപ്പോസ്തോലിക തീക്ഷ്ണതയെയും ബഹുമാനിക്കുന്നു. ആരാധനാക്രമ പ്രാർത്ഥനകളിൽ അവരുടെ നാമങ്ങൾ സാർവത്രിക സഭയുടെ മേലാപ്പ് ഉയർത്തിപ്പിടിച്ച ഇരട്ട തൂണുകളായി വിളിക്കപ്പെടുന്നു.",
        ],
      },
      {
        heading: "3. അനുതാപത്തിന്റെയും ഇടയശുശ്രൂഷയുടെയും മദ്ധ്യസ്ഥൻ",
        paragraphs: [
          "മലങ്കര ഓർത്തഡോക്സ് സഭയുടെ കൂദാശാ ജീവിതത്തിൽ, വിശുദ്ധ കുമ്പസാരം കണ്ണീരിന്റെ രണ്ടാം ജ്ഞാനസ്നാനമായി കരുതപ്പെടുന്നിടത്ത്, വിശുദ്ധ പത്രോസ് പ്രത്യേക ആശ്വാസസ്ഥാനം വഹിക്കുന്നു. പത്രോസിനെ നോക്കുന്ന വിശ്വാസികൾ ഓർക്കുന്നു: കർത്താവിനെ തള്ളിപ്പറഞ്ഞ് കയ്പോടെ കരഞ്ഞ പ്രേഷിതനെ ഗലീലാ കടല്‍ത്തീരത്ത് ക്രിസ്തു ശിക്ഷിച്ചില്ല; *\"നീ എന്നെ സ്നേഹിക്കുന്നുവോ? എന്റെ ആടുകളെ മേയിക്ക\"* എന്ന കരുണയുള്ള പുനഃസ്ഥാപനത്തോടെ അദ്ദേഹത്തെ കൈക്കൊണ്ടു. വീഴ്ച അനുഭവിക്കുന്ന വിശ്വാസികൾക്ക് പത്രോസ് പുനഃസ്ഥാപനത്തിന്റെ മദ്ധ്യസ്ഥനാണ് — യഥാർത്ഥ അനുതാപം ഉണ്ടെങ്കിൽ പാപത്തിലേക്കുള്ള വീഴ്ച ഒരു ക്രൈസ്തവന്റെ കഥയുടെ അവസാനമല്ല.",
        ],
      },
    ],
    closing:
      "മലങ്കര ഓർത്തഡോക്സ് സുറിയാനി സഭയെ സംബന്ധിച്ചിടത്തോളം വിശുദ്ധ പത്രോസ് പുരാതന നിയർ ഈസ്റ്റിലെ ഒരു ചരിത്ര അവശിഷ്ടം മാത്രമല്ല. വിശുദ്ധരുടെ കൂട്ടായ്മയിലെ ജീവിക്കുന്ന സാന്നിധ്യവും പുരാതന സുറിയാനി ആരാധനാക്രമങ്ങളിലൂടെ സംസാരിക്കുന്ന ശബ്ദവും വിശ്വാസത്തിലെ മൂത്ത സഹോദരനുമാണ് അദ്ദേഹം. തന്റെ ലേഖനങ്ങളിലൂടെയും ധീര സാക്ഷ്യത്തിലൂടെയും അപ്പോസ്തോലിക സിംഹാസനവുമായി ബന്ധപ്പെട്ട നിലനിൽക്കുന്ന പൈതൃകത്തിലൂടെയും വിശുദ്ധ പത്രോസ് ഇന്ത്യയിലെയും ലോകത്തിലെയും വിശ്വാസികളെ അതേ നിത്യമായ ഏറ്റുപറച്ചിലിലേക്ക് ചൂണ്ടിക്കാണിക്കുന്നു: യേശുക്രിസ്തു കർത്താവാണ്, പിതാവായ ദൈവത്തിന്റെ മഹത്ത്വത്തിനായി.",
  },
};
