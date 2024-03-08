"use client";
import { BaseButton } from "@/components/buttons";
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
            const Comp = a.startsWith("#") ? "a" : Link;
            return (
              <Comp
                className='fit px-4 py-2 rounded-md transition-colors duration-500 hover:bg-stone-800 hover:text-stone-50 '
                key={i}
                href={`${a === "/home" ? "/" : a}`}>
                {a.slice(1).toUpperCase()}
              </Comp>
            );
          })}
        </section>
        
        <section className='w-fit h-fit gap-3 text-sm hidden lg:flex '>
          <BaseButton>
            <Link href='/sign-up'>Signup</Link>
          </BaseButton>
          <BaseButton className='bg-white text-dispa8chRed-600 hover:bg-white/25 dark:bg-white dark:text-dispa8chRed-600 dark:hover:bg-white/70 '>
            <Link href='/login'>Login</Link>
          </BaseButton>
        </section>
      </header>
      <MobileNav menuState={menuState} />
    </>
  );
};

export default Header;
