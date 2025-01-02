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

const History = ({ data }: { data: any[] }) => {
  return (
    <>
      <Table className="min-w-full">
        <TableHeader>
          <TableRow>
            <TableCell>
              <p className="text-sm font-semibold">Order ID</p>
            </TableCell>
            <TableCell>
              <p className="text-sm font-semibold">Order Number</p>
            </TableCell>
            <TableCell>
              <p className="text-sm font-semibold">Customer Name</p>
            </TableCell>
            <TableCell>
              <p className="text-sm font-semibold">Pick-Up Address</p>
            </TableCell>
            <TableCell>
              <p className="text-sm font-semibold">Delivery Address</p>
            </TableCell>
            <TableCell>
              <p className="text-sm font-semibold">Amount</p>
            </TableCell>
            <TableCell>
              <p className="text-sm font-semibold">Pickup Time</p>
            </TableCell>
            <TableCell>
              <p className="text-sm font-semibold">Delivery Time</p>
            </TableCell>
            <TableCell>
              <p className="text-sm font-semibold">Status</p>
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length < 0 ? (
            data.map((order: any) => (
              <TableRow key={order._id}>
                <TableCell>
                  <p className="text-sm">{order._id}</p>
                </TableCell>
                <TableCell>
                  <p className="text-sm">{order.orderNumber}</p>
                </TableCell>
                <TableCell>
                  <p className="text-sm">
                    {order.deliveryTo?.receiverName || "N/A"}
                  </p>
                </TableCell>
                <TableCell>
                  <p className="text-sm">
                    {order.pickupForm?.address || "N/A"}
                  </p>
                </TableCell>
                <TableCell>
                  <p className="text-sm">
                    {order.deliveryTo?.address || "N/A"}
                  </p>
                </TableCell>
                <TableCell>
                  <p className="text-sm">
                    $
                    {(
                      (order.orderDetails?.items?.totalAmount || 0) +
                      (order.orderDetails?.deliveryFees || 0) -
                      (order.orderDetails?.discount || 0)
                    ).toFixed(2)}
                  </p>
                </TableCell>
                <TableCell>
                  <p className="text-sm">
                    {new Date(order.pickupForm?.pickupTime).toLocaleString() ||
                      "N/A"}
                  </p>
                </TableCell>
                <TableCell>
                  <p className="text-sm">
                    {new Date(
                      order.deliveryTo?.deliveryTime
                    ).toLocaleString() || "N/A"}
                  </p>
                </TableCell>
                <TableCell>
                  <p className="text-sm font-semibold">{order.orderStatus}</p>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={9}>
                <div className="w-full flex flex-col items-center justify-center my-10 border-red-800">
                  <Image
                    src="/images/pending2.png"
                    alt="Pending logo"
                    width={200}
                    height={200}
                  />
                  <p className="text-lg font-light">No Order to Show</p>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default History;
