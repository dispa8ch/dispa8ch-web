"use client";
import { BaseButton } from "@/components/buttons";
import {
  BikeIcon,
  CarIcon,
  FileUp,
  MenuSquare,
  PlusCircle,
  SearchIcon,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DriverModal from "../_components/DriverModal";
import { useEffect, useState } from "react";
import { useCompany } from "@/components/providers/CompanyDataProvider";

interface Rider {
  companyId: string;
  dateOfBirth: string; // ISO string or Date object depending on your use case
  email: string;
  fullName: string;
  gender: "Male" | "Female" | "Other"; // Enumerate possible values or use a string if open
  meansOfID: string;
  note: string;
  phone: string;
  residentialAddress: string;
  riderStatus: "Offline" | "Online"; // Possible values, or just use string if open
  vehicle: "Bike" | "Car" | "Van" | string; // Adjust for any vehicle types
  __v: number;
  _id: string;
}

const page = () => {
  const [riders, setRiders] = useState<Rider[]>([]); // Explicitly type the state as an array of Rider
  const [ridersLoading, setRidersLoading] = useState<boolean>(false); // Type as boolean
  const [ridersError, setRidersError] = useState<string | null>(null); // Error state
  const {
    companyData,
    isLoading: companyLoading,
    error: companyError,
  } = useCompany();

  const companyId = companyData?._id;

  // Function to get the initials of a rider's full name
  function getInitials(name: string): string {
    const names = name.split(" ");
    const firstInitial = names[0][0].toUpperCase();
    const lastInitial = names[1] ? names[1][0].toUpperCase() : "";
    return firstInitial + lastInitial;
  }

  // Fetch riders when companyId changes
  useEffect(() => {
    const fetchAllRiders = async () => {
      try {
        setRidersLoading(true);
        setRidersError(null);
        if (companyId) {
          const response = await fetch(
            `https://dispa8ch-backend.onrender.com/api/rider/${companyId}/all`
          );
          console.log("Riders =", riders);
          const result = await response.json();
          console.log("riderReturned =", result);

          if (response.ok && result.success) {
            setRiders(result.data);
          } else {
            setRidersError(result.message || "Failed to fetch riders.");
          }
        }
      } catch (error) {
        setRidersError("An error occurred while fetching riders.");
      } finally {
        setRidersLoading(false);
      }
    };

    if (companyId) {
      fetchAllRiders();
    }
  }, [companyId]);

  if (companyLoading || ridersLoading) {
    return (
      <section className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold">Loading...</p>
      </section>
    );
  }

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
            {riders.map((rider) => (
              <TableBody key={rider._id}>
                <TableRow>
                  <TableCell className="font-medium flex items-center gap-2 ">
                    <div className="rounded-full w-10 h-10 bg-slate-700 text-white flex items-center justify-center">
                      {getInitials(rider.fullName)}
                    </div>{" "}
                    <p>{rider.fullName}</p>
                  </TableCell>
                  <TableCell>{rider.phone}</TableCell>
                  <TableCell>{rider.email}</TableCell>
                  <TableCell>
                    {rider.vehicle === "Bike" ? <BikeIcon /> : null}
                    {rider.vehicle === "Car" ? <CarIcon /> : null}
                  </TableCell>
                  <TableCell>{rider.riderStatus}</TableCell>
                  <TableCell>
                    <MenuSquare />
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
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
              {/* Sample daily payment row, you can adapt as needed */}
              <TableRow>
                <TableCell className="font-medium flex items-center gap-2 ">
                  <div className="rounded-full w-10 h-10 bg-slate-700 text-white flex items-center justify-center">
                    EM
                  </div>{" "}
                  <p>Emmanuel</p>
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
      <DriverModal />
    </section>
  );
};

export default page;
