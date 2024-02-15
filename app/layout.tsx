

import './globals.css';
import type { Metadata } from 'next';
import Favicon from '@/public/favicon.png'


export const metadata: Metadata = {
  title: 'Welcome to Dispa8ch',
  description: 'Dispa8ch.io is a SaaS platform that helps facilitates the process of logistics businesses by providing services like package tracking and route optimization.'
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

