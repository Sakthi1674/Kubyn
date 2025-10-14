import React from "react";
import Svg, { G, Path, SvgProps } from "react-native-svg";

interface EditIconProps extends SvgProps {
  width?: number;
  height?: number;
  stroke?: string;
  opacity?: number;
}

const EditIcon: React.FC<EditIconProps> = ({
  width = 16,
  height = 16,
  stroke = "white",
  opacity = 0.84,
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <G opacity={opacity}>
        <Path
          d="M2.66602 14.0002H13.3327M3.77668 8.79156C3.49243 9.07645 3.33275 9.46244 3.33268 9.86489V12.0002H5.48135C5.88402 12.0002 6.27002 11.8402 6.55468 11.5549L12.888 5.21822C13.1722 4.93329 13.3317 4.5473 13.3317 4.14489C13.3317 3.74248 13.1722 3.35649 12.888 3.07156L12.2627 2.44489C12.1217 2.30379 11.9542 2.19187 11.7699 2.11554C11.5856 2.0392 11.388 1.99994 11.1885 2C10.9891 2.00006 10.7915 2.03944 10.6073 2.1159C10.423 2.19235 10.2556 2.30437 10.1147 2.44556L3.77668 8.79156Z"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

export default EditIcon;