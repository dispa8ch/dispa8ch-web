"use client";
import { BaseButton } from "@/components/buttons";
import { FileUp, PlusCircle, SearchIcon } from "lucide-react";

const page = () => {
  return (
    <section className="min-h-[inherit] flex flex-col mt-2 gap-6 ">
     <section className="flex justify-between ">
        <h1 className="text-3xl font-semibold">Drivers</h1>
        <section className="flex gap-3">
          <div className="relative">
            <input
              className="border placeholder:text-gray-300 pl-9 rounded-md outline-none py-1 border-gray-300"
              placeholder="Search"
              type="text"
            />
            <div className="absolute top-[7px] ml-2.5">
              <SearchIcon size={20} className="stroke-gray-400 " />
            </div>
          </div>

          <button
            onClick={() => ""}
            className="fit flex items-center gap-2 px-2 py-1 rounded-md border border-slate-500 hover:bg-gray-50 transition-[background] duration-150 "
          >
            <FileUp size={20} className="stroke-gray-500 " />
            <span>Excel Export</span>
          </button>

          <BaseButton
            onClick={() => ""}
            className="w-fit h-fit flex mt-0 items-center gap-2 px-2 py-1 rounded-md text-base  "
          >
            <PlusCircle size={20} className="stroke-white " />
            <span>New Order</span>
          </BaseButton>
        </section>
      </section>
    </section>
  )
}

export default page