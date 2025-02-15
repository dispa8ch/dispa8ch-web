"use client";
import History from "../_components/History";
import Image from "next/image";
const history = () => {
  return (
    <section className=" ">
      {/* <History /> */}
      <div className="w-92 grid place-items-center">
        <div className="pending rounded-full grid place-items-center mt-20">
          <Image alt="" src={"/images/history.png"} width={40} height={40} />
        </div>

        <p className="text-lg mt-2 font-medium text-black">
          No available orders
        </p>

        <p className="text-lg mt-2 font-normal text-black">
          Use date range and filters to see history
        </p>
      </div>
    </section>
  );
};

export default history;
