"use client";

import { IconBriefcase2Filled } from "@tabler/icons-react";
import React from "react";
import Project from "./Project";
import { useTranslations } from "next-intl";

const projects = [
  {
    name: "Beauceron Vom Sauterhof",
    link: "http://projects.roxstein.ch/vomsauterhof",
    image: "vom",
  },

  {
    name: `Gian's Bus Service`,
    link: "https://gbs-ps.vercel.app/",
    image: "gbs",
  },

  {
    name: "Racket Service",
    link: "https://www.racket-service.ch/",
    image: "racket",
  },

  {
    name: "IRU",
    link: "https://iru-lime.vercel.app/",
    image: "iru",
  },
];

function Projects() {
  const t = useTranslations("navbar");
  const t2 = useTranslations("projectsId");
  return (
    <div id={t2("text")} className="section flex flex-col">
      <span className="section-title mb-2">
        <span className="name">{t("projects")}</span>
        <span className="icon icon-filled">
          <IconBriefcase2Filled />
        </span>
      </span>

      <div className="grid grid-cols-2 gap-4 w-full max-[800px]:flex max-[800px]:flex-col overflow-hidden">
        <div className="grid w-full grid-rows-[1fr_46%] min-[1440px]:h-[55rem] h-[40rem] max-[800px]:h-fit max-[800px]:flex max-[800px]:flex-col   gap-4 overflow-hidden">
          {projects.slice(0, 2).map((p, index) => {
            const idx = index + 1;

            return <Project key={index} project={p} index={idx} />;
          })}
        </div>
        <div className="grid w-full grid-rows-[46%_1fr] max-[800px]:grid-rows-[auto_auto] gap-4">
          {projects.slice(2, 4).map((p, index) => {
            const idx = index + 3;
            return <Project key={index} project={p} index={idx} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
