import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { dataset, projectId } from "@/sanity/env";
import { isSanityConfigured } from "@/sanity/lib/client";

const builder = isSanityConfigured ? createImageUrlBuilder({ projectId, dataset }) : null;

export function urlForImage(source: SanityImageSource | null | undefined) {
  if (!builder || !source) return "";
  return builder.image(source).auto("format").quality(80).url();
}
