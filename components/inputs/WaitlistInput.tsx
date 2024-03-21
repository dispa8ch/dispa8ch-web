"use client";
import Link from "next/link";

type WaitlistInputProps = {};

const WaitlistInput = (props?: WaitlistInputProps) => {
  const handleWaitList = () => {};
  return (
    <div className='w-full h-12 pl-4 pr-2 flex items-center justify-between border border-dispa8chRed-100 text-sm rounded-full'>
      <input
        className='w-3/4 border-none font-Inter bg-transparent p-0 focus:outline-none placeholder:text-dispa8chGray-100 lg:w-fit lg:flex-grow dark:caret-dispa8chRed-100 dark:text-[#EB9CAC] '
        placeholder='Enter your email address'
      />
      <Link href='/waitlist'>
        <button
          onClick={handleWaitList}
          className='w-fit h-fit px-3 py-2 font-Inter_Medium text-white bg-gradient-to-r from-dispa8chYellow-500 to-dispa8chYellow-600 rounded-full'
        >
          Submit
        </button>
      </Link>
    </div>
  );
};

export default WaitlistInput;
