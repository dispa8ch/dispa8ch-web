"use client";

import Link from "next/link";

const RecentOrder = ({ order }: { order: any }) => {
  return (
    <div className="grid grid-cols-7 gap-1 w-max items-center border-b  py-2">
      <div className="truncate w-40">
        <p>{order.orderNumber}</p>
      </div>
      <div className="truncate w-40">
        <p>{order?.deliveryTo?.receiverName}</p>
      </div>
      <div className="truncate w-64">
        <p>{order?.deliveryTo?.address}</p>
      </div>
      <div className="truncate w-40">
        <p>{order?.orderDetails?.items?.name}</p>
      </div>
      <div className="truncate w-10">
        <p>/NI</p>
      </div>
      <div className="truncate w-20">
        <p>{"order?.createdAt"}</p>
      </div>
      <div className="truncate w-20">
        <p>{order?.deliveryTo?.deliveryTime}</p>
      </div>
    </div>
  );
};

const RecentOrders = ({ orders }: { orders: any[] }) => {
  return (
    <>
      <section className="w-full grid place-items-center mt-12">
        <div className="w-full max-w-6xl flex pb-4 justify-between items-center border-b border-gray-400">
          <h1 className="text-sm font-bold">
            Recent Orders{" "}
            <span className="text-red-500">{orders?.length || 0}</span>
          </h1>
        </div>
      </section>

      <section className="w-full mt-1 overflow-hidden grid place-items-center">
        <div className="w-full overflow-x-scroll">
          <div className="grid grid-cols-7 gap-1 w-max items-center border-b border-gray-400 font-bold ">
            <div className="w-40">Order Number</div>
            <div className="w-40">Receiver Name</div>
            <div className="w-64">Address</div>
            <div className="w-40">Item Name</div>
            <div className="w-10">Code</div>
            <div className="w-20">Created At</div>
            <div className="w-20">Delivery Time</div>
          </div>
          {orders?.map((order: any) => (
            <RecentOrder key={order._id} order={order} />
          ))}
        </div>
        <Link className="hover:underline mt-4" href="/dashboard/orders">
          View all
        </Link>
      </section>
    </>
  );
};

export default RecentOrders;
