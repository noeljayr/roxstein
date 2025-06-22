"use client";

import Image from "next/image";
import logo from "@/public/roxstein.svg";
import { Link } from "@/i18n/routing";
import arrow from "@/public/arrow-up-right.png";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations("navbar");
  const tMeta = useTranslations("meta");
  const contact = t("contact");
  const work = t("projects");
  const about = t("about");
  const imprint = t("imprint");
  const allRights = t("allRights");

  return (
    <div className="section pb-2 mt-auto flex flex-col gap-4 justify-between">
      <div className="w-full pb-8 flex justify-between max-[800px]:flex-col max-[800px]:gap-2 ">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          transition={{
            ease: [0.25, 0.1, 0.25, 1.0],
            duration: 0.85,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2"
        >
          <Image src={logo} className="w-fit h-4" alt="logo" />
          <span className="font-semibold opacity-75">
            {tMeta("description")}
          </span>
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
          className="flex-col flex gap-2 max-[800px]:mt-2 "
        >
          <Link href="/contact" className="font-semibold">
            {contact}
          </Link>
          <Link href="/#projects" className="font-semibold">
            {work}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          transition={{
            ease: [0.25, 0.1, 0.25, 1.0],
            duration: 0.85,
            delay: 0.55,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-col flex gap-2"
        >
          <Link href="/about" className="font-semibold">
            {about}
          </Link>
          <Link href="/imprint" className="font-semibold">
            {imprint}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          transition={{
            ease: [0.25, 0.1, 0.25, 1.0],
            duration: 0.85,
            delay: 0.75,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-fit"
        >
          <Link
            target="_blank"
            href="tel:+41775090427"
            className="cta-container w-fit flex items-center gap-0.5"
          >
            <div className="cta">{t("callUs")}</div>
            <span>
              <Image src={arrow} alt="arrow" />
            </span>
          </Link>
        </motion.div>
      </div>
      <div className="flex w-full bg-[#CCD0D9] rounded-[var(--radius-s)] p-2 pr-4 justify-between items-center">
        <div>
          <Link
            target="_blank"
            href="https://www.linkedin.com/company/roxstein/"
            className="flex items-center h-6 w-6 justify-center bg-white rounded-[0.35rem]"
          >
            <IconBrandLinkedin className="w-4 h-4" />
          </Link>
        </div>

        <span className="font-semibold font-p-4 opacity-75">
          2025. {allRights}
        </span>
      </div>
    </div>
  );
}

export default Footer;
