import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.roxstein.ch/de",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.roxstein.ch/en",
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      url: "https://www.roxstein.ch/de/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.roxstein.ch/en/contact",
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: "https://www.roxstein.ch/de/about",
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: "https://www.roxstein.ch/en/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://www.roxstein.ch/de/imprint",
      lastModified: new Date(),
      priority: 0.4,
    },

    {
      url: "https://www.roxstein.ch/en/imprint",
      lastModified: new Date(),
      priority: 0.3,
    },
  ];
}
