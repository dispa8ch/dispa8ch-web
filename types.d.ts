export {};

declare global {
  type EmptyObject<T = any> = {
    [index: string | number | symbol]: T;
  };

  type SVGIconProps = Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & React.RefAttributes<SVGSVGElement>;


  type MenuLink = {
    name: string;
    to: `/${string}` | null;
    icon: React.ForwardRefExoticComponent<SVGIconProps>;
    /**
     * This prop is for rendering sublinks
     */
    sublinks?: Omit<MenuLink, "icon">[];
  };

  declare namespace Helpers {
    type Keyof<T extends EmptyObject> = keyof T;

  }
}
