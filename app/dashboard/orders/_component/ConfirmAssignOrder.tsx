import React, { useState } from "react";
import Modal from "../../_components/Modal";

const ConfirmAssignOrder = ({ open, setOpen, orderId, riderId }: any) => {
  const [loading, setloading] = useState(false);
  const handleSubmit = async () => {
    try {
      console.log("About to assign order");
      setloading(true);
      const response = await fetch(
        `https://dispa8ch-backend.onrender.com/api/order/${orderId}/rider`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ riderId: "riderId" }),
        }
      );
      console.log("response =", response);
      const data = await response.json();
      console.log("data =", data);
    } catch (error) {
      console.log("Error aSSIGNING order", error);
    } finally {
      setloading(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      width="400px"
      height="300px"
    >
      <h2 className="font-bold text-2xl mb-4">Confirm Order Assignment</h2>
      <p className="">
        This Order with Id {orderId} will be assigned to rider with Id {riderId}
      </p>
      <div className="flex justify-end mt-4">
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
