import React from "react";
import Svg, { G, Path } from "react-native-svg";

interface Props {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const ReportIcon: React.FC<Props> = ({
  width = 24,
  height = 24,
  color = "#223F61",
  opacity = 0.4,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G opacity={opacity}>
        <Path
          d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M22 6V2H18"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M17 7L22 2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9.375 8.8125H14.625M9.375 11H14.625M13.0938 16.6875L9.375 13.1875H10.6875C13.6043 13.1875 13.6043 8.8125 10.6875 8.8125"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

export default ReportIcon;