import { cn } from "@/lib/shadcn.utils";
import Link from "next/link";

interface SettingsSidebarItemProps {
  iconName: (color?: string) => JSX.Element;
  linkName: string;
  linkHref: string;
  isActive: boolean;
}

export default function SettingsSidebarItem({
  iconName,
  linkHref,
  linkName,
  isActive,
}: SettingsSidebarItemProps) {
  const Icon = iconName(isActive ? "white" : "black");
  return (
    <Link href={`/settings/${linkHref}`}>
      <div
        className={cn(
          "w-[391px] flex items-center  text-black  rounded-[5px] h-[65.3px] px-[30px] py-[18px] gap-x-[10px]",
          {
            "bg-dispa8chRed-500 text-white": isActive,
          }
        )}
      >
        {Icon}
        <span className="font-medium font-Poppins text-[20px] leading-[30px]">
          {linkName}
        </span>
      </div>
    </Link>
  );
}
