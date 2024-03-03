import './globals.css';
import type { Metadata } from 'next';
import Favicon from '@/public/favicon.png'

// Twitter card validator tags
{/* <meta name="twitter:card" content="summary" /> */}
{/* <meta name="twitter:site" content="@nytimesbits" /> */}
{/* <meta name="twitter:creator" content="@nickbilton" /> */}
{/* <meta name="twitter:image" content="https://images.com/image.jpg" /> */}

export const metadata: Metadata = {
  title: 'Welcome to Dispa8ch',
  description: 'Dispa8ch.io is a SaaS platform that helps facilitates the process of logistics businesses by providing services like package tracking and route optimization.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel="shortcut icon" href={Favicon.src} type="image/png" />
      </head>
      <body className={'w-full min-h-screen bg-white relative '}>
        {children}
      </body>
    </html>
  );
}

