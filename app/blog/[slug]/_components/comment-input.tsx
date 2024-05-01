'use client'
import { BaseButton } from "@/components/buttons";
import { debounce } from "@/lib";
import { FormEventHandler, useState } from "react";

/**
 * @todo connect this component to the Comments component
 */
const CommentInput = () => {
  const [valueLength, setValueLength] = useState<number>(0)
  return (
    <form action={'/blog'} className="w-full flex gap-6 justify-between items-center ">
      <div className="flex-grow h-fit pb-3 border-b border-b-dispa8chRed-200 text-gray-500 flex gap-2 items-center justify-between ">
        <input type="text" placeholder="Write your comment..." className="w-full bg-transparent text-[#171717] placeholder:text-gray-500 focus:outline-none dark:text-white/60 " onInput={debounce(({ target }) => {
          setValueLength((target as EventTarget & HTMLInputElement).value.length)
        }, 300) as FormEventHandler<HTMLInputElement>} />
        <p>{valueLength}/2000</p>
      </div>
      <BaseButton>
        Publish
      </BaseButton>
    </form>
  )
};

export default CommentInput;