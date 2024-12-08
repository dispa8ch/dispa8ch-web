"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import DashboardChart from "./DashboardChart";

// Define the type structure for overViewData based on the API response

function DashboardRevenue({ overViewData }: any) {
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
                  {overViewData.totalOrders}
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

      <div className="w-180 bg-white mt-20">
        <div className="  flex justify-between">
          <div>
            <p className="text-xl font-bold text-black">Revenue Stream</p>
          </div>

          <div className="flex gap-4">
            <div className=" w-36 px-3 py-1 items-center  bg-white flex justify-between border rounded-md border-gray-400">
              <div>
                <p className="text-lg text-black font-normal">Filter</p>
              </div>
              <div>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_65_21)">
                    <path
                      d="M0.625 2.18751H0.669375C0.737585 2.45551 0.893143 2.69314 1.11147 2.86286C1.3298 3.03258 1.59846 3.12472 1.875 3.12472C2.15154 3.12472 2.4202 3.03258 2.63853 2.86286C2.85686 2.69314 3.01241 2.45551 3.08063 2.18751H9.375C9.45788 2.18751 9.53737 2.15459 9.59597 2.09598C9.65458 2.03738 9.6875 1.95789 9.6875 1.87501C9.6875 1.79213 9.65458 1.71265 9.59597 1.65404C9.53737 1.59544 9.45788 1.56251 9.375 1.56251H3.08063C3.01241 1.29452 2.85686 1.05689 2.63853 0.887167C2.4202 0.717444 2.15154 0.625305 1.875 0.625305C1.59846 0.625305 1.3298 0.717444 1.11147 0.887167C0.893143 1.05689 0.737585 1.29452 0.669375 1.56251H0.625C0.54212 1.56251 0.462634 1.59544 0.404029 1.65404C0.345424 1.71265 0.3125 1.79213 0.3125 1.87501C0.3125 1.95789 0.345424 2.03738 0.404029 2.09598C0.462634 2.15459 0.54212 2.18751 0.625 2.18751ZM1.875 1.25001C1.99861 1.25001 2.11945 1.28667 2.22223 1.35534C2.32501 1.42402 2.40512 1.52163 2.45242 1.63584C2.49973 1.75004 2.51211 1.87571 2.48799 1.99694C2.46388 2.11818 2.40435 2.22955 2.31694 2.31695C2.22953 2.40436 2.11817 2.46389 1.99693 2.488C1.87569 2.51212 1.75003 2.49974 1.63582 2.45244C1.52162 2.40513 1.42401 2.32503 1.35533 2.22224C1.28666 2.11946 1.25 1.99863 1.25 1.87501C1.25 1.70925 1.31585 1.55028 1.43306 1.43307C1.55027 1.31586 1.70924 1.25001 1.875 1.25001ZM9.375 4.68751H9.33062C9.26241 4.41952 9.10686 4.18189 8.88853 4.01217C8.6702 3.84244 8.40154 3.75031 8.125 3.75031C7.84846 3.75031 7.5798 3.84244 7.36147 4.01217C7.14314 4.18189 6.98759 4.41952 6.91937 4.68751H0.625C0.54212 4.68751 0.462634 4.72044 0.404029 4.77904C0.345424 4.83765 0.3125 4.91713 0.3125 5.00001C0.3125 5.08289 0.345424 5.16238 0.404029 5.22098C0.462634 5.27959 0.54212 5.31251 0.625 5.31251H6.91937C6.98759 5.58051 7.14314 5.81814 7.36147 5.98786C7.5798 6.15758 7.84846 6.24972 8.125 6.24972C8.40154 6.24972 8.6702 6.15758 8.88853 5.98786C9.10686 5.81814 9.26241 5.58051 9.33062 5.31251H9.375C9.45788 5.31251 9.53737 5.27959 9.59597 5.22098C9.65458 5.16238 9.6875 5.08289 9.6875 5.00001C9.6875 4.91713 9.65458 4.83765 9.59597 4.77904C9.53737 4.72044 9.45788 4.68751 9.375 4.68751ZM8.125 5.62501C8.00139 5.62501 7.88055 5.58836 7.77777 5.51968C7.67499 5.45101 7.59488 5.35339 7.54757 5.23919C7.50027 5.12499 7.48789 4.99932 7.51201 4.87808C7.53612 4.75684 7.59565 4.64548 7.68306 4.55807C7.77047 4.47066 7.88183 4.41114 8.00307 4.38702C8.12431 4.36291 8.24997 4.37528 8.36418 4.42259C8.47838 4.46989 8.57599 4.55 8.64467 4.65278C8.71334 4.75556 8.75 4.8764 8.75 5.00001C8.75 5.16577 8.68415 5.32474 8.56694 5.44196C8.44973 5.55917 8.29076 5.62501 8.125 5.62501ZM9.375 7.81251H6.20563C6.13741 7.54452 5.98186 7.30689 5.76353 7.13717C5.5452 6.96745 5.27654 6.87531 5 6.87531C4.72346 6.87531 4.4548 6.96745 4.23647 7.13717C4.01814 7.30689 3.86259 7.54452 3.79437 7.81251H0.625C0.54212 7.81251 0.462634 7.84544 0.404029 7.90404C0.345424 7.96265 0.3125 8.04213 0.3125 8.12501C0.3125 8.20789 0.345424 8.28738 0.404029 8.34598C0.462634 8.40459 0.54212 8.43751 0.625 8.43751H3.79437C3.86259 8.70551 4.01814 8.94314 4.23647 9.11286C4.4548 9.28258 4.72346 9.37472 5 9.37472C5.27654 9.37472 5.5452 9.28258 5.76353 9.11286C5.98186 8.94314 6.13741 8.70551 6.20563 8.43751H9.375C9.45788 8.43751 9.53737 8.40459 9.59597 8.34598C9.65458 8.28738 9.6875 8.20789 9.6875 8.12501C9.6875 8.04213 9.65458 7.96265 9.59597 7.90404C9.53737 7.84544 9.45788 7.81251 9.375 7.81251ZM5 8.75001C4.87639 8.75001 4.75555 8.71336 4.65277 8.64468C4.54999 8.57601 4.46988 8.47839 4.42257 8.36419C4.37527 8.24999 4.36289 8.12432 4.38701 8.00308C4.41112 7.88184 4.47065 7.77048 4.55806 7.68307C4.64547 7.59566 4.75683 7.53614 4.87807 7.51202C4.99931 7.48791 5.12497 7.50028 5.23918 7.54759C5.35338 7.59489 5.45099 7.675 5.51967 7.77778C5.58834 7.88056 5.625 8.0014 5.625 8.12501C5.625 8.29077 5.55915 8.44975 5.44194 8.56696C5.32473 8.68417 5.16576 8.75001 5 8.75001Z"
                      fill="#757575"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_65_21">
                      <rect width="10" height="10" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            <div className=" w-36 px-3 py-1 items-center bg-white flex justify-between border rounded-md border-gray-400">
              <div>
                <p className="text-lg text-black font-normal">Month</p>
              </div>{" "}
              <div>
                {" "}
                <svg
                  width="10"
                  height="9"
                  viewBox="0 0 5 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.11114 3.51891C2.31127 3.7665 2.68873 3.7665 2.88886 3.51891L4.87289 1.06431C5.13718 0.737339 4.90446 0.25 4.48403 0.25H0.515966C0.0955412 0.25 -0.137177 0.737339 0.12711 1.06431L2.11114 3.51891Z"
                    fill="#757575"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DashboardChart />
    </div>
  );
}

export default DashboardRevenue;
