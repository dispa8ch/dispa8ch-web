import NamedInput from "./NamedInput";

type LoginFormProps = {};

const LoginForm = (props?: LoginFormProps) => {
  return (
    <section className='w-full flex-grow bg-white flex flex-col my-4 shadow-round rounded-2xl p-8 '>
      <h1 className='font-Circular_Black text-[25px] '>This is NextJS with Turbo</h1>
      <form action='' className='w-full mt-6 flex-grow flex flex-col gap-4'>
        <NamedInput name="Email address" />
      </form>
    </section>
  );
};

export default LoginForm;
