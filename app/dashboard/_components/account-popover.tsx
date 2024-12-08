"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { capitalize } from "@/lib";
import {
  ChevronRightIcon,
  LogOutIcon,
  MoonIcon,
  SendToBackIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const WithPadding: React.FC<React.JSX.IntrinsicElements["div"]> = ({
  className,
  ...rest
}) => {
  return <div {...rest} className={`px-4 ${className}`}></div>;
};

const themes = [
  {
    theme: "light",
    icon: SendToBackIcon,
    name: "Default",
  },
  {
    theme: "light",
    icon: SunIcon,
    name: "Light Theme",
  },
  {
    theme: "dark",
    icon: MoonIcon,
    name: "Dark Theme",
  },
] as const;

/**
 * @todo onclick handler for the log out button here;
 * @todo hook the setTheme function to the main setTheme function in @/lib
 */
const AccountPopOver: React.FC<{
  emailAddress: string;
  companyData: any;
}> = ({ emailAddress, companyData }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isOpen, setIsOpen] = useState(false);
  const isLight = theme === "light";
  function getInitials(name: string): string {
    const names = name.split(" ");
    const firstInitial = names[0][0].toUpperCase();
    const lastInitial = names[1] ? names[1][0].toUpperCase() : "";
    return firstInitial + lastInitial;
  }
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="w-12 h-12 text-white text-2xl bg-dispa8chRed-500 rounded-full">
          {companyData.contactPerson.at(0)?.toUpperCase()}
        </button>
      </PopoverTrigger>
      <PopoverContent className="font-Inter w-auto px-0 column pb-8 rounded-2xl gap-4 relative z-[60] right-2">
        <WithPadding className="w-full flex gap-4 items-end">
          <Link
            href="/dashboard/accounts"
            className="flex items-center justify-center w-12 h-12 text-white text-2xl bg-dispa8chRed-500 rounded-full"
          >
            {getInitials(companyData.contactPerson)}
          </Link>
          <div className="w-fit h-fit column gap-1">
            <h1 className="text-black/80 font-Inter_Medium text-base">
              {companyData.contactPerson}
            </h1>
            <p className="text-gray-600 font-Inter_Medium text-xs">
              {emailAddress}
            </p>
          </div>
        </WithPadding>
        <hr />
        <WithPadding className="w-full column gap-4">
          <Link href={"/settings"} className="flex items-center gap-2">
            <SettingsIcon size={20} className="stroke-gray-700" />
            <p>Settings</p>
          </Link>
          <button className="flex items-center gap-2">
            <LogOutIcon size={20} className="stroke-gray-700" />
            <p>Log Out</p>
          </button>
        </WithPadding>
        <hr />
        <WithPadding className="w-full flex gap-2 items-center">
          {isLight ? (
            <MoonIcon className="fill-gray-500 stroke-gray-500 " size={20} />
          ) : (
            <SunIcon
              className="fill-dispa8chRed-10 stroke-dispa8chRed-10 "
              size={20}
            />
          )}
          <p className="text-gray-600">Display: {capitalize(theme)}</p>
          <Popover onOpenChange={(open) => setIsOpen(open)}>
            <PopoverTrigger asChild tabIndex={1}>
              <button
                className={`ml-auto transition-[transform] duration-300 ${
                  isOpen && "rotate-90"
                }`}
              >
                <ChevronRightIcon size={20} />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-40 px-0 rounded-xl relative right-4 z-[70] ">
              <WithPadding className="w-full text-sm column gap-2 fill-gray-600 stroke-gray-600">
                {themes.map(({ icon: Icon, theme, name }, i) => (
                  <button
                    key={i}
                    onClick={() => setTheme(theme)}
                    className="w-full flex items-center gap-2"
                  >
                    <Icon className="fill-inherit stroke-inherit" size={17} />
                    <p>{name}</p>
                  </button>
                ))}
              </WithPadding>
            </PopoverContent>
          </Popover>
        </WithPadding>
      </PopoverContent>
    </Popover>
  );
};

export default AccountPopOver;
