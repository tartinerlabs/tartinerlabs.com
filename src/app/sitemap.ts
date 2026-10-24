import type { MetadataRoute } from "next";
import { cacheLife } from "next/cache";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  "use cache";
  cacheLife("max");

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
