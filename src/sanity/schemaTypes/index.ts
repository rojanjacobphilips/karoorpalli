// @ts-nocheck — Sanity schema types are edited offline; Studio is not in the production bundle.
import { defineField, defineType, type SchemaTypeDefinition } from "sanity";

const localized = (name: string, title: string, type: "string" | "text" = "string") =>
  defineField({
    name,
    title,
    type: "object",
    fields: [
      defineField({ name: "en", title: "English", type }),
      defineField({ name: "ml", title: "Malayalam", type }),
    ],
  });

export const schemaTypes: SchemaTypeDefinition[] = [
  defineType({
    name: "siteSettings",
    title: "Site settings",
    type: "document",
    fields: [
      localized("officialName", "Official name"),
      defineField({ name: "established", title: "Founding year", type: "string" }),
      defineField({ name: "phone", type: "string" }),
      defineField({ name: "email", type: "string" }),
      defineField({ name: "whatsapp", type: "string" }),
      defineField({ name: "youtubeLiveId", title: "YouTube live / channel video ID", type: "string" }),
      localized("thisWeek", "This week's schedule", "text"),
      defineField({ name: "gaId", title: "Google Analytics 4 ID", type: "string" }),
    ],
  }),
  defineType({
    name: "heroSlide",
    title: "Hero slide",
    type: "document",
    fields: [
      defineField({ name: "image", type: "image", options: { hotspot: true } }),
      localized("title", "Title"),
      localized("caption", "Caption", "text"),
      localized("cta", "Button label"),
      defineField({ name: "href", title: "Link", type: "string" }),
      defineField({ name: "order", type: "number" }),
    ],
    orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  }),
  defineType({
    name: "announcement",
    title: "Announcement (ticker)",
    type: "document",
    fields: [
      localized("text", "Text", "text"),
      defineField({ name: "urgent", type: "boolean" }),
      defineField({ name: "active", type: "boolean", initialValue: true }),
    ],
  }),
  defineType({
    name: "newsArticle",
    title: "News",
    type: "document",
    fields: [
      defineField({ name: "slug", type: "slug", options: { source: "title.en" } }),
      localized("category", "Category"),
      localized("title", "Title"),
      localized("excerpt", "Excerpt", "text"),
      defineField({ name: "date", type: "date" }),
      defineField({ name: "image", type: "image" }),
      localized("body", "Body", "text"),
    ],
  }),
  defineType({
    name: "parishEvent",
    title: "Event",
    type: "document",
    fields: [
      defineField({ name: "slug", type: "slug", options: { source: "title.en" }, validation: (rule) => rule.required() }),
      localized("title", "Title"),
      defineField({ name: "date", type: "date", validation: (rule) => rule.required() }),
      localized("time", "Display time"),
      localized("place", "Place"),
      localized("excerpt", "Summary", "text"),
      defineField({ name: "image", type: "image", options: { hotspot: true } }),
      defineField({ name: "registrationOpen", type: "boolean", initialValue: true }),
    ],
  }),
  defineType({
    name: "obituary",
    title: "Obituary",
    type: "document",
    fields: [
      defineField({ name: "slug", type: "slug", options: { source: "name.en" }, validation: (rule) => rule.required() }),
      localized("name", "Name"),
      localized("house", "House name"),
      defineField({ name: "age", type: "number" }),
      defineField({ name: "date", title: "Date of passing (display text or YYYY-MM-DD)", type: "string" }),
      localized("funeral", "Funeral schedule", "text"),
      localized("burial", "Place of burial"),
      localized("message", "Parish message", "text"),
      defineField({ name: "photo", type: "image", options: { hotspot: true } }),
      defineField({
        name: "photoUrl",
        title: "Or photo URL / path",
        type: "string",
        description: "Public https link or site path used by parish admin",
      }),
    ],
  }),
  defineType({
    name: "galleryAlbum",
    title: "Gallery album",
    type: "document",
    fields: [
      defineField({ name: "slug", type: "slug", options: { source: "title.en" }, validation: (rule) => rule.required() }),
      localized("title", "Title"),
      defineField({ name: "year", type: "number" }),
      defineField({
        name: "imageUrls",
        title: "Image / video URLs",
        type: "array",
        of: [{ type: "string" }],
        description: "One public URL or site path per item (used by parish admin)",
      }),
      defineField({
        name: "images",
        title: "Photos and videos",
        type: "array",
        of: [
          {
            type: "image",
            options: { hotspot: true },
            fields: [localized("alt", "Alt text")],
          },
          {
            type: "object",
            name: "galleryVideo",
            title: "Video",
            fields: [
              defineField({ name: "file", type: "file", options: { accept: "video/*" } }),
              defineField({ name: "url", title: "Or video URL", type: "url" }),
              localized("alt", "Label"),
            ],
          },
        ],
      }),
    ],
  }),

  defineType({
    name: "videoItem",
    title: "Video",
    type: "document",
    fields: [
      defineField({ name: "slug", type: "slug", options: { source: "title.en" } }),
      localized("title", "Title"),
      localized("category", "Category"),
      defineField({
        name: "youtubeId",
        title: "YouTube video ID",
        type: "string",
        description: "Only the ID, e.g. QmSs5T-FQlE",
      }),
      defineField({ name: "facebook", title: "Facebook video / reel URL", type: "url" }),
      defineField({ name: "file", title: "Uploaded video file", type: "file", options: { accept: "video/*" } }),
      defineField({
        name: "src",
        title: "Or site-relative / external video URL",
        type: "string",
        description: "e.g. /videos/hh-bava-at-karoor.mp4",
      }),
    ],
  }),
  defineType({
    name: "download",
    title: "Download",
    type: "document",
    fields: [
      localized("title", "Title"),
      localized("category", "Category"),
      defineField({ name: "file", type: "file" }),
    ],
  }),
  defineType({
    name: "person",
    title: "Person",
    type: "document",
    fields: [
      defineField({
        name: "kind",
        type: "string",
        options: {
          list: ["vicar", "metropolitan", "officer", "committee", "pastVicar"],
        },
      }),
      defineField({ name: "name", type: "string" }),
      localized("role", "Role"),
      defineField({ name: "term", type: "string" }),
      defineField({ name: "photo", type: "image" }),
      localized("bio", "Biography", "text"),
      defineField({ name: "email", type: "string" }),
      defineField({ name: "phone", type: "string" }),
    ],
  }),
  defineType({
    name: "organisation",
    title: "Organisation",
    type: "document",
    fields: [
      defineField({ name: "slug", type: "slug", options: { source: "name.en" } }),
      localized("name", "Name"),
      localized("summary", "Summary", "text"),
      localized("meeting", "Meeting time"),
    ],
  }),
];
