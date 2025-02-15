"use client";
import { lowercase } from "@/lib";

const NamedInput = (props?: NamedInputProps) => {
  const {
    name,
    type,
    className: cName,
    validationError,
    placeholder,
  } = props || {};
  return (
    <div className="w-full h-fit relative font-Inter text-[#ccc] ">
      <input
        name={name}
        placeholder={placeholder}
        type={type || "text"}
        onChange={props?.onChange}
        className={`w-full p-2 text-sm text-black rounded-lg shadow-input border border-[#ccc] pl-5 text-feintBlack focus:outline-none ${
          cName || ""
        } `}
      />
      <p className="w-fit h-fit bg-white text-black font-semibold py-1 px-2 text-[10px] absolute top-[-30%] left-5 ">
        {name}
      </p>
      {validationError && (
        <p className="text-red-500 text-[10px]">{validationError}</p>
      )}
    </div>
  );
};

export default NamedInput;
