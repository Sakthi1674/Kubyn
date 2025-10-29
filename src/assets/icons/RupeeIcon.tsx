import React from "react";
import Svg, { Path } from "react-native-svg";

interface RupeeIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const RupeeIcon: React.FC<RupeeIconProps> = ({
  width = 15,
  height = 21,
  color = "#223F61",
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 15 21"
      fill="none"
    >
      <Path
        d="M1 1H14M1 6.27778H14M10.2083 20L1 11.5556H4.25C11.4726 11.5556 11.4726 1 4.25 1"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default RupeeIcon;