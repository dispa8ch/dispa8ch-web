"use client";
import data from "@/public/data/faq.json";
import { MinusIcon } from "@heroicons/react/24/outline";

type FaqProps = (typeof data.faqs)[number];

const Faq = ({ question, answer }: FaqProps) => {
  return (
    <div className='w-full h-fit space-y-4'>
      <div className='w-full h-fit flex items-center justify-between font-Inter_Bold'>
        <h1>{question}</h1>
        <button>
          <MinusIcon
            width={24}
            height={24}
            color='black'
          />
        </button>
      </div>
      <p className="w-[90%] text-text_1" >{answer || ""}</p>
    </div>
  );
};

const FaqSection = () => {
  return (
    <section className='w-full h-fit py-12 column items-center gap-12 px-6 lg:px-16'>
      <h1 className='text-dispa8chRed-500 text-xl underline font-Inter_ExtraBold lg:text-2xl '>
        Frequently Asked Questions
      </h1>

      <section className='w-full min-h-[360px] grid grid-cols-1 gap-2 font-Inter lg:grid-cols-2'>
        {data.faqs.map((faq, i) => (
          <Faq key={i} {...faq} />
        ))}
      </section>
    </section>
  );
};

export default FaqSection;
