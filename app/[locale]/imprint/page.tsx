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
          <span className="font-semibold font-p-1">{t("managment")}</span>
          <span className="flex gap-2">
            <span className="font-semibold">{t("director")}: </span>
            <span className="font-medium opacity-70">Gian Iglowstein</span>
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-semibold font-p-1">{t("contact.title")}</span>
          <span className="flex gap-2">
            <span className="font-semibold">{t("contact.email")}: </span>
            <span className="font-medium opacity-70 underline">
              contact@netflash.ch
            </span>
          </span>
          <span className="flex gap-2">
            <span className="font-semibold">{t("contact.phone")}: </span>
            <span className="font-medium opacity-70 ">+41 77 509 04 27</span>
          </span>
          <span className="flex gap-2">
            <span className="font-semibold">
              {t("contact.address.title")}:{" "}
            </span>
            <span className="font-medium opacity-70 ">
              {t("contact.address.value")}
            </span>
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-semibold font-p-1">
            {t("contact.company.title")}:
          </span>
          <span className="flex gap-2">
            <span className="font-semibold">{t("contact.company.reg")}: </span>
            <span className="font-medium opacity-70">CH-123456</span>
          </span>

          <span className="flex gap-2">
            <span className="font-semibold">
              {t("contact.company.vat")} {`(${t("contact.company.extra")})`}:{" "}
            </span>
            <span className="font-medium opacity-70">CHE-789.101.112 MWST</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Imprint;
