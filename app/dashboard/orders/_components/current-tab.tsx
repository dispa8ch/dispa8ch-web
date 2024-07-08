import { CheckedInput } from "@/components/inputs";
import { Switch } from "@/components/ui/switch"
import { PlusCircle } from "lucide-react";

const CurrentTab = () => {
  const currentTabHeaders = [
    "Order Id",
    "C Name",
    "Pick-up",
    "Amount",
    "Distance",
    "Order Placed",
    "Req. Pick-up Time",
    "Req.Delivery Time",
    "Pick-up Ready",
    "Driver",
    "Status",
    "Tracking",
  ];

  const currentTabContent = [
    {
      orderId: "001",
      cName: "John Doe",
      pickUp: "Location A",
      amount: 253.5,
      distance: 50.2,
      orderPlaced: "6:47pm",
      reqPickUpTime: "6:02pm",
      reqDeliveryTime: "7:02pm",
      status: 'Unassigned'
    },
    {
      orderId: "002",
      cName: "Jane Smith",
      pickUp: "Location B",
      amount: 150.75,
      distance: 35.4,
      orderPlaced: "4:30pm",
      reqPickUpTime: "5:00pm",
      reqDeliveryTime: "6:00pm",
      status: 'Assigned'
    },
    {
      orderId: "003",
      cName: "Michael Johnson",
      pickUp: "Location C",
      amount: 98.0,
      distance: 20.1,
      orderPlaced: "2:15pm",
      reqPickUpTime: "2:45pm",
      reqDeliveryTime: "3:15pm",
      status: 'Assigned'
    },
    {
      orderId: "004",
      cName: "Emily Davis",
      pickUp: "Location D",
      amount: 180.25,
      distance: 40.7,
      orderPlaced: "12:00pm",
      reqPickUpTime: "12:30pm",
      reqDeliveryTime: "1:00pm",
      status: 'Unassigned'
    },
    {
      orderId: "005",
      cName: "Chris Brown",
      pickUp: "Location E",
      amount: 220.0,
      distance: 45.3,
      orderPlaced: "9:00am",
      reqPickUpTime: "9:30am",
      reqDeliveryTime: "10:00am",
      status: 'Unassigned'
    },
  ];

  return (
    <section className="w-full ">
      {/* First row */}
      <div className="w-full grid grid-cols-13-gapped place-content-center gap-1 py-4 border-b border-gray-300">
        <CheckedInput onCheck={(checked) => console.log(checked)} />
        {currentTabHeaders.map((header) => (
          <h6 className="">{header}</h6>
        ))}
      </div>
        <div className="flex flex-col">
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
        </div>
    </section>
  );
};

export default CurrentTab;
