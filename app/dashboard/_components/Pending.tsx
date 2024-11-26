"use client";

import {
  Table,
  TableBody,
  TableCell,
  // TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PendingContent from "./PendingContent";

const Pending = ({ data }: any) => {
  return (
    <>
      <Table className=" overflow-x-auto">
        <TableHeader>
          <TableRow>
            <TableCell className="">
              <input
                className="order-checkbox"
                title="checkbox"
                name="checkbox"
                type="checkbox"
              />
            </TableCell>
            <TableCell>
              <div className="flex gap-2 items-center">
                <p className="text-sm font-semibold">Order ID</p>
                <button title="Id_button" type="button">
                  <svg
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.07936 0.499451L5.39434 4.50912H0.764379L3.07936 0.499451Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                    <path
                      d="M3.07936 11.1919L5.39434 7.18223H0.764379L3.07936 11.1919Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                  </svg>
                </button>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex gap-2 items-center">
                <p className="text-sm font-semibold">Customer Name</p>
                <button title="btn" type="button">
                  <svg
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.07936 0.499451L5.39434 4.50912H0.764379L3.07936 0.499451Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                    <path
                      d="M3.07936 11.1919L5.39434 7.18223H0.764379L3.07936 11.1919Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                  </svg>
                </button>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex gap-2 items-center">
                <p className="text-sm font-semibold">Pick-Up</p>
                <button title="btn" type="button">
                  <svg
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.07936 0.499451L5.39434 4.50912H0.764379L3.07936 0.499451Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                    <path
                      d="M3.07936 11.1919L5.39434 7.18223H0.764379L3.07936 11.1919Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                  </svg>
                </button>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex gap-2 items-center">
                <p className="text-sm font-semibold">Amount</p>
                <button title="btn" type="button">
                  <svg
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.07936 0.499451L5.39434 4.50912H0.764379L3.07936 0.499451Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                    <path
                      d="M3.07936 11.1919L5.39434 7.18223H0.764379L3.07936 11.1919Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                  </svg>
                </button>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex gap-2 items-center">
                <p className="text-sm font-semibold">Distance</p>
                <button title="btn" type="button">
                  <svg
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.07936 0.499451L5.39434 4.50912H0.764379L3.07936 0.499451Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                    <path
                      d="M3.07936 11.1919L5.39434 7.18223H0.764379L3.07936 11.1919Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                  </svg>
                </button>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex gap-2 items-center">
                <p className="text-sm font-semibold">Placement Time</p>
                <button title="btn" type="button">
                  <svg
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.07936 0.499451L5.39434 4.50912H0.764379L3.07936 0.499451Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                    <path
                      d="M3.07936 11.1919L5.39434 7.18223H0.764379L3.07936 11.1919Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                  </svg>
                </button>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex gap-2 items-center">
                <p className="text-sm font-semibold">Est. Delivery Time</p>
                <button title="btn" type="button">
                  <svg
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.07936 0.499451L5.39434 4.50912H0.764379L3.07936 0.499451Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                    <path
                      d="M3.07936 11.1919L5.39434 7.18223H0.764379L3.07936 11.1919Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                  </svg>
                </button>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex gap-2 items-center">
                <p className="text-sm font-semibold">Elapsed. Delivery Time</p>
                <button title="btn" type="button">
                  <svg
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.07936 0.499451L5.39434 4.50912H0.764379L3.07936 0.499451Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                    <path
                      d="M3.07936 11.1919L5.39434 7.18223H0.764379L3.07936 11.1919Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                  </svg>
                </button>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex gap-2 items-center">
                <p className="text-sm font-semibold">Driver</p>
                <button title="btn" type="button">
                  <svg
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.07936 0.499451L5.39434 4.50912H0.764379L3.07936 0.499451Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                    <path
                      d="M3.07936 11.1919L5.39434 7.18223H0.764379L3.07936 11.1919Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                  </svg>
                </button>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex gap-2 items-center">
                <p className="text-sm font-semibold">Status</p>
                <button title="btn" type="button">
                  <svg
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.07936 0.499451L5.39434 4.50912H0.764379L3.07936 0.499451Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                    <path
                      d="M3.07936 11.1919L5.39434 7.18223H0.764379L3.07936 11.1919Z"
                      fill="#757575"
                      fillOpacity="0.54"
                    />
                  </svg>
                </button>
              </div>
            </TableCell>
            {/* Add more table headers as needed */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 ? (
            data.map((order: any) => <PendingContent data={order} />)
          ) : (
            <div className="">
              <p className="">No Pending Orders</p>
            </div>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default Pending;
