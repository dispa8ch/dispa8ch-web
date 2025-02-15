import { cn } from "@/lib/shadcn.utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600"],
});

type ThemeProps = {
  dataTheme: "light" | "dark";
} & React.JSX.IntrinsicElements["html"];

/**
 * Used for toggling the theme throughout the whole site
 * @example
 * `layout.tsx`
 * ```jsx
 * const RootLayout = ({children}) => {
 *  return (
 *    <Theme dataTheme={"light"}>
 *      // Component tree here
 *    </Theme>
 *  )
 * }
 * ```
 * @returns `<html>` element
 */
const Theme = (
  { dataTheme, children, className = "", ...rest }: ThemeProps = {
    dataTheme: "light",
  }
) => {
  return (
    <html
      {...rest}
      className={cn(`${poppins.variable}`, className)}
      data-theme={dataTheme}
    >
      {children}
    </html>
  );
};

export default Theme;
