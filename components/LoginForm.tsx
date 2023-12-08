'use client'
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import {NamedInput, PasswordInput} from "./Input";

/**
 * @todo add form validation and country codes like in the design;
 */
const LoginForm = () => {
  return (
    <section className='w-full flex-grow flex bg-white max-w-xl flex-col my-4 shadow-round rounded-2xl p-8 '>
      <h1 className='font-Circular_Black text-[25px] '>Create your Account</h1>
      <form action='' className='w-full mt-6 flex-grow flex flex-col gap-6'>
        <NamedInput name="Email address" />
        <NamedInput name="Country" />
        <PasswordInput name="Password" />
        <PasswordInput name="Confirm Password" />
      </form>
      <section className="w-fit h-fit mt-auto ml-auto bg-blue text-dispa8chRed font-Circular_Bold flex items-center gap-3" >
        <ArrowLongRightIcon color="#7E7E7E" width={32} height={31}/>
        <p>Next</p>
      </section>
    </section>
  );
};

export default LoginForm;
