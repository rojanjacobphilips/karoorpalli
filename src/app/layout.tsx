import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter, Manjari, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manjari = Manjari({
  variable: "--font-manjari",
  subsets: ["malayalam"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://karoorpalli.com"),
  title: {
    default: "Karoor Palli | St. Peter's Orthodox Church, Karoor",
    template: "%s | Karoor Palli",
  },
  description:
    "St. Peter's Orthodox Church, Karoor (Karoor Palli), Elanthoor — a parish of the Malankara Orthodox Syrian Church, Thumpamon Diocese.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Karoor Palli",
    title: "Karoor Palli | St. Peter's Orthodox Church, Karoor",
    description:
      "Holy Qurbana timings, news, events, offerings and parish life in Karoor, Elanthoor, Pathanamthitta.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karoor Palli",
    description: "St. Peter's Orthodox Church, Karoor — Malankara Orthodox Syrian Church.",
  },
  keywords: [
    "Karoor Orthodox Church",
    "Karoor Palli",
    "Malankara Orthodox church Pathanamthitta",
    "St Peter's Orthodox Church Elanthoor",
    "Thumpamon Diocese",
  ],
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = (await headers()).get("x-locale") || "en";
  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${inter.variable} ${manjari.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
