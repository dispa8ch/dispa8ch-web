"use client";
import {
  ChevronDownIcon,
  CreditCardIcon,
  HomeIcon,
  UserIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

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
] as const;

export default function MobileNav() {
  return (
    <section className='w-full h-full bg-gradient-to-b from-gray-100 to-white fixed z-50 px-6 flex flex-col justify-center items-center '>
      <section className='w-full max-w-[320px] h-fit py-10 text-white font-Inter_Medium bg-gradient-to-r from-[#FDA800CC] to-[#D1193ECC] cursor-pointer rounded-2xl p-5 column gap-5 '>
        <section className='w-full h-fit flex justify-end items-center mb-10'>
          <Link
            href={"/account"}
            className='fit'>
            <UserIcon className='w-8 h-8' />
          </Link>
        </section>

        {links.map(({ icon: Icon, name, to, sublinks }) => {
          const linkDescription = (
            <>
              <p>{name}</p>
              {Icon ? <Icon className='w-5 h-5' /> : ""}
            </>
          )

          const linkClass = `w-full h-fit flex justify-between font-EmberBd text-xl pr-1 `
          return (
            <div className="w-full h-fit column gap-3 ">
              {to ? (<Link
                href={to}
                className={linkClass}>
                {linkDescription}
              </Link>) : (<div className={linkClass}>
                {linkDescription}
              </div>)}

              {sublinks && (
                <div className="w-full h-fit p-4 space-y-4 bg-white/20 backdrop-blur-xl rounded-2xl ">
                  {sublinks.map(({name, to}) => {
                return <p>
                  <Link href={to!}>
                  {name}
                </Link>
                </p>
              })}
                </div>
              )}
            </div>
          )
        })}
      </section>
    </section>
  );
}
