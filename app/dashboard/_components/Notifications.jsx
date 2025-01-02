"use client";

import { useEffect, useState } from "react";
import CancelledOrders from "./CancelledOrders";
import PendingOrders from "./PendingOrders";
import RecentOrders from "./RecentOrders";
import AssignOrder from "../orders/_component/AssignOrder";

export default function Notifications({ overViewData }) {
  console.log("notview", overViewData.orders);
  const [latestOrder, setLatestOrder] = useState(null);
  const [openAssignOrder, setOpenAssignOrder] = useState(false);
  const [assignOrderId, setassignOrderId] = useState("");

  useEffect(() => {
    if (overViewData?.orders?.length > 0) {
      setLatestOrder(overViewData.orders[overViewData.orders.length - 1]); // Update state safely
    } else {
      setLatestOrder(null); // Handle no orders case
    }
  }, [overViewData]);
  return (
    <div className="mr-3 w-125 mb-9 items-center  pb-20 border px-5  notification-border rounded  pt-4">
      <h1 className="text-lg font-semibold ml-4.5 text-black ">
        Notifications
      </h1>
      <p className="text-sm mt-3 mb-2 ml-4.5 font-semibold">New Order</p>
      {latestOrder && (
        <div className="grid w-full place-items-center">
          <div className="w-101 border border-b-0 rounded-tl-md rounded-tr-md items-center py-2 px-4 flex justify-between border-gray-400">
            <div className="underline ">
              <p>{latestOrder?.orderNumber}</p>
            </div>

            <div className="flex  items-center  gap-2">
              <div>
                <p>$ {latestOrder?.orderDetails?.deliveryFees}</p>
              </div>

              <div
                className="flex border gap-2 items-center px-3 py-1 rounded border-gray-400 "
                onClick={() => {
                  setOpenAssignOrder(true),
                    setassignOrderId(latestOrder.orderNumber);
                }}
              >
                <div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.41977 1.57684C3.21543 1.57684 1.42871 3.36356 1.42871 5.5679C1.42871 7.77225 3.21543 9.55896 5.41977 9.55896C7.62411 9.55896 9.41083 7.77225 9.41083 5.5679C9.41083 3.36356 7.62411 1.57684 5.41977 1.57684ZM7.49512 5.88719H5.73906V7.64325C5.73906 7.72793 5.70542 7.80915 5.64554 7.86902C5.58566 7.9289 5.50445 7.96254 5.41977 7.96254C5.33509 7.96254 5.25388 7.9289 5.194 7.86902C5.13412 7.80915 5.10049 7.72793 5.10049 7.64325V5.88719H3.34442C3.25974 5.88719 3.17853 5.85355 3.11865 5.79367C3.05877 5.73379 3.02513 5.65258 3.02513 5.5679C3.02513 5.48322 3.05877 5.40201 3.11865 5.34213C3.17853 5.28226 3.25974 5.24862 3.34442 5.24862H5.10049V3.49255C5.10049 3.40787 5.13412 3.32666 5.194 3.26678C5.25388 3.20691 5.33509 3.17327 5.41977 3.17327C5.50445 3.17327 5.58566 3.20691 5.64554 3.26678C5.70542 3.32666 5.73906 3.40787 5.73906 3.49255V5.24862H7.49512C7.5798 5.24862 7.66101 5.28226 7.72089 5.34213C7.78077 5.40201 7.81441 5.48322 7.81441 5.5679C7.81441 5.65258 7.78077 5.73379 7.72089 5.79367C7.66101 5.85355 7.5798 5.88719 7.49512 5.88719Z"
                      fill="#757575"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-gray-400 text-base font-normal">Assign</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-gray-400 px-3 w-101 border relative overflow-hidden rounded-bl-md rounded-br-md">
            <div className="absolute mt-9 ml-1.7">
              <svg
                width="2"
                height="33"
                viewBox="0 0 1 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="0.5" y1="33" x2="0.5" stroke="#D1193E" />
              </svg>
            </div>

            <div className=" pb-6">
              <div className="w-full mt-2 mb-5 flex justify-between">
                <div className="flex gap-3 ">
                  <div className="mt-1">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="9"
                        cy="9"
                        r="8.5"
                        fill="#D1193E"
                        fillOpacity="0.43"
                        stroke="#D1193E"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="text-base font-normal">
                      {" "}
                      {latestOrder?.pickupForm.username}
                    </p>
                    <p className="text-sm font-normal">
                      {latestOrder?.pickupForm.address}
                    </p>
                  </div>
                </div>

                <div>
                  <p> {latestOrder?.pickupForm.pickupTime}</p>
                </div>
              </div>

              <div className="w-full flex justify-between">
                <div className="flex gap-3 ">
                  <div className="mt-1">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.5 1.25C6.17392 1.25 4.90215 1.77678 3.96447 2.71447C3.02678 3.65215 2.5 4.92392 2.5 6.25C2.5 9.625 6.90625 13.4375 7.09375 13.6C7.20696 13.6968 7.35103 13.75 7.5 13.75C7.64897 13.75 7.79304 13.6968 7.90625 13.6C8.125 13.4375 12.5 9.625 12.5 6.25C12.5 4.92392 11.9732 3.65215 11.0355 2.71447C10.0979 1.77678 8.82608 1.25 7.5 1.25ZM7.5 12.2812C6.16875 11.0312 3.75 8.3375 3.75 6.25C3.75 5.25544 4.14509 4.30161 4.84835 3.59835C5.55161 2.89509 6.50544 2.5 7.5 2.5C8.49456 2.5 9.44839 2.89509 10.1517 3.59835C10.8549 4.30161 11.25 5.25544 11.25 6.25C11.25 8.3375 8.83125 11.0375 7.5 12.2812ZM7.5 3.75C7.00555 3.75 6.5222 3.89662 6.11107 4.17133C5.69995 4.44603 5.37952 4.83648 5.1903 5.29329C5.00108 5.75011 4.95157 6.25277 5.04804 6.73773C5.1445 7.22268 5.3826 7.66814 5.73223 8.01777C6.08186 8.3674 6.52732 8.6055 7.01227 8.70196C7.49723 8.79843 7.99989 8.74892 8.45671 8.5597C8.91352 8.37048 9.30397 8.05005 9.57867 7.63893C9.85338 7.2278 10 6.74445 10 6.25C10 5.58696 9.73661 4.95107 9.26777 4.48223C8.79893 4.01339 8.16304 3.75 7.5 3.75ZM7.5 7.5C7.25277 7.5 7.0111 7.42669 6.80554 7.28934C6.59998 7.15199 6.43976 6.95676 6.34515 6.72835C6.25054 6.49995 6.22579 6.24861 6.27402 6.00614C6.32225 5.76366 6.4413 5.54093 6.61612 5.36612C6.79093 5.1913 7.01366 5.07225 7.25614 5.02402C7.49861 4.97579 7.74995 5.00054 7.97835 5.09515C8.20676 5.18976 8.40199 5.34998 8.53934 5.55554C8.67669 5.7611 8.75 6.00277 8.75 6.25C8.75 6.58152 8.6183 6.89946 8.38388 7.13388C8.14946 7.3683 7.83152 7.5 7.5 7.5Z"
                        fill="#757575"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="text-base font-normal">
                      {" "}
                      {latestOrder?.deliveryTo.receiverName}
                    </p>
                    <p className="text-sm font-normal">
                      {latestOrder?.deliveryTo.address}
                    </p>
                  </div>
                </div>

                <div className=" text-right">
                  <p>{latestOrder?.deliveryTo.deliveryTime}</p>
                  <p className="text-sm font-normal">
                    {latestOrder?.deliveryTo.deliveryDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {overViewData && (
        <>
          <RecentOrders orders={overViewData.orders} />
          <PendingOrders orders={overViewData.orders} />
          {/* <CancelledOrders /> */}
        </>
      )}

      <AssignOrder
        open={openAssignOrder}
        setOpen={setOpenAssignOrder}
        assignOrderId={assignOrderId}
      />
    </div>
  );
}
