// import "../globals.css";
// import Header from "./_components/header";
// import Sidebar from "./_components/sidebar";
import { CompanyProvider } from "@/components/providers/CompanyDataProvider";
import Sidebar from "../dashboard/_components/sidebar";
import Header from "../dashboard/_components/header";

export const metadata = {
  title: "Dashboard | Dispa8ch",
  description:
    "Dispa8ch.io is a SaaS platform that helps facilitates the process of logistics businesses by providing services like package tracking and route optimization.",
};
//overflow-clip
/**
 * All child routes will go into <main>
 * @todo get the signed in user and change the emailAddress
 */
export default function Chat({ children }) {
  return (
    <section className="w-full  flex max-h-screen ">
      <CompanyProvider>
        <Sidebar />
        <section className="flex-1 column h-screen">
          <Header emailAddress={"michthebrand@gmail.com"} />
          <main className="bg-transparent   w-full h-screen ">{children}</main>
        </section>
      </CompanyProvider>
    </section>
  );
}
