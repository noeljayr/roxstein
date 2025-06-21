"use client";

import { useRive } from "@rive-app/react-canvas";
import { useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";

function Reason3() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false });

  const { rive, RiveComponent } = useRive({
    src: "/creative-animation.riv",
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
        delay: 0.55,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      ref={ref}
      className="reason"
    >
      <span className="number">03</span>
      <span className="title">Creative Excellence</span>
      <p className="opacity-85">
        We mix creative design and expert development to build products that
        stand out and give your brand an authentic presence online.
      </p>
      <div className="absolute h-[70%] bottom-[-10%] w-full">
        <RiveComponent />
      </div>
    </motion.div>
  );
}

export default Reason3;
