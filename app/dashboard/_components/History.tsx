"use client";

const History = () => {
  return (
    <section className='border-b pb-3 h-32 border-gray-300 w-92 flex gap-12 place-items-center'>
      <div className='place-items-center'>
        <p className='text-sm font-semibold'>Date</p>{" "}
      </div>

      <div className='place-items-center w-16  '>
        <p className='text-sm font-semibold'>Order ID</p>{" "}
      </div>

      <div className='flex w-16   place-items-center'>
        {" "}
        <p className='text-sm font-semibold'>C. Name</p>{" "}
      </div>

      <div className='  w-16 place-items-center'>
        <p className='text-sm font-semibold'>Pick-Up</p>{" "}
      </div>

      <div className='  w-16 place-items-center'>
        <p className='text-sm font-semibold'>Amount</p>{" "}
      </div>

      <div className='  w-16 place-items-center'>
        <p className='text-sm font-semibold'>Distance</p>{" "}
      </div>

      <div className='   w-28   place-items-center'>
        {" "}
        <p className='text-sm font-semibold'>Placement Time </p>{" "}
      </div>

      <div className='  w-20      place-items-center'>
        <p className='text-sm font-semibold'>Start Time </p>{" "}
      </div>

      <div className='  w-24     place-items-center'>
        <p className='text-sm font-semibold'>Pick up Time </p>
      </div>

      <div className='flex gap-2 w-28    place-items-center'>
        {" "}
        <p className='text-sm font-semibold'>Delivery Time</p>
      </div>
      <div className='flex gap-2 w-14    place-items-center'>
        {" "}
        <p className='text-sm font-semibold'>Driver</p>
      </div>
      <div className='flex gap-2 w-14    place-items-center'>
        {" "}
        <p className='text-sm font-semibold'>Rating</p>
      </div>
    </section>
  );
};

export default History;
