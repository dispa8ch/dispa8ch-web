import Link from "next/link";

/**
 * @todo get the video from Edward.
 * @todo style the video controls.
 */
const ComplaintsResponse = () => {
  return (
    <section className='w-full h-fit py-6 column items-center gap-12 px-6 font-Inter_Medium lg:px-16 lg:py-12'>
      <div className='w-full h-fit flex items-center'>
        <h1 className='text-dispa8chRed-500 text-xl underline font-Inter_ExtraBold m-auto lg:text-2xl '>
          Watch Our Demo Videos
        </h1>
        <Link href={"/docs/videos"} className='hidden lg:block'>
          <p>See all</p>
        </Link>
      </div>

      <div className='w-full h-[500px]'>
        <img
          alt=''
          className='w-full h-full'
          src='/images/demo-video-player.png'
        />
      </div>
    </section>
  );
};

export default ComplaintsResponse;
