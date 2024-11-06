"use client";
import { useResetPassword } from "@/components/ResetPasswordProvider";
import { Dispa8chLogo } from "@/public/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";

/**
 * @todo change the forgot password route in the forgot password link
 */
export default function ResetTrue() {
  // const disabled = false;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const email = localStorage.getItem("emailOTP");
  const { email } = useResetPassword();
  const [errorMessage, seterrorMessage] = useState("");
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log('reset password was fired' , email , password)
    if (password != confirmPassword) {
      seterrorMessage("Passwords do not Match !");
      return;
    }
    try {
      setLoading(true)
      const response = await fetch(
        "https://dispa8ch-backend.onrender.com/api/auth/password/reset/",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email ,password : password }),
          mode: "cors",
        }
      );

      const res = await response.json();
      console.log("res =", res);
      if (res.success) {
        router.push("/login");
      }
    } catch (error) {
      console.log("Error reseting password", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-screen min-h-screen px-4 bg-gradient-to-br from-[#D1193E1A] to-[#FDA8001A] font-Inter_Medium flex flex-col items-center justify-center gap-7 md:py-4">
      <section className="w-full h-fit flex justify-center ">
        <Dispa8chLogo size={1} />
      </section>
      <section className="w-full max-w-xl  bg-white flex h-fit flex-col shadow-base rounded-xl py-10 px-10 lg:px-16 ">
        <div className="flex flex-col mb-7">
          <h1 className="font-Inter_Black text-[25px] ">Reset your password</h1>
          <p className="text-slate-400 text-sm">
            Your new password muct be different from the previous password
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <input
            name="password"
            placeholder="Enter new Password"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className={`w-full h-12 rounded-lg font-Inter_Bold shadow-input border border-[#ccc] pl-5 text-feintBlack focus:outline-none`}
          />
          <input
            name="password"
            placeholder="Confirm new Password"
            type="text"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            className={`w-full h-12 rounded-lg font-Inter_Bold shadow-input border border-[#ccc] pl-5 text-feintBlack focus:outline-none`}
          />
        </div>
        {errorMessage && (
          <p className="text-dispa8chRed-500 text-sm">{errorMessage}</p>
        )}

        <div className="flex justify-between w-full">
          <button
            className={` w-full px-6 py-1 mt-5  rounded-lg text-white font-Inter_Bold text-lg ${
              loading ? "bg-red-300 cursor-wait" : "bg-dispa8chRed-500"
            }`}
            onClick={handleSubmit}
            disabled={loading}
          >
            {
              loading ? "Reseting..." : "Reset Password"
            }
            
          </button>
        </div>
      </section>
    </main>
  );
}
