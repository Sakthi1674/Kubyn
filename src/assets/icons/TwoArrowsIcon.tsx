import React from "react";
import Svg, { Path } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

const TwoArrowsIcon: React.FC<IconProps> = ({
  width = 32,
  height = 32,
  color = "#223F61",
}) => (
  <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
    <Path
      d="M19 28H28V19H26V24.586L17.414 16L26 7.414V13H28V4L19 4V6H24.586L15.586 15L6 15V4H4V28H6V17H15.586L24.586 26H19V28Z"
      fill={color}
    />
  </Svg>
);

export default TwoArrowsIcon;
