'use client'

import { BaseButton } from "@/components/buttons";
import { useState } from "react";

type CommentInputProps = {};

/**
 * @todo create a debounce function for the input onInput event
 */
const CommentInput = (props?: CommentInputProps) => {
  const [valueLength, setValueLength] = useState<number>(0)
  return (
    <form action={'any'} className="w-full flex gap-4 items-center ">
      <div className="flex-grow h-fit pb-2 border-b border-b-dispa8chRed-200 text-gray-500 flex items-center justify-between ">
        <input type="text" placeholder="Write your comment..." className="text-[#171717] placeholder:text-gray-500 " onInput={({currentTarget: { value }}) => {
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