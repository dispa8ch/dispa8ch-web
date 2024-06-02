'use client'
import { BaseButton } from "@/components/buttons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileUp, PlusCircle, SearchIcon } from "lucide-react";

const orderPageTabs = [
  "Current",
  "Pending",
  "Completed",
  "Cancelled",
  "History",
] as const;


const Header: React.FC = () => {
  return (
    <section className='flex flex-col mt-2  gap-6 '>
      <section className='flex justify-between '>
        <h1 className='text-3xl font-semibold'>Orders</h1>
        <section className='flex gap-3'>
          <div className='relative'>
            <input
              className='border placeholder:text-gray-300 pl-9 rounded-md outline-none py-1 border-gray-300'
              placeholder='Search'
              type='text'
            />
            <div className='absolute top-[7px] ml-2.5'>
              <SearchIcon size={20} className="stroke-gray-400 " />
            </div>
          </div>

          <button onClick={() => ''} className='fit flex items-center gap-2 px-2 py-1 rounded-md border border-slate-500 hover:bg-gray-50 transition-[background] duration-150 '>
            <FileUp size={20} className="stroke-gray-500 " />
            <span>Excel Export</span>
          </button>

          <BaseButton onClick={() => ''} className='w-fit h-fit flex mt-0 items-center gap-2 px-2 py-1 rounded-md text-base  '>
            <PlusCircle size={20} className="stroke-white " />
            <span>New Order</span>
          </BaseButton>
        </section>
      </section>
      {/* Orders page nav links */}
      <Tabs defaultValue="current" className="w-full ">
        <TabsList className="w-full justify-start rounded-lg " >
          {/* data-[state=active] is the attribute selector that changes the background color or of the tab trigger */}
          {orderPageTabs.map((tab, index) => (
            <TabsTrigger key={index} className="px-12 data-[state=active]:rounded-md  " value={tab.toLowerCase()} >{tab}</TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="current">This is the dispa8ch orders page</TabsContent>
        <TabsContent value="pending">Change your password here.</TabsContent>
      </Tabs>
    </section>
  )
}


'data-state=active;aria-selected=true'
export default Header
