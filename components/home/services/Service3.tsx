"use client";

import { useRive } from "@rive-app/react-canvas";
import { useEffect } from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

function Service3() {
  const t = useTranslations("services.hosting");
 
   
  const { rive, RiveComponent } = useRive({
    src: "https://cdn.jsdelivr.net/gh/noeljayr/roxstein/public/hosting-animation.riv",
    stateMachines: "default",
    autoplay: false,
  });

  useEffect(() => {
    if (rive) {
      rive.play();
    }
  }, [rive]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      transition={{
        ease: [0.25, 0.1, 0.25, 1.0],
        duration: 0.85,
        delay: 0.65,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="service grid grid-row-[auto_1fr] gap-1 relative"
    >
      <div className="flex flex-col p-4">
        <span className="font-bold font-p-1">{t("title")}</span>
        <p className="font-medium opacity-85">{t("description")}</p>
      </div>

      <div className="flex relative w-[80%] h-[90%] mx-auto">
        <RiveComponent />
      </div>
    </motion.div>
  );
}

export default Service3;
