import { Header, Theme } from "@/components/dispa8ch-ui";
import Favicon from "@/public/favicon.png";
import type { Metadata } from "next";
import Footer from "../_components/Footer";
import "../globals.css";

export const metadata: Metadata = {
  title: "Blog | Dispa8ch",
  description:
    "Dispa8ch.io is a SaaS platform that helps facilitates the process of logistics businesses by providing services like package tracking and route optimization.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Theme dataTheme="light" lang='en'>
      <head>
        <link rel='shortcut icon' href={Favicon.src} type='image/png' />
      </head>
      <body className={"w-full h-screen bg-white relative dark:bg-[#171717] transition-colors duration-500 "}>
        <Header />
        {children}
        <Footer />
      </body>
    </Theme>
  );
}
