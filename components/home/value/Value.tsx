"use client";

import Image from "next/image";
import React from "react";
import diamond from "@/public/diamond.png";
import arrow from "@/public/arrow-up-right.png";
import Link from "next/link";
import phone from "@/public/phone.png";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

function Value() {
  const t = useTranslations("value");
  const title = t("title");
  const tagline = t("tagline");
  const description = t("description");
  const descriptionMobile = t("descriptionMobile");
  const getStarted = t("getStarted");

  return (
    <div className="section value-section relative max-[850px]:pb-16 flex max-[850px]:flex-col max-[850px]:items-center justify-between">
      <div className="flex flex-col gap-2 max-[1030px]:w-[100%] max-[850px]:items-center">
        <div className="value-section-tagline flex flex-col gap-2 max-[850px]:items-center">
          <span className="section-title">
            <span className="name">{title}</span>
            <span className="icon icon-filled">
              <Image src={diamond} className="h-3 w-3" alt="value icon" />
            </span>
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          transition={{
            ease: [0.25, 0.1, 0.25, 1.0],
            duration: 0.85,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-1 w-[68ch] max-[1030px]:w-full max-[850px]:items-center"
        >
          <h3 className="max-sm:text-center">{tagline}</h3>

          <p className="opacity-85 mb-auto max-[850px]:hidden">{description}</p>
          <p className="opacity-85 mb-auto max-sm:text-center max-sm:w-[80%] max-[850px]:block hidden">
            {descriptionMobile}{" "}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          transition={{
            ease: [0.25, 0.1, 0.25, 1.0],
            duration: 0.85,
            delay: 0.35,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className=""
        >
          <Link
            href="/contact"
            className="cta-container mt-16 max-[850px]:hidden w-fit flex items-center gap-0.5"
          >
            <motion.div className="cta">{getStarted}</motion.div>
            <span>
              <Image src={arrow} alt="arrow" />
            </span>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        transition={{
          ease: [0.25, 0.1, 0.25, 1.0],
          duration: 0.85,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex h-full w-[20rem] max-[850px]:w-full max-[850px]:aspect-square ml-auto rounded-[var(--radius)] bg-[#E6E6E6] border-[1px] border-[var(--border)] justify-center relative"
      >
        <Image
          src={phone}
          className="w-auto h-[80%] absolute bottom-0"
          height={1000}
          width={1000}
          alt="screenshot"
        />
      </motion.div>
    </div>
  );
}

export default Value;
