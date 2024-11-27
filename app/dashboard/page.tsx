"use client";

import { useCompany } from "@/components/providers/CompanyDataProvider";
import DashboardRevenue from "./_components/DashboardRevenue";
import Notifications from "./_components/Notifications";

const Dashboard = () => {
  const { companyData, isLoading, error } = useCompany();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!companyData) {
    return <p className="text-gray-500">No company data available.</p>;
  }

  return (
    <section className="flex mt-14 gap-32">
      <DashboardRevenue companyData={companyData} />
      <Notifications />
    </section>
  );
};

export default Dashboard;
