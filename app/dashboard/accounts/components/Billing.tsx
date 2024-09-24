import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CreditCardModal from "./CreditCardModal";

const Billing = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="">
        <h6 className="text-xl font-bold mb--5">Payment</h6>
        <div className="mx-5 cursor-pointer">
          <div className="py-3 border-b flex justify-between">
            <div className="flex gap-10 w-1/2 justify-between ">
              <h5 className="">Credit Card</h5>
              <p className="">none</p>
            </div>

            <p className="text-dispa8chRed-10">
              <CreditCardModal />
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <h6 className="text-xl font-bold mb-5">Usage</h6>
        <Table className="min-w-full border">
          <TableHeader className="">
            <TableRow>
              <TableCell>
                <p className="text-sm font-semibold">Month</p>
              </TableCell>
              <TableCell>
                <p className="text-sm font-semibold">Total Orders</p>
              </TableCell>
              <TableCell>
                <p className="text-sm font-semibold">Paid Orders</p>
              </TableCell>
              <TableCell>
                <p className="text-sm font-semibold">Plan</p>
              </TableCell>
              <TableCell>
                <p className="text-sm font-semibold">Cost (NG)</p>
              </TableCell>
              <TableCell>
                <p className="text-sm font-semibold">Invoice</p>
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
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Billing;
