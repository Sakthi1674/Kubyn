import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ExclamationIcon = (props: any) => (
  <Svg
    width={23}
    height={23}
    viewBox="0 0 7 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M4.406 0.5H2.594C1.39031 0.5 0.432541 1.36464 0.503727 2.38315L1.55857 17.9539C1.61681 18.8186 2.46457 19.5 3.5 19.5C4.53543 19.5 5.36377 18.8186 5.44143 17.9539L6.49627 2.38315C6.56746 1.36464 5.60969 0.5 4.406 0.5Z"
      stroke="#FBFDFF"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M0.5 25C0.5 25.663 0.81607 26.2989 1.37868 26.7678C1.94129 27.2366 2.70435 27.5 3.5 27.5C4.29565 27.5 5.05871 27.2366 5.62132 26.7678C6.18393 26.2989 6.5 25.663 6.5 25C6.5 24.337 6.18393 23.7011 5.62132 23.2322C5.05871 22.7634 4.29565 22.5 3.5 22.5C2.70435 22.5 1.94129 22.7634 1.37868 23.2322C0.81607 23.7011 0.5 24.337 0.5 25Z"
      stroke="#FBFDFF"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ExclamationIcon;