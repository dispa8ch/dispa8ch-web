import Link from "next/link";

/**
 * @why the parent section's background will be the tiny illustrations image from Edward's design, then the :after pseudo element of the same section will have the background color of crimson;
 */
const HeroSection = () => {
  return (
    <section className='w-full min-h-[90vh] px-8 py-6 bg-hero   flex justify-start items-center font-Inter relative  underlay  lg:py-0 lg:px-16'>
      {/* image */}
      <div
        className='h-full w-full absolute left-0 top-0 '
        style={{
          backgroundImage: `url(${"/images/hero-background.png"})`,
        }}
      ></div>

      <section className='w-full h-fit column justify-center gap-8 relative  '>
        <h1 className='font-Inter_Bold text-dispa8chRed-500 text-4xl lg:text-4xl'>
          Your one-stop platform that brings <br /> local businesses and direct
          delivery <br /> together
        </h1>
        <p className='text-lg text-white'>
          Save time on deliveries, invest more in business growth
        </p>

       <button type="submit" className=' fit z-20 bg-dispa8chRed-500 text-white font-Inter_Bold px-8 py-1 rounded-md '>
       <Link href={"/Dashboard"}>   Start free </Link>
        </button>

 
      </section>


      <section className='w-fit h-fit hidden lg:block relative s'>
        <img
          src='/images/hero-illustration.png'
          alt='Illustration image'
        />
      </section>
    </section>
  );
};

export default HeroSection;
