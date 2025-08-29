import Image from "next/image";
import Progress from "./Progress";
import bolt from "@/public/bolt.png";
import diamond from "@/public/diamond-2.png";
import search from "@/public/world-search.png";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

function Reason4() {
  const t = useTranslations("why.reason4");

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      transition={{
        ease: [0.25, 0.1, 0.25, 1.0],
        duration: 0.85,
        delay: 0.25,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="reason"
    >
      
      <span className="title">{t("title")}</span>
      <p className="opacity-85">
        {t("description")}
      </p>

      <div className="absolute bottom-0 justify-self-center j flex gap-2 items-center w-[calc(100%_-_1.5rem)] border-[1px] border-[rgba(44,_44,_53,_0.05)] h-[48%] bg-[#E1E1E1] rounded-t-[var(--radius-m)] py-4 px-8 justify-between ">
        <div className="flex flex-col items-center gap-1">
          <span className="flex flex-col items-center justify-center relative">
            <Image src={bolt} alt="" className="absolute z-[2] w-[1.5rem]" />
            <Progress variant="" />
          </span>
          <span
            style={{ fontSize: "var(--p4)" }}
            className="opacity-85 font-semibold"
          >
            {t("performance")}
          </span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <span className="flex flex-col items-center justify-center relative">
            <Image src={diamond} alt="" className="absolute z-[2] w-[1.5rem]" />
            <Progress variant="1" />
          </span>
          <span
            style={{ fontSize: "var(--p4)" }}
            className="opacity-85 font-semibold"
          >
            {t("bestPractices")}
          </span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <span className="flex flex-col items-center justify-center relative">
            <Image src={search} alt="" className="absolute z-[2] w-[1.5rem]" />
            <Progress variant="" />
          </span>
          <span
            style={{ fontSize: "var(--p4)" }}
            className="opacity-85 font-semibold"
          >
            {t("seo")}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default Reason4;
