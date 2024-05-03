"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface TextItem {
  id: number;
  name: string;
  link: string;
}


function HistoryLayoutPage() {
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
    const activeTextId = localStorage.getItem("activeTextId")
    const parsedTextId = activeTextId && parseInt(activeTextId)
    parsedTextId && setActiveTextId(parsedTextId);
  }, []);

  return (
    <div className='mt-8 w-92 '>
      <div className='flex justify-between '>
        <div>
          <h1 className='text-2xl font-bold'>Orders</h1>
        </div>

        <div className='flex gap-2'>
          <div className='pl-5 gap-5 py-1.5 rounded-md border place-items-center  flex date-div'>
            <div className='   '>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M17 2H15V1C15 0.734784 14.8946 0.48043 14.7071 0.292893C14.5196 0.105357 14.2652 0 14 0C13.7348 0 13.4804 0.105357 13.2929 0.292893C13.1054 0.48043 13 0.734784 13 1V2H7V1C7 0.734784 6.89464 0.48043 6.70711 0.292893C6.51957 0.105357 6.26522 0 6 0C5.73478 0 5.48043 0.105357 5.29289 0.292893C5.10536 0.48043 5 0.734784 5 1V2H3C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.316071 3.44129 0 4.20435 0 5V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V5C20 4.20435 19.6839 3.44129 19.1213 2.87868C18.5587 2.31607 17.7956 2 17 2ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10H18V17ZM18 8H2V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H5V5C5 5.26522 5.10536 5.51957 5.29289 5.70711C5.48043 5.89464 5.73478 6 6 6C6.26522 6 6.51957 5.89464 6.70711 5.70711C6.89464 5.51957 7 5.26522 7 5V4H13V5C13 5.26522 13.1054 5.51957 13.2929 5.70711C13.4804 5.89464 13.7348 6 14 6C14.2652 6 14.5196 5.89464 14.7071 5.70711C14.8946 5.51957 15 5.26522 15 5V4H17C17.2652 4 17.5196 4.10536 17.7071 4.29289C17.8946 4.48043 18 4.73478 18 5V8Z'
                  fill='#757575'
                />
              </svg>
            </div>
            <div className=''>
              <p className=' all-color text-sm font-medium'>
                <span>10/06/23 </span> - <span> 17/06/23</span>
              </p>
            </div>
          </div>

          <div className=' justify-around py-1.5 rounded-md border  place-items-center  flex date-div'>
            <div className=''>
              <p className=' all-color text-sm font-medium'>Customer Name</p>
            </div>
            <div className='   '>
              <svg
                width='10'
                height='6'
                viewBox='0 0 10 6'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M4.62204 5.56356C4.82142 5.7938 5.17858 5.7938 5.37796 5.56356L9.47967 0.827327C9.7601 0.503505 9.53008 0 9.1017 0H0.898298C0.469922 0 0.239896 0.503505 0.520334 0.827327L4.62204 5.56356Z'
                  fill='#757575'
                />
              </svg>
            </div>
          </div>

          <div className=''>
            <input
              placeholder='Enter the key words'
              type='text'
              className='pl-5 outline-none border rounded-md py-1.5 place-items-center all-color history-input  placeholder:text-sm placeholder:font-medium  font-medium'
            />
          </div>

          <div className='history-search grid place-items-center'>
            <div>
              <svg
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1.65077 9.61839C2.62063 10.5893 3.91219 11.1722 5.28212 11.2572C6.65206 11.3422 8.00579 10.9234 9.0883 10.0798L12.813 13.8034C12.9451 13.931 13.122 14.0016 13.3057 14C13.4893 13.9984 13.665 13.9247 13.7949 13.7949C13.9247 13.6651 13.9984 13.4895 14 13.3059C14.0016 13.1223 13.931 12.9454 13.8034 12.8134L10.0787 9.08974C10.96 7.95904 11.3766 6.53484 11.2437 5.10758C11.1107 3.68032 10.4382 2.35751 9.3632 1.40894C8.2882 0.460365 6.89174 -0.0425279 5.4586 0.00282059C4.02546 0.0481691 2.66361 0.638344 1.65077 1.65298C1.12743 2.1759 0.712276 2.79678 0.429031 3.48015C0.145787 4.16352 0 4.89598 0 5.63569C0 6.3754 0.145787 7.10786 0.429031 7.79122C0.712276 8.47459 1.12743 9.09547 1.65077 9.61839ZM2.64113 2.64446C3.33353 1.95228 4.24457 1.52152 5.21904 1.42556C6.19351 1.3296 7.17111 1.57439 7.98529 2.11821C8.79947 2.66203 9.39985 3.47124 9.68414 4.40798C9.96842 5.34471 9.91903 6.35101 9.54438 7.25542C9.16972 8.15983 8.49298 8.90639 7.62946 9.36792C6.76594 9.82945 5.76906 9.97738 4.80867 9.78651C3.84828 9.59564 2.9838 9.07779 2.36251 8.32117C1.74122 7.56455 1.40157 6.61598 1.40142 5.63709C1.3995 5.08083 1.5081 4.52974 1.72091 4.01577C1.93372 3.50181 2.24651 3.03521 2.64113 2.64306V2.64446Z'
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
            className={`cursor-pointer ${
              activeTextId === text.id
                ? "text-red-500 font-medium  text-base"
                : index === 0 && firstDiv && activeTextId === null
                ? "text-red-500 font-medium text-base"
                : "text-black font-medium  text-base"
            }`}
            href={text.link}
            key={text.id}
          >
            <div
              onClick={() => handleTextClick(text.id)}
              className={`cursor-pointer ${
                activeTextId === text.id
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

export default HistoryLayoutPage;
