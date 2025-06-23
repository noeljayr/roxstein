"use client";

import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";
import arrowUpright from "@/public/arrow-up-right.png";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Language from "./Language";
import { useTranslations } from "next-intl";

function Navbar() {
  const t = useTranslations("navbar");
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

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
    <div
      className={`navbar select-none fixed rounded-[var(--radius-m)] self-center z-[5]  top-2 py-2 ${
        isScrolled
          ? "w-[80vw] min-[1440px]:w-[60vw] max-[850px]:w-[calc(100vw_-_2rem)] px-4  bg-[#F4F4F4] scrolled"
          : pathname === "/"
          ? "w-screen px-5"
          : "w-[calc(100%_-_2rem)]  max-[850px]:w-[calc(100vw_-_2rem)] min-[1440px]:w-[60vw]"
      } grid grid-cols-[10rem_auto_10rem] max-[850px]:flex justify-between items-center`}
    >
      <Link href="/" className="logo font-bold flex select-none">
        <span className="font-h-2 font-extrabold text-[var(--primary)]">
          Rox<b className="font-h-2 font-extrabold">Stein.</b>
        </span>
      </Link>

      <div className="links mx-auto flex items-center gap-8 max-[850px]:hidden">
        <Link
          href="/"
          className={`flex items-center gap-1 ${
            pathname == "/"
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
          href="/contact"
          className={`flex items-center gap-1 ${
            pathname.startsWith("/contact")
              ? "opacity-100 font-bold"
              : "opacity-70 font-medium "
          }`}
        >
          {t("contact")}
        </Link>

        <Link
          href="/about"
          className={`flex items-center gap-1 ${
            pathname == "/about"
              ? "opacity-100 font-bold"
              : "opacity-70 font-medium "
          }`}
        >
          {t("about")}
        </Link>

        <Language />
      </div>

      <Link
        href="/contact"
        className="cta-container cursor-pointer max-[980px]:ml-auto flex gap-0.5 items-center"
      >
        <button className="font-semibold ml-auto cursor-pointer cta">
          {t("callUs")}
        </button>
        <span className="icon cursor-pointer">
          <Image src={arrowUpright} alt="arrow" />
        </span>
      </Link>
    </div>
  );
}

export default Navbar;
