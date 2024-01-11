import { Dispa8chLogo } from "@/assets/icons";
import Link from "next/link";

export default function Home() {
  const links = ['home', 'about',  'services', 'pricing']
  return (
    <>
    <header className="flex justify-between items-center bg-white px-6 py-3 font-Circular_Light " >
      <section className="w-fit h-fit" >
        <Dispa8chLogo size={1.1} />
      </section>
      <section className="w-fit h-fit flex items-center gap-4">
        {links.map((a, i) => (
          <Link key={i} href={`/${a}`}>
            {a.toUpperCase()}
          </Link>
        ))}
      </section>
      <section className="w-fit h-fit flex-gap-3">
        <Link href="/sign-up">
          <p className="bg-dispa8chRed text-white px-4 py-2 rounded-md">Signup</p>
        </Link>
        <Link href="/login">
          <p className="bg-white text-dispa8chRed border border-dispa8chRed px-4 py-2 rounded-md">Login</p>
        </Link>
      </section>
    </header>
    </>
  )
}
