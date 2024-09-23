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
  return (
    <div className="font- flex flex-col gap-10 px-20">
      <div className="">
        <h6 className="text-xl font-bold mb--5">Profile</h6>
        <div className="mx-5">
          <div className="py-3 border-b flex justify-between">
            <div className="flex gap-10 justify-between w-1/2">
              <h5 className="">Account Owner Name</h5>
              <input
                className=" outline-1 "
                type="text"
                name="name"
                id=""
                value={userDetails.contactPerson}
              />
            </div>

            <p className="text-dispa8chRed-10">Edit</p>
          </div>
          <div className="py-3 border-b flex justify-between">
            <div className="flex gap-10 justify-between w-1/2">
              <h5 className="">Phone Number</h5>
              <input
                className=" outline-1 "
                type="text"
                name="phone"
                id=""
                value={userDetails.phone}
              />
            </div>

            <p className="text-dispa8chRed-10">Edit</p>
          </div>
          <div className="py-3 border-b flex justify-between">
            <div className="flex gap-10 justify-between w-1/2">
              <h5 className="">Email</h5>
              <input
                className=" outline-1 "
                type="text"
                name="email"
                id=""
                value={userDetails.email}
              />
            </div>

            <p className="text-dispa8chRed-10">Edit</p>
          </div>
          <div className="py-3 border-b flex justify-between">
            <div className="flex gap-10 justify-between w-1/2">
              <h5 className="">Password</h5>
              <input
                className=" outline-1 "
                type="password"
                name="email"
                id=""
                value={userDetails.password}
              />
            </div>

            <p className="text-dispa8chRed-10">Edit</p>
          </div>
        </div>
      </div>

      <div className="">
        <h6 className="text-xl font-bold my-5">Billing Contact Details</h6>
        <div className="mx-5">
          <div className="py-3 border-b flex justify-between">
            <div className="flex gap-10 justify-between w-1/2">
              <h5 className="">Company Name</h5>
              <input
                className=" outline-1 "
                type="text"
                name=""
                id=""
                value={userDetails.companyName}
              />
            </div>

            <p className="text-dispa8chRed-10">Edit</p>
          </div>
          <div className="py-3 border-b flex justify-between">
            <div className="flex gap-10 justify-between w-1/2">
              <h5 className="">Email</h5>
              <input
                className=" outline-1 "
                type="text"
                name="email"
                id=""
                value={userDetails.email}
              />
            </div>

            <p className="text-dispa8chRed-10">Edit</p>
          </div>
          <div className="py-3 border-b flex justify-between">
            <div className="flex gap-10 justify-between w-1/2">
              <h5 className="">Billing Address</h5>
              <input
                className=" outline-1 "
                type="text"
                name="email"
                id=""
                value={userDetails.city}
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
