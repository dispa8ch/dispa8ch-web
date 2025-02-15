"use client";

import { useCompany } from "@/components/providers/CompanyDataProvider";
import { cn } from "@/lib/shadcn.utils";
import { useRef, useState } from "react";
import { DEFAULT_SERVICE_TIME, ORDER_PREP_TIME } from "./_constants";
import SettingsInput from "./_components/settings-input";
import SettingsUploadImageLogo from "./_components/settings-upload-image-logo";

export default function SettingsPage() {
  const { companyData, isLoading, error } = useCompany();

  console.log(companyData);

  // ! temporary error and loading for company-name
  // Todo: Fix this piece of code before pushing to prod
  const companyName = error
    ? "Could not load"
    : isLoading
    ? "Loading..."
    : !companyData
    ? "Could not load"
    : companyData.companyName;

  return (
    <div className="max-w-[982px] w-full h-full pb-10 pr-5">
      <h2 className="font-medium pb-3 font-poppins text-[35px] border-b border-dispa8chGray-300 leading-[52.5px] text-black">
        Business Settings
      </h2>

      <div className="flex flex-col pt-10 space-y-5">
        <div className="flex flex-col gap-y-1">
          <h4 className="font-normal font-Poppins text-[25px] leading-[37.5px] text-black">
            Business details
          </h4>
          <p className="text-[20px] leading-[30px] font-Poppins font-normal text-dispa8chGray-100">
            Set your business details
          </p>
        </div>

        <BusinessSettingsOption
          description={companyName}
          title="Business Name"
          render={(isEditable) => (
            <SettingsInput
              inputType="text"
              isEditable={isEditable}
              onSubmit={(value) => console.log(value)}
              disabled={false}
              // ! There is an issue with this value
              initialValue={companyName}
            />
          )}
        />

        <BusinessSettingsOption
          title="Business Logo"
          className="pb-5"
          render={() => <SettingsUploadImageLogo />}
        />

        <div className="flex flex-col pt-6 border-t border-dispa8chGray-100 gap-y-1">
          <h4 className="font-normal font-Poppins text-[25px] leading-[37.5px] text-black">
            Service Times
          </h4>
          <p className="text-[20px] leading-[30px] font-Poppins font-normal text-dispa8chGray-100">
            Set your service times
          </p>
        </div>

        <BusinessSettingsOption
          title="Expected service time"
          description={(DEFAULT_SERVICE_TIME / 60).toString()}
          render={(isEditable) => (
            <SettingsInput
              inputType="number"
              isEditable={isEditable}
              onSubmit={(value) => console.log(value)}
              disabled={true}
              // ! There is an issue with this value
              // ? It should be coming from the backend
              initialValue={"60"}
            />
          )}
        />
        <BusinessSettingsOption
          title="Order prep time"
          description={(ORDER_PREP_TIME / 60).toString()}
          render={(isEditable) => (
            <SettingsInput
              inputType="number"
              isEditable={isEditable}
              onSubmit={(value) => console.log(value)}
              disabled={true}
              // ! There is an issue with this value
              // ? It should be coming from the backend
              initialValue={"20"}
            />
          )}
        />
      </div>
    </div>
  );
}

interface BusinessSettingsOptionProps {
  title: string;
  description?: string;
  className?: string;
  render: (value: boolean) => JSX.Element;
}

function BusinessSettingsOption(props: BusinessSettingsOptionProps) {
  const [isEditable, setIsEditable] = useState(false);
  const toggleEdit = () => setIsEditable((prev) => !prev);
  return (
    <div
      className={cn("flex items-center justify-between", props.className, {
        "items-start": isEditable,
      })}
    >
      <div className="flex flex-col gap-y-1">
        <p className="font-poppins font-normal text-[20px] leading-[30px] text-black">
          {props.title}
        </p>
        {isEditable ? (
          props.render(isEditable)
        ) : (
          <p className="font-normal font-poppins text-[20px] leading-[30px] text-dispa8chGray-100">
            {props.description}
          </p>
        )}
      </div>
      {isEditable ? (
        <button className="cursor-pointer" onClick={toggleEdit}>
          <CloseButtonIcon />
        </button>
      ) : (
        <button
          onClick={toggleEdit}
          className="font-normal text-dispa8chRed-10 font-poppins text-[17px] leading-[25.5px]"
        >
          Edit
        </button>
      )}
    </div>
  );
}

const CloseButtonIcon = () => {
  return (
    <svg
      width="29"
      height="25"
      viewBox="0 0 29 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="29" height="25" rx="3" fill="#757575" />
      <path
        d="M15.1746 12.9999L20.4246 7.75824C20.5815 7.60132 20.6697 7.3885 20.6697 7.16658C20.6697 6.94466 20.5815 6.73183 20.4246 6.57491C20.2677 6.41799 20.0549 6.32983 19.833 6.32983C19.611 6.32983 19.3982 6.41799 19.2413 6.57491L13.9996 11.8249L8.75796 6.57491C8.60104 6.41799 8.38821 6.32983 8.16629 6.32983C7.94437 6.32983 7.73154 6.41799 7.57462 6.57491C7.4177 6.73183 7.32955 6.94466 7.32955 7.16658C7.32955 7.3885 7.4177 7.60132 7.57462 7.75824L12.8246 12.9999L7.57462 18.2416C7.49652 18.319 7.43452 18.4112 7.39221 18.5128C7.34991 18.6143 7.32812 18.7232 7.32812 18.8332C7.32812 18.9433 7.34991 19.0522 7.39221 19.1537C7.43452 19.2553 7.49652 19.3474 7.57462 19.4249C7.65209 19.503 7.74426 19.565 7.84581 19.6073C7.94736 19.6496 8.05628 19.6714 8.16629 19.6714C8.2763 19.6714 8.38522 19.6496 8.48677 19.6073C8.58832 19.565 8.68049 19.503 8.75796 19.4249L13.9996 14.1749L19.2413 19.4249C19.3188 19.503 19.4109 19.565 19.5125 19.6073C19.614 19.6496 19.7229 19.6714 19.833 19.6714C19.943 19.6714 20.0519 19.6496 20.1534 19.6073C20.255 19.565 20.3472 19.503 20.4246 19.4249C20.5027 19.3474 20.5647 19.2553 20.607 19.1537C20.6493 19.0522 20.6711 18.9433 20.6711 18.8332C20.6711 18.7232 20.6493 18.6143 20.607 18.5128C20.5647 18.4112 20.5027 18.319 20.4246 18.2416L15.1746 12.9999Z"
        fill="white"
      />
      <rect width="29" height="25" rx="3" fill="#757575" />
      <path
        d="M15.1746 12.9999L20.4246 7.75824C20.5815 7.60132 20.6697 7.3885 20.6697 7.16658C20.6697 6.94466 20.5815 6.73183 20.4246 6.57491C20.2677 6.41799 20.0549 6.32983 19.833 6.32983C19.611 6.32983 19.3982 6.41799 19.2413 6.57491L13.9996 11.8249L8.75796 6.57491C8.60104 6.41799 8.38821 6.32983 8.16629 6.32983C7.94437 6.32983 7.73154 6.41799 7.57462 6.57491C7.4177 6.73183 7.32955 6.94466 7.32955 7.16658C7.32955 7.3885 7.4177 7.60132 7.57462 7.75824L12.8246 12.9999L7.57462 18.2416C7.49652 18.319 7.43452 18.4112 7.39221 18.5128C7.34991 18.6143 7.32812 18.7232 7.32812 18.8332C7.32812 18.9433 7.34991 19.0522 7.39221 19.1537C7.43452 19.2553 7.49652 19.3474 7.57462 19.4249C7.65209 19.503 7.74426 19.565 7.84581 19.6073C7.94736 19.6496 8.05628 19.6714 8.16629 19.6714C8.2763 19.6714 8.38522 19.6496 8.48677 19.6073C8.58832 19.565 8.68049 19.503 8.75796 19.4249L13.9996 14.1749L19.2413 19.4249C19.3188 19.503 19.4109 19.565 19.5125 19.6073C19.614 19.6496 19.7229 19.6714 19.833 19.6714C19.943 19.6714 20.0519 19.6496 20.1534 19.6073C20.255 19.565 20.3472 19.503 20.4246 19.4249C20.5027 19.3474 20.5647 19.2553 20.607 19.1537C20.6493 19.0522 20.6711 18.9433 20.6711 18.8332C20.6711 18.7232 20.6493 18.6143 20.607 18.5128C20.5647 18.4112 20.5027 18.319 20.4246 18.2416L15.1746 12.9999Z"
        fill="white"
      />
    </svg>
  );
};
