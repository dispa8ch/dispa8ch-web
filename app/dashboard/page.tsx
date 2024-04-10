import DashboardRevenue from "./_components/DashboardRevenue";
import Notifications from "./_components/Notifications";
const Dashboard = () => {
  return (
    <>
      <header></header>
      <main className='flex mt-14 gap-12   '>
        <DashboardRevenue />
        <Notifications />
      </main>
    </>
  );
};

export default Dashboard;
