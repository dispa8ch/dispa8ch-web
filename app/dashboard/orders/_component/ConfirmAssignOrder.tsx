import React, { useState } from "react";
import Modal from "../../_components/Modal";
import { useRouter } from "next/navigation";

const ConfirmAssignOrder = ({
  open,
  setOpen,
  orderNumber,
  orderId,
  rider,
}: any) => {
  const [loading, setloading] = useState(false);
  const router = useRouter();
  const handleSubmit = async () => {
    try {
      console.log("About to assign order");
      setloading(true);
      const response = await fetch(
        `https://dispa8ch-backend.onrender.com/api/order/${orderId}/rider`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ riderId: rider._id }),
        }
      );
      console.log("response =", response);
      const data = await response.json();
      console.log("data =", data);
    } catch (error) {
      console.log("Error aSSIGNING order", error);
    } finally {
      setloading(false);
      router.push("/dashboard");
    }
  };

  function getInitials(name: string): string {
    const names = name?.split(" ");
    const firstInitial = names[0][0].toUpperCase();
    const lastInitial = names[1] ? names[1][0].toUpperCase() : "";
    return firstInitial + lastInitial;
  }

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      width="500px"
      height="300px"
    >
      <h2 className="font-bold text-2xl mb-4">Confirm Order Assignment</h2>
      <p className="text-center">
        Please confirm that you want to assign order{" "}
        <span className="font-bold underline"> {orderNumber} </span> to the
        drive bellow{" "}
        {/* <span className="font-bold"> {rider.fullName} </span> */}
      </p>

      <div className="border p-3 my-5 flex   justify-between">
        <div className="flex  items-center gap-1">
          <div className="rounded-full w-10 h-10 bg-slate-700 text-white flex items-center justify-center">
            {getInitials(rider.fullName)}
          </div>{" "}
          <div className="flex flex-col">
            <p>{rider.fullName}</p>
            <p className="text-dispa8chGreen-50">online</p>
          </div>
        </div>
        <div className="font-semibold">2km away from destination</div>
      </div>
      <div className="flex justify-end mt-5 gap-2">
        <button
          className="px-6 py-3  bg-slate-300 hover:bg-slate-400 text-black rounded-lg transition"
          onClick={() => setOpen(false)}
          disabled={loading}
        >
          Cancel{" "}
        </button>
        <button
          className="px-6 py-3  bg-dispa8chRed-10 hover:bg-dispa8chRed-10 text-white rounded-lg transition"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Saving..." : "Confirm"}
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmAssignOrder;
