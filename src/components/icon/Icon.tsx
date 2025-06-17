import React from "react";

type IconName = "email" | "password";

type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
};

const IconComponent: React.FC<IconProps> = ({
  name,
  size = 16,
  color = "#565656",
}) => {
  // Define the icons with a type
  const icons: Record<IconName, React.JSX.Element> = {
    email: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="22"
        viewBox="0 0 25 22"
        fill="none"
      >
        <path
          d="M6 7.25H18.5M6 12.25H12.25M23.5 21L19.3446 18.9222C19.0296 18.7647 18.8721 18.686 18.707 18.6305C18.5605 18.5813 18.4096 18.5456 18.2565 18.5241C18.084 18.5 17.9079 18.5 17.5558 18.5H5C3.59986 18.5 2.8998 18.5 2.36503 18.2275C1.89461 17.9879 1.51216 17.6054 1.27249 17.135C1 16.6003 1 15.9001 1 14.5V5C1 3.59986 1 2.8998 1.27249 2.36503C1.51216 1.89461 1.89461 1.51216 2.36503 1.27249C2.8998 1 3.59987 1 5 1H19.5C20.9001 1 21.6003 1 22.135 1.27249C22.6054 1.51216 22.9879 1.89461 23.2275 2.36503C23.5 2.8998 23.5 3.59987 23.5 5V21Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    password: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 50.000000 50.000000"
      >
        <g
          transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
          fill={color}
          stroke="none"
        >
          <path d="M190 463 c-42 -22 -70 -73 -70 -130 0 -40 -2 -42 -32 -45 l-33 -3 0 -140 0 -140 195 0 195 0 0 140 0 140 -32 3 c-31 3 -33 5 -33 43 0 113 -97 180 -190 132z m110 -18 c37 -19 60 -63 60 -115 l0 -40 -110 0 -110 0 0 40 c0 99 80 156 160 115z m130 -300 l0 -125 -180 0 -180 0 0 125 0 125 180 0 180 0 0 -125z" />
          <path d="M114 149 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16 -11z" />
          <path d="M194 149 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16 -11z" />
          <path d="M274 149 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16 -11z" />
          <path d="M354 149 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16 -11z" />
        </g>
      </svg>
    ),

    //Add more icons
  };

  return (
    <span
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`flex items-center justify-center`}
    >
      {icons[name]}
    </span>
  );
};

export default IconComponent;
