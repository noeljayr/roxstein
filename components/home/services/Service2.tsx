"use client";

import { useRive } from "@rive-app/react-canvas";
import { useEffect } from "react";
import { motion } from "motion/react";

function Service2() {
  const { rive, RiveComponent } = useRive({
    src: "/dev-animation.riv",
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
        delay: 0.25,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="service grid grid-row-[auto_1fr] gap-1 relative"
    >
      <div className="flex flex-col p-4">
        <span className="font-bold font-p-1">Development</span>
        <p className="font-medium opacity-85">
          We turn static design images to full functioning sites, using
          industry’s best practices to ensure that your website is as reliable
          as it can be.
        </p>
      </div>

      <div className="absolute bottom-[-6rem] right-[-7rem] w-full h-full">
        <RiveComponent />
      </div>
    </motion.div>
  );
}

export default Service2;
