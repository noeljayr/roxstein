"use client";


import { motion } from "motion/react";

const Progress = ({ variant }: { variant: string }) => {
  const radius = 15.9155;
  const circumference = 2 * Math.PI * radius;

  return (
    <svg
      className="w-[4rem] h-[4rem] loader-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-3 -4 40 40"
    >
      <circle r={radius} cx="16" cy="16" fill="#EEEEEE" stroke="#EEEEEE" />
      <motion.circle
        cx="16"
        cy="16"
        r={radius}
        className="progress-bar__progress"
        fill="none"
        stroke="#C0C1C3"
        initial={{ strokeDashoffset: 100 }}
        whileInView={{ strokeDashoffset: variant == "1" ? 0 : 10 }}
        transition={{
          ease: [0.25, 0.1, 0.25, 1.0],
          duration: 4.5,
        }}
        viewport={{ once: true }}
        strokeDasharray={circumference}
      />
    </svg>
  );
};

export default Progress;
