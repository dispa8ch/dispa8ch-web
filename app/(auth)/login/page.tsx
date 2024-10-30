"use client";
import { Dispa8chLogo } from "@/public/icons";
import { NamedInput, PasswordInput } from "@/components/inputs";
import { LoginButton } from "@/components/buttons";
import Link from "next/link";
import { useState } from "react";
// import { z } from "zod";
import { loginSchema } from "@/lib/validations/user";
import { useRouter } from "next/navigation";
import { useCompany } from "@/components/CompanyContext";

/**
 * @todo change the forgot password route in the forgot password link
 */
export default function Login() {
  const { updateCompanyData } = useCompany();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [userDetail, setUserDetail] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, seterrorMessage] = useState("")
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const result = loginSchema.safeParse(userDetail);

    if (!result.success) {
      // Handle validation errors
      console.log(result.error.errors);
      console.log(result.error.errors[0].message);

      if (!result.success) {
        const newErrors = {
          email: "",
          password: "",
        };

        // Extract error messages and assign to the appropriate field
        result.error.errors.forEach((err) => {
          if (err.path.includes("email")) {
            newErrors.email = err.message;
          } else if (err.path.includes("password")) {
            newErrors.password = err.message;
          }
        });

        setErrors(newErrors);
        return;
      } // alert(result.error.errors.map((error) => error.message).join("\n"));
      return;
    }

    setErrors({
      email: "",
      password: "",
    });

    try {
      console.log("login Values", userDetail);
      setLoading(true);

      const response = await fetch(
        "https://dispa8ch-backend.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDetail),
          mode: "cors",
        }
      );

      const returnedData = await response.json();
      console.log('retured response=' , returnedData)


      if (returnedData.success) {
        // Sign in and redirect to dashboard
        console.log('Company Data:', returnedData);
        updateCompanyData(returnedData.data)
        localStorage.setItem("companyData", JSON.stringify(returnedData.data));
        router.push("/dashboard");
        console.log('You suppose dey dashboard by now')
      } 
      seterrorMessage(returnedData.error)

    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-screen min-h-screen px-4 bg-gradient-to-br from-[#D1193E1A] to-[#FDA8001A] font-Inter_Medium flex flex-col items-center justify-center gap-7 md:py-4">
      <section className="w-full h-fit flex justify-center ">
        <Dispa8chLogo size={1} />
      </section>
      <section className="w-full flex-grow max-w-xl max-h-[560px] bg-white flex flex-col shadow-base rounded-xl py-10 px-10 sm:max-h-none lg:px-16 ">
        <h1 className="font-Inter_Black text-[25px] ">Login your Account</h1>
        <form className="w-full mt-6 flex-grow flex flex-col gap-2">
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
            <PasswordInput
              name="Password"
              value={userDetail.password}
              onChange={(e) =>
                setUserDetail({ ...userDetail, password: e.target.value })
              }
              validationError={errors.password}
            />
            {
              errorMessage && <p className="text-dispa8chRed-700">{errorMessage}</p>
            }

            <Link className="text-dispa8chRed-500" href={"/forgot-password"}>
              <p>Forgot password?</p>
            </Link>
            <LoginButton
              text={!loading ? "Login your account" : "Login in..."}
              handleSubmit={handleSubmit}
              disabled={loading}
            />
          </section>

          <section className="h-fit w-full flex items-center justify-center gap-1 md:text-xl text-sm text-feintBlack font-Inter_Bold ">
            <p>Don't have an account?</p>
            <button className="text-dispa8chRed-500 border-none focus:outline-none ">
              <Link href={"/sign-up"}>Sign Up</Link>
            </button>
          </section>
        </form>
      </section>
    </main>
  );
}
