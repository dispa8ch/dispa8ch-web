'use client'
import { lowercase } from "@/lib";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

/**
 * @todo fetch country icons from a json api to render here
 */
const CountryCodeInput = (props?: NamedInputProps) => {
  const { name, className: cName } = props || {};
  const [visible, setVisible] = useState(false);
  function changeVisibility() {
    setVisible(!visible);
  }

  return (
    <div className='w-full h-fit relative font-Inter_Book text-[#ccc] '>
      <input
        name={lowercase(name!)}
        type={visible ? 'text' : 'password'}
        className={`w-full h-12 rounded-lg font-Inter_Bold shadow-input border border-[#ccc] pl-5 text-feintBlack focus:outline-none ${
          cName || ""
        } `}
      />
      <p className='w-fit h-fit bg-white py-1 px-2 text-sm absolute top-[-30%] left-5 '>
        {name}
      </p>
      <button type="button" onClick={changeVisibility} className='w-9 h-9 p-1 absolute right-2 top-[14%] focus:outline-none focus:bg-[#f2f2f2] rounded-full lg:w-8 lg:h-8 lg:top-[20%] '>
        {(visible ? <EyeSlashIcon /> : <EyeIcon />)}
      </button>
    </div>
  );
};

export default CountryCodeInput;
