"use client";

import { IconStarFilled } from "@tabler/icons-react";
import React from "react";
import Service1 from "./Service1";
import Service2 from "./Service2";
import Service3 from "./Services3";
import { motion } from "motion/react";

function Services() {
  return (
    <div id="services" className="section flex flex-col">
      <span className="section-title">
        <span className="name">Services</span>
        <span className="icon  icon-filled">
          <IconStarFilled className="relative" />
        </span>
      </span>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        transition={{
          ease: [0.25, 0.1, 0.25, 1.0],
          duration: 0.85,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="why-us-tagline flex items-center flex-col gap-0.5"
      >
        <h3>Customizable services</h3>
        <div className="text-center  items-center flex flex-col gap-1">
          <p className="opacity-85">
            All these services can be customized to adapt to your business goals
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-4 grid-rows-[20rem_20rem]">
        <Service1 />
        <Service2 />
        <Service3 />
      </div>
    </div>
  );
}

export default Services;
