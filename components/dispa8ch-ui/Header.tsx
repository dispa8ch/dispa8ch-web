"use client";
import { BaseButton } from "@/components/buttons";
import { getTheme, switchTheme } from "@/lib";
import { Dispa8chLogo, Dispa8chLogoMobile } from "@/public/icons";
import { MoonStarIcon, SunIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import MobileNavButtons from "./MobileNavButtons";

const links = ["/home", "#about", "#services", "/pricing"] as const;

const Header = () => {
  const menuState = useState(false);
  const [theme, setTheme] = useState<TTheme>('light')
  useEffect(() => {
    setTheme(getTheme())
  }, [])
  return (
    <>
      <header className='flex items-center bg-white/20 backdrop-blur-2xl px-6 py-5 font-Inter_Medium sticky top-0 z-30 shadow-md lg:px-8 lg:py-3 '>
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
        <section className='fit gap-3 text-sm hidden lg:flex '>
          <BaseButton>
            <Link href='/sign-up'>Signup</Link>
          </BaseButton>
          <BaseButton className='bg-white text-dispa8chRed-600 hover:bg-white/25 dark:bg-white dark:text-dispa8chRed-600 dark:hover:bg-white/70 '>
            <Link href='/login'>Login</Link>
          </BaseButton>
        </section>
        <section className="fit ml-auto bg-transparent md:ml-3 " onClick={() => setTheme(switchTheme())} >
          <button className="fit p-2 stroke-gray-900 rounded-full focus:bg-black/30 " >
            {theme === 'light' ?
              <MoonStarIcon size={26} className="stroke-inherit" /> :
              <SunIcon size={26} className="stroke-inherit" />
            }
          </button>
        </section>

        {/* Visible only on mobile */}
        <MobileNavButtons menuState={menuState} />
      </header>
      <MobileNav menuState={menuState} />
    </>
  );
};

export default Header;
