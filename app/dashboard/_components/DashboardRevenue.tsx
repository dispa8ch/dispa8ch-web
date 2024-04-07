import Image from "next/image";

function DashboardRevenue() {
  return (
    <div className='w-200   ml-28 bg-white '>
      <section>
        <div className='w-full  flex justify-between mb-8'>
          <div className='w-105 h-35 bg-image flex justify-around items-center  '>
            <div className='w-44 '>
              <p className='text-white text-xl  font-semibold'>
                Total number of Orders
              </p>
            </div>

            <div className='flex gap-8 '>
              <div className='h-15 grid place-items-center '>
                <p className='text-black font-bold text-xl'>15,347</p>
              </div>
              <div>
                <svg
                  width='59'
                  height='59'
                  viewBox='0 0 59 59'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect width='59' height='59' rx='3' fill='#1DD119' />
                  <path
                    d='M41.2989 29.7366L40.1903 17.6765C40.1404 17.1337 39.6851 16.7184 39.1401 16.7184H32.6998V14.2681C32.6998 10.4548 29.5974 7.35248 25.7842 7.35248C21.971 7.35248 18.8686 10.4548 18.8686 14.2681V16.7183H12.4282C11.8831 16.7183 11.4278 17.1336 11.3779 17.6765L9.08656 42.6057C8.99796 43.5703 9.29618 44.4584 9.94894 45.1739C10.6019 45.8895 11.4589 46.2678 12.4275 46.2678H29.3318C31.2752 49.4899 34.8093 51.6494 38.8387 51.6494C44.956 51.6494 49.9328 46.6725 49.9328 40.5553C49.9328 35.2833 46.2362 30.8588 41.2989 29.7366ZM20.978 14.2681C20.978 11.6179 23.134 9.46185 25.7842 9.46185C28.4344 9.46185 30.5905 11.6179 30.5905 14.2681V16.7183H20.978V14.2681ZM12.4275 44.1584C12.0525 44.1584 11.7601 44.0293 11.5073 43.7522C11.2546 43.4752 11.1529 43.1721 11.1871 42.7987L13.3904 18.8277H18.8686V20.7507C18.8686 21.3332 19.3408 21.8054 19.9233 21.8054C20.5057 21.8054 20.978 21.3332 20.978 20.7507V18.8277H30.5905V20.7507C30.5905 21.3332 31.0627 21.8054 31.6452 21.8054C32.2276 21.8054 32.6999 21.3332 32.6999 20.7507V18.8277H38.178L39.1559 29.4661C39.0505 29.4631 38.9448 29.4613 38.8388 29.4613C32.7215 29.4613 27.7447 34.4381 27.7447 40.5554C27.7447 41.8161 27.9565 43.0282 28.3458 44.1584H12.4275ZM38.8387 49.54C33.8845 49.54 29.854 45.5095 29.854 40.5553C29.854 35.6011 33.8845 31.5706 38.8387 31.5706C43.7928 31.5706 47.8234 35.6011 47.8234 40.5553C47.8234 45.5095 43.7928 49.54 38.8387 49.54ZM43.7951 37.2477C44.1979 37.6684 44.1834 38.336 43.7627 38.7389L38.3771 43.8953C38.1733 44.0903 37.9105 44.1881 37.6477 44.1881C37.392 44.1881 37.1362 44.0957 36.9343 43.9102L33.9308 41.1519C33.5018 40.7579 33.4733 40.0907 33.8673 39.6617C34.2613 39.2325 34.9285 39.2042 35.3575 39.5982L37.6327 41.6877L42.3039 37.2152C42.7246 36.8124 43.3922 36.827 43.7951 37.2477Z'
                    fill='white'
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className=' bg-image1 flex justify-around items-center w-105 h-35 '>
            <div className='w-44'>
              <p className='text-white text-xl  font-semibold'>
                Total number of Riders
              </p>
            </div>

            <div className='flex gap-8'>
              <div className='h-15 grid place-items-center'>
                <p className='text-black font-bold text-xl'>100</p>
              </div>
              <div>
                <svg
                  width='59'
                  height='59'
                  viewBox='0 0 59 59'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect width='59' height='59' rx='3' fill='#FDA800' />
                  <g clipPath='url(#clip0_158_64)'>
                    <path
                      d='M29.8246 22.0018C26.4328 22.0018 22.9418 20.7647 19.3515 18.2905C19.233 18.2085 19.1368 18.1023 19.0705 17.9801C19.0042 17.858 18.9697 17.7233 18.9697 17.5867V13.3045C18.9717 11.633 19.6931 10.0305 20.9757 8.84861C22.2582 7.66669 23.997 7.00186 25.8108 7H33.1883C35.0015 7.00256 36.7397 7.66769 38.0216 8.84954C39.3035 10.0314 40.0245 11.6335 40.0265 13.3045V17.5867C40.0265 17.7138 39.9966 17.8393 39.939 17.9548C39.8813 18.0702 39.7972 18.1727 39.6924 18.2553C36.531 20.7526 33.2312 22.0018 29.8246 22.0018ZM20.8788 17.1416C27.0612 21.2576 32.7148 21.269 38.1213 17.1768V13.3063C38.1203 12.1008 37.6002 10.9449 36.6754 10.0924C35.7505 9.23995 34.4964 8.76049 33.1883 8.75932H25.8108C24.5032 8.76072 23.2496 9.24004 22.325 10.0921C21.4004 10.9442 20.8803 12.0995 20.8788 13.3045V17.1416Z'
                      fill='white'
                    />
                    <path
                      d='M43.1056 29.6812C42.9042 29.6815 42.7078 29.623 42.5447 29.5142C42.3815 29.4054 42.2598 29.2518 42.1971 29.0754C42.1344 28.899 42.1339 28.7089 42.1955 28.5322C42.2572 28.3555 42.378 28.2013 42.5405 28.0917C43.1006 27.7104 43.5557 27.2133 43.8692 26.6404C44.1827 26.0674 44.3459 25.4346 44.3455 24.7929V22.57C44.344 21.4833 43.8749 20.4414 43.041 19.673C42.2072 18.9045 41.0767 18.4722 39.8974 18.4708H39.0718C38.8186 18.4708 38.5758 18.3781 38.3968 18.2132C38.2178 18.0482 38.1173 17.8244 38.1173 17.5911C38.1173 17.3578 38.2178 17.1341 38.3968 16.9691C38.5758 16.8042 38.8186 16.7115 39.0718 16.7115H39.8936C41.579 16.7133 43.1948 17.3312 44.3866 18.4295C45.5783 19.5278 46.2487 21.0168 46.2507 22.57V24.7973C46.2506 25.7154 46.0165 26.6205 45.5674 27.4399C45.1183 28.2593 44.4666 28.9701 43.6649 29.515C43.5024 29.6237 43.3065 29.6819 43.1056 29.6812ZM15.7127 29.2555C15.4941 29.2552 15.2823 29.1853 15.1133 29.0575C14.3725 28.5095 13.7749 27.815 13.3648 27.0253C12.9547 26.2356 12.7426 25.3711 12.7441 24.4956V22.57C12.7462 21.0168 13.4166 19.5278 14.6083 18.4295C15.8001 17.3312 17.4159 16.7133 19.1013 16.7115H19.9231C20.1763 16.7115 20.4191 16.8042 20.5981 16.9691C20.7771 17.1341 20.8776 17.3578 20.8776 17.5911C20.8776 17.8244 20.7771 18.0482 20.5981 18.2132C20.4191 18.3781 20.1763 18.4708 19.9231 18.4708H19.1013C17.9222 18.4724 16.7919 18.9049 15.9583 19.6733C15.1247 20.4417 14.6557 21.4834 14.6541 22.57V24.5C14.653 25.1129 14.8015 25.7181 15.0887 26.2709C15.3759 26.8236 15.7943 27.3097 16.3131 27.6932C16.466 27.8077 16.5767 27.963 16.63 28.1378C16.6833 28.3126 16.6766 28.4983 16.6108 28.6695C16.545 28.8406 16.4234 28.9888 16.2626 29.0937C16.1018 29.1987 15.9097 29.2552 15.7127 29.2555ZM30.3856 33.4629C27.1403 33.4629 23.788 32.8243 20.3631 31.5479C20.2444 31.5063 20.1359 31.4432 20.044 31.3625C19.9521 31.2818 19.8785 31.1849 19.8277 31.0777C19.7769 30.9704 19.7498 30.8549 19.748 30.7379C19.7463 30.6209 19.7699 30.5047 19.8174 30.3962C19.865 30.2876 19.9356 30.189 20.0251 30.1059C20.1145 30.0229 20.2211 29.9571 20.3385 29.9125C20.4559 29.8678 20.5818 29.8452 20.7088 29.846C20.8358 29.8468 20.9613 29.8709 21.0781 29.917C26.9389 32.0994 32.5324 32.2797 37.6954 30.4527C37.8126 30.4103 37.9378 30.3897 38.0637 30.392C38.1896 30.3944 38.3138 30.4197 38.4291 30.4665C38.5443 30.5133 38.6484 30.5807 38.7353 30.6647C38.8221 30.7487 38.8901 30.8478 38.9353 30.9561C38.9804 31.0645 39.0019 31.18 38.9984 31.296C38.9948 31.4121 38.9664 31.5263 38.9148 31.6322C38.8632 31.738 38.7893 31.8334 38.6975 31.9129C38.6056 31.9923 38.4977 32.0542 38.3798 32.095C35.8295 33.0019 33.1191 33.4657 30.3856 33.4629Z'
                      fill='white'
                    />
                    <path
                      d='M40.5124 33.4681C39.7553 33.4683 39.0152 33.2616 38.3856 32.874C37.756 32.4865 37.2652 31.9356 36.9754 31.291C36.6856 30.6464 36.6097 29.9371 36.7574 29.2527C36.905 28.5684 37.2696 27.9398 37.8049 27.4464C38.3403 26.953 39.0224 26.6171 39.765 26.481C40.5076 26.3449 41.2773 26.4148 41.9767 26.6819C42.6761 26.949 43.2739 27.4013 43.6944 27.9815C44.115 28.5617 44.3393 29.2438 44.3391 29.9416C44.3379 30.8765 43.9343 31.7728 43.2169 32.4339C42.4996 33.0951 41.527 33.467 40.5124 33.4681ZM40.5124 28.1735C40.1329 28.1733 39.7619 28.2768 39.4463 28.471C39.1306 28.6652 38.8846 28.9413 38.7392 29.2643C38.5939 29.5874 38.5557 29.9429 38.6296 30.286C38.7036 30.629 38.8862 30.9441 39.1545 31.1915C39.4228 31.4389 39.7646 31.6074 40.1368 31.6757C40.509 31.744 40.8948 31.709 41.2455 31.5752C41.5961 31.4414 41.8958 31.2148 42.1067 30.924C42.3175 30.6332 42.4301 30.2913 42.4301 29.9416C42.4293 29.473 42.2271 29.0238 41.8676 28.6924C41.5082 28.361 41.0209 28.1744 40.5124 28.1735ZM18.4878 32.5858C17.7307 32.5858 16.9906 32.3789 16.3612 31.9913C15.7317 31.6037 15.2411 31.0527 14.9514 30.4081C14.6618 29.7635 14.586 29.0542 14.7338 28.3699C14.8815 27.6856 15.2462 27.0571 15.7816 26.5638C16.317 26.0705 16.9991 25.7346 17.7416 25.5986C18.4842 25.4626 19.2538 25.5326 19.9532 25.7997C20.6526 26.0668 21.2503 26.5191 21.6708 27.0993C22.0913 27.6795 22.3156 28.3616 22.3154 29.0593C22.3144 29.9944 21.9108 30.891 21.1932 31.5522C20.4755 32.2134 19.5025 32.5851 18.4878 32.5858ZM18.4878 27.2912C18.1083 27.2912 17.7374 27.3948 17.4219 27.5891C17.1064 27.7834 16.8605 28.0596 16.7152 28.3826C16.57 28.7057 16.532 29.0612 16.6061 29.4042C16.6801 29.7472 16.8628 30.0622 17.1311 30.3095C17.3995 30.5568 17.7413 30.7252 18.1135 30.7934C18.4857 30.8616 18.8714 30.8266 19.222 30.6928C19.5726 30.559 19.8722 30.3324 20.083 30.0416C20.2939 29.7508 20.4064 29.409 20.4064 29.0593C20.4059 28.5905 20.2036 28.141 19.8439 27.8095C19.4842 27.478 18.9965 27.2916 18.4878 27.2912Z'
                      fill='white'
                    />
                    <path
                      d='M22.3186 40.5283C20.7963 40.5267 19.3369 39.9687 18.2604 38.9768C17.1839 37.9849 16.5782 36.64 16.5762 35.2372V31.5549C16.5762 31.3216 16.6767 31.0978 16.8557 30.9329C17.0348 30.7679 17.2775 30.6752 17.5307 30.6752C17.7838 30.6752 18.0266 30.7679 18.2056 30.9329C18.3847 31.0978 18.4852 31.3216 18.4852 31.5549V35.2372C18.4862 36.1738 18.8904 37.0718 19.6091 37.7341C20.3278 38.3965 21.3022 38.769 22.3186 38.7699C22.5717 38.7699 22.8145 38.8626 22.9935 39.0275C23.1725 39.1925 23.2731 39.4162 23.2731 39.6495C23.2731 39.8828 23.1725 40.1066 22.9935 40.2716C22.8145 40.4365 22.5717 40.5292 22.3186 40.5292V40.5283ZM36.686 40.5283C36.4329 40.5283 36.1901 40.4356 36.0111 40.2707C35.8321 40.1057 35.7315 39.882 35.7315 39.6487C35.7315 39.4154 35.8321 39.1916 36.0111 39.0266C36.1901 38.8617 36.4329 38.769 36.686 38.769C37.7015 38.7669 38.6747 38.3941 39.3924 37.7321C40.1102 37.0701 40.5141 36.173 40.5156 35.2372V32.4372C40.5156 32.2039 40.6162 31.9801 40.7952 31.8152C40.9742 31.6502 41.217 31.5575 41.4701 31.5575C41.7233 31.5575 41.9661 31.6502 42.1451 31.8152C42.3241 31.9801 42.4246 32.2039 42.4246 32.4372V35.2372C42.4226 36.6394 41.8175 37.9838 40.7418 38.9756C39.6661 39.9674 38.2077 40.5258 36.686 40.5283Z'
                      fill='white'
                    />
                    <path
                      d='M26.1483 49.3531C24.8797 49.3517 23.6635 48.8867 22.7665 48.06C21.8694 47.2333 21.3648 46.1125 21.3633 44.9434V31.284C21.3633 31.0507 21.4638 30.8269 21.6429 30.6619C21.8219 30.497 22.0646 30.4043 22.3178 30.4043C22.571 30.4043 22.8137 30.497 22.9928 30.6619C23.1718 30.8269 23.2723 31.0507 23.2723 31.284V44.9434C23.2729 45.492 23.458 46.027 23.8021 46.4747C24.1462 46.9224 24.6324 47.2608 25.1938 47.4434V32.2252C25.1938 31.9919 25.2943 31.7682 25.4734 31.6032C25.6524 31.4382 25.8951 31.3455 26.1483 31.3455C26.4015 31.3455 26.6442 31.4382 26.8233 31.6032C27.0023 31.7682 27.1028 31.9919 27.1028 32.2252V48.4734C27.1028 48.7067 27.0023 48.9305 26.8233 49.0955C26.6442 49.2604 26.4015 49.3531 26.1483 49.3531ZM32.851 49.3531C32.5978 49.3531 32.355 49.2604 32.176 49.0955C31.997 48.9305 31.8964 48.7067 31.8964 48.4734V32.4566C31.8964 32.2232 31.997 31.9995 32.176 31.8345C32.355 31.6696 32.5978 31.5769 32.851 31.5769C33.1041 31.5769 33.3469 31.6696 33.5259 31.8345C33.7049 31.9995 33.8055 32.2232 33.8055 32.4566V47.4434C34.3675 47.2613 34.8544 46.9231 35.1992 46.4753C35.544 46.0276 35.7297 45.4924 35.7308 44.9434V31.7062C35.7308 31.4729 35.8313 31.2492 36.0103 31.0842C36.1893 30.9192 36.4321 30.8265 36.6853 30.8265C36.9384 30.8265 37.1812 30.9192 37.3602 31.0842C37.5392 31.2492 37.6398 31.4729 37.6398 31.7062V44.9434C37.6383 46.1131 37.1331 47.2344 36.2353 48.0612C35.3374 48.888 34.1202 49.3526 32.851 49.3531Z'
                      fill='white'
                    />
                    <path
                      d='M29.5002 52C27.1253 52 25.1943 50.3286 25.1943 48.2693V39.2088C25.1943 38.1564 25.648 37.1471 26.4555 36.4029C27.263 35.6587 28.3582 35.2407 29.5002 35.2407C30.6422 35.2407 31.7374 35.6587 32.5449 36.4029C33.3524 37.1471 33.806 38.1564 33.806 39.2088V48.2693C33.806 50.3269 31.8741 52 29.5002 52ZM29.5002 36.9982C28.8647 36.9989 28.2555 37.2319 27.8062 37.646C27.3569 38.06 27.1041 38.6215 27.1034 39.2071V48.2676C27.1034 49.3548 28.1782 50.2389 29.5002 50.2389C30.8222 50.2389 31.897 49.3548 31.897 48.2676V39.2071C31.8967 38.6211 31.6442 38.0593 31.1948 37.6448C30.7454 37.2303 30.136 36.9972 29.5002 36.9965V36.9982Z'
                      fill='white'
                    />
                    <path
                      d='M29.5002 49.3531C27.0852 49.3531 25.1943 48.1559 25.1943 46.6262V40.765C25.1943 39.1508 27.0852 37.8867 29.5002 37.8867C31.9151 37.8867 33.806 39.1508 33.806 40.765V46.6288C33.806 48.1559 31.9132 49.3531 29.5002 49.3531ZM29.5002 39.646C28.1505 39.646 27.1034 40.2477 27.1034 40.765V46.6288C27.1034 46.9692 28.013 47.5964 29.5002 47.5964C30.9873 47.5964 31.897 46.9719 31.897 46.6288V40.765C31.897 40.2513 30.8499 39.646 29.5002 39.646Z'
                      fill='white'
                    />
                    <path
                      d='M29.4996 46.7053C28.2043 46.7053 25.1937 46.5382 25.1937 44.9873V42.3219C25.1937 40.6629 28.4897 40.5336 29.4996 40.5336C30.5095 40.5336 33.8054 40.6629 33.8054 42.3219V44.9873C33.8054 46.5382 30.7939 46.7053 29.4996 46.7053ZM27.1028 44.6495C27.4636 44.7771 28.2778 44.9442 29.4996 44.9442C30.7214 44.9442 31.5356 44.7771 31.8964 44.6495V42.6175C31.5384 42.4759 30.687 42.2929 29.4996 42.2929C28.3121 42.2929 27.4607 42.4759 27.1028 42.6175V44.6495ZM29.4996 33.4681C28.4586 33.4681 27.441 33.1837 26.5755 32.6507C25.7099 32.1177 25.0353 31.3602 24.637 30.4739C24.2386 29.5876 24.1344 28.6123 24.3375 27.6714C24.5405 26.7305 25.0418 25.8662 25.7779 25.1879C26.514 24.5095 27.4518 24.0476 28.4728 23.8604C29.4937 23.6733 30.552 23.7693 31.5137 24.1364C32.4755 24.5036 33.2975 25.1252 33.8758 25.9229C34.4541 26.7206 34.7628 27.6583 34.7628 28.6177C34.7613 29.9037 34.2063 31.1366 33.2196 32.0459C32.2328 32.9553 30.895 33.4667 29.4996 33.4681ZM29.4996 25.5265C28.8362 25.5265 28.1877 25.7078 27.6361 26.0475C27.0845 26.3871 26.6546 26.8699 26.4007 27.4347C26.1468 27.9996 26.0804 28.6211 26.2098 29.2207C26.3392 29.8203 26.6587 30.3711 27.1278 30.8034C27.5969 31.2357 28.1945 31.5301 28.8452 31.6494C29.4958 31.7687 30.1703 31.7075 30.7832 31.4735C31.3961 31.2395 31.9199 30.8433 32.2885 30.335C32.657 29.8267 32.8538 29.229 32.8538 28.6177C32.8527 27.7981 32.499 27.0124 31.8702 26.4329C31.2414 25.8534 30.3888 25.5275 29.4996 25.5265Z'
                      fill='white'
                    />
                    <path
                      d='M29.5004 29.4973C29.2475 29.4965 29.005 29.4039 28.8256 29.2396C28.7813 29.1989 28.7416 29.1541 28.7072 29.1059C28.6725 29.058 28.6431 29.007 28.6194 28.9537C28.5955 28.9006 28.5773 28.8455 28.565 28.7892C28.5525 28.7328 28.5461 28.6753 28.5459 28.6177C28.5458 28.5586 28.5522 28.4997 28.565 28.4417C28.5776 28.3855 28.5958 28.3304 28.6194 28.2773C28.6433 28.2243 28.6727 28.1737 28.7072 28.126C28.7416 28.0778 28.7813 28.033 28.8256 27.9922C29.0046 27.8273 29.2473 27.7347 29.5004 27.7347C29.7535 27.7347 29.9963 27.8273 30.1753 27.9922C30.2188 28.0342 30.2575 28.0802 30.2908 28.1295C30.3252 28.1772 30.3546 28.2279 30.3786 28.2808C30.4025 28.3339 30.421 28.389 30.4339 28.4453C30.4464 28.5032 30.4525 28.5621 30.4521 28.6212C30.4522 28.6788 30.4462 28.7363 30.4339 28.7927C30.4213 28.8491 30.4028 28.9042 30.3786 28.9572C30.3549 29.0105 30.3254 29.0615 30.2908 29.1094C30.2564 29.1576 30.2167 29.2024 30.1724 29.2431C29.9931 29.4055 29.7519 29.4968 29.5004 29.4973ZM39.0724 13.8341C38.8323 13.8346 38.6009 13.7517 38.4242 13.602C38.2475 13.4524 38.1385 13.2468 38.1189 13.0263C38.0992 12.8059 38.1705 12.5867 38.3183 12.4125C38.4662 12.2382 38.6799 12.1217 38.9168 12.0862L43.2255 11.4247C43.3517 11.3994 43.4821 11.398 43.6089 11.4205C43.7357 11.443 43.8563 11.489 43.9632 11.5557C44.0702 11.6224 44.1613 11.7084 44.2312 11.8085C44.301 11.9086 44.3481 12.0207 44.3695 12.1381C44.391 12.2554 44.3864 12.3756 44.356 12.4912C44.3256 12.6069 44.2701 12.7157 44.1928 12.811C44.1154 12.9063 44.0179 12.9862 43.9061 13.0458C43.7944 13.1053 43.6706 13.1434 43.5424 13.1576L39.2327 13.82C39.1798 13.8287 39.1262 13.8334 39.0724 13.8341Z'
                      fill='white'
                    />
                    <path
                      d='M48.1722 15.8195H46.2575C45.2423 15.8195 44.2687 15.4478 43.5509 14.7863C42.8331 14.1248 42.4298 13.2276 42.4298 12.292C42.4298 11.3565 42.8331 10.4593 43.5509 9.79775C44.2687 9.13623 45.2423 8.76459 46.2575 8.76459H48.1722C49.1874 8.76459 50.161 9.13623 50.8788 9.79775C51.5966 10.4593 51.9999 11.3565 51.9999 12.292C51.9999 13.2276 51.5966 14.1248 50.8788 14.7863C50.161 15.4478 49.1874 15.8195 48.1722 15.8195ZM46.2575 10.5239C45.7486 10.5239 45.2606 10.7102 44.9008 11.0418C44.541 11.3734 44.3389 11.8231 44.3389 12.292C44.3389 12.761 44.541 13.2107 44.9008 13.5423C45.2606 13.8739 45.7486 14.0602 46.2575 14.0602H48.1722C48.6811 14.0602 49.1691 13.8739 49.5289 13.5423C49.8887 13.2107 50.0908 12.761 50.0908 12.292C50.0908 11.8231 49.8887 11.3734 49.5289 11.0418C49.1691 10.7102 48.6811 10.5239 48.1722 10.5239H46.2575ZM19.9251 13.8341C19.872 13.8339 19.819 13.8298 19.7666 13.8218L15.4579 13.1576C15.3292 13.1441 15.2048 13.1066 15.0923 13.0474C14.9799 12.9882 14.8816 12.9085 14.8037 12.8131C14.7257 12.7178 14.6696 12.6089 14.6387 12.4929C14.6079 12.377 14.603 12.2564 14.6244 12.1387C14.6457 12.021 14.6928 11.9084 14.7629 11.808C14.8329 11.7076 14.9244 11.6213 15.0317 11.5545C15.1391 11.4878 15.2601 11.4418 15.3873 11.4195C15.5146 11.3971 15.6454 11.3989 15.7719 11.4247L20.0768 12.0862C20.3137 12.1217 20.5274 12.2382 20.6753 12.4125C20.8232 12.5867 20.8944 12.8059 20.8748 13.0263C20.8551 13.2468 20.7461 13.4524 20.5694 13.602C20.3927 13.7517 20.1613 13.8346 19.9212 13.8341H19.9251Z'
                      fill='white'
                    />
                    <path
                      d='M12.7424 15.8195H10.8276C9.81248 15.8195 8.83891 15.4478 8.12109 14.7863C7.40327 14.1248 7 13.2276 7 12.292C7 11.3565 7.40327 10.4593 8.12109 9.79775C8.83891 9.13623 9.81248 8.76459 10.8276 8.76459H12.7424C13.7576 8.76459 14.7311 9.13623 15.449 9.79775C16.1668 10.4593 16.57 11.3565 16.57 12.292C16.57 13.2276 16.1668 14.1248 15.449 14.7863C14.7311 15.4478 13.7576 15.8195 12.7424 15.8195ZM10.8276 10.5239C10.3188 10.5239 9.83079 10.7102 9.47099 11.0418C9.11118 11.3734 8.90904 11.8231 8.90904 12.292C8.90904 12.761 9.11118 13.2107 9.47099 13.5423C9.83079 13.8739 10.3188 14.0602 10.8276 14.0602H12.7424C13.2512 14.0602 13.7392 13.8739 14.0991 13.5423C14.4589 13.2107 14.661 12.761 14.661 12.292C14.661 11.8231 14.4589 11.3734 14.0991 11.0418C13.7392 10.7102 13.2512 10.5239 12.7424 10.5239H10.8276Z'
                      fill='white'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_158_64'>
                      <rect
                        width='45'
                        height='45'
                        fill='white'
                        transform='translate(7 7)'
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex justify-between'>
          <div className='rounded-md w-68 h-28  relative bg-image2'>
            <div className='w-22  absolute bottom-0 right-0 h-16'>
              <Image alt='' src={'../../../public/images/delagate-tasks.png'} />{" "}
            </div>
            <p className='ml-3 font-semibold text-lg text-white mt-3'>
              Today's deliveries
            </p>
            <p className='ml-3 font-bold text-xl mt-3 text-black'>1000</p>
          </div>

          <div className='rounded-md w-68 h-28  relative bg-image3'>
            <div className='w-22  absolute bottom-0 right-0 h-16'>
              <Image alt='' src={'../../../public/images/automate-workflow.png'} />{" "}
            </div>
            <p className='ml-3 font-semibold text-lg text-white mt-3'>
              Completed deliveries
            </p>
            <p className='ml-3 font-bold text-xl mt-3 text-black'>100</p>
          </div>

          <div className='rounded-md w-68 h-28 relative bg-image4'>
            <div className='w-22  absolute bottom-0 right-0 h-16'>
              <Image alt='' src={'../../../public/images/automate-workflow.png'} />{" "}
            </div>
            <p className='ml-3 font-semibold text-lg text-white mt-3'>
              Assigned riders
            </p>
            <p className='ml-3 font-bold text-xl mt-3 text-black'>576</p>
          </div>
        </div>
      </section>

      <div className='w-200 bg-white mt-20'>
        <div className='  flex justify-between'>
          <div>
            <p className='text-xl font-bold text-black'>Revenue Stream</p>
          </div>

          <div className='flex gap-4'>
            <div className=' w-36 px-3 py-1 items-center  bg-white flex justify-between border rounded-md border-gray-400'>
              <div>
                <p className='text-lg text-black font-normal'>Filter</p>
              </div>
              <div>
                <svg
                  width='15'
                  height='15'
                  viewBox='0 0 10 10'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clipPath='url(#clip0_65_21)'>
                    <path
                      d='M0.625 2.18751H0.669375C0.737585 2.45551 0.893143 2.69314 1.11147 2.86286C1.3298 3.03258 1.59846 3.12472 1.875 3.12472C2.15154 3.12472 2.4202 3.03258 2.63853 2.86286C2.85686 2.69314 3.01241 2.45551 3.08063 2.18751H9.375C9.45788 2.18751 9.53737 2.15459 9.59597 2.09598C9.65458 2.03738 9.6875 1.95789 9.6875 1.87501C9.6875 1.79213 9.65458 1.71265 9.59597 1.65404C9.53737 1.59544 9.45788 1.56251 9.375 1.56251H3.08063C3.01241 1.29452 2.85686 1.05689 2.63853 0.887167C2.4202 0.717444 2.15154 0.625305 1.875 0.625305C1.59846 0.625305 1.3298 0.717444 1.11147 0.887167C0.893143 1.05689 0.737585 1.29452 0.669375 1.56251H0.625C0.54212 1.56251 0.462634 1.59544 0.404029 1.65404C0.345424 1.71265 0.3125 1.79213 0.3125 1.87501C0.3125 1.95789 0.345424 2.03738 0.404029 2.09598C0.462634 2.15459 0.54212 2.18751 0.625 2.18751ZM1.875 1.25001C1.99861 1.25001 2.11945 1.28667 2.22223 1.35534C2.32501 1.42402 2.40512 1.52163 2.45242 1.63584C2.49973 1.75004 2.51211 1.87571 2.48799 1.99694C2.46388 2.11818 2.40435 2.22955 2.31694 2.31695C2.22953 2.40436 2.11817 2.46389 1.99693 2.488C1.87569 2.51212 1.75003 2.49974 1.63582 2.45244C1.52162 2.40513 1.42401 2.32503 1.35533 2.22224C1.28666 2.11946 1.25 1.99863 1.25 1.87501C1.25 1.70925 1.31585 1.55028 1.43306 1.43307C1.55027 1.31586 1.70924 1.25001 1.875 1.25001ZM9.375 4.68751H9.33062C9.26241 4.41952 9.10686 4.18189 8.88853 4.01217C8.6702 3.84244 8.40154 3.75031 8.125 3.75031C7.84846 3.75031 7.5798 3.84244 7.36147 4.01217C7.14314 4.18189 6.98759 4.41952 6.91937 4.68751H0.625C0.54212 4.68751 0.462634 4.72044 0.404029 4.77904C0.345424 4.83765 0.3125 4.91713 0.3125 5.00001C0.3125 5.08289 0.345424 5.16238 0.404029 5.22098C0.462634 5.27959 0.54212 5.31251 0.625 5.31251H6.91937C6.98759 5.58051 7.14314 5.81814 7.36147 5.98786C7.5798 6.15758 7.84846 6.24972 8.125 6.24972C8.40154 6.24972 8.6702 6.15758 8.88853 5.98786C9.10686 5.81814 9.26241 5.58051 9.33062 5.31251H9.375C9.45788 5.31251 9.53737 5.27959 9.59597 5.22098C9.65458 5.16238 9.6875 5.08289 9.6875 5.00001C9.6875 4.91713 9.65458 4.83765 9.59597 4.77904C9.53737 4.72044 9.45788 4.68751 9.375 4.68751ZM8.125 5.62501C8.00139 5.62501 7.88055 5.58836 7.77777 5.51968C7.67499 5.45101 7.59488 5.35339 7.54757 5.23919C7.50027 5.12499 7.48789 4.99932 7.51201 4.87808C7.53612 4.75684 7.59565 4.64548 7.68306 4.55807C7.77047 4.47066 7.88183 4.41114 8.00307 4.38702C8.12431 4.36291 8.24997 4.37528 8.36418 4.42259C8.47838 4.46989 8.57599 4.55 8.64467 4.65278C8.71334 4.75556 8.75 4.8764 8.75 5.00001C8.75 5.16577 8.68415 5.32474 8.56694 5.44196C8.44973 5.55917 8.29076 5.62501 8.125 5.62501ZM9.375 7.81251H6.20563C6.13741 7.54452 5.98186 7.30689 5.76353 7.13717C5.5452 6.96745 5.27654 6.87531 5 6.87531C4.72346 6.87531 4.4548 6.96745 4.23647 7.13717C4.01814 7.30689 3.86259 7.54452 3.79437 7.81251H0.625C0.54212 7.81251 0.462634 7.84544 0.404029 7.90404C0.345424 7.96265 0.3125 8.04213 0.3125 8.12501C0.3125 8.20789 0.345424 8.28738 0.404029 8.34598C0.462634 8.40459 0.54212 8.43751 0.625 8.43751H3.79437C3.86259 8.70551 4.01814 8.94314 4.23647 9.11286C4.4548 9.28258 4.72346 9.37472 5 9.37472C5.27654 9.37472 5.5452 9.28258 5.76353 9.11286C5.98186 8.94314 6.13741 8.70551 6.20563 8.43751H9.375C9.45788 8.43751 9.53737 8.40459 9.59597 8.34598C9.65458 8.28738 9.6875 8.20789 9.6875 8.12501C9.6875 8.04213 9.65458 7.96265 9.59597 7.90404C9.53737 7.84544 9.45788 7.81251 9.375 7.81251ZM5 8.75001C4.87639 8.75001 4.75555 8.71336 4.65277 8.64468C4.54999 8.57601 4.46988 8.47839 4.42257 8.36419C4.37527 8.24999 4.36289 8.12432 4.38701 8.00308C4.41112 7.88184 4.47065 7.77048 4.55806 7.68307C4.64547 7.59566 4.75683 7.53614 4.87807 7.51202C4.99931 7.48791 5.12497 7.50028 5.23918 7.54759C5.35338 7.59489 5.45099 7.675 5.51967 7.77778C5.58834 7.88056 5.625 8.0014 5.625 8.12501C5.625 8.29077 5.55915 8.44975 5.44194 8.56696C5.32473 8.68417 5.16576 8.75001 5 8.75001Z'
                      fill='#757575'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_65_21'>
                      <rect width='10' height='10' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            <div className=' w-36 px-3 py-1 items-center bg-white flex justify-between border rounded-md border-gray-400'>
              <div>
                <p className='text-lg text-black font-normal'>Month</p>
              </div>{" "}
              <div>
                {" "}
                <svg
                  width='10'
                  height='9'
                  viewBox='0 0 5 4'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2.11114 3.51891C2.31127 3.7665 2.68873 3.7665 2.88886 3.51891L4.87289 1.06431C5.13718 0.737339 4.90446 0.25 4.48403 0.25H0.515966C0.0955412 0.25 -0.137177 0.737339 0.12711 1.06431L2.11114 3.51891Z'
                    fill='#757575'
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardRevenue;
