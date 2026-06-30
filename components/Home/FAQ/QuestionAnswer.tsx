"use client";

import React from "react";
import Link from "next/link";
import AccordionQA from "./AccordionQA";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SquareUser } from "lucide-react";

const QuestionAnswer = () => {
  return (
    <section
      className="container max-w-6xl my-28 md:my-40"
      aria-labelledby="faq-main-title"
    >
      {/* Header */}
      <header className="flex items-center justify-center mb-20">
        <div
          data-aos="fade-up"
          className="w-full max-w-2xl lg:max-w-4xl flex flex-col items-center gap-6 text-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-30"></div>
            <h1
              id="faq-main-title"
              className="relative text-header font-bold leading-snug text-[#002147] dark:text-white"            >
              Learn More About AUPP CCSP!
            </h1>
          </div>

          <p className="subtext text-[#002147]/80 dark:text-white/80 leading-relaxed max-w-xl">
            If you have questions about AUPP CCSP, you can explore them through the Q&A below. If anything is still unclear, you can contact our team via our contact page!
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="grid grid-cols-1 lg:grid-cols-2 mt-16 gap-12 max-w-6xl mx-auto items-start">
        {/* Questions */}
        <section
          data-aos="fade-right"
          className="order-2 lg:order-1"
          aria-labelledby="faq-questions-title"
        >
          <div className="mb-10">
            <h2
              id="faq-questions-title"
              className="text-2xl lg:text-3xl font-semibold text-[#002147] dark:text-white mb-3 flex items-center gap-3"            >
              Frequently Asked Questions:
            </h2>
          </div>
          <AccordionQA />
        </section>

        {/* Image */}
        <figure
          data-aos="fade-left"
          className="order-1 lg:order-2 flex items-center justify-center "
          aria-labelledby="faq-image-caption"
        >
          <Image
            src="/images/home/FAQs-amico.png"
            alt="Frequently Asked Questions illustration"
            width={350}
            height={350}
            style={{ width: "auto", height: "auto" }}
            className="transition-transform "
          />
        </figure>
      </main>

      {/* Contact Section */}
      <aside
        data-aos="fade-up"
        className="my-20"
        aria-labelledby="faq-contact-title"
      >
        <Card
          className=" container max-w-6xl text-center border border-border text-white px-8 py-20 md:py-18"
          role="region"
          aria-labelledby="faq-contact-title"
        >
          <div className="relative z-10 max-w-4xl mx-auto">
            <h3
              id="faq-contact-title"
              className="text-lg md:text-xl lg:text-2xl font-bold mb-6 leading-relaxed text-[#002147] dark:text-white"            >
              If you still have questions or need further clarification, you can reach out to our team using the &apos;Contact&apos; button below. We are happy to answer all your questions.
            </h3>
            <Link href="/contact">
              <Button
                className="w-45 h-full rounded-full bg-[#B22234] px-4 py-4 text-base text-white hover:bg-[#B22234]/90"
              >
                <SquareUser className="mr-2 h-5 w-5" />
                Contact us
              </Button>
            </Link>
          </div>
        </Card>
      </aside>
    </section>
  );
};

export default QuestionAnswer;
