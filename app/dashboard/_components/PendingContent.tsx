import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";

const PendingContent = ({ data }: any) => {
  return (
    <TableRow>
      <TableCell className="w-10">
        <input
          className="order-checkbox"
          title="checkbox"
          name="checkbox"
          type="checkbox"
        />
      </TableCell>
      <TableCell>
        <p className="text-sm font-semibold">{data.orderNumber}</p>
      </TableCell>
      <TableCell>
        <p className="text-sm font-semibold">{data.deliveryTo?.receiverName}</p>
      </TableCell>
      <TableCell>
        <p className="text-sm font-semibold">{data.deliveryTo?.address}</p>
      </TableCell>
      <TableCell>
        <p className="text-sm font-semibold">
          ${data.orderDetails?.deliveryFees}
        </p>
      </TableCell>
      <TableCell>
        <p className="text-sm font-semibold">Not Implemented</p>
      </TableCell>
      <TableCell>
        <p className="text-sm font-semibold">{data.deliveryTo?.deliveryTime}</p>
      </TableCell>
      <TableCell>
        <p className="text-sm font-semibold">11:00pm</p>
      </TableCell>
      <TableCell>
        <p className="text-sm font-semibold">20 mins</p>
      </TableCell>
      <TableCell>
        <p className="text-sm font-semibold">C</p>
      </TableCell>
      <TableCell>
        <p className="text-sm font-semibold">{data.orderStatus}</p>
      </TableCell>
    </TableRow>
  );
};

export default PendingContent;
