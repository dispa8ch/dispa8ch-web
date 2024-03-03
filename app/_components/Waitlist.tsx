"use client";
import { useRef } from "react";
import { WaitlistInput } from "@/components/inputs";

const Waitlist = () => {
  const ref = useRef<HTMLElement>();
  return (
    <section
      ref={ref as any}
      className='w-full h-fit bg-white font-Inter column items-center gap-5 py-20 px-6 sm:py-36 sm:gap-8 '>
      <h1 className='text-dispa8chRed-500 font-Inter_ExtraBold text-center text-2xl'>
        Join our waitlist today!
      </h1>
      <p className='text-[14px] text-[#A4707B] text-center '>
        Be the first to test out new <br className='lg:hidden' /> launches and
        features.
      </p>
      <form
        action='/waitlist'
        className='w-full max-w-[360px] h-fit lg:max-w-[560px]'>
        <WaitlistInput />
      </form>
    </section>
  );
};

export default Waitlist;
