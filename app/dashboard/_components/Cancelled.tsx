"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import React from "react";

const Cancelled = ({ data }: any) => {
  function formatTime(dateString: any) {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }

  const cancelledOrders = data.filter(
    (order: any) => order.orderStatus === "Cancelled"
  );

  return (
    <>
      <Table className="min-w-full">
        <TableHeader>
          <TableRow>
            <TableCell>
              <p className="text-sm font-semibold">Date</p>
            </TableCell>
            <TableCell>
              <p className="text-sm font-semibold">Order ID</p>
            </TableCell>
            <TableCell>
              <p className="text-sm font-semibold">C. Name</p>
            </TableCell>
            <TableCell>
              <p className="text-sm font-semibold">Pick-Up</p>
            </TableCell>
            <TableCell>
              <p className="text-sm font-semibold">Amount</p>
            </TableCell>
            <TableCell>
              <p className="text-sm font-semibold">Distance</p>
            </TableCell>
            <TableCell>
              <p className="text-sm font-semibold">Placement Time</p>
            </TableCell>
            <TableCell>
              <p className="text-sm font-semibold">Pick up Time</p>
            </TableCell>
            <TableCell>
              <p className="text-sm font-semibold">Delivery Time</p>
            </TableCell>
            <TableCell>
              <p className="text-sm font-semibold">Driver</p>
            </TableCell>
            <TableCell>
              <p className="text-sm font-semibold">Reason</p>
            </TableCell>
          </TableRow>
        </TableHeader>
        {cancelledOrders.length > 0 && (
          <TableBody>
            {cancelledOrders.map((order: any, index: number) => (
              <TableRow key={index}>
                <TableCell>
                  <p className="text-sm">{order?.date}</p>
                </TableCell>
                <TableCell>
                  <p className="text-sm">{order.orderNumber}</p>
                </TableCell>
                <TableCell>
                  <p className="text-sm">{order.deliveryTo?.receiverName}</p>
                </TableCell>
                <TableCell>
                  <p className="text-sm">{order.deliveryTo?.address}</p>
                </TableCell>
                <TableCell>
                  <p className="text-sm">${order.orderDetails?.deliveryFees}</p>
                </TableCell>
                <TableCell>
                  <p className="text-sm font-semibold">Wait for Map</p>
                </TableCell>
                <TableCell>
                  <p className="text-sm font-semibold">CreatedAt</p>
                </TableCell>
                <TableCell>
                  <p className="text-sm">
                    {formatTime(order.pickupForm?.pickupTime)}
                  </p>
                </TableCell>
                <TableCell>
                  <p className="text-sm">{order.deliveryTo?.deliveryTime}</p>
                </TableCell>
                <TableCell>
                  <p className="text-sm font-semibold">Driver</p>
                </TableCell>
                <TableCell>
                  <p className="text-sm font-semibold border border-black"></p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
      {cancelledOrders.length === 0 && (
        <div className="w-full flex flex-col items-center justify-center my-10 border-red-800">
          <Image
            src="/images/pending2.png"
            alt="Pending logo"
            width={200}
            height={200}
          />
          <p className="text-lg font-light">No Cancelled Order</p>
        </div>
      )}
    </>
  );
};

export default Cancelled;
