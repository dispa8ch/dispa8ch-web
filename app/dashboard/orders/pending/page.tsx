"use client";

import Image from "next/image";
import Pending from "../../_components/Pending";

const pending = () => {
  return (
    <section className=' '>
      <Pending />
      <div className='w-92 grid place-items-center'>
        <div className='pending rounded-full grid place-items-center mt-20'>
          <Image alt='' src={"/images/pending.png"} width={40} height={40} />
        </div>

        <p className='text-lg mt-2 font-medium text-black'>
          You Currently have no pending orders
        </p>
      </div>
    </section>
  );
};

export default pending;
