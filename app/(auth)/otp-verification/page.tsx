"use client";
import { useResetPassword } from "@/components/ResetPasswordProvider";
import { Dispa8chLogo } from "@/public/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

/**
 * @todo change the forgot password route in the forgot password link
 */
export default function OtpVerification() {
  const router = useRouter();
  // const { email } = router.query;
  // const email = localStorage.getItem("emailOTP");
  const { email } = useResetPassword();

  const [otp, setOtp] = useState(Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setMessage('')
    const value = e.target.value;
    if (value.match(/^[0-9]$/)) {
      // Only allow single digits
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input if a number is entered
      if (e.target.nextSibling) {
        (e.target.nextSibling as HTMLElement).focus();
      }
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const code = otp.join(""); // This will join the array of digits into a single string

    console.log("OTP was submitted", email, code);
    setLoading(true);

    try {
      const response = await fetch(
        "https://dispa8ch-backend.onrender.com/api/auth/otp/verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email, otp: code }),
          mode: "cors",
          credentials: "include",
        }
      );

      const res = await response.json();
      console.log("res =", res);
      if (res.success) {
        router.push("/reset-password");
      } else {
        setMessage(res.message)
        setOtp(Array(6).fill(""))
      }
    } catch (error) {
      console.log("Error searching email from endpoint", error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <main className="w-screen min-h-screen px-4 bg-gradient-to-br from-[#D1193E1A] to-[#FDA8001A] font-Inter_Medium flex flex-col items-center justify-center gap-7 md:py-4">
      <section className="w-full h-fit flex justify-center ">
        <Dispa8chLogo size={1} />
      </section>
      <section className="w-full max-w-xl bg-white flex h-fit flex-col shadow-base rounded-xl py-10 px-10 lg:px-16">
        <div className="flex flex-col mb-7">
          <h1 className="font-Inter_Black text-[25px]">Reset your password</h1>
          <p className="text-slate-400 text-sm">
            Enter the reset code sent to ****@gmail.com
          </p>
          <p className="text-slate-400 text-sm">
            Do not refresh this page !
          </p>
        </div>
        <div className="flex flex-col items-center mb-6">
          <div className="flex justify-center gap-3 mb-1 ">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                maxLength={1}
                onChange={(e) => handleChange(e, index)}
                className="w-12 h-12 text-center text-2xl font-Inter_Bold shadow-input border border-[#ccc] rounded-lg focus:outline-none"
              />
            ))}
          </div>
          <Link
            className="text-dispa8chRed-500 text-sm flex gap-1"
            href={"/forgot-password"}
          >
            <p>Code Sent.</p>{" "}
            <p className="text-slate-400 text-sm">Resend Code in 05s</p>
          </Link>
          {message && <p className="text-dispa8chRed-500">{message}</p>}
        </div>
        <div className="flex justify-between w-full">
          <Link
            className="px-6 py-1 mt-5 rounded-lg bg-slate-200 font-Inter_Bold text-lg text-dispa8chRed-500"
            href="/forgot-password"
          >
            Back
          </Link>
          <button
            className={`px-6 py-1 mt-5 rounded-lg text-white font-Inter_Bold text-lg ${
              loading ? "bg-red-300 cursor-wait" : "bg-dispa8chRed-500"
            }`}
            onClick={handleSubmit}
            disabled={loading}
          >
            {
              loading ? "verifying..." : 'submit'
          }
          </button>
        </div>
      </section>
    </main>
  );
}
