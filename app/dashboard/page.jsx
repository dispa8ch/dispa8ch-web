"use client";

import { useCompany } from "@/components/providers/CompanyDataProvider";
import DashboardRevenue from "./_components/DashboardRevenue";
import Notifications from "./_components/Notifications";
import { useEffect, useState } from "react";

// type OverviewData = {
//   totalOrders?: number;
//   totalRiders?: number;
//   todaysDeliveries?: number;
//   completedDeliveries?: number;
//   assignedRiders?: number;
// };

const Dashboard = () => {
  const { companyData, isLoading, error } = useCompany();
  const [overViewData, setOverViewData] = useState({});
  const [dataLoading, setDataLoading] = useState(false); // Type as boolean
  const [dataError, setDataError] = useState(null); // Error state
  const companyId = companyData?._id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDataLoading(true);
        setDataError(null);
        if (companyId) {
          console.log("companyId @ dahboard", companyId);
          try {
            const response = await fetch(
              `https://dispa8ch-backend.onrender.com/api/company/${companyId}/overview`
            );
            const data = await response.json();
            setOverViewData(data.data);
            console.log("data", data.data);
          } catch (error) {
            console.error("Error fetching overview data:", error);
          }
        }
      } catch (error) {
        setDataError("An error occurred while fetching Data.");
      } finally {
        setDataLoading(false);
      }
    };

    fetchData();
  }, [companyId]);

  if (dataLoading || isLoading) {
    return (
      <section className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold">Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex justify-center items-center h-screen">
        <p className="text-red-500">Error: {error}</p>
      </section>
    );
  }

  if (!companyData) {
    return <p className="text-gray-500">No company data available.</p>;
  }

  return (
    <section className="flex mt-14 gap-32">
      <DashboardRevenue overViewData={overViewData} />
      {overViewData && <Notifications overViewData={overViewData} />}
    </section>
  );
};

export default Dashboard;
