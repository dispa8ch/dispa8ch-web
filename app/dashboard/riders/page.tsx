"use client";
import { BaseButton } from "@/components/buttons";
import {
  BikeIcon,
  FileUp,
  MenuSquare,
  PlusCircle,
  SearchIcon,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DriverModal from "../_components/DriverModal";
import { useEffect, useState } from "react";

const page = () => {
  const [companyId, setCompanyId] = useState<string | null>(null);

  useEffect(() => {
    // Access localStorage and set companyId only on the client side
    const companyData = JSON.parse(localStorage.getItem("companyData") || "{}");
    setCompanyId(companyData?._id);
    console.log(companyId);
  }, []);

  useEffect(() => {
    if (companyId) {
      console.log("company id =", companyId);

      const getAllRiders = async () => {
        const riders = await fetch(
          `https://dispa8ch-backend.onrender.com/api/rider/${companyId}/all`
        );
        console.log("Riders =", riders);
        const riderReturned = await riders.json();
        console.log("riderReturned =", riderReturned);
      };
      getAllRiders();
    }
  }, [companyId]);
  return (
    <section className="">
      <div className="flex justify-between ">
        <h1 className="text-3xl font-semibold">Drivers</h1>
        <div className="flex gap-3">
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
            onClick={() => ""}
            className="w-fit h-fit flex mt-0 items-center gap-2 px-2 py-1 rounded-md text-base  "
          >
            <PlusCircle size={20} className="stroke-white " />
            <span>New Order</span>
          </BaseButton>
        </div>
      </div>
      <Tabs defaultValue="riderList" className="w-full">
        <TabsList>
          <TabsTrigger value="riderList">Rider List</TabsTrigger>
          <TabsTrigger value="DailyPayment">Daily Payment</TabsTrigger>
        </TabsList>
        <TabsContent value="riderList">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="">Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="">Vehicle</TableHead>
                <TableHead className="">Status</TableHead>
                <TableHead className=""></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium flex items-center gap-2 ">
                  <div className=" rounded-full w-10 h-10 bg-slate-700 text-white flex items-center justify-center">
                    EM
                  </div>{" "}
                  <p className="">Emmanuel</p>
                </TableCell>
                <TableCell>+2348163810804</TableCell>
                <TableCell>fattmane5@gmail.com</TableCell>
                <TableCell className="">
                  <BikeIcon />
                </TableCell>
                <TableCell className="">Off Duty</TableCell>
                <TableCell className="">
                  <MenuSquare />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="DailyPayment">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="">Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>No of Completed Deliveries</TableHead>
                <TableHead className="">Base Rider Pay</TableHead>
                <TableHead className="">Adjustments</TableHead>
                <TableHead className="">Payment Due</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium flex items-center gap-2 ">
                  <div className=" rounded-full w-10 h-10 bg-slate-700 text-white flex items-center justify-center">
                    EM
                  </div>{" "}
                  <p className="">Emmanuel</p>
                </TableCell>
                <TableCell>+2348163810804</TableCell>
                <TableCell>16</TableCell>
                <TableCell className="">N/A</TableCell>
                <TableCell className="">0</TableCell>
                <TableCell className="">N/A</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
      <DriverModal companyId={companyId} />
    </section>
  );
};

export default page;
