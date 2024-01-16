'use client'
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
    font-Inter_Medium even:flex-row-reverse '>
      <section className='w-fit flex-grow column gap-6'>
        <h1 className='font-Inter_Bold text-xl bg-gradient-to-r from-dispa8chRed-600 to-amber-500 text-transparent bg-clip-text'>
          {props?.header}
        </h1>

        <p>{props?.topText}</p>
        <p>{props?.bottomText}</p>
        <Link href={"/dashboard"}>
          <button className='w-fit h-fit mt-auto bg-dispa8chRed-600 text-white font-Inter_Bold px-8 py-1 rounded-md '>
            Start free
          </button>
        </Link>
      </section>
      <section className='w-[800px] h-[280px]'>
        <div className='w-[90%] h-[90%] relative'>
          <div className='w-full h-full rounded-xl bg-dispa8chRed-100 shadow-sm shadow-dispa8chRed-300' />
        <img
          src={props?.imageUrl || ""}
          alt='Image'
          className="w-full h-full absolute bottom-2 left-2"
          />
          </div>
      </section>
    </section>
  );
};

export default Feature;
