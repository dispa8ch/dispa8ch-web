import DashboardRevenue from "./_components/DashboardRevenue";
import LayoutPage from "./_components/LayoutPage";
import Notifications from "./_components/Notifications";

export default function Dashboard() {
  return (
    <>
      <LayoutPage />
      <section className='w-full pt-36 bg-white gap-4 flex justify-between'>
        <DashboardRevenue />
        <Notifications />
      </section>
    </>
  );
}
