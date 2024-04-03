import { Theme } from "@/components/dispa8ch-ui";
import Favicon from "@/public/favicon.png";
import type { Metadata } from "next";
import "../globals.css";
import Sidebar from "./_components/sidebar";

export const metadata: Metadata = {
  title: "Dashboard | Dispa8ch",
  description:
    "Dispa8ch.io is a SaaS platform that helps facilitates the process of logistics businesses by providing services like package tracking and route optimization.",
};

/**
 * The dashboard layout will have the sidebar and the header in it
 * The header icons located at the right hand side are: Complaints for the complaints page, Notifications for the notificatioins page, Chat for the chat interface, Support for the support modal and the Google Icon for the account quick settings
 * The sidebar will have five svg button links: Analytics, Orders, Drivers, Maps and Reports
 */
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
        {/* Header goes here */}
        <Sidebar />
        {/* <main> tag wraps the `children` prop to have that consistent layout */}
        {children}
      </body>
    </Theme>
  );
}
