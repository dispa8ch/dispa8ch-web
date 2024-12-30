import { ReactNode } from "react";
import { CompanyProvider } from "@/components/providers/CompanyDataProvider";
import Header from "../dashboard/_components/header";
import SettingsSidebar from "./_components/settings-sidebar";

interface SettingsLayoutProps {
  children: ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <CompanyProvider>
      <div className="w-full h-full">
        <Header />
        {/* settings sidebar */}
        <div className="flex w-full h-full">
          <SettingsSidebar />
          {children}
        </div>
      </div>
    </CompanyProvider>
  );
}
