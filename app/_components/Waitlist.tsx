"use client";
import { WaitlistInput } from "@/components/inputs";
import { stringToBase64 } from "@/lib";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const Waitlist = () => {
  const ref = useRef<HTMLElement>();
  const router = useRouter()
  return (
    <section
      ref={ref as any}
      className='w-full h-fit bg-transparent font-Inter column items-center gap-5 py-20 px-6 sm:py-36 sm:gap-8 '>
      <h1 className='text-dispa8chRed-500 font-Inter_ExtraBold text-center text-2xl'>
        Join our waitlist today!
      </h1>
      <p className='text-[14px] text-light_pink text-center '>
        Be the first to test out new <br className='lg:hidden' /> launches and
        features.
      </p>
      <form
        action={formData => {
          const emailAddress = formData.get('emailAddress')?.toString();
          if (!emailAddress) return;
          router.push(`/waitlist?emailAddress=${stringToBase64(emailAddress)}`)
        }}
        className='w-full max-w-[360px] h-fit lg:max-w-[560px]'>
        <WaitlistInput name="emailAddress" />
      </form>
    </section>
  );
};

export default Waitlist;
