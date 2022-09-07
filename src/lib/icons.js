export function Dark({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  )
}
export function Light({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  )
}
export function ArrowRight({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  )
}

export function ArrowLeft({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
      />
    </svg>
  )
}
export function GitHub({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      className={className}
    >
      <path
        d="M19.2941 23.8995V20.6969C19.2941 19.7819 19.3882 19.4158 18.8235 18.8668C21.4588 18.5923 24 17.5858 24 13.3766C23.9989 12.2831 23.56 11.233 22.7765 10.4485C23.144 9.49869 23.1101 8.44609 22.6824 7.52042C22.6824 7.52042 21.6471 7.24591 19.3882 8.70996C17.475 8.22553 15.4661 8.22553 13.5529 8.70996C11.2941 7.24591 10.2588 7.52042 10.2588 7.52042C9.83104 8.44609 9.79721 9.49869 10.1647 10.4485C9.38113 11.233 8.94232 12.2831 8.94118 13.3766C8.94118 17.5858 11.4824 18.5923 14.1176 18.8668C13.5529 19.4158 13.5529 19.9649 13.6471 20.6969V23.8995M13.6471 22.0694C9.6 23.3505 9.6 19.7819 8 19.3243L13.6471 22.0694Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MobileMenuOpen({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 10C6.94772 10 6.5 10.4477 6.5 11C6.5 11.5523 6.94772 12 7.5 12V10ZM24.5 12C25.0523 12 25.5 11.5523 25.5 11C25.5 10.4477 25.0523 10 24.5 10V12ZM7.5 12H24.5V10H7.5V12Z"
        fill="#1B2022"
      />
      <path
        d="M7.5 20C6.94772 20 6.5 20.4477 6.5 21C6.5 21.5523 6.94772 22 7.5 22V20ZM24.5 22C25.0523 22 25.5 21.5523 25.5 21C25.5 20.4477 25.0523 20 24.5 20V22ZM7.5 22H24.5V20H7.5V22Z"
        fill="#1B2022"
      />
      <path
        d="M7.5 15C6.94772 15 6.5 15.4477 6.5 16C6.5 16.5523 6.94772 17 7.5 17V15ZM18.5 17C19.0523 17 19.5 16.5523 19.5 16C19.5 15.4477 19.0523 15 18.5 15V17ZM7.5 17H18.5V15H7.5V17Z"
        fill="#1B2022"
      />
    </svg>
  )
}

export function MobileMenuClose({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2423_155001)">
        <path
          d="M8.66699 8.66675L23.3337 23.3334M23.3337 8.66675L8.66699 23.3334"
          stroke="#1B2022"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export function TwitterCircle({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.983398" width="24" height="24" rx="12" fill="white" />
      <path
        d="M9.80408 19.3135C15.1261 19.3135 18.0361 14.9035 18.0361 11.0815C18.0361 10.9555 18.0361 10.8295 18.0301 10.7095C18.5941 10.3015 19.0861 9.79152 19.4761 9.20952C18.9601 9.43752 18.4021 9.59352 17.8141 9.66552C18.4141 9.30552 18.8701 8.74152 19.0861 8.06352C18.5281 8.39352 17.9101 8.63352 17.2501 8.76552C16.7221 8.20152 15.9721 7.85352 15.1381 7.85352C13.5421 7.85352 12.2461 9.14952 12.2461 10.7455C12.2461 10.9735 12.2701 11.1955 12.3241 11.4055C9.91808 11.2855 7.78808 10.1335 6.36008 8.38152C6.11408 8.80752 5.97008 9.30552 5.97008 9.83352C5.97008 10.8355 6.48008 11.7235 7.26008 12.2395C6.78608 12.2275 6.34208 12.0955 5.95208 11.8795C5.95208 11.8915 5.95208 11.9035 5.95208 11.9155C5.95208 13.3195 6.94808 14.4835 8.27408 14.7535C8.03408 14.8195 7.77608 14.8555 7.51208 14.8555C7.32608 14.8555 7.14608 14.8375 6.96608 14.8015C7.33208 15.9535 8.40008 16.7875 9.66608 16.8115C8.67608 17.5855 7.42808 18.0475 6.07208 18.0475C5.83808 18.0475 5.61008 18.0355 5.38208 18.0055C6.64808 18.8335 8.17208 19.3135 9.80408 19.3135Z"
        fill="#6540DA"
      />
    </svg>
  )
}

export function DiscordCircle({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.983398" width="24" height="24" rx="12" fill="white" />
      <path
        d="M17.822 7.478C16.7512 6.97154 15.603 6.5984 14.4024 6.38469C14.3806 6.38056 14.3587 6.39087 14.3475 6.41148C14.1998 6.68223 14.0362 7.03544 13.9217 7.31306C12.6304 7.11379 11.3457 7.11379 10.0809 7.31306C9.96635 7.02927 9.79684 6.68223 9.6485 6.41148C9.63724 6.39156 9.6154 6.38125 9.59353 6.38469C8.39363 6.59771 7.24539 6.97085 6.17395 7.478C6.16468 7.48212 6.15673 7.489 6.15145 7.49792C3.97347 10.8521 3.37683 14.1238 3.66952 17.3549C3.67085 17.3707 3.67946 17.3858 3.69138 17.3955C5.12834 18.4833 6.52029 19.1437 7.88639 19.5814C7.90826 19.5883 7.93142 19.58 7.94533 19.5615C8.26849 19.1066 8.55655 18.6269 8.80353 18.1225C8.81811 18.093 8.80419 18.0579 8.7744 18.0462C8.31749 17.8676 7.88242 17.6497 7.46391 17.4023C7.43081 17.3824 7.42816 17.3336 7.45861 17.3102C7.54668 17.2422 7.63477 17.1714 7.71887 17.1C7.73408 17.0869 7.75528 17.0842 7.77317 17.0924C10.5226 18.3864 13.4992 18.3864 16.2162 17.0924C16.2341 17.0835 16.2553 17.0862 16.2711 17.0993C16.3552 17.1707 16.4433 17.2422 16.5321 17.3102C16.5625 17.3336 16.5605 17.3824 16.5274 17.4023C16.1089 17.6545 15.6738 17.8676 15.2163 18.0455C15.1865 18.0572 15.1732 18.093 15.1878 18.1225C15.4401 18.6262 15.7281 19.1058 16.0453 19.5608C16.0586 19.58 16.0824 19.5883 16.1043 19.5814C17.477 19.1437 18.8689 18.4833 20.3059 17.3955C20.3185 17.3858 20.3264 17.3714 20.3278 17.3556C20.6781 13.62 19.741 10.3752 17.8438 7.49861C17.8392 7.489 17.8313 7.48212 17.822 7.478ZM9.21411 15.3875C8.38635 15.3875 7.70429 14.6041 7.70429 13.642C7.70429 12.68 8.37312 11.8966 9.21411 11.8966C10.0617 11.8966 10.7372 12.6869 10.7239 13.642C10.7239 14.6041 10.0551 15.3875 9.21411 15.3875ZM14.7964 15.3875C13.9687 15.3875 13.2866 14.6041 13.2866 13.642C13.2866 12.68 13.9554 11.8966 14.7964 11.8966C15.644 11.8966 16.3195 12.6869 16.3062 13.642C16.3062 14.6041 15.644 15.3875 14.7964 15.3875Z"
        fill="#6540DA"
      />
    </svg>
  )
}

export function GitHubCircle({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.983398" width="24" height="24" rx="12" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9973 5.18359C10.0475 5.18461 8.16168 5.87517 6.67698 7.13182C5.19229 8.38846 4.20556 10.1292 3.89321 12.0429C3.58087 13.9565 3.96329 15.9182 4.97209 17.5772C5.98089 19.2363 7.55029 20.4844 9.39966 21.0985C9.80766 21.1742 9.96134 20.9213 9.96134 20.7063C9.96134 20.4913 9.95318 19.8679 9.95046 19.1863C7.66565 19.6799 7.18285 18.2222 7.18285 18.2222C6.81021 17.2756 6.27165 17.0268 6.27165 17.0268C5.52636 16.521 6.32741 16.5305 6.32741 16.5305C7.15293 16.5886 7.58678 17.373 7.58678 17.373C8.31846 18.6211 9.50846 18.26 9.9763 18.0491C10.0497 17.5204 10.2633 17.1606 10.4985 16.9565C8.67342 16.7509 6.75581 16.0504 6.75581 12.9213C6.7445 12.1098 7.04736 11.325 7.60174 10.7293C7.51742 10.5237 7.23589 9.69341 7.68197 8.56562C7.68197 8.56562 8.3715 8.34655 9.94095 9.40268C11.2871 9.03664 12.7074 9.03664 14.0536 9.40268C15.6217 8.34655 16.3098 8.56562 16.3098 8.56562C16.7573 9.69071 16.4758 10.521 16.3915 10.7293C16.9476 11.3251 17.2511 12.1112 17.2387 12.924C17.2387 16.0599 15.317 16.7509 13.4892 16.9524C13.783 17.2066 14.0454 17.7029 14.0454 18.4656C14.0454 19.5582 14.0359 20.4372 14.0359 20.7063C14.0359 20.924 14.1842 21.1782 14.6003 21.0985C16.4499 20.4843 18.0195 19.236 19.0282 17.5767C20.037 15.9174 20.4192 13.9554 20.1065 12.0415C19.7938 10.1277 18.8066 8.38693 17.3214 7.13051C15.8363 5.87408 13.95 5.18396 12 5.18359H11.9973Z"
        fill="#6540DA"
      />
      <path
        d="M6.89423 16.9094C6.87655 16.95 6.81127 16.9621 6.75823 16.9337C6.70519 16.9053 6.66576 16.8526 6.6848 16.8107C6.70384 16.7688 6.76776 16.7579 6.8208 16.7863C6.87384 16.8147 6.91463 16.8688 6.89423 16.9094Z"
        fill="#6540DA"
      />
      <path
        d="M7.22728 17.2785C7.19912 17.2926 7.1669 17.2966 7.13613 17.2896C7.10537 17.2827 7.07798 17.2654 7.05864 17.2406C7.0056 17.1838 6.99472 17.1054 7.03552 17.0703C7.07632 17.0351 7.14976 17.0513 7.2028 17.1081C7.25584 17.1649 7.26808 17.2433 7.22728 17.2785Z"
        fill="#6540DA"
      />
      <path
        d="M7.55115 17.747C7.50083 17.7822 7.41515 17.747 7.36755 17.6767C7.35439 17.6641 7.34392 17.649 7.33677 17.6322C7.32962 17.6155 7.32593 17.5975 7.32593 17.5793C7.32593 17.5612 7.32962 17.5432 7.33677 17.5265C7.34392 17.5097 7.35439 17.4946 7.36755 17.482C7.41787 17.4482 7.50355 17.482 7.55115 17.551C7.59875 17.6199 7.60011 17.7119 7.55115 17.747Z"
        fill="#6540DA"
      />
      <path
        d="M7.99033 18.2021C7.94545 18.2521 7.85433 18.2386 7.77953 18.171C7.70473 18.1034 7.68704 18.0114 7.73192 17.9628C7.7768 17.9141 7.86792 17.9276 7.94544 17.9939C8.02296 18.0601 8.03793 18.1534 7.99033 18.2021Z"
        fill="#6540DA"
      />
      <path
        d="M8.60637 18.4664C8.58597 18.5299 8.49349 18.5583 8.40101 18.5313C8.30853 18.5042 8.24733 18.4285 8.26501 18.3636C8.28269 18.2987 8.37653 18.2689 8.47037 18.2987C8.56421 18.3284 8.62405 18.4001 8.60637 18.4664Z"
        fill="#6540DA"
      />
      <path
        d="M9.27826 18.5126C9.27826 18.5788 9.20211 18.6356 9.10419 18.637C9.00627 18.6383 8.92603 18.5842 8.92603 18.518C8.92603 18.4517 9.00218 18.3949 9.1001 18.3936C9.19802 18.3922 9.27826 18.445 9.27826 18.5126Z"
        fill="#6540DA"
      />
      <path
        d="M9.90388 18.4088C9.91612 18.475 9.84812 18.544 9.7502 18.5602C9.65228 18.5765 9.5666 18.5372 9.55436 18.4723C9.54212 18.4074 9.61284 18.3371 9.70804 18.3195C9.80324 18.302 9.89164 18.3425 9.90388 18.4088Z"
        fill="#6540DA"
      />
    </svg>
  )
}

export function Discord({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 17.2979C13.0523 17.2979 13.5 16.8501 13.5 16.2979C13.5 15.7456 13.0523 15.2979 12.5 15.2979C11.9477 15.2979 11.5 15.7456 11.5 16.2979C11.5 16.8501 11.9477 17.2979 12.5 17.2979Z"
        stroke="#1B2022"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 17.2979C19.0523 17.2979 19.5 16.8501 19.5 16.2979C19.5 15.7456 19.0523 15.2979 18.5 15.2979C17.9477 15.2979 17.5 15.7456 17.5 16.2979C17.5 16.8501 17.9477 17.2979 18.5 17.2979Z"
        stroke="#1B2022"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 11.7979C14.5 10.7979 16.5 10.7979 20 11.7979"
        stroke="#1B2022"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 20.7979C14 21.7979 17 21.7979 20.5 20.7979"
        stroke="#1B2022"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 21.2979C19 22.2979 20.5 24.2979 21 24.2979C22.5 24.2979 23.833 22.6309 24.5 21.2979C25.167 19.6309 25 15.4649 23 9.79785C21.543 8.78285 20 8.45785 18.5 8.29785L17.5 10.7979"
        stroke="#1B2022"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0001 21.2979C12.0001 22.2979 10.6441 24.2979 10.1681 24.2979C8.73911 24.2979 7.47011 22.6309 6.83511 21.2979C6.20011 19.6309 6.35911 15.4649 8.26311 9.79785C9.65111 8.78285 11.0451 8.45785 12.5001 8.29785L13.5001 10.7979"
        stroke="#1B2022"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
