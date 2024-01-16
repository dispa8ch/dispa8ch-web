import { scaleSize } from "@/lib";

type ClockCircleProps = Dispa8chIconProps;

const ClockCircle = (props?: ClockCircleProps) => {
  const dims = scaleSize([84, 82], props?.size || 1);
  return (
    <svg
      width={dims[0]}
      height={dims[1]}
      viewBox='0 0 84 82'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        opacity='0.5'
        d='M42.1499 74.5937C61.4107 74.5937 77.0249 59.4132 77.0249 40.6875C77.0249 21.9616 61.4107 6.78125 42.1499 6.78125C22.889 6.78125 7.2749 21.9616 7.2749 40.6875C7.2749 59.4132 22.889 74.5937 42.1499 74.5937Z'
        fill='url(#paint0_linear_410_137)'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M42.1498 24.582C43.5943 24.582 44.7654 25.7206 44.7654 27.125V39.634L52.718 47.366C53.7395 48.3591 53.7395 49.969 52.718 50.9621C51.6965 51.9552 50.0406 51.9552 49.0191 50.9621L40.3004 42.4855C39.8097 42.0088 39.5342 41.3619 39.5342 40.6875V27.125C39.5342 25.7206 40.7053 24.582 42.1498 24.582Z'
        fill='#FDA800'
      />
      <defs>
        <linearGradient
          id='paint0_linear_410_137'
          x1='7.4999'
          y1='7'
          x2='50.1336'
          y2='88.5024'
          gradientUnits='userSpaceOnUse'>
          <stop stop-color='#D1193E' />
          <stop
            offset='1'
            stop-color='#FDA800'
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ClockCircle;
