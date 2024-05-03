import { scaleSize } from "@/lib";
import Image from "next/image";

type Dispa8chLogoProps<T = number> = {
  size?: T;
  className?: string;
};

type TDispa8chLogo = (props: Dispa8chLogoProps) => JSX.Element;

const defaultProps: Dispa8chLogoProps = {
  size: 1,
  className: ''
}

/**
 * This is the official Dispa8ch logo in png format
 */
export const Dispa8chLogo: TDispa8chLogo = ({ size, className } = defaultProps) => {
  const dims = scaleSize([149, 67], size).map(dim => Number(dim));
  return (
    <Image width={dims[0]} height={dims[1]} className={className} src="/icons/desktop-logo.png" alt="Dispa8ch logo" />
  );
};

/**
 * This is the official mobile Dispa8ch logo in svg format
 */
export const Dispa8chLogoMobile: TDispa8chLogo = ({ size, className } = defaultProps) => {
  const dims = scaleSize([27, 52], size).map(dim => Number(dim));
  return (
    <Image width={dims[0]} height={dims[1]} priority src="/icons/mobile-logo.png" alt="Dispa8ch Logo" className={className} />
  );
};
