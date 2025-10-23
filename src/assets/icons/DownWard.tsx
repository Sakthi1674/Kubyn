import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

// Props type for TypeScript
interface UpWardProps extends SvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const DownWard: React.FC<UpWardProps> = ({
  width = 18,
  height = 10,
  color = "#FBFDFF",
  ...props
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 18 10"
    fill="none"
    {...props} // spread props for flexibility
  >
    <Path
      d="M15.88 0L17.2933 1.41467L9.59067 9.12C9.46724 9.24421 9.32047 9.34278 9.15881 9.41005C8.99714 9.47732 8.82377 9.51194 8.64867 9.51194C8.47357 9.51194 8.30019 9.47732 8.13853 9.41005C7.97686 9.34278 7.83009 9.24421 7.70667 9.12L0 1.41467L1.41333 0.00134146L8.64667 7.23334L15.88 0Z"
      fill={color}
    />
  </Svg>
);

export default DownWard;
