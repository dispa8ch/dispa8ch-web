"use client"
import { StartFreeButton } from "@/components/buttons";
import { useEffect, useRef } from "react";

type OfferProps = {
  header: string;
  imageUrl: string;
  topText: string;
  bottomText: string;
};

/**
 * @why the topText and bottomText props are used as separators. Check the paragraphs in the `What you can do` section in the landing page design.
 * @todo change the border and radius of the images
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
      <section className='w-fit flex-grow column gap-6 text-[#171717] dark:text-light_pink '>
        <h1 className='font-Inter_Bold text-xl bg-gradient-to-r from-dispa8chRed-500 to-amber-500 text-transparent bg-clip-text'>
          {props?.header}
        </h1>

        <p>{props?.topText}</p>
        <p >{props?.bottomText}</p>
       <StartFreeButton />
      </section>
      <section className='w-full h-[200px] max-w-[500px] bsm:h-[300px]'>
        <div className='w-full h-full rounded-xl bg-dispa8chRed-100 relative dark:bg-[#E73659]/20 backdrop-blur-3xl '>
          <img
            src={props?.imageUrl || ""}
            alt='Illustration image'
            className='w-full h-full absolute bottom-0 left-0 shadow-[-1px_10px_15px_-3px_rgb(0,0,0_/_0.1)] shadow-dispa8chRed-300 rounded-md  illustration-image '
          />
        </div>
      </section>
    </section>
  );
};

export default Feature;
