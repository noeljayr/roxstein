"use client";

import { IconBriefcase2Filled } from "@tabler/icons-react";
import React from "react";
import Project from "./Project";

const projects = [
  {
    name: "IRU",
    link: "https://www.immediateresponseunit.com/",
    image: "iru",
  },
  {
    name: "Makoko Children Development Foundation",
    link: "https://www.mcdf.ng/",
    image: "makoko",
  },
  {
    name: "Rainbow Paints",
    link: "https://www.figma.com/design/QJ69eHpn3hgP0xP5VpKdtq/Rainbow?node-id=0-1&p=f&t=rHA0OvGDNUzdHLvf-0",
    image: "rainbow",
  },

  {
    name: "MzuniPay",
    link: "https://mzunipay.vercel.app/",
    image: "mzunipay",
  },
];

function Projects() {
  return (
    <div id="projects" className="section flex flex-col">
      <span className="section-title mb-2">
        <span className="name">Projects</span>
        <span className="icon icon-filled">
          <IconBriefcase2Filled />
        </span>
      </span>

      <div className="grid grid-cols-2 gap-4 w-full overflow-hidden">
        <div className="grid w-full grid-rows-[1fr_46%] min-[1440px]:h-[55rem] h-[40rem] gap-4 overflow-hidden">
          {projects.slice(0, 2).map((p, index) => {
            const idx = index + 1;

            return <Project key={index} project={p} index={idx} />;
          })}
        </div>
        <div className="grid w-full grid-rows-[46%_1fr] gap-4">
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
