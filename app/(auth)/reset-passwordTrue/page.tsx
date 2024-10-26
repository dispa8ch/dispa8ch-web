"use client";
import { Dispa8chLogo } from "@/public/icons";
import Link from "next/link";

/**
 * @todo change the forgot password route in the forgot password link
 */
export default function ResetTrue() {
  const handleSubmit = async () => {};
  const disabled = false;

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
            // value={searchTerm} // Bind input value to searchTerm
            // onChange={'handleInputChange'} // Update search term on input change
            className={`w-full h-12 rounded-lg font-Inter_Bold shadow-input border border-[#ccc] pl-5 text-feintBlack focus:outline-none`}
          />
          <input
            name="password"
            placeholder="Confirm new Password"
            type="text"
            // value={searchTerm} // Bind input value to searchTerm
            // onChange={'handleInputChange'} // Update search term on input change
            className={`w-full h-12 rounded-lg font-Inter_Bold shadow-input border border-[#ccc] pl-5 text-feintBlack focus:outline-none`}
          />
        </div>

        <div className="flex justify-between w-full">
          <button
            className={` w-full px-6 py-1 mt-5  rounded-lg text-white font-Inter_Bold text-lg ${
              disabled ? "bg-red-300 cursor-wait" : "bg-dispa8chRed-500"
            }`}
            onClick={handleSubmit}
            disabled={disabled}
          >
            Reset Password
          </button>
        </div>
      </section>
    </main>
  );
}
