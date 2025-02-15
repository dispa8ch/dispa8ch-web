"use switch";

import { NotificationsSettingsSwitch } from "@/components/inputs/notifications-settings-switch";

interface Props {
  text: string;
  description?: string;
  value: boolean;
  onCheck: (value: boolean) => void;
}

export default function SettingsCustomerNotificationsSwitch(props: Props) {
  return (
    <div className="flex items-center gap-x-8">
      <NotificationsSettingsSwitch
        checked={props.value}
        onCheckedChange={props.onCheck}
      />
      <div className="flex flex-col mt-3 gap-y-3">
        <p className="font-normal font-Poppins text-[22px] leading-[33px] text-black">
          {props.text}
        </p>
        <p className="max-w-[663px] font-normal font-Poppins text-[20px] text-dispa8chGray-100 leading-[30px]">
          {props.description}
        </p>
      </div>
    </div>
  );
}
