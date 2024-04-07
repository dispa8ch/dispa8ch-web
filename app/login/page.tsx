"use client";
import { Dispa8chLogo } from "@/public/icons";
import { NamedInput, PasswordInput } from "@/components/inputs";
import { LoginButton } from "@/components/buttons";
import Link from "next/link";

/**
 * @todo change the forgot password route in the forgot password link
 */
export default function Login() {
  return (
    <main className='w-screen min-h-screen px-4 bg-gradient-to-br from-[#D1193E1A] to-[#FDA8001A] font-Inter_Medium flex flex-col items-center justify-center gap-7 md:py-4'>
      <section className='w-full h-fit flex justify-center '>
        <Dispa8chLogo size={1} />
      </section>
      <section className='w-full flex-grow max-w-xl max-h-[560px] bg-white flex flex-col shadow-base rounded-xl py-10 px-10 sm:max-h-none lg:px-16 '>
        <h1 className='font-Inter_Black text-[25px] '>Create your Account</h1>
        <form className='w-full mt-6 flex-grow flex flex-col gap-2'>
          <section className='min-w-full h-full flex flex-col py-4 px-[2px] gap-6'>
            <NamedInput name='Email address' />
            <PasswordInput name='Password' />
            <Link className='text-dispa8chRed-500' href={"/forgot-password"}>
              <p>Forgot password?</p>
            </Link>
            <LoginButton text='Login your account' />
          </section>

          <section className='h-fit w-full flex items-center justify-center gap-1 md:text-xl text-sm text-feintBlack font-Inter_Bold '>
            <p>Don't have an account?</p>
            <button className='text-dispa8chRed-500 border-none focus:outline-none '>
              <Link href={"/sign-up"}>Sign Up</Link>
            </button>
          </section>
        </form>
      </section>
    </main>
  );
}
