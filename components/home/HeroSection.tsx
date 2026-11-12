"use client";

import "@/css/hero.css";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { useEffect } from "react";
import heroImage from "@/public/hero-image.png";
import Image from "next/image";
import Customers from "../charts/Customers";
import NumberFlow from "@number-flow/react";
import { useTranslations } from "next-intl";

function HeroSection() {
  const t = useTranslations("hero");
  const radius = 15.9155;
  const circumference = 2 * Math.PI * radius;
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setValue(98);
    }, 1500);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <motion.div className="hero-section h-[25rem] flex max-[980px]:items-center max-[980px]:justify-center  max-[980px]:flex-col relative justify-center items-center overflow-hidden">
      <div className="flex flex-col gap-3 items-center  ">
        <div className="flex w-[62ch] max-[980px]:w-fit flex-col  gap-1 items-center">
          <motion.span
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              ease: [0.25, 0.1, 0.25, 1.0],
              duration: 0.75,
            }}
            className="p-1.5 px-3 mb-2 rounded-4xl w-fit border-[1px] border-[rgba(65,98,191,0.1)] bg-[rgba(65,98,191,0.05)] font-p-4 flex gap-2"
          >
            <span className="font-extrabold text-[var(--primary)]">
              {t("tri.local")}
            </span>
            <span className="font-extrabold text-[var(--primary)]">
              {t("tri.reliable")}
            </span>
            <span className="font-extrabold text-[var(--primary)]">
              {t("tri.affordable")}
            </span>
          </motion.span>
          <motion.h1
            initial={{ y: -40, opacity: 0 }}
            transition={{
              ease: [0.25, 0.1, 0.25, 1.0],
              duration: 0.75,
              delay: 0.25,
            }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-[980px]:text-center max-[980px]:w-[75ch] max-[500px]:w-full"
          >
            {t("tagline")}
          </motion.h1>
          <motion.p
            initial={{ y: -40, opacity: 0 }}
            transition={{
              ease: [0.25, 0.1, 0.25, 1.0],
              duration: 0.75,
              delay: 0.35,
            }}
            whileInView={{ y: 0, opacity: 0.85 }}
            viewport={{ once: true }}
            className="w-[85%] font-medium text-center opacity-75 max-[980px]:text-center max-[980px]:w-[55ch] max-[480px]:w-full"
          >
            {t("description")}
          </motion.p>
        </div>

        <motion.div
          initial={{ y: -40, opacity: 0 }}
          transition={{
            ease: [0.25, 0.1, 0.25, 1.0],
            duration: 0.75,
            delay: 0.45,
          }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="cta-container relative z-1 flex gap-3 mt-2 items-center max-[980px]:w-fit"
        >
          <Link href="/contact" className="cta-2">
            {t("cta1")}
          </Link>

      
        </motion.div>
      </div>


    </motion.div>
  );
}

export default HeroSection;
