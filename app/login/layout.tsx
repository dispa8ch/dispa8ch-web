import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Dispa8ch | Signup',
  description: 'Dispa8ch.io is a SaaS platform that helps facilitates the process of logistics businesses by providing services like package tracking and route optimization.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={'w-screen h-screen bg-gradient-to-r from-[#D1193E1A] to-[#FDA8001A] flex flex-col font-Circular_Medium items-center p-8 '}>
        {children}
      </body>
    </html>
  );
}
