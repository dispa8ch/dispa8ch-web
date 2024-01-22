import Link from "next/link";

const HeroSection = () => {
  return (
    <section className='w-full h-[80vh] px-8 bg-dispa8chRed-100 column justify-center gap-8 font-Inter'>
      <h1 className='font-Inter_Bold text-3xl text-dispa8chRed-500'>
        Your one-stop platform that brings local businesses <br /> and direct delivery
        together
      </h1>
      <p className='text-lg text-text_1'>
        Save time on deliveries, invest more in business growth
      </p>
      <button className='fit bg-dispa8chRed-500 text-white font-Inter_Bold px-8 py-1 rounded-md '>
        <Link href={"/dashboard"}>Start free</Link>
      </button>
    </section>
  );
};

export default HeroSection;
