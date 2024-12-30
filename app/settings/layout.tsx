import { ReactNode } from "react";
import { CompanyProvider } from "@/components/providers/CompanyDataProvider";
import Header from "../dashboard/_components/header";

interface SettingsLayoutProps {
  children: ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <CompanyProvider>
      <Header />
      {/* settings sidebar */}

      {children}
    </CompanyProvider>
  );
}
