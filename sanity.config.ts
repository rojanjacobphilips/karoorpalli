import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { dataset, projectId } from "./src/sanity/env";

export default defineConfig({
  name: "karoor-palli",
  title: "Karoor Palli CMS",
  projectId: projectId || "placeholder",
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Parish content")
          .items([
            S.listItem()
              .title("Site settings")
              .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
            S.documentTypeListItem("heroSlide").title("Home slides"),
            S.documentTypeListItem("announcement").title("Ticker announcements"),
            S.documentTypeListItem("newsArticle").title("News"),
            S.documentTypeListItem("parishEvent").title("Events"),
            S.documentTypeListItem("obituary").title("Obituaries (restricted)"),
            S.documentTypeListItem("galleryAlbum").title("Gallery albums"),
            S.documentTypeListItem("videoItem").title("Videos"),
            S.documentTypeListItem("download").title("Downloads"),
            S.documentTypeListItem("person").title("People"),
            S.documentTypeListItem("organisation").title("Organisations"),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});
