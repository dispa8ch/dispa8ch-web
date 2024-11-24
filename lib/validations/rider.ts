import * as z from "zod";


export const FormSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  meansOfID: z.string().min(1, { message: "Means of ID is required." }),
  dateOfBirth: z.string().min(1, { message: "Date of birth is required." }),
  gender: z.enum(["Male", "Female"], { message: "Please select a valid gender." }),
  residentialAddress: z.string().min(1, { message: "Address is required." }),
  vehicle: z.string().min(1, { message: "Vehicle is required." }),
  note: z.string().optional(),
  companyId: z.any().optional(),

});