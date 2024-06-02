export { };

declare global {
  type EmptyObject<T = any> = {
    [index: string | number | symbol]: T;
  };

  type NextPageProps<P = {}> = {
    params?: P;
    searchParams?: any;
  };

  type Base64 = `${string}=`

  type WaitlistPayload = {
    email: string;
    id: string;
  }

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

  type TComment<R = false> = {
    profileImage: string;
    userName: string;
    message: string;
    replies?: Array<TComment<true>>;
  };

  type FunctionWithArgs = (...args: Array<any>) => void;

  type NullOrUndefined = null | undefined;

  type TTheme = "light" | "dark";

  declare namespace Helpers {
    type Keyof<T extends EmptyObject> = keyof T;
  }
}
