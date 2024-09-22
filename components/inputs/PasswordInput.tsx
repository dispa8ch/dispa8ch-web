"use client";
import { lowercase } from "@/lib";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

type PasswordInputProps = NamedInputProps;

const PasswordInput = (props?: PasswordInputProps) => {
  const { name, value, className: cName, validationError } = props || {};
  const [visible, setVisible] = useState(false);
  function changeVisibility() {
    setVisible(!visible);
  }

  return (
    <div className="w-full h-fit relative font-Inter text-[#ccc] ">
      <input
        name={lowercase(name!)}
        type={visible ? "text" : "password"}
        value={value}
        onChange={props?.onChange}
        className={`w-full h-12 rounded-lg font-Inter_Bold shadow-input border border-[#ccc] pl-5 text-feintBlack focus:outline-none ${
          cName || ""
        } `}
      />
      <p className="w-fit h-fit bg-white py-1 px-2 text-sm absolute top-[-30%] left-5 ">
        {name}
      </p>
      {validationError && (
        <p className="text-red-500 text-[10px]">{validationError}</p>
      )}
      <button
        type="button"
        onClick={changeVisibility}
        className="w-9 h-9 p-1 absolute right-2 top-[14%] focus:outline-none focus:bg-[#f2f2f2] rounded-full lg:w-8 lg:h-8 lg:top-[20%] "
      >
        {visible ? <EyeSlashIcon /> : <EyeIcon />}
      </button>
    </div>
  );
};

export default PasswordInput;
