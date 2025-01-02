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
import { BikeIcon, CarIcon, TruckIcon } from "lucide-react";
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

const AssignOrder = ({ open, setOpen, orderNumber, orderId }: any) => {
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
  const [choosenRider, setChoosenRider] = useState({});

  return (
    <>
      {confirmModal && (
        <ConfirmAssignOrder
          open={confirmModal}
          setOpen={setConfirmModal}
          orderNumber={orderNumber}
          orderId={orderId}
          rider={choosenRider}
        />
      )}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        width="800px"
        height="600px"
      >
        <h2 className="font-bold text-3xl mb-4">Assign Order</h2>
        <p className="text-lg">
          ORDERID : <span className=" underline">{orderNumber}</span>
        </p>
        <div className="mt-2 text-lg font-semibold">
          <div className="flex justify-between mb-2">
            <p className="">Drivers</p>
            <p className="">No of Assigned Orders</p>
          </div>

          <Table className="w-full ">
            {riders.map((rider) => (
              <TableBody key={rider._id} className=" w-full">
                <TableRow className="">
                  <TableCell className="font-medium flex items-center gap-2 ">
                    <div className="rounded-full w-10 h-10 bg-slate-700 text-white flex items-center justify-center">
                      {getInitials(rider.fullName)}
                    </div>{" "}
                    <p>{rider.fullName}</p>
                  </TableCell>

                  <TableCell className="text-center">
                    {rider.vehicle === "Bike" ? <BikeIcon /> : null}
                    {rider.vehicle === "Car" ? <CarIcon /> : null}
                    {rider.vehicle === "Truck" ? <TruckIcon /> : null}
                  </TableCell>
                  <button
                    className="flex items-center gap-2 px-2 py-1 border rounded border-gray-400"
                    onClick={() => {
                      setOpen(false);
                      setConfirmModal(true);
                      setChoosenRider(rider);
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
    </>
  );
};

export default AssignOrder;
