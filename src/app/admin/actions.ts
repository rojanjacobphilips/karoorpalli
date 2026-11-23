"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getWriteClient, slugify } from "@/sanity/lib/write-client";

async function requireAdmin() {
  if (!(await isAdminAuthenticated())) {
    throw new Error("Not signed in");
  }
}

function localized(en: string, ml: string) {
  return { en: en.trim(), ml: (ml.trim() || en).trim() };
}

export async function saveEventAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  const titleEn = String(formData.get("titleEn") || "");
  const titleMl = String(formData.get("titleMl") || "");
  const date = String(formData.get("date") || "");
  const timeEn = String(formData.get("timeEn") || "");
  const timeMl = String(formData.get("timeMl") || "");
  const placeEn = String(formData.get("placeEn") || "");
  const placeMl = String(formData.get("placeMl") || "");
  const excerptEn = String(formData.get("excerptEn") || "");
  const excerptMl = String(formData.get("excerptMl") || "");
  const slug = slugify(String(formData.get("slug") || titleEn));
  if (!titleEn || !date || !slug) throw new Error("Title, date and slug are required");

  const client = getWriteClient();
  const doc = {
    _type: "parishEvent",
    ...(id ? { _id: id } : {}),
    slug: { _type: "slug", current: slug },
    title: localized(titleEn, titleMl),
    date,
    time: localized(timeEn, timeMl),
    place: localized(placeEn, placeMl),
    excerpt: localized(excerptEn, excerptMl),
    registrationOpen: true,
  };
  if (id) await client.createOrReplace(doc as never);
  else await client.create(doc as never);

  revalidatePath("/en/events");
  revalidatePath("/ml/events");
  redirect("/admin/events");
}

export async function deleteEventAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  if (!id) return;
  await getWriteClient().delete(id);
  revalidatePath("/en/events");
  revalidatePath("/ml/events");
  redirect("/admin/events");
}

export async function saveObituaryAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  const nameEn = String(formData.get("nameEn") || "");
  const nameMl = String(formData.get("nameMl") || "");
  const houseEn = String(formData.get("houseEn") || "");
  const houseMl = String(formData.get("houseMl") || "");
  const ageRaw = String(formData.get("age") || "");
  const date = String(formData.get("date") || "");
  const funeralEn = String(formData.get("funeralEn") || "");
  const funeralMl = String(formData.get("funeralMl") || "");
  const burialEn = String(formData.get("burialEn") || "");
  const burialMl = String(formData.get("burialMl") || "");
  const messageEn = String(formData.get("messageEn") || "");
  const messageMl = String(formData.get("messageMl") || "");
  const photoUrl = String(formData.get("photoUrl") || "");
  const slug = slugify(String(formData.get("slug") || nameEn));
  if (!nameEn || !slug) throw new Error("Name and slug are required");

  const client = getWriteClient();
  const doc: Record<string, unknown> = {
    _type: "obituary",
    ...(id ? { _id: id } : {}),
    slug: { _type: "slug", current: slug },
    name: localized(nameEn, nameMl),
    house: localized(houseEn, houseMl),
    date,
    funeral: localized(funeralEn, funeralMl),
    burial: localized(burialEn, burialMl),
    message: localized(messageEn, messageMl),
  };
  if (ageRaw) doc.age = Number(ageRaw);
  if (photoUrl) {
    // Keep existing photo if editing without new asset; URL field is for quick paste of CDN/local path via patch after create
    doc.photoUrl = photoUrl;
  }
  const saved = id
    ? await client.createOrReplace(doc as never)
    : await client.create(doc as never);

  // If a public URL was provided, store it on a companion string used by our mapper fallback
  if (photoUrl && saved?._id) {
    await client.patch(saved._id).set({ photoUrl }).commit();
  }

  revalidatePath("/en/obituary");
  revalidatePath("/ml/obituary");
  redirect("/admin/obituary");
}

export async function deleteObituaryAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  if (!id) return;
  await getWriteClient().delete(id);
  revalidatePath("/en/obituary");
  revalidatePath("/ml/obituary");
  redirect("/admin/obituary");
}

export async function saveVideoAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  const titleEn = String(formData.get("titleEn") || "");
  const titleMl = String(formData.get("titleMl") || "");
  const categoryEn = String(formData.get("categoryEn") || "");
  const categoryMl = String(formData.get("categoryMl") || "");
  const youtubeId = String(formData.get("youtubeId") || "");
  const facebook = String(formData.get("facebook") || "");
  const src = String(formData.get("src") || "");
  const slug = slugify(String(formData.get("slug") || titleEn));
  if (!titleEn || !slug) throw new Error("Title is required");

  const client = getWriteClient();
  const doc = {
    _type: "videoItem",
    ...(id ? { _id: id } : {}),
    slug: { _type: "slug", current: slug },
    title: localized(titleEn, titleMl),
    category: localized(categoryEn, categoryMl),
    youtubeId,
    facebook: facebook || undefined,
    src: src || undefined,
  };
  if (id) await client.createOrReplace(doc as never);
  else await client.create(doc as never);

  revalidatePath("/en/videos");
  revalidatePath("/ml/videos");
  redirect("/admin/videos");
}

export async function deleteVideoAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  if (!id) return;
  await getWriteClient().delete(id);
  revalidatePath("/en/videos");
  revalidatePath("/ml/videos");
  redirect("/admin/videos");
}

export async function saveGalleryAlbumAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  const titleEn = String(formData.get("titleEn") || "");
  const titleMl = String(formData.get("titleMl") || "");
  const yearRaw = String(formData.get("year") || "");
  const imageUrls = String(formData.get("imageUrls") || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const slug = slugify(String(formData.get("slug") || titleEn));
  if (!titleEn || !slug) throw new Error("Title is required");

  const client = getWriteClient();
  const doc = {
    _type: "galleryAlbum",
    ...(id ? { _id: id } : {}),
    slug: { _type: "slug", current: slug },
    title: localized(titleEn, titleMl),
    year: yearRaw ? Number(yearRaw) : undefined,
    // Temporary URL list until asset upload UI is added; mapper reads these when images[] empty
    imageUrls,
  };
  if (id) await client.createOrReplace(doc as never);
  else await client.create(doc as never);

  revalidatePath("/en/gallery");
  revalidatePath("/ml/gallery");
  redirect("/admin/gallery");
}

export async function deleteGalleryAlbumAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  if (!id) return;
  await getWriteClient().delete(id);
  revalidatePath("/en/gallery");
  revalidatePath("/ml/gallery");
  redirect("/admin/gallery");
}
