"use client";

import { IconFlameFilled } from "@tabler/icons-react";
// import Reason1 from "./Reason1";
// import Reason2 from "./Reason2";
import Reason3 from "./Reason3";
import Reason4 from "./Reason4";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

function WhyUs() {
  const t = useTranslations("why");
  return (
    <div className="section ">
      <span className="section-title">
        <span className="name">{t("title")}</span>
        <span className="icon icon-filled">
          <IconFlameFilled />
        </span>
      </span>

      <motion.div className="why-us-tagline flex items-center flex-col gap-0.5">
        <motion.h3
          initial={{ opacity: 0, y: -40 }}
          transition={{
            ease: [0.25, 0.1, 0.25, 1.0],
            duration: 0.85,
            delay: 0,
          }}
          className="max-sm:text-center"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t("tagline")}
        </motion.h3>
        <div className="text-center  items-center flex flex-col gap-1">
          <motion.p
            initial={{ opacity: 0, y: -40 }}
            transition={{
              ease: [0.25, 0.1, 0.25, 1.0],
              duration: 0.85,
              delay: 0.25,
            }}
            whileInView={{ opacity: 0.85, y: 0 }}
            viewport={{ once: true }}
            className="opacity-85"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            transition={{
              ease: [0.25, 0.1, 0.25, 1.0],
              duration: 0.85,
              delay: 0.35,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center flex"
          >
            <p>
              <b className="">{t("yourbigideas")}</b>
            </p>
            <p className="opacity-85"> {t("last")}</p>
          </motion.div>
        </div>
      </motion.div>

      <div className="grid reasons mt-4 gap-4 w-full grid-cols-2 max-[800px]:flex max-[800px]:flex-col">
        <Reason3 />
        <Reason4 />
      </div>
    </div>
  );
}

export default WhyUs;
