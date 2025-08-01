"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import switzerland from "@/public/team/country/switzerland.png";
import uk from "@/public/united-kingdom.png";
import { IconChevronDown } from "@tabler/icons-react";
import { useLocale } from "next-intl";
import { Locale, useRouter, usePathname } from "@/i18n/routing";
import { useParams } from "next/navigation";

function LanguageMobile({open}:{open: boolean}) {
  const locale: string = useLocale();
  const [prefLanguage, setPrefLanguage] = useState(locale || "en");
  const [showOptions, setShowOptions] = useState(false);
  const languageDiv = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageDiv.current &&
        !languageDiv.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function changeLanguage(nextLocale: string) {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale as Locale }
    );
    setPrefLanguage(nextLocale);
  }

  return (
    <span ref={languageDiv} style={{height: "fit-content"}} className="language flex relative justify-center">
      <span
        onClick={() => setShowOptions(!showOptions)}
        className={`selector h-fit flex gap-1 ${open ? 'opacity-70 pointer-events-none' : ''}`}
      >
        <Image src={prefLanguage == "en" ? uk : switzerland} alt="english" />
        <IconChevronDown style={{transition: 'var(--transition)'}} className={` h-4 w-4 ${showOptions ? "rotate-180" : ""}`} />
      </span>

      <AnimatePresence>
        {showOptions && !open && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ ease: [0.25, 0.1, 0.25, 1.0], duration: 0.5 }}
            className="options absolute"
          >
            <span
              onClick={() => changeLanguage("de")}
              className={`flex gap-1 items-center ${
                prefLanguage == "de" ? "opacity-100" : "opacity-35"
              }`}
            >
              <Image src={switzerland} className="" alt="" /> German
            </span>

            <hr className="bg-[var(--border)] border-0 h-[1px]" />
            <span
              onClick={() => changeLanguage("en")}
              className={`flex gap-1 items-center ${
                prefLanguage == "en" ? "opacity-100" : "opacity-35"
              }`}
            >
              <Image src={uk} className="" alt="" /> English
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}

export default LanguageMobile;
