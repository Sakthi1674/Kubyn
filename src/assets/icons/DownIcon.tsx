import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface DownIconProps extends SvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const DownIcon: React.FC<DownIconProps> = ({
  width = 31,
  height = 31,
  color = "#E74C3C",
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
      d="M24.541 15.4998L15.4994 24.5415M15.4994 24.5415L6.45769 15.4998M15.4994 24.5415V6.45818"
      stroke={color}
      strokeWidth={1.33333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default DownIcon;
