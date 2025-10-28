import React from "react";
import Svg, { Path } from "react-native-svg";

type LeftArrowProps = {
  width?: number;
  height?: number;
  color?: string;
};

const LeftWard: React.FC<LeftArrowProps> = ({
  width = 10,
  height = 18,
  color = "#FBFDFF",
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 10 18"
    fill="none"
  >
    <Path
      d="M9.51193 1.41346L8.09727 0.000123978L0.391934 7.70279C0.267728 7.82621 0.169156 7.97298 0.101892 8.13465C0.0346284 8.29632 0 8.46969 0 8.64479C0 8.81989 0.0346284 8.99326 0.101892 9.15493C0.169156 9.3166 0.267728 9.46337 0.391934 9.58679L8.09727 17.2935L9.5106 15.8801L2.2786 8.64679L9.51193 1.41346Z"
      fill={color}
    />
  </Svg>
);

export default LeftWard;
