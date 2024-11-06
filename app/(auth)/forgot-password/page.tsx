"use client";
import { useResetPassword } from "@/components/ResetPasswordProvider";
import { Dispa8chLogo } from "@/public/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

/**
 * @todo change the forgot password route in the forgot password link
 */
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { setResetEmail } = useResetPassword();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('Check email was fired', email);
    setLoading(true)
    
    try {

      const response = await fetch(
        "https://dispa8ch-backend.onrender.com/api/auth/email/check",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email }),
          mode: "cors",
        }
      );

      const res = await response.json()
      console.log('res =' , res)
      if (res.success) {
      // localStorage.setItem('emailOTP' , email)
      setResetEmail(email)

      router.push('/otp-verification')
      }

    } catch (error) {
      console.log('Error searching email form endpoint' , error)
    } finally {
      setLoading(false)
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
            Enter the Email address you used to register
          </p>
        </div>

        <input
          name="country"
          placeholder="Email address"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className={`w-full h-12 rounded-lg font-Inter_Bold shadow-input border border-[#ccc] pl-5 text-feintBlack focus:outline-none`}
        />
        <Link
          className="text-dispa8chRed-500 text-sm my-2"
          href={"/forgot-password"}
        >
          <p>Forgot or lost your email address?</p>
        </Link>
        <div className="flex justify-between w-full">
          <Link
            className={`px-6 py-1 mt-5  rounded-lg bg-slate-200 font-Inter_Bold text-lg 
              text-dispa8chRed-500
            `}
            href="/sign-in"
          >
            Back to Sign in
          </Link>
          <button
            className={`px-6 py-1 mt-5  rounded-lg text-white font-Inter_Bold text-lg ${
              loading ? "bg-red-300 cursor-wait" : "bg-dispa8chRed-500"
            }`}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Verifying...' : 'Proceed'}
          </button>
        </div>
      </section>
    </main>
  );
}
