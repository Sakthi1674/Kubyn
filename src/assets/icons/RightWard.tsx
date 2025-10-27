import React from "react";
import Svg, { Path } from "react-native-svg";

type RightArrowProps = {
  width?: number;
  height?: number;
  color?: string;
};

const RightWard: React.FC<RightArrowProps> = ({
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
      d="M-0.000214577 1.41346L1.41445 0.000123978L9.11978 7.70279C9.24399 7.82621 9.34256 7.97298 9.40983 8.13465C9.47709 8.29632 9.51172 8.46969 9.51172 8.64479C9.51172 8.81989 9.47709 8.99326 9.40983 9.15493C9.34256 9.3166 9.24399 9.46337 9.11978 9.58679L1.41445 17.2935L0.00111866 15.8801L7.23312 8.64679L-0.000214577 1.41346Z"
      fill={color}
    />
  </Svg>
);

export default RightWard;
