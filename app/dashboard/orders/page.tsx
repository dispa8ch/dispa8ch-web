"use client";
import { BaseButton } from "@/components/buttons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileUp, PlusCircle, SearchIcon } from "lucide-react";
import CurrentTab from "../_components/current-tab";
import Pending from "../_components/Pending";
import Completed from "../_components/Completed";
import Cancelled from "../_components/Cancelled";
import History from "../_components/History";
import { useEffect, useState } from "react";
import CreateOrderModal from "../_components/CreateOrderModal";

const ordersPageTabs = [
  "Current",
  "Pending",
  "Completed",
  "Cancelled",
  "History",
] as const;

const OrdersPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  // const [loading, setLoading] = useState(false);

  const [companyId, setCompanyId] = useState<string | null>(null);

  useEffect(() => {
    // Access localStorage and set companyId only on the client side
    const companyData = JSON.parse(localStorage.getItem("companyData") || "{}");
    setCompanyId(companyData?._id);
    console.log("c =", companyId);
  }, [companyId]);

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        if (companyId) {
          console.log("company id =", companyId);
          const orders = await fetch(
            `https://dispa8ch-backend.onrender.com/api/order/${companyId}/all`
          );

          console.log("Order Request =", orders);
          const response = await orders.json();
          console.log("Order Response =", response);
          if (response.success) {
            setOrders(response.data);
          }
        }
      } catch (error) {
        console.log("error fetching all riders", error);
      }
    };
    fetchAllOrders();
  }, [companyId]);

  return (
    <section className="flex flex-col mt-2 mx-5 gap-6 ">
      <section className="flex justify-between">
        <h1 className="text-3xl font-semibold">Orders</h1>
        <section className="flex gap-3">
          <div className="relative">
            <input
              className="border placeholder:text-gray-300 pl-9 rounded-md outline-none py-1 border-gray-300"
              placeholder="Search"
              type="text"
            />
            <div className="absolute top-[7px] ml-2.5">
              <SearchIcon size={20} className="stroke-gray-400 " />
            </div>
          </div>

          <button
            onClick={() => ""}
            className="fit flex items-center gap-2 px-2 py-1 rounded-md border border-slate-500 hover:bg-gray-50 transition-[background] duration-150 "
          >
            <FileUp size={20} className="stroke-gray-500 " />
            <span>Excel Export</span>
          </button>

          <BaseButton
            onClick={() => setOpen(true)}
            className="w-fit h-fit flex mt-0 items-center gap-2 px-2 py-1 rounded-md text-base  "
          >
            <PlusCircle size={20} className="stroke-white " />
            <span>New Order</span>
          </BaseButton>
          <CreateOrderModal
            open={open}
            setOpen={setOpen}
            companyId={companyId}
          />
        </section>
      </section>
      {/* Orders page tabs */}
      <Tabs
        defaultValue="Current"
        className="w-full h-fit min-h-[inherit] flex-grow flex flex-col "
      >
        <TabsList className="w-full justify-start rounded-lg ">
          {/* data-[state=active] is the attribute selector that changes the background color or of the tab trigger */}
          {ordersPageTabs.map((tab, index) => (
            <TabsTrigger
              key={index}
              className="px-12 data-[state=active]:rounded-md  "
              value={tab}
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
        <section className="w-full flex-grow overflow-scroll no-scroll mt-4 mb-6">
          <TabsContent value="Current">
            <CurrentTab />
          </TabsContent>
          <TabsContent value="Pending">
            <Pending data={orders} />
          </TabsContent>
          <TabsContent value="Completed">
            <Completed />
          </TabsContent>
          <TabsContent value="Cancelled">
            <Cancelled />
          </TabsContent>
          <TabsContent value="History">
            <History />
          </TabsContent>
        </section>
      </Tabs>
    </section>
  );
};

export default OrdersPage;
