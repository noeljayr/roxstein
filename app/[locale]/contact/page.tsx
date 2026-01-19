"use client";

import "@/css/contact.css";

import { IconPhoneCall } from "@tabler/icons-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import Loader from "@/components/ux/Loader";
import { isValidPhoneNumber } from "libphonenumber-js";

const englishServices = ["Design", "Development", "Hosting"];
const germanServices = ["Design", "Entwicklung", "Hosting"];

interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  services?: string;
}

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
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {},
  );
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [hasValidationErrors, setHasValidationErrors] =
    useState<boolean>(false);

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
    // Clear services validation error when user selects a service
    if (validationErrors.services) {
      setValidationErrors((prev) => ({ ...prev, services: undefined }));
    }
  };

  // Validation functions
  const validateName = (value: string): string | undefined => {
    const trimmed = value.trim();

    if (!trimmed) {
      return t("form.validation.name.required");
    }

    // must contain at least two name parts
    if (trimmed.split(/\s+/).length < 2) {
      return t("form.validation.name.minLength");
    }

    // allowed characters only
    const nameRegex = /^[A-Za-z]+([ '-][A-Za-z]+)+$/;
    if (!nameRegex.test(trimmed)) {
      return t("form.validation.name.invalid");
    }

    return undefined;
  };

  const validateEmail = (value: string): string | undefined => {
    if (!value.trim()) {
      return t("form.validation.email.required");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return t("form.validation.email.invalid");
    }
    return undefined;
  };

  const validatePhone = (value: string): string | undefined => {
    if (!value.trim()) {
      return undefined; // Phone is optional
    }

    try {
      // Check if the phone number is valid using libphonenumber-js
      const isValid = isValidPhoneNumber(value);

      if (isValid) {
        return undefined; // Valid phone number
      }

      // If not valid, check if it might be a local number without country code
      const cleanPhone = value.replace(/[\s\-\(\)]/g, "");

      // If it starts with a digit (not +), suggest adding country code
      if (/^[0-9]/.test(cleanPhone) && !cleanPhone.startsWith("+")) {
        return t("form.validation.phone.needsCountryCode");
      }

      return t("form.validation.phone.invalid");
    } catch (error) {
      // If parsing completely fails, return invalid message
      return t("form.validation.phone.invalid");
    }
  };

  const validateServices = (services: string[]): string | undefined => {
    if (services.length === 0) {
      return t("form.validation.services.required");
    }
    return undefined;
  };

  // Handle field blur events
  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));

    let error: string | undefined;
    switch (field) {
      case "name":
        error = validateName(name);
        break;
      case "email":
        error = validateEmail(email);
        break;
      case "phone":
        error = validatePhone(phone);
        break;
      case "services":
        error = validateServices(selectedServices);
        break;
    }

    setValidationErrors((prev) => ({ ...prev, [field]: error }));
  };

  // Real-time validation on input change
  useEffect(() => {
    if (touched.name) {
      const error = validateName(name);
      setValidationErrors((prev) => ({ ...prev, name: error }));
    }
  }, [name, touched.name, t]);

  useEffect(() => {
    if (touched.email) {
      const error = validateEmail(email);
      setValidationErrors((prev) => ({ ...prev, email: error }));
    }
  }, [email, touched.email, t]);

  useEffect(() => {
    if (touched.phone) {
      const error = validatePhone(phone);
      setValidationErrors((prev) => ({ ...prev, phone: error }));
    }
  }, [phone, touched.phone, t]);

  useEffect(() => {
    if (touched.services) {
      const error = validateServices(selectedServices);
      setValidationErrors((prev) => ({ ...prev, services: error }));
    }
  }, [selectedServices, touched.services, t]);

  // Update hasValidationErrors whenever validationErrors changes
  useEffect(() => {
    setHasValidationErrors(Object.keys(validationErrors).length > 0);
  }, [validationErrors]);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const phoneError = validatePhone(phone);
    const servicesError = validateServices(selectedServices);

    const errors: ValidationErrors = {
      name: nameError,
      email: emailError,
      phone: phoneError,
      services: servicesError,
    };

    // Remove undefined errors
    Object.keys(errors).forEach((key) => {
      if (errors[key as keyof ValidationErrors] === undefined) {
        delete errors[key as keyof ValidationErrors];
      }
    });

    setValidationErrors(errors);
    setTouched({ name: true, email: true, phone: true, services: true });

    // If there are validation errors, don't submit
    if (Object.keys(errors).length > 0) {
      return;
    }

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

  useEffect(() => {
    if (success) {
      setEmail("");
      setName("");
      setMessage("");
      setPhone("");
      setSelectedServices([]);
      setValidationErrors({});
      setTouched({});
    }
  }, [success]);

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
              type="text"
              placeholder={t("form.name.placeholder")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => handleBlur("name")}
              className={
                validationErrors.name
                  ? "!outline-red-500/25 !outline-2 !border-red-500"
                  : ""
              }
            />
            {validationErrors.name && (
              <span className="text-red-500 text-sm mt-0.5 block font-p-4">
                {validationErrors.name}
              </span>
            )}
          </div>

          <div className="form-input">
            <label htmlFor="">{t("form.email.label")}</label>
            <input
              type="email"
              placeholder={t("form.email.placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => handleBlur("email")}
              className={
                validationErrors.email
                  ? "!outline-red-500/25 !outline-2 !border-red-500"
                  : ""
              }
            />
            {validationErrors.email && (
              <span className="text-red-500 text-sm mt-0.5 block font-p-4">
                {validationErrors.email}
              </span>
            )}
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
              type="text"
              placeholder={t("form.phone.placeholder")}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onBlur={() => handleBlur("phone")}
              className={
                validationErrors.phone
                  ? "!outline-red-500/25 !outline-2 !border-red-500"
                  : ""
              }
            />
            {validationErrors.phone && (
              <span className="text-red-500 text-sm mt-0.5 block font-p-4">
                {validationErrors.phone}
              </span>
            )}
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
              placeholder={t("form.message.placeholder")}
            />
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
                  onBlur={() => handleBlur("services")}
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
          {validationErrors.services && (
            <span className="text-red-500 text-sm mt-0.5 block font-p-4">
              {validationErrors.services}
            </span>
          )}
        </div>

        <button
          disabled={loading || !hasValidationErrors}
          style={{ borderRadius: "var(--radius-s)" }}
          className={`cta-2 mt-2 cursor-pointer items-center justify-center flex h-[2.2rem] ${
            !hasValidationErrors || loading
              ? "opacity-50 pointer-events-none"
              : "opacity-100"
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
