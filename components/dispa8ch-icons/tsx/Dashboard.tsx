import { scaleSize } from "@/lib";
import { defaultProps } from "../shared";

const DashboardIcon: Dispa8chIcon = ({ size, ...rest } = defaultProps) => {
  const dims = scaleSize([24, 24], size);
  return (
    <svg  {...rest} width={dims[0]} height={dims[1]} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath="url(#clip0_156_238)">
        <path d="M3.00098 12.999H11.001V2.99902H3.00098V12.999ZM3.00098 20.999H11.001V14.999H3.00098V20.999ZM13.001 20.999H21.001V10.999H13.001V20.999ZM13.001 2.99902V8.99902H21.001V2.99902H13.001Z" fill="#D1193E" />
      </g>
      <defs>
        <clipPath id="clip0_156_238">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DashboardIcon;