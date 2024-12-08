"use client";
import { useCompany } from "@/components/providers/CompanyDataProvider";
import React from "react";

const userDetails = {
  companyName: "KingTony Technologies",
  email: "Kingtony3825@gmail.com",
  country: "Nigeria",
  city: "Lagos",
  contactPerson: "Amauche Anthony",
  phone: "+2349063213825",
  password: "ABCDefgh12345#@",
};
const Account = () => {
  const { companyData, isLoading, error } = useCompany();

  return (
    <div className="font- flex flex-col gap-10 px-20">
      <div className="">
        <h6 className="text-xl font-bold mb--5">Profile</h6>
        <div className="mx-5 cursor-pointer">
          <div className="py-3 border-b flex justify-between">
            <div className="flex gap-10 justify-between lg:w-1/2 md:w-2/3">
              <h5 className="">Account Owner Name</h5>
              <input
                disabled={true}
                className=" outline-none"
                type="text"
                name="name"
                id=""
                value={companyData?.contactPerson}
              />
            </div>

            <p className="text-dispa8chRed-10">Edit</p>
          </div>
          <div className="py-3 border-b flex justify-between">
            <div className="flex gap-10 justify-between lg:w-1/2 md:w-2/3">
              <h5 className="">Phone Number</h5>
              <input
                disabled={true}
                className="  outline-none "
                type="text"
                name="phone"
                id=""
                value={companyData?.phone}
              />
            </div>

            <p className="text-dispa8chRed-10">Edit</p>
          </div>
          <div className="py-3 border-b flex justify-between">
            <div className="flex gap-10 justify-between lg:w-1/2 md:w-2/3">
              <h5 className="">Email</h5>
              <input
                disabled={true}
                className="  outline-none "
                type="text"
                name="email"
                id=""
                value={companyData?.email}
              />
            </div>

            <p className="text-dispa8chRed-10">Edit</p>
          </div>
          <div className="py-3 border-b flex justify-between">
            <div className="flex gap-10 justify-between lg:w-1/2 md:w-2/3">
              <h5 className="">Password</h5>
              <input
                disabled={true}
                className="  outline-none "
                type="password"
                name="email"
                id=""
                value={companyData?.companyPassword}
              />
            </div>

            <p className="text-dispa8chRed-10">Edit</p>
          </div>
        </div>
      </div>

      <div className="">
        <h6 className="text-xl font-bold my-5">Billing Contact Details</h6>
        <div className="mx-5 cursor-pointer">
          <div className="py-3 border-b flex justify-between">
            <div className="flex gap-10 justify-between lg:w-1/2 md:w-2/3">
              <h5 className="">Company Name</h5>
              <input
                disabled={true}
                className="  outline-none "
                type="text"
                name=""
                id=""
                value={companyData?.companyName}
              />
            </div>

            <p className="text-dispa8chRed-10">Edit</p>
          </div>
          <div className="py-3 border-b flex justify-between">
            <div className="flex gap-10 justify-between lg:w-1/2 md:w-2/3">
              <h5 className="">Email</h5>
              <input
                disabled={true}
                className="  outline-none "
                type="text"
                name="email"
                id=""
                value={companyData?.email}
              />
            </div>

            <p className="text-dispa8chRed-10">Edit</p>
          </div>
          <div className="py-3 border-b flex justify-between">
            <div className="flex gap-10 justify-between lg:w-1/2 md:w-2/3">
              <h5 className="">Billing Address</h5>
              <input
                disabled={true}
                className="  outline-none "
                type="text"
                name="email"
                id=""
                value={companyData?.city}
              />
            </div>

            <p className="text-dispa8chRed-10">Edit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
