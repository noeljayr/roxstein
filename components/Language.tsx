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

function Language() {
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
    <span ref={languageDiv} className="language flex relative justify-center">
      <span
        onClick={() => setShowOptions(!showOptions)}
        className="selector flex gap-1"
      >
        <Image src={prefLanguage == "en" ? uk : switzerland} alt="english" />
        <IconChevronDown
          style={{ transition: "var(--transition)" }}
          className={`${showOptions ? "rotate-180" : ""}`}
        />
      </span>

      <AnimatePresence>
        {showOptions && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ ease: [0.25, 0.1, 0.25, 1.0], duration: 0.5 }}
            className="options absolute"
          >
            <div
              className={`flex flex-col option gap-1 ${
                prefLanguage.startsWith("de") ? "opacity-100" : "opacity-50"
              }`}
            >
              <span className={`flex items-center gap-1 ${prefLanguage.startsWith('de') ? "opacity-100 font-semibold": 'opacity-50 font-medium'}`}>
                <Image src={switzerland} className="" alt="" /> German
              </span>
              <div className="grid grid-cols-[auto_1fr] mt-0.5">
                <span className="w-[0.85rem] h-full flex flex-col items-center">
                  <span className="bg-black/10 h-full w-[1px]"></span>
                </span>
                <div className="flex flex-col pl-2">
                  <span
                    onClick={() => changeLanguage("de")}
                    className={` ${prefLanguage === 'de'? "opacity-100 font-semibold": 'opacity-50 font-medium'} py-0.5 pt-0`}
                  >
                    Version 1
                  </span>
                  <span
                    onClick={() => changeLanguage("de_v2")}
                    className={` ${prefLanguage === 'de_v2'? "opacity-100 font-semibold": 'opacity-50 font-medium'} py-0.5`}
                  >
                    Version 2
                  </span>
                  <span
                    onClick={() => changeLanguage("de_v3")}
                    className={` ${prefLanguage === 'de_v3'? "opacity-100 font-semibold": 'opacity-50 font-medium'} py-0.5 pb-0`}
                  >
                    Version 3
                  </span>
                </div>
              </div>
            </div>

            <span
              onClick={() => changeLanguage("en")}
              className={`option flex gap-1 items-center ${
                prefLanguage == "en" ? "opacity-100 font-semibold" : "opacity-50"
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

export default Language;
