"use client";

import Image from "next/image";
import { useState } from "react";
import type { Locale } from "@/lib/i18n";

type GalleryImage = {
  src: string;
  alt: { en: string; ml: string };
};

export function GalleryGrid({ locale, images }: { locale: Locale; images: GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null);
  const current = active != null ? images[active] : null;

  return (
    <>
      <div className="masonry mt-8">
        {images.map((img, index) => (
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
        ))}
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
