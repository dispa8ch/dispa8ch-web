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
              Pending Deliveries <span className='text-red-500'>50</span>
            </h1>
          </div>
          <div className='flex  gap-4 items-center px-1.5 py-0.5 border border-gray-500 rounded '>
            <div>
              <p className='text-sm'>Unassigned</p>
            </div>
            <div>
              <svg
                width='9'
                height='8'
                viewBox='0 0 4 3'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1.62204 2.56356C1.82142 2.7938 2.17858 2.7938 2.37796 2.56356L3.88159 0.827327C4.16203 0.503505 3.932 0 3.50363 0H0.496374C0.0679984 0 -0.162028 0.503505 0.11841 0.827327L1.62204 2.56356Z'
                  fill='#757575'
                />
              </svg>
            </div>
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
