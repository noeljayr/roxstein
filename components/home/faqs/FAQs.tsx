"use client";

import { IconMinus, IconPlus, IconQuestionMark } from "@tabler/icons-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { faqs_eng, faqs_ger } from "@/data/faq";
import { useLocale, useTranslations } from "next-intl";

type Question = {
  question: string;
  answer: string;
};

function FAQs() {
  const locale: string = useLocale();

  const faqs = locale === "de" ? faqs_ger : faqs_eng;
  const [activeCategory, setActiveCategory] = useState(faqs[0]);
  const [activeQuestion, setActiveQuestion] = useState<Question | null>();
  const t = useTranslations("faqs");

  const toggleActiveQuestion = (q: Question) => {
    if (q == activeQuestion) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(q);
    }
  };
  return (
    <AnimatePresence mode="wait">
      <motion.div layout className="section flex flex-col gap-2">
        <motion.span
          layout="position"
          transition={{ ease: [0.25, 0.1, 0.25, 1.0], duration: 0.5 }}
          className="section-title"
        >
          <span className="name">{t("title")}</span>
          <span className="icon">
            <IconQuestionMark />
          </span>
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          transition={{
            ease: [0.25, 0.1, 0.25, 1.0],
            duration: 0.85,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          layout="position"
          className="w-full bg-[#E6E6E6] border-[1px] border-[var(--border)] p-4 rounded-[var(--radius)]"
        >
          <div className="flex max-sm:grid max-sm:grid-cols-2 max-sm:pb-4 max-sm:truncate gap-2 items-center">
            {faqs.map((q, index) => {
              const idx = index + 1;
              return (
                <motion.span
                  layout="position"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{
                    ease: [0.25, 0.1, 0.25, 1.0],
                    duration: 0.5,
                    delay: idx * 0.25,
                  }}
                  key={index}
                  onClick={() => setActiveCategory(q)}
                  style={{ transition: "var(--transition)" }}
                  className={`category truncate text-center cursor-pointer rounded-4xl border-[1px] px-4 py-1.5 font-semibold select-none ${
                    activeCategory == q
                      ? "border-transparent bg-[var(--primary)] text-[var(--off-white)]"
                      : "bg-[rgba(65,98,191,0.05)] border-[rgba(65,98,191,0.2)]"
                  }`}
                >
                  {q.category}
                </motion.span>
              );
            })}
          </div>

          <motion.div
            layout="position"
            transition={{
              ease: [0.25, 0.1, 0.25, 1.0],
              duration: 0.25,
            }}
            className="flex flex-col gap-1 mt-2 w-full overflow-hidden"
          >
            {activeCategory.questions.map((q, index) => {
              const idx = index + 1;

              return (
                <motion.div
                  layout="position"
                  layoutId={`${index}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  key={index}
                  transition={{
                    ease: [0.25, 0.1, 0.25, 1.0],
                    duration: 0.25,
                  }}
                  animate={{ height: "auto" }}
                  onClick={() => toggleActiveQuestion(q)}
                  className="flex flex-col select-none relative cursor-pointer w-full justify-between bg-[#F3F3F3]  pl-3 p-2 rounded-[var(--radius-m)]"
                >
                  <motion.span
                    layout="position"
                    className="font-semibold flex items-center w-full justify-between"
                  >
                    {q.question}

                    <span className="h-6 w-6 bg-white  rounded-[calc(var(--radius-s)_*_0.75)] border-[1px] flex items-center justify-center border-[var(--border)]">
                      <AnimatePresence mode="wait">
                        {activeQuestion === q ? (
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                              ease: [0.25, 0.1, 0.25, 1.0],
                              duration: 0.85,
                            }}
                          >
                            <IconMinus
                              className="h-3 w-3"
                              style={{ strokeWidth: "2px" }}
                            />
                          </motion.span>
                        ) : (
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                              ease: [0.25, 0.1, 0.25, 1.0],
                              duration: 0.85,
                            }}
                          >
                            <IconPlus
                              className="h-3 w-3 "
                              style={{ strokeWidth: "2px" }}
                            />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>
                  </motion.span>

                  {activeQuestion === q && (
                    <motion.p
                      className="font-medium"
                      layout
                      transition={{
                        ease: [0.25, 0.1, 0.25, 1.0],
                        duration: 0.85,
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.75 }}
                      exit={{ opacity: 0 }}
                      key={idx}
                    >
                      {q.answer}
                    </motion.p>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default FAQs;
