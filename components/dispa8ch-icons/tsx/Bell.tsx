import { scaleSize } from "@/lib";
import { defaultProps } from "../shared";

const BellIcon: Dispa8chIcon = ({ size, ...rest } = defaultProps) => {
  const dims = scaleSize([24, 24], size);
  return (
    <svg  {...rest} width={dims[0]} height={dims[1]} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath="url(#clip0_241_856)" className="fill-inherit" >
        <path d="M24.1127 21.6125L22.5002 20V13.75C22.5002 9.9125 20.4502 6.7 16.8752 5.85V5C16.8752 3.9625 16.0377 3.125 15.0002 3.125C13.9627 3.125 13.1252 3.9625 13.1252 5V5.85C9.53769 6.7 7.50019 9.9 7.50019 13.75V20L5.88769 21.6125C5.10019 22.4 5.65019 23.75 6.76269 23.75H23.2252C24.3502 23.75 24.9002 22.4 24.1127 21.6125ZM20.0002 21.25H10.0002V13.75C10.0002 10.65 11.8877 8.125 15.0002 8.125C18.1127 8.125 20.0002 10.65 20.0002 13.75V21.25ZM15.0002 27.5C16.3752 27.5 17.5002 26.375 17.5002 25H12.5002C12.5002 26.375 13.6127 27.5 15.0002 27.5Z" className="fill-inherit" />
      </g>
      <defs>
        <clipPath id="clip0_241_856">
          <rect width={dims[0]} height={dims[1]} fill="white" />
        </clipPath>
      </defs>
    </svg>);
};

export default BellIcon;