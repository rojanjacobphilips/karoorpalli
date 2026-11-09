"use client";

import Image from "next/image";
import { useRef, useState } from "react";
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
          className="fixed inset-0 z-50 grid place-items-center bg-maroon-deep/90 p-4"
          role="dialog"
          aria-modal
          aria-label={current.alt[locale]}
          onClick={() => setActive(null)}
        >
          <Image
            src={current.src}
            alt={current.alt[locale]}
            width={1400}
            height={900}
            className="max-h-[90vh] w-auto rounded-2xl object-contain"
          />
        </div>
      ) : null}
    </>
  );
}
