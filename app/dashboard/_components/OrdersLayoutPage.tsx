"use client";
import { BaseButton } from "@/components/buttons";
import { FileUp, PlusCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface TextItem {
  id: number;
  name: string;
  link: string;
}

function OrdersLayoutPage() {
  const [activeTextId, setActiveTextId] = useState<number | null>(null);

  const [firstDiv, setFirstDiv] = useState(true);

  const texts: TextItem[] = [
    {
      name: "Current",
      link: "/dashboard/orders",
      id: 1,
    },
    {
      name: "Pending",
      link: "/dashboard/orders/pending",
      id: 2,
    },
    {
      name: "Completed",
      link: "/dashboard/orders/completed",
      id: 3,
    },
    {
      name: "Cancelled",
      link: "/dashboard/orders/cancelled",
      id: 4,
    },
    {
      name: "History",
      link: "/dashboard/history",
      id: 5,
    },
  ] as const;

  const handleTextClick = (id: number) => {
    setActiveTextId(id); // Set the clicked text as active
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
    <div className='mt-8 w-92 '>
      <section className='flex justify-between '>
        <div>
          <h1 className='text-2xl font-bold'>Orders</h1>
        </div>

        <div className='flex gap-3'>
          <div className='relative'>
            <input
              className='border placeholder:text-gray-300 pl-8 rounded-md outline-none py-1 border-gray-400'
              placeholder='Search'
              type='text'
            />
            <div className='absolute top-2.5  ml-2.5'>
              <svg
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1.65077 9.61839C2.62063 10.5893 3.91219 11.1722 5.28212 11.2572C6.65206 11.3422 8.00579 10.9234 9.0883 10.0798L12.813 13.8034C12.9451 13.931 13.122 14.0016 13.3057 14C13.4893 13.9984 13.665 13.9247 13.7949 13.7949C13.9247 13.6651 13.9984 13.4895 14 13.3059C14.0016 13.1223 13.931 12.9454 13.8034 12.8134L10.0787 9.08974C10.96 7.95904 11.3766 6.53484 11.2437 5.10758C11.1107 3.68032 10.4382 2.35751 9.3632 1.40894C8.2882 0.460365 6.89174 -0.0425279 5.4586 0.00282059C4.02546 0.0481691 2.66361 0.638344 1.65077 1.65298C1.12743 2.1759 0.712276 2.79678 0.429031 3.48015C0.145787 4.16352 0 4.89598 0 5.63569C0 6.3754 0.145787 7.10786 0.429031 7.79122C0.712276 8.47459 1.12743 9.09547 1.65077 9.61839ZM2.64113 2.64446C3.33353 1.95228 4.24457 1.52152 5.21904 1.42556C6.19351 1.3296 7.17111 1.57439 7.98529 2.11821C8.79947 2.66203 9.39985 3.47124 9.68414 4.40798C9.96842 5.34471 9.91903 6.35101 9.54438 7.25542C9.16972 8.15983 8.49298 8.90639 7.62946 9.36792C6.76594 9.82945 5.76906 9.97738 4.80867 9.78651C3.84828 9.59564 2.9838 9.07779 2.36251 8.32117C1.74122 7.56455 1.40157 6.61598 1.40142 5.63709C1.3995 5.08083 1.5081 4.52974 1.72091 4.01577C1.93372 3.50181 2.24651 3.03521 2.64113 2.64306V2.64446Z'
                  fill='black'
                />
              </svg>
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
        </div>
      </section>
      {/* Nav links */}
      <section className='border-b  border-gray-300   gap-14 mt-10 flex  '>
        {texts.map((text, index) => (
          <Link
            className={`cursor-pointer ${activeTextId === text.id
              ? "text-red-500 font-medium  text-base"
              : index === 0 && firstDiv && activeTextId === null
                ? "text-red-500 font-medium text-base"
                : "text-black font-medium  text-base"
              }`}
            key={text.id}
            href={text.link}
          >
            <div
              onClick={() => handleTextClick(text.id)}
              className={`cursor-pointer ${activeTextId === text.id
                ? "text-red-500 border-b pb-3 w-22 border-red-500"
                : index === 0 && firstDiv && activeTextId === null
                  ? "text-red-500 border-b pb-3 w-22 border-red-500"
                  : "pb-3  w-22 "
                }`}
            >
              {text.name}
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default OrdersLayoutPage;
