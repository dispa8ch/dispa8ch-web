"use client";
import data from "@/public/data/pendingDeliveries.json";
import Link from "next/link";

type PendingOrdersProps = (typeof data.pending_deliveries)[number];

const PendingOrder = ({
  code,
  name,
  location,
  expectedDestination,
  transaction,
  imageUrl,
  role,
  amount,
}: PendingOrdersProps) => {
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
      <div className='flex gap-1'>
        <img alt='ellipse' src={imageUrl} />
        <p>{transaction}</p>
      </div>

      <div>
        <p>{role}</p>
      </div>
      <div>{amount}</div>
    </div>
  );
};

const PendingOrders = () => {
  return (
    <section className=' w-full mt-6 overflow-hidden grid  place-items-center'>
      <section className=' overflow-x-scroll mb-4 pb-4'>
        {data.pending_deliveries.map((orders, i) => (
          <PendingOrder key={i} {...orders} />
        ))}
      </section>
      <Link href={""}>View all</Link>
    </section>
  );
};

export default PendingOrders;
