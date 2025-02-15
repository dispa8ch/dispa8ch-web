import React, { useEffect, useState } from "react";
import { LocateFixedIcon } from "lucide-react";
import Modal from "./Modal"; // Adjust the path as necessary
import NamedInput from "./Inputs"; // Assuming this is your custom input component
import { orderSchema } from "@/lib/validations/order";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CreateOrderModal = ({ open, setOpen, companyId }: any) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [generalError, setGeneralError] = useState<string>("");

  const router = useRouter();

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
    itemQuantity: '0',
    taxRate: '0',
    deliveryFees: '0',
    discount: '0',
    deliveryInstruction: "",
    paymentType: "",
    companyId: companyId,
  });

  const companyName = "TechCorp";
  // Auto-generate order ID when the modal opens
  useEffect(() => {
    if (open) {
      const prefix = companyName.substring(0, 3).toUpperCase();
      const generatedId = `${prefix}-${Date.now()}-${Math.floor(
        Math.random() * 1000
      )}`;
      setOrderDetails((prevDetails) => ({
        ...prevDetails,
        orderNumber: generatedId,
      }));
    }
  }, [open]);

  // Validation function
  const validate = () => {
    const validation = orderSchema.safeParse(orderDetails);
    if (!validation.success) {
      const newErrors: { [key: string]: string } = {};
      validation.error.errors.forEach((error) => {
        newErrors[error.path[0]] = error.message;
      });
      setErrors(newErrors);
      console.log("newErrors", newErrors);
      setGeneralError(`Please correct the errors highlighted below.`);
      return false;
    }
    setErrors({});
    setGeneralError("");
    return true;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));

    // Ensure numbers are properly formatted if needed
    if (["itemPrice", "taxRate", "deliveryFees", "discount"].includes(name)) {
      const rawValue = value.replace(/,/g, "");
      if (!/^\d*\.?\d*$/.test(rawValue)) return; // Allow only numbers & decimal
      setOrderDetails((prev) => ({ ...prev, [name]: rawValue }));
    } else {
      setOrderDetails((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSelectChange = (value: string) => {
    setOrderDetails((prev) => ({
      ...prev,
      paymentType: value, // Ensure 'paymentType' matches your state key
    }));
  };

  const handleSubmit = async () => {
    console.log("Submitting with values", orderDetails);
    if (!validate()) return; // Stop submission if validation fails

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

      if (!response.ok) throw new Error("Failed to submit order");

      const data = await response.json();
      if (data.success) {
        router.push("/dashboard");
        setOpen(false);
      } else {
        setGeneralError(
          data.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      setGeneralError("Failed to submit the order. Please try again.");
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
        <h2 className="text-center font-bold text-3xl mb-4">New Order </h2>
        <h6 className="text-xs">{orderDetails.orderNumber}</h6>
        {generalError && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            {generalError}
          </div>
        )}
        <div className="flex gap-4">
          <div className="border-r pr-4 w-1/2">
            {/* Rest of the inputs */}
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
                placeholder="000 0000 0000"
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
          {/* Continue rendering inputs as before */}
          <div className="w-1/2">
            <h6 className="font-semibold text-xl mb-4">
              Order Details (Optional)
            </h6>
            <div>
              <h5 className="font-semibold mb-2">Items:</h5>
              <div className="flex gap-1 flex-col w-full gap- mb-4">
                <input
                  type="text"
                  name="itemName"
                  placeholder="Name"
                  className="w-2/5 outline-none border p-2 rounded w-full"
                  value={orderDetails.itemName}
                  onChange={handleChange}
                  style={{ borderColor: errors.itemName ? "red" : "" }} // Inline error style
                />
                {errors.itemName && (
                  <span className="text-red-500 text-xs mb-4">
                    {errors.itemName}
                  </span>
                )}
                <input
                  type="text"
                  name="itemPrice"
                  placeholder="Price"
                  className=" outline-none border p-2 rounded w-full"
                  value={Number(orderDetails.itemPrice).toLocaleString()} // Ensure display is formatted
                  onChange={handleChange}
                />
                {errors.itemPrice && (
                  <span className="text-red-500 text-xs mb-2">
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
              <div className="flex flex-col gap-5">
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
                <select
                  name="paymentType"
                  value={orderDetails.paymentType}
                  onChange={handleChange}
                  className="border p-2 rounded w-[200px] outline-none appearance-none bg-white hover:bg-gray-200"
                >
                  <option value="" disabled className="text-slate-500">
                    Select Payment Type
                  </option>
                  <option className="hover:bg-gray-300" value="Credit Card">
                    Credit Card
                  </option>
                  <option className="hover:bg-gray-300" value="Bank transfer">
                    Bank transfer
                  </option>
                  <option className="hover:bg-gray-300" value="Pay on Delivery">
                    Pay on Delivery
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="px-6 py-3 bg-dispa8chRed-10 hover:bg-dispa8chRed-10 text-white rounded-lg transition"
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
