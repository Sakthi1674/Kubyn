import * as React from "react";
import Svg, { Path } from "react-native-svg";

const PlusIcon = () => (
  <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
    <Path
      d="M9 17V9M9 9V1M9 9H17M9 9H1"
      stroke="#FBFDFF"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

export default PlusIcon;
