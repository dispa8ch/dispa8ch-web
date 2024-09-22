"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const Cancelled = () => {
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
        <TableBody>
          <TableRow>
            <TableCell>
              <p className="text-sm font-semibold">17/06/23</p>
            </TableCell>
            <TableCell>
              <p className="text-sm font-semibold">1677437</p>
            </TableCell>
            <TableCell>
              <p className="text-sm font-semibold">Okeke Emmanuel</p>
            </TableCell>
            <TableCell>
              <p className="text-sm font-semibold">Douglas</p>
            </TableCell>
            <TableCell>
              <p className="text-sm font-semibold">$250.34</p>
            </TableCell>
            <TableCell>
              <p className="text-sm font-semibold">20.43 miles</p>
            </TableCell>
            <TableCell>
              <p className="text-sm font-semibold">5:48 pm</p>
            </TableCell>
            <TableCell>
              <p className="text-sm font-semibold">6:04 pm</p>
            </TableCell>
            <TableCell>
              <p className="text-sm font-semibold">7:02 pm</p>
            </TableCell>
            <TableCell>
              <p className="text-sm font-semibold">Driver</p>
            </TableCell>
            <TableCell>
              <p className="text-sm font-semibold border border-black"></p>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default Cancelled;
