"use client";
import { motion } from "motion/react";
import NumberFlow from "@number-flow/react";
import { IconInfoCircleFilled } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import tron from "@/public/tron-analytics.png";
import Image from "next/image";
import prof1 from "@/public/team/prof1.png";
import prof2 from "@/public/team/prof2.png";
import prof5 from "@/public/team/prof5.png";
import prof6 from "@/public/team/prof6.jpg";
import switzerland from "@/public/team/country/switzerland.png";
import nigeria from "@/public/team/country/nigeria.png";
import mw from "@/public/team/country/malawi.png";

const values = [
  {
    title: "Craftsmanship",
    p: "Treat projects as a craft. “Done isn’t enough, done right is the only standard.”",
  },
  {
    title: "Client centric",
    p: "We regularly ask for feedback and keep improving our work to make sure it really makes clients happy.",
  },
  {
    title: "Collaboration",
    p: "Open communication, clear roadmaps, honest status reports.",
  },
];

const team = [
  {
    name: "Gian Iglowstein",
    position: "Chief Executive Officer",
    courtry: "Switzerland",
    profile: prof1,
  },
  {
    name: "Robin Stambach",
    position: "Chief Financial Officer",
    courtry: "Switzerland",
    profile: prof5,
  },
  {
    name: "Taiwo Emanuel Jolomi",
    position: "Full Stack developer",
    courtry: "Nigeria",
    profile: prof2,
  },
  {
    name: "Noel Luhanga",
    position: "UI/UX Designer",
    courtry: "Switzerland",
    profile: prof6,
  },
];

function AboutUs() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setValue(99);
    }, 1500);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <div className="section flex flex-col mt-8">
      <span className="section-title">
        <span className="name">About us</span>
        <span className="icon  icon-filled">
          <IconInfoCircleFilled className="relative" />
        </span>
      </span>

      <div className="flex items-center flex-col gap-0.5">
        <h3>Get to know about Roxstein and the team.</h3>
      </div>

      <div className="overflow-hidden flex flex-col p-4 w-full bg-[#E6E6E6] border-[1px] border-[var(--border)] rounded-[var(--radius)] ">
        <div className="flex flex-col pb-8  border-b-[1px] border-b-[var(--border)]">
          <div className="flex items-center w-full justify-between">
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              transition={{
                ease: [0.25, 0.1, 0.25, 1.0],
                duration: 0.85,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-p-1 font-semibold"
            >
              Years in business
            </motion.span>
            <div className="flex gap-2 ml-auto">
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                transition={{
                  ease: [0.25, 0.1, 0.25, 1.0],
                  duration: 0.85,
                  delay: 0.35,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-bold font-p-4 px-4 py-2 bg-[#D6D9E3] rounded-4xl text-[var(--primary)]"
              >
                3+ years of experience
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                transition={{
                  ease: [0.25, 0.1, 0.25, 1.0],
                  duration: 0.85,
                  delay: 0.55,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-bold font-p-4 px-4 py-2 bg-[#D0E0DB] rounded-4xl text-[#03825E]"
              >
                57+ completed projects
              </motion.span>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            transition={{
              ease: [0.25, 0.1, 0.25, 1.0],
              duration: 0.85,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-medium opacity-75 w-[55ch]"
          >
            Roxstein was founded 3 years ago but it is comprised of a team of
            professionals and experts with more years of experience
          </motion.p>
        </div>

        <div className="w-full pt-8 grid grid-cols-[auto_55%] justify-between">
          <div className="flex flex-col font-medium w-[45ch]">
            <motion.span
              initial={{ opacity: 0, y: -40 }}
              transition={{
                ease: [0.25, 0.1, 0.25, 1.0],
                duration: 0.85,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-p-1 font-semibold"
            >
              Roxstein{`'`}s values
            </motion.span>
            <motion.p
              initial={{ opacity: 0, y: -40 }}
              transition={{
                ease: [0.25, 0.1, 0.25, 1.0],
                duration: 0.85,
                delay: 0.35,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="opacity-70"
            >
              Our business approach and processes are guided by the following
              values:
            </motion.p>

            <div className="flex flex-col w-full gap-2 mt-2">
              {values.map((v, index) => {
                const idx = index + 2;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    transition={{
                      ease: [0.25, 0.1, 0.25, 1.0],
                      duration: 0.85,
                      delay: idx * 0.25,
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    key={index}
                    className="grid grid-cols-[1rem_1fr] w-full items-center gap-3"
                  >
                    <span className="bg-[var(--primary)] w-[3px] rounded-[0.5rem] opacity-50 h-[80%]"></span>
                    <div className="flex flex-col">
                      <span className="font-semibold opacity-90">
                        {v.title}
                      </span>
                      <p className="font-p-4 opacity-70">{v.p}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 h-full">
            <motion.div
              initial={{ opacity: 0 }}
              transition={{
                ease: [0.25, 0.1, 0.25, 1.0],
                duration: 0.85,
                delay: 1.5,
              }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col  h-full w-full bg-[#DBDDE3] border-[1px] border-[rgba(65,98,191,0.1)]  rounded-[var(--radius-m)] p-3"
            >
              <span className="font-semibold font-p-2 opacity-85 mb-auto">
                Satisfied Clients
              </span>

              <NumberFlow
                suffix="%"
                value={value}
                className="text-[var(--primary)] font-bold text-6xl leading-0"
              />
              <p className="opacity-70 font-p-4 font-medium">
                Driving brand success through innovative and powerful solutions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              transition={{
                ease: [0.25, 0.1, 0.25, 1.0],
                duration: 0.85,
                delay: 2,
              }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex relative bg-[#FFFFFF] rounded-[var(--radius-m)] w-full h-full overflow-hidden"
            >
              <Image
                src={tron}
                alt=""
                className="scale-[1.5] top-[25%] left-[30%] w-full h-fit absolute z-[1] "
              />
              <span className="absolute z-[2] h-full w-full left-0 top-0 bg-[rgba(21,21,25,0.2)]"></span>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="flex overflow-hidden flex-col p-4 w-full bg-[#E6E6E6] border-[1px] border-[var(--border)] rounded-[var(--radius)] ">
        <div className="flex flex-col pb-8  border-b-[1px] border-b-[var(--border)]">
          <div className="flex items-center w-full justify-between">
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              transition={{
                ease: [0.25, 0.1, 0.25, 1.0],
                duration: 0.85,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-p-1 font-semibold"
            >
              The team
            </motion.span>
            <div className="flex gap-2 ml-auto">
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                transition={{
                  ease: [0.25, 0.1, 0.25, 1.0],
                  duration: 0.85,
                  delay: 0.35,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-bold font-p-4 px-4 py-2 bg-[#E3D6DC] rounded-4xl text-[#BF4182]"
              >
                Professional
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                transition={{
                  ease: [0.25, 0.1, 0.25, 1.0],
                  duration: 0.85,
                  delay: 0.55,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-bold font-p-4 px-4 py-2 bg-[#DDDBCF] rounded-4xl text-[#847500]"
              >
                International
              </motion.span>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            transition={{
              ease: [0.25, 0.1, 0.25, 1.0],
              duration: 0.85,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-medium opacity-75 w-[55ch]"
          >
            Roxstein is comprised of a diverse team, including top talents from
            across the world including Africa.
          </motion.p>
        </div>

        <div className="pt-8 grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] gap-4">
          {team.map((m, index) => {
            const idx = index + 1;
            return (
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                transition={{
                  ease: [0.25, 0.1, 0.25, 1.0],
                  duration: 0.85,
                  delay: idx * 0.25,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                key={index}
                className="flex flex-col"
              >
                <Image
                  src={m.profile}
                  alt=""
                  className="w-full h-auto aspect-square object-cover rounded-[var(--radius-m)]"
                />
                <hr className="bg-[var(--border)] h-[1px] border-0 mb-2 mt-3" />

                <div className="grid grid-cols-[1fr_auto] truncate items-center">
                  <span className="font-semibold font-p-2 truncate">
                    {m.name}
                  </span>
                  <Image
                    src={
                      m.courtry.toLowerCase() === "switzerland"
                        ? switzerland
                        : m.courtry.toLowerCase() === "nigeria"
                        ? nigeria
                        : m.courtry.toLowerCase() === "malawi"
                        ? mw
                        : switzerland
                    }
                    className="h-4 w-4 ml-auto opacity-70"
                    alt={m.courtry}
                  />
                </div>

                <span className="font-medium opacity-70 font-p-3 mt-1">
                  {m.position}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
