"use client";
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
      <div className='flex justify-between '>
        <div>
          <h1 className='text-2xl font-bold'>Orders</h1>
        </div>

        <div className='flex gap-3'>
          <div className='relative'>
            <input
              className='border placeholder:text-gray-300 pl-8 rounded-md outline-none py-1 border-gray-400'
              placeholder='Search'
              type='text'
            />{" "}
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

          <div className='relative '>
            <button
              className='border rounded-md text-base text-gray-300 pl-10 pr-8 py-1 border-gray-400'
              type='submit'
            >
              Excel Export
            </button>

            <div className='absolute top-1.5  ml-4'>
              <svg
                className='hover:cursor-pointer'
                width='19'
                height='19'
                viewBox='0 0 17 17'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.1262 3.74926L9.0012 1.62426C8.86837 1.49147 8.68824 1.41687 8.50041 1.41687C8.31259 1.41687 8.13245 1.49147 7.99962 1.62426L5.87462 3.74926C5.74559 3.88285 5.67419 4.06178 5.67581 4.2475C5.67742 4.43323 5.75192 4.61088 5.88325 4.74222C6.01458 4.87355 6.19224 4.94804 6.37796 4.94965C6.56368 4.95127 6.74261 4.87987 6.8762 4.75084L7.79208 3.83497V12.0417C7.79208 12.2296 7.8667 12.4097 7.99954 12.5426C8.13238 12.6754 8.31255 12.7501 8.50041 12.7501C8.68827 12.7501 8.86844 12.6754 9.00128 12.5426C9.13412 12.4097 9.20874 12.2296 9.20874 12.0417V3.83497L10.1246 4.75084C10.2582 4.87987 10.4371 4.95127 10.6229 4.94965C10.8086 4.94804 10.9862 4.87355 11.1176 4.74222C11.2489 4.61088 11.3234 4.43323 11.325 4.2475C11.3266 4.06178 11.2552 3.88285 11.1262 3.74926Z'
                  fill='#757575'
                />
                <path
                  d='M12.75 6.375H9.20833V12.0417C9.20833 12.2295 9.13371 12.4097 9.00087 12.5425C8.86803 12.6754 8.68786 12.75 8.5 12.75C8.31214 12.75 8.13197 12.6754 7.99913 12.5425C7.86629 12.4097 7.79167 12.2295 7.79167 12.0417V6.375H4.25C3.68659 6.37556 3.14641 6.59963 2.74802 6.99802C2.34963 7.39641 2.12556 7.93659 2.125 8.5V13.4583C2.12556 14.0217 2.34963 14.5619 2.74802 14.9603C3.14641 15.3587 3.68659 15.5828 4.25 15.5833H12.75C13.3134 15.5828 13.8536 15.3587 14.252 14.9603C14.6504 14.5619 14.8744 14.0217 14.875 13.4583V8.5C14.8744 7.93659 14.6504 7.39641 14.252 6.99802C13.8536 6.59963 13.3134 6.37556 12.75 6.375Z'
                  fill='#D1D1D1'
                />
              </svg>
            </div>
          </div>

          <div className='relative '>
            <button
              className='btn-order rounded-md text-base text-white pl-10 pr-8 py-1'
              type='submit'
            >
              New Order
            </button>
            <div className='absolute top-2 ml-4'>
              <svg
                className='hover:cursor-pointer'
                width='17'
                height='17'
                viewBox='0 0 17 17'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8.50044 1.17236C4.45327 1.17236 1.17285 4.45278 1.17285 8.49995C1.17285 12.5471 4.45327 15.8275 8.50044 15.8275C12.5476 15.8275 15.828 12.5471 15.828 8.49995C15.828 4.45278 12.5476 1.17236 8.50044 1.17236ZM12.3108 9.08616H9.08665V12.3103C9.08665 12.4658 9.02488 12.6149 8.91495 12.7248C8.80501 12.8347 8.65591 12.8965 8.50044 12.8965C8.34497 12.8965 8.19586 12.8347 8.08593 12.7248C7.97599 12.6149 7.91423 12.4658 7.91423 12.3103V9.08616H4.69009C4.53462 9.08616 4.38552 9.0244 4.27558 8.91446C4.16565 8.80453 4.10389 8.65542 4.10389 8.49995C4.10389 8.34448 4.16565 8.19537 4.27558 8.08544C4.38552 7.9755 4.53462 7.91374 4.69009 7.91374H7.91423V4.6896C7.91423 4.53413 7.97599 4.38503 8.08593 4.27509C8.19586 4.16516 8.34497 4.1034 8.50044 4.1034C8.65591 4.1034 8.80501 4.16516 8.91495 4.27509C9.02488 4.38503 9.08665 4.53413 9.08665 4.6896V7.91374H12.3108C12.4663 7.91374 12.6154 7.9755 12.7253 8.08544C12.8352 8.19537 12.897 8.34448 12.897 8.49995C12.897 8.65542 12.8352 8.80453 12.7253 8.91446C12.6154 9.0244 12.4663 9.08616 12.3108 9.08616Z'
                  fill='white'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
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
              {" "}
              {text.name}
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default OrdersLayoutPage;
