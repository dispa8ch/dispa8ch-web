"use client";

import React, { useState } from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import AssignOrder from "../orders/_component/AssignOrder";

const CurrentOrder = ({ data }: any) => {
  const [openAssignOrder, setOpenAssignOrder] = useState(false);
  // const [orderNumber, setorderNumber] = useState("");
  const [orderId, setOrderId] = useState("");

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
        <p className="text-sm font-semibold">{orderNumber}</p>
      </TableCell>
      <TableCell>
        <p className="text-sm font-semibold">{deliveryTo?.receiverName}</p>
      </TableCell>
      <TableCell>
        <p className="text-sm font-semibold">{deliveryTo?.address}</p>
      </TableCell>
      <TableCell>
        <p className="text-sm font-semibold">
          ${orderDetails?.deliveryFees ?? "0.00"}
        </p>
      </TableCell>
      <TableCell>
        <p className="text-sm font-semibold">Wait for maps</p>
      </TableCell>
      <TableCell>
        <p className="text-sm font-semibold">createdAt</p>
      </TableCell>
      <TableCell>
        <p className="text-sm font-semibold">
          {formatTime(pickupForm?.pickupTime)}
        </p>
      </TableCell>
      <TableCell>
        <p className="text-sm font-semibold">{deliveryTo?.deliveryTime}</p>
      </TableCell>
      <TableCell>
        <Switch />
      </TableCell>
      <TableCell>
        <button
          className="flex items-center gap-2 px-2 py-1 border rounded border-gray-400"
          onClick={() => {
            setOpenAssignOrder(true);
            // setassignOrderId(orderNumber);
            setOrderId(data._id);
          }}
        >
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
          <span className="text-sm text-gray-400">Assign</span>
        </button>
      </TableCell>
      <TableCell>
        <p className="text-sm font-semibold">{orderStatus}</p>
      </TableCell>
      <AssignOrder
        open={openAssignOrder}
        setOpen={setOpenAssignOrder}
        orderNumber={orderNumber}
        orderId={orderId}
      />
    </TableRow>
  );
};

export default CurrentOrder;
