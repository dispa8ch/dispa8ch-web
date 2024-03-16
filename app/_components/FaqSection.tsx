"use client";
import data from "@/public/data/faq.json";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type FaqProps = (typeof data.faqs)[number];

const Faq = ({ question, answer }: FaqProps) => {
  const [display, setDisplay] = useState<"hidden" | "block">("hidden");
  return (
    <div className='w-full h-fit column gap-4 transition-all duration-700 ease '>
      <div className='w-full h-fit flex items-start justify-between font-Inter_Bold'>
        <h1>{question}</h1>
        <button
          onClick={() => {
            setDisplay((prev) => {
              return prev === "block" ? "hidden" : "block";
            });
          }}
        >
          {display === "block" ? (
            <MinusIcon className={'dark:stroke-white'} width={24} height={24} color='black' />
          ) : (
            <PlusIcon  className={'dark:stroke-white'} width={24} height={24} color='black' />
          )}
        </button>
      </div>
      <p className={`w-[90%] ${display} text-text_1 dark:text-[#EB9CAC] `}>{answer || ""}</p>
    </div>
  );
};

const FaqSection = () => {
  return (
    <section
      id='faq'
      className='w-full h-fit column items-center gap-8 py-12 px-6 lg:px-16 lg:py-20 lg:gap-14'
    >
      <h1 className='text-dispa8chRed-500 text-lg underline font-Inter_ExtraBold lg:text-2xl '>
        Frequently Asked Questions
      </h1>

      <section className='w-full min-h-fit grid grid-cols-1 gap-y-6 gap-x-6 font-Inter sm:grid-cols-2 sm:gap-y-6 lg:gap-y-10 text-[#171717] dark:text-solid_pink'>
        {data.faqs.map((faq, i) => (
          <Faq key={i} {...faq} />
        ))}
      </section>
    </section>
  );
};

export default FaqSection;
