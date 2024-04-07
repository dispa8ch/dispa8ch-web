import { scaleSize } from "@/lib";
import { defaultProps } from "../shared";

const RiderIcon: Dispa8chIcon = ({ size, ...rest } = defaultProps) => {
  const dims = scaleSize([24, 24], size);
  return (<svg  {...rest} width={dims[0]} height={dims[1]} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
    <g clipPath="url(#clip0_156_248)">
      <path d="M3.75195 23.9993C3.7027 23.9994 3.65392 23.9897 3.60841 23.9708C3.5629 23.952 3.52155 23.9244 3.48672 23.8896C3.4519 23.8547 3.42428 23.8134 3.40544 23.7679C3.3866 23.7224 3.37692 23.6736 3.37695 23.6243V19.8762C3.37695 19.7767 3.41646 19.6813 3.48679 19.611C3.55711 19.5407 3.6525 19.5012 3.75195 19.5012C3.85141 19.5012 3.94679 19.5407 4.01712 19.611C4.08744 19.6813 4.12695 19.7767 4.12695 19.8762V23.6243C4.12698 23.6736 4.1173 23.7224 4.09846 23.7679C4.07963 23.8134 4.05201 23.8547 4.01718 23.8896C3.98235 23.9244 3.941 23.952 3.89549 23.9708C3.84998 23.9897 3.80121 23.9994 3.75195 23.9993ZM11.252 16.5004C9.66121 16.4986 8.13615 15.8659 7.01132 14.7411C5.8865 13.6162 5.25377 12.0912 5.25195 10.5004C5.25195 10.401 5.29146 10.3056 5.36179 10.2353C5.43211 10.1649 5.5275 10.1254 5.62695 10.1254C5.72641 10.1254 5.82179 10.1649 5.89212 10.2353C5.96244 10.3056 6.00195 10.401 6.00195 10.5004C6.00195 11.8928 6.55508 13.2282 7.53964 14.2127C8.52421 15.1973 9.85957 15.7504 11.252 15.7504C12.6443 15.7504 13.9797 15.1973 14.9643 14.2127C15.9488 13.2282 16.502 11.8928 16.502 10.5004C16.502 10.401 16.5415 10.3056 16.6118 10.2353C16.6821 10.1649 16.7775 10.1254 16.877 10.1254C16.9764 10.1254 17.0718 10.1649 17.1421 10.2353C17.2124 10.3056 17.252 10.401 17.252 10.5004C17.2501 12.0912 16.6174 13.6162 15.4926 14.7411C14.3678 15.8659 12.8427 16.4986 11.252 16.5004Z" fill="#D1193E" />
      <path d="M5.62695 10.8755C5.5777 10.8755 5.52892 10.8658 5.48341 10.847C5.4379 10.8281 5.39655 10.8005 5.36172 10.7657C5.3269 10.7309 5.29928 10.6895 5.28044 10.644C5.2616 10.5985 5.25192 10.5497 5.25195 10.5005V8.62659C5.25195 8.52713 5.29146 8.43175 5.36179 8.36142C5.43211 8.2911 5.5275 8.25159 5.62695 8.25159C5.72641 8.25159 5.82179 8.2911 5.89212 8.36142C5.96244 8.43175 6.00195 8.52713 6.00195 8.62659V10.5005C6.00198 10.5497 5.9923 10.5985 5.97347 10.644C5.95463 10.6895 5.92701 10.7309 5.89218 10.7657C5.85735 10.8005 5.816 10.8281 5.77049 10.847C5.72498 10.8658 5.67621 10.8755 5.62695 10.8755ZM16.877 10.8755C16.8277 10.8755 16.7789 10.8658 16.7334 10.847C16.6879 10.8281 16.6466 10.8005 16.6117 10.7657C16.5769 10.7309 16.5493 10.6895 16.5304 10.644C16.5116 10.5985 16.5019 10.5497 16.502 10.5005V8.62659C16.502 8.52713 16.5415 8.43175 16.6118 8.36142C16.6821 8.2911 16.7775 8.25159 16.877 8.25159C16.9764 8.25159 17.0718 8.2911 17.1421 8.36142C17.2124 8.43175 17.252 8.52713 17.252 8.62659V10.5005C17.252 10.5497 17.2423 10.5985 17.2235 10.644C17.2046 10.6895 17.177 10.7309 17.1422 10.7657C17.1074 10.8005 17.066 10.8281 17.0205 10.847C16.975 10.8658 16.9262 10.8755 16.877 10.8755Z" fill="#D1193E" />
      <path d="M11.2461 16.5023C9.65535 16.5005 8.13029 15.8678 7.00546 14.7429C5.88064 13.6181 5.24791 12.093 5.24609 10.5023C5.24609 10.4028 5.2856 10.3075 5.35593 10.2371C5.42625 10.1668 5.52164 10.1273 5.62109 10.1273C5.72055 10.1273 5.81593 10.1668 5.88626 10.2371C5.95658 10.3075 5.99609 10.4028 5.99609 10.5023C5.99609 11.8947 6.54922 13.23 7.53378 14.2146C8.51835 15.1992 9.85371 15.7523 11.2461 15.7523C12.6385 15.7523 13.9738 15.1992 14.9584 14.2146C15.943 13.23 16.4961 11.8947 16.4961 10.5023C16.4961 10.4028 16.5356 10.3075 16.6059 10.2371C16.6763 10.1668 16.7716 10.1273 16.8711 10.1273C16.9705 10.1273 17.0659 10.1668 17.1363 10.2371C17.2066 10.3075 17.2461 10.4028 17.2461 10.5023C17.2443 12.093 16.6115 13.6181 15.4867 14.7429C14.3619 15.8678 12.8368 16.5005 11.2461 16.5023ZM17.9961 7.50159C17.9468 7.50162 17.8981 7.49194 17.8526 7.4731C17.807 7.45426 17.7657 7.42664 17.7309 7.39182C17.696 7.35699 17.6684 7.31564 17.6496 7.27013C17.6307 7.22462 17.6211 7.17584 17.6211 7.12659C17.6211 5.43583 16.9494 3.81433 15.7539 2.61878C14.5584 1.42324 12.9368 0.751587 11.2461 0.751587C9.55534 0.751587 7.93383 1.42324 6.73829 2.61878C5.54274 3.81433 4.87109 5.43583 4.87109 7.12659C4.87109 7.22604 4.83158 7.32143 4.76126 7.39175C4.69093 7.46208 4.59555 7.50159 4.49609 7.50159C4.39664 7.50159 4.30125 7.46208 4.23093 7.39175C4.1606 7.32143 4.12109 7.22604 4.12109 7.12659C4.12109 5.23692 4.87176 3.42465 6.20796 2.08845C7.54415 0.752254 9.35643 0.00158691 11.2461 0.00158691C13.1358 0.00158691 14.948 0.752254 16.2842 2.08845C17.6204 3.42465 18.3711 5.23692 18.3711 7.12659C18.3711 7.17584 18.3614 7.22462 18.3426 7.27013C18.3238 7.31564 18.2961 7.35699 18.2613 7.39182C18.2265 7.42664 18.1851 7.45426 18.1396 7.4731C18.0941 7.49194 18.0453 7.50162 17.9961 7.50159Z" fill="#D1193E" />
      <path d="M5.62109 10.8773C5.57184 10.8773 5.52306 10.8677 5.47755 10.8488C5.43204 10.83 5.39069 10.8024 5.35587 10.7675C5.32104 10.7327 5.29342 10.6914 5.27458 10.6458C5.25575 10.6003 5.24607 10.5516 5.24609 10.5023V8.25159C5.24609 8.15213 5.2856 8.05675 5.35593 7.98642C5.42625 7.9161 5.52164 7.87659 5.62109 7.87659C5.72055 7.87659 5.81593 7.9161 5.88626 7.98642C5.95658 8.05675 5.99609 8.15213 5.99609 8.25159V10.5023C5.99612 10.5516 5.98643 10.6004 5.9676 10.6459C5.94876 10.6914 5.92114 10.7327 5.88631 10.7675C5.85148 10.8024 5.81013 10.83 5.76463 10.8488C5.71912 10.8677 5.67034 10.8773 5.62109 10.8773ZM16.8711 10.8773C16.8218 10.8773 16.7731 10.8677 16.7276 10.8488C16.682 10.83 16.6407 10.8024 16.6059 10.7675C16.571 10.7327 16.5434 10.6914 16.5246 10.6458C16.5057 10.6003 16.4961 10.5516 16.4961 10.5023V8.25159C16.4961 8.15213 16.5356 8.05675 16.6059 7.98642C16.6763 7.9161 16.7716 7.87659 16.8711 7.87659C16.9705 7.87659 17.0659 7.9161 17.1363 7.98642C17.2066 8.05675 17.2461 8.15213 17.2461 8.25159V10.5023C17.2461 10.5516 17.2364 10.6004 17.2176 10.6459C17.1988 10.6914 17.1711 10.7327 17.1363 10.7675C17.1015 10.8024 17.0601 10.83 17.0146 10.8488C16.9691 10.8677 16.9203 10.8773 16.8711 10.8773Z" fill="#D1193E" />
      <path d="M16.8696 8.62659H5.62109C5.52164 8.62659 5.42625 8.58708 5.35593 8.51675C5.2856 8.44643 5.24609 8.35104 5.24609 8.25159C5.24609 8.15213 5.2856 8.05675 5.35593 7.98642C5.42625 7.9161 5.52164 7.87659 5.62109 7.87659H16.8696C16.9691 7.87659 17.0645 7.9161 17.1348 7.98642C17.2051 8.05675 17.2446 8.15213 17.2446 8.25159C17.2446 8.35104 17.2051 8.44643 17.1348 8.51675C17.0645 8.58708 16.9691 8.62659 16.8696 8.62659Z" fill="#D1193E" />
      <path d="M5.62082 8.62617C5.57156 8.62623 5.52279 8.61655 5.47729 8.59769C5.43179 8.57884 5.39046 8.55117 5.35569 8.5163L4.22994 7.3913C4.19512 7.35648 4.1675 7.31514 4.14866 7.26965C4.12982 7.22416 4.12012 7.1754 4.12012 7.12616C4.12012 7.07692 4.12982 7.02816 4.14866 6.98267C4.1675 6.93718 4.19512 6.89584 4.22994 6.86102C4.26476 6.8262 4.30609 6.79858 4.35159 6.77974C4.39708 6.7609 4.44584 6.7512 4.49508 6.7512C4.54432 6.7512 4.59307 6.7609 4.63857 6.77974C4.68406 6.79858 4.72539 6.8262 4.76021 6.86102L5.88596 7.98602C5.93839 8.03847 5.97409 8.10528 5.98856 8.17801C6.00302 8.25074 5.99559 8.32613 5.96722 8.39464C5.93884 8.46316 5.89079 8.52172 5.82913 8.56292C5.76748 8.60413 5.69497 8.62615 5.62082 8.62617ZM16.8708 8.62617C16.7967 8.62615 16.7242 8.60415 16.6625 8.56295C16.6009 8.52174 16.5528 8.46318 16.5244 8.39467C16.4961 8.32615 16.4886 8.25077 16.5031 8.17803C16.5176 8.1053 16.5533 8.03849 16.6057 7.98605L17.7307 6.86105C17.7654 6.82581 17.8068 6.79779 17.8524 6.77861C17.898 6.75942 17.9469 6.74945 17.9964 6.74927C18.0459 6.74909 18.0949 6.7587 18.1406 6.77755C18.1864 6.79639 18.2279 6.82411 18.2629 6.85909C18.2979 6.89407 18.3256 6.93563 18.3444 6.98137C18.3633 7.02711 18.3729 7.07612 18.3727 7.1256C18.3725 7.17507 18.3626 7.22401 18.3434 7.26961C18.3242 7.31522 18.2962 7.35657 18.261 7.3913L17.136 8.5163C17.1012 8.55118 17.0599 8.57884 17.0144 8.59769C16.9688 8.61655 16.9201 8.62623 16.8708 8.62617Z" fill="#D1193E" />
      <path d="M17.9958 7.50159H4.49512C4.39566 7.50159 4.30028 7.46208 4.22995 7.39175C4.15963 7.32143 4.12012 7.22604 4.12012 7.12659C4.12012 7.02713 4.15963 6.93175 4.22995 6.86142C4.30028 6.7911 4.39566 6.75159 4.49512 6.75159H17.9959C18.0953 6.75159 18.1907 6.7911 18.261 6.86142C18.3314 6.93175 18.3709 7.02713 18.3709 7.12659C18.3709 7.22604 18.3314 7.32143 18.261 7.39175C18.1907 7.46208 18.0953 7.50159 17.9958 7.50159ZM16.8701 12.7494H16.5511C16.4517 12.7494 16.3563 12.7099 16.286 12.6395C16.2157 12.5692 16.1761 12.4738 16.1761 12.3744C16.1761 12.2749 16.2157 12.1795 16.286 12.1092C16.3563 12.0389 16.4517 11.9994 16.5511 11.9994H16.8701C16.9696 11.9994 17.065 12.0389 17.1353 12.1092C17.2056 12.1795 17.2451 12.2749 17.2451 12.3744C17.2451 12.4738 17.2056 12.5692 17.1353 12.6395C17.065 12.7099 16.9696 12.7494 16.8701 12.7494ZM5.94092 12.7538H4.49585C4.39639 12.7538 4.30101 12.7143 4.23068 12.6439C4.16036 12.5736 4.12085 12.4782 4.12085 12.3788C4.12085 12.2793 4.16036 12.1839 4.23068 12.1136C4.30101 12.0433 4.39639 12.0038 4.49585 12.0038H5.94092C6.04037 12.0038 6.13576 12.0433 6.20608 12.1136C6.27641 12.1839 6.31592 12.2793 6.31592 12.3788C6.31592 12.4782 6.27641 12.5736 6.20608 12.6439C6.13576 12.7143 6.04037 12.7538 5.94092 12.7538Z" fill="#D1193E" />
      <path d="M18.3696 10.4741C18.3204 10.4742 18.2716 10.4645 18.2261 10.4456C18.1806 10.4268 18.1392 10.3992 18.1044 10.3644C18.0696 10.3295 18.042 10.2882 18.0231 10.2427C18.0043 10.1972 17.9946 10.1484 17.9946 10.0991V7.50124C17.8952 7.50124 17.7998 7.46173 17.7295 7.3914C17.6591 7.32108 17.6196 7.2257 17.6196 7.12624C17.6196 7.02678 17.6591 6.9314 17.7295 6.86107C17.7998 6.79075 17.8952 6.75124 17.9946 6.75124C18.1935 6.7515 18.3841 6.8306 18.5247 6.97119C18.6653 7.11179 18.7444 7.30241 18.7446 7.50124V10.0991C18.7447 10.1484 18.735 10.1972 18.7161 10.2427C18.6973 10.2882 18.6697 10.3295 18.6348 10.3644C18.6 10.3992 18.5587 10.4268 18.5132 10.4456C18.4677 10.4645 18.4189 10.4742 18.3696 10.4741ZM4.49609 12.752C4.29726 12.7517 4.10664 12.6726 3.96605 12.532C3.82545 12.3914 3.74635 12.2008 3.74609 12.002V7.50124C3.74635 7.30241 3.82545 7.11179 3.96605 6.97119C4.10664 6.8306 4.29726 6.7515 4.49609 6.75124C4.59555 6.75109 4.69099 6.79046 4.76142 6.86069C4.83185 6.93091 4.8715 7.02623 4.87164 7.12569C4.87179 7.22515 4.83242 7.32059 4.7622 7.39102C4.69197 7.46145 4.59665 7.50109 4.49719 7.50124L4.49609 12.002C4.59555 12.002 4.69093 12.0415 4.76126 12.1118C4.83158 12.1822 4.87109 12.2775 4.87109 12.377C4.87109 12.4764 4.83158 12.5718 4.76126 12.6422C4.69093 12.7125 4.59555 12.752 4.49609 12.752ZM12.7574 7.50124C12.7082 7.50127 12.6594 7.49159 12.6139 7.47275C12.5684 7.45392 12.527 7.4263 12.4922 7.39147C12.4574 7.35664 12.4298 7.31529 12.4109 7.26978C12.3921 7.22427 12.3824 7.17549 12.3824 7.12624V0.546509C12.3824 0.447053 12.422 0.35167 12.4923 0.281344C12.5626 0.211018 12.658 0.171509 12.7574 0.171509C12.8569 0.171509 12.9523 0.211018 13.0226 0.281344C13.0929 0.35167 13.1324 0.447053 13.1324 0.546509V7.12624C13.1325 7.17549 13.1228 7.22427 13.104 7.26978C13.0851 7.31529 13.0575 7.35664 13.0227 7.39147C12.9878 7.4263 12.9465 7.45392 12.901 7.47275C12.8555 7.49159 12.8067 7.50127 12.7574 7.50124ZM9.75745 7.50124C9.70819 7.50127 9.65942 7.49159 9.61391 7.47275C9.5684 7.45392 9.52704 7.4263 9.49222 7.39147C9.45739 7.35664 9.42977 7.31529 9.41093 7.26978C9.3921 7.22427 9.38242 7.17549 9.38245 7.12624V0.546509C9.38245 0.447053 9.42195 0.35167 9.49228 0.281344C9.56261 0.211018 9.65799 0.171509 9.75745 0.171509C9.8569 0.171509 9.95228 0.211018 10.0226 0.281344C10.0929 0.35167 10.1324 0.447053 10.1324 0.546509V7.12624C10.1325 7.17549 10.1228 7.22427 10.104 7.26978C10.0851 7.31529 10.0575 7.35664 10.0227 7.39147C9.98785 7.4263 9.9465 7.45392 9.90099 7.47275C9.85548 7.49159 9.8067 7.50127 9.75745 7.50124ZM20.2446 16.124C20.1954 16.1241 20.1466 16.1144 20.1011 16.0955C20.0556 16.0767 20.0142 16.0491 19.9794 16.0143C19.9446 15.9794 19.917 15.9381 19.8981 15.8926C19.8793 15.8471 19.8696 15.7983 19.8696 15.749C19.8687 14.9537 19.5524 14.1911 18.9899 13.6287C18.4275 13.0663 17.665 12.7499 16.8696 12.749C16.7702 12.749 16.6748 12.7095 16.6045 12.6392C16.5341 12.5689 16.4946 12.4735 16.4946 12.374C16.4946 12.2746 16.5341 12.1792 16.6045 12.1089C16.6748 12.0385 16.7702 11.999 16.8696 11.999C17.8638 12.0002 18.817 12.3957 19.52 13.0987C20.223 13.8017 20.6185 14.7548 20.6196 15.749C20.6197 15.7983 20.61 15.8471 20.5911 15.8926C20.5723 15.9381 20.5447 15.9794 20.5099 16.0143C20.475 16.0491 20.4337 16.0767 20.3882 16.0955C20.3427 16.1144 20.2939 16.1241 20.2446 16.124Z" fill="#D1193E" />
      <path d="M20.2451 13.4993C20.1959 13.4993 20.1471 13.4896 20.1016 13.4708C20.0561 13.4519 20.0147 13.4243 19.9799 13.3895C19.9451 13.3547 19.9174 13.3133 19.8986 13.2678C19.8798 13.2223 19.8701 13.1735 19.8701 13.1243C19.8692 12.3289 19.5528 11.5664 18.9904 11.004C18.428 10.4415 17.6655 10.1252 16.8701 10.1243C16.7707 10.1243 16.6753 10.0848 16.605 10.0144C16.5346 9.94411 16.4951 9.84872 16.4951 9.74927C16.4951 9.64981 16.5346 9.55443 16.605 9.4841C16.6753 9.41378 16.7707 9.37427 16.8701 9.37427C17.8643 9.37544 18.8175 9.7709 19.5205 10.4739C20.2235 11.1769 20.6189 12.1301 20.6201 13.1243C20.6201 13.1735 20.6105 13.2223 20.5916 13.2678C20.5728 13.3133 20.5452 13.3547 20.5103 13.3895C20.4755 13.4243 20.4342 13.4519 20.3887 13.4708C20.3431 13.4896 20.2944 13.4993 20.2451 13.4993Z" fill="#D1193E" />
      <path d="M20.2454 16.1243C20.1961 16.1243 20.1473 16.1146 20.1018 16.0958C20.0563 16.0769 20.015 16.0493 19.9801 16.0145C19.9453 15.9797 19.9177 15.9383 19.8988 15.8928C19.88 15.8473 19.8703 15.7985 19.8704 15.7493V13.1243C19.8704 13.0248 19.9099 12.9294 19.9802 12.8591C20.0505 12.7888 20.1459 12.7493 20.2454 12.7493C20.3448 12.7493 20.4402 12.7888 20.5105 12.8591C20.5809 12.9294 20.6204 13.0248 20.6204 13.1243V15.7493C20.6204 15.7985 20.6107 15.8473 20.5919 15.8928C20.573 15.9383 20.5454 15.9797 20.5106 16.0145C20.4758 16.0493 20.4344 16.0769 20.3889 16.0958C20.3434 16.1146 20.2946 16.1243 20.2454 16.1243ZM3.75195 20.2511C3.7027 20.2511 3.65392 20.2415 3.60841 20.2226C3.5629 20.2038 3.52155 20.1762 3.48672 20.1413C3.4519 20.1065 3.42428 20.0652 3.40544 20.0196C3.3866 19.9741 3.37692 19.9254 3.37695 19.8761C3.37768 19.1799 3.65455 18.5125 4.14681 18.0202C4.63908 17.528 5.30652 17.2511 6.00268 17.2504C6.10214 17.2504 6.19752 17.2899 6.26785 17.3602C6.33818 17.4305 6.37768 17.5259 6.37768 17.6254C6.37768 17.7248 6.33818 17.8202 6.26785 17.8905C6.19752 17.9609 6.10214 18.0004 6.00268 18.0004C5.50539 18.001 5.02864 18.1988 4.677 18.5504C4.32536 18.9021 4.12755 19.3788 4.12695 19.8761C4.12698 19.9254 4.1173 19.9741 4.09847 20.0196C4.07963 20.0652 4.05201 20.1065 4.01718 20.1413C3.98235 20.1762 3.941 20.2038 3.89549 20.2226C3.84998 20.2415 3.80121 20.2511 3.75195 20.2511ZM18.752 20.2507C18.7027 20.2508 18.6539 20.2411 18.6084 20.2222C18.5629 20.2034 18.5216 20.1758 18.4867 20.141C18.4519 20.1061 18.4243 20.0648 18.4054 20.0193C18.3866 19.9738 18.3769 19.925 18.377 19.8757C18.3764 19.3786 18.1786 18.9021 17.8271 18.5506C17.4756 18.1991 16.9991 18.0013 16.502 18.0007C16.4025 18.0007 16.3071 17.9612 16.2368 17.8909C16.1665 17.8206 16.127 17.7252 16.127 17.6257C16.127 17.5263 16.1665 17.4309 16.2368 17.3606C16.3071 17.2902 16.4025 17.2507 16.502 17.2507C17.1979 17.2516 17.8651 17.5284 18.3572 18.0205C18.8493 18.5126 19.1261 19.1798 19.127 19.8757C19.127 19.925 19.1173 19.9738 19.0985 20.0193C19.0796 20.0648 19.052 20.1061 19.0172 20.141C18.9824 20.1758 18.941 20.2034 18.8955 20.2222C18.85 20.2411 18.8012 20.2508 18.752 20.2507Z" fill="#D1193E" />
      <path d="M8.25085 18.0004L6.00195 18.0001C5.9025 18.0001 5.80711 17.9605 5.73679 17.8902C5.66646 17.8199 5.62695 17.7245 5.62695 17.6251C5.62695 17.5256 5.66646 17.4302 5.73679 17.3599C5.80711 17.2896 5.9025 17.2501 6.00195 17.2501L8.25085 17.2504C8.35031 17.2504 8.44569 17.2899 8.51602 17.3603C8.58635 17.4306 8.62585 17.526 8.62585 17.6254C8.62585 17.7249 8.58635 17.8203 8.51602 17.8906C8.44569 17.9609 8.35031 18.0004 8.25085 18.0004ZM16.5012 18.0004L14.2516 18.0001C14.1521 18.0001 14.0568 17.9605 13.9864 17.8902C13.9161 17.8199 13.8766 17.7245 13.8766 17.6251C13.8766 17.5256 13.9161 17.4302 13.9864 17.3599C14.0568 17.2896 14.1521 17.2501 14.2516 17.2501L16.5012 17.2504C16.6007 17.2504 16.6961 17.2899 16.7664 17.3603C16.8367 17.4306 16.8762 17.526 16.8762 17.6254C16.8762 17.7249 16.8367 17.8203 16.7664 17.8906C16.6961 17.9609 16.6007 18.0004 16.5012 18.0004ZM18.7512 23.9997C18.702 23.9997 18.6532 23.99 18.6077 23.9712C18.5622 23.9524 18.5208 23.9248 18.486 23.8899C18.4512 23.8551 18.4235 23.8137 18.4047 23.7682C18.3859 23.7227 18.3762 23.674 18.3762 23.6247V19.8754C18.3762 19.776 18.4157 19.6806 18.4861 19.6103C18.5564 19.5399 18.6518 19.5004 18.7512 19.5004C18.8507 19.5004 18.9461 19.5399 19.0164 19.6103C19.0867 19.6806 19.1262 19.776 19.1262 19.8754V23.6247C19.1263 23.6739 19.1166 23.7227 19.0977 23.7682C19.0789 23.8137 19.0513 23.8551 19.0165 23.8899C18.9816 23.9247 18.9403 23.9524 18.8948 23.9712C18.8493 23.99 18.8005 23.9997 18.7512 23.9997ZM9.00122 17.2497C8.95197 17.2497 8.90319 17.24 8.85768 17.2212C8.81217 17.2024 8.77082 17.1748 8.73599 17.1399C8.70117 17.1051 8.67354 17.0637 8.65471 17.0182C8.63587 16.9727 8.62619 16.924 8.62622 16.8747V15.6567C8.62622 15.5572 8.66573 15.4618 8.73606 15.3915C8.80638 15.3212 8.90177 15.2817 9.00122 15.2817C9.10068 15.2817 9.19606 15.3212 9.26639 15.3915C9.33671 15.4618 9.37622 15.5572 9.37622 15.6567V16.8747C9.37625 16.9239 9.36657 16.9727 9.34774 17.0182C9.3289 17.0637 9.30128 17.1051 9.26646 17.1399C9.23163 17.1747 9.19028 17.2024 9.14477 17.2212C9.09925 17.24 9.05048 17.2497 9.00122 17.2497ZM13.5012 17.2497C13.452 17.2497 13.4032 17.24 13.3577 17.2212C13.3122 17.2024 13.2708 17.1748 13.236 17.1399C13.2012 17.1051 13.1735 17.0637 13.1547 17.0182C13.1359 16.9727 13.1262 16.924 13.1262 16.8747V15.6567C13.1262 15.5572 13.1657 15.4618 13.2361 15.3915C13.3064 15.3212 13.4018 15.2817 13.5012 15.2817C13.6007 15.2817 13.6961 15.3212 13.7664 15.3915C13.8367 15.4618 13.8762 15.5572 13.8762 15.6567V16.8747C13.8763 16.9239 13.8666 16.9727 13.8477 17.0182C13.8289 17.0637 13.8013 17.1051 13.7665 17.1399C13.7316 17.1747 13.6903 17.2024 13.6448 17.2212C13.5993 17.24 13.5505 17.2497 13.5012 17.2497ZM11.2585 19.4997C11.1591 19.5002 11.0635 19.4611 10.9928 19.3912C10.9222 19.3212 10.8822 19.226 10.8817 19.1265C10.8812 19.0271 10.9203 18.9315 10.9903 18.8608C11.0602 18.7902 11.1554 18.7502 11.2549 18.7497H11.2585C11.358 18.7497 11.4534 18.7892 11.5237 18.8595C11.594 18.9299 11.6335 19.0252 11.6335 19.1247C11.6335 19.2242 11.594 19.3195 11.5237 19.3899C11.4534 19.4602 11.358 19.4997 11.2585 19.4997ZM11.2585 20.9997C11.2093 20.9999 11.1605 20.9905 11.1149 20.9719C11.0693 20.9532 11.0278 20.9258 10.9928 20.8912C10.9579 20.8565 10.93 20.8153 10.911 20.7699C10.8919 20.7245 10.882 20.6758 10.8817 20.6265C10.8815 20.5773 10.8909 20.5285 10.9096 20.4829C10.9282 20.4373 10.9556 20.3958 10.9903 20.3608C11.0249 20.3258 11.0661 20.298 11.1115 20.2789C11.1569 20.2599 11.2056 20.2499 11.2549 20.2497H11.2585C11.358 20.2497 11.4534 20.2892 11.5237 20.3595C11.594 20.4299 11.6335 20.5252 11.6335 20.6247C11.6335 20.7242 11.594 20.8195 11.5237 20.8899C11.4534 20.9602 11.358 20.9997 11.2585 20.9997ZM9.43701 18.8174C9.35118 18.8176 9.26789 18.7882 9.20107 18.7344C9.13425 18.6805 9.08792 18.6053 9.06984 18.5214C9.05175 18.4375 9.063 18.3499 9.1017 18.2733C9.14039 18.1967 9.2042 18.1357 9.28247 18.1004L11.097 17.2827C11.142 17.2622 11.1905 17.2509 11.2398 17.2493C11.2892 17.2477 11.3383 17.2558 11.3845 17.2732C11.4307 17.2906 11.473 17.317 11.509 17.3508C11.545 17.3845 11.5739 17.4251 11.5942 17.4701C11.6145 17.5151 11.6257 17.5636 11.6272 17.613C11.6287 17.6623 11.6204 17.7115 11.6029 17.7576C11.5853 17.8037 11.5589 17.846 11.525 17.8818C11.4911 17.9177 11.4504 17.9466 11.4054 17.9667L9.59082 18.7845C9.54243 18.8061 9.49003 18.8174 9.43701 18.8174Z" fill="#D1193E" />
      <path d="M13.0664 18.8159C13.0135 18.8158 12.9613 18.8046 12.913 18.7829L11.0981 17.9663C11.053 17.9461 11.0124 17.9173 10.9786 17.8815C10.9447 17.8456 10.9182 17.8034 10.9007 17.7574C10.8831 17.7113 10.8749 17.6622 10.8763 17.6129C10.8778 17.5636 10.8889 17.5151 10.9091 17.4701C10.9294 17.4251 10.9583 17.3846 10.9942 17.3508C11.0301 17.317 11.0723 17.2906 11.1184 17.2731C11.1646 17.2557 11.2137 17.2475 11.263 17.2491C11.3122 17.2506 11.3607 17.2619 11.4057 17.2822L13.2206 18.0988C13.2989 18.134 13.3628 18.195 13.4015 18.2716C13.4403 18.3482 13.4516 18.4358 13.4335 18.5197C13.4155 18.6036 13.3692 18.6788 13.3024 18.7327C13.2356 18.7866 13.1523 18.816 13.0664 18.8159ZM7.50187 18.7499C7.42772 18.7499 7.35523 18.7279 7.29358 18.6867C7.23192 18.6455 7.18387 18.587 7.15549 18.5184C7.12712 18.4499 7.11969 18.3745 7.13415 18.3018C7.14862 18.2291 7.18432 18.1623 7.23675 18.1098L8.73675 16.6091C8.80707 16.5388 8.90244 16.4993 9.00188 16.4993C9.10133 16.4993 9.1967 16.5388 9.26702 16.6091C9.33734 16.6794 9.37684 16.7748 9.37684 16.8742C9.37684 16.9737 9.33734 17.069 9.26702 17.1394L7.76702 18.6401C7.73224 18.675 7.69091 18.7026 7.64541 18.7215C7.59991 18.7403 7.55113 18.75 7.50187 18.7499Z" fill="#D1193E" />
      <path d="M8.62697 20.2492C8.56871 20.2493 8.51124 20.2358 8.45911 20.2098C8.40698 20.1838 8.36163 20.146 8.32667 20.0994L7.20167 18.6002C7.14217 18.5206 7.11666 18.4207 7.13074 18.3223C7.14483 18.224 7.19736 18.1352 7.27681 18.0756C7.35625 18.0159 7.45612 17.9902 7.5545 18.0041C7.65287 18.018 7.74172 18.0704 7.80153 18.1497L8.92653 19.649C8.96835 19.7046 8.99385 19.7709 9.00015 19.8402C9.00646 19.9096 8.99333 19.9793 8.96223 20.0416C8.93113 20.104 8.88329 20.1564 8.82408 20.193C8.76486 20.2297 8.69661 20.2491 8.62697 20.2492Z" fill="#D1193E" />
      <path d="M7.87687 20.9992C7.80272 20.9992 7.73023 20.9772 7.66858 20.936C7.60692 20.8948 7.55887 20.8362 7.53049 20.7677C7.50212 20.6992 7.49469 20.6238 7.50915 20.5511C7.52362 20.4783 7.55932 20.4115 7.61175 20.3591L8.36175 19.6091C8.43207 19.5388 8.52744 19.4993 8.62688 19.4993C8.72633 19.4993 8.8217 19.5388 8.89202 19.6091C8.96234 19.6794 9.00184 19.7748 9.00184 19.8742C9.00184 19.9737 8.96234 20.069 8.89202 20.1394L8.14202 20.8894C8.10724 20.9242 8.06591 20.9519 8.02041 20.9708C7.97491 20.9896 7.92613 20.9993 7.87687 20.9992Z" fill="#D1193E" />
      <path d="M10.1272 24.0003C10.0689 24.0004 10.0113 23.9869 9.9592 23.9609C9.90705 23.9348 9.86174 23.8969 9.82688 23.8501L7.57688 20.8501C7.54735 20.8107 7.52587 20.7659 7.51366 20.7182C7.50146 20.6706 7.49876 20.6209 7.50573 20.5722C7.5127 20.5235 7.5292 20.4766 7.55429 20.4342C7.57938 20.3919 7.61257 20.3549 7.65195 20.3254C7.69134 20.2958 7.73616 20.2743 7.78385 20.2621C7.83153 20.2499 7.88116 20.2472 7.92989 20.2542C7.97862 20.2612 8.0255 20.2777 8.06786 20.3028C8.11021 20.3279 8.14721 20.361 8.17673 20.4004L10.4267 23.4004C10.4684 23.4561 10.4938 23.5223 10.5001 23.5916C10.5063 23.6609 10.4932 23.7306 10.4621 23.7928C10.431 23.855 10.3832 23.9074 10.3241 23.9441C10.2649 23.9807 10.1967 24.0002 10.1272 24.0003Z" fill="#D1193E" />
      <path d="M10.8767 23.9994C10.7948 23.9993 10.7152 23.9724 10.65 23.9228C10.5848 23.8732 10.5376 23.8036 10.5156 23.7247L8.64062 16.9747C8.61401 16.8789 8.62657 16.7764 8.67554 16.6898C8.7245 16.6032 8.80587 16.5396 8.90173 16.5129C8.9976 16.4863 9.1001 16.4989 9.18671 16.5479C9.27331 16.5968 9.33691 16.6782 9.36353 16.774L11.2385 23.524C11.2651 23.6199 11.2525 23.7224 11.2035 23.809C11.1546 23.8956 11.0732 23.9592 10.9774 23.9858C10.9446 23.9948 10.9107 23.9994 10.8767 23.9994ZM15.0021 18.7501C14.9528 18.7502 14.904 18.7405 14.8585 18.7216C14.813 18.7028 14.7717 18.6751 14.7369 18.6402L13.2369 17.1395C13.1675 17.069 13.1288 16.9739 13.1292 16.875C13.1296 16.776 13.1691 16.6813 13.239 16.6113C13.309 16.5413 13.4038 16.5019 13.5027 16.5015C13.6016 16.5011 13.6967 16.5398 13.7672 16.6092L15.2672 18.11C15.3196 18.1624 15.3553 18.2292 15.3698 18.302C15.3843 18.3747 15.3768 18.4501 15.3485 18.5186C15.3201 18.5871 15.272 18.6457 15.2104 18.6869C15.1487 18.7281 15.0762 18.7501 15.0021 18.7501Z" fill="#D1193E" />
      <path d="M13.8767 20.2492C13.807 20.2491 13.7388 20.2297 13.6796 20.193C13.6204 20.1564 13.5725 20.104 13.5414 20.0416C13.5103 19.9793 13.4972 19.9096 13.5035 19.8402C13.5098 19.7709 13.5353 19.7046 13.5771 19.649L14.7021 18.1497C14.7619 18.0704 14.8508 18.018 14.9491 18.0041C15.0475 17.9902 15.1474 18.0159 15.2268 18.0756C15.3063 18.1352 15.3588 18.224 15.3729 18.3223C15.387 18.4207 15.3615 18.5206 15.302 18.6002L14.177 20.0994C14.142 20.146 14.0967 20.1838 14.0445 20.2098C13.9924 20.2358 13.9349 20.2493 13.8767 20.2492Z" fill="#D1193E" />
      <path d="M14.6275 21.0002C14.5783 21.0003 14.5295 20.9906 14.484 20.9717C14.4385 20.9529 14.3972 20.9252 14.3624 20.8903L13.6124 20.1403C13.5427 20.0699 13.5037 19.9747 13.5039 19.8756C13.5042 19.7765 13.5436 19.6815 13.6137 19.6114C13.6838 19.5413 13.7788 19.5018 13.8779 19.5016C13.977 19.5013 14.0722 19.5403 14.1427 19.6101L14.8927 20.3601C14.9451 20.4125 14.9808 20.4793 14.9953 20.5521C15.0097 20.6248 15.0023 20.7002 14.9739 20.7687C14.9455 20.8372 14.8975 20.8958 14.8358 20.937C14.7742 20.9782 14.7017 21.0002 14.6275 21.0002Z" fill="#D1193E" />
      <path d="M12.3764 24.0003C12.3068 24.0002 12.2386 23.9807 12.1795 23.9441C12.1203 23.9074 12.0725 23.855 12.0415 23.7928C12.0104 23.7306 11.9972 23.6609 12.0035 23.5916C12.0097 23.5223 12.0351 23.4561 12.0768 23.4004L14.3268 20.4004C14.3864 20.3209 14.4752 20.2683 14.5736 20.2542C14.6721 20.2401 14.772 20.2657 14.8516 20.3254C14.9311 20.385 14.9837 20.4738 14.9978 20.5722C15.0119 20.6706 14.9863 20.7706 14.9267 20.8501L12.6767 23.8501C12.6418 23.8969 12.5965 23.9348 12.5443 23.9609C12.4922 23.9869 12.4347 24.0004 12.3764 24.0003Z" fill="#D1193E" />
      <path d="M11.6274 23.9994C11.5934 23.9994 11.5595 23.9948 11.5267 23.9858C11.4308 23.9592 11.3495 23.8956 11.3006 23.809C11.2516 23.7224 11.239 23.6199 11.2656 23.524L13.1406 16.774C13.1537 16.7266 13.1761 16.6822 13.2065 16.6434C13.2368 16.6046 13.2745 16.5721 13.3174 16.5479C13.3603 16.5236 13.4075 16.508 13.4564 16.5021C13.5053 16.4961 13.5549 16.4998 13.6024 16.5129C13.6498 16.5261 13.6942 16.5485 13.733 16.5789C13.7719 16.6092 13.8043 16.6469 13.8286 16.6898C13.8528 16.7326 13.8684 16.7799 13.8744 16.8288C13.8803 16.8777 13.8766 16.9273 13.8635 16.9747L11.9885 23.7247C11.9665 23.8036 11.9193 23.8732 11.8541 23.9228C11.7889 23.9724 11.7093 23.9993 11.6274 23.9994Z" fill="#D1193E" />
    </g>
    <defs>
      <clipPath id="clip0_156_248">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>);
};

export default RiderIcon;