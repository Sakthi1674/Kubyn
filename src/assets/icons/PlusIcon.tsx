import React from "react";
import Svg, { Path } from "react-native-svg";

interface PlusIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const PlusIcon: React.FC<PlusIconProps> = ({
  width = 40,
  height = 40,
  color = "#223F61",
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        d="M1 8H15M8 15V1"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default PlusIcon;
