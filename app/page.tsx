import { Dispa8chLogo } from "@/assets/icons";
import Offers from "@/components/Offers";
import Link from "next/link";

/**
 * Red background hero section;
 */
export default function Home() {
  const links = ["home", "about", "services", "pricing"] as const;
  return (
    <>
      <header className='flex justify-between items-center bg-white px-8 py-3 font-Inter_Medium '>
        <section className='w-fit h-fit'>
          <Dispa8chLogo size={.7} />
        </section>
        <section className='w-fit h-fit flex items-center gap-12 text-base '>
          {links.map((a, i) => (
            <Link
              key={i}
              href={`/${a === 'home' ? '/' : a}`}>
              {a.toUpperCase()}
            </Link>
          ))}
        </section>
        <section className='w-fit h-fit flex gap-3 text-sm  '>
          <Link href='/sign-up'>
            <p className='bg-dispa8chRed text-white px-5 py-2 rounded-lg'>
              Signup
            </p>
          </Link>
          <Link href='/login'>
            <p className='bg-white text-dispa8chRed border border-dispa8chRed px-5 py-2 rounded-lg'>
              Login
            </p>
          </Link>
        </section>
      </header>
      <main className="w-full min-h-fit bg-white">
        <Offers />
      </main>
    </>
  );
}
