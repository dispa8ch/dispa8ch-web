import { Theme } from "@/components/dispa8ch-ui";
import { CompanyProvider } from "@/components/CompanyContext";
import Favicon from "@/public/favicon.png";
import TwitterImage from "@/public/images/twitter-image.jpg";
import type { Metadata } from "next";
import "./globals.css";

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
  const twitter_img = `https://dispa8ch.vercel.app${TwitterImage.src}`;
  return (
    <Theme dataTheme="light" lang="en">
      <head>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content={twitter_img} />
        <meta
          name="twitter:description"
          content=' "Dispa8ch.io is a SaaS platform that helps facilitates the process of logistics businesses by providing services like package tracking and route optimization'
        />
        <meta name="twitter:title" content="Dispa8ch.io" />
        <link rel="shortcut icon" href={Favicon.src} type="image/png" />
      </head>
      <body
        className={
          "bg-white dark:bg-[#171717] transition-colors duration-500 no-scroll h-full  "
        }
      >
        <CompanyProvider>{children}</CompanyProvider>
      </body>
    </Theme>
  );
}
