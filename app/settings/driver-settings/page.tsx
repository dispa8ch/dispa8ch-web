"use client";

import { NotificationsSettingsSwitch } from "@/components/inputs/notifications-settings-switch";
import SettingsCustomerNotificationsSwitch from "../_components/settings-customer-notifications-switch";

export default function RiderSettingsPage() {
  return (
    <div className="px-5">
      <h4 className="font-medium font-Poppins text-[25px] leading-[37.5px] text-black">
        Rider Payment{" "}
        <span className="font-normal  font-Poppins text-[25px] leading-[37.5px]">
          (
        </span>
        <span className="font-bold line-through font-Poppins text-[25px] leading-[37.5px]">
          N
        </span>
        <span className="font-normal  font-Poppins text-[25px] leading-[37.5px]">
          )
        </span>
      </h4>

      <p className="font-Poppins text-[20px] leading-[30px] text-dispa8chGray-100 font-normal mt-2 max-w-[783px]">
        This shows how much money a driver will be paid per delivery for
        calculating the end of the day due{" "}
      </p>

      <div className="flex flex-col mt-12 gap-y-10">
        <div className="flex items-start gap-x-7 ">
          <NotificationsSettingsSwitch
            checked={true}
            onCheckedChange={() => {}}
            // description="Per delivery"
            // text="Per delivery"
          />
          <div className="flex flex-col gap-y-3">
            <p className="font-medium font-Poppins text-[22px] leading-[33px] text-black">
              Per delivery
            </p>
            <div className="flex items-center gap-x-7">
              <input
                type="number"
                placeholder="10"
                className="border-[0.5px] border-dispa8chGray-100 text-dispa8chGray-100 font-Poppins font-normal text-[20px] leading-[30px] p-2 px-4 w-[86px] h-[43px] outline-none focus:outline-none rounded-[5px]"
              />
              <p className="text-dispa8chGray-100 font-Poppins font-normal text-[18px] leading-[27px]">
                /Order
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-x-7 ">
          <NotificationsSettingsSwitch
            checked={false}
            onCheckedChange={() => {}}
            // description="Per delivery"
            // text="Per delivery"
          />
          <div className="flex flex-col gap-y-3">
            <p className="font-medium font-Poppins text-[22px] leading-[33px] text-black">
              Per distance (pickup to delivery distances)
            </p>
          </div>
        </div>

        <div className="flex items-start gap-x-7 ">
          <NotificationsSettingsSwitch
            checked={true}
            onCheckedChange={() => {}}
            // description="Per delivery"
            // text="Per delivery"
          />
          <div className="flex flex-col gap-y-3">
            <p className="font-medium font-Poppins text-[22px] leading-[33px] text-black">
              % delivery fee{" "}
            </p>
            <input
              type="number"
              placeholder="100"
              className="border-[0.5px] border-dispa8chGray-100 text-dispa8chGray-100 font-Poppins font-normal text-[20px] leading-[30px] p-2 px-4 w-[86px] h-[43px] outline-none focus:outline-none rounded-[5px]"
            />
          </div>
        </div>

        <div className="flex items-start gap-x-7 ">
          <NotificationsSettingsSwitch
            checked={true}
            onCheckedChange={() => {}}
            // description="Per delivery"
            // text="Per delivery"
          />
          <div className="flex flex-col gap-y-3">
            <p className="font-medium font-Poppins text-[22px] leading-[33px] text-black">
              % Tips{" "}
            </p>
            <input
              type="number"
              placeholder="100"
              className="border-[0.5px] border-dispa8chGray-100 text-dispa8chGray-100 font-Poppins font-normal text-[20px] leading-[30px] p-2 px-4 w-[86px] h-[43px] outline-none focus:outline-none rounded-[5px]"
            />
          </div>
        </div>
      </div>

      <div className="font-normal font-Poppins text-[20px] leading-[30px] text-dispa8chGray-100 pt-10 pb-5 border-b w-full border-dispa8chGray-100 max-w-[900px]">
        Total pay = 10 orders/delivery + 100% of delivery fees + 100% of tips
      </div>

      <div className="flex items-start py-8 gap-x-7 ">
        <NotificationsSettingsSwitch
          checked={false}
          onCheckedChange={() => {}}
        />
        <p className="font-medium font-Poppins text-[22px] leading-[33px] text-black">
          Show earning info to drivers before they accept the order
        </p>
      </div>
    </div>
  );
}
