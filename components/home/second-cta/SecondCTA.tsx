"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import arrow from "@/public/arrow-up-right.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

function SecondCTA() {
  const t = useTranslations("secondCta");
  
  return (
    <div className="flex flex-col gap-3 section">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        transition={{
          ease: [0.25, 0.1, 0.25, 1.0],
          duration: 0.85,
        }}
        className="text-center"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {t("title")}
      </motion.h1>
      <motion.span
        initial={{ opacity: 0, y: 40 }}
        transition={{
          ease: [0.25, 0.1, 0.25, 1.0],
          duration: 0.85,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=""
      >
        <Link
          target="_blank"
          href="tel:+41783324939"
          className="cta-container w-fit flex items-center gap-0.5"
        >
          <div className="cta">{t("cta")}</div>
          <span>
            <Image src={arrow} alt="arrow" />
          </span>
        </Link>
      </motion.span>
    </div>
  );
}

export default SecondCTA;
