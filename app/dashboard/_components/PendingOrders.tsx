"use client";

import data from "@/public/data/pendingDeliveries.json";
import Link from "next/link";

const PendingOrder = ({ order }: { order: any }) => {
  return (
    <div className="grid grid-cols-5 gap-4 w-max items-center border-b border-gray-200 py-2">
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
        <p>{order?.orderStatus}</p>
      </div>
      <div className="truncate w-40">
        <p>{"order?.createdAt"}</p>
      </div>
    </div>
  );
};

const PendingOrders = ({ orders }: { orders: any[] }) => {
  return (
    <>
      <section className="w-full grid place-items-center mt-8">
        <div className="w-full max-w-6xl flex  justify-between items-center border-gray-400">
          <h1 className="text-sm font-bold">
            Pending Deliveries{" "}
            <span className="text-red-500">{orders?.length}</span>
          </h1>
          <div className="flex gap-4 items-center px-1.5 py-0.5 rounded">
            <div>
              <p className="text-sm">Unassigned</p>
            </div>
            <div>
              <svg
                width="9"
                height="8"
                viewBox="0 0 4 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.62204 2.56356C1.82142 2.7938 2.17858 2.7938 2.37796 2.56356L3.88159 0.827327C4.16203 0.503505 3.932 0 3.50363 0H0.496374C0.0679984 0 -0.162028 0.503505 0.11841 0.827327L1.62204 2.56356Z"
                  fill="#757575"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mt-2 overflow-hidden grid place-items-center">
        <div className="w-full overflow-x-scroll">
          <div className="grid grid-cols-5 gap-5 w-max items-center border-b border-gray-400 font-bold py-2">
            <div className="w-40">Order Number</div>
            <div className="w-40">Receiver Name</div>
            <div className="w-64">Address</div>
            <div className="w-40">Status</div>
            <div className="w-40">Created At</div>
          </div>
          {orders?.map((order: any, i: number) => (
            <PendingOrder key={i} order={order} />
          ))}
        </div>
        <Link
          className="hover:underline mt-4"
          href="/dashboard/pending-deliveries"
        >
          View all
        </Link>
      </section>
    </>
  );
};

export default PendingOrders;
