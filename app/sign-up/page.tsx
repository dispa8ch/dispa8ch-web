'use client'
import { Dispa8chLogo } from "@/assets/icons";
import SignUpForm from "@/components/SignUpForm";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter()
  return (
    <main className='w-screen min-h-screen px-4 bg-gradient-to-br from-[#D1193E1A] to-[#FDA8001A] font-Inter_Medium flex flex-col items-center justify-center gap-7 md:py-4 md:px-0'>
      <section className='w-full h-fit flex justify-center '>
        <Dispa8chLogo size={1} />
      </section>
      <SignUpForm />
      <section className='h-fit w-full flex items-center justify-center gap-1 text-xl text-feintBlack font-Inter_Bold '>
        <p>Have an account?</p>
        <button className='text-dispa8chRed-600 border-none focus:outline-none ' onClick={() => router.push('/login')}>
          Sign in
        </button>
      </section>
    </main>
  );
}
