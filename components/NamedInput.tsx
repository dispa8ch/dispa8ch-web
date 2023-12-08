import { lowercase } from "@/lib";
import React from "react";

type NamedInputProps = {
  name: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const NamedInput = (props?: NamedInputProps) => {
  const { name, type, className: cName } = props || {};
  return (
    <div className="w-full h-fit relative font-Circular_Book text-[#ccc] " >
      <input
      name={lowercase(name!)}
      type={type || "text"}
      className={`w-full h-12 rounded-lg font-Circular_Bold shadow-input border border-[#ccc] pl-5 text-feintBlack focus:outline-dispa8chRed ${cName || ''} `}
    />
    <p className="w-fit h-fit bg-white py-1 px-2 text-sm absolute top-[-30%] left-5 " >{name}</p>
    </div>
  );
};

export default NamedInput;
