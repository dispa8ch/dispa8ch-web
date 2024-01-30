"use client";
import { useRef } from "react";
import WaitlistInput from "./inputs/WaitlistInput";

const focusObserver = new IntersectionObserver((entries) => {

})

const Waitlist = () => {
  const ref = useRef<HTMLElement>();
  return (
    <section
      ref={ref as any}
      className='w-full h-fit py-20 bg-white font-Inter column items-center gap-5 px-6 '>
      <h1 className='text-dispa8chRed-500 font-Inter_ExtraBold text-lg lg:text-xl'>
        Join our waitlist today!
      </h1>
      <p className='text-[12px] text-dispa8chGray-100 text-center '>
        Be the first to test out new <br className='lg:hidden' /> launches and
        features.
      </p>
      <form
        action='/waitlist'
        className='w-full max-w-[360px] h-fit lg:max-w-[480px]'>
        <WaitlistInput />
      </form>
    </section>
  );
};

export default Waitlist;
