"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import iru from "@/public/projects/iru.png";
import mzunipay from "@/public/projects/mzunipay.png";
import rainbow from "@/public/projects/rainbow.png";
import makoko from "@/public/projects/makoko.png";
import Image from "next/image";

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
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      transition={{
        ease: [0.25, 0.1, 0.25, 1.0],
        duration: 0.85,
        delay: index * 0.35,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className=""
    >
      <Link
        target="_blank"
        ref={ref}
        href={project.link}
        className="project w-full h-full bg-[#E6E6E6] cursor-none relative overflow-hidden rounded-[var(--radius)] border border-[var(--border)] flex items-center justify-center"
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
            transition={{ ease: [0.25, 0.1, 0.25, 1.0], duration: 0.15 }}
            exit={{
              scale: 0,
              opacity: 0,
              transition: { duration: 0.15 },
            }}
            className="absolute z-[2] indicator h-[3.5rem] w-[3.5rem] bg-[var(--primary)] text-[var(--off-white)] flex items-center justify-center text-center font-bold rounded-full pointer-events-none"
            style={{
              left: 0,
              top: 0,
              translateX: "-50%",
              translateY: "-50%",
            }}
          >
            Visit site
          </motion.span>
        )}

        <Image
          src={
            project.image === "iru"
              ? iru
              : project.image == "mzunipay"
              ? mzunipay
              : project.image === "rainbow"
              ? rainbow
              : makoko
          }
          alt={project.name}
          className="h-[140%] scale-[1.3] w-full object-cover object-center absolute z-[0]"
        />
      </Link>
    </motion.div>
  );
}

export default Project;
