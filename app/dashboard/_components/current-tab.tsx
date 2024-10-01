// import { CheckedInput } from "@/components/inputs";
// import { Switch } from "@/components/ui/switch";
// import { PlusCircle } from "lucide-react";
import Current from "./Current";

const CurrentTab = () => {
  // const currentTabHeaders = [
  //   "Order Id",
  //   "C Name",
  //   "Pick-up",
  //   "Amount",
  //   "Distance",
  //   "Order Placed",
  //   "Req. Pick-up Time",
  //   "Req.Delivery Time",
  //   "Pick-up Ready",
  //   "Driver",
  //   "Status",
  //   "Tracking",
  // ];

  // const currentTabContent = [
  //   {
  //     orderId: "001",
  //     cName: "John Doe",
  //     pickUp: "Location A",
  //     amount: 253.5,
  //     distance: 50.2,
  //     orderPlaced: "6:47pm",
  //     reqPickUpTime: "6:02pm",
  //     reqDeliveryTime: "7:02pm",
  //     status: "Unassigned",
  //   },
  //   {
  //     orderId: "002",
  //     cName: "Jane Smith",
  //     pickUp: "Location B",
  //     amount: 150.75,
  //     distance: 35.4,
  //     orderPlaced: "4:30pm",
  //     reqPickUpTime: "5:00pm",
  //     reqDeliveryTime: "6:00pm",
  //     status: "Assigned",
  //   },
  //   {
  //     orderId: "003",
  //     cName: "Michael Johnson",
  //     pickUp: "Location C",
  //     amount: 98.0,
  //     distance: 20.1,
  //     orderPlaced: "2:15pm",
  //     reqPickUpTime: "2:45pm",
  //     reqDeliveryTime: "3:15pm",
  //     status: "Assigned",
  //   },
  //   {
  //     orderId: "004",
  //     cName: "Emily Davis",
  //     pickUp: "Location D",
  //     amount: 180.25,
  //     distance: 40.7,
  //     orderPlaced: "12:00pm",
  //     reqPickUpTime: "12:30pm",
  //     reqDeliveryTime: "1:00pm",
  //     status: "Unassigned",
  //   },
  //   {
  //     orderId: "005",
  //     cName: "Chris Brown",
  //     pickUp: "Location E",
  //     amount: 220.0,
  //     distance: 45.3,
  //     orderPlaced: "9:00am",
  //     reqPickUpTime: "9:30am",
  //     reqDeliveryTime: "10:00am",
  //     status: "Unassigned",
  //   },
  // ];

  return (
    <section className="w-full overflow-x-auto ">
      {/* First row */}
      {/* <div className="w-full grid grid-cols-13-gapped place-content-center gap-1 py-4 border-b border-gray-300">
        <CheckedInput onCheck={(checked) => console.log(checked)} />
        {currentTabHeaders.map((header) => (
          <h6 className="">{header}</h6>
        ))}
        
      </div> */}
      <section className="w-full grid grid-cols-13-gapped place-content-center gap-1 py-4 border-b border-gray-300">
        <div className="flex place-items-center">
          {" "}
          <input
            className="order-checkbox"
            title="checkbox"
            name="checkbox"
            type="checkbox"
          />
        </div>
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
        <div className="flex w-16 place-items-center">
          {" "}
          <section className="">
            <p className="text-sm font-semibold">Pick-up</p>
            <p className="text-sm font-semibold">Ready</p>
          </section>
        </div>
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
        <div>
          <p className="text-sm font-semibold">Tracking</p>{" "}
        </div>
      </section>
      <Current />
      {/* <div className="flex flex-col">
          {currentTabContent.map((content) => (
            <div className="w-full grid grid-cols-13-gapped place-content-center gap-1  py-2 border-b border-gray-300 text-sm">
              <CheckedInput onCheck={(checked) => console.log(checked)} />
              <p>{content.orderId}</p>
              <p>{content.cName}</p>
              <p>{content.pickUp}</p>
              <p>${content.amount}</p>
              <p>{content.distance}miles</p>
              <p>{content.orderPlaced}</p>
              <p>{content.reqPickUpTime}</p>
              <p>{content.reqDeliveryTime}</p>
              <Switch className="rounded-lg" />
              <div className=" w-full border border-black text-gray-600 rounded flex gap-1 text-[12px] justify-center items-center"><PlusCircle className=" size-4" /> Assign</div>
              <p className="text-[12px]">{content.status}</p>

            </div>
          ))}
        </div> */}
    </section>
  );
};

export default CurrentTab;
