import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";

const PendingContent = () => {
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
        <p className="text-sm font-semibold">1681323</p>
      </TableCell>
      <TableCell>
        <p className="text-sm font-semibold">Okeke Emmanuel</p>
      </TableCell>
      <TableCell>
        <p className="text-sm font-semibold">Obinze</p>
      </TableCell>
      <TableCell>
        <p className="text-sm font-semibold">$253</p>
      </TableCell>
      <TableCell>
        <p className="text-sm font-semibold">20 miles</p>
      </TableCell>
      <TableCell>
        <p className="text-sm font-semibold">5:54pm</p>
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
        <p className="text-sm font-semibold">Pending</p>
      </TableCell>
    </TableRow>
  );
};

export default PendingContent;
