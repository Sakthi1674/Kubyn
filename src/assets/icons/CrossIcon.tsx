import * as React from "react";
import Svg, { Path } from "react-native-svg";

const CrossIcon = (props: any) => (
  <Svg
    width={12}
    height={12}
    viewBox="0 0 10 10"
    fill="none"
    {...props}
  >
    <Path
      d="M1 1L5 5M5 5L9 9M5 5L9 1M5 5L1 9"
      stroke="#223F61"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

export default CrossIcon;