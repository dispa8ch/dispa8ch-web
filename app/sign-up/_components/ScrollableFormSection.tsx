"use client";
import { LoginButton } from "@/components/buttons";
import { NamedInput, PasswordInput } from "@/components/inputs";
import { useState } from "react";
import { signupSchema } from "@/lib/validations/user";
// import { z } from "zod";
import { useRouter } from "next/navigation";

const ScrollableFormSection = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [userDetail, setUserDetail] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    companyName: "",
    city: "",
    contactPerson: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    companyName: "",
    city: "",
    contactPerson: "",
    phone: "",
  });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Handle Submit was clicked");
    const result = signupSchema.safeParse(userDetail);
    if (!result.success) {
      const newErrors = {
        email: "",
        password: "",
        confirmPassword: "",
        country: "",
        companyName: "",
        city: "",
        contactPerson: "",
        phone: "",
      };

      result.error.errors.forEach((err) => {
        if (err.path.includes("email")) newErrors.email = err.message;
        if (err.path.includes("password")) newErrors.password = err.message;
        if (err.path.includes("confirmPassword"))
          newErrors.confirmPassword = err.message;
        if (err.path.includes("country")) newErrors.country = err.message;
        if (err.path.includes("companyName"))
          newErrors.companyName = err.message;
        if (err.path.includes("city")) newErrors.city = err.message;
        if (err.path.includes("contactPerson"))
          newErrors.contactPerson = err.message;
        if (err.path.includes("phone")) newErrors.phone = err.message;
      });

      setErrors(newErrors);
      return;
    }

    // Clear errors on successful validation
    setErrors({
      email: "",
      password: "",
      confirmPassword: "",
      country: "",
      companyName: "",
      city: "",
      contactPerson: "",
      phone: "",
    });

    // Handle API request here
    try {
      console.log("submitting with values:", userDetail);
      setLoading(true);
      const response = await fetch(
        "https://dispa8ch-backend.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDetail),
          mode: "cors",
        }
      );
      if (response.ok) {
        // Sign in and redirect to dashboard
        router.push("/dashboard");
      }
      console.log("response", response);
    } catch (error) {
      console.error("error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="min-w-full h-full flex flex-col py-4 px-[2px] gap-6">
        <NamedInput
          name="Email address"
          type="email"
          value={userDetail.email}
          onChange={(e) =>
            setUserDetail({ ...userDetail, email: e.target.value })
          }
          validationError={errors.email}
        />
        <NamedInput
          name="Country"
          value={userDetail.country}
          onChange={(e) =>
            setUserDetail({ ...userDetail, country: e.target.value })
          }
          validationError={errors.country}
        />
        <PasswordInput
          type="password"
          name="Password"
          value={userDetail.password}
          onChange={(e) =>
            setUserDetail({ ...userDetail, password: e.target.value })
          }
          validationError={errors.password}
        />
        <PasswordInput
          type="password"
          name="Confirm Password"
          value={userDetail.confirmPassword}
          onChange={(e) =>
            setUserDetail({
              ...userDetail,
              confirmPassword: e.target.value,
            })
          }
          validationError={errors.confirmPassword}
        />
      </section>
      <section className="min-w-full h-full flex flex-col py-4 px-[2px] gap-6">
        <NamedInput
          name="Business name"
          value={userDetail.companyName}
          onChange={(e) =>
            setUserDetail({ ...userDetail, companyName: e.target.value })
          }
          validationError={errors.companyName}
        />
        <NamedInput
          name="City"
          value={userDetail.city}
          onChange={(e) =>
            setUserDetail({ ...userDetail, city: e.target.value })
          }
          validationError={errors.city}
        />
        <NamedInput
          name="Contact Person Name"
          value={userDetail.contactPerson}
          onChange={(e) =>
            setUserDetail({ ...userDetail, contactPerson: e.target.value })
          }
          validationError={errors.contactPerson}
        />
        <NamedInput
          name="Phone Number"
          value={userDetail.phone}
          onChange={(e) =>
            setUserDetail({ ...userDetail, phone: e.target.value })
          }
          validationError={errors.phone}
        />
        <LoginButton
          text={!loading ? "Create your account" : "Creating account..."}
          handleSubmit={handleSubmit}
          disabled={loading}
        />
      </section>
    </>
  );
};

export default ScrollableFormSection;
