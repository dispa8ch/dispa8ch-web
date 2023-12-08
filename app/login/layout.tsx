import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Signup | Dispa8ch',
  description: 'Dispa8ch.io is a SaaS platform that helps facilitates the process of logistics businesses by providing services like package tracking and route optimization.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={'w-fit h-fit'}>
        {children}
      </body>
    </html>
  );
}
