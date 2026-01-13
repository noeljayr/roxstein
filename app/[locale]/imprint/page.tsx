"use client";

import { IconInfoCircleFilled } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

function Imprint() {
  const t = useTranslations("imprint");
  return (
    <div className="section flex flex-col mt-8">
      <span className="section-title">
        <span className="name">{t("title")}</span>
        <span className="icon icon-filled">
          <IconInfoCircleFilled />
        </span>
      </span>

      <div className="flex items-center flex-col gap-0.5">
        <h3 className="text-center">{t("tagline")}</h3>
      </div>

      <div className="flex flex-col gap-8 p-4 w-full bg-[#E6E6E6] border-[1px] border-[var(--border)] rounded-[var(--radius)]">
        <div className="flex flex-col gap-2">
          <span className="font-semibold font-p-1">{t("contact.title")}</span>
          <span className="flex gap-2">
            <span className="font-semibold">Name: </span>
            <span className="font-medium opacity-70 ">
              Roxstein Iglowstein {`(${t("sole")})`}
            </span>
          </span>
          <span className="flex gap-2">
            <span className="font-semibold">{t("managment")}: </span>
            <span className="font-medium opacity-70 ">Gian Iglowstein</span>
          </span>

          <span className="flex gap-2">
            <span className="font-semibold">{t("contact.email")}: </span>
            <a
              className="font-medium opacity-70 underline"
              target="_blank"
              href="mailto:info@netflash.ch"
            >
              info@netflash.ch
            </a>
          </span>
          <span className="flex gap-2">
            <span className="font-semibold">{t("contact.phone")}: </span>
            <a
              className="font-medium opacity-70 underline"
              target="_blank"
              href="tel:+41783324939"
            >
              +41 78 332 49 39
            </a>
          </span>
          <span className="flex gap-2">
            <span className="font-semibold">{t("contact.address.title")}:</span>
            <span className="font-medium opacity-70 ">
              {t("contact.address.value")}
            </span>
          </span>

          <span className="flex gap-2">
            <span className="font-semibold">
              {t("contact.language.title")}:
            </span>
            <span className="font-medium opacity-70">
              {t("contact.language.value")}
            </span>
          </span>

          <span className="flex gap-2">
            <span className="font-semibold whitespace-nowrap">
              {t("contact.disclaimer.title")}:
            </span>
            <span className="font-medium opacity-70">
            {t("contact.disclaimer.value")}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Imprint;
