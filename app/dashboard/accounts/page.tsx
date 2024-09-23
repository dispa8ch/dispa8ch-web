import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Account from "./components/Account";
import Billing from "./components/Billing";
import Plan from "./components/Plan";

const accountsPageTabs = ["Account", "Billing & Usage", "Your Plan"] as const;
const page = () => {
  return (
    <div>
      <h6 className="text-3xl font-bold mb-5">My Account</h6>

      <Tabs
        defaultValue="account"
        className="w-full h-fit min-h-[inherit] flex-grow flex flex-col "
      >
        <TabsList className="w-full justify-start rounded-lg ">
          {/* data-[state=active] is the attribute selector that changes the background color or of the tab trigger */}
          {accountsPageTabs.map((tab, index) => (
            <TabsTrigger
              key={index}
              className="px-12 data-[state=active]:rounded-md  "
              value={tab.toLowerCase()}
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
        <section className="w-full flex-grow overflow-scroll no-scroll mt-4 mb-6">
          <TabsContent value="account">
            <Account />
          </TabsContent>
          <TabsContent value="billing & usage">
            <Billing />
          </TabsContent>
          <TabsContent value="your plan">
            <Plan />
          </TabsContent>
        </section>
      </Tabs>
    </div>
  );
};

export default page;
