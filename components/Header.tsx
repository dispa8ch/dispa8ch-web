"use client";
import { Dispa8chLogo, Dispa8chLogoMobile } from "@/public/icons";
import {
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

const MobileNavButtons = () => {
  const buttons = [
    {
      icon: UserCircleIcon,
      onClick: () => "",
    },
    {
      icon: Bars3Icon,
      onClick: () => setMenu(!menu),
    },
  ] as const;
  const [menu, setMenu] = useState(false);
  return (
    <section className='fit ml-auto flex gap-3 lg:hidden'>
      {buttons.map(({ icon: Button, onClick }) => (
        <button
          className={`${!menu ? "block" : "hidden"}`}
          onClick={onClick}>
          <Button
            width={24}
            height={24}
          />
        </button>
      ))}
      <button
        onClick={() => setMenu(!menu)}
        className={`${menu ? "block" : "hidden"}`}>
        <XMarkIcon
          width={24}
          height={24}
        />
      </button>
    </section>
  );
};

const links = ["/home", "#about", "#services", "/pricing"] as const;

const Header = () => {
  return (
    <header className='flex items-center bg-[rgb(255,255,255,.2)] backdrop-blur-2xl px-6 py-3 font-Inter_Medium sticky top-0 z-30 shadow-md lg:px-8 '>
      <section className='w-fit h-fit'>
        <Dispa8chLogo
          size={0.7}
          className='hidden lg:block'
        />
        <Dispa8chLogoMobile
          size={0.75}
          className='block sm:hidden'
        />
      </section>
      <MobileNavButtons />

      {/* Visible only on desktops */}
      <section className='fit mx-auto items-center gap-12 text-base font-Graphik hidden lg:flex '>
        {links.map((a, i) => {
          const LinkType = a.startsWith("#") ? "a" : Link;
          return (
            <LinkType
              key={i}
              href={`${a === "/home" ? "/" : a}`}>
              {a.slice(1).toUpperCase()}
            </LinkType>
          );
        })}
      </section>
      <section className='w-fit h-fit gap-3 text-sm hidden lg:flex '>
        <Link href='/sign-up'>
          <p className='bg-dispa8chRed-500 text-white px-8 py-2 rounded-lg'>
            Signup
          </p>
        </Link>
        <Link href='/login'>
          <p className='bg-white text-dispa8chRed-500 border border-dispa8chRed-500 px-8 py-2 rounded-lg'>
            Login
          </p>
        </Link>
      </section>
    </header>
  );
};

export default Header;
