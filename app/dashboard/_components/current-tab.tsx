// import { CheckedInput } from "@/components/inputs";
// import { Switch } from "@/components/ui/switch";
// import { PlusCircle } from "lucide-react";
import Image from "next/image";
import CurrentOrder from "./Current";
import {
  Table,
  TableBody,
  TableCell,
  // TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CurrentTab = ({ data }: any) => {
  return (
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
            <div className="flex gap-2 place-items-center">
              <div className="">
                <p className="text-sm font-semibold">Order ID</p>{" "}
              </div>
              <section>
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
              </section>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex  place-items-center">
              {" "}
              <div className="w-36  ">
                <p className="text-sm font-semibold">C. Name</p>{" "}
              </div>
              <section className="">
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
              </section>
            </div>
          </TableCell>

          <TableCell>
            <div className="flex gap-1 place-items-center ">
              <div className="w-14 ">
                <p className="text-sm font-semibold">Pick-Up</p>{" "}
              </div>

              <section className="">
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
                </button>{" "}
              </section>
            </div>
          </TableCell>

          <TableCell>
            <div className="flex gap-2 place-items-center">
              <div className="w-14 ">
                <p className="text-sm font-semibold">Amount</p>{" "}
              </div>
              <section className="">
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
                </button>{" "}
              </section>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex gap-2 place-items-center">
              <div className="w-14">
                <p className="text-sm font-semibold">Distance</p>{" "}
              </div>
              <section className="">
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
                </button>{" "}
              </section>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex gap-3 place-items-center">
              <section>
                {" "}
                <p className="text-sm font-semibold">Order </p>{" "}
                <p className="text-sm font-semibold">Placed</p>{" "}
              </section>
              <section className="">
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
                </button>{" "}
              </section>
            </div>
          </TableCell>

          <TableCell>
            <div className="flex gap-2 place-items-center">
              {" "}
              <section className="w-14 ">
                {" "}
                <p className="text-sm font-semibold">Req. </p>{" "}
                <p className="text-sm font-semibold">Pick-up</p>{" "}
                <p className="text-sm font-semibold">Time</p>{" "}
              </section>
              <section className="">
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
                </button>{" "}
              </section>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex gap-2 place-items-center">
              {" "}
              <section className="w-14 ">
                {" "}
                <p className="text-sm font-semibold">Req. </p>{" "}
                <p className="text-sm font-semibold">Delivery</p>{" "}
                <p className="text-sm font-semibold">Time</p>{" "}
              </section>
              <section className="">
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
                </button>{" "}
              </section>
            </div>
          </TableCell>

          <TableCell>
            <div className="flex w-16 place-items-center">
              {" "}
              <section className="">
                <p className="text-sm font-semibold">Pick-up</p>
                <p className="text-sm font-semibold">Ready</p>
              </section>
            </div>
          </TableCell>

          <TableCell>
            <div className="flex gap-2 w-22  place-items-center">
              {" "}
              <section className="">
                <p className="text-sm font-semibold">Driver</p>
              </section>
              <section className="">
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
                </button>{" "}
              </section>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex gap-2 place-items-center">
              <section className="">
                <p className="text-sm font-semibold">Status</p>
              </section>
              <section className="">
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
                </button>{" "}
              </section>
            </div>
          </TableCell>
          <TableCell>
            <div>
              <p className="text-sm font-semibold">Tracking</p>{" "}
            </div>
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody className="w-full border">
        {data.length > 0 ? (
          data.map((order: any) => (
            <CurrentOrder key={order._id} data={order} />
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={8} className="text-center py-4">
              <div className="w-full flex flex-col items-center justify-center my-10">
                <Image
                  src="/images/pending2.png"
                  alt="Pending logo"
                  width={100}
                  height={100}
                />
                <p className="text-lg font-light">
                  {" "}
                  You Currently Have No Orders
                </p>
              </div>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default CurrentTab;
