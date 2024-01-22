import Link from "next/link";

/**
 * @why the div's background will be the color, then the :after pseudo element will have the background color;
 */
const HeroSection = () => {
  return (
    <section className='w-full min-h-[90vh] px-8 py-6 flex justify-start items-center font-Inter relative z-10 underlay after:bg-hero lg:py-0'>
      {/* image */}
      <div
        className='h-full w-full absolute left-0 top-0 z-0'
        style={{
          backgroundImage: `url(${"/images/hero-background.png"})`,
        }}
      />
      <section className='w-full h-fit column justify-center gap-8'>
        <h1 className='font-Inter_Bold text-4xl text-dispa8chRed-500'>
          Your one-stop platform that brings <br /> local businesses and direct
          delivery <br /> together
        </h1>
        <p className='text-lg text-white'>
          Save time on deliveries, invest more in business growth
        </p>
        <button className='fit bg-dispa8chRed-500 text-white font-Inter_Bold px-8 py-1 rounded-md '>
          <Link href={"/dashboard"}>Start free</Link>
        </button>
      </section>
      <section className='w-fit h-fit hidden lg:block'>
        <img
          src='/images/hero-illustration.png'
          alt='Illustration image'
        />
      </section>
    </section>
  );
};

export default HeroSection;
