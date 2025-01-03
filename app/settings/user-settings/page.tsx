"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormEvent, ReactEventHandler, ReactNode, useState } from "react";
import { cn } from "@/lib/shadcn.utils";

type Roles = "admin" | "dispatch_Manager" | "dispatcher" | "staff";

export default function UserSettingsPage() {
  return (
    <div className="w-full h-full px-5 pb-10 ">
      <div className="flex items-end justify-between w-full mb-10">
        <p className="font-medium font-Poppins text-[35px] leading-[52.5px] text-black">
          Users
        </p>
        <InviteUserDialog>
          <button className="rounded-[5px] py-[11px]  w-[188px] h-[53px] bg-dispa8chRed-500 font-Poppins font-semibold text-[20px] leading-[30px] text-white">
            Invite User
          </button>
        </InviteUserDialog>
      </div>
      <div className="flex items-center px-5 space-x-3 py-2 rounded-[5px] border-dispa8chGray-100 border-[0.5px] w-[345px] h-[42px]">
        <input
          placeholder="Search"
          type="text"
          className="w-full outline-none placeholder:text-[17px] placeholder:font-Poppins placeholder:leading-[25.5px] placeholder:text-dispa8chGray-100 focus:outline-none"
        />
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.65077 9.61839C2.62063 10.5893 3.91219 11.1722 5.28212 11.2572C6.65206 11.3422 8.00579 10.9234 9.0883 10.0798L12.813 13.8034C12.9451 13.931 13.122 14.0016 13.3057 14C13.4893 13.9984 13.665 13.9247 13.7949 13.7949C13.9247 13.6651 13.9984 13.4895 14 13.3059C14.0016 13.1223 13.931 12.9454 13.8034 12.8134L10.0787 9.08974C10.96 7.95904 11.3766 6.53484 11.2437 5.10758C11.1107 3.68032 10.4382 2.35751 9.3632 1.40894C8.2882 0.460365 6.89174 -0.0425279 5.4586 0.00282059C4.02546 0.0481691 2.66361 0.638344 1.65077 1.65298C1.12743 2.1759 0.712276 2.79678 0.429031 3.48015C0.145787 4.16352 0 4.89598 0 5.63569C0 6.3754 0.145787 7.10786 0.429031 7.79122C0.712276 8.47459 1.12743 9.09547 1.65077 9.61839ZM2.64113 2.64446C3.33353 1.95228 4.24457 1.52152 5.21904 1.42556C6.19351 1.3296 7.17111 1.57439 7.98529 2.11821C8.79947 2.66203 9.39985 3.47124 9.68414 4.40798C9.96842 5.34471 9.91903 6.35101 9.54438 7.25542C9.16972 8.15983 8.49298 8.90639 7.62946 9.36792C6.76594 9.82945 5.76906 9.97738 4.80867 9.78651C3.84828 9.59564 2.9838 9.07779 2.36251 8.32117C1.74122 7.56455 1.40157 6.61598 1.40142 5.63709C1.3995 5.08083 1.5081 4.52974 1.72091 4.01577C1.93372 3.50181 2.24651 3.03521 2.64113 2.64306V2.64446Z"
            fill="#757575"
          />
        </svg>
      </div>
    </div>
  );
}

const InviteUserDialog = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<Roles>("admin");

  const handleRoleChange = (value: Roles) => {
    setRole(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[1005px]   rounded-[5px]">
        <DialogHeader className="w-full">
          <div className="flex items-center justify-center">
            <DialogTitle className=" font-semibold font-Poppins text-[30px] text-center leading-[45px] text-black">
              Invite User
            </DialogTitle>
            <div className="absolute right-7">
              <ModalCloseButton />
            </div>
          </div>
          <form className="w-full pt-5 space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-2">
              <label className="font-normal font-Poppins text-[20px] leading-[30px] text-black">
                Email
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="border outline-none border-dispa8chGray-100 rounded-[5px] w-full p-3"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="font-normal font-Poppins text-[20px] leading-[30px] text-black">
                Phone number
              </label>
              <div className="border flex items-center gap-x-3  border-dispa8chGray-100 rounded-[5px] w-full p-3">
                <span className="font-normal font-Poppins text-[18px] leading-[27px] text-black">
                  +234
                </span>
                <input
                  type="number"
                  placeholder="123456789"
                  className="w-full outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <p className="font-normal font-Poppins text-[20px] leading-[30px] text-black">
                Role
              </p>
              <div className="space-y-5">
                <label
                  htmlFor="admin"
                  className={cn(
                    "px-4 py-7 block border border-dispa8chGray-100 rounded-[5px] p-3 cursor-pointer",
                    {
                      "border-dispa8chRed-500": role === "admin",
                    }
                  )}
                >
                  <input
                    id="admin"
                    type="radio"
                    name="option"
                    value="option1"
                    className="hidden"
                    checked={role === "admin"}
                    onChange={() => handleRoleChange("admin")}
                  />
                  <div className="flex items-center gap-x-4 ">
                    {role === "admin" ? (
                      <OptionsEllipseActive />
                    ) : (
                      <OptionsEllipse />
                    )}
                    <div className="flex flex-col ">
                      <span className="font-normal font-Poppins text-[18px] leading-[27px] text-black">
                        Admin
                      </span>
                      <span className="font-normal font-Poppins text-[15px] leading-[22.5px] text-black">
                        Same access as the owner
                      </span>
                    </div>
                  </div>
                </label>

                <label
                  htmlFor="dispatch_Manager"
                  className={cn(
                    "px-4 py-7 block border border-dispa8chGray-100 rounded-[5px] p-3 cursor-pointer",
                    {
                      "border-dispa8chRed-500": role === "dispatch_Manager",
                    }
                  )}
                >
                  <input
                    id="dispatch_Manager"
                    type="radio"
                    name="option"
                    value="dispatch_Manager"
                    className="hidden"
                    checked={role === "dispatch_Manager"}
                    onChange={() => handleRoleChange("dispatch_Manager")}
                  />
                  <div className="flex items-center gap-x-4 ">
                    {role === "dispatch_Manager" ? (
                      <OptionsEllipseActive />
                    ) : (
                      <OptionsEllipse />
                    )}
                    <div className="flex flex-col ">
                      <span className="font-normal font-Poppins text-[18px] leading-[27px] text-black">
                        Dispatch Manager
                      </span>
                      <span className="font-normal font-Poppins text-[15px] leading-[22.5px] text-black">
                        Can assign orders and make changes on the order{" "}
                      </span>
                    </div>
                  </div>
                </label>

                <label
                  htmlFor="dispatcher"
                  className={cn(
                    "px-4 py-7 block border border-dispa8chGray-100 rounded-[5px] p-3 cursor-pointer",
                    {
                      "border-dispa8chRed-500": role === "dispatcher",
                    }
                  )}
                >
                  <input
                    id="dispatcher"
                    type="radio"
                    name="option"
                    value="dispatcher"
                    className="hidden"
                    checked={role === "dispatcher"}
                    onChange={() => handleRoleChange("dispatcher")}
                  />
                  <div className="flex items-center gap-x-4 ">
                    {role === "dispatcher" ? (
                      <OptionsEllipseActive />
                    ) : (
                      <OptionsEllipse />
                    )}
                    <div className="flex flex-col ">
                      <span className="font-normal font-Poppins text-[18px] leading-[27px] text-black">
                        Dispatcher
                      </span>
                      <span className="font-normal font-Poppins text-[15px] leading-[22.5px] text-black">
                        Can assign orders
                      </span>
                    </div>
                  </div>
                </label>

                <label
                  htmlFor="staff"
                  className={cn(
                    "px-4 py-7 block border border-dispa8chGray-100 rounded-[5px] p-3 cursor-pointer",
                    {
                      "border-dispa8chRed-500": role === "staff",
                    }
                  )}
                >
                  <input
                    id="staff"
                    type="radio"
                    name="option"
                    value="staff"
                    className="hidden"
                    checked={role === "staff"}
                    onChange={() => handleRoleChange("staff")}
                  />
                  <div className="flex items-center gap-x-4 ">
                    {role === "staff" ? (
                      <OptionsEllipseActive />
                    ) : (
                      <OptionsEllipse />
                    )}
                    <div className="flex flex-col ">
                      <span className="font-normal font-Poppins text-[18px] leading-[27px] text-black">
                        Staff
                      </span>
                      <span className="font-normal font-Poppins text-[15px] leading-[22.5px] text-black">
                        Can mark orders as ready
                      </span>
                    </div>
                  </div>
                </label>

                {/* <label className="block border border-dispa8chGray-100 rounded-[5px] p-3 cursor-pointer">
                  <input
                    type="radio"
                    name="option"
                    value="option2"
                    className="hidden"
                  />
                  <span className="font-normal font-Poppins text-[18px] leading-[27px] text-black">
                    Option 2
                  </span>
                </label>
                <label className="block border border-dispa8chGray-100 rounded-[5px] p-3 cursor-pointer">
                  <input
                    type="radio"
                    name="option"
                    value="option3"
                    className="hidden"
                  />
                  <span className="font-normal font-Poppins text-[18px] leading-[27px] text-black">
                    Option 3
                  </span>
                </label>
                <label className="block border border-dispa8chGray-100 rounded-[5px] p-3 cursor-pointer">
                  <input
                    type="radio"
                    name="option"
                    value="option4"
                    className="hidden"
                  />
                  <span className="font-normal font-Poppins text-[18px] leading-[27px] text-black">
                    Option 4
                  </span>
                </label> */}
              </div>
            </div>
            <div className="flex items-center justify-end pt-5">
              <button className="rounded-[2px] bg-dispa8chRed-500 w-[144px] h-[39px] text-white font-Poppins font-medium text-[20px] leading-[30px]">
                Add user
              </button>
            </div>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

const ModalCloseButton = () => {
  return (
    <DialogPrimitive.Close className="rounded-[3px] focus:outline-none  disabled:pointer-events-none data-[state=open]:bg-dispa8chRed-500 bg-dispa8chRed-500 text-white data-[state=open]:text-white p-1 ">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.1746 9.99991L16.4246 4.75824C16.5815 4.60132 16.6697 4.3885 16.6697 4.16658C16.6697 3.94466 16.5815 3.73183 16.4246 3.57491C16.2677 3.41799 16.0549 3.32983 15.833 3.32983C15.611 3.32983 15.3982 3.41799 15.2413 3.57491L9.99962 8.82491L4.75796 3.57491C4.60104 3.41799 4.38821 3.32983 4.16629 3.32983C3.94437 3.32983 3.73154 3.41799 3.57462 3.57491C3.4177 3.73183 3.32955 3.94466 3.32955 4.16658C3.32955 4.3885 3.4177 4.60132 3.57462 4.75824L8.82462 9.99991L3.57462 15.2416C3.49652 15.319 3.43452 15.4112 3.39221 15.5128C3.34991 15.6143 3.32812 15.7232 3.32812 15.8332C3.32812 15.9433 3.34991 16.0522 3.39221 16.1537C3.43452 16.2553 3.49652 16.3474 3.57462 16.4249C3.65209 16.503 3.74426 16.565 3.84581 16.6073C3.94736 16.6496 4.05628 16.6714 4.16629 16.6714C4.2763 16.6714 4.38522 16.6496 4.48677 16.6073C4.58832 16.565 4.68049 16.503 4.75796 16.4249L9.99962 11.1749L15.2413 16.4249C15.3188 16.503 15.4109 16.565 15.5125 16.6073C15.614 16.6496 15.7229 16.6714 15.833 16.6714C15.943 16.6714 16.0519 16.6496 16.1534 16.6073C16.255 16.565 16.3472 16.503 16.4246 16.4249C16.5027 16.3474 16.5647 16.2553 16.607 16.1537C16.6493 16.0522 16.6711 15.9433 16.6711 15.8332C16.6711 15.7232 16.6493 15.6143 16.607 15.5128C16.5647 15.4112 16.5027 15.319 16.4246 15.2416L11.1746 9.99991Z"
          fill="white"
        />
      </svg>

      <span className="sr-only">Close</span>
    </DialogPrimitive.Close>
  );
};

const OptionsEllipse = () => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16.9995" cy="17" r="15.5" stroke="black" stroke-width="3" />
    </svg>
  );
};

const OptionsEllipseActive = () => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16.9995" cy="17" r="12" stroke="#D1193E" stroke-width="10" />
    </svg>
  );
};
