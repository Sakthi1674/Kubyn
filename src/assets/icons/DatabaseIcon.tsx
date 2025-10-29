import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const DatabaseIcon = ({ width = 24, height = 24, stroke = "black", ...props }: SvgProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M7 7.5C9.76142 7.5 12 6.38071 12 5C12 3.61929 9.76142 2.5 7 2.5C4.23858 2.5 2 3.61929 2 5C2 6.38071 4.23858 7.5 7 7.5Z"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 5V8.5C2 9.8805 4.2385 11 7 11C9.7615 11 12 9.8805 12 8.5V5"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 8.5V12C2 13.3805 4.2385 14.5 7 14.5C9.7615 14.5 12 13.3805 12 12V8.5"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 12V15.5C2 16.8805 4.2385 18 7 18C9.7615 18 12 16.8805 12 15.5V12"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 15.5V19C2 20.3805 4.2385 21.5 7 21.5C9.7615 21.5 12 20.3805 12 19V15.5"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17 14.5C19.7614 14.5 22 13.3807 22 12C22 10.6193 19.7614 9.5 17 9.5C14.2386 9.5 12 10.6193 12 12C12 13.3807 14.2386 14.5 17 14.5Z"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 12V15.5C12 16.8805 14.2385 18 17 18C19.7615 18 22 16.8805 22 15.5V12"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 15.5V19C12 20.3805 14.2385 21.5 17 21.5C19.7615 21.5 22 20.3805 22 19V15.5"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default DatabaseIcon;
