import { SVGProps } from "react"

const FlagFrance = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M22 10h20v44H22V10Z" fill="#E6E7E8" />
    <path
      d="M10 10C3.373 10 0 14.925 0 21v22c0 6.075 3.373 11 10 11h12V10H10Z"
      fill="#1B75BB"
    />
    <path
      d="M52 10H42v44h12c6.627 0 10-4.925 10-11V21c0-6.076-.042-11-12-11Z"
      fill="#EC1C24"
    />
  </svg>
)

export default FlagFrance
