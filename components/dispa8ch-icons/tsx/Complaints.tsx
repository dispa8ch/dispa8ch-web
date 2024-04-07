import { scaleSize } from "@/lib";
import { defaultProps } from "../shared";

const ComplaintsIcon: Dispa8chIcon = ({ size, ...rest } = defaultProps) => {
  const dims = scaleSize([24, 24], size);
  return (
    <svg  {...rest} width={dims[0]} height={dims[1]} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <path d="M2.13576 1C1.50596 1 1 1.58251 1 2.30537V17.9572C1 18.6801 1.50596 19.2626 2.13576 19.2626H6.68146V26L14.1838 19.2626H24.8642C25.494 19.2626 26 18.6801 26 17.9572V2.30537C26 1.58251 25.494 1 24.8642 1H2.13576Z" className={'fill-inherit stroke-inherit'} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M5.07812 5.07214H21.7448V6.26347H5.07812V5.07214ZM5.11969 7.45281H17.5179V8.64414H5.11969V7.45281ZM5.11969 9.83348H21.7448V11.0248H5.11969V9.83348ZM5.11969 12.2141H17.5179V13.4055H5.11969V12.2141Z" fill="white" />
    </svg>
  );
};

export default ComplaintsIcon;