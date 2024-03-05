import "./globals.css";
import type { Metadata } from "next";
import Favicon from "@/public/favicon.png";
import TwitterImage from "@/public/images/twitter-image.jpg";

// Twitter card validator tags
//<meta name="twitter:site" content="@nytimesbits" />
//<meta name="twitter:creator" content="@nickbilton" />

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
    <html lang='en'>
      <head>
        <meta name='twitter:card' content='summary' />

        <meta name='twitter:image' content={twitter_img} />
        <meta
          name='twitter:description'
          content=' "Dispa8ch.io is a SaaS platform that helps facilitates the process of logistics businesses by providing services like package tracking and route optimization'
        />
        <meta name='twitter:title' content='Dispa8ch.io' />

        <link rel='shortcut icon' href={Favicon.src} type='image/png' />
      </head>
      <body className={"w-full min-h-screen bg-white relative "}>
        {children}
      </body>
    </html>
  );
}
