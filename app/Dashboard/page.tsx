"use client";
import DashboardRevenue from "./DashboardRevenue";
import Notifications from "./Notifications";


export default function DashbordHome() {
    return (

        <div className="w-full pt-36 bg-white flex justify-between">
         
      <div>
       <DashboardRevenue/> 
      </div>

   

      <div>
      <Notifications />
      </div>




        </div>
    )

}