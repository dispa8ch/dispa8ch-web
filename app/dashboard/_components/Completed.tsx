"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const Completed = () => {
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
        <TableBody>
          <TableRow>
            <TableCell>
              <p className="text-sm">17/06/23</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">1677437</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">Okeke Emmanuel</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">Douglas</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">$250.34</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">20.43 miles</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">5:48 pm</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">5:50 pm</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">6:04 pm</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">7:02 pm</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">John</p>
            </TableCell>
            <TableCell>
              <p className="text-sm">4.5</p>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default Completed;
