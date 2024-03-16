"use client";
import { Button } from "@/components/ui/button";
import { Dispa8chLogoMobile } from "@/public/icons";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  CreditCardIcon,
  HomeIcon,
  UserIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import MobileLinks from "./MobileLinks";

type Props = {
  /**
   * menuState is a piece of state for toggling the sidebar on mobile;
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
        to: "/blogs",
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

const navigationStack: CallableFunction[] = [] 

export default function MobileNav({ menuState }: Props) {
  const [menu, setMenu] = menuState;
  const btnSelector = `button.close-menu`;
  const router = useRouter()
  return (
    <section
      className={`w-full h-full bg-white/20 backdrop-blur-2xl fixed top-0 z-40 px-6 column justify-around items-center  transition-all duration-500 ease-in-out ${
        !menu && "-translate-x-full"
      } lg:hidden `}
      onTransitionEnd={({ currentTarget }) => {
        if (menu)
          currentTarget
            .querySelector<HTMLButtonElement>(`${btnSelector}`)
            ?.focus();
        else navigationStack.pop()?.()
      }}>
      <section className='w-full h-fit py-3 mb-auto flex justify-between items-center'>
        <Dispa8chLogoMobile size={0.75} />
        <Button
          variant={"ghost"}
          onClick={() => setMenu(!menu)}
          className='close-menu p-0'>
          <XMarkIcon
            width={24}
            height={24}
          />
        </Button>
      </section>
      <section
        className='w-full max-w-[320px] my-auto h-fit py-10 text-white font-Inter_Medium bg-gradient-to-r from-[#FDA800CC] to-[#D1193ECC] cursor-pointer rounded-2xl p-5 column gap-5 '>
        <section className='w-full h-fit flex justify-end items-center mb-10'>
          <button
            onClick={() => {
              navigationStack.push(() => router.push('/account'))
              setMenu(false)  
            }}
            className='fit'>
            <UserIcon className='w-8 h-8' />
          </button>
        </section>

        {links.map((props, i) => (
          <MobileLinks
            {...props}
            key={i}
            setMenu={setMenu}
            navigationStack={navigationStack}
          />
        ))}
      </section>
    </section>
  );
}
