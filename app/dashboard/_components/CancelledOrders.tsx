"use client";
import data from "@/public/data/cancelledDeliveries.json";
import Link from "next/link";
type CancelledOrdersProps = (typeof data.cancelled_deliveries)[number];

const CancelledOrder = ({
  code,
  name,
  location,
  expectedDestination,
  imageUrl,
  transaction,
}: CancelledOrdersProps) => {
  return (
    <div className=' gap-10 w-101 flex pb-4 '>
      <div>
        <p>{code}</p>
      </div>
      <div>
        <p>{name}</p>
      </div>
      <div>
        <p>{location}</p>
      </div>
      <div>
        <p>{expectedDestination}</p>
      </div>
      <div className='flex  gap-1'>
        <img alt='ellipse' src={imageUrl} className=' w-2.5 mt-2 h-2.5' />
        <p className='cancelledEllipse  text-base font-semibold'>
          {transaction}
        </p>
      </div>
      <div className='px-4 border border-gray-500 rounded'>
        <p className='text-base'>Reason</p>
      </div>
    </div>
  );
};

const CancelledOrders = () => {
  return (
    <>
      <section className='w-full grid  place-items-center mt-8'>
        <div className='w-101 flex pb-4 justify-between items-center border-b border-gray-400'>
          <div>
            <h1 className='text-sm font-bold'>
              Cancelled Deliveries <span className='text-red-500'>10</span>
            </h1>
          </div>

          <div>
            <input
              className='pl-4 rounded border text-base outline-none border-gray-500'
              type='text'
              placeholder='Search...'
            />
          </div>
        </div>
      </section>

      <section className=' w-full mt-6 overflow-hidden grid  place-items-center'>
        <section className=' overflow-x-scroll mb-4 pb-4'>
          {data.cancelled_deliveries.map((orders, i) => (
            <CancelledOrder key={i} {...orders} />
          ))}
        </section>
        <Link className='hover:underline' href={""}>
          View all
        </Link>
      </section>
    </>
  );
};

export default CancelledOrders;
