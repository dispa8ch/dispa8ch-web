"use client"
import Link from "next/link";
import { useEffect, useRef } from "react";

type OfferProps = {
  header: string;
  imageUrl: string;
  topText: string;
  bottomText: string;
};

/**
 * @why the topText and bottomText props are used as separators. Check the paragraphs in the `What you can do` section in the landing page design.
 */
const Feature = (props?: OfferProps) => {
  const ref = useRef<HTMLElement>();
  useEffect(() => {
    const shadowPopObserver = new window.IntersectionObserver((entries) => {
      entries.forEach(({target, isIntersecting}) => {
        const illustrationImage = target.querySelector<HTMLImageElement>(".illustration-image");
        if (isIntersecting) illustrationImage?.classList.add("shadow-pop-bl");
        else illustrationImage?.classList.remove("shadow-pop-bl");
      });
    });
    shadowPopObserver.observe(ref.current!);
  });
  return (
    <section
      ref={ref as any}
      className='w-full h-fit flex justify-between gap-9
    font-Inter_Medium flex-col-reverse items-center tblg:flex-row tblg:even:flex-row-reverse tblg:items-start '>
      <section className='text-section w-fit flex-grow column gap-6'>
        <h1 className='font-Inter_Bold text-xl bg-gradient-to-r from-dispa8chRed-500 to-amber-500 text-transparent bg-clip-text'>
          {props?.header}
        </h1>

        <p>{props?.topText}</p>
        <p >{props?.bottomText}</p>
        <button className='w-fit h-fit mt-auto bg-dispa8chRed-500 text-white font-Inter_Bold px-8 py-1 rounded-md '>
          <Link href={"/Dashboard"}>Start free</Link>
        </button>
      </section>
      <section className='w-full h-[200px] max-w-[500px] bsm:h-[300px]'>
        <div className='w-full h-full rounded-xl bg-dispa8chRed-100 relative '>
          <img
            src={props?.imageUrl || ""}
            alt='Illustration image'
            className='w-full h-full absolute bottom-0 left-0 illustration-image '
          />
        </div>
      </section>
    </section>
  );
};

export default Feature;
