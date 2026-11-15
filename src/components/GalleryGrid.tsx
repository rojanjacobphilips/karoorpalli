"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";

type GalleryImage = {
  src: string;
  alt: { en: string; ml: string };
  type?: "image" | "video";
};

function GalleryVideo({ src, label }: { src: string; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative mb-4">
      <video
        ref={videoRef}
        src={src}
        controls
        playsInline
        preload="metadata"
        aria-label={label}
        className="max-h-[calc(100svh-30rem)] w-full rounded-2xl bg-maroon-deep object-contain"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      {playing ? null : (
        <button
          type="button"
          className="absolute inset-x-0 top-0 bottom-16 grid place-items-center"
          aria-label={label}
          onClick={() => void videoRef.current?.play()}
        >
          <span className="grid h-16 w-16 place-items-center rounded-full bg-maroon text-2xl text-ivory shadow-lg">
            ▶
          </span>
        </button>
      )}
    </div>
  );
}

export function GalleryGrid({ locale, images }: { locale: Locale; images: GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null);
  const current = active != null ? images[active] : null;
  const videoOnly = images.every((img) => img.type === "video");
  const photoIndexes = images
    .map((img, index) => (img.type === "video" ? -1 : index))
    .filter((index) => index >= 0);

  function step(delta: number) {
    if (active == null || photoIndexes.length === 0) return;
    const position = photoIndexes.indexOf(active);
    if (position < 0) return;
    const next =
      photoIndexes[(position + delta + photoIndexes.length) % photoIndexes.length];
    setActive(next);
  }

  useEffect(() => {
    if (active == null) return;
    const indexes = images
      .map((img, index) => (img.type === "video" ? -1 : index))
      .filter((index) => index >= 0);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
        return;
      }
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
      event.preventDefault();
      const delta = event.key === "ArrowRight" ? 1 : -1;
      setActive((current) => {
        if (current == null || indexes.length === 0) return current;
        const position = indexes.indexOf(current);
        if (position < 0) return current;
        return indexes[(position + delta + indexes.length) % indexes.length];
      });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, images]);

  return (
    <>
      <div className={videoOnly ? "mx-auto mt-8 max-w-md" : "masonry mt-8"}>
        {images.map((img, index) =>
          img.type === "video" ? (
            <GalleryVideo key={img.src} src={img.src} label={img.alt[locale]} />
          ) : (
            <button
              key={img.src}
              type="button"
              className="mb-4 block w-full"
              onClick={() => setActive(index)}
            >
              <Image
                src={img.src}
                alt={img.alt[locale]}
                width={1024}
                height={768}
                loading="lazy"
                className="w-full rounded-2xl"
              />
            </button>
          ),
        )}
      </div>
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
          {photoIndexes.length > 1 ? (
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
        </div>
      ) : null}
    </>
  );
}
