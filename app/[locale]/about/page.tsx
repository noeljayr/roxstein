"use client";
import { motion } from "motion/react";
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
import { useLocale } from "next-intl";
import { useTranslations } from "use-intl";

const englishValues = [
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

const germanValues = [
  {
    title: "Handwerkskunst",
    p: "Ihre Zufriedenheit steht im Mittelpunkt. Deshalb holen wir kontinuierlich Feedback ein und optimieren unsere Prozesse, um Ihre Erwartungen nicht nur zu erfüllen, sondern zu übertreffen. So entstehen digitale Lösungen, die genau auf Ihre Bedürfnisse zugeschnitten sind.",
  },
  {
    title: "Kundenorientierung",
    p: "Ihre Zufriedenheit steht im Mittelpunkt. Deshalb holen wir kontinuierlich Feedback ein und optimieren unsere Prozesse, um Ihre Erwartungen nicht nur zu erfüllen, sondern zu übertreffen. So entstehen digitale Lösungen, die genau auf Ihre Bedürfnisse zugeschnitten sind.",
  },
  {
    title: "Zusammenarbeit",
    p: "Transparenz und offene Kommunikation sind die Basis unserer Partnerschaft. Mit klaren Zeitplänen, ehrlichen Statusberichten und einem engen Dialog stellen wir sicher, dass Sie jederzeit wissen, wo Ihr Projekt steht – und dass es reibungslos vorankommt.",
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
    courtry: "Malawi",
    profile: prof6,
  },
];

function AboutUs() {
  const [values, setValues] = useState(englishValues);
  const locale: string = useLocale();
  const t = useTranslations("aboutUs");

  useEffect(() => {
    if (locale === "de") {
      setValues(germanValues);
    } else {
      setValues(englishValues);
    }
  }, [locale]);

  return (
    <div className="section flex flex-col mt-8">
      <span className="section-title">
        <span className="name">{t("title")}</span>
        <span className="icon  icon-filled">
          <IconInfoCircleFilled className="relative" />
        </span>
      </span>

      <div className="flex items-center flex-col gap-0.5">
        <h3 className="text-center">{t("tagline")}</h3>
      </div>

      <div className="overflow-hidden flex flex-col p-4 w-full bg-[#E6E6E6] border-[1px] border-[var(--border)] rounded-[var(--radius)] ">
        <div className="flex flex-col pb-8 max-[850px]:pb-16 relative  border-b-[1px] border-b-[var(--border)]">
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
              {t("years.title")}
            </motion.span>
            <div className="flex gap-2 ml-auto max-[850px]:absolute max-[850px]:bottom-4">
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
                {t("years.yearsOfExperience")}
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
                {t("years.projects")}
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
            className="font-medium opacity-75 w-[55ch] max-[400px]:w-full"
          >
            {t("years.description")}
          </motion.p>
        </div>

        <div className="w-full pt-8 grid grid-cols-[auto_40%] max-[850px]:flex max-[850px]:flex-col max-[850px]:gap-4 justify-between">
          <div className="flex flex-col font-medium w-[80%] max-[360]:w-full">
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
              {t("values.title")}
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
              {t("values.description")}
            </motion.p>

            <div className="flex flex-col w-full gap-2 mt-2 ">
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

          <div className="grid max-[850px]:hidden grid-cols-1 gap-2 h-full max-[850px]:h-[15rem] max-[600px]:h-[10rem] max-[450px]:h-fit max-[450px]:flex max-[450px]:grid-rows-[10rem_15rem]">
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
        <div className="flex flex-col pb-8 max-[850px]:pb-16 relative  border-b-[1px] border-b-[var(--border)]">
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
              {t("team.title")}
            </motion.span>
            <div className="flex gap-2 ml-auto  max-[850px]:absolute max-[850px]:bottom-4">
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
                {t("team.professional")}
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
                {t("team.international")}
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
            className="font-medium opacity-75 w-[55ch] max-[400]:w-full"
          >
            {t("team.description")}
          </motion.p>
        </div>

        <div className="pt-8 grid max-sm:gap-10 grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] gap-4">
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

                <div className="grid grid-cols-[1fr_auto] pt-3 truncate items-center">
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

                <hr className="bg-[var(--border)] hidden max-sm:flex h-[1px] border-0 mb-2 mt-3" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
