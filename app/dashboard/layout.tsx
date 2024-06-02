import type { Metadata } from "next";
import "../globals.css";
import Header from "./_components/header";
import Sidebar from "./_components/sidebar";

export const metadata: Metadata = {
  title: "Dashboard | Dispa8ch",
  description:
    "Dispa8ch.io is a SaaS platform that helps facilitates the process of logistics businesses by providing services like package tracking and route optimization.",
};
//overflow-clip
/**
 * All child routes will go into <main>
 * @todo get the signed in user and change the emailAddress
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='w-full h-screen flex overflow-clip '>
      <Sidebar />
      <section className='flex-1 column'>
        <Header emailAddress={"michthebrand@gmail.com"} />
        <main className='bg-transparent flex-1'>{children}</main>
      </section>
    </section>
  );
}
