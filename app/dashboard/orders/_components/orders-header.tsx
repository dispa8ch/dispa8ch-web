'use client'
import { BaseButton } from "@/components/buttons";
import { FileUp, PlusCircle, SearchIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  {
    name: "Current",
    link: "/dashboard/orders",
  },
  {
    name: "Pending",
    link: "/dashboard/orders/pending",
  },
  {
    name: "Completed",
    link: "/dashboard/orders/completed",
  },
  {
    name: "Cancelled",
    link: "/dashboard/orders/cancelled",
  },
  {
    name: "History",
    link: "/dashboard/history",
  },
] as const;


const Header: React.FC = () => {
  const [activeTextId, setActiveTextId] = useState<number | null>(null);

  const [firstDiv, setFirstDiv] = useState(true);

  const handleTextClick = (id: number) => {
    setActiveTextId(id);
    localStorage.setItem("activeTextId", id.toString());
    setFirstDiv(false);
  };

  useEffect(() => {
    // Retrieve activeTextId from localStorage on component mount
    const activeTextId = localStorage.getItem("activeTextId");
    const parsedTextId = activeTextId && parseInt(activeTextId)
    parsedTextId && setActiveTextId(parsedTextId)
  }, []);

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
      <section className='flex gap-10 border-b border-gray-300 '>
        {links.map(({name, link}, index) => (
          <Link
            className={`cursor-pointer ${activeTextId === index
              ? "text-red-500 font-medium  text-base"
              : index === 0 && firstDiv && activeTextId === null
                ? "text-red-500 font-medium text-base"
                : "text-black font-medium  text-base"
              }`}
            key={index}
            href={link}
          >
            <div
              onClick={() => handleTextClick(index)}
              className={`cursor-pointer ${activeTextId === index
                ? "text-red-500 border-b pb-3 w-22 border-red-500"
                : index === 0 && firstDiv && activeTextId === null
                  ? "text-red-500 border-b pb-3 w-22 border-red-500"
                  : "pb-3  w-22 "
                }`}
            >
              {name}
            </div>
          </Link>
        ))}
      </section>
    </section>
  )
}

export default Header
