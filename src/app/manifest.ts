import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Karoor Palli — St. Peter's Orthodox Church",
    short_name: "Karoor Palli",
    description: "Parish website of St. Peter's Orthodox Church, Karoor, Elanthoor.",
    start_url: "/en",
    display: "standalone",
    background_color: "#f7f1e8",
    theme_color: "#6b1d2a",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
