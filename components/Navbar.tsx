"use client";

import { Link } from "@/i18n/routing";
import { usePathname, useSearchParams } from "next/navigation";
import arrowUpright from "@/public/arrow-up-right.png";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Language from "./Language";
import { useTranslations } from "next-intl";
import { IconMenu, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import LanguageMobile from "./LanguageMobile";

function Navbar() {
  const t = useTranslations("navbar");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const state = searchParams.get("menu");

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY >= 35;
    setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      handleScroll(); // Set initial scroll state
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  useEffect(() => {
    if (state && state == "true") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [state]);

  const openMenu = () => {
    const params = new URLSearchParams(useSearchParams.toString());
    params.set("menu", "true");
    history.pushState(null, "", `?menu=true`);
  };

  const close = () => {
    const params = new URLSearchParams(window.location.search);
    params.delete("menu");
    const newSearch = params.toString();
    const newUrl = newSearch ? `?${newSearch}` : window.location.pathname;
    history.pushState(null, "", newUrl);
  };

  return (
    <>
      <div
        className={`navbar select-none fixed rounded-[var(--radius-m)] self-center z-[5]  top-2 py-2 ${
          isScrolled
            ? "w-[80vw] min-[1440px]:w-[60vw] max-[850px]:w-[calc(100vw_-_2rem)] px-4  bg-[#F4F4F4] scrolled"
            : pathname === "/en" ||
              pathname === "/en/" ||
              pathname === "/de" ||
              pathname === "/de/"
            ? "w-screen px-5"
            : "w-[80vw]  max-[850px]:w-[calc(100vw_-_2rem)] min-[1440px]:w-[60vw]"
        } grid grid-cols-[10rem_auto_10rem] max-[850px]:flex justify-between items-center`}
      >
        <Link href="/" className="logo font-bold flex select-none">
          <span className="font-h-2 font-extrabold text-[var(--primary)]">
            Rox<b className="font-h-2 font-extrabold">stein.</b>
          </span>
        </Link>

        <div className="links mx-auto flex items-center gap-8 max-[850px]:hidden">
          <Link
            href="/"
            className={`flex items-center gap-1 ${
              pathname == "/en" || pathname == "/de/startseite"
                ? "opacity-100 font-bold"
                : "opacity-70 font-medium "
            }`}
          >
            {t("home")}
          </Link>

          <Link
            href="/#projects"
            className={`flex items-center gap-1 ${
              pathname == "/work"
                ? "opacity-100 font-bold"
                : "opacity-70 font-medium "
            }`}
          >
            {t("projects")}
          </Link>

          <Link
            href="/#services"
            className={`flex items-center gap-1 ${
              pathname == "/work"
                ? "opacity-100 font-bold"
                : "opacity-70 font-medium "
            }`}
          >
            {t("services")}
          </Link>

          <Link
            href="/contact"
            className={`flex items-center gap-1 ${
              pathname.startsWith("/en/contact") ||
              pathname.startsWith("/de/kontakt")
                ? "opacity-100 font-bold"
                : "opacity-70 font-medium "
            }`}
          >
            {t("contact")}
          </Link>

          <Link
            href="/about"
            className={`flex items-center gap-1 ${
              pathname == "/en/about" || pathname == "/de/uber-uns"
                ? "opacity-100 font-bold"
                : "opacity-70 font-medium "
            }`}
          >
            {t("about")}
          </Link>

          <Language />
        </div>

        <div className="flex items-center ml-auto min-[850px]:hidden space-x-4">
          <LanguageMobile />

          <Link
            href="/contact"
            className="cta-container cursor-pointer flex gap-0.5 items-center"
          >
            <button className="font-semibold cursor-pointer cta">
              {t("callUs")}
            </button>
            <span className="icon cursor-pointer">
              <Image src={arrowUpright} alt="arrow" />
            </span>
          </Link>

          <button onClick={openMenu} className=" cursor-pointer">
            <IconMenu className="h-6 w-6 opacity-70" />
          </button>
        </div>

        <Link
          href="/contact"
          className="cta-container cursor-pointer flex gap-0.5 max-[850px]:hidden   items-center"
        >
          <button className="font-semibold cursor-pointer cta">
            {t("callUs")}
          </button>
          <span className="icon cursor-pointer">
            <Image src={arrowUpright} alt="arrow" />
          </span>
        </Link>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "5rem" }}
            animate={{ opacity: 1, x: "0" }}
            exit={{ opacity: 0, x: "5rem" }}
            transition={{ ease: [0.25, 0.1, 0.25, 1.0], duration: 0.5 }}
            className="menu fixed h-screen w-screen flex flex-col space-y-2 bg-white z-50 top-0 left-0 p-4"
          >
            <div className="w-full items-center flex">
              <Link href="/" className="logo font-bold select-none flex">
                <span className="font-h-2 font-extrabold text-[var(--primary)]">
                  Rox<b className="font-h-2 font-extrabold">stein.</b>
                </span>
              </Link>

              <button className="ml-auto" onClick={close}>
                <IconX className="h-6 w-6" />
              </button>
            </div>

            <Link
              href="/"
              className={`flex items-center gap-1 ${
                pathname == "/en" || pathname == "/de/startseite"
                  ? "opacity-100 font-bold"
                  : "opacity-70 font-medium "
              }`}
            >
              {t("home")}
            </Link>

            <Link
              href="/#projects"
              className={`flex items-center gap-1 ${
                pathname == "/work"
                  ? "opacity-100 font-bold"
                  : "opacity-70 font-medium "
              }`}
            >
              {t("projects")}
            </Link>

            <Link
              href="/#services"
              className={`flex items-center gap-1 ${
                pathname == "/work"
                  ? "opacity-100 font-bold"
                  : "opacity-70 font-medium "
              }`}
            >
              {t("services")}
            </Link>

            <Link
              href="/contact"
              className={`flex items-center gap-1 ${
                pathname.startsWith("/en/contact") ||
                pathname.startsWith("/de/kontakt")
                  ? "opacity-100 font-bold"
                  : "opacity-70 font-medium "
              }`}
            >
              {t("contact")}
            </Link>

            <Link
              href="/about"
              className={`flex items-center gap-1 ${
                pathname == "/en/about" || pathname == "/de/uber-uns"
                  ? "opacity-100 font-bold"
                  : "opacity-70 font-medium "
              }`}
            >
              {t("about")}
            </Link>

            <Link
              href="/contact"
              className="cta-container cursor-pointer flex gap-0.5 items-center"
            >
              <button className="font-semibold cursor-pointer cta">
                {t("callUs")}
              </button>
              <span className="icon cursor-pointer">
                <Image src={arrowUpright} alt="arrow" />
              </span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
