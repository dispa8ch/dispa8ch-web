"use client";

import SettingsCustomerNotificationsSwitch from "../_components/settings-customer-notifications-switch";

export default function CustomerNotificationsPage() {
  return (
    <div className="max-w-[982px] w-full h-full pb-10 pr-5">
      <div className="space-y-5">
        <h4 className="font-Poppins text-[25px] leading-[37.5px] font-medium">
          Customer ETA Sharing
        </h4>
        <p className="font-normal font-Poppins text-[20px] leading-[30px] text-dispa8chGray-100 max-w-[784px]">
          Turning on customer tracking will send customers a real time delivery
          tracking page with live ETA by mins. It will also show the driver
          name, profile picture and phone number to call or text the driver{" "}
        </p>

        <SettingsCustomerNotificationsSwitch
          text="Email notifications"
          value={false}
          onCheck={() => {}}
        />
        <SettingsCustomerNotificationsSwitch
          text="SMS notifications"
          value={true}
          onCheck={() => {}}
        />
        <SettingsCustomerNotificationsSwitch
          text="Show drivers phone number to customer"
          description="Customers will be able to call drivers directly"
          value={true}
          onCheck={() => {}}
        />
        <SettingsCustomerNotificationsSwitch
          text="Email delivery receipt"
          description="This will send an email to the customer with delivery details and proof of delivery after the delivery is complete"
          value={true}
          onCheck={() => {}}
        />
      </div>
    </div>
  );
}
