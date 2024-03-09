"use client";
import { StartFreeButton } from "@/components/buttons";
import { scaleSize } from "@/lib";

const GetStartedSection = () => {
  const dims = [752, 353, 332] as const;
  const srcs = [
    "/images/get-started.png",
    "/images/get-started-1.png",
    "/images/get-started-2.png",
  ] as const;
  const baseHeight = 617;

  const sizes = dims.map((dim) => scaleSize([dim, baseHeight], 0.5));
  return (
    <section className='w-full h-fit bg-gradient-to-r from-[#E41F4733] to-[#FDA80033] column justify-center items-center gap-6 py-8 px-6 lg:px-16'>
      <section className='w-fit h-fit column justify-center items-center gap-6 text-center'>
        <h1 className='text-2xl text-dispa8chRed-500 font-Inter_Bold'>
          Let's get you started today!
        </h1>
        <p className='text-[#A4707B] text-sm font-Inter '>
          First play around with it, add your team, pay later.
        </p>
        <StartFreeButton />
      </section>
      <section className='w-full min-h-fit py-4 grid place-content-center  grid-cols-1 gap-4 sm:flex sm:items-center sm:justify-center '>
        <div className='fit'>
          <img
            src={srcs[0]}
            alt='Get Started'
            width={sizes[0][0]}
            height={sizes[0][1]}
          />
        </div>
        <div className='fit flex gap-4 items-end'>
          {srcs.slice(1).map((src, i) => (
            <div className='fit' key={i}>
              <img
                src={src}
                alt='Get Started'
                width={sizes[i + 1][0]}
                height={sizes[i + 1][1]}
              />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default GetStartedSection;
