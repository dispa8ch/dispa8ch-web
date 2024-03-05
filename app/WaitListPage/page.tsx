export default function WaitListPage() {
  return (
    <>
      <section className='w-full  grid place-items-center bg-gray-300 h-screen '>
        <div className=' flex flex-col rounded-md justify-center items-center  h-180 bg-white w-200'>
          <header>
            <h1 className=' mb-3 text-dispa8chRed-500 text-center font-Inter_ExtraBold text-3xl'>
              Thank you for joining our waitlist
            </h1>
            <p className='text-[#A4707B] mb-5  font-Inter_Medium text-lg text-center'>
              Welcome to the Dispa8ch community @ <span></span>
            </p>
          </header>
          <section>
            <div className='flex mb-1 gap-4'>
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
                <p className='text-center font-normal text-[#A4707B] text-base'>
                  You'll be the first to be notified of our new updates and
                  features
                </p>
              </div>
            </div>

            <div className='flex mb-1 gap-4'>
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
                <p className='text-center font-normal text-[#A4707B] text-base'>
                  You'll have easy access and one on one discussions with the
                  founders and team
                </p>
              </div>
            </div>

            <div className='flex mb-1 gap-4'>
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
                <p className='text-center font-normal text-[#A4707B] text-base'>
                  You'll have access to a large community of business owners
                  like you from all over the globe
                </p>
              </div>
            </div>

            <div className='flex  gap-4'>
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
                <p className='text-center font-normal text-[#A4707B] text-base'>
                  Let's join hands and work together to make your business a
                  thriving success
                </p>
              </div>
            </div>
          </section>

          <footer className='mt-6'>
            <div>
              <p className='text-center mb-6 text-dispa8chRed-500 font-bold   text-base'>
                Let's get your friends, family and colleagues started on this
                journey too
              </p>
            </div>

            <form>
              <div className='bg-gray-300 py-2 rounded-md pl-3  w-105'>
                {" "}
                <p className='text-gray-500'>
                  www.dispa8ch.com/jamesking/invite-link
                </p>
              </div>

              <div className='border border-gray-300 py-1.5 rounded-md pl-3  w-105'>
                {" "}
                <p className=' text-center text-lg font-medium text-gray-300'>
                  OR
                </p>
              </div>
            </form>
          </footer>
        </div>
      </section>
    </>
  );
}
