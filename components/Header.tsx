'use client'
import { Dispa8chLogo, Dispa8chLogoMobile } from "@/public/icons";
import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Header = () => {
  const links = ["/home", "#about", "#services", "/pricing"] as const;

  return (
    <header className='flex items-center bg-[rgb(255,255,255,.2)] backdrop-blur-2xl px-6 py-3 font-Inter_Medium sticky top-0 z-30 shadow-md lg:px-8 '>
      <section className='w-fit h-fit'>
        <Dispa8chLogo size={0.7} className="hidden lg:block"  />
        <Dispa8chLogoMobile size={0.75} className="block sm:hidden"  />
      </section>
      <button onClick={() => 'open menu'} className="ml-auto flex gap-3 lg:hidden" >
        <UserCircleIcon width={24} height={24} />
        <Bars3Icon
          width={24}
          height={24}
        />
      </button>
      <section className='fit mx-auto items-center gap-12 text-base font-Graphik hidden lg:flex '>
        {links.map((a, i) => {
        const LinkType = a.startsWith('#') ? "a" : Link;
        return   <LinkType
            key={i}
            href={`${a === "/home" ? "/" : a}`}>
            {a.slice(1).toUpperCase()}
          </LinkType>
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
