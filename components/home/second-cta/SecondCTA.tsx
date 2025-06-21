"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import arrow from "@/public/arrow-up-right.png";
import Image from "next/image";

function SecondCTA() {
  return (
    <div className="flex flex-col gap-3 section">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        transition={{
          ease: [0.25, 0.1, 0.25, 1.0],
          duration: 0.85,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Still curious? Talk directly to the team.
      </motion.h1>
      <motion.span
        initial={{ opacity: 0, y: 40 }}
        transition={{
          ease: [0.25, 0.1, 0.25, 1.0],
          duration: 0.85,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=""
      >
        <Link
          target="_blank"
          href="tel:+41775090427"
          className="cta-container w-fit flex items-center gap-0.5"
        >
          <div className="cta">Call us now</div>
          <span>
            <Image src={arrow} alt="arrow" />
          </span>
        </Link>
      </motion.span>
    </div>
  );
}

export default SecondCTA;
