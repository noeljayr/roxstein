"use client";

import "@/css/contact.css";

import { IconPhoneCall } from "@tabler/icons-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import Loader from "@/components/ux/Loader";

const englishServices = ["Design", "Development", "Hosting"];
const germanServices = ["Design", "Entwicklung", "Hosting"];

function Contact() {
  const [services, setServices] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const t = useTranslations("contactPage");
  const locale: string = useLocale();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [empty, setEmpty] = useState<boolean>(false);

  useEffect(() => {
    if (locale === "de") {
      setServices(germanServices);
    } else {
      setServices(englishServices);
    }
  }, [locale]);

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (empty) return;

    setLoading(true);
    setSuccess(false);
    setError(false);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
          phone,
          message,
          services: selectedServices,
        }),
      });

      if (!response.ok) {
        setError(true);
        throw new Error("Failed to send email");
      }

      const data = await response.json();
      console.log("Email sent successfully:", data);
      setSuccess(true);
    } catch (error) {
      setError(true);
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  const emptyFields = () => {
    if (name.length < 3 || email.length < 5 || selectedServices.length === 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  };

  useEffect(() => {
    emptyFields();
  }, [name, email, phone, message, selectedServices, emptyFields]);

  useEffect(()=>{
    if(success){
      setEmail("")
      setName("")
      setMessage("")
      setPhone("")
      setSelectedServices([])
    }
  }, [success])

  return (
    <div className="section flex flex-col mt-8">
      <span className="section-title">
        <span className="name">{t("title")}</span>
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
          className="text-center"
        >
          {t("tagline")}
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
            {t("description")} <br />
            <Link
              target="_blank"
              className="font-bold text-[var(--primary)] hover:underline"
              href={`mailto:${t("emailAddress")}`}
            >
              {t("emailAddress")}.
            </Link>
          </motion.p>
        </div>
      </div>

      <motion.form
        onSubmit={sendEmail}
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
            <label htmlFor="">{t("form.name.label")}</label>
            <input
              required
              type="text"
              placeholder={t("form.name.placeholder")}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-input">
            <label htmlFor="">{t("form.email.label")}</label>
            <input
              required
              type="email"
              placeholder={t("form.email.placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-input">
            <label htmlFor="">
              {t("form.phone.label")}{" "}
              <span className="opacity-50 ml-1">
                {" "}
                {t("form.message.optional")}
              </span>{" "}
            </label>
            <input
              required
              type="text"
              placeholder="+41"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-input">
            <label htmlFor="">
              {t("form.message.label")}
              <span className="opacity-50 ml-1">
                {" "}
                {t("form.message.optional")}
              </span>
            </label>
            <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t("form.message.placeholder")} />
          </div>
        </div>

        <div className="flex flex-col gap-2 p-4 w-full bg-[#E6E6E6] border-[1px] border-[var(--border)] rounded-[var(--radius)] rounded-t-[0.5rem]">
          <span className="font-semibold opacity-70 ">
            {t("form.services.label")}
            <span className="opacity-50 ml-1">
              {t("form.services.placeholder")}
            </span>
          </span>
          <div className="flex items-center gap-4 max-sm:gap-2 max-sm:grid max-sm:grid-cols-3">
            {services.map((s, index) => {
              const idx = index + 1;
              return (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    ease: [0.25, 0.1, 0.25, 1.0],
                    duration: 0.5,
                    delay: idx * 0.25,
                  }}
                  key={index}
                  onClick={() => toggleService(s)}
                  style={{ transition: "var(--transition)" }}
                  className={`cursor-pointer text-center flex items-center justify-center rounded-4xl border-[1px] px-4 max-sm:px-2 py-1.5 font-semibold select-none ${
                    selectedServices.includes(s)
                      ? "border-transparent bg-[var(--primary)] text-[var(--off-white)]"
                      : "bg-[rgba(65,98,191,0.05)] border-[rgba(65,98,191,0.2)]"
                  }`}
                >
                  {s}
                </motion.span>
              );
            })}
          </div>
        </div>

        <button
          disabled={loading}
          style={{ borderRadius: "var(--radius-s)" }}
          className={`cta-2 mt-2 cursor-pointer items-center justify-center flex h-[2.2rem] ${
            empty || loading ? "opacity-50 pointer-events-none" : "opacity-100"
          }`}
        >
          {loading ? <Loader /> : t("form.submit")}
        </button>

        {error && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: [0.25, 0.1, 0.25, 1.0], duration: 0.5 }}
            layout="position"
            key={"error"}
            className="font-semibold mx-auto mt-2 w-fit max-sm:w-full max-sm:text-center font-p-3 px-4 py-1.5 bg-red-100 text-red-600 border border-red-300 rounded-4xl"
          >
            {t("form.error")}
          </motion.span>
        )}

        {success && (
          <motion.span
            layout="position"
            key={"success"}
            className="font-semibold mx-auto mt-2 w-fit max-sm:w-full max-sm:text-center font-p-3 px-4 py-1.5 bg-green-100 text-green-600 border border-green-300 rounded-4xl"
          >
            {t("form.success")}
          </motion.span>
        )}
      </motion.form>
    </div>
  );
}

export default Contact;
