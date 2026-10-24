import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tartinerlabs.com",
      lastModified: new Date(),
    },
    {
      url: "https://tartinerlabs.com/privacy",
      lastModified: new Date(),
    },
  ];
}
