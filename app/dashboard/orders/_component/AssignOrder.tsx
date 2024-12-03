import React, { useEffect, useState } from "react";
import Modal from "../../_components/Modal";
import { NamedInput } from "@/components/inputs";
import { useCompany } from "@/components/providers/CompanyDataProvider";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BikeIcon, CarIcon } from "lucide-react";
import ConfirmAssignOrder from "./ConfirmAssignOrder";

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

const AssignOrder = ({ open, setOpen, assignOrderId }: any) => {
  const [riders, setRiders] = useState<Rider[]>([]); // Explicitly type the state as an array of Rider
  const [ridersLoading, setRidersLoading] = useState<boolean>(false); // Type as boolean
  const [ridersError, setRidersError] = useState<string | null>(null); // Error state

  const {
    companyData,
    isLoading: companyLoading,
    error: companyError,
  } = useCompany();
  const companyId = companyData?._id;

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

  function getInitials(name: string): string {
    const names = name.split(" ");
    const firstInitial = names[0][0].toUpperCase();
    const lastInitial = names[1] ? names[1][0].toUpperCase() : "";
    return firstInitial + lastInitial;
  }

  const [confirmModal, setConfirmModal] = useState(false);
  const [choosenRider, setChoosenRider] = useState("");

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      width="800px"
      height="600px"
    >
      <ConfirmAssignOrder
        open={confirmModal}
        setOpen={setConfirmModal}
        orderId={assignOrderId}
        riderId={choosenRider}
      />
      <h2 className="font-bold text-3xl mb-4">Assign Order{assignOrderId}</h2>
      <div className="">
        <div className="flex justify-between mb-2 text-2xl">
          <p className="">Drivers</p>
          <p className="">No of Assigned Orders</p>
        </div>

        <Table className="w-full ">
          {riders.map((rider) => (
            <TableBody
              key={rider._id}
              className=" w-full"
              onClick={() => {
                setConfirmModal(true);
                setChoosenRider(rider._id);
              }}
            >
              <TableRow className="flex justify-between  items-center">
                <TableCell className="font-medium flex items-center gap-2 ">
                  <div className="rounded-full w-10 h-10 bg-slate-700 text-white flex items-center justify-center">
                    {getInitials(rider.fullName)}
                  </div>{" "}
                  <p>{rider.fullName}</p>
                </TableCell>

                <TableCell>
                  {rider.vehicle === "Bike" ? <BikeIcon /> : null}
                  {rider.vehicle === "Car" ? <CarIcon /> : null}
                </TableCell>
                <TableCell>
                  <p>0</p>
                </TableCell>
              </TableRow>
            </TableBody>
            //{" "}
          ))}
        </Table>
      </div>
    </Modal>
  );
};

export default AssignOrder;
