"use client";

import "@/css/hero.css";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { useEffect } from "react";
import heroImage from "@/public/hero-image.png";
import Image from "next/image";
import Customers from "../charts/Customers";
import NumberFlow from "@number-flow/react";
import { motionTranstion } from "@/constants/motionTranstion";

function HeroSection() {
  const radius = 15.9155;
  const circumference = 2 * Math.PI * radius;
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setValue(98);
    }, 1500);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <motion.div className="hero-section h-[25rem] flex relative items-center overflow-hidden justify-between">
      <div className="flex flex-col gap-3">
        <div className="flex w-[60ch] flex-col gap-1">
          <motion.span
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              ease: [0.25, 0.1, 0.25, 1.0],
              duration: 0.75,
            }}
            className="p-1.5 px-3 mb-2 rounded-4xl w-fit border-[1px] border-[rgba(65,98,191,0.1)] bg-[rgba(65,98,191,0.05)] font-p-4 flex gap-2"
          >
            <span className="font-extrabold text-[var(--primary)]">Local.</span>
            <span className="font-extrabold text-[var(--primary)]">
              Reliable.
            </span>
            <span className="font-extrabold text-[var(--primary)]">
              Affordable.
            </span>
          </motion.span>
          <motion.h1
            initial={{ y: -40, opacity: 0 }}
            transition={{
              ease: [0.25, 0.1, 0.25, 1.0],
              duration: 0.75,
              delay: 0.25,
            }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className=""
          >
            Max out your business goals.
          </motion.h1>
          <motion.p
            initial={{ y: -40, opacity: 0 }}
            transition={{
              ease: [0.25, 0.1, 0.25, 1.0],
              duration: 0.75,
              delay: 0.35,
            }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="w-full font-medium opacity-85"
          >
            When <b>Swiss</b> quality assurance meets global talent, we ensure
            that we maximize your business online whether its for reach or
            profits
          </motion.p>
        </div>

        <motion.div
          initial={{ y: -40, opacity: 0 }}
          transition={{
            ease: [0.25, 0.1, 0.25, 1.0],
            duration: 0.75,
            delay: 0.45,
          }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="cta-container relative z-1 flex gap-3 mt-2 items-center"
        >
          <Link href="/contact" className="cta-2">
            Request quote
          </Link>

          <Link target="_blank" href="tel:+41775090427" className="cta">
            Give us a call
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        transition={{
          ease: [0.25, 0.1, 0.25, 1.0],
          duration: 0.85,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="hero-image right-[5rem] self-center rounded-[var(--radius)] border-[1px] border-[var(--border)] h-[19rem] w-[28rem] bg-[rgba(255,255,255,0.5)] absolute"
      >
        <div className="flex conversion-chart flex-col items-center justify-center absolute border-[1px] border-white w-[4.5rem] bg-[rgba(255,255,255,0.3)] backdrop-blur-[2px] h-[4.5rem] left-[4.5rem] top-[3rem] z-[2] rounded-full">
          <svg
            className="w-[5rem] h-[5rem] top-[-0.4rem] left-[-0.3rem]  absolute loader-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-3 -4 40 40"
          >
            <circle
              r={radius}
              cx="16"
              cy="16"
              fill="#FFFFFF"
              fillOpacity={0.3}
              stroke="transparent"
            />
            <motion.circle
              cx="16"
              cy="16"
              r={radius}
              className="progress-bar__progress"
              fill="none"
              stroke="#4162BF"
              initial={{ strokeDashoffset: 100 }}
              whileInView={{ strokeDashoffset: 8 }}
              transition={{
                ease: [0.25, 0.1, 0.25, 1.0],
                duration: 4.5,
              }}
              viewport={{ once: true }}
              strokeDasharray={circumference}
            />
          </svg>
          <span className="font-extrabold font-p-1 text-[#8D8D8D]">
            <NumberFlow value={value} style={{ color: "#8D8D8D" }} />%
          </span>
          <span
            style={{ fontSize: "calc(var(--p4) * 0.65)" }}
            className=" text-[#8F8F8F] font-bold"
          >
            Conversion rate
          </span>
        </div>

        <Image
          src={heroImage}
          alt="hero image"
          className="absolute left-[-3rem] bottom-0"
        />

        <div className="chart p-3 backdrop-blur-[5px] rounded-[var(--radius)] border-[1px] border-[rgba(255,255,255,0.5)] absolute right-[-6rem] scale-[0.8] bg-[rgba(255,255,255,0.3)] top-[4rem]">
          <Customers />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default HeroSection;
