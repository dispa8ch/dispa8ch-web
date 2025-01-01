"use client";

import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function DeliverySettingsPage() {
  // implement client state to simulate the checked state of the switch
  const [checked, setIsChecked] = useState(false);
  // ? THIS SHOULD BE THE DEFAULT TIME SET BY APPLICATION
  const [orderTime, setOrderTime] = useState(5);

  const handleToggle = () => {
    //? this function should hit the backend and mutate some data and return back a response that will be reflected in the checked state of the switch
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="max-w-[982px] w-full h-full pb-10 pr-5">
      <h2 className="font-medium pb-3 font-poppins text-[35px] leading-[52.5px] text-black">
        Dispatch Settings
      </h2>

      <div className="flex items-start py-10 pb-16 border-b-[1px] border-dispa8chGray-100 gap-x-6">
        {/* switch component */}
        <Switch
          className="mt-2"
          // ? This data is meant to come from the backend
          checked={checked}
          onCheckedChange={handleToggle}
        />
        <div className="flex flex-col gap-y-2">
          <p className="font-normal font-Poppins text-[22px] leading-[33px] text-black">
            Auto-assign
          </p>
          <p className="font-normal font-poppins text-[20px] leading-[30px] text-dispa8chGray-100">
            Any incoming delivery order will be assigned to the best drivers{" "}
          </p>
        </div>
      </div>

      <div className="flex flex-col pt-12 pb-6 space-y-5 border-b border-dispa8chGray-100">
        <p className="font-medium font-Poppins text-[25px] leading-[37.5px]">
          Scheduled order time window
        </p>
        <p className="font-normal text-dispa8chGray-100 max-w-[820px] font-Poppins text-[20px] leading-[30px]">
          This time is used to indicate when a scheduled order will be put in
          the current order tab for dispatch. If the time is 2 hours, it means
          when the required delivery is within set timeframe, this order will be
          moved to the current order tab for dispatch{" "}
        </p>

        <div className="flex items-center gap-x-5">
          <input
            type="number"
            value={orderTime}
            onChange={(e) => setOrderTime(+e.target.value)}
            className="border outline-none border-dispa8chGray-100 rounded-[5px] p-3 w-[130px] h-[50px] text-[20px] leading-[30px] font-Poppins font-normal"
          />
          <p className="font-Poppins font-normal text-[12px] leading-[18px] text-dispa8chGray-100">
            hours
          </p>
        </div>
      </div>
    </div>
  );
}
