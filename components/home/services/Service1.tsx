"use client";

import { useRive } from "@rive-app/react-canvas";
import React, { useEffect } from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

function Service1() {
  const t = useTranslations("services.design");
  const { rive, RiveComponent } = useRive({
    src: "https://cdn.jsdelivr.net/gh/noeljayr/roxstein/public/design-animation.riv",
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
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid grid-cols-[40%_1fr] gap-4 col-span-2 max-[800px]:col-span-1 service  max-[800px]:flex  max-[800px]:flex-col  max-[800px]:gap-2"
    >
      <div className="flex flex-col p-4">
        <span className="font-bold font-p-1">{t("title")}</span>
        <p className="opacity-80 font-medium">{t("description")}</p>

        
      </div>

      <div className="relative flex w-full h-full brightness-95">
        <div className="absolute  h-[90%] max-[450px]:h-[125%] bottom-[-0.5rem] right-[-0.5rem] aspect-[1.51/1]">
          <RiveComponent />
        </div>
      </div>
    </motion.div>
  );
}

export default Service1;
