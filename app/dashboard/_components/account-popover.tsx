'use client'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CogIcon, LogOutIcon } from "lucide-react";

const AccountPopOver: React.FC<{ emailAddress: string }> = ({ emailAddress }) => {
  return (
    <Popover >
      <PopoverTrigger asChild>
        <button className="w-12 h-12 text-white text-2xl bg-dispa8chRed-500 rounded-full">
          {emailAddress.at(0)?.toUpperCase()}
        </button>
      </PopoverTrigger>
      <PopoverContent className="font-Inter w-64 px-0 column gap-3" >
        <div className="w-full px-3 flex gap-4 items-end">
          <button className="w-12 h-12 text-white text-2xl bg-dispa8chRed-500 rounded-full">
            {emailAddress.at(0)?.toUpperCase()}
          </button>
          <div className="w-fit h-fit column gap-1">
            <h1 className="text-black/80 font-Inter_Medium text-base" >Garner Stella</h1>
            <p className="text-gray-600 font-Inter_Medium text-xs" >{emailAddress}</p>
          </div>
        </div>
        <hr />
        <div className="w-full px-3 column gap-4">
          <button className="flex items-center gap-2">
            <CogIcon size={22} className="stroke-gray-700" />
            <p>Settings</p>
          </button>
          <button className="flex items-center gap-2">
            <LogOutIcon size={22} className="stroke-gray-700" />
            <p>Log Out</p>
          </button>
        </div>
        <hr />
      </PopoverContent>
    </Popover>
  )
}

export default AccountPopOver;