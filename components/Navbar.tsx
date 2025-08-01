"use client";

import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);


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

  return (
    <>
      <div
        className={`navbar select-none fixed ${
          open ? "rounded-t-[var(--radius)]" : "rounded-[var(--radius-m)]"
        } self-center z-[5]  top-2 py-2 ${
          isScrolled || open
            ? "w-[80vw] min-[1440px]:w-[60vw] max-[850px]:w-[calc(100vw_-_2rem)] px-4  bg-[#fff] scrolled"
            : pathname === "/en" ||
              pathname === "/en/" ||
              pathname === "/de" ||
              pathname === "/de/"
            ? "w-screen px-5"
            : "w-[80vw]  max-[850px]:w-[calc(100vw_-_2rem)] min-[1440px]:w-[60vw]"
        } ${isScrolled && !open ? '' : ''} grid grid-cols-[10rem_auto_10rem] max-[850px]:flex justify-between items-center`}
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
          <LanguageMobile open={open} />

          <Link
            href="/contact"
            className="cta-container max-sm:hidden cursor-pointer flex gap-0.5 items-center"
          >
            <button className="font-semibold cursor-pointer cta">
              {t("callUs")}
            </button>
            <span className="icon cursor-pointer">
              <Image src={arrowUpright} alt="arrow" />
            </span>
          </Link>

          <button onClick={() => setOpen(!open)} className="menu-button">
            {open ? (
              <motion.span
                key="close-icon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: [0.25, 0.1, 0.25, 1.0], duration: 0.5 }}
                className="cursor-pointer"
              >
                <IconX className="h-5 w-5 opacity-70" />
              </motion.span>
            ) : (
              <motion.span
                key="open-icon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: [0.25, 0.1, 0.25, 1.0], duration: 0.5 }}
                onClick={close}
                className="cursor-pointer"
              >
                <IconMenu className="h-5 w-5 opacity-70" />
              </motion.span>
            )}
          </button>
        </div>

        <Link
          href="/contact"
          className="cta-container cursor-pointer flex ml-auto gap-0.5 max-[850px]:hidden   items-center"
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
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              transition={{ ease: [0.25, 0.1, 0.25, 1.0], duration: 0.5 }}
              className=" bg-black/20 w-screen h-screen fixed z-[2] top-0 left-0"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, y: "-2rem" }}
              animate={{ opacity: 1, y: "0" }}
              exit={{ opacity: 0, y: "-2rem" }}
              transition={{ ease: [0.25, 0.1, 0.25, 1.0], duration: 0.5 }}
              className="menu grid grid-cols-2 font-p-2 rounded-b-[var(--radius)] fixed w-[calc(100vw_-_2rem)] flex-col space-y-2 bg-[#fff] z-[2] top-[3rem] left-4 p-4 pt-0"
            >
              <hr className="bg-[var(--border)] hidden max-sm:flex h-[1px] border-0 mb-4 mt-3 col-span-2" />

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
                className="cta-container max-sm:hidden cursor-pointer flex gap-0.5 items-center"
              >
                <button className="font-semibold cursor-pointer cta">
                  {t("callUs")}
                </button>
                <span className="icon cursor-pointer">
                  <Image src={arrowUpright} alt="arrow" />
                </span>
              </Link>

              
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
