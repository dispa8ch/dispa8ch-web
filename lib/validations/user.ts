import * as z from "zod";


export const loginSchema = z.object({
    email: z
      .string()
      .nonempty("Email is required")
      .email("Invalid email address"),
    password: z
      .string()
      .nonempty("Password is required")
      .min(8, "Password must be at least 8 characters long"),
  });


  // Signup schema
  export const signupSchema = z
    .object({
      email: z
        .string()
        .nonempty("Email is required")
        .email("Invalid email address"),
      password: z
        .string()
        .nonempty("Password is required")
        .min(8, "Password must be at least 8 characters long"),
      confirmPassword: z
        .string()
        .nonempty("Confirm Password is required")
        .min(8, "Confirm Password must be at least 8 characters long"),
      country: z.string().nonempty("Required"),
      companyName: z.string().nonempty("Company name is required"),
      city: z.string().nonempty("City is required"),
      contactPerson: z.string().nonempty("Required*"),
      phone: z
        .string()
        .nonempty("Required*")
        .regex(/^[0-9]+$/, "Phone number must contain only digits"),
    })
    .superRefine((data, ctx) => {
      if (data.password !== data.confirmPassword) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Passwords do not match",
          path: ["confirmPassword"], // This will target the confirmPassword field
        });
      }
    });
  