import { cn } from "@/lib/shadcn.utils";
import { useState } from "react";

interface SettingsInputProps {
  isEditable: boolean;
  inputType: "text" | "number";
  onSubmit: (value: string) => void;
  initialValue: string;
  description?: string;
  disabled: boolean;
}

export default function SettingsInput(props: SettingsInputProps) {
  // ? Should this state change whenever we click the Save button or the user should manually click on the close button
  const [value, setValue] = useState(props.initialValue);
  const isText = props.inputType === "text";
  return (
    <div
      className={cn("flex flex-col gap-y-5", {
        // "gap-y-2": isText,
      })}
    >
      {props?.description && (
        <p className="text-dispa8chGray-100 max-w-[726px] font-poppins text-[20px] leading-[30px] font-normal ">
          {props.description}
        </p>
      )}
      <div className="flex items-center gap-x-3">
        {/* TODO: Wrap the input element in a form for SOE purposes */}
        {/* <form ></form>  */}
        <input
          type={props.inputType}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="pl-5  outline-none focus:outline-none w-[463px] h-[46px] rounded-[5px] border border-dispa8chGray-100 text-[20px] leading-[30px] font-poppins font-normal text-dispa8chGray-100"
        />
        {props.inputType === "number" && (
          <p className="text-[12px] leading-[18px] text-dispa8chGray-100 font-medium font-poppins">
            min
          </p>
        )}
      </div>
      <button
        className="w-[109px] h-[39px] bg-dispa8chRed-500 text-white font-Poppins font-medium
      "
        onClick={() => props.onSubmit(value)}
        disabled={props.disabled}
      >
        Save
      </button>
    </div>
  );
}
