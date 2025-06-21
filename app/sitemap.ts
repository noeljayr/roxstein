import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.roxstein.ch",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://www.roxstein.ch/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.roxstein.ch/about",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://www.roxstein.ch/imprint",
      lastModified: new Date(),
      priority: 0.5,
    },
  ];
}
