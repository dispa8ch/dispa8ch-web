"use client";

export default function WaitListPage() {
  const handleCopy = () => {
    navigator.clipboard.writeText("");
    // setButtonText((prev) => !prev);
  };
  return (
    <>
      <section className='w-full  grid place-items-center bg-gray-300 h-screen '>
        <div className=' flex flex-col rounded-md justify-center md:items-center py-8 md:py-14 bg-white md:w-120 w-91 lg:w-200'>
          <header>
            <h1 className='mb-1 md:mb-3 text-dispa8chRed-500 text-center font-bold md:font-Inter_ExtraBold text-lg md:text-3xl'>
              Thank you for joining our waitlist
            </h1>
            <p className='text-[#A4707B] md:mb-5 mb-3  md:font-Inter_Medium font-normal text-base md:text-lg text-center'>
              Welcome to the Dispa8ch community @ <span></span>
            </p>
          </header>
          <section className=' md:mx-0 mx-4'>
            <div className='flex md:mb-1 mb-1.5 gap-2  md:gap-4'>
              <div className='mt-1'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='8' cy='8' r='8' fill='#A4707B' />
                </svg>
              </div>
              <div>
                <p className='text-start md:text-center font-normal text-[#A4707B] text-sm md:text-base'>
                  You'll be the first to be notified of our new updates and
                  features
                </p>
              </div>
            </div>

            <div className='flex md:mb-1 mb-1.5  gap-2  md:gap-4'>
              <div className='mt-1'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='8' cy='8' r='8' fill='#A4707B' />
                </svg>
              </div>
              <div>
                <p className=' text-start md:text-center font-normal text-[#A4707B]  text-sm md:text-base'>
                  You'll have easy access and one on one discussions with the
                  founders and team
                </p>
              </div>
            </div>

            <div className='flex md:mb-1 mb-1.5  gap-2  md:gap-4'>
              <div className='mt-1'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='8' cy='8' r='8' fill='#A4707B' />
                </svg>
              </div>
              <div>
                <p className='text-start md:text-center  font-normal text-[#A4707B] text-sm md:text-base'>
                  You'll have access to a large community of business owners
                  like you from all over the globe
                </p>
              </div>
            </div>

            <div className='flex gap-2  md:gap-4'>
              <div className='mt-1'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='8' cy='8' r='8' fill='#A4707B' />
                </svg>
              </div>
              <div>
                <p className=' text-start md:text-center font-normal text-[#A4707B]  text-sm md:text-base'>
                  Let's join hands and work together to make your business a
                  thriving success
                </p>
              </div>
            </div>
          </section>

          <footer className='mt-6'>
            <div>
              <p className='text-center mb-6 text-dispa8chRed-500 font-medium  text-sm md:text-lg'>
                Let's get your friends, family and colleagues started on this
                journey too
              </p>
            </div>

            <form className='grid place-items-center'>
              <div className='bg-gray-300 flex justify-between py-1.5 pr-3 rounded-md pl-3 w-80  md:w-110'>
                {" "}
                <div>
                  <p className='text-gray-500 md:text-base text-sm'>
                    www.dispa8ch.com/jamesking/invite-link
                  </p>
                </div>
                <div className='md:mt-2 mt-1' onClick={handleCopy}>
                  <svg
                    width='17'
                    height='10'
                    viewBox='0 0 17 10'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M11.8683 1.09351H12.2425C14.3091 1.09351 15.9844 2.8424 15.9844 4.99976C15.9844 7.1571 14.3091 8.90601 12.2425 8.90601H10.7458C8.67924 8.90601 7.00394 7.1571 7.00394 4.99976M5.13302 8.90601H4.75883C2.69228 8.90601 1.01698 7.1571 1.01698 4.99976C1.01698 2.8424 2.69228 1.09351 4.75883 1.09351H6.25557C8.32212 1.09351 9.99742 2.8424 9.99742 4.99976'
                      stroke='#35000B'
                      stroke-width='1.7'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </div>
              </div>

              <div className='border-b mt-3 mb-8 border-gray-300 py-1.5 pl-3   w-80  md:w-110'>
                {" "}
                <p className=' text-center text-base font-medium text-gray-300'>
                  OR
                </p>
              </div>

              <div className='relative'>
                <input
                  placeholder='Enter email to send an invite to your friends'
                  type='email'
                  className='bg-gray-300 flex justify-between py-1.5 pr-3 rounded-md pl-3  w-80  md:w-110'
                />
                <p className='top-2 text-red-500 text-sm font-medium absolute right-4'>
                  Send
                </p>
              </div>

              <button
                className='text-white mt-6 font-bold md:text-xl text-lg px-12 md:px-16 py-1.5 rounded-md  bg-dispa8chRed-500'
                type='submit'
              >
                Finish
              </button>
            </form>
          </footer>
        </div>
      </section>
    </>
  );
}
