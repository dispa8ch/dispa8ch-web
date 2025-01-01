"use client";
import { LoginButton } from "@/components/buttons";
import { NamedInput, PasswordInput } from "@/components/inputs";
import { useState } from "react";
import { signupSchema } from "@/lib/validations/user";
// import { z } from "zod";
import { useRouter } from "next/navigation";
import CountrySelect from "./CountrySelect";

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

  const [globalError, setGlobalError] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("submitting with values:", userDetail);

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

      console.log("There was an error during validations", result);

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
      console.log("response", response);
      const data = await response.json();
      console.log("responded =", data);
      if (data.success) {
        // Sign in and redirect to dashboard
        localStorage.setItem("companyData", JSON.stringify(data.data));

        router.push("/dashboard");
      }
      console.log("Response message ==>", data.message);
      setGlobalError(data.message);
    } catch (error) {
      console.error("error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="min-w-full h-fit   flex flex-col py-4 px-[2px] gap-6">
        <NamedInput
          name="Email address"
          type="email"
          placeholder="dispatchinc20@gmail.com"
          value={userDetail.email}
          onChange={(e) => (
            setUserDetail({ ...userDetail, email: e.target.value }),
            setGlobalError("")
          )}
          validationError={errors.email}
        />
        <CountrySelect setUserDetail={setUserDetail} userDetail={userDetail} />
        <PasswordInput
          type="password"
          name="Password"
          placeholder="Enter a strong Password"
          value={userDetail.password}
          onChange={(e) =>
            setUserDetail({ ...userDetail, password: e.target.value })
          }
          validationError={errors.password}
          className={`w-full h-12 rounded-lg font-Inter_Bold shadow-input border border-[#ccc] pl-5 text-feintBlack focus:outline-none} `}
        />
        <PasswordInput
          type="password"
          name="Confirm Password"
          placeholder="Confirm your Password"
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
          placeholder="Medah Logistics"
          value={userDetail.companyName}
          onChange={(e) =>
            setUserDetail({ ...userDetail, companyName: e.target.value })
          }
          validationError={errors.companyName}
        />
        <NamedInput
          name="City"
          placeholder="Lagos"
          value={userDetail.city}
          onChange={(e) =>
            setUserDetail({ ...userDetail, city: e.target.value })
          }
          validationError={errors.city}
        />
        <NamedInput
          name="Contact Person Name"
          placeholder="John Doe"
          value={userDetail.contactPerson}
          onChange={(e) =>
            setUserDetail({ ...userDetail, contactPerson: e.target.value })
          }
          validationError={errors.contactPerson}
        />
        <NamedInput
          name="Phone Number"
          placeholder="+234 000 000 000"
          value={userDetail.phone}
          onChange={(e) =>
            setUserDetail({ ...userDetail, phone: e.target.value })
          }
          validationError={errors.phone}
        />
        {globalError && <p className="text-red-500">{globalError}</p>}
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
