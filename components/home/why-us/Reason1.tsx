"use client";

import { useRive } from "@rive-app/react-canvas";
import { useEffect } from "react";
import { motion } from "motion/react";

function Reason1() {
  const { rive, RiveComponent } = useRive({
    src: "/expertise-animation.riv",
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
        delay: 0,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="reason"
    >
      <span className="number">01</span>
      <span className="title">Expertise</span>
      <p className="opacity-85">
        Our team leverages extensive hands-on experience and in-depth technical
        know-how on every project.
      </p>

      <RiveComponent className="absolute h-[80%] w-[100%] bottom-0 left-0" />
    </motion.div>
  );
}

export default Reason1;
