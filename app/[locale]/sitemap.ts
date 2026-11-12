import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // German pages
    {
      url: "https://roxstein.ch/de",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://roxstein.ch/de/uber-uns",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://roxstein.ch/de/impressum",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://roxstein.ch/de/kontakt",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Uncomment when privacy page is online:
    // {
    //   url: "https://roxstein.ch/de/datenschutz",
    //   lastModified: new Date(),
    //   priority: 0.5,
    // },

    // English pages
    {
      url: "https://roxstein.ch/en",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://roxstein.ch/en/about",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://roxstein.ch/en/imprint",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://roxstein.ch/en/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Uncomment when privacy page is online:
    // {
    //   url: "https://roxstein.ch/en/privacy",
    //   lastModified: new Date(),
    //   priority: 0.5,
    // },
  ];
}
