import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

// Props type for TS
interface BackWardProps extends SvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const BackWard: React.FC<BackWardProps> = ({
  width = 11,
  height = 16,
  color = "#000",
  ...props
}) => (
  <Svg width={width} height={height} viewBox="0 0 11 16" fill="none" {...props}>
    <Path
      d="M8.66602 16L0.666016 8L8.66602 0L10.5327 1.86667L4.39935 8L10.5327 14.1333L8.66602 16Z"
      fill={color}
    />
  </Svg>
);

export default BackWard;
