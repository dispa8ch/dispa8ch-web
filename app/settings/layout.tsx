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
        <div className="flex w-full min-h-full">
          <SettingsSidebar />
          <div className="w-full min-h-full pt-12 pb-10 pl-10">{children}</div>
        </div>
      </div>
    </CompanyProvider>
  );
}
