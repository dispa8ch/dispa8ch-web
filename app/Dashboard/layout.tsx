import type { Metadata } from "next";
import LayoutPage from "./_components/LayoutPage";

export const metadata: Metadata = {
  title: "Dashboard | Dispa8ch",
  description:
    "Dispa8ch.io is a SaaS platform that helps facilitates the process of logistics businesses by providing services like package tracking and route optimization.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='w-full min-h-screen bg-white relative'>
      <LayoutPage />
      {children}
    </div>
  );
}
