import React, { useEffect, useState } from "react";
import Modal from "../../_components/Modal";
import { NamedInput } from "@/components/inputs";
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

const AssignOrder = () => {
  const [open, setOpen] = useState(false);
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

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      width="800px"
      height="600px"
    >
      <h2 className="font-bold text-3xl mb-4">Assign Order</h2>
      <div className="">
        <div className="flex justify-between mb-2">
          <p className="">Drivers</p>
          <p className="">No of Assigned Orders</p>
        </div>

        {riders.map((rider) => (
          <div className="">{rider.fullName}</div>
        ))}
      </div>
    </Modal>
  );
};

export default AssignOrder;
