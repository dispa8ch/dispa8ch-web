"use client";

const Cancelled = () => {
  return (
    <>
      <section className="w-full grid grid-cols-13-gapped place-content-center gap-1 py-4 border-b border-gray-300">
      <div className="place-items-center">
          <p className="text-sm font-semibold">Date</p>{" "}
        </div>

        <div className="place-items-center   ">
          <p className="text-sm font-semibold">Order ID</p>{" "}
        </div>

        <div className="flex    place-items-center">
          {" "}
          <p className="text-sm font-semibold">C. Name</p>{" "}
        </div>

        <div className="   place-items-center">
          <p className="text-sm font-semibold">Pick-Up</p>{" "}
        </div>

        <div className="   place-items-center">
          <p className="text-sm font-semibold">Amount</p>{" "}
        </div>

        <div className="   place-items-center">
          <p className="text-sm font-semibold">Distance</p>{" "}
        </div>

        <div className="   w-28   place-items-center">
          {" "}
          <p className="text-sm font-semibold">Placement Time </p>{" "}
        </div>

        <div className="  w-24     place-items-center">
          <p className="text-sm font-semibold">Pick up Time </p>
        </div>

        <div className="flex gap-2 w-28    place-items-center">
          {" "}
          <p className="text-sm font-semibold">Delivery Time</p>
        </div>
        <div className="flex gap-2 w-14    place-items-center">
          {" "}
          <p className="text-sm font-semibold">Driver</p>
        </div>
        <div className="flex gap-2 w-14    place-items-center">
          {" "}
          <p className="text-sm font-semibold">Reason</p>
        </div>
      </section>

      <section className="w-full grid grid-cols-13-gapped place-content-center gap-1 py-4 border-b border-gray-300">
        <div className="place-items-center">
          <p className="text-sm font-semibold">17/06/23</p>{" "}
        </div>

        <div className="place-items-center   ">
          <p className="text-sm font-semibold">1677437</p>{" "}
        </div>

        <div className="flex    place-items-center">
          {" "}
          <p className="text-sm font-semibold">Okeke Emmanuel</p>{" "}
        </div>

        <div className="   place-items-center">
          <p className="text-sm font-semibold">Douglas</p>{" "}
        </div>

        <div className="   place-items-center">
          <p className="text-sm font-semibold">$250.34</p>{" "}
        </div>

        <div className="   place-items-center">
          <p className="text-sm font-semibold">20.43miles</p>{" "}
        </div>

        <div className="   w-28   place-items-center">
          {" "}
          <p className="text-sm font-semibold">5.48pm </p>{" "}
        </div>

        <div className="  w-24     place-items-center">
          <p className="text-sm font-semibold">6:04pm</p>
        </div>

        <div className="flex gap-2 w-28    place-items-center">
          {" "}
          <p className="text-sm font-semibold">7:02pm</p>
        </div>
        <div className="flex gap-2 w-14    place-items-center">
          {" "}
          <p className="text-sm font-semibold">Driver</p>
        </div>
        <div className="flex gap-2 w-14    place-items-center">
          {" "}
          <p className="text-sm font-semibold border border-black">
         
          </p>
        </div>
      </section>
    </>
  );
};

export default Cancelled;
