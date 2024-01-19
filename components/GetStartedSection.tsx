import { scaleSize } from "@/lib";
import Link from "next/link";

const GetStartedSection = () => {
  const dims = [752, 353, 332] as const;
  const srcs = [
    "/images/get-started.png",
    "/images/get-started-1.png",
    "/images/get-started-2.png",
  ] as const;
  const baseHeight = 617;
  return (
    <section className='w-full h-fit bg-gradient-to-r from-[#E41F4733] to-[#FDA80033] column justify-center items-center gap-4 py-8 px-6 lg:px-16'>
      <section className='w-fit h-fit column justify-center items-center gap-3'>
        <h1 className='text-2xl text-dispa8chRed-500 font-Inter_Bold'>
          Let's get you started today!
        </h1>
        <p className='text-[#A4707B] text-sm font-Inter '>
          First play around with it, add your team, pay later.
        </p>
        <button className='w-fit h-fit bg-dispa8chRed-500 text-white font-bold py-2 px-8 rounded'>
          <Link href={"/dashboard"}>Start Free</Link>
        </button>
      </section>
      <section className='w-full min-h-[360px] flex justify-center items-center gap-4'>
        {srcs.map((src, i) => {
          const sizes = scaleSize([dims[i], baseHeight], 0.5);
          return (
            <div className='w-fit h-fit' key={i}>
              <img
                src={src}
                width={sizes[0]}
                height={sizes[1]}
                alt='Get Started'
              />
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default GetStartedSection;
