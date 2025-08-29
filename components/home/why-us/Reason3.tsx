"use client";

import { useRive } from "@rive-app/react-canvas";
import { useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

function Reason3() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false });
  const t = useTranslations("why.reason3");

  const { rive, RiveComponent } = useRive({
    src: "https://cdn.jsdelivr.net/gh/noeljayr/roxstein/public/creative-animation.riv",
    stateMachines: "default",
    autoplay: false,
  });

  useEffect(() => {
    if (isInView && rive) {
      if (rive) {
        rive.play();
      }
    }
  }, [rive, isInView]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      transition={{
        ease: [0.25, 0.1, 0.25, 1.0],
        duration: 0.85,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      ref={ref}
      className="reason"
    >
      
      <span className="title">{t("title")}</span>
      <p className="opacity-85">{t("description")}</p>
      <div className="absolute h-[70%] bottom-[-10%] w-full">
        <RiveComponent />
      </div>
    </motion.div>
  );
}

export default Reason3;
