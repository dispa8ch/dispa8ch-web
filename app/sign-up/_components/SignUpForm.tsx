"use client";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import ScrollableFormSection from "./ScrollableFormSection";

/**
 * @todo add form validation and country codes like in the design;
 */
const SignUpForm = () => {
  const formRef = useRef<HTMLFormElement>();

  let left = 0;
  const [display, setDisplay] = useState(true);
  const scrollForm = (pos: "left" | "right") => {
    const isRight = pos === "right";
    return () => {
      const form = formRef.current;
      const width = form!.getBoundingClientRect().width;
      left = isRight ? width : -width;
      form!.scroll({
        behavior: "smooth",
        left,
      });
      setDisplay(!display);
    };
  };

  return (
    <section className="w-fit flex-grow max-w-xl max-h-[560px] bg-white flex flex-col shadow-base rounded-xl py-10 px-10 sm:max-h-none lg:px-16 ">
      <h1 className="font-Inter_Black text-[25px] ">Create your Account</h1>
      <form
        ref={formRef as any}
        className="w-full mt-6 flex-grow flex overflow-x-hidden h-fit"
      >
        <ScrollableFormSection />
      </form>
      <section className="w-full h-fit mt-auto text-dispa8chRed-500 font-Inter_Bold flex items-center justify-between">
        {/* Back */}
        <div
          className={`w-fit h-fit flex fade ${
            !display ? "opacity-100" : "opacity-0"
          } item-center gap-3`}
        >
          <button
            className="border-none focus:outline-none"
            onClick={scrollForm("left")}
          >
            Back
          </button>
          <ArrowLongLeftIcon color="#7E7E7E" width={32} height={31} />
        </div>
        {/* Next */}
        <div
          className={`w-fit h-fit flex fade ${
            display ? "opacity-100" : "opacity-0"
          } flex ml-auto item-center gap-3`}
        >
          <ArrowLongRightIcon color="#7E7E7E" width={32} height={31} />
          <button
            className="border-none focus:outline-none"
            onClick={scrollForm("right")}
          >
            Next
          </button>
        </div>
      </section>
    </section>
  );
};

export default SignUpForm;
