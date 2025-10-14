import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface ArrowDownProps {
  width?: number;
  height?: number;
  color?: string;
}

const ArrowDown: React.FC<ArrowDownProps> = ({
  width = 8,
  height = 5,
  color = '#223F61',
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 8 5"
      fill="none"
    >
      <Path
        d="M0.666016 0.666992L3.99935 4.00033L7.33268 0.666992"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ArrowDown;