import { cn } from "@/lib/shadcn.utils";

type ThemeProps = {
  'dataTheme': 'light' | 'dark'
} & React.JSX.IntrinsicElements['html'];

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
const Theme = ({ dataTheme, children, className = '', ...rest }: ThemeProps = {
  dataTheme: "light"
}) => {
  return (
    <html {...rest} className={cn(' ', className)} data-theme={dataTheme}>
      {children}
    </html>
  )
};

export default Theme;