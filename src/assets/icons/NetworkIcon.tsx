import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const NetworkIcon = ({
  width = 24,
  height = 24,
  stroke = "black",
  ...props
}: SvgProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M2.75 2.75V20.25C2.75 20.5152 2.85536 20.7696 3.04289 20.9571C3.23043 21.1446 3.48478 21.25 3.75 21.25H21.25M2.75 18H4.25M2.75 15H4.25M2.75 12H4.25M2.75 9H4.25M2.75 6H4.25"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.5 7.75C20.4665 7.75 21.25 6.9665 21.25 6C21.25 5.0335 20.4665 4.25 19.5 4.25C18.5335 4.25 17.75 5.0335 17.75 6C17.75 6.9665 18.5335 7.75 19.5 7.75Z"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.6406 14.29C17.6071 14.29 18.3906 13.5065 18.3906 12.54C18.3906 11.5735 17.6071 10.79 16.6406 10.79C15.6741 10.79 14.8906 11.5735 14.8906 12.54C14.8906 13.5065 15.6741 14.29 16.6406 14.29Z"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.9258 10.75C11.8923 10.75 12.6758 9.9665 12.6758 9C12.6758 8.0335 11.8923 7.25 10.9258 7.25C9.95928 7.25 9.17578 8.0335 9.17578 9C9.17578 9.9665 9.95928 10.75 10.9258 10.75Z"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.59961 18.25C8.56611 18.25 9.34961 17.4665 9.34961 16.5C9.34961 15.5335 8.56611 14.75 7.59961 14.75C6.63311 14.75 5.84961 15.5335 5.84961 16.5C5.84961 17.4665 6.63311 18.25 7.59961 18.25Z"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.31055 14.9L10.2155 10.6M15.1555 11.62L12.4105 9.91998M18.8055 7.60498L17.3655 10.95"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default NetworkIcon;