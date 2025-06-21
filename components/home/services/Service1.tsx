"use client";

import { useRive } from "@rive-app/react-canvas";
import Link from "next/link";
import React, { useEffect } from "react";
import { motion } from "motion/react";

function Service1() {
  const { rive, RiveComponent } = useRive({
    src: "/design-animation.riv",
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
      className="grid grid-cols-[40%_1fr] gap-4 col-span-2 service"
    >
      <div className="flex flex-col p-4">
        <span className="font-bold font-p-1">Design</span>
        <p className="opacity-80 font-medium">
          We create clean layouts and visuals that help your customers find what
          they need. From buttons to the checkout page, every detail is designed
          to make it so that every one using it has the best experience.
        </p>

        <Link
          href="/contact"
          className="mt-auto font-p-3 w-fit font-semibold px-3 py-2 rounded-[var(--radius-s)] border-[1px] border-[var(--border)]"
        >
          Learn more
        </Link>
      </div>

      <div className="relative flex w-full h-full">
        <div className="absolute  h-[90%] bottom-[-0.5rem] right-[-0.5rem] aspect-[1.51/1]">
          <RiveComponent />
        </div>
      </div>
    </motion.div>
  );
}

export default Service1;
