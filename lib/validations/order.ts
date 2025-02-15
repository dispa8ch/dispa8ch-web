import * as z from "zod";

export const orderSchema = z.object({
    orderNumber: z.string().min(1, "Order number is required"),
    username: z.string().min(1, "Name is required"),
    phone: z.string().min(1, "Phone number is required").regex(/^\d{11}$/, "Phone number must be 11 digits"),
    address: z.string().min(1, "Address is required"),
    receiverName: z.string().min(1, "Receiver's name is required"),
    receiverAddress: z.string().min(1, "Receiver's address is required"),
    receiverPhone: z.string().min(1, "Receiver's phone is required").regex(/^\d{11}$/, "Receiver's phone must be 11 digits"),
    receiverEmail: z.string().min(1, "Receiver's email is required").email("Invalid email format"),
    itemPrice: z.string().min(1, "Item price is required").regex(/^\d+(\.\d{1,2})?$/, "Invalid price format"),
    itemName: z.string().min(1, "Item name is required"),
    paymentType: z.string().min(1, "Payment type is required"),
    // Optional fields
    pickupTime: z.string().optional(),
    deliveryDate: z.string().optional(),
    deliveryTime: z.string().optional(),
    itemQuantity: z.string().optional(),
    taxRate: z.string().optional(),
    deliveryFees: z.string().optional(),
    discount: z.string().optional(),
    deliveryInstruction: z.string().optional(),
});
