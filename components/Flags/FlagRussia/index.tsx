import * as React from "react"
import { SVGProps } from "react"

const FlagRussia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 25h64v14H0V25Z" fill="#1B75BB" />
    <path
      d="M54 10H10C3.373 10 0 14.925 0 21v4h64v-4c0-6.075-3.373-11-10-11Z"
      fill="#E6E7E8"
    />
    <path
      d="M0 43c0 6.075 3.373 11 10 11h44c6.627 0 10-4.925 10-11v-4H0v4Z"
      fill="#EC1C24"
    />
  </svg>
)

export default FlagRussia
