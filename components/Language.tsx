"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import german from "@/public/german.png";
import uk from "@/public/united-kingdom.png";
import { IconChevronDown } from "@tabler/icons-react";
import { motionTranstion } from "@/constants/motionTranstion";

function Language() {
  const [prefLanguage, setPrefLanguage] = useState("eng");
  const [showOptions, setShowOptions] = useState(false);
  const languageDiv = useRef<HTMLDivElement | null>(null);

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

  return (
    <span ref={languageDiv} className="language flex relative justify-center">
      <span
        onClick={() => setShowOptions(!showOptions)}
        className="selector flex gap-1"
      >
        <Image src={prefLanguage == "eng" ? uk : german} alt="english" />
        <IconChevronDown className={`${showOptions ? "rotate-180" : ""}`} />
      </span>

      <AnimatePresence>
        {showOptions && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={motionTranstion}
            className="options absolute"
          >
            <span
              onClick={() => setPrefLanguage("ger")}
              className={`flex gap-1 items-center ${
                prefLanguage == "ger" ? "opacity-100" : "opacity-35"
              }`}
            >
              <Image src={german} alt="" /> German
            </span>

            <hr className="bg-[var(--border)] border-0 h-[1px]" />
            <span
              onClick={() => setPrefLanguage("eng")}
              className={`flex gap-1 items-center ${
                prefLanguage == "eng" ? "opacity-100" : "opacity-35"
              }`}
            >
              <Image src={uk} alt="" /> English
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}

export default Language;
