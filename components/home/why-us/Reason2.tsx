"use client";

import { motion } from "motion/react";

function Reason2() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      transition={{
        ease: [0.25, 0.1, 0.25, 1.0],
        duration: 0.85,
        delay: 0.35,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="reason"
    >
      <span className="number relative z-[2]">02</span>
      <span className="title relative z-[2]">Tailored Solutions</span>

      <p className="opacity-85 relative z-[2]">
        We understand your unique needs and provide customized website solutions
        to suit your goals.
      </p>
    </motion.div>
  );
}

export default Reason2;
