"use client";
import { Dispa8chLogo, Dispa8chLogoMobile } from "@/public/icons";
import Link from "next/link";
import { useState } from "react";
import MobileNav from "./MobileNav";
import MobileNavButtons from "./MobileNavButtons";

const links = ["/home", "#about", "#services", "/pricing"] as const;

const Header = () => {
  const menuState = useState(false);
  return (
    <>
      <header className='flex items-center bg-white/20 backdrop-blur-2xl px-6 py-3 font-Inter_Medium sticky top-0 z-30 shadow-md lg:px-8 '>
        <section className='w-fit h-fit'>
          <Dispa8chLogo
            size={0.7}
            className='hidden sm:block'
          />
          <Dispa8chLogoMobile
            size={0.75}
            className='block sm:hidden'
          />
        </section>
        <MobileNavButtons menuState={menuState} />

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
          <button className='bg-dispa8chRed-500 text-white px-8 py-2 rounded-lg'>
            <Link href='/sign-up'>Signup</Link>
          </button>
          <button className='bg-white text-dispa8chRed-500 border border-dispa8chRed-500 px-8 py-2 rounded-lg'>
            <Link href='/login'>Login</Link>
          </button>
        </section>
      </header>
      <MobileNav menuState={menuState} />
    </>
  );
};

export default Header;
