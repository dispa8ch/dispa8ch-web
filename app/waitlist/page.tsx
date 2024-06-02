"use client";
import { BaseButton } from "@/components/buttons";
import { base64ToString } from "@/lib";
import { Check, Circle, CopyIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const waitlistOffers = [
  `You'll be the first to be notified of our new updates and
  features`,
  `You’ll have easy access and one on one discussions with the founders and team`,
  `You'll have access to a large community of business owners like you from all over the globe`
];

/**
 * @implementation the current user that just joined the waitlist. His/her email should be hashed. The email and id should be sent to the backend.
 * @todo the id should be the user's invite link.
 */
export default function Waitlist() {
  const encryptedEmailAddress = useSearchParams().get('emailAddress') as Base64
  const [isCopied, setIsCopied] = useState(false);
  const inviteLink = `https://dispa8ch.vercel.app/waitlist?invite-link=${encryptedEmailAddress}`;
  const copyLink = () => {
    navigator.clipboard.writeText(inviteLink);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }
  const router = useRouter()

  return (
    <>
      <section className='w-full grid place-items-center bg-gray-300 min-h-screen py-6 '>
        <section className=' flex flex-col rounded-[50px] justify-center md:items-center py-16 md:py-14 bg-white md:w-120 w-[90%] lg:w-200'>
          <section>
            <h1 className='mb-1 md:mb-3 text-dispa8chRed-500 text-center font-bold md:font-Inter_ExtraBold text-lg md:text-3xl'>
              Thank you for joining our waitlist
            </h1>
            <p className='text-[#A4707B] md:mb-5 mb-3  md:font-Inter_Medium font-normal text-base md:text-lg text-center'>
              Welcome to the Dispa8ch community <span className="text-dispa8chRed-400" >{base64ToString(encryptedEmailAddress)}</span>
            </p>
          </section>
          <section className='space-y-3 '>
            {waitlistOffers.map((offer, i) => (
              <div className='flex items-center gap-2 md:gap-4' key={i}>
                <Circle size={22} className="fill-dispa8chRed-200 stroke-dispa8chRed-200 " />
                <p className=' text-start md:text-center font-normal text-[#A4707B]  text-sm md:text-base'>{offer}</p>
              </div>
            ))}

          </section>
          <section className='mt-6 md:mx-0 mx-4'>
            <div>
              <p className='text-center mb-6 text-dispa8chRed-500 font-medium  text-sm md:text-lg'>
                Let's get your friends, family and colleagues started on this
                journey too
              </p>
            </div>

            <section className='flex flex-col items-center justify-center gap-6 '>
              <div className="w-full h-10 bg-gray-300 rounded-lg flex justify-between items-center px-3 group cursor-pointer ">
                <input type="text" readOnly disabled value={inviteLink} className="w-[95%] bg-inherit text-slate-500 cursor-pointer " />
                {isCopied ? (
                  <Check size={20} className="stroke-green-400" />
                ) : (
                  <button onClick={copyLink} className="opacity-0 transition-[opacity] duration-200 group-hover:opacity-100 focus:opacity-100 " >
                    <CopyIcon size={20} className="stroke-slate-500" />
                  </button>
                )}
              </div>
              
              <div className="w-full h-fit flex flex-col items-center gap-3">
                <p className="text-slate-400 text-lg ">OR</p>
                <hr className="border border-slate-300 w-[70%] " />
              </div>

              <form className="w-full h-10 bg-gray-300 rounded-lg flex justify-between items-center pl-3 ">
                <input
                  placeholder='Enter an email to send an invite to your friends'
                  type='email'
                  className="w-[70%] bg-inherit cursor-pointer focus:outline-none text-[#171717] " 
                />
                <BaseButton className='text-sm font-medium rounded-l-none rounded-r-lg '>Send</BaseButton>
              </form>

              <BaseButton onClick={() => router.push('/')} >Done</BaseButton>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
