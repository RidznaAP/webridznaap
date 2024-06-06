import React from "react";

interface IconProps {
  name:
    | "download"
    | "circle"
    | "chat"
    | "line1"
    | "line2"
    | "figma"
    | "miro"
    | "canva"
    | "vsc"
    | "capcut"
    | "notion"
    | "trello";
  className?: string;
  width?: number;
  height?: number;
}

const Icon = ({ name, className, width, height }: IconProps) => {
  switch (name) {
    case "download":
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 23 27"
          className="animate-rain-arrow"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.3904 11.697C21.2996 11.4839 21.1574 11.3042 20.9803 11.1783C20.8033 11.0524 20.5984 10.9856 20.3893 10.9855H15.9446V2.1857C15.9446 1.85229 15.8275 1.53254 15.6191 1.29679C15.4107 1.06103 15.1281 0.928589 14.8334 0.928589H8.1663C7.87159 0.928589 7.58896 1.06103 7.38058 1.29679C7.17219 1.53254 7.05512 1.85229 7.05512 2.1857V10.9855H2.6104C2.4012 10.9859 2.19634 11.053 2.01935 11.1792C1.84235 11.3054 1.7004 11.4854 1.60978 11.6988C1.51916 11.9121 1.48355 12.15 1.50703 12.3852C1.53052 12.6203 1.61216 12.8432 1.74257 13.0283L10.632 25.5994C10.7361 25.7467 10.8682 25.8656 11.0184 25.9473C11.1686 26.029 11.3332 26.0714 11.4998 26.0714C11.6665 26.0714 11.8311 26.029 11.9813 25.9473C12.1315 25.8656 12.2636 25.7467 12.3677 25.5994L21.2571 13.0283C21.5238 12.6499 21.5749 12.1332 21.3904 11.697Z"
            fill="#fff"
          />
        </svg>
      );
    case "circle":
      return (
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="200" height="200" rx="100" fill="#2185D5" />
        </svg>
      );
    case "chat":
      return (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.5 17.2747V9.4C3.5 7.15979 3.5 6.03969 3.93597 5.18404C4.31947 4.43139 4.93139 3.81947 5.68404 3.43597C6.53969 3 7.65979 3 9.9 3H15.1C17.3402 3 18.4603 3 19.316 3.43597C20.0686 3.81947 20.6805 4.43139 21.064 5.18404C21.5 6.03969 21.5 7.15979 21.5 9.4V10.6C21.5 12.8402 21.5 13.9603 21.064 14.816C20.6805 15.5686 20.0686 16.1805 19.316 16.564C18.4603 17 17.3402 17 15.1 17H10.8592C10.3579 17 10.1073 17 9.87215 17.0578C9.66368 17.109 9.46482 17.1935 9.2832 17.3079C9.07832 17.4371 8.90431 17.6174 8.55628 17.9781L7.62716 18.9411C6.3371 20.2782 5.69206 20.9468 5.13642 20.9975C4.65448 21.0415 4.18091 20.8503 3.86464 20.484C3.5 20.0617 3.5 19.1327 3.5 17.2747Z"
            fill="#2185D5"
          />
        </svg>
      );
    case "line1":
      return (
        <svg
          width="22"
          height="193"
          viewBox="0 0 22 193"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.2278 22.2352C17.1188 22.219 21.8812 17.4302 21.8649 11.5391C21.8486 5.64812 17.0598 0.885706 11.1688 0.901991C5.2778 0.918276 0.515392 5.70709 0.531677 11.5981C0.547962 17.4891 5.33677 22.2515 11.2278 22.2352ZM13.6983 192.438L13.1983 11.5631L9.19831 11.5742L9.69831 192.449L13.6983 192.438Z"
            fill="#303841"
          />
        </svg>
      );
    case "line2":
      return (
        <svg
          width="22"
          height="138"
          viewBox="0 0 22 138"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9325 21.9849C16.8235 21.9849 21.5992 17.2093 21.5992 11.3182C21.5992 5.4272 16.8235 0.651566 10.9325 0.651566C5.04146 0.651566 0.265828 5.4272 0.265828 11.3182C0.265828 17.2093 5.04146 21.9849 10.9325 21.9849ZM12.9325 137.319V11.3182H8.9325V137.319H12.9325Z"
            fill="#303841"
          />
        </svg>
      );
    case "figma":
      return (
        <svg
          width="30"
          height="46"
          viewBox="0 0 30 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_134_159)">
            <path
              d="M7.5 45.5625C11.64 45.5625 15 42.2025 15 38.0625V30.5625H7.5C3.36 30.5625 0 33.9225 0 38.0625C0 42.2025 3.36 45.5625 7.5 45.5625Z"
              fill="#0ACF83"
            />
            <path
              d="M0 23.0625C0 18.9225 3.36 15.5625 7.5 15.5625H15V30.5625H7.5C3.36 30.5625 0 27.2025 0 23.0625Z"
              fill="#A259FF"
            />
            <path
              d="M0 8.0625C0 3.9225 3.36 0.5625 7.5 0.5625H15V15.5625H7.5C3.36 15.5625 0 12.2025 0 8.0625Z"
              fill="#F24E1E"
            />
            <path
              d="M15 0.5625H22.5C26.64 0.5625 30 3.9225 30 8.0625C30 12.2025 26.64 15.5625 22.5 15.5625H15V0.5625Z"
              fill="#FF7262"
            />
            <path
              d="M30 23.0625C30 27.2025 26.64 30.5625 22.5 30.5625C18.36 30.5625 15 27.2025 15 23.0625C15 18.9225 18.36 15.5625 22.5 15.5625C26.64 15.5625 30 18.9225 30 23.0625Z"
              fill="#1ABCFE"
            />
          </g>
          <defs>
            <clipPath id="clip0_134_159">
              <rect
                width="30"
                height="45"
                fill="white"
                transform="translate(0 0.5625)"
              />
            </clipPath>
          </defs>
        </svg>
      );
    case "miro":
      return (
        <svg
          width="40"
          height="41"
          viewBox="0 0 40 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_210_86)">
            <path
              d="M28.9867 0.0625H23.1667L28.3333 8.07583L17.4067 0.0625H11.5817L16.7517 10.5625L5.82333 0.0625H0L5.08333 13.6142L0 40.0625H5.82333L16.75 11.7042L11.5817 40.0625H17.405L28.3333 9.21917L23.165 40.0625H28.9867L40 6.1825L28.9867 0.0625Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_210_86">
              <rect
                width="40"
                height="40"
                fill="white"
                transform="translate(0 0.0625)"
              />
            </clipPath>
          </defs>
        </svg>
      );
    case "canva":
      return (
        <svg
          width="40"
          height="41"
          viewBox="0 0 40 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_134_243)">
            <path
              d="M18.5593 0.109973C18.4081 0.125911 17.9359 0.181848 17.5193 0.230911C15.84 0.422473 13.9356 0.926848 12.2643 1.63091C6.21591 4.1581 1.66372 9.70279 0.407783 16.0625C0.112158 17.575 0.0402832 18.3181 0.0402832 20.0625C0.0402832 22.3109 0.263721 23.8625 0.855908 25.8231C2.79185 32.2387 7.83185 37.2706 14.264 39.214C16.2 39.7987 17.76 40.0222 20 40.0222C22.2484 40.0222 23.8 39.7987 25.7606 39.2065C32.1762 37.2706 37.2081 32.2306 39.1515 25.7984C39.7362 23.8625 39.9597 22.3025 39.9597 20.0625C39.9597 19.1103 39.9122 18.0228 39.8559 17.6222C39.2078 12.9984 37.3034 9.11028 34.1284 5.93404C30.9593 2.78216 27.0875 0.870598 22.5593 0.222473C21.9356 0.134348 19.0475 0.0537233 18.5593 0.109973ZM12.0397 12.71C12.4647 12.8381 12.6634 12.9581 12.9515 13.2459C13.5118 13.8147 13.64 14.1262 13.64 14.9818C13.64 15.6228 13.6156 15.7425 13.424 16.0781C13.0553 16.7018 12.1997 17.2781 11.6078 17.2937C11.1912 17.3025 11.2084 17.1181 11.664 16.6384C12.2718 16.0062 12.3597 15.7665 12.3597 14.8218C12.3522 13.9103 12.24 13.5987 11.8162 13.3425C11.4637 13.1265 11.0803 13.1425 10.52 13.4059C9.06372 14.1028 7.48778 16.4225 6.87247 18.799C6.05591 21.9668 7.50372 24.5022 9.88778 24.07C10.5834 23.9418 11.8956 23.2706 12.4647 22.7418C12.9359 22.3109 12.9359 22.3025 12.9834 21.7668C13.0884 20.6459 13.8793 19.5265 14.9365 19.0065C15.4234 18.7659 15.5443 18.7428 16.2 18.7428C16.8237 18.7428 16.9678 18.7747 17.2718 18.9418C18.2397 19.495 18.0397 20.7825 16.9922 20.7825C16.3843 20.7825 16.0718 20.47 16.5125 20.3031C16.9447 20.1431 16.7834 19.5425 16.2806 19.4068C15.6884 19.2543 15.0159 19.6547 14.5922 20.4225C14.0797 21.3506 14.0562 22.455 14.5434 22.9581C15.0159 23.4622 15.6078 23.0631 16.0643 21.9178C16.3037 21.3343 16.6478 21.0218 17.0484 21.0218C17.4 21.0218 17.4647 21.2381 17.3118 21.8947C17.0875 22.9103 17.24 23.174 17.8722 22.8628C18.0797 22.7662 18.424 22.5431 18.6315 22.3831L19.0234 22.0706L19.2884 20.6862C19.5765 19.1347 19.6875 18.9259 20.2797 18.815C20.8484 18.71 20.9765 18.9906 20.7678 19.8781L20.6553 20.375L21.0718 19.95C22.0556 18.9418 23.264 18.4462 23.6803 18.8625C23.9037 19.0859 23.8793 19.3665 23.5597 20.3578C23.4081 20.8303 23.1993 21.575 23.1043 21.9984C22.9603 22.6381 22.9515 22.7906 23.0325 22.8947C23.2887 23.1984 24.0722 22.8859 24.7681 22.2059L25.1759 21.8069L25.2247 20.9181C25.2722 19.894 25.3675 19.5265 25.6397 19.1981C25.8959 18.8943 26.36 18.6709 26.6078 18.7343C26.8556 18.799 26.8556 19.0384 26.6322 19.7428C26.3197 20.7106 26.3525 22.9422 26.6725 22.9422C26.8006 22.9422 27.4559 22.2547 27.8725 21.6787L28.1837 21.2537L27.9359 20.9987C27.5037 20.5425 27.4 20.2468 27.4 19.5022C27.4 18.959 27.4403 18.7587 27.5756 18.4937C27.8003 18.0787 28.1518 17.775 28.5681 17.654C29.0075 17.5184 29.5518 17.7418 29.7753 18.1422C30 18.55 29.944 19.4618 29.6556 20.0868L29.4481 20.5422H29.7278C30.1122 20.5422 30.2637 20.4468 30.9522 19.7987C31.3122 19.4547 31.7284 19.1581 32.0397 19.014C33.264 18.439 34.7047 18.7343 34.9437 19.6143C35.1437 20.3187 34.7047 20.8143 33.9356 20.7581C33.3837 20.7181 33.28 20.5737 33.6 20.3031C34.1759 19.8218 33.6 19.2068 32.7759 19.4303C32.3278 19.5509 31.8237 20.054 31.5603 20.6387C31.0315 21.8069 31.3122 23.1825 32.0715 23.1825C32.3756 23.1825 32.9125 22.5822 33.12 21.9984C33.3678 21.3259 33.8878 20.9025 34.2797 21.0547C34.4959 21.1343 34.5118 21.3503 34.3762 22.0303C34.2237 22.775 34.2003 23.4709 34.32 23.7906C34.3678 23.91 34.5118 24.1347 34.6484 24.2862C34.9034 24.574 34.9122 24.6781 34.6959 24.8147C34.5922 24.8865 34.4553 24.855 34.12 24.6709C33.6559 24.4303 33.2556 23.9981 33.1115 23.5903L33.0237 23.3509L32.7037 23.5903C32.5193 23.7184 32.2315 23.8625 32.064 23.91C31.4 24.0859 30.5834 23.6306 30.2003 22.8628C30.0475 22.5659 30 21.6947 30.1122 21.3587C30.1759 21.1744 30.1759 21.1744 29.9193 21.3025C29.784 21.3747 29.4959 21.454 29.2725 21.4784C28.9037 21.519 28.8475 21.559 28.4803 22.0228C27.9603 22.6697 27.0397 23.5428 26.6637 23.7272C25.8643 24.1262 25.6006 24.014 25.3918 23.1897L25.2478 22.6381L24.9034 22.9422C24.464 23.3265 23.584 23.7906 23.0797 23.9028C22.6 24.0065 22.0875 23.854 21.8797 23.534C21.5687 23.0543 21.6725 22.0387 22.1678 20.6703C22.5353 19.6547 22.2718 19.639 21.344 20.6068C20.6556 21.3343 20.36 21.8543 20.1684 22.6625C19.9684 23.5025 19.7278 23.8062 19.1847 23.9343C18.8562 24.0065 18.7034 23.8062 18.7684 23.3668L18.8159 23.014L18.5118 23.2228C18.0797 23.5184 17.5353 23.7906 17.1593 23.8944C16.7834 23.9981 16.2878 23.8868 16.1681 23.6781C15.9522 23.3109 15.9522 23.3109 15.6165 23.5743C14.8878 24.1665 13.8478 23.9981 13.3203 23.2143L13.1515 22.9665L12.6243 23.4547C11.1034 24.8465 9.20028 25.4703 7.79185 25.0381C5.99966 24.495 5.00841 22.9581 5.02435 20.7425C5.03185 18.5184 6.0156 16.1747 7.67216 14.4387C8.60841 13.4622 9.48841 12.8859 10.3847 12.67C11.0315 12.51 11.4247 12.5181 12.0397 12.71Z"
              fill="#00C4CC"
            />
            <path
              d="M28.2556 18.3987C28.0796 18.5744 28.1443 19.2787 28.3681 19.7269C28.4803 19.9587 28.6 20.1431 28.64 20.1431C28.6718 20.1431 28.7437 19.9587 28.8 19.734C29 18.9028 28.64 18.014 28.2556 18.3987Z"
              fill="#00C4CC"
            />
          </g>
          <defs>
            <clipPath id="clip0_134_243">
              <rect
                width="40"
                height="40"
                fill="white"
                transform="translate(0 0.0625)"
              />
            </clipPath>
          </defs>
        </svg>
      );
    case "vsc":
      return (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_134_221)">
            <mask
              id="mask0_134_221"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="40"
              height="40"
            >
              <path
                d="M28.2544 39.6883C28.5714 39.8119 28.9105 39.869 29.2506 39.8559C29.5906 39.8428 29.9243 39.7599 30.2309 39.6123L38.4342 35.6652C38.8567 35.4617 39.2132 35.1432 39.4627 34.7461C39.7121 34.3491 39.8444 33.8897 39.8444 33.4208V6.65578C39.8444 6.18689 39.7121 5.72751 39.4627 5.3305C39.2132 4.93348 38.8567 4.61495 38.4342 4.41156L30.2311 0.464216C29.7676 0.24117 29.2462 0.16773 28.7391 0.254062C28.232 0.340394 27.7642 0.582228 27.4006 0.946091L11.6964 15.2734L4.85579 10.0809C4.54723 9.84671 4.1664 9.72789 3.77939 9.7451C3.39238 9.76231 3.0236 9.91446 2.73704 10.1752L0.543136 12.1709C-0.180301 12.8289 -0.181082 13.967 0.541261 14.6261L6.47361 20.0383L0.541261 25.4503C-0.181082 26.1095 -0.180301 27.2475 0.543136 27.9056L2.73704 29.9013C3.02358 30.162 3.39235 30.3141 3.77936 30.3314C4.16637 30.3486 4.54721 30.2298 4.85579 29.9956L11.6964 24.803L27.4006 39.1303C27.6434 39.3735 27.9342 39.5635 28.2544 39.6883ZM29.8894 10.9931L17.9734 20.0383L29.8894 29.0833V10.9931Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_134_221)">
              <path
                d="M38.4586 4.41768L30.2489 0.464869C29.7853 0.241643 29.2637 0.168047 28.7564 0.254265C28.2491 0.340484 27.7811 0.582254 27.4172 0.946119L0.541585 25.4503C-0.181227 26.1096 -0.18029 27.2475 0.54346 27.9057L2.73877 29.9013C3.02556 30.162 3.39456 30.3142 3.7818 30.3315C4.16904 30.3487 4.5501 30.2299 4.85893 29.9957L37.2233 5.44315C38.3091 4.61956 39.8686 5.39393 39.8686 6.75674V6.66143C39.8686 6.19264 39.7363 5.73336 39.4868 5.33644C39.2374 4.93951 38.881 4.62105 38.4586 4.41768Z"
                fill="#0065A9"
              />
            </g>
            <mask
              id="mask1_134_221"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="40"
              height="40"
            >
              <path
                d="M28.2544 39.6883C28.5714 39.8119 28.9105 39.869 29.2506 39.8559C29.5906 39.8428 29.9243 39.7599 30.2309 39.6123L38.4342 35.6652C38.8567 35.4617 39.2132 35.1432 39.4627 34.7461C39.7121 34.3491 39.8444 33.8897 39.8444 33.4208V6.65578C39.8444 6.18689 39.7121 5.72751 39.4627 5.3305C39.2132 4.93348 38.8567 4.61495 38.4342 4.41156L30.2311 0.464216C29.7676 0.24117 29.2462 0.16773 28.7391 0.254062C28.232 0.340394 27.7642 0.582228 27.4006 0.946091L11.6964 15.2734L4.85579 10.0809C4.54723 9.84671 4.1664 9.72789 3.77939 9.7451C3.39238 9.76231 3.0236 9.91446 2.73704 10.1752L0.543136 12.1709C-0.180301 12.8289 -0.181082 13.967 0.541261 14.6261L6.47361 20.0383L0.541261 25.4503C-0.181082 26.1095 -0.180301 27.2475 0.543136 27.9056L2.73704 29.9013C3.02358 30.162 3.39235 30.3141 3.77936 30.3314C4.16637 30.3486 4.54721 30.2298 4.85579 29.9956L11.6964 24.803L27.4006 39.1303C27.6434 39.3735 27.9342 39.5635 28.2544 39.6883ZM29.8894 10.9931L17.9734 20.0383L29.8894 29.0833V10.9931Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask1_134_221)">
              <path
                d="M38.4586 35.6588L30.2489 39.6116C29.7853 39.8348 29.2637 39.9083 28.7564 39.8221C28.2491 39.7359 27.7811 39.4941 27.4172 39.1303L0.541585 14.6261C-0.181227 13.967 -0.18029 12.8289 0.54346 12.1709L2.73877 10.1752C3.02558 9.91442 3.39459 9.76225 3.78183 9.74505C4.16907 9.72784 4.55012 9.84667 4.85893 10.0809L37.2233 34.6333C38.3091 35.4569 39.8686 34.6825 39.8686 33.3195V33.415C39.8686 33.8838 39.7363 34.3431 39.4868 34.74C39.2374 35.1369 38.881 35.4554 38.4586 35.6588Z"
                fill="#007ACC"
              />
            </g>
            <mask
              id="mask2_134_221"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="40"
              height="40"
            >
              <path
                d="M28.2544 39.6883C28.5714 39.8119 28.9105 39.869 29.2506 39.8559C29.5906 39.8428 29.9243 39.7599 30.2309 39.6123L38.4342 35.6652C38.8567 35.4617 39.2132 35.1432 39.4627 34.7461C39.7121 34.3491 39.8444 33.8897 39.8444 33.4208V6.65578C39.8444 6.18689 39.7121 5.72751 39.4627 5.3305C39.2132 4.93348 38.8567 4.61495 38.4342 4.41156L30.2311 0.464216C29.7676 0.24117 29.2462 0.16773 28.7391 0.254062C28.232 0.340394 27.7642 0.582228 27.4006 0.946091L11.6964 15.2734L4.85579 10.0809C4.54723 9.84671 4.1664 9.72789 3.77939 9.7451C3.39238 9.76231 3.0236 9.91446 2.73704 10.1752L0.543136 12.1709C-0.180301 12.8289 -0.181082 13.967 0.541261 14.6261L6.47361 20.0383L0.541261 25.4503C-0.181082 26.1095 -0.180301 27.2475 0.543136 27.9056L2.73704 29.9013C3.02358 30.162 3.39235 30.3141 3.77936 30.3314C4.16637 30.3486 4.54721 30.2298 4.85579 29.9956L11.6964 24.803L27.4006 39.1303C27.6434 39.3735 27.9342 39.5635 28.2544 39.6883ZM29.8894 10.9931L17.9734 20.0383L29.8894 29.0833V10.9931Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask2_134_221)">
              <path
                d="M30.2231 39.6147C29.7594 39.8378 29.2377 39.9113 28.7304 39.825C28.2231 39.7387 27.755 39.4969 27.3911 39.133C28.31 40.0517 29.8814 39.401 29.8814 38.1013V1.98017C29.8814 0.680487 28.31 0.0297056 27.3911 0.948612C27.755 0.584718 28.223 0.342886 28.7304 0.25656C29.2377 0.170234 29.7594 0.243678 30.2231 0.466737L38.4314 4.41408C38.8541 4.61733 39.2107 4.93581 39.4603 5.33284C39.71 5.72987 39.8424 6.18932 39.8424 6.6583V33.4235C39.8424 34.3805 39.2939 35.253 38.4314 35.6677L30.2231 39.6147Z"
                fill="#1F9CF0"
              />
            </g>
            <mask
              id="mask3_134_221"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="40"
              height="40"
            >
              <path
                d="M28.2544 39.6883C28.5714 39.8119 28.9105 39.869 29.2506 39.8559C29.5906 39.8428 29.9243 39.7599 30.2309 39.6123L38.4342 35.6652C38.8567 35.4617 39.2132 35.1432 39.4627 34.7461C39.7121 34.3491 39.8444 33.8897 39.8444 33.4208V6.65578C39.8444 6.18689 39.7121 5.72751 39.4627 5.3305C39.2132 4.93348 38.8567 4.61495 38.4342 4.41156L30.2311 0.464216C29.7676 0.24117 29.2462 0.16773 28.7391 0.254062C28.232 0.340394 27.7642 0.582228 27.4006 0.946091L11.6964 15.2734L4.85579 10.0809C4.54723 9.84671 4.1664 9.72789 3.77939 9.7451C3.39238 9.76231 3.0236 9.91446 2.73704 10.1752L0.543136 12.1709C-0.180301 12.8289 -0.181082 13.967 0.541261 14.6261L6.47361 20.0383L0.541261 25.4503C-0.181082 26.1095 -0.180301 27.2475 0.543136 27.9056L2.73704 29.9013C3.02358 30.162 3.39235 30.3141 3.77936 30.3314C4.16637 30.3486 4.54721 30.2298 4.85579 29.9956L11.6964 24.803L27.4006 39.1303C27.6434 39.3735 27.9342 39.5635 28.2544 39.6883ZM29.8894 10.9931L17.9734 20.0383L29.8894 29.0833V10.9931Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask3_134_221)">
              <path
                d="M28.2544 39.6883C28.5714 39.8119 28.9105 39.8689 29.2505 39.8559C29.5906 39.8428 29.9243 39.7599 30.2309 39.6123L38.434 35.665C38.8566 35.4616 39.2131 35.1431 39.4626 34.7461C39.7121 34.3491 39.8444 33.8897 39.8444 33.4208V6.65576C39.8444 6.18687 39.7121 5.7275 39.4626 5.33048C39.2132 4.93346 38.8567 4.61494 38.4342 4.41154L30.2308 0.464043C29.7673 0.241033 29.2459 0.167612 28.7388 0.253944C28.2317 0.340275 27.764 0.582089 27.4005 0.945918L11.6964 15.2734L4.85576 10.0809C4.5472 9.84669 4.16637 9.72787 3.77936 9.74508C3.39235 9.76229 3.02357 9.91444 2.73701 10.1751L0.543106 12.1709C-0.180332 12.8289 -0.181113 13.967 0.541231 14.6261L6.47357 20.0383L0.541231 25.4503C-0.181113 26.1095 -0.180332 27.2475 0.543106 27.9056L2.73701 29.9012C3.02355 30.1619 3.39232 30.3141 3.77933 30.3314C4.16634 30.3486 4.54718 30.2298 4.85576 29.9956L11.6964 24.8029L27.4005 39.1303C27.6433 39.3735 27.9341 39.5635 28.2544 39.6883ZM29.8894 10.993L17.9734 20.0383L29.8894 29.0833V10.993Z"
                fill="url(#paint0_linear_134_221)"
                fill-opacity="0.25"
              />
            </g>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_134_221"
              x1="1992.22"
              y1="0.21875"
              x2="1992.22"
              y2="3964.11"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
            <clipPath id="clip0_134_221">
              <rect
                width="40"
                height="39.6875"
                fill="white"
                transform="translate(0 0.21875)"
              />
            </clipPath>
          </defs>
        </svg>
      );
    case "capcut":
      return (
        <svg
          width="40"
          height="41"
          viewBox="0 0 40 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 20.0625L10 24.2292C10 26.1925 10 26.3425 10.5867 26.9525C11.1717 27.5625 12.115 27.5625 14 27.5625H22.0017C23.8883 27.5625 24.8317 27.5625 25.4183 26.9525C26.005 26.3425 26.0033 26.1925 26.0033 24.2292M18 20.0625L30 13.8125M18 20.0625L10 15.8958C10 13.9308 10 13.7825 10.5867 13.1725C11.1717 12.5625 12.115 12.5625 14 12.5625H22.0017C23.8883 12.5625 24.8317 12.5625 25.4183 13.1725C26.005 13.7825 26.0033 13.9308 26.0033 15.8958M18 20.0625L30 26.3125"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.16333 20.0625C4.16333 12.5992 4.16333 8.86585 6.48166 6.54752C8.8 4.22919 12.5317 4.22919 19.9967 4.22919C27.46 4.22919 31.1917 4.22919 33.5117 6.54752C35.8283 8.86585 35.8283 12.5975 35.8283 20.0625C35.8283 27.5259 35.8283 31.2592 33.5117 33.5775C31.1917 35.8959 27.4617 35.8959 19.995 35.8959C12.5317 35.8959 8.8 35.8959 6.48166 33.5775C4.16333 31.2592 4.16333 27.5275 4.16333 20.0625Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "notion":
      return (
        <svg
          width="40"
          height="41"
          viewBox="0 0 40 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.1733 9.91249C11.1467 10.7025 11.51 10.6425 13.3367 10.5208L30.5567 9.48749C30.9233 9.48749 30.6183 9.12082 30.4967 9.06082L27.6367 6.99416C27.0883 6.56916 26.3583 6.08082 24.96 6.20249L8.285 7.41916C7.67833 7.47916 7.55667 7.78415 7.79833 8.02749L10.1733 9.91249ZM11.2067 13.9258V32.0425C11.2067 33.0175 11.6933 33.3808 12.79 33.3208L31.7133 32.2258C32.8083 32.1658 32.93 31.4958 32.93 30.7042V12.7092C32.93 11.9192 32.6267 11.4925 31.9567 11.5542L12.18 12.7092C11.45 12.7692 11.2067 13.1342 11.2067 13.9258ZM29.89 14.8975C30.01 15.4442 29.89 15.9925 29.34 16.0542L28.4283 16.2358V29.6108C27.6367 30.0375 26.9067 30.2792 26.2983 30.2792C25.325 30.2792 25.0817 29.9758 24.3517 29.0642L18.3867 19.7008V28.7608L20.275 29.1858C20.275 29.1858 20.275 30.2792 18.7517 30.2792L14.5533 30.5225C14.4317 30.2792 14.5533 29.6725 14.98 29.5508L16.075 29.2475V17.2692L14.5533 17.1475C14.4317 16.5992 14.7367 15.8092 15.5883 15.7475L20.0917 15.4442L26.2983 24.9308V16.5392L24.715 16.3575C24.595 15.6875 25.0817 15.2025 25.69 15.1408L29.89 14.8975ZM6.885 5.77749L24.2283 4.50082C26.3567 4.31749 26.905 4.44082 28.245 5.41249L33.78 9.30416C34.6933 9.97249 34.9983 10.1542 34.9983 10.8842V32.2258C34.9983 33.5642 34.5117 34.3542 32.8083 34.4758L12.6667 35.6925C11.3883 35.7525 10.78 35.5708 10.11 34.7192L6.03333 29.4292C5.30333 28.4558 5 27.7275 5 26.8742V7.90416C5 6.81082 5.485 5.89916 6.885 5.77749Z"
            fill="black"
          />
        </svg>
      );
    case "trello":
      return (
        <svg
          width="40"
          height="41"
          viewBox="0 0 40 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_134_280)">
            <path
              d="M36.0938 0.0625H3.90625C1.74889 0.0625 0 1.81139 0 3.96875V36.1562C0 38.3136 1.74889 40.0625 3.90625 40.0625H36.0938C38.2511 40.0625 40 38.3136 40 36.1562V3.96875C40 1.81139 38.2511 0.0625 36.0938 0.0625Z"
              fill="url(#paint0_linear_134_280)"
            />
            <path
              d="M32.925 5.26245H24.475C23.4394 5.26245 22.6 6.10192 22.6 7.13745V20.8875C22.6 21.923 23.4394 22.7625 24.475 22.7625H32.925C33.9605 22.7625 34.8 21.923 34.8 20.8875V7.13745C34.8 6.10192 33.9605 5.26245 32.925 5.26245Z"
              fill="white"
            />
            <path
              d="M15.525 5.26245H7.07501C6.03948 5.26245 5.20001 6.10192 5.20001 7.13745V30.8875C5.20001 31.923 6.03948 32.7625 7.07501 32.7625H15.525C16.5605 32.7625 17.4 31.923 17.4 30.8875V7.13745C17.4 6.10192 16.5605 5.26245 15.525 5.26245Z"
              fill="white"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_134_280"
              x1="2000"
              y1="0.0625"
              x2="2000"
              y2="4000.06"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0091E6" />
              <stop offset="1" stop-color="#0079BF" />
            </linearGradient>
            <clipPath id="clip0_134_280">
              <rect
                width="40"
                height="40"
                fill="white"
                transform="translate(0 0.0625)"
              />
            </clipPath>
          </defs>
        </svg>
      );
    default:
      return null;
  }
};

export default Icon;
