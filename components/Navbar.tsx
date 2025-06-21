"use client";

import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import arrowUpright from "@/public/arrow-up-right.png";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import logo from "@/public/roxstein.png";
import Language from "./Language";

function Navbar() {
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
          ? "w-[80vw] min-[1440px]:w-[60vw] px-4  bg-[#F4F4F4] scrolled"
          : pathname === "/"
          ? "w-screen px-5"
          : "w-[80vw] min-[1440px]:w-[60vw]"
      } grid grid-cols-[10rem_auto_10rem] justify-between items-center`}
    >
      <Link href="/" className="logo font-bold">
        <Image src={logo} className="w-auto h-4" alt="roxstein logo" />
      </Link>

      <div className="links mx-auto flex items-center gap-8">
        <Link
          href="/"
          className={`flex items-center gap-1 ${
            pathname == "/"
              ? "opacity-100 font-bold"
              : "opacity-70 font-medium "
          }`}
        >
          Home
        </Link>

        <Link
          href="/#projects"
          className={`flex items-center gap-1 ${
            pathname == "/work"
              ? "opacity-100 font-bold"
              : "opacity-70 font-medium "
          }`}
        >
          Work
        </Link>

        <Link
          href="/contact"
          className={`flex items-center gap-1 ${
            pathname.startsWith("/contact")
              ? "opacity-100 font-bold"
              : "opacity-70 font-medium "
          }`}
        >
          Contact
        </Link>

        <Link
          href="/about"
          className={`flex items-center gap-1 ${
            pathname == "/about"
              ? "opacity-100 font-bold"
              : "opacity-70 font-medium "
          }`}
        >
          About us
        </Link>

        <Language />
      </div>

      <Link
        href="/contact"
        className="cta-container cursor-pointer flex gap-0.5 items-center"
      >
        <button className="font-semibold ml-auto cursor-pointer cta">
          Become a client
        </button>
        <span className="icon cursor-pointer">
          <Image src={arrowUpright} alt="arrow" />
        </span>
      </Link>
    </div>
  );
}

export default Navbar;
