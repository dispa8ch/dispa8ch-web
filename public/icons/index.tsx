import { scaleSize } from "@/lib";

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
  const dims = scaleSize([149, 67], size);
  return (
    <img width={dims[0]} height={dims[1]} className={className} src="/icons/desktop-logo.png" alt="Dispa8ch logo" />
  );
};

/**
 * This is the official mobile Dispa8ch logo in svg format
 */
export const Dispa8chLogoMobile = (props?: Dispa8chLogoProps) => {
  const size = scaleSize([26, 49], props?.size || 1);
  return (
    <svg
      width={size[0]}
      height={size[1]}
      viewBox='0 0 26 49'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={props?.className || ""}>
      <rect
        x='3.04102'
        y='24.5649'
        width='4.38893'
        height='17.83'
        transform='rotate(-0.501375 3.04102 24.5649)'
        fill='url(#paint0_linear_645_941)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.8689 34.72C18.2468 34.6729 22.5683 30.2751 22.5213 24.8972C22.4742 19.5193 18.0764 15.1978 12.6985 15.2449C7.32059 15.2919 2.99909 19.6897 3.04615 25.0676C3.09321 30.4455 7.49101 34.767 12.8689 34.72ZM12.8764 30.4221C15.8557 30.396 18.2498 27.9597 18.2237 24.9804C18.1976 22.0011 15.7613 19.607 12.782 19.6331C9.80265 19.6592 7.40858 22.0955 7.43465 25.0748C7.46073 28.0541 9.89707 30.4482 12.8764 30.4221Z'
        fill='url(#paint1_linear_645_941)'
      />
      <rect
        x='18.0645'
        y='6.87695'
        width='4.29749'
        height='17.4643'
        transform='rotate(-0.501375 18.0645 6.87695)'
        fill='#D1193E'
      />
      <path
        d='M19.6427 1.61598C19.9363 1.21885 20.5286 1.21366 20.8292 1.6056L24.431 6.3023C24.8038 6.78848 24.4608 7.49155 23.8481 7.49692L16.7273 7.55923C16.1147 7.56459 15.7594 6.86762 16.1237 6.37499L19.6427 1.61598Z'
        fill='#D1193E'
      />
      <path
        d='M6.04159 47.7878C5.74643 48.161 5.1814 48.1643 4.88194 47.7945L1.35261 43.4371C0.960603 42.9531 1.30262 42.2305 1.92544 42.2269L8.93334 42.1863C9.55616 42.1827 9.90653 42.9012 9.52016 43.3897L6.04159 47.7878Z'
        fill='#D1193E'
      />
      <defs>
        <linearGradient
          id='paint0_linear_645_941'
          x1='4.00109'
          y1='42.8521'
          x2='14.7041'
          y2='5.77631'
          gradientUnits='userSpaceOnUse'>
          <stop
            offset='0.057377'
            stopColor='#D1193E'
          />
          <stop
            offset='0.268497'
            stopColor='#FDA800'
          />
        </linearGradient>
        <linearGradient
          id='paint1_linear_645_941'
          x1='19.2085'
          y1='22.5031'
          x2='7.06667'
          y2='29.9702'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#D1193E' />
          <stop
            offset='1'
            stopColor='#FDA800'
          />
        </linearGradient>
      </defs>
    </svg>
  );
};
