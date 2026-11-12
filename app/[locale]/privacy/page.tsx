"use client";

import { IconShieldCheckFilled } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

function Privacy() {
  const t = useTranslations("privacy");
  return (
    <div className="section flex flex-col mt-8">
      <span className="section-title">
        <span className="name">{t("title")}</span>
        <span className="icon icon-filled">
          <IconShieldCheckFilled />
        </span>
      </span>

      <div className="flex items-center flex-col gap-0.5">
        <h3 className="text-center">{t("tagline")}</h3>
      </div>

      <div className="flex flex-col gap-8 p-4 w-full bg-[#E6E6E6] border-[1px] border-[var(--border)] rounded-[var(--radius)]">
        <div className="flex flex-col gap-4">
          <span className="font-medium opacity-70">
            {t("content")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
