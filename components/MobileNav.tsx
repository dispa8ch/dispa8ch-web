"use client";
import { Dispa8chLogoMobile } from "@/public/icons";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  CreditCardIcon,
  HomeIcon,
  UserIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import MobileLinks from "./MobileLinks";

type Props = {
  /**
   * menu is a piece of state for toggling the dropdown menu;
   */
  menuState: [boolean, Dispatch<SetStateAction<boolean>>];
};

const links: MenuLink[] = [
  {
    name: "Home",
    to: "/",
    icon: HomeIcon,
  },
  {
    name: "About",
    to: null,
    icon: ChevronDownIcon,
    sublinks: [
      {
        name: "Our Blog",
        to: "/blog",
      },
      {
        name: "Meet the Team",
        to: "/#about",
      },
    ],
  },
  {
    name: "Services",
    to: "/#services",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Pricing",
    to: "/pricing",
    icon: CreditCardIcon,
  },
];

export default function MobileNav({ menuState }: Props) {
  const [menu, setMenu] = menuState;
  return (
    <section
      className={`w-full h-full bg-gradient-to-b from-gray-100 to-white fixed top-0 z-40 px-6 column justify-around items-center  transition-all duration-500 ease-in-out ${
        !menu && "-translate-x-full"
      } lg:hidden `}>
      <section className='w-full h-fit py-3 mb-auto flex justify-between items-center'>
        <Dispa8chLogoMobile size={0.75} />
        <button onClick={() => setMenu(!menu)}>
          <XMarkIcon
            width={24}
            height={24}
          />
        </button>
      </section>
      <section className='w-full max-w-[320px] my-auto h-fit py-10 text-white font-Inter_Medium bg-gradient-to-r from-[#FDA800CC] to-[#D1193ECC] cursor-pointer rounded-2xl p-5 column gap-5 '>
        <section className='w-full h-fit flex justify-end items-center mb-10'>
          <Link
            href={"/account"}
            className='fit'>
            <UserIcon className='w-8 h-8' />
          </Link>
        </section>

        {links.map((props) => (
          <MobileLinks {...props} />
        ))}
      </section>
    </section>
  );
}
