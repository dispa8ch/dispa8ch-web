"use client";
import data from "@/public/data/blogs.json";
import Link from "next/link";
import { useEffect, useRef } from "react";

type BlogPostProps = (typeof data.our_blogs)[number];

const BlogPost = ({
  header,
  paragraph,
  imageUrl2,
  imageUrl,
  id,
}: BlogPostProps) => {
  return (
    <div className='md:flex md:items-center  mb-16 md:mb-36 md:gap-8 lg:gap-24 xl:gap-32  md:justify-start grid place-items-center sm:pl-0 '>
      <div className='lg:max-h-56 md:max-h-64 lg:max-w-110 xl:max-w-120 w-80 md:max-w-100 sm:w-91 '>
        <img
          key={id}
          className='lg:max-w-110 md:max-h-64 max-h-56 xl:max-w-120 md:max-w-100 w-80 sm:w-91'
          alt='features'
          src={imageUrl}
        />
      </div>

      <div className=' h-56  md:w-96 w-80 sm:w-91 lg:w-full lg:mr-0  md:mt-0  mt-20 md:flex md:justify-center md:flex-col'>
        <h1 className='text-dispa8chYellow-500 text-xl  font-Inter_ExtraBold lg:text-2xl '>
          {header}
        </h1>
        <p className='mt-3 text-dispa8chLightGray-100 text-base font-normal mb-3'>
          Published on Wednesday 12/04/2025
        </p>
        <p className='text-dispa8chLightGray-100 text-xl'>{paragraph}</p>

        <div className='flex mt-3 gap-2'>
          <div className='mt-2'>
            <img alt='' src={imageUrl2} />
          </div>
          <p className='text-dispa8chLightGray-100  font-normal text-base'>
            2 mins read
          </p>
        </div>
      </div>
    </div>
  );
};

const OurBlogs = ({ showHeader }: { showHeader?: boolean }) => {
  const animatedDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          if (animatedDivRef.current) {
            animatedDivRef.current.classList.add("active");
          }
        } else {
          if (animatedDivRef.current) {
            animatedDivRef.current.classList.remove("active");
          }
        }
      });
    };

    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin
      // threshold: 0.1, // Trigger when 75% of the element is in the viewport
    };

    const animatedDivObserver = new IntersectionObserver(
      handleIntersection,
      options
    );

    if (animatedDivRef.current) {
      animatedDivObserver.observe(animatedDivRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (animatedDivRef.current) {
        animatedDivObserver.unobserve(animatedDivRef.current);
      }
    };
  });

  return (
    <section className='lg:w-91 w-full mb-32 md:ml-6   lg:ml-16'>
      {showHeader ? (
        <h1 className='text-dispa8chRed-500 text-center text-xl font-Inter_ExtraBold lg:text-2xl  mb-20'>
          OUR BLOGS
        </h1>
      ) : (
        ""
      )}
      <section ref={animatedDivRef} id='animatedDiv'>
        {data.our_blogs.map((blog, i) => (
          <Link className="fit" key={i} href={`/blog/${blog.id}`}>
            <BlogPost key={i} {...blog} />
          </Link>
        ))}
      </section>
      <button className='text-dispa8chRed-10 w-full grid place-items-center text-center underline text-lg font-medium mt-20'>
        <Link href={"/blog"}>View more articles</Link>
      </button>
    </section>
  );
};

export default OurBlogs;
