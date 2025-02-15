"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/shadcn.utils";

const NotificationsSettingsSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer focus:outline-none outline-none inline-flex w-[91px] h-[24px] rounded-[50px] px-[5px]  shrink-0 cursor-pointer items-center  transition-colors   disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#E5E5E5] data-[state=unchecked]:bg-[#E5E5E5]  ",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-[45px] w-[45px] rounded-full data-[state=checked]:bg-dispa8chRed-500 data-[state=unchecked]:bg-dispa8chGray-100 shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-[50px] data-[state=unchecked]:translate-x-0 dark:bg-stone-950"
      )}
    />
  </SwitchPrimitives.Root>
));
NotificationsSettingsSwitch.displayName = SwitchPrimitives.Root.displayName;

export { NotificationsSettingsSwitch };
