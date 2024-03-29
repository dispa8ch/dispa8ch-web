
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
const Theme = ({ dataTheme, children, ...rest }: ThemeProps = {
  dataTheme: "light"
}) => {
  return (
    <html {...rest} data-theme={dataTheme}>
      {children}
    </html>
  )
};

export default Theme;