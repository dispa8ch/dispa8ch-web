"use client";

import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import {
  BellDotIcon,
  MessageCircleMore,
  MessageSquareTextIcon,
} from "lucide-react";
import Link from "next/link";
import AccountPopOver from "./account-popover";
import SupportDialog from "./support-dialog";
import { useEffect, useState } from "react";
import { useCompany } from "@/components/providers/CompanyDataProvider";

const menubuttons = [
  {
    name: "Complaints",
    link: "/dashboard/complaints",
    icon: MessageSquareTextIcon,
  },
  {
    name: "Notifications",
    link: "/dashboard/notifications",
    icon: BellDotIcon,
  },
  {
    name: "Chatbox",
    link: "/dashboard/chat",
    icon: MessageCircleMore,
  },
] as const;

type CompanyData = {
  companyName: string;
  email: string;
};

type HeaderProps = {
  emailAddress: string;
};

const Header: React.FC<HeaderProps> = () => {
  const { companyData, isLoading, error } = useCompany();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!companyData) {
    // Display a loading state or return null until companyData is available
    return null;
  }

  return (
    <header className="w-full h-fit p-3 font-Inter z-10 bg-white border-b border-b-gray-300 flex items-center gap-4">
      <section className="fit column gap-1">
        <h2 className="text-[#171717] text-lg font-Inter_Bold">
          {companyData.companyName}
        </h2>
        <p className="text-gray-400 text-xs">Powered by Dispa8ch</p>
      </section>
      <section className="fit ml-auto text-sm flex items-center gap-4">
        {menubuttons.map(({ icon: Icon, name, link }, i) => (
          <Link
            href={link}
            key={i}
            className="fit column items-center justify-center gap-0.5 text-gray-600 fill-none stroke-[#171717] hover:text-dispa8chRed-500 hover:stroke-dispa8chRed-500"
          >
            <Icon
              width={24}
              height={24}
              strokeWidth={2.4}
              className="stroke-inherit fill-inherit transition-all duration-500"
            />
            <p className="text-inherit font-Inter_Medium transition-all duration-500">
              {name}
            </p>
          </Link>
        ))}
        <SupportDialog
          trigger={
            <button className="fit column items-center justify-center gap-0.5 text-gray-600 fill-none stroke-[#171717] hover:text-dispa8chRed-500 hover:stroke-dispa8chRed-500">
              <QuestionMarkCircleIcon
                width={24}
                height={24}
                strokeWidth={2.4}
                className="stroke-inherit fill-inherit transition-all duration-500"
              />
              <p className="text-inherit font-Inter_Medium transition-all duration-500">
                Support
              </p>
            </button>
          }
          sender={companyData.companyName}
        />
        <section className="w-fit h-fit font-Graphik relative">
          <AccountPopOver
            companyData={companyData}
            emailAddress={companyData.email}
          />
        </section>
      </section>
    </header>
  );
};

export default Header;
