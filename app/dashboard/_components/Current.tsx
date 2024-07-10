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
    <div className='w-full grid grid-cols-13-gapped place-content-center gap-1 py-4 border-b border-gray-300'>
      <div className='place-items-center'>
        {" "}
        <input
          className='order-checkbox'
          title='checkbox'
          name='checkbox'
          type='checkbox'
        />
      </div>

      <div className='place-items-center   w-16'>
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

      <div>
        <svg
          width='55'
          height='21'
          viewBox='0 0 55 21'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='0.5'
            y='0.5'
            width='54'
            height='20'
            rx='4.5'
            fill='white'
            stroke='#757575'
          />
          <path
            d='M27 8.33203C26.6704 8.33203 26.3481 8.42978 26.0741 8.61292C25.8 8.79605 25.5863 9.05635 25.4602 9.36089C25.3341 9.66544 25.301 10.0005 25.3654 10.3238C25.4297 10.6472 25.5884 10.9441 25.8215 11.1772C26.0546 11.4103 26.3515 11.569 26.6748 11.6333C26.9982 11.6976 27.3333 11.6646 27.6378 11.5385C27.9423 11.4124 28.2026 11.1987 28.3858 10.9246C28.5689 10.6506 28.6667 10.3283 28.6667 9.9987C28.6667 9.55667 28.4911 9.13275 28.1785 8.82019C27.866 8.50763 27.442 8.33203 27 8.33203ZM21.1667 8.33203C20.837 8.33203 20.5148 8.42978 20.2407 8.61292C19.9666 8.79605 19.753 9.05635 19.6269 9.36089C19.5007 9.66544 19.4677 10.0005 19.532 10.3238C19.5963 10.6472 19.7551 10.9441 19.9882 11.1772C20.2212 11.4103 20.5182 11.569 20.8415 11.6333C21.1648 11.6976 21.4999 11.6646 21.8045 11.5385C22.109 11.4124 22.3693 11.1987 22.5524 10.9246C22.7356 10.6506 22.8333 10.3283 22.8333 9.9987C22.8333 9.55667 22.6577 9.13275 22.3452 8.82019C22.0326 8.50763 21.6087 8.33203 21.1667 8.33203ZM32.8333 8.33203C32.5037 8.33203 32.1815 8.42978 31.9074 8.61292C31.6333 8.79605 31.4197 9.05635 31.2935 9.36089C31.1674 9.66544 31.1344 10.0005 31.1987 10.3238C31.263 10.6472 31.4217 10.9441 31.6548 11.1772C31.8879 11.4103 32.1849 11.569 32.5082 11.6333C32.8315 11.6976 33.1666 11.6646 33.4711 11.5385C33.7757 11.4124 34.036 11.1987 34.2191 10.9246C34.4023 10.6506 34.5 10.3283 34.5 9.9987C34.5 9.55667 34.3244 9.13275 34.0118 8.82019C33.6993 8.50763 33.2754 8.33203 32.8333 8.33203Z'
            fill='#757575'
          />
        </svg>
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
