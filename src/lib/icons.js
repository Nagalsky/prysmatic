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
