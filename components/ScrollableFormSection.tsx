import CreateButton from "./CreateButton";
import { NamedInput, PasswordInput } from "./Input";

const ScrollableFormSection = () => {
  return (
    <>
      <section className='min-w-full h-full flex flex-col py-4 px-[2px] gap-6'>
        <NamedInput name='Email address' />
        <NamedInput name='Country' />
        <PasswordInput name='Password' />
        <PasswordInput name='Confirm Password' />
      </section>
      <section className='min-w-full h-full flex flex-col py-4 px-[2px] gap-6'>
        <NamedInput name='Business name' />
        <NamedInput name='City' />
        <NamedInput name='Contract Person Name' />
        <NamedInput name='Phone Number' />
        <CreateButton />
      </section>
    </>
  );
};

export default ScrollableFormSection;
