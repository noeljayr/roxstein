// i18n/ routing

import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "de", "de_v2", "de_v3"],
  defaultLocale: "de",
  pathnames: {
    "/": {
      en: "/",
      de: "/",
      de_v2: "/",
      de_v3: "/",
    },
    "/about": {
      en: "/about",
      de: "/uber-uns",
      de_v2: "/uber-uns",
      de_v3: "/uber-uns",
    },
    "/#projects": {
      en: "/#projects",
      de: "/#projekte",
      de_v2: "/#projekte",
      de_v3: "/#projekte",
    },
    "/#services": {
      en: "/#services",
      de: "/#dienstleistungen",
      de_v2: "/#dienstleistungen",
      de_v3: "/#dienstleistungen",
    },
    "/imprint": {
      en: "/imprint",
      de: "/impressum",
      de_v2: "/impressum",
      de_v3: "/impressum",
    },
    "/contact": {
      en: "/contact",
      de: "/kontakt",
      de_v2: "/kontakt",
      de_v3: "/kontakt",
    },
    "tel:+41775090427": {
      en: "tel:+41775090427",
      de: "tel:+41775090427",
      de_v2: "tel:+41775090427",
      de_v3: "tel:+41775090427",
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
