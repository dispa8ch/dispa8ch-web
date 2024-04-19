"use client";
import Completed from "../../_components/Completed";
import Image from "next/image";
const completed = () => {
  return (
    <section className=' '>
      <Completed />
      <div className='w-92 grid place-items-center'>
        <div className='pending rounded-full grid place-items-center mt-20'>
          <Image alt='' src={"/images/completed.png"} width={40} height={40} />
        </div>

        <p className='text-lg mt-2 font-medium text-black'>
          You Currently have no completed orders
        </p>
      </div>
    </section>
  );
};

export default completed;
