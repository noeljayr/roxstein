import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "de"],
  defaultLocale: "en",
  pathnames: {
    "/": {
      en: "/",
      de: "/startseite",
    },
    "/about": {
      en: "/about",
      de: "/uber-uns",
    },
    "/#projects": {
      en: "#projects",
      de: "/startseite/#projekte",
    },
    "/imprint": {
      en: "/imprint",
      de: "/impressum",
    },
    "/contact": {
      en: "/contact",
      de: "/Kontakt",
    },
    "tel:+41775090427": {
      en: "tel:+41775090427",
      de: "tel:+41775090427",
    },
    "https://www.linkedin.com/company/roxstein/": {
      en: "https://www.linkedin.com/company/roxstein/",
      de: "https://www.linkedin.com/company/roxstein/",
    },
    "mailto:contact@roxstein.ch": {
      en: "mailto:contact@roxstein.ch",
      de: "mailto:contact@roxstein.ch",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
