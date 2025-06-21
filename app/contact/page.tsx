"use client";

import "@/css/contact.css";

import { IconPhoneCall } from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "motion/react";

const services = ["Design", "Development", "Deployment & Hosting"];

function Contact() {
  const [seletedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    if (seletedServices.includes(service)) {
      setSelectedServices((prev) => prev.filter((q) => q !== service));
    } else {
      setSelectedServices((prev) => [...prev, service]);
    }
  };

  return (
    <div className="section flex flex-col mt-8">
      <span className="section-title">
        <span className="name">Contact</span>
        <span className="icon relative">
          <IconPhoneCall />
        </span>
      </span>

      <div className="flex items-center flex-col gap-0.5">
        <motion.h3
          initial={{ opacity: 0, y: -40 }}
          transition={{
            ease: [0.25, 0.1, 0.25, 1.0],
            duration: 0.85,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Together we can boost your company’s growth
        </motion.h3>
        <div className="text-center  items-center flex flex-col gap-1">
          <motion.p
            initial={{ opacity: 0, y: -40 }}
            transition={{
              ease: [0.25, 0.1, 0.25, 1.0],
              duration: 0.85,
              delay: 0.25,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="opacity-85"
          >
            For business inquiries or to say hello, fill out the form below or
            email <br />
            <Link
              target="_blank"
              className="font-bold text-[var(--primary)] hover:underline"
              href="mailto:contact@roxstein.ch"
            >
              contact@roxstein.ch.
            </Link>
          </motion.p>
        </div>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 60 }}
        transition={{
          ease: [0.25, 0.1, 0.25, 1.0],
          duration: 0.85,
          delay: 0.55,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        action=""
        className="contact-form w-full flex flex-col gap-1"
      >
        <div className="flex flex-col gap-4 p-4 w-full bg-[#E6E6E6] border-[1px] border-[var(--border)] rounded-[var(--radius)] rounded-b-[0.5rem]">
          <div className="form-input">
            <label htmlFor="">Name</label>
            <input required type="text" placeholder="Full name" />
          </div>

          <div className="form-input">
            <label htmlFor="">What's your email</label>
            <input required type="email" placeholder="Email address" />
          </div>

          <div className="form-input">
            <label htmlFor="">Whatsapp number</label>
            <input required type="text" placeholder="+41" />
          </div>

          <div className="form-input">
            <label htmlFor="">
              Any extra details that you would like to share?
              <span className="opacity-50 ml-1">
                {" "}
                {`(`}Optional{`)`}
              </span>
            </label>
            <textarea placeholder="Write us your message" />
          </div>
        </div>

        <div className="flex flex-col gap-2 p-4 w-full bg-[#E6E6E6] border-[1px] border-[var(--border)] rounded-[var(--radius)] rounded-t-[0.5rem]">
          <span className="font-semibold opacity-70 ">
            Service{" "}
            <span className="opacity-50 ml-1">
              {`(`}select all that applies{`)`}
            </span>
          </span>
          <div className="flex items-center gap-4">
            {services.map((s, index) => {
              let idx = index + 1;
              return (
                <span
                  key={index}
                  onClick={() => toggleService(s)}
                  style={{ transition: "var(--transition)" }}
                  className={`cursor-pointer rounded-4xl border-[1px] px-4 py-1.5 font-semibold select-none ${
                    seletedServices.includes(s)
                      ? "border-transparent bg-[var(--primary)] text-[var(--off-white)]"
                      : "bg-[rgba(65,98,191,0.05)] border-[rgba(65,98,191,0.2)]"
                  }`}
                >
                  {s}
                </span>
              );
            })}
          </div>
        </div>

        <button
          style={{ borderRadius: "var(--radius-s)" }}
          className="cta-2 mt-2 cursor-pointer"
        >
          Send message
        </button>
      </motion.form>
    </div>
  );
}

export default Contact;
