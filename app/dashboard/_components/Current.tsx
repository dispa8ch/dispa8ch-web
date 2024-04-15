"use client";
import data from "@/public/data/currentOrder.json";

type CurrentOrdersProps = (typeof data.current_Order)[number];

const CurrentOrder = ({
  Order_id,
  name,
  pick_up,
  amount,
  distance,
  Order_placed,
  pick_up_time,
  Req_Delivery_time,
  status,
}: CurrentOrdersProps) => {
  return (
    <div className=' gap-8 w-92 flex   border-b place-items-center  h-16 border-gray-300 '>
      <div className='place-items-center'>
        {" "}
        <input
          className='order-checkbox'
          title='checkbox'
          name='checkbox'
          type='checkbox'
        />
      </div>

      <div className='place-items-center w-16'>
        <p className='text-sm font-semibold'>{Order_id}</p>
      </div>

      <div className='w-40 place-items-center  '>
        <p className='text-sm font-semibold'>{name}</p>
      </div>

      <div className='w-16  place-items-center'>
        <p className='text-sm font-semibold'>{pick_up}</p>
      </div>

      <div className='w-16'>
        <p className='text-sm font-semibold  place-items-center'>{amount}</p>
      </div>

      <div className='w-20'>
        <p className='text-sm font-semibold  place-items-center'>{distance}</p>
      </div>

      <div className='w-14'>
        <p className='text-sm font-semibold  place-items-center'>
          {Order_placed}
        </p>
      </div>

      <div className='w-16  place-items-center'>
        <p className='text-sm font-semibold  '>{pick_up_time}</p>
      </div>

      <div className='w-16  place-items-center'>
        <p className='text-sm font-semibold'>{Req_Delivery_time}</p>
      </div>

      <div className='pick-up-toggle place-items-center flex '>
        <div className='moved-toggle ml-1'></div>
      </div>

      <div className='flex border gap-2 items-center px-2 py-1 rounded border-gray-400'>
        <div>
          <svg
            width='20'
            height='20'
            viewBox='0 0 11 11'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M5.41977 1.57684C3.21543 1.57684 1.42871 3.36356 1.42871 5.5679C1.42871 7.77225 3.21543 9.55896 5.41977 9.55896C7.62411 9.55896 9.41083 7.77225 9.41083 5.5679C9.41083 3.36356 7.62411 1.57684 5.41977 1.57684ZM7.49512 5.88719H5.73906V7.64325C5.73906 7.72793 5.70542 7.80915 5.64554 7.86902C5.58566 7.9289 5.50445 7.96254 5.41977 7.96254C5.33509 7.96254 5.25388 7.9289 5.194 7.86902C5.13412 7.80915 5.10049 7.72793 5.10049 7.64325V5.88719H3.34442C3.25974 5.88719 3.17853 5.85355 3.11865 5.79367C3.05877 5.73379 3.02513 5.65258 3.02513 5.5679C3.02513 5.48322 3.05877 5.40201 3.11865 5.34213C3.17853 5.28226 3.25974 5.24862 3.34442 5.24862H5.10049V3.49255C5.10049 3.40787 5.13412 3.32666 5.194 3.26678C5.25388 3.20691 5.33509 3.17327 5.41977 3.17327C5.50445 3.17327 5.58566 3.20691 5.64554 3.26678C5.70542 3.32666 5.73906 3.40787 5.73906 3.49255V5.24862H7.49512C7.5798 5.24862 7.66101 5.28226 7.72089 5.34213C7.78077 5.40201 7.81441 5.48322 7.81441 5.5679C7.81441 5.65258 7.78077 5.73379 7.72089 5.79367C7.66101 5.85355 7.5798 5.88719 7.49512 5.88719Z'
              fill='#757575'
            />
          </svg>
        </div>

        <div>
          <p className='text-gray-400 text-sm  font-normal'>Assign</p>
        </div>
      </div>
      <div>
        <p className='text-sm font-semibold  place-items-center'>{status}</p>
      </div>
    </div>
  );
};

const Current = () => {
  return (
    <section className=''>
      {data.current_Order.map((orders, i) => (
        <CurrentOrder key={i} {...orders} />
      ))}
    </section>
  );
};

export default Current;
