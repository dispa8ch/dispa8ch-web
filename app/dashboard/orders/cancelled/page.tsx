"use client";
import Cancelled from "../../_components/Cancelled";
import data from "@/public/data/cancelled.json";

type CancelledOrdersProps = (typeof data.cancelled)[number];

const CancelOrder = ({
  date,
  orderId,
  name,
  location,
  amount,
  distance,
  placementTime,
  pickUpTime,
  deliveryTime,
}: CancelledOrdersProps) => {
  return (
    <div className=' gap-10 w-101 flex pb-4 '>
      <div className='place-items-center'>
        <p className='text-sm font-semibold'>{date}</p>
      </div>

      <div className='place-items-center   '>
        <p className='text-sm font-semibold'>{orderId}</p>
      </div>

      <div className='flex   place-items-center'>
        <p className='text-sm font-semibold'>{name}</p>
      </div>

      <div className='  mr-5  place-items-center bg-slate-400'>
        <p className='text-sm font-semibold'>{location}</p>
      </div>

      <div className='   mr-4 place-items-center'>
        <p className='text-sm font-semibold'>{amount}</p>
      </div>

      <div className=' mr-8  place-items-center'>
        <p className='text-sm font-semibold'>{distance}</p>
      </div>

      <div className='   mr-16   place-items-center'>
        <p className='text-sm font-semibold'>{placementTime}</p>
      </div>

      <div className='    mr-16    place-items-center'>
        <p className='text-sm font-semibold'>{pickUpTime}</p>
      </div>

      <div className='    place-items-center'>
        <p className='text-sm font-semibold'>{deliveryTime}</p>
      </div>
    </div>
  );
};

const cancelled = () => {
  return (
    <section className=' '>
      <Cancelled />
      <div>
        <section className='w-92 flex gap-12    border-b place-items-center  h-16 border-gray-300 '>
          {data.cancelled.map((orders, i) => (
            <CancelOrder key={i} {...orders} />
          ))}
        </section>
      </div>
    </section>
  );
};

export default cancelled;
