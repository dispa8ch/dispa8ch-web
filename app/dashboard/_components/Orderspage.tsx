export default function Orderspage() {

  return (
    <>
      <section className="border-b pb-3 h-32 border-gray-300 w-92 flex gap-10 place-items-center">
        <div className="place-items-center">
          {" "}
          <input
            className="order-checkbox"
            title="checkbox"
            name="checkbox"
            type="checkbox"
          />
        </div>
        <div className="flex gap-2 place-items-center">
          <div className="w-14 ">
            <p className="text-sm font-semibold">Order ID</p>{" "}
          </div>
          <section>
            <button title="Id_button" type="button">
              <svg
                width="6"
                height="12"
                viewBox="0 0 6 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.07936 0.499451L5.39434 4.50912H0.764379L3.07936 0.499451Z"
                  fill="#757575"
                  fillOpacity="0.54"
                />
                <path
                  d="M3.07936 11.1919L5.39434 7.18223H0.764379L3.07936 11.1919Z"
                  fill="#757575"
                  fillOpacity="0.54"
                />
              </svg>
            </button>
          </section>
        </div>
        <div className="flex  place-items-center">
          {" "}
          <div className="w-36 ">
            <p className="text-sm font-semibold">C. Name</p>{" "}
          </div>
          <section className="">
            <button title="btn" type="button">
              <svg
                width="6"
                height="12"
                viewBox="0 0 6 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.07936 0.499451L5.39434 4.50912H0.764379L3.07936 0.499451Z"
                  fill="#757575"
                  fillOpacity="0.54"
                />
                <path
                  d="M3.07936 11.1919L5.39434 7.18223H0.764379L3.07936 11.1919Z"
                  fill="#757575"
                  fillOpacity="0.54"
                />
              </svg>
            </button>
          </section>
        </div>
        <div className="flex gap-1 place-items-center">
          <div className="w-14 ">
            <p className="text-sm font-semibold">Pick-Up</p>{" "}
          </div>

          <section className="">
            <button title="btn" type="button">
              <svg
                width="6"
                height="12"
                viewBox="0 0 6 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.07936 0.499451L5.39434 4.50912H0.764379L3.07936 0.499451Z"
                  fill="#757575"
                  fillOpacity="0.54"
                />
                <path
                  d="M3.07936 11.1919L5.39434 7.18223H0.764379L3.07936 11.1919Z"
                  fill="#757575"
                  fillOpacity="0.54"
                />
              </svg>
            </button>{" "}
          </section>
        </div>

        <div className="flex gap-2 place-items-center">
          <div className="w-14 ">
            <p className="text-sm font-semibold">Amount</p>{" "}
          </div>
          <section className="">
            <button title="btn" type="button">
              <svg
                width="6"
                height="12"
                viewBox="0 0 6 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.07936 0.499451L5.39434 4.50912H0.764379L3.07936 0.499451Z"
                  fill="#757575"
                  fillOpacity="0.54"
                />
                <path
                  d="M3.07936 11.1919L5.39434 7.18223H0.764379L3.07936 11.1919Z"
                  fill="#757575"
                  fillOpacity="0.54"
                />
              </svg>
            </button>{" "}
          </section>
        </div>
        <div className="flex gap-2 place-items-center">
          <div className="w-14">
            <p className="text-sm font-semibold">Distance</p>{" "}
          </div>
          <section className="">
            <button title="btn" type="button">
              <svg
                width="6"
                height="12"
                viewBox="0 0 6 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.07936 0.499451L5.39434 4.50912H0.764379L3.07936 0.499451Z"
                  fill="#757575"
                  fillOpacity="0.54"
                />
                <path
                  d="M3.07936 11.1919L5.39434 7.18223H0.764379L3.07936 11.1919Z"
                  fill="#757575"
                  fillOpacity="0.54"
                />
              </svg>
            </button>{" "}
          </section>
        </div>
        <div className="flex gap-3 place-items-center">
          <section>
            {" "}
            <p className="text-sm font-semibold">Order </p>{" "}
            <p className="text-sm font-semibold">Placed</p>{" "}
          </section>
          <section className="">
            <button title="btn" type="button">
              <svg
                width="6"
                height="12"
                viewBox="0 0 6 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.07936 0.499451L5.39434 4.50912H0.764379L3.07936 0.499451Z"
                  fill="#757575"
                  fillOpacity="0.54"
                />
                <path
                  d="M3.07936 11.1919L5.39434 7.18223H0.764379L3.07936 11.1919Z"
                  fill="#757575"
                  fillOpacity="0.54"
                />
              </svg>
            </button>{" "}
          </section>
        </div>
        <div className="flex gap-2 place-items-center">
          {" "}
          <section className="w-14 ">
            {" "}
            <p className="text-sm font-semibold">Req. </p>{" "}
            <p className="text-sm font-semibold">Pick-up</p>{" "}
            <p className="text-sm font-semibold">Time</p>{" "}
          </section>
          <section className="">
            <button title="btn" type="button">
              <svg
                width="6"
                height="12"
                viewBox="0 0 6 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.07936 0.499451L5.39434 4.50912H0.764379L3.07936 0.499451Z"
                  fill="#757575"
                  fillOpacity="0.54"
                />
                <path
                  d="M3.07936 11.1919L5.39434 7.18223H0.764379L3.07936 11.1919Z"
                  fill="#757575"
                  fillOpacity="0.54"
                />
              </svg>
            </button>{" "}
          </section>
        </div>
        <div className="flex gap-2 place-items-center">
          {" "}
          <section className="w-14 ">
            {" "}
            <p className="text-sm font-semibold">Req. </p>{" "}
            <p className="text-sm font-semibold">Delivery</p>{" "}
            <p className="text-sm font-semibold">Time</p>{" "}
          </section>
          <section className="">
            <button title="btn" type="button">
              <svg
                width="6"
                height="12"
                viewBox="0 0 6 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.07936 0.499451L5.39434 4.50912H0.764379L3.07936 0.499451Z"
                  fill="#757575"
                  fillOpacity="0.54"
                />
                <path
                  d="M3.07936 11.1919L5.39434 7.18223H0.764379L3.07936 11.1919Z"
                  fill="#757575"
                  fillOpacity="0.54"
                />
              </svg>
            </button>{" "}
          </section>
        </div>
        <div className="flex w-16 place-items-center">
          {" "}
          <section className="">
            <p className="text-sm font-semibold">Pick-up</p>
            <p className="text-sm font-semibold">Ready</p>
          </section>
        </div>
        <div className="flex gap-2 w-22  place-items-center">
          {" "}
          <section className="">
            <p className="text-sm font-semibold">Driver</p>
          </section>
          <section className="">
            <button title="btn" type="button">
              <svg
                width="6"
                height="12"
                viewBox="0 0 6 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.07936 0.499451L5.39434 4.50912H0.764379L3.07936 0.499451Z"
                  fill="#757575"
                  fillOpacity="0.54"
                />
                <path
                  d="M3.07936 11.1919L5.39434 7.18223H0.764379L3.07936 11.1919Z"
                  fill="#757575"
                  fillOpacity="0.54"
                />
              </svg>
            </button>{" "}
          </section>
        </div>
        <div className="flex gap-2 place-items-center">
          <section className="">
            <p className="text-sm font-semibold">Status</p>
          </section>
          <section className="">
            <button title="btn" type="button">
              <svg
                width="6"
                height="12"
                viewBox="0 0 6 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.07936 0.499451L5.39434 4.50912H0.764379L3.07936 0.499451Z"
                  fill="#757575"
                  fillOpacity="0.54"
                />
                <path
                  d="M3.07936 11.1919L5.39434 7.18223H0.764379L3.07936 11.1919Z"
                  fill="#757575"
                  fillOpacity="0.54"
                />
              </svg>
            </button>{" "}
          </section>
        </div>
        <div>
          <p className="text-sm font-semibold">Tracking</p>{" "}
        </div>
      </section>
    </>
  );
}
