import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

interface MicIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const MicIcon: React.FC<MicIconProps> = ({
  width = 40,
  height = 40,
  color = '#223F61',
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
    >
      <Circle cx="20" cy="20" r="20" fill="#FBFDFF" />
      <Path
        d="M22.9154 14.5837C22.9154 12.9728 21.6095 11.667 19.9987 11.667C18.3879 11.667 17.082 12.9728 17.082 14.5837V20.0003C17.082 21.6112 18.3879 22.917 19.9987 22.917C21.6095 22.917 22.9154 21.6112 22.9154 20.0003V14.5837Z"
        stroke={color}
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Path
        d="M13.75 19.584C13.75 23.0357 16.5483 25.834 20 25.834M20 25.834C23.4517 25.834 26.25 23.0357 26.25 19.584M20 25.834V28.334"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default MicIcon;