"use client";

import Image from "next/image";
import React from "react";
import diamond from "@/public/diamond.png";
import arrow from "@/public/arrow-up-right.png";
import Link from "next/link";
import phone from "@/public/phone.png";
import { motion } from "motion/react";

function Value() {
  return (
    <div className="section value-section flex justify-between">
      <div className="flex flex-col gap-2">
        <div className="value-section-tagline flex flex-col gap-2">
          <span className="section-title">
            <span className="name">Value</span>
            <span className="icon icon-filled">
              <Image src={diamond} className="h-3 w-3" alt="value icon" />
            </span>
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          transition={{
            ease: [0.25, 0.1, 0.25, 1.0],
            duration: 0.85,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-1 w-[68ch]"
        >
          <h3>Better value than cost added makes great product.</h3>

          <p className="opacity-85 mb-auto">
            Our commitment is to accelerate your success. Our definition of
            "great product" centers on this core idea: its ability to deliver
            meaningful business outcomes, faster workflows, actionable insights,
            improved conversions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          transition={{
            ease: [0.25, 0.1, 0.25, 1.0],
            duration: 0.85,
            delay: 0.35,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className=""
        >
          <Link
            href="/contact"
            className="cta-container mt-16 w-fit flex items-center gap-0.5"
          >
            <motion.div className="cta">Get started</motion.div>
            <span>
              <Image src={arrow} alt="arrow" />
            </span>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        transition={{
          ease: [0.25, 0.1, 0.25, 1.0],
          duration: 0.85,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex h-full w-[20rem] ml-auto rounded-[var(--radius)] bg-[#E6E6E6] border-[1px] border-[var(--border)] justify-center relative"
      >
        <Image
          src={phone}
          className="w-auto h-[80%] absolute bottom-0"
          alt="screenshot"
        />
      </motion.div>
    </div>
  );
}

export default Value;
