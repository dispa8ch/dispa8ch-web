"use client";

import data from "@/public/data/recentOrders.json";

type RecentOrdersProps = (typeof data.recent_orders)[number];

const RecentOrder = ({
  code,
  name,
  location,
  item,
  miles,
  initialtime,
  deliverytime,
}: RecentOrdersProps) => {
  return (
    <div className=' gap-10 w-101 flex pb-4 '>
      <div>
        {" "}
        <p>{code}</p>
      </div>
      <div>
        {" "}
        <p>{name}</p>
      </div>
      <div>
        {" "}
        <p>{location}</p>
      </div>
      <div>
        {" "}
        <p>{item}</p>
      </div>
      <div>
        {" "}
        <p>{miles}</p>
      </div>
      <div>
        {" "}
        <p>{initialtime}</p>
      </div>
      <div>
        {" "}
        <p>{deliverytime}</p>
      </div>
    </div>
  );
};

const RecentOrders = () => {
  return (
    <section className=' w-full mt-6 overflow-hidden grid  place-items-center'>
      <section className=' overflow-x-scroll'>
        {data.recent_orders.map((orders, i) => (
          <RecentOrder key={i} {...orders} />
        ))}
      </section>
    </section>
  );
};

export default RecentOrders;
