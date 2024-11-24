import React, { useState } from "react";
import { LocateFixedIcon } from "lucide-react";
import Modal from "./Modal"; // Adjust the path as necessary
import NamedInput from "./Inputs"; // Assuming this is your custom input component
import { z } from "zod";
import { orderSchema } from "@/lib/validations/order";

const CreateOrderModal = ({ open, setOpen, companyId }: any) => {
  const [loading, setLoading] = useState(false);

  const [orderDetails, setOrderDetails] = useState({
    orderNumber: "",
    username: "",
    phone: "",
    address: "",
    pickupTime: "",
    receiverName: "",
    receiverAddress: "",
    receiverPhone: "",
    receiverEmail: "",
    deliveryDate: "",
    deliveryTime: "",
    itemPrice: "",
    itemName: "",
    itemQuantity: 0,
    taxRate: 0,
    deliveryFees: 0,
    discount: 0,
    deliveryInstruction: "g",
    paymentType: "",
    companyId: companyId,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Define a Zod schema for validation

  const validate = () => {
    const validation = orderSchema.safeParse(orderDetails);
    if (!validation.success) {
      const newErrors: { [key: string]: string } = {};
      validation.error.errors.forEach((error) => {
        newErrors[error.path[0]] = error.message;
      });
      setErrors(newErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setOrderDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async () => {
    console.log("submit details", orderDetails);

    setLoading(true);
    try {
      const response = await fetch(
        `https://dispa8ch-backend.onrender.com/api/order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderDetails),
        }
      );

      const data = await response.json();
      if (data.success) {
        // router.push("/dashboard");
        setOpen(false);
      } else {
        alert(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Failed to submit the order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        width="800px"
        height="600px"
      >
        <h2 className="text-center font-bold text-3xl mb-4">New Order</h2>
        <div className="flex gap-4">
          <div className="border-r pr-4 w-1/2">
            <NamedInput
              name="orderNumber"
              type="text"
              value={orderDetails.orderNumber}
              onChange={handleChange}
              placeholder="Enter your order number"
              className="mb-3"
              validationError={errors.orderNumber} // Display validationvalidationError
            />

            <h6 className="font-semibold text-xl my-4">Pick-up Form</h6>
            <div className="flex flex-col gap-4">
              <NamedInput
                name="username"
                type="text"
                placeholder="Enter your name"
                value={orderDetails.username}
                onChange={handleChange}
                validationError={errors.username} // Display validationvalidationError
              />
              <NamedInput
                name="phone"
                type="phone"
                placeholder="000 000 0000"
                value={orderDetails.phone}
                onChange={handleChange}
                validationError={errors.phone} // Display validationvalidationError
              />
              <div className="flex gap-1 items-center">
                <NamedInput
                  name="address"
                  type="text"
                  placeholder="Enter a location"
                  value={orderDetails.address}
                  onChange={handleChange}
                  className="flex-grow"
                  validationError={errors.address} // Display validationvalidationError
                />
                <div className="border p-2 rounded-full hover:bg-gray-200 transition">
                  <LocateFixedIcon />
                </div>
              </div>

              <NamedInput
                name="pickupTime"
                type="time"
                placeholder="00:00"
                value={orderDetails.pickupTime}
                onChange={handleChange}
                className="w-fit"
              />
            </div>

            <h6 className="font-semibold text-xl my-4">Deliver To:</h6>
            <div className="flex flex-col gap-4">
              <NamedInput
                name="receiverName"
                type="text"
                placeholder="Enter receiver's name"
                value={orderDetails.receiverName}
                onChange={handleChange}
                validationError={errors.receiverName} // Display validationvalidationError
              />
              <NamedInput
                name="receiverPhone"
                type="phone"
                placeholder="000 000 0000"
                value={orderDetails.receiverPhone}
                onChange={handleChange}
                validationError={errors.receiverPhone} // Display validationvalidationError
              />
              <NamedInput
                name="receiverEmail"
                type="email"
                placeholder="Enter receiver's email"
                value={orderDetails.receiverEmail}
                onChange={handleChange}
                validationError={errors.receiverEmail} // Display validationvalidationError
              />
              <div className="flex gap-1 items-center">
                <NamedInput
                  name="receiverAddress"
                  type="text"
                  placeholder="Enter receiver's address"
                  value={orderDetails.receiverAddress}
                  onChange={handleChange}
                  className="flex-grow"
                  validationError={errors.receiverAddress} // Display validation error
                />
                <div className="border p-2 rounded-full hover:bg-gray-200 transition">
                  <LocateFixedIcon />
                </div>
              </div>
              <div className="flex gap-4">
                <NamedInput
                  name="deliveryDate"
                  type="date"
                  placeholder="Delivery date"
                  value={orderDetails.deliveryDate}
                  onChange={handleChange}
                  className="flex-grow"
                />
                <NamedInput
                  name="deliveryTime"
                  type="time"
                  placeholder="Delivery time"
                  value={orderDetails.deliveryTime}
                  onChange={handleChange}
                  className="flex-grow"
                />
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <h6 className="font-semibold text-xl mb-4">
              Order Details (Optional)
            </h6>
            <div>
              <h5 className="font-semibold mb-2">Items:</h5>
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  name="itemName"
                  placeholder="Name"
                  className="w-2/5 outline-none border p-2 rounded"
                  value={orderDetails.itemName}
                  onChange={handleChange}
                  style={{ borderColor: errors.itemName ? "red" : "" }} // Inline error style
                />
                {errors.itemName && (
                  <span className="text-red-500 text-sm">
                    {errors.itemName}
                  </span>
                )}
                <input
                  type="text"
                  name="itemPrice"
                  placeholder="Price"
                  className="w-2/5 outline-none border p-2 rounded"
                  value={orderDetails.itemPrice}
                  onChange={handleChange}
                  style={{ borderColor: errors.itemPrice ? "red" : "" }} // Inline error style
                />
                {errors.itemPrice && (
                  <span className="text-red-500 text-sm">
                    {errors.itemPrice}
                  </span>
                )}
                <input
                  type="number"
                  name="itemQuantity"
                  placeholder="Qty"
                  className="w-1/5 outline-none border p-2 rounded"
                  value={orderDetails.itemQuantity}
                  onChange={handleChange}
                />
              </div>

              <h5 className="font-semibold mb-2">Order Summary:</h5>
              <div className="flex flex-col gap-2">
                <NamedInput
                  name="taxRate"
                  type="number"
                  placeholder="Tax rate (%)"
                  value={orderDetails.taxRate}
                  onChange={handleChange}
                />
                <NamedInput
                  name="deliveryFees"
                  type="number"
                  placeholder="Delivery fees"
                  value={orderDetails.deliveryFees}
                  onChange={handleChange}
                />
                <NamedInput
                  name="discount"
                  type="number"
                  placeholder="Discount"
                  value={orderDetails.discount}
                  onChange={handleChange}
                />
                <textarea
                  name="deliveryInstruction"
                  placeholder="Delivery instructions"
                  className="outline-none border p-2 rounded"
                  value={orderDetails.deliveryInstruction}
                  onChange={handleChange}
                />
                <NamedInput
                  name="paymentType"
                  type="text"
                  placeholder="Payment type"
                  value={orderDetails.paymentType}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default CreateOrderModal;
