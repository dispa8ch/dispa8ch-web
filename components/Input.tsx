import { lowercase } from "@/lib";
import { EyeIcon } from "@heroicons/react/20/solid";
import { EyeSlashIcon } from "@heroicons/react/24/solid";
import React, { useRef, useState } from "react";

type NamedInputProps = {
  name: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const NamedInput = (props?: NamedInputProps) => {
  const { name, type, className: cName } = props || {};
  return (
    <div className='w-full h-fit relative font-Circular_Book text-[#ccc] '>
      <input
        name={lowercase(name!)}
        type={type || "text"}
        className={`w-full h-12 rounded-lg font-Circular_Bold shadow-input border border-[#ccc] pl-5 text-feintBlack focus:outline-dispa8chRed ${
          cName || ""
        } `}
      />
      <p className='w-fit h-fit bg-white py-1 px-2 text-sm absolute top-[-30%] left-5 '>
        {name}
      </p>
    </div>
  );
};

type PasswordInputProps = NamedInputProps;

export const PasswordInput = (props?: PasswordInputProps) => {
  const { name, className: cName } = props || {};
  const [visible, setVisible] = useState(false);
  function changeVisibility() {
    setVisible(!visible);
  }

  return (
    <div className='w-full h-fit relative font-Circular_Book text-[#ccc] '>
      <input
        name={lowercase(name!)}
        type={visible ? 'text' : 'password'}
        className={`w-full h-12 rounded-lg font-Circular_Bold shadow-input border border-[#ccc] pl-5 text-feintBlack focus:outline-dispa8chRed ${
          cName || ""
        } `}
      />
      <p className='w-fit h-fit bg-white py-1 px-2 text-sm absolute top-[-30%] left-5 '>
        {name}
      </p>
      <button type="button" onClick={changeVisibility} className='w-8 h-8 absolute right-2 top-[15%] '>
        {(visible ? <EyeSlashIcon /> : <EyeIcon />)}
      </button>
    </div>
  );
};
