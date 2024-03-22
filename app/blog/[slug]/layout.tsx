import { Theme } from "@/components/dispa8ch-ui";
import Favicon from "@/public/favicon.png";
import type { Metadata } from "next";
import "../../globals.css";

/**
 * @todo This metadata should be dynamic and set when a user posts a new blog
 */
export const metadata: Metadata = {
  title: "Welcome to Dispa8ch",
  description:
    "Dispa8ch.io is a SaaS platform that helps facilitates the process of logistics businesses by providing services like package tracking and route optimization.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Theme dataTheme="light" lang='en'>
      <head>
        <link rel='shortcut icon' href={Favicon.src} type='image/png' />
      </head>
      <body className={"w-full min-h-screen bg-white relative dark:bg-[#171717] "}>
        {children}
      </body>
    </Theme>
  );
}
