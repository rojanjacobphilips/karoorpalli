"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n";

type Localized = { en: string; ml: string };

type Chapel = {
  name: Localized;
  place?: Localized;
  image?: string;
  imageAlt?: Localized;
};

type FormerChapel = {
  name: Localized;
  place: Localized;
  note: Localized;
  oldImage?: string;
  oldImageAlt: Localized;
  currentImages: { src: string; alt: Localized }[];
};

type Shrine = {
  name: Localized;
  image?: string;
};

type Slide = { src: string; alt: Localized };

function PhotoFrame({
  src,
  alt,
  emptyLabel,
  onOpen,
}: {
  src?: string;
  alt: string;
  emptyLabel: string;
  onOpen?: () => void;
}) {
  if (!src) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ivory-deep">
        <div className="grid h-full place-items-center px-6 text-center text-sm text-muted">{emptyLabel}</div>
      </div>
    );
  }

  const image = (
    <Image src={src} alt={alt} width={1200} height={800} className="h-full w-full object-cover" />
  );

  if (!onOpen) {
    return <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ivory-deep">{image}</div>;
  }

  return (
    <button
      type="button"
      onClick={onOpen}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-ivory-deep transition hover:opacity-95"
      aria-label={alt}
    >
      {image}
    </button>
  );
}

export function ChapelsShrinesContent({
  locale,
  chapels,
  formerChapels,
  shrines,
}: {
  locale: Locale;
  chapels: Chapel[];
  formerChapels: FormerChapel[];
  shrines: Shrine[];
}) {
  const photoSoon = locale === "ml" ? "ചിത്രം ഉടൻ ചേർക്കും" : "Photo to be added";
  const slides = useMemo(() => {
    const list: Slide[] = [];
    for (const chapel of chapels) {
      if (chapel.image) {
        list.push({ src: chapel.image, alt: chapel.imageAlt ?? chapel.name });
      }
    }
    for (const chapel of formerChapels) {
      if (chapel.oldImage) {
        list.push({ src: chapel.oldImage, alt: chapel.oldImageAlt });
      }
      for (const photo of chapel.currentImages) {
        list.push(photo);
      }
    }
    for (const shrine of shrines) {
      if (shrine.image) {
        list.push({ src: shrine.image, alt: shrine.name });
      }
    }
    return list;
  }, [chapels, formerChapels, shrines]);

  const [active, setActive] = useState<number | null>(null);
  const current = active != null ? slides[active] : null;

  function openBySrc(src: string) {
    const index = slides.findIndex((slide) => slide.src === src);
    if (index >= 0) setActive(index);
  }

  function step(delta: number) {
    setActive((currentIndex) => {
      if (currentIndex == null || slides.length === 0) return currentIndex;
      return (currentIndex + delta + slides.length) % slides.length;
    });
  }

  useEffect(() => {
    if (active == null) return;
    const total = slides.length;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
        return;
      }
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
      event.preventDefault();
      const delta = event.key === "ArrowRight" ? 1 : -1;
      setActive((currentIndex) => {
        if (currentIndex == null || total === 0) return currentIndex;
        return (currentIndex + delta + total) % total;
      });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, slides.length]);

  return (
    <>
      <section className="mt-10">
        <h2 className="font-serif text-3xl text-maroon">{locale === "ml" ? "കപ്പേളകൾ" : "Chapels"}</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {chapels.map((chapel) => (
            <article key={chapel.name.en} className="overflow-hidden rounded-3xl bg-card shadow-[var(--shadow)]">
              <PhotoFrame
                src={chapel.image}
                alt={chapel.imageAlt?.[locale] || chapel.name[locale]}
                emptyLabel={photoSoon}
                onOpen={chapel.image ? () => openBySrc(chapel.image!) : undefined}
              />
              <div className="p-5">
                <h3 className="font-serif text-2xl text-maroon">{chapel.name[locale]}</h3>
                {chapel.place ? <p className="mt-1 text-sm text-gold">{chapel.place[locale]}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-serif text-3xl text-maroon">
          {locale === "ml" ? "മുൻ കപ്പേള" : "Former Chapel"}
        </h2>
        <div className="mt-6 space-y-8">
          {formerChapels.map((chapel) => (
            <article key={chapel.name.en} className="rounded-3xl bg-card p-5 shadow-[var(--shadow)] sm:p-6">
              <h3 className="font-serif text-2xl text-maroon sm:text-3xl">{chapel.name[locale]}</h3>
              <p className="mt-1 text-sm text-gold">{chapel.place[locale]}</p>
              <p className="mt-3 text-muted">{chapel.note[locale]}</p>

              <div className="mt-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  {locale === "ml" ? "പഴയ ചിത്രം" : "Old photo"}
                </p>
                <div className="max-w-xl">
                  <PhotoFrame
                    src={chapel.oldImage}
                    alt={chapel.oldImageAlt[locale]}
                    emptyLabel={photoSoon}
                    onOpen={chapel.oldImage ? () => openBySrc(chapel.oldImage!) : undefined}
                  />
                </div>
              </div>

              <div className="mt-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  {locale === "ml" ? "ഇപ്പോഴത്തെ ചിത്രങ്ങൾ" : "Current photos"}
                </p>
                {chapel.currentImages.length ? (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {chapel.currentImages.map((photo) => (
                      <PhotoFrame
                        key={photo.src}
                        src={photo.src}
                        alt={photo.alt[locale]}
                        emptyLabel={photoSoon}
                        onOpen={() => openBySrc(photo.src)}
                      />
                    ))}
                  </div>
                ) : (
                  <PhotoFrame
                    src={undefined}
                    alt=""
                    emptyLabel={
                      locale === "ml"
                        ? "ഇപ്പോഴത്തെ ദേവാലയ ചിത്രം ചേർക്കുക"
                        : "Add current church photo"
                    }
                  />
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-serif text-3xl text-maroon">{locale === "ml" ? "ശ്രൈനുകൾ" : "Shrines"}</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shrines.map((shrine, index) => (
            <article key={shrine.name.en} className="overflow-hidden rounded-3xl bg-card shadow-[var(--shadow)]">
              <PhotoFrame
                src={shrine.image}
                alt={shrine.name[locale]}
                emptyLabel={photoSoon}
                onOpen={shrine.image ? () => openBySrc(shrine.image!) : undefined}
              />
              <div className="flex items-start gap-3 p-5">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-maroon text-sm font-semibold text-ivory">
                  {index + 1}
                </span>
                <h3 className="font-serif text-xl text-maroon sm:text-2xl">{shrine.name[locale]}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {current ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-maroon-deep/90 p-4"
          role="dialog"
          aria-modal
          aria-label={current.alt[locale]}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-ivory/15 text-ivory hover:bg-ivory/25"
            aria-label={locale === "ml" ? "അടയ്ക്കുക" : "Close"}
            onClick={() => setActive(null)}
          >
            <X className="h-5 w-5" />
          </button>
          {slides.length > 1 ? (
            <>
              <button
                type="button"
                className="absolute left-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-ivory/15 text-ivory hover:bg-ivory/25 md:left-6"
                aria-label={locale === "ml" ? "മുമ്പത്തെ ചിത്രം" : "Previous image"}
                onClick={(event) => {
                  event.stopPropagation();
                  step(-1);
                }}
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
              <button
                type="button"
                className="absolute right-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-ivory/15 text-ivory hover:bg-ivory/25 md:right-6"
                aria-label={locale === "ml" ? "അടുത്ത ചിത്രം" : "Next image"}
                onClick={(event) => {
                  event.stopPropagation();
                  step(1);
                }}
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </>
          ) : null}
          <Image
            src={current.src}
            alt={current.alt[locale]}
            width={1400}
            height={900}
            className="max-h-[90vh] w-auto rounded-2xl object-contain"
            onClick={(event) => event.stopPropagation()}
          />
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-maroon-deep/70 px-3 py-1 text-xs text-ivory">
            {(active ?? 0) + 1} / {slides.length}
          </p>
        </div>
      ) : null}
    </>
  );
}
