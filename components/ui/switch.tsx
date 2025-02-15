"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/shadcn.utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer focus:outline-none outline-none inline-flex w-[70px] h-[27px] rounded-[5px] px-[5px] border-dispa8chGray-100  shrink-0 cursor-pointer items-center  transition-colors   disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-dispa8chRed-500 data-[state=unchecked]:bg-dispa8chGray-100  ",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-[19px] w-[19px] rounded bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-[40px] data-[state=unchecked]:translate-x-0 dark:bg-stone-950"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
