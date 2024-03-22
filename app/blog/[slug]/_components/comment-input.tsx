'use client'
import { BaseButton } from "@/components/buttons";
import { useState } from "react";

type CommentInputProps = {};

/**
 * @todo create a debounce function for the input onInput event
 * @todo connect this component to the Comments component
 */
const CommentInput = (props?: CommentInputProps) => {
  const [valueLength, setValueLength] = useState<number>(0)
  return (
    <form action={'/blog'} className="w-full flex gap-6 items-center ">
      <div className="flex-grow h-fit pb-3 border-b border-b-dispa8chRed-200 text-gray-500 flex items-center justify-between ">
        <input type="text" placeholder="Write your comment..." className="bg-transparent text-[#171717] placeholder:text-gray-500 focus:outline-none dark:text-white/60 " onInput={({currentTarget: { value }}) => {
          setValueLength(value.length)
        }} />
        <p>{valueLength}/2000</p>
      </div>
      <BaseButton>
        Publish
      </BaseButton>
    </form>
  )
};

export default CommentInput;