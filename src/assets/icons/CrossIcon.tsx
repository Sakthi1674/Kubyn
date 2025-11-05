import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface CrossIconProps {
  color?: string; // ✅ allows theme to control stroke color
  size?: number;
}

const CrossIcon: React.FC<CrossIconProps> = ({ color = "#223F61", size = 12, ...props }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 10 10"
    fill="none"
    {...props}
  >
    <Path
      d="M1 1L5 5M5 5L9 9M5 5L9 1M5 5L1 9"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

export default CrossIcon;
