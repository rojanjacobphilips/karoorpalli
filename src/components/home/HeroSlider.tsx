"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides, ui } from "@/content/site";

const parishName = { en: "Karoor Palli hero", ml: "കാരൂർ പള്ളി ഹീറോ" };
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";

export function HeroSlider({ locale }: { locale: Locale }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const t = (value: { en: string; ml: string }) => value[locale];

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [paused]);

  const slide = heroSlides[index];

  return (
    <section
      className="relative min-h-[78vh] overflow-hidden bg-maroon-deep"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const delta = e.changedTouches[0].clientX - touchX.current;
        if (delta > 40) setIndex((current) => (current - 1 + heroSlides.length) % heroSlides.length);
        if (delta < -40) setIndex((current) => (current + 1) % heroSlides.length);
        touchX.current = null;
      }}
      aria-roledescription="carousel"
      aria-label={t(parishName)}
    >
      {heroSlides.map((item, i) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== index}
        >
          <Image
            src={item.image}
            alt={t(item.imageAlt)}
            fill
            priority={i === 0}
            className={`object-cover ${i === index ? "kenburns" : ""}`}
            style={{ objectPosition: item.imagePosition ?? "center" }}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-maroon-deep/85 via-maroon-deep/55 to-maroon-deep/20" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-end px-4 pb-20 pt-28 lg:px-6">
        <p className="mb-3 text-sm tracking-[0.18em] text-gold">
          {t({
            en: "Malankara Orthodox Syrian Church, karoor, elanthoor",
            ml: "മലങ്കര ഓർത്തഡോക്സ് സുറിയാനി സഭ, കാരൂർ, ഇലന്തൂർ",
          })}
        </p>
        <h1 className="max-w-3xl font-serif text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl">
          {t(slide.title)}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-ivory/90">{t(slide.caption)}</p>
        <Link
          href={localizedPath(locale, slide.href.replace("/#timings", "/#timings"))}
          className="mt-8 inline-flex w-fit rounded-full bg-gold px-6 py-3 font-semibold text-maroon-deep hover:bg-gold-light"
        >
          {t(slide.cta)}
        </Link>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroSlides.map((item, i) => (
          <button
            key={item.id}
            type="button"
            aria-label={`${item.id} ${i + 1}`}
            className={`h-2.5 rounded-full ${i === index ? "w-8 bg-gold" : "w-2.5 bg-ivory/50"}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
      <button
        type="button"
        className="absolute left-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-ivory/90 text-maroon md:grid"
        onClick={() => setIndex((current) => (current - 1 + heroSlides.length) % heroSlides.length)}
        aria-label="Previous slide"
      >
        <ChevronLeft />
      </button>
      <button
        type="button"
        className="absolute right-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-ivory/90 text-maroon md:grid"
        onClick={() => setIndex((current) => (current + 1) % heroSlides.length)}
        aria-label="Next slide"
      >
        <ChevronRight />
      </button>
      <span className="sr-only">{paused ? "paused" : t(ui.readMore)}</span>
    </section>
  );
}
