// app/sitemap.ts
import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.roxstein.ch";

  const routes = [
    "/",
    "/about",
    "/imprint",
    "/contact",
  ];

  return routes.flatMap((route) =>
    routing.locales.map((locale) => ({
      url: `${baseUrl}/${locale}${route === "/" ? "" : route}`,
      lastModified: new Date(),
    }))
  );
}
