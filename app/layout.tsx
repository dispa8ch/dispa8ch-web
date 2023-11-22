import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Welcome to Dispa8ch',
  description: 'This is ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={'min-w-[100vw] min-h-[100vh] flex flex-col '}>
        {children}
      </body>
    </html>
  );
}
