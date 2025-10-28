import React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

interface DobIconProps {
  color?: string;
  width?: number;
  height?: number;
  opacity?: number;
}

const DobIcon: React.FC<DobIconProps> = ({
  color = "rgba(34,63,97,1)",
  width = 24,
  height = 24,
  opacity = 0.56,
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    opacity={opacity}
  >
    <G clipPath="url(#clip0_630_1105)">
      <Path
        d="M21.3438 4.09375H2.65625C1.86234 4.09375 1.21875 4.73734 1.21875 5.53125V21.3438C1.21875 22.1376 1.86234 22.7812 2.65625 22.7812H21.3438C22.1376 22.7812 22.7812 22.1376 22.7812 21.3438V5.53125C22.7812 4.73734 22.1376 4.09375 21.3438 4.09375Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.21875 9.84375H22.7812"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.96875 6.25V1.21875"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.0312 6.25V1.21875"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.89062 13.4375C6.08911 13.4375 6.25 13.5984 6.25 13.7969C6.25 13.9953 6.08911 14.1562 5.89062 14.1562C5.69214 14.1562 5.53125 13.9953 5.53125 13.7969C5.53125 13.5984 5.69214 13.4375 5.89062 13.4375Z"
        stroke={color}
      />
      <Path
        d="M5.89062 18.4688C6.08911 18.4688 6.25 18.6297 6.25 18.8281C6.25 19.0266 6.08911 19.1875 5.89062 19.1875C5.69214 19.1875 5.53125 19.0266 5.53125 18.8281C5.53125 18.6297 5.69214 18.4688 5.89062 18.4688Z"
        stroke={color}
      />
      <Path
        d="M12 13.4375C12.1985 13.4375 12.3594 13.5984 12.3594 13.7969C12.3594 13.9953 12.1985 14.1562 12 14.1562C11.8015 14.1562 11.6406 13.9953 11.6406 13.7969C11.6406 13.5984 11.8015 13.4375 12 13.4375Z"
        stroke={color}
      />
      <Path
        d="M12 18.4688C12.1985 18.4688 12.3594 18.6297 12.3594 18.8281C12.3594 19.0266 12.1985 19.1875 12 19.1875C11.8015 19.1875 11.6406 19.0266 11.6406 18.8281C11.6406 18.6297 11.8015 18.4688 12 18.4688Z"
        stroke={color}
      />
      <Path
        d="M18.1094 13.4375C18.3078 13.4375 18.4688 13.5984 18.4688 13.7969C18.4688 13.9953 18.3078 14.1562 18.1094 14.1562C17.9109 14.1562 17.75 13.9953 17.75 13.7969C17.75 13.5984 17.9109 13.4375 18.1094 13.4375Z"
        stroke={color}
      />
      <Path
        d="M18.1094 18.4688C18.3078 18.4688 18.4688 18.6297 18.4688 18.8281C18.4688 19.0266 18.3078 19.1875 18.1094 19.1875C17.9109 19.1875 17.75 19.0266 17.75 18.8281C17.75 18.6297 17.9109 18.4688 18.1094 18.4688Z"
        stroke={color}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_630_1105">
        <Rect width="24" height="24" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default DobIcon;