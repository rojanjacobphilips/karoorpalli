import type { Locale } from "@/lib/i18n";

export type Localized<T> = Record<Locale, T>;

export type NavChild = {
  href: string;
  label: Localized<string>;
};

export type NavItem = {
  href: string;
  label: Localized<string>;
  children?: NavChild[];
};

export type HeroSlide = {
  id: string;
  image: string;
  imageAlt: Localized<string>;
  imagePosition?: string;
  title: Localized<string>;
  caption: Localized<string>;
  cta: Localized<string>;
  href: string;
};

export type NewsItem = {
  slug: string;
  category: Localized<string>;
  title: Localized<string>;
  excerpt: Localized<string>;
  date: string;
  image?: string;
  videos?: string[];
};

export type ParishEvent = {
  slug: string;
  title: Localized<string>;
  date: string;
  time: Localized<string>;
  place: Localized<string>;
  excerpt: Localized<string>;
  image?: string;
};

export type CommitteeMember = {
  name: Localized<string>;
  role: Localized<string>;
  term: string;
  photo: string;
};

export type Organisation = {
  slug: string;
  name: Localized<string>;
  title?: Localized<string>;
  summary: Localized<string>;
  meeting?: Localized<string>;
  lead?: Localized<string>;
  sections?: {
    heading: Localized<string>;
    intro?: Localized<string>;
    points: { label: Localized<string>; text: Localized<string> }[];
  }[];
  note?: Localized<string>;
};

export type DownloadItem = {
  title: Localized<string>;
  category: Localized<string>;
  size: string;
  href: string;
};

export type Obituary = {
  slug: string;
  name: Localized<string>;
  house: Localized<string>;
  age?: number;
  date: string;
  funeral: Localized<string>;
  burial: Localized<string>;
  message: Localized<string>;
  photo: string;
};

export type TimelineEntry = {
  year: string;
  title: Localized<string>;
  body: Localized<string>;
  image?: string;
};

export type Person = {
  name: string;
  role: Localized<string>;
  bio: Localized<string>;
  photo: string;
  email?: string;
  phone?: string;
  facts?: { label: Localized<string>; value: Localized<string> }[];
};
