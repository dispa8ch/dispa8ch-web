"use client";
import Link from "next/link";

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
  return (
    <section
      className='w-full h-fit flex justify-between gap-6
    font-Inter_Medium flex-col-reverse items-center lg:flex-row lg:even:flex-row-reverse lg:items-start '>
      <section className='w-fit flex-grow column gap-6'>
        <h1 className='font-Inter_Bold text-xl bg-gradient-to-r from-dispa8chRed-500 to-amber-500 text-transparent bg-clip-text'>
          {props?.header}
        </h1>

        <p>{props?.topText}</p>
        <p>{props?.bottomText}</p>
        <button className='w-fit h-fit mt-auto bg-dispa8chRed-500 text-white font-Inter_Bold px-8 py-1 rounded-md '>
          <Link href={"/dashboard"}>Start free</Link>
        </button>
      </section>
      <section className='w-full h-[200px] lg:w-[800px] lg:h-[300px] '>
        <div className='w-[90%] h-[90%] rounded-xl bg-dispa8chRed-100 relative'>
          <img
            src={props?.imageUrl || ""}
            alt='Image'
          className='w-full h-full absolute bottom-0 left-0 shadow-pop-bl '
          />
        </div>
      </section>
    </section>
  );
};

export default Feature;
