const GetStartedSection = () => {
  return (
    <section className='bg-gradient-to-r from-[#E41F4733] to-[#FDA80033] column justify-center items-center py-8 px-6 lg:px-16'>
      <section className='w-fit h-fit column justify-center items-center gap-4'>
        <h1 className='text-2xl text-dispa8chRed-500 font-Inter_Bold'>
          Let's get you started today!
        </h1>
        <p className='text-[#A4707B] font-Inter '>
          First play around with it, add your team, pay later.
        </p>
        <button className='w-fit h-fit bg-dispa8chRed-500 text-white font-bold py-2 px-8 rounded'>
          Start Free
        </button>
      </section>
      <section className='w-full h-fit flex justify-center items-center gap-4'>
        <img src="/images/get-started.png" alt="Get Started" />
        <img src="/images/get-started-1.png" alt="Get Started" />
        <img src="/images/get-started-2.png" alt="Get Started" />
      </section>
    </section>
  );
};

export default GetStartedSection;
