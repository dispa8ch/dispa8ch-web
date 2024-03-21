export { };

declare global {
  type Dispa8chIconProps = {
    size?: number;
  } & React.SVGAttributes<SVGSVGElement>;

  type Dispa8chIcon = (props: Dispa8chIconProps) => JSX.Element;
}