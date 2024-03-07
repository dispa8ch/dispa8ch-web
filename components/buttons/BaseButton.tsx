import { cn } from "@/lib/shadcn.utils";
import { Button } from "../ui/button";

export type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const BaseButton = ({children, className, ...rest}: BaseButtonProps) => {
  return (
    <Button {...rest} className={cn('fit mt-auto font-Inter_Bold px-8 py-1 bg-dispa8chRed-600 text-white hover:bg-dispa8chRed-700 dark:bg-dispa8chRed-600 dark:text-white dark:hover:bg-dispa8chRed-700 duration-500 ', className)} >
      {children}
    </Button>
  )
};

export default BaseButton;