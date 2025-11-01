import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface UpIconProps extends SvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const UpIcon: React.FC<UpIconProps> = ({
  width = 31,
  height = 31,
  color = "#54B00C",
  ...props
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 31 31"
    fill="none"
    {...props}
  >
    <Path
      d="M6.45898 15.5002L15.5006 6.4585M15.5006 6.4585L24.5423 15.5002M15.5006 6.4585V24.5418"
      stroke={color}
      strokeWidth={1.33333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default UpIcon;
