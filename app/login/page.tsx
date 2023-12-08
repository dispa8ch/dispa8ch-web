import { Dispa8chLogo } from "@/assets/icons";
import LoginForm from "@/components/LoginForm";

export default function Login() {
  return (
    <main className='w-screen h-screen bg-gradient-to-br from-[#D1193E1A] to-[#FDA8001A] font-Circular_Medium flex flex-col p-4'>
      <section className='w-full h-fit flex justify-center '>
        <Dispa8chLogo size={0.8} />
      </section>
      <LoginForm />
      <section className='h-fit w-full flex items-center justify-center gap-1 mt-auto text-xl text-feintBlack font-Circular_Bold '>
        <p>Have an account?</p>
        <button className='text-dispa8chRed border-none focus:outline-none '>
          Sign in
        </button>
      </section>
    </main>
  );
}
