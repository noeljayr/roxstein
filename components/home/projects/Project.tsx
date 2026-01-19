"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import mzunipay from "@/public/projects/mzunipay.png";
import racket from "@/public/projects/racket.png";
import mdf from "@/public/projects/mdf.png"
import gbs from "@/public/projects/gbs.png";
import iru from "@/public/projects/iru.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

type Types = {
  name: string;
  link: string;
  image: string;
};

type FinalTypes = {
  project: Types;
  index: number;
};

function Project({ project, index }: FinalTypes) {
  const t = useTranslations("visitSite");
  const ref = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>(0);

  // Handle mouse movement with requestAnimationFrame
  useEffect(() => {
    const el = ref.current;
    if (!el || !isHovered) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!el) return;

      // Cancel previous frame if pending
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Schedule position update
      animationFrameRef.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovered]);

  // Set initial position on hover
  const handleMouseEnter = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.a
      initial={{ opacity: 0, y: 60 }}
      transition={{
        ease: [0.25, 0.1, 0.25, 1.0],
        duration: 0.85,
        delay: index * 0.35,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      target="_blank"
      ref={ref}
      href={project.link}
      className={`project w-full h-full bg-[#E6E6E6] cursor-none relative overflow-hidden rounded-[var(--radius)] border border-black/10 flex items-center justify-center max-[800px]:aspect-square`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && (
        <motion.span
          key={index}
          initial={{
            x: mousePos.x,
            y: mousePos.y,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            x: mousePos.x,
            y: mousePos.y,
            scale: 1,
            opacity: 1,
          }}
          transition={{ ease: [0.25, 0.1, 0.25, 1.0], duration: 0 }}
          exit={{
            scale: 0,
            opacity: 0,
            transition: { duration: 0 },
          }}
          className="absolute z-[2] indicator h-[5rem] w-[5rem] bg-[var(--primary)] text-[var(--off-white)] flex items-center justify-center text-center font-bold rounded-full pointer-events-none"
          style={{
            left: 0,
            top: 0,
            translateX: "-50%",
            translateY: "-50%",
          }}
        >
          {t("text")}
        </motion.span>
      )}

      <Image
        src={
          project.image === "mdf"
            ? mdf
            : project.image == "iru"
            ? iru
            : project.image === "gbs"
            ? gbs
            : racket
        }
        alt={project.name}
        className={` w-[85%] border ${project.image === "vom" ? "border-black/10" : "border-black/5"} top-[10%] rounded-[var(--radius-s)] shadow-lg h-fit object-cover object-center absolute z-[0]`}
      />
    </motion.a>
  );
}

export default Project;
