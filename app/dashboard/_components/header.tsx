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
    link: "/chat",
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

const Header = () => {
  const { companyData, isLoading, error } = useCompany();

  if (isLoading) return <p></p>;
  if (error) return <p></p>;

  if (!companyData) {
    // Display a loading state or return null until companyData is available
    return null;
  }

  return (
    <header className="z-10 flex items-center w-full gap-4 p-3 bg-white border-b h-fit font-Inter border-b-gray-300">
      <section className="gap-1 fit column">
        <h2 className="text-[#171717] text-lg font-Inter_Bold">
          {companyData.companyName}
        </h2>
        <p className="text-xs text-gray-400">Powered by Dispa8ch</p>
      </section>
      <section className="flex items-center gap-4 ml-auto text-sm fit">
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
              className="transition-all duration-500 stroke-inherit fill-inherit"
            />
            <p className="transition-all duration-500 text-inherit font-Inter_Medium">
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
                className="transition-all duration-500 stroke-inherit fill-inherit"
              />
              <p className="transition-all duration-500 text-inherit font-Inter_Medium">
                Support
              </p>
            </button>
          }
          sender={companyData.companyName}
        />
        <section className="relative w-fit h-fit font-Graphik">
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
