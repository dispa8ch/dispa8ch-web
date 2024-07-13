import React from "react";

const PendingContent = () => {
  return (
    <section className="w-full grid grid-cols-13-gapped place-content-center gap-4 py-4 border-b border-gray-300">
      <div className="place-items-center">
        {" "}
        <input
          className="order-checkbox"
          title="checkbox"
          name="checkbox"
          type="checkbox"
        />
      </div>
      <div className="flex gap-2 place-items-center">
        <div className=" ">
          <p className="text-sm font-semibold">1681323</p>{" "}
        </div>
      </div>
      <div className="flex  place-items-center">
        {" "}
        <div className="w-36 ">
          <p className="text-sm font-semibold">Okeke Emmanuel</p>{" "}
        </div>{" "}
      </div>
      <div className="flex gap-1 place-items-center">
        <div className=" ">
          <p className="text-sm font-semibold">Obinze</p>{" "}
        </div>
      </div>

      <div className="flex gap-2 place-items-center">
        <div className=" ">
          <p className="text-sm font-semibold">$253</p>{" "}
        </div>
      </div>
      <div className="flex gap-2 place-items-center">
        <div className="">
          <p className="text-sm font-semibold">20miles</p>{" "}
        </div>
      </div>
      <div className="flex gap-3 w-36   place-items-center">
        <section>
          {" "}
          <p className="text-sm font-semibold">5:54pm</p>{" "}
        </section>
      </div>
      <div className="flex gap-2    place-items-center">
        {" "}
        <section className=" ">
          {" "}
          <p className="text-sm font-semibold">11:00pm</p>{" "}
        </section>
      </div>
      <div className="flex gap-2  place-items-center">
        {" "}
        <section className=" ">
          {" "}
          <p className="text-sm font-semibold">20mins</p>{" "}
        </section>
      </div>

      <div className="flex gap-2 w-22  place-items-center">
        {" "}
        <section className="">
          <p className="text-sm font-semibold">C</p>
        </section>
      </div>
      <div className="flex gap-2 place-items-center">
        <section className="">
          <p className="text-sm font-semibold">pending</p>
        </section>
      </div>
    </section>
  );
};

export default PendingContent;
