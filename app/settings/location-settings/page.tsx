"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/shadcn.utils";
import { useState } from "react";

export default function LocationSettingsPage() {
  const [distanceUnit, setDistanceUnit] = useState<"mile" | "kilometer">(
    "mile"
  );

  const handleDistanceUnitChange = (unit: "mile" | "kilometer") => {
    setDistanceUnit(unit);
  };
  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-y-2">
        <h5 className="font-medium font-Poppins text-[25px] leading-[37.5px] text-black">
          TimeZone
        </h5>
        <div className="flex items-center text-dispa8chGray-100 gap-x-3">
          <Checkbox id="utc" />
          {/* <input type="datetime-local" /> */}
          <label htmlFor="utc">Automatic Setup</label>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <h5 className="font-medium text-[25px] leading-[37.5px] text-black">
          Distance Unit
        </h5>
        <p className="font-Poppins text-[20px] leading-[30px] text-dispa8chGray-100">
          Distance in mile or km
        </p>
        <div className="flex">
          <button
            onClick={() => handleDistanceUnitChange("mile")}
            className={cn(
              "font-normal text-black font-Poppins text-[20px] leading-[30px] w-[88px] h-[43px] p-2 bg-[#d9d9d9]",
              {
                "bg-dispa8chRed-500 text-white": distanceUnit === "mile",
              }
            )}
          >
            Mile
          </button>
          <button
            onClick={() => handleDistanceUnitChange("kilometer")}
            className={cn(
              "font-normal text-black font-Poppins text-[20px] leading-[30px] bg-[#d9d9d9] w-[88px] h-[43px] p-2",
              {
                "bg-dispa8chRed-500 text-white": distanceUnit === "kilometer",
              }
            )}
          >
            Km
          </button>
        </div>
      </div>
    </div>
  );
}
