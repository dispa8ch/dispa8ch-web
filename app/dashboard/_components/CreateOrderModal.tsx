import React, { useState } from "react";
import { LocateFixedIcon } from "lucide-react";
import Modal from "./Modal"; // Adjust the path as necessary
import NamedInput from "./Inputs"; // Assuming this is your custom input component
import { orderSchema } from "@/lib/validations/order";
import { useRouter } from "next/navigation";

const CreateOrderModal = ({ open, setOpen }: any) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
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
    deliveryInstruction: "",
    paymentType: "",
    companyId: "",
  });

  const router = useRouter();

  // Validate inputs with Zod schema
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
        router.push("/dashboard");
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
          {/* Pick-up Section */}
          <div className="border-r pr-4 w-1/2">
            <h6 className="font-semibold text-xl my-4">Pick-up Form</h6>
            <NamedInput
              name="orderNumber"
              type="text"
              value={orderDetails.orderNumber}
              onChange={(e) =>
                setOrderDetails((prev) => ({
                  ...prev,
                  orderNumber: e.target.value,
                }))
              }
              placeholder="Enter your order number"
              validationError={errors.orderNumber}
            />
            <div className="flex flex-col gap-4">
              <NamedInput
                name="username"
                type="text"
                value={orderDetails.username}
                onChange={(e) =>
                  setOrderDetails((prev) => ({
                    ...prev,
                    username: e.target.value,
                  }))
                }
                placeholder="Enter your name"
                validationError={errors.username}
              />
              <NamedInput
                name="phone"
                type="tel"
                value={orderDetails.phone}
                onChange={(e) =>
                  setOrderDetails((prev) => ({
                    ...prev,
                    phone: e.target.value,
                  }))
                }
                placeholder="Enter your phone number"
                validationError={errors.phone}
              />
              <div className="flex items-center gap-2">
                <NamedInput
                  name="address"
                  type="text"
                  value={orderDetails.address}
                  onChange={(e) =>
                    setOrderDetails((prev) => ({
                      ...prev,
                      address: e.target.value,
                    }))
                  }
                  placeholder="Enter address"
                  validationError={errors.address}
                />
                <div className="border p-2 rounded-full hover:bg-gray-200">
                  <LocateFixedIcon />
                </div>
              </div>
              <NamedInput
                name="pickupTime"
                type="time"
                value={orderDetails.pickupTime}
                onChange={(e) =>
                  setOrderDetails((prev) => ({
                    ...prev,
                    pickupTime: e.target.value,
                  }))
                }
              />
            </div>
          </div>

          {/* Delivery Details */}
          <div className="w-1/2">
            <h6 className="font-semibold text-xl my-4">Delivery Details</h6>
            <div className="flex flex-col gap-4">
              <NamedInput
                name="receiverName"
                type="text"
                value={orderDetails.receiverName}
                onChange={(e) =>
                  setOrderDetails((prev) => ({
                    ...prev,
                    receiverName: e.target.value,
                  }))
                }
                placeholder="Receiver's Name"
                validationError={errors.receiverName}
              />
              <NamedInput
                name="receiverPhone"
                type="tel"
                value={orderDetails.receiverPhone}
                onChange={(e) =>
                  setOrderDetails((prev) => ({
                    ...prev,
                    receiverPhone: e.target.value,
                  }))
                }
                placeholder="Receiver's Phone"
                validationError={errors.receiverPhone}
              />
              <NamedInput
                name="receiverEmail"
                type="email"
                value={orderDetails.receiverEmail}
                onChange={(e) =>
                  setOrderDetails((prev) => ({
                    ...prev,
                    receiverEmail: e.target.value,
                  }))
                }
                placeholder="Receiver's Email"
                validationError={errors.receiverEmail}
              />
              <NamedInput
                name="receiverAddress"
                type="text"
                value={orderDetails.receiverAddress}
                onChange={(e) =>
                  setOrderDetails((prev) => ({
                    ...prev,
                    receiverAddress: e.target.value,
                  }))
                }
                placeholder="Receiver's Address"
                validationError={errors.receiverAddress}
              />
              <NamedInput
                name="deliveryDate"
                type="date"
                value={orderDetails.deliveryDate}
                onChange={(e) =>
                  setOrderDetails((prev) => ({
                    ...prev,
                    deliveryDate: e.target.value,
                  }))
                }
              />
              <NamedInput
                name="deliveryTime"
                type="time"
                value={orderDetails.deliveryTime}
                onChange={(e) =>
                  setOrderDetails((prev) => ({
                    ...prev,
                    deliveryTime: e.target.value,
                  }))
                }
              />
            </div>
          </div>
        </div>

        {/* Item Details Section */}
        <div className="mt-4">
          <h6 className="font-semibold text-xl mb-4">Item Details</h6>
          <div className="flex flex-col gap-4">
            <NamedInput
              name="itemName"
              type="text"
              value={orderDetails.itemName}
              onChange={(e) =>
                setOrderDetails((prev) => ({
                  ...prev,
                  itemName: e.target.value,
                }))
              }
              placeholder="Item Name"
              validationError={errors.itemName}
            />
            <NamedInput
              name="itemQuantity"
              type="number"
              value={orderDetails.itemQuantity}
              onChange={(e) =>
                setOrderDetails((prev) => ({
                  ...prev,
                  itemQuantity: Number(e.target.value),
                }))
              }
              placeholder="Item Quantity"
              validationError={errors.itemQuantity}
            />
            <NamedInput
              name="itemPrice"
              type="number"
              value={orderDetails.itemPrice}
              onChange={(e) =>
                setOrderDetails((prev) => ({
                  ...prev,
                  itemPrice: e.target.value,
                }))
              }
              placeholder="Item Price"
              validationError={errors.itemPrice}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-4 flex justify-end">
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
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
