export { };

declare global {
  type Dispa8chIconProps = {
    size?: number;
  } & React.SVGAttributes<SVGSVGElement>;

  /**
   * All svg React Components implementing this are of sizes 24x24
   */
  type Dispa8chIcon = (props: Dispa8chIconProps) => JSX.Element;
}