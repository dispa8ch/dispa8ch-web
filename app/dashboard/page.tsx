import DashboardRevenue from "./_components/DashboardRevenue";
import Notifications from "./_components/Notifications";
const Dashboard = () => {
  return (
    <section className='flex mt-14 gap-32    '>
      <DashboardRevenue />
      <Notifications />
    </section>
  );
};

export default Dashboard;
