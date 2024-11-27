"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import DashboardChart from "./DashboardChart";

// Define the type structure for overViewData based on the API response
type OverviewData = {
  totalOrders?: number;
  totalRiders?: number;
  todaysDeliveries?: number;
  completedDeliveries?: number;
  assignedRiders?: number;
};

function DashboardRevenue({ companyData }: any) {
  const [overViewData, setOverViewData] = useState<OverviewData>({});
  const companyId = companyData._id;

  useEffect(() => {
    const fetchData = async () => {
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
    };

    fetchData();
  }, []);

  return (
    <div className="w-180 ml-8 bg-white">
      <section>
        <div className="w-full flex justify-between mb-8">
          <div className="w-96 rounded-md h-35 bg-image flex justify-around items-center">
            <div className="w-44">
              <p className="text-white text-lg font-semibold">
                Total number of Orders
              </p>
            </div>
            <div className="flex gap-8">
              <div className="h-15 grid place-items-center">
                <p className="text-black font-bold text-xl">
                  {overViewData.totalOrders ?? 0}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-image1 rounded-md flex justify-around items-center w-96 h-35">
            <div className="w-44">
              <p className="text-white text-lg font-semibold">
                Total number of Riders
              </p>
            </div>
            <div className="flex gap-8">
              <div className="h-15 grid place-items-center">
                <p className="text-black font-bold text-xl">
                  {overViewData.totalRiders ?? 0}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="rounded-md w-64 h-28 relative bg-image2">
            <div className="absolute bottom-0 right-0">
              <Image
                alt=""
                src="/images/intersect (2).png"
                width={87}
                height={64}
              />
            </div>
            <p className="ml-3 font-semibold text-base text-white mt-3">
              Today's deliveries
            </p>
            <p className="ml-3 font-bold text-xl mt-3 text-black">
              {overViewData.todaysDeliveries ?? 0}
            </p>
          </div>
          <div className="rounded-md w-64 h-28 relative bg-image3">
            <div className="absolute bottom-0 right-0">
              <Image
                alt=""
                src="/images/intersect (3).png"
                width={87}
                height={64}
              />
            </div>
            <p className="ml-3 font-semibold text-base text-white mt-3">
              Completed deliveries
            </p>
            <p className="ml-3 font-bold text-xl mt-3 text-black">
              {overViewData.completedDeliveries ?? 0}
            </p>
          </div>
          <div className="rounded-md w-64 h-28 relative bg-image4">
            <div className="absolute bottom-0 right-0">
              <Image
                alt=""
                src="/images/intersect (4).png"
                width={87}
                height={64}
              />
            </div>
            <p className="ml-3 font-semibold text-base text-white mt-3">
              Assigned riders
            </p>
            <p className="ml-3 font-bold text-xl mt-3 text-black">
              {overViewData.assignedRiders ?? 0}
            </p>
          </div>
        </div>
      </section>

      <DashboardChart />
    </div>
  );
}

export default DashboardRevenue;
