'use client'
import { Dispa8chLogo } from "@/public/icons";
import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Header = () => {
  const links = ["home", "about", "services", "pricing"] as const;

  return (
    <header className='flex justify-between items-center bg-white px-6 py-3 font-Inter_Medium lg:px-8 '>
      <section className='w-fit h-fit'>
        <Dispa8chLogo size={0.7} />
      </section>
      <button onClick={() => 'open menu'} className="flex gap-3 lg:hidden" >
        <UserCircleIcon width={24} height={24} />
        <Bars3Icon
          width={24}
          height={24}
        />
      </button>
      <section className='w-fit h-fit items-center gap-12 text-base font-Graphik hidden lg:flex '>
        {links.map((a, i) => (
          <Link
            key={i}
            href={`/${a === "home" ? "/" : a}`}>
            {a.toUpperCase()}
          </Link>
        ))}
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
