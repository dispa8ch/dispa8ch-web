import { Suspense } from "react";
import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      {children}
    </Suspense>
  );
}
