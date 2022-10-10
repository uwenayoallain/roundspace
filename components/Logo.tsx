export default function Logo(props: any) {
  const { className, ...rest } = props;
  return (
    <svg
      width='48'
      height='48'
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}>
      <path
        d='M5.364 26.324C4.452 26.324 3.756 26.072 3.276 25.568C2.796 25.064 2.556 24.356 2.556 23.444V3.46399C2.556 2.528 2.796 1.82 3.276 1.33999C3.78 0.859995 4.488 0.619995 5.4 0.619995H14.148C16.98 0.619995 19.164 1.304 20.7 2.672C22.236 4.04 23.004 5.948 23.004 8.396C23.004 9.98 22.656 11.348 21.96 12.5C21.264 13.652 20.256 14.54 18.936 15.164C17.64 15.788 16.044 16.1 14.148 16.1L14.436 15.488H15.912C16.92 15.488 17.796 15.74 18.54 16.244C19.308 16.724 19.968 17.468 20.52 18.476L22.752 22.616C23.088 23.216 23.244 23.804 23.22 24.38C23.196 24.956 22.98 25.424 22.572 25.784C22.164 26.144 21.564 26.324 20.772 26.324C19.98 26.324 19.332 26.156 18.828 25.82C18.348 25.484 17.916 24.968 17.532 24.272L14.076 17.9C13.716 17.228 13.272 16.772 12.744 16.532C12.24 16.292 11.616 16.172 10.872 16.172H8.136V23.444C8.136 24.356 7.896 25.064 7.416 25.568C6.96 26.072 6.276 26.324 5.364 26.324ZM8.136 12.14H13.14C14.628 12.14 15.744 11.84 16.488 11.24C17.256 10.64 17.64 9.73999 17.64 8.54C17.64 7.36399 17.256 6.476 16.488 5.876C15.744 5.27599 14.628 4.97599 13.14 4.97599H8.136V12.14Z'
        fill={`${className !== "light" ? "#000" : "#FFF"}`}
      />
      <path
        d='M36.1574 36.8053C37.1649 36.8371 38.199 36.7857 39.2598 36.6511C40.2958 36.5397 41.2981 36.3552 42.2667 36.0976C43.2113 35.8393 44.0623 35.5059 44.8195 35.0976C45.3564 34.8264 45.7399 34.4663 45.9702 34.0173C46.2012 33.5444 46.3003 33.0673 46.2674 32.586C46.2106 32.104 46.0439 31.6785 45.7674 31.3096C45.4677 30.916 45.0915 30.664 44.6387 30.5536C44.1627 30.4186 43.6324 30.4859 43.0476 30.7556C42.0466 31.2763 40.9663 31.6504 39.8066 31.8779C38.6228 32.1047 37.4552 32.2 36.3038 32.1636C34.5527 32.1084 33.3136 31.8052 32.5866 31.254C31.8604 30.6788 31.5102 29.9834 31.5359 29.1678C31.5578 28.4722 31.8391 27.9288 32.3797 27.5376C32.9203 27.1465 33.8548 26.8278 35.1833 26.5815L39.2765 25.8462C41.5945 25.4391 43.3353 24.6776 44.4991 23.5618C45.6396 22.4212 46.2398 20.9033 46.2996 19.0083C46.3374 17.8089 46.12 16.7095 45.6472 15.7101C45.1745 14.7107 44.4937 13.8368 43.6049 13.0884C42.716 12.34 41.654 11.7542 40.4187 11.331C39.1595 10.9071 37.7742 10.6713 36.263 10.6236C34.9196 10.5813 33.595 10.7076 32.289 11.0025C30.9838 11.2735 29.8297 11.7053 28.8265 12.298C28.3376 12.5707 28.0021 12.9323 27.8198 13.3828C27.6142 13.8085 27.5403 14.2504 27.5978 14.7085C27.6322 15.1418 27.8 15.5312 28.1013 15.8769C28.3785 16.2218 28.7435 16.4494 29.1963 16.5598C29.649 16.6701 30.2041 16.5796 30.8617 16.2882C31.6661 15.9053 32.5152 15.632 33.4088 15.4681C34.3024 15.3042 35.217 15.237 36.1525 15.2665C37.16 15.2983 38.0194 15.4574 38.7307 15.744C39.4181 16.0298 39.9461 16.4187 40.3147 16.9105C40.6594 17.4016 40.8219 17.959 40.8023 18.5827C40.7803 19.2784 40.5107 19.8342 39.9933 20.25C39.4759 20.6659 38.5894 20.9862 37.3337 21.2107L33.2405 21.946C30.8737 22.3756 29.0969 23.1359 27.9099 24.227C26.7236 25.2942 26.1018 26.7393 26.0443 28.5624C26.0064 29.7618 26.2119 30.8608 26.6606 31.8594C27.1101 32.8341 27.7796 33.6836 28.6692 34.408C29.5588 35.1324 30.6333 35.7066 31.8925 36.1305C33.1526 36.5305 34.5742 36.7554 36.1574 36.8053Z'
        fill={`${className !== "light" ? "#000" : "#FFF"}`}
      />
      <rect
        y='41'
        width='48'
        height='5'
        fill={`${className !== "light" ? "#333333" : "#343434"}`}
      />
    </svg>
  );
}
