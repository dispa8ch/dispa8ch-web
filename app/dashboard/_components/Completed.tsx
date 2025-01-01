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

const Completed = ({ data }: any) => {
  const { deliveryTo, orderDetails, orderNumber, orderStatus, pickupForm } =
    data;
  function formatTime(dateString: any) {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }

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
              <p className="text-sm font-semibold">Start Time</p>
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
              <p className="text-sm font-semibold">Rating</p>
            </TableCell>
          </TableRow>
        </TableHeader>
      </Table>
      {data.length > 0 ? (
        <TableBody>
          <TableRow>
            <TableCell>
              <p className="text-sm">{data?.date}</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">{data.orderNumber}</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">{data.deliveryTo?.receiverName}</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">{data.deliveryTo?.address}</p>
            </TableCell>
            <TableCell>
              <p className="text-sm"> ${data.orderDetails?.deliveryFees}</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">N/I</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">CreatedAt</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">which time here</p>
            </TableCell>
            <TableCell>
              <p className="text-sm"> {formatTime(pickupForm?.pickupTime)}</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">{deliveryTo?.deliveryTime}</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">John Dummy</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">4.5 Dummu</p>
            </TableCell>
          </TableRow>
        </TableBody>
      ) : (
        <div className="w-full flex flex-col items-center justify-center my-10  border-red-800">
          <Image
            src="/images/pending2.png"
            alt="Pending logo"
            width={200}
            height={200}
          />
          <p className="text-lg font-light"> No Completed Order Yet</p>
        </div>
      )}
    </>
  );
};

export default Completed;
